'use client';

import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
import { useLanguage } from '../i18n/LanguageProvider';
import { getHeroSlides } from '../../lib/i18n/contentLocalization';
import { getHeroVideoAssets } from '../../lib/seo/videoCatalog';

const heroVideoAssets = getHeroVideoAssets();

const slides = [
  {
    id: 1,
    title: 'Soluții de Trasabilitate End-to-End pentru Fabrici Inteligente',
    subtitle: 'Procesul metodic de investiții echilibrează gestionarea riscurilor cu identificarea oportunităților, creând portofolii rezistente, concepute pentru a performa în ciclurile pieței.',
    color: 'from-accent-blue',
    video: heroVideoAssets[0].video,
    mobileVideo: heroVideoAssets[0].mobileVideo,
    thumbnailPath: heroVideoAssets[0].thumbnailPath,
  },
  {
    id: 2,
    title: 'Control în Timp Real, Zero Defecțiuni',
    subtitle: 'Abordarea noastră adaptivă transformă provocările în oportunități, oferind valoare durabilă și rezultate excepționale pentru clienții noștri în diverse condiții economice.',
    color: 'from-accent-green',
    video: heroVideoAssets[1].video,
    mobileVideo: heroVideoAssets[1].mobileVideo,
    thumbnailPath: heroVideoAssets[1].thumbnailPath,
  },
  {
    id: 3,
    title: 'POKA YOKE',
    subtitle: 'Lucrăm îndeaproape cu investitorii pentru a înțelege obiectivele acestora, creând soluții personalizate care abordează nevoile specifice, menținând în același timp angajamentul nostru față de excelență.',
    color: 'from-accent-yellow',
    video: heroVideoAssets[2].video,
    mobileVideo: heroVideoAssets[2].mobileVideo,
    thumbnailPath: heroVideoAssets[2].thumbnailPath,
  },
];

function splitIntoTwoBalancedLines(text) {
  const normalized = String(text || '').replace(/\s+/g, ' ').trim();
  if (!normalized) return ['', ''];

  const sentenceSplit = normalized.split(/(?<=[.!?])\s+/);
  if (sentenceSplit.length >= 2) {
    return [sentenceSplit[0].trim(), sentenceSplit.slice(1).join(' ').trim()];
  }

  const words = normalized.split(' ');
  if (words.length < 4) return [normalized, ''];

  const middle = Math.floor(words.length / 2);
  const lineOne = words.slice(0, middle).join(' ').trim();
  const lineTwo = words.slice(middle).join(' ').trim();

  return [lineOne, lineTwo];
}

