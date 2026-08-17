'use client';

import Link from 'next/link';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { useLanguage } from '../i18n/LanguageProvider';
import { toLocalePath } from '../../lib/i18n/dictionaries';

/* eslint-disable react/prop-types */
export const HomeCta = ({ cmsCta }) => {
  const { locale, t } = useLanguage();

  // CMS'den veri gelirse kullan, yoksa çeviri sistemi
  const ctaTitle = cmsCta?.title || t('homeCta.title', 'Üretim süreçlerinizi dönüştürmeye hazır mısınız?');
  const ctaSubtitle = cmsCta?.subtitle || t('homeCta.subtitle', 'Operasyonel akışlarınıza uygun bir izlenebilirlik çözümü birlikte planlayalım.');
  const primaryLabel = cmsCta?.primaryLabel || t('homeCta.primary', 'İletişime Geç');
  const secondaryLabel = cmsCta?.secondaryLabel || t('homeCta.secondary', 'Referanslara Bak');

  return (
    <section className="py-16 md:py-28 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pattern-dots opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[1000px] h-[360px] md:h-[500px] bg-accent-blue/8 rounded-md blur-3xl"></div>

      <Container size="xl" className="relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-black mb-6 leading-tight">
            {ctaTitle}
          </h2>

          {/* Subtitle */}
          <p className="text-gray-text text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            {ctaSubtitle}
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
              {primaryLabel}
            </Button>
            <Button
              as={Link}
              href={toLocalePath(locale === 'en' ? '/reference-projects' : (locale === 'ro' ? '/proiecte-de-referinta' : '/portfolio'), locale)}
              variant="outline"
              size="lg"
              className="border-2 border-primary-black text-primary-black hover:bg-primary-black hover:text-white"
            >
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeCta;