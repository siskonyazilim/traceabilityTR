import path from 'node:path';
import { readFileSync } from 'node:fs';
import mammoth from 'mammoth';

const DOC_ROOT      = path.join(process.cwd(), 'dokuman', 'dokuman');
const JSON_POLICY_DIR = path.join(process.cwd(), 'data', 'policy');

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

// In-memory cache: DOCX parse sonuçları için (JSON zaten dosya sistemi)
const docxCache = new Map();

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
    .replaceAll('Tınaztepe Yerleşkesi', 'Merkez Yerleşkesi')
    .replaceAll('Tinaztepe Yerleşkesi', 'Merkez Yerleşkesi')
    .trim();
}

function normalizeHtml(value) {
  const normalized = value
    .replaceAll('\r\n', '\n')
    .replaceAll('\u00a0', ' ')
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

/**
 * Önceden üretilmiş JSON dosyasını senkron okur (hızlı).
 * generate-policy-json.mjs scripti ile üretilir.
 *
 * @param {string} type   - 'privacy' | 'cookie'
 * @param {string} locale - 'tr' | 'en' | 'ro'
 * @returns {{ eyebrow, pageTitle, contentHtml } | null}
 */
function loadPolicyFromJson(type, locale) {
  try {
    const filePath = path.join(JSON_POLICY_DIR, `${type}-${locale}.json`);
    const raw = readFileSync(filePath, 'utf8');
    const parsed = JSON.parse(raw);
    if (!parsed?.contentHtml) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function splitPolicyBlocks(text) {
  return text
    .split(/\n\s*\n/g)
    .map((block) => block.trim())
    .filter(Boolean);
}

export async function loadPolicyText(type, locale) {
  const normalizedLocale = normalizeLocale(locale);

  // 1. JSON cache'e bak (anlık)
  const jsonData = loadPolicyFromJson(type, normalizedLocale);
  if (jsonData?.contentHtml) {
    // JSON'dan ham metin çıkar (HTML taglarını sil)
    return normalizeText(jsonData.contentHtml.replace(/<[^>]+>/g, ' '));
  }

  // 2. DOCX fallback (yavaş — sadece JSON yoksa)
  const fileName = FILE_MAP[type]?.[normalizedLocale];
  if (!fileName) throw new Error(`Unsupported policy type: ${type}`);

  const key = `${type}:${normalizedLocale}`;
  if (docxCache.has(key)) return docxCache.get(key);

  const filePath = path.join(DOC_ROOT, fileName);
  const result = await mammoth.extractRawText({ path: filePath });
  const content = normalizeText(result.value || '');

  docxCache.set(key, content);
  return content;
}

export async function loadPolicyHtml(type, locale) {
  const normalizedLocale = normalizeLocale(locale);

  // 1. Önceden üretilmiş JSON dosyasını oku (senkron, anlık) ✅
  const jsonData = loadPolicyFromJson(type, normalizedLocale);
  if (jsonData?.contentHtml) {
    return jsonData.contentHtml;
  }

  // 2. DOCX fallback (yavaş — sadece JSON yoksa)
  const fileName = FILE_MAP[type]?.[normalizedLocale];
  if (!fileName) throw new Error(`Unsupported policy type: ${type}`);

  const key = `${type}:${normalizedLocale}:html`;
  if (docxCache.has(key)) {
    return docxCache.get(key);
  }

  const filePath = path.join(DOC_ROOT, fileName);
  const result = await mammoth.convertToHtml({ path: filePath });
  const content = normalizeHtml(result.value || '');

  docxCache.set(key, content);
  return content;
}

