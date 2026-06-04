'use client';
/* eslint-disable react/prop-types */

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../i18n/LanguageProvider';

export const BlogCard = ({ post }) => {
  const [imageError, setImageError] = useState(false);
  const { locale, t } = useLanguage();

  const dateLocale = locale === 'en' ? 'en-US' : 'ro-RO';
  const date = new Date(post.date).toLocaleDateString(dateLocale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="h-full">
      <Link
        href={`/blog/${post.slug}`}
        className="group block bg-white rounded-2xl border border-slate-200 shadow-soft hover:shadow-soft-lg hover:border-accent-blue transition-all overflow-hidden h-full"
      >
        {/* Blog Image */}
        <div className="aspect-video bg-gradient-to-br from-slate-blue via-secondary-blue to-primary-black flex items-center justify-center overflow-hidden relative">
          <Image
            src="/resmi/TRACEABILITY-logo.svg"
            alt="Traceability icon"
            width={32}
            height={32}
            className="absolute top-3 left-3 h-8 w-8 object-contain z-10"
            loading="lazy"
          />
          {imageError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent-blue to-accent-green">
              <div className="text-white text-lg font-semibold tracking-wide">BLOG</div>
            </div>
          ) : (
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
              className="object-cover"
              loading="lazy"
              quality={78}
              onError={() => setImageError(true)}
            />
          )}
        </div>

        <div className="p-6 md:p-7">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold text-secondary-blue uppercase">
              {post.category}
            </span>
            <span className="text-xs text-inactive-gray">{date}</span>
          </div>

          <h3 className="text-xl font-bold text-primary-black mb-3 line-clamp-2 group-hover:text-accent-blue transition-colors">
            {post.title}
          </h3>

          <p className="text-gray-text text-sm leading-7 mb-4 line-clamp-2 max-w-[46ch]">
            {post.excerpt}
          </p>

          <span className="text-secondary-blue font-semibold text-sm group-hover:text-accent-blue">
            {t('cards.readMore', 'Citește mai mult →')}
          </span>
        </div>
        </Link>
    </article>
  );
};

export default BlogCard;
