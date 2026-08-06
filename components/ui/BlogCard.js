'use client';
/* eslint-disable react/prop-types */

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../i18n/LanguageProvider';
import { toLocalePath } from '../../lib/i18n/dictionaries';

export const BlogCard = ({
  post,
  prioritizeImage = false,
  imageSizes = '(max-width: 767px) 100vw, (max-width: 1280px) 50vw, 33vw',
}) => {
  const [imageError, setImageError] = useState(false);
  const { locale, t } = useLanguage();

  const localeDateMap = {
    en: 'en-US',
    tr: 'tr-TR',
    ro: 'ro-RO',
  };
  const dateLocale = localeDateMap[locale] || 'tr-TR';
  const date = new Date(post.date).toLocaleDateString(dateLocale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
  const readMoreLabel = t('cards.readMore', 'Devamını oku →').split('→')[0].trim();

  return (
    <article className="h-full">
      <Link
        href={toLocalePath(`/blog/${post.slug}`, locale)}
        className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white shadow-soft shadow-soft-hover hover:border-accent-blue hover:-translate-y-1 transition-all duration-300 overflow-hidden"
      >
        {/* Blog image — fixed height 176px */}
        <div className="relative h-44 w-full overflow-hidden bg-slate-100">
          {imageError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent-blue to-accent-green">
              <div className="text-white text-lg font-semibold tracking-wide">BLOG</div>
            </div>
          ) : (
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes={imageSizes}
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              loading={prioritizeImage ? 'eager' : 'lazy'}
              priority={prioritizeImage}
              fetchPriority={prioritizeImage ? 'high' : 'auto'}
              quality={80}
              onError={() => setImageError(true)}
            />
          )}

          {/* Subtle gradient so the badge stays legible on any image */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/40 to-transparent" />

          {/* Category badge floating on the image */}
          <span className="absolute top-4 left-5 rounded-full bg-white/95 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-accent-blue uppercase tracking-wide shadow-sm">
            {post.category}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col px-6 md:px-8 py-6 md:py-7 text-center">
          <span className="text-xs text-gray-text mb-2">{date}</span>

          <h3 className="text-lg md:text-xl font-bold text-primary-black mb-2 h-[4.75rem] line-clamp-3 overflow-hidden flex items-center justify-center text-center group-hover:text-accent-blue transition-colors">
            {post.title}
          </h3>

          <p className="text-sm text-gray-text leading-6 mb-4 h-[4.5rem] line-clamp-3 overflow-hidden text-justify [text-justify:inter-word] px-3">
            {post.excerpt}
          </p>

          <span className="card-cta-mini mt-auto mx-auto inline-flex items-center gap-1 text-accent-blue font-semibold text-sm">
            {readMoreLabel}
            <svg className="card-cta-mini-icon w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;