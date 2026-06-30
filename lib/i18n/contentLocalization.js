import { contentEn } from '../../data/i18n/content.en';
import { contentRo } from '../../data/i18n/content.ro';
import { contentTr } from '../../data/i18n/content.tr';
import { getBlogTranslation } from './blogTranslations';

export function isEnglish(locale) {
  return locale === 'en';
}

function getLocaleContent(locale) {
  if (locale === 'en') return contentEn;
  if (locale === 'tr') return contentTr;
  return contentRo;
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
  if (!localized) {
    // For non-RO locales fall back to English rather than Romanian
    if (locale !== 'ro') {
      const enLocalized = contentEn.references?.[project.slug];
      if (enLocalized) {
        return {
          ...project,
          title: enLocalized.title || project.title,
          sector: enLocalized.sector || project.sector,
          description: enLocalized.description || project.description,
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
    description: localized.description || project.description,
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
  return posts.map((post) => localizeBlogPost(post, locale));
}
