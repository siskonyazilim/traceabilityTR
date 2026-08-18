const fs = require('fs');
const path = require('path');

const { referenceProjects } = require('../data/references.js');
const referenceOrdering = require('../lib/referenceProjectOrdering.js');

// Extract internal maps from lib/referenceProjectOrdering.js
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

// Order the reference projects according to ORDERED_SLUGS or natural order
const sortedProjects = [...referenceProjects].sort((a, b) => {
  const indexA = ORDERED_SLUGS.indexOf(a.slug);
  const indexB = ORDERED_SLUGS.indexOf(b.slug);
  if (indexA !== -1 && indexB !== -1) return indexA - indexB;
  if (indexA !== -1) return -1;
  if (indexB !== -1) return 1;
  return a.id - b.id;
});

let md = `# 📦 STRAPI CMS - TÜM REFERANS PROJELERİ İÇERİK AKTARIM DOKÜMANI

Bu doküman, Traceability web sitesinde yer alan **43 adet Referans Projesinin (Case Study)** Strapi CMS'e eksiksiz ve hatasız aktarılması için hazırlanmıştır.

---

## 🛠️ Strapi Şeması ve Yapılandırma Rehberi

### 1. Collection Type Bilgileri
- **Display Name:** Reference Project
- **API ID (Singular):** \`reference-project\`
- **API ID (Plural):** \`reference-projects\`
- **Internationalization (i18n):** **AKTİF** (\`tr\`, \`en\`, \`ro\` dilleri desteklenmektedir)

### 2. Alanlar (Fields) & Component Yapısı

#### A. Ana Tablo Alanları (Collection Root)
| Alan Adı (Field Name) | Tip (Type) | Açıklama / Not | i18n |
| :--- | :--- | :--- | :---: |
| \`title\` | Text (Short) | Projenin ana başlığı | ✅ |
| \`slug\` | UID (Target: title) | URL slug değeri (Örn: \`delphi-technologies\`) | ❌ / ✅ |
| \`sector\` | Text (Short) | Sektör adı (Örn: Otomotiv, Gıda, Beyaz Eşya) | ✅ |
| \`description\` | Text (Long) | Proje liste kartında görünen özet açıklama | ✅ |
| \`order\` | Number (Integer) | Listeleme sıralaması (Küçükten büyüğe) | ❌ |
| \`year\` / \`referenceDate\` | Text (Short) | Proje yılı (Örn: \`2023\`, \`2025\`) | ❌ |
| \`featured\` | Boolean | Öne çıkarılan proje mi? (\`true\` / \`false\`) | ❌ |
| \`technologies\` | JSON veya Text | Kullanılan teknolojiler listesi | ❌ |

#### B. Medya & Metrik Component'leri
| Component Alanı | Component Tipi | İçerdiği Alanlar |
| :--- | :--- | :--- |
| **\`mediaSide\`** *(veya \`media\`)* | Single Component (\`References.media\`) | \`logo\` *(Single)*, \`image\` *(Single)*, \`heroImage\` *(Single)*, \`gallery\` *(Multiple)* |
| **\`metrics\`** *(veya \`results\`)* | Single Component (\`Project.project-metrics\`) | \`efficiency\` *(Text)*, \`defects\` *(Text)*, \`productivity\` *(Text)* |

#### C. Detay Sayfası Bölüm Component'leri (\`Project\` Kategorisi)
| Bölüm Component Alanı | Component Tipi | İçerdiği Alanlar / Alt Componentler | i18n |
| :--- | :--- | :--- | :---: |
| **\`heroSection\`** | Single Component (\`Project.hero-section\`) | \`heroTitleLine1\`, \`heroTitleLine2\`, \`heroSub\`, \`locationValue\`, \`scopeVal\`, \`tagValue\`, \`year\` | ✅ |
| **\`contextSection\`** | Single Component (\`Project.context-section\`) | \`contextEyebrow\`, \`contextTitle\`, \`contextP1\`, \`contextP2\` | ✅ |
| **\`problemSection\`** | Single Component (\`Project.problem-section\`) | \`problemEyebrow\`, \`problemTitle\`, \`problemLede\`, **\`problemList\`** *(Repeatable \`Project.list-item\`)* | ✅ |
| **\`solutionSection\`** | Single Component (\`Project.solution-section\`) | \`solutionEyebrow\`, \`solutionTitle\`, \`solutionLede\`, **\`steps\`** *(Repeatable \`Project.step-item\`)* | ✅ |
| **\`techSection\`** | Single Component (\`Project.tech-section\`) | \`techEyebrow\`, \`techTitle\`, **\`techGrid\`** *(Repeatable \`Project.tech-item\`)* | ✅ |
| **\`integrationSection\`** | Single Component (\`Project.integration-section\`) | \`integrationEyebrow\`, \`integrationTitle\`, \`integrationDesc\`, **\`integrationList\`** *(Repeatable \`Project.integration-item\`)* | ✅ |
| **\`resultsSection\`** | Single Component (\`Project.results-section\`) | \`resultsEyebrow\`, \`resultsTitle\`, **\`resultsGrid\`** *(Repeatable \`Project.result-item\`)* | ✅ |
| **\`ctaSection\`** | Single Component (\`Project.cta-section\`) | \`ctaTitle\`, \`ctaSubtitle\`, \`ctaPrimary\` | ✅ |

---

## 📑 Referans Projeleri İndeksi (43 Proje)

| # | Slug | Başlık (TR) | Sektör (TR) | Yıl |
| :-: | :--- | :--- | :--- | :-: |
`;

