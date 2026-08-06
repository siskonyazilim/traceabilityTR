# Strapi Article Semasi ve Import Checklist

Tarih: 2026-08-04
Kapsam: Blog liste + blog detay + localized slug + dynamic zone govde icerigi

## 1) Hedef Mimari Ozeti
- Locale sistemi Next.js tarafinda mevcut haliyle korunur.
- Blog verisi yalnizca server tarafinda Strapi'den cekilir.
- Hero alanlari sabit field olarak tutulur: title, category, date, author, coverImage, excerpt.
- Govde icerigi Dynamic Zone olarak tutulur: blocks.*
- Legacy regex temizligi render pipeline'a alinmaz; import asamasinda bir kerelik uygulanir.

## 2) Strapi Collection Type: Article
Oneri: Collection Type adi Article, API UID: articles

### 2.1 Alanlar
- title
  - Type: Text (short string)
  - Required: Evet
  - Localized: Evet

- slug
  - Type: UID (target: title)
  - Required: Evet
  - Unique: Evet (locale bazinda)
  - Localized: Evet

- excerpt
  - Type: Text (long text)
  - Required: Evet
  - Localized: Evet

- content
  - Type: Rich Text veya Long Text
  - Required: Hayir (fallback icin)
  - Localized: Evet
  - Not: Dynamic Zone bos oldugunda fallback olarak kullanilir.

- category
  - Type: String
  - Required: Evet
  - Localized: Evet

- date
  - Type: Date
  - Required: Evet
  - Localized: Hayir

- author
  - Type: String
  - Required: Hayir
  - Default: Admin
  - Localized: Hayir

- coverImage
  - Type: Media (single)
  - Required: Hayir
  - Localized: Evet (istersen)

- image
  - Type: Media (single)
  - Required: Hayir
  - Localized: Evet (istersen)
  - Not: Kodda coverImage > image fallback var.

- visibleLocales
  - Type: JSON veya Enumeration list
  - Required: Hayir
  - Localized: Hayir
  - Not: Ileride locale gorunurluk kontrolu icin opsiyonel.

- blocks
  - Type: Dynamic Zone
  - Required: Hayir
  - Allowed components:
    - blocks.rich-text
    - blocks.media
    - blocks.quote
    - blocks.gallery
  - Localized: Evet

### 2.2 i18n Ayari
- Article collection icin localization acik olmali.
- Her locale kaydi kendi slug degerine sahip olmali.
- tr/en/ro kayitlari localizations baglantisi ile birbirine baglanmali.

## 3) Dynamic Zone Component Semalari

### 3.1 blocks.rich-text
- html (Long Text) veya content (Long Text)
- Render beklentisi:
  - html varsa onu kullanir
  - yoksa content kullanir

### 3.2 blocks.media
- url (String) veya media (Media single)
- alt (String, opsiyonel)
- caption (String, opsiyonel)

### 3.3 blocks.quote
- text (Long Text) veya quote (Long Text)
- author (String, opsiyonel)

### 3.4 blocks.gallery
- images (Media multiple veya object list)
  - url
  - alternativeText (opsiyonel)
  - caption (opsiyonel)

## 4) Kodla Eslesen Veri Beklentisi
Asagidaki dosyalar bu semayi bekler:
- lib/strapi/client.js
- lib/strapi/articles.js
- app/blog/page.js
- app/blog/BlogPageClient.js
- app/blog/[slug]/page.js

Eslesme notlari:
- Liste: getArticlesByLocale(locale, { limit })
- Detay: getArticleBySlug(locale, slug)
- Alternates: localizations + locale bazli slug map
- Govde render: blocks doluysa blocks, degilse content fallback

## 5) Import Oncesi Hazirlik Checklist
- Strapi projesinde Article collection olusturuldu.
- i18n aktif ve tr/en/ro locale'lari tanimli.
- Dynamic Zone component'lari tanimli.
- API token olusturuldu (read icin).
- Frontend env hazir:
  - STRAPI_URL
  - STRAPI_API_TOKEN
  - NEXT_PUBLIC_STRAPI_MEDIA_URL

## 6) Eski Veriden Strapi'ye Alan Esleme
Kaynak: data/blogPosts.js

- id -> import sirasi/metadata (Strapi kendi id uretecek)
- slug -> en baz kayit slug
- slugTr -> tr locale slug
- slugEn -> en locale slug
- slugRo -> ro locale slug
- title/titleTr/titleEn -> locale bazli title
- excerpt/excerptEn -> locale bazli excerpt
- category/categoryEn -> locale bazli category
- date -> date
- author -> author
- image/imageTr/imageEn/imageRo -> ilgili locale image veya coverImage
- content -> baslangicta blocks.rich-text olarak tasinabilir

## 7) Import Stratejisi (onerilen)
1. Base locale kaydini olustur (onerilen: tr veya mevcut editor dili).
2. Ayni makalenin en ve ro localizations kayitlarini olustur.
3. Her localization kaydina kendi slug degerini yaz.
4. Govdeyi ilk etapta tek block olarak tasi:
   - blocks = [{ __component: blocks.rich-text, html: content }]
5. Gorseli coverImage alanina bagla.
6. Publish et (publicationState live).

## 8) Legacy Icerik Temizligi (yalnizca import sirasinda)
- Inline img temizligi
- Bazi p/strong kaliplarini heading'e cevirme

Not:
- Bu adim frontend render katmanina tasinmamalidir.
- Temizligi import scriptinde bir kerelik uygulayip Strapi'ye temiz data yazmak hedeflenmelidir.

## 9) Test Checklist (Go-Live Oncesi)
- /blog sayfasi tr/en/ro dilinde dolu listeleniyor.
- /blog/[slug] her locale slug ile 200 donuyor.
- canonical ve hreflang alternates dogru sluglari gosteriyor.
- Prev/Next ayni locale icerisinde calisiyor.
- OnSuite CTA ve alt CTA sabit gorunuyor.
- JSON-LD title/excerpt/date alanlari Strapi verisi ile doluyor.
- Dynamic zone block tipleri (rich-text/media/quote/gallery) dogru render oluyor.
- Fallback: blocks yoksa content sanitize edilmis sekilde render oluyor.

## 10) Operasyon Notlari
- Strapi token server-side kullanilir, client'a expose edilmez.
- Kisa sureli cache/revalidate degerleri article servisinde tanimlidir.
- Medya alanlari mutlak URL ise frontend bunu destekler.

## 11) Hizli Baslangic Ornek Env
- STRAPI_URL=http://localhost:1337
- STRAPI_API_TOKEN=<token>
- NEXT_PUBLIC_STRAPI_MEDIA_URL=http://localhost:1337

## 12) Istege Bagli Sonraki Adimlar
- data/blogPosts.js -> Strapi import JSON donusturme scripti
- Slug cakisma kontrol scripti (locale bazli)
- Publish oncesi otomatik dogrulama scripti (zorunlu alan kontrolu)
