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
  const isTr = locale === 'tr';
  const title = isEn
    ? 'Industrial Traceability & MES Solutions for Smart Factories | Traceability'
    : isTr
    ? 'Akıllı Fabrikalar için Endüstriyel İzlenebilirlik & MES Çözümleri | Traceability'
    : 'Soluții de Trasabilitate Industrială & MES pentru Fabrici Inteligente | Traceability';
  const description = isEn
    ? 'Traceability delivers industrial traceability, MES and smart manufacturing solutions: RFID, RTLS, WMS, Poka Yoke and end-to-end MES/ERP integration.'
    : isTr
    ? 'Traceability; RFID, RTLS, WMS, Poka Yoke ve uçtan uca MES/ERP entegrasyonu ile akıllı fabrikalar için endüstriyel izlenebilirlik, MES ve üretim otomasyon çözümleri sunar.'
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
      locale: isEn ? 'en_US' : isTr ? 'tr_TR' : 'ro_RO',
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
        <script
          id="cerezgo-script"
          src="https://cdn.cerezgo.com/file/cerezgo.min.js"
          data-key="tcb1SjODUgMGizndx+ZcTrEzjNZqRVI1gNt/hILmvU9ZRrCt2t5XqPh1PZTcqf+d"
          data-id="nt"
          async
          defer
        />
        <script
          id="gtm-deferred"
          dangerouslySetInnerHTML={{ __html: `(function(){
  var initialized = false;
  var idleTimer = null;

  function cleanup() {
    ['pointerdown','keydown','touchstart','scroll'].forEach(function(e){
      window.removeEventListener(e, init, true);
    });
    if (idleTimer) { clearTimeout(idleTimer); idleTimer = null; }
  }

  function loadGtm() {
    if (document.getElementById('gtm-script')) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
    var s = document.createElement('script');
    s.id = 'gtm-script';
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-KH28SB29';
    document.head.appendChild(s);
    cleanup();
  }

  function init() {
    if (initialized) return;
    initialized = true;
    var cerez = document.getElementById('cerezgo-script');
    if (cerez && cerez.getAttribute('data-ready') !== '1') {
      cerez.addEventListener('load', function(){ cerez.setAttribute('data-ready','1'); loadGtm(); }, {once:true});
      cerez.addEventListener('error', loadGtm, {once:true});
    } else {
      loadGtm();
    }
  }

  ['pointerdown','keydown','touchstart','scroll'].forEach(function(e){
    window.addEventListener(e, init, {once:true, passive:true, capture:true});
  });
  idleTimer = setTimeout(init, 3500);
})();` }}
        />
      </head>
      <body className={kanit.variable}>
        <noscript>
          <iframe
            title="gtm-noscript"
            src="https://www.googletagmanager.com/ns.html?id=GTM-KH28SB29"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <LanguageProvider initialLocale={locale}>
          <Layout>
            {children}
          </Layout>
        </LanguageProvider>
      </body>
    </html>
  )
}
