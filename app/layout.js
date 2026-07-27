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
        {/* ── CerezGo ────────────────────────────────────────────────────────────
            beforeInteractive → SSR sırasında <head>'e <script src="..."> olarak
            basılır. GTM afterInteractive ile geldiğinden CerezGo DOM'da her
            zaman GTM'den ÖNCE görünür → CerezGoValidationError olmaz.
            CerezGo zaten kendi başlatılışında gtag consent defaults'ı set eder;
            ayrı bir inline script'e gerek yok.
            Blocking overlay: afterInteractive cerezgo-scroll-unlock ile
            Shadow DOM ::backdrop fix çözüyor.
        ─────────────────────────────────────────────────────────────────────── */}
        <Script
          id="cerezgo-script"
          src="https://cdn.cerezgo.com/file/cerezgo-v3.min.js"
          data-key="tcb1SjODUgMGizndx+ZcTrEzjNZqRVI1gNt/hILmvU/4wo7xt1aj0vED/oZUC1pSW3y6vNOMOcrRZW0pifWnwmCFjgwdyREdZUgJm1JLEsM="
          data-id="nt"
          strategy="beforeInteractive"
        />

        {/* 2) GTM — Cerezgo'dan SONRA, aynı strateji (afterInteractive).
               Önceki haliyle "lazyOnload" kullanılıyordu; bu, Cerezgo'nun
               GTM script tag'ini DOM'da ararken bulamamasına ve konsol
               hatasına yol açmış olabilir. Strateji artık eşitlendi. */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-547XQ7CS');`,
          }}
        />

        {/* Not: "cerezgo-scroll-unlock" (overlay bypass) script'i kaldırıldı.
               O script, kullanıcı onay vermeden Cerezgo'nun tıklama kilidini
               zorla devre dışı bırakıyordu; bu da rızasız veri işlemeye
               kapı açarak KVKK/GDPR uyumluluğunu bozuyordu. Script sırası
               düzeldiği için banner artık normal şekilde kapanmalı; bypass'a
               ihtiyaç kalmamalı. */}

        {/* ── CerezGo Bypass – Shadow DOM ::backdrop fix ─────────────────────────
            ROOT CAUSE: CerezGo bir Web Component (<cerezgo-app>) + Shadow DOM
            kullanıyor. Shadow DOM içindeki <dialog popover="manual"> browser'ın
            "top layer"ında açılıyor ve ::backdrop pseudo-element'i tüm sayfayı
            kaplayarak pointer event'leri yutuyor. Normal CSS selectorları
            Shadow DOM'a giremez; JS ile shadow root'a style inject etmek gerekiyor.
            Ayrıca CerezGo body'ye inline overflow:hidden koyuyor — mobil scroll'u
            öldürüyor, onu da setInterval ile sıfırlıyoruz.
        ─────────────────────────────────────────────────────────────────────── */}
        <Script
          id="cerezgo-scroll-unlock"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){
  var TICK = 0, MAX = 1500, pid;

  /* 1 — Shadow DOM'a ::backdrop fix inject et */
  function fix_backdrop() {
    var app = document.querySelector('cerezgo-app');
    if (!app || !app.shadowRoot) return false;
    if (app.shadowRoot.getElementById('cgbdfix')) return true;
    var s = document.createElement('style');
    s.id = 'cgbdfix';
    s.textContent =
      '::backdrop{pointer-events:none!important;background:transparent!important}' +
      'dialog::backdrop{pointer-events:none!important;background:transparent!important}';
    app.shadowRoot.appendChild(s);
    return true;
  }

  /* 2 — Body/html kilitleri: koşulsuz sıfırla (mobil scroll için kritik) */
  function fix_body() {
    var H = document.documentElement, B = document.body;
    if (!H || !B) return;
    var els = [H, B];
    for (var i = 0; i < els.length; i++) {
      els[i].style.setProperty('overflow',            'auto', 'important');
      els[i].style.setProperty('overflow-y',          'auto', 'important');
      els[i].style.setProperty('pointer-events',      'auto', 'important');
      els[i].style.setProperty('touch-action',        'auto', 'important');
      els[i].style.setProperty('overscroll-behavior', 'auto', 'important');
    }
    if (B.style.position === 'fixed' || B.style.position === 'sticky') {
      B.style.setProperty('position', 'relative', 'important');
    }
  }

  function run() {
    fix_body();
    fix_backdrop();
    TICK++;
    if (TICK >= MAX) clearInterval(pid);
  }

  run();
  pid = setInterval(run, 200);
  window.addEventListener('load', run);
  document.addEventListener('touchstart', run, { passive: true, once: true });
  window.addEventListener('resize', fix_body);
})();`,
          }}
        />

        <Script
          id="cerezgo-hide-mobile-fab"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){
  function isMobile(){
    return window.matchMedia && window.matchMedia('(max-width: 768px)').matches;
  }

  function looksLikeFloatingCircle(el){
    if (!el || el.nodeType !== 1) return false;

    var cs = window.getComputedStyle(el);
    if (cs.position !== 'fixed') return false;
    if (cs.display === 'none' || cs.visibility === 'hidden' || Number(cs.opacity) === 0) return false;

    var rect = el.getBoundingClientRect();
    if (!rect || rect.width <= 0 || rect.height <= 0) return false;

    var isSmall = rect.width <= 88 && rect.height <= 88;
    if (!isSmall) return false;

    var radius = parseFloat(cs.borderTopLeftRadius || '0');
    var isCircleLike = cs.borderRadius.indexOf('%') >= 0 || radius >= 18;
    if (!isCircleLike) return false;

    var nearBottom = (window.innerHeight - rect.bottom) <= 120;
    var nearLeft = rect.left <= 120;
    var nearRight = (window.innerWidth - rect.right) <= 120;

    return nearBottom && (nearLeft || nearRight);
  }

  function hideFab(){
    if (!isMobile()) return;

    var nodes = document.querySelectorAll('iframe, div, button, a');
    for (var i = 0; i < nodes.length; i += 1) {
      var node = nodes[i];
      if (looksLikeFloatingCircle(node)) {
        node.style.setProperty('display', 'none', 'important');
      }
    }
  }

  hideFab();
  window.addEventListener('load', hideFab, { once: true });
  window.addEventListener('resize', hideFab);

  var observer = new MutationObserver(hideFab);
  observer.observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'class'] });
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