import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = process.cwd();
const PARTNERS_PATH = path.join(ROOT, 'data', 'partners.js');
const EN_CONTENT_PATH = path.join(ROOT, 'data', 'i18n', 'content.en.js');
const TR_CONTENT_PATH = path.join(ROOT, 'data', 'i18n', 'content.tr.js');
const DEFAULT_OUTPUT_PATH = path.join(ROOT, 'data', 'exports', 'strapi-partners-import.json');

const SUPPORTED_LOCALES = ['tr', 'en', 'ro'];
const RICH_TEXT_COMPONENT_UID = 'shared.partner-rich-text';

function parseArgs(argv) {
  const options = {
    output: DEFAULT_OUTPUT_PATH,
  };

  for (const arg of argv) {
    if (arg.startsWith('--output=')) {
      const value = arg.slice('--output='.length).trim();
      if (value) {
        options.output = path.isAbsolute(value) ? value : path.join(ROOT, value);
      }
    }
  }

  return options;
}

async function loadModuleExport(filePath, exportName) {
  const moduleUrl = `${pathToFileURL(filePath).href}?cacheBust=${Date.now()}`;
  const mod = await import(moduleUrl);
  return mod?.[exportName];
}

function toText(value) {
  if (value === null || value === undefined) {
    return '';
  }

  return String(value).trim();
}

function resolveLocalizedTexts(partner, locale, contentTr, contentEn) {
  const slug = toText(partner.slug);
  const tr = contentTr?.partners?.[slug];
  const en = contentEn?.partners?.[slug];

  if (locale === 'tr') {
    return {
      description: toText(tr?.description) || toText(partner.description),
      fullDescription: toText(tr?.fullDescription) || toText(partner.fullDescription),
    };
  }

  if (locale === 'en') {
    return {
      description: toText(en?.description) || toText(partner.description),
      fullDescription: toText(en?.fullDescription) || toText(partner.fullDescription),
    };
  }

  return {
    description: toText(partner.description),
    fullDescription: toText(partner.fullDescription),
  };
}

function createLocaleEntry(partner, locale, contentTr, contentEn) {
  const texts = resolveLocalizedTexts(partner, locale, contentTr, contentEn);
  const summary = texts.description;
  const fullDescription = texts.fullDescription;

  return {
    locale,
    data: {
      name: toText(partner.name),
      slug: toText(partner.slug),
      breadcrumbLabel: toText(partner.breadcrumbLabel),
      description: texts.description,
      summary,
      fullDescription,
      website: toText(partner.website),
      logoPath: toText(partner.logo),
      detailLogoPath: toText(partner.detailLogo),
      sortOrder: Number.isFinite(Number(partner.id)) ? Number(partner.id) : 0,
      isFeatured: false,
      contentBlocks: fullDescription
        ? [
            {
              __component: RICH_TEXT_COMPONENT_UID,
              title: toText(partner.name),
              content: fullDescription,
            },
          ]
        : [],
      legacyStorySlides: Array.isArray(partner.storySlides)
        ? partner.storySlides.map((slide) => ({ imagePath: toText(slide?.image) })).filter((slide) => slide.imagePath)
        : [],
    },
  };
}

function createPartnerGroup(partner, contentTr, contentEn) {
  const locales = SUPPORTED_LOCALES.map((locale) => createLocaleEntry(partner, locale, contentTr, contentEn));

  return {
    sourceId: partner.id ?? null,
    sourceBaseSlug: toText(partner.slug),
    locales,
  };
}

function createPayload(groups) {
  const localeCoverage = {
    tr: 0,
    en: 0,
    ro: 0,
  };

  for (const group of groups) {
    for (const localeEntry of group.locales) {
      localeCoverage[localeEntry.locale] += 1;
    }
  }

  return {
    generatedAt: new Date().toISOString(),
    source: 'data/partners.js + data/i18n/content.{tr,en}.js',
    componentUids: {
      richText: RICH_TEXT_COMPONENT_UID,
    },
    stats: {
      partnerGroups: groups.length,
      localeCoverage,
    },
    partners: groups,
  };
}

async function main() {
  const options = parseArgs(process.argv.slice(2));

  const [partners, contentTr, contentEn] = await Promise.all([
    loadModuleExport(PARTNERS_PATH, 'strategicPartners'),
    loadModuleExport(TR_CONTENT_PATH, 'contentTr'),
    loadModuleExport(EN_CONTENT_PATH, 'contentEn'),
  ]);

  if (!Array.isArray(partners)) {
    throw new TypeError('data/partners.js does not export a valid strategicPartners array');
  }

  const groups = partners.map((partner) => createPartnerGroup(partner, contentTr, contentEn));
  const payload = createPayload(groups);

  await fs.mkdir(path.dirname(options.output), { recursive: true });
  await fs.writeFile(options.output, JSON.stringify(payload, null, 2), 'utf8');

  console.log(`Export complete: ${path.relative(ROOT, options.output)}`);
  console.log(`Partner groups: ${payload.stats.partnerGroups}`);
  console.log(`Locale coverage: tr=${payload.stats.localeCoverage.tr}, en=${payload.stats.localeCoverage.en}, ro=${payload.stats.localeCoverage.ro}`);
}

try {
  await main();
} catch (error) {
  console.error('Export failed:', error.message);
  process.exit(1);
}
