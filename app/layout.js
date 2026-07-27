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
  /* ── Log ayarı ─────────────────────────────────────────────────────────
     Konsolda [analytics] etiketiyle her adımı görebilmeniz için log açık.
     Prod'da kapatmak isterseniz LOG'u false yapmanız yeterli. */
  const LOG = true;
  const log = (...args) => { if (LOG) console.log('%c[analytics]', 'color:#8b5cf6;font-weight:bold', ...args); };
  const logWarn = (...args) => { if (LOG) console.warn('%c[analytics]', 'color:#f59e0b;font-weight:bold', ...args); };
  const logError = (...args) => { if (LOG) console.error('%c[analytics]', 'color:#ef4444;font-weight:bold', ...args); };

  const host = window.location?.hostname || '';
  const isLocalHost = host === 'localhost' || host === '127.0.0.1' || host.endsWith('.local');
  if (isLocalHost) {
    log('localhost tespit edildi, analytics devre dışı bırakıldı.');
    return;
  }

  log('script başladı. Kullanıcı etkileşimi veya 3.5sn idle bekleniyor...');

  let initialized = false;
  let idleTimer = null;
  const startedAt = performance.now();

  /* ── Cerezgo ::backdrop dar kapsamlı düzeltme ──────────────────────────
     NEDEN: Cerezgo banner'ı native <dialog>.showModal() ile açıyor. Tarayıcı
     bu durumda otomatik bir ::backdrop pseudo-element ekliyor ve bu katman
     TÜM viewport'u kaplayıp altındaki her şeyin tıklamasını yutuyor —
     banner görsel olarak küçük bir kutu olsa bile.
     BU FIX SADECE: (a) ::backdrop'u tıklanamaz + şeffaf yapar, (b) body'nin
     dialog açılırken kilitlenen scroll'unu geri açar.
     BU FIX ASLA: banner'ı gizlemez, butonlarını etkilemez, rıza/consent
     mantığına dokunmaz, GTM/Cerezgo entegrasyonunu bypass etmez. Kullanıcı
     hâlâ "Kabul Et/Reddet" seçmeden banner kapanmaz; sadece o sırada
     arka plandaki sayfayla da normal etkileşime girebilir. */
  function injectBackdropStyle(shadowRoot) {
    if (shadowRoot.getElementById('cg-backdrop-fix')) return true;
    const style = document.createElement('style');
    style.id = 'cg-backdrop-fix';
    style.textContent =
      /* backdrop'u tıklanamaz + şeffaf yap */
      '::backdrop{pointer-events:none!important;background:transparent!important}' +
      'dialog::backdrop{pointer-events:none!important;background:transparent!important}' +
      /* host öğesini pointer-events:none yap — tam ekran overlay geçirgen olsun */
      ':host{pointer-events:none!important}' +
      /* ama dialog ve içeriği tıklanabilir kalsın */
      '.cerezgo-consent-dialog,.cerezgo-dialog{pointer-events:auto!important}' +
      '.cerezgo-consent-dialog *,.cerezgo-dialog *{pointer-events:auto!important}';
    shadowRoot.appendChild(style);
    log('✅ Shadow DOM ::backdrop + :host fix enjekte edildi.');
    return true;
  }

  function unlockBodyScroll() {
    [document.body, document.documentElement].forEach(function(el) {
      if (!el) return;
      /* Önce inline override'ı kaldır, sonra !important ile yeniden yaz */
      ['overflow', 'overflow-y', 'touch-action', 'overscroll-behavior'].forEach(function(prop) {
        el.style.removeProperty(prop);
        el.style.setProperty(prop, 'auto', 'important');
      });
      if (el === document.body &&
          (el.style.position === 'fixed' || el.style.position === 'sticky')) {
        el.style.removeProperty('position');
        el.style.setProperty('position', 'relative', 'important');
      }
    });
  }

  /* Body + html style watcher: CerezGo her dialog açışında overflow:hidden set ediyor */
  let _bodyWatcher = null;
  function startBodyWatcher() {
    if (_bodyWatcher) return;
    const needsUnlock = (el) =>
      el && (el.style.overflow === 'hidden' || el.style.overflowY === 'hidden');
    _bodyWatcher = new MutationObserver(() => {
      if (needsUnlock(document.body) || needsUnlock(document.documentElement)) {
        unlockBodyScroll();
      }
    });
    [document.body, document.documentElement].forEach(function(el) {
      if (el) _bodyWatcher.observe(el, { attributes: true, attributeFilter: ['style'] });
    });
    log('Body + html overflow watcher başlatıldı.');
  }

  /* shadowRoot hazır olduğunda anında fix uygula */
  function tryApplyShadowFix(app) {
    if (!app) return false;
    if (app.shadowRoot) {
      injectBackdropStyle(app.shadowRoot);
      unlockBodyScroll();
      startBodyWatcher();
      return true;
    }
    /* shadowRoot henüz oluşmadıysa MutationObserver ile bekle */
    const sw = new MutationObserver(() => {
      if (app.shadowRoot) {
        sw.disconnect();
        injectBackdropStyle(app.shadowRoot);
        unlockBodyScroll();
        startBodyWatcher();
        log('shadowRoot oluştu, backdrop fix anında uygulandı.');
      }
    });
    sw.observe(app, { childList: true, subtree: true, attributes: true });
    setTimeout(() => sw.disconnect(), 5000); // güvenlik sınırı
    return false;
  }

  function fixCerezgoBackdrop() {
    /* Önce anlık kontrol */
    const appEl = document.querySelector('cerezgo-app');
    if (tryApplyShadowFix(appEl)) return;

    /* cerezgo-app DOM'da yoksa eklenmesini MutationObserver ile bekle */
    log("cerezgo-app DOM'da yok, MutationObserver ile bekleniyor...");
    const dw = new MutationObserver((_m, obs) => {
      const found = document.querySelector('cerezgo-app');
      if (found) {
        obs.disconnect();
        tryApplyShadowFix(found);
      }
    });
    dw.observe(document.body || document.documentElement, { childList: true, subtree: true });
    setTimeout(() => dw.disconnect(), 10000); // 10sn güvenlik sınırı
  }

  const cleanup = () => {
    ['pointerdown', 'keydown', 'touchstart', 'scroll'].forEach((eventName) => {
      window.removeEventListener(eventName, initOnUserInteraction, true);
    });
    if (idleTimer) {
      clearTimeout(idleTimer);
      idleTimer = null;
    }
    log('event listener\\'lar ve idle timer temizlendi.');
  };

  const loadGtm = () => {
    if (document.getElementById('gtm-script')) {
      logWarn('GTM script zaten DOM\\'da mevcut, tekrar eklenmedi.');
      return;
    }

    log('GTM enjekte ediliyor (GTM-547XQ7CS)...');

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

    const firstScript = document.getElementsByTagName('script')[0];
    const gtmScript = document.createElement('script');
    gtmScript.id = 'gtm-script';
    gtmScript.async = true;
    gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-547XQ7CS';
    gtmScript.addEventListener('load', () => log('✅ GTM script yüklendi.'));
    gtmScript.addEventListener('error', () => logError('❌ GTM script yüklenemedi (network/adblock olabilir).'));

    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(gtmScript, firstScript);
    } else {
      (document.head || document.documentElement).appendChild(gtmScript);
    }

    log('GTM <script> tag DOM\\'a eklendi.');
    cleanup();
  };

  const ensureCerezGoThenLoadGtm = () => {
    const existingCerez = document.getElementById('cerezgo-script');
    if (existingCerez) {
      log('Cerezgo script DOM\\'da zaten mevcut. data-ready =', existingCerez.getAttribute('data-ready'));
      fixCerezgoBackdrop(); // backdrop fix hemen başlat
      if (existingCerez.getAttribute('data-ready') === '1') {
        loadGtm();
      } else {
        existingCerez.addEventListener('load', loadGtm, { once: true });
        existingCerez.addEventListener('error', loadGtm, { once: true });
      }
      return;
    }

    log('Cerezgo script DOM\\'a ekleniyor...');

    const cerez = document.createElement('script');
    cerez.id = 'cerezgo-script';
    cerez.async = true;
    cerez.defer = true;
    cerez.src = 'https://cdn.cerezgo.com/file/cerezgo-v3.min.js';
    cerez.setAttribute('data-key', 'tcb1SjODUgMGizndx+ZcTrEzjNZqRVI1gNt/hILmvU/4wo7xt1aj0vED/oZUC1pSW3y6vNOMOcrRZW0pifWnwmCFjgwdyREdZUgJm1JLEsM=');
    cerez.setAttribute('data-id', 'nt');
    cerez.addEventListener('load', () => {
      const elapsed = Math.round(performance.now() - startedAt);
      log(\`✅ Cerezgo script yüklendi (\${elapsed}ms). GTM sırada.\`);
      cerez.setAttribute('data-ready', '1');
      loadGtm();
      fixCerezgoBackdrop();
    }, { once: true });
    cerez.addEventListener('error', () => {
      logError('❌ Cerezgo script yüklenemedi. GTM yine de yüklenecek.');
      loadGtm();
    }, { once: true });
    (document.head || document.documentElement).appendChild(cerez);
  };

  const initDeferredAnalytics = () => {
    if (initialized) {
      log('initDeferredAnalytics zaten çalıştı, tekrar tetiklenmedi.');
      return;
    }
    initialized = true;
    const elapsed = Math.round(performance.now() - startedAt);
    log(\`tetiklendi (\${elapsed}ms sonra). Cerezgo → GTM zinciri başlıyor.\`);
    ensureCerezGoThenLoadGtm();
  };

  const initOnUserInteraction = (event) => {
    log('kullanıcı etkileşimi algılandı:', event.type);
    initDeferredAnalytics();
  };

  ['pointerdown', 'keydown', 'touchstart', 'scroll'].forEach((eventName) => {
    window.addEventListener(eventName, initOnUserInteraction, { once: true, passive: true, capture: true });
  });

  idleTimer = window.setTimeout(() => {
    log('3.5sn idle süresi doldu, etkileşim beklenmeden tetikleniyor.');
    initDeferredAnalytics();
  }, 3500);
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