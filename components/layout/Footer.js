'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../i18n/LanguageProvider';

/* eslint-disable react/prop-types */
export const Footer = ({ cmsGlobal }) => {
  const pathname = usePathname();
  const normalizedPathname = (pathname || '/').replace(/^\/(tr|en|ro)(?=\/|$)/, '') || '/';
  const isHomePage = normalizedPathname === '/';
  const { t, locale } = useLanguage();

  // CMS'den sosyal medya URL'leri gelirse kullan
  const sl = cmsGlobal?.socialLinks || {};
  const socialLinks = {
    linkedin: locale === 'ro'
      ? (sl.linkedin?.urlRo || 'https://www.linkedin.com/company/siskonromania/')
      : (sl.linkedin?.url || 'https://www.linkedin.com/company/siskonyazilimveotomasyon'),
    twitter: locale === 'ro'
      ? (sl.twitter?.urlRo || 'https://x.com/siskonromania')
      : (sl.twitter?.url || 'https://x.com/siskonsoftware'),
    instagram: locale === 'ro'
      ? (sl.instagram?.urlRo || 'https://www.instagram.com/siskon_romania')
      : (sl.instagram?.url || 'https://www.instagram.com/siskonyazilimveotomasyon/'),
    youtube: sl.youtube?.url || 'https://www.youtube.com/channel/UCpEyoqwoPBYzUcyI5lCG0Wg',
  };

  // CMS'den iletişim bilgileri
  const contactEmail = locale === 'tr'
    ? (cmsGlobal?.emailTR || 'info@izlenebilirlik.com.tr')
    : (cmsGlobal?.emailRO || 'info@traceability.com.tr');
  const phoneTR = cmsGlobal?.phoneNumberTR || '+90 232 245 00 76';
  const phoneRO = cmsGlobal?.phoneNumberRO || '+40 368 402 002';

  // CMS'den footer açıklaması
  const footerDescription = cmsGlobal?.footerDescription
    || t('footer.brandDescription', 'Akıllı fabrikalar ve sürdürülebilir üretim için yenilikçi izlenebilirlik çözümleri.');
  const copyrightText = cmsGlobal?.copyrightText
    || t('footer.copyright', '© 2026 Traceability. Tüm hakları saklıdır.');

  const toLocalePath = (targetPath) => {
    if (!targetPath) {
      return locale === 'tr' ? '/' : `/${locale}`;
    }

    if (/^https?:\/\//.test(targetPath)) {
      return targetPath;
    }

    const normalized = targetPath.startsWith('/') ? targetPath : `/${targetPath}`;
    const withoutPrefix = normalized.replace(/^\/(tr|en|ro)(?=\/|$)/, '') || '/';

    if (locale === 'tr') {
      return withoutPrefix;
    }

    return withoutPrefix === '/'
      ? `/${locale}`
      : `/${locale}${withoutPrefix}`;
  };

  const handleSectionClick = (e, href) => {
    const isAnchor = href.includes('#');
    if (!isAnchor) return;

    const hash = href.substring(href.indexOf('#'));
    const cleanId = hash.replace(/^#/, '');

    const aliasMap = {
      'products-tab': 'traceability-solutions',
      'sektorler': 'traceability-solutions',
      'products': 'traceability-solutions',
      'industries': 'traceability-solutions',
      'solutions-tab': 'traceability-solutions',
      'solutions': 'traceability-solutions',
      'cozumler': 'traceability-solutions',
      'traceability-solutions': 'traceability-solutions',
      'referans-projeler': 'reference-projects',
      'proiecte-de-referinta': 'reference-projects',
      'portfolio': 'reference-projects',
      'reference-projects': 'reference-projects',
      'projects': 'reference-projects',
      'cozum-ortaklari': 'our-strategic-solution-partners',
      'solution-partners': 'our-strategic-solution-partners',
      'parteneri-de-solutii': 'our-strategic-solution-partners',
      'partners': 'our-strategic-solution-partners',
      'strategic-partners': 'our-strategic-solution-partners',
      'our-strategic-solution-partners': 'our-strategic-solution-partners',
      'technology-capabilities': 'technology-capabilities',
      'teknoloji-yetkinlikleri': 'technology-capabilities',
    };

    if (isHomePage) {
      e.preventDefault();
      if (cleanId === 'products-tab' || cleanId === 'sektorler' || cleanId === 'products') {
        globalThis.dispatchEvent(new CustomEvent('open-solutions-tab', { detail: { tab: 'products' } }));
      } else if (cleanId === 'solutions-tab' || cleanId === 'solutions' || cleanId === 'cozumler') {
        globalThis.dispatchEvent(new CustomEvent('open-solutions-tab', { detail: { tab: 'solutions' } }));
      }

      const targetId = aliasMap[cleanId] || cleanId;
      const element = document.getElementById(targetId) || document.getElementById(cleanId);
      if (element) {
        const y = element.getBoundingClientRect().top + globalThis.scrollY - 92;
        globalThis.scrollTo({ top: y, behavior: 'smooth' });
        globalThis.history.pushState(null, '', `#${cleanId}`);
      }
    }
  };

  return (
    <footer className="bg-[radial-gradient(circle_at_top_right,_rgba(0,181,247,0.14)_0%,_rgba(10,10,43,0)_30%),linear-gradient(180deg,_#0a0a2b_0%,_#070720_100%)] text-white pt-14 pb-8 border-t border-slate-blue/30">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-10">
          {/* Brand */}
          <div>
            <Link href={toLocalePath('/')} className="font-poppins text-2xl font-extrabold tracking-tight text-white mb-4 block">
              Traceability
            </Link>
            <p className="text-gray-light text-sm mb-6 leading-relaxed max-w-sm">
              {footerDescription}
            </p>
            <div className="flex items-center gap-3">
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className="h-11 w-11 rounded-md border border-slate-blue/40 text-gray-light hover:text-accent-blue hover:border-accent-blue transition-all duration-300 flex items-center justify-center">
                <img src="/social/linkedin.svg" alt="LinkedIn" className="h-4 w-4" />
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" title="X" className="h-11 w-11 rounded-md border border-slate-blue/40 text-gray-light hover:text-accent-blue hover:border-accent-blue transition-all duration-300 flex items-center justify-center">
                <img src="/social/twitter.svg" alt="X" className="h-4 w-4" />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram" className="h-11 w-11 rounded-md border border-slate-blue/40 text-gray-light hover:text-accent-blue hover:border-accent-blue transition-all duration-300 flex items-center justify-center">
                <img src="/social/instagram-2016-5.svg" alt="Instagram" className="h-[18px] w-[18px]" />
              </a>
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube" className="h-11 w-11 rounded-md border border-slate-blue/40 text-gray-light hover:text-accent-blue hover:border-accent-blue transition-all duration-300 flex items-center justify-center">
                <img src="/social/youtube.svg" alt="YouTube" className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">{t('footer.navigation', 'Navigasyon')}</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
              <li>
                <Link href={toLocalePath('/')} className="inline-flex min-h-[44px] min-w-[44px] items-center py-1 text-gray-light hover:text-accent-blue transition-colors text-sm">
                  {t('footer.home', 'Ana Sayfa')}
                </Link>
              </li>
              <li>
                <Link
                  href={toLocalePath('/#traceability-solutions')}
                  onClick={(e) => handleSectionClick(e, '/#traceability-solutions')}
                  className="inline-flex min-h-[44px] min-w-[44px] items-center py-1 text-gray-light hover:text-accent-blue transition-colors text-sm"
                >
                  {t('footer.solutions', 'Çözümlerimiz')}
                </Link>
              </li>
              <li>
                <Link
                  href={toLocalePath('/#products-tab')}
                  onClick={(e) => handleSectionClick(e, '/#products-tab')}
                  className="inline-flex min-h-[44px] min-w-[44px] items-center py-1 text-gray-light hover:text-accent-blue transition-colors text-sm"
                >
                  {t('footer.industries', 'Sektörler')}
                </Link>
              </li>
              <li>
                <Link
                  href={toLocalePath('/#reference-projects')}
                  onClick={(e) => handleSectionClick(e, '/#reference-projects')}
                  className="inline-flex min-h-[44px] min-w-[44px] items-center py-1 text-gray-light hover:text-accent-blue transition-colors text-sm"
                >
                  {t('header.projects', 'Referans Projeler')}
                </Link>
              </li>
              <li>
                <Link
                  href={toLocalePath('/#our-strategic-solution-partners')}
                  onClick={(e) => handleSectionClick(e, '/#our-strategic-solution-partners')}
                  className="inline-flex min-h-[44px] min-w-[44px] items-center py-1 text-gray-light hover:text-accent-blue transition-colors text-sm"
                >
                  {t('footer.partners', 'Çözüm Ortakları')}
                </Link>
              </li>
              <li>
                <Link href={toLocalePath('/contact')} className="inline-flex min-h-[44px] min-w-[44px] items-center py-1 text-gray-light hover:text-accent-blue transition-colors text-sm">
                  {t('footer.contact', 'İletişim')}
                </Link>
              </li>
              <li>
                <Link href={toLocalePath('/blog')} className="inline-flex min-h-[44px] min-w-[44px] items-center py-1 text-gray-light hover:text-accent-blue transition-colors text-sm">
                  {t('footer.news', 'Haberler')}
                </Link>
              </li>
              <li>
                <Link href={toLocalePath('/privacy-policy')} className="inline-flex min-h-[44px] min-w-[44px] items-center py-1 text-gray-light hover:text-accent-blue transition-colors text-sm">
                  {t('footer.gdprPolicy', 'KVKK Gizlilik Politikası')}
                </Link>
              </li>
              <li>
                <Link href={toLocalePath('/cookie')} className="inline-flex min-h-[44px] min-w-[44px] items-center py-1 text-gray-light hover:text-accent-blue transition-colors text-sm">
                  {t('footer.cookiePolicy', 'Çerez Politikası')}
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="nesil-open-modal inline-flex min-h-[44px] min-w-[44px] items-center py-1 text-gray-light hover:text-accent-blue transition-colors text-sm text-left bg-transparent border-0 p-0 cursor-pointer"
                >
                  {t('footer.cookiePreferences', 'Çerez Tercihleri')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">{t('footer.contactTitle', 'İletişim')}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+902322450076" className="inline-flex min-h-[44px] min-w-[44px] items-center text-gray-light hover:text-accent-blue transition-colors">
                  <span className="font-semibold">{t('footer.phone', 'Telefon')} (TR):</span> {phoneTR}
                </a>
              </li>
              <li>
                <a href="tel:+40368402002" className="inline-flex min-h-[44px] min-w-[44px] items-center text-gray-light hover:text-accent-blue transition-colors">
                  <span className="font-semibold">{t('footer.phone', 'Telefon')} (RO):</span> {phoneRO}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactEmail}`} className="inline-flex min-h-[44px] min-w-[44px] items-center text-gray-light hover:text-accent-blue transition-colors">
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
            <p>{copyrightText}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
