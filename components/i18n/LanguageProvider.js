'use client';

import { createContext, useContext, useMemo, useState } from 'react';
import { DEFAULT_LOCALE, getDictionary, formatTranslation, isSupportedLocale, resolveTranslation } from '../../lib/i18n/dictionaries';

const LanguageContext = createContext(null);

export function LanguageProvider({ initialLocale, children }) {
  const normalizedInitial = isSupportedLocale(initialLocale) ? initialLocale : DEFAULT_LOCALE;
  const [locale, setLocaleState] = useState(normalizedInitial);

  const dictionary = useMemo(() => getDictionary(locale), [locale]);

  const t = useMemo(() => {
    return (key, fallback = key, params = undefined) => {
      const value = resolveTranslation(dictionary, key);
      if (value === undefined || value === null) {
        return fallback;
      }

      return formatTranslation(value, params);
    };
  }, [dictionary]);

  const setLocale = async (nextLocale) => {
    if (!isSupportedLocale(nextLocale) || nextLocale === locale) {
      return;
    }

    setLocaleState(nextLocale);

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

    if (typeof globalThis !== 'undefined') {
      globalThis.document.documentElement.lang = nextLocale;
    }
  };

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
}
