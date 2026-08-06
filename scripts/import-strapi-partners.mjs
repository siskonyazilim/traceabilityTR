import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const DEFAULT_INPUT = path.join(ROOT, 'data', 'exports', 'strapi-partners-import.json');
const DEFAULT_CONTENT_TYPE = 'solution-partners';
const DEFAULT_LOCALE = 'tr';
const ENV_FILES = ['.env.local', '.env', '.env.production', '.env.development'];

function parseArgs(argv) {
  const options = {
    input: DEFAULT_INPUT,
    contentType: DEFAULT_CONTENT_TYPE,
    dryRun: false,
    skipExisting: true,
    blindCreate: false,
  };

  for (const arg of argv) {
    if (arg === '--dry-run') {
      options.dryRun = true;
      continue;
    }

    if (arg === '--no-skip-existing') {
      options.skipExisting = false;
      continue;
    }

    if (arg === '--blind-create') {
      options.blindCreate = true;
      continue;
    }

    if (arg.startsWith('--input=')) {
      const value = arg.slice('--input='.length).trim();
      if (value) {
        options.input = path.isAbsolute(value) ? value : path.join(ROOT, value);
      }
      continue;
    }

    if (arg.startsWith('--content-type=')) {
      const value = arg.slice('--content-type='.length).trim();
      if (value) {
        options.contentType = value;
      }
    }
  }

  return options;
}

function requireEnv(name) {
  const value = (process.env[name] || '').trim();
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

async function loadEnvFiles() {
  for (const fileName of ENV_FILES) {
    const filePath = path.join(ROOT, fileName);

    let content = '';
    try {
      content = await fs.readFile(filePath, 'utf8');
    } catch {
      continue;
    }

    for (const rawLine of content.split(/\r?\n/)) {
      const line = rawLine.trim();
      if (!line || line.startsWith('#')) continue;

      const match = line.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
      if (!match) continue;

      const key = match[1];
      let value = match[2] || '';

      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  }
}

function normalizeBaseUrl(url) {
  return url.replace(/\/+$/, '');
}

async function loadPayload(filePath) {
  const content = await fs.readFile(filePath, 'utf8');
  const parsed = JSON.parse(content);

  if (!parsed || !Array.isArray(parsed.partners)) {
    throw new Error('Input JSON must include a partners array');
  }

  return parsed;
}

function pickLocaleEntry(group, locale) {
  if (!group || !Array.isArray(group.locales)) {
    return null;
  }

  return group.locales.find((entry) => entry.locale === locale) || null;
}

function buildLocalizedPayload(localeEntry) {
  const data = localeEntry?.data || {};

  const payload = {
    name: data.name || '',
    slug: data.slug || '',
    description: data.description || '',
    summary: data.summary || '',
    fullDescription: data.fullDescription || '',
    website: data.website || '',
    breadcrumbLabel: data.breadcrumbLabel || '',
    sortOrder: Number.isFinite(Number(data.sortOrder)) ? Number(data.sortOrder) : 0,
    isFeatured: Boolean(data.isFeatured),
    contentBlocks: Array.isArray(data.contentBlocks) ? data.contentBlocks : [],
  };

  const logoPath = typeof data.logoPath === 'string' ? data.logoPath.trim() : '';
  const detailLogoPath = typeof data.detailLogoPath === 'string' ? data.detailLogoPath.trim() : '';

  if (logoPath) payload.logoPath = logoPath;
  if (detailLogoPath) payload.detailLogoPath = detailLogoPath;

  return payload;
}

function ensureJsonResponse(response, body, context = {}) {
  if (!response.ok) {
    const status = `${response.status} ${response.statusText}`;
    const ctx = [context.method, context.endpoint].filter(Boolean).join(' ');
    const ctxLabel = ctx ? ` [${ctx}]` : '';
    if (response.status === 403) {
      throw new Error(
        `Strapi request failed (${status})${ctxLabel}: ${body || '(empty body)'}\n` +
          'Permission fix: ensure STRAPI_API_TOKEN has create/find/findOne/update permissions for solution-partners (and locale write permissions if i18n is enabled).'
      );
    }

    throw new Error(`Strapi request failed (${status})${ctxLabel}: ${body || '(empty body)'}`);
  }

  if (!body) {
    return {};
  }

  try {
    return JSON.parse(body);
  } catch {
    return {};
  }
}

async function strapiRequest({ baseUrl, token, method, endpoint, data }) {
  const url = `${baseUrl}${endpoint}`;
  const response = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify({ data }) : undefined,
  });

  const body = await response.text();
  return ensureJsonResponse(response, body, { method, endpoint });
}

async function findBySlug({ baseUrl, token, contentType, slug, locale }) {
  if (!slug) return null;

  const query = new URLSearchParams();
  query.set('locale', locale);
  query.set('filters[slug][$eq]', slug);
  query.set('pagination[pageSize]', '1');

  const endpoint = `/api/${contentType}?${query.toString()}`;
  const result = await strapiRequest({
    baseUrl,
    token,
    method: 'GET',
    endpoint,
  });

  const data = Array.isArray(result?.data) ? result.data : [];
  return data[0] || null;
}

