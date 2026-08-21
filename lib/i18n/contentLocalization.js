import { contentEn } from '../../data/i18n/content.en';
import { contentRo } from '../../data/i18n/content.ro';
import { contentTr } from '../../data/i18n/content.tr';
import referenceDetailsTr from '../../data/i18n/references/tr/index.js';
import referenceDetailsEn from '../../data/i18n/references/en/index.js';
import referenceDetailsRo from '../../data/i18n/references/ro/index.js';
import { getBlogTranslation } from './blogTranslations';
import { getLocalizedSlug } from './slugMapping';

export function isEnglish(locale) {
  return locale === 'en';
}

export function getFirstSentenceText(value) {
  if (!value) return '';
  let str = '';
  if (typeof value === 'string') {
    str = value;
  } else if (Array.isArray(value)) {
    str = value
      .map((block) => {
        if (typeof block === 'string') return block;
        if (block?.children && Array.isArray(block.children)) {
          return block.children.map((c) => (typeof c === 'string' ? c : c?.text || '')).join('');
        }
        return '';
      })
      .filter(Boolean)
      .join(' ');
  } else {
    str = String(value);
  }

  // Strip any HTML tags
  str = str.replace(/<[^>]*>/g, '');

  const normalized = str.replace(/\s+/g, ' ').trim();
  if (!normalized || normalized.startsWith('[object Object]')) {
    return '';
  }

  const sentencePattern = /^(.+?[.!?])(?:\s|$)/;
  const match = sentencePattern.exec(normalized);
  return (match ? match[1] : normalized).trim();
}

function getLocaleContent(locale) {
  if (locale === 'en') return contentEn;
  if (locale === 'tr') return contentTr;
  return contentRo;
}

function getReferenceDetailsByLocale(locale) {
  if (locale === 'en') return referenceDetailsEn;
  if (locale === 'tr') return referenceDetailsTr;
  return referenceDetailsRo;
}

function getReferenceDetailWithFallback(slug, locale) {
  const localizedDetail = getReferenceDetailsByLocale(locale)?.[slug];
  if (localizedDetail) {
    return localizedDetail;
  }

  if (locale !== 'en') {
    const enDetail = referenceDetailsEn?.[slug];
    if (enDetail) {
      return enDetail;
    }
  }

  if (locale !== 'tr') {
    const trDetail = referenceDetailsTr?.[slug];
    if (trDetail) {
      return trDetail;
    }
  }

  return referenceDetailsRo?.[slug] || null;
}

function getReferenceCardSummaryFromDetail(slug, locale) {
  const detail = getReferenceDetailWithFallback(slug, locale);

  if (!detail) {
    return {
      description: '',
      sector: '',
    };
  }

  return {
    description: String(
      detail.heroSub
        || detail.solutionLede
        || detail.contextP1
        || detail.problemLede
        || ''
    ).trim(),
    sector: String(detail.tagValue || '').trim(),
  };
}

