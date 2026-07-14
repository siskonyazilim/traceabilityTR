import { cookies } from 'next/headers';
import HomePageClient from './HomePageClient';
import { DEFAULT_LOCALE, isSupportedLocale } from '../lib/i18n/dictionaries';

export async function generateMetadata() {
  const cookieStore = await cookies();
  const localeRaw = cookieStore.get('locale')?.value;
  const locale = isSupportedLocale(localeRaw) ? localeRaw : DEFAULT_LOCALE;
  const isTr = locale === 'tr';
  const isEn = locale === 'en';

  let title = 'Soluții de Trasabilitate Industrială & MES pentru Fabrici Inteligente | Traceability';
  if (isTr) {
    title = 'Endüstriyel İzlenebilirlik & MES Çözümleri | Traceability';
  } else if (isEn) {
    title = 'Industrial Traceability & MES Solutions for Smart Factories | Traceability';
  }

  let description = 'Traceability.com.tr livrează soluții de trasabilitate industrială, MES și automatizare pentru fabrici inteligente: RFID, RTLS, WMS, Poka Yoke și integrare end-to-end.';
  if (isTr) {
    description = 'Traceability; akıllı fabrikalar için endüstriyel izlenebilirlik, MES ve üretim otomasyon çözümleri sunar: RFID, RTLS, WMS, Poka Yoke ve uçtan uca MES/ERP entegrasyonu.';
  } else if (isEn) {
    description = 'Traceability delivers industrial traceability, MES and smart manufacturing solutions: RFID, RTLS, WMS, Poka Yoke and end-to-end MES/ERP integration.';
  }

  let ogLocale = 'ro_RO';
  if (isTr) {
    ogLocale = 'tr_TR';
  } else if (isEn) {
    ogLocale = 'en_US';
  }

  return {
    title,
    description,
    alternates: {
      canonical: 'https://traceability.com.tr/',
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: 'https://traceability.com.tr/',
      locale: ogLocale,
      images: [
        {
          url: 'https://traceability.com.tr/siskon-logo-header.svg',
          width: 800,
          height: 600,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://traceability.com.tr/siskon-logo-header.svg'],
    },
  };
}

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://traceability.com.tr/#website",
        "url": "https://traceability.com.tr/",
        "name": "Traceability",
        "description": "Industrial Traceability & MES Solutions",
        "publisher": {
          "@id": "https://traceability.com.tr/#organization"
        },
        "inLanguage": ["tr", "en", "ro"]
      },
      {
        "@type": "WebPage",
        "@id": "https://traceability.com.tr/#webpage",
        "url": "https://traceability.com.tr/",
        "name": "Traceability | End-to-End Industrial Traceability and MES",
        "isPartOf": {
          "@id": "https://traceability.com.tr/#website"
        },
        "about": {
          "@id": "https://traceability.com.tr/#softwareapplication"
        },
        "breadcrumb": {
          "@id": "https://traceability.com.tr/#breadcrumb"
        },
        "inLanguage": ["tr", "en", "ro"]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://traceability.com.tr/#softwareapplication",
        "name": "Traceability Industrial Traceability Platform",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "url": "https://traceability.com.tr/",
        "description": "End-to-end industrial traceability and MES software applications for smart factories including RFID, RTLS, WMS, Poka Yoke and ERP/MES integrations.",
        "creator": {
          "@id": "https://traceability.com.tr/#organization"
        },
        "publisher": {
          "@id": "https://traceability.com.tr/#organization"
        },
        "featureList": [
          "End-to-end production traceability",
          "MES integration",
          "ERP integration",
          "RFID-based tracking",
          "RTLS location tracking",
          "WMS integration",
          "Poka Yoke quality control"
        ],
        "availableLanguage": ["tr", "en", "ro"]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://traceability.com.tr/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Traceability",
            "item": "https://traceability.com.tr/"
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://traceability.com.tr/#organization",
        "name": "Traceability",
        "url": "https://traceability.com.tr",
        "logo": {
          "@type": "ImageObject",
          "url": "https://traceability.com.tr/siskon-logo-header.svg"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+90 232 245 00 76",
            "contactType": "customer service",
            "areaServed": "TR",
            "availableLanguage": ["Turkish", "Romanian", "English"]
          },
          {
            "@type": "ContactPoint",
            "telephone": "+40 368 402 002",
            "contactType": "customer service",
            "areaServed": "RO",
            "availableLanguage": ["Romanian", "Turkish", "English"]
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/company/siskonyazilimveotomasyon/"
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePageClient />
    </>
  );
}
