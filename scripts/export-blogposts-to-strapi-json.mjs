import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = process.cwd();
const BLOG_POSTS_PATH = path.join(ROOT, 'data', 'blogPosts.js');
const TR_TRANSLATIONS_PATH = path.join(ROOT, 'data', 'i18n', 'blog', 'tr.json');
const EN_TRANSLATIONS_PATH = path.join(ROOT, 'data', 'i18n', 'blog', 'en.json');
const RO_TRANSLATIONS_PATH = path.join(ROOT, 'data', 'i18n', 'blog', 'ro.json');
const DEFAULT_OUTPUT_PATH = path.join(ROOT, 'data', 'exports', 'strapi-articles-import.json');

const SUPPORTED_LOCALES = ['tr', 'en', 'ro'];
const RICH_TEXT_COMPONENT_UID = 'shared.blocks-rich-text';

function parseArgs(argv) {
  const options = {
    output: DEFAULT_OUTPUT_PATH,
    cleanLegacy: false,
  };

  for (const arg of argv) {
    if (arg === '--clean-legacy') {
      options.cleanLegacy = true;
      continue;
    }

    if (arg.startsWith('--output=')) {
      const value = arg.slice('--output='.length).trim();
      if (value) {
        options.output = path.isAbsolute(value) ? value : path.join(ROOT, value);
      }
    }
  }

  return options;
}

async function loadJson(filePath) {
  const content = await fs.readFile(filePath, 'utf8');
  return JSON.parse(content);
}

async function loadBlogPosts() {
  const source = await fs.readFile(BLOG_POSTS_PATH, 'utf8');
  const marker = 'export const blogPosts =';

  if (!source.includes(marker)) {
    throw new Error('Could not find "export const blogPosts =" in data/blogPosts.js');
  }

  const transformed = source.replace(marker, 'const blogPosts =');
  const wrapped = `${transformed}\nmodule.exports = { blogPosts };`;

  const sandbox = {
    module: { exports: {} },
    exports: {},
  };

  vm.createContext(sandbox);
  const script = new vm.Script(wrapped, { filename: 'data/blogPosts.js' });
  script.runInContext(sandbox, { timeout: 10_000 });

  const posts = sandbox.module.exports.blogPosts;
  if (!Array.isArray(posts)) {
    throw new Error('data/blogPosts.js did not export a valid blogPosts array');
  }

  return posts;
}

function toSafeText(value) {
  if (value === null || value === undefined) {
    return '';
  }
  return String(value).trim();
}

function cleanLegacyHtml(html) {
  const raw = toSafeText(html);
  if (!raw) {
    return '';
  }

  return raw
    .replace(/<p[^>]*>\s*<img[^>]*>\s*<\/p>/gi, '')
    .replace(/(<figure[^>]*>[\s\S]*?<\/figure>)|(<img[^>]*>)/gi, (match, figureBlock) => (figureBlock ? figureBlock : ''))
    .replace(
      /<p[^>]*>\s*<strong>([^<]{2,140})<\/strong>\s*:?\s*([^<]*)<\/p>/gi,
      (_, headingRaw, trailingRaw) => {
        const headingText = toSafeText(headingRaw).replace(/:\s*$/, '');
        const trailingText = toSafeText(trailingRaw);
        const h3 = `<h3>${headingText}</h3>`;
        return trailingText ? `${h3}<p>${trailingText}</p>` : h3;
      }
    );
}

function pickTranslation(translationMap, baseSlug) {
  if (!translationMap || typeof translationMap !== 'object') {
    return null;
  }

  const value = translationMap[baseSlug];
  if (!value || typeof value !== 'object') {
    return null;
  }

  return value;
}

function resolveLocaleSlug(post, locale) {
  if (locale === 'tr') return toSafeText(post.slugTr) || toSafeText(post.slug);
  if (locale === 'en') return toSafeText(post.slugEn) || toSafeText(post.slug);
  if (locale === 'ro') return toSafeText(post.slugRo) || toSafeText(post.slug);
  return toSafeText(post.slug);
}

function resolveLocaleImage(post, locale) {
  if (locale === 'tr') return toSafeText(post.imageTr) || toSafeText(post.image);
  if (locale === 'en') return toSafeText(post.imageEn) || toSafeText(post.image);
  if (locale === 'ro') return toSafeText(post.imageRo) || toSafeText(post.image);
  return toSafeText(post.image);
}

