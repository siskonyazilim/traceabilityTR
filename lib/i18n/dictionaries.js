import ro from '../../data/i18n/ro.json';
import en from '../../data/i18n/en.json';
import tr from '../../data/i18n/tr.json';

export const dictionaries = {
  ro,
  en,
  tr,
};

export const SUPPORTED_LOCALES = ['tr', 'ro', 'en'];
export const DEFAULT_LOCALE = 'tr';

export function toLocalePath(targetPath, locale = DEFAULT_LOCALE) {
  if (!targetPath) {
    return locale === DEFAULT_LOCALE ? '/' : `/${locale}`;
  }

  if (/^https?:\/\//.test(targetPath)) {
    return targetPath;
  }

  const normalized = targetPath.startsWith('/') ? targetPath : `/${targetPath}`;
  const withoutPrefix = normalized.replace(/^\/(tr|en|ro)(?=\/|$)/, '') || '/';

  if (locale === DEFAULT_LOCALE) {
    return withoutPrefix;
  }

  return withoutPrefix === '/'
    ? `/${locale}`
    : `/${locale}${withoutPrefix}`;
}

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
    if (acc && Object.hasOwn(acc, part)) {
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
    if (Object.hasOwn(params, token)) {
      return String(params[token]);
    }

    return `{{${token}}}`;
  });
}