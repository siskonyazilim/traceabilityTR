'use client';

import { useMemo } from 'react';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import { useLanguage } from '../i18n/LanguageProvider';
import { IconBarcode, IconHistory, IconTarget } from '../ui/Icons';
import { getTechnologyCapabilities } from '../../lib/i18n/contentLocalization';

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

export default function TechnologyCapabilities() {
  const { locale, t } = useLanguage();
  const localizedCapabilities = useMemo(() => getTechnologyCapabilities(capabilities, locale), [locale]);

  return (
    <section className="section-block bg-gradient-to-br from-white via-[#f9fbfd] to-white relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-35"></div>

      <Container size="xl" className="relative z-10">
        <SectionHeader
          title={t('sections.technologyTitle', 'Capabilități și Competențe Tehnologice')}
          subtitle={t('sections.technologySubtitle', 'Soluții avansate de trasabilitate pentru producția modernă')}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
          {localizedCapabilities.map((capability, index) => (
            (() => {
              const CapabilityIcon = capability.icon || IconTarget;
              return (
            <div
              key={capability.title}
              className={`px-6 md:px-10 text-center ${index < localizedCapabilities.length - 1 ? 'md:border-r md:border-slate-300' : ''}`}
            >
              <div className="mb-6 text-slate-blue leading-none flex justify-center">
                <CapabilityIcon size={56} className="text-slate-blue" />
                <span className="sr-only">{capability.title}</span>
              </div>

              <h3 className="text-[1.45rem] font-bold text-primary-black text-center mb-3 leading-tight">
                {capability.title}
              </h3>
              <p className="text-gray-text text-base leading-8 text-center max-w-[46ch] mx-auto">
                {capability.description}
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
