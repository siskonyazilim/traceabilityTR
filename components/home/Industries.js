'use client';

import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';

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

export default function Industries() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pattern-grid opacity-20"></div>

      <Container size="xl" className="relative z-10">
        <SectionHeader
          title="Urmăriți cu înțelepciune, bazat pe analize strategice și riguroase"
          subtitle=""
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-accent-blue transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                {/* Icon */}
                <div className="mb-6 text-center flex justify-center">
                  <img
                    src={industry.icon}
                    alt={industry.name}
                    className="w-16 h-16 object-contain"
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-primary-black mb-4 group-hover:text-accent-blue transition-colors text-center">
                  {industry.name}
                </h3>

                <p className="text-gray-text text-sm leading-relaxed text-center flex-grow">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
