/**
 * Blog servisi — Strapi CMS tabanlı
 * Collection Type: Article (API ID: articles)
 * Endpoint: /api/articles
 *
 * Beklenen Strapi alan adları (Strapi admin'de bu şekilde tanımlayın):
 *   title, titleTr, titleEn, titleRo
 *   slug (base slug, TR olarak da kullanılır), slugTr, slugEn, slugRo
 *   category, categoryEn, categoryRo
 *   date (date field)
 *   author
 *   readTime (integer)
 *   excerpt, excerptEn, excerptRo
 *   content (richtext / HTML)
 *   contentEn, contentRo (opsiyonel)
 *   image (media field)
 *   imageTr, imageEn, imageRo (media fields, opsiyonel)
 *   tags (JSON veya text)
 *   visibleLocales (JSON array, opsiyonel — ['tr','en','ro'])
 *   metaKeywords (text, opsiyonel)
 *
 * Strapi'de collection type yoksa veya Strapi erişilemezse,
 * statik data/blogPosts.js'e fallback yapılır.
 */

import { strapiQuery, flattenStrapiCollection, flattenStrapiItem, resolveStrapiMediaUrl } from './strapi';
import { blogPosts as staticBlogPosts } from '../../data/blogPosts';

/**
 * Strapi Localization yapısından belirli locale'in verilerini çeker.
 * Strapi'de her dil ayrı bir locale kaydı olarak tutulur:
 *   - Ana kayıt: locale="tr"
 *   - localizations array: locale="en", locale="ro"
 */
function getLocaleData(article, locale) {
  if (!locale || locale === 'tr') return article;
  const locs = Array.isArray(article.localizations) ? article.localizations : [];
  return locs.find((l) => l.locale === locale) || article;
}

/**
 * Strapi'den gelen Article objesini frontend'in beklediği
 * blogPosts.js formatına dönüştürür.
 *
 * Strapi'nin gerçek alan yapısı (populate=* ile doğrulandı):
 *   - Ana dil: locale="tr" (base kayıt)
 *   - Görseller: coverImage (media), image (media, opsiyonel)
 *   - İçerik: content (HTML text), blocks (component array)
 *   - Çok dil: localizations[{locale:"en",...}, {locale:"ro",...}]
 */
function mapArticleToBlogPost(article) {
  // Türkçe ana veri
  const trData = article;
  // İngilizce ve Romence lokalizasyonlar
  const enData = getLocaleData(article, 'en');
  const roData = getLocaleData(article, 'ro');

  // Kapak görseli: Strapi'de alan adı "coverImage"
  const resolveImage = (src) => resolveStrapiMediaUrl(
    src?.url || src?.data?.attributes?.url || ''
  );

  const coverImageUrl = resolveImage(trData.coverImage) || resolveImage(trData.image) || '';
  const coverImageEnUrl = resolveImage(enData?.coverImage) || resolveImage(enData?.image) || coverImageUrl;
  const coverImageRoUrl = resolveImage(roData?.coverImage) || resolveImage(roData?.image) || coverImageUrl;

  // İçerik: content alanı yoksa blocks'tan birleştir
  const extractContent = (data) => {
    if (data?.content) return data.content;
    if (Array.isArray(data?.blocks) && data.blocks.length > 0) {
      return data.blocks.map((b) => b.content || '').join('\n');
    }
    return '';
  };

  // Tags: Strapi'den dizi veya virgüllü string gelebilir
  const tags = Array.isArray(trData.tags)
    ? trData.tags
    : typeof trData.tags === 'string'
      ? trData.tags.split(',').map((t) => t.trim()).filter(Boolean)
      : [];

  return {
    id: trData.id,
    // Başlıklar — Strapi Localization kullanıyor, ayrı titleTr/En/Ro alanı yok
    title: trData.title || '',
    titleTr: trData.title || '',
    titleEn: enData?.title || trData.title || '',
    titleRo: roData?.title || trData.title || '',
    // Slug — tüm dillerde aynı slug kullanılıyor (Strapi'de ortak)
    slug: trData.slug || '',
    slugTr: trData.slug || '',
    slugEn: enData?.slug || trData.slug || '',
    slugRo: roData?.slug || trData.slug || '',
    // Kategori
    category: trData.category || '',
    categoryEn: enData?.category || trData.category || '',
    categoryRo: roData?.category || trData.category || '',
    // Meta
    date: trData.date || enData?.date || trData.publishedAt?.substring(0, 10) || '',
    author: trData.author || 'Admin',
    readTime: trData.readTime || 5,
    // Görseller — Strapi'de alan adı "coverImage"
    image: coverImageUrl,
    coverImage: coverImageUrl,
    imageTr: coverImageUrl,
    imageEn: coverImageEnUrl,
    imageRo: coverImageRoUrl,
    // Özet
    excerpt: trData.excerpt || '',
    excerptEn: enData?.excerpt || trData.excerpt || '',
    excerptRo: roData?.excerpt || trData.excerpt || '',
    // İçerik
    content: extractContent(trData),
    contentEn: extractContent(enData),
    contentRo: extractContent(roData),
    // Diğer
    tags,
    metaKeywords: trData.metaKeywords || '',
    visibleLocales: Array.isArray(trData.visibleLocales) ? trData.visibleLocales : [],
    // CMS'den geldiğini işaret et
    _fromCMS: true,
  };
}

