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
      icon: '🏭',
      image: '/images/services/smart-factories.png',
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
      icon: '✓',
      image: '/images/services/zero-failure.png',
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
      icon: '🎯',
      image: '/images/services/poka-yoke.png',
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
      icon: '🔍',
      image: '/images/services/smart-tracking.png',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <Container>
        <SectionHeader
          title="Trasabilitate End-to-End"
          subtitle="Soluții complete și integrate pentru controlul total al producției"
        />

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
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">{section.icon}</div>
                  <h2 className="text-3xl font-bold text-primary-black">
                    {section.title}
                  </h2>
                </div>

                <p className="text-gray-text text-lg mb-6 leading-relaxed">
                  {section.description}
                </p>

                <div className="space-y-3 mb-8">
                  {section.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
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
                    e.target.parentElement.querySelector('.fallback-service-icon')?.classList.remove('hidden');
                  }}
                />
                <div className="fallback-service-icon hidden absolute inset-0 bg-gradient-to-br from-accent-blue to-accent-green flex items-center justify-center text-8xl">
                  {section.icon}
                </div>
              </motion.div>
            </motion.section>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-r from-accent-blue to-accent-green rounded-2xl p-12 text-white"
        >
          <h2 className="text-4xl font-bold mb-8 text-center">
            De ce alegi Traceability?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-2">Vedere Completă</h3>
              <p className="text-white text-opacity-90">
                Vizibilitate totală asupra proceselor de producție în timp real
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-2">Eficiență Maximă</h3>
              <p className="text-white text-opacity-90">
                Optimizare automată a proceselor pentru productivitate ridicată
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold mb-2">Calitate Garantată</h3>
              <p className="text-white text-opacity-90">
                Sistem fail-safe care previne erorile și asigură zero defecțiuni
              </p>
            </div>
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
