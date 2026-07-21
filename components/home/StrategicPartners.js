'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import { IconChevronLeft, IconChevronRight } from '../ui/Icons';
import { useLanguage } from '../i18n/LanguageProvider';
import { strategicPartners } from '../../data/partners';
import { getFirstSentenceText, localizePartners } from '../../lib/i18n/contentLocalization';
import { toLocalePath } from '../../lib/i18n/dictionaries';

export const StrategicPartners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [pauseUntil, setPauseUntil] = useState(0);
  const { locale, t } = useLanguage();
  let detailBasePath = '/solution-partners';
  if (locale === 'ro') {
    detailBasePath = '/parteneri-de-solutii';
  }
  const localizedPartners = useMemo(() => localizePartners(strategicPartners, locale), [locale]);

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

  const maxIndex = Math.max(0, localizedPartners.length - itemsPerView);

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
    () => localizedPartners.slice(currentIndex, currentIndex + itemsPerView),
    [currentIndex, itemsPerView, localizedPartners]
  );

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
          title={t('sections.strategicPartnersTitle', 'Partenerii noștri strategici de soluții')}
          subtitle={t('sections.strategicPartnersSubtitle', 'Partenerii noștri valoroși de soluții, care sunt lideri în domeniile lor și și-au dovedit succesul la nivel global.')}
        />

        <div className="relative">
          <div className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={handlePrev}
              aria-label={t('sections.partnerPrev', 'Partener anterior')}
              className="h-12 w-12 rounded-md bg-white/95 backdrop-blur-sm border border-slate-200 shadow-soft text-primary-black hover:bg-secondary-blue hover:text-white transition-colors flex items-center justify-center"
            >
              <IconChevronLeft size={20} />
            </button>
          </div>

          <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={handleNext}
              aria-label={t('sections.partnerNext', 'Partener următor')}
              className="h-12 w-12 rounded-md bg-white/95 backdrop-blur-sm border border-slate-200 shadow-soft text-primary-black hover:bg-secondary-blue hover:text-white transition-colors flex items-center justify-center"
            >
              <IconChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-8">
            {visiblePartners.map((partner, index) => (
              <Link key={partner.id} href={toLocalePath(`${detailBasePath}/${partner.slug}`, locale)}>
                <article
                  className="h-full rounded-md bg-gradient-to-b from-white to-slate-50/70 border border-slate-200 shadow-soft shadow-soft-hover hover:border-accent-blue transition-all duration-300 overflow-hidden group"
                >
                  {/* Logo */}
                  <div className="h-40 flex items-center justify-center p-6 bg-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                      <img
                        src={partner.logo}
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
                    <h3 className="text-xl font-bold text-primary-black mb-3 group-hover:text-accent-blue transition-colors min-h-[3.2rem] max-w-[16.5rem] mx-auto flex items-center justify-center">
                      {partner.name}
                    </h3>
                    <p className="card-description-copy card-description-block text-sm text-gray-text leading-7 max-w-[18.5rem] mx-auto">
                      {getFirstSentenceText(partner.description)}
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
        </div>
      </Container>
    </section>
  );
};

export default StrategicPartners;
