import { cookies } from 'next/headers';
import ProjectsPageClient from './ProjectsPageClient';
import { DEFAULT_LOCALE, isSupportedLocale } from '../../lib/i18n/dictionaries';

export async function generateMetadata() {
  const cookieStore = await cookies();
  const localeRaw = cookieStore.get('locale')?.value;
  const locale = isSupportedLocale(localeRaw) ? localeRaw : DEFAULT_LOCALE;
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

  const listUrl = isEn
    ? 'https://traceability.ro/reference-projects'
    : 'https://traceability.ro/proiecte-de-referinta';

  return {
    title,
    description,
    alternates: {
      canonical: listUrl,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: listUrl,
      locale: ogLocale,
      images: [
        {
          url: 'https://traceability.ro/siskon-logo-header.svg',
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
      images: ['https://traceability.ro/siskon-logo-header.svg'],
    },
  };
}

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