sortedProjects.forEach((p, index) => {
  const trData = JSON.parse(fs.readFileSync(path.join(trDir, p.slug + '.json'), 'utf8'));
  const titleTr = TR_TITLE_OVERRIDES[p.slug] || p.titleTr || trData.contextTitle || p.title;
  const sectorTr = trData.tagValue || p.sector || 'Genel';
  const year = PROJECT_DATES[p.slug]?.code || trData.year || '2023';
  md += `| ${index + 1} | \`${p.slug}\` | ${titleTr} | ${sectorTr} | ${year} |\n`;
});

md += `\n---\n\n## 📂 PROJE DETAYLARI VE DİL BAZLI İÇERİKLER\n\n`;

sortedProjects.forEach((p, index) => {
  const trData = JSON.parse(fs.readFileSync(path.join(trDir, p.slug + '.json'), 'utf8'));
  const enData = JSON.parse(fs.readFileSync(path.join(enDir, p.slug + '.json'), 'utf8'));
  const roData = JSON.parse(fs.readFileSync(path.join(roDir, p.slug + '.json'), 'utf8'));

  const titleTr = TR_TITLE_OVERRIDES[p.slug] || p.titleTr || trData.contextTitle || p.title;
  const titleEn = p.titleEn || getEnglishTitleFromSlug(p.slug);
  const titleRo = p.title; // Default in data/references.js is Romanian

  const descTr = (trJson[p.slug] && Array.isArray(trJson[p.slug]) ? trJson[p.slug].join(' ') : '') || trData.heroSub || trData.solutionLede || trData.contextP1 || p.description;
  const descEn = (enJson[p.slug] && Array.isArray(enJson[p.slug]) ? enJson[p.slug].join(' ') : '') || enData.heroSub || enData.solutionLede || enData.contextP1 || p.description;
  const descRo = (roJson[p.slug] && Array.isArray(roJson[p.slug]) ? roJson[p.slug].join(' ') : '') || roData.heroSub || roData.solutionLede || roData.contextP1 || p.description;

  const year = PROJECT_DATES[p.slug]?.code || trData.year || '2023';
  const techList = p.technologies ? p.technologies.join(', ') : '';
  const eff = p.results?.efficiency || '35%';
  const def = p.results?.defects || '60%';
  const prod = p.results?.productivity || '40%';
  const galleryList = (p.gallery || []).join('\n  - ');

  md += `
---

### ${index + 1}. ${titleTr}
**Slug:** \`${p.slug}\` | **ID:** \`${p.id}\` | **Sıra (Order):** \`${index + 1}\` | **Yıl:** \`${year}\`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** \`${p.slug}\`
- **Sıralama (order):** \`${index + 1}\`
- **Yıl (year / referenceDate):** \`${year}\`
- **Öne Çıkarılan (featured):** \`false\`
- **Kullanılan Teknolojiler (technologies):** \`${techList}\`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** \`${eff}\`
  - **Hata Azalması (defects):** \`${def}\`
  - **Üretkenlik (productivity):** \`${prod}\`
- **Medya Dosyaları:**
  - **Logo:** \`${p.logo || ''}\`
  - **Ana Görsel (image):** \`${p.image || ''}\`
  - **Hero Görseli (heroImage):** \`${p.heroImage || p.image || ''}\`
  - **Galeri Görselleri (gallery):**
  - ${galleryList}

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (\`locale: "tr"\`)

- **Başlık (title):** ${titleTr}
- **Sektör (sector / tagValue):** ${trData.tagValue || 'Sanayi'}
- **Konum (locationValue):** ${trData.locationValue || ''}
- **Kapsam (scopeVal):** ${trData.scopeVal || ''}
- **Yıl (year):** ${trData.year || year}
- **Kısa Açıklama (description):** ${descTr}

##### Hero Bölümü (TR)
- **heroTitleLine1:** ${trData.heroTitleLine1 || ''}
- **heroTitleLine2:** ${trData.heroTitleLine2 || ''}
- **heroSub:** ${trData.heroSub || ''}

##### Bağlam (Context) (TR)
- **contextEyebrow:** ${trData.contextEyebrow || 'Müşteri ve Bağlam'}
- **contextTitle:** ${trData.contextTitle || ''}
- **contextP1:** ${trData.contextP1 || ''}
- **contextP2:** ${trData.contextP2 || ''}

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** ${trData.problemEyebrow || 'İhtiyaç / Problem'}
- **problemTitle:** ${trData.problemTitle || ''}
- **problemLede:** ${trData.problemLede || ''}
- **problemList:**
${(trData.problemList || []).map(item => `  - **bold:** "${item.bold}" | **text:** "${item.text}"`).join('\n')}

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** ${trData.solutionEyebrow || 'Çözüm'}
- **solutionTitle:** ${trData.solutionTitle || ''}
- **solutionLede:** ${trData.solutionLede || ''}
- **steps:**
${(trData.steps || []).map(item => `  - **no:** "${item.no}" | **title:** "${item.title}" | **text:** "${item.text}"`).join('\n')}

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** ${trData.techEyebrow || 'Kullanılan Teknoloji / Ekipman'}
- **techTitle:** ${trData.techTitle || ''}
- **techGrid:**
${(trData.techGrid || []).map(item => `  - **tag:** "${item.tag}" | **title:** "${item.title}" | **text:** "${item.text}"`).join('\n')}

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** ${trData.integrationEyebrow || 'Entegrasyonlar'}
- **integrationTitle:** ${trData.integrationTitle || ''}
- **integrationDesc:** ${trData.integrationDesc || ''}
- **integrationList:**
${(trData.integrationList || []).map(item => `  - **bold:** "${item.bold}" | **text:** "${item.text}"`).join('\n')}

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** ${trData.resultsEyebrow || 'Kazanımlar / Sonuçlar'}
- **resultsTitle:** ${trData.resultsTitle || ''}
- **resultsGrid:**
${(trData.resultsGrid || []).map(item => `  - **title:** "${item.title}" | **text:** "${item.text}"`).join('\n')}

##### Çağrı (CTA) (TR)
- **ctaTitle:** ${trData.ctaTitle || ''}
- **ctaSubtitle:** ${trData.ctaSubtitle || ''}
- **ctaPrimary:** ${trData.ctaPrimary || 'İletişime Geç'}

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (\`locale: "en"\`)

- **Title (title):** ${titleEn}
- **Sector (sector / tagValue):** ${enData.tagValue || 'Industry'}
- **Location (locationValue):** ${enData.locationValue || ''}
- **Scope (scopeVal):** ${enData.scopeVal || ''}
- **Year (year):** ${enData.year || year}
- **Short Description (description):** ${descEn}

##### Hero Section (EN)
- **heroTitleLine1:** ${enData.heroTitleLine1 || ''}
- **heroTitleLine2:** ${enData.heroTitleLine2 || ''}
- **heroSub:** ${enData.heroSub || ''}

##### Context (EN)
- **contextEyebrow:** ${enData.contextEyebrow || 'Customer and Context'}
- **contextTitle:** ${enData.contextTitle || ''}
- **contextP1:** ${enData.contextP1 || ''}
- **contextP2:** ${enData.contextP2 || ''}

##### Problem / Challenge (EN)
- **problemEyebrow:** ${enData.problemEyebrow || 'Needs / Challenge'}
- **problemTitle:** ${enData.problemTitle || ''}
- **problemLede:** ${enData.problemLede || ''}
- **problemList:**
${(enData.problemList || []).map(item => `  - **bold:** "${item.bold}" | **text:** "${item.text}"`).join('\n')}

##### Solution (EN)
- **solutionEyebrow:** ${enData.solutionEyebrow || 'Solution'}
- **solutionTitle:** ${enData.solutionTitle || ''}
- **solutionLede:** ${enData.solutionLede || ''}
- **steps:**
${(enData.steps || []).map(item => `  - **no:** "${item.no}" | **title:** "${item.title}" | **text:** "${item.text}"`).join('\n')}

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** ${enData.techEyebrow || 'Technologies & Equipment'}
- **techTitle:** ${enData.techTitle || ''}
- **techGrid:**
${(enData.techGrid || []).map(item => `  - **tag:** "${item.tag}" | **title:** "${item.title}" | **text:** "${item.text}"`).join('\n')}

##### Integrations (EN)
- **integrationEyebrow:** ${enData.integrationEyebrow || 'Integrations'}
- **integrationTitle:** ${enData.integrationTitle || ''}
- **integrationDesc:** ${enData.integrationDesc || ''}
- **integrationList:**
${(enData.integrationList || []).map(item => `  - **bold:** "${item.bold}" | **text:** "${item.text}"`).join('\n')}

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** ${enData.resultsEyebrow || 'Results & Impact'}
- **resultsTitle:** ${enData.resultsTitle || ''}
- **resultsGrid:**
${(enData.resultsGrid || []).map(item => `  - **title:** "${item.title}" | **text:** "${item.text}"`).join('\n')}

##### Call to Action (CTA) (EN)
- **ctaTitle:** ${enData.ctaTitle || ''}
- **ctaSubtitle:** ${enData.ctaSubtitle || ''}
- **ctaPrimary:** ${enData.ctaPrimary || 'Get in Touch'}

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (\`locale: "ro"\`)

- **Titlu (title):** ${titleRo}
- **Sector (sector / tagValue):** ${roData.tagValue || p.sector || ''}
- **Locație (locationValue):** ${roData.locationValue || ''}
- **Domeniu de Aplicare (scopeVal):** ${roData.scopeVal || ''}
- **An (year):** ${roData.year || year}
- **Descriere Scurtă (description):** ${descRo}

##### Secțiunea Hero (RO)
- **heroTitleLine1:** ${roData.heroTitleLine1 || ''}
- **heroTitleLine2:** ${roData.heroTitleLine2 || ''}
- **heroSub:** ${roData.heroSub || ''}

##### Context (RO)
- **contextEyebrow:** ${roData.contextEyebrow || 'Client și Context'}
- **contextTitle:** ${roData.contextTitle || ''}
- **contextP1:** ${roData.contextP1 || ''}
- **contextP2:** ${roData.contextP2 || ''}

##### Problemă / Provocare (RO)
- **problemEyebrow:** ${roData.problemEyebrow || 'Nevoie / Problemă'}
- **problemTitle:** ${roData.problemTitle || ''}
- **problemLede:** ${roData.problemLede || ''}
- **problemList:**
${(roData.problemList || []).map(item => `  - **bold:** "${item.bold}" | **text:** "${item.text}"`).join('\n')}

##### Soluție (RO)
- **solutionEyebrow:** ${roData.solutionEyebrow || 'Soluție'}
- **solutionTitle:** ${roData.solutionTitle || ''}
- **solutionLede:** ${roData.solutionLede || ''}
- **steps:**
${(roData.steps || []).map(item => `  - **no:** "${item.no}" | **title:** "${item.title}" | **text:** "${item.text}"`).join('\n')}

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** ${roData.techEyebrow || 'Tehnologie și Echipamente'}
- **techTitle:** ${roData.techTitle || ''}
- **techGrid:**
${(roData.techGrid || []).map(item => `  - **tag:** "${item.tag}" | **title:** "${item.title}" | **text:** "${item.text}"`).join('\n')}

##### Integrări (RO)
- **integrationEyebrow:** ${roData.integrationEyebrow || 'Integrări'}
- **integrationTitle:** ${roData.integrationTitle || ''}
- **integrationDesc:** ${roData.integrationDesc || ''}
- **integrationList:**
${(roData.integrationList || []).map(item => `  - **bold:** "${item.bold}" | **text:** "${item.text}"`).join('\n')}

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** ${roData.resultsEyebrow || 'Rezultate / Realizări'}
- **resultsTitle:** ${roData.resultsTitle || ''}
- **resultsGrid:**
${(roData.resultsGrid || []).map(item => `  - **title:** "${item.title}" | **text:** "${item.text}"`).join('\n')}

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** ${roData.ctaTitle || ''}
- **ctaSubtitle:** ${roData.ctaSubtitle || ''}
- **ctaPrimary:** ${roData.ctaPrimary || 'Contactează-ne'}

`;
});

const outputPath = path.join(__dirname, '../dokuman/STRAPI_REFERANS_PROJELERI.md');
fs.writeFileSync(outputPath, md, 'utf8');
console.log('Markdown successfully generated at:', outputPath);
