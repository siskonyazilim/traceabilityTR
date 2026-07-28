import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();

const targetFiles = [
  'data/blogPosts.js',
  'data/partners.js',
  'data/references.js',
  'data/solutions.js',
];

const localeJsonGlobs = [
  'data/i18n/blog/tr.json',
  'data/i18n/blog/en.json',
  'data/i18n/blog/ro.json',
  'data/i18n/references/tr/*.json',
  'data/i18n/references/en/*.json',
  'data/i18n/references/ro/*.json',
];

const forbiddenSnippetChecks = [
  {
    id: 'css-anchor-block',
    pattern: /\ba\s*\{\s*text-decoration\s*:\s*none\s*;/gi,
    message: 'Unexpected CSS block copied into data file.',
  },
  {
    id: 'css-table-block',
    pattern: /\btr\s+th\s*,\s*tr\s+td\s*\{\s*border\s*:/gi,
    message: 'Unexpected table CSS block copied into data file.',
  },
  {
    id: 'feedback-marker',
    pattern: /Provide your feedback on BizChat/gi,
    message: 'Unexpected feedback marker text found in data file.',
  },
];

const allowedReferenceSectors = new Set([
  'Industria auto',
  'Electronice',
  'Alimente',
  'Tutun',
  'Logistica',
  'Logistica interna',
  'Logistica internă',
]);

const englishSectorValues = new Set([
  'Automotive',
  'Electronics',
  'Food',
  'Food & Beverage',
  'Tobacco',
  'Logistics',
]);

const englishSignalWords = [
  'traceability',
  'tracking',
  'quality',
  'process',
  'project',
  'coating',
  'oven',
  'complete',
  'operations',
  'control',
  'batch',
  'basket',
];

const turkishSignalWords = [
  ' ve ',
  ' ile ',
  ' için ',
  ' ürün',
  ' süreç',
  ' izlenebilirlik',
  ' kalite',
  ' üretim',
  ' hatt',
  ' fırın',
  ' kaplama',
  ' otomotiv',
];

const romanianSignalWords = [
  ' si ',
  ' cu ',
  ' pentru ',
  ' proiect',
  ' trasabilitate',
  ' produs',
  ' proces',
  ' urmar',
  ' integr',
  ' calitate',
];

const localeRules = {
  tr: {
    own: turkishSignalWords,
    foreignA: englishSignalWords,
    foreignALabel: 'en',
    foreignB: romanianSignalWords,
    foreignBLabel: 'ro',
  },
  en: {
    own: englishSignalWords,
    foreignA: turkishSignalWords,
    foreignALabel: 'tr',
    foreignB: romanianSignalWords,
    foreignBLabel: 'ro',
  },
  ro: {
    own: romanianSignalWords,
    foreignA: englishSignalWords,
    foreignALabel: 'en',
    foreignB: turkishSignalWords,
    foreignBLabel: 'tr',
  },
};

function resolveLocaleFromPath(filePath) {
  const normalized = filePath.replace(/\\/g, '/');
  if (normalized.includes('/tr/') || normalized.endsWith('/tr.json')) return 'tr';
  if (normalized.includes('/en/') || normalized.endsWith('/en.json')) return 'en';
  if (normalized.includes('/ro/') || normalized.endsWith('/ro.json')) return 'ro';
  return null;
}

function listMatchingFiles(pattern) {
  const normalized = pattern.replace(/\\/g, '/');
  const starIdx = normalized.indexOf('*');

  if (starIdx === -1) {
    const abs = path.join(rootDir, normalized);
    return fs.existsSync(abs) ? [normalized] : [];
  }

  const dir = normalized.slice(0, starIdx).replace(/\/$/, '');
  const suffix = normalized.slice(starIdx + 1);
  const absDir = path.join(rootDir, dir);

  if (!fs.existsSync(absDir)) {
    return [];
  }

  return fs
    .readdirSync(absDir)
    .filter((name) => name.endsWith(suffix))
    .map((name) => `${dir}/${name}`);
}

function getLineNumber(source, index) {
  return source.slice(0, index).split('\n').length;
}

function collectRegexIssues(source, pattern, filePath, message) {
  const issues = [];
  let match;

  while ((match = pattern.exec(source)) !== null) {
    issues.push({
      filePath,
      line: getLineNumber(source, match.index),
      message,
      snippet: match[0].trim(),
    });

    if (match.index === pattern.lastIndex) {
      pattern.lastIndex += 1;
    }
  }

  pattern.lastIndex = 0;
  return issues;
}

function looksLikeEnglishLeak(text) {
  const normalized = ` ${String(text || '').toLowerCase()} `;

  // Romanian diacritics present -> likely Romanian content.
  if (/[ăâîșț]/i.test(normalized)) {
    return false;
  }

  const romanianHitCount = romanianSignalWords.reduce((acc, word) => {
    return acc + (normalized.includes(word) ? 1 : 0);
  }, 0);

  if (romanianHitCount >= 2) {
    return false;
  }

  const hitCount = englishSignalWords.reduce((acc, word) => {
    return acc + (normalized.includes(word) ? 1 : 0);
  }, 0);

  return hitCount >= 3;
}

function scoreMarkers(text, markers) {
  const normalized = ` ${String(text || '').toLowerCase()} `;
  return markers.reduce((acc, marker) => acc + (normalized.includes(marker) ? 1 : 0), 0);
}

function flattenStrings(value, out = []) {
  if (typeof value === 'string') {
    out.push(value);
    return out;
  }

  if (Array.isArray(value)) {
    value.forEach((item) => flattenStrings(item, out));
    return out;
  }

  if (value && typeof value === 'object') {
    Object.values(value).forEach((entry) => flattenStrings(entry, out));
  }

  return out;
}

function validateLocaleJsonFile(source, filePath) {
  const issues = [];
  const locale = resolveLocaleFromPath(filePath);

  if (!locale || !localeRules[locale]) {
    return issues;
  }

  let parsed;
  try {
    parsed = JSON.parse(source);
  } catch {
    issues.push({
      filePath,
      line: 1,
      message: 'Invalid JSON content in locale file.',
      snippet: filePath,
    });
    return issues;
  }

  const values = flattenStrings(parsed);
  const sampleLimit = 6;
  let sampleCount = 0;

  for (const value of values) {
    if (typeof value !== 'string') continue;
    const text = value.trim();
    if (text.length < 30) continue;

    const ownScore = scoreMarkers(text, localeRules[locale].own);
    const foreignAScore = scoreMarkers(text, localeRules[locale].foreignA);
    const foreignBScore = scoreMarkers(text, localeRules[locale].foreignB);

    const isForeignA = foreignAScore >= 3 && ownScore === 0 && foreignAScore > foreignBScore;
    const isForeignB = foreignBScore >= 3 && ownScore === 0 && foreignBScore > foreignAScore;

    if (!isForeignA && !isForeignB) {
      continue;
    }

    const foreignLabel = isForeignA ? localeRules[locale].foreignALabel : localeRules[locale].foreignBLabel;
    const preview = text.length > 160 ? `${text.slice(0, 160)}...` : text;

    issues.push({
      filePath,
      line: 1,
      message: `Possible ${foreignLabel.toUpperCase()} text leak in ${locale.toUpperCase()} locale file.`,
      snippet: preview,
    });

    sampleCount += 1;
    if (sampleCount >= sampleLimit) {
      break;
    }
  }

  return issues;
}

function validateReferencesFile(source, filePath) {
  const issues = [];

  const sectorRegex = /sector:\s*"([^"]*)"/g;
  let sectorMatch;
  while ((sectorMatch = sectorRegex.exec(source)) !== null) {
    const value = sectorMatch[1].trim();

    if (englishSectorValues.has(value)) {
      issues.push({
        filePath,
        line: getLineNumber(source, sectorMatch.index),
        message: `English sector value detected: "${value}". Use Romanian sector values.`,
        snippet: sectorMatch[0],
      });
      continue;
    }

    if (!allowedReferenceSectors.has(value)) {
      issues.push({
        filePath,
        line: getLineNumber(source, sectorMatch.index),
        message: `Unknown sector value: "${value}". Add a Romanian canonical value.`,
        snippet: sectorMatch[0],
      });
    }
  }
  sectorRegex.lastIndex = 0;

  const textFieldRegex = /(title|description):\s*"([^"]*)"/g;
  let textMatch;
  while ((textMatch = textFieldRegex.exec(source)) !== null) {
    const fieldName = textMatch[1];
    const value = textMatch[2];

    if (looksLikeEnglishLeak(value)) {
      issues.push({
        filePath,
        line: getLineNumber(source, textMatch.index),
        message: `Possible English text leak in references.js field "${fieldName}".`,
        snippet: `${fieldName}: "${value}"`,
      });
    }
  }
  textFieldRegex.lastIndex = 0;

  return issues;
}

