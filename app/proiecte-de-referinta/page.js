import { cookies } from 'next/headers';
import ProjectsPageClient from './ProjectsPageClient';
import { DEFAULT_LOCALE, isSupportedLocale } from '../../lib/i18n/dictionaries';

export async function generateMetadata() {
  const cookieStore = await cookies();
  const localeRaw = cookieStore.get('locale')?.value;
  const locale = isSupportedLocale(localeRaw) ? localeRaw : DEFAULT_LOCALE;
  const isTr = locale === 'tr';
  const isEn = locale === 'en';

  const title = isTr
    ? 'Referans Projeler | Endüstriyel İzlenebilirlik Başarı Hikayeleri | Traceability'
    : isEn
    ? 'Reference Projects | Industrial Traceability Success Stories'
    : 'Proiecte de Referință | Implementări de Trasabilitate cu Impact';
  const description = isTr
    ? 'Traceability tarafından otomotiv, gıda ve endüstriyel üretim sektörlerinde ölçülebilir ROI ve kalite kazanımlarıyla gerçekleştirilen izlenebilirlik projelerini inceleyin.'
    : isEn
    ? 'Explore real-world traceability projects delivered by Traceability across automotive, food and industrial manufacturing with measurable ROI and quality gains.'
    : 'Explorează proiecte reale de trasabilitate livrate de Traceability în automotive, alimentar și producție industrială, cu ROI măsurabil și îmbunătățiri de calitate.';
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
      locale: isTr ? 'tr_TR' : isEn ? 'en_US' : 'ro_RO',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
