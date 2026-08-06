import HomePageClient from './HomePageClient';
import { getRequestLocale, getRequestPathname, getLanguageAlternates } from '../lib/i18n/requestLocale';
import { getOrganizationSchema, getFaqPageSchema, SITE_URL, LOGO_URL } from '../components/seo/OrganizationSchema';
import { getPartnersByLocale } from '../lib/strapi/partners';
import { getArticlesByLocale } from '../lib/strapi/articles';

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const pathname = await getRequestPathname();
  const isTr = locale === 'tr';
  const isEn = locale === 'en';

  let title = 'Soluții de Trasabilitate Industrială & MES | Traceability';
  if (isTr) {
    title = 'Endüstriyel İzlenebilirlik & MES Çözümleri | Traceability';
  } else if (isEn) {
    title = 'Industrial Traceability & MES Solutions | Traceability';
  }

  let description = 'Traceability livrează soluții de trasabilitate, MES și automatizare: RFID, RTLS, WMS, Poka Yoke și integrare ERP/MES end-to-end.';
  if (isTr) {
    description = 'Traceability; akıllı fabrikalar için izlenebilirlik, MES ve otomasyon çözümleri sunar: RFID, RTLS, WMS, Poka Yoke ve uçtan uca entegrasyon.';
  } else if (isEn) {
    description = 'Traceability delivers industrial traceability, MES and smart manufacturing solutions: RFID, RTLS, WMS, Poka Yoke and end-to-end MES/ERP integration.';
  }

  let ogLocale = 'ro_RO';
  if (isTr) {
    ogLocale = 'tr_TR';
  } else if (isEn) {
    ogLocale = 'en_US';
  }

  const alternates = getLanguageAlternates(pathname);

  return {
    title,
    description,
    alternates,
    openGraph: {
      title,
      description,
      type: 'website',
      url: alternates.canonical,
      locale: ogLocale,
      images: [
        {
          url: 'https://izlenebilirlik.com.tr/siskon-logo-header.svg',
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
      images: ['https://izlenebilirlik.com.tr/siskon-logo-header.svg'],
    },
  };
}

export default async function HomePage() {
  const locale = await getRequestLocale();
  let strategicPartners = [];
  let homepageBlogPosts = [];

  try {
    strategicPartners = await getPartnersByLocale(locale);
  } catch (error) {
    console.warn('Homepage partners could not be loaded during render. Falling back to empty list.', error);
  }

  try {
    homepageBlogPosts = await getArticlesByLocale(locale, { limit: 9 });
  } catch (error) {
    console.warn('Homepage blog posts could not be loaded during render. Falling back to empty list.', error);
  }

  const org = getOrganizationSchema();
  const faqPage = getFaqPageSchema(locale, `${SITE_URL}/`);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        'url': `${SITE_URL}/`,
        'name': 'Traceability',
        'description': 'Industrial Traceability & MES Solutions',
        'publisher': { '@id': org['@id'] },
        'inLanguage': ['tr', 'en', 'ro'],
        'potentialAction': {
          '@type': 'SearchAction',
          'target': {
            '@type': 'EntryPoint',
            'urlTemplate': `${SITE_URL}/blog?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/#webpage`,
        'url': `${SITE_URL}/`,
        'name': 'Traceability | End-to-End Industrial Traceability and MES',
        'isPartOf': { '@id': `${SITE_URL}/#website` },
        'about': { '@id': `${SITE_URL}/#softwareapplication` },
        'breadcrumb': { '@id': `${SITE_URL}/#breadcrumb` },
        'inLanguage': ['tr', 'en', 'ro'],
        'datePublished': '2024-01-01T00:00:00+03:00',
        'dateModified': new Date().toISOString(),
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${SITE_URL}/#softwareapplication`,
        'name': 'Traceability Industrial Traceability Platform',
        'applicationCategory': 'BusinessApplication',
        'applicationSubCategory': 'Manufacturing Execution System',
        'operatingSystem': 'Web, Windows Server, Linux',
        'url': `${SITE_URL}/`,
        'description':
          'End-to-end industrial traceability and MES software platform for smart factories — RFID, RTLS, WMS, Poka Yoke, ERP/MES integration.',
        'creator': { '@id': org['@id'] },
        'publisher': { '@id': org['@id'] },
        'featureList': [
          'End-to-end production traceability',
          'MES integration',
          'ERP integration',
          'RFID-based tracking',
          'RTLS real-time location tracking',
          'WMS warehouse management',
          'Poka Yoke quality control',
          'Industry 4.0 dashboards',
        ],
        'availableLanguage': ['tr', 'en', 'ro'],
        'image': LOGO_URL,
        'offers': {
          '@type': 'Offer',
          'priceCurrency': 'EUR',
          'price': '0',
          'availability': 'https://schema.org/InStock',
          'description': 'Contact us for project-based enterprise pricing.',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${SITE_URL}/#breadcrumb`,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Traceability',
            'item': `${SITE_URL}/`,
          },
        ],
      },
      // ── Organization (tam profil, merkezi kaynaktan) ──────────────────────
      org,
      // ── FAQPage (lokale göre dinamik) ─────────────────────────────────────
      faqPage,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePageClient
        initialPartners={strategicPartners}
        initialPartnersLocale={locale}
        initialBlogPosts={homepageBlogPosts}
        initialBlogPostsLocale={locale}
      />
    </>
  );
}

