'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';
import Container from '../ui/Container';

const faqs = [
  {
    id: 1,
    question: 'Ce este trasabilitatea industrială?',
    answer: 'Trasabilitatea urmărește produsul de la materia primă la livrare. Când apare o problemă, găsești rapid lotul, parametrii de proces, linia și operatorul implicat.',
  },
  {
    id: 2,
    question: 'De ce urmărim produsul?',
    answer: 'Pentru a reduce rebuturile, costurile și timpul de intervenție. Sistemul identifică rapid cauza, limitează impactul și accelerează acțiunile corective.',
  },
  {
    id: 3,
    question: 'Cum urmărim produsul?',
    answer: 'Prin coduri de bare, Data Matrix sau RFID, în funcție de fluxul de producție. Datele sunt colectate automat pe traseu și stocate local sau în cloud.',
  },
];

export const FaqAccordion = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-14 md:py-20 bg-[#f8fafc] font-sans">
      <Container>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start lg:items-stretch">
          <div className="lg:col-span-4 lg:self-stretch flex items-center">
            <div className="pl-6 md:pl-7 border-l-4 border-secondary-blue">
              <p className="text-secondary-blue text-xs md:text-sm uppercase tracking-[0.18em] font-semibold mb-3">
                FAQ
              </p>
              <h2 className="text-primary-black text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.08] tracking-tight max-w-sm">
                Perspectivele noastre asupra trasabilității
              </h2>
            </div>
          </div>

          <div className="lg:col-span-8 border-t border-slate-200 bg-white rounded-2xl px-5 md:px-7 shadow-sm">
            {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true }}
              className="border-b border-slate-200"
            >
              <button
                type="button"
                onClick={() => toggleAccordion(faq.id)}
                aria-expanded={openId === faq.id}
                aria-controls={`faq-panel-${faq.id}`}
                id={`faq-trigger-${faq.id}`}
                className="w-full py-5 md:py-6 flex items-center justify-between gap-5 text-left"
              >
                <h3 className={`text-2xl md:text-3xl font-semibold tracking-[-0.01em] leading-tight ${openId === faq.id ? 'text-secondary-blue' : 'text-primary-black'}`}>
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openId === faq.id ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`${openId === faq.id ? 'text-secondary-blue' : 'text-slate-500'} flex-shrink-0`}
                >
                  <FiPlus size={28} />
                </motion.div>
              </button>

              <motion.div
                id={`faq-panel-${faq.id}`}
                role="region"
                aria-labelledby={`faq-trigger-${faq.id}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openId === faq.id ? 'auto' : 0,
                  opacity: openId === faq.id ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="pb-6 md:pb-7 pr-10 text-gray-text leading-relaxed text-sm md:text-base max-w-3xl">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FaqAccordion;
