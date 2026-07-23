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
  const [itemsPerView, setItemsPerView] = useState(3);
  const [pauseUntil, setPauseUntil] = useState(0);
  const { locale, t } = useLanguage();
  const localizedPosts = useMemo(() => localizeBlogPosts(blogPosts, locale), [locale]);
  const sortedPosts = useMemo(
    () =>
      [...localizedPosts].sort((a, b) => {
        const dateDiff = new Date(b.date).getTime() - new Date(a.date).getTime();

        if (dateDiff !== 0) {
          return dateDiff;
        }

        return (b.id ?? 0) - (a.id ?? 0);
      }),
    [localizedPosts]
  );

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

  const maxIndex = Math.max(0, sortedPosts.length - itemsPerView);

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
    }, 5000);

    return () => clearInterval(timer);
  }, [maxIndex, pauseUntil]);

  const pauseAutoPlay = () => {
    setPauseUntil(Date.now() + 8000);
  };

  const visiblePosts = useMemo(
    () => sortedPosts.slice(currentIndex, currentIndex + itemsPerView),
    [currentIndex, itemsPerView, sortedPosts]
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
    <section className="section-block bg-gradient-to-br from-[#f6f7f8] via-white to-[#f6f7f8] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-accent-blue/5 rounded-md blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary-blue/5 rounded-md blur-3xl"></div>

      <Container size="xl" className="relative z-10">
        <SectionHeader
          title={t('sections.blogPreviewTitle', 'Blogdan Son Haberler')}
          subtitle={t('sections.blogPreviewSubtitle', 'Endüstri ve teknoloji gündeminden en güncel içerikleri keşfedin.')}
        />

        <div className="relative mb-8">
          <div className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={handlePrev}
              aria-label={t('sections.blogPrev', 'Articol anterior')}
              className="h-12 w-12 rounded-md bg-white/95 backdrop-blur-sm border border-slate-200 shadow-soft text-primary-black hover:bg-secondary-blue hover:text-white transition-colors flex items-center justify-center"
            >
              <IconChevronLeft size={20} />
            </button>
          </div>

          <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={handleNext}
              aria-label={t('sections.blogNext', 'Articol următor')}
              className="h-12 w-12 rounded-md bg-white/95 backdrop-blur-sm border border-slate-200 shadow-soft text-primary-black hover:bg-secondary-blue hover:text-white transition-colors flex items-center justify-center"
            >
              <IconChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {visiblePosts.map((post) => (
              <div key={`${post.id}-${currentIndex}`} className="h-full">
                <BlogCard post={post} />
              </div>
            ))}
          </div>

          <div className="mt-5 flex md:hidden items-center justify-center gap-3">
            <button
              onClick={handlePrev}
              aria-label={t('sections.blogPrev', 'Önceki yazı')}
              className="h-11 w-11 rounded-md bg-white/95 backdrop-blur-sm border border-slate-200 shadow-soft text-primary-black transition-colors flex items-center justify-center"
            >
              <IconChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              aria-label={t('sections.blogNext', 'Sonraki yazı')}
              className="h-11 w-11 rounded-md bg-white/95 backdrop-blur-sm border border-slate-200 shadow-soft text-primary-black transition-colors flex items-center justify-center"
            >
              <IconChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="py-2 text-center">
          <Button
            as={Link}
            href="/blog"
            variant="outline"
            size="lg"
            className="border-2 border-primary-black text-primary-black bg-transparent hover:bg-primary-black hover:text-white"
          >
            {t('sections.blogPreviewCta', 'BLOGA GIT')}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default BlogPreview;
