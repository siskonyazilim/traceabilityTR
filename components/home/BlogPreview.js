'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import BlogCard from '../ui/BlogCard';
import Button from '../ui/Button';
import { IconChevronLeft, IconChevronRight } from '../ui/Icons';
import { useLanguage } from '../i18n/LanguageProvider';
import { blogPosts } from '../../data/blogPosts';
import { localizeBlogPosts } from '../../lib/i18n/contentLocalization';

export const BlogPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);
  const { locale, t } = useLanguage();
  const localizedPosts = useMemo(() => localizeBlogPosts(blogPosts, locale), [locale]);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (globalThis.innerWidth < 768) {
        setItemsPerView(1);
      } else {
        setItemsPerView(2);
      }
    };

    updateItemsPerView();
    globalThis.addEventListener('resize', updateItemsPerView);
    return () => globalThis.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, localizedPosts.length - itemsPerView);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex, maxIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [maxIndex]);

  const visiblePosts = useMemo(
    () => localizedPosts.slice(currentIndex, currentIndex + itemsPerView),
    [currentIndex, itemsPerView, localizedPosts]
  );

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="section-block bg-gradient-to-br from-white via-slate-50/30 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-30"></div>

      <Container size="xl" className="relative z-10">
        <SectionHeader
          title={t('sections.blogPreviewTitle', 'Din Blog')}
          subtitle={t('sections.blogPreviewSubtitle', 'Accesați blogul nostru și obțineți cele mai recente actualizări din industrie și tendințele viitoare.')}
          className="text-primary-black"
        />

        <div className="relative mb-12">
          <button
            onClick={handlePrev}
            aria-label={t('sections.blogPrev', 'Articol anterior')}
            className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full border border-gray-light bg-white text-primary-black hover:bg-gradient-to-r hover:from-secondary-blue hover:to-accent-blue hover:text-white hover:border-transparent transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
          >
            <IconChevronLeft size={20} />
          </button>

          <button
            onClick={handleNext}
            aria-label={t('sections.blogNext', 'Articol următor')}
            className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full border border-gray-light bg-white text-primary-black hover:bg-gradient-to-r hover:from-secondary-blue hover:to-accent-blue hover:text-white hover:border-transparent transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
          >
            <IconChevronRight size={20} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-8">
            {visiblePosts.map((post) => (
              <div key={`${post.id}-${currentIndex}`} className="h-full">
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>

        <div className="px-2 sm:px-4 py-2 text-center">
          <p className="text-primary-black text-lg sm:text-[1.6rem] font-semibold leading-[1.35] mb-6 max-w-3xl mx-auto">
            {t('sections.blogPreviewSubtitle', 'Accesați blogul nostru și obțineți cele mai recente actualizări din industrie și tendințele viitoare.')}
          </p>
          <Button
            as={Link}
            href="/blog"
            variant="outline"
            size="lg"
            className="border-2 border-primary-black text-primary-black bg-transparent hover:bg-primary-black hover:text-white"
          >
            {t('sections.blogPreviewCta', 'MERGI LA BLOG')}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default BlogPreview;
