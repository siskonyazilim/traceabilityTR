'use client';

import { motion } from 'framer-motion';
import Container from '../ui/Container';
import { FiRefreshCw, FiBox, FiImage } from 'react-icons/fi';

const capabilities = [
  {
    title: 'POKA YOKE',
    description: 'Trasabilitatea este soluția permanentă la erorile umane, ale mașinilor sau legate de proiectare care apar în timpul producției cu metode simple și ieftine.',
    icon: FiRefreshCw,
    color: 'text-accent-blue',
  },
  {
    title: 'RFID și coduri de bare',
    description: 'Tehnologia RFID și a codurilor de bare este utilizată în multe aplicații care necesită identificare automată și trasabilitate în automatizarea proceselor și a fabricilor.',
    icon: FiBox,
    color: 'text-accent-green',
  },
  {
    title: 'Procesare de imagini',
    description: 'Detectarea defectelor în produsele fabricate cu sisteme de control vizual oferă superioritate față de oameni.',
    icon: FiImage,
    color: 'text-accent-yellow',
  },
];

export default function TechnologyCapabilities() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-4">
            Capabilități și Competențe Tehnologice
          </h2>
          <p className="text-xl text-gray-text max-w-2xl mx-auto">
            Soluții avansate de trasabilitate pentru producția modernă
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-light rounded-2xl p-8 hover:shadow-xl transition-all group"
              >
                <div className={`text-5xl mb-6 ${capability.color} group-hover:scale-110 transition-transform`}>
                  <Icon />
                </div>
                <h3 className="text-2xl font-bold text-primary-black mb-4">
                  {capability.title}
                </h3>
                <p className="text-gray-text leading-relaxed">
                  {capability.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
