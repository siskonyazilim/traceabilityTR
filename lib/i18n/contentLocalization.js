import { contentEn } from '../../data/i18n/content.en';
import { contentRo } from '../../data/i18n/content.ro';
import { contentTr } from '../../data/i18n/content.tr';
import referenceDetailsTr from '../../data/i18n/references/tr/index.js';
import referenceDetailsEn from '../../data/i18n/references/en/index.js';
import referenceDetailsRo from '../../data/i18n/references/ro/index.js';
import { getBlogTranslation } from './blogTranslations';

export function isEnglish(locale) {
  return locale === 'en';
}

export function getFirstSentenceText(value) {
  const normalized = String(value || '').replace(/\s+/g, ' ').trim();

  if (!normalized) {
    return '';
  }

  const sentencePattern = new RegExp('^(.+?[.!?])(?:\\s|$)');
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

function getReferenceCardDescriptionFromDetail(slug, locale) {
  const detail = getReferenceDetailsByLocale(locale)?.[slug];
  if (!detail) {
    return '';
  }

  return String(
    detail.heroSub
      || detail.solutionLede
      || detail.contextP1
      || detail.problemLede
      || ''
  ).trim();
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
  if (!content.solutions) return solutions;

  return solutions.map((solution) => {
    const localized = content.solutions[String(solution.id)];
    if (!localized) return solution;
    return {
      ...solution,
      title: localized.title,
      description: localized.description,
      summary: localized.summary || solution.summary || localized.description || solution.description,
      detail: localized.detail || solution.detail || localized.description || solution.description,
      detailTitle: localized.detailTitle || solution.detailTitle || localized.title || solution.title,
      detailPreBulletsHeading: localized.detailPreBulletsHeading || solution.detailPreBulletsHeading,
      detailPreBullets: localized.detailPreBullets || solution.detailPreBullets || [],
      detailBulletsHeading: localized.detailBulletsHeading || solution.detailBulletsHeading,
      detailBullets: localized.detailBullets || solution.detailBullets || [],
      detailSections: localized.detailSections || solution.detailSections || [],
      detailCta: localized.detailCta || solution.detailCta,
    };
  });
}

export function localizeProducts(products, locale) {
  const content = getLocaleContent(locale);
  if (!content.products) return products;

  return products.map((product) => {
    const localized = content.products[String(product.id)];
    if (!localized) return product;
    return {
      ...product,
      title: localized.title,
      description: localized.description,
      buttonText: localized.buttonText || product.buttonText,
      summary: localized.summary || product.summary || localized.description || product.description,
      detail: localized.detail || product.detail || localized.description || product.description,
      detailTitle: localized.detailTitle || product.detailTitle || localized.title || product.title,
      detailPreBulletsHeading: localized.detailPreBulletsHeading || product.detailPreBulletsHeading,
      detailPreBullets: localized.detailPreBullets || product.detailPreBullets || [],
      detailBulletsHeading: localized.detailBulletsHeading || product.detailBulletsHeading,
      detailBullets: localized.detailBullets || product.detailBullets || [],
      detailSections: localized.detailSections || product.detailSections || [],
      detailCta: localized.detailCta || product.detailCta,
    };
  });
}

export function localizeSolutionDetail(solutionKey, solution, locale) {
  const content = getLocaleContent(locale);
  const localized = content.solutionsDetail?.[solutionKey];
  if (!localized) return solution;

  return {
    ...solution,
    title: localized.title || solution.title,
    h1: localized.h1 || solution.h1,
    description: localized.description || solution.description,
    metaDescription: localized.metaDescription || solution.metaDescription,
    keywords: localized.keywords || solution.keywords,
    benefits: localized.benefits || solution.benefits,
    useCases: localized.useCases || solution.useCases,
    technologies: localized.technologies || solution.technologies,
  };
}

export function localizeReferenceProject(project, locale) {
  const content = getLocaleContent(locale);
  const localized = content.references?.[project.slug];
  const detailDescription = getReferenceCardDescriptionFromDetail(project.slug, locale);
  if (!localized) {
    // For non-RO locales fall back to English rather than Romanian
    if (locale !== 'ro') {
      const enLocalized = contentEn.references?.[project.slug];
      if (enLocalized) {
        const enDetailDescription = getReferenceCardDescriptionFromDetail(project.slug, 'en');
        return {
          ...project,
          title: enLocalized.title || project.title,
          sector: enLocalized.sector || project.sector,
          description: detailDescription || enDetailDescription || enLocalized.description || project.description,
          content: enLocalized.content || project.content,
        };
      }
    }
    return project;
  }

  return {
    ...project,
    title: localized.title || project.title,
    sector: localized.sector || project.sector,
    description: detailDescription || localized.description || project.description,
    content: localized.content || project.content,
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

export function localizeBlogPost(post, locale) {
  // Try per-locale JSON translation first (tr.json / en.json)
  const localized = getBlogTranslation(locale, post.slug);
  if (localized) {
    return {
      ...post,
      title: localized.title || post.title,
      excerpt: localized.excerpt || post.excerpt,
      content: localized.content || post.content,
      category: localized.category || post.categoryEn || post.category,
    };
  }

  // For Romanian: return base post (Romanian content is already in blogPosts.js)
  if (locale === 'ro') {
    return post;
  }

  // For TR/EN: fall back to English translation, then base post
  const enLocalized = getBlogTranslation('en', post.slug);
  if (enLocalized) {
    return {
      ...post,
      title: enLocalized.title || post.title,
      excerpt: enLocalized.excerpt || post.excerpt,
      content: enLocalized.content || post.content,
      category: enLocalized.category || post.categoryEn || post.category,
    };
  }

  return {
    ...post,
    category: post.categoryEn || post.category,
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
