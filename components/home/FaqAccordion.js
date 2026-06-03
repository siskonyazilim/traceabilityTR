'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { IconPlus } from '../ui/Icons';
import Container from '../ui/Container';
import { useLanguage } from '../i18n/LanguageProvider';
import { getFaqBundle } from '../../lib/i18n/contentLocalization';

const faqs = [
  {
    id: 1,
    question: 'Ce este trasabilitatea industrială Track & Trace?',
    answer: 'Trasabilitatea Track & Trace este un sistem critic care permite urmărirea individuală a produselor pe parcursul întregului ciclu de viață, de la nivel de pachet până la nivel de palet. Sistemul asigură că fiecare produs primește un identificator unic (UID) care este înregistrat digital în toate etapele producției, ambalării, depozitării și distribuției. Acest lucru permite fabricilor să acceseze instantaneu informații complete despre materiile prime, parametrii de calitate, rezultatele testelor, linia de producție, operatorul responsabil și marca temporală pentru fiecare produs individual. Sistemele moderne de trasabilitate colectează și analizează date în timp real, oferind vizibilitate completă și conformitate cu reglementările industriale stricte.',
  },
  {
    id: 2,
    question: 'Ce este Aggregation (Agregarea) și de ce este critică pentru trasabilitate?',
    answer: 'Aggregation este elementul cel mai vital al trasabilității moderne. Reprezintă procesul de creare a unei ierarhii digitale în care identificatorii unici (UID) ai produselor individuale sunt asociați cu identificatorul ambalajului mai mare care le conține, formând o relație parent-copil. Ierarhia standard este: Pachet (produs de mașina de fabricație) → Carton (de la mașina de împachetare) → Cutie (case packer) → Palet (paletizator). Datorită acestui arbore digital, citind doar codul de bare logistic al unui palet, se pot obține instantaneu informațiile despre miile de pachete individuale pe care le conține. Orice eroare de asociere (Aggregation Mismatch) determină oprirea imediată a mașinii și respingerea produselor. Fără agregare corectă, sistemul de trasabilitate nu poate funcționa.',
  },
  {
    id: 3,
    question: 'Care este diferența dintre Serializare (UID) și Urmărirea Lotului?',
    answer: 'Serializarea înseamnă atribuirea unui identificator complet unic fiecărui produs individual, permițând urmărirea sa separată. Un UID (Unique Identifier) conține de obicei ID-ul producătorului, GTIN/SKU, număr de serie unic, referință de agregare și un checksum sau semnătură criptografică pentru securitate. Standardele GS1 SGTIN (pentru produse serializate) și GS1 SSCC (pentru unități logistice) sunt utilizate pe scară largă. Urmărirea lotului grupează produsele fabricate în aceeași perioadă sub un identificator comun de lot, bazat pe data producției și numărul lotului. Ambele metodologii pot funcționa simultan: serializarea oferă granularitate maximă pentru recall-uri țintite și anti-contrafacere, în timp ce loturile oferă eficiență pentru gestionarea materialelor consumate, echipamentelor și parametrilor de calitate la nivel de batch.',
  },
  {
    id: 4,
    question: 'Cum funcționează sistemele de verificare cu camere industriale?',
    answer: 'Sistemele de verificare cu camere sunt esențiale pentru validarea calității codurilor aplicate pe produse. După ce un cod este imprimat prin laser sau inkjet, camere industriale de înaltă rezoluție plasate pe linia de producție scanează automat fiecare cod în timp real, verificând lizibilitatea, contrastul, dimensiunile și corectitudinea datelor. Dacă camera nu poate citi codul (semnalizează "No Read"), produsul este imediat marcat pentru respingere și îndepărtat fizic de pe linie printr-un mecanism de reject automat. Acest proces garantează că doar produsele cu coduri perfect lizibile ajung la distribuție, prevenind problemele în lanțul de aprovizionare. Camerele moderne pot procesa peste 2000 de produse pe minut, detectând defecte invizibile ochiului uman, cum ar fi variații subtile de contrast sau deteriorări parțiale ale codului Data Matrix.',
  },
  {
    id: 5,
    question: 'Ce tehnologii de codare sunt utilizate în trasabilitate?',
    answer: 'Există trei tehnologii principale de codare în sistemele Track & Trace. Codarea cu laser este preferată pentru liniile de mare viteza (peste 2000 produse/minut), oferind marcare permanentă fără costuri de consumabile, dar poate avea probleme de contrast pe anumite suprafețe. Codarea inkjet este utilizată în principal la nivel logistic (cutii și paleți) pentru coduri mai mari, oferind contrast excelent, dar necesită întreținere pentru prevenirea înfundării duzelor și este sensibilă la condițiile de mediu. Marcarea directă Data Matrix 2D este standardul industrial pentru serializare, deoarece stochează cantități mari de date într-un spațiu mic și poate fi citită chiar dacă este parțial deteriorată. Codurile sunt validate imediat după aplicare prin camere de verificare pentru a garanta lizibilitatea pe întreaga durată de viață a produsului. Alegerea tehnologiei depinde de viteza liniei, materialul ambalajului și cerințele de durabilitate.',
  },
  {
    id: 6,
    question: 'Cum se realizează integrarea cu sistemele corporative ERP și MES?',
    answer: 'Arhitectura sistemelor de trasabilitate necesită integrare strânsă cu infrastructura IT corporativă. Fluxul de date standard începe cu un Generator UID care creează identificatori unici, transmite aceste coduri către imprimante pentru aplicare fizică, apoi camerele industriale verifică calitatea codării. Un Aggregation Server central gestionează toate relațiile ierarhice dintre produse și ambalaje. Datele sunt transmise prin straturi intermediare folosind protocoale industriale standard precum OPC-UA (pentru comunicare cu echipamentele) și TMC către sistemele MES/MII (Manufacturing Execution Systems) pentru monitorizarea producției în timp real. În final, aceste date sunt sincronizate cu sistemele ERP (SAP, Oracle, Microsoft Dynamics) prin API-uri RESTful, web services SOAP sau conectori personalizați, permițând schimbul bidirecțional de informații despre comenzi de producție, inventar, calitate și expedieri. Această integrare end-to-end elimină complet introducerea manuală de date și oferă vizibilitate completă în întreaga organizație.',
  },
  {
    id: 7,
    question: 'Cum se asigură conformitatea cu reglementările și standardele GS1?',
    answer: 'Conformitatea cu reglementările internaționale este fundamentală în sistemele Track & Trace. Pentru sectorul tutunului, reglementări extrem de stricte precum TTT (Track and Trace for Tobacco) și EU TPD (Tobacco Products Directive) impun trasabilitate completă de la fabrică până la punctul de vânzare. Standardele GS1 oferă cadrul tehnic: SGTIN (Serialized Global Trade Item Number) pentru produse individuale și SSCC (Serial Shipping Container Code) pentru unități logistice. Sistemele noastre generează automat identificatori conformi GS1, incluzând checksumuri și semnături criptografice pentru prevenirea contrafacerii. Pentru ISO 9001, documentăm complet procesele pentru audituri. Pentru IATF 16949 (automotive), asigurăm trasabilitate completă a componentelor critice. Pentru ISO 22000/HACCP (siguranța alimentelor), monitorizăm parametri critici în timp real. Toate datele sunt arhivate conform cerințelor legale, iar rapoartele pentru audituri sunt generate automat, reducând timpul de pregătire cu peste 70%.',
  },
  {
    id: 8,
    question: 'Cât durează implementarea unui sistem complet de trasabilitate?',
    answer: 'Durata implementării unui sistem Track & Trace complet variază în funcție de complexitatea liniilor de producție și nivelul de integrare necesar. Un proiect tipic durează între 4-8 luni și include: analiza detaliată a proceselor de producție și maparea fluxurilor, proiectarea arhitecturii de serializare și agregare, instalarea echipamentelor hardware (imprimante laser/inkjet, camere de verificare, sisteme de reject), configurarea serverelor UID Generator și Aggregation, dezvoltarea integrărilor OPC-UA cu echipamentele, configurarea conectivității cu sistemele MES/ERP, testarea extensivă în mediu real cu validarea tuturor scenariilor de agregare, instruirea completă a personalului de producție și IT, precum și suportul post-implementare pentru optimizare. Proiectele mari cu multiple linii de producție sau cerințe complexe de conformitate pot necesita 10-14 luni. Utilizăm o abordare modulară care permite punerea în funcțiune progresivă, astfel încât anumite linii pot deveni operaționale mai rapid, minimizând impactul asupra producției curente.',
  },
];

