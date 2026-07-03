'use client';

import { useState, useEffect, useMemo } from 'react';
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
    video: '/video/5389356%20Coll%20Wavebreak%20Warehouse%201920X1080.webm',
    mobileVideo: '/video/Mobile/5389356%20Coll%20Wavebreak%20Warehouse%201920X1080Mobile.webm',
  },
  {
    id: 2,
    title: 'Control în Timp Real, Zero Defecțiuni',
    subtitle: 'Abordarea noastră adaptivă transformă provocările în oportunități, oferind valoare durabilă și rezultate excepționale pentru clienții noștri în diverse condiții economice.',
    color: 'from-accent-green',
    video: '/video/Dislidonus.webm',
    mobileVideo: '/video/Mobile/DislidonusMobil.webm',
  },
  {
    id: 3,
    title: 'POKA YOKE',
    subtitle: 'Lucrăm îndeaproape cu investitorii pentru a înțelege obiectivele acestora, creând soluții personalizate care abordează nevoile specifice, menținând în același timp angajamentul nostru față de excelență.',
    color: 'from-accent-yellow',
    video: '/video/5356320%20Coll%20Wavebreak%20Indoors%201920X1080.webm',
    mobileVideo: '/video/Mobile/5356320%20Coll%20Wavebreak%20Indoors%201920X1080Mobil.webm',
  },
];

export const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const { locale, t } = useLanguage();
  const localizedSlides = useMemo(() => getHeroSlides(slides, locale), [locale]);
  const activeSlide = localizedSlides[current];

  useEffect(() => {
    // Mobile payload is lower by default because autoplay stays disabled.
    setIsAutoPlay(false);
  }, []);

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
      {/* Active slide only for reduced network and CPU */}
      <div key={activeSlide.id} className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          {activeSlide.mobileVideo ? (
            <source src={activeSlide.mobileVideo} media="(max-width: 1023px)" type="video/webm" />
          ) : null}
          <source src={activeSlide.video} type="video/webm" />
        </video>

        <div className="absolute inset-0 bg-primary-black/35"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-black/40 via-primary-black/20 to-primary-black/45"></div>

        <div className="relative h-full flex items-center px-4 sm:px-6 lg:px-8 pt-16">
          <div className="w-full max-w-5xl mx-auto text-center">
            <h1
              suppressHydrationWarning
              className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-[1.06] sm:leading-[1.02] tracking-tight uppercase [text-shadow:0_2px_14px_rgba(0,0,0,0.55)]"
              style={{ fontFamily: 'var(--font-kanit)' }}
            >
              {activeSlide.title}
            </h1>

            <div className="text-white mt-6 sm:mt-7">
              <p suppressHydrationWarning className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed [text-shadow:0_1px_10px_rgba(0,0,0,0.5)] max-w-3xl mx-auto">
                {activeSlide.subtitle}
              </p>
            </div>

            <div className="mt-10">
              <Button
                as={Link}
                href="/contact"
                variant="solid"
                size="lg"
                className="bg-secondary-blue hover:bg-accent-blue text-white shadow-2xl"
              >
                {t('hero.cta', 'Cere Oferta')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {localizedSlides.map((slide, index) => (
          <button
            type="button"
            key={`hero-dot-${slide.id}`}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-200 min-h-[44px] flex items-center ${
              current === index
                ? 'bg-slate-blue w-8'
                : 'bg-inactive-gray bg-opacity-70 w-3 hover:bg-accent-blue'
            }`}
            aria-label={t('hero.goToSlide', `Go to slide ${index + 1}`, { index: index + 1 })}
            aria-current={current === index ? 'true' : undefined}
          />
        ))}
      </div>

    </div>
  );
};

export default HeroSlider;
