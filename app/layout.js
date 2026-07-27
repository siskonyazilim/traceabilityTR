import './globals.css'
import 'font-awesome/css/font-awesome.min.css'
import { Layout } from '../components/layout/Layout'
import { LanguageProvider } from '../components/i18n/LanguageProvider'
import BreadcrumbSchema from '../components/seo/BreadcrumbSchema'
import { Kanit } from 'next/font/google'
import { getRequestLocale, getRequestPathname, getLanguageAlternates } from '../lib/i18n/requestLocale'
import Script from 'next/script'
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
    description = 'Traceability; RFID, RTLS, WMS, Poka Yoke ve uçtan uca MES/ERP entegrasyonu ile akıllı fabrikalar için endüstriyel izlenebilirlik, MES ve üretim otomasyon çözümleri sunar.';
  }

  let ogLocale = 'ro_RO';
  if (isEn) {
    ogLocale = 'en_US';
  } else if (isTr) {
    ogLocale = 'tr_TR';
  }

  const alternates = getLanguageAlternates(pathname);

  return {
    title,
    description,
    keywords: 'endüstriyel izlenebilirlik, MES, endüstri 4.0, RFID, RTLS, WMS, POKA YOKE, akıllı fabrikalar, otomotiv, gıda, ilaç, kalite kontrol, depo yönetimi',
    metadataBase: new URL('https://izlenebilirlik.com.tr'),
    icons: {
      icon: '/favicon.svg',
      shortcut: '/favicon.svg',
      apple: '/favicon.svg',
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: alternates.canonical,
      locale: ogLocale,
      images: [
        {
          url: 'https://izlenebilirlik.com.tr/siskon-logo-header.svg',
          width: 800,
          height: 600,
          alt: 'Traceability Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://izlenebilirlik.com.tr/siskon-logo-header.svg'],
    },
    alternates,
  };
}

// eslint-disable-next-line react/prop-types
export default async function RootLayout({ children }) {
  const locale = await getRequestLocale();

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <head>
        {/* ── Cerezgo + GTM — ertelenmiş yükleme ────────────────────────────────
            NEDEN: Cerezgo'nun overlay'i sayfa yüklenir yüklenmez (beforeInteractive/
            afterInteractive) DOM'a binerse, kullanıcı henüz hiçbir şeyle etkileşime
            geçmeden tıklama/scroll kilidi devreye giriyor. Bunu "bypass" script'leriyle
            zorla açmak yerine, Cerezgo'yu kullanıcının ilk gerçek etkileşimine
            (scroll / tıklama / dokunma / tuş) veya en geç 3.5 saniyelik idle süresine
            kadar ERTELİYORUZ. Böylece kullanıcı sayfayla zaten etkileşime geçmiş
            oluyor ve overlay ortaya çıktığında scroll/tıklama native olarak çalışıyor.
            Cerezgo yüklenip hazır olduktan SONRA GTM enjekte ediliyor — bu da
            "CerezGoValidationError: script GTM'den önce olmalı" hatasını organik
            biçimde çözüyor; ayrı bir sıralama hilesi gerekmiyor.
            Not: Herhangi bir overlay/pointer-events/overflow zorla ezme (bypass)
            script'i YOK. Cerezgo'nun rıza mantığına dokunulmuyor.
        ─────────────────────────────────────────────────────────────────────── */}
        <Script
          id="analytics-bootstrap"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(() => {
  const host = window.location?.hostname || '';
  const isLocalHost = host === 'localhost' || host === '127.0.0.1' || host.endsWith('.local');
  if (isLocalHost) return;

  let initialized = false;
  let idleTimer = null;

  const cleanup = () => {
    ['pointerdown', 'keydown', 'touchstart', 'scroll'].forEach((eventName) => {
      window.removeEventListener(eventName, initOnUserInteraction, true);
    });
    if (idleTimer) {
      clearTimeout(idleTimer);
      idleTimer = null;
    }
  };

  const loadGtm = () => {
    if (document.getElementById('gtm-script')) return;

    window.dataLayer = window.dataLayer || [];
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

    cleanup();
  };

  const ensureCerezGoThenLoadGtm = () => {
    const existingCerez = document.getElementById('cerezgo-script');
    if (existingCerez) {
      if (existingCerez.getAttribute('data-ready') === '1') {
        loadGtm();
      } else {
        existingCerez.addEventListener('load', loadGtm, { once: true });
        existingCerez.addEventListener('error', loadGtm, { once: true });
      }
      return;
    }

    const cerez = document.createElement('script');
    cerez.id = 'cerezgo-script';
    cerez.async = true;
    cerez.defer = true;
    cerez.src = 'https://cdn.cerezgo.com/file/cerezgo-v3.min.js';
    cerez.setAttribute('data-key', 'tcb1SjODUgMGizndx+ZcTrEzjNZqRVI1gNt/hILmvU/4wo7xt1aj0vED/oZUC1pSW3y6vNOMOcrRZW0pifWnwmCFjgwdyREdZUgJm1JLEsM=');
    cerez.setAttribute('data-id', 'nt');
    cerez.addEventListener('load', () => {
      cerez.setAttribute('data-ready', '1');
      loadGtm();
    }, { once: true });
    cerez.addEventListener('error', loadGtm, { once: true });
    (document.head || document.documentElement).appendChild(cerez);
  };

  const initDeferredAnalytics = () => {
    if (initialized) return;
    initialized = true;
    ensureCerezGoThenLoadGtm();
  };

  const initOnUserInteraction = () => {
    initDeferredAnalytics();
  };

  ['pointerdown', 'keydown', 'touchstart', 'scroll'].forEach((eventName) => {
    window.addEventListener(eventName, initOnUserInteraction, { once: true, passive: true, capture: true });
  });

  idleTimer = window.setTimeout(initDeferredAnalytics, 3500);
})();`,
          }}
        />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <BreadcrumbSchema />
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
          <Layout>
            {children}
          </Layout>
        </LanguageProvider>
      </body>
    </html>
  )
}