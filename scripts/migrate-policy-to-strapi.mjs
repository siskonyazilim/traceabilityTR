#!/usr/bin/env node
/**
 * migrate-policy-to-strapi.mjs
 *
 * DOCX politika belgelerini okur → Strapi Blocks formatına dönüştürür
 * → Strapi'ye PUT eder (privacy-policy ve cookie-policy için TR/EN/RO).
 *
 * Kullanım (Coolify terminali):
 *   node scripts/migrate-policy-to-strapi.mjs
 *
 * Gereksinimler:
 *   - node_modules/mammoth kurulu olmalı (npm install ile zaten mevcut)
 *   - STRAPI_URL ve STRAPI_API_TOKEN ortam değişkenleri set edilmiş olmalı
 *     (veya script içindeki sabit değerleri kullanır)
 */

import mammoth from 'mammoth';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

// ── Strapi bağlantı bilgileri ──────────────────────────────────────────────
// Coolify'da environment variable set edilmişse öncelik ona verilir.
const STRAPI_URL =
  process.env.STRAPI_URL ||
  'https://traceabilitydb.domainmanager.com.tr';

const STRAPI_API_TOKEN =
  process.env.STRAPI_API_TOKEN ||
  'c8887fbe915db866c9fdc85d73fcdb431b0a285f6a8dda1e4848a4c2893163d7325b4e00cd0cab7c672a078795a17e31a967c8e4cc2f30755ea19e08accf8f6fc2909b9ba278ca2d17ac09d716cd4a0e8e2e4c2f021d754550fc551bcf2991f60de4c09deafef9818f270576bcc397902e591eb77755f0f2df72a4a404d573b2';

// ── DOCX dosya eşlemesi ────────────────────────────────────────────────────
const DOC_ROOT = path.join(ROOT, 'dokuman', 'dokuman');

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

// ── Sayfa meta verileri (i18n JSON'lardan) ─────────────────────────────────
const PAGE_META = {
  privacy: {
    tr: { eyebrow: 'Hukuki', pageTitle: 'Gizlilik Politikası' },
    en: { eyebrow: 'Legal', pageTitle: 'Privacy Policy' },
    ro: { eyebrow: 'Legal', pageTitle: 'Politica de Confidentialitate' },
  },
  cookie: {
    tr: { eyebrow: 'Hukuki', pageTitle: 'Çerez Politikası' },
    en: { eyebrow: 'Legal', pageTitle: 'Cookie Policy' },
    ro: { eyebrow: 'Legal', pageTitle: 'Politica de cookie-uri' },
  },
};

// ── Strapi API endpoint'leri ───────────────────────────────────────────────
const STRAPI_ENDPOINTS = {
  privacy: '/api/privacy-policy',
  cookie: '/api/cookie-policy',
};

// ── HTML → Strapi Blocks dönüştürücü ──────────────────────────────────────

/**
 * Bir HTML string'ini basit Strapi Blocks dizisine dönüştürür.
 * mammoth tarafından üretilen HTML yapısını destekler.
 */
function htmlToBlocks(html) {
  const blocks = [];

  // Basit regex tabanlı HTML parser (mammoth çıktısı için yeterli)
  // Tüm etiketleri sırayla işle
  const tokenRegex = /<(\/?)(\w+)([^>]*)>|([^<]+)/g;
  let match;

  // State machine
  let currentTag = null;
  let currentText = '';
  let listItems = [];
  let inList = false;
  let listType = null;
  let inListItem = false;
  let listItemText = '';

  const flushParagraph = () => {
    const text = currentText.trim();
    if (!text) return;

    // Heading mi?
    if (currentTag && /^h[1-6]$/.test(currentTag)) {
      const level = parseInt(currentTag[1]);
      blocks.push({
        type: 'heading',
        level,
        children: parseInline(text),
      });
    } else {
      blocks.push({
        type: 'paragraph',
        children: parseInline(text),
      });
    }
    currentText = '';
    currentTag = null;
  };

  const flushList = () => {
    if (listItems.length === 0) return;
    blocks.push({
      type: 'list',
      format: listType === 'ol' ? 'ordered' : 'unordered',
      children: listItems.map((item) => ({
        type: 'list-item',
        children: parseInline(item),
      })),
    });
    listItems = [];
    inList = false;
    listType = null;
  };

  while ((match = tokenRegex.exec(html)) !== null) {
    const [, isClose, tag, , text] = match;

    if (text !== undefined) {
      // Metin düğümü
      if (inListItem) {
        listItemText += text;
      } else {
        currentText += text;
      }
      continue;
    }

    const tagLower = tag.toLowerCase();

    if (!isClose) {
      // Açılış etiketi
      if (/^h[1-6]$/.test(tagLower)) {
        flushParagraph();
        currentTag = tagLower;
      } else if (tagLower === 'p') {
        flushParagraph();
        currentTag = 'p';
      } else if (tagLower === 'ul' || tagLower === 'ol') {
        flushParagraph();
        inList = true;
        listType = tagLower;
      } else if (tagLower === 'li') {
        inListItem = true;
        listItemText = '';
      } else if (tagLower === 'br') {
        currentText += '\n';
      }
      // strong, em, a, u, s, code, b, i — parseInline halleder
    } else {
      // Kapanış etiketi
      if (/^h[1-6]$/.test(tagLower)) {
        flushParagraph();
      } else if (tagLower === 'p') {
        flushParagraph();
      } else if (tagLower === 'ul' || tagLower === 'ol') {
        flushList();
      } else if (tagLower === 'li') {
        listItems.push(listItemText.trim());
        inListItem = false;
        listItemText = '';
      }
    }
  }

  flushParagraph();
  if (listItems.length > 0) flushList();

  return blocks.filter((b) => {
    if (b.type === 'paragraph') {
      const hasContent = b.children.some((c) => c.text?.trim());
      return hasContent;
    }
    return true;
  });
}

