#!/usr/bin/env node
/**
 * generate-policy-json.mjs
 *
 * DOCX politika belgelerini okur, normalleştirir ve
 * data/policy/{type}-{locale}.json dosyalarına yazar.
 *
 * Kullanım:
 *   node scripts/generate-policy-json.mjs
 *
 * Çıktı dosyaları:
 *   data/policy/privacy-tr.json
 *   data/policy/privacy-en.json
 *   data/policy/privacy-ro.json
 *   data/policy/cookie-tr.json
 *   data/policy/cookie-en.json
 *   data/policy/cookie-ro.json
 *
 * JSON yapısı:
 *   {
 *     "eyebrow": "Hukuki",
 *     "pageTitle": "Çerez Politikası",
 *     "contentHtml": "<p>...</p>...",
 *     "generatedAt": "2026-09-03T16:00:00.000Z"
 *   }
 */

import mammoth from 'mammoth';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { writeFileSync, mkdirSync } from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT       = path.join(__dirname, '..');
const DOC_ROOT   = path.join(ROOT, 'dokuman', 'dokuman');
const OUTPUT_DIR = path.join(ROOT, 'data', 'policy');

// ── DOCX dosya eşlemesi ────────────────────────────────────────────────────
const FILE_MAP = {
  privacy: {
    tr: 'EYS-CONPTC-Aydınlatma Metni_v3.0.docx',
    en: 'EYS-CONPTC_EN_Privacy Notice_v3.0.docx',
    ro: 'EYS-CONPTC_RO-EN-Privacy Policy_v3.0_RO translation RO v2 SPT.docx',
  },
  cookie: {
    tr: 'EYS-PLC-Çerez Politikası_v2.0.docx',
    en: 'EYS-PLC_EN-Cookie Policy_v2.0.docx',
    ro: 'EYS-PLC_RO-EN-Cookie Policy_v2.0_translation RO vSPT.docx',
  },
};

// ── Sayfa meta verileri ────────────────────────────────────────────────────
const PAGE_META = {
  privacy: {
    tr: { eyebrow: 'Hukuki',  pageTitle: 'Gizlilik Politikası' },
    en: { eyebrow: 'Legal',   pageTitle: 'Privacy Policy' },
    ro: { eyebrow: 'Legal',   pageTitle: 'Politica de Confidentialitate' },
  },
  cookie: {
    tr: { eyebrow: 'Hukuki',  pageTitle: 'Çerez Politikası' },
    en: { eyebrow: 'Legal',   pageTitle: 'Cookie Policy' },
    ro: { eyebrow: 'Legal',   pageTitle: 'Politica de cookie-uri' },
  },
};

// ── Normalize (policyDocuments.js ile birebir aynı) ───────────────────────
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

// ── Ana işlem ─────────────────────────────────────────────────────────────
async function generateJson(policyType, locale) {
  const fileName = FILE_MAP[policyType][locale];
  const filePath = path.join(DOC_ROOT, fileName);
  const meta     = PAGE_META[policyType][locale];
  const outFile  = path.join(OUTPUT_DIR, `${policyType}-${locale}.json`);

  console.log(`  📄 ${fileName}`);

  const result      = await mammoth.convertToHtml({ path: filePath });
  const contentHtml = normalizeHtml(result.value || '');

  const payload = {
    eyebrow:     meta.eyebrow,
    pageTitle:   meta.pageTitle,
    contentHtml,
    generatedAt: new Date().toISOString(),
  };

  writeFileSync(outFile, JSON.stringify(payload, null, 2), 'utf8');
  console.log(`  ✅ → ${path.relative(ROOT, outFile)} (${Math.round(contentHtml.length / 1024)} KB HTML)`);
}

async function main() {
  console.log('\n╔══════════════════════════════════════════════════════════╗');
  console.log('║         Politika JSON Generate Scripti                   ║');
  console.log('╚══════════════════════════════════════════════════════════╝\n');

  mkdirSync(OUTPUT_DIR, { recursive: true });

  const tasks = [
    ['privacy', 'tr'], ['privacy', 'en'], ['privacy', 'ro'],
    ['cookie',  'tr'], ['cookie',  'en'], ['cookie',  'ro'],
  ];

  for (const [type, locale] of tasks) {
    console.log(`\n[${type.toUpperCase()} / ${locale.toUpperCase()}]`);
    try {
      await generateJson(type, locale);
    } catch (err) {
      console.error(`  ❌ HATA: ${err.message}`);
    }
  }

  console.log('\n╔══════════════════════════════════════════════════════════╗');
  console.log('║  ✅ JSON dosyaları oluşturuldu: data/policy/             ║');
  console.log('╚══════════════════════════════════════════════════════════╝\n');
}

main().catch((err) => {
  console.error('\n💥 Beklenmedik hata:', err);
  process.exit(1);
});
