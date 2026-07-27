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
        {/* ── Google Consent Mode v2 varsayılan değerleri ──────────────────────────
            GTM'den ÖNCE çalışmalı. CerezGo bu değerleri kullanıcı tercihi
            yaptıktan sonra günceller. beforeInteractive → <head>'e inline basılır.
        ─────────────────────────────────────────────────────────────────────── */}
        <Script
          id="consent-defaults"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  'analytics_storage':    'denied',
  'ad_storage':           'denied',
  'ad_user_data':         'denied',
  'ad_personalization':   'denied',
  'functionality_storage':'denied',
  'personalization_storage':'denied',
  'security_storage':     'granted',
  'wait_for_update':       2000
});
gtag('set', 'ads_data_redaction', true);
gtag('set', 'url_passthrough', false);`,
          }}
        />
        <Script
          id="cerezgo-script"
          src="https://cdn.cerezgo.com/file/cerezgo-v3.min.js"
          data-key="tcb1SjODUgMGizndx+ZcTrEzjNZqRVI1gNt/hILmvU/4wo7xt1aj0vED/oZUC1pSW3y6vNOMOcrRZW0pifWnwmCFjgwdyREdZUgJm1JLEsM="
          data-id="nt"
          strategy="afterInteractive"
        />
        <Script
          id="cerezgo-scroll-unlock"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){
  /* ─────────────────────────────────────────────────────────────────────
     CerezGo Overlay Bypass  –  v4
     Strateji:
       1. body/html kilitlerini her 200 ms'de KOŞULSUZ sıfırla
       2. Bilinen CerezGo selectorleri + herhangi inline-fixed büyük overlay'i
          pointer-events:none yap (banner/widget hariç)
       3. Banner gizlendikten sonra (onay verildi) tüm kalan overlay'leri temizle
       4. MutationObserver KULLANMA – CerezGo ile sonsuz döngüye giriyor
     ───────────────────────────────────────────────────────────────────── */
  var TICK = 0, MAX = 1500, pid, consent_done = false;

  /* 1 ─ Body kilitleri: koşulsuz sıfırla */
  function body_unlock() {
    var H = document.documentElement, B = document.body;
    if (!H || !B) return;
    var targets = [H, B];
    for (var i = 0; i < targets.length; i++) {
      var t = targets[i];
      t.style.setProperty('overflow',            'auto', 'important');
      t.style.setProperty('overflow-y',          'auto', 'important');
      t.style.setProperty('pointer-events',      'auto', 'important');
      t.style.setProperty('touch-action',        'auto', 'important');
      t.style.setProperty('overscroll-behavior', 'auto', 'important');
    }
    if (B.style.position === 'fixed' || B.style.position === 'sticky') {
      B.style.setProperty('position', 'relative', 'important');
    }
  }

  /* 2 ─ Overlay tespiti: banner/widget = dokunulabilir, geri kalan = pas-geç */
  var IS_INTERACTIVE = /banner|modal|widget|preference|setting|btn|button|accept|reject|close|fab|icon|logo/;

  function overlay_disable() {
    /* 2a – CerezGo / consent adlı elementler */
    var cg = document.querySelectorAll(
      '[id^="cg"],[class^="cg"],[id*="cerezgo"],[class*="cerezgo"],' +
      '[id^="nt-"],[class^="nt-"],[id*="cookie"],[class*="cookie"],' +
      '[id*="consent"],[class*="consent"],[id*="gdpr"],[class*="gdpr"],' +
      '[id*="kvkk"],[class*="kvkk"]'
    );
    for (var i = 0; i < cg.length; i++) {
      var el = cg[i];
      var key = ((el.id || '') + ' ' + (typeof el.className === 'string' ? el.className : '')).toLowerCase();
      if (IS_INTERACTIVE.test(key)) {
        el.style.setProperty('pointer-events', 'auto', 'important');
        el.style.setProperty('touch-action',   'auto', 'important');
      } else {
        el.style.setProperty('pointer-events', 'none',        'important');
        el.style.setProperty('background',     'transparent', 'important');
      }
    }
    /* 2b – Vendor-agnostik: inline-fixed + büyük alan kaplayan her eleman */
    var fixed = document.querySelectorAll('[style*="fixed"]');
    var W = window.innerWidth, Hh = window.innerHeight;
    for (var j = 0; j < fixed.length; j++) {
      var fel = fixed[j];
      var r   = fel.getBoundingClientRect();
      if (r.width < W * 0.75 || r.height < Hh * 0.75) continue;
      var fkey = ((fel.id || '') + ' ' + (typeof fel.className === 'string' ? fel.className : '')).toLowerCase();
      if (!IS_INTERACTIVE.test(fkey)) {
        fel.style.setProperty('pointer-events', 'none',        'important');
        fel.style.setProperty('background',     'transparent', 'important');
      }
    }
  }

  /* 3 ─ Onay sonrası: kalan tüm overlay'leri gizle */
  function after_consent() {
    /* 3a – Büyük fixed overlay'leri display:none yap */
    var fixed2 = document.querySelectorAll('[style*="fixed"]');
    var W2 = window.innerWidth, H2 = window.innerHeight;
    for (var i = 0; i < fixed2.length; i++) {
      var el = fixed2[i];
      var r  = el.getBoundingClientRect();
      if (r.width < W2 * 0.5 || r.height < H2 * 0.5) continue;
      var key = ((el.id || '') + ' ' + (typeof el.className === 'string' ? el.className : '')).toLowerCase();
      if (!IS_INTERACTIVE.test(key)) {
        el.style.setProperty('pointer-events', 'none',  'important');
        el.style.setProperty('display',        'none',  'important');
      }
    }
    /* 3b – CerezGo elementleri: widget hariç hepsini kapat */
    var cg2 = document.querySelectorAll('[id^="cg"],[class^="cg"],[id*="cerezgo"],[class*="cerezgo"],[id^="nt-"],[class^="nt-"]');
    for (var j = 0; j < cg2.length; j++) {
      var cgEl = cg2[j];
      var cgKey = ((cgEl.id || '') + ' ' + (typeof cgEl.className === 'string' ? cgEl.className : '')).toLowerCase();
      if (/widget|fab|float/.test(cgKey)) {
        cgEl.style.setProperty('pointer-events', 'auto', 'important'); /* widget tıklanabilir */
      } else if (!/banner|modal/.test(cgKey)) {
        cgEl.style.setProperty('pointer-events', 'none', 'important');
        cgEl.style.setProperty('display',        'none', 'important');
      }
    }
    body_unlock();
    clearInterval(pid);
    setInterval(body_unlock, 5000); /* Sadece body'yi koru, daha seyrek */
  }

  /* 4 ─ Banner hâlâ görünür mü? */
  function banner_visible() {
    var sel = '[id*="banner"],[class*="banner"],[id*="modal-content"],[class*="modal-content"]';
    var els = document.querySelectorAll(sel);
    for (var k = 0; k < els.length; k++) {
      var el  = els[k];
      var id  = (el.id  || '').toLowerCase();
      var cls = (typeof el.className === 'string' ? el.className : '').toLowerCase();
      if (id.indexOf('cg') < 0 && cls.indexOf('cg') < 0 &&
          id.indexOf('cerezgo') < 0 && cls.indexOf('cerezgo') < 0 &&
          id.indexOf('nt-') < 0) continue;
      var cs = window.getComputedStyle(el);
      if (cs.display !== 'none' && cs.visibility !== 'hidden' && parseFloat(cs.opacity || '1') > 0) return true;
    }
    return false;
  }

  /* 5 ─ Ana poll döngüsü */
  function run() {
    body_unlock();
    if (!consent_done) {
      overlay_disable();
      /* Banner 4 saniye sonra hâlâ görünür değilse → onay verildi */
      if (TICK > 20 && !banner_visible()) {
        consent_done = true;
        after_consent();
        return;
      }
    }
    TICK++;
    if (TICK >= MAX) clearInterval(pid);
  }

  /* Başlat */
  run();
  pid = setInterval(run, 200);
  window.addEventListener('load', run);
  document.addEventListener('touchstart', function(){ body_unlock(); overlay_disable(); }, { passive: true, once: true });
  window.addEventListener('resize', body_unlock);
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
