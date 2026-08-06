function normalizeBaseUrl(value) {
  return String(value || '').trim().replace(/\/$/, '');
}

export function getStrapiMediaUrl(url) {
  if (!url || typeof url !== 'string') {
    return '';
  }

  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  const base = normalizeBaseUrl(
    process.env.NEXT_PUBLIC_STRAPI_URL
      || process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL
      || process.env.STRAPI_URL
      || ''
  );

  if (!base) {
    return url;
  }

  const normalizedUrl = url.startsWith('/') ? url : `/${url}`;
  return `${base}${normalizedUrl}`;
}
