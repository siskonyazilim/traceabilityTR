# I18N Content QA Checklist

## Amaç
Bu checklist, dil/encoding kalite sorunlarını yayına çıkmadan yakalamak için kullanılır.

## 1. Zorunlu Otomatik Kontrol
1. `npm run lint:i18n` komutunu çalıştır.
2. Komut başarısızsa listedeki dosya/satırları düzeltmeden PR açma.

## 2. Encoding Kontrolü
1. Metinlerde `�`, `Ã`, `â€™`, `â€œ` gibi bozuk karakter dizileri olmamalı.
2. Türkçe, İngilizce ve Romence özel karakterler doğru görünmeli.
3. Kopyala-yapıştır sonrası dosya UTF-8 olarak kalmalı.

## 3. Dil Kalitesi Kontrolü
1. TR/EN/RO metinlerde terminoloji tutarlı olmalı.
2. Marka adları ve teknik terimler yanlış çevrilmemeli.
3. Cümleler hedef dilde doğal olmalı (makine çevirisi izleri bırakılmamalı).

## 4. UI Kontrolü
1. Uzun metinler kart/satır taşmasına sebep olmamalı.
2. Başlık ve CTA metinleri tüm dillerde tek satır/çok satır düzenini bozmamalı.
3. Ana sayfa, blog, referans ve detay sayfalarında içerik kırılımı test edilmeli.

## 5. Yayın Öncesi Son Kontrol
1. `/`, `/en`, `/ro` altında kritik sayfaları görsel olarak doğrula.
2. Metadata ve başlıklarda encoding bozulması olmadığını kontrol et.
3. Gerekirse içerik diff’ini native konuşan biriyle hızlı doğrula.