/**
 * Inline HTML'i Strapi text node'larına dönüştürür.
 * <strong>, <em>, <u>, <s>, <code>, <a> desteklenir.
 */
function parseInline(html) {
  const nodes = [];
  const inlineRegex = /<(\/?)(\w+)(?:\s+href="([^"]*)")?[^>]*>|([^<]+)/g;
  let match;
  let currentNode = { text: '', bold: false, italic: false, underline: false, strikethrough: false, code: false };
  const stack = [];

  const pushCurrentNode = () => {
    if (!currentNode.text) return;
    const node = { type: 'text', text: currentNode.text };
    if (currentNode.bold) node.bold = true;
    if (currentNode.italic) node.italic = true;
    if (currentNode.underline) node.underline = true;
    if (currentNode.strikethrough) node.strikethrough = true;
    if (currentNode.code) node.code = true;
    nodes.push(node);
    currentNode = { ...currentNode, text: '' };
  };

  while ((match = inlineRegex.exec(html)) !== null) {
    const [, isClose, tag, href, text] = match;

    if (text !== undefined) {
      // HTML entity decode basit
      const decoded = text
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&nbsp;/g, ' ')
        .replace(/&#160;/g, ' ');
      currentNode.text += decoded;
      continue;
    }

    const tagLower = tag.toLowerCase();

    if (!isClose) {
      if (tagLower === 'strong' || tagLower === 'b') {
        pushCurrentNode();
        stack.push({ ...currentNode });
        currentNode = { ...currentNode, text: '', bold: true };
      } else if (tagLower === 'em' || tagLower === 'i') {
        pushCurrentNode();
        stack.push({ ...currentNode });
        currentNode = { ...currentNode, text: '', italic: true };
      } else if (tagLower === 'u') {
        pushCurrentNode();
        stack.push({ ...currentNode });
        currentNode = { ...currentNode, text: '', underline: true };
      } else if (tagLower === 's' || tagLower === 'del') {
        pushCurrentNode();
        stack.push({ ...currentNode });
        currentNode = { ...currentNode, text: '', strikethrough: true };
      } else if (tagLower === 'code') {
        pushCurrentNode();
        stack.push({ ...currentNode });
        currentNode = { ...currentNode, text: '', code: true };
      } else if (tagLower === 'a' && href) {
        pushCurrentNode();
        // Link node özel işlem gerektirir, basitçe metin olarak ekle
        // (Strapi link node: { type: 'link', url, children: [...] })
        // Şimdilik iç içe geçmiş durumu yönetmek için placeholder bırakıyoruz
        stack.push({ ...currentNode, _linkHref: href });
        currentNode = { ...currentNode, text: '' };
      }
    } else {
      pushCurrentNode();
      if (stack.length > 0) {
        const prev = stack.pop();
        if (prev._linkHref) {
          // Link node oluştur
          const linkText = nodes.splice(nodes.findLastIndex((n) => !n._isLinkPart) + 1).map((n) => ({ ...n }));
          nodes.push({
            type: 'link',
            url: prev._linkHref,
            children: linkText.length > 0 ? linkText : [{ type: 'text', text: '' }],
          });
          currentNode = { ...prev, text: '', _linkHref: undefined };
        } else {
          currentNode = { ...prev, text: '' };
        }
      }
    }
  }

  pushCurrentNode();

  if (nodes.length === 0) {
    nodes.push({ type: 'text', text: '' });
  }

  return nodes;
}

