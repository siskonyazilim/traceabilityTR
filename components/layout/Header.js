'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { IconChevronDown, IconMenu, IconX } from '../ui/Icons';
import { useLanguage } from '../i18n/LanguageProvider';

export const Header = () => {
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
      setScrolled(globalThis.scrollY > 20);
    };

    globalThis.addEventListener('scroll', handleScroll);
    return () => globalThis.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLocaleChange = async (nextLocaleCode) => {
    await setLocale(nextLocaleCode);
    router.push(toLocalePath(currentPathForLocale, nextLocaleCode));
    router.refresh();
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

  const handleNavClick = (id) => {
    const syncSolutionsTab = (tab) => {
      const tabValue = tab === 'products' ? 'products' : 'solutions';
      const section = document.querySelector('#traceability-solutions');

      if (section) {
        const y = section.getBoundingClientRect().top + globalThis.scrollY - 92;
        globalThis.scrollTo({ top: y, behavior: 'smooth' });

        const url = new URL(globalThis.location.href);
        url.searchParams.set('tab', tabValue);
        url.hash = 'traceability-solutions';
        globalThis.history.pushState(null, '', url.toString());

        globalThis.dispatchEvent(new CustomEvent('open-solutions-tab', { detail: { tab: tabValue } }));
        setIsOpen(false);
        return true;
      }

      router.push(toLocalePath(`/?tab=${tabValue}#traceability-solutions`));
      setIsOpen(false);
      return true;
    };

    if (id === '#solutions-tab') {
      if (syncSolutionsTab('solutions')) {
        return;
      }
    }

    if (id === '#products-tab') {
      if (syncSolutionsTab('products')) {
        return;
      }
    }

    const element = document.querySelector(id);
    if (element) {
      const y = element.getBoundingClientRect().top + globalThis.scrollY - 92;
      globalThis.scrollTo({ top: y, behavior: 'smooth' });
      // Update URL hash
      globalThis.history.pushState(null, '', id);
      setIsOpen(false);
      return;
    }

    // If section is not on the current page, go to homepage anchor.
    router.push(toLocalePath(`/${id}`));
    setIsOpen(false);
  };

  const navItems = [
    { label: t('header.solutions', 'Soluțiile Noastre'), href: '#solutions-tab' },
    { label: t('header.industries', 'Industrii'), href: '#products-tab' },
    { label: t('header.partners', 'Parteneri de Soluții'), href: '#our-strategic-solution-partners' },
    { label: t('header.contact', 'Contact'), href: toLocalePath('/contact') },
    { label: t('header.news', 'Blog'), href: toLocalePath('/blog') },
  ];

  const currentLangIndex = languageOptions.findIndex((option) => option.code === locale);
  const nextLangIndex = (currentLangIndex + 1) % languageOptions.length;
  const nextLanguage = languageOptions[nextLangIndex].code;
  const mobileNextLanguage = languageOptions[nextLangIndex];
  const currentLanguage = languageOptions[currentLangIndex] || languageOptions[0];

  let headerBackgroundClass = 'bg-white border-b border-slate-blue/10 shadow-[0_10px_32px_rgba(10,10,43,0.08)]';
  if (useTransparentHeader) {
    headerBackgroundClass = 'bg-primary-black/32 backdrop-blur-[2px]';
  }

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${headerBackgroundClass}`}
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Brand text */}
          <Link
            href={toLocalePath('/')}
            className={`font-poppins text-2xl font-extrabold tracking-tight transition-all duration-300 hover:tracking-normal ${
              useTransparentHeader ? 'text-white' : 'text-primary-black'
            }`}
          >
            Traceability
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.href.startsWith('#') ? (
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
                    href={item.href}
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
            <div ref={langMenuRef} className="relative hidden lg:block w-[116px]">
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setIsLangOpen((prev) => !prev);
                }}
                aria-label={t('language.switchAria', 'Schimbă limba')}
                className={`w-full h-10 flex items-center justify-between rounded-xl px-3 text-xs font-bold transition-all duration-300 ${
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
                <div className="absolute right-0 mt-2 w-full rounded-xl bg-white/95 backdrop-blur-md shadow-lg ring-1 ring-slate-200/80 overflow-hidden z-50 animate-fade-in">
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

            <button
              type="button"
              onClick={() => handleLocaleChange(nextLanguage)}
              aria-label={t('language.switchAria', 'Schimbă limba')}
              className={`lg:hidden h-10 px-2.5 rounded-xl flex items-center gap-2 text-xs font-bold transition-all duration-300 ${
                useTransparentHeader
                  ? 'text-white bg-white/5 ring-1 ring-white/25 hover:bg-white/15 hover:ring-white/40'
                  : 'text-primary-black bg-white shadow-sm ring-1 ring-slate-200/80 hover:bg-slate-50 hover:ring-slate-300'
              }`}
            >
              <img src={mobileNextLanguage.flagSrc} alt={mobileNextLanguage.label} width="20" height="16" className="h-4 w-5 rounded-[2px] object-cover" />
              <span>{mobileNextLanguage.label}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? t('header.closeMenu', 'Închide meniul') : t('header.openMenu', 'Deschide meniul')}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className={`lg:hidden p-2.5 rounded-lg transition-colors ${
                useTransparentHeader ? 'text-white' : 'text-primary-black'
              }`}
            >
              {isOpen ? <IconX size={24} /> : <IconMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div id="mobile-navigation" className="lg:hidden bg-white/95 backdrop-blur-md rounded-xl shadow-xl p-4 mb-4 border border-slate-blue/10 animate-slide-up">
            {navItems.map((item) => (
              <div key={item.label} className="mb-3">
                {item.href.startsWith('#') ? (
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    className="w-full text-left px-4 py-3 text-base text-primary-black font-semibold hover:bg-gray-light hover:bg-opacity-40 rounded-lg transition-colors"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-base text-primary-black font-semibold hover:bg-gray-light hover:bg-opacity-40 rounded-lg transition-colors"
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
