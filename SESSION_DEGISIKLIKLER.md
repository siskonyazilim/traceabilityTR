# Oturum Değişiklikleri — 2026-07-23

Bu dokümanda oturum boyunca yapılan tüm değişiklikler detaylı biçimde açıklanmıştır.  
Aynı değişiklikleri başka bir projede uygulamak isteyen bir agent bu dosyayı referans alabilir.

---

## 1. `components/ui/BlogCard.js` — Blog Kartı Görsel İyileştirmeleri

### 1a. İçerik alanı padding'i artırıldı
**Eski:**
```jsx
<div className="flex flex-1 flex-col p-5 md:p-6 text-left">
```
**Yeni:**
```jsx
<div className="flex flex-1 flex-col px-6 md:px-8 py-6 md:py-7 text-center">
```
- `p-5 md:p-6` → `px-6 md:px-8 py-6 md:py-7` (yatay ve dikey padding artırıldı)
- `text-left` → `text-center` (başlık, tarih ve CTA ortalandı)

### 1b. Kategori badge konumu güncellendi
**Eski:**
```jsx
<span className="absolute top-3 left-3 ...">
```
**Yeni:**
```jsx
<span className="absolute top-4 left-5 ...">
```

### 1c. Başlık `line-clamp` genişletildi
**Eski:**
```jsx
<h3 className="... line-clamp-2 min-h-[3.5rem] ...">
```
**Yeni:**
```jsx
<h3 className="... line-clamp-3 min-h-[4.5rem] ...">
```
- Uzun başlıkların kesilmemesi için `line-clamp-2` → `line-clamp-3`, `min-h` de buna göre güncellendi.

### 1d. Açıklama metni hizalaması
**Yeni:**
```jsx
<p className="text-sm text-gray-text leading-6 mb-4 min-h-[4.5rem] text-justify px-7">
```
- `text-justify`: satır başı ve satır sonu hizalı (her iki tarafa yaslı)
- `px-7`: açıklamanın sağ ve soluna iç boşluk eklendi

### 1e. "Devamını oku" CTA ortalandı
**Eski:**
```jsx
<span className="card-cta-mini mt-auto inline-flex ...">
```
**Yeni:**
```jsx
<span className="card-cta-mini mt-auto mx-auto inline-flex ...">
```

---

## 2. `components/home/BlogPreview.js` — Ana Sayfa Blog Bölümü Genişliği

### 2a. Container max-width kaldırıldı
**Eski:**
```jsx
<Container size="xl" className="relative z-10 max-w-[1450px]">
```
**Yeni:**
```jsx
<Container size="xl" className="relative z-10">
```
- Stratejik Ortaklar bölümüyle aynı genişliğe getirildi (varsayılan `max-w-[1600px]`).

### 2b. Grid gap ve padding eşleştirildi
**Eski:**
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10 px-2 sm:px-4">
```
**Yeni:**
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
```
- `gap-8 md:gap-10` → `gap-6 md:gap-8` (StrategicPartners ile eşleşti)
- `px-2 sm:px-4` kaldırıldı

### 2c. CTA buton wrapper padding kaldırıldı
**Eski:**
```jsx
<div className="px-2 sm:px-4 py-2 text-center">
```
**Yeni:**
```jsx
<div className="py-2 text-center">
```

---

## 3. `app/blog/BlogPageClient.js` — Blog Listeleme Sayfası Genişliği

### 3a. Container max-width eklendi
```jsx
<Container size="xl" className="max-w-[1450px]">
```
- Blog sayfası kartları da aynı görsel genişlikte.

### 3b. Grid padding güncellendi
**Eski:**
```jsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12"
```
**Yeni:**
```jsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-2 sm:px-4 mb-12"
```

---

## 4. `data/blogPosts.js` — Blog Görseli Güncellendi

- **id: 7** ("İzlenebilirlik Sistemlerinin Faydaları Nelerdir?") görseli değiştirildi:
  - Eski: `what_is_traceability-1288x724-1-uai-516x344.webp`
  - Yeni: `volunteer-scanning-food-donations-charity.webp`