// ── Normalize fonksiyonları ────────────────────────────────────────────────

function normalizeHtml(html) {
  return html
    .replace(/\r\n/g, '\n')
    .replace(/\u00a0/g, ' ')
    .replace(/Tınaztepe Yerleşkesi/g, 'Merkez Yerleşkesi')
    .replace(/Tinaztepe Yerleşkesi/g, 'Merkez Yerleşkesi')
    .replace(/<p><strong>(\d+\.[^<]+)<\/strong><\/p>/g, '<h2>$1</h2>')
    .replace(/<p><strong>([A-Z][A-Z0-9\s&().,-]{3,})<\/strong><\/p>/g, '<h3>$1</h3>')
    .trim();
}

// ── DOCX → Strapi Blocks pipeline ─────────────────────────────────────────

async function docxToBlocks(filePath) {
  console.log(`  📄 Okuyor: ${path.basename(filePath)}`);
  const result = await mammoth.convertToHtml({ path: filePath });
  const html = normalizeHtml(result.value || '');
  const blocks = htmlToBlocks(html);
  console.log(`  ✓ ${blocks.length} blok oluşturuldu.`);
  return blocks;
}

// ── Strapi API yardımcıları ────────────────────────────────────────────────

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${STRAPI_API_TOKEN}`,
};

/**
 * Single Type'ı önce GET ile kontrol eder, ardından PUT ile günceller.
 * Strapi Single Type'lar için PUT /api/<endpoint>?locale=xx kullanılır.
 */
async function upsertSingleType(endpoint, locale, data) {
  const url = `${STRAPI_URL}${endpoint}?locale=${locale}`;

  // PUT ile güncelle (Single Type'ta her zaman PUT)
  const res = await fetch(url, {
    method: 'PUT',
    headers,
    body: JSON.stringify({ data }),
  });

  if (!res.ok) {
    const errBody = await res.text();
    throw new Error(`PUT ${url} → ${res.status}: ${errBody}`);
  }

  const json = await res.json();
  return json;
}

// ── Ana işlem ─────────────────────────────────────────────────────────────

async function migrate(policyType) {
  const endpoint = STRAPI_ENDPOINTS[policyType];
  const locales = ['tr', 'en', 'ro'];

  console.log(`\n${'═'.repeat(60)}`);
  console.log(`🚀 ${policyType.toUpperCase()} migrasyonu başlıyor...`);
  console.log(`${'═'.repeat(60)}`);

  for (const locale of locales) {
    console.log(`\n[${locale.toUpperCase()}] İşleniyor...`);

    const fileName = FILE_MAP[policyType][locale];
    const filePath = path.join(DOC_ROOT, fileName);

    try {
      const blocks = await docxToBlocks(filePath);
      const meta = PAGE_META[policyType][locale];

      const payload = {
        eyebrow: meta.eyebrow,
        pageTitle: meta.pageTitle,
        content: blocks,
        lastUpdated: new Date().toISOString().split('T')[0],
      };

      console.log(`  📤 Strapi'ye gönderiliyor: ${endpoint}?locale=${locale}`);
      await upsertSingleType(endpoint, locale, payload);
      console.log(`  ✅ [${locale.toUpperCase()}] başarıyla aktarıldı!`);
    } catch (err) {
      console.error(`  ❌ [${locale.toUpperCase()}] HATA:`, err.message);
    }
  }
}

// ── Entry point ───────────────────────────────────────────────────────────

async function main() {
  console.log('\n╔══════════════════════════════════════════════════════════╗');
  console.log('║     Politika Belgesi Strapi Migration Scripti            ║');
  console.log('╚══════════════════════════════════════════════════════════╝');
  console.log(`\nStrapi URL : ${STRAPI_URL}`);
  console.log(`Token      : ${STRAPI_API_TOKEN.slice(0, 16)}...`);

  await migrate('privacy');
  await migrate('cookie');

  console.log('\n╔══════════════════════════════════════════════════════════╗');
  console.log('║  ✅ Migrasyon tamamlandı!                                ║');
  console.log('║  Strapi admin panelinden içerikleri kontrol edin.        ║');
  console.log('╚══════════════════════════════════════════════════════════╝\n');
}

main().catch((err) => {
  console.error('\n💥 Beklenmedik hata:', err);
  process.exit(1);
});
