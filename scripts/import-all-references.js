const fs = require('fs');
const path = require('path');
const { referenceProjects } = require('../data/references.js');

const STRAPI_URL = 'https://traceabilitydb.domainmanager.com.tr';
const STRAPI_API_TOKEN = 'c8887fbe915db866c9fdc85d73fcdb431b0a285f6a8dda1e4848a4c2893163d7325b4e00cd0cab7c672a078795a17e31a967c8e4cc2f30755ea19e08accf8f6fc2909b9ba278ca2d17ac09d716cd4a0e8e2e4c2f021d754550fc551bcf2991f60de4c09deafef9818f270576bcc397902e591eb77755f0f2df72a4a404d573b2';

// Parse ordering & date helpers
const orderingSource = fs.readFileSync(path.join(__dirname, '../lib/referenceProjectOrdering.js'), 'utf8');
const titlesMatch = orderingSource.match(/const REFERENCE_PROJECT_TITLE_OVERRIDES_TR = \{([\s\S]*?)\};/);
const datesMatch = orderingSource.match(/const REFERENCE_PROJECT_DATES = \{([\s\S]*?)\};/);
const orderedSlugsMatch = orderingSource.match(/const ORDERED_REFERENCE_SLUGS = \[([\s\S]*?)\];/);

const TR_TITLE_OVERRIDES = titlesMatch ? eval(`({${titlesMatch[1]}})` ) : {};
const PROJECT_DATES = datesMatch ? eval(`({${datesMatch[1]}})` ) : {};
const ORDERED_SLUGS = orderedSlugsMatch ? eval(`([${orderedSlugsMatch[1]}])` ) : [];

const trDir = path.join(__dirname, '../data/i18n/references/tr');
const enDir = path.join(__dirname, '../data/i18n/references/en');
const roDir = path.join(__dirname, '../data/i18n/references/ro');

const trJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/i18n/references/tr.json'), 'utf8') || '{}');
const enJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/i18n/references/en.json'), 'utf8') || '{}');
const roJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/i18n/references/ro.json'), 'utf8') || '{}');

