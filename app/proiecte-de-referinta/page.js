import { cookies } from 'next/headers';
import ProjectsPageClient from './ProjectsPageClient';

export async function generateMetadata() {
  const cookieStore = await cookies();
  const locale = cookieStore.get('locale')?.value === 'en' ? 'en' : 'ro';
  const isEn = locale === 'en';

  const title = isEn
    ? 'Reference Projects | Industrial Traceability Success Stories'
    : 'Proiecte de Referință | Implementări de Trasabilitate cu Impact';
  const description = isEn
    ? 'Explore real-world traceability projects delivered by Traceability across automotive, food and industrial manufacturing with measurable ROI and quality gains.'
    : 'Explorează proiecte reale de trasabilitate livrate de Traceability în automotive, alimentar și producție industrială, cu ROI măsurabil și îmbunătățiri de calitate.';

  return {
    title,
    description,
    alternates: {
      canonical: 'https://traceability.ro/proiecte-de-referinta',
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: 'https://traceability.ro/proiecte-de-referinta',
      locale: isEn ? 'en_US' : 'ro_RO',
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
