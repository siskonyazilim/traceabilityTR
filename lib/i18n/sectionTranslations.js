import { DEFAULT_LOCALE, formatTranslation, isSupportedLocale } from './dictionaries';

import enSolutionDetailPage from '../../data/i18n/sections/en/solutionDetailPage.json';
import roSolutionDetailPage from '../../data/i18n/sections/ro/solutionDetailPage.json';
import enPartnerDetailPage from '../../data/i18n/sections/en/partnerDetailPage.json';
import roPartnerDetailPage from '../../data/i18n/sections/ro/partnerDetailPage.json';
import enPortfolioDetailPage from '../../data/i18n/sections/en/portfolioDetailPage.json';
import roPortfolioDetailPage from '../../data/i18n/sections/ro/portfolioDetailPage.json';
import enBlogDetailPage from '../../data/i18n/sections/en/blogDetailPage.json';
import roBlogDetailPage from '../../data/i18n/sections/ro/blogDetailPage.json';
import enCookiePolicyPage from '../../data/i18n/sections/en/cookiePolicyPage.json';
import roCookiePolicyPage from '../../data/i18n/sections/ro/cookiePolicyPage.json';
import enPrivacyPolicyPage from '../../data/i18n/sections/en/privacyPolicyPage.json';
import roPrivacyPolicyPage from '../../data/i18n/sections/ro/privacyPolicyPage.json';

const sectionTranslations = {
  en: {
    solutionDetailPage: enSolutionDetailPage,
    partnerDetailPage: enPartnerDetailPage,
    portfolioDetailPage: enPortfolioDetailPage,
    blogDetailPage: enBlogDetailPage,
    cookiePolicyPage: enCookiePolicyPage,
    privacyPolicyPage: enPrivacyPolicyPage,
  },
  ro: {
    solutionDetailPage: roSolutionDetailPage,
    partnerDetailPage: roPartnerDetailPage,
    portfolioDetailPage: roPortfolioDetailPage,
    blogDetailPage: roBlogDetailPage,
    cookiePolicyPage: roCookiePolicyPage,
    privacyPolicyPage: roPrivacyPolicyPage,
  },
};

function normalizeLocale(locale) {
  return isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
}

function getByPath(source, key) {
  if (!source || !key) {
    return undefined;
  }

  return key.split('.').reduce((acc, part) => {
    if (acc && Object.hasOwn(acc, part)) {
      return acc[part];
    }

    return undefined;
  }, source);
}

export function f(locale, section, key, fallback = key, params = undefined) {
  const normalizedLocale = normalizeLocale(locale);
  const sectionData = sectionTranslations[normalizedLocale]?.[section]
    || sectionTranslations[DEFAULT_LOCALE]?.[section];

  const value = getByPath(sectionData, key);

  if (value === undefined || value === null) {
    return fallback;
  }

  if (typeof value === 'string') {
    return formatTranslation(value, params);
  }

  return value;
}
