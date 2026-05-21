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
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-black via-slate-900 to-primary-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pattern-dots opacity-10"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-blue/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary-blue/15 rounded-full blur-3xl"></div>

      <Container size="xl" className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Capabilități și Competențe Tehnologice
          </h2>
          <p className="text-xl text-gray-light max-w-2xl mx-auto">
            Soluții avansate de trasabilitate pentru producția modernă
          </p>
        </motion.div>

        {/* Horizontal Timeline Layout */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-accent-blue via-accent-green to-accent-blue opacity-30"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {capabilities.map((capability, index) => {
              return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Number Badge */}
                  <div className="flex justify-center mb-6">
                    <div className="relative w-20 h-20 rounded-full bg-secondary-blue flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl font-bold">{index + 1}</span>
                      <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={capability.image}
                          alt={capability.title}
                          className="h-12 w-12 object-contain transition-all duration-300"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.querySelector('.fallback-capability-icon')?.classList.remove('hidden');
                          }}
                        />
                        <span className="fallback-capability-icon hidden text-3xl">{capability.fallback}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">
                      {capability.title}
                    </h3>
                    <p className="text-gray-light leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
