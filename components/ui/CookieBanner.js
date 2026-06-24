'use client';

import { useState, useEffect } from 'react';
import { IconX } from './Icons';
import { useLanguage } from '../i18n/LanguageProvider';

const CONSENT_KEY = 'onsuiteConsent';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const { t, locale } = useLanguage();

  useEffect(() => {
    const cookieConsent = localStorage.getItem(CONSENT_KEY);
    if (!cookieConsent) {
      const timerId = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timerId);
    }

    return undefined;
  }, []);

  useEffect(() => {
    if (typeof globalThis === 'undefined') {
      return undefined;
    }

    if (isVisible) {
      globalThis.document.body.classList.add('ons-cookie-open');
    } else {
      globalThis.document.body.classList.remove('ons-cookie-open');
    }

    return () => {
      globalThis.document.body.classList.remove('ons-cookie-open');
    };
  }, [isVisible]);

  const cookiePolicyUrl = `/cookie?lang=${locale}`;

  const acceptCookies = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    setIsVisible(false);
  };

  return (
    isVisible ? (
      <div className="fixed bottom-3 left-3 right-3 md:bottom-5 md:left-auto md:right-5 z-50 md:w-full md:max-w-sm">
          <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-soft-lg border border-slate-200 overflow-hidden">
            <div className="px-4 pt-4 pb-3 flex items-start justify-between gap-3">
              <p className="text-sm font-semibold text-primary-black">{t('cookie.title', 'Cookie Preference')}</p>
              <button
                onClick={declineCookies}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1.5 hover:bg-gray-100 rounded-full"
                aria-label={t('cookie.close', 'Close')}
              >
                <IconX size={18} />
              </button>
            </div>

            <div className="px-4 pb-4">
              <p className="text-gray-700 text-xs sm:text-sm leading-6 mb-4">
                {t('cookie.message', 'Folosim cookie-uri pentru a îmbunătăți experiența ta pe OnSuite. Prin utilizarea site-ului, ești de acord cu politica noastră de cookie-uri.')}
              </p>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={acceptCookies}
                  className="bg-secondary-blue hover:bg-accent-blue text-white font-semibold py-3 px-3 rounded-lg transition-all duration-300 text-sm"
                >
                  {t('cookie.accept', 'Acceptă')}
                </button>
                <button
                  onClick={declineCookies}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-3 rounded-lg transition-all duration-300 text-sm"
                >
                  {t('cookie.decline', 'Respinge')}
                </button>
              </div>
              <button
                  onClick={() => globalThis.open(cookiePolicyUrl, '_blank')}
                  className="mt-3 w-full bg-transparent hover:bg-slate-50 text-accent-blue font-semibold py-2.5 px-3 rounded-lg transition-colors duration-300 border border-accent-blue/35 text-sm"
                >
                  {t('cookie.learnMore', 'Learn more')}
                </button>
            </div>
          </div>
      </div>
    ) : null
  );
}
