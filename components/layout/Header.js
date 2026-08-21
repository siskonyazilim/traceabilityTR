'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { IconChevronDown, IconMenu, IconX } from '../ui/Icons';
import { useLanguage } from '../i18n/LanguageProvider';

/* eslint-disable react/prop-types */
export const Header = ({ cmsGlobal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langMenuRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();
  const { locale, setLocale, t } = useLanguage();
  const normalizedPathname = (pathname || '/').replace(/^\/(tr|en|ro)(?=\/|$)/, '') || '/';
  const isHomePage = normalizedPathname === '/';
  const useTransparentHeader = isHomePage && !scrolled && !isOpen;

  const languageOptions = [
    { code: 'tr', flagSrc: '/Turkey.svg', label: 'TR' },
    { code: 'en', flagSrc: '/england.svg', label: 'EN' },
    { code: 'ro', flagSrc: '/romania.svg', label: 'RO' },
  ];

  const toLocalePath = (targetPath, targetLocale = locale) => {
    if (!targetPath) {
      return targetLocale === 'tr' ? '/' : `/${targetLocale}`;
    }

    if (/^https?:\/\//.test(targetPath)) {
      return targetPath;
    }

    const normalized = targetPath.startsWith('/') ? targetPath : `/${targetPath}`;
    const withoutPrefix = normalized.replace(/^\/(tr|en|ro)(?=\/|$)/, '') || '/';

    if (targetLocale === 'tr') {
      return withoutPrefix;
    }

    return withoutPrefix === '/'
      ? `/${targetLocale}`
      : `/${targetLocale}${withoutPrefix}`;
  };

  const currentPathForLocale = (() => {
    const raw = pathname || '/';
    const cleaned = raw.replace(/^\/(tr|en|ro)(?=\/|$)/, '') || '/';
    return cleaned;
  })();

  useEffect(() => {
    const handleScroll = () => {
      const nextScrolled = globalThis.scrollY > 20;
      setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));
    };

    handleScroll();
    globalThis.addEventListener('scroll', handleScroll, { passive: true });
    return () => globalThis.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLocaleChange = async (nextLocaleCode) => {
    await setLocale(nextLocaleCode);
    // Preserve current query params (e.g. ?page=2) when switching locale
    const currentSearch = typeof window !== 'undefined' ? window.location.search : '';
    const alternateLink = document.querySelector(`link[rel="alternate"][hreflang="${nextLocaleCode}"]`);
    if (alternateLink) {
      try {
        const url = new URL(alternateLink.href);
        router.push(url.pathname + currentSearch + url.hash);
      } catch (error) {
        console.warn('Could not parse alternate URL, falling back to simple local path:', error);
        router.push(toLocalePath(currentPathForLocale, nextLocaleCode) + currentSearch);
      }
    } else {
      router.push(toLocalePath(currentPathForLocale, nextLocaleCode) + currentSearch);
    }
  };

  useEffect(() => {
    const handleOutside = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };

    globalThis.addEventListener('click', handleOutside);
    return () => globalThis.removeEventListener('click', handleOutside);
  }, []);

  const anchorAliases = [
    'solutions',
    'cozumler',
    'solutions-tab',
    'sektorler',
    'products',
    'industries',
    'products-tab',
    'referans-projeler',
    'reference-projects',
    'portfolio',
    'projects',
    'projeler',
    'proiecte-de-referinta',
    'cozum-ortaklari',
    'partners',
    'solution-partners',
    'strategic-partners',
    'our-strategic-solution-partners',
    'parteneri-de-solutii',
    'technology-capabilities',
    'teknoloji-yetkinlikleri',
  ];

  const normalizeAnchorHref = (href, label = '') => {
    const raw = (href || '').trim();
    const clean = raw.replace(/^\//, '').replace(/^#/, '');
    const l = (label || '').toLowerCase();

    if (clean === 'portfolio' || clean === 'projects' || clean === 'projeler' || clean === 'referans-projeler' || clean === 'reference-projects' || clean === 'proiecte-de-referinta' || l.includes('referans') || l.includes('proiecte') || l.includes('portfolio')) {
      return '#reference-projects';
    }
    if (clean === 'sektorler' || clean === 'products' || clean === 'industries' || clean === 'products-tab' || l.includes('sektör') || l.includes('industr') || l.includes('produse')) {
      return '#products-tab';
    }
    if (clean === 'cozum-ortaklari' || clean === 'partners' || clean === 'solution-partners' || clean === 'strategic-partners' || clean === 'our-strategic-solution-partners' || clean === 'parteneri-de-solutii' || l.includes('ortak') || l.includes('partner')) {
      return '#our-strategic-solution-partners';
    }
    if (clean === 'solutions' || clean === 'cozumler' || clean === 'solutions-tab' || l.includes('çözüm') || l.includes('solution') || l.includes('soluții')) {
      return '#solutions-tab';
    }
    return href;
  };

  const isAnchorHref = (href) => {
    const raw = (href || '').trim().replace(/^\//, '').replace(/^#/, '');
    return (href || '').includes('#') || anchorAliases.includes(raw);
  };

  const handleNavClick = (href) => {
    const raw = normalizeAnchorHref(href);
    const isAnchor = isAnchorHref(raw);

    let hash = '';
    if (raw.includes('#')) {
      hash = raw.substring(raw.indexOf('#'));
    } else if (isAnchor) {
      hash = `#${raw.replace(/^\//, '')}`;
    }

    if (isAnchor && hash) {
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
        'projeler': 'reference-projects',
        'cozum-ortaklari': 'our-strategic-solution-partners',
        'solution-partners': 'our-strategic-solution-partners',
        'parteneri-de-solutii': 'our-strategic-solution-partners',
        'partners': 'our-strategic-solution-partners',
        'strategic-partners': 'our-strategic-solution-partners',
        'our-strategic-solution-partners': 'our-strategic-solution-partners',
        'technology-capabilities': 'technology-capabilities',
        'teknoloji-yetkinlikleri': 'technology-capabilities',
      };

      const isProductTab = cleanId === 'products-tab' || cleanId === 'sektorler' || cleanId === 'products' || cleanId === 'industries';
      const isSolutionTab = cleanId === 'solutions-tab' || cleanId === 'solutions' || cleanId === 'cozumler';

      const targetId = aliasMap[cleanId] || cleanId;
      const element = document.getElementById(targetId) || document.getElementById(cleanId);

      if (isHomePage || element) {
        if (isProductTab) {
          globalThis.dispatchEvent(new CustomEvent('open-solutions-tab', { detail: { tab: 'products' } }));
        } else if (isSolutionTab) {
          globalThis.dispatchEvent(new CustomEvent('open-solutions-tab', { detail: { tab: 'solutions' } }));
        }

        if (element) {
          const y = element.getBoundingClientRect().top + globalThis.scrollY - 92;
          globalThis.scrollTo({ top: y, behavior: 'smooth' });
          globalThis.history.pushState(null, '', `#${cleanId}`);
          setIsOpen(false);
          return;
        }
      }

      // If not on homepage or section not found on page, go to homepage anchor
      const tabParam = isProductTab ? '?tab=products' : (isSolutionTab ? '?tab=solutions' : '');
      router.push(toLocalePath(`/${tabParam}${hash}`));
      setIsOpen(false);
      return;
    }

    // Normal page navigation
    router.push(toLocalePath(raw));
    setIsOpen(false);
  };

  // CMS'den nav gelirse kullan, yoksa statik t() veriler
  const navItems = (cmsGlobal?.headerNav && cmsGlobal.headerNav.length > 0)
    ? cmsGlobal.headerNav.map((item) => ({
        label: item.label,
        href: normalizeAnchorHref(item.href, item.label),
      }))
    : [
        { label: t('header.solutions', 'Çözümler'), href: '#solutions-tab' },
        { label: t('header.industries', 'Sektörler'), href: '#products-tab' },
        { label: t('header.projects', 'Referans Projeler'), href: '#reference-projects' },
        { label: t('header.partners', 'Çözüm Ortakları'), href: '#our-strategic-solution-partners' },
        { label: t('header.contact', 'İletişim'), href: '/contact' },
        { label: t('header.news', 'Blog'), href: '/blog' },
      ];

  const currentLangIndex = languageOptions.findIndex((option) => option.code === locale);
  const currentLanguage = languageOptions[currentLangIndex] || languageOptions[0];

  let headerBackgroundClass = 'bg-white border-b border-slate-blue/10 shadow-[0_10px_32px_rgba(10,10,43,0.08)]';
  if (useTransparentHeader) {
    headerBackgroundClass = 'bg-primary-black/32 backdrop-blur-[2px]';
  }

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${headerBackgroundClass}`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand logo */}
          <Link
            href={toLocalePath('/')}
            onClick={() => setIsOpen(false)}
            title={locale === 'tr' ? 'Traceability | Endüstriyel İzlenebilirlik & MES Çözümleri' : 'Traceability | Industrial Traceability & MES Solutions'}
            className={`font-poppins text-2xl sm:text-3xl font-extrabold tracking-tight leading-none transition-all duration-300 hover:tracking-normal self-center ${
              useTransparentHeader ? 'text-white' : 'text-primary-black'
            }`}
            aria-label={locale === 'tr' ? 'Traceability - Endüstriyel İzlenebilirlik, MES ve Akıllı Fabrika Çözümleri | Ana Sayfa' : 'Traceability - Industrial Traceability & MES Solutions | Home'}
          >
            Traceability
            {locale === 'tr' && (
              <span style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap' }}>
                | İzlenebilirlik
              </span>
            )}
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8 self-center">
            {navItems.map((item) => (
              <div key={item.label}>
                {isAnchorHref(item.href) ? (
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    className={`text-sm font-semibold transition-colors hover:text-accent-blue ${
                      useTransparentHeader ? 'text-white' : 'text-primary-black'
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={toLocalePath(item.href)}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-semibold transition-colors hover:text-accent-blue ${
                      useTransparentHeader ? 'text-white' : 'text-primary-black'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div ref={langMenuRef} className="relative hidden lg:block w-[116px] self-center">
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setIsLangOpen((prev) => !prev);
                }}
                aria-label={t('language.switchAria', 'Dil değiştir')}
                className={`w-full h-10 flex items-center justify-between rounded-md px-3 text-xs font-bold transition-all duration-300 ${
                  useTransparentHeader
                    ? 'text-white bg-white/5 ring-1 ring-white/20 hover:bg-white/15 hover:ring-white/35'
                    : 'text-primary-black bg-white shadow-sm ring-1 ring-slate-200/80 hover:bg-slate-50 hover:ring-slate-300'
                }`}
              >
                <span className="flex items-center gap-2">
                  <img src={currentLanguage.flagSrc} alt={currentLanguage.label} width="20" height="16" className="h-4 w-5 rounded-[2px] object-cover" />
                  <span>{currentLanguage.label}</span>
                </span>
                <IconChevronDown size={14} className={`transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-full rounded-md bg-white/95 backdrop-blur-md shadow-lg ring-1 ring-slate-200/80 overflow-hidden z-50 animate-fade-in">
                  {languageOptions.map((option) => (
                    <button
                      type="button"
                      key={option.code}
                      onClick={() => {
                        handleLocaleChange(option.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full h-10 flex items-center gap-2 px-3 text-sm text-left transition-all duration-200 ${
                        locale === option.code
                          ? 'bg-slate-100/90 text-primary-black font-semibold'
                          : 'text-gray-700 hover:bg-slate-50/90'
                      }`}
                    >
                      <img src={option.flagSrc} alt={option.label} width="20" height="16" className="h-4 w-5 rounded-[2px] object-cover" />
                      <span>{option.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="lg:hidden relative w-[88px] sm:w-[96px]">
              <label htmlFor="mobile-language-select" className="sr-only">
                {t('language.switchAria', 'Dil değiştir')}
              </label>
              <select
                id="mobile-language-select"
                value={locale}
                onChange={(event) => handleLocaleChange(event.target.value)}
                className={`h-11 sm:h-12 w-full rounded-md pl-3 pr-8 text-xs font-bold appearance-none transition-all duration-300 cursor-pointer ${
                  useTransparentHeader
                    ? 'text-white bg-white/5 ring-1 ring-white/25 hover:bg-white/15 hover:ring-white/40'
                    : 'text-primary-black bg-white shadow-sm ring-1 ring-slate-200/80 hover:bg-slate-50 hover:ring-slate-300'
                }`}
                aria-label={t('language.switchAria', 'Dil değiştir')}
              >
                {languageOptions.map((option) => (
                  <option key={option.code} value={option.code} className="text-primary-black bg-white">
                    {option.label}
                  </option>
                ))}
              </select>
              <IconChevronDown
                size={14}
                className={`pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 ${
                  useTransparentHeader ? 'text-white' : 'text-primary-black'
                }`}
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? t('header.closeMenu', 'Menüyü kapat') : t('header.openMenu', 'Menüyü aç')}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className={`lg:hidden p-3 rounded-md transition-colors ${
                useTransparentHeader ? 'text-white' : 'text-primary-black'
              }`}
            >
              {isOpen ? <IconX size={24} /> : <IconMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div id="mobile-navigation" className="lg:hidden bg-white/98 backdrop-blur-md rounded-xl shadow-xl p-4 mb-4 border border-slate-blue/10 animate-slide-up max-h-[calc(100vh-5rem)] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.label} className="mb-3">
                {isAnchorHref(item.href) ? (
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    className="w-full text-left px-4 py-4 text-base text-primary-black font-semibold hover:bg-gray-light hover:bg-opacity-40 rounded-md transition-colors"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={toLocalePath(item.href)}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-4 text-base text-primary-black font-semibold hover:bg-gray-light hover:bg-opacity-40 rounded-md transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
