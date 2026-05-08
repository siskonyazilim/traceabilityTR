'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isDarkIntroPage = pathname === '/contact' || pathname === '/blog';
  const useTransparentHeader = isHomePage && !scrolled && !isOpen;
  const useDarkHeader = isDarkIntroPage && !scrolled && !isOpen;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    const element = document.querySelector(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 92;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsOpen(false);
      return;
    }

    // If section is not on the current page, go to homepage anchor.
    globalThis.location.href = `/${id}`;
  };

  const navItems = [
    { label: 'Soluțiile Noastre', href: '#traceability-solutions' },
    { label: 'Parteneri de Soluții', href: '#our-strategic-solution-partners' },
    { label: 'Industrii', href: '#reference-projects' },
    { label: 'Contact', href: '/contact' },
    { label: 'Știri', href: '/blog' },
  ];

  let headerBackgroundClass = 'bg-white border-b border-slate-blue/10 shadow-[0_10px_32px_rgba(10,10,43,0.08)]';
  if (useTransparentHeader) {
    headerBackgroundClass = 'bg-transparent';
  } else if (useDarkHeader) {
    headerBackgroundClass = 'bg-dark-bg';
  }

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${headerBackgroundClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand text */}
          <Link
            href="/"
            className={`font-poppins text-2xl font-extrabold tracking-tight transition-all duration-300 hover:tracking-normal ${
              useTransparentHeader || useDarkHeader ? 'text-white' : 'text-primary-black'
            }`}
          >
            Traceability
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.href.startsWith('#') ? (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`text-sm font-semibold transition-colors hover:text-accent-blue ${
                      useTransparentHeader || useDarkHeader ? 'text-white' : 'text-primary-black'
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-sm font-semibold transition-colors hover:text-accent-blue ${
                      useTransparentHeader || useDarkHeader ? 'text-white' : 'text-primary-black'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              useTransparentHeader || useDarkHeader ? 'text-white' : 'text-primary-black'
            }`}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-xl shadow-xl p-4 mb-4 border border-slate-blue/10 animate-slide-up">
            {navItems.map((item) => (
              <div key={item.label} className="mb-3">
                {item.href.startsWith('#') ? (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="w-full text-left px-3 py-2 text-primary-black font-semibold hover:bg-gray-light hover:bg-opacity-40 rounded-lg transition-colors"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-primary-black font-semibold hover:bg-gray-light hover:bg-opacity-40 rounded-lg transition-colors"
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
