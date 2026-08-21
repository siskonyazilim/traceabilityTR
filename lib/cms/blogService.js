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

  // Kod tarafındaki statik blog verisiyle eşleştirme
  const staticMatch = staticBlogPosts.find((p) =>
    p.id === trData.id ||
    (trData.slug && p.slug === trData.slug) ||
    (trData.title && p.title?.toLowerCase() === trData.title.toLowerCase())
  );

  const baseSlug = staticMatch?.slug || trData.slug || '';

  return {
    id: staticMatch?.id || trData.id,
    // Başlıklar — Strapi Localization kullanıyor, ayrı titleTr/En/Ro alanı yok
    title: trData.title || staticMatch?.title || '',
    titleTr: trData.title || staticMatch?.title || '',
    titleEn: enData?.title || trData.title || staticMatch?.titleEn || '',
    titleRo: roData?.title || trData.title || staticMatch?.titleRo || '',
    // Slug — URL ve slug'lar kod tarafındaki slug mapping standardına bağlıdır
    slug: baseSlug,
    slugTr: staticMatch?.slugTr || baseSlug,
    slugEn: staticMatch?.slugEn || baseSlug,
    slugRo: staticMatch?.slugRo || baseSlug,
    originalSlug: baseSlug,
    // Kategori
    category: trData.category || staticMatch?.category || '',
    categoryEn: enData?.category || trData.category || staticMatch?.categoryEn || '',
    categoryRo: roData?.category || trData.category || staticMatch?.categoryRo || '',
    // Meta
    date: trData.date || enData?.date || trData.publishedAt?.substring(0, 10) || staticMatch?.date || '',
    author: trData.author || staticMatch?.author || 'Admin',
    readTime: trData.readTime || staticMatch?.readTime || 5,
    // Görseller — Strapi'de alan adı "coverImage"
    image: coverImageUrl || staticMatch?.image || '',
    coverImage: coverImageUrl || staticMatch?.image || '',
    imageTr: coverImageUrl || staticMatch?.imageTr || '',
    imageEn: coverImageEnUrl || staticMatch?.imageEn || '',
    imageRo: coverImageRoUrl || staticMatch?.imageRo || '',
    // Özet
    excerpt: trData.excerpt || staticMatch?.excerpt || '',
    excerptEn: enData?.excerpt || trData.excerpt || staticMatch?.excerptEn || '',
    excerptRo: roData?.excerpt || trData.excerpt || staticMatch?.excerptRo || '',
    // İçerik
    content: extractContent(trData) || staticMatch?.content || '',
    contentEn: extractContent(enData) || staticMatch?.contentEn || '',
    contentRo: extractContent(roData) || staticMatch?.contentRo || '',
    // Diğer
    tags: tags.length > 0 ? tags : (staticMatch?.tags || []),
    metaKeywords: trData.metaKeywords || staticMatch?.metaKeywords || '',
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
 * Belirli bir slug'a sahip blog yazısını çeker (slug kod tarafında aranır).
 *
 * @param {string} slug - Makalenin base slug'ı (TR slug)
 * @returns {Promise<object|null>} blogPosts.js formatında tek yazı
 */
export async function getBlogPostBySlugFromCMS(slug) {
  try {
    const allPosts = await getBlogPostsFromCMS();
    const post = allPosts.find((p) => p.slug === slug || p.originalSlug === slug);
    return post || staticBlogPosts.find((p) => p.slug === slug) || null;
  } catch (err) {
    console.warn(`[CMS] getBlogPostBySlugFromCMS(${slug}) hatası, statik veriler kullanılıyor:`, err?.message || err);
    const fallback = staticBlogPosts.find((p) => p.slug === slug);
    return fallback || null;
  }
}

/**
 * Tüm blog slug'larını döner — slug ve URL'ler daima kod tarafındaki statik yapıdan alınır.
 *
 * @returns {Promise<string[]>} Slug listesi
 */
export async function getAllBlogSlugsFromCMS() {
  return staticBlogPosts.map((p) => p.slug);
}