---

## 5. `app/proiecte-de-referinta/ProjectsPageClient.js` — Proje Sayfası Sektör Filtresi

### 5a. Eski sidebar tamamen kaldırıldı

Önceki versiyonda sektör filtrelemesi için renkli sidebar (masaüstü) + yatay kaydırmalı şerit (mobil) kullanılıyordu.  
Tüm `SECTOR_PALETTE`, `getSectorPalette`, `renderSectorButton`, `renderAllButton` fonksiyonları silindi.

### 5b. Yeni dropdown filtresi eklendi

- Başlık ortalı `<h1>` + alt başlık (`<p>`) bloku üstte sabit.
- Sol altta tek bir `<select>` dropdown ile sektör seçimi.
- Sayı yazısı ("41 proje" gibi) kaldırıldı.
- Seçenekler `sectors` useMemo ile locale alfabetik sırayla üretiliyor.
- Sektör seçildiğinde `filteredProjects` güncelleniyor, sayfa 1'e dönüyor.

**Yerleşim kodu:**
```jsx
{/* ── Centered title ── */}
<div className="text-center mb-10 md:mb-16">
  <h1 className="text-[clamp(1.375rem,1.1rem+0.9vw,2rem)] font-semibold tracking-tight leading-[1.15] text-primary-black mb-5">
    {t('projectsPage.sectionTitle', '...')}
  </h1>
  <p className="text-[clamp(1rem,0.97rem+0.22vw,1.125rem)] leading-7 text-gray-text max-w-3xl mx-auto">
    {t('projectsPage.sectionSubtitle', '...')}
  </p>
</div>

{/* ── Filter dropdown left ── */}
<div className="mb-8">
  <div className="relative inline-block">
    <select
      value={selectedSector}
      onChange={(e) => handleSectorChange(e.target.value)}
      className="appearance-none pl-4 pr-10 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-primary-black font-medium shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue transition-colors min-w-[200px]"
    >
      <option value="">{allLabel}</option>
      {sectors.map((s) => (
        <option key={s} value={s}>{s}</option>
      ))}
    </select>
    {/* Chevron icon */}
    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </span>
  </div>
</div>

{/* ── Original 3-col grid ── */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-7">
  {currentProjects.map((project) => (
    <ProjectCard key={project.id} project={project} currentPage={currentPage} />
  ))}
</div>
```

---

## 6. i18n Çeviri Dosyaları — `filterAll` Anahtarı Eklendi

### `data/i18n/tr.json`
```json
"projectsPage": {
  "filterAll": "Tüm Sektörler",
  ...
}
```

### `data/i18n/en.json`
```json
"projectsPage": {
  "filterAll": "All Sectors",
  ...
}
```

### `data/i18n/ro.json`
```json
"projectsPage": {
  "filterAll": "Toate Sectoarele",
  ...
}
```

---

## Özet Tablo

| Dosya | Değişiklik |
|---|---|
| `components/ui/BlogCard.js` | Padding artırıldı, içerik ortalandı, açıklama justify+px, line-clamp-3 |
| `components/home/BlogPreview.js` | max-w kaldırıldı, gap azaltıldı, px padding kaldırıldı |
| `app/blog/BlogPageClient.js` | max-w-[1450px] eklendi, grid padding güncellendi |
| `data/blogPosts.js` | id:7 görseli değiştirildi |
| `app/proiecte-de-referinta/ProjectsPageClient.js` | Sidebar kaldırıldı, dropdown filtresi eklendi, sayı yazısı kaldırıldı |
| `data/i18n/tr.json` | `filterAll: "Tüm Sektörler"` eklendi |
| `data/i18n/en.json` | `filterAll: "All Sectors"` eklendi |
| `data/i18n/ro.json` | `filterAll: "Toate Sectoarele"` eklendi |
