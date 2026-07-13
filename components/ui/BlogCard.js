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
  const readMoreLabel = t('cards.readMore', 'Citește mai mult →').split('→')[0].trim();

  return (
    <article className="h-full">
      <Link
        href={toLocalePath(`/blog/${post.slug}`, locale)}
        className="group flex h-full flex-col rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/70 shadow-soft hover:shadow-soft-lg hover:border-sky-300 transition-all overflow-hidden"
      >
        {/* Blog image */}
        <div className="aspect-video bg-gradient-to-br from-sky-100 via-blue-100 to-cyan-100 flex items-center justify-center overflow-hidden relative">
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
              className="object-cover"
              loading={prioritizeImage ? 'eager' : 'lazy'}
              priority={prioritizeImage}
              fetchPriority={prioritizeImage ? 'high' : 'auto'}
              quality={78}
              onError={() => setImageError(true)}
            />
          )}
        </div>

        <div className="p-6 md:p-7 flex-1 flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs font-semibold text-secondary-blue uppercase">
              {post.category}
            </span>
            <span className="text-xs text-inactive-gray">{date}</span>
          </div>

          <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-secondary-blue transition-colors min-h-[3.5rem] flex items-center justify-center">
            {post.title}
          </h3>

          <p className="text-slate-600 text-sm leading-7 mb-4 max-w-[46ch] min-h-[96px]">
            {post.excerpt}
          </p>

          <span className="card-cta-mini mt-auto mx-auto">
            {readMoreLabel}
            <svg className="card-cta-mini-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
        </Link>
    </article>
  );
};

export default BlogCard;
