'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import { IconChevronLeft, IconChevronRight } from '../ui/Icons';
import { useLanguage } from '../i18n/LanguageProvider';
import { referenceProjects } from '../../data/references';
import { getFirstSentenceText, localizeReferenceProjects } from '../../lib/i18n/contentLocalization';
import { sortReferenceProjects, withReferenceProjectTimeline } from '../../lib/referenceProjectOrdering';
import { toLocalePath } from '../../lib/i18n/dictionaries';
import { getLocalizedSlug } from '../../lib/i18n/slugMapping';

export const ReferenceProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [pauseUntil, setPauseUntil] = useState(0);
  const { locale, t } = useLanguage();
  const getProjectDetailPath = (slug, targetLocale) => {
    const localizedSlug = getLocalizedSlug('portfolio', slug, targetLocale);
    const basePath = targetLocale === 'en'
      ? '/reference-projects'
      : (targetLocale === 'ro' ? '/proiecte-de-referinta' : '/portfolio');
    return toLocalePath(`${basePath}/${localizedSlug}`, targetLocale);
  };
  const localizedProjects = useMemo(
    () => withReferenceProjectTimeline(sortReferenceProjects(localizeReferenceProjects(referenceProjects, locale)), locale),
    [locale]
  );
  const featuredProjects = useMemo(() => {
    return [...localizedProjects]
      .sort((a, b) => {
        const aCode = a.referenceDate || '';
        const bCode = b.referenceDate || '';
        return bCode.localeCompare(aCode);
      })
      .slice(0, 10);
  }, [localizedProjects]);

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

  const maxIndex = Math.max(0, featuredProjects.length - itemsPerView);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(0);
    }
  }, [maxIndex, currentIndex]);

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

  const handlePrev = () => {
    pauseAutoPlay();
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    pauseAutoPlay();
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const visibleProjects = useMemo(
    () => featuredProjects.slice(currentIndex, currentIndex + itemsPerView),
    [currentIndex, itemsPerView, featuredProjects]
  );

  return (
    <section id="reference-projects" className="section-block bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/30 to-transparent"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-green/5 rounded-md blur-3xl"></div>

      <Container size="xl" className="relative z-10">
        <SectionHeader
          title={t('sections.referenceProjectsTitle', 'Referans Projeler')}
          subtitle={t('sections.referenceProjectsSubtitle', 'Sektörler genelinde gerçek uygulama örnekleri')}
        />

        <div className="relative mb-10">
          {/* Enhanced Navigation Buttons */}
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 hidden md:block">
            <button
              onClick={handlePrev}
              className="h-12 w-12 rounded-md bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 text-primary-black hover:border-accent-blue hover:bg-white transition-all duration-300 flex items-center justify-center shadow-soft hover:shadow-soft-lg group"
              aria-label={t('sections.referenceProjectsPrev', 'Önceki proje')}
            >
              <IconChevronLeft size={24} className="group-hover:text-accent-blue transition-colors" />
            </button>
          </div>

          <div className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 hidden md:block">
            <button
              onClick={handleNext}
              className="h-12 w-12 rounded-md bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 text-primary-black hover:border-accent-blue hover:bg-white transition-all duration-300 flex items-center justify-center shadow-soft hover:shadow-soft-lg group"
              aria-label={t('sections.referenceProjectsNext', 'Sonraki proje')}
            >
              <IconChevronRight size={24} className="group-hover:text-accent-blue transition-colors" />
            </button>
          </div>

          {/* Grid with Featured Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 px-2">
            {visibleProjects.map((project, index) => (
              <article
                key={project.id}
                className="h-full group"
              >
                <Link
                  href={getProjectDetailPath(project.slug, locale)}
                  className="h-full flex flex-col rounded-md border-2 border-slate-200 bg-white shadow-soft hover:shadow-soft-lg hover:border-accent-blue transition-all duration-300 overflow-hidden"
                >
                  {/* Image with Overlay Effect */}
                  <div className="relative h-44 bg-white overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative h-full w-full flex items-center justify-center p-5">
                      <img
                        src={project.logo || project.image}
                        alt={project.title}
                        width="320"
                        height="128"
                        className="max-h-32 w-auto object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    {project.referenceDateLabel && (
                      <div className="absolute bottom-3 left-3 rounded-md bg-primary-black/75 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                        {project.referenceDateLabel}
                      </div>
                    )}
                    {/* Corner Badge */}
                    <div className="absolute top-4 right-4 w-3 h-3 rounded-md bg-gradient-to-br from-accent-blue to-accent-green shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col items-center text-center">
                    <h3 className="text-xl font-bold text-primary-black mb-3 h-[4.75rem] line-clamp-3 overflow-hidden flex items-center justify-center text-center group-hover:text-accent-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="card-description-copy card-description-block text-sm text-gray-text leading-6 mb-4 h-[4.5rem] line-clamp-3 overflow-hidden text-justify [text-justify:inter-word] px-3">
                      {getFirstSentenceText(project.description)}
                    </p>
                    <span className="card-cta-mini mt-auto">
                      <span>{t('sections.details', 'Detalii')}</span>
                      <svg className="card-cta-mini-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-5 flex md:hidden items-center justify-center gap-3">
            <button
              onClick={handlePrev}
              className="h-11 w-11 rounded-md bg-gradient-to-br from-white to-slate-50 border border-slate-200 text-primary-black transition-all duration-300 flex items-center justify-center shadow-soft"
              aria-label={t('sections.referenceProjectsPrev', 'Önceki proje')}
            >
              <IconChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="h-11 w-11 rounded-md bg-gradient-to-br from-white to-slate-50 border border-slate-200 text-primary-black transition-all duration-300 flex items-center justify-center shadow-soft"
              aria-label={t('sections.referenceProjectsNext', 'Sonraki proje')}
            >
              <IconChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Button
            as={Link}
            href={toLocalePath(locale === 'en' ? '/reference-projects' : (locale === 'ro' ? '/proiecte-de-referinta' : '/portfolio'), locale)}
            variant="outline"
            size="lg"
            className="border-2 border-primary-black text-primary-black hover:bg-primary-black hover:text-white"
          >
            {t('sections.allProjects', 'TOATE PROIECTELE NOASTRE')}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ReferenceProjects;
