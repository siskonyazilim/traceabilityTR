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
        <Script
          id="cerezgo-script"
          src="https://cdn.cerezgo.com/file/cerezgo-v3.min.js"
          data-key="tcb1SjODUgMGizndx+ZcTrEzjNZqRVI1gNt/hILmvU/4wo7xt1aj0vpKaPbTvt61DIB1C9ICfSdnEZ9wdEs7lN5IoDFNg6gdqhFdk9hLHp4="
          data-id="nt"
          strategy="beforeInteractive"
        />
        <Script
          id="cerezgo-scroll-unlock"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){
  function unlockPage(){
    var html = document.documentElement;
    var body = document.body;
    if (!html || !body) return;

    // Scroll ve pointer-events kilitlerini kaldır
    if (html.style.overflowY === 'hidden' || html.style.overflow === 'hidden') html.style.setProperty('overflow-y', 'auto', 'important');
    if (body.style.overflowY === 'hidden' || body.style.overflow === 'hidden') body.style.setProperty('overflow-y', 'auto', 'important');
    if (body.style.position === 'fixed') body.style.setProperty('position', 'static', 'important');

    if (html.style.pointerEvents === 'none') html.style.setProperty('pointer-events', 'auto', 'important');
    if (body.style.pointerEvents === 'none') body.style.setProperty('pointer-events', 'auto', 'important');

    // CerezGo ve cookie tam ekran backdrop/overlay → tıklanamaz yap
    try {
      var selectors = '[id*="cg-"],[class*="cg-"],[id*="cerezgo"],[class*="cerezgo"]';
      var all = document.querySelectorAll(selectors);
      for (var i = 0; i < all.length; i++) {
        var el = all[i];
        var id = (el.id || '').toLowerCase();
        var cls = (typeof el.className === 'string' ? el.className : '').toLowerCase();

        // Banner, modal kartı veya widget kutusunun kendisi tıklanabilir kalmalı
        var isCard = id.indexOf('banner') >= 0 || id.indexOf('widget') >= 0 || cls.indexOf('banner') >= 0 || cls.indexOf('widget') >= 0 || id.indexOf('modal-content') >= 0;
        if (isCard) {
          el.style.setProperty('pointer-events', 'auto', 'important');
          continue;
        }

        var rect = el.getBoundingClientRect();
        var isCover = rect.width >= (window.innerWidth * 0.75) && rect.height >= (window.innerHeight * 0.75);
        var isBackdrop = id.indexOf('backdrop') >= 0 || id.indexOf('overlay') >= 0 || cls.indexOf('backdrop') >= 0 || cls.indexOf('overlay') >= 0 || isCover;

        if (isBackdrop && !isCard) {
          el.style.setProperty('pointer-events', 'none', 'important');
          el.style.setProperty('background', 'transparent', 'important');
        }
      }
    } catch(e){}
  }

  unlockPage();
  window.addEventListener('load', unlockPage);
  window.addEventListener('resize', unlockPage);

  var obs = new MutationObserver(unlockPage);
  if (document.documentElement) obs.observe(document.documentElement, { attributes: true, childList: true, subtree: true, attributeFilter: ['style','class'] });
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
        <Script
          id="gtm-head"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-547XQ7CS');`,
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
