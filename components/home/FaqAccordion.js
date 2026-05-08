'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';
import Container from '../ui/Container';

const faqs = [
  {
    id: 1,
    question: 'Ce este trasabilitatea industrială?',
    answer: 'Trasabilitatea este capacitatea de a urmări un produs sau serviciu. Aceasta permite fabricilor să urmărească cu ușurință datele produsului de la materia primă până la distribuție. Astfel, atunci când se întâmpină o problemă de producție, toate informațiile, cum ar fi parametrii materiei prime, parametrii de calitate, rezultatele testelor, linia de producție sau operatorul din producție, pot fi accesate prin intermediul sistemului de trasabilitate.',
  },
  {
    id: 2,
    question: 'De ce urmărim produsul?',
    answer: 'Atunci când se întâmpină o problemă la produs, ar trebui să fie posibilă accesarea tuturor proceselor, de la parametrii de calitate la materiale și de la mașina pe care este produs până la operator. În același timp, este esențial să se găsească cauza acestei probleme cât mai curând posibil. Sursa problemei poate fi detectată cu ușurință datorită datelor colectate prin sistemul de trasabilitate.',
  },
  {
    id: 3,
    question: 'Cum urmărim produsul?',
    answer: 'În funcție de producție, pot fi utilizate diferite metode. Numărul lotului, numărul de serie, data de producție sunt utilizate pentru identificarea automată. Datele de trasabilitate sunt adăugate automat de cititoare pe măsură ce produsul urmează traseul. Etichetele de pe produse pot fi coduri de bare, Data Matrix sau RFID. Datele colectate pot fi stocate atât pe servere fizice, cât și în sisteme cloud.',
  },
];

export const FaqAccordion = () => {
  const [openId, setOpenId] = useState(1);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-white font-sans">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start lg:items-stretch">
          <div className="lg:col-span-4 lg:self-stretch flex items-center">
            <h2 className="text-primary-black text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.08] tracking-tight max-w-sm">
              Perspectivele noastre asupra trasabilității
            </h2>
          </div>

          <div className="lg:col-span-8 border-t border-slate-200">
            {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
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
                  transition={{ duration: 0.3 }}
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
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="pb-6 md:pb-7 pr-10 text-gray-text leading-relaxed text-sm md:text-base max-w-4xl">
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
