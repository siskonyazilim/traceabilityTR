/**
 * Partner servisi — Strapi CMS tabanlı
 * Collection Type: Solution Partner (API ID: solution-partners)
 * Endpoint: /api/solution-partners
 *
 * Beklenen Strapi alan adları (Strapi admin'de bu şekilde tanımlayın):
 *   name (text)
 *   slug (text)
 *   breadcrumbLabel (text)
 *   website (text)
 *   description (textarea — Romence, base dil)
 *   descriptionTr (textarea)
 *   descriptionEn (textarea)
 *   fullDescription (textarea — Romence, base dil)
 *   fullDescriptionTr (textarea)
 *   fullDescriptionEn (textarea)
 *   logo (media field)
 *   detailLogo (media field, opsiyonel — yoksa logo kullanılır)
 *   storySlides (component/relation — her biri image media field içerir)
 *
 * Strapi'de collection type yoksa veya Strapi erişilemezse,
 * statik data/partners.js'e fallback yapılır.
 */

import { strapiQuery, flattenStrapiCollection, flattenStrapiItem, resolveStrapiMediaUrl } from './strapi';
import { strategicPartners as staticPartners } from '../../data/partners';

/**
 * Strapi'den gelen Solution Partner objesini frontend'in beklediği
 * strategicPartners formatına dönüştürür.
 */
function mapStrapiPartner(partner) {
  // Logo URL'lerini çöz
  const logoUrl = resolveStrapiMediaUrl(
    partner.logo?.url || partner.logo?.data?.attributes?.url || ''
  );
  const detailLogoUrl = resolveStrapiMediaUrl(
    partner.detailLogo?.url || partner.detailLogo?.data?.attributes?.url || logoUrl
  );

  // Story slides: Strapi'den component array veya relation olarak gelebilir
  const storySlides = (() => {
    const raw = partner.storySlides || partner.story_slides || [];
    const slides = Array.isArray(raw) ? raw : [];
    return slides.map((slide) => {
      const flatSlide = slide?.attributes ? { ...slide.attributes } : slide;
      const imgUrl = resolveStrapiMediaUrl(
        flatSlide?.image?.url
        || flatSlide?.image?.data?.attributes?.url
        || flatSlide?.imageUrl
        || ''
      );
      return { image: imgUrl };
    }).filter((s) => s.image);
  })();

  return {
    id: partner.id,
    name: partner.name || '',
    slug: partner.slug || '',
    breadcrumbLabel: partner.breadcrumbLabel || (partner.name || '').toUpperCase(),
    website: partner.website || '',
    // Çok dilli açıklamalar
    description: partner.description || '',
    descriptionTr: partner.descriptionTr || partner.description || '',
    descriptionEn: partner.descriptionEn || partner.description || '',
    // Tam açıklama
    fullDescription: partner.fullDescription || '',
    fullDescriptionTr: partner.fullDescriptionTr || partner.fullDescription || '',
    fullDescriptionEn: partner.fullDescriptionEn || partner.fullDescription || '',
    // Görseller
    logo: logoUrl,
    detailLogo: detailLogoUrl,
    // Slider görselleri
    storySlides,
    // CMS'den geldiğini işaret et
    _fromCMS: true,
  };
}

/**
 * Tüm partner verilerini Strapi'den çeker.
 * Strapi erişilemezse statik partners.js'e fallback yapar.
 *
 * @returns {Promise<Array>} strategicPartners formatında partner listesi
 */
export async function getPartnersFromCMS() {
  try {
    const data = await strapiQuery(
      '/api/solution-partners?populate=*&sort[0]=id:asc&pagination[pageSize]=100'
    );

    if (!data) {
      console.warn('[CMS] Strapi partner verisi alınamadı, statik veriler kullanılıyor.');
      return staticPartners;
    }

    const partners = flattenStrapiCollection(data);

    if (partners.length === 0) {
      console.warn('[CMS] Strapi\'de hiç partner bulunamadı, statik veriler kullanılıyor.');
      return staticPartners;
    }

    return partners.map(mapStrapiPartner);
  } catch (err) {
    console.warn('[CMS] getPartnersFromCMS hatası, statik veriler kullanılıyor:', err?.message || err);
    return staticPartners;
  }
}

/**
 * Belirli bir slug'a sahip partner'ı Strapi'den çeker.
 * Strapi erişilemezse statik partners.js'e fallback yapar.
 *
 * @param {string} slug - Partner slug'ı
 * @returns {Promise<object|null>} strategicPartners formatında tek partner
 */
export async function getPartnerBySlugFromCMS(slug) {
  try {
    const data = await strapiQuery(
      `/api/solution-partners?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`
    );

    if (!data) {
      const fallback = staticPartners.find((p) => p.slug === slug);
      return fallback || null;
    }

    const partners = flattenStrapiCollection(data);
    if (partners.length === 0) {
      const fallback = staticPartners.find((p) => p.slug === slug);
      return fallback || null;
    }

    return mapStrapiPartner(partners[0]);
  } catch (err) {
    console.warn(`[CMS] getPartnerBySlugFromCMS(${slug}) hatası, statik veriler kullanılıyor:`, err?.message || err);
    const fallback = staticPartners.find((p) => p.slug === slug);
    return fallback || null;
  }
}

/**
 * Tüm partner slug'larını Strapi'den çeker (generateStaticParams için).
 * Strapi erişilemezse statik partners.js slug listesine fallback yapar.
 *
 * @returns {Promise<string[]>} Slug listesi
 */
export async function getAllPartnerSlugsFromCMS() {
  try {
    const data = await strapiQuery('/api/solution-partners?fields[0]=slug&pagination[pageSize]=200');

    if (!data) {
      return staticPartners.map((p) => p.slug);
    }

    const partners = flattenStrapiCollection(data);
    const cmsSlugs = partners.map((p) => p.slug).filter(Boolean);

    if (cmsSlugs.length === 0) {
      return staticPartners.map((p) => p.slug);
    }

    return cmsSlugs;
  } catch (err) {
    console.warn('[CMS] getAllPartnerSlugsFromCMS hatası, statik slug listesi kullanılıyor:', err?.message || err);
    return staticPartners.map((p) => p.slug);
  }
}
