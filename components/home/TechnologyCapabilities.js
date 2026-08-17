'use client';

import { useMemo } from 'react';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import { useLanguage } from '../i18n/LanguageProvider';
import { IconBarcode, IconHistory, IconTarget } from '../ui/Icons';
import { getFirstSentenceText, getTechnologyCapabilities } from '../../lib/i18n/contentLocalization';

const capabilities = [
  {
    title: 'POKA YOKE',
    description: 'Trasabilitatea este soluția permanentă la erorile umane, ale mașinilor sau legate de proiectare care apar în timpul producției cu metode simple și ieftine.',
    icon: IconHistory,
    fallback: '🔁',
  },
  {
    title: 'RFID și coduri de bare',
    description: 'Tehnologia RFID și a codurilor de bare este utilizată în multe aplicații care necesită identificare automată și trasabilitate în automatizarea proceselor și a fabricilor.',
    icon: IconBarcode,
    fallback: '📦',
  },
  {
    title: 'Procesare de imagini',
    description: 'Detectarea defectelor în produsele fabricate cu sisteme de control vizual oferă superioritate față de oameni.',
    icon: IconTarget,
    fallback: '🖼️',
  },
];

/* eslint-disable react/prop-types */
export default function TechnologyCapabilities({ cmsCapabilities }) {
  const { locale, t } = useLanguage();

  // CMS'den capability gelirse kullan (title/description mevcut olmalı)
  // Yoksa statik getTechnologyCapabilities() devreye girer
  const localizedCapabilities = useMemo(() => {
    if (cmsCapabilities && cmsCapabilities.length > 0) {
      return cmsCapabilities.map((cap, i) => ({
        ...capabilities[i], // icon bilgisini statik listeden al (CMS'de SVG component yok)
        title: cap.name || cap.title || capabilities[i]?.title || '',
        description: cap.description || capabilities[i]?.description || '',
      }));
    }
    return getTechnologyCapabilities(capabilities, locale);
  }, [cmsCapabilities, locale]);

  return (
    <section className="section-block bg-gradient-to-br from-white via-[#f9fbfd] to-white relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-35"></div>

      <Container size="xl" className="relative z-10">
        <SectionHeader
          title={t('sections.technologyTitle', 'Teknoloji Yetkinlikleri ve Uzmanlıkları')}
          subtitle={t('sections.technologySubtitle', 'Modern üretim için gelişmiş izlenebilirlik çözümleri')}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {localizedCapabilities.map((capability, index) => (
            (() => {
              const CapabilityIcon = capability.icon || IconTarget;
              return (
            <div
              key={capability.title}
              className={`px-6 md:px-10 py-8 md:py-0 text-center ${
                index < localizedCapabilities.length - 1
                  ? 'border-b border-slate-200 md:border-b-0 md:border-r md:border-slate-300'
                  : ''
              }`}
            >
              <div className="mb-6 text-slate-blue leading-none flex justify-center">
                <CapabilityIcon size={56} className="text-slate-blue" />
                <span className="sr-only">{capability.title}</span>
              </div>

              <h3 className="text-[1.45rem] font-bold text-primary-black text-center mb-3 leading-tight">
                {capability.title}
              </h3>
              <p className="card-description-copy card-description-block text-gray-text text-base leading-8 max-w-[46ch] mx-auto">
                {getFirstSentenceText(capability.description)}
              </p>
            </div>
              );
            })()
          ))}
        </div>
      </Container>
    </section>
  );
}
