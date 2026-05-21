import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '../../../components/ui/Container';
import Button from '../../../components/ui/Button';
import { FiArrowLeft, FiCheck } from 'react-icons/fi';

const solutions = {
  'rfid-trasabilitate': {
    title: 'RFID pentru Trasabilitate Industrială',
    h1: 'Soluții RFID pentru Trasabilitate și Control în Timp Real',
    description: 'Sistem complet RFID pentru trasabilitatea produselor, gestionarea stocurilor și automatizarea proceselor de producție.',
    metaDescription: 'Implementare RFID pentru trasabilitate industrială - identificare automată, urmărire în timp real, reducere erori cu 95%. Soluții pentru automotive, depozit, producție.',
    keywords: 'RFID trasabilitate, RFID industrial, RFID depozit, RFID automotive, identificare automată, tracking RFID',
    icon: '📡',
    benefits: [
      'Identificare automată fără contact',
      'Urmărire în timp real a produselor și componentelor',
      'Reducerea erorilor de identificare cu 95%',
      'Integrare cu sisteme MES și ERP',
      'Citire multiplă simultană (până la 200+ taguri/secundă)',
      'Rezistență la condiții industriale dure',
    ],
    useCases: [
      {
        title: 'Automotive - Trasabilitate Componente',
        description: 'Urmărirea componentelor din momentul recepției până la asamblarea finală, cu validare automată a secvenței de montaj.',
      },
      {
        title: 'Depozit - Gestionare Stocuri',
        description: 'Inventariere automată, urmărire palet, optimizare flux de materiale cu reducere 80% timp inventariere.',
      },
      {
        title: 'Producție - Control Calitate',
        description: 'Validare automată proces, prevenire erori montaj, istoricul complet al fiecărui produs.',
      },
    ],
    technologies: ['UHF RFID', 'NFC', 'Cititori fixe și mobile', 'Antene industriale', 'Tag-uri speciale'],
    roi: {
      efficiency: '+85%',
      errors: '-95%',
      time: '-70%',
    },
  },
  'rtls-localizare': {
    title: 'RTLS - Localizare în Timp Real',
    h1: 'Sistem RTLS pentru Localizare Precisă în Fabrică',
    description: 'Tehnologie RTLS (Real-Time Location System) pentru urmărirea activelor, persoanelor și materialelor în timp real.',
    metaDescription: 'Sistem RTLS pentru localizare în timp real - tracking active, optimizare flux producție, reducere timp căutare. Precizie până la 30cm.',
    keywords: 'RTLS, localizare timp real, tracking active, UWB, indoor positioning, warehouse tracking',
    icon: '📍',
    benefits: [
      'Localizare precisă (precizie până la 30cm)',
      'Vizualizare live pe hartă digitală',
      'Optimizare flux de materiale',
      'Reducere timp căutare active cu 90%',
      'Alerte automate zone restricționate',
      'Analiză istorică mișcări',
    ],
    useCases: [
      {
        title: 'Producție - Tracking Active Mobile',
        description: 'Localizare scule, echipamente, cărucioare transport - eliminare timp pierdut în căutare.',
      },
      {
        title: 'Depozit - Optimizare Flux',
        description: 'Urmărire paleți, containere, analiza rutelor optime, reducere congestie.',
      },
      {
        title: 'Logistică - Tracking Containere',
        description: 'Monitorizare intrări/ieșiri, timp stationare, alerting întârzieri.',
      },
    ],
    technologies: ['UWB', 'BLE', 'WiFi RTT', 'Anchors și tags', 'Software RTLS'],
    roi: {
      efficiency: '+70%',
      time: '-90%',
      utilization: '+45%',
    },
  },
  'wms-depozit': {
    title: 'WMS - Warehouse Management System',
    h1: 'Sistem WMS pentru Gestionare Inteligentă a Depozitului',
    description: 'Software WMS complet pentru optimizarea operațiunilor de depozit, gestionare stocuri și trasabilitate completă.',
    metaDescription: 'WMS pentru depozit - management stocuri, optimizare picking, trasabilitate lot, integrare ERP. Creștere eficiență 60%, reducere erori 85%.',
    keywords: 'WMS, warehouse management, gestionare depozit, management stocuri, picking optimization, inventory management',
    icon: '🏢',
    benefits: [
      'Gestionare completă intrări/ieșiri',
      'Optimizare alocare spațiu depozit',
      'Picking inteligent cu rutare optimă',
      'Trasabilitate completă lot/serial',
      'Integrare RFID/barcode scanners',
      'Raportare în timp real',
    ],
    useCases: [
      {
        title: 'Depozit Central - Management Stocuri',
        description: 'Control complet stocuri, FIFO/FEFO automat, alerting nivel minim, predicție necesități.',
      },
      {
        title: 'Cross-Docking - Optimizare Flux',
        description: 'Minimizare stocare, transfer direct furnizor-client, reducere handling.',
      },
      {
        title: 'E-commerce - Picking Rapid',
        description: 'Order batching, wave picking, integrare marketplace, shipping automation.',
      },
    ],
    technologies: ['Cloud/On-premise', 'Mobile WMS', 'Voice picking', 'Integration APIs', 'BI Dashboard'],
    roi: {
      efficiency: '+60%',
      errors: '-85%',
      space: '+40%',
    },
  },
  'poka-yoke': {
    title: 'POKA YOKE - Sistem Prevenire Erori',
    h1: 'POKA YOKE - Prevenirea Erorilor în Producție',
    description: 'Sistem automatizat de prevenire a erorilor umane și de proces în producție, bazat pe senzori și validare automată.',
    metaDescription: 'Sistem POKA YOKE pentru prevenire erori producție - validare automată, zero defecte, reducere remaniere 80%. Soluții pentru asamblare, control calitate.',
    keywords: 'poka yoke, prevenire erori, zero defecte, quality control, error proofing, manufacturing quality',
    icon: '🛡️',
    benefits: [
      'Eliminare erori înainte de producere',
      'Validare automată secvență operații',
      'Alerting instant la devieri',
      'Reducere remaniere cu 80%',
      'Documentare automată conformitate',
      'Training vizual operatori',
    ],
    useCases: [
      {
        title: 'Asamblare - Validare Componente',
        description: 'Verificare automată componente corecte, secvență montaj, couple șuruburi, nivel lubrifianți.',
      },
      {
        title: 'Control Calitate - Verificare 100%',
        description: 'Inspecție automată dimensiuni, culoare, defecte vizuale, conformitate cu specificații.',
      },
      {
        title: 'Ambalare - Prevenire Erori',
        description: 'Validare produs corect, cantitate, etichetare, documentație înainte de expediere.',
      },
    ],
    technologies: ['Senzori industriali', 'Vision systems', 'PLC integration', 'IoT devices', 'HMI displays'],
    roi: {
      defects: '-95%',
      rework: '-80%',
      claims: '-70%',
    },
  },
  'image-processing': {
    title: 'Procesare Imagini - Vision Quality Control',
    h1: 'Sisteme de Procesare Imagini pentru Control Calitate Automat',
    description: 'Tehnologie vision pentru detectarea automată a defectelor, măsurători precise și control 100% al calității produselor.',
    metaDescription: 'Procesare imagini industrială - detectare defecte, control calitate automat, măsurători precise. Viteză 1000+ produse/minut, acuratețe 99.9%.',
    keywords: 'procesare imagini, vision control, detectare defecte, control calitate automat, machine vision, optical inspection',
    icon: '📷',
    benefits: [
      'Control 100% al producției',
      'Detectare defecte invizibile ochiului uman',
      'Măsurători precise (±0.01mm)',
      'Viteză mare (1000+ inspecții/minut)',
      'Documentare foto fiecare produs',
      'Învățare automată (AI) pentru defecte noi',
    ],
    useCases: [
      {
        title: 'Automotive - Inspecție Sudură',
        description: 'Verificare automată calitate sudură, detectare pori, fisuri, dimensiuni cordoane.',
      },
      {
        title: 'Alimentar - Control Ambalare',
        description: 'Verificare integritate ambalaj, nivel umplere, prezență etichetă, cod de lot.',
      },
      {
        title: 'Electronice - Inspecție PCB',
        description: 'Verificare componente montate, polaritate, poziție, calitate lipire.',
      },
    ],
    technologies: ['Camere industriale', 'AI/Deep Learning', 'Iluminare specializată', 'Software vision', 'Edge computing'],
    roi: {
      quality: '+99.9%',
      speed: '+500%',
      labor: '-60%',
    },
  },
  'integrare-sisteme': {
    title: 'Integrare Sisteme MES & ERP',
    h1: 'Integrare Completă Sisteme de Trasabilitate cu MES și ERP',
    description: 'Servicii de integrare pentru conectarea sistemelor de trasabilitate cu MES, ERP, WMS și alte aplicații enterprise.',
    metaDescription: 'Integrare sisteme trasabilitate - conectare MES, ERP, WMS, SCADA. API modern, real-time data, sincronizare automată. Suport SAP, Oracle, Microsoft.',
    keywords: 'integrare MES, integrare ERP, API integration, SAP integration, sistem integration, middleware',
    icon: '🔗',
    benefits: [
      'Flux automat de date între sisteme',
      'Eliminare reintroducere manuală',
      'Sincronizare în timp real',
      'Traceability end-to-end',
      'Raportare consolidată',
      'Suport sisteme legacy',
    ],
    useCases: [
      {
        title: 'MES-ERP Integration',
        description: 'Sincronizare ordine producție, consumuri materiale, finalizări, quality data între shop floor și ERP.',
      },
      {
        title: 'Multi-System Dashboard',
        description: 'Dashboard unificat cu date din multiple surse - producție, calitate, mentenanță, logistică.',
      },
      {
        title: 'Supply Chain Visibility',
        description: 'Tracking complet de la furnizor la client final, integrare EDI, ASN, shipping confirmations.',
      },
    ],
    technologies: ['REST APIs', 'MQTT', 'OPC UA', 'SAP Connectors', 'Database sync', 'Message queues'],
    roi: {
      efficiency: '+55%',
      errors: '-90%',
      visibility: '+100%',
    },
  },
};

