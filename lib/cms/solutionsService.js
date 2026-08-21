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
import { localizeSolutions } from '../i18n/contentLocalization';

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

function blocksToPlainText(val) {
  if (!val) return '';
  if (typeof val === 'string') return val.replace(/<[^>]*>/g, '').trim();
  if (Array.isArray(val)) {
    return val
      .map((block) => {
        if (typeof block === 'string') return block;
        if (block?.children && Array.isArray(block.children)) {
          return block.children.map((c) => (typeof c === 'string' ? c : c?.text || '')).join('');
        }
        return '';
      })
      .filter(Boolean)
      .join(' ')
      .trim();
  }
  if (typeof val === 'object') {
    if (val.children && Array.isArray(val.children)) {
      return val.children.map((c) => (typeof c === 'string' ? c : c?.text || '')).join('').trim();
    }
  }
  return '';
}

/**
 * Strapi Solution objesini frontend'in beklediği data/solutions.js formatına dönüştürür.
 * Strapi i18n: locale query param ile çekildiğinden doğrudan item alanları kullanılır.
 */
function mapSolution(item) {
  const imageUrl = resolveStrapiMediaUrl(
    item.image?.url || item.image?.data?.attributes?.url || ''
  );

  const detail = blocksToHtml(item.detail) || blocksToPlainText(item.detail) || '';
  const parsedDesc = blocksToPlainText(item.description);

  // Statik çözüm listesiyle eşleştirme
  const staticMatch = staticSolutions.find((p) =>
    p.id === item.id ||
    (item.slug && p.slug === item.slug) ||
    (item.title && p.title?.toLowerCase() === item.title.toLowerCase())
  );

  const baseSlug = staticMatch?.slug || item.slug || '';
  const description = parsedDesc || staticMatch?.description || '';

  return {
    id: staticMatch?.id || item.id,
    // Slug daima kod tarafındaki güvenilir tanımlardan gelir
    slug: baseSlug,
    title: item.title || staticMatch?.title || '',
    titleTr: item.title || staticMatch?.titleTr || staticMatch?.title || '',
    icon: item.icon || staticMatch?.icon || '',
    image: imageUrl || staticMatch?.image || '',
    description,
    summary: description,
    detail: detail || staticMatch?.detail || '',
    detailBullets: staticMatch?.detailBullets || [],
    detailPreBullets: staticMatch?.detailPreBullets || [],
    order: item.order ?? staticMatch?.order ?? 0,
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

    if (!data || !Array.isArray(data)) return localizeSolutions(staticSolutions, locale);

    const items = data
      .map((raw) => flattenStrapiItem(raw))
      .filter(Boolean)
      .map((item) => mapSolution(item));

    return items.length > 0 ? items : localizeSolutions(staticSolutions, locale);
  } catch (err) {
    console.warn('[CMS] getSolutionsFromCMS hatası, statik veriler kullanılıyor:', err?.message);
    return localizeSolutions(staticSolutions, locale);
  }
}

/**
 * Slug'a göre tek çözüm çeker — detay sayfası için (slug kod tarafında eşleştirilir).
 * @param {string} slug
 * @param {string} locale
 */
export async function getSolutionBySlugFromCMS(slug, locale = 'tr') {
  try {
    const allSolutions = await getSolutionsFromCMS(locale);
    const solution = allSolutions?.find((s) => s.slug === slug);
    if (solution) return solution;

    const fallbackList = localizeSolutions(staticSolutions, locale);
    return fallbackList.find((s) => s.slug === slug) || null;
  } catch (err) {
    console.warn('[CMS] getSolutionBySlugFromCMS hatası, statik veriler kullanılıyor:', err?.message);
    const fallbackList = localizeSolutions(staticSolutions, locale);
    return fallbackList.find((s) => s.slug === slug) || null;
  }
}

/**
 * Tüm solution slug'larını döner — URL ve slug'lar kod tarafındaki statik kaynaktan alınır.
 */
export async function getAllSolutionSlugsFromCMS() {
  return staticSolutions.map((s) => s.slug);
}
