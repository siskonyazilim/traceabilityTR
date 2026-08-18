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

  // mediaSide component'inden veya doğrudan item alanlarından medya ayıklama
  const mediaObj = Array.isArray(item.mediaSide) 
    ? item.mediaSide[0] 
    : (item.mediaSide || (Array.isArray(item.media) ? item.media[0] : item.media) || item);

  const logoUrl = extractMediaUrl(mediaObj?.logo || item.logo);
  const imageUrl = extractMediaUrl(mediaObj?.image || item.image);
  const heroImageUrl = extractMediaUrl(mediaObj?.heroImage || mediaObj?.hero_image || item.heroImage);
  const galleryUrls = extractMediaGallery(mediaObj?.gallery || item.gallery);

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

  // Results / Metrics metrikleri (metrics veya results component'i)
  const metricsSource = item.metrics || item.results || item;
  const results = {
    efficiency: metricsSource?.efficiency || item.efficiency || '',
    defects: metricsSource?.defects || item.defects || '',
    productivity: metricsSource?.productivity || item.productivity || '',
  };

  // Case study modüler bileşenleri & bölümleri (Bölüm component'leri veya düz alanlar)
  const hero = Array.isArray(item.heroSection) ? item.heroSection[0] : (item.heroSection || item.hero || item);
  const context = Array.isArray(item.contextSection) ? item.contextSection[0] : (item.contextSection || item.context || item);
  const problem = Array.isArray(item.problemSection) ? item.problemSection[0] : (item.problemSection || item.problem || item);
  const solution = Array.isArray(item.solutionSection) ? item.solutionSection[0] : (item.solutionSection || item.solution || item);
  const tech = Array.isArray(item.techSection) ? item.techSection[0] : (item.techSection || item.tech || item);
  const integration = Array.isArray(item.integrationSection) ? item.integrationSection[0] : (item.integrationSection || item.integration || item);
  const resultsSec = Array.isArray(item.resultsSection) ? item.resultsSection[0] : (item.resultsSection || item.resultsInfo || item);
  const cta = Array.isArray(item.ctaSection) ? item.ctaSection[0] : (item.ctaSection || item.cta || item);

  const problemList = Array.isArray(problem.problemList || item.problemList)
    ? (problem.problemList || item.problemList).map((p) => ({ bold: p.bold || '', text: p.text || '' }))
    : [];

  const steps = Array.isArray(solution.steps || item.steps)
    ? (solution.steps || item.steps).map((s) => ({ no: s.no || '', title: s.title || '', text: s.text || '' }))
    : [];

  const techGrid = Array.isArray(tech.techGrid || item.techGrid)
    ? (tech.techGrid || item.techGrid).map((t) => ({ tag: t.tag || '', title: t.title || '', text: t.text || '' }))
    : [];

  const integrationList = Array.isArray(integration.integrationList || item.integrationList)
    ? (integration.integrationList || item.integrationList).map((i) => ({ bold: i.bold || '', text: i.text || '' }))
    : [];

  let resultsGrid = [];
  const rawResultsGrid = resultsSec.resultsGrid || item.resultsGrid;
  if (Array.isArray(rawResultsGrid)) {
    resultsGrid = rawResultsGrid.map((r) => ({ title: r.title || '', text: r.text || '' }));
  } else if (typeof rawResultsGrid === 'string') {
    try {
      const parsed = JSON.parse(rawResultsGrid);
      if (Array.isArray(parsed)) {
        resultsGrid = parsed.map((r) => ({ title: r.title || '', text: r.text || '' }));
      }
    } catch {}
  }

  return {
    id: item.id,
    slug: item.slug || '',
    title: item.title || '',
    sector: item.sector || hero.tagValue || '',
    description: item.description || hero.heroSub || '',
    logo: logoUrl || '',
    image: imageUrl || '',
    heroImage: heroImageUrl || imageUrl || '',
    gallery: galleryUrls.length > 0 ? galleryUrls : [imageUrl].filter(Boolean),
    technologies,
    results,
    order: item.order ?? 0,
    referenceDate: item.referenceDate || hero.year || '',
    referenceDateLabel: item.referenceDate || hero.year || '',
    featured: Boolean(item.featured),

    // Case study zengin alanları (Component veya Düz alan destekli)
    heroTitleLine1: hero.heroTitleLine1 || item.heroTitleLine1 || '',
    heroTitleLine2: hero.heroTitleLine2 || item.heroTitleLine2 || '',
    heroSub: hero.heroSub || item.heroSub || '',
    locationValue: hero.locationValue || item.locationValue || '',
    year: hero.year || item.year || '',
    scopeVal: hero.scopeVal || item.scopeVal || '',
    tagValue: hero.tagValue || item.tagValue || item.sector || '',

    contextTitle: context.contextTitle || item.contextTitle || '',
    contextP1: context.contextP1 || item.contextP1 || '',
    contextP2: context.contextP2 || item.contextP2 || '',
    contextEyebrow: context.contextEyebrow || item.contextEyebrow || 'Müşteri ve Bağlam',

    problemTitle: problem.problemTitle || item.problemTitle || '',
    problemLede: problem.problemLede || item.problemLede || '',
    problemList,

    solutionTitle: solution.solutionTitle || item.solutionTitle || '',
    solutionLede: solution.solutionLede || item.solutionLede || '',
    steps,

    techTitle: tech.techTitle || item.techTitle || '',
    techGrid,

    integrationTitle: integration.integrationTitle || item.integrationTitle || '',
    integrationDesc: integration.integrationDesc || item.integrationDesc || '',
    integrationList,

    resultsTitle: resultsSec.resultsTitle || item.resultsTitle || '',
    resultsGrid,

    ctaTitle: cta.ctaTitle || item.ctaTitle || '',
    ctaSubtitle: cta.ctaSubtitle || item.ctaSubtitle || '',
    ctaPrimary: cta.ctaPrimary || item.ctaPrimary || '',

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
  'populate[10]=metrics',
  'populate[11]=mediaSide.logo',
  'populate[12]=mediaSide.image',
  'populate[13]=mediaSide.heroImage',
  'populate[14]=mediaSide.gallery',
  'populate[15]=media.logo',
  'populate[16]=media.image',
  'populate[17]=media.heroImage',
  'populate[18]=media.gallery',
  'populate[19]=heroSection',
  'populate[20]=contextSection',
  'populate[21]=problemSection.problemList',
  'populate[22]=solutionSection.steps',
  'populate[23]=techSection.techGrid',
  'populate[24]=integrationSection.integrationList',
  'populate[25]=resultsSection.resultsGrid',
  'populate[26]=ctaSection',
  'populate[27]=hero',
  'populate[28]=context',
  'populate[29]=problem.problemList',
  'populate[30]=solution.steps',
  'populate[31]=tech.techGrid',
  'populate[32]=integration.integrationList',
  'populate[33]=resultsInfo.resultsGrid',
  'populate[34]=cta',
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
