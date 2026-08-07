'use client';
/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { useLanguage } from '../i18n/LanguageProvider';
import { getPerformanceMetricLabels } from '../../lib/i18n/contentLocalization';

const Counter = ({ end, duration = 2, label, suffix = '+' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (hasStartedRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasStartedRef.current = true;
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let current = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount((prev) => (prev === end ? prev : end));
        clearInterval(timer);
      } else {
        const next = Math.floor(current);
        setCount((prev) => (prev === next ? prev : next));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-center group">
      <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-accent-blue mb-2 transition-all duration-300">
        {count}
        <span>{suffix}</span>
      </div>
      <p className="text-base sm:text-lg text-gray-light group-hover:text-white transition-colors duration-300">{label}</p>
    </div>
  );
};

export const PerformanceMetrics = () => {
  const { locale, t } = useLanguage();

  const labels = getPerformanceMetricLabels([
    'Clienți mulțumiți',
    'Țări',
    'Fabrici',
    'Colegi',
  ], locale);

  const metrics = [
    { end: 500, label: labels[0], suffix: '+' },
    { end: 40, label: labels[1], suffix: '+' },
    { end: 60, label: labels[2], suffix: '+' },
    { end: 90, label: labels[3], suffix: '+' },
  ];

  const handleScroll = () => {
    const element = document.querySelector('#reference-projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-black via-dark-bg to-primary-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pattern-dots opacity-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-md blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-blue/10 rounded-md blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <Container size="xl" className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
            {t('sections.performanceTitle', 'Performans ve temel metrikler')}
          </h2>
          <p className="text-base sm:text-xl text-gray-light max-w-2xl mx-auto">
            {t('sections.performanceSubtitle', '')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {metrics.map((metric) => (
            <Counter
              key={metric.label}
              end={metric.end}
              duration={2}
              label={metric.label}
              suffix={metric.suffix}
            />
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="solid"
            size="lg"
            onClick={handleScroll}
            className="bg-secondary-blue hover:bg-accent-blue text-white"
          >
            {t('sections.performanceCta', 'Referans projelerimiz')}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default PerformanceMetrics;
