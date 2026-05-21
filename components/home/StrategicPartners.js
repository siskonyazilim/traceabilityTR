'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import { strategicPartners } from '../../data/partners';

export const StrategicPartners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, strategicPartners.length - itemsPerView);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex, maxIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [maxIndex]);

  const visiblePartners = useMemo(
    () => strategicPartners.slice(currentIndex, currentIndex + itemsPerView),
    [currentIndex, itemsPerView]
  );

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="our-strategic-solution-partners" className="py-16 md:py-24 bg-gradient-to-br from-[#f6f7f8] via-white to-[#f6f7f8] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-accent-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary-blue/5 rounded-full blur-3xl"></div>

      <Container size="xl" className="relative z-10">
        <SectionHeader
          title="Partenerii noștri strategici de soluții"
          subtitle="Partenerii noștri valoroși de soluții, care sunt lideri în domeniile lor și și-au dovedit succesul la nivel global."
        />

        <div className="relative">
          <div className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={handlePrev}
              aria-label="Partener anterior"
              className="h-11 w-11 rounded-full bg-white/95 backdrop-blur-sm border border-slate-200 shadow-md text-primary-black hover:bg-secondary-blue hover:text-white transition-colors flex items-center justify-center"
            >
              <FiChevronLeft size={20} />
            </button>
          </div>

          <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={handleNext}
              aria-label="Partener următor"
              className="h-11 w-11 rounded-full bg-white/95 backdrop-blur-sm border border-slate-200 shadow-md text-primary-black hover:bg-secondary-blue hover:text-white transition-colors flex items-center justify-center"
            >
              <FiChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {visiblePartners.map((partner, index) => (
              <Link key={`${partner.id}-${currentIndex}`} href={`/solution-partners/${partner.slug}`}>
                <motion.article
                  className="h-full rounded-2xl bg-white border border-slate-200 shadow-soft shadow-soft-hover hover:border-accent-blue transition-all duration-300 overflow-hidden group"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  {/* Uniform Logo Container - Fixed Height */}
                  <div className="h-40 flex items-center justify-center p-8 bg-white relative overflow-hidden border-b border-slate-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-16 max-w-[80%] object-contain transition-all duration-300 group-hover:scale-105"
                        style={{ objectFit: 'contain' }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-primary-black mb-3 group-hover:text-accent-blue transition-colors min-h-[3rem] flex items-center">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-gray-text leading-relaxed min-h-[4.5rem]">
                      {partner.description}
                    </p>
                    <span className="inline-flex items-center mt-4 text-accent-blue font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
                      Detalii
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>

          <div className="flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }, (_, page) => page).map((page) => (
              <button
                key={`partners-page-${page}`}
                onClick={() => setCurrentIndex(page)}
                aria-label={`Mergi la setul ${page + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  currentIndex === page ? 'w-7 bg-slate-blue' : 'w-2.5 bg-inactive-gray hover:bg-accent-blue'
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StrategicPartners;
