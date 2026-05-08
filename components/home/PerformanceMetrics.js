'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Counter = ({ end, duration = 2, label, suffix = '+' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let current = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="text-5xl md:text-6xl font-bold text-accent-blue mb-2">
        {count}
        <span>{suffix}</span>
      </div>
      <p className="text-lg text-gray-light">{label}</p>
    </motion.div>
  );
};

export const PerformanceMetrics = () => {
  const metrics = [
    { end: 500, label: 'Clienți mulțumiți', suffix: '+' },
    { end: 40, label: 'Țări', suffix: '+' },
    { end: 4, label: 'Proiecte globale', suffix: '' },
    { end: 80, label: 'Colegi', suffix: '+' },
  ];

  const handleScroll = () => {
    const element = document.querySelector('#reference-projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary-black to-dark-bg">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Performanță și indicatori cuprinzători
          </h2>
          <p className="text-xl text-gray-light max-w-2xl mx-auto">
            Rezultatele noastre vorbesc pentru ei înșiși
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {metrics.map((metric, index) => (
            <Counter
              key={index}
              end={metric.end}
              duration={2}
              label={metric.label}
              suffix={metric.suffix}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            variant="solid"
            size="lg"
            onClick={handleScroll}
            className="bg-accent-blue hover:bg-opacity-90"
          >
            Proiectele noastre de referință
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default PerformanceMetrics;
