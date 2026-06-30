import trBlogData from '../../data/i18n/blog/tr.json';
import enBlogData from '../../data/i18n/blog/en.json';

export const blogTranslations = {
  tr: trBlogData,
  en: enBlogData,
};

/**
 * Returns the localized blog post fields for a given locale and slug.
 * Returns null if no translation exists for that locale/slug.
 */
export function getBlogTranslation(locale, slug) {
  return blogTranslations[locale]?.[slug] || null;
}