export async function generateStaticParams() {
  return Object.keys(solutions).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const solution = solutions[params.slug];

  if (!solution) {
    return {
      title: 'Soluție Negăsită',
    };
  }

  return {
    title: `${solution.title} | Traceability`,
    description: solution.metaDescription,
    keywords: solution.keywords,
    openGraph: {
      title: `${solution.title} | Traceability`,
      description: solution.metaDescription,
      type: 'website',
    },
  };
}

export default function SolutionDetailPage({ params }) {
  const solution = solutions[params.slug];

  if (!solution) {
    notFound();
  }

  // Schema.org markup
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: solution.title,
    description: solution.description,
    provider: {
      '@type': 'Organization',
      name: 'Traceability',
      url: 'https://traceability.ro',
    },
    areaServed: 'RO',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Soluții de Trasabilitate',
      itemListElement: solution.useCases.map((useCase, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: useCase.title,
          description: useCase.description,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-24 pb-16">
        <Container size="xl">
          <Link href="/#traceability-solutions" className="inline-flex items-center gap-2 text-secondary-blue hover:text-accent-blue transition-colors mb-8 font-semibold">
            <FiArrowLeft /> Înapoi la Soluții
          </Link>

          <article className="max-w-6xl mx-auto">
            {/* Hero */}
            <div className="mb-12 text-center">
              <div className="text-7xl mb-6">{solution.icon}</div>
              <h1 className="text-5xl md:text-6xl font-bold text-primary-black mb-6 leading-tight">
                {solution.h1}
              </h1>
              <p className="text-xl text-gray-text max-w-3xl mx-auto">
                {solution.description}
              </p>
            </div>

            {/* ROI Metrics */}
            <div className="grid grid-cols-3 gap-6 mb-16 bg-gradient-to-br from-primary-black to-secondary-blue rounded-3xl p-8 text-white">
              {Object.entries(solution.roi).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-4xl font-bold mb-2">{value}</div>
                  <div className="text-sm text-white/80 capitalize">{key}</div>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary-black mb-8">Beneficii Cheie</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {solution.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl border-2 border-gray-200">
                    <FiCheck className="text-accent-blue flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-text">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary-black mb-8">Cazuri de Utilizare</h2>
              <div className="space-y-6">
                {solution.useCases.map((useCase, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-accent-blue transition-colors">
                    <h3 className="text-xl font-bold text-primary-black mb-3">{useCase.title}</h3>
                    <p className="text-gray-text leading-relaxed">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary-black mb-8">Tehnologii Utilizate</h2>
              <div className="flex flex-wrap gap-3">
                {solution.technologies.map((tech, index) => (
                  <span key={index} className="px-6 py-3 bg-accent-blue/10 text-accent-blue rounded-full font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-br from-slate-50 to-white p-12 rounded-3xl border-2 border-gray-200">
              <h3 className="text-3xl font-bold text-primary-black mb-4">
                Implementăm soluția potrivită pentru afacerea ta
              </h3>
              <p className="text-gray-text text-lg mb-8 max-w-2xl mx-auto">
                Contactează-ne pentru o consultație gratuită și o ofertă personalizată.
              </p>
              <div className="flex gap-6 justify-center flex-wrap">
                <Button as={Link} href="/contact" variant="solid" size="lg" className="bg-secondary-blue hover:bg-accent-blue text-white">
                  Cere Ofertă
                </Button>
                <Button as={Link} href="/proiecte-de-referinta" variant="outline" size="lg" className="border-2 border-primary-black text-primary-black hover:bg-primary-black hover:text-white">
                  Vezi Proiecte Similare
                </Button>
              </div>
            </div>
          </article>
        </Container>
      </div>
    </>
  );
}
