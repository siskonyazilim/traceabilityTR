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
import { getHeroVideoAssets } from '../seo/videoCatalog';

const defaultHeroVideos = getHeroVideoAssets();

// ─── Hero Slider Mapping ──────────────────────────────────────────────────────
function mapHeroSlides(slides = []) {
  return slides.map((slide, index) => {
    const videoAsset = defaultHeroVideos[index] || defaultHeroVideos[0];
    const videoUrl = resolveStrapiMediaUrl(
      slide.video?.url || slide.video?.data?.attributes?.url || ''
    ) || videoAsset.video;
    const mobileVideoUrl = resolveStrapiMediaUrl(
      slide.mobileVideo?.url || slide.mobileVideo?.data?.attributes?.url || ''
    ) || videoAsset.mobileVideo;

    return {
      id: index + 1,
      title: slide.title || '',
      subtitle: slide.subtitle || '',
      color: slide.color || (index === 0 ? 'from-accent-blue' : index === 1 ? 'from-accent-green' : 'from-accent-yellow'),
      video: videoUrl,
      mobileVideo: mobileVideoUrl,
      _fromCMS: true,  // contentLocalization'ın statik metinle ezmesini engeller
    };
  });
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
      `/api/home-page?locale=${encodeURIComponent(locale)}&populate[HeroSlide][populate]=*&populate[Metric]=*&populate[faqitems]=*&populate[HomeCta]=*&populate[seo][populate]=*`
    );

    if (!data) return null;

    const page = flattenStrapiItem(data);
    if (!page) return null;

    return {
      // Hero slider slaytları
      heroSlides: mapHeroSlides(page.HeroSlide || page.heroSlides || []),

      // Performans metrikleri (500+, 40+, ...)
      performanceSection: {
        metrics: mapMetrics(page.Metric || page.metrics || []),
        ctaLabel: page.performanceCtaLabel || '',
      },

      // FAQ soruları
      faqItems: mapFaqItems(page.faqitems || page.faqItems || []),

      // Ana CTA bölümü
      homeCta: mapHomeCta(page.HomeCta || page.homeCta),

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
