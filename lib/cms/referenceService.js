/**
 * Referans Projeler (Reference Projects) CMS Servisi
 *
 * Strapi Collection Type: reference-project
 * Endpoint: /api/reference-projects
 *
 * Strapi i18n AÇIK — locale query param ile (tr, en, ro) o dildeki içerik gelir.
 * Fallback: Strapi erişilemezse data/references.js ve data/i18n/references/ statik verileri kullanılır.
 */

import { strapiQuery, flattenStrapiItem, resolveStrapiMediaUrl } from './strapi';
import { referenceProjects as staticReferenceProjects } from '../../data/references';
import { localizeReferenceProjects } from '../i18n/contentLocalization';
import { sortReferenceProjects, withReferenceProjectTimeline } from '../referenceProjectOrdering';

/**
 * Strapi medya alanından tam URL elde eder.
 */
function extractMediaUrl(media) {
  if (!media) return '';
  if (typeof media === 'string') return resolveStrapiMediaUrl(media);
  const url = media.url || media.data?.attributes?.url || media.data?.url || '';
  return resolveStrapiMediaUrl(url);
}

/**
 * Strapi çoklu medya alanından URL dizisi elde eder.
 */
function extractMediaGallery(gallery) {
  if (!gallery) return [];
  if (Array.isArray(gallery)) {
    return gallery.map((item) => extractMediaUrl(item)).filter(Boolean);
  }
  if (Array.isArray(gallery.data)) {
    return gallery.data.map((item) => extractMediaUrl(item?.attributes || item)).filter(Boolean);
  }
  return [];
}

/**
 * Strapi Reference Project nesnesini frontend formatına dönüştürür.
 */
function mapReferenceProject(item) {
  if (!item) return null;

  const logoUrl = extractMediaUrl(item.logo);
  const imageUrl = extractMediaUrl(item.image);
  const heroImageUrl = extractMediaUrl(item.heroImage);
  const galleryUrls = extractMediaGallery(item.gallery);

  // Technologies (JSON veya dizi formatı desteği)
  let technologies = [];
  if (Array.isArray(item.technologies)) {
    technologies = item.technologies;
  } else if (typeof item.technologies === 'string') {
    try {
      technologies = JSON.parse(item.technologies);
    } catch {
      technologies = item.technologies.split(',').map((t) => t.trim()).filter(Boolean);
    }
  }

  // Results metrikleri
  const results = {
    efficiency: item.results?.efficiency || item.efficiency || '',
    defects: item.results?.defects || item.defects || '',
    productivity: item.results?.productivity || item.productivity || '',
  };

  // Case study modüler bileşenleri (problemList, steps, techGrid, integrationList, resultsGrid)
  const problemList = Array.isArray(item.problemList)
    ? item.problemList.map((p) => ({ bold: p.bold || '', text: p.text || '' }))
    : [];

  const steps = Array.isArray(item.steps)
    ? item.steps.map((s) => ({ no: s.no || '', title: s.title || '', text: s.text || '' }))
    : [];

  const techGrid = Array.isArray(item.techGrid)
    ? item.techGrid.map((t) => ({ tag: t.tag || '', title: t.title || '', text: t.text || '' }))
    : [];

  const integrationList = Array.isArray(item.integrationList)
    ? item.integrationList.map((i) => ({ bold: i.bold || '', text: i.text || '' }))
    : [];

  const resultsGrid = Array.isArray(item.resultsGrid)
    ? item.resultsGrid.map((r) => ({ title: r.title || '', text: r.text || '' }))
    : [];

  return {
    id: item.id,
    slug: item.slug || '',
    title: item.title || '',
    sector: item.sector || '',
    description: item.description || '',
    logo: logoUrl || '',
    image: imageUrl || '',
    heroImage: heroImageUrl || imageUrl || '',
    gallery: galleryUrls.length > 0 ? galleryUrls : [imageUrl].filter(Boolean),
    technologies,
    results,
    order: item.order ?? 0,
    referenceDate: item.referenceDate || '',
    referenceDateLabel: item.referenceDate || '',
    featured: Boolean(item.featured),

    // Case study zengin alanları
    heroTitleLine1: item.heroTitleLine1 || '',
    heroTitleLine2: item.heroTitleLine2 || '',
    heroSub: item.heroSub || '',
    locationValue: item.locationValue || '',
    year: item.year || '',
    scopeVal: item.scopeVal || '',
    tagValue: item.tagValue || item.sector || '',

    contextTitle: item.contextTitle || '',
    contextP1: item.contextP1 || '',
    contextP2: item.contextP2 || '',
    contextEyebrow: item.contextEyebrow || 'Müşteri ve Bağlam',

    problemTitle: item.problemTitle || '',
    problemLede: item.problemLede || '',
    problemList,

    solutionTitle: item.solutionTitle || '',
    solutionLede: item.solutionLede || '',
    steps,

    techTitle: item.techTitle || '',
    techGrid,

    integrationTitle: item.integrationTitle || '',
    integrationDesc: item.integrationDesc || '',
    integrationList,

    resultsTitle: item.resultsTitle || '',
    resultsGrid,

    _fromCMS: true,
  };
}

