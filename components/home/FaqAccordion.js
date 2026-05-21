'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';
import Container from '../ui/Container';

const faqs = [
  {
    id: 1,
    question: 'Ce este trasabilitatea industrială?',
    answer: 'Trasabilitatea este capacitatea de a urmări un produs sau serviciu de-a lungul întregului său ciclu de viață. Aceasta permite fabricilor să urmărească cu ușurință datele produsului de la materia primă până la distribuție și consumatorul final. Astfel, atunci când se întâmpină o problemă de producție, toate informațiile relevante - cum ar fi parametrii materiilor prime, parametrii de calitate, rezultatele testelor, linia de producție, operatorul responsabil, data și ora producției - pot fi accesate instantaneu prin intermediul sistemului de trasabilitate. Sistemele moderne de trasabilitate colectează și analizează date în timp real, oferind vizibilitate completă asupra proceselor de producție și logistică.',
  },
  {
    id: 2,
    question: 'De ce urmărim produsul?',
    answer: 'Atunci când se întâmpină o problemă la produs, ar trebui să fie posibilă accesarea tuturor proceselor, de la parametrii de calitate la materiale și de la mașina pe care este produs până la operator. În același timp, este esențial să se găsească cauza acestei probleme cât mai curând posibil. Sursa problemei poate fi detectată cu ușurință datorită datelor colectate prin sistemul de trasabilitate. Mai mult, trasabilitatea oferă avantaje strategice: permite recall-uri țintite în loc de masive, îmbunătățește controlul calității, optimizează procesele de producție, reduce risipă, asigură conformitatea cu reglementările industriale și crește încrederea clienților în produs.',
  },
  {
    id: 3,
    question: 'Cum urmărim produsul?',
    answer: 'În funcție de producție, pot fi utilizate diferite metode. Numărul lotului, numărul de serie, data de producție sunt utilizate pentru identificarea automată. Datele de trasabilitate sunt adăugate automat de cititoare pe măsură ce produsul urmează traseul. Etichetele de pe produse pot fi coduri de bare (1D sau 2D Data Matrix), etichete RFID (UHF, HF sau NFC) sau markare directă (laser, dot peen, inkjet). Datele colectate pot fi stocate atât pe servere fizice locale, cât și în sisteme cloud pentru acces global. Senzorii IoT și sistemele de viziune artificială pot completa datele de trasabilitate cu informații despre temperatura, umiditatea, vibrațiile sau defectele vizuale.',
  },
  {
    id: 4,
    question: 'Care sunt avantajele tehnologiei RFID față de codurile de bare?',
    answer: 'Tehnologia RFID oferă multiple avantaje față de codurile de bare tradiționale: citire fără linie vizuală directă (eticheta poate fi citită prin materiale opace), capacitate de citire în masă (sute de etichete pot fi citite simultan în câteva secunde), durabilitate superioară în medii industriale dure (rezistență la murdărie, praf, umiditate, temperaturi extreme), capacitate de stocare a datelor mult mai mare (până la 8KB vs 100 bytes), posibilitatea de rescriere și actualizare a datelor pe parcursul procesului, distanțe de citire mai mari (până la 12 metri pentru UHF) și reducerea drastică a timpului de inventariere. De asemenea, etichetele RFID oferă autentificare și securitate sporită împotriva contrafacerii.',
  },
  {
    id: 5,
    question: 'Cât durează implementarea unui sistem de trasabilitate?',
    answer: 'Durata implementării depinde de complexitatea procesului de producție, dimensiunea facilității și nivelul de integrare necesar cu sistemele existante. Un proiect tipic poate dura între 3-6 luni, incluzând analiza detaliată a proceselor, maparea fluxurilor de producție, proiectarea soluției, instalarea echipamentelor hardware, configurarea și personalizarea software-ului, testarea extensivă în mediu real, instruirea completă a personalului și suportul post-implementare. Proiectele mai mari sau cele cu integrare complexă cu multiple sisteme ERP/MES pot necesita 9-12 luni. Utilizăm o abordare modulară care permite implementare pas cu pas, astfel încât anumite module pot fi puse în funcțiune mai repede, minimizând impactul asupra producției.',
  },
  {
    id: 6,
    question: 'Cum se integrează sistemul de trasabilitate cu ERP-ul nostru?',
    answer: 'Sistemele noastre de trasabilitate se integrează seamless cu majoritatea platformelor ERP populare (SAP, Oracle, Microsoft Dynamics, Infor, IFS, etc.) prin API-uri RESTful standard, web services (SOAP), protocoale OPC-UA pentru comunicare industrială sau conectori personalizați dezvoltați specific. Integrarea permite schimbul automat bidirecțional de date despre comenzi de producție, planificare, inventar în timp real, parametri de calitate, rezultate ale testelor, tranzacții de depozit și documente de expediere. Acest lucru elimină complet introducerea manuală a datelor, reduce erorile cu până la 95%, accelerează procesele administrative și oferă vizibilitate end-to-end în întreaga organizație. De asemenea, suportăm integrare cu sisteme MES, WMS, QMS și PLM.',
  },
  {
    id: 7,
    question: 'Ce rol joacă Pick to Light în procesele de asamblare?',
    answer: 'Sistemele Pick to Light ghidează operatorii prin procesele de asamblare folosind indicatori luminoși LED, afișaje digitale și semnale vizuale/audio, reducând semnificativ erorile umane cu până la 90%. Acestea confirmă automat pașii finalizați prin butoane tactile sau senzori, previne montajul greșit al componentelor prin verificări în timp real, crește viteza de asamblare cu 30-40% și reduce timpul de instruire a noilor angajați cu 50%. Este ideal pentru procese cu variante multiple de produse, frecvență mare de schimbare a modelelor (high-mix low-volume) și pentru respectarea instrucțiunilor de asamblare complexe. Sistemele moderne suportă validare avansată, managementul inventarului Just-in-Time și integrare cu sistemele MES pentru analytics predictiv.',
  },
  {
    id: 8,
    question: 'Sistemele de trasabilitate funcționează și offline?',
    answer: 'Da, sistemele noastre sunt proiectate cu arhitectură edge computing care permite funcționare completă în modul offline. Stațiile de lucru colectează și procesează date local când conexiunea la rețea este întreruptă, menținând continuitatea operațională fără nicio pierdere de date. Datele sunt stocate temporar în buffer local și sincronizate automat cu serverul central când conexiunea este restabilită, folosind algoritmi de reconciliere inteligentă pentru rezolvarea eventualelor conflicte. Acest lucru asigură continuitatea producției chiar și în cazul întreruperilor de rețea, probleme temporare de conectivitate sau întreținere programată a serverelor. Operatorii primesc notificări despre status-ul conexiunii și pot continua munca fără întreruperi.',
  },
];

