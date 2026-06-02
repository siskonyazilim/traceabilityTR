'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import { useLanguage } from '../i18n/LanguageProvider';
import { referenceProjects } from '../../data/references';
import { localizeReferenceProjects } from '../../lib/i18n/contentLocalization';

export const ReferenceProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [pauseUntil, setPauseUntil] = useState(0);
  const { locale, t } = useLanguage();
  const localizedProjects = useMemo(() => localizeReferenceProjects(referenceProjects, locale), [locale]);

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

  const maxIndex = Math.max(0, localizedProjects.length - itemsPerView);

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
    () => localizedProjects.slice(currentIndex, currentIndex + itemsPerView),
    [currentIndex, itemsPerView, localizedProjects]
  );

  return (
    <section id="reference-projects" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/30 to-transparent"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl"></div>

      <Container size="xl" className="relative z-10">
        <SectionHeader
          title={t('sections.referenceProjectsTitle', 'Proiecte de referință')}
          subtitle={t('sections.referenceProjectsSubtitle', 'Exemple reale de implementare pentru industrii diferite')}
        />

        <div className="relative mb-10">
          {/* Enhanced Navigation Buttons */}
          <div className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20">
            <button
              onClick={handlePrev}
              className="h-12 w-12 rounded-full bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 text-primary-black hover:border-accent-blue hover:bg-white transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl group"
              aria-label={t('sections.referenceProjectsPrev', 'Proiect anterior')}
            >
              <FiChevronLeft size={24} className="group-hover:text-accent-blue transition-colors" />
            </button>
          </div>

          <div className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20">
            <button
              onClick={handleNext}
              className="h-12 w-12 rounded-full bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 text-primary-black hover:border-accent-blue hover:bg-white transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl group"
              aria-label={t('sections.referenceProjectsNext', 'Proiect următor')}
            >
              <FiChevronRight size={24} className="group-hover:text-accent-blue transition-colors" />
            </button>
          </div>

          {/* Grid with Featured Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
            {visibleProjects.map((project, index) => (
              <motion.article
                key={project.id}
                className="h-full group"
              >
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="h-full flex flex-col rounded-3xl border-2 border-slate-200 bg-white shadow-soft hover:shadow-2xl hover:border-accent-blue transition-all duration-300 overflow-hidden"
                >
                  {/* Image with Overlay Effect */}
                  <div className="relative h-44 bg-white overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative h-full w-full flex items-center justify-center p-5">
                      <img
                        src={project.logo || project.image}
                        alt={project.title}
                        className="max-h-32 w-auto object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    {/* Corner Badge */}
                    <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-br from-accent-blue to-accent-green shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col">
                    <h3 className="text-xl font-bold text-primary-black mb-3 group-hover:text-accent-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-text leading-relaxed line-clamp-3 flex-1">
                      {project.description}
                    </p>
                    {/* Read More Link */}
                    <div className="mt-4 flex items-center text-accent-blue font-semibold text-sm">
                      <span>{t('sections.details', 'Detalii')}</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Enhanced Pagination Dots */}
          <div className="flex items-center justify-center mt-10 gap-3">
            {Array.from({ length: maxIndex + 1 }, (_, page) => page).map((page) => (
              <button
                key={`projects-page-${page}`}
                onClick={() => {
                  pauseAutoPlay();
                  setCurrentIndex(page);
                }}
                className={`rounded-full transition-all duration-300 ${
                  currentIndex === page
                    ? 'w-10 h-3 bg-secondary-blue shadow-md'
                    : 'w-3 h-3 bg-slate-300 hover:bg-accent-blue'
                }`}
                aria-label={t('sections.referenceProjectsGoTo', `Mergi la pagina ${page + 1}`, { page: page + 1 })}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Button
            as={Link}
            href="/proiecte-de-referinta"
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
