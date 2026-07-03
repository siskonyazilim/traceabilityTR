import { cookies } from 'next/headers';
import HomePageClient from './HomePageClient';
import { DEFAULT_LOCALE, isSupportedLocale } from '../lib/i18n/dictionaries';

export async function generateMetadata() {
  const cookieStore = await cookies();
  const localeRaw = cookieStore.get('locale')?.value;
  const locale = isSupportedLocale(localeRaw) ? localeRaw : DEFAULT_LOCALE;
  const isTr = locale === 'tr';
  const isEn = locale === 'en';

  let title = 'Soluții de Trasabilitate Industrială & MES pentru Fabrici Inteligente | Traceability';
  if (isTr) {
    title = 'Endüstriyel İzlenebilirlik & MES Çözümleri | Traceability';
  } else if (isEn) {
    title = 'Industrial Traceability & MES Solutions for Smart Factories | Traceability';
  }

  let description = 'Traceability.ro livrează soluții de trasabilitate industrială, MES și automatizare pentru fabrici inteligente: RFID, RTLS, WMS, Poka Yoke și integrare end-to-end.';
  if (isTr) {
    description = 'Traceability; akıllı fabrikalar için endüstriyel izlenebilirlik, MES ve üretim otomasyon çözümleri sunar: RFID, RTLS, WMS, Poka Yoke ve uçtan uca MES/ERP entegrasyonu.';
  } else if (isEn) {
    description = 'Traceability delivers industrial traceability, MES and smart manufacturing solutions: RFID, RTLS, WMS, Poka Yoke and end-to-end MES/ERP integration.';
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
      canonical: 'https://traceability.ro/',
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: 'https://traceability.ro/',
      locale: ogLocale,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default function HomePage() {
  return <HomePageClient />;
}
