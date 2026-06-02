import { cookies } from 'next/headers';
import BlogPageClient from './BlogPageClient';

export async function generateMetadata() {
  const cookieStore = await cookies();
  const locale = cookieStore.get('locale')?.value === 'en' ? 'en' : 'ro';
  const isEn = locale === 'en';

  const title = isEn
    ? 'Blog: Industry Updates, Guides and Traceability Trends | Traceability'
    : 'Blog: Noutăți, Ghiduri și Tendințe în Trasabilitate | Traceability';
  const description = isEn
    ? 'Explore Traceability blog articles about industrial traceability, MES, RFID, quality control and practical guides for modern manufacturing teams.'
    : 'Descoperă articole Traceability despre trasabilitate industrială, MES, RFID, controlul calității și ghiduri practice pentru echipele de producție moderne.';

  return {
    title,
    description,
    alternates: {
      canonical: 'https://traceability.ro/blog',
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: 'https://traceability.ro/blog',
      locale: isEn ? 'en_US' : 'ro_RO',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default function BlogPage() {
  return <BlogPageClient />;
}
