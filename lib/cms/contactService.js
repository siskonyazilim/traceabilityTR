/**
 * İletişim Sayfası CMS Servisi — Strapi tabanlı
 *
 * Strapi'de "Single Type" olarak oluşturulacak:
 *   Display Name: Contact Page
 *   API ID (Singular): contact-page
 *   Endpoint: /api/contact-page
 *
 * Strapi i18n AÇIK — locale query param ile o dildeki içerik gelir.
 *
 * İçerik:
 *   - heroTitle, heroSubtitle
 *   - offices[] (contact.office component, repeatable)
 *     → name, address, phone, email, mapEmbedUrl, mapQuery, order
 *
 * Fallback: Strapi erişilemezse null döner,
 * ContactPageClient kendi statik verilerini kullanır.
 */

import { strapiQuery, flattenStrapiItem } from './strapi';

/**
 * Tek bir ofis objesini frontend formatına dönüştürür.
 */
function mapOffice(office, index) {
  if (!office) return null;
  return {
    id: office.id || index + 1,
    name: office.name || '',
    address: office.address || '',
    phone: office.phone || '',
    email: office.email || '',
    mapEmbedUrl: office.mapEmbedUrl || '',
    mapQuery: office.mapQuery || '',
    order: office.order ?? index,
  };
}

/**
 * İletişim sayfası verilerini Strapi'den çeker.
 *
 * @param {string} locale - 'tr' | 'en' | 'ro'
 * @returns {Promise<object|null>}
 */
export async function getContactPageFromCMS(locale = 'tr') {
  try {
    const data = await strapiQuery(
      `/api/contact-page?locale=${encodeURIComponent(locale)}&populate=*`
    );

    if (!data) return null;

    const page = flattenStrapiItem(data);
    if (!page) return null;

    // Ofisleri sırala (order alanına göre)
    const rawOffices = Array.isArray(page.offices) ? page.offices : [];
    const offices = rawOffices
      .map((o, i) => mapOffice(o, i))
      .filter(Boolean)
      .sort((a, b) => a.order - b.order);

    return {
      heroTitle: page.heroTitle || '',
      heroSubtitle: page.heroSubtitle || '',
      offices,
    };
  } catch (err) {
    console.warn('[CMS] getContactPageFromCMS hatası, statik veriler kullanılıyor:', err?.message);
    return null;
  }
}
