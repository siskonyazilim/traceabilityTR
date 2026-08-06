# Strapi Blog Gecis Raporu

Tarih: 2026-08-04

## 1) Mevcut yapi analizi (tespit)
- Blog liste akisi daha once client tarafinda `data/blogPosts.js` import edilip localize edilerek calisiyordu.
- Blog detay akisi `slug` esleme + statik blog verisi ile calisiyordu.
- Locale altyapisi (projenin mevcut custom i18n/routing yapisi) korunmustur.
- Detay sayfada legacy HTML temizligi icin regex tabanli donusumler vardi.

## 2) Yeni Strapi altyapisi eklendi
- Ortak fetch wrapper eklendi: `lib/strapi/client.js`
  - `strapiFetch(path, options)`
  - `resolveStrapiMediaUrl(url)`
- Blog servis katmani eklendi: `lib/strapi/articles.js`
  - `getArticlesByLocale(locale, { limit })`
  - `getArticleBySlug(locale, slug)`
  - Strapi cevabini UI dostu `post` modeline normalize eder.
  - `slugByLocale` haritasi olusturur (localized slug alternates icin).
- Gelecek kullanim icin reference servis katmani eklendi: `lib/strapi/referenceProjects.js`
  - `getReferenceProjectsByLocale(locale, { limit })`
  - `getReferenceProjectBySlug(locale, slug)`

## 3) Blog liste server-side veri akisina tasindi
- Guncellenen dosya: `app/blog/page.js`
  - Statik `blogPosts` importu kaldirildi.
  - Veriler server tarafinda Strapi'den cekiliyor.
  - `BlogPageClient` artik `posts` prop'u aliyor.
  - Alternates cagrisi `getLanguageAlternates(pathname, locale)` olacak sekilde duzeltildi.
- Guncellenen dosya: `app/blog/BlogPageClient.js`
  - Client tarafinda veri import/localize kaldirildi.
  - Yalnizca gelen `posts` prop'u ile pagination/siralama yapiliyor.

## 4) Blog detay Strapi verisine tasindi
- Guncellenen dosya: `app/blog/[slug]/page.js`
  - Statik `blogPosts` ve coklu-slug resolver bagimliliklari kaldirildi.
  - `generateMetadata` locale + slug ile Strapi'den ilgili postu cekiyor.
  - Canonical/alternates localized slug map ile uretiliyor.
  - Prev/Next navigasyon veri kaynagi Strapi oldu.

## 5) Dynamic Zone karari uygulandi (govde odakli)
- Hero alanlari (baslik, kategori, tarih, kapak, yazar) template tarafinda sabit kaldi.
- Govde icerigi icin dynamic zone render helper eklendi:
  - `blocks.rich-text`
  - `blocks.media`
  - `blocks.quote`
  - `blocks.gallery`
- Dynamic zone bos ise fallback olarak `content` HTML sanitize edilip render edilir.

## 6) Legacy temizleme regex'leri tasinmadi
- Eski regex tabanli HTML donusumleri yeni pipeline'a alinmadi.
- Yeni yaklasim: Strapi'de temiz veri + render sirasinda guvenlik icin sanitize.

## 7) Sabit kalan kisimlar
- OnSuite Trace CTA blog detay template'inde sabit tutuldu.
- Alt CTA blog detay template'inde sabit tutuldu.
- JSON-LD uretilmeye devam ediyor; veri artik Strapi kaynagindan geliyor.

## 8) Env degiskenleri
- Guncellenen dosyalar:
  - `.env.example`
  - `.env.local`
- Eklenen degiskenler:
  - `STRAPI_URL`
  - `STRAPI_API_TOKEN`
  - `NEXT_PUBLIC_STRAPI_MEDIA_URL`

## 9) Notlar
- Liste/detay kart gorsellerinde mutlak URL durumlari icin `img` fallback eklendi; boylece Strapi medya hostu Next image remote ayari olmadan da render edilebilir.
- Bu gecisle client tarafinda tekrar locale-hesaplama yapan blog veri akisi kaldirildi; kaynak dogrudan server tarafinda Strapi oldu.
