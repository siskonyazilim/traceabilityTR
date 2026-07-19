'use client';

import Link from 'next/link';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { useLanguage } from '../i18n/LanguageProvider';
import { toLocalePath } from '../../lib/i18n/dictionaries';

export const HomeCta = () => {
  const { locale, t } = useLanguage();

  return (
    <section className="py-16 md:py-28 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pattern-dots opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[1000px] h-[360px] md:h-[500px] bg-accent-blue/8 rounded-md blur-3xl"></div>

      <Container size="xl" className="relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-primary-black mb-6 md:mb-8 leading-tight">
            {t('homeCta.title', 'Vrei să transformi procesele tale de producție?')}
          </h2>

          {/* Subtitle */}
          <p className="text-gray-text text-lg md:text-2xl mb-10 md:mb-12 leading-relaxed">
            {t('homeCta.subtitle', 'Planificăm împreună o soluție de trasabilitate adaptată fluxurilor tale operaționale.')}
          </p>

          {/* CTA Buttons - Standardized */}
          <div className="flex gap-6 justify-center flex-wrap">
            <Button
              as={Link}
              href="/contact"
              variant="solid"
              size="lg"
              className="bg-secondary-blue hover:bg-accent-blue text-white"
            >
              {t('homeCta.primary', 'Cere Ofertă')}
            </Button>
            <Button
              as={Link}
              href={toLocalePath(locale === 'en' ? '/reference-projects' : (locale === 'ro' ? '/proiecte-de-referinta' : '/portfolio'), locale)}
              variant="outline"
              size="lg"
              className="border-2 border-primary-black text-primary-black hover:bg-primary-black hover:text-white"
            >
              {t('homeCta.secondary', 'Vezi Referințele')}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeCta;