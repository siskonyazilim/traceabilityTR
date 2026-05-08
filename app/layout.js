import './globals.css'
import { Layout } from '../components/layout/Layout'
import { Inter, Nunito } from 'next/font/google'

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

export const metadata = {
  title: 'Traceability - Soluții de Trasabilitate End-to-End',
  description: 'Soluții innovative de trasabilitate și automatizare pentru fabrici inteligente. Controlul complet al producției cu tehnologie avansată.',
  keywords: 'trasabilitate, automatizare, industrie 4.0, RFID, izlenebilirlik',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Traceability - Soluții de Trasabilitate End-to-End',
    description: 'Soluții innovative de trasabilitate și automatizare pentru fabrici inteligente.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.variable} ${nunito.variable}`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