async function createLocaleEntry({
  baseUrl,
  token,
  contentType,
  payload,
  locale,
  documentId,
  dryRun,
}) {
  const endpoint = `/api/${contentType}`;
  const data = {
    ...payload,
    locale,
  };

  if (documentId) {
    data.documentId = documentId;
  }

  if (dryRun) {
    return {
      dryRun: true,
      locale,
      documentId: documentId || null,
      data,
    };
  }

  return strapiRequest({
    baseUrl,
    token,
    method: 'POST',
    endpoint,
    data,
  });
}

async function updateLocaleEntry({
  baseUrl,
  token,
  contentType,
  entryId,
  payload,
  locale,
  dryRun,
}) {
  const endpoint = `/api/${contentType}/${entryId}`;
  const data = {
    ...payload,
    locale,
  };

  if (dryRun) {
    return {
      dryRun: true,
      updated: true,
      locale,
      entryId,
      data,
    };
  }

  return strapiRequest({
    baseUrl,
    token,
    method: 'PUT',
    endpoint,
    data,
  });
}

function sortLocales(locales) {
  const first = [];
  const rest = [];

  for (const entry of locales) {
    if (entry.locale === DEFAULT_LOCALE) first.push(entry);
    else rest.push(entry);
  }

  return [...first, ...rest];
}

async function importGroup({
  baseUrl,
  token,
  contentType,
  group,
  dryRun,
  skipExisting,
  blindCreate,
}) {
  const locales = sortLocales(group.locales || []);
  if (locales.length === 0) {
    return { created: 0, skipped: 0, existing: 0, updated: 0 };
  }

  let anchorDocumentId = null;
  let created = 0;
  let skipped = 0;
  let existing = 0;
  let updated = 0;

  for (const localeEntry of locales) {
    const payload = buildLocalizedPayload(localeEntry);

    if (!payload.slug || !payload.name) {
      skipped += 1;
      continue;
    }

    if (!blindCreate) {
      const found = await findBySlug({
        baseUrl,
        token,
        contentType,
        slug: payload.slug,
        locale: localeEntry.locale,
      });

      if (found) {
        existing += 1;
        anchorDocumentId = anchorDocumentId || found.documentId || null;

        if (skipExisting) {
          continue;
        }

        await updateLocaleEntry({
          baseUrl,
          token,
          contentType,
          entryId: found.id,
          payload,
          locale: localeEntry.locale,
          dryRun,
        });
        updated += 1;
        continue;
      }
    }

    if (!blindCreate && skipExisting && !anchorDocumentId && localeEntry.locale !== DEFAULT_LOCALE) {
      const defaultEntry = pickLocaleEntry(group, DEFAULT_LOCALE);
      if (defaultEntry) {
        const defaultPayload = buildLocalizedPayload(defaultEntry);
        const defaultFound = await findBySlug({
          baseUrl,
          token,
          contentType,
          slug: defaultPayload.slug,
          locale: DEFAULT_LOCALE,
        });

        if (defaultFound?.documentId) {
          anchorDocumentId = defaultFound.documentId;
        }
      }
    }

    const createResult = await createLocaleEntry({
      baseUrl,
      token,
      contentType,
      payload,
      locale: localeEntry.locale,
      documentId: anchorDocumentId,
      dryRun,
    });

    if (!dryRun) {
      const createdDocId = createResult?.data?.documentId || null;
      anchorDocumentId = anchorDocumentId || createdDocId;
    }

    created += 1;
  }

  return { created, skipped, existing, updated };
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  await loadEnvFiles();
  const strapiUrl = normalizeBaseUrl(requireEnv('STRAPI_URL'));
  const strapiToken = requireEnv('STRAPI_API_TOKEN');

  const payload = await loadPayload(options.input);

  let totalCreated = 0;
  let totalSkipped = 0;
  let totalExisting = 0;
  let totalUpdated = 0;

  for (const group of payload.partners) {
    const result = await importGroup({
      baseUrl: strapiUrl,
      token: strapiToken,
      contentType: options.contentType,
      group,
      dryRun: options.dryRun,
      skipExisting: options.skipExisting,
      blindCreate: options.blindCreate,
    });

    totalCreated += result.created;
    totalSkipped += result.skipped;
    totalExisting += result.existing;
    totalUpdated += result.updated;
  }

  console.log(`Import finished for content type: ${options.contentType}`);
  console.log(`Dry run: ${options.dryRun ? 'yes' : 'no'}`);
  console.log(`Blind create: ${options.blindCreate ? 'yes' : 'no'}`);
  console.log(`Created entries: ${totalCreated}`);
  console.log(`Existing entries: ${totalExisting}`);
  console.log(`Updated entries: ${totalUpdated}`);
  console.log(`Skipped entries: ${totalSkipped}`);
}

main().catch((error) => {
  console.error('Import failed:', error.message);
  process.exit(1);
});
