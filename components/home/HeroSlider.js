'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: 'Soluții de Trasabilitate End-to-End pentru Fabrici Inteligente',
    subtitle: 'Controlul complet al producției cu tehnologie avansată. Urmărire în timp real, calitate garantată și eficiență maximă cu sistemele noastre inovatoare.',
    ctaText: 'Descoperiți Soluția Noastră',
    ctaLink: '/trasabilitate-end-to-end',
    color: 'from-accent-blue',
    video: '/videos/hero-slide-1.mp4',
  },
  {
    id: 2,
    title: 'Control în Timp Real, Zero Defecțiuni',
    subtitle: 'Monitorizare constantă cu inteligență artificială. Detectare automată a erorilor, raportare instantanee și prevenire proactivă pentru calitate maximă în fiecare produs.',
    ctaText: 'Explorați Tehnologia',
    ctaLink: '/trasabilitate-end-to-end',
    color: 'from-accent-green',
    video: '/videos/hero-slide-2.mp4',
  },
  {
    id: 3,
    title: 'POKA YOKE - Sistem de Prevenire a Erorilor',
    subtitle: 'Eliminate defectele înainte ca acestea să apară. Metodă revoluționară de control calității care asigură 99.9% acuratețe și reduce costurile de remaniere până la 80%.',
    ctaText: 'Aflați Detaliile',
    ctaLink: '/trasabilitate-end-to-end',
    color: 'from-accent-yellow',
    video: '/video/DisliDonus.mp4',
  },
];

export const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const goToSlide = (index) => {
    setCurrent(index);
    setIsAutoPlay(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: current === index ? 1 : 0 }}
          transition={{ duration: 0.5 }}
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

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-black/45 via-primary-black/20 to-primary-black/55"></div>

          {/* Content */}
          <div className="relative h-full flex items-end px-4 sm:px-6 lg:px-8 pb-24 sm:pb-28">
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-end">
              <motion.h1
                className="lg:col-span-7 text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.95] tracking-tight uppercase drop-shadow-lg"
                style={{ fontFamily: 'var(--font-poppins)' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: current === index ? 1 : 0, y: current === index ? 0 : 30 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                {slide.title}
              </motion.h1>

              <motion.div
                className="lg:col-span-5 text-white lg:pb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: current === index ? 1 : 0, y: current === index ? 0 : 30 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                <p className="text-lg sm:text-xl lg:text-[1.02rem] font-semibold leading-tight sm:leading-snug drop-shadow-md max-w-lg ml-0 lg:ml-auto text-left">
                  {slide.subtitle}
                </p>

                <div className="mt-7 lg:mt-8 lg:flex lg:justify-end">
                  <Link
                    href={slide.ctaLink}
                    className="inline-flex items-center justify-center h-14 px-10 sm:px-12 rounded-full border-2 border-white text-white text-xl sm:text-2xl font-semibold tracking-tight bg-transparent hover:bg-white/10 transition-colors"
                  >
                    {slide.ctaText}
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {slides.map((slide, index) => (
          <button
            key={`hero-dot-${slide.id}`}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all ${
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
