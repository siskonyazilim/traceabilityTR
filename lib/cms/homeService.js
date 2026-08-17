/**
 * Ana Sayfa CMS Servisi — Strapi tabanlı
 *
 * Strapi'de "Single Type" olarak oluşturulacak:
 *   Display Name: Home Page
 *   API ID (Singular): home-page
 *   Endpoint: /api/home-page
 *
 * Strapi i18n AÇIK — ayrı fieldEn/fieldRo yok.
 * Locale'e göre doğrudan o locale'in Single Type verisi çekilir.
 *
 * Fallback: Strapi erişilemezse null döner,
 * component'lar kendi statik verilerini kullanır.
 */

import { strapiQuery, flattenStrapiItem, resolveStrapiMediaUrl } from './strapi';

// ─── Hero Slider Mapping ──────────────────────────────────────────────────────
function mapHeroSlides(slides = []) {
  return slides.map((slide) => ({
    id: slide.id,
    title: slide.title || '',
    subtitle: slide.subtitle || '',
    color: slide.color || 'from-accent-blue',
  }));
}

// ─── Performance Metrics Mapping ─────────────────────────────────────────────
function mapMetrics(metrics = []) {
  return metrics.map((m) => ({
    id: m.id,
    value: m.value || 0,
    suffix: m.suffix || '+',
    label: m.label || '',
  }));
}

// ─── Home CTA Mapping ─────────────────────────────────────────────────────────
function mapHomeCta(cta) {
  if (!cta) return null;
  return {
    title: cta.title || '',
    subtitle: cta.subtitle || '',
    primaryLabel: cta.primaryLabel || '',
    secondaryLabel: cta.secondaryLabel || '',
    primaryHref: cta.primaryHref || '/contact',
    secondaryHref: cta.secondaryHref || '/portfolio',
  };
}

// ─── FAQ Mapping ──────────────────────────────────────────────────────────────
function mapFaqItems(items = []) {
  return items
    .map((item) => ({
      id: item.id,
      question: item.question || '',
      answer: item.answer || '',
    }))
    .filter((item) => item.question && item.answer);
}

/**
 * Ana sayfa verilerini Strapi'den çeker.
 * Strapi Single Type: home-page (i18n açık)
 *
 * Strapi, locale parametresiyle o dildeki veriyi direkt döner.
 * Örn: /api/home-page?locale=tr&populate=deep
 *
 * @param {string} locale - 'tr' | 'en' | 'ro'
 * @returns {Promise<object|null>} Ana sayfa CMS verisi veya null (fallback)
 */
export async function getHomePageFromCMS(locale = 'tr') {
  try {
    // Strapi i18n: locale query param ile doğrudan o dildeki içerik gelir
    const data = await strapiQuery(
      `/api/home-page?locale=${encodeURIComponent(locale)}&populate=deep`
    );

    if (!data) return null;

    const page = flattenStrapiItem(data);
    if (!page) return null;

    return {
      // Hero slider slaytları
      heroSlides: mapHeroSlides(page.heroSlides || []),

      // Performans metrikleri (500+, 40+, ...)
      performanceSection: {
        metrics: mapMetrics(page.metrics || []),
        ctaLabel: page.performanceCtaLabel || '',
      },

      // FAQ soruları
      faqItems: mapFaqItems(page.faqItems || []),

      // Ana CTA bölümü
      homeCta: mapHomeCta(page.homeCta),

      // SEO meta (opsiyonel)
      seo: {
        title: page.seo?.title || '',
        description: page.seo?.description || '',
        ogImage: resolveStrapiMediaUrl(
          page.seo?.ogImage?.url || page.seo?.ogImage?.data?.attributes?.url || ''
        ),
      },
    };
  } catch (err) {
    console.warn('[CMS] getHomePageFromCMS hatası, statik veriler kullanılıyor:', err?.message || err);
    return null;
  }
}
