/**
 * Teknoloji Yetenekleri / Sektörler CMS Servisi
 *
 * Strapi Collection Type: technology-capability
 * Endpoint: /api/technology-capabilities
 *
 * Strapi i18n AÇIK — locale query param ile o dildeki içerik direkt gelir.
 * Fallback: Strapi erişilemezse content.tr/en/ro.js statik verileri kullanılır.
 */

import { strapiQuery, flattenStrapiItem, resolveStrapiMediaUrl } from './strapi';

/**
 * Strapi Technology Capability objesini frontend formatına dönüştürür.
 * Strapi i18n: locale param ile çekildiğinden doğrudan item alanları kullanılır.
 */
function mapCapability(item) {
  const iconUrl = resolveStrapiMediaUrl(
    item.icon?.url || item.icon?.data?.attributes?.url || ''
  );

  return {
    id: item.id,
    name: item.name || '',
    title: item.name || '', // Industries.js'de "title" olarak kullanılıyor
    icon: iconUrl || '',
    description: item.description || '',
    color: item.color || 'from-blue-500 to-blue-600',
    order: item.order || 0,
    _fromCMS: true,
  };
}

/**
 * Tüm teknoloji yeteneklerini / sektörleri CMS'den çeker.
 *
 * Strapi i18n: locale query param ile o dildeki kayıtlar gelir.
 * Örn: /api/technology-capabilities?locale=tr&populate=*
 *
 * @param {string} locale - 'tr' | 'en' | 'ro'
 * @returns {Promise<Array|null>} Capability listesi veya null (fallback)
 */
export async function getTechnologyCapabilitiesFromCMS(locale = 'tr') {
  try {
    const data = await strapiQuery(
      `/api/technology-capabilities?locale=${encodeURIComponent(locale)}&populate=*&sort[0]=order:asc&pagination[pageSize]=20`
    );

    if (!data || !Array.isArray(data)) return null;

    const items = data
      .map((raw) => flattenStrapiItem(raw))
      .filter(Boolean)
      .map((item) => mapCapability(item));

    return items.length > 0 ? items : null;
  } catch (err) {
    console.warn('[CMS] getTechnologyCapabilitiesFromCMS hatası, statik veriler kullanılıyor:', err?.message);
    return null;
  }
}
