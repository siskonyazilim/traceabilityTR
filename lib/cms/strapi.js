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
 * Strapi medya URL'sini tam, public-facing URL'ye çevirir.
 *
 * Desteklenen durumlar:
 *  - Göreli path:  /uploads/resim.webp  → https://traceabilitydb.../uploads/resim.webp
 *  - İç hostname:  http://strapi-xxx:1337/uploads/resim.webp → public URL
 *  - Zaten public: https://traceabilitydb.../uploads/resim.webp → değişmeden döner
 */
export function resolveStrapiMediaUrl(url) {
  if (!url) return '';

  // Medya base: YALNIZCA NEXT_PUBLIC_ değişkenleri — iç Docker hostname asla kullanılmaz.
  // STRAPI_URL sunucu-tarafı API erişimi için olup iç hostname olabilir, medyada kullanılmaz.
  const publicBase = (
    process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL ||
    process.env.NEXT_PUBLIC_STRAPI_URL ||
    ''   // hiçbiri set değilse boş — iç hostname giremez
  ).replace(/\/$/, '');

  if (url.startsWith('http')) {
    // Mutlak URL: host kısmını her zaman public base ile değiştir.
    // Strapi, kendi iç container adresini (http://strapi-xxx:1337) döndürebilir.
    try {
      const { pathname } = new URL(url);
      return `${publicBase}${pathname}`;
    } catch {
      return url;
    }
  }

  // Göreli path: /uploads/resim.webp
  return `${publicBase}${url}`;
}

/**
 * Temel Strapi fetch fonksiyonu.
 * @param {string} endpoint - /api/articles?populate=* gibi endpoint
 * @param {object} options - Ek fetch seçenekleri
 * @returns {Promise<object|null>} Strapi response.data
 */
export async function strapiQuery(endpoint, options = {}) {
  // Ön koşul 1: STRAPI_URL tanımlı olmalı
  if (!STRAPI_URL) {
    console.warn('[CMS] STRAPI_URL tanımlı değil → fallback');
    return null;
  }

  // Ön koşul 2: API Token tanımlı olmalı.
  // Token yoksa istek 401 Unauthorized döndürür — boşuna beklememek için
  // hemen null döndür ve fallback (JSON/DOCX) devreye girsin.
  if (!STRAPI_API_TOKEN) {
    console.warn('[CMS] STRAPI_API_TOKEN tanımlı değil → fallback');
    return null;
  }

  const url = `${STRAPI_URL}${endpoint}`;

  // Strapi yavaş veya erişilemez olduğunda Cloudflare gateway timeout'una (100s)
  // çarpmamak için 5 saniyelik hard timeout uyguluyoruz.
  // Timeout aşılırsa null döner ve fallback (JSON/DOCX) devreye girer.
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  try {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      },
      // ISR cache: Strapi verisi Next.js tarafından 1 saat cache'lenir.
      // 'no-store' yerine next.revalidate kullanmak sayfaların static/ISR
      // olarak render edilmesine izin verir ve Cloudflare gateway timeout'larını önler.
      next: { revalidate: 3600 },
      signal: controller.signal,
      ...options,
    });
    clearTimeout(timeoutId);

    if (!res.ok) {
      console.warn(`[CMS] Strapi yanıt hatası: ${res.status} ${res.statusText} — ${url}`);
      return null;
    }

    const json = await res.json();

    // Strapi'den boş veya anlamsız veri geldiyse direkt fallback'e düş.
    // İçerik eksik veriyle sayfa oluşturmak yerine JSON/DOCX kullanılır.
    const result = json?.data ?? json ?? null;
    if (!result || (typeof result === 'object' && Object.keys(result).length === 0)) {
      console.warn(`[CMS] Strapi boş veri döndürdü — ${url} → fallback`);
      return null;
    }

    return result;
  } catch (err) {
    clearTimeout(timeoutId);
    if (err?.name === 'AbortError') {
      console.warn(`[CMS] Strapi timeout (5s aşıldı) → fallback — ${url}`);
    } else {
      console.warn(`[CMS] Strapi bağlantı hatası → fallback (${url}):`, err?.message || err);
    }
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
