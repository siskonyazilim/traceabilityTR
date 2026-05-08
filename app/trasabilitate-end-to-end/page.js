'use client';

import { motion } from 'framer-motion';
import Container from '../../components/ui/Container';
import SectionHeader from '../../components/ui/SectionHeader';
import Button from '../../components/ui/Button';
import Link from 'next/link';

export default function EndToEndTracePage() {
  const sections = [
    {
      id: 'solutions-for-smart-factories',
      title: 'Soluții pentru Fabrici Inteligente',
      description:
        'Sistemele noastre de trasabilitate sunt proiectate pentru a integra seamless cu arhitectura Industrie 4.0. Suportăm IoT, cloud computing și analytics în timp real.',
      features: [
        'Integrare IoT complet',
        'Cloud-based infrastructure',
        'Real-time analytics',
        'Machine learning capabilities',
      ],
      image: '/resmi/Factory.jpg',
    },
    {
      id: 'zero-failure',
      title: 'Controlul Calității - Zero Defecțiuni',
      description:
        'Sistemul nostru POKA YOKE previne erorile înainte ca acestea să se întâmple. Monitorizăm fiecare etapă a procesului de producție pentru a asigura calitate maximă.',
      features: [
        'Prevenire erorilor in-line',
        'Monitorizare în timp real',
        'Detecție automată anomalii',
        'Alert și notificări',
      ],
      image: '/resmi/G2015-1134.jpg',
    },
    {
      id: 'poka-yoke',
      title: 'POKA YOKE - Prevenția Erorilor',
      description:
        'Poka-Yoke este o metodă japoneză care împiedică erorile prin design. Integram această metodologie în fiecare aspect al sistemului nostru.',
      features: [
        'Design fail-safe',
        'Prevenție preventivă',
        'Zero tolerance pentru erori',
        'Conformitate 100%',
      ],
      image: '/resmi/Pick_to_Light_P2L_Siskon.jpg',
    },
    {
      id: 'smart-tracking',
      title: 'Urmărire Inteligentă',
      description:
        'Urmărirea avansată cu AI și machine learning permite predicția problemelor înainte ca acestea să apară.',
      features: [
        'AI-powered predictions',
        'Behavioral analysis',
        'Anomaly detection',
        'Optimization suggestions',
      ],
      image: '/resmi/shutterstock_272671019.jpg',
    },
  ];

  const benefits = [
    {
      title: 'Vedere Completă',
      description: 'Vizibilitate totală asupra proceselor de producție în timp real.',
      image: '/resmi/what_is_traceability-1288x724-1.jpg',
    },
    {
      title: 'Eficiență Maximă',
      description: 'Optimizare automată a proceselor pentru productivitate ridicată.',
      image: '/resmi/shutterstock_459829051.jpg',
    },
    {
      title: 'Calitate Garantată',
      description: 'Sistem fail-safe care previne erorile și asigură zero defecțiuni.',
      image: '/resmi/PIC1970.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <Container>
        <SectionHeader
          title="Trasabilitate End-to-End"
          subtitle="Soluții complete și integrate pentru controlul total al producției"
        />

        <div className="flex flex-wrap gap-4 justify-center mb-14">
          <Link href="#architecture-flow">
            <Button variant="solid" size="lg">Vezi Fluxul Arhitectural</Button>
          </Link>
          <Link href="#benefits-section">
            <Button variant="outline" size="lg">Beneficii și Conținut Relevat</Button>
          </Link>
        </div>

        <motion.section
          id="architecture-flow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-10">
              <h2 className="text-3xl font-bold text-primary-black mb-4">Arhitectură End-to-End pentru Trasabilitate</h2>
              <p className="text-gray-text mb-6 leading-relaxed">
                Platforma conectează echipamentele de producție, punctele de control al calității și sistemele ERP/MES
                într-un flux unificat de date. Fiecare lot, componentă și operație este urmărită cap-coadă.
              </p>
              <div className="space-y-3 text-gray-text">
                <div className="flex items-start gap-3"><span className="text-accent-blue font-bold">01</span><span>Captură date din linie: senzori, scanere, terminale operator.</span></div>
                <div className="flex items-start gap-3"><span className="text-accent-blue font-bold">02</span><span>Validare și reguli Poka-Yoke la fiecare etapă critică.</span></div>
                <div className="flex items-start gap-3"><span className="text-accent-blue font-bold">03</span><span>Analiză în timp real pentru alerte, rapoarte și decizii rapide.</span></div>
              </div>
            </div>
            <div className="min-h-[300px] lg:min-h-full bg-slate-100">
              <img
                src="/resmi/shutterstock_98753879.jpg"
                alt="Arhitectură digitală pentru trasabilitate industrială"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Main Sections */}
        <div className="space-y-16">
          {sections.map((section, index) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:[&>*]:order-2' : ''
              }`}
            >
              {/* Content */}
              <div>
                <div className="mb-4">
                  <h2 className="text-3xl font-bold text-primary-black">{section.title}</h2>
                </div>

                <p className="text-gray-text text-lg mb-6 leading-relaxed">
                  {section.description}
                </p>

                <div className="space-y-3 mb-8">
                  {section.features.map((feature) => (
                    <div key={`${section.id}-${feature}`} className="flex items-center gap-3">
                      <span className="text-accent-blue font-bold">✓</span>
                      <span className="text-gray-text">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact">
                  <Button variant="solid" size="lg">
                    Afla mai multe detalii
                  </Button>
                </Link>
              </div>

              {/* Visual */}
              <motion.div
                className="h-96 bg-gradient-to-br from-accent-blue to-accent-green rounded-2xl flex items-center justify-center text-8xl overflow-hidden relative"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.querySelector('.fallback-service-image')?.classList.remove('hidden');
                  }}
                />
                <div className="fallback-service-image hidden absolute inset-0 bg-slate-100 text-slate-600 flex items-center justify-center text-base font-medium px-4 text-center">
                  Imagine relevantă indisponibilă
                </div>
              </motion.div>
            </motion.section>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.section
          id="benefits-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-primary-black">Conținut Relevat pentru Implementare</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-44 bg-slate-100">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-primary-black">{item.title}</h3>
                  <p className="text-gray-text">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h2 className="text-4xl font-bold text-primary-black mb-6">
            Gata să transformi producția ta?
          </h2>
          <p className="text-gray-text text-lg mb-8 max-w-2xl mx-auto">
            Contactează-ne astazi și descoperă cum sistemele noastre de trasabilitate
            pot aduce eficiență și calitate la fabrica ta.
          </p>

          <div className="flex gap-6 justify-center flex-wrap">
            <Link href="/contact">
              <Button variant="solid" size="lg">
                Cere Ofertă
              </Button>
            </Link>
            <Link href="/proiecte-de-referinta">
              <Button variant="outline" size="lg">
                Vezi Cazuri de Succes
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
