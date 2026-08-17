/**
 * Sektörler (Sectors / Products) CMS Servisi
 *
 * Strapi Collection Type: sector
 * Endpoint: /api/sectors
 *
 * SolutionsTabs'daki "Sektörler" sekmesini besler.
 * (Hybrid T&T, A+++ T&T, Organic T&T, Capsule T&T)
 *
 * Strapi i18n AÇIK — locale query param ile o dildeki içerik gelir.
 * Fallback: Strapi erişilemezse data/solutions.js → products array kullanılır.
 */

import { strapiQuery, flattenStrapiItem, resolveStrapiMediaUrl } from './strapi';
import { products as staticProducts } from '../../data/solutions';

/**
 * Strapi Sector objesini frontend'in beklediği products formatına dönüştürür.
 */
function mapSector(item) {
  const imageUrl = resolveStrapiMediaUrl(
    item.image?.url || item.image?.data?.attributes?.url || ''
  );

  return {
    id: item.id,
    slug: item.slug || '',
    title: item.title || '',
    titleTr: item.title || '',
    type: item.type || '',
    color: item.color || 'accent-blue',
    image: imageUrl || item.imagePath || '',
    description: item.description || '',
    detail: item.detail || '',
    detailBullets: [],
    detailPreBullets: [],
    order: item.order || 0,
    _fromCMS: true,
  };
}

/**
 * Tüm sektörleri CMS'den çeker — SolutionsTabs "Sektörler" sekmesi için.
 * @param {string} locale - 'tr' | 'en' | 'ro'
 * @returns {Promise<Array|null>}
 */
export async function getSectorsFromCMS(locale = 'tr') {
  try {
    const data = await strapiQuery(
      `/api/sectors?locale=${encodeURIComponent(locale)}&populate=*&sort[0]=order:asc&pagination[pageSize]=20`
    );

    if (!data || !Array.isArray(data)) return null;

    const items = data
      .map((raw) => flattenStrapiItem(raw))
      .filter(Boolean)
      .map((item) => mapSector(item));

    return items.length > 0 ? items : null;
  } catch (err) {
    console.warn('[CMS] getSectorsFromCMS hatası, statik veriler kullanılıyor:', err?.message);
    return null;
  }
}

/**
 * Slug'a göre tek sektör çeker — detay sayfası için.
 */
export async function getSectorBySlugFromCMS(slug, locale = 'tr') {
  try {
    const data = await strapiQuery(
      `/api/sectors?filters[slug][$eq]=${encodeURIComponent(slug)}&locale=${encodeURIComponent(locale)}&populate=*`
    );

    if (!data || !Array.isArray(data) || data.length === 0) return null;

    const item = flattenStrapiItem(data[0]);
    return item ? mapSector(item) : null;
  } catch (err) {
    console.warn('[CMS] getSectorBySlugFromCMS hatası:', err?.message);
    return null;
  }
}

/**
 * Tüm sector slug'larını döner — statik fallback dahil.
 */
export async function getAllSectorSlugsFromCMS() {
  try {
    const data = await strapiQuery('/api/sectors?fields[0]=slug&pagination[pageSize]=50');
    if (!data || !Array.isArray(data)) {
      return staticProducts.map((p) => p.slug);
    }
    return data.map((raw) => flattenStrapiItem(raw)?.slug).filter(Boolean);
  } catch {
    return staticProducts.map((p) => p.slug);
  }
}
