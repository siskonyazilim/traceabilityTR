import './globals.css'
import 'font-awesome/css/font-awesome.min.css'
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
    title = 'Akıllı Fabrikalar için Endüstriyel İzlenebilirlik & MES Çözümleri | Traceability';
  }

  let description = 'Traceability.com.tr livrează soluții de trasabilitate industrială, MES și automatizare pentru fabrici inteligente: RFID, RTLS, WMS, Poka Yoke și integrare end-to-end.';
  if (isEn) {
    description = 'Traceability delivers industrial traceability, MES and smart manufacturing solutions: RFID, RTLS, WMS, Poka Yoke and end-to-end MES/ERP integration.';
  } else if (isTr) {
    description = 'Akıllı fabrikalar için uçtan uca izlenebilirlik çözümleri.';
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
    metadataBase: new URL('https://izlenebilirlik.com.tr'),
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
          url: 'https://izlenebilirlik.com.tr/og-image.png',
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
      images: ['https://izlenebilirlik.com.tr/og-image.png'],
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
        {/* ── Cerezgo + GTM — ertelenmiş yükleme ────────────────────────────────
            Cerezgo, kullanıcının ilk gerçek etkileşimine (scroll / tıklama /
            dokunma / tuş) veya en geç 3.5 saniyelik idle süresine kadar
            erteleniyor. Cerezgo yüklenip hazır olduktan SONRA GTM enjekte
            ediliyor — bu, "script GTM'den önce olmalı" hatasını organik
            biçimde çözüyor, ayrı bir sıralama hilesi gerekmiyor.

            NOT: Banner'ın sayfayı kilitleyip kilitlemediği (modal / non-modal
            görünüm) tamamen Cerezgo panelindeki site ayarına bağlı — kod
            tarafında bununla ilgili herhangi bir bypass/zorlama YOK.
            Panelde "Banner Tasarımı / Görünüm Tipi" non-modal seçiliyse
            (onsuite.com.tr'de olduğu gibi) sayfa banner açıkken de normal
            kullanılabilir kalır; modal seçiliyse tarayıcının native
            <dialog>.showModal() davranışı gereği sayfa banner kapanana kadar
            kilitli kalır. Bu davranış CSS/JS ile değiştirilemez, sadece
            Cerezgo panelinden ayarlanabilir. */}
        <script
          id="analytics-bootstrap"
          dangerouslySetInnerHTML={{
            __html: `(() => {
  const host = window.location?.hostname || '';
  const isLocalHost = host === 'localhost' || host === '127.0.0.1' || host.endsWith('.local');

  // Google Consent Mode v2: Varsayılan olarak tüm izleme istekleri reddedildi (denied)
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  window.gtag = gtag;

  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied',
    'functionality_storage': 'granted',
    'security_storage': 'granted'
  });

  if (isLocalHost) return;

  const hasConsent = () => {
    try {
      if (document.cookie.includes('cerezgo_consent=accepted') || document.cookie.includes('cerezgo_analytic=true') || document.cookie.includes('cookieConsent=accepted')) return true;
      const c = localStorage.getItem('cerezgo_consent') || localStorage.getItem('cookieConsent') || localStorage.getItem('onsuiteConsent');
      if (c === 'accepted' || c === 'true') return true;
    } catch (e) {}
    return false;
  };

  const loadGtm = () => {
    if (document.getElementById('gtm-script')) return;

    // Rıza verildi: Consent Mode granted yap
    gtag('consent', 'update', {
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted',
      'analytics_storage': 'granted'
    });

    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

    const firstScript = document.getElementsByTagName('script')[0];
    const gtmScript = document.createElement('script');
    gtmScript.id = 'gtm-script';
    gtmScript.async = true;
    gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-547XQ7CS';

    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(gtmScript, firstScript);
    } else {
      (document.head || document.documentElement).appendChild(gtmScript);
    }
  };

  // Kullanıcı daha önce onay verdiyse GTM'i yükle
  if (hasConsent()) {
    loadGtm();
  }

  // CerezGo rıza / onay olaylarını dinle
  window.addEventListener('cerezgo-consent-accepted', loadGtm);
  window.addEventListener('cerezgo:consent', loadGtm);
  window.addEventListener('cerezgo:accept', loadGtm);
  window.addEventListener('cerezgo_accepted', loadGtm);
  window.addEventListener('cerezgo_consent_change', loadGtm);
  window.addEventListener('cookie-consent-granted', loadGtm);
  window.addEventListener('message', (event) => {
    if (event?.data?.type === 'cerezgo_consent' && (event?.data?.action === 'accept' || event?.data?.action === 'save')) {
      loadGtm();
    }
  });

  // CerezGo CDN betiğini temiz oturumda gecikmesiz yükle
  const cerez = document.createElement('script');
  cerez.id = 'cerezgo-script';
  cerez.async = true;
  cerez.defer = true;
  cerez.src = 'https://cdn.cerezgo.com/file/cerezgo-v3.min.js';
  cerez.setAttribute('data-key', 'tcb1SjODUgMGizndx+ZcTrEzjNZqRVI1gNt/hILmvU/4wo7xt1aj0vED/oZUC1pSW3y6vNOMOcrRZW0pifWnwmCFjgwdyREdZUgJm1JLEsM=');
  cerez.setAttribute('data-id', 'nt');
  (document.head || document.documentElement).appendChild(cerez);
})();`,
          }}
        />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={kanit.variable} suppressHydrationWarning>
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