function resolveLocaleFields(post, locale, trMap, enMap, roMap, cleanLegacy) {
  const baseSlug = toSafeText(post.slug);
  const tr = pickTranslation(trMap, baseSlug);
  const en = pickTranslation(enMap, baseSlug);
  const ro = pickTranslation(roMap, baseSlug);

  const localeMap = {
    tr,
    en,
    ro,
  };

  const localized = localeMap[locale] || null;

  let title = '';
  let excerpt = '';
  let category = '';
  let content = '';

  if (localized) {
    title = toSafeText(localized.title);
    excerpt = toSafeText(localized.excerpt);
    category = toSafeText(localized.category);
    content = toSafeText(localized.content);
  }

  if (!title) {
    if (locale === 'tr') title = toSafeText(post.titleTr) || toSafeText(post.title);
    else if (locale === 'en') title = toSafeText(post.titleEn) || toSafeText(post.title);
    else title = toSafeText(post.title);
  }

  if (!excerpt) {
    if (locale === 'en') excerpt = toSafeText(post.excerptEn) || toSafeText(post.excerpt);
    else excerpt = toSafeText(post.excerpt);
  }

  if (!category) {
    if (locale === 'en') category = toSafeText(post.categoryEn) || toSafeText(post.category);
    else category = toSafeText(post.category);
  }

  if (!content) {
    content = toSafeText(post.content);
  }

  if (cleanLegacy) {
    content = cleanLegacyHtml(content);
  }

  const slug = resolveLocaleSlug(post, locale);
  const imagePath = resolveLocaleImage(post, locale);

  return {
    locale,
    slug,
    title,
    excerpt,
    category,
    content,
    imagePath,
  };
}

function createLocaleEntry(post, fields) {
  const contentValue = toSafeText(fields.content);

  return {
    locale: fields.locale,
    data: {
      title: fields.title,
      slug: fields.slug,
      excerpt: fields.excerpt,
      category: fields.category,
      date: toSafeText(post.date),
      author: toSafeText(post.author) || 'Admin',
      visibleLocales: Array.isArray(post.visibleLocales) ? post.visibleLocales : null,
      content: contentValue,
      blocks: contentValue
        ? [{ __component: RICH_TEXT_COMPONENT_UID, content: contentValue }]
        : [],
      imagePath: fields.imagePath || null,
      coverImagePath: fields.imagePath || null,
    },
  };
}

function createArticleGroup(post, trMap, enMap, roMap, cleanLegacy) {
  const locales = [];

  for (const locale of SUPPORTED_LOCALES) {
    const fields = resolveLocaleFields(post, locale, trMap, enMap, roMap, cleanLegacy);

    if (!fields.slug || !fields.title) {
      continue;
    }

    locales.push(createLocaleEntry(post, fields));
  }

  return {
    sourceId: post.id ?? null,
    sourceBaseSlug: toSafeText(post.slug),
    sourceReadTime: post.readTime ?? null,
    sourceTags: Array.isArray(post.tags) ? post.tags : [],
    sourceMetaKeywords: toSafeText(post.metaKeywords),
    locales,
  };
}

function createExportPayload(groups, options) {
  const localeCoverage = {
    tr: 0,
    en: 0,
    ro: 0,
  };

  for (const group of groups) {
    for (const entry of group.locales) {
      localeCoverage[entry.locale] += 1;
    }
  }

  return {
    generatedAt: new Date().toISOString(),
    source: 'data/blogPosts.js',
    cleanLegacyApplied: options.cleanLegacy,
    componentUids: {
      richText: RICH_TEXT_COMPONENT_UID,
    },
    stats: {
      articleGroups: groups.length,
      localeCoverage,
    },
    articles: groups,
  };
}

async function main() {
  const options = parseArgs(process.argv.slice(2));

  const [posts, trMap, enMap, roMap] = await Promise.all([
    loadBlogPosts(),
    loadJson(TR_TRANSLATIONS_PATH),
    loadJson(EN_TRANSLATIONS_PATH),
    loadJson(RO_TRANSLATIONS_PATH),
  ]);

  const groups = posts
    .map((post) => createArticleGroup(post, trMap, enMap, roMap, options.cleanLegacy))
    .filter((group) => group.locales.length > 0);

  const payload = createExportPayload(groups, options);

  await fs.mkdir(path.dirname(options.output), { recursive: true });
  await fs.writeFile(options.output, JSON.stringify(payload, null, 2), 'utf8');

  console.log(`Export complete: ${path.relative(ROOT, options.output)}`);
  console.log(`Article groups: ${payload.stats.articleGroups}`);
  console.log(`Locale coverage: tr=${payload.stats.localeCoverage.tr}, en=${payload.stats.localeCoverage.en}, ro=${payload.stats.localeCoverage.ro}`);
}

main().catch((error) => {
  console.error('Export failed:', error.message);
  process.exit(1);
});
