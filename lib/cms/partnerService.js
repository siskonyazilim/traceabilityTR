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
  // Static partner eşleşmesi (ID, isim veya slug üzerinden)
  const staticMatch = staticPartners.find((p) =>
    p.id === partner.id ||
    (partner.name && p.name.toLowerCase() === partner.name.toLowerCase()) ||
    (partner.slug && p.slug.toLowerCase() === partner.slug.toLowerCase())
  );

  // Logo URL'lerini çöz
  const logoUrl = resolveStrapiMediaUrl(
    partner.logo?.url || partner.logo?.data?.attributes?.url || ''
  ) || staticMatch?.logo || '';
  const detailLogoUrl = resolveStrapiMediaUrl(
    partner.detailLogo?.url || partner.detailLogo?.data?.attributes?.url || logoUrl
  ) || staticMatch?.detailLogo || logoUrl;

  // Story slides: Strapi'den component array veya relation olarak gelebilir
  const storySlides = (() => {
    const raw = partner.storySlides || partner.story_slides || [];
    const slides = Array.isArray(raw) ? raw : [];
    const mapped = slides.map((slide) => {
      const flatSlide = slide?.attributes ? { ...slide.attributes } : slide;
      const imgUrl = resolveStrapiMediaUrl(
        flatSlide?.image?.url
        || flatSlide?.image?.data?.attributes?.url
        || flatSlide?.imageUrl
        || ''
      );
      return { image: imgUrl };
    }).filter((s) => s.image);
    return mapped.length > 0 ? mapped : (staticMatch?.storySlides || []);
  })();

  return {
    id: staticMatch?.id || partner.id,
    name: partner.name || staticMatch?.name || '',
    // Slug daima kod tarafındaki güvenilir tanımlardan çözümlenir
    slug: staticMatch?.slug || partner.slug || '',
    breadcrumbLabel: staticMatch?.breadcrumbLabel || partner.breadcrumbLabel || (partner.name || '').toUpperCase(),
    website: partner.website || staticMatch?.website || '',
    // Çok dilli açıklamalar
    description: partner.description || staticMatch?.description || '',
    descriptionTr: partner.descriptionTr || partner.description || staticMatch?.description || '',
    descriptionEn: partner.descriptionEn || partner.description || staticMatch?.description || '',
    // Tam açıklama
    fullDescription: partner.fullDescription || staticMatch?.fullDescription || '',
    fullDescriptionTr: partner.fullDescriptionTr || partner.fullDescription || staticMatch?.fullDescription || '',
    fullDescriptionEn: partner.fullDescriptionEn || partner.fullDescription || staticMatch?.fullDescription || '',
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
 * Belirli bir slug'a sahip partner'ı çeker (slug kod tarafında kontrol edilir).
 *
 * @param {string} slug - Partner slug'ı
 * @returns {Promise<object|null>} strategicPartners formatında tek partner
 */
export async function getPartnerBySlugFromCMS(slug) {
  try {
    const allPartners = await getPartnersFromCMS();
    const partner = allPartners.find((p) => p.slug === slug);
    return partner || staticPartners.find((p) => p.slug === slug) || null;
  } catch (err) {
    console.warn(`[CMS] getPartnerBySlugFromCMS(${slug}) hatası, statik veriler kullanılıyor:`, err?.message || err);
    const fallback = staticPartners.find((p) => p.slug === slug);
    return fallback || null;
  }
}

/**
 * Tüm partner slug'larını döner — URL ve slug'lar kod tarafındaki statik kaynaktan alınır.
 *
 * @returns {Promise<string[]>} Slug listesi
 */
export async function getAllPartnerSlugsFromCMS() {
  return staticPartners.map((p) => p.slug);
}
