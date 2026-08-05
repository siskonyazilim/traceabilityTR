const STRAPI_URL = (process.env.STRAPI_URL || '').replace(/\/$/, '');

function buildUrl(path) {
  if (!STRAPI_URL) {
    throw new Error('STRAPI_URL is not defined');
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${STRAPI_URL}${normalizedPath}`;
}

export async function strapiFetch(path, options = {}) {
  const { headers, ...rest } = options;

  const response = await fetch(buildUrl(path), {
    ...rest,
    headers: {
      'Content-Type': 'application/json',
      ...(process.env.STRAPI_API_TOKEN
        ? { Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}` }
        : {}),
      ...headers,
    },
  });

  if (!response.ok) {
    let details = '';
    try {
      details = await response.text();
    } catch {
      details = '';
    }

    const hint = response.status === 403
      ? 'Forbidden: set STRAPI_API_TOKEN or grant Public role access to Article.find.'
      : 'Request failed.';

    const detailSuffix = details ? ` | ${details}` : '';

    throw new Error(
      `Strapi fetch failed: ${response.status} ${path} | ${hint}${detailSuffix}`
    );
  }

  return response.json();
}

export function resolveStrapiMediaUrl(url) {
  if (!url || typeof url !== 'string') {
    return '';
  }

  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  const mediaBase = (process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL || STRAPI_URL || '').replace(/\/$/, '');
  if (!mediaBase) {
    return url;
  }

  const normalizedUrl = url.startsWith('/') ? url : `/${url}`;
  return `${mediaBase}${normalizedUrl}`;
}
