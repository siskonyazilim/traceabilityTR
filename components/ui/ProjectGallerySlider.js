'use client';
/* eslint-disable react/prop-types */

import { useMemo, useState } from 'react';

export default function ProjectGallerySlider({ images = [], title = 'Project', dateLabel = '' }) {
  const normalizedImages = useMemo(
    () => [...new Set(images.filter(Boolean))],
    [images]
  );
  const [activeIndex, setActiveIndex] = useState(0);

  if (normalizedImages.length === 0) return null;

  const safeIndex = Math.min(activeIndex, normalizedImages.length - 1);

  const goPrev = () => {
    setActiveIndex((current) => (current === 0 ? normalizedImages.length - 1 : current - 1));
  };

  const goNext = () => {
    setActiveIndex((current) => (current === normalizedImages.length - 1 ? 0 : current + 1));
  };

  return (
    <section className="mb-8">
      <div className="relative overflow-hidden rounded-md border border-slate-200 bg-slate-100">
        <div className="relative aspect-video w-full">
          <img
            src={normalizedImages[safeIndex]}
            alt={`${title} visual ${safeIndex + 1}`}
            className="h-full w-full object-cover"
          />
        </div>

        <button
          type="button"
          aria-label="Previous image"
          onClick={goPrev}
          disabled={normalizedImages.length < 2}
          className={`absolute left-3 top-1/2 -translate-y-1/2 rounded-md bg-white/90 px-3 py-2 text-sm font-semibold text-slate-800 shadow transition ${
            normalizedImages.length < 2 ? 'cursor-not-allowed opacity-50' : 'hover:bg-white'
          }`}
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Next image"
          onClick={goNext}
          disabled={normalizedImages.length < 2}
          className={`absolute right-3 top-1/2 -translate-y-1/2 rounded-md bg-white/90 px-3 py-2 text-sm font-semibold text-slate-800 shadow transition ${
            normalizedImages.length < 2 ? 'cursor-not-allowed opacity-50' : 'hover:bg-white'
          }`}
        >
          ›
        </button>
      </div>

      {dateLabel && (
        <p className="mt-3 text-left text-sm font-semibold text-slate-700">
          {dateLabel}
        </p>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {normalizedImages.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to image ${index + 1}`}
            className={`h-14 w-24 overflow-hidden rounded-md border transition ${
              safeIndex === index
                ? 'border-secondary-blue ring-2 ring-secondary-blue/30'
                : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <img
              src={image}
              alt={`${title} thumbnail ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
