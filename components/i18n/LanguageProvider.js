'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { DEFAULT_LOCALE, getDictionary, formatTranslation, isSupportedLocale, resolveTranslation } from '../../lib/i18n/dictionaries';

const LanguageContext = createContext(null);

export function LanguageProvider({ initialLocale, children }) {
  const normalizedInitial = isSupportedLocale(initialLocale) ? initialLocale : DEFAULT_LOCALE;
  const [locale, setLocale] = useState(normalizedInitial);

  useEffect(() => {
    if (!isSupportedLocale(normalizedInitial) || normalizedInitial === locale) {
      return;
    }

    setLocale(normalizedInitial);
  }, [normalizedInitial, locale]);

  useEffect(() => {
    if (typeof globalThis === 'undefined') {
      return;
    }

    globalThis.document.documentElement.lang = locale;
  }, [locale]);

  const dictionary = useMemo(() => getDictionary(locale), [locale]);

  const t = useMemo(() => {
    return (key, fallback = key, params = undefined) => {
      const value = resolveTranslation(dictionary, key);
      if (value === undefined || value === null) {
        return fallback;
      }

      if (typeof value !== 'string') {
        return typeof fallback === 'string' ? fallback : key;
      }

      return formatTranslation(value, params);
    };
  }, [dictionary]);

  const changeLocale = async (nextLocale) => {
    if (!isSupportedLocale(nextLocale) || nextLocale === locale) {
      return;
    }

    setLocale(nextLocale);

    if (typeof globalThis !== 'undefined') {
      globalThis.document.documentElement.lang = nextLocale;
      globalThis.document.cookie = `locale=${nextLocale}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
    }

    try {
      await fetch('/api/locale', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ locale: nextLocale }),
      });
    } catch (error) {
      // Keep UI responsive even if cookie persistence fails.
      console.error('Unable to persist locale', error);
    }
  };

  const value = useMemo(() => ({ locale, setLocale: changeLocale, t }), [locale, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
}