function toTitleCase(value) {
  return String(value || '')
    .split(' ')
    .filter(Boolean)
    .map((word) => {
      const upper = word.toUpperCase();
      if (['RFID', 'OCR', 'MES', 'ERP', 'SCADA', 'PLC', 'OPC', 'UA', 'GS1', 'WMS', 'RTLS', 'PMI', 'BSH', 'SAP', 'PCB'].includes(upper)) {
        return upper;
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

function getEnglishTitleFromSlug(slug) {
  return toTitleCase(slug.replaceAll('-', ' '));
}

// Order projects
const sortedProjects = [...referenceProjects].sort((a, b) => {
  const indexA = ORDERED_SLUGS.indexOf(a.slug);
  const indexB = ORDERED_SLUGS.indexOf(b.slug);
  if (indexA !== -1 && indexB !== -1) return indexA - indexB;
  if (indexA !== -1) return -1;
  if (indexB !== -1) return 1;
  return a.id - b.id;
});

async function apiFetch(endpoint, method = 'GET', body = null) {
  const url = `${STRAPI_URL}${endpoint}`;
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  const res = await fetch(url, options);
  const json = await res.json().catch(() => null);
  return { status: res.status, data: json };
}

function safeStr(val, maxLen = 250) {
  if (!val) return '';
  const str = String(val).trim();
  if (str.length <= maxLen) return str;
  return str.substring(0, maxLen);
}

function buildProjectPayload(p, index, lang, langData, title, desc) {
  const year = PROJECT_DATES[p.slug]?.code || langData.year || '2023';
  const sector = langData.tagValue || p.sector || 'Genel';

  const metrics = {
    efficiency: safeStr(p.results?.efficiency || '35%', 50),
    defects: safeStr(p.results?.defects || '60%', 50),
    productivity: safeStr(p.results?.productivity || '40%', 50),
  };

  const heroSection = {
    heroTitleLine1: safeStr(langData.heroTitleLine1, 150),
    heroTitleLine2: safeStr(langData.heroTitleLine2, 150),
    heroSub: safeStr(langData.heroSub || desc, 250),
    locationValue: safeStr(langData.locationValue, 100),
    scopeVal: safeStr(langData.scopeVal, 100),
    tagValue: safeStr(langData.tagValue || sector, 100),
    year: safeStr(String(year), 20),
  };

  const contextSection = {
    contextEyebrow: safeStr(langData.contextEyebrow || (lang === 'en' ? 'Customer and Context' : lang === 'ro' ? 'Client și Context' : 'Müşteri ve Bağlam'), 100),
    contextTitle: safeStr(langData.contextTitle || title, 200),
    contextP1: safeStr(langData.contextP1, 250),
    contextP2: safeStr(langData.contextP2, 250),
  };

  const problemSection = {
    problemEyebrow: safeStr(langData.problemEyebrow || (lang === 'en' ? 'Needs / Challenge' : lang === 'ro' ? 'Nevoie / Problemă' : 'İhtiyaç / Problem'), 100),
    problemTitle: safeStr(langData.problemTitle, 200),
    problemLede: safeStr(langData.problemLede, 250),
    problemList: (langData.problemList || []).map((item) => ({
      bold: safeStr(item.bold, 150),
      text: safeStr(item.text, 250),
    })),
  };

  const solutionSection = {
    solutionEyebrow: safeStr(langData.solutionEyebrow || (lang === 'en' ? 'Solution' : lang === 'ro' ? 'Soluție' : 'Çözüm'), 100),
    solutionTitle: safeStr(langData.solutionTitle, 200),
    solutionLede: safeStr(langData.solutionLede, 250),
    steps: (langData.steps || []).map((item) => ({
      no: safeStr(String(item.no || ''), 10),
      title: safeStr(item.title, 150),
      text: safeStr(item.text, 250),
    })),
  };

  const techSection = {
    techEyebrow: safeStr(langData.techEyebrow || (lang === 'en' ? 'Technologies & Equipment' : lang === 'ro' ? 'Tehnologie și Echipamente' : 'Kullanılan Teknoloji / Ekipman'), 100),
    techTitle: safeStr(langData.techTitle, 200),
    techGrid: (langData.techGrid || []).map((item) => ({
      tag: safeStr(item.tag, 50),
      title: safeStr(item.title, 150),
      text: safeStr(item.text, 250),
    })),
  };

  const integrationSection = {
    integrationEyebrow: safeStr(langData.integrationEyebrow || (lang === 'en' ? 'Integrations' : lang === 'ro' ? 'Integrări' : 'Entegrasyonlar'), 100),
    integrationTitle: safeStr(langData.integrationTitle, 200),
    integrationDesc: safeStr(langData.integrationDesc, 250),
    integrationList: (langData.integrationList || []).map((item) => ({
      bold: safeStr(item.bold, 150),
      text: safeStr(item.text, 250),
    })),
  };

  const resultsGridString = (langData.resultsGrid || [])
    .map((item) => item.title + (item.text ? ': ' + item.text : ''))
    .join(' | ')
    .substring(0, 245);

  const resultsSection = {
    resultsEyebrow: safeStr(langData.resultsEyebrow || (lang === 'en' ? 'Results & Impact' : lang === 'ro' ? 'Rezultate / Realizări' : 'Kazanımlar / Sonuçlar'), 100),
    resultsTitle: safeStr(langData.resultsTitle, 200),
    resultsGrid: resultsGridString || 'Tam İzlenebilirlik ve Operasyonel Verimlilik',
  };

  const ctaSection = {
    ctaTitle: safeStr(langData.ctaTitle, 200),
    ctaSubtitle: safeStr(langData.ctaSubtitle, 250),
    ctaPrimary: safeStr(langData.ctaPrimary || (lang === 'en' ? 'Get in Touch' : lang === 'ro' ? 'Contactează-ne' : 'İletişime Geç'), 50),
  };

  return {
    title,
    slug: p.slug,
    sector,
    description: desc,
    order: index + 1,
    year: String(year),
    featured: false,
    technologies: p.technologies || [],
    metrics,
    heroSection,
    contextSection,
    problemSection,
    solutionSection: [solutionSection],
    techSection,
    integrationSection,
    resultsSection,
    ctaSection,
  };
}

async function importAll() {
  console.log(`\n🚀 Toplam ${sortedProjects.length} referans projesi Strapi CMS'e aktarılıyor...\n`);

  const existingRes = await apiFetch('/api/reference-projects?pagination[pageSize]=100&locale=tr');
  const existingItems = existingRes.data?.data || [];
  const existingMap = new Map();
  existingItems.forEach((item) => {
    if (item.slug) existingMap.set(item.slug, item.documentId || item.id);
  });

  console.log(`📦 Strapi'de mevcut kayıt sayısı: ${existingItems.length}\n`);

  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < sortedProjects.length; i++) {
    const p = sortedProjects[i];
    const trData = JSON.parse(fs.readFileSync(path.join(trDir, p.slug + '.json'), 'utf8'));
    const enData = JSON.parse(fs.readFileSync(path.join(enDir, p.slug + '.json'), 'utf8'));
    const roData = JSON.parse(fs.readFileSync(path.join(roDir, p.slug + '.json'), 'utf8'));

    const titleTr = TR_TITLE_OVERRIDES[p.slug] || p.titleTr || trData.contextTitle || p.title;
    const titleEn = p.titleEn || getEnglishTitleFromSlug(p.slug);
    const titleRo = p.title;

    const descTr = (trJson[p.slug] && Array.isArray(trJson[p.slug]) ? trJson[p.slug].join(' ') : '') || trData.heroSub || trData.solutionLede || trData.contextP1 || p.description;
    const descEn = (enJson[p.slug] && Array.isArray(enJson[p.slug]) ? enJson[p.slug].join(' ') : '') || enData.heroSub || enData.solutionLede || enData.contextP1 || p.description;
    const descRo = (roJson[p.slug] && Array.isArray(roJson[p.slug]) ? roJson[p.slug].join(' ') : '') || roData.heroSub || roData.solutionLede || roData.contextP1 || p.description;

    const trPayload = buildProjectPayload(p, i, 'tr', trData, titleTr, descTr);
    const enPayload = buildProjectPayload(p, i, 'en', enData, titleEn, descEn);
    const roPayload = buildProjectPayload(p, i, 'ro', roData, titleRo, descRo);

    process.stdout.write(`[${i + 1}/${sortedProjects.length}] ${p.slug} aktarılıyor... `);

    try {
      let docId = existingMap.get(p.slug);

      if (docId) {
        // Update TR
        await apiFetch(`/api/reference-projects/${docId}?locale=tr`, 'PUT', { data: trPayload });
      } else {
        // Create TR
        const createRes = await apiFetch('/api/reference-projects', 'POST', {
          data: { ...trPayload, locale: 'tr' },
        });
        if (createRes.status !== 201 && createRes.status !== 200) {
          throw new Error(`TR oluşturma hatası (${createRes.status}): ` + JSON.stringify(createRes.data?.error || createRes.data));
        }
        docId = createRes.data?.data?.documentId || createRes.data?.data?.id;
        existingMap.set(p.slug, docId);
      }

      // Add/Update EN localization
      const enRes = await apiFetch(`/api/reference-projects/${docId}?locale=en`, 'PUT', {
        data: enPayload,
      });
      if (enRes.status !== 200 && enRes.status !== 201) {
        console.warn(`\n  ⚠️ EN dil uyarısı (${enRes.status}):`, enRes.data?.error?.message || '');
      }

      // Add/Update RO localization
      const roRes = await apiFetch(`/api/reference-projects/${docId}?locale=ro`, 'PUT', {
        data: roPayload,
      });
      if (roRes.status !== 200 && roRes.status !== 201) {
        console.warn(`\n  ⚠️ RO dil uyarısı (${roRes.status}):`, roRes.data?.error?.message || '');
      }

      console.log('✅ TAMAMLANDI (TR, EN, RO)');
      successCount++;
    } catch (err) {
      console.log(`❌ HATA: ${err.message}`);
      errorCount++;
    }
  }

  console.log(`\n🎉 Aktarım Sonu Raporu:`);
  console.log(`✅ Başarılı: ${successCount} proje`);
  if (errorCount > 0) console.log(`❌ Hatalı: ${errorCount} proje`);
}

importAll().catch(console.error);
