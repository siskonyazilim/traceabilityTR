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
import { localizeProducts } from '../i18n/contentLocalization';

// ─── Rich text (Blocks) → Plain Text & HTML dönüştürücüler ────────────────────
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

function blocksToHtml(val) {
  if (!val) return '';
  if (typeof val === 'string') return val;
  if (Array.isArray(val)) {
    return val
      .map((block) => {
        if (typeof block === 'string') return `<p>${block}</p>`;
        if (block.type === 'paragraph') {
          const text = (block.children || []).map((c) => (typeof c === 'string' ? c : c?.text || '')).join('');
          return text ? `<p>${text}</p>` : '';
        }
        if (block.type === 'heading') {
          const level = block.level || 2;
          const text = (block.children || []).map((c) => (typeof c === 'string' ? c : c?.text || '')).join('');
          return `<h${level}>${text}</h${level}>`;
        }
        if (block.type === 'list') {
          const tag = block.format === 'ordered' ? 'ol' : 'ul';
          const items = (block.children || [])
            .map((li) => `<li>${(li.children || []).map((c) => (typeof c === 'string' ? c : c?.text || '')).join('')}</li>`)
            .join('');
          return `<${tag}>${items}</${tag}>`;
        }
        if (block.children && Array.isArray(block.children)) {
          const text = block.children.map((c) => (typeof c === 'string' ? c : c?.text || '')).join('');
          return text ? `<p>${text}</p>` : '';
        }
        return '';
      })
      .filter(Boolean)
      .join('\n');
  }
  return '';
}

/**
 * Strapi Sector objesini frontend'in beklediği products formatına dönüştürür.
 */
function mapSector(item) {
  // Statik ürün/sektör listesiyle eşleştirme
  const staticMatch = staticProducts.find((p) =>
    p.id === item.id ||
    (item.slug && p.slug === item.slug) ||
    (item.title && p.title?.toLowerCase() === item.title.toLowerCase())
  );

  const idNum = Number(staticMatch?.id || item.id);
  const distinctImage =
    idNum === 1
      ? '/resmi/hybrid-02.png'
      : idNum === 2
      ? '/resmi/a-01.png'
      : idNum === 3
      ? '/resmi/bio-04.png'
      : idNum === 4
      ? '/resmi/capsule-03.png'
      : staticMatch?.image || '/resmi/hybrid-02.png';

  const baseSlug = staticMatch?.slug || item.slug || '';
  const parsedDescription = blocksToPlainText(item.description);
  const description = parsedDescription || staticMatch?.description || '';
  const detail = blocksToHtml(item.detail) || blocksToPlainText(item.detail) || staticMatch?.detail || '';

  return {
    id: staticMatch?.id || item.id,
    // Slug daima kod tarafındaki güvenilir tanımlardan gelir
    slug: baseSlug,
    title: item.title || staticMatch?.title || '',
    titleTr: item.title || staticMatch?.titleTr || staticMatch?.title || '',
    type: item.type || staticMatch?.type || '',
    color: item.color || staticMatch?.color || 'accent-blue',
    image: distinctImage,
    description,
    summary: description,
    detail,
    detailBullets: staticMatch?.detailBullets || [],
    detailPreBullets: staticMatch?.detailPreBullets || [],
    order: item.order ?? staticMatch?.order ?? 0,
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

    if (!data || !Array.isArray(data)) return localizeProducts(staticProducts, locale);

    const items = data
      .map((raw) => flattenStrapiItem(raw))
      .filter(Boolean)
      .map((item) => mapSector(item));

    return items.length > 0 ? items : localizeProducts(staticProducts, locale);
  } catch (err) {
    console.warn('[CMS] getSectorsFromCMS hatası, statik veriler kullanılıyor:', err?.message);
    return localizeProducts(staticProducts, locale);
  }
}

/**
 * Slug'a göre tek sektör çeker — detay sayfası için (slug kod tarafında kontrol edilir).
 */
export async function getSectorBySlugFromCMS(slug, locale = 'tr') {
  try {
    const allSectors = await getSectorsFromCMS(locale);
    const sector = allSectors?.find((s) => s.slug === slug);
    if (sector) return sector;

    const fallbackList = localizeProducts(staticProducts, locale);
    return fallbackList.find((p) => p.slug === slug) || null;
  } catch (err) {
    console.warn('[CMS] getSectorBySlugFromCMS hatası, statik veriler kullanılıyor:', err?.message);
    const fallbackList = localizeProducts(staticProducts, locale);
    return fallbackList.find((p) => p.slug === slug) || null;
  }
}

/**
 * Tüm sector slug'larını döner — URL ve slug'lar kod tarafındaki statik kaynaktan alınır.
 */
export async function getAllSectorSlugsFromCMS() {
  return staticProducts.map((p) => p.slug);
}
