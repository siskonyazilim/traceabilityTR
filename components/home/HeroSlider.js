'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '../ui/Button';
import { useLanguage } from '../i18n/LanguageProvider';
import { getHeroSlides } from '../../lib/i18n/contentLocalization';

const slides = [
  {
    id: 1,
    title: 'Soluții de Trasabilitate End-to-End pentru Fabrici Inteligente',
    subtitle: 'Procesul metodic de investiții echilibrează gestionarea riscurilor cu identificarea oportunităților, creând portofolii rezistente, concepute pentru a performa în ciclurile pieței.',
    color: 'from-accent-blue',
    video: '/videos/hero-slide-1.mp4',
  },
  {
    id: 2,
    title: 'Control în Timp Real, Zero Defecțiuni',
    subtitle: 'Abordarea noastră adaptivă transformă provocările în oportunități, oferind valoare durabilă și rezultate excepționale pentru clienții noștri în diverse condiții economice.',
    color: 'from-accent-green',
    video: '/videos/hero-slide-2.mp4',
  },
  {
    id: 3,
    title: 'POKA YOKE',
    subtitle: 'Lucrăm îndeaproape cu investitorii pentru a înțelege obiectivele acestora, creând soluții personalizate care abordează nevoile specifice, menținând în același timp angajamentul nostru față de excelență.',
    color: 'from-accent-yellow',
    video: '/video/DisliDonus.mp4',
  },
];

export const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const { locale, t } = useLanguage();
  const localizedSlides = useMemo(() => getHeroSlides(slides, locale), [locale]);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % localizedSlides.length);
    }, 8000); // Increased from 5000ms to 8000ms for better readability

    return () => clearInterval(timer);
  }, [isAutoPlay, localizedSlides.length]);

  const goToSlide = (index) => {
    setCurrent(index);
    setIsAutoPlay(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slides */}
      {localizedSlides.map((slide, index) => (
        <motion.div
          key={slide.id}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: current === index ? 1 : 0 }}
          transition={{ duration: 0.35 }}
        >
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={slide.video} type="video/mp4" />
          </video>

          {/* Video overlays */}
          <div className="absolute inset-0 bg-primary-black/35"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-black/40 via-primary-black/20 to-primary-black/45"></div>

          {/* Content */}
          <div className="relative h-full flex items-center px-4 sm:px-6 lg:px-8 pt-16">
            <div className="w-full max-w-5xl mx-auto text-center">
              <motion.h1
                className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.98] tracking-tight uppercase [text-shadow:0_2px_14px_rgba(0,0,0,0.55)]"
                style={{ fontFamily: 'var(--font-poppins)' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: current === index ? 1 : 0, y: current === index ? 0 : 30 }}
                transition={{ delay: 0.12, duration: 0.45 }}
              >
                {slide.title}
              </motion.h1>

              <motion.div
                className="text-white mt-6 sm:mt-7"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: current === index ? 1 : 0, y: current === index ? 0 : 30 }}
                transition={{ delay: 0.2, duration: 0.45 }}
              >
                <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed [text-shadow:0_1px_10px_rgba(0,0,0,0.5)] max-w-3xl mx-auto">
                  {slide.subtitle}
                </p>
              </motion.div>

              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: current === index ? 1 : 0, y: current === index ? 0 : 30 }}
                transition={{ delay: 0.3, duration: 0.45 }}
              >
                <Button
                  as={Link}
                  href="/contact"
                  variant="solid"
                  size="lg"
                  className="bg-secondary-blue hover:bg-accent-blue text-white shadow-2xl"
                >
                  {t('hero.cta', 'Cere Oferta')}
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {localizedSlides.map((slide, index) => (
          <button
            key={`hero-dot-${slide.id}`}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-200 ${
              current === index
                ? 'bg-slate-blue w-8'
                : 'bg-inactive-gray bg-opacity-70 w-3 hover:bg-accent-blue'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
};

export default HeroSlider;
