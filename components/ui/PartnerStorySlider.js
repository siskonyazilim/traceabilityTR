'use client';
/* eslint-disable react/prop-types */

import { useMemo, useState } from 'react';

function resolveLocalizedValue(slide, locale, baseKey) {
  if (!slide || typeof slide !== 'object') {
    return '';
  }

  const roKey = `${baseKey}Ro`;
  const enKey = `${baseKey}En`;

  if (locale === 'en') {
    return slide[enKey] || slide[baseKey] || slide[roKey] || '';
  }

  return slide[roKey] || slide[baseKey] || slide[enKey] || '';
}

export default function PartnerStorySlider({ slides = [], partnerName, locale = 'ro' }) {
  const normalizedSlides = useMemo(() => {
    return slides
      .filter((slide) => slide && typeof slide === 'object' && slide.image)
      .map((slide) => ({
        image: slide.image,
        title: resolveLocalizedValue(slide, locale, 'title'),
        description: resolveLocalizedValue(slide, locale, 'description'),
      }));
  }, [slides, locale]);

  const [activeIndex, setActiveIndex] = useState(0);

  if (normalizedSlides.length === 0) {
    return (
      <section className="mb-14 rounded-2xl border border-dashed border-slate-300 bg-slate-50/60 px-6 py-8 text-center">
        <h3 className="text-xl md:text-2xl font-semibold text-primary-black mb-2">
          {locale === 'en' ? 'Brand Gallery and Story' : 'Galerie si Poveste de Brand'}
        </h3>
        <p className="text-gray-text text-base md:text-lg max-w-2xl mx-auto">
          {locale === 'en'
            ? `Visuals and story text for ${partnerName} will be added here.`
            : `Imaginile si textele de prezentare pentru ${partnerName} vor fi adaugate aici.`}
        </p>
      </section>
    );
  }

  const safeIndex = Math.min(activeIndex, normalizedSlides.length - 1);
  const activeSlide = normalizedSlides[safeIndex];
  const hasStoryContent = Boolean(activeSlide.title || activeSlide.description);

  const goPrev = () => {
    setActiveIndex((current) => (current === 0 ? normalizedSlides.length - 1 : current - 1));
  };

  const goNext = () => {
    setActiveIndex((current) => (current === normalizedSlides.length - 1 ? 0 : current + 1));
  };

  return (
    <section className="mb-14">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className={hasStoryContent ? 'lg:col-span-3' : 'lg:col-span-5'}>
            <div className={`relative w-full bg-slate-100 ${hasStoryContent ? 'h-[320px] md:h-[420px] lg:h-[460px]' : 'h-[340px] md:h-[460px] lg:h-[560px]'}`}>
              <img
                src={activeSlide.image}
                alt={`${partnerName} visual ${safeIndex + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {hasStoryContent ? (
            <div className="lg:col-span-2 p-6 md:p-8 bg-slate-50/70 flex flex-col justify-center">
              {activeSlide.title ? (
                <h4 className="text-xl md:text-2xl font-semibold text-primary-black mb-3 leading-tight">
                  {activeSlide.title}
                </h4>
              ) : null}
              {activeSlide.description ? (
                <p className="text-gray-text text-base md:text-lg leading-relaxed">
                  {activeSlide.description}
                </p>
              ) : null}
            </div>
          ) : null}
        </div>

        <button
          type="button"
          aria-label={locale === 'en' ? 'Previous slide' : 'Slide anterior'}
          onClick={goPrev}
          disabled={normalizedSlides.length < 2}
          className={`absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-slate-800 shadow transition ${
            normalizedSlides.length < 2 ? 'cursor-not-allowed opacity-50' : 'hover:bg-white'
          }`}
        >
          ‹
        </button>
        <button
          type="button"
          aria-label={locale === 'en' ? 'Next slide' : 'Slide urmator'}
          onClick={goNext}
          disabled={normalizedSlides.length < 2}
          className={`absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-slate-800 shadow transition ${
            normalizedSlides.length < 2 ? 'cursor-not-allowed opacity-50' : 'hover:bg-white'
          }`}
        >
          ›
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {normalizedSlides.map((slide, index) => (
          <button
            key={`${slide.image}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={locale === 'en' ? `Go to slide ${index + 1}` : `Mergi la slide ${index + 1}`}
            className={`h-14 w-24 overflow-hidden rounded-lg border transition ${
              safeIndex === index
                ? 'border-secondary-blue ring-2 ring-secondary-blue/30'
                : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <img
              src={slide.image}
              alt={`${partnerName} thumbnail ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
