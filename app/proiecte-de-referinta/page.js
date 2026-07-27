import { Suspense } from 'react';
import ProjectsPageClient from './ProjectsPageClient';
import { getRequestLocale, getRequestPathname } from '../../lib/i18n/requestLocale';
import { toLocalePath } from '../../lib/i18n/dictionaries';

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

  const alternates = {
    canonical: `https://izlenebilirlik.com.tr${
      locale === 'en'
        ? '/en/reference-projects'
        : (locale === 'ro' ? '/ro/proiecte-de-referinta' : '/portfolio')
    }`,
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

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectsPageClient />
    </Suspense>
  );
}
