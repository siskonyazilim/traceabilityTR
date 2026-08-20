import { Suspense } from 'react';
import ProjectsPageClient from './ProjectsPageClient';
import { getRequestLocale } from '../../lib/i18n/requestLocale';
import { toLocalePath } from '../../lib/i18n/dictionaries';
import JsonLd from '../../components/seo/JsonLd';
import { getOrganizationSchema, SITE_URL } from '../../components/seo/OrganizationSchema';
import AeoFaqSection from '../../components/seo/AeoFaqSection';
import { getAeoFaqBundle, getAeoFaqSchema } from '../../lib/seo/aeoFaqs';
import { getReferenceProjects } from '../../lib/cms/referenceService';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const isTr = locale === 'tr';
  const isEn = locale === 'en';

  let title = 'Proiecte de Referință | Implementări de Trasabilitate cu Impact';
  if (isTr) {
    title = 'Referans Projeler | Endüstriyel İzlenebilirlik Başarı Hikayeleri | Traceability';
  } else if (isEn) {
    title = 'Reference Projects | Industrial Traceability Success Stories';
  }

  let description = 'Explorează proiecte reale de trasabilitate livrate de Traceability în automotive, alimentar și producție industrială, cu ROI măsurabil și îmbunătățiri de calitate.';
  if (isTr) {
    description = 'Traceability tarafından otomotiv, gıda ve endüstriyel üretim sektörlerinde ölçülebilir ROI ve kalite kazanımlarıyla gerçekleştirilen izlenebilirlik projelerini inceleyin.';
  } else if (isEn) {
    description = 'Explore real-world traceability projects delivered by Traceability across automotive, food and industrial manufacturing with measurable ROI and quality gains.';
  }

  let ogLocale = 'ro_RO';
  if (isTr) {
    ogLocale = 'tr_TR';
  } else if (isEn) {
    ogLocale = 'en_US';
  }

  let canonicalLocalePath = '/portfolio';
  if (locale === 'en') {
    canonicalLocalePath = '/en/reference-projects';
  } else if (locale === 'ro') {
    canonicalLocalePath = '/ro/proiecte-de-referinta';
  }

  const alternates = {
    canonical: `https://izlenebilirlik.com.tr${canonicalLocalePath}`,
    languages: {
      'tr': 'https://izlenebilirlik.com.tr/portfolio',
      'en': 'https://izlenebilirlik.com.tr/en/reference-projects',
      'ro': 'https://izlenebilirlik.com.tr/ro/proiecte-de-referinta',
      'x-default': 'https://izlenebilirlik.com.tr/portfolio',
    }
  };

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

export default function ProjectsPage() {
  return <ProjectsPageWithSchema />;
}

async function ProjectsPageWithSchema() {
  const locale = await getRequestLocale();
  const initialProjects = await getReferenceProjects(locale);
  let pagePath = '/portfolio';
  if (locale === 'en') {
    pagePath = '/reference-projects';
  } else if (locale === 'ro') {
    pagePath = '/proiecte-de-referinta';
  }
  const pageUrl = `${SITE_URL}${toLocalePath(pagePath, locale)}`;
  const homeUrl = `${SITE_URL}${toLocalePath('/', locale)}`;
  const org = getOrganizationSchema();
  const faqBundle = getAeoFaqBundle('referenceProjects', locale);
  const faqSchema = getAeoFaqSchema('referenceProjects', locale, pageUrl);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#webpage`,
        'url': pageUrl,
        'name': { tr: 'Referans Projeler', en: 'Reference Projects', ro: 'Proiecte de Referinta' }[locale] || 'Reference Projects',
        'description': {
          tr: 'Farklı sektörlerde uygulanmış gerçek izlenebilirlik projeleri ve ölçülebilir çıktıları.',
          en: 'Real-world traceability projects across industries with measurable implementation outcomes.',
          ro: 'Proiecte reale de trasabilitate implementate in industrii diferite, cu rezultate masurabile.',
        }[locale],
        'inLanguage': locale,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': { tr: 'Anasayfa', en: 'Home', ro: 'Acasă' }[locale] || 'Home',
            'item': homeUrl,
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': { tr: 'Referans Projeler', en: 'Reference Projects', ro: 'Proiecte de Referinta' }[locale] || 'Reference Projects',
            'item': pageUrl,
          },
        ],
      },
      faqSchema,
      org,
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsPageClient initialProjects={initialProjects} />
      </Suspense>
      <AeoFaqSection bundle={faqBundle} />
    </>
  );
}
