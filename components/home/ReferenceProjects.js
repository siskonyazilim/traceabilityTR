'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import { referenceProjects } from '../../data/references';

export const ReferenceProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, referenceProjects.length - itemsPerView);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(0);
    }
  }, [maxIndex, currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4800);

    return () => clearInterval(timer);
  }, [maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const visibleProjects = useMemo(
    () => referenceProjects.slice(currentIndex, currentIndex + itemsPerView),
    [currentIndex, itemsPerView]
  );

  return (
    <section id="reference-projects" className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader
          title="Proiecte de referință"
          subtitle="Exemple reale de implementare pentru industrii diferite"
        />

        <div className="relative mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project, index) => (
              <motion.article
                key={`${project.id}-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="h-full"
              >
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group h-full block rounded-2xl border border-gray-light bg-primary-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="h-40 bg-gradient-to-br from-gray-light to-primary-white flex items-center justify-center p-6">
                    <img
                      src={project.logo}
                      alt={project.title}
                      className="max-h-20 w-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>

                  <div className="p-5">
                    <span className="inline-flex text-xs font-semibold px-3 py-1 rounded-full bg-primary-black text-white mb-3">
                      {project.sector}
                    </span>
                    <h3 className="text-lg font-bold text-primary-black mb-2 group-hover:text-accent-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-text leading-relaxed line-clamp-4">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="flex items-center justify-between mt-8 gap-3">
            <button
              onClick={handlePrev}
              className="h-10 w-10 rounded-full border border-gray-light bg-white text-primary-black hover:bg-primary-black hover:text-white transition-colors flex items-center justify-center"
              aria-label="Proiect anterior"
            >
              <FiChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === index ? 'w-7 bg-accent-blue' : 'w-2.5 bg-gray-light hover:bg-gray-text'
                  }`}
                  aria-label={`Mergi la pagina ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="h-10 w-10 rounded-full border border-gray-light bg-white text-primary-black hover:bg-primary-black hover:text-white transition-colors flex items-center justify-center"
              aria-label="Proiect următor"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Link href="/proiecte-de-referinta">
            <Button variant="outline" size="lg">
              TOATE PROIECTELE NOASTRE
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ReferenceProjects;
