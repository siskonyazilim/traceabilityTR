import HomePageClient from './HomePageClient';
import { getRequestLocale, getRequestPathname, getLanguageAlternates } from '../lib/i18n/requestLocale';
import { getOrganizationSchema, getFaqPageSchema, SITE_URL, LOGO_URL } from '../components/seo/OrganizationSchema';
import { getHeroVideoAssets } from '../lib/seo/videoCatalog';
import { toAbsoluteSiteUrl } from '../lib/seo/videoUrl';
import { getHomePageFromCMS } from '../lib/cms/homeService';
import { getSolutionsFromCMS } from '../lib/cms/solutionsService';
import { getSectorsFromCMS } from '../lib/cms/sectorsService';
import { getTechnologyCapabilitiesFromCMS } from '../lib/cms/technologiesService';
import { getReferenceProjectsFromCMS } from '../lib/cms/referenceService';

const heroVideoAssets = getHeroVideoAssets();
const heroVideoAbsoluteUrls = heroVideoAssets
  .map((asset) => toAbsoluteSiteUrl(asset.video, SITE_URL))
  .filter(Boolean);

// Anlık CMS verisi için dinamik route
export const dynamic = 'force-dynamic';


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

  const alternates = getLanguageAlternates(pathname, locale);

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
      videos: heroVideoAbsoluteUrls,
      images: [
        {
          url: 'https://izlenebilirlik.com.tr/og-image.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://izlenebilirlik.com.tr/og-image.png'],
    },
  };
}

export default async function HomePage() {
  const locale = await getRequestLocale();

  // CMS'den tüm verileri paralel çek; hata durumunda null → statik fallback
  const [cmsData, cmsSolutions, cmsSectors, cmsCapabilities, cmsReferenceProjects] = await Promise.all([
    getHomePageFromCMS(locale),
    getSolutionsFromCMS(locale),
    getSectorsFromCMS(locale),
    getTechnologyCapabilitiesFromCMS(locale),
    getReferenceProjectsFromCMS(locale),
  ]);

  const org = getOrganizationSchema();
  const faqPage = getFaqPageSchema(locale, `${SITE_URL}/`);
  const homepageVideoObjects = heroVideoAssets.map((asset) => ({
    '@type': 'VideoObject',
    '@id': `${toAbsoluteSiteUrl(asset.video, SITE_URL)}#video`,
    'name': `Traceability Homepage Hero Video ${asset.id}`,
    'description': 'Traceability homepage hero section background video.',
    'contentUrl': toAbsoluteSiteUrl(asset.video, SITE_URL),
    'thumbnailUrl': toAbsoluteSiteUrl(asset.thumbnailPath, SITE_URL),
    'uploadDate': asset.uploadDate,
    'inLanguage': ['tr', 'en', 'ro'],
    'publisher': { '@id': org['@id'] },
  }));

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
        'hasPart': homepageVideoObjects.map((videoObject) => ({ '@id': videoObject['@id'] })),
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
      ...homepageVideoObjects,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePageClient
        cmsData={cmsData}
        cmsSolutions={cmsSolutions}
        cmsSectors={cmsSectors}
        cmsCapabilities={cmsCapabilities}
        cmsReferenceProjects={cmsReferenceProjects}
      />
    </>
  );
}