/**
 * Tüm blog yazılarını Strapi'den çeker.
 * Strapi erişilemezse statik blogPosts.js'e fallback yapar.
 *
 * @returns {Promise<Array>} blogPosts.js formatında yazı listesi
 */
export async function getBlogPostsFromCMS() {
  try {
    const data = await strapiQuery(
      '/api/articles?populate=*&sort[0]=date:desc&pagination[pageSize]=200'
    );

    if (!data) {
      console.warn('[CMS] Strapi blog verisi alınamadı, statik veriler kullanılıyor.');
      return staticBlogPosts;
    }

    const articles = flattenStrapiCollection(data);

    if (articles.length === 0) {
      console.warn('[CMS] Strapi\'de hiç makale bulunamadı, statik veriler kullanılıyor.');
      return staticBlogPosts;
    }

    return articles.map(mapArticleToBlogPost);
  } catch (err) {
    console.warn('[CMS] getBlogPostsFromCMS hatası, statik veriler kullanılıyor:', err?.message || err);
    return staticBlogPosts;
  }
}

/**
 * Belirli bir slug'a sahip blog yazısını Strapi'den çeker.
 * Strapi erişilemezse statik blogPosts.js'e fallback yapar.
 *
 * @param {string} slug - Makalenin base slug'ı (TR slug)
 * @returns {Promise<object|null>} blogPosts.js formatında tek yazı
 */
export async function getBlogPostBySlugFromCMS(slug) {
  try {
    const data = await strapiQuery(
      `/api/articles?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`
    );

    if (!data) {
      const fallback = staticBlogPosts.find((p) => p.slug === slug);
      return fallback || null;
    }

    const articles = flattenStrapiCollection(data);
    if (articles.length === 0) {
      const fallback = staticBlogPosts.find((p) => p.slug === slug);
      return fallback || null;
    }

    return mapArticleToBlogPost(articles[0]);
  } catch (err) {
    console.warn(`[CMS] getBlogPostBySlugFromCMS(${slug}) hatası, statik veriler kullanılıyor:`, err?.message || err);
    const fallback = staticBlogPosts.find((p) => p.slug === slug);
    return fallback || null;
  }
}

/**
 * Tüm blog slug'larını Strapi'den çeker (generateStaticParams için).
 * Strapi erişilemezse statik blogPosts.js slug listesine fallback yapar.
 *
 * @returns {Promise<string[]>} Slug listesi
 */
export async function getAllBlogSlugsFromCMS() {
  try {
    const data = await strapiQuery('/api/articles?fields[0]=slug&pagination[pageSize]=500&sort[0]=date:desc');

    if (!data) {
      return staticBlogPosts.map((p) => p.slug);
    }

    const articles = flattenStrapiCollection(data);
    const cmsSlugs = articles.map((a) => a.slug).filter(Boolean);

    if (cmsSlugs.length === 0) {
      return staticBlogPosts.map((p) => p.slug);
    }

    return cmsSlugs;
  } catch (err) {
    console.warn('[CMS] getAllBlogSlugsFromCMS hatası, statik slug listesi kullanılıyor:', err?.message || err);
    return staticBlogPosts.map((p) => p.slug);
  }
}
