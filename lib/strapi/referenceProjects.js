import { strapiFetch, resolveStrapiMediaUrl } from './client';

function normalizeReferenceProject(entry) {
  const raw = entry?.attributes || entry || {};
  const logoUrl = raw.logo?.data?.attributes?.url || raw.logo?.url || raw.logo || '';

  return {
    id: entry?.id || raw.id || null,
    documentId: raw.documentId || null,
    locale: raw.locale || 'tr',
    title: raw.title || '',
    slug: raw.slug || '',
    summary: raw.summary || raw.description || '',
    description: raw.description || '',
    sector: raw.sector || '',
    logo: resolveStrapiMediaUrl(logoUrl),
    blocks: Array.isArray(raw.blocks) ? raw.blocks : [],
  };
}

export async function getReferenceProjectsByLocale(locale, { limit } = {}) {
  const params = new URLSearchParams();
  params.set('locale', locale);
  params.set('publicationState', 'live');
  params.set('populate[0]', 'logo');
  params.set('sort[0]', 'date:desc');
  params.set('sort[1]', 'id:desc');

  if (limit) {
    params.set('pagination[limit]', String(limit));
  }

  const json = await strapiFetch(`/api/reference-projects?${params.toString()}`, {
    next: { revalidate: 300 },
  });

  return (json?.data || []).map(normalizeReferenceProject);
}

export async function getReferenceProjectBySlug(locale, slug) {
  const params = new URLSearchParams();
  params.set('locale', locale);
  params.set('publicationState', 'live');
  params.set('populate[0]', 'logo');
  params.set('filters[slug][$eq]', slug);
  params.set('pagination[limit]', '1');

  const json = await strapiFetch(`/api/reference-projects?${params.toString()}`, {
    next: { revalidate: 300 },
  });

  const first = json?.data?.[0];
  return first ? normalizeReferenceProject(first) : null;
}