export const FaqAccordion = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-14 md:py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 font-sans relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-accent-blue opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl"></div>

      <Container size="xl" className="relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-secondary-blue text-xs md:text-sm uppercase tracking-[0.18em] font-semibold mb-4">
            FAQ
          </p>
          <h2 className="text-primary-black text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] tracking-tight mb-6">
            Perspectivele noastre asupra trasabilității
          </h2>
          <div className="w-24 h-1 bg-accent-blue mx-auto"></div>
        </motion.div>

        {/* FAQ Grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column - First 4 questions */}
          <div className="bg-white rounded-3xl shadow-soft overflow-hidden">
            {faqs.slice(0, 4).map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-b border-slate-200 last:border-b-0 relative group"
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={openId === faq.id}
                  aria-controls={`faq-panel-${faq.id}`}
                  id={`faq-trigger-${faq.id}`}
                  className="w-full px-6 md:px-8 py-6 md:py-7 flex items-center justify-between gap-5 text-left relative z-10"
                >
                  <h3 className={`text-lg md:text-xl font-bold tracking-[-0.01em] leading-tight transition-colors duration-300 ${openId === faq.id ? 'text-secondary-blue' : 'text-primary-black group-hover:text-accent-blue'}`}>
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 45 : 0 }}
                    transition={{ duration: 0.3, type: "spring" }}
                    className={`${openId === faq.id ? 'text-secondary-blue bg-secondary-blue/10' : 'text-slate-500 bg-slate-100 group-hover:bg-accent-blue/10 group-hover:text-accent-blue'} flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300`}
                  >
                    <FiPlus size={24} />
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
                  className="overflow-hidden relative z-10"
                >
                  <p className="px-6 md:px-8 pb-6 md:pb-7 pr-16 text-gray-text leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Last 4 questions */}
          <div className="bg-white rounded-3xl shadow-soft overflow-hidden">
            {faqs.slice(4, 8).map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-b border-slate-200 last:border-b-0 relative group"
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={openId === faq.id}
                  aria-controls={`faq-panel-${faq.id}`}
                  id={`faq-trigger-${faq.id}`}
                  className="w-full px-6 md:px-8 py-6 md:py-7 flex items-center justify-between gap-5 text-left relative z-10"
                >
                  <h3 className={`text-lg md:text-xl font-bold tracking-[-0.01em] leading-tight transition-colors duration-300 ${openId === faq.id ? 'text-secondary-blue' : 'text-primary-black group-hover:text-accent-blue'}`}>
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 45 : 0 }}
                    transition={{ duration: 0.3, type: "spring" }}
                    className={`${openId === faq.id ? 'text-secondary-blue bg-secondary-blue/10' : 'text-slate-500 bg-slate-100 group-hover:bg-accent-blue/10 group-hover:text-accent-blue'} flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300`}
                  >
                    <FiPlus size={24} />
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
                  className="overflow-hidden relative z-10"
                >
                  <p className="px-6 md:px-8 pb-6 md:pb-7 pr-16 text-gray-text leading-relaxed text-sm md:text-base">
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
