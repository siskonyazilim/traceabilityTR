import './globals.css'
import 'font-awesome/css/font-awesome.min.css'
import { Layout } from '../components/layout/Layout'
import { LanguageProvider } from '../components/i18n/LanguageProvider'
import { cookies } from 'next/headers'
import { Kanit } from 'next/font/google'
import { DEFAULT_LOCALE, isSupportedLocale } from '../lib/i18n/dictionaries'
/* eslint-disable react/prop-types */

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-kanit',
  display: 'swap',
  preload: false,
})

export async function generateMetadata() {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('locale')?.value;
  const locale = isSupportedLocale(localeCookie) ? localeCookie : DEFAULT_LOCALE;

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
    keywords: 'trasabilitate industrială, MES, industrie 4.0, RFID, RTLS, WMS, POKA YOKE, fabrici inteligente, automotive, alimentar, farmaceutic, quality control, warehouse management',
    metadataBase: new URL('https://traceability.ro'),
    icons: {
      icon: '/favicon.svg',
      shortcut: '/favicon.svg',
      apple: '/favicon.svg',
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: 'https://traceability.ro',
      locale: isEn ? 'en_US' : 'ro_RO',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: 'https://traceability.ro',
    },
  };
}

// eslint-disable-next-line react/prop-types
export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('locale')?.value;
  const locale = isSupportedLocale(localeCookie) ? localeCookie : DEFAULT_LOCALE;

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={kanit.variable}>
        <LanguageProvider initialLocale={locale}>
          <Layout>
            {children}
          </Layout>
        </LanguageProvider>
      </body>
    </html>
  )
}
