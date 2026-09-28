import './globals.css'
import 'font-awesome/css/font-awesome.min.css'
import Script from 'next/script'
import { Layout } from '../components/layout/Layout'
import { LanguageProvider } from '../components/i18n/LanguageProvider'
import { Kanit } from 'next/font/google'
import { getRequestLocale, getRequestPathname, getLanguageAlternates } from '../lib/i18n/requestLocale'
import { getGlobalSettingsFromCMS } from '../lib/cms/globalService'
/* eslint-disable react/prop-types */

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-kanit',
  display: 'swap',
  preload: false,
})

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const pathname = await getRequestPathname();

  const isEn = locale === 'en';
  const isTr = locale === 'tr';

  let title = 'Soluții de Trasabilitate Industrială & MES pentru Fabrici Inteligente | Traceability';
  if (isEn) {
    title = 'Industrial Traceability & MES Solutions for Smart Factories | Traceability';
  } else if (isTr) {
    title = 'Endüstriyel İzlenebilirlik & MES Çözümleri | Akıllı Fabrikalar | Traceability';
  }

  let description = 'traceability.com.tr livrează soluții de trasabilitate industrială, MES și automatizare pentru fabrici inteligente: RFID, RTLS, WMS, Poka Yoke și integrare end-to-end.';
  if (isEn) {
    description = 'Traceability delivers industrial traceability, MES and smart manufacturing solutions: RFID, RTLS, WMS, Poka Yoke and end-to-end MES/ERP integration.';
  } else if (isTr) {
    description = 'Traceability; akıllı fabrikalar için uçtan uca endüstriyel izlenebilirlik, MES ve otomasyon çözümleri: RFID, RTLS, WMS, Poka Yoke ve sistem entegrasyonu.';
  }

  let ogLocale = 'ro_RO';
  if (isEn) {
    ogLocale = 'en_US';
  } else if (isTr) {
    ogLocale = 'tr_TR';
  }

  const alternates = getLanguageAlternates(pathname, locale);

  return {
    title,
    description,
    keywords: 'endüstriyel izlenebilirlik, MES, endüstri 4.0, RFID, RTLS, WMS, POKA YOKE, akıllı fabrikalar, otomotiv, gıda, ilaç, kalite kontrol, depo yönetimi',
    metadataBase: new URL('https://www.traceability.com.tr'),
    manifest: '/site.webmanifest',
    icons: {
      icon: [
        { url: '/favicon.ico', type: 'image/x-icon' },
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
        { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
      shortcut: '/favicon.ico',
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: alternates.canonical,
      locale: ogLocale,
      images: [
        {
          url: 'https://www.traceability.com.tr/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Traceability | Industrial Traceability & MES Solutions',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://www.traceability.com.tr/og-image.png'],
    },
    alternates,
  };
}

// eslint-disable-next-line react/prop-types
export default async function RootLayout({ children }) {
  const locale = await getRequestLocale();

  // CMS'den global ayarlar — Header menü ve Footer içeriği
  const cmsGlobal = await getGlobalSettingsFromCMS(locale);

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={kanit.variable} suppressHydrationWarning>
        {/* ── Google Consent Mode v2 (KVKK & GDPR Uyumluluğu) ── */}
        <Script
          id="google-consent-mode"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'denied',
            'functionality_storage': 'granted',
            'security_storage': 'granted',
            'wait_for_update': 500
          });`,
          }}
        />

        {/* ── ÇerezGo Script — lazyOnload ile ana thread bloklanmaz ── */}
        <Script
          id="cerezgo-script"
          strategy="lazyOnload"
          src="https://cdn.cerezgo.com/file/cerezgo-v3.min.js"
          data-key="tcb1SjODUgMGizndx+ZcTrEzjNZqRVI1gNt/hILmvU/4wo7xt1aj0vpKaPbTvt61DIB1C9ICfSdnEZ9wdEs7lN5IoDFNg6gdqhFdk9hLHp4="
          data-id="nt"
        />

        {/* ── Google Tag Manager — lazyOnload ile sayfa yüklendikten sonra başlar ── */}
        <Script
          id="google-tag-manager"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-547XQ7CS');`,
          }}
        />
        <noscript>
          <iframe
            title="gtm-noscript"
            src="https://www.googletagmanager.com/ns.html?id=GTM-547XQ7CS"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <LanguageProvider initialLocale={locale}>
          <Layout cmsGlobal={cmsGlobal}>
            {children}
          </Layout>
        </LanguageProvider>
      </body>
    </html>
  )
}