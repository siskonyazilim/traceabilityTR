'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import BlogCard from '../ui/BlogCard';
import Button from '../ui/Button';
import { blogPosts } from '../../data/blogPosts';

export const BlogPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else {
        setItemsPerView(2);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, blogPosts.length - itemsPerView);

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
    () => blogPosts.slice(currentIndex, currentIndex + itemsPerView),
    [currentIndex, itemsPerView]
  );

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader
          title="BLOG"
          subtitle="Accesați blogul nostru și obțineți cele mai recente actualizări din industrie și tendințele viitoare."
          className="text-primary-black"
        />

        <div className="relative mb-12">
          <button
            onClick={handlePrev}
            aria-label="Articol anterior"
            className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full border border-gray-light bg-white text-primary-black hover:bg-primary-black hover:text-white transition-colors flex items-center justify-center"
          >
            <FiChevronLeft size={20} />
          </button>

          <button
            onClick={handleNext}
            aria-label="Articol următor"
            className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full border border-gray-light bg-white text-primary-black hover:bg-primary-black hover:text-white transition-colors flex items-center justify-center"
          >
            <FiChevronRight size={20} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-8">
            {visiblePosts.map((post) => (
              <div key={`${post.id}-${currentIndex}`}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Link href="/blog">
            <Button variant="outline" size="lg" className="border-primary-black text-primary-black hover:bg-primary-black hover:text-white">
              MERGI LA BLOG
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default BlogPreview;
