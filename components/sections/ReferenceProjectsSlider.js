'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { IconChevronLeft, IconChevronRight } from '../ui/Icons';
import { getFirstSentenceText } from '../../lib/i18n/contentLocalization';
import { toLocalePath } from '../../lib/i18n/dictionaries';

export default function ReferenceProjectsSlider({
  projects = [],
  locale = 'ro',
  currentSlug,
  detailBasePath = '/portfolio',
  labels = {},
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [pauseUntil, setPauseUntil] = useState(0);

  const sliderProjects = useMemo(() => {
    return [...projects]
      .filter((project) => project.slug !== currentSlug)
      .sort((a, b) => {
        const aCode = a.referenceDate || '';
        const bCode = b.referenceDate || '';
        return bCode.localeCompare(aCode);
      });
  }, [projects, currentSlug]);

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

  const maxIndex = Math.max(0, sliderProjects.length - itemsPerView);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex, maxIndex]);

  useEffect(() => {
    if (sliderProjects.length <= itemsPerView) {
      return undefined;
    }

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (Date.now() < pauseUntil) {
          return prev;
        }

        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 4800);

    return () => clearInterval(timer);
  }, [itemsPerView, maxIndex, pauseUntil, sliderProjects.length]);

  if (sliderProjects.length === 0) {
    return null;
  }

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

  const visibleProjects = sliderProjects.slice(currentIndex, currentIndex + itemsPerView);
  const detailsLabel = labels.details || 'Detalii';

  return (
    <section className="mt-16 pt-12 border-t border-gray-light relative">
      <h2 className="text-2xl md:text-3xl font-semibold text-primary-black mb-8 text-center">
        {labels.title || 'Proiecte Inrudite'}
      </h2>

      <div className="relative">
        {sliderProjects.length > itemsPerView && (
          <>
            <div className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 hidden md:block">
              <button
                type="button"
                onClick={handlePrev}
                className="h-12 w-12 rounded-md bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 text-primary-black hover:border-accent-blue hover:bg-white transition-all duration-300 flex items-center justify-center shadow-soft hover:shadow-soft-lg group"
                aria-label={labels.prevAria || 'Proiect anterior'}
              >
                <IconChevronLeft size={24} className="group-hover:text-accent-blue transition-colors" />
              </button>
            </div>

            <div className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 hidden md:block">
              <button
                type="button"
                onClick={handleNext}
                className="h-12 w-12 rounded-md bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 text-primary-black hover:border-accent-blue hover:bg-white transition-all duration-300 flex items-center justify-center shadow-soft hover:shadow-soft-lg group"
                aria-label={labels.nextAria || 'Proiect urmator'}
              >
                <IconChevronRight size={24} className="group-hover:text-accent-blue transition-colors" />
              </button>
            </div>
          </>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 px-2">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className="h-full group"
            >
              <Link
                href={toLocalePath(`${detailBasePath}/${project.slug}`, locale)}
                className="h-full flex flex-col rounded-lg border-2 border-slate-200 bg-white shadow-soft hover:shadow-soft-lg hover:border-accent-blue transition-all duration-300 overflow-hidden"
              >
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
                  <div className="absolute top-4 right-4 w-3 h-3 rounded-md bg-gradient-to-br from-accent-blue to-accent-green shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="flex-1 p-6 flex flex-col items-center text-center">
                  <h3 className="text-xl font-bold text-primary-black mb-3 group-hover:text-accent-blue transition-colors min-h-[3.2rem]">
                    {project.title}
                  </h3>
                  <p className="card-description-copy card-description-block text-sm text-gray-text leading-7 flex-1 max-w-[44ch] mx-auto">
                    {getFirstSentenceText(project.description)}
                  </p>
                  <span className="card-cta-mini mt-auto">
                    <span>{detailsLabel}</span>
                    <svg className="card-cta-mini-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}