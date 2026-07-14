import { cookies } from 'next/headers';
import BlogPageClient from './BlogPageClient';
import { DEFAULT_LOCALE, isSupportedLocale } from '../../lib/i18n/dictionaries';

export async function generateMetadata() {
  const cookieStore = await cookies();
  const localeRaw = cookieStore.get('locale')?.value;
  const locale = isSupportedLocale(localeRaw) ? localeRaw : DEFAULT_LOCALE;
  const isTr = locale === 'tr';
  const isEn = locale === 'en';

  let title = 'Blog: Noutăți, Ghiduri și Tendințe în Trasabilitate | Traceability';
  if (isTr) {
    title = 'Blog: Sektör Güncellemeleri, Rehberler ve İzlenebilirlik Trendleri | Traceability';
  } else if (isEn) {
    title = 'Blog: Industry Updates, Guides and Traceability Trends | Traceability';
  }

  let description = 'Descoperă articole Traceability despre trasabilitate industrială, MES, RFID, controlul calității și ghiduri practice pentru echipele de producție moderne.';
  if (isTr) {
    description = 'Endüstriyel izlenebilirlik, MES, RFID, kalite kontrolü ve modern üretim ekipleri için pratik rehberler hakkında Traceability blog yazılarını keşfedin.';
  } else if (isEn) {
    description = 'Explore Traceability blog articles about industrial traceability, MES, RFID, quality control and practical guides for modern manufacturing teams.';
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
      canonical: 'https://traceability.com.tr/blog',
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: 'https://traceability.com.tr/blog',
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

export default function BlogPage() {
  return <BlogPageClient />;
}
