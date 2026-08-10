const CONTROL_CHARS_REGEX = /[\u0000-\u001F\u007F]/g;
const ESCAPED_CONTROL_SEQUENCE_REGEX = /\\[nrt]/g;
const MULTI_DASH_REGEX = /-{2,}/g;

function safelyDecode(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function sanitizePathSegment(segment) {
  if (!segment) return '';

  const decoded = safelyDecode(segment);
  const cleaned = decoded
    .replace(ESCAPED_CONTROL_SEQUENCE_REGEX, '')
    .replace(CONTROL_CHARS_REGEX, '')
    .trim();

  if (!cleaned) return '';

  let ascii = cleaned
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^A-Za-z0-9._-]/g, '-')
    .replace(MULTI_DASH_REGEX, '-');

  while (ascii.startsWith('-')) {
    ascii = ascii.slice(1);
  }

  while (ascii.endsWith('-')) {
    ascii = ascii.slice(0, -1);
  }

  return encodeURIComponent(ascii);
}

export function sanitizeVideoUrlPath(input) {
  const rawValue = String(input || '')
    .replace(ESCAPED_CONTROL_SEQUENCE_REGEX, '')
    .replace(CONTROL_CHARS_REGEX, '')
    .trim();

  if (!rawValue) return '';

  const isAbsolute = /^https?:\/\//i.test(rawValue);
  const parsedUrl = new URL(rawValue, 'https://placeholder.local');

  const sanitizedPath = parsedUrl.pathname
    .split('/')
    .map((segment, index) => {
      if (index === 0) return '';
      return sanitizePathSegment(segment);
    })
    .filter((segment, index) => index === 0 || segment.length > 0)
    .join('/');

  const normalizedPath = sanitizedPath.startsWith('/') ? sanitizedPath : `/${sanitizedPath}`;
  const safeSearch = parsedUrl.search.replace(ESCAPED_CONTROL_SEQUENCE_REGEX, '').replace(CONTROL_CHARS_REGEX, '');
  const safeHash = parsedUrl.hash.replace(ESCAPED_CONTROL_SEQUENCE_REGEX, '').replace(CONTROL_CHARS_REGEX, '');

  if (isAbsolute) {
    return `${parsedUrl.origin}${normalizedPath}${safeSearch}${safeHash}`;
  }

  return `${normalizedPath}${safeSearch}${safeHash}`;
}

export function toAbsoluteSiteUrl(pathOrUrl, siteUrl) {
  const safePathOrUrl = sanitizeVideoUrlPath(pathOrUrl);
  if (!safePathOrUrl) return '';
  if (/^https?:\/\//i.test(safePathOrUrl)) return safePathOrUrl;

  let safeBase = String(siteUrl || '');
  while (safeBase.endsWith('/')) {
    safeBase = safeBase.slice(0, -1);
  }
  const safePath = safePathOrUrl.startsWith('/') ? safePathOrUrl : `/${safePathOrUrl}`;

  return `${safeBase}${safePath}`;
}