const POPULATE_PARAMS = [
  'populate[0]=logo',
  'populate[1]=image',
  'populate[2]=heroImage',
  'populate[3]=gallery',
  'populate[4]=problemList',
  'populate[5]=steps',
  'populate[6]=techGrid',
  'populate[7]=integrationList',
  'populate[8]=resultsGrid',
  'populate[9]=results',
].join('&');

/**
 * Tüm referans projeleri Strapi CMS'den çeker.
 * @param {string} locale - 'tr' | 'en' | 'ro'
 * @returns {Promise<Array|null>}
 */
export async function getReferenceProjectsFromCMS(locale = 'tr') {
  try {
    const data = await strapiQuery(
      `/api/reference-projects?locale=${encodeURIComponent(locale)}&${POPULATE_PARAMS}&sort[0]=order:asc&pagination[pageSize]=100`
    );

    if (!data || !Array.isArray(data)) return null;

    const items = data
      .map((raw) => flattenStrapiItem(raw))
      .filter(Boolean)
      .map((item) => mapReferenceProject(item));

    return items.length > 0 ? items : null;
  } catch (err) {
    console.warn('[CMS] getReferenceProjectsFromCMS hatası, statik veriler kullanılacak:', err?.message);
    return null;
  }
}

/**
 * Slug'a göre tek bir referans projesini Strapi'den çeker.
 * @param {string} slug
 * @param {string} locale - 'tr' | 'en' | 'ro'
 */
export async function getReferenceProjectBySlugFromCMS(slug, locale = 'tr') {
  try {
    const data = await strapiQuery(
      `/api/reference-projects?filters[slug][$eq]=${encodeURIComponent(slug)}&locale=${encodeURIComponent(locale)}&${POPULATE_PARAMS}`
    );

    if (!data || !Array.isArray(data) || data.length === 0) return null;

    const raw = flattenStrapiItem(data[0]);
    return mapReferenceProject(raw);
  } catch (err) {
    console.warn(`[CMS] getReferenceProjectBySlugFromCMS (${slug}) hatası:`, err?.message);
    return null;
  }
}

/**
 * Hibrit Referans Verisi Sağlayıcı:
 * Öncelik Strapi CMS, yoksa / hata durumunda data/references.js fallback.
 * @param {string} locale - 'tr' | 'en' | 'ro'
 */
export async function getReferenceProjects(locale = 'tr') {
  const cmsProjects = await getReferenceProjectsFromCMS(locale);
  if (cmsProjects && cmsProjects.length > 0) {
    return withReferenceProjectTimeline(cmsProjects, locale);
  }

  // Statik fallback
  return withReferenceProjectTimeline(
    sortReferenceProjects(localizeReferenceProjects(staticReferenceProjects, locale)),
    locale
  );
}
