import { strapiFetch, resolveStrapiMediaUrl } from './client';

function normalizePartnerImageUrl(value) {
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

function mediaUrlFromField(field) {
  if (!field) {
    return '';
  }

  const url = field?.data?.attributes?.url || field?.url || '';
  return normalizePartnerImageUrl(url);
}

function stripTags(value) {
  const source = String(value || '');
  let result = '';
  let inTag = false;

  for (const char of source) {
    if (char === '<') {
      inTag = true;
      result += ' ';
      continue;
    }

    if (char === '>') {
      inTag = false;
      continue;
    }

    if (!inTag) {
      result += char;
    }
  }

  return result;
}

function stripHtml(value) {
  return stripTags(value)
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeStorySlide(block) {
  const imageUrl = mediaUrlFromField(block?.image);
  if (!imageUrl) {
    return null;
  }

  return {
    image: imageUrl,
    title: stripHtml(block?.title),
    description: stripHtml(block?.description),
    caption: stripHtml(block?.caption),
    alt: stripHtml(block?.alt),
  };
}

function normalizeGalleryBlock(block) {
  const imageUrls = Array.isArray(block?.images?.data)
    ? block.images.data
        .map((item) => normalizePartnerImageUrl(item?.attributes?.url || item?.url || ''))
        .filter(Boolean)
    : [];

  return {
    type: 'gallery',
    title: stripHtml(block?.title),
    imageUrls,
  };
}

function normalizeCtaBlock(block) {
  return {
    type: 'cta',
    title: stripHtml(block?.title),
    description: stripHtml(block?.description),
    buttonLabel: stripHtml(block?.buttonLabel),
    buttonUrl: String(block?.buttonUrl || '').trim(),
  };
}

function normalizeQuoteBlock(block) {
  return {
    type: 'quote',
    quote: stripHtml(block?.quote),
    author: stripHtml(block?.author),
    role: stripHtml(block?.role),
  };
}

function normalizeRichTextBlock(block) {
  return {
    type: 'richText',
    title: stripHtml(block?.title),
    content: String(block?.content || ''),
  };
}

function normalizeSingleDynamicBlock(block) {
  const component = String(block?.__component || '');

  if (component.includes('partner-story-slide')) {
    const storySlide = normalizeStorySlide(block);
    return storySlide ? { kind: 'storySlide', value: storySlide } : null;
  }

  if (component.includes('partner-rich-text')) {
    return { kind: 'contentBlock', value: normalizeRichTextBlock(block) };
  }

  if (component.includes('partner-gallery')) {
    return { kind: 'contentBlock', value: normalizeGalleryBlock(block) };
  }

  if (component.includes('partner-cta')) {
    return { kind: 'contentBlock', value: normalizeCtaBlock(block) };
  }

  if (component.includes('partner-quote')) {
    return { kind: 'contentBlock', value: normalizeQuoteBlock(block) };
  }

  return null;
}

function normalizeDynamicBlocks(rawBlocks) {
  const blocks = [];
  const storySlides = [];

  for (const block of rawBlocks) {
    if (!block || typeof block !== 'object') {
      continue;
    }

    const normalized = normalizeSingleDynamicBlock(block);
    if (!normalized) {
      continue;
    }

    if (normalized.kind === 'storySlide') {
      storySlides.push(normalized.value);
      continue;
    }

    blocks.push(normalized.value);
  }

  return { blocks, storySlides };
}

function buildSlugByLocale(raw) {
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

  return slugByLocale;
}

function normalizePartner(entry) {
  const raw = entry?.attributes || entry || {};
  const logo = mediaUrlFromField(raw.logo) || normalizePartnerImageUrl(raw.logoPath || raw.logo || '');
  const detailLogo = mediaUrlFromField(raw.detailLogo) || normalizePartnerImageUrl(raw.detailLogoPath || raw.detailLogo || '') || logo;

  const rawBlocks = Array.isArray(raw.contentBlocks) ? raw.contentBlocks : [];
  const fallbackBlocks = Array.isArray(raw.blocks) ? raw.blocks : [];
  const normalizedRawBlocks = rawBlocks.length > 0 ? rawBlocks : fallbackBlocks;

  const { blocks, storySlides } = normalizeDynamicBlocks(normalizedRawBlocks);

  const summary = String(raw.summary || raw.description || '').trim();
  const firstRichText = blocks.find((block) => block.type === 'richText' && block.content);
  const fullDescription = String(raw.fullDescription || firstRichText?.content || summary || '').trim();

  return {
    id: entry?.id || raw.id || null,
    documentId: raw.documentId || null,
    locale: raw.locale || 'tr',
    name: String(raw.name || raw.title || '').trim(),
    slug: String(raw.slug || '').trim(),
    logo,
    detailLogo,
    summary,
    description: summary,
    fullDescription,
    sortOrder: Number.isFinite(Number(raw.sortOrder)) ? Number(raw.sortOrder) : 0,
    industryYear: Number.isFinite(Number(raw.industryYear)) ? Number(raw.industryYear) : null,
    isFeatured: Boolean(raw.isFeatured),
    storySlides,
    contentBlocks: blocks,
    seo: {
      title: String(raw.seoTitle || '').trim(),
      description: String(raw.seoDescription || '').trim(),
      image: mediaUrlFromField(raw.seoImage),
    },
    slugByLocale: buildSlugByLocale(raw),
  };
}

function addSortParams(params, sortKeys = []) {
  sortKeys.forEach((sortKey, index) => {
    params.set(`sort[${index}]`, sortKey);
  });
}

function shouldRetryWithFallbackSort(error) {
  const message = String(error?.message || '');
  return message.includes('ValidationError') && message.includes('Invalid key');
}

function buildPartnerQueryString({ locale, slug, limit, featuredOnly = false, includeDynamicBlocks = false, sortKeys = [] } = {}) {
  const params = new URLSearchParams();

  if (locale) {
    params.set('locale', locale);
  }

  params.set('publicationState', 'live');
  params.set('populate[logo]', 'true');
  params.set('populate[detailLogo]', 'true');
  params.set('populate[localizations]', 'true');

  if (includeDynamicBlocks) {
    params.set('populate[contentBlocks][populate]', '*');
  }

  if (slug) {
    params.set('filters[slug][$eq]', slug);
  }

  if (featuredOnly) {
    params.set('filters[isFeatured][$eq]', 'true');
  }

  addSortParams(params, sortKeys);

  if (limit) {
    params.set('pagination[limit]', String(limit));
  }

  return params.toString();
}

export async function getPartnersByLocale(locale, { limit, featuredOnly = false } = {}) {
  const primarySort = ['sortOrder:asc', 'name:asc', 'id:asc'];
  const fallbackSort = ['name:asc', 'id:asc'];

  try {
    const query = buildPartnerQueryString({
      locale,
      limit,
      featuredOnly,
      includeDynamicBlocks: false,
      sortKeys: primarySort,
    });
    const json = await strapiFetch(`/api/solution-partners?${query}`, {
      next: { revalidate: 300 },
    });

    return (json?.data || []).map(normalizePartner);
  } catch (error) {
    if (!shouldRetryWithFallbackSort(error)) {
      throw error;
    }

    const query = buildPartnerQueryString({
      locale,
      limit,
      featuredOnly,
      includeDynamicBlocks: false,
      sortKeys: fallbackSort,
    });

    const json = await strapiFetch(`/api/solution-partners?${query}`, {
      next: { revalidate: 300 },
    });

    return (json?.data || []).map(normalizePartner);
  }
}

export async function getPartnerBySlug(locale, slug) {
  const query = buildPartnerQueryString({
    locale,
    slug,
    limit: 1,
    includeDynamicBlocks: true,
    sortKeys: ['id:asc'],
  });

  const json = await strapiFetch(`/api/solution-partners?${query}`, {
    next: { revalidate: 300 },
  });

  const first = json?.data?.[0];
  return first ? normalizePartner(first) : null;
}

export async function getPartnerBySlugAnyLocale(slug) {
  const query = buildPartnerQueryString({
    slug,
    limit: 1,
    includeDynamicBlocks: true,
    sortKeys: ['id:asc'],
  });

  const json = await strapiFetch(`/api/solution-partners?${query}`, {
    next: { revalidate: 300 },
  });

  const first = json?.data?.[0];
  return first ? normalizePartner(first) : null;
}

export async function getPartnerByDocumentIdAndLocale(documentId, locale) {
  if (!documentId || !locale) {
    return null;
  }

  const params = new URLSearchParams();
  params.set('publicationState', 'live');
  params.set('locale', locale);
  params.set('pagination[limit]', '1');
  params.set('filters[documentId][$eq]', documentId);
  params.set('populate[logo]', 'true');
  params.set('populate[detailLogo]', 'true');
  params.set('populate[localizations]', 'true');
  params.set('populate[contentBlocks][populate]', '*');

  const json = await strapiFetch(`/api/solution-partners?${params.toString()}`, {
    next: { revalidate: 300 },
  });

  const first = json?.data?.[0];
  return first ? normalizePartner(first) : null;
}
