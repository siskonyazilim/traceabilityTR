import './globals.css'
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
})

export const metadata = {
  title: 'Soluții de Trasabilitate Industrială & MES pentru Fabrici Inteligente | Traceability',
  description: 'Sisteme complete de trasabilitate industrială, MES și Industrie 4.0 pentru automotive, alimentar, farmaceutic. RFID, RTLS, WMS, POKA YOKE - implementări cu ROI măsurabil.',
  keywords: 'trasabilitate industrială, MES, industrie 4.0, RFID, RTLS, WMS, POKA YOKE, fabrici inteligente, automotive, alimentar, farmaceutic, quality control, warehouse management',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Soluții de Trasabilitate Industrială & MES pentru Fabrici Inteligente | Traceability',
    description: 'Sisteme complete de trasabilitate industrială, MES și Industrie 4.0 pentru automotive, alimentar, farmaceutic.',
    type: 'website',
    locale: 'ro_RO',
  },
  alternates: {
    canonical: 'https://traceability.ro',
  },
}

// eslint-disable-next-line react/prop-types
export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('locale')?.value;
  const locale = isSupportedLocale(localeCookie) ? localeCookie : DEFAULT_LOCALE;

  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
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
