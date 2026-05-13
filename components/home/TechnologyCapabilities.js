'use client';

import { motion } from 'framer-motion';
import Container from '../ui/Container';

const capabilities = [
  {
    title: 'POKA YOKE',
    description: 'Trasabilitatea este soluția permanentă la erorile umane, ale mașinilor sau legate de proiectare care apar în timpul producției cu metode simple și ieftine.',
    image: '/Capabilit/traceability.svg',
    fallback: '🔁',
  },
  {
    title: 'RFID și coduri de bare',
    description: 'Tehnologia RFID și a codurilor de bare este utilizată în multe aplicații care necesită identificare automată și trasabilitate în automatizarea proceselor și a fabricilor.',
    image: '/Capabilit/rfid_barcode.svg',
    fallback: '📦',
  },
  {
    title: 'Procesare de imagini',
    description: 'Detectarea defectelor în produsele fabricate cu sisteme de control vizual oferă superioritate față de oameni.',
    image: '/Capabilit/image_processing.svg',
    fallback: '🖼️',
  },
];

export default function TechnologyCapabilities() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
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
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-gray-light shadow-md hover:shadow-xl hover:border-accent-blue transition-all group"
              >
                <div className="h-28 mb-6 flex items-center justify-center overflow-hidden">
                  <img
                    src={capability.image}
                    alt={capability.title}
                    className="h-14 w-14 object-contain transition-transform duration-200 group-hover:scale-[1.03]"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.querySelector('.fallback-capability-icon')?.classList.remove('hidden');
                    }}
                  />
                  <span className="fallback-capability-icon hidden text-3xl">{capability.fallback}</span>
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
