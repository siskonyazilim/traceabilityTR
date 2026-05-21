import './globals.css'
import { Layout } from '../components/layout/Layout'
import { Inter, Nunito, Poppins } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-nunito',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
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

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.variable} ${nunito.variable} ${poppins.variable}`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
