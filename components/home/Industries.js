'use client';

import { useMemo } from 'react';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import { useLanguage } from '../i18n/LanguageProvider';
import { getFirstSentenceText, getTechnologyCapabilities } from '../../lib/i18n/contentLocalization';

const industries = [
  {
    id: 1,
    name: 'POKA YOKE',
    icon: '/icon/icon-settings.svg',
    description: 'Trasabilitatea este soluția permanentă la erorile umane, ale mașinilor sau legate de proiectare care apar în timpul producției cu metode simple și ieftine.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 2,
    name: 'RFID și coduri de bare',
    icon: '/icon/barcode-solid-full.svg',
    description: 'Tehnologia RFID și a codurilor de bare este utilizată în multe aplicații care necesită identificare automată și trasabilitate în automatizarea proceselor și a fabricilor.',
    color: 'from-green-500 to-green-600',
  },
  {
    id: 3,
    name: 'Procesare de imagini',
    icon: '/icon/icon-expand.svg',
    description: 'Detectarea defectelor în produsele fabricate cu sisteme de control vizual oferă superioritate față de oameni.',
    color: 'from-purple-500 to-purple-600',
  },
];

/* eslint-disable react/prop-types */
export default function Industries({ cmsCapabilities }) {
  const { locale, t } = useLanguage();
  const localizedIndustries = useMemo(() => {
    // CMS'den capability gelirse kullan
    if (cmsCapabilities && cmsCapabilities.length > 0) {
      return cmsCapabilities.map((cap) => ({
        id: cap.id,
        name: cap.name || cap.title || '',
        icon: cap.icon || industries[0]?.icon || '',
        description: cap.description || '',
        color: cap.color || 'from-blue-500 to-blue-600',
      }));
    }
    // Statik fallback
    const localized = getTechnologyCapabilities(industries.map(i => ({ title: i.name, description: i.description })), locale);
    return industries.map((industry, index) => ({
      ...industry,
      name: localized[index]?.title || industry.name,
      description: localized[index]?.description || industry.description,
    }));
  }, [cmsCapabilities, locale]);

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pattern-grid opacity-20"></div>

      <Container size="xl" className="relative z-10">
        <SectionHeader
          title={t('sections.industriesTitle', 'Stratejik analizle akıllıca izleyin')}
          subtitle={t('sections.industriesSubtitle', '')}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {localizedIndustries.map((industry) => (
            <div
              key={industry.id}
              className="group relative h-full"
            >
              <div className="bg-white rounded-md border-2 border-gray-200 p-5 md:p-8 hover:border-accent-blue transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                {/* Icon */}
                <div className="mb-6 text-center flex justify-center">
                  <img
                    src={industry.icon}
                    alt={industry.name}
                    width="64"
                    height="64"
                    className="w-16 h-16 object-contain"
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-2xl font-bold text-primary-black mb-4 group-hover:text-accent-blue transition-colors text-center">
                  {industry.name}
                </h3>

                <p className="card-description-copy card-description-block text-gray-text text-sm leading-relaxed flex-grow">
                  {getFirstSentenceText(industry.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
