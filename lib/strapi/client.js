import { getStrapiMediaUrl } from './media';

function normalizeBaseUrl(value) {
  return String(value || '').trim().replace(/\/$/, '');
}

const STRAPI_URL = normalizeBaseUrl(
  process.env.STRAPI_URL
    || process.env.NEXT_PUBLIC_STRAPI_URL
    || process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL
    || ''
);

function validateStrapiBaseUrl(url) {
  if (!url) {
    throw new Error('STRAPI_URL is not defined');
  }

  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  try {
    const parsed = new URL(url);
    const hostname = String(parsed.hostname || '').toLowerCase();
    if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '0.0.0.0') {
      throw new Error('STRAPI_URL points to localhost in production. Use your public Strapi/API domain.');
    }
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error(`Invalid STRAPI_URL value: ${url}`);
    }

    throw error;
  }
}

function buildUrl(path) {
  validateStrapiBaseUrl(STRAPI_URL);

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
  return getStrapiMediaUrl(url);
}
