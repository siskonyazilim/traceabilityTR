import { cookies } from 'next/headers';
import BlogPageClient from './BlogPageClient';
import { DEFAULT_LOCALE, isSupportedLocale } from '../../lib/i18n/dictionaries';

export async function generateMetadata() {
  const cookieStore = await cookies();
  const localeRaw = cookieStore.get('locale')?.value;
  const locale = isSupportedLocale(localeRaw) ? localeRaw : DEFAULT_LOCALE;
  const isTr = locale === 'tr';
  const isEn = locale === 'en';

  const title = isTr
    ? 'Blog: Sektör Güncellemeleri, Rehberler ve İzlenebilirlik Trendleri | Traceability'
    : isEn
    ? 'Blog: Industry Updates, Guides and Traceability Trends | Traceability'
    : 'Blog: Noutăți, Ghiduri și Tendințe în Trasabilitate | Traceability';
  const description = isTr
    ? 'Endüstriyel izlenebilirlik, MES, RFID, kalite kontrolü ve modern üretim ekipleri için pratik rehberler hakkında Traceability blog yazılarını keşfedin.'
    : isEn
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
      locale: isTr ? 'tr_TR' : isEn ? 'en_US' : 'ro_RO',
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
