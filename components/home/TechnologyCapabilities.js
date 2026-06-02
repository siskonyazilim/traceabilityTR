'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import { useLanguage } from '../i18n/LanguageProvider';
import { getTechnologyCapabilities } from '../../lib/i18n/contentLocalization';

const capabilities = [
  {
    title: 'POKA YOKE',
    description: 'Trasabilitatea este soluția permanentă la erorile umane, ale mașinilor sau legate de proiectare care apar în timpul producției cu metode simple și ieftine.',
    iconClass: 'fa fa-history2 fa-history fa-4x fa-fw',
    fallback: '🔁',
  },
  {
    title: 'RFID și coduri de bare',
    description: 'Tehnologia RFID și a codurilor de bare este utilizată în multe aplicații care necesită identificare automată și trasabilitate în automatizarea proceselor și a fabricilor.',
    iconClass: 'fa fa-barcode fa-4x fa-fw',
    fallback: '📦',
  },
  {
    title: 'Procesare de imagini',
    description: 'Detectarea defectelor în produsele fabricate cu sisteme de control vizual oferă superioritate față de oameni.',
    iconClass: 'fa fa-frame-contract fa-crosshairs fa-4x fa-fw',
    fallback: '🖼️',
  },
];

export default function TechnologyCapabilities() {
  const { locale, t } = useLanguage();
  const localizedCapabilities = useMemo(() => getTechnologyCapabilities(capabilities, locale), [locale]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-[#f9fbfd] to-white relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-35"></div>

      <Container size="xl" className="relative z-10">
        <SectionHeader
          title={t('sections.technologyTitle', 'Capabilități și Competențe Tehnologice')}
          subtitle={t('sections.technologySubtitle', 'Soluții avansate de trasabilitate pentru producția modernă')}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
          {localizedCapabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              viewport={{ once: true }}
              className={`px-6 md:px-10 text-center ${index < localizedCapabilities.length - 1 ? 'md:border-r md:border-slate-300' : ''}`}
            >
              <div className="mb-6 text-slate-blue leading-none flex justify-center">
                <i className={capability.iconClass || 'fa fa-cube fa-4x fa-fw'} aria-hidden="true"></i>
                <span className="sr-only">{capability.title}</span>
              </div>

              <h3 className="text-2xl font-bold text-primary-black text-center mb-3">
                {capability.title}
              </h3>
              <p className="text-gray-text text-base leading-relaxed text-center">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
