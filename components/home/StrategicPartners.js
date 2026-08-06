'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import { IconChevronLeft, IconChevronRight } from '../ui/Icons';
import { useLanguage } from '../i18n/LanguageProvider';
import { getFirstSentenceText } from '../../lib/i18n/contentLocalization';
import { toLocalePath } from '../../lib/i18n/dictionaries';
import { getStrapiMediaUrl } from '../../lib/strapi/media';

export const StrategicPartners = ({ initialPartners = [], initialPartnersLocale = 'tr' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [pauseUntil, setPauseUntil] = useState(0);
  const { locale, t } = useLanguage();
  let detailBasePath = '/solution-partners';
  if (locale === 'ro') {
    detailBasePath = '/parteneri-de-solutii';
  }
  const [partners, setPartners] = useState(Array.isArray(initialPartners) ? initialPartners : []);
  const hydratedFromServerRef = useRef(false);

  useEffect(() => {
    if (!hydratedFromServerRef.current && locale === initialPartnersLocale && partners.length > 0) {
      hydratedFromServerRef.current = true;
      return;
    }

    let active = true;
    const controller = new AbortController();

    async function loadPartners() {
      try {
        const response = await fetch(`/api/partners?locale=${encodeURIComponent(locale)}`, {
          method: 'GET',
          cache: 'no-store',
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Failed to load partners (${response.status})`);
        }

        const payload = await response.json();
        const fetchedPartners = Array.isArray(payload?.data) ? payload.data : [];

        if (active) {
          setPartners(fetchedPartners);
        }
      } catch (error) {
        if (error?.name === 'AbortError') {
          return;
        }

        console.error('Failed to load partners from Strapi API', error);
        if (active) {
          setPartners([]);
        }
      }
    }

    loadPartners();

    return () => {
      active = false;
      controller.abort();
    };
  }, [initialPartnersLocale, locale]);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (globalThis.innerWidth < 768) {
        setItemsPerView(1);
      } else if (globalThis.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    globalThis.addEventListener('resize', updateItemsPerView);
    return () => globalThis.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, partners.length - itemsPerView);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex, maxIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (Date.now() < pauseUntil) {
          return prev;
        }

        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 4800);

    return () => clearInterval(timer);
  }, [maxIndex, pauseUntil]);

  const pauseAutoPlay = () => {
    setPauseUntil(Date.now() + 8000);
  };

  const visiblePartners = useMemo(
    () => partners.slice(currentIndex, currentIndex + itemsPerView),
    [currentIndex, itemsPerView, partners]
  );
  const hasPartners = partners.length > 0;

  const handlePrev = () => {
    pauseAutoPlay();
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    pauseAutoPlay();
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="our-strategic-solution-partners" className="section-block bg-gradient-to-br from-[#f6f7f8] via-white to-[#f6f7f8] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-accent-blue/5 rounded-md blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary-blue/5 rounded-md blur-3xl"></div>

      <Container size="xl" className="relative z-10">
        <SectionHeader
          title={t('sections.strategicPartnersTitle', 'Stratejik Çözüm Ortaklarımız')}
          subtitle={t('sections.strategicPartnersSubtitle', 'Çözüm ortaklarımız, alanlarında lider konumda olup küresel başarılarını kanıtlamış kuruluşlardır.')}
        />

        <div className="relative">
          {hasPartners ? (
          <div className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10">
            <button
              type="button"
              onClick={handlePrev}
              aria-label={t('sections.partnerPrev', 'Partener anterior')}
              className="h-12 w-12 rounded-md bg-white/95 backdrop-blur-sm border border-slate-200 shadow-soft text-primary-black hover:bg-secondary-blue hover:text-white transition-colors flex items-center justify-center"
            >
              <IconChevronLeft size={20} />
            </button>
          </div>
          ) : null}

          {hasPartners ? (
          <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10">
            <button
              type="button"
              onClick={handleNext}
              aria-label={t('sections.partnerNext', 'Sonraki ortak')}
              className="h-12 w-12 rounded-md bg-white/95 backdrop-blur-sm border border-slate-200 shadow-soft text-primary-black hover:bg-secondary-blue hover:text-white transition-colors flex items-center justify-center"
            >
              <IconChevronRight size={20} />
            </button>
          </div>
          ) : null}

          {hasPartners ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-8">
            {visiblePartners.map((partner, index) => (
              <Link key={partner.documentId || partner.id || `${partner.slug}-${index}`} href={toLocalePath(`${detailBasePath}/${partner.slug}`, locale)}>
                <article
                  className="h-full rounded-md bg-gradient-to-b from-white to-slate-50/70 border border-slate-200 shadow-soft shadow-soft-hover hover:border-accent-blue transition-all duration-300 overflow-hidden group"
                >
                  {/* Logo */}
                  <div className="h-44 flex items-center justify-center p-6 bg-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                      <img
                        src={getStrapiMediaUrl(partner.logo)}
                        alt={partner.name}
                        width="220"
                        height="96"
                        className="max-h-24 max-w-[92%] object-contain"
                        style={{ objectFit: 'contain' }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>

                  <div className="p-6 md:p-7 h-full flex flex-col items-center text-center">
                    <h3 className="text-xl font-bold text-primary-black mb-3 h-[4.75rem] line-clamp-3 overflow-hidden flex items-center justify-center text-center group-hover:text-accent-blue transition-colors max-w-[16.5rem] mx-auto">
                      {partner.name}
                    </h3>
                    <p className="card-description-copy card-description-block text-sm text-gray-text leading-6 mb-4 h-[4.5rem] line-clamp-3 overflow-hidden text-justify [text-justify:inter-word] px-3">
                      {getFirstSentenceText(partner.description || partner.summary)}
                    </p>
                    <span className="card-cta-mini mt-auto mx-auto">
                      {t('sections.details', 'Detalii')}
                      <svg className="card-cta-mini-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          ) : (
          <div className="mb-8 rounded-md border border-slate-200 bg-white/70 p-8 text-center text-gray-text">
            {t('sections.strategicPartnersEmpty', 'Stratejik çözüm ortakları şu anda yüklenemedi. Lütfen kısa süre sonra tekrar deneyin.')}
          </div>
          )}

          {hasPartners ? (
          <div className="mt-5 mb-2 flex md:hidden items-center justify-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label={t('sections.partnerPrev', 'Önceki partner')}
              className="h-11 w-11 rounded-md bg-white/95 backdrop-blur-sm border border-slate-200 shadow-soft text-primary-black transition-colors flex items-center justify-center"
            >
              <IconChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label={t('sections.partnerNext', 'Sonraki partner')}
              className="h-11 w-11 rounded-md bg-white/95 backdrop-blur-sm border border-slate-200 shadow-soft text-primary-black transition-colors flex items-center justify-center"
            >
              <IconChevronRight size={20} />
            </button>
          </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
};

export default StrategicPartners;
