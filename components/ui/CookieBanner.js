'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

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
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 w-full max-w-lg"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Header with Logo and Close Button */}
            <div className="px-6 pt-6 pb-4 flex items-start justify-between">
              <img
                src="/siskon-logo-header.svg"
                alt="Siskon"
                className="h-10 object-contain"
              />
              <button
                onClick={declineCookies}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
                aria-label="Închide"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="px-6 pb-6">
              <p className="text-gray-700 text-sm leading-relaxed mb-5">
                Folosim cookie-uri pentru a îmbunătăți experiența ta pe OnSuite. Prin utilizarea site-ului, ești de acord cu politica noastră de cookie-uri.
              </p>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={acceptCookies}
                  className="flex-1 bg-secondary-blue hover:bg-accent-blue text-white font-semibold py-3 px-5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Acceptă
                </button>
                <button
                  onClick={declineCookies}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-5 rounded-xl transition-all duration-300"
                >
                  Respinge
                </button>
                <button
                  onClick={() => window.open('/privacy', '_blank')}
                  className="flex-1 bg-white hover:bg-gray-50 text-accent-blue font-semibold py-3 px-5 rounded-xl transition-all duration-300 border-2 border-accent-blue"
                >
                  Află mai multe
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
