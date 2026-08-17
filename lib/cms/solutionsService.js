/**
 * Çözümler (Solutions) CMS Servisi
 *
 * Strapi Collection Type: solution
 * Endpoint: /api/solutions
 *
 * Strapi i18n kullanıyor — ayrı titleEn/titleRo field yok.
 * Ana kayıt locale="tr", localizations[] array'de EN ve RO versiyonlar gelir.
 *
 * Fallback: Strapi erişilemezse data/solutions.js statik verisi kullanılır.
 */

import { strapiQuery, flattenStrapiItem, resolveStrapiMediaUrl } from './strapi';
import { solutions as staticSolutions } from '../../data/solutions';

// ─── Rich text (Blocks) → HTML string dönüştürücü ────────────────────────────
function blocksToHtml(blocks) {
  if (!blocks || !Array.isArray(blocks)) return '';
  return blocks.map((block) => {
    if (block.type === 'paragraph') {
      const text = (block.children || []).map((c) => c.text || '').join('');
      return `<p>${text}</p>`;
    }
    if (block.type === 'heading') {
      const level = block.level || 2;
      const text = (block.children || []).map((c) => c.text || '').join('');
      return `<h${level}>${text}</h${level}>`;
    }
    if (block.type === 'list') {
      const tag = block.format === 'ordered' ? 'ol' : 'ul';
      const items = (block.children || [])
        .map((li) => `<li>${(li.children || []).map((c) => c.text || '').join('')}</li>`)
        .join('');
      return `<${tag}>${items}</${tag}>`;
    }
    return '';
  }).join('\n');
}

/**
 * Strapi Solution objesini frontend'in beklediği data/solutions.js formatına dönüştürür.
 * Strapi i18n: locale query param ile çekildiğinden doğrudan item alanları kullanılır.
 */
function mapSolution(item) {
  const imageUrl = resolveStrapiMediaUrl(
    item.image?.url || item.image?.data?.attributes?.url || ''
  );

  const detail = blocksToHtml(item.detail) || item.detail || '';

  return {
    id: item.id,
    slug: item.slug || '',
    title: item.title || '',
    titleTr: item.title || '',
    icon: item.icon || '',
    image: imageUrl || '',
    description: item.description || '',
    detail,
    detailBullets: [],
    detailPreBullets: [],
    order: item.order || 0,
    _fromCMS: true,
  };
}

/**
 * Tüm çözümleri CMS'den çeker.
 * @param {string} locale - 'tr' | 'en' | 'ro'
 */
export async function getSolutionsFromCMS(locale = 'tr') {
  try {
    // Strapi i18n: locale query param ile o dildeki kayıtlar gelir
    const data = await strapiQuery(
      `/api/solutions?locale=${encodeURIComponent(locale)}&populate=*&sort[0]=order:asc&pagination[pageSize]=50`
    );

    if (!data || !Array.isArray(data)) return null;

    const items = data
      .map((raw) => flattenStrapiItem(raw))
      .filter(Boolean)
      .map((item) => mapSolution(item));

    return items.length > 0 ? items : null;
  } catch (err) {
    console.warn('[CMS] getSolutionsFromCMS hatası, statik veriler kullanılıyor:', err?.message);
    return null;
  }
}

/**
 * Slug'a göre tek çözüm çeker — detay sayfası için.
 * @param {string} slug
 * @param {string} locale
 */
export async function getSolutionBySlugFromCMS(slug, locale = 'tr') {
  try {
    // Strapi i18n: locale + slug filtresi
    const data = await strapiQuery(
      `/api/solutions?filters[slug][$eq]=${encodeURIComponent(slug)}&locale=${encodeURIComponent(locale)}&populate=*`
    );

    if (!data || !Array.isArray(data) || data.length === 0) return null;

    const item = flattenStrapiItem(data[0]);
    return item ? mapSolution(item) : null;
  } catch (err) {
    console.warn('[CMS] getSolutionBySlugFromCMS hatası, statik veriler kullanılıyor:', err?.message);
    return null;
  }
}

/**
 * Tüm solution slug'larını çeker — generateStaticParams için (artık force-dynamic kullanıyoruz, ihtiyaç duyulursa)
 */
export async function getAllSolutionSlugsFromCMS() {
  try {
    const data = await strapiQuery('/api/solutions?fields[0]=slug&pagination[pageSize]=100');
    if (!data || !Array.isArray(data)) {
      return staticSolutions.map((s) => s.slug);
    }
    return data.map((raw) => flattenStrapiItem(raw)?.slug).filter(Boolean);
  } catch {
    return staticSolutions.map((s) => s.slug);
  }
}
