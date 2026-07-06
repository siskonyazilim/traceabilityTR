'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconTwitter } from '../ui/Icons';
import { useLanguage } from '../i18n/LanguageProvider';

export const Footer = () => {
  const pathname = usePathname();
  const normalizedPathname = (pathname || '/').replace(/^\/(en|ro)(?=\/|$)/, '') || '/';
  const isHomePage = normalizedPathname === '/';
  const { t, locale } = useLanguage();
  const contactEmail = locale === 'tr' ? 'info@izlenebilirlik.com.tr' : 'info@traceability.ro';

  const toLocalePath = (targetPath) => {
    if (!targetPath) {
      return locale === 'tr' ? '/' : `/${locale}`;
    }

    if (/^https?:\/\//.test(targetPath)) {
      return targetPath;
    }

    const normalized = targetPath.startsWith('/') ? targetPath : `/${targetPath}`;
    const withoutPrefix = normalized.replace(/^\/(en|ro)(?=\/|$)/, '') || '/';

    if (locale === 'tr') {
      return withoutPrefix;
    }

    return withoutPrefix === '/'
      ? `/${locale}`
      : `/${locale}${withoutPrefix}`;
  };

  const handleSectionClick = (e, href) => {
    // Only handle if we're on homepage and it's a hash link
    if (isHomePage && href.startsWith('/#')) {
      e.preventDefault();
      const id = href.substring(1); // Remove the leading /

      // Special handling for products tab
      if (id === '#products-tab') {
        const section = document.querySelector('#traceability-solutions');
        if (section) {
          const y = section.getBoundingClientRect().top + globalThis.scrollY - 92;
          globalThis.scrollTo({ top: y, behavior: 'smooth' });
          globalThis.history.pushState(null, '', id);
          setTimeout(() => {
            const productsButton = document.getElementById('products-tab-button');
            if (productsButton) {
              productsButton.click();
            }
          }, 500);
          return;
        }
      }

      const element = document.querySelector(id);
      if (element) {
        const y = element.getBoundingClientRect().top + globalThis.scrollY - 92;
        globalThis.scrollTo({ top: y, behavior: 'smooth' });
        globalThis.history.pushState(null, '', id);
      }
    }
  };

  return (
    <footer className="bg-[radial-gradient(circle_at_top_right,_rgba(0,181,247,0.14)_0%,_rgba(10,10,43,0)_30%),linear-gradient(180deg,_#0a0a2b_0%,_#070720_100%)] text-white pt-14 pb-8 border-t border-slate-blue/30">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Link href="/" className="font-poppins text-2xl font-extrabold tracking-tight text-white transition-all duration-300 hover:text-accent-blue">
                Traceability
              </Link>
            </div>
            <p className="text-gray-light text-sm mb-5 leading-relaxed max-w-sm">
              {t('footer.brandDescription', 'Soluții inovative de trasabilitate pentru fabrici inteligente și producție sustenabilă.')}
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/company/siskonyazilimveotomasyon/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className="h-11 w-11 rounded-full border border-slate-blue/40 text-gray-light hover:text-accent-blue hover:border-accent-blue transition-all duration-300 flex items-center justify-center">
                <img src="/social/linkedin.svg" alt="LinkedIn" className="h-[18px] w-[18px]" />
              </a>
              <a href="http://youtube.com/channel/UCpEyoqwoPBYzUcyI5lCG0Wg" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube" className="h-11 w-11 rounded-full border border-slate-blue/40 text-gray-light hover:text-accent-blue hover:border-accent-blue transition-all duration-300 flex items-center justify-center">
                <img src="/social/youtube.svg" alt="YouTube" className="h-[18px] w-[18px]" />
              </a>
              <a href="https://x.com/siskonsoftware" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" title="X (Twitter)" className="h-11 w-11 rounded-full border border-slate-blue/40 text-gray-light hover:text-accent-blue hover:border-accent-blue transition-all duration-300 flex items-center justify-center">
                <IconTwitter size={18} />
              </a>
              <a href="https://www.instagram.com/siskonyazilimveotomasyon" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram" className="h-11 w-11 rounded-full border border-slate-blue/40 text-gray-light hover:text-accent-blue hover:border-accent-blue transition-all duration-300 flex items-center justify-center">
                <img src="/social/instagram-2016-5.svg" alt="Instagram" className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">{t('footer.navigation', 'Navigare')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={toLocalePath('/')} className="text-gray-light hover:text-accent-blue transition-colors text-sm">
                  {t('footer.home', 'Pagina Principală')}
                </Link>
              </li>
              <li>
                <Link
                  href={toLocalePath('/#traceability-solutions')}
                  onClick={(e) => handleSectionClick(e, '/#traceability-solutions')}
                  className="text-gray-light hover:text-accent-blue transition-colors text-sm"
                >
                  {t('footer.solutions', 'Soluțiile Noastre')}
                </Link>
              </li>
              <li>
                <Link
                  href={toLocalePath('/#products-tab')}
                  onClick={(e) => handleSectionClick(e, '/#products-tab')}
                  className="text-gray-light hover:text-accent-blue transition-colors text-sm"
                >
                  {t('footer.industries', 'Industrii')}
                </Link>
              </li>
              <li>
                <Link
                  href={toLocalePath('/#our-strategic-solution-partners')}
                  onClick={(e) => handleSectionClick(e, '/#our-strategic-solution-partners')}
                  className="text-gray-light hover:text-accent-blue transition-colors text-sm"
                >
                  {t('footer.partners', 'Parteneri de Soluții')}
                </Link>
              </li>
              <li>
                <Link
                  href={toLocalePath('/#faq')}
                  onClick={(e) => handleSectionClick(e, '/#faq')}
                  className="text-gray-light hover:text-accent-blue transition-colors text-sm"
                >
                  {t('footer.faq', 'Întrebări Frecvente')}
                </Link>
              </li>
              <li>
                <Link href={toLocalePath('/contact')} className="text-gray-light hover:text-accent-blue transition-colors text-sm">
                  {t('footer.contact', 'Contact')}
                </Link>
              </li>
              <li>
                <Link href={toLocalePath('/blog')} className="text-gray-light hover:text-accent-blue transition-colors text-sm">
                  {t('footer.news', 'Știri')}
                </Link>
              </li>
              <li>
                <Link href={toLocalePath('/privacy-policy')} className="text-gray-light hover:text-accent-blue transition-colors text-sm">
                  {t('footer.gdprPolicy', 'Politica GDPR (Confidențialitate)')}
                </Link>
              </li>
              <li>
                <Link href={toLocalePath('/cookie')} className="text-gray-light hover:text-accent-blue transition-colors text-sm">
                  {t('footer.cookiePolicy', 'Politica de cookie-uri')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">{t('footer.contactTitle', 'Contact')}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+40368402002" className="text-gray-light hover:text-accent-blue transition-colors">
                  <span className="font-semibold">{t('footer.phone', 'Telefon')} (RO):</span> +40 368 402 002
                </a>
              </li>
              <li>
                <a href="tel:+902322450076" className="text-gray-light hover:text-accent-blue transition-colors">
                  <span className="font-semibold">{t('footer.phone', 'Telefon')} (TR):</span> +90 232 245 00 76
                </a>
              </li>
              <li>
                <a href={`mailto:${contactEmail}`} className="text-gray-light hover:text-accent-blue transition-colors">
                  <span className="font-semibold">{t('footer.email', 'Email')}:</span> {contactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-blue/35 my-6"></div>

        {/* Bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-light">
          <div>
            <p>{t('footer.copyright', '© 2026 Traceability. Toate drepturile rezervate.')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
