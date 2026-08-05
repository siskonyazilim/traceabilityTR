import { strapiFetch, resolveStrapiMediaUrl } from './client';

function normalizeArticleImageUrl(value) {
  const rawUrl = String(value || '').trim();
  if (!rawUrl) {
    return '';
  }

  if (rawUrl.startsWith('http://') || rawUrl.startsWith('https://')) {
    return rawUrl;
  }

  if (rawUrl.startsWith('/uploads/') || rawUrl.startsWith('uploads/')) {
    return resolveStrapiMediaUrl(rawUrl);
  }

  if (rawUrl.startsWith('/')) {
    return rawUrl;
  }

  return resolveStrapiMediaUrl(rawUrl);
}

function getArticleImageCandidate(raw) {
  const mediaUrl =
    raw.coverImage?.data?.attributes?.url
    || raw.image?.data?.attributes?.url
    || raw.coverImage?.url
    || raw.image?.url
    || raw.coverImagePath
    || raw.imagePath
    || raw.image
    || '';

  return normalizeArticleImageUrl(mediaUrl);
}

function toSafeDate(value) {
  if (!value) {
    return '';
  }

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return '';
  }

  return parsed.toISOString().slice(0, 10);
}

function normalizeArticleAttributes(entry) {
  const raw = entry?.attributes || entry || {};
  const mediaUrl = getArticleImageCandidate(raw);

  const slugByLocale = {
    tr: '',
    en: '',
    ro: '',
  };

  if (raw.locale && raw.slug) {
    slugByLocale[raw.locale] = raw.slug;
  }

  for (const localized of raw.localizations?.data || []) {
    const localizedRaw = localized?.attributes || {};
    if (localizedRaw.locale && localizedRaw.slug) {
      slugByLocale[localizedRaw.locale] = localizedRaw.slug;
    }
  }

  return {
    id: entry?.id || raw.id || null,
    documentId: raw.documentId || null,
    locale: raw.locale || 'tr',
    title: raw.title || '',
    slug: raw.slug || '',
    excerpt: raw.excerpt || '',
    content: raw.content || '',
    blocks: Array.isArray(raw.blocks) ? raw.blocks : [],
    category: raw.category || '',
    date: toSafeDate(raw.date || raw.publishedAt || raw.createdAt),
    author: raw.author || 'Admin',
    image: mediaUrl,
    coverImage: mediaUrl,
    visibleLocales: Array.isArray(raw.visibleLocales) ? raw.visibleLocales : undefined,
    slugByLocale,
  };
}

function buildArticleQueryString({ locale, slug, limit, sortByDate = true } = {}) {
  const params = new URLSearchParams();

  if (locale) {
    params.set('locale', locale);
  }

  params.set('publicationState', 'live');
  params.set('populate[image]', 'true');
  params.set('populate[coverImage]', 'true');
  params.set('populate[localizations]', 'true');
  params.set('populate[blocks][on][shared.blocks-rich-text]', 'true');
  params.set('populate[blocks][on][shared.blocks-media][populate][media]', 'true');
  params.set('populate[blocks][on][shared.blocks-quote]', 'true');
  params.set('populate[blocks][on][shared.blocks-gallery][populate][images]', 'true');

  if (slug) {
    params.set('filters[slug][$eq]', slug);
  }

  if (sortByDate) {
    params.set('sort[0]', 'date:desc');
    params.set('sort[1]', 'id:desc');
  }

  if (limit) {
    params.set('pagination[limit]', String(limit));
  }

  return params.toString();
}

export async function getArticlesByLocale(locale, { limit } = {}) {
  const query = buildArticleQueryString({ locale, limit });
  const json = await strapiFetch(`/api/articles?${query}`, {
    next: { revalidate: 120 },
  });

  return (json?.data || []).map(normalizeArticleAttributes);
}

export async function getArticleBySlug(locale, slug) {
  const query = buildArticleQueryString({ locale, slug, limit: 1, sortByDate: false });
  const json = await strapiFetch(`/api/articles?${query}`, {
    next: { revalidate: 120 },
  });

  const first = json?.data?.[0];
  return first ? normalizeArticleAttributes(first) : null;
}

export async function getArticleBySlugAnyLocale(slug) {
  const query = buildArticleQueryString({ slug, limit: 1, sortByDate: false });
  const json = await strapiFetch(`/api/articles?${query}`, {
    next: { revalidate: 120 },
  });

  const first = json?.data?.[0];
  return first ? normalizeArticleAttributes(first) : null;
}

export async function getArticleByDocumentIdAndLocale(documentId, locale) {
  if (!documentId || !locale) {
    return null;
  }

  const params = new URLSearchParams();
  params.set('publicationState', 'live');
  params.set('locale', locale);
  params.set('pagination[limit]', '1');
  params.set('filters[documentId][$eq]', documentId);
  params.set('populate[image]', 'true');
  params.set('populate[coverImage]', 'true');
  params.set('populate[localizations]', 'true');
  params.set('populate[blocks][on][shared.blocks-rich-text]', 'true');
  params.set('populate[blocks][on][shared.blocks-media][populate][media]', 'true');
  params.set('populate[blocks][on][shared.blocks-quote]', 'true');
  params.set('populate[blocks][on][shared.blocks-gallery][populate][images]', 'true');

  const json = await strapiFetch(`/api/articles?${params.toString()}`, {
    next: { revalidate: 120 },
  });

  const first = json?.data?.[0];
  return first ? normalizeArticleAttributes(first) : null;
}

export async function getArticleAlternatesByDocumentId(documentId) {
  if (!documentId) {
    return [];
  }

  const params = new URLSearchParams();
  params.set('publicationState', 'live');
  params.set('pagination[limit]', '50');
  params.set('filters[documentId][$eq]', documentId);

  const json = await strapiFetch(`/api/articles?${params.toString()}`, {
    next: { revalidate: 120 },
  });

  return (json?.data || []).map((entry) => {
    const raw = entry?.attributes || {};
    return {
      locale: raw.locale || 'tr',
      slug: raw.slug || '',
    };
  });
}
