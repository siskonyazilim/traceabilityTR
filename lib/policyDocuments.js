import path from 'node:path';
import mammoth from 'mammoth';

const DOC_ROOT = path.join(process.cwd(), 'dokuman', 'dokuman');

const FILE_MAP = {
  privacy: {
    en: 'EYS-CONPTC_EN_Privacy Notice_v3.0.docx',
    ro: 'EYS-CONPTC_RO-EN-Privacy Policy_v3.0_RO translation RO v2 SPT.docx',
    tr: 'EYS-CONPTC-Aydınlatma Metni_v3.0.docx',
  },
  cookie: {
    en: 'EYS-PLC_EN-Cookie Policy_v2.0.docx',
    ro: 'EYS-PLC_RO-EN-Cookie Policy_v2.0_translation RO vSPT.docx',
    tr: 'EYS-PLC-Çerez Politikası_v2.0.docx',
  },
};

const cache = new Map();

function normalizeLocale(locale) {
  if (locale === 'en') return 'en';
  if (locale === 'tr') return 'tr';
  return 'ro';
}

function normalizeText(value) {
  return value
    .replaceAll('\r\n', '\n')
    .replaceAll('\u00a0', ' ')
    .replace(/\n{3,}/g, '\n\n')
    // Adres düzeltmesi: Tınaztepe Yerleşkesi → Merkez Yerleşkesi
    .replaceAll('Tınaztepe Yerleşkesi', 'Merkez Yerleşkesi')
    .replaceAll('Tinaztepe Yerleşkesi', 'Merkez Yerleşkesi')
    .trim();
}

function normalizeHtml(value) {
  const normalized = value
    .replaceAll('\r\n', '\n')
    .replaceAll('\u00a0', ' ')
    // Adres düzeltmesi: Tınaztepe Yerleşkesi → Merkez Yerleşkesi
    .replaceAll('Tınaztepe Yerleşkesi', 'Merkez Yerleşkesi')
    .replaceAll('Tinaztepe Yerleşkesi', 'Merkez Yerleşkesi')
    .replace(/<p><strong>(\d+\.[^<]+)<\/strong><\/p>/g, '<h2>$1</h2>')
    .replace(/<p><strong>([A-Z][A-Z0-9\s&().,-]{3,})<\/strong><\/p>/g, '<h3>$1</h3>')
    .trim();

  const dateMatches = normalized.match(/\b\d{1,2}\.\d{1,2}\.\d{4}\b/g) || [];
  const inferredDate = dateMatches[dateMatches.length - 1] || null;

  if (!inferredDate) {
    return normalized
      .replaceAll('.../.../......', '22/06/2022')
      .replace(
        /Data intrării în vigoare:\s*(?:\d{1,2}[./-]\d{1,2}[./-]\d{2,4}|\.\.\.\/\.\.\.\/\.\.\.\.\.\.)/g,
        'Data intrării în vigoare: 22/06/2022',
      );
  }

  const withInferredDate = normalized.replaceAll('.../.../......', inferredDate);

  return withInferredDate.replace(
    /Data intrării în vigoare:\s*(?:\d{1,2}[./-]\d{1,2}[./-]\d{2,4}|\.\.\.\/\.\.\.\/\.\.\.\.\.\.)/g,
    'Data intrării în vigoare: 22/06/2022',
  );
}

export function splitPolicyBlocks(text) {
  return text
    .split(/\n\s*\n/g)
    .map((block) => block.trim())
    .filter(Boolean);
}

export async function loadPolicyText(type, locale) {
  const normalizedLocale = normalizeLocale(locale);
  const fileName = FILE_MAP[type]?.[normalizedLocale];

  if (!fileName) {
    throw new Error(`Unsupported policy type: ${type}`);
  }

  const key = `${type}:${normalizedLocale}`;
  if (cache.has(key)) {
    return cache.get(key);
  }

  const filePath = path.join(DOC_ROOT, fileName);
  const result = await mammoth.extractRawText({ path: filePath });
  const content = normalizeText(result.value || '');

  cache.set(key, content);
  return content;
}

export async function loadPolicyHtml(type, locale) {
  const normalizedLocale = normalizeLocale(locale);
  const fileName = FILE_MAP[type]?.[normalizedLocale];

  if (!fileName) {
    throw new Error(`Unsupported policy type: ${type}`);
  }

  const key = `${type}:${normalizedLocale}:html`;
  if (cache.has(key)) {
    const cachedValue = cache.get(key);
    const normalizedCachedValue = normalizeHtml(cachedValue || '');

    if (normalizedCachedValue !== cachedValue) {
      cache.set(key, normalizedCachedValue);
    }

    return normalizedCachedValue;
  }

  const filePath = path.join(DOC_ROOT, fileName);
  const result = await mammoth.convertToHtml({ path: filePath });
  const content = normalizeHtml(result.value || '');

  cache.set(key, content);
  return content;
}
