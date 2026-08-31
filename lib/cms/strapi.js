/**
 * Strapi CMS base client
 * STRAPI_URL=https://traceabilitydb.domainmanager.com.tr
 *
 * Cache stratejisi: no-store
 * Her sayfa isteğinde Strapi'den anlık veri çekilir.
 * Strapi erişilemezse statik JSON dosyalarına (data/) otomatik fallback yapılır.
 */

const STRAPI_URL = process.env.STRAPI_URL || process.env.NEXT_PUBLIC_STRAPI_URL || '';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN || '';

/**
 * Strapi medya URL'sini tam URL'ye çevirir.
 * Strapi bazen göreli yol (/uploads/...) döndürür.
 */
export function resolveStrapiMediaUrl(url) {
  if (!url) return '';

  // Public media base — production'da NEXT_PUBLIC_STRAPI_MEDIA_URL tercih edilir
  // STRAPI_URL iç Docker hostname içerebilir (http://strapi-xxx:1337), NEXT_PUBLIC olan güvenli
  const publicBase = process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL || '';
  const internalBase = STRAPI_URL;

  // mediaBase'i belirle: public varsa onu kullan, yoksa internal (ve temizle)
  function getSafeBase(candidate) {
    if (!candidate) return '';
    try {
      const parsed = new URL(candidate);
      // Port 1337 = Strapi iç container → public URL'ye yönlendir
      if (parsed.port === '1337' && publicBase && publicBase !== candidate) {
        return publicBase.replace(/\/$/, '');
      }
    } catch {
      // URL değilse olduğu gibi kullan
    }
    return candidate.replace(/\/$/, '');
  }

  const mediaBase = getSafeBase(publicBase || internalBase);

  if (url.startsWith('http')) {
    // Strapi bazen iç container adresini döndürür:
    // http://strapi-xyz:1337/uploads/resim.webp
    // Bu adresi public media URL ile değiştiriyoruz.
    try {
      const parsed = new URL(url);
      // Eğer URL iç container hostname ise path'i al ve public base ekle
      const safeBase = getSafeBase(publicBase || internalBase);
      return `${safeBase}${parsed.pathname}`;
    } catch {
      return url;
    }
  }

  return `${mediaBase}${url}`;
}

/**
 * Temel Strapi fetch fonksiyonu.
 * @param {string} endpoint - /api/articles?populate=* gibi endpoint
 * @param {object} options - Ek fetch seçenekleri
 * @returns {Promise<object|null>} Strapi response.data
 */
export async function strapiQuery(endpoint, options = {}) {
  if (!STRAPI_URL) {
    console.warn('[CMS] STRAPI_URL tanımlı değil, statik veriler kullanılacak.');
    return null;
  }

  const url = `${STRAPI_URL}${endpoint}`;

  try {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...(STRAPI_API_TOKEN ? { Authorization: `Bearer ${STRAPI_API_TOKEN}` } : {}),
      },
      // Anlık veri: her request'te Strapi'den taze veri çekilir
      cache: 'no-store',
      ...options,
    });

    if (!res.ok) {
      console.warn(`[CMS] Strapi yanıt hatası: ${res.status} ${res.statusText} — ${url}`);
      return null;
    }

    const json = await res.json();
    return json?.data ?? json ?? null;
  } catch (err) {
    console.warn(`[CMS] Strapi bağlantı hatası (${url}):`, err?.message || err);
    return null;
  }
}

/**
 * Strapi v4/v5 uyumlu: attributes nesnesini düzleştirir.
 * Strapi v4: { id, attributes: { title, ... } }
 * Strapi v5: { id, title, ... } (attributes yok)
 */
export function flattenStrapiItem(item) {
  if (!item) return null;
  if (item.attributes) {
    return { id: item.id, ...item.attributes };
  }
  return item;
}

/**
 * Dizi halindeki Strapi response'u düzleştirir.
 */
export function flattenStrapiCollection(data) {
  if (!Array.isArray(data)) return [];
  return data.map(flattenStrapiItem).filter(Boolean);
}

/**
 * Strapi'ye POST/PUT isteği gönderir (form kaydetme, mutation).
 * @param {string} endpoint - /api/contact-submissions gibi
 * @param {object} body - { data: { ... } } formatında
 * @returns {Promise<object|null>}
 */
export async function strapiMutation(endpoint, body) {
  if (!STRAPI_URL) return null;

  const url = `${STRAPI_URL}${endpoint}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(STRAPI_API_TOKEN ? { Authorization: `Bearer ${STRAPI_API_TOKEN}` } : {}),
    },
    body: JSON.stringify(body),
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Strapi mutation hatası: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();
  return json?.data ?? json ?? null;
}
