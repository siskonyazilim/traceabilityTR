'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';

export const HomeCta = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pattern-dots opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-accent-blue/8 rounded-full blur-3xl"></div>

      <Container size="xl" className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-primary-black mb-8 leading-tight"
          >
            Vrei să transformi procesele tale de producție?
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-text text-xl md:text-2xl mb-12 leading-relaxed"
          >
            Planificăm împreună o soluție de trasabilitate adaptată fluxurilor tale operaționale.
          </motion.p>

          {/* CTA Buttons - Standardized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex gap-6 justify-center flex-wrap"
          >
            <Button
              as={Link}
              href="/contact"
              variant="solid"
              size="lg"
              className="bg-secondary-blue hover:bg-accent-blue text-white"
            >
              Cere Ofertă
            </Button>
            <Button
              as={Link}
              href="/proiecte-de-referinta"
              variant="outline"
              size="lg"
              className="border-2 border-primary-black text-primary-black hover:bg-primary-black hover:text-white"
            >
              Vezi Referințele
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HomeCta;