# Yeni Degisiklik Raporu

Tarih: 2026-07-06
Kapsam: Bu rapor, son talepler dogrultusunda yapilan kod degisikliklerinin dosya bazli dokumudur.

## 1) Footer e-posta guncellemesi

### Dosya
- components/layout/Footer.js

### Yapilanlar
- Dil bilgisi almak icin `useLanguage()` cagrisi `locale` de donecek sekilde guncellendi.
- `contactEmail` degiskeni eklendi:
  - `tr` icin: `info@izlenebilirlik.com.tr`
  - diger diller icin: `info@traceability.ro`
- Footer email baglantisi ve metni sabit deger yerine `contactEmail` ile dinamik hale getirildi.

### Cikarilan/Yerine Gecen
- Sabit `mailto:info@traceability.ro` kullanimi kaldirildi.

---

## 2) Blog detay onerileri siralama duzeltmesi

### Dosya
- app/blog/[slug]/page.js

### Yapilanlar
- Onerilen yazi listesi kategori icinde tarih + id sirasina gore hesaplanacak sekilde degistirildi.
- Mevcut yazinin listedeki pozisyonu bulunup, ondan sonraki yazilar one alinacak sekilde dongusel liste olusturuldu.
- Son olarak ilk 3 kayit oneride gosterilecek sekilde birakildi.

### Cikarilan/Yerine Gecen
- Eski `filter(...).slice(0, 3)` sabit yaklasimi kaldirildi.

---

## 3) Referans projeler icin merkezi siralama ve tarih katmani

### Dosya
- lib/referenceProjectOrdering.js (yeni)

### Yapilanlar
- `ORDERED_REFERENCE_SLUGS` eklendi (istenen ozel siralama).
- `REFERENCE_PROJECT_DATES` eklendi (slug -> tarih kodu + TR etiket).
- `sortReferenceProjects(projects)` fonksiyonu eklendi.
- `withReferenceProjectTimeline(projects, locale)` fonksiyonu eklendi.

### Not
- Bu dosya, proje listesinin hangi ekranda olursa olsun ayni sira ve tarih kuralini kullanmasi icin ortak katman olarak kullaniliyor.

---

## 4) Referans projeler liste sayfasi (proiecte-de-referinta)

### Dosya
- app/proiecte-de-referinta/ProjectsPageClient.js

### Yapilanlar
- Lokalize edilen proje listesi, yeni yardimci katmanla isleniyor:
  - once localize
  - sonra ozel siraya gore sort
  - sonra tarih etiketleri ekleme
- Kartlara giden veri artik `referenceDateLabel` da tasiyor.

---

## 5) Ana sayfa referans slider

### Dosya
- components/home/ReferenceProjects.js

### Yapilanlar
- Veri hazirlama akisi yeni merkezi katmana baglandi.
- Kart gorsellerinde tarih etiketi gosterimi eklendi (sol-alt rozet).

---

## 6) Referans proje karti tarih yerlesimi

### Dosya
- components/ui/ProjectCard.js

### Yapilanlar
- Tarih rozetinin gorsel uzerinden gosterimi kaldirildi.
- Kartin en alt satirinda, sag tarafa alinmis yeni yerlesim yapildi.
- `details` CTA alani ve tarih ayni satirda `justify-between` ile hizalandi.

---

## 7) Detail slider tarih davranisi

### Dosya
- components/ui/ProjectGallerySlider.js

### Yapilanlar
- `dateLabel` prop destegi eklendi.
- Tarih etiketi gorsel ustunden alinarak gorselin altinda sola alinacak sekilde duzenlendi.
- Gereksiz fragment kullanimi kaldirilarak lint uyumlulugu saglandi.

---

## 8) Referans detail sayfasi (portfolio/[slug])

### Dosya
- app/portfolio/[slug]/page.js

### Yapilanlar
- Proje verisi yeni merkezi siralama+tarih katmanindan geciriliyor.
- Tarih bilgisi, aciklama kutusunun sag-altina tasindi.
- Slider'a tarih gecisi kaldirildi (tarih artik aciklama kutusunda gosteriliyor).

---

## Ek Notlar

- Bu rapor sadece bu calismada tarafimdan yapilan degisiklikleri kapsar.
- Depoda baska dosyalarda da mevcut degisiklikler olabilir; bu raporda sadece bu is kapsamindaki degisiklikler listelenmistir.
