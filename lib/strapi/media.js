function normalizeBaseUrl(value) {
  return String(value || '').trim().replace(/\/$/, '');
}

const INTERNAL_HOST_PATTERN = /strapi-[a-z0-9]+:1337/i;

export function getStrapiMediaUrl(url) {
  if (!url || typeof url !== 'string') {
    return '';
  }

  const rawUrl = url.trim();

  if (!rawUrl) {
    return '';
  }

  if (rawUrl.startsWith('http://') || rawUrl.startsWith('https://')) {
    return rawUrl;
  }

  // Keep app public assets local instead of forcing Strapi base.
  if (
    rawUrl.startsWith('/images/')
    || rawUrl.startsWith('/icon/')
    || rawUrl.startsWith('/Logos/')
    || rawUrl.startsWith('/social/')
    || rawUrl.startsWith('/video/')
    || rawUrl.startsWith('/resmi/')
    || rawUrl.startsWith('images/')
    || rawUrl.startsWith('icon/')
    || rawUrl.startsWith('Logos/')
    || rawUrl.startsWith('social/')
    || rawUrl.startsWith('video/')
    || rawUrl.startsWith('resmi/')
  ) {
    return rawUrl.startsWith('/') ? rawUrl : `/${rawUrl}`;
  }

  if (rawUrl.startsWith('/') && !rawUrl.startsWith('/uploads/')) {
    return rawUrl;
  }

  const base = normalizeBaseUrl(
    process.env.NEXT_PUBLIC_STRAPI_URL
      || process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL
      || process.env.STRAPI_URL
      || ''
  );

  // İnternal container adresi ise, path kısmını çıkarıp base ile birleştir
  let path = rawUrl;
  if (INTERNAL_HOST_PATTERN.test(rawUrl)) {
    path = rawUrl.replace(/^https?:\/\/[^/]+/, '');
  }

  if (!base) {
    return path;
  }

  const normalizedUrl = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalizedUrl}`;
}