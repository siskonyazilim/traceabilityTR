import ro from '../../data/i18n/ro.json';
import en from '../../data/i18n/en.json';

export const dictionaries = {
  ro,
  en,
};

export const SUPPORTED_LOCALES = ['ro', 'en'];
export const DEFAULT_LOCALE = 'ro';

export function isSupportedLocale(locale) {
  return SUPPORTED_LOCALES.includes(locale);
}

export function getDictionary(locale) {
  if (isSupportedLocale(locale)) {
    return dictionaries[locale];
  }

  return dictionaries[DEFAULT_LOCALE];
}

export function resolveTranslation(dictionary, key) {
  if (!key) {
    return '';
  }

  return key.split('.').reduce((acc, part) => {
    if (acc && Object.prototype.hasOwnProperty.call(acc, part)) {
      return acc[part];
    }

    return undefined;
  }, dictionary);
}

export function formatTranslation(template, params = {}) {
  if (typeof template !== 'string') {
    return template;
  }

  return template.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, token) => {
    if (Object.prototype.hasOwnProperty.call(params, token)) {
      return String(params[token]);
    }

    return `{{${token}}}`;
  });
}
