/**
 * Global Settings CMS Servisi — Strapi tabanlı
 *
 * Strapi'de "Single Type" olarak oluşturulacak:
 *   Display Name: Global Settings
 *   API ID (Singular): global-setting
 *   Endpoint: /api/global-setting
 *
 * Strapi i18n AÇIK — locale query param ile o dildeki içerik gelir.
 *
 * İçerik:
 *   - headerNav[]      → Header menü maddeleri
 *   - footerNav[]      → Footer navigasyon linkleri
 *   - footerDescription → Footer marka açıklaması
 *   - copyrightText    → Alt copyright metni
 *   - phoneNumberTR / phoneNumberRO
 *   - emailTR / emailRO
 *   - socialLinks[]    → LinkedIn, Twitter, Instagram, YouTube
 *
 * Fallback: Strapi erişilemezse null döner,
 * Header/Footer kendi statik t() verilerini kullanır.
 */

import { strapiQuery, flattenStrapiItem } from './strapi';

function mapNavItems(items = []) {
  return items
    .map((item) => ({
      id: item.id,
      label: item.label || '',
      href: item.href || '',
      order: item.order ?? 99,
    }))
    .sort((a, b) => a.order - b.order);
}

function mapSocialLinks(items = []) {
  const result = {};
  items.forEach((item) => {
    if (item.platform) {
      result[item.platform] = {
        url: item.url || '',
        urlRo: item.urlRo || item.url || '',
      };
    }
  });
  return result;
}

/**
 * Global ayarları Strapi'den çeker.
 * @param {string} locale - 'tr' | 'en' | 'ro'
 * @returns {Promise<object|null>}
 */
export async function getGlobalSettingsFromCMS(locale = 'tr') {
  try {
    const data = await strapiQuery(
      `/api/global-setting?locale=${encodeURIComponent(locale)}&populate=*`
    );

    if (!data) return null;

    const settings = flattenStrapiItem(data);
    if (!settings) return null;

    return {
      // Header
      headerNav: mapNavItems(settings.headerNav || []),

      // Footer
      footerNav: mapNavItems(settings.footerNav || []),
      footerDescription: settings.footerDescription || '',
      copyrightText: settings.copyrightText || '',

      // İletişim
      phoneNumberTR: settings.phoneNumberTR || '',
      phoneNumberRO: settings.phoneNumberRO || '',
      emailTR: settings.emailTR || '',
      emailRO: settings.emailRO || '',

      // Sosyal medya { linkedin: { url, urlRo }, twitter: {...}, ... }
      socialLinks: mapSocialLinks(settings.socialLinks || []),
    };
  } catch (err) {
    console.warn('[CMS] getGlobalSettingsFromCMS hatası, statik veriler kullanılıyor:', err?.message);
    return null;
  }
}
