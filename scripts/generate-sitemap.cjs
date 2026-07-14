const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const SITE = 'https://traceability.com.tr';
const TODAY = '2026-07-14';
const LOCALES = ['tr', 'en', 'ro'];

function read(filePath) {
  return fs.readFileSync(path.join(ROOT, filePath), 'utf8');
}

function extractSlugs(filePath) {
  const text = read(filePath);
  const regex = /slug:\s*["']([^"']+)["']/g;
  const slugs = [];
  let match = regex.exec(text);
  while (match) {
    const value = match[1];
    if (value && !value.startsWith('slug:')) {
      slugs.push(value);
    }
    match = regex.exec(text);
  }
  return slugs;
}

function withLocalePrefix(basePath, locale) {
  if (basePath === '/') {
    return `/${locale}`;
  }
  return `/${locale}${basePath}`;
}

function toUrlEntry(loc, priority = '0.8') {
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    `    <lastmod>${TODAY}</lastmod>`,
    '    <changefreq>weekly</changefreq>',
    `    <priority>${priority}</priority>`,
    '  </url>',
  ].join('\n');
}

function main() {
  const blogSlugs = extractSlugs('data/blogPosts.js');
  const solutionDataSlugs = extractSlugs('data/solutions.js');
  const referenceSlugs = extractSlugs('data/references.js');
  const partnerSlugs = extractSlugs('data/partners.js');

  const catalogSolutionSlugs = solutionDataSlugs.slice(0, 6);
  const catalogProductSlugs = solutionDataSlugs.slice(6);
  const solutionDetailSlugs = [
    'rfid-trasabilitate',
    'rtls-localizare',
    'wms-depozit',
    'poka-yoke',
    'image-processing',
    'integrare-sisteme',
  ];

  const basePaths = [
    '/',
    '/blog',
    '/contact',
    '/cookie',
    '/privacy',
    '/privacy-policy',
    '/proiecte-de-referinta',
    '/reference-projects',
    ...blogSlugs.map((slug) => `/blog/${slug}`),
    ...catalogSolutionSlugs.map((slug) => `/catalog/solutions/${slug}`),
    ...catalogProductSlugs.map((slug) => `/catalog/products/${slug}`),
    ...referenceSlugs.map((slug) => `/portfolio/${slug}`),
    ...partnerSlugs.map((slug) => `/solution-partners/${slug}`),
    ...solutionDetailSlugs.map((slug) => `/solutions/${slug}`),
  ];

  const allPaths = new Set();
  for (const p of basePaths) {
    allPaths.add(p);
    for (const locale of LOCALES) {
      allPaths.add(withLocalePrefix(p, locale));
    }
  }

  const sortedPaths = [...allPaths].sort((a, b) => a.localeCompare(b));

  const urls = sortedPaths.map((p) => {
    const isHome = p === '/' || p === '/tr' || p === '/en' || p === '/ro';
    const priority = isHome ? '1.0' : '0.8';
    return toUrlEntry(`${SITE}${p}`, priority);
  });

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n');

  fs.writeFileSync(path.join(ROOT, 'public/sitemap.xml'), xml, 'utf8');
  console.log(`sitemap generated: ${sortedPaths.length} urls`);
}

main();
