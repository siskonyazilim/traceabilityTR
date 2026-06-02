'use client';

import { useState, useEffect } from 'react';
import { IconX } from './Icons';
import { useLanguage } from '../i18n/LanguageProvider';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  return (
    isVisible ? (
      <div className="fixed bottom-3 left-3 right-3 md:bottom-6 md:left-auto md:right-6 z-50 md:w-full md:max-w-lg">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Header with Logo and Close Button */}
            <div className="px-4 md:px-6 pt-4 md:pt-6 pb-3 md:pb-4 flex items-start justify-between gap-3">
              <img
                src="/siskon-logo-header.svg"
                alt="Siskon"
                width="140"
                height="40"
                className="h-8 md:h-10 object-contain"
              />
              <button
                onClick={declineCookies}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
                aria-label={t('cookie.close', 'Închide')}
              >
                <IconX size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="px-4 md:px-6 pb-4 md:pb-6">
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-4 md:mb-5">
                {t('cookie.message', 'Folosim cookie-uri pentru a îmbunătăți experiența ta pe OnSuite. Prin utilizarea site-ului, ești de acord cu politica noastră de cookie-uri.')}
              </p>

              {/* Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                <button
                  onClick={acceptCookies}
                  className="bg-secondary-blue hover:bg-accent-blue text-white font-semibold py-2.5 md:py-3 px-4 md:px-5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                >
                  {t('cookie.accept', 'Acceptă')}
                </button>
                <button
                  onClick={declineCookies}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2.5 md:py-3 px-4 md:px-5 rounded-xl transition-all duration-300 text-sm"
                >
                  {t('cookie.decline', 'Respinge')}
                </button>
                <button
                  onClick={() => globalThis.open('/privacy', '_blank')}
                  className="bg-white hover:bg-gray-50 text-accent-blue font-semibold py-2.5 md:py-3 px-4 md:px-5 rounded-xl transition-all duration-300 border-2 border-accent-blue text-sm"
                >
                  {t('cookie.learnMore', 'Află mai multe')}
                </button>
              </div>
            </div>
          </div>
      </div>
    ) : null
  );
}
