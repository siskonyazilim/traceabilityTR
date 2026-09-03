/**
 * Politika Sayfaları CMS Servisi — Strapi tabanlı
 *
 * Strapi'de oluşturulan Single Type'lar:
 *   - Privacy Policy  → /api/privacy-policy  (API ID: privacy-policy)
 *   - Cookie Policy   → /api/cookie-policy   (API ID: cookie-policy)
 *
 * Her iki type için ortak field'lar:
 *   - eyebrow     (Short Text)
 *   - pageTitle   (Short Text)
 *   - content     (Rich Text — Blocks)
 *   - lastUpdated (Date, opsiyonel)
 *
 * NOT: metaTitle ve metaDescription Strapi'de YOK,
 *      statik i18n JSON dosyalarından okunmaya devam eder.
 *
 * Fallback zinciri:
 *   Strapi (önce) → DOCX dosyaları (bulunamazsa) → null
 */

import { strapiQuery, flattenStrapiItem } from './strapi';

/**
 * Strapi inline node'larını HTML'e dönüştürür.
 * (text, bold, italic, underline, strikethrough, code, link)
 */
function inlineToHtml(children) {
  if (!Array.isArray(children)) return '';
  return children
    .map((child) => {
      if (!child) return '';
      if (child.type === 'link') {
        const href = child.url || '#';
        const inner = inlineToHtml(child.children);
        return `<a href="${href}">${inner}</a>`;
      }
      let text = child.text || '';
      // HTML özel karakterleri escape et
      text = text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      if (child.bold) text = `<strong>${text}</strong>`;
      if (child.italic) text = `<em>${text}</em>`;
      if (child.underline) text = `<u>${text}</u>`;
      if (child.strikethrough) text = `<s>${text}</s>`;
      if (child.code) text = `<code>${text}</code>`;
      return text;
    })
    .join('');
}

/**
 * Strapi Blocks içeriğini sade HTML string'e dönüştürür.
 * Heading, paragraph, list, quote, code bloklarını destekler.
 *
 * @param {Array} blocks - Strapi Rich Text Blocks dizisi
 * @returns {string} HTML string
 */
export function strapiBlocksToHtml(blocks) {
  if (!Array.isArray(blocks) || blocks.length === 0) return '';

  return blocks
    .map((block) => {
      switch (block.type) {
        case 'heading': {
          const level = block.level || 2;
          const text = inlineToHtml(block.children);
          return `<h${level}>${text}</h${level}>`;
        }
        case 'paragraph': {
          const text = inlineToHtml(block.children);
          if (!text.trim()) return '';
          return `<p>${text}</p>`;
        }
        case 'list': {
          const tag = block.format === 'ordered' ? 'ol' : 'ul';
          const items = (block.children || [])
            .map((item) => `<li>${inlineToHtml(item.children)}</li>`)
            .join('');
          return `<${tag}>${items}</${tag}>`;
        }
        case 'quote': {
          const text = inlineToHtml(block.children);
          return `<blockquote>${text}</blockquote>`;
        }
        case 'code': {
          const text = inlineToHtml(block.children);
          return `<pre><code>${text}</code></pre>`;
        }
        case 'image': {
          const url = block.image?.url || '';
          const alt = block.image?.alternativeText || '';
          return url ? `<img src="${url}" alt="${alt}" />` : '';
        }
        default:
          return '';
      }
    })
    .filter(Boolean)
    .join('\n');
}

/**
 * Aydınlatma Metni (Privacy Policy) verisini Strapi'den çeker.
 *
 * @param {string} locale - 'tr' | 'en' | 'ro'
 * @returns {Promise<object|null>} { eyebrow, pageTitle, contentHtml, lastUpdated } veya null
 */
export async function getPrivacyPolicyFromCMS(locale = 'tr') {
  try {
    const data = await strapiQuery(
      `/api/privacy-policy?locale=${encodeURIComponent(locale)}&populate=*`
    );
    if (!data) return null;

    const page = flattenStrapiItem(data);
    if (!page || !page.content) return null;

    const contentHtml = strapiBlocksToHtml(page.content);
    if (!contentHtml.trim()) return null;

    return {
      eyebrow: page.eyebrow || '',
      pageTitle: page.pageTitle || '',
      contentHtml,
      lastUpdated: page.lastUpdated || null,
    };
  } catch (err) {
    console.warn('[CMS] getPrivacyPolicyFromCMS hatası, DOCX fallback kullanılıyor:', err?.message);
    return null;
  }
}

/**
 * Çerez Politikası (Cookie Policy) verisini Strapi'den çeker.
 *
 * @param {string} locale - 'tr' | 'en' | 'ro'
 * @returns {Promise<object|null>} { eyebrow, pageTitle, contentHtml, lastUpdated } veya null
 */
export async function getCookiePolicyFromCMS(locale = 'tr') {
  try {
    const data = await strapiQuery(
      `/api/cookie-policy?locale=${encodeURIComponent(locale)}&populate=*`
    );
    if (!data) return null;

    const page = flattenStrapiItem(data);
    if (!page || !page.content) return null;

    const contentHtml = strapiBlocksToHtml(page.content);
    if (!contentHtml.trim()) return null;

    return {
      eyebrow: page.eyebrow || '',
      pageTitle: page.pageTitle || '',
      contentHtml,
      lastUpdated: page.lastUpdated || null,
    };
  } catch (err) {
    console.warn('[CMS] getCookiePolicyFromCMS hatası, DOCX fallback kullanılıyor:', err?.message);
    return null;
  }
}
