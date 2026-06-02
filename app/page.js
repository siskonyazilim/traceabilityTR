import { cookies } from 'next/headers';
import HomePageClient from './HomePageClient';

export async function generateMetadata() {
  const cookieStore = await cookies();
  const locale = cookieStore.get('locale')?.value === 'en' ? 'en' : 'ro';
  const isEn = locale === 'en';

  const title = isEn
    ? 'Industrial Traceability & MES Solutions for Smart Factories | Traceability'
    : 'Soluții de Trasabilitate Industrială & MES pentru Fabrici Inteligente | Traceability';
  const description = isEn
    ? 'Traceability delivers industrial traceability, MES and smart manufacturing solutions: RFID, RTLS, WMS, Poka Yoke and end-to-end MES/ERP integration.'
    : 'Traceability.ro livrează soluții de trasabilitate industrială, MES și automatizare pentru fabrici inteligente: RFID, RTLS, WMS, Poka Yoke și integrare end-to-end.';

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
      locale: isEn ? 'en_US' : 'ro_RO',
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