/* eslint-disable react/prop-types */
export const HeroSlider = ({ cmsSlides }) => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [forceDesktopVideo, setForceDesktopVideo] = useState(false);
  const [videoFallbackSrc, setVideoFallbackSrc] = useState('');
  const [showImageFallback, setShowImageFallback] = useState(false);
  const videoRef = useRef(null);
  const { locale, t } = useLanguage();
  // CMS'den slayt gelirse kullan (video ve mobileVideo eksikse varsayılan video varlıklarıyla birleştir)
  const baseSlides = useMemo(() => {
    if (Array.isArray(cmsSlides) && cmsSlides.length > 0) {
      return cmsSlides.map((slide, index) => ({
        ...slides[index],
        ...slide,
        id: index + 1,
        video: slide.video || slides[index]?.video || heroVideoAssets[index]?.video,
        mobileVideo: slide.mobileVideo || slides[index]?.mobileVideo || heroVideoAssets[index]?.mobileVideo,
        thumbnailPath: slide.thumbnailPath || slides[index]?.thumbnailPath || heroVideoAssets[index]?.thumbnailPath,
      }));
    }
    return slides;
  }, [cmsSlides]);
  const localizedSlides = useMemo(() => getHeroSlides(baseSlides, locale), [locale, baseSlides]);
  const activeSlide = localizedSlides[current];
  const resolvedDesktopVideo = videoFallbackSrc || activeSlide?.video;
  const useMobileSource = Boolean(activeSlide?.mobileVideo) && !forceDesktopVideo && !videoFallbackSrc && activeSlide?.id !== 1;
  const firstSlideSubtitleLines = useMemo(() => splitIntoTwoBalancedLines(localizedSlides[0]?.subtitle), [localizedSlides]);
  const fallbackImageBySlideId = {
    1: '/images/Industries/Organic_Trace_and_Track.webp',
    2: '/images/Industries/otomotiv.webp',
    3: '/images/Industries/enerji-kimya.webp',
  };
  const activeFallbackImage = fallbackImageBySlideId[activeSlide?.id] || fallbackImageBySlideId[1];

  const handleNextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % localizedSlides.length);
  }, [localizedSlides.length]);

  const ensureVideoPlayback = useCallback(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    // Keep muted/inline flags explicit for stricter mobile browsers.
    videoEl.muted = true;
    videoEl.defaultMuted = true;
    videoEl.playsInline = true;
    videoEl.setAttribute('webkit-playsinline', 'true');

    const playPromise = videoEl.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {
        // Browser may still block autoplay until visibility/interaction changes.
      });
    }
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      handleNextSlide();
    }, 10000);

    return () => clearInterval(timer);
  }, [isAutoPlay, handleNextSlide, current]);

  useEffect(() => {
    setForceDesktopVideo(false);
    setVideoFallbackSrc('');
    setShowImageFallback(false);
  }, [current]);

  useEffect(() => {
    // Ensure browser reloads source list whenever slide source changes.
    const videoEl = videoRef.current;
    if (!videoEl) return;
    videoEl.load();
  }, [current, forceDesktopVideo, videoFallbackSrc]);

  useEffect(() => {
    ensureVideoPlayback();

    // Retry once after render/layout settles on mobile devices.
    const retryTimer = globalThis.setTimeout(() => {
      ensureVideoPlayback();
    }, 220);

    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        ensureVideoPlayback();
      }
    };

    const onUserActivation = () => {
      ensureVideoPlayback();
    };

    document.addEventListener('visibilitychange', onVisibilityChange);
    globalThis.addEventListener('pageshow', onUserActivation);
    globalThis.addEventListener('focus', onUserActivation);
    globalThis.addEventListener('touchstart', onUserActivation, { passive: true });

    return () => {
      globalThis.clearTimeout(retryTimer);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      globalThis.removeEventListener('pageshow', onUserActivation);
      globalThis.removeEventListener('focus', onUserActivation);
      globalThis.removeEventListener('touchstart', onUserActivation);
    };
  }, [current, ensureVideoPlayback, forceDesktopVideo]);

  const recoverFromMobileStall = useCallback(() => {
    const videoEl = videoRef.current;
    const isMobileViewport = globalThis.innerWidth <= 1023;

    if (videoEl?.networkState === HTMLMediaElement.NETWORK_NO_SOURCE || videoEl?.error) {
      // Last-resort visual fallback so hero never appears blank.
      setShowImageFallback(true);
      return;
    }

    // If source is not playable, switch to known-good fallback for the 2nd hero slide.
    if (!isMobileViewport || forceDesktopVideo || !activeSlide?.video) {
      ensureVideoPlayback();
      return;
    }

    // If mobile rendition stalls, fall back to desktop source.
    setForceDesktopVideo(true);
  }, [activeSlide?.video, ensureVideoPlayback, forceDesktopVideo]);

  useEffect(() => {
    // Some browsers report decode failure only after initial source selection.
    // Watch briefly and fallback if slide 2 still has no decodable source.
    const timer = globalThis.setTimeout(() => {
      const videoEl = videoRef.current;
      if (!videoEl || activeSlide?.id !== 2 || videoFallbackSrc) {
        return;
      }

      const noSource = videoEl.networkState === HTMLMediaElement.NETWORK_NO_SOURCE;
      const notReady = videoEl.readyState === HTMLMediaElement.HAVE_NOTHING;
      if ((noSource || videoEl.error) && notReady) {
        setShowImageFallback(true);
      }
    }, 1100);

    return () => globalThis.clearTimeout(timer);
  }, [activeSlide?.id, videoFallbackSrc]);

  const goToSlide = (index) => {
    setCurrent(index);
    setIsAutoPlay(true);
  };

  return (
    <div className="relative w-full overflow-hidden bg-black" style={{ height: '100svh', minHeight: '500px' }}>
      {/* Active slide only for reduced network and CPU */}
      <div key={activeSlide.id} className="absolute inset-0 w-full h-full">
        {showImageFallback ? (
          <div
            className="absolute inset-0 w-full h-full bg-center bg-cover"
            style={{ backgroundImage: `url('${activeFallbackImage}')` }}
            aria-hidden="true"
          />
        ) : null}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload={current === 0 ? 'metadata' : 'none'}
          poster={activeSlide.thumbnailPath || activeFallbackImage}
          onLoadedData={ensureVideoPlayback}
          onCanPlay={ensureVideoPlayback}
          onEnded={handleNextSlide}
          onStalled={recoverFromMobileStall}
          onWaiting={recoverFromMobileStall}
          onError={recoverFromMobileStall}
          className={`absolute inset-0 w-full h-full object-cover ${showImageFallback ? 'opacity-0' : 'opacity-100'}`}
        >
          {useMobileSource ? (
            <source src={activeSlide.mobileVideo} media="(max-width: 1023px)" type="video/webm" />
          ) : null}
          <source src={resolvedDesktopVideo} type="video/webm" />
        </video>

        <div className="absolute inset-0 bg-primary-black/35"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-black/40 via-primary-black/20 to-primary-black/45"></div>

        <div className="relative h-full flex items-center px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16">
          <div className="w-full max-w-5xl mx-auto text-center">
            <h1
              suppressHydrationWarning
              className="text-white text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-[1.1] sm:leading-[1.02] tracking-tight uppercase [text-shadow:0_2px_14px_rgba(0,0,0,0.55)] overflow-wrap-anywhere break-words px-2"
              style={{ fontFamily: 'var(--font-kanit)', overflowWrap: 'break-word', wordBreak: 'break-word' }}
            >
              {activeSlide.title}
            </h1>

            <div className="text-white mt-4 sm:mt-6 sm:mt-7">
              <p suppressHydrationWarning className="text-sm sm:text-lg lg:text-xl font-medium leading-relaxed [text-shadow:0_1px_10px_rgba(0,0,0,0.5)] max-w-3xl lg:max-w-5xl mx-auto px-2">
                {activeSlide.id === 1 ? (
                  <>
                    <span className="block">{firstSlideSubtitleLines[0]}</span>
                    {firstSlideSubtitleLines[1] ? <span className="block">{firstSlideSubtitleLines[1]}</span> : null}
                  </>
                ) : (
                  activeSlide.subtitle
                )}
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2 z-10 flex-wrap justify-center">
        {localizedSlides.map((slide, index) => (
          <button
            type="button"
            key={`hero-dot-${slide.id}`}
            onClick={() => goToSlide(index)}
            className="h-12 w-12 flex items-center justify-center group"
            aria-label={t('hero.goToSlide', `Go to slide ${index + 1}`, { index: index + 1 })}
            aria-current={current === index ? 'true' : undefined}
          >
            <div
              className={`h-3 rounded-md transition-all duration-200 ${
                current === index
                  ? 'bg-slate-blue w-8'
                  : 'bg-inactive-gray bg-opacity-70 w-3 group-hover:bg-accent-blue'
              }`}
            />
          </button>
        ))}
      </div>

    </div>
  );
};

export default HeroSlider;
