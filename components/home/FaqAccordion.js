'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';

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
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader
          title="Întrebări Frecvente"
          subtitle="Perspectivele noastre asupra trasabilității"
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="border-2 border-gray-light rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-light transition-colors"
              >
                <h3 className="text-left font-semibold text-primary-black">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-accent-blue flex-shrink-0 ml-4"
                >
                  <FiChevronDown size={24} />
                </motion.div>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openId === faq.id ? 'auto' : 0,
                  opacity: openId === faq.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-gray-light bg-opacity-50"
              >
                <p className="px-6 py-4 text-gray-text">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FaqAccordion;
