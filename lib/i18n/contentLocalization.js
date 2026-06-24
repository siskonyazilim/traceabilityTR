import { contentEn } from '../../data/i18n/content.en';
import { contentRo } from '../../data/i18n/content.ro';

export function isEnglish(locale) {
  return locale === 'en';
}

function getLocaleContent(locale) {
  return isEnglish(locale) ? contentEn : contentRo;
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
  if (!isEnglish(locale)) {
    return solutions;
  }

  return solutions.map((solution) => {
    const localized = contentEn.solutions[String(solution.id)];

    if (!localized) {
      return solution;
    }

    return {
      ...solution,
      title: localized.title,
      description: localized.description,
    };
  });
}

export function localizeProducts(products, locale) {
  if (!isEnglish(locale)) {
    return products;
  }

  return products.map((product) => {
    const localized = contentEn.products[String(product.id)];

    if (!localized) {
      return product;
    }

    return {
      ...product,
      title: localized.title,
      description: localized.description,
      buttonText: localized.buttonText || product.buttonText,
    };
  });
}

export function localizeSolutionDetail(solutionKey, solution, locale) {
  if (!isEnglish(locale)) {
    return solution;
  }

  const localized = contentEn.solutionsDetail?.[solutionKey];

  if (!localized) {
    return solution;
  }

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
  if (!isEnglish(locale)) {
    return project;
  }

  const localized = contentEn.references[project.slug];

  if (!localized) {
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
  if (!isEnglish(locale)) {
    return projects;
  }

  return projects.map((project) => localizeReferenceProject(project, locale));
}

export function localizePartner(partner, locale) {
  if (!isEnglish(locale)) {
    return partner;
  }

  const localized = contentEn.partners[partner.slug];

  if (!localized) {
    return partner;
  }

  return {
    ...partner,
    description: localized.description || partner.description,
    fullDescription: localized.fullDescription || partner.fullDescription,
  };
}

export function localizePartners(partners, locale) {
  if (!isEnglish(locale)) {
    return partners;
  }

  return partners.map((partner) => localizePartner(partner, locale));
}

export function localizeBlogPost(post, locale) {
  if (!isEnglish(locale)) {
    return post;
  }

  const localized = contentEn.blogPosts[post.slug];

  if (!localized) {
    return {
      ...post,
      category: post.categoryEn || post.category,
    };
  }

  return {
    ...post,
    title: localized.title || post.title,
    excerpt: localized.excerpt || post.excerpt,
    content: localized.content || post.content,
    category: localized.category || post.categoryEn || post.category,
  };
}

export function localizeBlogPosts(posts, locale) {
  if (!isEnglish(locale)) {
    return posts;
  }

  return posts.map((post) => localizeBlogPost(post, locale));
}