function toTitleCase(value) {
  return String(value || '')
    .split(' ')
    .filter(Boolean)
    .map((word) => {
      const upper = word.toUpperCase();
      if (['RFID', 'OCR', 'MES', 'ERP', 'SCADA', 'PLC', 'OPC', 'UA', 'GS1', 'WMS', 'RTLS', 'PMI', 'BSH', 'SAP', 'PCB'].includes(upper)) {
        return upper;
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

function getEnglishTitleFromSlug(slug) {
  const normalized = String(slug || '').trim();
  if (!normalized) {
    return '';
  }

  return toTitleCase(normalized.replaceAll('-', ' '));
}

function getLocalizedReferenceTitle(project, locale) {
  if (locale === 'en') {
    return project.titleEn || getEnglishTitleFromSlug(project.slug) || project.title;
  }

  if (locale === 'tr') {
    return project.titleTr || project.title;
  }

  return project.title;
}

export function getHeroSlides(baseSlides, locale) {
  const localizedSlides = getLocaleContent(locale).heroSlides || [];

  return baseSlides.map((slide) => {
    const localized = localizedSlides.find((entry) => entry.id === slide.id);

    if (!localized) {
      return slide;
    }

    return {
      ...slide,
      title: localized.title,
      subtitle: localized.subtitle,
    };
  });
}

export function getFaqBundle(baseFaqs, locale) {
  const localeFaq = getLocaleContent(locale).faq;

  return {
    eyebrow: localeFaq?.eyebrow || 'FAQ',
    title: localeFaq?.title || 'FAQ',
    items: localeFaq?.items || baseFaqs,
  };
}

export function getTechnologyCapabilities(baseCapabilities, locale) {
  const localizedCapabilities = getLocaleContent(locale).technologyCapabilities || [];

  return baseCapabilities.map((capability, index) => {
    const localized = localizedCapabilities[index];

    if (!localized) {
      return capability;
    }

    return {
      ...capability,
      title: localized.title,
      description: localized.description,
    };
  });
}

export function getPerformanceMetricLabels(defaultLabels, locale) {
  const labels = getLocaleContent(locale).performanceMetrics?.labels;

  return labels || defaultLabels;
}

export function localizeSolutions(solutions, locale) {
  const content = getLocaleContent(locale);
  if (!content.solutions && locale === 'ro') return solutions;
  const allowRomanianBaseFallback = locale === 'ro';

  return solutions.map((solution) => {
    const localized = content.solutions?.[String(solution.id)];
    const enFallback = locale !== 'ro' ? contentEn.solutions?.[String(solution.id)] : null;
    const active = localized || enFallback;

    if (!active && !enFallback) return solution;

    return {
      ...solution,
      title: localized?.title || enFallback?.title || solution.title,
      description: localized?.description || enFallback?.description || solution.description,
      summary:
        localized?.summary
        || localized?.description
        || enFallback?.summary
        || enFallback?.description
        || solution.summary
        || solution.description,
      detail:
        localized?.detail
        || localized?.description
        || enFallback?.detail
        || enFallback?.description
        || solution.detail
        || solution.description,
      detailTitle:
        localized?.detailTitle
        || enFallback?.detailTitle
        || localized?.title
        || enFallback?.title
        || solution.detailTitle
        || solution.title,
      detailPreBulletsHeading:
        localized?.detailPreBulletsHeading
        || enFallback?.detailPreBulletsHeading
        || (allowRomanianBaseFallback ? solution.detailPreBulletsHeading : undefined),
      detailPreBullets:
        localized?.detailPreBullets
        || enFallback?.detailPreBullets
        || (allowRomanianBaseFallback ? solution.detailPreBullets : [])
        || [],
      detailBulletsHeading:
        localized?.detailBulletsHeading
        || enFallback?.detailBulletsHeading
        || solution.detailBulletsHeading,
      detailBullets:
        localized?.detailBullets
        || enFallback?.detailBullets
        || solution.detailBullets
        || [],
      detailSections:
        localized?.detailSections
        || enFallback?.detailSections
        || (allowRomanianBaseFallback ? solution.detailSections : [])
        || [],
      detailCta: localized?.detailCta || enFallback?.detailCta || solution.detailCta,
    };
  });
}

export function localizeProducts(products, locale) {
  const content = getLocaleContent(locale);
  if (!content.products && locale === 'ro') return products;
  const allowRomanianBaseFallback = locale === 'ro';

  return products.map((product) => {
    const localized = content.products?.[String(product.id)];
    const fallback = locale !== 'ro' ? contentEn.products?.[String(product.id)] : null;
    const active = localized || fallback;
    if (!active) return product;

    return {
      ...product,
      title: active.title || product.title,
      description: active.description || product.description,
      buttonText: active.buttonText || product.buttonText,
      summary: active.summary || active.description || product.summary || product.description,
      detail: active.detail || active.description || product.detail || product.description,
      detailTitle: active.detailTitle || product.detailTitle || active.title || product.title,
      detailPreBulletsHeading: active.detailPreBulletsHeading || product.detailPreBulletsHeading,
      detailPreBullets:
        active.detailPreBullets
        || (allowRomanianBaseFallback ? product.detailPreBullets : [])
        || [],
      detailBulletsHeading: active.detailBulletsHeading || product.detailBulletsHeading,
      detailBullets: active.detailBullets || product.detailBullets || [],
      detailSections:
        active.detailSections
        || (allowRomanianBaseFallback ? product.detailSections : [])
        || [],
      detailCta: active.detailCta || product.detailCta,
    };
  });
}

export function localizeSolutionDetail(solutionKey, solution, locale) {
  const content = getLocaleContent(locale);
  const localized = content.solutionsDetail?.[solutionKey];
  const fallback = locale !== 'ro' ? contentEn.solutionsDetail?.[solutionKey] : null;
  const active = localized || fallback;
  if (!active) return solution;

  return {
    ...solution,
    title: active.title || solution.title,
    h1: active.h1 || solution.h1,
    description: active.description || solution.description,
    metaDescription: active.metaDescription || solution.metaDescription,
    keywords: active.keywords || solution.keywords,
    benefits: active.benefits || solution.benefits,
    useCases: active.useCases || solution.useCases,
    technologies: active.technologies || solution.technologies,
  };
}

export function localizeReferenceProject(project, locale) {
  if (project?._fromCMS) {
    return project;
  }
  const detailSummary = getReferenceCardSummaryFromDetail(project.slug, locale);

  return {
    ...project,
    title: getLocalizedReferenceTitle(project, locale),
    sector: detailSummary.sector || project.sector,
    description: detailSummary.description || project.description,
  };
}

export function localizeReferenceProjects(projects, locale) {
  return projects.map((project) => localizeReferenceProject(project, locale));
}

export function localizePartner(partner, locale) {
  const content = getLocaleContent(locale);
  const localized = content.partners?.[partner.slug];
  if (!localized) {
    // Fall back to English for non-RO locales
    if (locale !== 'ro') {
      const enLocalized = contentEn.partners?.[partner.slug];
      if (enLocalized) {
        return {
          ...partner,
          description: enLocalized.description || partner.description,
          fullDescription: enLocalized.fullDescription || partner.fullDescription,
        };
      }
    }
    return partner;
  }

  return {
    ...partner,
    description: localized.description || partner.description,
    fullDescription: localized.fullDescription || partner.fullDescription,
  };
}

export function localizePartners(partners, locale) {
  return partners.map((partner) => localizePartner(partner, locale));
}

function resolveLocalizedImage(post, locale) {
  if (locale === 'tr' && post.imageTr) return post.imageTr;
  if (locale === 'en' && post.imageEn) return post.imageEn;
  if (locale === 'ro' && post.imageRo) return post.imageRo;
  return post.image;
}

export function localizeBlogPost(post, locale) {
  // Tüm blog postları için URL/slug eşleştirmesi daima slugMapping.js üzerinden kodla çözümlenir
  const baseIdentifier = post.originalSlug || post.slug;
  const localizedSlug = getLocalizedSlug('blog', baseIdentifier, locale) || baseIdentifier;
  const localizedImage = resolveLocalizedImage(post, locale);

  // CMS'den gelen makaleler: titleEn/titleRo/contentEn/contentRo alanları maplenmiş
  if (post._fromCMS) {
    const title = locale === 'en' ? (post.titleEn || post.title)
      : locale === 'ro' ? (post.titleRo || post.title)
        : post.title;
    const excerpt = locale === 'en' ? (post.excerptEn || post.excerpt)
      : locale === 'ro' ? (post.excerptRo || post.excerpt)
        : post.excerpt;
    const content = locale === 'en' ? (post.contentEn || post.content)
      : locale === 'ro' ? (post.contentRo || post.content)
        : post.content;
    const category = locale === 'en' ? (post.categoryEn || post.category)
      : locale === 'ro' ? (post.categoryRo || post.category)
        : post.category;
    return {
      ...post,
      slug: localizedSlug,
      originalSlug: post.slug,  // TR slug = base identifier
      title,
      excerpt,
      content,
      category,
      image: localizedImage,
    };
  }

  // Try per-locale JSON translation first (tr.json / en.json)
  const localized = getBlogTranslation(locale, post.slug);
  if (localized) {
    return {
      ...post,
      slug: localizedSlug,
      originalSlug: post.slug,
      title: localized.title || post.title,
      excerpt: localized.excerpt || post.excerpt,
      content: localized.content || post.content,
      category: localized.category || post.categoryEn || post.category,
      image: localizedImage,
    };
  }

  // For Romanian: return base post (Romanian content is already in blogPosts.js)
  if (locale === 'ro') {
    return {
      ...post,
      slug: localizedSlug,
      originalSlug: post.slug,
      image: localizedImage,
    };
  }

  // For TR/EN: fall back to English translation, then base post
  const enLocalized = getBlogTranslation('en', post.slug);
  if (enLocalized) {
    return {
      ...post,
      slug: localizedSlug,
      originalSlug: post.slug,
      title: enLocalized.title || post.title,
      excerpt: enLocalized.excerpt || post.excerpt,
      content: enLocalized.content || post.content,
      category: enLocalized.category || post.categoryEn || post.category,
      image: localizedImage,
    };
  }

  return {
    ...post,
    slug: localizedSlug,
    originalSlug: post.slug,
    category: post.categoryEn || post.category,
    image: localizedImage,
  };
}

export function localizeBlogPosts(posts, locale) {
  return posts
    .filter((post) => {
      if (!Array.isArray(post.visibleLocales) || post.visibleLocales.length === 0) {
        return true;
      }

      return post.visibleLocales.includes(locale);
    })
    .map((post) => localizeBlogPost(post, locale));
}