export const FaqAccordion = () => {
  const [openId, setOpenId] = useState(null);
  const { locale } = useLanguage();
  const faqBundle = useMemo(() => getFaqBundle(faqs, locale), [locale]);
  const triggerRefs = useRef(new Map());
  const panelRefs = useRef(new Map());

  useEffect(() => {
    if (openId === null) {
      return;
    }

    const trigger = triggerRefs.current.get(openId);
    const panel = panelRefs.current.get(openId);

    if (!trigger || !panel) {
      return;
    }

    const SCROLL_TOP_OFFSET = 96;
    const SCROLL_BOTTOM_PADDING = 24;

    requestAnimationFrame(() => {
      const triggerRect = trigger.getBoundingClientRect();
      const panelRect = panel.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const titleHiddenTop = triggerRect.top < SCROLL_TOP_OFFSET;
      const contentHiddenBottom = panelRect.bottom > viewportHeight - SCROLL_BOTTOM_PADDING;

      if (!titleHiddenTop && !contentHiddenBottom) {
        return;
      }

      const targetTop = Math.max(0, window.scrollY + triggerRect.top - SCROLL_TOP_OFFSET);

      window.scrollTo({
        top: targetTop,
        behavior: 'smooth',
      });
    });
  }, [openId]);

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
        <div className="text-center mb-12 md:mb-16">
          <p className="text-secondary-blue text-xs md:text-sm uppercase tracking-[0.18em] font-semibold mb-4">
            {faqBundle.eyebrow}
          </p>
          <h2 className="text-primary-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] tracking-tight mb-6">
            {faqBundle.title}
          </h2>
          <div className="w-24 h-1 bg-accent-blue mx-auto"></div>
        </div>

        {/* FAQ Grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column - First 4 questions */}
          <div className="bg-white rounded-3xl shadow-soft overflow-hidden">
            {faqBundle.items.slice(0, 4).map((faq, index) => (
              <div
                key={faq.id}
                className="border-b border-slate-200 last:border-b-0 relative group"
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  ref={(element) => {
                    if (element) {
                      triggerRefs.current.set(faq.id, element);
                    } else {
                      triggerRefs.current.delete(faq.id);
                    }
                  }}
                  aria-expanded={openId === faq.id}
                  aria-controls={`faq-panel-${faq.id}`}
                  id={`faq-trigger-${faq.id}`}
                  className="w-full px-6 md:px-8 py-6 md:py-7 flex items-center justify-between gap-5 text-left relative z-10 transition-all duration-300"
                >
                  <h3 className={`text-lg md:text-xl font-bold tracking-[-0.01em] leading-tight transition-colors duration-300 ${openId === faq.id ? 'text-secondary-blue' : 'text-primary-black group-hover:text-accent-blue'}`}>
                    {faq.question}
                  </h3>
                  <span
                    className={`${openId === faq.id ? 'text-secondary-blue bg-secondary-blue/10 rotate-45 shadow-md shadow-secondary-blue/20' : 'text-slate-500 bg-slate-100 group-hover:bg-accent-blue/10 group-hover:text-accent-blue'} flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300`}
                  >
                    <IconPlus size={24} />
                  </span>
                </button>

                <section
                  id={`faq-panel-${faq.id}`}
                  ref={(element) => {
                    if (element) {
                      panelRefs.current.set(faq.id, element);
                    } else {
                      panelRefs.current.delete(faq.id);
                    }
                  }}
                  aria-labelledby={`faq-trigger-${faq.id}`}
                  className={`grid overflow-hidden relative z-10 transition-all duration-500 ease-out ${openId === faq.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className={`px-6 md:px-8 pr-16 text-gray-text leading-relaxed text-sm md:text-base transition-all duration-500 ${openId === faq.id ? 'pb-6 md:pb-7 translate-y-0' : 'pb-0 -translate-y-2'}`}>
                      {faq.answer}
                    </p>
                  </div>
                </section>
              </div>
            ))}
          </div>

          {/* Right Column - Last 4 questions */}
          <div className="bg-white rounded-3xl shadow-soft overflow-hidden">
            {faqBundle.items.slice(4, 8).map((faq, index) => (
              <div
                key={faq.id}
                className="border-b border-slate-200 last:border-b-0 relative group"
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  ref={(element) => {
                    if (element) {
                      triggerRefs.current.set(faq.id, element);
                    } else {
                      triggerRefs.current.delete(faq.id);
                    }
                  }}
                  aria-expanded={openId === faq.id}
                  aria-controls={`faq-panel-${faq.id}`}
                  id={`faq-trigger-${faq.id}`}
                  className="w-full px-6 md:px-8 py-6 md:py-7 flex items-center justify-between gap-5 text-left relative z-10 transition-all duration-300"
                >
                  <h3 className={`text-lg md:text-xl font-bold tracking-[-0.01em] leading-tight transition-colors duration-300 ${openId === faq.id ? 'text-secondary-blue' : 'text-primary-black group-hover:text-accent-blue'}`}>
                    {faq.question}
                  </h3>
                  <span
                    className={`${openId === faq.id ? 'text-secondary-blue bg-secondary-blue/10 rotate-45 shadow-md shadow-secondary-blue/20' : 'text-slate-500 bg-slate-100 group-hover:bg-accent-blue/10 group-hover:text-accent-blue'} flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300`}
                  >
                    <IconPlus size={24} />
                  </span>
                </button>

                <section
                  id={`faq-panel-${faq.id}`}
                  ref={(element) => {
                    if (element) {
                      panelRefs.current.set(faq.id, element);
                    } else {
                      panelRefs.current.delete(faq.id);
                    }
                  }}
                  aria-labelledby={`faq-trigger-${faq.id}`}
                  className={`grid overflow-hidden relative z-10 transition-all duration-500 ease-out ${openId === faq.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className={`px-6 md:px-8 pr-16 text-gray-text leading-relaxed text-sm md:text-base transition-all duration-500 ${openId === faq.id ? 'pb-6 md:pb-7 translate-y-0' : 'pb-0 -translate-y-2'}`}>
                      {faq.answer}
                    </p>
                  </div>
                </section>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FaqAccordion;