function run() {
  const issues = [];

  for (const relativePath of targetFiles) {
    const absolutePath = path.join(rootDir, relativePath);

    if (!fs.existsSync(absolutePath)) {
      issues.push({
        filePath: relativePath,
        line: 1,
        message: 'Target file not found.',
        snippet: relativePath,
      });
      continue;
    }

    const source = fs.readFileSync(absolutePath, 'utf8');

    for (const rule of forbiddenSnippetChecks) {
      issues.push(...collectRegexIssues(source, rule.pattern, relativePath, rule.message));
    }

    if (relativePath === 'data/references.js') {
      issues.push(...validateReferencesFile(source, relativePath));
    }
  }

  const localeFiles = localeJsonGlobs.flatMap((pattern) => listMatchingFiles(pattern));
  for (const relativePath of localeFiles) {
    const absolutePath = path.join(rootDir, relativePath);
    const source = fs.readFileSync(absolutePath, 'utf8');

    for (const rule of forbiddenSnippetChecks) {
      issues.push(...collectRegexIssues(source, rule.pattern, relativePath, rule.message));
    }

    if (!relativePath.endsWith('/index.js')) {
      issues.push(...validateLocaleJsonFile(source, relativePath));
    }
  }

  if (issues.length > 0) {
    console.error(`i18n-lint failed with ${issues.length} issue(s):`);
    for (const issue of issues) {
      console.error(`- ${issue.filePath}:${issue.line} -> ${issue.message}`);
      console.error(`  ${issue.snippet}`);
    }
    process.exit(1);
  }

  console.log('i18n-lint passed: no language leak patterns found.');
}

run();
