'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

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
    video: '/videos/hero-slide-3.mp4',
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
          <div
            className={`absolute inset-0 bg-gradient-to-br ${slide.color} to-dark-bg opacity-60`}
          ></div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white max-w-5xl mx-auto">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight drop-shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: current === index ? 1 : 0, y: current === index ? 0 : 30 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                {slide.title}
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-50 font-light leading-relaxed drop-shadow-md max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: current === index ? 1 : 0, y: current === index ? 0 : 30 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                {slide.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: current === index ? 1 : 0, y: current === index ? 0 : 30 }}
                transition={{ delay: 0.6, duration: 0.7 }}
              >
                <Link href={slide.ctaLink}>
                  <Button variant="solid" size="lg">
                    {slide.ctaText}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all ${
              current === index
                ? 'bg-white w-8'
                : 'bg-white bg-opacity-50 w-3 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
};

export default HeroSlider;
