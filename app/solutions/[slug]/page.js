import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import Container from '../../../components/ui/Container';
import { IconArrowLeft, IconCheck } from '../../../components/ui/Icons';
import PagePrimaryCta from '../../../components/ui/PagePrimaryCta';
import { localizeSolutionDetail, getFaqBundle } from '../../../lib/i18n/contentLocalization';
import { f } from '../../../lib/i18n/sectionTranslations';
import { DEFAULT_LOCALE, isSupportedLocale, toLocalePath } from '../../../lib/i18n/dictionaries';
import JsonLd from '../../../components/seo/JsonLd';
/* eslint-disable react/prop-types, react/no-array-index-key */

const solutions = {
  'rfid-trasabilitate': {
    title: 'RFID pentru Trasabilitate Industrială',
    h1: 'Soluții RFID pentru Trasabilitate și Control în Timp Real',
    description: 'Sistem complet RFID pentru trasabilitatea produselor, gestionarea stocurilor și automatizarea proceselor de producție.',
    metaDescription: 'Implementare RFID pentru trasabilitate industrială - identificare automată, urmărire în timp real, reducere erori cu 95%. Soluții pentru automotive, depozit, producție.',
    keywords: 'RFID izlenebilirlik, endüstriyel RFID, depo RFID, otomotiv RFID, otomatik tanımlama, RFID ile takip',
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
    keywords: 'RTLS, gerçek zamanlı konumlandırma, varlık takibi, UWB, kapalı alan konumlandırma, depo takibi',
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
    keywords: 'WMS, depo yönetim sistemi, stok yönetimi, sipariş toplama optimizasyonu, envanter yönetimi',
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
    keywords: 'poka yoke, hata önleme, sıfır hata, kalite kontrol, error proofing, üretim kalitesi',
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
    keywords: 'görüntü işleme, vision control, hata tespiti, otomatik kalite kontrol, makine görmesi, optik denetim',
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
    keywords: 'MES entegrasyonu, ERP entegrasyonu, API entegrasyonu, SAP entegrasyonu, sistem entegrasyonu, ara katman yazılımı',
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
  const cookieStore = await cookies();
  const localeRaw = cookieStore.get('locale')?.value;
  const locale = isSupportedLocale(localeRaw) ? localeRaw : DEFAULT_LOCALE;
  const isEn = locale === 'en';
  const { slug } = await params;
  const baseSolution = solutions[slug];
  const solution = localizeSolutionDetail(slug, baseSolution, locale);

  if (!solution) {
    return {
      title: f(locale, 'solutionDetailPage', 'notFoundTitle'),
      description: f(locale, 'solutionDetailPage', 'notFoundDescription'),
    };
  }

  const metaDescription = solution.metaDescription || solution.description;
  const pageTitle = `${solution.title} | Traceability`;
  const pageUrl = `https://traceability.com.tr/solutions/${slug}`;

  let ogLocale = 'ro_RO';
  if (locale === 'tr') {
    ogLocale = 'tr_TR';
  } else if (isEn) {
    ogLocale = 'en_US';
  }

  return {
    title: pageTitle,
    description: metaDescription,
    keywords: solution.keywords,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: pageTitle,
      description: metaDescription,
      type: 'website',
      url: pageUrl,
      locale: ogLocale,
      images: [
        {
          url: 'https://traceability.com.tr/siskon-logo-header.svg',
          width: 800,
          height: 600,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: metaDescription,
      images: ['https://traceability.com.tr/siskon-logo-header.svg'],
    },
  };
}

export default async function SolutionDetailPage({ params }) {
  const cookieStore = await cookies();
  const localeRaw = cookieStore.get('locale')?.value;
  const locale = isSupportedLocale(localeRaw) ? localeRaw : DEFAULT_LOCALE;
  const { slug } = await params;
  const baseSolution = solutions[slug];
  const solution = localizeSolutionDetail(slug, baseSolution, locale);

  if (!solution) {
    notFound();
  }

  const labels = {
    back: f(locale, 'solutionDetailPage', 'back'),
    catalog: f(locale, 'solutionDetailPage', 'catalog'),
    benefits: f(locale, 'solutionDetailPage', 'benefits'),
    useCases: f(locale, 'solutionDetailPage', 'useCases'),
    technologies: f(locale, 'solutionDetailPage', 'technologies'),
    ctaTitle: f(locale, 'solutionDetailPage', 'ctaTitle'),
    ctaSubtitle: f(locale, 'solutionDetailPage', 'ctaSubtitle'),
    ctaPrimary: f(locale, 'solutionDetailPage', 'ctaPrimary'),
    ctaSecondary: f(locale, 'solutionDetailPage', 'ctaSecondary'),
    roi: f(locale, 'solutionDetailPage', 'roi', {}),
  };

  const relativePath = `/solutions/${slug}`;
  const relativeHomePath = '/';
  const pageUrl = `https://traceability.com.tr${toLocalePath(relativePath, locale)}`;
  const homeUrl = `https://traceability.com.tr${toLocalePath(relativeHomePath, locale)}`;

  const serviceTypeByLocale = {
    tr: "Endüstriyel İzlenebilirlik ve Otomasyon Sistemleri",
    en: "Industrial Traceability and Automation Systems",
    ro: "Sisteme de Trasabilitate și Automatizare Industrială",
  };
  const homeLabelByLocale = {
    tr: "Anasayfa",
    en: "Home",
    ro: "Acasă",
  };
  const areaServedByLocale = {
    tr: "Türkiye",
    en: "Global",
    ro: "România",
  };

  const faqBundle = getFaqBundle([], locale);
  // Get 3 relevant FAQs (using general translated FAQ questions and answers)
  const faqItems = (faqBundle?.items || []).slice(0, 3);

  const graphSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: solution.title,
        serviceType: serviceTypeByLocale[locale] || serviceTypeByLocale.ro,
        description: solution.description,
        provider: {
          '@type': 'Organization',
          name: 'Siskon Otomasyon ve Yazılım A.Ş.',
          url: 'https://siskon.com.tr',
        },
        areaServed: {
          '@type': 'Country',
          name: areaServedByLocale[locale] || areaServedByLocale.ro,
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: labels.catalog,
          itemListElement: solution.useCases.map((useCase) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: useCase.title,
              description: useCase.description,
            },
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': homeLabelByLocale[locale] || homeLabelByLocale.ro,
            'item': homeUrl,
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': solution.title,
            'item': pageUrl,
          },
        ],
      },
    ],
  };

  if (faqItems.length > 0) {
    graphSchema['@graph'].push({
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      mainEntity: faqItems.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  return (
    <>
      <JsonLd data={graphSchema} />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-24 pb-16">
        <Container size="xl">
          <Link href="/#traceability-solutions" className="inline-flex items-center gap-2 text-secondary-blue hover:text-accent-blue transition-colors mb-8 font-semibold">
            <IconArrowLeft /> {labels.back}
          </Link>

          <article className="max-w-6xl mx-auto">
            {/* Hero */}
            <div className="mb-12 text-center">
              <div className="text-5xl md:text-7xl mb-6">{solution.icon}</div>
              <h1 className="text-3xl md:text-4xl font-semibold text-primary-black mb-6 leading-tight">
                {solution.h1}
              </h1>
              <p className="text-xl text-gray-text max-w-3xl mx-auto">
                {solution.description}
              </p>
            </div>

            {/* ROI Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16 bg-gradient-to-br from-primary-black to-secondary-blue rounded-md p-5 md:p-8 text-white">
              {Object.entries(solution.roi).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-4xl font-bold mb-2">{value}</div>
                  <div className="text-sm text-white/80 capitalize">{labels.roi[key] || key}</div>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="mb-16">
              <h2 className="text-xl font-semibold text-primary-black mb-8">{labels.benefits}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {solution.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-md border-2 border-gray-200">
                    <IconCheck className="text-accent-blue flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-text">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-16">
              <h2 className="text-xl font-semibold text-primary-black mb-8">{labels.useCases}</h2>
              <div className="space-y-6">
                {solution.useCases.map((useCase, index) => (
                  <div key={index} className="bg-white p-6 rounded-md border-2 border-gray-200 hover:border-accent-blue transition-colors">
                    <h3 className="text-lg font-semibold text-primary-black mb-3">{useCase.title}</h3>
                    <p className="text-gray-text leading-relaxed">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-16">
              <h2 className="text-xl font-semibold text-primary-black mb-8">{labels.technologies}</h2>
              <div className="flex flex-wrap gap-3">
                {solution.technologies.map((tech, index) => (
                  <span key={index} className="px-6 py-3 bg-accent-blue/10 text-accent-blue rounded-md font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-slate-50 to-white p-12 rounded-md border-2 border-gray-200">
              <PagePrimaryCta
                className="text-center"
                title={labels.ctaTitle}
                subtitle={labels.ctaSubtitle}
                primaryHref="/contact"
                primaryLabel={labels.ctaPrimary}
              />
            </div>
          </article>
        </Container>
      </div>
    </>
  );
}
