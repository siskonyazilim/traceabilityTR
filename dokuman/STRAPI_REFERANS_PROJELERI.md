# 📦 STRAPI CMS - TÜM REFERANS PROJELERİ İÇERİK AKTARIM DOKÜMANI

Bu doküman, Traceability web sitesinde yer alan **43 adet Referans Projesinin (Case Study)** Strapi CMS'e eksiksiz ve hatasız aktarılması için hazırlanmıştır.

---

## 🛠️ Strapi Şeması ve Yapılandırma Rehberi

### 1. Collection Type Bilgileri
- **Display Name:** Reference Project
- **API ID (Singular):** `reference-project`
- **API ID (Plural):** `reference-projects`
- **Internationalization (i18n):** **AKTİF** (`tr`, `en`, `ro` dilleri desteklenmektedir)

### 2. Alanlar (Fields) & Component Yapısı

#### A. Ana Tablo Alanları (Collection Root)
| Alan Adı (Field Name) | Tip (Type) | Açıklama / Not | i18n |
| :--- | :--- | :--- | :---: |
| `title` | Text (Short) | Projenin ana başlığı | ✅ |
| `slug` | UID (Target: title) | URL slug değeri (Örn: `delphi-technologies`) | ❌ / ✅ |
| `sector` | Text (Short) | Sektör adı (Örn: Otomotiv, Gıda, Beyaz Eşya) | ✅ |
| `description` | Text (Long) | Proje liste kartında görünen özet açıklama | ✅ |
| `order` | Number (Integer) | Listeleme sıralaması (Küçükten büyüğe) | ❌ |
| `year` / `referenceDate` | Text (Short) | Proje yılı (Örn: `2023`, `2025`) | ❌ |
| `featured` | Boolean | Öne çıkarılan proje mi? (`true` / `false`) | ❌ |
| `technologies` | JSON veya Text | Kullanılan teknolojiler listesi | ❌ |

#### B. Medya & Metrik Component'leri
| Component Alanı | Component Tipi | İçerdiği Alanlar |
| :--- | :--- | :--- |
| **`mediaSide`** *(veya `media`)* | Single Component (`References.media`) | `logo` *(Single)*, `image` *(Single)*, `heroImage` *(Single)*, `gallery` *(Multiple)* |
| **`metrics`** *(veya `results`)* | Single Component (`Project.project-metrics`) | `efficiency` *(Text)*, `defects` *(Text)*, `productivity` *(Text)* |

#### C. Detay Sayfası Bölüm Component'leri (`Project` Kategorisi)
| Bölüm Component Alanı | Component Tipi | İçerdiği Alanlar / Alt Componentler | i18n |
| :--- | :--- | :--- | :---: |
| **`heroSection`** | Single Component (`Project.hero-section`) | `heroTitleLine1`, `heroTitleLine2`, `heroSub`, `locationValue`, `scopeVal`, `tagValue`, `year` | ✅ |
| **`contextSection`** | Single Component (`Project.context-section`) | `contextEyebrow`, `contextTitle`, `contextP1`, `contextP2` | ✅ |
| **`problemSection`** | Single Component (`Project.problem-section`) | `problemEyebrow`, `problemTitle`, `problemLede`, **`problemList`** *(Repeatable `Project.list-item`)* | ✅ |
| **`solutionSection`** | Single Component (`Project.solution-section`) | `solutionEyebrow`, `solutionTitle`, `solutionLede`, **`steps`** *(Repeatable `Project.step-item`)* | ✅ |
| **`techSection`** | Single Component (`Project.tech-section`) | `techEyebrow`, `techTitle`, **`techGrid`** *(Repeatable `Project.tech-item`)* | ✅ |
| **`integrationSection`** | Single Component (`Project.integration-section`) | `integrationEyebrow`, `integrationTitle`, `integrationDesc`, **`integrationList`** *(Repeatable `Project.integration-item`)* | ✅ |
| **`resultsSection`** | Single Component (`Project.results-section`) | `resultsEyebrow`, `resultsTitle`, **`resultsGrid`** *(Repeatable `Project.result-item`)* | ✅ |
| **`ctaSection`** | Single Component (`Project.cta-section`) | `ctaTitle`, `ctaSubtitle`, `ctaPrimary` | ✅ |

---

## 📑 Referans Projeleri İndeksi (43 Proje)

| # | Slug | Başlık (TR) | Sektör (TR) | Yıl |
| :-: | :--- | :--- | :--- | :-: |
| 1 | `nuhun-ankara-carton-pallet-shipment-traceability` | Nuh'un Ankara - Koli ve Palet Sevkiyat İzlenebilirliği | Gıda & İçecek | 2025 |
| 2 | `abalioglu-yag-milk-powder-carton-pallet-traceability` | Abalıoğlu Yağ - Süt Tozu Koli-Palet İzlenebilirliği | Gıda & İçecek | 2025 |
| 3 | `turk-tuborg-keg-ocr-traceability` | Türk Tuborg - Fıçı OCR İzlenebilirliği | Gıda & İçecek | 2026 |
| 4 | `phinia-datamatrix-quality-grading-station` | Phinia - Datamatrix Kalite Derecelendirme İstasyonu | Otomotiv | 2023 |
| 5 | `phinia-electronic-board-assembly-traceability` | Phinia - Elektronik Kart Montaj İzlenebilirliği | Otomotiv | 2023 |
| 6 | `phinia-coating-line-traceability` | Phinia - Kaplama Hattı İzlenebilirlik | Otomotiv | 2023 |
| 7 | `phinia-oven-process-traceability` | Phinia - Fırın Prosesi İzlenebilirlik | Otomotiv | 2023 |
| 8 | `pmi-barcode-gate` | PMI - Barkod Gate | Tütün | 2023 |
| 9 | `phinia-laser-marking-machine-traceability-integration` | Phinia - Lazer Markalama Tezgahı ve İzlenebilirlik Entegrasyonu | Otomotiv | 2023 |
| 10 | `duru-bulgur-product-carton-pallet-traceability` | Duru Bulgur - Ürün - Koli - Palet İzlenebilirliği | Gıda & İçecek | 2023 |
| 11 | `bsh-carriers-traceability` | BSH - Braket İzlenebilirlik | Beyaz Eşya | 2023 |
| 12 | `turk-demir-dokum-rfid-gate-with-digital-kanban` | Türk Demir Döküm - RFID Gate ile Dijital Kanban | Beyaz Eşya | 2022 |
| 13 | `haier-europe-single-product-traceability-oven-assembly-line` | Haier Europe - Ocak Montaj Hattı Tekil Ürün İzlenebilirliği | Beyaz Eşya | 2022 |
| 14 | `bsh-assembly-line-traceability` | BSH - Montaj Hatları İzlenebilirlik | Beyaz Eşya | 2022 |
| 15 | `bsh-oven-door-traceability` | BSH - Fırın Kapı İzlenebilirlik | Beyaz Eşya | 2022 |
| 16 | `bsh-glass-shelf-tracking` | BSH - Cam Raf Takibi | Beyaz Eşya | 2022 |
| 17 | `ajinomoto-kemal-kukrer-blockchain-integrated-product-traceability` | Ajinomoto (Kemal Kükrer) - Blockchain Entegre Ürün İzlenebilirliği | Gıda & İçecek | 2022 |
| 18 | `whirlpool-sorting-barcode-control` | Whirlpool - Sorting Barkod Kontrol | Beyaz Eşya | 2021 |
| 19 | `vestel-automatic-labeling-verification` | Vestel - Otomatik Etiketleme ve Doğrulama | Beyaz Eşya | 2021 |
| 20 | `mey-diageo-tracking-and-localization-project` | Mey Diageo - Track&Trace Projesi | Gıda & İçecek | 2021 |
| 21 | `maxion-inci-celik-rfid-mold-tracking` | Maxion İnci Çelik - RFID Kalıp Takip | Otomotiv | 2021 |
| 22 | `bosch-trolley-tracking-rfid-gate` | Bosch - RFID Gate ile Kit Arabası İzlenebilirlik | Beyaz Eşya | 2021 |
| 23 | `borgwarner-laser-marking` | Borgwarner - Lazer Markalama | Otomotiv | 2021 |
| 24 | `orkide-quality-control-application` | ORKİDE - Kalite Kontrol Uygulaması | Gıda & İçecek | 2020 |
| 25 | `nemak-parts-traceability` | NEMAK - Parça İzlenebilirlik | Otomotiv | 2020 |
| 26 | `haier-europe-sorting-line-installation-traceability` | Haier Europe - Sorting Hattı ve İzlenebilirlik | Beyaz Eşya | 2020 |
| 27 | `haier-europe-assembly-line-installation-traceability` | Haier Europe - Montaj Hatları Kurulumu ve İzlenebilirlik | Beyaz Eşya | 2020 |
| 28 | `bomi-group-camera-based-multi-code-reading-system-tr` | Bomi Group - Kameralı Çoklu Kod Okuma Sistemi | Lojistik | 2020 |
| 29 | `pmi-palletizing-automation-automatic-labeling` | PMI - Paletleme Otomasyonu ve Otomatik Etiketleme | Tütün | 2019 |
| 30 | `pmi-embosser-rfid` | PMI - Embosser RFID Projesi | Tütün | 2018 |
| 31 | `groupe-atlantic-busbar-traceability` | Groupe Atlantic - Bara İzlenebilirlik | Beyaz Eşya | 2018 |
| 32 | `delphi-rfid-datamatrix-rail-assembly-integration` | Delphi Technologies - Ray Montaj RFID-Datamatrix Entegrasyonu | Otomotiv | 2018 |
| 33 | `delphi-cloud-traceability-data-integration` | Delphi Technologies - İzlenebilirlik Verileri Bulut Entegrasyonu | Otomotiv | 2018 |
| 34 | `candy-hoover-test-data-production-efficiency-tracking` | Candy Hoover - Test İstasyonları İzlenebilirlik | Beyaz Eşya | 2018 |
| 35 | `turk-tuborg-automatic-pallet-labeling-traceability` | Türk Tuborg - Otomatik Palet Etiketleme ve İzlenebilirlik | Gıda & İçecek | 2017 |
| 36 | `philsa-filter-tracking` | PMI - Filtre Takip RFID Projesi | Tütün | 2017 |
| 37 | `mey-icki-bandrol-control-system` | Mey Alkollü İçkiler - Bandrol Kamera Kontrol Sistemi | Gıda & İçecek | 2017 |
| 38 | `candy-hoover-test-data-cooker-lines-traceability` | Candy Hoover - Ocak Hatları Test Veri Toplama ve İzlenebilirlik | Beyaz Eşya | 2017 |
| 39 | `delphi-tool-tip-traceability` | Delphi Technologies - Takım Ucu İzlenebilirlik | Otomotiv | 2016 |
| 40 | `delphi-prototype-line-traceability` | Delphi Technologies - Prototip Hattı İzlenebilirlik | Otomotiv | 2016 |
| 41 | `delphi-technologies` | Delphi Technologies - Depo Yönetimi | Otomotiv | 2016 |
| 42 | `delphi-monitorizare-individuala-rampa-injectie` | Delphi Technologies - Ray Montaj Tekil Ürün İzleme | Otomotiv | 2015 |
| 43 | `stackpole-traceability` | Stackpole - İzlenebilirlik | Otomotiv | 2015 |

---

## 📂 PROJE DETAYLARI VE DİL BAZLI İÇERİKLER


---

### 1. Nuh'un Ankara - Koli ve Palet Sevkiyat İzlenebilirliği
**Slug:** `nuhun-ankara-carton-pallet-shipment-traceability` | **ID:** `47` | **Sıra (Order):** `1` | **Yıl:** `2025`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `nuhun-ankara-carton-pallet-shipment-traceability`
- **Sıralama (order):** `1`
- **Yıl (year / referenceDate):** `2025`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `Barcode, Hand Terminal, Netsis ERP`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/nuhun_ankara.svg`
  - **Ana Görsel (image):** `/images/companies/NuhunAnkara/factory.jpg`
  - **Hero Görseli (heroImage):** `/images/companies/NuhunAnkara/factory.jpg`
  - **Galeri Görselleri (gallery):**
  - 

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Nuh'un Ankara - Koli ve Palet Sevkiyat İzlenebilirliği
- **Sektör (sector / tagValue):** Gıda & İçecek
- **Konum (locationValue):** Ankara
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Ankara merkezli gıda üreticisi Nuh'un Ankara için koli, palet ve sevkiyat izlenebilirliğini sağlayan entegre bir çözüm geliştirdik. Proje kapsamında hangi kolinin hangi palete yerleştirildiği kayıt altına alınarak üretimden müşteriye kadar tüm hareketler dijital olarak takip edildi. Dış depolar arasındaki transferler ve müşteri sevkiyatları el terminali uygulaması üzerinden izlenebilir hale getirildi. Netsis ERP entegrasyonu sayesinde koli, palet, depo ve müşteri ilişkileri tek platformda yönetildi. Böylece uçtan uca izlenebilirlik sağlanırken sevkiyat doğruluğu artırıldı ve geri izleme süreçleri güçlendirildi.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Koli Palet Sevkiyat
- **heroTitleLine2:** İzlenebilirliği
- **heroSub:** Nuh'un Ankara'daki üretim tesisinde devreye alınan proje, koli ve palet bazında izlenebilirlik sağlayarak fabrika, dış depolar ve müşteriler arasındaki ürün hareketlerinin tek platformda anlık ve doğrulanabilir biçimde takip edilmesini sağlamaktadır.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Üretimden sevkiyata tam zincir görünürlüğü
- **contextP1:** Nuh'un Ankara'nın Ankara'daki fabrikası gıda üretimi yapmaktadır.
- **contextP2:** Proje, fabrikadaki üretim ve sevkiyat süreçlerinde koli ve palet bazında izlenebilirlik sağlamak; ayrıca dış depolar dahil olmak üzere ürünlerin lokasyonlar arası hareketini takip etmek amacıyla hayata geçirilmiştir.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Koli-palet ilişkilerinde manuel takip riski
- **problemLede:** Hangi kolinin hangi palete girdiğinin ve bu kolilerin/paletlerin fabrika ile dış depolar ve müşteriler arasındaki hareketinin izlenebilir olması gerekiyordu. Bu ilişkilerin ve dış depo transferlerinin manuel takibi hem izlenebilirlik boşluğu hem de hatalı sevkiyat ve geri izleme (recall) zorluğu riski taşıyordu.
- **problemList:**
  - **bold:** "İzlenebilirlik Boşluğu" | **text:** "Koli-palet ilişkilerinin manuel takibi, zincirde veri kaybı ve görünürlük eksikliği oluşturuyordu."
  - **bold:** "Sevkiyat ve Recall Riski" | **text:** "Dış depo transferlerinde yanlış eşleşme riski, hatalı sevkiyat ve geri izleme süreçlerini zorlaştırıyordu."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Koli - Palet - Depo - Müşteri akışının tek platformda yönetimi
- **solutionLede:** Koli-palet izlenebilirlik uygulaması, Nuh'un Ankara'nın Ankara fabrikasındaki üretim ve sevkiyat hatlarında hayata geçirildi. Koliler ve paletler için yapı kurularak hangi kolinin hangi palete yerleştirildiği kayıt altına alındı. Farklı konumlar arasındaki depo transferleri (dış depolar dahil) ve müşterilere yapılan transferler, el terminali uygulaması kullanılarak kaydedildi. Koli - Palet - Depo - Müşteri adımları tek bir platformda izlenebilir ve yönetilebilir hale getirildi.
- **steps:**
  - **no:** "01" | **title:** "Koli Tanımlama" | **text:** "Üretim hattında oluşan koliler sistem üzerinde tekil olarak tanımlanır."
  - **no:** "02" | **title:** "Palet Eşleştirme" | **text:** "Koliler ilgili paletlerle ilişkilendirilerek kayıt altına alınır."
  - **no:** "03" | **title:** "Transfer İşlemi" | **text:** "Depolar ve müşteriler arasındaki ürün hareketleri el terminali ile kaydedilir."
  - **no:** "04" | **title:** "İzleme ve Raporlama" | **text:** "Tüm hareketler OnSuite Trace üzerinden izlenir ve raporlanır."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** PLC, C# SCADA, barkod ve el terminali altyapısı
- **techGrid:**
  - **tag:** "OTOMASYON" | **title:** "PLC Yapısı" | **text:** "Saha otomasyonunu ve üretim-sevkiyat akışını yöneten PLC altyapısı."
  - **tag:** "YAZILIM" | **title:** "C# SCADA Uygulaması" | **text:** "Koli-palet akışını, transferleri ve süreç verilerini merkezi olarak yöneten SCADA yazılımı."
  - **tag:** "TANIMA" | **title:** "Barkod Okuyucular" | **text:** "Koli ve palet etiketlerini okuyarak ilişki doğrulamasını sağlayan otomatik tanıma altyapısı."
  - **tag:** "MOBİL" | **title:** "El Terminali Uygulaması" | **text:** "Dış depo ve müşteri transferlerinin sahada anlık kaydedilmesini sağlayan mobil uygulama."
  - **tag:** "ENTEGRASYON" | **title:** "Kodlama ve Etiketleme Cihazları" | **text:** "Koli kodları ve palet etiketlerinin süreç içinde otomatik basılması ve okunması için cihaz entegrasyonu."
  - **tag:** "PLATFORM" | **title:** "OnSuite Trace" | **text:** "İzlenebilirlik ve süreç yönetiminin tek platformda yürütüldüğü yapı."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** Netsis ERP entegrasyonu
- **integrationDesc:** Sistem, Nuh'un Ankara'nın mevcut Netsis ERP sistemiyle entegre çalışmaktadır; izlenebilirlik ve transfer verileri Netsis ile paylaşılarak süreçler tek platform üzerinden yönetilmektedir.
- **integrationList:**
  - **bold:** "Netsis ERP" | **text:** "İzlenebilirlik ve transfer verileri Netsis ile çift yönlü paylaşılır, süreçler merkezi yönetilir."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Uçtan uca izlenebilirlik ve yüksek sevkiyat doğruluğu
- **resultsGrid:**
  - **title:** "Uçtan Uca Zincir Takibi" | **text:** "Üretimden müşteriye kadar tüm zincir koli ve palet bazında tek platformda izlenebilir hale geldi."
  - **title:** "Manuel Takibin Kaldırılması" | **text:** "Koli-palet ilişkileri ve dış depolar dahil tüm transfer hareketleri kayıt altına alınarak manuel takip ortadan kaldırıldı."
  - **title:** "Recall ve Sevkiyat Güvencesi" | **text:** "Geri izleme süreçleri hızlandı, sevkiyat doğruluğu güçlendirildi."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Üretim süreçlerinizi de dönüştürmek ister misiniz?
- **ctaSubtitle:** Benzer bir çözümü işletmenize nasıl uygulayabileceğimizi konuşmak için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Nuhun Ankara Carton Pallet Shipment Traceability
- **Sector (sector / tagValue):** Food & Beverage
- **Location (locationValue):** Ankara
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** The project implemented at Nuh'un Ankara's production facility in Ankara provides carton and pallet-level traceability while enabling the monitoring of all product movements between the factory, external warehouses, and customers.

##### Hero Section (EN)
- **heroTitleLine1:** End-to-end visibility
- **heroTitleLine2:** for cartons and pallets.
- **heroSub:** The project implemented at Nuh'un Ankara's production facility in Ankara provides carton and pallet-level traceability while enabling the monitoring of all product movements between the factory, external warehouses, and customers.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Traceable logistics from production to customer
- **contextP1:** Nuh'un Ankara operates a food manufacturing facility in Ankara. The project was launched to establish carton and pallet-level traceability throughout production and shipping operations.
- **contextP2:** The system enables the recording and monitoring of all product movements between the factory, external warehouses, and customers from a single platform.

##### Problem / Challenge (EN)
- **problemEyebrow:** Need / Challenge
- **problemTitle:** Tracking carton–pallet relationships and transfers
- **problemLede:** It was necessary to identify which cartons were loaded onto which pallets and track their movements throughout the supply chain. Manual tracking created traceability gaps and increased recall and shipment risks.
- **problemList:**
  - **bold:** "Traceability Gaps" | **text:** "Manual tracking of carton and pallet relationships created risks in data accuracy and product visibility."
  - **bold:** "Warehouse Transfer Visibility" | **text:** "Lack of centralized monitoring for external warehouse and customer transfers reduced operational visibility."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Digitalized carton–pallet–warehouse–customer tracking
- **solutionLede:** A traceability solution was implemented on the production and shipping lines. Cartons and pallets are automatically associated, while warehouse and customer transfers are recorded through handheld terminals.
- **steps:**
  - **no:** "01" | **title:** "Carton Identification" | **text:** "Cartons are uniquely identified and registered in the system."
  - **no:** "02" | **title:** "Pallet Association" | **text:** "Cartons are assigned to the corresponding pallets and recorded."
  - **no:** "03" | **title:** "Transfer Registration" | **text:** "Warehouse and customer transfers are recorded using handheld devices."
  - **no:** "04" | **title:** "Monitoring and Reporting" | **text:** "All movements are tracked and reported through the OnSuite Trace platform."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment
- **techTitle:** PLC automation, SCADA, and mobile applications
- **techGrid:**
  - **tag:** "AUTOMATION" | **title:** "PLC Infrastructure" | **text:** "Industrial PLC architecture managing field automation and process control."
  - **tag:** "SOFTWARE" | **title:** "C# SCADA Application" | **text:** "Central software platform managing traceability and shipment operations."
  - **tag:** "IDENTIFICATION" | **title:** "Barcode Readers" | **text:** "Devices used to identify and verify carton and pallet information."
  - **tag:** "MOBILE" | **title:** "Handheld Terminal Application" | **text:** "Mobile solution for registering warehouse and customer transfers in the field."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** Netsis ERP integration
- **integrationDesc:** Traceability and shipment data are exchanged with Netsis ERP, enabling centralized process management.
- **integrationList:**
  - **bold:** "Netsis ERP" | **text:** "Transfer and traceability data are synchronized with the company's Netsis ERP environment."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Complete visibility and stronger recall management
- **resultsGrid:**
  - **title:** "End-to-End Traceability" | **text:** "All product movements from production to customer are fully traceable."
  - **title:** "Digital Transfer Management" | **text:** "Warehouse and customer transfers are centrally recorded and managed."
  - **title:** "Improved Shipment Accuracy" | **text:** "Recall processes are accelerated and shipment reliability is strengthened."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Would you like to transform your production processes?
- **ctaSubtitle:** Contact us to discuss how a similar solution can be implemented in your operations.
- **ctaPrimary:** Contact Us

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Nuh'un Ankara - Trasabilitate Cutie Palet Expediere
- **Sector (sector / tagValue):** Alimente & Băuturi
- **Locație (locationValue):** Ankara
- **Domeniu de Aplicare (scopeVal):** Software și Integrare
- **An (year):** An
- **Descriere Scurtă (description):** Proiectul implementat în fabrica Nuh'un Ankara din Ankara oferă trasabilitate la nivel de cutie și palet și permite monitorizarea tuturor mișcărilor de produse între fabrică, depozitele externe și clienți.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Trasabilitate completă
- **heroTitleLine2:** pentru cutii și paleți.
- **heroSub:** Proiectul implementat în fabrica Nuh'un Ankara din Ankara oferă trasabilitate la nivel de cutie și palet și permite monitorizarea tuturor mișcărilor de produse între fabrică, depozitele externe și clienți.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Flux logistic trasabil de la producție la client
- **contextP1:** Nuh'un Ankara operează o unitate de producție alimentară în Ankara. Proiectul a fost implementat pentru asigurarea trasabilității la nivel de cutie și palet în procesele de producție și expediere.
- **contextP2:** Sistemul permite înregistrarea și monitorizarea tuturor mișcărilor de produse dintre fabrică, depozite externe și clienți pe o singură platformă.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Necesitate / Problemă
- **problemTitle:** Urmărirea relațiilor cutie–palet și a transferurilor
- **problemLede:** Era necesară identificarea fiecărei cutii pe paletul corespunzător și urmărirea deplasărilor în întregul lanț logistic. Procesele manuale creau lipsuri de trasabilitate și dificultăți în procesele de recall.
- **problemList:**
  - **bold:** "Lipsă de Trasabilitate" | **text:** "Monitorizarea manuală a relațiilor dintre cutii și paleți genera riscuri privind acuratețea datelor."
  - **bold:** "Vizibilitate Limitată asupra Transferurilor" | **text:** "Transferurile către depozite externe și clienți nu puteau fi urmărite centralizat."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Digitalizarea fluxului cutie–palet–depozit–client
- **solutionLede:** Soluția de trasabilitate implementată pe liniile de producție și expediere înregistrează automat relațiile dintre cutii și paleți, iar transferurile sunt gestionate prin terminale mobile.
- **steps:**
  - **no:** "01" | **title:** "Identificarea Cutiei" | **text:** "Fiecare cutie este identificată și înregistrată unic în sistem."
  - **no:** "02" | **title:** "Asocierea cu Paletul" | **text:** "Cutiile sunt asociate paleților corespunzători și înregistrate."
  - **no:** "03" | **title:** "Înregistrarea Transferurilor" | **text:** "Transferurile către depozite și clienți sunt înregistrate prin terminale mobile."
  - **no:** "04" | **title:** "Monitorizare și Raportare" | **text:** "Toate mișcările sunt urmărite și raportate prin platforma OnSuite Trace."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipamente
- **techTitle:** PLC, SCADA și aplicații mobile
- **techGrid:**
  - **tag:** "AUTOMATIZARE" | **title:** "Infrastructură PLC" | **text:** "Sistem PLC industrial care gestionează procesele și automatizarea din teren."
  - **tag:** "SOFTWARE" | **title:** "Aplicație SCADA C#" | **text:** "Platformă centrală pentru gestionarea trasabilității și expedițiilor."
  - **tag:** "IDENTIFICARE" | **title:** "Cititoare de Coduri de Bare" | **text:** "Echipamente utilizate pentru validarea și identificarea cutiilor și paleților."
  - **tag:** "MOBIL" | **title:** "Aplicație Terminal Mobil" | **text:** "Permite înregistrarea transferurilor direct din teren."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Integrare cu Netsis ERP
- **integrationDesc:** Datele de trasabilitate și expediție sunt schimbate cu Netsis ERP pentru administrare centralizată.
- **integrationList:**
  - **bold:** "Netsis ERP" | **text:** "Datele de transfer și trasabilitate sunt sincronizate cu sistemul ERP Netsis."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Vizibilitate completă și trasabilitate consolidată
- **resultsGrid:**
  - **title:** "Trasabilitate End-to-End" | **text:** "Toate mișcările produselor sunt urmărite de la producție până la client."
  - **title:** "Management Digital al Transferurilor" | **text:** "Transferurile sunt înregistrate și gestionate centralizat."
  - **title:** "Precizie Mai Mare în Livrare" | **text:** "Procesele de recall sunt accelerate, iar acuratețea expedițiilor este îmbunătățită."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să vă transformați procesele de producție?
- **ctaSubtitle:** Contactați-ne pentru a discuta implementarea unei soluții similare în compania dumneavoastră.
- **ctaPrimary:** Contactați-ne


---

### 2. Abalıoğlu Yağ - Süt Tozu Koli-Palet İzlenebilirliği
**Slug:** `abalioglu-yag-milk-powder-carton-pallet-traceability` | **ID:** `48` | **Sıra (Order):** `2` | **Yıl:** `2025`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `abalioglu-yag-milk-powder-carton-pallet-traceability`
- **Sıralama (order):** `2`
- **Yıl (year / referenceDate):** `2025`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `Barcode, SCADA, Netsis ERP`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/abalioglu.svg`
  - **Ana Görsel (image):** `/images/companies/Abalioglu/factory.jpg`
  - **Hero Görseli (heroImage):** `/images/companies/Abalioglu/factory.jpg`
  - **Galeri Görselleri (gallery):**
  - 

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Abalıoğlu Yağ - Süt Tozu Koli-Palet İzlenebilirliği
- **Sektör (sector / tagValue):** Gıda & İçecek
- **Konum (locationValue):** Niğde
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Abalıoğlu Yağ'ın Niğde tesisinde süt tozu üretim süreçleri için koli ve palet bazlı izlenebilirlik çözümü hayata geçirildi. Sistem kapsamında hangi kolinin hangi palete yerleştirildiği kayıt altına alınarak koli, palet ve sevkiyat adımları tek platform üzerinden takip edildi. Otomatik etiketleme ve barkod okuma altyapısı ile süreç dijitalleştirildi. Netsis ERP entegrasyonu sayesinde üretim ve sevkiyat verileri senkronize edildi. Böylece manuel takip ortadan kaldırılarak sevkiyat doğruluğu ve geri izlenebilirlik önemli ölçüde geliştirildi.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Süt Tozu Koli-Palet
- **heroTitleLine2:** İzlenebilirliği
- **heroSub:** Abalıoğlu Yağ'ın Niğde'deki süt tozu üretim tesisinde devreye alınan proje, koli ve palet düzeyinde izlenebilirlik sağlayarak üretimden sevkiyata tüm ürün hareketlerinin tek platformda standart ve doğrulanabilir biçimde yönetilmesini mümkün kılmaktadır.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Süt tozu üretiminde izlenebilir sevkiyat akışı
- **contextP1:** Abalıoğlu Yağ'ın Niğde'deki tesisinde süt tozu üretimi yapılmaktadır.
- **contextP2:** Proje, üretim ve sevkiyat süreçlerinde koli ve palet bazında izlenebilirlik sağlamak amacıyla hayata geçirilmiştir.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Koli-palet eşlemesinde manuel süreç riski
- **problemLede:** Hangi kolinin hangi palete girdiğinin ve bu kolilerin/paletlerin üretimden sevkiyata kadar izlenebilir olması gerekiyordu. Bu ilişkilerin manuel takibi hem izlenebilirlik boşluğu hem de hatalı sevkiyat ve geri izleme (recall) zorluğu riski taşıyordu.
- **problemList:**
  - **bold:** "İzlenebilirlik Boşluğu" | **text:** "Manuel koli-palet takibi, akışta kopuk veri ve düşük süreç şeffaflığına yol açıyordu."
  - **bold:** "Sevkiyat Doğruluğu Riski" | **text:** "Yanlış eşleşme ve manuel adımlar, hatalı sevkiyat ile recall zorluğunu artırıyordu."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Koli - Palet - Sevkiyat adımlarının dijital yönetimi
- **solutionLede:** Koli-palet izlenebilirlik uygulaması, Abalıoğlu Yağ'ın Niğde tesisindeki üretim ve sevkiyat hatlarında hayata geçirildi. Koliler ve paletler için yapı kurularak hangi kolinin hangi palete yerleştirildiği kayıt altına alındı. Koli - Palet - Sevkiyat adımları tek bir platformda izlenebilir ve yönetilebilir hale getirildi.
- **steps:**
  - **no:** "01" | **title:** "Koli Tanımlama" | **text:** "Üretim hattında oluşturulan koli bilgileri sisteme kaydedilir."
  - **no:** "02" | **title:** "Palet Oluşturma" | **text:** "Koliler ilgili paletlere atanarak ilişkilendirilir."
  - **no:** "03" | **title:** "Sevkiyat Hazırlığı" | **text:** "Palet bazında sevkiyat süreçleri sistem üzerinden yönetilir."
  - **no:** "04" | **title:** "İzleme ve Raporlama" | **text:** "Tüm hareketler OnSuite Trace üzerinden izlenir ve raporlanır."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** PLC, C# SCADA ve barkod altyapısı
- **techGrid:**
  - **tag:** "OTOMASYON" | **title:** "PLC Yapısı" | **text:** "Saha otomasyonunu ve hat akışını yöneten PLC altyapısı."
  - **tag:** "YAZILIM" | **title:** "C# SCADA Uygulaması" | **text:** "Koli-palet süreçlerini ve sevkiyat adımlarını merkezi olarak yöneten SCADA uygulaması."
  - **tag:** "TANIMA" | **title:** "Barkod Okuyucular" | **text:** "Koli ve palet etiketlerinin otomatik okunması ve doğrulanması için kullanılan okuma sistemi."
  - **tag:** "ENTEGRASYON" | **title:** "Kodlama ve Etiketleme Cihazları" | **text:** "Koli kodları ve palet etiketlerinin otomatik basılması ve okunması için entegre cihaz altyapısı."
  - **tag:** "PLATFORM" | **title:** "OnSuite Trace" | **text:** "İzlenebilirlik ve süreç yönetiminin tek platformdan yürütülmesini sağlar."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** Netsis ERP entegrasyonu
- **integrationDesc:** Sistem, Abalıoğlu Yağ'ın mevcut Netsis ERP sistemiyle entegre çalışmaktadır; izlenebilirlik ve sevkiyat verileri Netsis ile paylaşılarak süreçler tek platform üzerinden yönetilmektedir.
- **integrationList:**
  - **bold:** "Netsis ERP" | **text:** "İzlenebilirlik ve sevkiyat verileri Netsis ERP ile paylaşılır ve süreçler tek noktadan yönetilir."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Daha güçlü izlenebilirlik ve sevkiyat güvencesi
- **resultsGrid:**
  - **title:** "Uçtan Uca İzlenebilirlik" | **text:** "Üretimden sevkiyata tüm zincir koli ve palet bazında izlenebilir hale geldi."
  - **title:** "Manuel Takibin Azaltılması" | **text:** "Koli-palet ilişkileri kayıt altına alınarak manuel takip ihtiyacı ortadan kaldırıldı."
  - **title:** "Recall ve Doğruluk Artışı" | **text:** "Geri izleme ve sevkiyat doğruluğu önemli ölçüde güçlendirildi."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Üretim süreçlerinizi de dönüştürmek ister misiniz?
- **ctaSubtitle:** Benzer bir çözümü işletmenize nasıl uygulayabileceğimizi konuşmak için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Abalioglu Yag Milk Powder Carton Pallet Traceability
- **Sector (sector / tagValue):** Food & Beverage
- **Location (locationValue):** Niğde
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** The project implemented at Abalıoğlu Yağ's milk powder production facility in Niğde provides carton and pallet-level traceability, enabling all product movements from production to shipment to be managed through a single platform.

##### Hero Section (EN)
- **heroTitleLine1:** Complete carton and pallet
- **heroTitleLine2:** traceability.
- **heroSub:** The project implemented at Abalıoğlu Yağ's milk powder production facility in Niğde provides carton and pallet-level traceability, enabling all product movements from production to shipment to be managed through a single platform.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Digital carton and pallet tracking in milk powder production
- **contextP1:** Abalıoğlu Yağ produces milk powder at its facility in Niğde. The project was implemented to establish carton and pallet-level traceability and digitalize logistics processes.
- **contextP2:** By centrally monitoring production and shipment operations, operational visibility has been increased and shipping accuracy has been improved.

##### Problem / Challenge (EN)
- **problemEyebrow:** Need / Challenge
- **problemTitle:** Reliable management of carton–pallet relationships
- **problemLede:** It was necessary to monitor which cartons were loaded onto which pallets throughout production and shipping operations. Manual processes created traceability gaps and increased recall risks.
- **problemList:**
  - **bold:** "Carton–Pallet Tracking" | **text:** "Manual operations increased the risk of errors in carton and pallet associations."
  - **bold:** "Recall Management" | **text:** "Identifying and verifying historical product movements quickly was difficult."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Digitalization of carton–pallet–shipment processes
- **solutionLede:** The implemented solution associates cartons and pallets while recording all movements on the OnSuite Trace platform, ensuring complete visibility from production to shipment.
- **steps:**
  - **no:** "01" | **title:** "Carton Identification" | **text:** "Carton information generated on the production line is recorded in the system."
  - **no:** "02" | **title:** "Pallet Creation" | **text:** "Cartons are assigned and linked to the corresponding pallets."
  - **no:** "03" | **title:** "Shipment Preparation" | **text:** "Shipment processes are managed and monitored at pallet level."
  - **no:** "04" | **title:** "Monitoring and Reporting" | **text:** "All movements are tracked and reported through the OnSuite Trace platform."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment
- **techTitle:** PLC, SCADA, and barcode-based traceability
- **techGrid:**
  - **tag:** "AUTOMATION" | **title:** "PLC Infrastructure" | **text:** "Industrial automation architecture managing production and shipment processes."
  - **tag:** "SOFTWARE" | **title:** "C# SCADA Application" | **text:** "Central software managing carton and pallet traceability operations."
  - **tag:** "IDENTIFICATION" | **title:** "Barcode Readers" | **text:** "Used to identify and verify carton and pallet labels."
  - **tag:** "INTEGRATION" | **title:** "Coding and Labeling Systems" | **text:** "Integrated for automatic carton coding and pallet label printing."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** Netsis ERP integration
- **integrationDesc:** Traceability and shipment information is exchanged with Netsis ERP, enabling centralized process management.
- **integrationList:**
  - **bold:** "Netsis ERP" | **text:** "Traceability and shipment data are synchronized with the Netsis ERP system."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Stronger traceability and shipment accuracy
- **resultsGrid:**
  - **title:** "End-to-End Traceability" | **text:** "All product movements are traceable from production to shipment."
  - **title:** "Digital Pallet Management" | **text:** "Carton–pallet relationships are managed automatically and reliably."
  - **title:** "Recall and Shipping Assurance" | **text:** "Recall processes are accelerated and shipping errors are minimized."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Would you like to transform your production processes?
- **ctaSubtitle:** Contact us to discuss how a similar solution can be implemented in your operations.
- **ctaPrimary:** Contact Us

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Abalıoğlu Yağ - Trasabilitate Cutie Palet Lapte Praf
- **Sector (sector / tagValue):** Alimente & Băuturi
- **Locație (locationValue):** Niğde
- **Domeniu de Aplicare (scopeVal):** Software și Integrare
- **An (year):** An
- **Descriere Scurtă (description):** Proiectul implementat în fabrica de lapte praf a companiei Abalıoğlu Yağ din Niğde oferă trasabilitate la nivel de cutie și palet și permite gestionarea tuturor mișcărilor de produse din producție până la expediere printr-o singură platformă.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Trasabilitate completă
- **heroTitleLine2:** pentru cutii și paleți.
- **heroSub:** Proiectul implementat în fabrica de lapte praf a companiei Abalıoğlu Yağ din Niğde oferă trasabilitate la nivel de cutie și palet și permite gestionarea tuturor mișcărilor de produse din producție până la expediere printr-o singură platformă.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Urmărirea digitală a cutiilor și paleților în producția de lapte praf
- **contextP1:** Abalıoğlu Yağ produce lapte praf în unitatea sa din Niğde. Proiectul a fost implementat pentru a asigura trasabilitatea la nivel de cutie și palet și pentru digitalizarea proceselor logistice.
- **contextP2:** Monitorizarea centralizată a proceselor de producție și expediere a îmbunătățit vizibilitatea operațională și acuratețea livrărilor.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Necesitate / Problemă
- **problemTitle:** Gestionarea fiabilă a relațiilor cutie–palet
- **problemLede:** Era necesară monitorizarea fiecărei cutii și a paletului pe care aceasta este plasată, de-a lungul întregului proces de producție și expediere. Procesele manuale generau lipsuri de trasabilitate și riscuri în cazul operațiunilor de recall.
- **problemList:**
  - **bold:** "Urmărirea Cutie–Palet" | **text:** "Operațiunile manuale creșteau riscul de erori în asocierea cutiilor cu paleții."
  - **bold:** "Gestionarea Recall-ului" | **text:** "Identificarea și verificarea rapidă a mișcărilor istorice ale produselor era dificilă."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Digitalizarea proceselor cutie–palet–expediere
- **solutionLede:** Soluția implementată asociază cutiile cu paleții și înregistrează toate mișcările în platforma OnSuite Trace, oferind vizibilitate completă de la producție până la expediere.
- **steps:**
  - **no:** "01" | **title:** "Identificarea Cutiei" | **text:** "Informațiile cutiei generate pe linia de producție sunt înregistrate în sistem."
  - **no:** "02" | **title:** "Crearea Paletului" | **text:** "Cutiile sunt asociate și legate de paleții corespunzători."
  - **no:** "03" | **title:** "Pregătirea Expediției" | **text:** "Procesele de expediere sunt gestionate și urmărite la nivel de palet."
  - **no:** "04" | **title:** "Monitorizare și Raportare" | **text:** "Toate mișcările sunt urmărite și raportate prin platforma OnSuite Trace."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipamente
- **techTitle:** PLC, SCADA și trasabilitate bazată pe coduri de bare
- **techGrid:**
  - **tag:** "AUTOMATIZARE" | **title:** "Infrastructură PLC" | **text:** "Arhitectură industrială de automatizare care gestionează procesele de producție și expediere."
  - **tag:** "SOFTWARE" | **title:** "Aplicație SCADA C#" | **text:** "Software central pentru gestionarea operațiunilor de trasabilitate a cutiilor și paleților."
  - **tag:** "IDENTIFICARE" | **title:** "Cititoare de Coduri de Bare" | **text:** "Utilizate pentru identificarea și verificarea etichetelor cutiilor și paleților."
  - **tag:** "INTEGRARE" | **title:** "Sisteme de Codificare și Etichetare" | **text:** "Integrate pentru codificarea automată a cutiilor și imprimarea etichetelor de palet."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Integrare cu Netsis ERP
- **integrationDesc:** Datele de trasabilitate și expediere sunt sincronizate cu Netsis ERP pentru gestionarea centralizată a proceselor.
- **integrationList:**
  - **bold:** "Netsis ERP" | **text:** "Datele de trasabilitate și expediere sunt sincronizate cu sistemul Netsis ERP."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Trasabilitate îmbunătățită și livrări mai precise
- **resultsGrid:**
  - **title:** "Trasabilitate End-to-End" | **text:** "Toate mișcările produselor pot fi urmărite din producție până la expediere."
  - **title:** "Management Digital al Paleților" | **text:** "Relațiile dintre cutii și paleți sunt gestionate automat și în siguranță."
  - **title:** "Siguranță pentru Recall și Livrare" | **text:** "Procesele de recall sunt accelerate, iar erorile de expediere sunt reduse."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să vă transformați procesele de producție?
- **ctaSubtitle:** Contactați-ne pentru a discuta implementarea unei soluții similare în compania dumneavoastră.
- **ctaPrimary:** Contactați-ne


---

### 3. Türk Tuborg - Fıçı OCR İzlenebilirliği
**Slug:** `turk-tuborg-keg-ocr-traceability` | **ID:** `49` | **Sıra (Order):** `3` | **Yıl:** `2026`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `turk-tuborg-keg-ocr-traceability`
- **Sıralama (order):** `3`
- **Yıl (year / referenceDate):** `2026`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `OCR, Barcode, SAP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/turk-tuborg_logo-black.svg`
  - **Ana Görsel (image):** `/images/companies/Tuborg/c13974-tuborg.jpg`
  - **Hero Görseli (heroImage):** `/images/companies/Tuborg/c13974-tuborg.jpg`
  - **Galeri Görselleri (gallery):**
  - 

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Türk Tuborg - Fıçı OCR İzlenebilirliği
- **Sektör (sector / tagValue):** Gıda & İçecek
- **Konum (locationValue):** İzmir
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Türk Tuborg'un İzmir fabrikasında, fıçıların tekil kimlikleri üzerinden palet bazlı izlenebilirlik sağlayan OCR destekli takip sistemi geliştirildi. SAP'den alınan iş emirleri doğrultusunda çalışan sistemde, fıçı üzerindeki benzersiz kimlikler önce barkod okuma ile, gerektiğinde OCR teknolojisi kullanılarak okunmaktadır. Okunan fıçı kimlikleri ilgili paletlerle eşleştirilerek otomatik palet etiketleme gerçekleştirilmektedir. Bu yapı sayesinde fıçı–palet eşleşmeleri güvence altına alınmış, okuma güvenilirliği artırılmış ve palet seviyesinde sevkiyat doğruluğu ile tam izlenebilirlik sağlanmıştır.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Güvenilir palet eşleştirme ile 
- **heroTitleLine2:** benzersiz fıçı takibi.
- **heroSub:** Türk Tuborg'un İzmir'deki üretim tesisinde uygulanan proje, her bir fıçının benzersiz kimliğini barkod ve OCR ile güvenilir biçimde okuyup doğru paletle eşleştirerek palet seviyesinde izlenebilirliği ve sevkiyat doğruluğunu artırmaktadır.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Fıçı bazında tekil eşleştirme ve sevkiyat güvencesi
- **contextP1:** Türk Tuborg'un İzmir'deki fabrikası, alkollü içecek üretimi yapmaktadır.
- **contextP2:** Bu fabrikada hayata geçirilen projede, her biri eşsiz ID'ye sahip fıçıların okunarak paletlerle eşleştirilmesi ve palet düzeyinde izlenebilirlik sağlanmıştır.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Okunamayan fıçı ID'leri için güvenli alternatif
- **problemLede:** Her fıçının eşsiz (tekil) ID'sinin güvenilir biçimde okunması ve doğru paletle eşleştirilmesi gerekiyordu. Fıçı ID'leri her zaman standart barkod/kod okumayla okunamıyor; okunamayan durumlarda sürecin durmaması ve fıçı-palet eşleşmesinin hatasız yapılabilmesi için alternatif bir okuma yöntemine ihtiyaç vardı.
- **problemList:**
  - **bold:** "Okuma Sürekliliği" | **text:** "Standart kod okumanın başarısız olduğu durumlarda üretimin durmaması gerekiyordu."
  - **bold:** "Hatasız Eşleştirme" | **text:** "Fıçı-palet eşleşmesinin yanlış yapılması sevkiyat doğruluğunu doğrudan etkiliyordu."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Kod okuma + OCR ile fıçı-palet doğrulama
- **solutionLede:** C# tabanlı uygulamaya SAP'den iş emirleri gelmekte, operatör ilgili iş emrini seçmektedir. Kamera, seçilen iş emrine göre ilgili pozisyona hareket etmektedir. Her fıçının eşsiz ID'si önce kod okuma ile okunmaya çalışılmakta; okunamadığı durumlarda OCR (optik karakter tanıma) ile okunmaktadır. Okunan eşsiz fıçı ID'leri ilgili palet ile eşleştirilmekte ve palet etiketi basılmaktadır. Böylece fıçı-palet eşleşmesi güvence altına alınarak palet düzeyinde izlenebilirlik sağlanmaktadır.
- **steps:**
  - **no:** "01" | **title:** "İş Emri Seçimi" | **text:** "Operatör, SAP'den gelen iş emrini seçer."
  - **no:** "02" | **title:** "Kamera Konumlandırma" | **text:** "Kamera, seçilen iş emrine göre ilgili okuma pozisyonuna hareket eder."
  - **no:** "03" | **title:** "Kod + OCR Okuma" | **text:** "Fıçı ID önce kod okuyucuyla; başarısız olursa OCR ile okunur."
  - **no:** "04" | **title:** "Eşleştirme ve Etiket" | **text:** "Okunan fıçı ID'leri ilgili paletle eşleştirilir ve palet etiketi basılır."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** C#, kamera, OCR ve SAP entegrasyonu
- **techGrid:**
  - **tag:** "YAZILIM" | **title:** "C# Uygulaması" | **text:** "SAP iş emirlerini yöneten, operatör akışını ve eşleştirme mantığını kontrol eden merkezi uygulama."
  - **tag:** "GÖRÜNTÜ" | **title:** "Kamera Sistemi" | **text:** "İş emrine göre ilgili pozisyona hareket ederek fıçı kimliğinin okunmasını destekler."
  - **tag:** "OCR" | **title:** "Optik Karakter Tanıma" | **text:** "Standart kod okumada başarısız olunan durumlarda fıçı ID bilgisini OCR ile okur."
  - **tag:** "TANIMA" | **title:** "Kod Okuma Altyapısı" | **text:** "Fıçı kimliğini öncelikli olarak barkod/kod okuma yöntemiyle doğrular."
  - **tag:** "ETİKETLEME" | **title:** "Palet Etiketleme" | **text:** "Doğrulanan eşleşme sonrasında ilgili palet etiketini otomatik oluşturur."
  - **tag:** "ENTEGRASYON" | **title:** "SAP" | **text:** "İş emri ve sonuç verilerinin merkezi ERP sistemiyle anlık paylaşımını sağlar."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** SAP entegrasyonu
- **integrationDesc:** Sistem SAP ile entegre çalışmaktadır; iş emirleri SAP'den alınmakta, fıçı-palet eşleştirme ve palet etiketleme sonuçları SAP ile paylaşılarak süreç merkezi olarak yönetilmektedir.
- **integrationList:**
  - **bold:** "SAP" | **text:** "İş emirleri SAP üzerinden gelir, eşleştirme ve etiketleme çıktıları SAP'ye geri yazılır."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Daha güvenilir okuma ve hatasız palet eşleşmesi
- **resultsGrid:**
  - **title:** "Okuma Güvenilirliği Artışı" | **text:** "Kod okuma, gerektiğinde OCR ile desteklenerek okunamayan fıçı nedeniyle sürecin durması önlendi."
  - **title:** "Hatasız Eşleştirme" | **text:** "Eşsiz fıçı ID'leri doğru paletle eşleştirilerek yanlış ilişkilendirme riski azaltıldı."
  - **title:** "Sevkiyat Doğruluğu" | **text:** "Palet etiketi basımı ve doğrulanmış eşleşme ile palet düzeyinde sevkiyat güvence altına alındı."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Üretim süreçlerinizi de dönüştürmek ister misiniz?
- **ctaSubtitle:** Benzer bir çözümü işletmenize nasıl uygulayabileceğimizi konuşmak için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Turk Tuborg Keg OCR Traceability
- **Sector (sector / tagValue):** Food & Beverage
- **Location (locationValue):** Izmir
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** The project implemented at Türk Tuborg's production facility in Izmir enables reliable identification of each keg through barcode and OCR technologies, ensuring accurate pallet association and pallet-level traceability.

##### Hero Section (EN)
- **heroTitleLine1:** Unique keg tracking with
- **heroTitleLine2:** reliable pallet matching.
- **heroSub:** The project implemented at Türk Tuborg's production facility in Izmir enables reliable identification of each keg through barcode and OCR technologies, ensuring accurate pallet association and pallet-level traceability.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Individual traceability for beverage kegs
- **contextP1:** Türk Tuborg's production facility in Izmir manufactures alcoholic beverages using reusable kegs, each with a unique identifier.
- **contextP2:** The project was implemented to reliably identify every keg and associate it with the correct pallet before shipment.

##### Problem / Challenge (EN)
- **problemEyebrow:** Need / Challenge
- **problemTitle:** Unreadable IDs and pallet matching risks
- **problemLede:** Unique keg IDs could not always be captured through conventional barcode reading methods. An alternative solution was required to prevent production interruptions and ensure accurate keg-to-pallet association.
- **problemList:**
  - **bold:** "Reading Failures" | **text:** "Damaged or low-quality codes could not always be identified through standard barcode readers."
  - **bold:** "Incorrect Associations" | **text:** "Incorrect pallet assignments could negatively impact shipment accuracy and traceability."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** OCR-supported keg and pallet verification
- **solutionLede:** A C# application receives production orders from SAP and guides the operator. Each keg ID is first read using conventional code reading technology. If this fails, OCR technology is used to identify the code. Verified keg IDs are then associated with pallets and pallet labels are automatically generated.
- **steps:**
  - **no:** "01" | **title:** "Work Order Selection" | **text:** "The operator selects the appropriate production order received from SAP."
  - **no:** "02" | **title:** "Barcode Reading" | **text:** "The system attempts to read the unique keg identifier using conventional code reading."
  - **no:** "03" | **title:** "OCR Verification" | **text:** "If barcode reading fails, OCR technology is used to identify the keg ID."
  - **no:** "04" | **title:** "Pallet Association" | **text:** "Verified keg IDs are linked to pallets and pallet labels are printed automatically."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment
- **techTitle:** OCR, vision technology and SAP integration
- **techGrid:**
  - **tag:** "SOFTWARE" | **title:** "C# Application" | **text:** "Central software managing work orders and pallet association processes."
  - **tag:** "VISION" | **title:** "OCR Camera System" | **text:** "Reads keg identifiers when conventional barcode reading is unsuccessful."
  - **tag:** "IDENTIFICATION" | **title:** "Code Reading Infrastructure" | **text:** "Automatically captures keg identifiers during production operations."
  - **tag:** "LABELING" | **title:** "Pallet Labeling System" | **text:** "Generates pallet labels based on verified keg information."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** SAP integration
- **integrationDesc:** Production orders are received from SAP and palletization results are shared back with the ERP system.
- **integrationList:**
  - **bold:** "SAP" | **text:** "Production order management and palletization records are integrated with SAP."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Higher reading reliability and shipment accuracy
- **resultsGrid:**
  - **title:** "OCR-Assisted Identification" | **text:** "Production continuity is maintained by using OCR whenever barcode reading fails."
  - **title:** "Unique Product Traceability" | **text:** "Each keg is tracked individually through its unique identifier."
  - **title:** "Accurate Palletization" | **text:** "Validated keg-to-pallet associations help prevent shipping errors."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Would you like to transform your production processes?
- **ctaSubtitle:** Contact us to discuss how a similar solution can be implemented in your operations.
- **ctaPrimary:** Contact Us

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Türk Tuborg - Trasabilitate Butoaie cu OCR
- **Sector (sector / tagValue):** Alimente & Băuturi
- **Locație (locationValue):** Izmir
- **Domeniu de Aplicare (scopeVal):** Software și Integrare
- **An (year):** An
- **Descriere Scurtă (description):** Proiectul implementat în fabrica Türk Tuborg din Izmir permite identificarea fiabilă a fiecărui butoi prin tehnologii de citire coduri și OCR, asigurând asocierea corectă cu paleții și trasabilitatea la nivel de palet.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Trasabilitate individuală a butoaielor
- **heroTitleLine2:** și asociere sigură cu paleții.
- **heroSub:** Proiectul implementat în fabrica Türk Tuborg din Izmir permite identificarea fiabilă a fiecărui butoi prin tehnologii de citire coduri și OCR, asigurând asocierea corectă cu paleții și trasabilitatea la nivel de palet.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Trasabilitate individuală pentru butoaiele de băuturi
- **contextP1:** Fabrica Türk Tuborg din Izmir produce băuturi alcoolice utilizând butoaie reutilizabile, fiecare având un identificator unic.
- **contextP2:** Proiectul a fost implementat pentru identificarea fiabilă a fiecărui butoi și asocierea acestuia cu paletul corespunzător înainte de livrare.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Necesitate / Problemă
- **problemTitle:** Identificatori ilizibili și risc de asociere greșită
- **problemLede:** Identificatorii unici ai butoaielor nu puteau fi întotdeauna citiți prin metode clasice de scanare. Era necesară o metodă alternativă pentru a evita oprirea procesului și pentru a garanta asocierea corectă cu paleții.
- **problemList:**
  - **bold:** "Probleme de Citire" | **text:** "Codurile deteriorate sau de slabă calitate nu puteau fi întotdeauna identificate de cititoarele standard."
  - **bold:** "Asocieri Incorecte" | **text:** "Asocierea greșită a butoaielor cu paleții putea afecta acuratețea livrărilor și trasabilitatea."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Verificare butoi–palet asistată de OCR
- **solutionLede:** O aplicație C# primește comenzile de producție din SAP și ghidează operatorul. Fiecare ID de butoi este citit mai întâi prin metode clasice. Dacă citirea eșuează, sistemul OCR identifică automat codul. Identificatorii validați sunt apoi asociați cu paleții, iar etichetele sunt generate automat.
- **steps:**
  - **no:** "01" | **title:** "Selectarea Comenzii" | **text:** "Operatorul selectează comanda de producție primită din SAP."
  - **no:** "02" | **title:** "Citirea Codului" | **text:** "Sistemul încearcă să citească identificatorul unic al butoiului."
  - **no:** "03" | **title:** "Verificare OCR" | **text:** "Dacă citirea standard eșuează, OCR identifică automat caracterele."
  - **no:** "04" | **title:** "Asociere cu Paletul" | **text:** "Identificatorii validați sunt asociați paleților, iar etichetele sunt tipărite."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipamente
- **techTitle:** OCR, sisteme de viziune și integrare SAP
- **techGrid:**
  - **tag:** "SOFTWARE" | **title:** "Aplicație C#" | **text:** "Software central pentru gestionarea comenzilor și a procesului de asociere."
  - **tag:** "VIZIUNE" | **title:** "Sistem OCR cu Cameră" | **text:** "Identifică automat codurile atunci când citirea standard nu reușește."
  - **tag:** "IDENTIFICARE" | **title:** "Infrastructură de Citire Coduri" | **text:** "Capturează automat identificatorii butoaielor în timpul procesului."
  - **tag:** "ETICHETARE" | **title:** "Sistem de Etichetare Paleți" | **text:** "Generează etichete pe baza informațiilor validate."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Integrare SAP
- **integrationDesc:** Comenzile de producție sunt preluate din SAP, iar rezultatele procesului sunt returnate către sistemul ERP.
- **integrationList:**
  - **bold:** "SAP" | **text:** "Managementul comenzilor și datele de paletizare sunt integrate cu SAP."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Fiabilitate mai mare și livrări corecte
- **resultsGrid:**
  - **title:** "Identificare Asistată de OCR" | **text:** "Continuitatea procesului este asigurată chiar și atunci când citirea codurilor eșuează."
  - **title:** "Trasabilitate Individuală" | **text:** "Fiecare butoi este urmărit prin identificatorul său unic."
  - **title:** "Paletizare Corectă" | **text:** "Asocierile validate între butoaie și paleți reduc riscul de erori la livrare."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să vă transformați procesele de producție?
- **ctaSubtitle:** Contactați-ne pentru a discuta implementarea unei soluții similare în compania dumneavoastră.
- **ctaPrimary:** Contactați-ne


---

### 4. Phinia - Datamatrix Kalite Derecelendirme İstasyonu
**Slug:** `phinia-datamatrix-quality-grading-station` | **ID:** `50` | **Sıra (Order):** `4` | **Yıl:** `2023`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `phinia-datamatrix-quality-grading-station`
- **Sıralama (order):** `4`
- **Yıl (year / referenceDate):** `2023`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `Datamatrix Grading, Vision Systems, Oracle Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/phinia.svg`
  - **Ana Görsel (image):** `/images/companies/Phinia/Phinia.jpg`
  - **Hero Görseli (heroImage):** `/images/companies/Phinia/Phinia.jpg`
  - **Galeri Görselleri (gallery):**
  - 

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Phinia - Datamatrix Kalite Derecelendirme İstasyonu
- **Sektör (sector / tagValue):** Otomotiv
- **Konum (locationValue):** İzmir
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Phinia'nın İzmir tesisinde, ürünler üzerindeki Datamatrix kodlarının baskı kalitesini uluslararası standartlara göre ölçen bir kalite derecelendirme sistemi devreye alındı. DM grade kamerası, 3 eksenli servo sistemi ve PLC kontrollü ölçüm altyapısı kullanılarak her Datamatrix kodunun kalite derecesi otomatik olarak ölçülmekte ve raporlanmaktadır. Bu sayede okunabilirlik problemi oluşturabilecek düşük kaliteli kodlar üretim aşamasında tespit edilerek önlenmiş, kod kalitesi objektif ve sürdürülebilir şekilde doğrulanmıştır.

##### Hero Bölümü (TR)
- **heroTitleLine1:** DataMatrix Kalite
- **heroTitleLine2:** Ölçüm Tezgahı
- **heroSub:** Phinia'nın İzmir ESBAŞ tesisinde hayata geçirilen proje, Datamatrix kod baskı kalitesini uluslararası kriterlere göre otomatik ölçüp derecelendirerek okunabilirlik risklerinin üretim aşamasında erken tespit edilmesini sağlamaktadır.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** DM kod kalitesinin standart bazlı doğrulanması
- **contextP1:** Phinia'nın İzmir ESBAŞ Serbest Bölge'deki fabrikası, otomotiv sektörüne yönelik üretim yapmaktadır.
- **contextP2:** Bu fabrikada hayata geçirilen projede, ürünler üzerindeki Datamatrix (DM) kodlarının baskı kalitesini ölçen bir DM grading (kalite derecelendirme) tezgahı kurulmuştur.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Son kullanıcıda okunamayan DM kod riski
- **problemLede:** Fabrikadan çıkan ürünler üzerindeki DM kodları, son kullanıcı tarafında okunamadı ve bu durum bir problem oluşturdu. Kodların yalnızca var/okunuyor olması yeterli değildi; baskı kalitesinin uluslararası standartlara uygun ve her koşulda güvenilir biçimde okunabilir olması gerekiyordu. Bu nedenle DM kodlarının baskı kalitesinin ölçülüp derecelendirileceği ve raporlanacağı bir kontrol yapısına ihtiyaç doğdu.
- **problemList:**
  - **bold:** "Okunabilirlik Riski" | **text:** "Düşük kalite kodlar son kullanıcı tarafında okunamama problemi oluşturuyordu."
  - **bold:** "Objektif Kalite İhtiyacı" | **text:** "Kod kalitesinin uluslararası standarda göre ölçülmesi ve raporlanması gerekiyordu."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** DM grading ile otomatik kalite derecelendirme
- **solutionLede:** DM grading tezgahı ile ürün üzerindeki Datamatrix kodların baskı kalitesi, uluslararası standartlara göre grade (kalite derecesi) ölçümüne tabi tutuldu. DM grade kamerası ile yapılan ölçüm sonucunda kodun kalite derecesi belirlenmekte ve raporlanmaktadır. Böylece düşük kaliteli, son kullanıcıda okunamayabilecek kodlar üretim aşamasında tespit edilerek kaynağında önlenmektedir.
- **steps:**
  - **no:** "01" | **title:** "Ürün Konumlandırma" | **text:** "Ürün, servo kontrollü sistem tarafından ölçüm pozisyonuna getirilir."
  - **no:** "02" | **title:** "Kod Görüntüleme" | **text:** "DM grade kamerası Datamatrix kodunu görüntüler ve analiz eder."
  - **no:** "03" | **title:** "Kalite Derecelendirme" | **text:** "Kod kalitesi uluslararası standartlara göre grade ölçümüne tabi tutulur."
  - **no:** "04" | **title:** "Raporlama" | **text:** "Ölçüm sonuçları kayıt altına alınır ve kalite raporu oluşturulur."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** DM Grade kamera, 3 eksenli servo, PLC ve C# SCADA
- **techGrid:**
  - **tag:** "GÖRÜNTÜ" | **title:** "DM Grade Kamera" | **text:** "Datamatrix baskı kalitesini uluslararası standartlara göre ölçer ve derecelendirir."
  - **tag:** "HAREKET" | **title:** "3 Eksenli Servo Sistem" | **text:** "Ürün veya kamerayı ölçüm için ideal pozisyona hassas şekilde getirir."
  - **tag:** "OTOMASYON" | **title:** "PLC Altyapısı" | **text:** "Saha akışını ve ölçüm döngüsünü kontrol eder."
  - **tag:** "YAZILIM" | **title:** "C# SCADA Uygulaması" | **text:** "Ölçüm sonuçlarını değerlendirir, raporlar ve Oracle entegrasyonunu yönetir."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** Oracle entegrasyonu
- **integrationDesc:** Sistem Oracle ile entegre çalışmaktadır; DM grade ölçüm sonuçları ve kalite raporları Oracle ile paylaşılarak süreç merkezi olarak izlenmekte ve yönetilmektedir.
- **integrationList:**
  - **bold:** "Oracle" | **text:** "DM grade sonuçları ve kalite raporları Oracle ile entegre şekilde yönetilir."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Okunabilirlik ve kalite güvencesinin güçlendirilmesi
- **resultsGrid:**
  - **title:** "Erken Tespit" | **text:** "Düşük kaliteli kodlar üretim aşamasında tespit edilerek sahaya çıkmadan engellendi."
  - **title:** "Objektif Ölçüm" | **text:** "DM kod kalitesi uluslararası standartlara göre sayısal ve karşılaştırılabilir şekilde ölçüldü."
  - **title:** "Raporlanabilir Kalite" | **text:** "Grade ölçüm raporlarıyla kalite performansı merkezi olarak izlenebilir hale geldi."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Üretim süreçlerinizi de dönüştürmek ister misiniz?
- **ctaSubtitle:** Benzer bir çözümü işletmenize nasıl uygulayabileceğimizi konuşmak için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Phinia Datamatrix Quality Grading Station
- **Sector (sector / tagValue):** Automotive
- **Location (locationValue):** Izmir
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** The project implemented at Phinia's manufacturing facility in the Izmir ESBAŞ Free Zone measures and grades the print quality of DataMatrix codes according to international standards, ensuring reliable readability.

##### Hero Section (EN)
- **heroTitleLine1:** Measurable quality assurance
- **heroTitleLine2:** for DataMatrix codes.
- **heroSub:** The project implemented at Phinia's manufacturing facility in the Izmir ESBAŞ Free Zone measures and grades the print quality of DataMatrix codes according to international standards, ensuring reliable readability.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Ensuring DataMatrix code quality
- **contextP1:** At Phinia's automotive manufacturing plant located in the Izmir ESBAŞ Free Zone, ensuring that DataMatrix codes remain readable under all conditions was a critical requirement.
- **contextP2:** To achieve this, a dedicated quality control station was implemented to evaluate and grade DataMatrix code print quality according to international standards.

##### Problem / Challenge (EN)
- **problemEyebrow:** Need / Challenge
- **problemTitle:** Unreadable DataMatrix codes and quality risks
- **problemLede:** Simply having readable DataMatrix codes was not sufficient. The codes needed to meet international quality standards and remain reliably readable throughout the product lifecycle.
- **problemList:**
  - **bold:** "Code Readability" | **text:** "Poor print quality could result in codes becoming unreadable for end users."
  - **bold:** "Lack of Objective Quality Measurement" | **text:** "There was no standardized system to evaluate and grade code quality."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Automated quality verification with a DM grading station
- **solutionLede:** The implemented DM grading station analyzes DataMatrix codes according to international grading standards, determines quality scores, and generates detailed reports. As a result, low-quality codes can be identified and eliminated before leaving production.
- **steps:**
  - **no:** "01" | **title:** "Product Positioning" | **text:** "The product is positioned at the inspection point using a servo-controlled system."
  - **no:** "02" | **title:** "Code Inspection" | **text:** "The DM grading camera captures and analyzes the DataMatrix code."
  - **no:** "03" | **title:** "Quality Grading" | **text:** "The code is evaluated and graded according to international standards."
  - **no:** "04" | **title:** "Reporting" | **text:** "Measurement results are recorded and quality reports are generated."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment
- **techTitle:** DM Grading Camera, Servo System and SCADA
- **techGrid:**
  - **tag:** "VISION" | **title:** "DM Grading Camera" | **text:** "Industrial camera system that evaluates DataMatrix print quality according to international grading standards."
  - **tag:** "MOTION CONTROL" | **title:** "3-Axis Servo System" | **text:** "Precisely positions the product or camera for inspection."
  - **tag:** "AUTOMATION" | **title:** "PLC Control System" | **text:** "Manages field devices and inspection workflows."
  - **tag:** "SOFTWARE" | **title:** "C# SCADA Application" | **text:** "Evaluates measurement results, generates reports, and exchanges data with Oracle."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** Oracle Integration
- **integrationDesc:** DataMatrix quality measurement results and reports are shared with Oracle, enabling centralized quality management.
- **integrationList:**
  - **bold:** "Oracle" | **text:** "DM grading results and quality reports are integrated with Oracle systems."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Improved readability and quality assurance
- **resultsGrid:**
  - **title:** "Standards-Based Quality Measurement" | **text:** "DataMatrix codes are objectively evaluated according to international quality standards."
  - **title:** "Early Defect Detection" | **text:** "Low-quality printed codes are identified before products reach customers."
  - **title:** "Quality Reporting" | **text:** "All inspection results are recorded, creating complete quality traceability."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Would you like to transform your production processes?
- **ctaSubtitle:** Contact us to discuss how a similar solution can be implemented in your operations.
- **ctaPrimary:** Contact Us

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Phinia - Stație de Evaluare Datamatrix
- **Sector (sector / tagValue):** Industria auto
- **Locație (locationValue):** Izmir
- **Domeniu de Aplicare (scopeVal):** Software și Integrare
- **An (year):** An
- **Descriere Scurtă (description):** Proiectul implementat în fabrica Phinia din Zona Liberă ESBAŞ Izmir măsoară și clasifică calitatea imprimării codurilor DataMatrix conform standardelor internaționale, garantând lizibilitatea acestora.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Asigurarea măsurabilă a calității
- **heroTitleLine2:** pentru codurile DataMatrix.
- **heroSub:** Proiectul implementat în fabrica Phinia din Zona Liberă ESBAŞ Izmir măsoară și clasifică calitatea imprimării codurilor DataMatrix conform standardelor internaționale, garantând lizibilitatea acestora.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Asigurarea calității codurilor DataMatrix
- **contextP1:** În fabrica producătoare de componente auto Phinia din Zona Liberă ESBAŞ Izmir, era esențial ca toate codurile DataMatrix să poată fi citite în mod fiabil de către utilizatorii finali.
- **contextP2:** Pentru acest scop a fost implementată o stație specializată de control al calității care verifică și clasifică codurile conform standardelor internaționale.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Necesitate / Problemă
- **problemTitle:** Coduri DataMatrix ilizibile și riscuri de calitate
- **problemLede:** Nu era suficient ca un cod DataMatrix să fie doar lizibil. Acesta trebuia să respecte standarde internaționale de calitate și să poată fi citit în mod fiabil pe tot parcursul ciclului său de viață.
- **problemList:**
  - **bold:** "Lizibilitatea Codurilor" | **text:** "Calitatea redusă a imprimării putea duce la coduri imposibil de citit de către clientul final."
  - **bold:** "Lipsa unei Evaluări Obiective" | **text:** "Nu exista un sistem standardizat pentru măsurarea și clasificarea calității codurilor."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Verificare automată a calității prin stație DM Grading
- **solutionLede:** Stația DM Grading analizează codurile DataMatrix conform standardelor internaționale, determină gradul de calitate și generează rapoarte detaliate. Astfel, codurile cu calitate redusă sunt identificate înainte de a părăsi procesul de producție.
- **steps:**
  - **no:** "01" | **title:** "Poziționarea Produsului" | **text:** "Produsul este poziționat în punctul de măsurare cu ajutorul unui sistem servo."
  - **no:** "02" | **title:** "Inspectarea Codului" | **text:** "Camera DM Grading capturează și analizează codul DataMatrix."
  - **no:** "03" | **title:** "Clasificarea Calității" | **text:** "Codul este evaluat conform standardelor internaționale de clasificare."
  - **no:** "04" | **title:** "Raportare" | **text:** "Rezultatele măsurătorilor sunt înregistrate și transformate în rapoarte de calitate."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipamente
- **techTitle:** Cameră DM Grading, Sistem Servo și SCADA
- **techGrid:**
  - **tag:** "VIZIUNE" | **title:** "Cameră DM Grading" | **text:** "Sistem industrial de inspectare care măsoară calitatea codurilor DataMatrix conform standardelor internaționale."
  - **tag:** "CONTROL MIȘCARE" | **title:** "Sistem Servo pe 3 Axe" | **text:** "Poziționează cu precizie produsul sau camera pentru măsurare."
  - **tag:** "AUTOMATIZARE" | **title:** "Sistem PLC" | **text:** "Controlează echipamentele din teren și fluxul procesului de inspecție."
  - **tag:** "SOFTWARE" | **title:** "Aplicație SCADA în C#" | **text:** "Evaluează rezultatele măsurătorilor, generează rapoarte și comunică cu Oracle."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Integrare Oracle
- **integrationDesc:** Rezultatele măsurării și rapoartele de calitate sunt transferate către Oracle pentru gestionare centralizată.
- **integrationList:**
  - **bold:** "Oracle" | **text:** "Rezultatele DM Grading și rapoartele de calitate sunt integrate cu sistemele Oracle."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Lizibilitate mai bună și control al calității
- **resultsGrid:**
  - **title:** "Măsurare Conform Standardelor" | **text:** "Codurile DataMatrix sunt evaluate obiectiv conform standardelor internaționale."
  - **title:** "Detectarea Timpurie a Defectelor" | **text:** "Codurile cu imprimare slabă sunt identificate înainte de a ajunge la client."
  - **title:** "Raportare a Calității" | **text:** "Toate rezultatele sunt înregistrate, asigurând trasabilitate completă pentru procesele de calitate."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să vă transformați procesele de producție?
- **ctaSubtitle:** Contactați-ne pentru a discuta implementarea unei soluții similare în compania dumneavoastră.
- **ctaPrimary:** Contactați-ne


---

### 5. Phinia - Elektronik Kart Montaj İzlenebilirliği
**Slug:** `phinia-electronic-board-assembly-traceability` | **ID:** `51` | **Sıra (Order):** `5` | **Yıl:** `2023`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `phinia-electronic-board-assembly-traceability`
- **Sıralama (order):** `5`
- **Yıl (year / referenceDate):** `2023`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `Barcode, Vision Systems, Oracle Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/phinia.svg`
  - **Ana Görsel (image):** `/images/companies/Phinia/Phinia.jpg`
  - **Hero Görseli (heroImage):** `/images/companies/Phinia/Phinia.jpg`
  - **Galeri Görselleri (gallery):**
  - 

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Phinia - Elektronik Kart Montaj İzlenebilirliği
- **Sektör (sector / tagValue):** Otomotiv
- **Konum (locationValue):** İzmir
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Phinia'nın elektronik kart montaj hattında, tüm operasyonları tekil ürün bazında takip eden kapsamlı bir izlenebilirlik sistemi hayata geçirildi. Elektronik kartlar hat girişinden itibaren kod okuyucular ve kalite kontrol kameraları aracılığıyla izlenmekte, her istasyondaki OK–NOK sonuçları kart geçmişiyle ilişkilendirilmektedir. Süreç sonunda müşteri etiketleri otomatik olarak oluşturulmaktadır. Oracle entegrasyonu sayesinde operasyon ve kalite verileri merkezi olarak yönetilmiş, uygun olmayan ürünlerin ilerlemesi engellenmiş ve müşteri etiketleme doğruluğu güvence altına alınmıştır.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Elektronik Kart
- **heroTitleLine2:** Montaj İzlenebilirliği
- **heroSub:** Phinia'nın İzmir ESBAŞ tesisinde uygulanan proje, elektronik kartların montaj hattındaki operasyon adımlarını tekil olarak izleyip kalite sonuçlarıyla ilişkilendirerek süreç sonunda doğru müşteri etiketinin otomatik üretilmesini ve sevkiyat güvenilirliğinin artırılmasını sağlamaktadır.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Operasyon bazlı tekil kart takibi
- **contextP1:** Phinia'nın İzmir ESBAŞ Serbest Bölge'deki fabrikası, otomotiv sektörüne yönelik üretim yapmaktadır.
- **contextP2:** Bu fabrikada hayata geçirilen projede, elektronik kartlar montaj hattındaki tüm operasyonlar boyunca tekil olarak izlenmiş ve süreç sonunda müşteri etiketi basılmıştır.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Kart operasyon geçmişi ve kalite ilişkilendirme ihtiyacı
- **problemLede:** Elektronik kartların hangi operasyondan geçtiğinin ve her operasyondaki kalite sonucunun tekil kart bazında izlenebilmesi gerekiyordu. Üretim ilerleyişinin ve kalite durumunun izlenememesi, süreç takibi ve kalite kontrolünü zorlaştırıyor; ayrıca süreç sonunda doğru müşteri etiketinin basıldığının güvence altına alınması gerekiyordu.
- **problemList:**
  - **bold:** "Operasyon Geçmişi Takibi" | **text:** "Kartların istasyon bazlı ilerleyişi tekil seviyede izlenemiyordu."
  - **bold:** "Kalite-Görev Eşlemesi" | **text:** "OK-NOK kalite sonuçlarının doğru kartla ilişkilendirilmesi ve etiket doğruluğu güvence altına alınmalıydı."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Kod okuma + kamera kalite + otomatik etiketleme akışı
- **solutionLede:** Elektronik kartlar, montaj hattına girişten itibaren tekil olarak tanımlanarak operasyon operasyon izlendi. Her operasyonda kartın durumu kayıt altına alındı; kalite kontrol istasyonlarında kamera sistemleri aracılığıyla OK-NOK (uygun/uygun değil) sonuçları alınarak karta ilişkilendirildi. Sürecin sonunda, izlenebilirlik kayıtlarına uygun olarak müşteri etiketi basıldı. Böylece her elektronik kart, montaj başından etiketleme aşamasına kadar kesintisiz izlenebilir hale getirildi.
- **steps:**
  - **no:** "01" | **title:** "Kart Tanımlama" | **text:** "Elektronik kart üretim hattına girişte tekil olarak tanımlanır."
  - **no:** "02" | **title:** "Operasyon Takibi" | **text:** "Kartın geçtiği her istasyon ve operasyon kayıt altına alınır."
  - **no:** "03" | **title:** "Kalite Kontrol" | **text:** "Kamera sistemlerinden alınan OK–NOK sonuçları ilgili kartla ilişkilendirilir."
  - **no:** "04" | **title:** "Etiketleme" | **text:** "İzlenebilirlik kayıtlarına uygun müşteri etiketi otomatik olarak oluşturulur."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** Kod okuyucular, kamera sistemleri, PLC ve C# SCADA
- **techGrid:**
  - **tag:** "TANIMA" | **title:** "Kod Okuyucular" | **text:** "Kartları operasyon bazında tanımlayan barkod/kod okuma altyapısı."
  - **tag:** "KALİTE" | **title:** "Kamera Sistemleri" | **text:** "İstasyonlarda kalite kontrol için OK-NOK sonuçlarını üreten görüntü işleme altyapısı."
  - **tag:** "OTOMASYON" | **title:** "PLC Yapısı" | **text:** "Saha akışını ve istasyon geçişlerini yöneten kontrol sistemi."
  - **tag:** "YAZILIM" | **title:** "C# SCADA" | **text:** "Operasyon takibi, kalite ilişkilendirme, müşteri etiketi basımı ve Oracle veri akışını yöneten merkezi uygulama."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** Oracle entegrasyonu
- **integrationDesc:** Sistem Oracle ile entegre çalışmaktadır; kartların operasyon bazlı izlenebilirlik ve kalite (OK-NOK) verileri ile etiketleme sonuçları Oracle ile paylaşılarak süreç merkezi olarak izlenmekte ve yönetilmektedir.
- **integrationList:**
  - **bold:** "Oracle" | **text:** "Operasyon, kalite ve etiketleme verileri Oracle ile entegre şekilde yönetilir."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Kesintisiz kart izlenebilirliği ve kalite güvencesi
- **resultsGrid:**
  - **title:** "Tekil Operasyon İzleme" | **text:** "Her elektronik kart için montaj başından itibaren operasyon bazlı izlenebilirlik sağlandı."
  - **title:** "Kalite Kontrol İzlenebilirliği" | **text:** "Kamera sistemlerinden gelen OK-NOK sonuçları kart bazında ilişkilendirilerek kalite takibi güçlendirildi."
  - **title:** "Etiket Doğruluğu" | **text:** "Süreç sonunda doğru müşteri etiketinin basılmasıyla sevkiyat doğruluğu güvence altına alındı."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Üretim süreçlerinizi de dönüştürmek ister misiniz?
- **ctaSubtitle:** Benzer bir çözümü işletmenize nasıl uygulayabileceğimizi konuşmak için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Phinia Electronic Board Assembly Traceability
- **Sector (sector / tagValue):** Automotive
- **Location (locationValue):** Izmir
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** The project implemented at Phinia's manufacturing facility in the Izmir ESBAŞ Free Zone provides individual tracking of electronic boards throughout all assembly operations, associates quality results with each unit, and automatically generates customer labels at the end of the process.

##### Hero Section (EN)
- **heroTitleLine1:** Operation-level traceability
- **heroTitleLine2:** for electronic boards.
- **heroSub:** The project implemented at Phinia's manufacturing facility in the Izmir ESBAŞ Free Zone provides individual tracking of electronic boards throughout all assembly operations, associates quality results with each unit, and automatically generates customer labels at the end of the process.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** End-to-end traceability in electronic board production
- **contextP1:** Electronic boards manufactured at Phinia's automotive production facility in the Izmir ESBAŞ Free Zone pass through multiple assembly and quality control operations.
- **contextP2:** The project was implemented to provide complete traceability of each board's production history and quality results at an individual product level.

##### Problem / Challenge (EN)
- **problemEyebrow:** Need / Challenge
- **problemTitle:** Tracking operations and quality data for each board
- **problemLede:** It was necessary to monitor which stations each electronic board passed through and record quality results at every operation. In addition, ensuring the correct customer label was applied at the end of the process was a critical requirement.
- **problemList:**
  - **bold:** "Limited Operational Visibility" | **text:** "The complete operation history of each board could not be easily traced across the production line."
  - **bold:** "Quality Data Association" | **text:** "Associating OK–NOK inspection results with individual products was difficult using manual processes."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Board-level operation and quality tracking
- **solutionLede:** Electronic boards are individually identified and tracked from the beginning of the assembly process. Status updates from each operation and OK–NOK quality results from vision inspection stations are associated with the corresponding board. Customer labels are automatically generated at the end of production.
- **steps:**
  - **no:** "01" | **title:** "Board Identification" | **text:** "Each electronic board receives a unique identity when entering the production line."
  - **no:** "02" | **title:** "Operation Tracking" | **text:** "Every station and production operation is recorded throughout the process."
  - **no:** "03" | **title:** "Quality Verification" | **text:** "OK–NOK results from camera inspection systems are linked to the relevant board."
  - **no:** "04" | **title:** "Label Generation" | **text:** "Customer labels are automatically generated based on traceability records."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment
- **techTitle:** Code readers, machine vision and SCADA infrastructure
- **techGrid:**
  - **tag:** "IDENTIFICATION" | **title:** "Code Readers" | **text:** "Barcode and code reading systems used to identify boards throughout production."
  - **tag:** "VISION" | **title:** "Quality Inspection Cameras" | **text:** "Industrial camera systems providing OK–NOK inspection results at production stations."
  - **tag:** "AUTOMATION" | **title:** "PLC Infrastructure" | **text:** "Controls production line flow and manages station-level processes."
  - **tag:** "SOFTWARE" | **title:** "C# SCADA Application" | **text:** "Central software managing operational tracking, quality data, labeling, and Oracle integration."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** Oracle Integration
- **integrationDesc:** Operation records, quality inspection results, and labeling data are shared with Oracle for centralized process management.
- **integrationList:**
  - **bold:** "Oracle" | **text:** "Board traceability, quality, and labeling records are integrated with Oracle systems."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Full visibility and quality assurance
- **resultsGrid:**
  - **title:** "Individual Board Traceability" | **text:** "Every board is fully traceable throughout the assembly process."
  - **title:** "Improved Quality Monitoring" | **text:** "OK–NOK inspection results are linked to each board, increasing quality visibility."
  - **title:** "Accurate Labeling" | **text:** "Customer labels are automatically generated based on traceability data, ensuring shipment accuracy."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Would you like to transform your production processes?
- **ctaSubtitle:** Contact us to discuss how a similar solution can be implemented in your operations.
- **ctaPrimary:** Contact Us

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Phinia - Trasabilitate Linia de Asamblare PCB
- **Sector (sector / tagValue):** Industria auto
- **Locație (locationValue):** Izmir
- **Domeniu de Aplicare (scopeVal):** Software și Integrare
- **An (year):** An
- **Descriere Scurtă (description):** Proiectul implementat în fabrica Phinia din Zona Liberă ESBAŞ Izmir asigură urmărirea individuală a plăcilor electronice pe parcursul tuturor operațiunilor de asamblare, asocierea rezultatelor de calitate și generarea automată a etichetelor pentru client.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Trasabilitate la nivel de operațiune
- **heroTitleLine2:** pentru plăcile electronice.
- **heroSub:** Proiectul implementat în fabrica Phinia din Zona Liberă ESBAŞ Izmir asigură urmărirea individuală a plăcilor electronice pe parcursul tuturor operațiunilor de asamblare, asocierea rezultatelor de calitate și generarea automată a etichetelor pentru client.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Trasabilitate completă în producția de plăci electronice
- **contextP1:** Plăcile electronice produse în fabrica auto Phinia din Zona Liberă ESBAŞ Izmir trec prin multiple operațiuni de asamblare și control al calității.
- **contextP2:** Proiectul a fost implementat pentru a asigura trasabilitatea completă a istoricului de producție și a rezultatelor de calitate pentru fiecare placă electronică.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Necesitate / Problemă
- **problemTitle:** Monitorizarea operațiunilor și a rezultatelor de calitate
- **problemLede:** Era necesară monitorizarea stațiilor prin care trece fiecare placă electronică și înregistrarea rezultatelor de calitate pentru fiecare operațiune. De asemenea, eticheta corectă pentru client trebuia garantată la finalul procesului.
- **problemList:**
  - **bold:** "Vizibilitate Operațională Limitată" | **text:** "Istoricul complet al operațiunilor pentru fiecare placă nu putea fi urmărit cu ușurință."
  - **bold:** "Asocierea Datelor de Calitate" | **text:** "Corelarea rezultatelor OK–NOK cu produsele individuale era dificilă prin procese manuale."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Sistem de urmărire a operațiunilor și calității la nivel de placă
- **solutionLede:** Fiecare placă electronică este identificată și urmărită individual de la începutul procesului de asamblare. Rezultatele OK–NOK provenite de la sistemele de inspecție vizuală sunt asociate cu produsul, iar etichetele clientului sunt generate automat la finalul procesului.
- **steps:**
  - **no:** "01" | **title:** "Identificarea Plăcii" | **text:** "Fiecare placă electronică primește o identitate unică la intrarea pe linia de producție."
  - **no:** "02" | **title:** "Urmărirea Operațiunilor" | **text:** "Fiecare stație și operațiune de producție este înregistrată pe parcursul procesului."
  - **no:** "03" | **title:** "Verificarea Calității" | **text:** "Rezultatele OK–NOK provenite de la camerele de inspecție sunt asociate cu placa respectivă."
  - **no:** "04" | **title:** "Generarea Etichetei" | **text:** "Etichetele clientului sunt generate automat pe baza înregistrărilor de trasabilitate."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipamente
- **techTitle:** Cititoare de coduri, viziune artificială și infrastructură SCADA
- **techGrid:**
  - **tag:** "IDENTIFICARE" | **title:** "Cititoare de Coduri" | **text:** "Sisteme de citire a codurilor și codurilor de bare utilizate pentru identificarea plăcilor electronice."
  - **tag:** "VIZIUNE" | **title:** "Camere de Control al Calității" | **text:** "Camere industriale care furnizează rezultate de inspecție OK–NOK."
  - **tag:** "AUTOMATIZARE" | **title:** "Infrastructură PLC" | **text:** "Controlează fluxul de producție și procesele dintre stații."
  - **tag:** "SOFTWARE" | **title:** "Aplicație SCADA în C#" | **text:** "Gestionează trasabilitatea operațiunilor, rezultatele de calitate, etichetarea și integrarea Oracle."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Integrare Oracle
- **integrationDesc:** Datele privind operațiunile, rezultatele de calitate și etichetarea sunt transferate către Oracle pentru administrare centralizată.
- **integrationList:**
  - **bold:** "Oracle" | **text:** "Datele de trasabilitate, calitate și etichetare sunt integrate cu sistemele Oracle."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Vizibilitate completă și asigurarea calității
- **resultsGrid:**
  - **title:** "Trasabilitate Individuală" | **text:** "Fiecare placă electronică este urmărită pe întreg parcursul procesului de asamblare."
  - **title:** "Monitorizare Îmbunătățită a Calității" | **text:** "Rezultatele OK–NOK sunt asociate cu fiecare produs, oferind vizibilitate completă asupra calității."
  - **title:** "Etichetare Corectă" | **text:** "Etichetele clientului sunt generate automat pe baza datelor de trasabilitate, asigurând corectitudinea livrărilor."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să vă transformați procesele de producție?
- **ctaSubtitle:** Contactați-ne pentru a discuta implementarea unei soluții similare în compania dumneavoastră.
- **ctaPrimary:** Contactați-ne


---

### 6. Phinia - Kaplama Hattı İzlenebilirlik
**Slug:** `phinia-coating-line-traceability` | **ID:** `52` | **Sıra (Order):** `6` | **Yıl:** `2023`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `phinia-coating-line-traceability`
- **Sıralama (order):** `6`
- **Yıl (year / referenceDate):** `2023`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `OPC-UA, C# SCADA, Barcode, PLC, Oracle Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/phinia.svg`
  - **Ana Görsel (image):** `/images/companies/Delphi/Delphi-Fabrika.jpg`
  - **Hero Görseli (heroImage):** `/images/companies/Delphi/Delphi-Fabrika.jpg`
  - **Galeri Görselleri (gallery):**
  - /images/companies/Delphi/Delphi-Fabrika.jpg
  - /images/companies/Delphi/delphi_dizel.jpg

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Phinia - Kaplama Hattı İzlenebilirlik
- **Sektör (sector / tagValue):** Otomotiv
- **Konum (locationValue):** İzmir
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Phinia'nın İzmir ESBAŞ Serbest Bölge'deki fabrikasında hayata geçirilen bu projede yükleme ve kaplama süreçleri bara ve batch bazında izlenebilir hale getirilmiştir.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Kaplama Hattında Uçtan Uca
- **heroTitleLine2:**  İzlenebilirlik ve Proses Kontrolü
- **heroSub:** Phinia'nın İzmir ESBAŞ Serbest Bölge'deki fabrikasında hayata geçirilen bu projede yükleme ve kaplama süreçleri bara ve batch bazında izlenebilir hale getirilmiştir.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Kaplama tesisinde bara/batch temelli süreç görünürlüğü
- **contextP1:** Phinia'nın İzmir ESBAŞ Serbest Bölge'deki fabrikası, otomotiv sektörüne yönelik üretim yapmaktadır.
- **contextP2:** Kaplama tesisinde uygulanan proje ile yükleme ve kaplama operasyonları bara ve batch ilişkisi üzerinden dijital olarak yönetilir hale getirilmiştir.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Yükleme kuralları ve reçete uyumunun güvenilir yönetimi
- **problemLede:** Kaplama tesisinde hangi ürünün hangi baraya, hangi baranın hangi batch'e ait olduğu ve yükleme koşullarının güvenilir biçimde yönetilmesi gerekiyordu. Manuel yürütülen süreçler yanlış yükleme, reçete uyumsuzluğu ve izlenebilirlik boşluğu riski doğuruyordu.
- **problemList:**
  - **bold:** "Eşleştirme Karmaşıklığı" | **text:** "Bara, ürün ve batch ilişkilerinin manuel takip edilmesi hataya açıktı."
  - **bold:** "Kural Uyum Riski" | **text:** "Ürün grubu, min/max limit ve reçete koşullarının operasyon sırasında tutarlı uygulanması gerekiyordu."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** OPC-UA ile PLC entegre bara ve batch izlenebilirliği
- **solutionLede:** PLC ile OPC-UA üzerinden doğrudan iletişim kuruldu. Yükleme noktasında alınan bara bilgisi anlık batch verisiyle eşleştirildi, bara numarası batch kaydında korundu ve yükleme koşulları yönetim panelinden tanımlanarak yalnızca izin verilen şartlarda yükleme sağlandı.
- **steps:**
  - **no:** "01" | **title:** "Bara ve Batch Eşleştirme" | **text:** "Yükleme noktasında okunan bara bilgisi, tanımlı formatta gelen anlık batch bilgisiyle eşleştirilir."
  - **no:** "02" | **title:** "Kural ve Reçete Tanımı" | **text:** "Bara-ürün eşleştirmesi, ürün grubu, min/max limitler ve PLC reçete ilişkileri panel üzerinden yönetilir."
  - **no:** "03" | **title:** "Koşullu Yükleme" | **text:** "Kaplama tesisi girişinde yükleme operasyonu kurallara göre doğrulanır ve ürün miktarı yüzey alanı hesabı için PLC'ye aktarılır."
  - **no:** "04" | **title:** "Çıkış Sonuç Takibi" | **text:** "Kaplama çıkışında bara ve batch ile sonuç bilgisi eşleştirilerek kayıt altına alınır."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** C# SCADA, OPC-UA, barkod okuyucular ve PLC altyapısı
- **techGrid:**
  - **tag:** "YAZILIM" | **title:** "C# Tabanlı SCADA" | **text:** "Bara-batch eşleştirmesi, kural kontrolü, veri yönetimi ve izlenebilirlik kayıtlarını yönetir."
  - **tag:** "HABERLEŞME" | **title:** "OPC-UA Protokolü" | **text:** "SCADA ile PLC arasında gerçek zamanlı ve güvenilir veri alışverişi sağlar."
  - **tag:** "OTOMASYON" | **title:** "PLC ve Reçete Yönetimi" | **text:** "Saha akışını, reçete eşleştirmesini ve yükleme doğrulamasını kontrol eder."
  - **tag:** "VERI TOPLAMA" | **title:** "Barkod Okuyucular" | **text:** "Bara ve ürün bilgilerini okuyarak operasyonu doğru verilerle başlatır."
  - **tag:** "YONETIM" | **title:** "Yonetim Paneli" | **text:** "Bara-ürün, ürün grubu, min/max yükleme limitleri ve reçete tanımlarını merkezi olarak yönetir."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** OPC-UA ve Oracle ile uçtan uca veri akışı
- **integrationDesc:** Sistem saha PLC'si ile OPC-UA üzerinden, kurumsal tarafta ise Oracle ile entegre çalışır. Bara, batch, reçete ve yükleme verileri OPC-UA ile alınırken; izlenebilirlik ve sonuç verileri Oracle tarafında merkezi olarak yönetilir.
- **integrationList:**
  - **bold:** "PLC (OPC-UA)" | **text:** "Bara, batch, reçete ve yükleme bilgileri sahadan gerçek zamanlı alınır."
  - **bold:** "Oracle" | **text:** "İzlenebilirlik ve sonuç verileri kurumsal katmanda paylaşılır ve raporlanır."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Güvenilir süreç yönetimi ve tam izlenebilirlik
- **resultsGrid:**
  - **title:** "Bara/Batch Bazlı Takip" | **text:** "Yükleme ve kaplama süreçleri baştan sona bara ve batch seviyesinde izlenebilir hale geldi."
  - **title:** "Koşul Bazlı Doğrulama" | **text:** "Bara-ürün eşleştirmesi, ürün grubu ve min/max limitlerle yalnızca onaylı koşullarda yükleme sağlandı."
  - **title:** "Süreç Güvenilirliği" | **text:** "PLC reçete eşleştirmesi ve OPC-UA iletişimi sayesinde hatalı operasyon riski azaltıldı."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Üretim süreçlerinizi de dönüştürmek ister misiniz?
- **ctaSubtitle:** Benzer bir çözümü işletmenize nasıl uygulayabileceğimizi konuşmak için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Phinia Coating Line Traceability
- **Sector (sector / tagValue):** Automotive
- **Location (locationValue):** Izmir
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** At Phinia's facility in the Izmir ESBAS Free Zone, loading and coating operations were made fully traceable on a bar/rack and batch basis.

##### Hero Section (EN)
- **heroTitleLine1:** End-to-End Traceability and 
- **heroTitleLine2:** Process Control in the Coating Line
- **heroSub:** At Phinia's facility in the Izmir ESBAS Free Zone, loading and coating operations were made fully traceable on a bar/rack and batch basis.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Bar/rack and batch visibility in coating operations
- **contextP1:** Phinia's manufacturing facility in the Izmir ESBAS Free Zone serves the automotive industry.
- **contextP2:** Within this project at the coating plant, loading and coating operations were digitized and managed through bar/rack and batch relationships.

##### Problem / Challenge (EN)
- **problemEyebrow:** Need / Challenge
- **problemTitle:** Reliable control of loading rules and recipe compliance
- **problemLede:** The plant needed a reliable way to manage which product was loaded onto which bar/rack, which bar/rack belonged to which batch, and applicable loading constraints. Manual handling introduced risks of incorrect loading, recipe mismatch, and traceability gaps.
- **problemList:**
  - **bold:** "Complex Mapping" | **text:** "Manual tracking of bar/rack-product-batch relationships was error-prone."
  - **bold:** "Constraint Enforcement" | **text:** "Product group, min/max loading limits, and recipe conditions had to be enforced consistently in operations."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** PLC-integrated bar/rack and batch traceability over OPC-UA
- **solutionLede:** Direct communication with the PLC was established via OPC-UA. Bar/rack data captured at the loading station was matched with real-time batch data, bar/rack IDs were retained on batch records, and authorized loading conditions were managed through a central panel.
- **steps:**
  - **no:** "01" | **title:** "Bar/Rack and Batch Matching" | **text:** "Bar/rack data read at loading is matched with live batch information in the predefined format."
  - **no:** "02" | **title:** "Rules and Recipe Setup" | **text:** "Bar/rack-product mappings, product groups, min/max limits, and PLC recipe relations are configured in the panel."
  - **no:** "03" | **title:** "Conditional Loading" | **text:** "Loading at coating entry is validated against approved rules and product quantity is sent to PLC for surface-area calculations."
  - **no:** "04" | **title:** "Exit Result Tracking" | **text:** "At coating exit, bar/rack and batch records are linked with result data and stored."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment
- **techTitle:** C# SCADA, OPC-UA, barcode scanners, and PLC infrastructure
- **techGrid:**
  - **tag:** "SOFTWARE" | **title:** "C# SCADA Application" | **text:** "Manages bar/rack-batch matching, rule validation, data flow, and traceability records."
  - **tag:** "COMMUNICATION" | **title:** "OPC-UA Protocol" | **text:** "Provides reliable real-time data exchange between SCADA and PLC."
  - **tag:** "AUTOMATION" | **title:** "PLC and Recipe Control" | **text:** "Controls shop-floor workflows, recipe mapping, and loading validation."
  - **tag:** "DATA CAPTURE" | **title:** "Barcode Scanners" | **text:** "Read bar/rack and product identifiers to initiate validated operations."
  - **tag:** "MANAGEMENT" | **title:** "Administration Panel" | **text:** "Centralizes bar/rack-product mapping, product groups, loading limits, and recipe definitions."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** End-to-end data flow with OPC-UA and Oracle
- **integrationDesc:** The system integrates with the shop-floor PLC over OPC-UA and with Oracle on the enterprise side. Bar/rack, batch, recipe, and loading data are acquired through OPC-UA, while traceability and result data are shared centrally in Oracle.
- **integrationList:**
  - **bold:** "PLC (OPC-UA)" | **text:** "Bar/rack, batch, recipe, and loading data are collected from the line in real time."
  - **bold:** "Oracle" | **text:** "Traceability and process result data are shared and reported in the enterprise layer."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Reliable process governance and full traceability
- **resultsGrid:**
  - **title:** "Bar/Rack and Batch Traceability" | **text:** "Loading and coating processes became fully traceable at bar/rack and batch level."
  - **title:** "Rule-Based Loading" | **text:** "Only approved loading operations were allowed using product group checks and min/max limits."
  - **title:** "Higher Process Reliability" | **text:** "PLC recipe mapping and direct OPC-UA communication reduced operational mismatch risks."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Would you like to transform your production processes?
- **ctaSubtitle:** Contact us to discuss how a similar solution can be implemented in your operations.
- **ctaPrimary:** Contact Us

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Phinia - Trasabilitatea liniei de acoperire
- **Sector (sector / tagValue):** Industria auto
- **Locație (locationValue):** Izmir
- **Domeniu de Aplicare (scopeVal):** Software și Integrare
- **An (year):** An
- **Descriere Scurtă (description):** În fabrica Phinia din Zona Liberă ESBAȘ Izmir, procesele de încărcare și acoperire au fost făcute complet trasabile la nivel de bară și batch.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Trasabilitate End-to-End și
- **heroTitleLine2:** Controlul Procesului în Linia de Acoperire
- **heroSub:** În fabrica Phinia din Zona Liberă ESBAȘ Izmir, procesele de încărcare și acoperire au fost făcute complet trasabile la nivel de bară și batch.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Vizibilitate pe bară și batch în operațiile de acoperire
- **contextP1:** Fabrica Phinia din Zona Liberă ESBAȘ Izmir produce pentru industria auto.
- **contextP2:** În acest proiect implementat în instalația de acoperire, operațiile de încărcare și acoperire au fost digitalizate și gestionate prin relația bară-batch.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Necesitate / Problemă
- **problemTitle:** Control fiabil al regulilor de încărcare și al conformității rețetelor
- **problemLede:** Era necesară gestionarea fiabilă a relației dintre produs, bară și batch, precum și a condițiilor de încărcare. Administrarea manuală genera riscuri de încărcare incorectă, neconcordanțe de rețetă și goluri de trasabilitate.
- **problemList:**
  - **bold:** "Mapare Complexă" | **text:** "Urmărirea manuală a relațiilor bară-produs-batch era predispusă la erori."
  - **bold:** "Respectarea Constrângerilor" | **text:** "Condițiile privind grupa de produse, limitele min/max și rețetele trebuiau aplicate consistent în operații."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Trasabilitate bară și batch integrată cu PLC prin OPC-UA
- **solutionLede:** Comunicarea directă cu PLC-ul a fost realizată prin OPC-UA. Informația barei citite la stația de încărcare a fost asociată cu datele batch în timp real, iar condițiile autorizate de încărcare au fost administrate centralizat prin panoul de management.
- **steps:**
  - **no:** "01" | **title:** "Asociere Bară și Batch" | **text:** "Datele barei citite la încărcare sunt corelate cu informația batch în formatul definit."
  - **no:** "02" | **title:** "Definire Reguli și Rețete" | **text:** "Asocierile bară-produs, grupele de produse, limitele min/max și relațiile de rețetă PLC sunt configurate în panou."
  - **no:** "03" | **title:** "Încărcare Condiționată" | **text:** "La intrarea în instalația de acoperire, încărcarea este validată conform regulilor, iar cantitatea este transmisă către PLC pentru calculul suprafeței."
  - **no:** "04" | **title:** "Urmărirea Rezultatelor la Ieșire" | **text:** "La ieșire, datele de bară și batch sunt legate de rezultatele procesului și înregistrate."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipamente
- **techTitle:** SCADA în C#, OPC-UA, cititoare coduri de bare și infrastructură PLC
- **techGrid:**
  - **tag:** "SOFTWARE" | **title:** "Aplicație SCADA în C#" | **text:** "Gestionează asocierea bară-batch, validarea regulilor, fluxul de date și înregistrările de trasabilitate."
  - **tag:** "COMUNICAȚIE" | **title:** "Protocol OPC-UA" | **text:** "Asigură schimb de date fiabil și în timp real între SCADA și PLC."
  - **tag:** "AUTOMATIZARE" | **title:** "PLC și Controlul Rețetelor" | **text:** "Coordonează fluxul din teren, maparea rețetelor și validarea încărcării."
  - **tag:** "COLECTARE DATE" | **title:** "Cititoare Coduri de Bare" | **text:** "Citesc identificatorii de bară și produs pentru pornirea operațiilor validate."
  - **tag:** "MANAGEMENT" | **title:** "Panou de Administrare" | **text:** "Centralizează asocierile bară-produs, grupele de produse, limitele de încărcare și definițiile de rețetă."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Flux de date end-to-end cu OPC-UA și Oracle
- **integrationDesc:** Sistemul se integrează cu PLC-ul de pe linie prin OPC-UA și cu Oracle la nivel corporate. Datele de bară, batch, rețetă și încărcare sunt preluate prin OPC-UA, iar datele de trasabilitate și rezultate sunt gestionate central în Oracle.
- **integrationList:**
  - **bold:** "PLC (OPC-UA)" | **text:** "Datele de bară, batch, rețetă și încărcare sunt colectate în timp real din producție."
  - **bold:** "Oracle" | **text:** "Datele de trasabilitate și rezultatele procesului sunt partajate și raportate la nivel enterprise."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Guvernanță fiabilă a procesului și trasabilitate completă
- **resultsGrid:**
  - **title:** "Trasabilitate pe Bară și Batch" | **text:** "Procesele de încărcare și acoperire au devenit complet trasabile la nivel de bară și batch."
  - **title:** "Încărcare Bazată pe Reguli" | **text:** "Au fost permise doar operațiile aprobate, pe baza grupelor de produse și limitelor min/max."
  - **title:** "Fiabilitate Crescută" | **text:** "Maparea rețetelor PLC și comunicarea directă OPC-UA au redus riscurile operaționale."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să vă transformați procesele de producție?
- **ctaSubtitle:** Contactați-ne pentru a discuta implementarea unei soluții similare în compania dumneavoastră.
- **ctaPrimary:** Contactați-ne


---

### 7. Phinia - Fırın Prosesi İzlenebilirlik
**Slug:** `phinia-oven-process-traceability` | **ID:** `53` | **Sıra (Order):** `7` | **Yıl:** `2023`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `phinia-oven-process-traceability`
- **Sıralama (order):** `7`
- **Yıl (year / referenceDate):** `2023`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `OPC-UA, C# SCADA, Barcode, PLC, Oracle Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/phinia.svg`
  - **Ana Görsel (image):** `/images/companies/Phinia/Phinia.jpg`
  - **Hero Görseli (heroImage):** `/images/companies/Phinia/Phinia.jpg`
  - **Galeri Görselleri (gallery):**
  - /images/companies/Phinia/Phinia.jpg
  - /images/companies/Delphi/Delphi-Fabrika.jpg

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Phinia - Fırın Prosesi İzlenebilirlik
- **Sektör (sector / tagValue):** Otomotiv
- **Konum (locationValue):** İzmir
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Phinia'nın İzmir ESBAŞ Serbest Bölge'deki tesisinde kaplama sonrası fırın prosesi, ürünlerin sepet ve batch bazında takip edilmesiyle tam izlenebilir hale getirilmiştir.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Fırın Sürecinde 
- **heroTitleLine2:** Tam İzlenebilirlik ve Kalite Güvencesi
- **heroSub:** Phinia'nın İzmir ESBAŞ Serbest Bölge'deki tesisinde kaplama sonrası fırın prosesi, ürünlerin sepet ve batch bazında takip edilmesiyle tam izlenebilir hale getirilmiştir.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Kaplama sonrası fırın prosesinde uçtan uca kontrol
- **contextP1:** Phinia'nın İzmir ESBAŞ Serbest Bölge'deki fabrikası otomotiv sektörüne üretim yapmaktadır.
- **contextP2:** Bu projede kaplama sonrası fırın sürecinin izlenebilirliği için ürünler sepet ve batch bazında takip edilerek kritik proses parametreleri kontrol altına alınmıştır.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Fırın giriş koşulları ve proses parametrelerinde kalite riski
- **problemLede:** Kaplama sonrası ürünlerin fırına yalnızca uygun koşullarda girmesi ve kritik proses parametrelerinin izlenmesi gerekiyordu. Giriş koşullarının ve proses değişkenlerinin kontrolsüz kalması kalite riski oluşturuyordu.
- **problemList:**
  - **bold:** "Giriş Doğrulama İhtiyacı" | **text:** "Süre ve kaplama OK/NOK koşullarına göre uygun olmayan ürünlerin fırına girişi engellenmeliydi."
  - **bold:** "İzlenebilirlik Derinliği" | **text:** "Ürünlerin tekil, bara-sepet ve batch düzeyinde izlenebilirliği ve raporlanabilirliği gerekliydi."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Sepet-batch ilişkilendirmesi ve gerçek zamanlı fırın parametre takibi
- **solutionLede:** Fırın girişinde sepetleme hazırlığıyla yeni batch ilişkilendirmesi kuruldu. Kaplama sonrası giriş koşulları doğrulandı; fırın süresince kapak açılma, açık kalma süresi, kürlenme süresi ve kürlenme sıcaklığına çıkış gibi kritik parametreler izlenerek süreç güvence altına alındı.
- **steps:**
  - **no:** "01" | **title:** "Sepet ve Batch Hazırlığı" | **text:** "Fırın girişinde ürünler sepetlenir ve yeni batch ilişkisi oluşturulur."
  - **no:** "02" | **title:** "Giriş Koşulu Kontrolü" | **text:** "Fırına giriş öncesi süre ve kaplama OK/NOK koşulları doğrulanır."
  - **no:** "03" | **title:** "Proses Parametre İzleme" | **text:** "Kapak açılma olayları, kapak açık kalma süresi, kürlenme süresi ve sıcaklık parametreleri izlenir."
  - **no:** "04" | **title:** "Birim Bazlı Raporlama" | **text:** "Tekil ürün, bara-sepet ve batch düzeyinde izlenebilirlik kayıtları oluşturulur ve raporlanır."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** C# SCADA, OPC-UA, barkod okuyucular ve PLC izleme altyapısı
- **techGrid:**
  - **tag:** "YAZILIM" | **title:** "C# Tabanlı SCADA" | **text:** "Sepet-batch ilişkilendirmesi, koşul doğrulaması ve raporlama süreçlerini yönetir."
  - **tag:** "HABERLEŞME" | **title:** "OPC-UA Protokolü" | **text:** "SCADA ile PLC arasında gerçek zamanlı ve güvenilir veri iletişimi sağlar."
  - **tag:** "VERI TOPLAMA" | **title:** "Barkod Okuyucular" | **text:** "Sepet ve ürün kimlik bilgilerini okuyarak fırın sürecini başlatır."
  - **tag:** "OTOMASYON" | **title:** "PLC Tabanlı Proses İzleme" | **text:** "Fırın giriş koşulları ile kritik parametreleri (kapak, süre, sıcaklık) izler ve denetler."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** OPC-UA ve Oracle ile merkezi proses yönetimi
- **integrationDesc:** Sistem saha PLC'si ile OPC-UA üzerinden doğrudan, kurumsal tarafta Oracle ile entegre çalışmaktadır. Sepet-batch, fırın giriş koşulları ve proses verileri sahadan alınır; izlenebilirlik ve rapor verileri Oracle ile merkezi yönetilir.
- **integrationList:**
  - **bold:** "PLC (OPC-UA)" | **text:** "Sepet, batch, giriş koşulları ve fırın parametreleri gerçek zamanlı izlenir."
  - **bold:** "Oracle" | **text:** "İzlenebilirlik kayıtları ve birim bazlı raporlar kurumsal katmanda paylaşılır."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Kalite güvencesi ve denetlenebilir fırın süreci
- **resultsGrid:**
  - **title:** "Koşullu Giriş Kontrolü" | **text:** "Süre ve kaplama OK/NOK doğrulamasıyla yalnızca uygun ürünlerin prosese girişi sağlandı."
  - **title:** "Kritik Parametre Takibi" | **text:** "Fırın prosesindeki kapak, kürlenme süresi ve sıcaklık parametreleri sürekli izlenerek kalite güvence altına alındı."
  - **title:** "Tam İzlenebilirlik" | **text:** "Ürünler tekil, bara-sepet ve batch bazında takip edilip birim bazlı raporlarla süreç denetlenebilir hale geldi."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Üretim süreçlerinizi de dönüştürmek ister misiniz?
- **ctaSubtitle:** Benzer bir çözümü işletmenize nasıl uygulayabileceğimizi konuşmak için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Phinia Oven Process Traceability
- **Sector (sector / tagValue):** Automotive
- **Location (locationValue):** Izmir
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** At Phinia's Izmir ESBAS facility, the post-coating oven process was made fully traceable through basket and batch based tracking.

##### Hero Section (EN)
- **heroTitleLine1:** Complete Traceability and
- **heroTitleLine2:** Quality Assurance in the Oven Process
- **heroSub:** At Phinia's Izmir ESBAS facility, the post-coating oven process was made fully traceable through basket and batch based tracking.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** End-to-end control for post-coating oven operations
- **contextP1:** Phinia's manufacturing facility in the Izmir ESBAS Free Zone serves the automotive industry.
- **contextP2:** In this project, products were tracked at basket and batch level to ensure traceability and control of critical oven process parameters after coating.

##### Problem / Challenge (EN)
- **problemEyebrow:** Need / Challenge
- **problemTitle:** Quality risks in oven entry and process parameter control
- **problemLede:** After coating, products had to enter the oven only under approved conditions while critical process parameters were continuously monitored. Uncontrolled entry conditions and process variables created quality risk.
- **problemList:**
  - **bold:** "Entry Validation" | **text:** "Products had to be validated by elapsed time and coating OK/NOK status before oven entry."
  - **bold:** "Traceability Depth" | **text:** "Full traceability was required at individual product, bar-basket, and batch levels."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Basket-batch association with real-time oven parameter monitoring
- **solutionLede:** At oven entry, basket loading preparation established new batch association. Entry conditions were validated, and critical parameters such as door opening, door-open duration, curing time, and ramp-up to curing temperature were monitored and controlled.
- **steps:**
  - **no:** "01" | **title:** "Basket and Batch Preparation" | **text:** "Products are prepared in baskets and associated with a new batch at oven entry."
  - **no:** "02" | **title:** "Entry Condition Validation" | **text:** "Elapsed time and coating OK/NOK conditions are checked before products enter the oven."
  - **no:** "03" | **title:** "Process Parameter Monitoring" | **text:** "Door events, door-open duration, curing time, and curing temperature ramp-up are monitored."
  - **no:** "04" | **title:** "Unit-Level Reporting" | **text:** "Traceability records and reports are generated for individual product, bar-basket, and batch units."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment
- **techTitle:** C# SCADA, OPC-UA, barcode scanners, and PLC monitoring
- **techGrid:**
  - **tag:** "SOFTWARE" | **title:** "C# SCADA Application" | **text:** "Manages basket-batch association, process condition validation, and reporting."
  - **tag:** "COMMUNICATION" | **title:** "OPC-UA Protocol" | **text:** "Provides reliable real-time communication between SCADA and PLC."
  - **tag:** "DATA CAPTURE" | **title:** "Barcode Scanners" | **text:** "Capture basket and product identity data for process initiation and tracking."
  - **tag:** "AUTOMATION" | **title:** "PLC-Based Process Monitoring" | **text:** "Monitors oven entry conditions and critical parameters including door, time, and temperature values."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** Central process management with OPC-UA and Oracle
- **integrationDesc:** The system integrates directly with shop-floor PLC via OPC-UA and with enterprise systems via Oracle. Basket-batch, oven entry conditions, and process parameter data are collected from the line, while traceability and reporting data are shared centrally in Oracle.
- **integrationList:**
  - **bold:** "PLC (OPC-UA)" | **text:** "Basket, batch, entry conditions, and oven parameters are monitored in real time."
  - **bold:** "Oracle" | **text:** "Traceability records and unit-level reports are shared at enterprise level."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Quality assurance and auditable oven process
- **resultsGrid:**
  - **title:** "Condition-Based Entry Control" | **text:** "Only compliant products enter the process through elapsed-time and coating OK/NOK validation."
  - **title:** "Critical Parameter Visibility" | **text:** "Continuous monitoring of door, curing duration, and temperature strengthened quality assurance."
  - **title:** "Complete Traceability" | **text:** "Individual product, bar-basket, and batch tracking with unit-level reporting enabled full auditability."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Would you like to transform your production processes?
- **ctaSubtitle:** Contact us to discuss how a similar solution can be implemented in your operations.
- **ctaPrimary:** Contact Us

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Phinia - Trasabilitatea procesului de cuptor
- **Sector (sector / tagValue):** Industria auto
- **Locație (locationValue):** Izmir
- **Domeniu de Aplicare (scopeVal):** Software și Integrare
- **An (year):** An
- **Descriere Scurtă (description):** În fabrica Phinia din Zona Liberă ESBAȘ Izmir, procesul de cuptor după acoperire a fost făcut complet trasabil prin urmărire pe bază de coș și batch.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Trasabilitate Completă și 
- **heroTitleLine2:** Asigurarea Calității în Procesul de Cuptor
- **heroSub:** În fabrica Phinia din Zona Liberă ESBAȘ Izmir, procesul de cuptor după acoperire a fost făcut complet trasabil prin urmărire pe bază de coș și batch.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Control end-to-end al procesului de cuptor după acoperire
- **contextP1:** Fabrica Phinia din Zona Liberă ESBAȘ Izmir produce pentru industria auto.
- **contextP2:** În acest proiect, produsele au fost urmărite la nivel de coș și batch pentru a asigura trasabilitatea și controlul parametrilor critici ai procesului de cuptor.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Necesitate / Problemă
- **problemTitle:** Riscuri de calitate la intrarea în cuptor și în controlul parametrilor
- **problemLede:** După acoperire, produsele trebuiau să intre în cuptor doar în condiții conforme, iar parametrii critici ai procesului trebuiau monitorizați continuu. Lipsa controlului asupra condițiilor de intrare și a parametrilor de proces genera riscuri de calitate.
- **problemList:**
  - **bold:** "Validarea Intrării" | **text:** "Înainte de intrarea în cuptor, produsele trebuiau validate după timpul scurs și statusul acoperirii OK/NOK."
  - **bold:** "Nivel de Trasabilitate" | **text:** "Era necesară trasabilitatea completă la nivel de produs individual, bară-coș și batch."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Asociere coș-batch și monitorizare în timp real a parametrilor de cuptor
- **solutionLede:** La intrarea în cuptor, pregătirea încărcării în coșuri a realizat asocierea cu un nou batch. Condițiile de intrare au fost validate, iar parametrii critici precum deschiderea ușii, durata de deschidere, timpul de curare și atingerea temperaturii de curare au fost monitorizați și controlați.
- **steps:**
  - **no:** "01" | **title:** "Pregătire Coș și Batch" | **text:** "Produsele sunt pregătite în coșuri și asociate cu un batch nou la intrarea în cuptor."
  - **no:** "02" | **title:** "Validarea Condițiilor de Intrare" | **text:** "Se verifică timpul scurs și statusul acoperirii OK/NOK înainte de intrarea în proces."
  - **no:** "03" | **title:** "Monitorizarea Parametrilor" | **text:** "Sunt monitorizate evenimentele ușii, durata de deschidere, timpul de curare și creșterea spre temperatura de curare."
  - **no:** "04" | **title:** "Raportare pe Unitate" | **text:** "Înregistrările de trasabilitate și rapoartele sunt generate la nivel de produs individual, bară-coș și batch."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipamente
- **techTitle:** SCADA în C#, OPC-UA, cititoare coduri de bare și monitorizare PLC
- **techGrid:**
  - **tag:** "SOFTWARE" | **title:** "Aplicație SCADA în C#" | **text:** "Gestionează asocierea coș-batch, validarea condițiilor de proces și raportarea."
  - **tag:** "COMUNICAȚIE" | **title:** "Protocol OPC-UA" | **text:** "Asigură comunicare fiabilă în timp real între SCADA și PLC."
  - **tag:** "COLECTARE DATE" | **title:** "Cititoare Coduri de Bare" | **text:** "Colectează datele de identificare pentru coșuri și produse."
  - **tag:** "AUTOMATIZARE" | **title:** "Monitorizare Proces prin PLC" | **text:** "Monitorizează condițiile de intrare și parametrii critici ai cuptorului, inclusiv timp și temperatură."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Management centralizat cu OPC-UA și Oracle
- **integrationDesc:** Sistemul este integrat direct cu PLC-ul din producție prin OPC-UA și cu Oracle la nivel corporate. Datele despre coș-batch, condițiile de intrare și parametrii de proces sunt colectate din linie, iar datele de trasabilitate și rapoartele sunt partajate centralizat în Oracle.
- **integrationList:**
  - **bold:** "PLC (OPC-UA)" | **text:** "Datele de coș, batch, condiții de intrare și parametri de cuptor sunt monitorizate în timp real."
  - **bold:** "Oracle" | **text:** "Înregistrările de trasabilitate și rapoartele pe unitate sunt partajate la nivel enterprise."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Asigurarea calității și proces de cuptor auditabil
- **resultsGrid:**
  - **title:** "Control de Intrare pe Condiții" | **text:** "Doar produsele conforme intră în proces prin validarea timpului și a statusului acoperirii OK/NOK."
  - **title:** "Vizibilitate pe Parametri Critici" | **text:** "Monitorizarea continuă a ușii, duratei de curare și temperaturii a consolidat asigurarea calității."
  - **title:** "Trasabilitate Completă" | **text:** "Urmărirea la nivel individual, bară-coș și batch, cu rapoarte pe unitate, a oferit auditabilitate completă."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să vă transformați procesele de producție?
- **ctaSubtitle:** Contactați-ne pentru a discuta implementarea unei soluții similare în compania dumneavoastră.
- **ctaPrimary:** Contactați-ne


---

### 8. PMI - Barkod Gate
**Slug:** `pmi-barcode-gate` | **ID:** `36` | **Sıra (Order):** `8` | **Yıl:** `2023`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `pmi-barcode-gate`
- **Sıralama (order):** `8`
- **Yıl (year / referenceDate):** `2023`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `RFID, Barcode, ERP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/philip-morris-international-pmi-seeklogo.png`
  - **Ana Görsel (image):** `/images/companies/PhilipMorris/MORIS.jpg`
  - **Hero Görseli (heroImage):** `/images/companies/PhilipMorris/MORIS.jpg`
  - **Galeri Görselleri (gallery):**
  - /images/companies/PhilipMorris/pmtm.jpg
  - /images/companies/PhilipMorris/1-1-1-uai-1598x799.jpg
  - /images/companies/PhilipMorris/ege-bolgesi-philip-morris-sabancinin-ihracat-ussu-oluyor-81699-8122015134810.jpg

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** PMI - Barkod Gate
- **Sektör (sector / tagValue):** Tütün
- **Konum (locationValue):** Torbalı / İzmir
- **Kapsam (scopeVal):** Anahtar Teslim
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Sevkiyat sürecinde çıkış rampasına kurulan barkod kapı sistemi, tüm palet etiketlerini otomatik olarak okumaktadır. Entegrasyon aracılığıyla sevkiyat iş emirleri sistemden otomatik alınmakta ve palet etiketleriyle karşılaştırılmaktadır. Taranan palet etiketleri sevkiyat emirleriyle eşleştiğinde palet barkodları ve sevkiyat numarası WMS sistemine gönderilmektedir. Yanlış etiket içeriği durumunda operatöre uyarı verilmektedir. Bu durum, eksik veya hatalı barkodlu ürünlerin sevkiyatını önlemektedir.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Barkod doğrulama kapısı,
- **heroTitleLine2:** sıfır hatalı sevkiyat.
- **heroSub:** PMI'ın Torbalı (İzmir) fabrikasında hayata geçirilen Otomatik Sevkiyat Barkod Doğrulama Sistemi; sevkiyat çıkışındaki palet etiketlerini okuyarak sevkiyat emirleriyle doğrular ve SAP-WMS sistemine aktarır.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Sevkiyat çıkışlarında tam otomatik kontrol
- **contextP1:** PMI'ın Torbalı (İzmir) fabrikası, sigara üretimi yapan bir tesistir. Üretilen ürünler, sevkiyat sürecinde çıkış rampaları üzerinden palet bazında sevk edilmektedir.
- **contextP2:** Proje, bu sevkiyat çıkışındaki palet doğrulama ve sevkiyat emri eşleştirme sürecini otomatikleştirmek amacıyla hayata geçirilmiştir.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Hatalı sevkiyat ve kontrol zorlukları
- **problemLede:** Sevkiyat rampalarında paletlerin doğru iş emirleriyle manuel kontrol edilmesi zaman kaybına ve sevkiyat hatalarına yol açabiliyordu.
- **problemList:**
  - **bold:** "Hatalı Sevkiyat Riski" | **text:** "Eksik veya hatalı barkodlu ürünlerin sevkiyatının fark edilmeden gerçekleşmesi riskleri."
  - **bold:** "Manuel Karşılaştırma" | **text:** "Palet etiketlerinin sevkiyat iş emirleriyle manuel olarak eşleştirilmesinin getirdiği operasyonel hantallık."
  - **bold:** "WMS Senkronizasyonu" | **text:** "Rampalardan çıkan paletlerin WMS sistemine anlık olarak, otomatik şekilde işlenememesi."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Barkod Kapı Sistemi ve Otomatik Doğrulama
- **solutionLede:** Sevkiyat sürecinde çıkış rampasına kurulan barkod kapı sistemi, tüm palet etiketlerini otomatik olarak okur. Sistem, sevkiyat iş emirlerini SAP-WMS'ten otomatik çekerek palet etiketleriyle karşılaştırır ve eşleşme durumunda WMS'e veri aktarır.
- **steps:**
  - **no:** "01" | **title:** "İş Emri Entegrasyonu" | **text:** "Sevkiyat planına ait iş emirleri SAP-WMS sistemi üzerinden otomatik olarak sisteme yüklenir."
  - **no:** "02" | **title:** "Rampa Barkod Okuma" | **text:** "Çıkış rampasındaki barkod kapısı (Barcode Gate), rampa üzerinden geçen tüm palet etiketlerini otomatik okur."
  - **no:** "03" | **title:** "Eşleşme ve Doğrulama" | **text:** "Okunan palet etiketleri, sevkiyat emirleriyle karşılaştırılarak içeriğin doğruluğu anlık sorgulanır."
  - **no:** "04" | **title:** "WMS Onay Aktarımı" | **text:** "Eşleşen palet barkodları ve sevkiyat numarası anlık olarak SAP-WMS sistemine gönderilir."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** Endüstriyel tarayıcılar ve SCADA doğrulaması
- **techGrid:**
  - **tag:** "DONANIM" | **title:** "Endüstriyel Barkod Okuyucular" | **text:** "Çıkış rampalarında palet barkodlarını hareket halindeyken hatasız okuyan endüstriyel tarayıcılar."
  - **tag:** "OTOMASYON" | **title:** "PLC saha otomasyonu" | **text:** "Rampadaki palet geçişlerini, sensörleri ve kapı akışını yöneten PLC sistemi."
  - **tag:** "ARAYÜZ" | **title:** "C# ile SCADA uygulaması" | **text:** "Eşleştirme mantığını, operatör uyarı ekranlarını ve sistem veri entegrasyonunu yöneten SCADA yazılımı."
  - **tag:** "ENTEGRASYON" | **title:** "WMS veri katmanı" | **text:** "Eşleşen palet barkodlarının ve sevkiyat numaralarının WMS sistemine iletildiği entegrasyon arabirimi."
  - **tag:** "GÜVENLİK" | **title:** "Operatör Uyarı Sistemi" | **text:** "Eşleşmeyen veya hatalı etiket durumlarında operatöre görsel/sesli uyarı veren kontrol mekanizması."
  - **tag:** "VERİ" | **title:** "SAP ERP entegrasyonu" | **text:** "Sevkiyat iş emirlerinin sistem tarafından otomatik olarak çekilmesini sağlayan SAP bağlantısı."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** SAP-WMS Entegrasyonu
- **integrationDesc:** Otomatik sevkiyat barkod doğrulama sistemi, PMI'ın SAP-WMS altyapısıyla çift yönlü ve anlık entegre çalışmaktadır; veriler operatörden bağımsız doğrulanır.
- **integrationList:**
  - **bold:** "İş Emri Alımı" | **text:** "SAP-WMS sistemindeki sevkiyat iş emirleri sisteme otomatik olarak çekilerek karşılaştırmaya hazır hale getirilir."
  - **bold:** "Sevkiyat Onayı Yazımı" | **text:** "Doğrulanan palet barkodları ve ilişkili sevkiyat numaraları anlık olarak SAP-WMS sistemine geri yazılır."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** %100 Doğrulanmış otomatik sevkiyat
- **resultsGrid:**
  - **title:** "Otomatik palet doğrulaması" | **text:** "Sevkiyat çıkışında %100 otomatik palet doğrulaması sağlanarak manuel kontrol ihtiyacı ortadan kaldırılmıştır."
  - **title:** "Sıfır hatalı sevkiyat" | **text:** "Eksik, yanlış veya hatalı barkodlu ürünlerin sevkiyat rampalarından çıkışı tamamen önlenmiştir."
  - **title:** "Operatör uyarıları" | **text:** "Hatalı bir palet algılandığında anlık uyarı mekanizmasıyla sevkiyat operasyonları güvence altına alınmıştır."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Üretim süreçlerinizi de dönüştürmek ister misiniz?
- **ctaSubtitle:** Benzer bir çözümü işletmenize nasıl uygulayabileceğimizi konuşmak için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** PMI Barcode Gate
- **Sector (sector / tagValue):** Tobacco
- **Location (locationValue):** Torbalı / İzmir
- **Scope (scopeVal):** Turnkey
- **Year (year):** Year
- **Short Description (description):** During the shipping process, a barcode gate system installed at the exit ramp automatically reads all pallet labels. Through integration, shipping work orders are automatically retrieved from the system and compared with pallet labels. If the scanned pallet labels match the shipping orders, the pallet barcodes along with the shipping number are sent to the WMS system. In case of incorrect label content, a warning is issued to the operator. This prevents the shipment of products with incorrect or missing barcodes.

##### Hero Section (EN)
- **heroTitleLine1:** Barcode verification gate,
- **heroTitleLine2:** zero-defect shipment.
- **heroSub:** Implemented at PMI's Torbalı (İzmir) factory, the Automatic Shipment Barcode Verification System scans pallet labels at the shipment exit, verifies them against shipment orders, and updates SAP-WMS.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Fully automated control at shipment exits
- **contextP1:** PMI's Torbalı (İzmir) factory is a cigarette manufacturing facility. The produced items are shipped on a pallet basis via exit ramps during the shipment process.
- **contextP2:** The project was implemented to automate the pallet verification and shipment order matching process at the shipment exit.

##### Problem / Challenge (EN)
- **problemEyebrow:** Needs / Problems
- **problemTitle:** Shipment errors and control difficulties
- **problemLede:** Checking pallets manually against correct work orders at shipment ramps caused delays and increased shipment error risks.
- **problemList:**
  - **bold:** "Shipment Error Risk" | **text:** "The risk of incomplete or incorrect barcode products being shipped without detection."
  - **bold:** "Manual Matching" | **text:** "Operational inefficiency caused by manually matching pallet labels with shipment work orders."
  - **bold:** "WMS Synchronization" | **text:** "Inability to process pallets exiting from ramps into the WMS system instantly and automatically."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Barcode Gate System & Automated Verification
- **solutionLede:** The barcode gate system installed at the exit ramp automatically reads all pallet labels. The system automatically retrieves shipment orders from SAP-WMS, compares them with pallet labels, and writes data to WMS on match.
- **steps:**
  - **no:** "01" | **title:** "Work Order Integration" | **text:** "Work orders belonging to the shipment plan are automatically loaded from the SAP-WMS system."
  - **no:** "02" | **title:** "Ramp Barcode Scanning" | **text:** "The Barcode Gate on the exit ramp automatically reads all pallet labels passing over it."
  - **no:** "03" | **title:** "Match & Verification" | **text:** "Pallet labels are compared with shipment orders to instantly query content accuracy."
  - **no:** "04" | **title:** "WMS Confirmation" | **text:** "Matched pallet barcodes and the shipment number are instantly sent to the SAP-WMS system."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** Industrial scanners and SCADA verification
- **techGrid:**
  - **tag:** "HARDWARE" | **title:** "Industrial Barcode Readers" | **text:** "Industrial scanners that read pallet barcodes on the fly at exit ramps without errors."
  - **tag:** "AUTOMATION" | **title:** "PLC field automation" | **text:** "PLC system managing pallet transits, sensors, and gate flow at the ramp."
  - **tag:** "INTERFACE" | **title:** "SCADA application with C#" | **text:** "SCADA software managing matching logic, operator alert screens, and system data integration."
  - **tag:** "INTEGRATION" | **title:** "WMS data layer" | **text:** "Integration interface where matched pallet barcodes and shipment numbers are pushed to the WMS system."
  - **tag:** "SAFETY" | **title:** "Operator Alert System" | **text:** "Control mechanism providing visual/audible warnings to the operator in case of mismatched or incorrect labels."
  - **tag:** "DATA" | **title:** "SAP ERP integration" | **text:** "SAP connection that enables the system to automatically retrieve shipment work orders."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** SAP-WMS Integration
- **integrationDesc:** The automatic shipment barcode verification system runs with bi-directional and real-time integration with PMI's SAP-WMS infrastructure; data is verified independent of the operator.
- **integrationList:**
  - **bold:** "Work Order Retrieval" | **text:** "Shipment work orders in the SAP-WMS system are automatically pulled into the system, ready for verification."
  - **bold:** "Shipment Confirmation" | **text:** "Verified pallet barcodes and associated shipment numbers are written back to the SAP-WMS system in real time."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** 100% Verified automated shipment
- **resultsGrid:**
  - **title:** "Automated pallet verification" | **text:** "100% automated pallet verification is achieved at the shipment exit, eliminating the need for manual checks."
  - **title:** "Zero shipment errors" | **text:** "Shipment of products with missing, wrong, or incorrect barcodes from shipment ramps is completely prevented."
  - **title:** "Operator warnings" | **text:** "Shipment operations are secured with an instant warning mechanism when an incorrect pallet is detected."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Want to transform your production processes too?
- **ctaSubtitle:** Contact us to discuss how we can implement a similar solution for your business.
- **ctaPrimary:** Get in Touch

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** PMI - Sistem automat de verificare a codurilor de bare pentru expediere
- **Sector (sector / tagValue):** Tutun
- **Locație (locationValue):** Torbalı / İzmir
- **Domeniu de Aplicare (scopeVal):** La cheie
- **An (year):** An
- **Descriere Scurtă (description):** În timpul procesului de expediere, un sistem de poartă de coduri de bare instalat la rampa de ieșire citește automat toate etichetele paleților. Prin integrare, ordinele de lucru pentru expediere sunt preluate automat din sistem și comparate cu etichetele paleților. Dacă etichetele scanate ale paleților corespund comenzilor de expediere, codurile de bare ale paleților, împreună cu numărul de expediere, sunt trimise către sistemul WMS. În cazul unui conținut incorect al etichetei, este emisă o avertizare către operator. Acest lucru previne expedierea produselor cu coduri de bare incorecte sau lipsă.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Poartă de verificare a codurilor de bare,
- **heroTitleLine2:** expediere fără defecte.
- **heroSub:** Implementat la fabrica PMI din Torbalı (İzmir); sistemul automat de verificare a codurilor de bare scanează etichetele de paleți la ieșire, le verifică cu comenzile de expediere și actualizează SAP-WMS.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Control complet automatizat la ieșirile de expediere
- **contextP1:** Fabrica PMI din Torbalı (İzmir) este o unitate de producție de țigări. Produsele sunt expediate pe bază de paleți prin rampele de ieșire în timpul procesului de expediere.
- **contextP2:** Proiectul a fost implementat pentru a automatiza procesul de verificare a paleților și de potrivire a comenzilor la ieșirea de expediere.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoi / Probleme
- **problemTitle:** Erori de expediere și dificultăți de control
- **problemLede:** Verificarea manuală a paleților în raport cu comenzile corecte de lucru la rampele de expediere genera întârzieri și riscuri de erori.
- **problemList:**
  - **bold:** "Risc de Eroare de Expediere" | **text:** "Riscul ca produse cu coduri de bare lipsă sau incorecte să fie expediate fără detectare."
  - **bold:** "Potrivire Manuală" | **text:** "Ineficiență operațională cauzată de potrivirea manuală a etichetelor de paleți cu comenzile de lucru."
  - **bold:** "Sincronizare WMS" | **text:** "Imposibilitatea de a procesa instantaneu și automat în sistemul WMS paleții care ies de pe rampe."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Sistem de Poartă cu Coduri de Bare și Verificare Automată
- **solutionLede:** Sistemul de poartă cu coduri de bare instalat la rampa de ieșire citește automat toate etichetele de paleți. Sistemul preia automat comenzile de expediere din SAP-WMS, le compară cu etichetele de paleți și trimite datele la WMS pe bază de potrivire.
- **steps:**
  - **no:** "01" | **title:** "Integrare Comenzi de Lucru" | **text:** "Comenzile de lucru aparținând planului de expediere sunt încărcate automat din sistemul SAP-WMS."
  - **no:** "02" | **title:** "Scanare Coduri de Bare la Rampă" | **text:** "Poarta de coduri de bare de pe rampa de ieșire scanează automat toate etichetele paleților care trec peste ea."
  - **no:** "03" | **title:** "Potrivire și Verificare" | **text:** "Etichetele de paleți scanate sunt comparate cu comenzile de expediere pentru a interoga instantaneu acuratețea conținutului."
  - **no:** "04" | **title:** "Confirmare WMS" | **text:** "Codurile de bare ale paleților potriviți și numărul de expediere sunt trimise instantaneu către sistemul SAP-WMS."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipamente Utilizate
- **techTitle:** Scannere industriale și verificare SCADA
- **techGrid:**
  - **tag:** "HARDWARE" | **title:** "Cititoare de Coduri de Bare" | **text:** "Scannere industriale care citesc codurile de bare ale paleților din mers, fără erori, la rampele de ieșire."
  - **tag:** "AUTOMATIZARE" | **title:** "Automatizare de câmp cu PLC" | **text:** "Sistem PLC care gestionează tranzitul paleților, senzorii și fluxul porții la rampă."
  - **tag:** "INTERFAȚĂ" | **title:** "Aplicație SCADA cu C#" | **text:** "Software SCADA care gestionează logica de potrivire, ecranele de alertă pentru operator și integrarea datelor."
  - **tag:** "INTEGRARE" | **title:** "Strat de date WMS" | **text:** "Interfață de integrare unde codurile de bare ale paleților potriviți și numerele de expediere sunt transmise către WMS."
  - **tag:** "SIGURANȚĂ" | **title:** "Sistem de Alertă Operator" | **text:** "Mecanism de control care oferă avertismente vizuale/acustice operatorului în caz de etichete nepotrivite sau incorecte."
  - **tag:** "DATE" | **title:** "Integrare SAP ERP" | **text:** "Conexiune SAP care permite sistemului să preia automat comenzile de lucru de expediere."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Integrare SAP-WMS
- **integrationDesc:** Sistemul automat de verificare a codurilor de bare de expediere funcționează cu integrare bidirecțională și în tempo real cu infrastructura SAP-WMS a PMI; datele sunt verificate independent de operator.
- **integrationList:**
  - **bold:** "Confirmare Expediere" | **text:** "Codurile de bare ale paleților verificați și numerele de expediere asociate sunt scrise înapoi în sistemul SAP-WMS în timp real."
  - **bold:** "Preluare Comenzi de Lucru" | **text:** "Comenzile de lucru de expediere din sistemul SAP-WMS sunt preluate automat în sistem, gata pentru verificare."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Expediere automatizată verificată 100%
- **resultsGrid:**
  - **title:** "Verificare automată a paleților" | **text:** "Verificarea paleților 100% automată este realizată la ieșire, eliminând verificările manuale."
  - **title:** "Expediere fără erori" | **text:** "Expedierea produselor cu coduri de bare lipsă, greșite sau incorecte de pe rampele de expediere este complet prevenită."
  - **title:** "Avertizări operator" | **text:** "Operațiunile de expediere sunt securizate cu un mecanism de avertizare instantanee atunci când este detectat un palet incorect."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să vă transformați și procesele de producție?
- **ctaSubtitle:** Contactați-ne pentru a discuta cum putem implementa o soluție similară pentru afacerea dumneavoastră.
- **ctaPrimary:** Contactați-ne


---

### 9. Phinia - Lazer Markalama Tezgahı ve İzlenebilirlik Entegrasyonu
**Slug:** `phinia-laser-marking-machine-traceability-integration` | **ID:** `38` | **Sıra (Order):** `9` | **Yıl:** `2023`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `phinia-laser-marking-machine-traceability-integration`
- **Sıralama (order):** `9`
- **Yıl (year / referenceDate):** `2023`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `RFID, Barcode, ERP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/phinia.svg`
  - **Ana Görsel (image):** `/images/companies/Phinia/Phinia.jpg`
  - **Hero Görseli (heroImage):** `/images/companies/Phinia/Phinia.jpg`
  - **Galeri Görselleri (gallery):**
  - 

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Phinia - Lazer Markalama Tezgahı ve İzlenebilirlik Entegrasyonu
- **Sektör (sector / tagValue):** Otomotiv
- **Konum (locationValue):** İzmir · ESBAŞ
- **Kapsam (scopeVal):** Anahtar Teslim
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Her ürünün izlenebilirliğini sağlamak amacıyla Phinia için işaretleme ve tanımlama süreçlerini destekleyen bir lazer işaretleme makinesi geliştirildi. Makine esnek bir yapı oluşturacak şekilde 3 eksenli hareket kapasitesiyle tasarlandı. Sistem Oracle ile entegre edildi. Ürünlere basılacak seri numaralar Oracle'dan alındı. İşaretleme sürecinin ardından kod içeriği, derece ve konum kontrolleri kamera kullanılarak otomatik gerçekleştirildi. Uygun parçalar için onay verileri Oracle'a geri gönderildi.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Her parçaya tek bir seri numarası,
- **heroTitleLine2:** tek bir izlenebilir kimlik.
- **heroSub:** Phinia'nın İzmir ESBAŞ Serbest Bölge fabrikası için geliştirilen 3 eksenli lazer markalama tezgahı; markalama ve kamera doğrulamasını tek bir otomatik akışta birleştirir ve Oracle ile çift yönlü konuşur.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Serbest bölgede, sıfır tolerans üretim
- **contextP1:** Phinia'nın İzmir ESBAŞ Serbest Bölge'deki fabrikası otomotiv sektörüne yönelik üretim yapıyor. Bu tür üretimde her parçanın nereden geldiği, hangi hattan çıktığı ve hangi kontrolden geçtiği geriye dönük olarak sorgulanabilir olmalı.
- **contextP2:** Proje, üretilen her ürünün tekil olarak markalanması ve baştan sona izlenebilirliğinin sağlanması amacıyla hayata geçirildi. Markalamanın kendisi kadar, o markalamanın doğru okunabildiğinin garanti altına alınması da işin merkezindeydi.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** İki ayrı adım, iki ayrı risk
- **problemLede:** Markalama ve doğrulama birbirinden kopuk, elle kontrole açık adımlar hâlinde yürüdüğünde, arada iki türlü boşluk oluşuyordu.
- **problemList:**
  - **bold:** "Tekil markalama zorunluluğu." | **text:** "Her parçanın kendi seri numarasıyla markalanması ve bu numaranın merkezi sisteme aktarılması gerekiyordu."
  - **bold:** "Okunamayan kod riski." | **text:** "Doğrulama ayrı bir adım olarak elle yapıldığında, hatalı ya da okunamayan kod fark edilmeden hattan geçebiliyordu."
  - **bold:** "İzlenebilirlik boşluğu." | **text:** "Markalama ile veri kaydı arasındaki kopukluk, geriye dönük sorgulamada eksik zincir anlamına geliyordu."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Markalama ve doğrulama, tek akış
- **solutionLede:** Phinia için mekanik tasarımı dahil anahtar teslim geliştirilen tezgah; esnek çalışabilmesi için 3 eksenli hareket kapasitesiyle tasarlandı. Seri numaraları Oracle'dan alınır, parçaya işlenir ve aynı akış içinde kamera ile doğrulanır.
- **steps:**
  - **no:** "01" | **title:** "Seri no alınır" | **text:** "Basılacak tekil seri numarası Oracle'dan çekilir."
  - **no:** "02" | **title:** "Lazer markalama" | **text:** "3 eksenli servo yapı parçayı konumlar, kod lazerle işlenir."
  - **no:** "03" | **title:** "Kamera doğrulama" | **text:** "Kod içeriği, derece ve konum otomatik kontrol edilir."
  - **no:** "04" | **title:** "Onay geri yazılır" | **text:** "Uygun parçaların onay verisi Oracle'a geri gönderilir."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** Anahtar teslim sistem mimarisi
- **techGrid:**
  - **tag:** "MARKALAMA" | **title:** "Lazer markalama cihazı" | **text:** "Parçaya tekil seri numarasını kalıcı olarak işleyen markalama ünitesi."
  - **tag:** "HAREKET" | **title:** "3 eksenli servo yapı" | **text:** "Esnek konumlandırma için X-Y-Z eksenlerinde servo tahrikli hareket."
  - **tag:** "KONTROL" | **title:** "PLC saha otomasyonu" | **text:** "İstasyon içindeki tüm saha sinyallerini ve iş akışını yöneten PLC."
  - **tag:** "ARAYÜZ" | **title:** "C# ile SCADA uygulaması" | **text:** "Operatör arayüzü ve süreç izleme için özel geliştirilmiş SCADA."
  - **tag:** "DOĞRULAMA" | **title:** "Kamera tabanlı kontrol" | **text:** "Kod içeriği, derece ve konum doğrulaması görüntü işleme ile otomatik."
  - **tag:** "VERİ" | **title:** "Oracle entegrasyonu" | **text:** "Seri numarası talebi ve onay verisiyle çift yönlü veri alışverişi."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** Oracle ile çift yönlü entegrasyon
- **integrationDesc:** Sistem Oracle ile çift yönlü entegre çalışmaktadır: seri numaraları Oracle'dan alınmakta, markalama ve kontrol sonrası uygun parçaların onay verileri Oracle'a geri gönderilmektedir.
- **integrationList:**
  - **bold:** "Seri Numarası Alımı" | **text:** "Seri numaraları Oracle ERP sisteminden otomatik olarak talep edilir ve tezgaha aktarılır."
  - **bold:** "Onay Verisi Gönderimi" | **text:** "Kamera kontrolünden geçen onaylanmış parçaların bilgileri anlık olarak Oracle sistemine geri yazılır."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** İş süreçlerinde tam dijitalleşme
- **resultsGrid:**
  - **title:** "%100 Veri Doğruluğu" | **text:** "Kamera doğrulaması ve Oracle entegrasyonu sayesinde hatalı kod basımı veya kayıp veri riski tamamen engellendi."
  - **title:** "Operasyonel Hız" | **text:** "Markalama ve kamera kontrol adımlarının tek bir tezgahta birleştirilmesiyle çevrim süreleri optimize edildi."
  - **title:** "Tam İzlenebilirlik" | **text:** "Üretilen her bir parçanın geçmişi ve kalite test sonuçları merkezi sisteme kalıcı olarak kaydedildi."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Üretim süreçlerinizi de dönüştürmek ister misiniz?
- **ctaSubtitle:** Benzer bir çözümü işletmenize nasıl uygulayabileceğimizi konuşmak için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Phinia Laser Marking Machine Traceability Integration
- **Sector (sector / tagValue):** Automotive
- **Location (locationValue):** İzmir · ESBAŞ
- **Scope (scopeVal):** Turnkey
- **Year (year):** Year
- **Short Description (description):** To ensure traceability of each product, a laser marking machine was developed for Phinia to facilitate marking and identification processes. The machine was designed with 3-axis movement capability, creating a flexible structure. The system was integrated with Oracle. Serial numbers to be printed on products were retrieved from Oracle. After the marking process, code content, grade, and position checks were automatically performed using a camera. For conforming parts, confirmation data was sent back to Oracle.

##### Hero Section (EN)
- **heroTitleLine1:** A single serial number for each part,
- **heroTitleLine2:** a single traceable identity.
- **heroSub:** Developed for Phinia's İzmir ESBAŞ Free Zone factory, the 3-axis laser marking machine combines marking and camera verification in a single automated flow, communicating bi-directionally with Oracle.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Zero-tolerance production in the free zone
- **contextP1:** Phinia's factory in the İzmir ESBAŞ Free Zone manufactures for the automotive sector. In this type of production, the origin of each part, the line it came from, and the quality control it passed must be retrospectively traceable.
- **contextP2:** The project was implemented to uniquely mark each manufactured product and ensure end-to-end traceability. At the center of the task was not only the marking itself, but also guaranteeing that the marking was read correctly.

##### Problem / Challenge (EN)
- **problemEyebrow:** Needs / Problems
- **problemTitle:** Two separate steps, two separate risks
- **problemLede:** When marking and verification were carried out as disconnected steps open to manual check, two types of gaps arose.
- **problemList:**
  - **bold:** "Unique marking requirement." | **text:** "Each part needed to be marked with its own serial number, and this number had to be transferred to the central system."
  - **bold:** "Unreadable code risk." | **text:** "When verification was done manually as a separate step, a faulty or unreadable code could pass through the line unnoticed."
  - **bold:** "Traceability gap." | **text:** "The disconnection between marking and data recording meant a missing chain in retrospective query."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Marking and verification, single flow
- **solutionLede:** The machine, developed turnkey including mechanical design for Phinia, was designed with 3-axis motion capability to operate flexibly. Serial numbers are received from Oracle, engraved on the part, and verified with the camera within the same flow.
- **steps:**
  - **no:** "01" | **title:** "Get serial number" | **text:** "The unique serial number to be printed is retrieved from Oracle."
  - **no:** "02" | **title:** "Laser marking" | **text:** "The 3-axis servo structure positions the part, and the code is laser-engraved."
  - **no:** "03" | **title:** "Camera verification" | **text:** "Code content, quality grade, and position are automatically checked."
  - **no:** "04" | **title:** "Confirm back to Oracle" | **text:** "Confirmation data of compliant parts is written back to Oracle."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** Turnkey system architecture
- **techGrid:**
  - **tag:** "MARKING" | **title:** "Laser marking device" | **text:** "Marking unit that permanently engraves the unique serial number on the part."
  - **tag:** "MOTION" | **title:** "3-axis servo structure" | **text:** "Servo-driven motion in X-Y-Z axes for flexible positioning."
  - **tag:** "CONTROL" | **title:** "PLC field automation" | **text:** "PLC managing all field signals and workflow within the station."
  - **tag:** "INTERFACE" | **title:** "SCADA application with C#" | **text:** "SCADA developed specifically for operator interface and process monitoring."
  - **tag:** "VERIFICATION" | **title:** "Camera-based control" | **text:** "Automatic verification of code content, grade, and position via image processing."
  - **tag:** "DATA" | **title:** "Oracle integration" | **text:** "Bi-directional data exchange with serial number request and confirmation data."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** Bi-directional integration with Oracle
- **integrationDesc:** The system runs fully integrated with Oracle: serial numbers are retrieved from Oracle, and confirmation data of compliant parts is sent back to Oracle after marking and verification.
- **integrationList:**
  - **bold:** "Serial Number Retrieval" | **text:** "Serial numbers are automatically requested from the Oracle ERP system and transferred to the machine."
  - **bold:** "Confirmation Pushed" | **text:** "Data of approved parts that successfully pass camera control is written back to the Oracle system instantly."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Full digitalization of business processes
- **resultsGrid:**
  - **title:** "100% Data Accuracy" | **text:** "Thanks to camera verification and Oracle integration, the risk of faulty code printing or missing data was completely prevented."
  - **title:** "Operational Speed" | **text:** "By combining marking and camera verification steps on a single machine, cycle times were optimized."
  - **title:** "Full Traceability" | **text:** "The history and quality test results of each manufactured part were permanently recorded in the central system."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Want to transform your production processes too?
- **ctaSubtitle:** Contact us to discuss how we can implement a similar solution for your business.
- **ctaPrimary:** Get in Touch

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Phinia - Masina de marcare cu laser si integrare pentru trasabilitate
- **Sector (sector / tagValue):** Industria auto
- **Locație (locationValue):** İzmir · ESBAŞ
- **Domeniu de Aplicare (scopeVal):** La cheie
- **An (year):** An
- **Descriere Scurtă (description):** Pentru a asigura trasabilitatea fiecărui produs, a fost dezvoltată o mașină de marcare cu laser pentru Phinia, pentru a facilita procesele de marcare și identificare. Mașina a fost proiectată cu capacitate de mișcare pe 3 axe, creând o structură flexibilă. Sistemul a fost integrat cu Oracle. Numerele de serie care urmau să fie imprimate pe produse au fost preluate din Oracle. După procesul de marcare, conținutul codului, gradul și verificările poziției au fost efectuate automat folosind o cameră. Pentru piesele conforme, datele de confirmare au fost trimise înapoi către Oracle.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Un singur număr de serie pentru fiecare piesă,
- **heroTitleLine2:** o singură identitate trasabilă.
- **heroSub:** Dezvoltat pentru fabrica Phinia din Zona Liberă İzmir ESBAŞ, echipamentul de marcare laser pe 3 axe combină marcarea și verificarea prin cameră într-un singur flux automatizat, comunicând bidirecțional cu Oracle.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Producție cu toleranță zero în zona liberă
- **contextP1:** Fabrica Phinia din Zona Liberă İzmir ESBAŞ produce pentru sectorul automotive. În acest tip de producție, originea fiecărei piese, linia de unde provine și controlul calității trecut trebuie să fie trasabile retrospectiv.
- **contextP2:** Proiectul a fost implementat pentru a marca în mod unic fiecare produs fabricat și pentru a asigura trasabilitatea end-to-end. În centrul sarcinii a fost nu doar marcarea în sine, ci și garantarea faptului că marcajul a fost citit corect.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoi / Probleme
- **problemTitle:** Doi pași separați, două riscuri separate
- **problemLede:** Când marcarea și verificarea erau efectuate ca pași deconectați și deschiși controlului manual, apăreau două tipuri de lacune.
- **problemList:**
  - **bold:** "Cerință de marcare unică." | **text:** "Fiecare piesă trebuia marcată cu propriul număr de serie, iar acest număr trebuia transferat în sistemul central."
  - **bold:** "Risc de cod necitibil." | **text:** "Când verificarea se făcea manual, ca pas separat, un cod defect sau necitibil putea trece de linie neobservat."
  - **bold:** "Lacună de trasabilitate." | **text:** "Deconectarea dintre marcare și înregistrarea datelor însemna o verigă lipsă în interogarea retrospectivă."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Marcare și verificare, un singur flux
- **solutionLede:** Echipamentul dezvoltat la cheie, inclusiv designul mecanic pentru Phinia, a fost proiectat cu o capacitate de mișcare pe 3 axe pentru a funcționa flexibil. Numerele de serie sunt preluate din Oracle, marcate pe piesă și verificate cu camera în cadrul aceluiași flux.
- **steps:**
  - **no:** "01" | **title:** "Preluare număr de serie" | **text:** "Numărul unic de serie ce urmează a fi imprimat este preluat din Oracle."
  - **no:** "02" | **title:** "Marcare laser" | **text:** "Structura servo pe 3 axe poziționează piesa, iar codul este marcat cu laser."
  - **no:** "03" | **title:** "Verificare cameră" | **text:** "Conținutul codului, gradul calitativ și poziția sunt verificate automat."
  - **no:** "04" | **title:** "Confirmare către Oracle" | **text:** "Datele de confirmare pentru piesele conforme sunt trimise înapoi în Oracle."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipamente Utilizate
- **techTitle:** Arhitectură de sistem la cheie
- **techGrid:**
  - **tag:** "MARCARE" | **title:** "Echipament de marcare laser" | **text:** "Unitate de marcare care gravează permanent numărul unic de serie pe piesă."
  - **tag:** "MIȘCARE" | **title:** "Structură servo pe 3 axe" | **text:** "Mișcare acționată prin servo pe axele X-Y-Z pentru poziționare flexibilă."
  - **tag:** "CONTROL" | **title:** "Automatizare de câmp cu PLC" | **text:** "PLC care gestionează toate semnalele de câmp și fluxul de lucru în stație."
  - **tag:** "INTERFAȚĂ" | **title:** "Aplicație SCADA cu C#" | **text:** "SCADA dezvoltat special pentru interfața operatorului și monitorizarea procesului."
  - **tag:** "VERIFICARE" | **title:** "Control pe bază de cameră" | **text:** "Verificarea automată a conținutului codului, gradului și poziției prin procesare de imagini."
  - **tag:** "DATE" | **title:** "Integrare Oracle" | **text:** "Schimb bidirecțional de date cu solicitarea numărului de serie și datele de confirmare."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Integrare bidirecțională cu Oracle
- **integrationDesc:** Sistemul funcționează complet integrat cu Oracle: numerele de serie sunt preluate din Oracle, iar datele de confirmare ale pieselor conforme sunt trimise înapoi în Oracle după marcare și verificare.
- **integrationList:**
  - **bold:** "Preluare Număr de Serie" | **text:** "Numerele de serie sunt solicitate automat din sistemul Oracle ERP și transferate la echipament."
  - **bold:** "Confirmare Transmisă" | **text:** "Datele pieselor aprobate care trec cu succes de controlul camerei sunt scrise instantaneu în sistemul Oracle."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Digitalizare completă a proceselor de afaceri
- **resultsGrid:**
  - **title:** "Acuratețe 100% a datelor" | **text:** "Datorită verificării camerei și integrării Oracle, riscul tipăririi codurilor eronate sau al pierderii datelor a fost complet prevenit."
  - **title:** "Viteză Operațională" | **text:** "Prin combinarea etapelor de marcare și verificare cu camera pe un singur echipament, timpii de ciclu au fost optimizați."
  - **title:** "Trasabilitate Completă" | **text:** "Istoricul și rezultatele testelor de calitate pentru fiecare piesă fabricată au fost înregistrate permanent în sistemul central."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să vă transformați și procesele de producție?
- **ctaSubtitle:** Contactați-ne pentru a discuta cum putem implementa o soluție similară pentru afacerea dumneavoastră.
- **ctaPrimary:** Contactați-ne


---

### 10. Duru Bulgur - Ürün - Koli - Palet İzlenebilirliği
**Slug:** `duru-bulgur-product-carton-pallet-traceability` | **ID:** `39` | **Sıra (Order):** `10` | **Yıl:** `2023`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `duru-bulgur-product-carton-pallet-traceability`
- **Sıralama (order):** `10`
- **Yıl (year / referenceDate):** `2023`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `RFID, Barcode, ERP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/duru_bulgur.svg`
  - **Ana Görsel (image):** `/images/companies/Duru/Duru_Bulgur_Fabrika-1024x256.jpg`
  - **Hero Görseli (heroImage):** `/images/companies/Duru/Duru_Bulgur_Fabrika-1024x256.jpg`
  - **Galeri Görselleri (gallery):**
  - /images/companies/Duru/Duru_Bulgur_Fabrika-1024x256.jpg

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Duru Bulgur - Ürün - Koli - Palet İzlenebilirliği
- **Sektör (sector / tagValue):** Gıda & İçecek
- **Konum (locationValue):** Karaman
- **Kapsam (scopeVal):** Anahtar Teslim
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Ürün | Karton | Palet izlenebilirlik uygulaması, Duru Bulgur'un Karaman fabrikasındaki üretim hatlarında başarıyla hayata geçirildi. Ambalajlama aşamasında izlenebilirliği sağlamak amacıyla ürünler bireysel olarak işaretlendi. Kartonlar ve paletler için benzer yapı kurularak hangi ürünün hangi kartona girdiği ve hangi kartonun hangi palete yerleştirildiği kayıt altına alındı. Farklı konumlar arasındaki depo transferleri ve müşterilere yapılan transferler, el terminali uygulaması kullanılarak kaydedildi. Ürün – Karton – Palet – Depo – Müşteri adımları, ürün seri numarasına dayalı tek bir platformda izlenebilir ve yönetilebilir hale getirildi.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Hammaddeden sevkiyata,
- **heroTitleLine2:** her adımda tam izlenebilirlik.
- **heroSub:** Duru Bulgur'un Karaman'daki fabrikasında hayata geçirilen Ürün / Koli / Palet İzlenebilirlik sistemi; ambalajlamadan sevkiyata tüm süreci tek bir dijital platformda izler ve ERP ile entegre çalışır.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Gıda güvenliğinde yeni standart
- **contextP1:** Duru Bulgur'un Karaman'daki fabrikası, bulgur ve bakliyat ürünleri üretmektedir. Proje, fabrikadaki üretim hatlarında ambalajlamadan sevkiyata kadar tüm süreçte ürün, koli ve palet düzeyinde izlenebilirlik sağlamak amacıyla hayata geçirilmiştir.
- **contextP2:** Kurulan sistem, gıda zincirindeki envanter yönetim doğruluğunu artırırken sevkiyat hatalarını tamamen ortadan kaldırmayı hedefler.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** İzleme zorlukları ve hata riskleri
- **problemLede:** Paketlenen gıda ürünlerinin, kolileme ve paletleme hiyerarşisinde izlenememesi operasyonel riskler barındırıyordu.
- **problemList:**
  - **bold:** "Manuel Takip Riski" | **text:** "Ambalajlama sonrasında ürün, koli ve palet ilişkilerinin manuel takibi izlenebilirlik boşluğu oluşturuyordu."
  - **bold:** "Sevkiyat Hataları" | **text:** "Hangi ürünün hangi palete girdiğinin bilinmemesi sevkiyat hatalarına yol açabiliyordu."
  - **bold:** "Geri Çağırma (Recall) Zorluğu" | **text:** "Olası kalite veya bulaşma durumlarında hedefe yönelik geri izleme yapmak oldukça zordu."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Ürün, Koli ve Palet İzlenebilirliği
- **solutionLede:** Ürün | Koli | Palet izlenebilirlik uygulaması, Duru Bulgur'un Karaman fabrikasındaki üretim hatlarında başarıyla hayata geçirildi. Ürün – Koli – Palet – Depo – Müşteri adımları, ürün seri numarasına dayalı tek bir platformda izlenebilir ve yönetilebilir hâle getirildi.
- **steps:**
  - **no:** "01" | **title:** "Ürün Markalama" | **text:** "Ambalajlama aşamasında ürünler tekil olarak markalanır ve kimlik kazanır."
  - **no:** "02" | **title:** "Koli ve Palet Eşleme" | **text:** "Hangi ürünün hangi koliye girdiği ve kolilerin hangi palete yerleştirildiği kayıt altına alınır (Agregasyon)."
  - **no:** "03" | **title:** "Depo Transferleri" | **text:** "Farklı lokasyonlar arasındaki depo içi transfer hareketleri el terminalleri kullanılarak anlık kaydedilir."
  - **no:** "04" | **title:** "Müşteri Sevkiyatı" | **text:** "Müşterilere yapılan sevkiyat transferleri kaydedilerek baştan sona veri zinciri tamamlanır."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** Saha ve veri yönetim altyapısı
- **techGrid:**
  - **tag:** "OTOMASYON" | **title:** "PLC saha otomasyonu" | **text:** "Saha otomasyonunu ve üretim hattı iş akışını yöneten PLC yapısı."
  - **tag:** "ARAYÜZ" | **title:** "C# ile SCADA uygulaması" | **text:** "Operatör arayüzü, etiket eşleme ve süreç izleme için özel C# uygulaması."
  - **tag:** "DONANIM" | **title:** "Barkod Okuyucular" | **text:** "Ürün, karton ve palet barkod/etiketlerini yüksek hassasiyetle okuyan endüstriyel tarayıcılar."
  - **tag:** "MOBİL" | **title:** "El Terminali Uygulaması" | **text:** "Depo transferleri, stok hareketleri ve müşteri sevkiyatlarının sahada el terminalleriyle kaydedilmesi."
  - **tag:** "YAZILIM" | **title:** "OnSuite Trace Platformu" | **text:** "İzlenebilirlik ve süreç yönetiminin merkezi olarak kontrol edildiği yazılım katmanı."
  - **tag:** "VERİ" | **title:** "ERP entegrasyonu" | **text:** "ERP sistemiyle entegre şekilde transfer verilerinin ve stok durumunun çift yönlü paylaşımı."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** ERP sistemi ile çift yönlü entegrasyon
- **integrationDesc:** İzlenebilirlik uygulaması, Duru Bulgur'un mevcut ERP sistemiyle tam entegre şekilde çalışmaktadır: saha verileri, stok hareketleri ve transfer bilgileri ERP'ye anlık olarak aktarılır.
- **integrationList:**
  - **bold:** "ERP Sistemine Aktarım" | **text:** "Saha el terminallerinden kaydedilen tüm depo transfer ve sevkiyat verileri anlık olarak ERP'ye yazılır."
  - **bold:** "Süreç Kontrolü ve Takip" | **text:** "Ürün-koli-palet ilişkileri ERP stok durumu ile senkronize edilerek tek platformdan izlenir."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Uçtan uca dijital kontrol
- **resultsGrid:**
  - **title:** "Uçtan uca izlenebilirlik" | **text:** "Ambalajlamadan sevkiyata kadar tüm süreç, ürün seri numarasına dayalı tek bir platformda uçtan uca izlenebilir hale geldi."
  - **title:** "Sıfır manuel hata" | **text:** "Ürün-koli-palet ilişkileri ve depo/müşteri hareketleri otomatik kaydedilerek manuel takibin getirdiği tüm hatalar ortadan kaldırıldı."
  - **title:** "Hızlı geri izleme (Recall)" | **text:** "Olası bir geri çağırma durumunda nokta atışı geri izleme yeteneğiyle sevkiyat doğruluğu ve operasyon güvenliği en üst düzeye çıkarıldı."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Üretim süreçlerinizi de dönüştürmek ister misiniz?
- **ctaSubtitle:** Benzer bir çözümü işletmenize nasıl uygulayabileceğimizi konuşmak için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Duru Bulgur Product Carton Pallet Traceability
- **Sector (sector / tagValue):** Food & Beverage
- **Location (locationValue):** Karaman
- **Scope (scopeVal):** Turnkey
- **Year (year):** Year
- **Short Description (description):** The Product | Carton | Pallet traceability application was successfully implemented on production lines at Duru Bulgur's Karaman factory. During the packaging stage, products were individually marked to ensure traceability. A similar structure was established for cartons and pallets, recording which product went into which carton and which carton was placed on which pallet. Inter-warehouse transfers from different locations and transfers to customers were recorded using a handheld terminal application. The Product – Carton – Pallet – Warehouse – Customer steps were made traceable and manageable on a single platform, based on the product serial number.

##### Hero Section (EN)
- **heroTitleLine1:** From raw material to shipment,
- **heroTitleLine2:** complete traceability at every step.
- **heroSub:** Implemented at Duru Bulgur's Karaman factory, the Product / Box / Pallet Traceability system tracks the entire process from packaging to shipment on a single digital platform, operating fully integrated with ERP.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** New standard in food safety
- **contextP1:** Duru Bulgur's Karaman factory produces bulgur and pulse products. The project was implemented to ensure product, box, and pallet level traceability across the entire process from packaging to shipment on the production lines.
- **contextP2:** The established system aims to eliminate shipment errors while improving inventory management accuracy in the food supply chain.

##### Problem / Challenge (EN)
- **problemEyebrow:** Needs / Problems
- **problemTitle:** Tracking difficulties and error risks
- **problemLede:** The lack of tracking for packaged food products in the box and pallet hierarchy posed operational risks.
- **problemList:**
  - **bold:** "Manual Tracking Risk" | **text:** "Manual tracking of product, box, and pallet relationships after packaging created a traceability gap."
  - **bold:** "Shipment Errors" | **text:** "Lack of visibility on which product was loaded onto which pallet could lead to shipment errors."
  - **bold:** "Recall Difficulty" | **text:** "In case of potential quality or contamination issues, target-specific product recall was extremely difficult."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Product, Box, and Pallet Traceability
- **solutionLede:** The Product | Carton | Pallet traceability application was successfully implemented on production lines at Duru Bulgur's Karaman factory. Product – Box – Pallet – Warehouse – Customer steps were made traceable and manageable on a single platform based on the unique serial number.
- **steps:**
  - **no:** "01" | **title:** "Product Marking" | **text:** "During the packaging stage, products are uniquely marked and gain a traceable identity."
  - **no:** "02" | **title:** "Box & Pallet Association" | **text:** "Which product goes into which box, and which box onto which pallet is fully recorded (Aggregation)."
  - **no:** "03" | **title:** "Warehouse Transfers" | **text:** "Internal warehouse transfer movements between different locations are instantly recorded using handheld terminals."
  - **no:** "04" | **title:** "Customer Shipment" | **text:** "Shipment transfers made to customers are recorded, completing the end-to-end data chain."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** Field and data management infrastructure
- **techGrid:**
  - **tag:** "AUTOMATION" | **title:** "PLC field automation" | **text:** "PLC structure managing field automation and production line workflow."
  - **tag:** "INTERFACE" | **title:** "SCADA application with C#" | **text:** "Custom C# application for operator interface, label matching, and process monitoring."
  - **tag:** "HARDWARE" | **title:** "Industrial Barcode Readers" | **text:** "Industrial scanners that read product, carton, and pallet barcodes/labels with high precision."
  - **tag:** "MOBILE" | **title:** "Handheld Terminal Application" | **text:** "Recording warehouse transfers, inventory movements, and customer shipments on-site via handheld terminals."
  - **tag:** "SOFTWARE" | **title:** "OnSuite Trace Platform" | **text:** "Central software layer where traceability and process management are controlled."
  - **tag:** "DATA" | **title:** "ERP integration" | **text:** "Bi-directional sharing of transfer data and stock status integrated with the ERP system."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** Bi-directional integration with ERP
- **integrationDesc:** The traceability application runs fully integrated with Duru Bulgur's existing ERP system: field data, stock movements, and transfer info are instantly pushed to the ERP.
- **integrationList:**
  - **bold:** "Push to ERP System" | **text:** "All warehouse transfer and shipment data recorded from field terminals are instantly written to the ERP."
  - **bold:** "Process Control & Tracking" | **text:** "Product-box-pallet relationships are synchronized with ERP stock status and tracked via a single platform."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** End-to-end digital control
- **resultsGrid:**
  - **title:** "End-to-end traceability" | **text:** "The entire chain from packaging to customer became traceable end-to-end based on the unique product serial number."
  - **title:** "Zero manual errors" | **text:** "Product-box-pallet relations and warehouse/customer movements are auto-recorded, eliminating manual tracking errors."
  - **title:** "Fast recall capability" | **text:** "In case of a potential recall, precise backward tracking capability maximized shipment accuracy and operational safety."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Want to transform your production processes too?
- **ctaSubtitle:** Contact us to discuss how we can implement a similar solution for your business.
- **ctaPrimary:** Get in Touch

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Duru Bulgur - Produs - Carton - Trasabilitatea paletilor
- **Sector (sector / tagValue):** Alimente & Băuturi
- **Locație (locationValue):** Karaman
- **Domeniu de Aplicare (scopeVal):** La cheie
- **An (year):** An
- **Descriere Scurtă (description):** Aplicația de trasabilitate Produs | Carton | Palet a fost implementată cu succes pe liniile de producție de la fabrica Duru Bulgur din Karaman. În timpul etapei de ambalare, produsele au fost marcate individual pentru a asigura trasabilitatea. O structură similară a fost stabilită pentru cartoane și paleți, înregistrând ce produs a intrat în ce carton și ce carton a fost plasat pe ce palet. Transferurile între depozite din locații diferite și transferurile către clienți au fost înregistrate folosind o aplicație terminal portabilă. Pașii Produs – Carton – Palet – Depozit – Client au fost făcuți urmăribili și gestionabili pe o singură platformă, pe baza numărului de serie al produsului.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** De la materia primă la expediere,
- **heroTitleLine2:** trasabilitate completă la fiecare pas.
- **heroSub:** Implementat la fabrica Duru Bulgur din Karaman, sistemul de trasabilitate Produs / Cutie / Palet urmărește întregul proces de la ambalare până la expediere pe o singură platformă digitală, funcționând complet integrat cu ERP.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Un nou standard în siguranța alimentară
- **contextP1:** Fabrica Duru Bulgur din Karaman produce produse de bulgur și legume uscate. Proiectul a fost implementat pentru a asigura trasabilitatea la nivel de produs, cutie și palet pe tot parcursul procesului, de la ambalare până la expediere pe liniile de producție.
- **contextP2:** Sistemul stabilit își propune să elimine erorile de expediere, îmbunătățind în același timp acuratețea gestionării stocurilor în lanțul de aprovizionare alimentar.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoi / Probleme
- **problemTitle:** Dificultăți de urmărire și riscuri de eroare
- **problemLede:** Lipsa urmării produselor alimentare ambalate în ierarhia cutie-palet prezenta riscuri operaționale.
- **problemList:**
  - **bold:** "Risc de Urmărire Manuală" | **text:** "Urmărirea manuală a relațiilor dintre produs, cutie și palet după ambalare crea o lacună de trasabilitate."
  - **bold:** "Erori de Expediere" | **text:** "Lipsa de vizibilitate asupra produsului care intra în fiecare palet putea duce la erori de expediere."
  - **bold:** "Dificultate în Rechemare" | **text:** "În cazul unor potențiale probleme de calitate sau contaminare, rechemarea direcționată a produselor era extrem de dificilă."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Trasabilitate Produs, Cutie și Palet
- **solutionLede:** Aplicația de trasabilitate Produs | Carton | Palet a fost implementată cu succes pe liniile de producție de la fabrica Duru Bulgur din Karaman. Pașii Produs – Cutie – Palet – Depozit – Client au fost făcuți urmăribili pe o singură platformă bazată pe un număr unic de serie.
- **steps:**
  - **no:** "01" | **title:** "Marcare Produs" | **text:** "În etapa de ambalare, produsele sunt marcate individual și dobândesc o identitate trasabilă."
  - **no:** "02" | **title:** "Asociere Cutie & Palet" | **text:** "Se înregistrează ce produs intră în ce cutie și ce cutie este așezată pe ce palet (Agregare)."
  - **no:** "03" | **title:** "Transferuri de Depozit" | **text:** "Mișcările de transfer intern de depozit între diferite locații sunt înregistrate instantaneu folosind terminale portabile."
  - **no:** "04" | **title:** "Expediere Client" | **text:** "Sunt înregistrate transferurile de expediere către clienți, completând lanțul de date end-to-end."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipamente Utilizate
- **techTitle:** Infrastructură de management de teren și date
- **techGrid:**
  - **tag:** "AUTOMATIZARE" | **title:** "Automatizare de câmp cu PLC" | **text:** "Structură PLC care gestionează automatizarea terenului și fluxul de lucru al liniei de producție."
  - **tag:** "INTERFAȚĂ" | **title:** "Aplicație SCADA cu C#" | **text:** "Aplicație personalizată în C# pentru interfața operatorului, potrivirea etichetelor și monitorizarea procesului."
  - **tag:** "HARDWARE" | **title:** "Cititoare Industriale" | **text:** "Scannere industriale care citesc codurile de bare/etichetele de produs, carton și palet cu înaltă precizie."
  - **tag:** "MOBIL" | **title:** "Aplicație Terminal Portabil" | **text:** "Înregistrarea transferurilor de depozit, a mișcărilor de stoc și a expedierilor către clienți la fața locului prin terminale portabile."
  - **tag:** "SOFTWARE" | **title:** "Platforma OnSuite Trace" | **text:** "Stratul software central unde sunt controlate trasabilitatea și managementul proceselor."
  - **tag:** "DATE" | **title:** "Integrare ERP" | **text:** "Partajarea bidirecțională a datelor de transfer și a stării stocurilor, integrată cu sistemul ERP."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Integrare bidirecțională cu ERP
- **integrationDesc:** Aplicația de trasabilitate funcționează complet integrată cu sistemul ERP existent al Duru Bulgur: datele de teren, mișcările de stoc și informațiile de transfer sunt transmise instantaneu către ERP.
- **integrationList:**
  - **bold:** "Transmitere în Sistemul ERP" | **text:** "Toate datele de transfer de depozit și expediere înregistrate de pe terminalele portabile sunt scrise instantaneu în ERP."
  - **bold:** "Controlul și Urmărirea Procesului" | **text:** "Relațiile produs-cutie-palet sunt sincronizate cu starea stocurilor ERP și urmărite printr-o singură platformă."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Control digital end-to-end
- **resultsGrid:**
  - **title:** "Trasabilitate end-to-end" | **text:** "Întregul lanț de la ambalare la client a devenit trasabil end-to-end pe baza numărului de serie unic al produsului."
  - **title:** "Zero erori manuale" | **text:** "Relațiile produs-cutie-palet și mișcările depozit/client sunt înregistrate automat, eliminând erorile de urmărire manuală."
  - **title:** "Capacitate de rechemare rapidă" | **text:** "În cazul unei potențiale rechemări, capacitatea de urmărire precisă înapoi a maximizat acuratețea expedierii și siguranța operațională."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să vă transformați și procesele de producție?
- **ctaSubtitle:** Contactați-ne pentru a discuta cum putem implementa o soluție similară pentru afacerea dumneavoastră.
- **ctaPrimary:** Contactați-ne


---

### 11. BSH - Braket İzlenebilirlik
**Slug:** `bsh-carriers-traceability` | **ID:** `37` | **Sıra (Order):** `11` | **Yıl:** `2023`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `bsh-carriers-traceability`
- **Sıralama (order):** `11`
- **Yıl (year / referenceDate):** `2023`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `RFID, Barcode, ERP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/BSH_Bosch_und_Siemens_Hausger%C3%A4te_logo.svg`
  - **Ana Görsel (image):** `/images/companies/Bsh/BSH_opengraph.webp`
  - **Hero Görseli (heroImage):** `/images/companies/Bsh/BSH_opengraph.webp`
  - **Galeri Görselleri (gallery):**
  - /images/companies/Bsh/BSH_opengraph.webp
  - /images/companies/Bsh/100-Milyondan-Fazla-Uretim-45-Milyar-ABD-dolari-Ekonomik-Katki.webp

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** BSH - Braket İzlenebilirlik
- **Sektör (sector / tagValue):** Beyaz Eşya
- **Konum (locationValue):** Çerkezköy
- **Kapsam (scopeVal):** Anahtar Teslim
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** BSH fırın fabrikasında gerçekleştirilen projede fırın camına monte edilen taşıyıcılar, sepet kimliğine göre takip edildi ve kayıt altına alındı. Cam yapıştırma istasyonunda sepetler taranarak cam lot numaraları ile taşıyıcı lot numaraları arasındaki eşleşme doğrulandı. Ürün montajı sırasında ilgili cam arabasının lot numarası ürün seri numarasıyla ilişkilendirilerek izlenebilirlik sistemiyle entegrasyon sağlandı. Bu durum bileşen-ürün eşleşmesini güvence altına alarak doğru ürünlerde doğru bileşenlerin kullanılmasını sağladı. Uygun parçalar için onay verileri Oracle'a geri gönderildi.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Doğru cam, doğru braket,
- **heroTitleLine2:** sıfır hata montaj.
- **heroSub:** BSH'nin Çerkezköy fırın fabrikasında hayata geçirilen projede; fırın camına monte edilen braketler sepet kimliğine göre takip edilerek cam-braket-ürün bileşen ilişkisi SAP entegrasyonu ile kayıt altına alınmaktadır.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Fırın üretiminde hassas montaj kontrolü
- **contextP1:** BSH'nin Çerkezköy'deki fırın üretimi yapan fabrikasında hayata geçirilen projede, fırın camına monte edilen braketler sepet kimliğine göre takip edilmiş ve kayıt altına alınmıştır.
- **contextP2:** Proje, cam–braket–ürün bileşen ilişkisinin izlenebilirliğini sağlamak ve montaj hatalarını önlemek amacıyla gerçekleştirilmiştir.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Bileşen eşleşme zorlukları
- **problemLede:** Fırın kapaklarının montajında cam ile braketlerin yanlış eşleşmesi riskleri mevcuttu.
- **problemList:**
  - **bold:** "Yanlış Eşleşme Riski" | **text:** "Fırın üretiminde cam ve braket bileşenlerinin yanlış eşleşmesi ve bu eşleşmelerin kontrol edilememesi."
  - **bold:** "Manuel Takip Kısıtları" | **text:** "Bileşen-ürün ilişkisinin manuel takibinin yetersiz olması ve izlenebilirlik boşluğu yaratması."
  - **bold:** "Hatalı Parça Tespiti" | **text:** "Montaj sırasında hatalı eşleşmelerin anlık olarak fark edilip engellenememesi."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Braket ve Sepet İzlenebilirliği
- **solutionLede:** Fırın camına monte edilen braketler, sepet kimliğine göre takip edildi ve kayıt altına alındı. Cam yapıştırma istasyonunda sepetler taranarak cam lot numaraları ile braket lot numaraları arasındaki eşleşme doğrulandı. Ürün montajı sırasında ilgili cam arabasının lot numarası ürün seri numarasıyla ilişkilendirildi.
- **steps:**
  - **no:** "01" | **title:** "Sepet Takibi" | **text:** "Fırın camına monte edilen braketler, sepet kimliklerine (sepet ID) göre izlenebilir hale getirilir."
  - **no:** "02" | **title:** "Lot Doğrulama" | **text:** "Cam yapıştırma istasyonunda sepetler taranır, cam lot numaraları ile braket lot numaraları doğrulanır."
  - **no:** "03" | **title:** "Ürün İlişkilendirme" | **text:** "Montaj aşamasında, ilgili cam arabasının lot numarası fırının kendi seri numarasıyla ilişkilendirilir."
  - **no:** "04" | **title:** "SAP Onay Yazımı" | **text:** "Tüm eşleşmeleri başarıyla tamamlanan uygun parçaların onay verileri SAP ERP sistemine geri yazılır."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** Otomasyon ve kontrol mimarisi
- **techGrid:**
  - **tag:** "OTOMASYON" | **title:** "PLC saha otomasyonu" | **text:** "Cam yapıştırma istasyonundaki iş akışını ve saha sinyallerini yöneten PLC altyapısı."
  - **tag:** "ARAYÜZ" | **title:** "C# ile SCADA uygulaması" | **text:** "Eşleşme doğrulaması, ürün ilişkilendirmeleri ve operatör ekranları için C# uygulaması."
  - **tag:** "DONANIM" | **title:** "Endüstriyel Barkod Okuyucular" | **text:** "Cam ve braket lot numaralarını, sepet ID'lerini okuyan yüksek hassasiyetli barkod okuyucular."
  - **tag:** "YAZILIM" | **title:** "OnSuite Trace Platformu" | **text:** "İzlenebilirlik, lot takibi ve süreç kontrolünün sağlandığı merkezi yazılım katmanı."
  - **tag:** "VERİ" | **title:** "SAP ERP Entegrasyonu" | **text:** "Eşleşme ve üretim onaylarının SAP sistemiyle çift yönlü veri entegrasyonu."
  - **tag:** "DOĞRULAMA" | **title:** "İstasyon Kontrolü" | **text:** "Yanlış braket kullanımında PLC üzerinden hattı durduran otomatik durdurma mekanizması."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** SAP ERP Entegrasyonu
- **integrationDesc:** Süreç izleme ve doğrulama sistemi, BSH'nin SAP ERP altyapısıyla tam entegre çalışmaktadır; üretim onayları ve lot eşleme verileri SAP'ye geri gönderilmektedir.
- **integrationList:**
  - **bold:** "SAP Üretim Onayı" | **text:** "Markalama ve doğrulama sonrasında uygun parçaların onay verileri SAP ERP sistemine anlık olarak yazılır."
  - **bold:** "Lot Eşleme Doğrulaması" | **text:** "Cam ve braket lot numaraları SAP envanter ve reçete tanımlarıyla doğrulanarak işleme izin verilir."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Sıfır hatalı montaj ve tam izlenebilirlik
- **resultsGrid:**
  - **title:** "Doğru bileşen eşleşmesi" | **text:** "Cam ve braket bileşenlerinin montajda doğru eşleşmesi otomatik olarak doğrulanarak yanlış parça kullanımı sıfıra indirilmiştir."
  - **title:** "Seri numarası bazlı takip" | **text:** "Bileşen-ürün ilişkisi ürünün seri numarası düzeyinde kayıt altına alınarak tam geriye dönük izlenebilirlik sağlanmıştır."
  - **title:** "Süreç güvenliği" | **text:** "Hatalı eşleşmelerde hattı durdurma kontrolü ile kalitesiz ürünün bir sonraki istasyona geçişi tamamen önlenmiştir."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Üretim süreçlerinizi de dönüştürmek ister misiniz?
- **ctaSubtitle:** Benzer bir çözümü işletmenize nasıl uygulayabileceğimizi konuşmak için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** BSH Carriers Traceability
- **Sector (sector / tagValue):** Home Appliances
- **Location (locationValue):** Çerkezköy
- **Scope (scopeVal):** Turnkey
- **Year (year):** Year
- **Short Description (description):** In the project carried out at the BSH oven factory, carriers mounted on oven glass were tracked and recorded based on basket ID. At the glass bonding station, baskets were scanned to ensure matching between glass lot numbers and carrier lot numbers. During product assembly, the lot number of the relevant glass trolley was associated with the product serial number, integrating with the traceability system. This ensured component-product matching, guaranteeing the use of correct components in correct products. For conforming parts, confirmation data was sent back to Oracle.

##### Hero Section (EN)
- **heroTitleLine1:** Correct glass, correct bracket,
- **heroTitleLine2:** zero-defect assembly.
- **heroSub:** Implemented at BSH's Çerkezköy oven factory; brackets mounted on oven glass are tracked by carrier/basket ID, recording the glass-bracket-product component relationship integrated with SAP ERP.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Precision assembly control in oven production
- **contextP1:** In the project implemented at BSH's oven production factory in Çerkezköy, the brackets mounted on the oven glass were tracked and recorded based on the basket ID.
- **contextP2:** The project was carried out to ensure the traceability of the glass–bracket–product component relationship and to prevent assembly errors.

##### Problem / Challenge (EN)
- **problemEyebrow:** Needs / Problems
- **problemTitle:** Component matching difficulties
- **problemLede:** There was a risk of incorrect matching of glass and bracket components during oven door assembly.
- **problemList:**
  - **bold:** "Incorrect Matching Risk" | **text:** "Incorrect matching of glass and bracket components in oven production and lack of verification for these matches."
  - **bold:** "Manual Tracking Constraints" | **text:** "Insufficient manual tracking of the component-product relationship, creating a traceability gap."
  - **bold:** "Defective Part Detection" | **text:** "Inability to detect and block incorrect component pairings in real time during assembly."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Bracket and Basket Traceability
- **solutionLede:** Brackets were tracked according to basket IDs. Baskets were scanned at the glass bonding station, verifying oven glass lot numbers against bracket lot numbers. At the assembly stage, the lot number of the relevant glass trolley was associated with the oven's unique serial number.
- **steps:**
  - **no:** "01" | **title:** "Basket Tracking" | **text:** "Brackets mounted on oven glass are made traceable based on their basket IDs."
  - **no:** "02" | **title:** "Lot Verification" | **text:** "Baskets are scanned at the glass bonding station, verifying oven glass lot numbers against bracket lot numbers."
  - **no:** "03" | **title:** "Product Association" | **text:** "At the assembly stage, the lot number of the relevant glass trolley is associated with the oven's unique serial number."
  - **no:** "04" | **title:** "SAP Confirmation" | **text:** "Confirmation data for compliant parts that successfully pass all matches is written back to the SAP ERP system."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** Automation and control architecture
- **techGrid:**
  - **tag:** "AUTOMATION" | **title:** "PLC field automation" | **text:** "PLC infrastructure managing workflow and field signals at the glass bonding station."
  - **tag:** "INTERFACE" | **title:** "SCADA application with C#" | **text:** "C# application for verification, product association, and operator displays."
  - **tag:** "HARDWARE" | **title:** "Industrial Barcode Readers" | **text:** "High-precision barcode readers scanning glass and bracket lot numbers, as well as basket IDs."
  - **tag:** "SOFTWARE" | **title:** "OnSuite Trace Platform" | **text:** "Central software layer providing traceability, lot tracking, and process control."
  - **tag:** "DATA" | **title:** "SAP ERP Integration" | **text:** "Bi-directional data integration of matching and production confirmations with the SAP system."
  - **tag:** "VERIFICATION" | **title:** "Station Control" | **text:** "Automatic stop mechanism that halts the line via PLC in case of incorrect bracket usage."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** SAP ERP Integration
- **integrationDesc:** The process monitoring and verification system runs fully integrated with BSH's SAP ERP infrastructure; production confirmations and lot-matching data are written back to SAP.
- **integrationList:**
  - **bold:** "SAP Production Confirmation" | **text:** "Confirmation data for compliant parts is written to the SAP ERP system in real time after verification."
  - **bold:** "Lot Match Verification" | **text:** "Glass and bracket lot numbers are validated against SAP inventory and recipe definitions before proceeding."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Zero-defect assembly and complete traceability
- **resultsGrid:**
  - **title:** "Correct component matching" | **text:** "The correct match of glass and bracket components during assembly is auto-verified, reducing incorrect part usage to zero."
  - **title:** "Serial number level tracking" | **text:** "Component-product relationships are recorded at the product serial number level, ensuring full backward traceability."
  - **title:** "Process safety" | **text:** "The line-stopping control on incorrect matches completely prevents non-compliant products from moving to the next station."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Want to transform your production processes too?
- **ctaSubtitle:** Contact us to discuss how we can implement a similar solution for your business.
- **ctaPrimary:** Get in Touch

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** BSH - Trasabilitatea suporturilor
- **Sector (sector / tagValue):** Electrocasnice
- **Locație (locationValue):** Çerkezköy
- **Domeniu de Aplicare (scopeVal):** La cheie
- **An (year):** An
- **Descriere Scurtă (description):** În proiectul realizat la fabrica de cuptoare BSH, suporturile montate pe sticla cuptoarelor au fost urmărite și înregistrate pe baza ID-ului coșului. La stația de lipire a sticlei, coșurile au fost scanate pentru a asigura potrivirea între numerele de lot ale sticlei și ale suporturilor. În timpul asamblării produsului, numărul de lot al căruciorului de sticlă relevant a fost asociat cu numărul de serie al produsului, integrându-se cu sistemul de trasabilitate. Acest lucru a asigurat potrivirea componentă-produs, garantând utilizarea componentelor corecte în produsele corecte. Pentru piesele conforme, datele de confirmare au fost trimise înapoi către Oracle.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Sticlă corectă, suport corect,
- **heroTitleLine2:** asamblare fără defecte.
- **heroSub:** Implementat la fabrica de cuptoare BSH din Çerkezköy; suporturile montate pe sticla cuptorului sunt urmărite după ID-ul coșului de transport, înregistrând relația sticlă-suport-produs în mod integrat cu SAP.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Control de asamblare de precizie în producția de cuptoare
- **contextP1:** În proiectul implementat la fabrica de cuptoare BSH din Çerkezköy, suporturile montate pe sticla cuptorului au fost urmărite și înregistrate pe baza ID-ului coșului.
- **contextP2:** Proiectul a fost realizat pentru a asigura trasabilitatea relației sticlă–suport–produs și pentru a preveni erorile de asamblare.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoi / Probleme
- **problemTitle:** Dificultăți în potrivirea componentelor
- **problemLede:** Exista riscul unei potriviri incorecte a componentelor de sticlă și suport în timpul asamblării ușii cuptorului.
- **problemList:**
  - **bold:** "Risc de Potrivire Incorectă" | **text:** "Potrivirea incorectă a componentelor de sticlă și suport în producția de cuptoare și lipsa verificării acestor potriviri."
  - **bold:** "Limitări de Urmărire Manuală" | **text:** "Urmărirea manuală insuficientă a relației componentă-produs, creând o lacună de trasabilitate."
  - **bold:** "Detectarea Pieselor Defecte" | **text:** "Imposibilitatea de a detecta și bloca asocierile incorecte de componente în timp real în timpul asamblării."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Trasabilitatea Suporturilor și Coșurilor
- **solutionLede:** Suporturile au fost urmărite în funcție de ID-urile coșurilor. Coșurile au fost scanate la stația de lipire a sticlei, verificând numerele de lot ale sticlei cu cele ale suporturilor. În etapa de asamblare, numărul de lot al căruciorului de sticlă relevant a fost asociat cu numărul de serie unic al cuptorului.
- **steps:**
  - **no:** "01" | **title:** "Urmărirea Coșurilor" | **text:** "Suporturile montate pe sticla cuptorului sunt făcute trasabile pe baza ID-urilor coșurilor de transport."
  - **no:** "02" | **title:** "Verificarea Lotului" | **text:** "Coșurile sunt scanate la stația de lipire, verificând numerele de lot ale sticlei cu cele ale suporturilor."
  - **no:** "03" | **title:** "Asocierea Produsului" | **text:** "În etapa de asamblare, numărul de lot al căruciorului de sticlă relevant este asociat cu numărul de serie unic al cuptorului."
  - **no:** "04" | **title:** "Confirmarea SAP" | **text:** "Datele de confirmare pentru piesele conforme care trec cu succes de toate potrivirile sunt scrise înapoi în sistemul SAP ERP."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipamente Utilizate
- **techTitle:** Arhitectură de automatizare și control
- **techGrid:**
  - **tag:** "AUTOMATIZARE" | **title:** "Automatizare de câmp cu PLC" | **text:** "Infrastructură PLC care gestionează fluxul de lucru și semnalele la stația de lipire a sticlei."
  - **tag:** "INTERFAȚĂ" | **title:** "Aplicație SCADA cu C#" | **text:** "Aplicație C# pentru verificare, asocierea produselor și ecranele operatorului."
  - **tag:** "HARDWARE" | **title:** "Cititoare de Coduri de Bare" | **text:** "Cititoare de coduri de bare de înaltă precizie care scanează codurile de lot de sticlă și suport, precum și ID-urile coșurilor."
  - **tag:** "SOFTWARE" | **title:** "Platforma OnSuite Trace" | **text:** "Central software layer care asigură trasabilitatea, urmărirea loturilor și controlul procesului."
  - **tag:** "DATE" | **title:** "Integrare SAP ERP" | **text:** "Integrare bidirecțională de date pentru potriviri și confirmări de producție cu sistemul SAP."
  - **tag:** "VERIFICARE" | **title:** "Controlul Stației" | **text:** "Mecanism de oprire automată care oprește linia prin PLC în caz de utilizare incorectă a suportului."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Integrare SAP ERP
- **integrationDesc:** Sistemul de monitorizare și verificare a procesului funcționează complet integrat cu infrastructura SAP ERP a BSH; confirmările de producție și datele de potrivire a loturilor sunt scrise înapoi în SAP.
- **integrationList:**
  - **bold:** "Confirmare Producție SAP" | **text:** "Datele de confirmare pentru piesele conforme sunt scrise în sistemul SAP ERP în timp real după verificare."
  - **bold:** "Verificarea Potrivirii Lotului" | **text:** "Numerele de lot de sticlă și suport sunt validate cu stocul SAP și definițiile de rețetă înainte de a continua."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Asamblare fără defecte și trasabilitate completă
- **resultsGrid:**
  - **title:** "Potrivirea corectă a componentelor" | **text:** "Potrivirea corectă a componentelor de sticlă și suport în timpul asamblării este auto-verificată, reducând utilizarea pieselor incorecte la zero."
  - **title:** "Urmărire la nivel de număr de serie" | **text:** "Relațiile componentă-produs sunt înregistrate la nivelul numărului de serie al produsului, asigurând o trasabilitate retrospectivă completă."
  - **title:** "Siguranța procesului" | **text:** "Controlul de oprire a liniei la potriviri incorecte previne complet trecerea produselor neconforme la următoarea stație."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să vă transformați și procesele de producție?
- **ctaSubtitle:** Contactați-ne pentru a discuta cum putem implementa o soluție similară pentru afacerea dumneavoastră.
- **ctaPrimary:** Contactați-ne


---

### 12. Türk Demir Döküm - RFID Gate ile Dijital Kanban
**Slug:** `turk-demir-dokum-rfid-gate-with-digital-kanban` | **ID:** `35` | **Sıra (Order):** `12` | **Yıl:** `2022`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `turk-demir-dokum-rfid-gate-with-digital-kanban`
- **Sıralama (order):** `12`
- **Yıl (year / referenceDate):** `2022`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `RFID, Barcode, ERP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/demirdokum-seeklogo.png`
  - **Ana Görsel (image):** `/images/companies/DemirDokum/DemirDokum-Turk-Demir-Dokum.jpg`
  - **Hero Görseli (heroImage):** `/images/companies/DemirDokum/DemirDokum-Turk-Demir-Dokum.jpg`
  - **Galeri Görselleri (gallery):**
  - /images/companies/DemirDokum/DemirDokum_Izmirgaz_Fabrika_Ziyaret_Gorsel2_1666606772.jpeg

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Türk Demir Döküm - RFID Gate ile Dijital Kanban
- **Sektör (sector / tagValue):** Beyaz Eşya
- **Konum (locationValue):** Bilecik
- **Kapsam (scopeVal):** Anahtar Teslim
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Sick RFGS Pro ekipmanı kullanılarak hayata geçirilen projede, üretim departmanından gelen gereksinimlere dayalı olarak kutu hazırlama dahil depo malzeme hazırlama süreçleri optimize edildi. 300'den fazla kutuya RFID etiketi takılarak üretim alanındaki RFID kapısından çıkan kutuların depo malzeme siparişlerini otomatik oluşturması sağlandı. Malzeme akışı çekme (pull) metodolojisine göre yeniden yapılandırıldı.

##### Hero Bölümü (TR)
- **heroTitleLine1:** RFID teknolojisiyle,
- **heroTitleLine2:** kesintisiz dijital kanban.
- **heroSub:** Türk Demir Döküm'ün Bilecik fabrikasında hayata geçirilen RFID Kapı ve Kanban sistemi; üretim hatlarının depo malzeme hazırlama süreçlerini çekme (pull) metodolojisine göre optimize eder.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Kombi üretiminde hat besleme optimizasyonu
- **contextP1:** Türk Demir Döküm'ün Bilecik'teki fabrikasında kombi üretimi yapılmaktadır. Proje, üretim hatlarından gelen taleplere dayalı olarak depo malzeme hazırlama süreçlerini optimize etmek amacıyla hayata geçirilmiştir.
- **contextP2:** RFID kapısı uygulaması ile malzeme akışı üretim temposuna tam uyumlu, talep odaklı dijital kanban yapısına kavuşturulmuştur.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Hat besleme ve sipariş gecikmeleri
- **problemLede:** Üretim hatlarının malzeme ihtiyaçlarının manuel yöntemlerle yönetilmesi gecikmelere ve hatalara zemin hazırlıyordu.
- **problemList:**
  - **bold:** "Gecikme Riskleri" | **text:** "Manuel malzeme sipariş ve hazırlama süreçlerinde yaşanan gecikmeler ve hat duruşu riskleri."
  - **bold:** "Hatalı Sipariş ve Stok" | **text:** "Gereksinimlerin hatalı iletilmesi sonucu depoda fazla stok veya yanlış malzeme ikmali."
  - **bold:** "Üretim Ritmi Uyumsuzluğu" | **text:** "Malzeme akışının anlık üretim temposuna ve hat tüketim hızına senkronize edilememesi."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** RFID Kapı ve Çekme (Pull) Metodolojisi
- **solutionLede:** Bir RFID Kapı uygulaması hayata geçirilerek, üretim hatlarından gelen gereksinimlere dayalı olarak, depo malzeme hazırlama süreçleri optimize edildi. 300'den fazla taşıma birimine RFID etiketi takılarak RFID kapısından çıkan kutuların depo malzeme siparişlerini otomatik oluşturması sağlandı.
- **steps:**
  - **no:** "01" | **title:** "RFID Etiketleme" | **text:** "300'den fazla taşıma kutusu/kasası yüksek hassasiyetli endüstriyel RFID etiketleriyle donatılır."
  - **no:** "02" | **title:** "RFID Gate Okuma" | **text:** "Kutular üretim alanı çıkışındaki RFID Kapısından (Gate) geçtiği anda etiketler otomatik olarak taranır."
  - **no:** "03" | **title:** "Otomatik Sipariş" | **text:** "Taranan kutular anlık sipariş talebine dönüşerek depoya otomatik malzeme ikmal emri iletilir."
  - **no:** "04" | **title:** "El Terminali Kontrolü" | **text:** "Depo personeli, RFID el terminalleriyle siparişe uygun parçaları hatasız hazırlar ve sevk eder."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** RFID ve depo entegrasyon altyapısı
- **techGrid:**
  - **tag:** "OTOMASYON" | **title:** "RFID Gate okuma sistemi" | **text:** "Üretim alanı çıkışına konumlandırılan, kutuları hareket halindeyken okuyan RFID anten ve geçiş kapısı."
  - **tag:** "RFID" | **title:** "Endüstriyel RFID etiketleri" | **text:** "300'den fazla taşıma kasasına monte edilen, zorlu saha şartlarına dayanıklı UHF RFID etiketleri."
  - **tag:** "MOBİL" | **title:** "RFID el terminalleri" | **text:** "Depo personelinin malzeme toplama ve transfer adımlarını sahada gerçekleştirdiği mobil cihazlar."
  - **tag:** "YAZILIM" | **title:** "OnSuite Trace Platformu" | **text:** "RFID geçiş verilerini sipariş taleplerine dönüştüren ve süreci yöneten merkezi yazılım."
  - **tag:** "VERİ" | **title:** "SAP ERP entegrasyonu" | **text:** "Oluşturulan depo malzeme sipariş kayıtlarının SAP ERP sistemine anlık olarak aktarımı."
  - **tag:** "METODOLOJİ" | **title:** "Dijital Kanban Kontrolü" | **text:** "Üretim hattının tüketim hızına göre malzeme akışını tetikleyen çekme (pull) kontrolü."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** SAP ERP Entegrasyonu
- **integrationDesc:** RFID Kapı sistemi, Türk Demir Döküm'ün SAP ERP yapısıyla anlık entegre çalışmaktadır; saha geçişlerinden üretilen sipariş kayıtları otomatik olarak SAP'ye işlenir.
- **integrationList:**
  - **bold:** "SAP Malzeme Siparişi" | **text:** "RFID kapısından geçen kutuların okuma verileriyle SAP üzerinde otomatik transfer emri oluşturulur."
  - **bold:** "Stok Senkronizasyonu" | **text:** "Depodan hatta sevk edilen kutuların durumları SAP envanteri ile anlık olarak güncellenir."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Otomatik hat besleme ve optimize depo süreçleri
- **resultsGrid:**
  - **title:** "Sıfır manuel sipariş" | **text:** "RFID kapısıyla depo malzeme hazırlama süreçleri otomatikleştirilerek manuel sipariş ihtiyacı tamamen ortadan kaldırılmıştır."
  - **title:** "Çekme (Pull) metodolojisi" | **text:** "Malzeme akışının üretim temposuna uyumlu şekilde çekme esasına göre yönetilmesiyle fazla stoklama önlenmiştir."
  - **title:** "Hız ve doğruluk" | **text:** "Dijital kanban yapısı sayesinde depo malzeme hazırlama hızında ve sevkiyat doğruluğunda maksimum verim elde edilmiştir."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Üretim süreçlerinizi de dönüştürmek ister misiniz?
- **ctaSubtitle:** Benzer bir çözümü işletmenize nasıl uygulayabileceğimizi konuşmak için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Turk Demir Dokum RFID Gate With Digital Kanban
- **Sector (sector / tagValue):** Home Appliances
- **Location (locationValue):** Bilecik
- **Scope (scopeVal):** Turnkey
- **Year (year):** Year
- **Short Description (description):** In the project implemented using Sick RFGS Pro equipment, the material preparation process in the warehouse, including bin preparation, was optimized based on requirements from the production floor. RFID tags were installed on over 300 bins, enabling automatic generation of material orders in the warehouse as bins exited through the RFID gate from the production floor. The material flow was restructured according to the pull methodology.

##### Hero Section (EN)
- **heroTitleLine1:** Seamless digital kanban,
- **heroTitleLine2:** powered by RFID technology.
- **heroSub:** Implemented at Turk Demir Dokum's Bilecik factory; the RFID Gate and Kanban system optimizes warehouse material preparation processes based on the pull methodology.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Line feeding optimization in boiler production
- **contextP1:** Turk Demir Dokum's Bilecik factory produces combi boilers. The project was implemented to optimize warehouse material preparation processes based on demands from production lines.
- **contextP2:** With the RFID gate application, the material flow has been transformed into a demand-driven digital kanban structure, synchronized with the production tempo.

##### Problem / Challenge (EN)
- **problemEyebrow:** Needs / Problems
- **problemTitle:** Line feeding and order delays
- **problemLede:** Managing production line material needs with manual methods caused delays and preparation errors.
- **problemList:**
  - **bold:** "Delay Risks" | **text:** "Delays experienced in manual material ordering and preparation processes, risking line downtime."
  - **bold:** "Inaccurate Orders & Excess Stock" | **text:** "Incorrect transfer of requirements leading to excess inventory or incorrect material feeding in the warehouse."
  - **bold:** "Production Rhythm Mismatch" | **text:** "Inability to synchronize the material flow with real-time production speed and line consumption rates."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** RFID Gate & Pull Methodology
- **solutionLede:** An RFID Gate application was implemented to optimize warehouse material preparation based on production line needs. More than 300 transport bins were RFID-tagged, automatically generating warehouse material orders as they exited through the RFID gate.
- **steps:**
  - **no:** "01" | **title:** "RFID Tagging" | **text:** "Over 300 transport boxes/bins are equipped with high-precision industrial RFID tags."
  - **no:** "02" | **title:** "RFID Gate Scanning" | **text:** "Tags are automatically scanned as the boxes pass through the RFID Gate at the production area exit."
  - **no:** "03" | **title:** "Automated Ordering" | **text:** "Scanned boxes turn into real-time order demands, auto-triggering material replenishment orders to the warehouse."
  - **no:** "04" | **title:** "Handheld Terminal Control" | **text:** "Warehouse staff prepares and ships the correct parts error-free using RFID handheld terminals."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** RFID and warehouse integration infrastructure
- **techGrid:**
  - **tag:** "AUTOMATION" | **title:** "RFID Gate reading system" | **text:** "RFID antenna and transit gate positioned at the production area exit, scanning boxes in motion."
  - **tag:** "RFID" | **title:** "Industrial RFID tags" | **text:** "UHF RFID tags mounted on over 300 transport bins, resistant to harsh workshop conditions."
  - **tag:** "MOBILE" | **title:** "RFID handheld terminals" | **text:** "Mobile devices where warehouse staff performs material picking and transfer steps on-site."
  - **tag:** "SOFTWARE" | **title:** "OnSuite Trace Platform" | **text:** "Central software that converts RFID transit data into order demands and manages the process."
  - **tag:** "DATA" | **title:** "SAP ERP integration" | **text:** "Instant transfer of generated warehouse material order records to the SAP ERP system."
  - **tag:** "METHODOLOGY" | **title:** "Digital Kanban Control" | **text:** "Pull control that triggers material flow according to the consumption rate of the production line."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** SAP ERP Integration
- **integrationDesc:** The RFID Gate system runs instantly integrated with Turk Demir Dokum's SAP ERP; order records generated from field transits are automatically processed in SAP.
- **integrationList:**
  - **bold:** "SAP Material Order" | **text:** "An automatic transfer order is created in SAP based on reading data of boxes passing through the RFID gate."
  - **bold:** "Stock Synchronization" | **text:** "The status of boxes shipped from the warehouse to the line is updated instantly in SAP inventory."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Automated line feeding and optimized warehouse processes
- **resultsGrid:**
  - **title:** "Zero manual orders" | **text:** "Warehouse material preparation is automated with the RFID gate, completely eliminating manual order needs."
  - **title:** "Pull methodology" | **text:** "Managing material flow according to the pull basis synchronized with production tempo prevented excess stocking."
  - **title:** "Speed and accuracy" | **text:** "Maximum efficiency in warehouse material prep speed and shipment accuracy has been achieved thanks to the digital kanban structure."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Want to transform your production processes too?
- **ctaSubtitle:** Contact us to discuss how we can implement a similar solution for your business.
- **ctaPrimary:** Get in Touch

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Turk Demir Dokum - Poarta RFID cu Kanban Digital
- **Sector (sector / tagValue):** Electrocasnice
- **Locație (locationValue):** Bilecik
- **Domeniu de Aplicare (scopeVal):** La cheie
- **An (year):** An
- **Descriere Scurtă (description):** În proiectul implementat folosind echipamente Sick RFGS Pro, procesul de pregătire a materialelor în depozit, inclusiv pregătirea lăzilor, a fost optimizat pe baza cerințelor din secția de producție. Etichete RFID au fost instalate pe peste 300 de lăzi, permițând generarea automată a comenzilor de materiale în depozit, pe măsură ce lăzile ieșeau prin poarta RFID din secția de producție. Fluxul de materiale a fost restructurat conform metodologiei pull.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Kanban digital continuu,
- **heroTitleLine2:** prin tehnologia RFID.
- **heroSub:** Implementat la fabrica Turk Demir Dokum din Bilecik; sistemul de poartă RFID și Kanban optimizează procesele de pregătire a materialelor din depozit pe baza metodologiei de tragere (pull).

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Optimizarea alimentării liniei în producția de cazane
- **contextP1:** La fabrica Turk Demir Dokum din Bilecik se produc centrale termice. Proiectul a fost implementat pentru a optimiza procesele de pregătire a materialelor din depozit pe baza cererilor de la liniile de producție.
- **contextP2:** Prin aplicația de poartă RFID, fluxul de materiale a fost adus la o structură de kanban digital orientat spre cerere, sincronizat cu ritmul de producție.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoi / Probleme
- **problemTitle:** Alimentarea liniei și întârzierile comenzilor
- **problemLede:** Gestionarea nevoilor de materiale ale liniilor de producție prin metode manuale genera întârzieri și erori.
- **problemList:**
  - **bold:** "Riscuri de Întârziere" | **text:** "Întârzieri în procesele manuale de comandă și pregătire a materialelor, riscând opriri de producție."
  - **bold:** "Comenzi Eronate și Stoc" | **text:** "Transmiterea greșită a cerințelor ducând la stocuri excesive sau alimentare incorectă în depozit."
  - **bold:** "Nepotrivire cu Ritmul Producției" | **text:** "Imposibilitatea de a sincroniza fluxul de materiale cu viteza de producție în timp real și consumul de la linii."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Poarta RFID și Metodologia de Tragere (Pull)
- **solutionLede:** O aplicație de poartă RFID a fost implementată pentru a optimiza pregătirea materialelor din depozit pe baza nevoilor liniei. Peste 300 de containere au been etichetate RFID, generând automat comenzi de materiale în depozit pe măsură ce ieșeau prin poarta RFID.
- **steps:**
  - **no:** "01" | **title:** "Etichetare RFID" | **text:** "Peste 300 de cutii/containere de transport sunt echipate cu etichete RFID industriale de înaltă precizie."
  - **no:** "02" | **title:** "Scanare Poartă RFID" | **text:** "Etichetele sunt scanate automat pe măsură ce cutiile trec prin Poarta RFID la ieșirea din zona de producție."
  - **no:** "03" | **title:** "Comandă Automată" | **text:** "Cutiile scanate devin cereri de comandă în timp real, declanșând automat ordine de reaprovizionare în depozit."
  - **no:** "04" | **title:** "Control Terminal Portabil" | **text:** "Personalul din depozit pregătește și expediază piesele corecte fără erori folosind terminale portabile RFID."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipamente Utilizate
- **techTitle:** Infrastructură de integrare RFID și depozit
- **techGrid:**
  - **tag:** "AUTOMATIZARE" | **title:** "Sistem de citire poartă RFID" | **text:** "Antenă RFID și poartă de tranzit plasate la ieșirea din producție, scanând cutiile în mișcare."
  - **tag:** "RFID" | **title:** "Etichete RFID industriale" | **text:** "Etichete UHF RFID montate pe peste 300 de containere de transport, rezistente la condiții dificile."
  - **tag:** "MOBIL" | **title:** "Terminale portabile RFID" | **text:** "Dispozitive mobile cu care personalul depozitului efectuează pregătirea materialelor și transferul la fața locului."
  - **tag:** "SOFTWARE" | **title:** "Platforma OnSuite Trace" | **text:** "Software central care convertește datele de tranzit RFID în cereri de comandă și gestionează procesul."
  - **tag:** "DATE" | **title:** "Integrare SAP ERP" | **text:** "Transfer instantaneu al înregistrărilor de comenzi de depozit generate către sistemul SAP ERP."
  - **tag:** "METODOLOGIE" | **title:** "Control Kanban Digital" | **text:** "Control de tip pull care declanșează fluxul de materiale în funcție de rata de consum a liniei de producție."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Integrare SAP ERP
- **integrationDesc:** Sistemul Porții RFID funcționează integrat instantaneu cu SAP ERP de la Turk Demir Dokum; înregistrările de comenzi din tranzitul pe teren sunt procesate automat în SAP.
- **integrationList:**
  - **bold:** "Comandă Material SAP" | **text:** "O comandă de transfer automată este creată în SAP pe baza datelor de citire a cutiilor care trec prin poarta RFID."
  - **bold:** "Sincronizare Stoc" | **text:** "Starea cutiilor expediate din depozit la linie este actualizată instantaneu în inventarul SAP."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Alimentare automată a liniei și depozit optimizat
- **resultsGrid:**
  - **title:** "Fără comenzi manuale" | **text:** "Pregătirea materialelor este automatizată prin poarta RFID, eliminând complet nevoia de comenzi manuale."
  - **title:** "Metodologia Pull" | **text:** "Gestionarea fluxului de materiale pe baza tragerii sincronizate cu ritmul de producție a prevenit stocarea excesivă."
  - **title:** "Viteză și acuratețe" | **text:** "A fost obținută o eficiență maximă în viteza de pregătire și acuratețea expedierii datorită structurii de kanban digital."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să vă transformați și procesele de producție?
- **ctaSubtitle:** Contactați-ne pentru a discuta cum putem implementa o soluție similară pentru afacerea dumneavoastră.
- **ctaPrimary:** Contactați-ne


---

### 13. Haier Europe - Ocak Montaj Hattı Tekil Ürün İzlenebilirliği
**Slug:** `haier-europe-single-product-traceability-oven-assembly-line` | **ID:** `33` | **Sıra (Order):** `13` | **Yıl:** `2022`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `haier-europe-single-product-traceability-oven-assembly-line`
- **Sıralama (order):** `13`
- **Yıl (year / referenceDate):** `2022`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `RFID, Barcode, ERP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/haier_europa_2025.svg`
  - **Ana Görsel (image):** `/images/companies/Haier/Haier-Tech-Romania_1.jpg`
  - **Hero Görseli (heroImage):** `/images/companies/Haier/haierin-eskisehirdeki-85-milyon-avroluk-yatirimi-1600-kisiye-istihdam-saglayacak_066df37.jpg`
  - **Galeri Görselleri (gallery):**
  - /images/companies/Haier/Haier-Turchia.jpg
  - /images/companies/Haier/Haier-Europe-New-Turkey-Factory.jpg
  - /images/companies/Haier/20211022_162223-scaled-1.jpg

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Haier Europe - Ocak Montaj Hattı Tekil Ürün İzlenebilirliği
- **Sektör (sector / tagValue):** Beyaz Eşya
- **Konum (locationValue):** Eskişehir
- **Kapsam (scopeVal):** Anahtar Teslim
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Beyaz eşya üretiminde küresel lider Haier Europe'un Türkiye'deki pişirme cihazları fabrikasındaki yeni fırın montaj hatlarına izlenebilirlik sistemi uyguladık. Montaj hattı otomasyon yazılımını da geliştirdiğimiz bu projede, ürün barkodundaki seri numara hat başında RFID ile ilişkilendirilmekte ve izlenebilirlik RFID sistemi üzerinden sağlanmaktadır. Üretim sürecinde elektrik testleri, gaz kaçak testleri ve alev kontrol testleri, hat boyunca belirlenen istasyonlarda operatörden bağımsız olarak otomatik gerçekleştirilmekte; test sonuçları test istasyonlarından toplanarak ürün seri numarasıyla eşleştirilmektedir. Proje, 9 eksenli servo sistemler kullanmaktadır. Tüm veri alışverişi EtherCAT, TCP/IP ve Profinet iletişim altyapısı üzerinden sağlanmaktadır. Projenin başarıyla tamamlanmasının ardından ikinci hat çalışmalarına başlandı.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Otomatik test kontrolü,
- **heroTitleLine2:** tekil ürün izlenebilirliği.
- **heroSub:** Haier Europe'un Eskişehir pişirme cihazları fabrikasında hayata geçirilen ocak montaj hattı projesinde; seri numaraları RFID ile ilişkilendirilir, test süreçleri operatörden bağımsız yürütülür ve global MES sistemine aktarılır.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Ocak montaj hatlarında dijital dönüşüm
- **contextP1:** Beyaz eşya üretiminde küresel bir lider olan Haier Europe'un Eskişehir'deki ocak (pişirme cihazları) fabrikasında hayata geçirilen projede, yeni ocak montaj hatlarına izlenebilirlik sistemi uygulanmıştır.
- **contextP2:** Proje kapsamında montaj hattı otomasyon yazılımı da tarafımızca geliştirilmiş olup, tüm test istasyonları merkezi izlenebilirlik yapısına bağlanmıştır.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Güvenli test doğrulama ve kayıt ihtiyacı
- **problemLede:** Yeni montaj hatlarında üretilen her bir ocağın elektriksel ve sızdırmazlık güvenlik testlerinin operatör inisiyatifinden bağımsız olarak doğrulanması gerekiyordu.
- **problemList:**
  - **bold:** "Operatör Bağımlılığı" | **text:** "Güvenlik testlerinin manuel yürütülmesinin getirdiği insan kaynaklı hata ve kayıtlarda tutarsızlık riskleri."
  - **bold:** "Eşleştirme Eksikliği" | **text:** "Elektrik, gaz kaçak ve alev kontrol test sonuçlarının ürün seri numarasıyla otomatik eşleştirilememesi."
  - **bold:** "Hat Kontrol Boşluğu" | **text:** "Test istasyonlarından geçmeyen veya testten kalmış ürünlerin montaj hattı boyunca ilerlemesini önleyecek otomatik kilit altyapısının bulunmaması."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** RFID Tabanlı İstasyon ve Otomatik Test Kontrolü
- **solutionLede:** Ürün barkodundaki seri numarası, hat başında RFID ile ilişkilendirilmekte ve izlenebilirlik RFID sistemi üzerinden sağlanmaktadır. Üretim sürecinde elektrik testleri, gaz kaçak testleri ve alev kontrol testleri, hat boyunca belirlenen istasyonlarda operatörden bağımsız olarak otomatik gerçekleştirilmektedir.
- **steps:**
  - **no:** "01" | **title:** "RFID İlişkilendirme" | **text:** "Hat başında ürün barkodundaki seri numarası, taşıyıcı üzerindeki RFID etiketiyle eşleştirilir ve süreç izlenir."
  - **no:** "02" | **title:** "Otomatik Testler" | **text:** "Ocaklar; elektrik testi, gaz kaçak testi ve alev kontrol testi istasyonlarında operatörden bağımsız test edilir."
  - **no:** "03" | **title:** "Veri Eşleştirme" | **text:** "İstasyonlardan toplanan anlık test sonuçları, ürünün tekil seri numarası ile otomatik olarak ilişkilendirilir."
  - **no:** "04" | **title:** "MES Onay Kaydı" | **text:** "Başarıyla tamamlanan test onayları, Haier Europe'un Global MES sistemine anlık olarak aktarılır."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** 9 eksenli servo ve robotik veri entegrasyonu
- **techGrid:**
  - **tag:** "OTOMASYON" | **title:** "Montaj hattı otomasyon yazılımı" | **text:** "Tüm montaj hattı iş akışını ve makine istasyonlarını yöneten kontrol yazılımı."
  - **tag:** "ROBOTİK" | **title:** "9 eksenli servo & robotik sistem" | **text:** "İstasyonlardaki hassas konumlandırma ve mekanik işlemleri yürüten robotik donanımlar."
  - **tag:** "RFID" | **title:** "RFID izlenebilirlik altyapısı" | **text:** "Hat başında seri numaralarını eşleyen ve istasyon geçişlerini izleyen RFID sistemi."
  - **tag:** "İSTASYON" | **title:** "Otomatik test üniteleri" | **text:** "Elektrik, gaz kaçak ve alev kontrol testlerini insan inisiyatifi olmaksızın yürüten test donanımları."
  - **tag:** "HABERLEŞME" | **title:** "Endüstriyel haberleşme ağları" | **text:** "EtherCAT, TCP/IP ve Profinet protokolleri üzerinden yüksek hızlı saha veri alışverişi."
  - **tag:** "VERİ" | **title:** "OnSuite Trace ve MES entegrasyonu" | **text:** "OnSuite Trace platformunun Haier Global MES sistemiyle entegre çalıştığı veri katmanı."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** Haier Global MES Entegrasyonu
- **integrationDesc:** Geliştirilen izlenebilirlik sistemi, Haier Europe'un Global MES (Manufacturing Execution System) yapısıyla anlık entegre çalışmaktadır; tüm test verileri ve onaylar MES sistemine gönderilir.
- **integrationList:**
  - **bold:** "MES Test Kaydı" | **text:** "Elektrik, gaz kaçak ve alev kontrol test sonuçları seri numarası bazında MES sistemine yazılır."
  - **bold:** "Süreç Kilitleme" | **text:** "Testlerden geçmeyen veya eksik kalan ürünlerin sonraki istasyona geçişi MES onay durumuna göre engellenir."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Sıfır hata güvenlik ve anlık üretim takibi
- **resultsGrid:**
  - **title:** "Tekil ürün izlenebilirliği" | **text:** "Her ürün için hat başından itibaren seri numarasına dayalı uçtan uca dijital izlenebilirlik sağlanmıştır."
  - **title:** "Operatörden bağımsız kalite" | **text:** "Elektrik, gaz ve alev kontrol testleri otomatik hale getirilerek insan kaynaklı hata payı sıfıra indirilmiştir."
  - **title:** "MES veri bütünlüğü" | **text:** "Üretim hattındaki tüm kalite ve test kayıtları anlık olarak MES sistemine aktarılarak raporlanabilir duruma getirilmiştir."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Üretim süreçlerinizi de dönüştürmek ister misiniz?
- **ctaSubtitle:** Benzer bir çözümü işletmenize nasıl uygulayabileceğimizi konuşmak için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Haier Europe Single Product Traceability Oven Assembly Line
- **Sector (sector / tagValue):** Home Appliances
- **Location (locationValue):** Eskisehir
- **Scope (scopeVal):** Turnkey
- **Year (year):** Year
- **Short Description (description):** We implemented a traceability system on the new oven assembly lines at Haier Europe's cooking appliance factory, a global leader in white goods manufacturing, located in Turkey. In this project, where we also developed the assembly line automation software, the serial number from the product barcode is associated with RFID at the start of the line, and traceability is ensured through the RFID system. During production, electrical tests, gas leakage tests, and flame control tests are performed automatically, independently of the operator, at designated stations along the line, with test results collected from test stations and matched to the product serial number. The project uses 9-axis servo systems. All data exchange is facilitated through EtherCAT, TCP/IP, and Profinet communication infrastructure. Following the successful completion of the project, work began on the second line.

##### Hero Section (EN)
- **heroTitleLine1:** Automated test control,
- **heroTitleLine2:** unique product traceability.
- **heroSub:** Implemented at Haier Europe's Eskisehir cooking appliances factory; serial numbers are associated with RFID to automate safety tests independently of operators, pushing data to the global MES system.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Digital transformation on oven assembly lines
- **contextP1:** A traceability system was applied to the new oven assembly lines at the cooking appliances factory of Haier Europe, a global leader in home appliances, located in Eskisehir.
- **contextP2:** Within the scope of the project, the assembly line automation software was also developed by Siskon, connecting all test stations into a central traceability structure.

##### Problem / Challenge (EN)
- **problemEyebrow:** Needs / Problems
- **problemTitle:** Secure test verification and registration needs
- **problemLede:** Electrical and leak safety tests of each oven produced on the new assembly lines had to be verified independently of operator intervention.
- **problemList:**
  - **bold:** "Operator Dependence" | **text:** "Human error and data inconsistency risks arising from manual execution of safety tests."
  - **bold:** "Lack of Association" | **text:** "Inability to automatically associate electrical, gas leak, and flame control test results with unique product serial numbers."
  - **bold:** "Line Control Gaps" | **text:** "Lack of an automatic locking mechanism to prevent untested or failed products from advancing along the assembly line."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** RFID-Based Station & Automated Test Control
- **solutionLede:** The product barcode is matched with the RFID tag at the line start. Electrical, gas leak, and flame control tests are carried out in automated operator-independent stations, matching results with serial numbers and pushing them to MES.
- **steps:**
  - **no:** "01" | **title:** "RFID Association" | **text:** "At the line start, the serial number from the product barcode is matched with the carrier's RFID tag."
  - **no:** "02" | **title:** "Automated Tests" | **text:** "Ovens are automatically tested at electrical, gas leak, and flame control test stations, independent of operator intervention."
  - **no:** "03" | **title:** "Data Matching" | **text:** "Real-time test results collected from stations are automatically associated with the product's unique serial number."
  - **no:** "04" | **title:** "MES Confirmation" | **text:** "Successfully completed test confirmations are instantly pushed to Haier Europe's Global MES system."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** 9-axis servo and robotic data integration
- **techGrid:**
  - **tag:** "AUTOMATION" | **title:** "Assembly line automation software" | **text:** "Control software managing the entire assembly line workflow and machine stations."
  - **tag:** "ROBOTICS" | **title:** "9-axis servo & robotic system" | **text:** "Robotic equipment performing precise positioning and mechanical tasks at the stations."
  - **tag:** "RFID" | **title:** "RFID traceability infrastructure" | **text:** "RFID system matching serial numbers at the line start and tracking station transits."
  - **tag:** "STATION" | **title:** "Automated test units" | **text:** "Test equipment conducting electrical, gas leak, and flame control tests without human intervention."
  - **tag:** "COMMUNICATION" | **title:** "Industrial networks" | **text:** "High-speed field data exchange over EtherCAT, TCP/IP, and Profinet protocols."
  - **tag:** "DATA" | **title:** "OnSuite Trace & MES integration" | **text:** "Data layer where the OnSuite Trace platform runs fully integrated with Haier Global MES."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** Haier Global MES Integration
- **integrationDesc:** The developed traceability system runs instantly integrated with Haier Europe's Global MES (Manufacturing Execution System); all test data and confirmations are pushed to MES.
- **integrationList:**
  - **bold:** "MES Test Record" | **text:** "Electrical, gas leak, and flame control test results are written to the MES system based on the product serial number."
  - **bold:** "Process Locking" | **text:** "Transition of failed or incomplete products to the next station is blocked based on the MES confirmation state."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Zero-error safety and real-time production tracking
- **resultsGrid:**
  - **title:** "Unique product traceability" | **text:** "End-to-end digital traceability based on serial numbers was provided for each product starting from the line entry."
  - **title:** "Operator-independent quality" | **text:** "Electrical, gas leak, and flame control tests are automated, reducing human error rates to zero."
  - **title:** "MES data integrity" | **text:** "All quality and test records on the production line are instantly sent to the MES system for centralized reporting."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Want to transform your production processes too?
- **ctaSubtitle:** Contact us to discuss how we can implement a similar solution for your business.
- **ctaPrimary:** Get in Touch

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Haier Europe - Trasabilitatea unui singur produs pe linia de asamblare a cuptoarelor
- **Sector (sector / tagValue):** Electrocasnice
- **Locație (locationValue):** Eskişehir
- **Domeniu de Aplicare (scopeVal):** La cheie
- **An (year):** An
- **Descriere Scurtă (description):** Am implementat un sistem de trasabilitate pe noile linii de asamblare a cuptoarelor de la fabrica de aparate de gătit a Haier Europe, un lider global în producția de bunuri albe, situată în Turcia. În acest proiect, unde am dezvoltat și software-ul de automatizare pentru linia de asamblare, numărul de serie de pe codul de bare al produsului este asociat cu RFID la începutul liniei, iar trasabilitatea este asigurată prin sistemul RFID. În timpul producției, testele electrice, testele de scurgeri de gaz și testele de control al flăcării sunt efectuate automat, independent de operator, la stațiile desemnate de-a lungul liniei, rezultatele testelor fiind colectate de la stațiile de testare și potrivite cu numărul de serie al produsului. Proiectul utilizează sisteme servo cu 9 axe. Tot schimbul de date este facilitat prin infrastructura de comunicare EtherCAT, TCP/IP și Profinet. În urma finalizării cu succes a proiectului, au început lucrările la a doua linie.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Control automat al testelor,
- **heroTitleLine2:** trasabilitate individuală a produsului.
- **heroSub:** Implementat la fabrica de aparate de gătit Haier Europe din Eskişehir; numerele de serie sunt asociate cu RFID pentru a automatiza testele de siguranță independent de operatori, transmițând datele către sistemul global MES.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Transformare digitală pe liniile de asamblare a cuptoarelor
- **contextP1:** Sistemul de trasabilitate a fost aplicat pe noile linii de asamblare a cuptoarelor de la fabrica de aparate de gătit a Haier Europe, lider global în electrocasnice, situată în Eskişehir.
- **contextP2:** În cadrul proiectului, software-ul de automatizare a liniei de asamblare a fost dezvoltat de Siskon, conectând toate stațiile de testare în structura de trasabilitate centrală.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoi / Probleme
- **problemTitle:** Verificare sigură a testelor și înregistrare
- **problemLede:** Testele de siguranță electrică și de etanșeitate ale fiecărui cuptor produs pe noile linii de asamblare trebuiau verificate independent de intervenția operatorului.
- **problemList:**
  - **bold:** "Dependența de Operator" | **text:** "Riscuri de eroare umane și inconsistență a datelor generate de execuția manuală a testelor de siguranță."
  - **bold:** "Lipsa Asocierii" | **text:** "Imposibilitatea de a asocia automat rezultatele testelor electrice, de scurgere de gaz și de control al flăcării cu numerele de serie unice ale produselor."
  - **bold:** "Lacune de Control ale Liniei" | **text:** "Lipsa unui mecanism de blocare automată pentru a preveni trecerea produselor netestate sau respinse la stația următoare."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Stație pe bază de RFID și Control Automat al Testelor
- **solutionLede:** Codul de bare al produsului este asociat cu eticheta RFID la începutul liniei. Testele electrice, de scurgeri de gaz și de flacără sunt efectuate în stații automate independente de operator, rezultatele fiind corelate cu numerele de serie și trimise către MES.
- **steps:**
  - **no:** "01" | **title:** "Asociere RFID" | **text:** "La începutul liniei, numărul de serie din codul de bare al produsului este corelat cu eticheta RFID a suportului."
  - **no:** "02" | **title:** "Teste Automate" | **text:** "Cuptoarele sunt testate automat în stațiile de testare electrică, de scurgeri de gaz și de control al flăcării, fără intervenția operatorului."
  - **no:** "03" | **title:** "Corelarea Datelor" | **text:** "Rezultatele testelor în timp real colectate de la stații sunt asociate automat cu numărul de serie unic al produsului."
  - **no:** "04" | **title:** "Confirmare MES" | **text:** "Confirmările de testare finalizate cu succes sunt trimise instantaneu către sistemul Global MES al Haier Europe."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipamente Utilizate
- **techTitle:** 9 axe servo și integrare robotică a datelor
- **techGrid:**
  - **tag:** "AUTOMATIZARE" | **title:** "Software de automatizare a liniei" | **text:** "Software de control care gestionează întregul flux de lucru al liniei de asamblare și stațiile de mașini."
  - **tag:** "ROBOTICĂ" | **title:** "Sistem servo pe 9 axe și robotic" | **text:** "Echipamente robotice care efectuează poziționarea precisă și sarcinile mecanice la stații."
  - **tag:** "RFID" | **title:** "Infrastructură de trasabilitate RFID" | **text:** "Sistem RFID care corelează numerele de serie la începutul liniei și urmărește tranzitul prin stații."
  - **tag:** "STAȚIE" | **title:** "Unități de testare automate" | **text:** "Echipamente de testare care efectuează testele electrice, de gaz și flacără fără intervenție umană."
  - **tag:** "COMUNICARE" | **title:** "Rețele industriale de comunicare" | **text:** "Schimb de date de câmp de mare viteză prin protocoalele EtherCAT, TCP/IP și Profinet."
  - **tag:** "DATE" | **title:** "Integrare OnSuite Trace și MES" | **text:** "Stratul de date în care platforma OnSuite Trace funcționează complet integrată cu sistemul MES global al Haier."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Integrare Haier Global MES
- **integrationDesc:** Sistemul de trasabilitate dezvoltat funcționează integrat instantaneu cu structura MES Globală (Manufacturing Execution System) a Haier Europe; toate datele și confirmările sunt trimise la MES.
- **integrationList:**
  - **bold:** "Înregistrare Teste MES" | **text:** "Rezultatele testelor electrice, de scurgeri de gaz și flacără sunt scrise în sistemul MES pe baza numărului de serie al produsului."
  - **bold:** "Blocare Proces" | **text:** "Tranziția produselor respinse sau incomplete la următoarea stație este blocată pe baza stării de confirmare din MES."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Siguranță fără erori și urmărire în timp real a producției
- **resultsGrid:**
  - **title:** "Trasabilitate unică a produsului" | **text:** "A fost asigurată trasabilitatea digitală end-to-end pe baza numărului de serie pentru fiecare produs, începând de la intrarea pe linie."
  - **title:** "Calitate independentă de operator" | **text:** "Testele electrice, de gaz și flacără sunt automatizate, reducând riscul de erori umane la zero."
  - **title:** "Integritate date MES" | **text:** "Toate înregistrările de calitate și testare de pe linie sunt trimise instantaneu către MES pentru raportare centralizată."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să vă transformați și procesele de producție?
- **ctaSubtitle:** Contactați-ne pentru a discuta cum putem implementa o soluție similară pentru afacerea dumneavoastră.
- **ctaPrimary:** Contactați-ne


---

### 14. BSH - Montaj Hatları İzlenebilirlik
**Slug:** `bsh-assembly-line-traceability` | **ID:** `34` | **Sıra (Order):** `14` | **Yıl:** `2022`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `bsh-assembly-line-traceability`
- **Sıralama (order):** `14`
- **Yıl (year / referenceDate):** `2022`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `RFID, Barcode, ERP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/BSH_Bosch_und_Siemens_Hausger%C3%A4te_logo.svg`
  - **Ana Görsel (image):** `/images/companies/Bsh/BSH_opengraph.webp`
  - **Hero Görseli (heroImage):** `/images/companies/Bsh/BSH_opengraph.webp`
  - **Galeri Görselleri (gallery):**
  - /images/companies/Bsh/BSH_opengraph.webp
  - /images/companies/Bsh/100-Milyondan-Fazla-Uretim-45-Milyar-ABD-dolari-Ekonomik-Katki.webp

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** BSH - Montaj Hatları İzlenebilirlik
- **Sektör (sector / tagValue):** Beyaz Eşya
- **Konum (locationValue):** Çerkezköy
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Sick RFGS Pro ekipmanı kullanılarak hayata geçirilen projede, üretim alanından gelen gereksinimlere dayalı olarak kutu hazırlama dahil depo malzeme hazırlama süreçleri optimize edildi. 300'den fazla kutuya RFID etiketi takılarak üretim hattındaki RFID kapısından çıkan kutuların depo malzeme siparişlerini otomatik oluşturması sağlandı. Malzeme akışı çekme (pull) metodolojisine göre yeniden yapılandırıldı.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Her istasyonda tam kontrol,
- **heroTitleLine2:** hat genelinde uçtan uca izlenebilirlik.
- **heroSub:** BSH'nin Çerkezköy'deki fırın üretimi yapan fabrikasında hayata geçirilen projede, montaj hatlarında ürün seri numarası bazında izlenebilirlik sağlanmıştır.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Üretim süreçlerinin anlık takibi
- **contextP1:** BSH'nin Çerkezköy'deki fırın üretimi yapan fabrikasında hayata geçirilen projede, montaj hatlarında ürün seri numarası bazında izlenebilirlik sağlanmıştır.
- **contextP2:** Proje, üretim sürecinin istasyon düzeyinde izlenmesi ve performans analizinin yapılabilmesi amacıyla gerçekleştirilmiştir.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Takip ve verimlilik zorlukları
- **problemLede:** Montaj hatlarında her ürünün istasyon bazında takip edilebilmesi ve hangi ürünün hangi istasyonlardan geçtiğinin kayıt altına alınması gerekiyordu.
- **problemList:**
  - **bold:** "İstasyon Bazlı Takip Eksikliği" | **text:** "Ürünlerin hat boyunca hangi istasyonlardan geçtiğinin otomatik ve doğru şekilde kayıt altına alınamaması."
  - **bold:** "Cycle Time Ölçüm Zorlukları" | **text:** "İstasyon ve ürün bazlı süre (cycle time) verilerinin ölçülememesi nedeniyle darboğazların tespit edilememesi."
  - **bold:** "Hat Dengeleme Problemleri" | **text:** "Gerçek verilere dayanmayan hat dengeleme çalışmalarının verimlilik artışını kısıtlaması."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Gerçek zamanlı izleme ve analitik
- **solutionLede:** Ürün seri numarasının istasyon bazında takip edilmesiyle montaj hatlarında izlenebilirlik sağlandı. Cycle time analizleri ile istasyon ve ürün bazlı darboğazlar tespit edildi; box plot grafikleriyle istasyon bazlı süre dağılımları görselleştirilerek istasyon dengelemede öngörü sağlandı. SAP entegrasyonu ile master veriler SAP üzerinden alınarak sisteme entegre edildi.
- **steps:**
  - **no:** "01" | **title:** "Seri No Okuma" | **text:** "İstasyonlarda ürün seri numaraları barkod okuyucular vasıtasıyla otomatik taranır."
  - **no:** "02" | **title:** "PLC Saha Yönetimi" | **text:** "PLC yapısı, saha akışını ve okuma tetiklemelerini anlık olarak koordine eder."
  - **no:** "03" | **title:** "Cycle Time Analizi" | **text:** "İstasyon bazlı okuma ve süre ölçümleri üzerinden çevrim süreleri analiz edilir."
  - **no:** "04" | **title:** "Box Plot Dağılımı" | **text:** "Süre dağılımları box plot grafikleriyle görselleştirilerek istasyon dengeleme öngörüsü sağlanır."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** İzlenebilirlik ve analitik donanım altyapısı
- **techGrid:**
  - **tag:** "OTOMASYON" | **title:** "PLC Saha Yapısı" | **text:** "Saha otomasyonunu, istasyon geçişlerini ve okuma tetiklemelerini yöneten PLC altyapısı."
  - **tag:** "DONANIM" | **title:** "Barkod Okuyucular" | **text:** "İstasyonlarda ürün seri numaralarını yüksek hassasiyetle okuyan endüstriyel tarayıcılar."
  - **tag:** "ANALİTİK" | **title:** "Cycle Time & Box Plot" | **text:** "Süre ölçümleri üzerinden darboğaz tespiti ve box plot grafik görselleştirmeleri."
  - **tag:** "VERİ" | **title:** "SAP Entegrasyonu" | **text:** "Ürün ve üretime dair master verilerin SAP üzerinden çift yönlü aktarımı."
  - **tag:** "YAZILIM" | **title:** "OnSuite Trace Platformu" | **text:** "İzlenebilirlik ve süreç yönetiminin merkezi olarak kontrol edildiği yazılım katmanı."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** SAP ile çift yönlü entegrasyon
- **integrationDesc:** Sistem SAP ile çift yönlü entegre çalışmaktadır. Ürün ve üretime ilişkin master veriler SAP üzerinden alınarak izlenebilirlik sistemine aktarılmakta; istasyon bazlı takip ve analiz süreçleri bu güncel veriler üzerinden yürütülmektedir.
- **integrationList:**
  - **bold:** "SAP Master Veri Alımı" | **text:** "Ürün reçete ve master verileri SAP üzerinden otomatik olarak çekilerek sistemle senkronize edilir."
  - **bold:** "Tek Kaynaktan Veri Akışı" | **text:** "Saha uygulaması ile kurumsal ERP arasında tutarlı ve güncel bir bilgi bağı kurulur."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Veriye dayalı verimlilik artışı
- **resultsGrid:**
  - **title:** "Tam İzlenebilirlik" | **text:** "Ürün seri numarası düzeyinde istasyon bazlı uçtan uca izlenebilirlik sağlandı."
  - **title:** "Darboğaz Tespiti" | **text:** "Cycle time analizleri ve box plot grafikleriyle darboğaz oluşturan noktalar net şekilde görünür hale geldi."
  - **title:** "İstasyon Dengeleme" | **text:** "Süre dağılımları üzerinden hat dengeleme çalışmalarına öngörü kazandırılarak üretim verimliliği artırıldı."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Üretim süreçlerinizi de dönüştürmek ister misiniz?
- **ctaSubtitle:** Benzer bir çözümü işletmenize nasıl uygulayabileceğimizi konuşmak için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** BSH Assembly Line Traceability
- **Sector (sector / tagValue):** Home Appliances
- **Location (locationValue):** Çerkezköy
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** In the project implemented using Sick RFGS Pro equipment, the material preparation process in the warehouse, including bin preparation, was optimized based on requirements from the production area. RFID tags were installed on over 300 bins, enabling automatic generation of material orders in the warehouse as bins exited through the RFID gate on the production line. The material flow was restructured according to the pull methodology.

##### Hero Section (EN)
- **heroTitleLine1:** Full control at every station,
- **heroTitleLine2:** end-to-end traceability across the line.
- **heroSub:** In the project implemented at BSH's oven production factory in Çerkezköy, traceability was provided on the assembly lines based on product serial numbers.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Real-time monitoring of production processes
- **contextP1:** In the project implemented at BSH's oven production factory in Çerkezköy, traceability was provided on the assembly lines based on product serial numbers.
- **contextP2:** The project was carried out in order to monitor the production process at the station level and perform performance analyses.

##### Problem / Challenge (EN)
- **problemEyebrow:** Needs / Problems
- **problemTitle:** Tracking and efficiency challenges
- **problemLede:** Each product needed to be tracked on a station basis on the assembly lines, and it was required to record which product passed through which stations.
- **problemList:**
  - **bold:** "Lack of Station-Based Tracking" | **text:** "Inability to automatically and accurately record which stations the products passed through along the line."
  - **bold:** "Cycle Time Measurement Difficulties" | **text:** "Inability to identify bottlenecks due to the lack of measurement for station and product-based cycle time data."
  - **bold:** "Line Balancing Problems" | **text:** "Line balancing work not based on real data limiting efficiency improvements."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Real-time monitoring and analytics
- **solutionLede:** Traceability on assembly lines was achieved by tracking the product serial number on a station basis. Cycle time analyses helped identify station and product-based bottlenecks; box plot charts visualized station-based duration distributions, providing foresight in line balancing. With SAP integration, master data was retrieved via SAP and integrated into the system.
- **steps:**
  - **no:** "01" | **title:** "Serial Number Reading" | **text:** "Product serial numbers are automatically scanned at stations using barcode readers."
  - **no:** "02" | **title:** "PLC Field Management" | **text:** "The PLC structure coordinates the field flow and reading triggers in real time."
  - **no:** "03" | **title:** "Cycle Time Analysis" | **text:** "Cycle times are analyzed based on station readings and duration measurements."
  - **no:** "04" | **title:** "Box Plot Distribution" | **text:** "Duration distributions are visualized using box plots, providing foresight for line balancing."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** Traceability and analytics hardware infrastructure
- **techGrid:**
  - **tag:** "AUTOMATION" | **title:** "PLC Field Structure" | **text:** "PLC infrastructure that manages field automation, station transitions, and reading triggers."
  - **tag:** "HARDWARE" | **title:** "Barcode Readers" | **text:** "Industrial scanners that read product serial numbers at stations with high precision."
  - **tag:** "ANALYTICS" | **title:** "Cycle Time & Box Plot" | **text:** "Bottleneck detection and box plot graphic visualizations through duration measurements."
  - **tag:** "DATA" | **title:** "SAP Integration" | **text:** "Bi-directional transfer of master product and production data via SAP."
  - **tag:** "SOFTWARE" | **title:** "OnSuite Trace Platform" | **text:** "Central software layer controlling traceability and process management."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** Bi-directional SAP Integration
- **integrationDesc:** The system works bi-directionally integrated with SAP. Master product and production data is retrieved via SAP and transferred to the traceability system; station-based tracking and analysis processes are carried out using this updated data.
- **integrationList:**
  - **bold:** "SAP Master Data Retrieval" | **text:** "Product recipe and master data are automatically pulled via SAP and synchronized with the system."
  - **bold:** "Single Source Data Flow" | **text:** "A consistent and up-to-date link is established between the field application and corporate ERP."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Data-driven efficiency growth
- **resultsGrid:**
  - **title:** "Full Traceability" | **text:** "Station-based end-to-end traceability was achieved at the product serial number level."
  - **title:** "Bottleneck Identification" | **text:** "Bottlenecks became clearly visible through cycle time analyses and box plot charts."
  - **title:** "Line Balancing" | **text:** "Efficiency was improved by providing foresight into line balancing based on duration distributions."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Want to transform your production processes too?
- **ctaSubtitle:** Contact us to discuss how we can implement a similar solution for your business.
- **ctaPrimary:** Get in Touch

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** BSH - Trasabilitatea liniei de asamblare
- **Sector (sector / tagValue):** Electrocasnice
- **Locație (locationValue):** Çerkezköy
- **Domeniu de Aplicare (scopeVal):** Software și Integrare
- **An (year):** An
- **Descriere Scurtă (description):** În cadrul proiectului implementat utilizând echipamente Sick RFGS Pro, procesul de pregătire a materialelor în depozit, inclusiv pregătirea lăzilor, a fost optimizat pe baza cerințelor venite din zona de producție. Etichete RFID au fost instalate pe peste 300 de lăzi, permițând generarea automată a comenzilor de materiale în depozit pe măsură ce lăzile ieșeau prin poarta RFID de pe linia de producție. Fluxul de materiale a fost restructurat conform metodologiei de tip 'pull'.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Control complet la fiecare stație,
- **heroTitleLine2:** trasabilitate end-to-end pe întreaga linie.
- **heroSub:** În cadrul proiectului implementat la fabrica de producție a cuptoarelor BSH din Çerkezköy, s-a asigurat trasabilitatea pe liniile de asamblare pe baza numărului de serie al produsului.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Monitorizarea în timp real a proceselor de producție
- **contextP1:** În cadrul proiectului implementat la fabrica de producție a cuptoarelor BSH din Çerkezköy, s-a asigurat trasabilitatea pe liniile de asamblare pe baza numărului de serie al produsului.
- **contextP2:** Proiectul a fost realizat pentru a monitoriza procesul de producție la nivel de stație și pentru a efectua analize de performanță.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoie / Problemă
- **problemTitle:** Dificultăți de urmărire și eficiență
- **problemLede:** Fiecare produs trebuia urmărit la nivel de stație pe liniile de asamblare și trebuia înregistrat ce produs a trecut prin ce stații.
- **problemList:**
  - **bold:** "Lipsa Urmăririi pe Stație" | **text:** "Imposibilitatea de a înregistra automat și precis prin ce stații au trecut produsele de-a lungul liniei."
  - **bold:** "Dificultăți de Măsurare a Cycle Time" | **text:** "Imposibilitatea de a identifica blocajele din cauza lipsei de măsurare a datelor de cycle time la nivel de stație și produs."
  - **bold:** "Probleme de Echilibrare a Liniei" | **text:** "Lucrările de echilibrare a liniei care nu se bazează pe date reale, limitând îmbunătățirea eficienței."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Monitorizare în timp real și analiză
- **solutionLede:** Trasabilitatea pe liniile de asamblare a fost realizată prin urmărirea numărului de serie al produsului la nivel de stație. Analizele de cycle time au ajutat la identificarea blocajelor la nivel de stație și de produs; diagramele box plot au vizualizat distribuțiile de durată pe stații, oferind previziuni pentru echilibrarea liniei. Prin integrarea SAP, datele master au fost preluate din SAP și integrate în sistem.
- **steps:**
  - **no:** "01" | **title:** "Citire Număr Serie" | **text:** "Numerele de serie ale produselor sunt scanate automat la stații folosind cititoare de coduri de bare."
  - **no:** "02" | **title:** "Management Câmp PLC" | **text:** "Structura PLC coordonează fluxul de lucru și declanșatoarele de citire în timp real."
  - **no:** "03" | **title:** "Analiză Cycle Time" | **text:** "Timpii de ciclu sunt analizați pe baza citirilor din stații și a măsurătorilor de durată."
  - **no:** "04" | **title:** "Distribuție Box Plot" | **text:** "Distribuțiile de durată sunt vizualizate cu diagrame box plot, oferind previziuni pentru echilibrarea liniei."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipament Utilizat
- **techTitle:** Infrastructură hardware de trasabilitate și analiză
- **techGrid:**
  - **tag:** "AUTOMATIZARE" | **title:** "Structură Câmp PLC" | **text:** "Infrastructură PLC care gestionează automatizarea câmpului, tranzițiile stațiilor și declanșatoarele de citire."
  - **tag:** "HARDWARE" | **title:** "Cititoare Cod de Bare" | **text:** "Scannere industriale care citesc numerele de serie ale produselor la stații cu mare precizie."
  - **tag:** "ANALIZĂ" | **title:** "Cycle Time și Box Plot" | **text:** "Detectarea blocajelor și vizualizări grafice box plot prin măsurători de durată."
  - **tag:** "DATE" | **title:** "Integrare SAP" | **text:** "Transfer bidirecțional al datelor master de produs și producție prin SAP."
  - **tag:** "SOFTWARE" | **title:** "Platforma OnSuite Trace" | **text:** "Stratul software central de control al trasabilității și managementului proceselor."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Integrare bidirecțională SAP
- **integrationDesc:** Sistemul funcționează integrat bidirecțional cu SAP. Datele master de produs și producție sunt preluate prin SAP și transferate în sistemul de trasabilitate; procesele de urmărire și analiză la nivel de stație sunt desfășurate utilizând aceste date actualizate.
- **integrationList:**
  - **bold:** "Preluare Date Master SAP" | **text:** "Rețeta produsului și datele master sunt preluate automat prin SAP și sincronizate cu sistemul."
  - **bold:** "Flux de Date Sursă Unică" | **text:** "Se stabilesc legături consistente și actualizate între aplicația de teren și sistemul ERP corporativ."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Creșterea eficienței pe bază de date
- **resultsGrid:**
  - **title:** "Trasabilitate Completă" | **text:** "S-a asigurat trasabilitatea end-to-end la nivel de număr de serie al produsului pe stații."
  - **title:** "Identificare Blocaje" | **text:** "Blocajele au devenit clar vizibile prin analize de cycle time și diagrame box plot."
  - **title:** "Echilibrare Linie" | **text:** "Eficiența a fost îmbunătățită prin oferirea de previziuni pentru echilibrarea liniei pe baza distribuțiilor de durată."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să vă transformați și procesele de producție?
- **ctaSubtitle:** Contactați-ne pentru a discuta cum putem implementa o soluție similară pentru afacerea dumneavoastră.
- **ctaPrimary:** Contactați-ne


---

### 15. BSH - Fırın Kapı İzlenebilirlik
**Slug:** `bsh-oven-door-traceability` | **ID:** `32` | **Sıra (Order):** `15` | **Yıl:** `2022`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `bsh-oven-door-traceability`
- **Sıralama (order):** `15`
- **Yıl (year / referenceDate):** `2022`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `RFID, Barcode, ERP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/BSH_Bosch_und_Siemens_Hausger%C3%A4te_logo.svg`
  - **Ana Görsel (image):** `/images/companies/Bsh/BSH_opengraph.webp`
  - **Hero Görseli (heroImage):** `/images/companies/Bsh/BSH_opengraph.webp`
  - **Galeri Görselleri (gallery):**
  - /images/companies/Bsh/BSH_opengraph.webp
  - /images/companies/Bsh/100-Milyondan-Fazla-Uretim-45-Milyar-ABD-dolari-Ekonomik-Katki.webp

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** BSH - Fırın Kapı İzlenebilirlik
- **Sektör (sector / tagValue):** Beyaz Eşya
- **Konum (locationValue):** Çerkezköy
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Ürün seri numaralarının kapı arabalarından elde edilen lot bilgileriyle eşleştirilmesi aracılığıyla izlenebilirlik sistemiyle entegrasyon sağlandı. Üretim katına lot bazında tedarik edilen ve belirli seri numaralı ürünlere monte edilen bileşenlere ilişkin veriler kaydedildi. Ürün-bileşen eşleştirmesi sayesinde doğru bileşenlerin doğru ürünlerde kullanılması güvence altına alındı.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Hassas kapı montajı,
- **heroTitleLine2:** üretimde sıfır hata ve tam izlenebilirlik.
- **heroSub:** BSH'nin Çerkezköy'deki fırın üretimi yapan fabrikasında hayata geçirilen projede, ürünlere monte edilen fırın kapıları kapı arabalarından elde edilen lot bilgilerine göre takip edilmiş ve kayıt altına alınmıştır.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Bileşen izleme ve üretim doğruluğu
- **contextP1:** BSH'nin Çerkezköy'deki fırın üretimi yapan fabrikasında hayata geçirilen projede, ürünlere monte edilen fırın kapıları kapı arabalarından elde edilen lot bilgilerine göre takip edilmiş ve kayıt altına alınmıştır.
- **contextP2:** Proje, kapı–ürün bileşen ilişkisinin izlenebilirliğini sağlamak amacıyla gerçekleştirilmiştir.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Manuel takip ve eşleşme riskleri
- **problemLede:** Fırın üretiminde ürüne monte edilen fırın kapısının doğru ürünle eşleşmesi ve bu eşleşmenin ürün bazında izlenebilir olması gerekiyordu.
- **problemList:**
  - **bold:** "Manuel Takip Kısıtları" | **text:** "Kapı-ürün ilişkisinin manuel takibinin yetersiz olması ve izlenebilirlik boşluğu riski taşıması."
  - **bold:** "Yanlış Bileşen Kullanımı" | **text:** "Üretim sırasında yanlış kapı kullanımı riskinin otomatik olarak engellenememesi."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Lot bazlı eşleştirme ve otomatik doğrulama
- **solutionLede:** Ürün seri numaralarının kapı arabalarından elde edilen lot bilgileriyle eşleştirilmesi aracılığıyla izlenebilirlik sistemiyle entegrasyon sağlandı. Üretim katına lot bazında tedarik edilen ve belirli seri numaralı ürünlere monte edilen fırın kapılarına ilişkin veriler kayıt altına alındı. Ürün–kapı eşleştirmesi sayesinde doğru kapıların doğru ürünlerde kullanılması güvence altına alındı.
- **steps:**
  - **no:** "01" | **title:** "Lot Barkodu Okuma" | **text:** "Kapı arabalarındaki lot etiketleri barkod okuyucu vasıtasıyla taranır."
  - **no:** "02" | **title:** "Seri No Eşleme" | **text:** "Montajı yapılan ürünün seri numarası kapı lot bilgisiyle ilişkilendirilir."
  - **no:** "03" | **title:** "SCADA Doğrulaması" | **text:** "C# tabanlı SCADA uygulaması eşleşmenin doğruluğunu anlık olarak kontrol eder."
  - **no:** "04" | **title:** "SAP Onay Kaydı" | **text:** "Tüm kontroller tamamlandıktan sonra onaylanan parçaların verileri SAP sistemine yazılır."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** Saha otomasyonu ve yazılım mimarisi
- **techGrid:**
  - **tag:** "OTOMASYON" | **title:** "PLC Saha Otomasyonu" | **text:** "Saha akışını, istasyon durumlarını ve sensör verilerini yöneten PLC altyapısı."
  - **tag:** "ARAYÜZ" | **title:** "C# SCADA Uygulaması" | **text:** "Eşleştirme mantığı, veri doğrulama ve operatör ekranları için özel geliştirilmiş SCADA."
  - **tag:** "DONANIM" | **title:** "Barkod Okuyucular" | **text:** "Kapı arabalarındaki lot etiketlerini ve ürün seri numaralarını okuyan endüstriyel tarayıcılar."
  - **tag:** "VERİ" | **title:** "SAP Entegrasyonu" | **text:** "Süreç onaylarının ve lot verilerinin SAP sistemiyle entegre paylaşımı."
  - **tag:** "YAZILIM" | **title:** "OnSuite Trace Platformu" | **text:** "İzlenebilirlik ve süreç yönetiminin merkezi olarak kontrol edildiği yazılım katmanı."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** SAP ERP Entegrasyonu
- **integrationDesc:** Sistem SAP ile entegre çalışmaktadır; doğrulama sonrası uygun parçaların onay verileri SAP'ye geri gönderilmektedir. Bu sayede üretim sahası ile kurumsal veriler arasında tam senkronizasyon kurulur.
- **integrationList:**
  - **bold:** "SAP Onay Verisi" | **text:** "Başarıyla doğrulanan ürün ve kapı eşleşme onayları anlık olarak SAP'ye iletilir."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Sıfır hata ile kontrollü montaj
- **resultsGrid:**
  - **title:** "Hatalı Montajın Önlenmesi" | **text:** "Ürüne monte edilen kapıların doğruluğu otomatik kontrol edilerek yanlış montaj riski sıfırlanmıştır."
  - **title:** "Seri No Düzeyinde Takip" | **text:** "Kapı-ürün ilişkisi doğrudan ürünün seri numarasına işlenerek tam izlenebilirlik sağlanmıştır."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Üretim süreçlerinizi de dönüştürmek ister misiniz?
- **ctaSubtitle:** Benzer bir çözümü işletmenize nasıl uygulayabileceğimizi konuşmak için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** BSH Oven Door Traceability
- **Sector (sector / tagValue):** Home Appliances
- **Location (locationValue):** Çerkezköy
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** Integration with the traceability system was achieved by matching product serial numbers with door trolley lot information. Data was recorded about which components, supplied in batches to the production floor, were assembled into products with specific serial numbers. Through product-component matching, the use of correct components in correct products was ensured.

##### Hero Section (EN)
- **heroTitleLine1:** Precise door assembly,
- **heroTitleLine2:** zero errors and full traceability in production.
- **heroSub:** In the project implemented at BSH's oven production factory in Çerkezköy, the oven doors mounted on the products were tracked and recorded based on the lot information obtained from the door carts.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Component tracking and production accuracy
- **contextP1:** In the project implemented at BSH's oven production factory in Çerkezköy, the oven doors mounted on the products were tracked and recorded based on the lot information obtained from the door carts.
- **contextP2:** The project was carried out to ensure the traceability of the door-product component relationship.

##### Problem / Challenge (EN)
- **problemEyebrow:** Needs / Problems
- **problemTitle:** Manual tracking and matching risks
- **problemLede:** In oven production, the oven door mounted on the product had to match the correct product and this match had to be traceable on a product basis.
- **problemList:**
  - **bold:** "Manual Tracking Constraints" | **text:** "The manual tracking of the door-product relationship being insufficient and carrying the risk of a traceability gap."
  - **bold:** "Incorrect Component Use" | **text:** "Inability to automatically prevent the risk of using the wrong door during production."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Lot-based matching and automatic verification
- **solutionLede:** Integration with the traceability system was achieved by matching product serial numbers with lot information obtained from the door carts. Data regarding the oven doors supplied on a lot basis to the production floor and mounted on products with specific serial numbers was recorded. Thanks to product-door matching, the use of correct doors in correct products was guaranteed.
- **steps:**
  - **no:** "01" | **title:** "Lot Barcode Reading" | **text:** "Lot labels on the door carts are scanned using a barcode reader."
  - **no:** "02" | **title:** "Serial No Matching" | **text:** "The serial number of the assembled product is associated with the door lot information."
  - **no:** "03" | **title:** "SCADA Verification" | **text:** "The C#-based SCADA application checks the accuracy of the match in real time."
  - **no:** "04" | **title:** "SAP Confirmation Record" | **text:** "After all checks are completed, data of the approved parts is written to the SAP system."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** Field automation and software architecture
- **techGrid:**
  - **tag:** "AUTOMATION" | **title:** "PLC Field Automation" | **text:** "PLC infrastructure managing the field flow, station states, and sensor data."
  - **tag:** "INTERFACE" | **title:** "C# SCADA Application" | **text:** "Specifically developed SCADA for matching logic, data verification, and operator screens."
  - **tag:** "HARDWARE" | **title:** "Barcode Readers" | **text:** "Industrial scanners that read lot labels on door carts and product serial numbers."
  - **tag:** "DATA" | **title:** "SAP Integration" | **text:** "Integrated sharing of process confirmations and lot data with the SAP system."
  - **tag:** "SOFTWARE" | **title:** "OnSuite Trace Platform" | **text:** "Central software layer controlling traceability and process management."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** SAP ERP Integration
- **integrationDesc:** The system runs integrated with SAP; after verification, confirmation data of compliant parts is sent back to SAP. This establishes full synchronization between the production floor and corporate data.
- **integrationList:**
  - **bold:** "SAP Confirmation Data" | **text:** "Successfully verified product and door match confirmations are instantly transmitted to SAP."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Controlled assembly with zero errors
- **resultsGrid:**
  - **title:** "Prevention of Faulty Assembly" | **text:** "The accuracy of the mounted doors is automatically checked, zeroing the risk of incorrect assembly."
  - **title:** "Tracking at Serial No Level" | **text:** "The door-product relationship is written directly to the product's serial number, ensuring full traceability."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Want to transform your production processes too?
- **ctaSubtitle:** Contact us to discuss how we can implement a similar solution for your business.
- **ctaPrimary:** Get in Touch

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** BSH - Trasabilitatea usilor de cuptor
- **Sector (sector / tagValue):** Electrocasnice
- **Locație (locationValue):** Çerkezköy
- **Domeniu de Aplicare (scopeVal):** Software și Integrare
- **An (year):** An
- **Descriere Scurtă (description):** Integrarea cu sistemul de trasabilitate a fost realizată prin potrivirea numerelor de serie ale produselor cu informațiile despre loturile de cărucioare pentru uși. Au fost înregistrate date despre ce componente, furnizate pe loturi la etajul de producție, au fost asamblate în produse cu numere de serie specifice. Prin potrivirea produs-componentă, s-a asigurat utilizarea componentelor corecte în produsele corecte.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Asamblarea precisă a ușii,
- **heroTitleLine2:** zero erori și trasabilitate completă în producție.
- **heroSub:** În cadrul proiectului implementat la fabrica de producție a cuptoarelor BSH din Çerkezköy, ușile de cuptor montate pe produse au fost urmărite și înregistrate pe baza informațiilor despre lot obținute de la cărucioarele pentru uși.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Urmărirea componentelor și acuratețea producției
- **contextP1:** În cadrul proiectului implementat la fabrica de producție a cuptoarelor BSH din Çerkezköy, ușile de cuptor montate pe produse au fost urmărite și înregistrate pe baza informațiilor despre lot obținute de la cărucioarele pentru uși.
- **contextP2:** Proiectul a fost realizat pentru a asigura trasabilitatea relației componentă ușă-produs.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoie / Problemă
- **problemTitle:** Riscuri de urmărire manuală și potrivire
- **problemLede:** În producția de cuptoare, ușa de cuptor montată pe produs trebuia să se potrivească cu produsul corect, iar această potrivire trebuia să fie trasabilă la nivel de produs.
- **problemList:**
  - **bold:** "Limitări de Urmărire Manuală" | **text:** "Urmărirea manuală a relației ușă-produs fiind insuficientă și prezentând riscul unei breșe de trasabilitate."
  - **bold:** "Utilizare Incorectă a Componentei" | **text:** "Imposibilitatea de a preveni automat riscul de utilizare a unei uși greșite în timpul producției."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Potrivire bazată pe lot și verificare automată
- **solutionLede:** Integrarea cu sistemul de trasabilitate a fost realizată prin potrivirea numerelor de serie ale produselor cu informațiile despre lot obținute de la cărucioarele pentru uși. Datele privind ușile de cuptor furnizate pe loturi la etajul de producție și montate pe produse cu numere de serie specifice au fost înregistrate. Datorită potrivirii produs-ușă, utilizarea ușilor corecte în produsele corecte a fost garantată.
- **steps:**
  - **no:** "01" | **title:** "Citire Cod de Bare Lot" | **text:** "Etichetele de lot de pe cărucioarele pentru uși sunt scanate folosind un cititor de coduri de bare."
  - **no:** "02" | **title:** "Potrivire Număr Serie" | **text:** "Numărul de serie al produsului asamblat este asociat cu informațiile despre lotul ușii."
  - **no:** "03" | **title:** "Verificare SCADA" | **text:** "Aplicația SCADA bazată pe C# verifică acuratețea potrivirii în timp real."
  - **no:** "04" | **title:** "Înregistrare Confirmare SAP" | **text:** "După finalizarea tuturor verificărilor, datele pieselor aprobate sunt scrise în sistemul SAP."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipament Utilizat
- **techTitle:** Automatizare de teren și arhitectură software
- **techGrid:**
  - **tag:** "AUTOMATIZARE" | **title:** "Automatizare Câmp PLC" | **text:** "Infrastructură PLC care gestionează fluxul de lucru, stările stațiilor și datele senzorilor."
  - **tag:** "INTERFAȚĂ" | **title:** "Aplicație SCADA C#" | **text:** "SCADA dezvoltată special pentru logica de potrivire, verificarea datelor și ecranele operatorului."
  - **tag:** "HARDWARE" | **title:** "Cititoare Cod de Bare" | **text:** "Scannere industriale care citesc etichetele de lot de pe cărucioare și numerele de serie ale produselor."
  - **tag:** "DATE" | **title:** "Integrare SAP" | **text:** "Partajarea integrată a confirmărilor de proces și a datelor de lot cu sistemul SAP."
  - **tag:** "SOFTWARE" | **title:** "Platforma OnSuite Trace" | **text:** "Stratul software central de control al trasabilității și managementului proceselor."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Integrare SAP ERP
- **integrationDesc:** Sistemul funcționează integrat cu SAP; după verificare, datele de confirmare ale pieselor conforme sunt trimise înapoi în SAP. Acest lucru stabilește o sincronizare completă între terenul de producție și datele corporative.
- **integrationList:**
  - **bold:** "Date de Confirmare SAP" | **text:** "Confirmările de potrivire produs-ușă verificate cu succes sunt transmise instantaneu către SAP."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Asamblare controlată cu zero erori
- **resultsGrid:**
  - **title:** "Prevenirea Asamblării Defectuoase" | **text:** "Acuratețea ușilor montate este verificată automat, eliminând riscul de asamblare incorectă."
  - **title:** "Urmărire la Nivel de Număr Serie" | **text:** "Relația ușă-produs este scrisă direct pe numărul de serie al produsului, asigurând trasabilitate completă."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să vă transformați și procesele de producție?
- **ctaSubtitle:** Contactați-ne pentru a discuta cum putem implementa o soluție similară pentru afacerea dumneavoastră.
- **ctaPrimary:** Contactați-ne


---

### 16. BSH - Cam Raf Takibi
**Slug:** `bsh-glass-shelf-tracking` | **ID:** `30` | **Sıra (Order):** `16` | **Yıl:** `2022`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `bsh-glass-shelf-tracking`
- **Sıralama (order):** `16`
- **Yıl (year / referenceDate):** `2022`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `RFID, Barcode, ERP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/BSH_Bosch_und_Siemens_Hausger%C3%A4te_logo.svg`
  - **Ana Görsel (image):** `/images/companies/Bsh/BSH_opengraph.webp`
  - **Hero Görseli (heroImage):** `/images/companies/Bsh/BSH_opengraph.webp`
  - **Galeri Görselleri (gallery):**
  - /images/companies/Bsh/BSH_opengraph.webp
  - /images/companies/Bsh/100-Milyondan-Fazla-Uretim-45-Milyar-ABD-dolari-Ekonomik-Katki.webp

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** BSH - Cam Raf Takibi
- **Sektör (sector / tagValue):** Beyaz Eşya
- **Konum (locationValue):** Çerkezköy
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Ürün seri numaralarının cam raf arabalarından elde edilen lot bilgileriyle ilişkilendirilmesi aracılığıyla izlenebilirlik sistemiyle entegrasyon sağlandı. Üretim hattına lot bazında beslenen ve belirli seri numaralı ürünlere monte edilen bileşenlere ilişkin veriler kaydedildi. Ürün-bileşen ilişkilendirmesi sayesinde doğru bileşenlerin doğru ürünlerde kullanılması güvence altına alındı.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Hassas montaj takibi,
- **heroTitleLine2:** doğru bileşen eşleşmesi ve kalite güvencesi.
- **heroSub:** BSH'nin Çerkezköy'deki buzdolabı üretimi yapan fabrikasında hayata geçirilen projede, ürünlere monte edilen cam raflar lot bilgisine göre takip edilmiş ve kayıt altına alınmıştır.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Buzdolabı üretiminde parça takibi
- **contextP1:** BSH'nin Çerkezköy'deki buzdolabı üretimi yapan fabrikasında hayata geçirilen projede, ürünlere monte edilen cam raflar lot bilgisine göre takip edilmiş ve kayıt altına alınmıştır.
- **contextP2:** Proje, cam raf–ürün bileşen ilişkisinin izlenebilirliğini sağlamak amacıyla gerçekleştirilmiştir.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Yanlış bileşen eşleşme riskleri
- **problemLede:** Buzdolabı üretiminde cam raf bileşeninin doğru ürünle eşleşmesi ve bu eşleşmenin ürün bazında izlenebilir olması gerekiyordu.
- **problemList:**
  - **bold:** "Manuel Takip Boşlukları" | **text:** "Bileşen-ürün ilişkisinin manuel takibinin yetersiz olması ve izlenebilirlik boşluğu riski taşıması."
  - **bold:** "Hatalı Montaj Riski" | **text:** "Üretim sırasında yanlış bileşen kullanımının ve hatalı eşleşmelerin anlık engellenememesi."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Lot bazlı izleme ve SAP senkronizasyonu
- **solutionLede:** Ürünlere monte edilen cam raflar, lot numaralarına göre takip edildi ve kayıt altına alındı. İlgili istasyonda cam raf arabaları taranarak cam raf lot numaraları ürün seri numarasıyla ilişkilendirildi ve izlenebilirlik sistemiyle entegrasyon sağlandı. Bu yapı, bileşen–ürün eşleşmesini güvence altına alarak doğru ürünlerde doğru cam rafların kullanılmasını sağladı. Uygun parçalar için onay verileri SAP'ye geri gönderildi.
- **steps:**
  - **no:** "01" | **title:** "Araba Taraması" | **text:** "İstyondaki cam raf arabaları taranarak lot bilgileri otomatik alınır."
  - **no:** "02" | **title:** "Seri No İlişkilendirme" | **text:** "Taranan cam raf lot numaraları ürün seri numarasıyla otomatik eşleştirilir."
  - **no:** "03" | **title:** "SCADA Kontrolü" | **text:** "SCADA uygulaması eşleşme doğruluğunu denetler ve hatalı parçaları engeller."
  - **no:** "04" | **title:** "SAP Onay Aktarımı" | **text:** "Onaylanan montaj ve parça ilişkileri SAP sistemine anlık kaydedilir."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** Saha entegrasyonu ve kontrol altyapısı
- **techGrid:**
  - **tag:** "OTOMASYON" | **title:** "PLC Saha Yapısı" | **text:** "İstasyon durumlarını kontrol eden ve saha akışını yönlendiren PLC altyapısı."
  - **tag:** "ARAYÜZ" | **title:** "C# SCADA Uygulaması" | **text:** "Eşleştirme doğrulaması, süreç izleme ve operatör ekranları için C# uygulaması."
  - **tag:** "DONANIM" | **title:** "Endüstriyel Barkod Okuyucular" | **text:** "Cam raf lot numaralarını ve ürün seri numaralarını okuyan hassas tarayıcılar."
  - **tag:** "VERİ" | **title:** "SAP ERP Entegrasyonu" | **text:** "Onay verilerinin ve lot eşleşmelerinin SAP sistemiyle çift yönlü paylaşımı."
  - **tag:** "YAZILIM" | **title:** "OnSuite Trace Platformu" | **text:** "İzlenebilirlik ve süreç yönetiminin merkezi olarak kontrol edildiği yazılım katmanı."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** SAP ERP Entegrasyonu
- **integrationDesc:** Sistem SAP ile entegre çalışmaktadır; doğrulama sonrası uygun parçaların onay verileri SAP'ye geri gönderilmektedir. Bu yapı, saha verileri ile kurumsal sistem arasındaki bilgi bütünlüğünü güvence altına alır.
- **integrationList:**
  - **bold:** "SAP Onay Verisi" | **text:** "Montaj doğrulamasından geçen uygun parçalara ilişkin onay kayıtları SAP'ye anlık iletilir."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Gelişmiş kalite kontrolü ve izlenebilirlik
- **resultsGrid:**
  - **title:** "Doğru Eşleşme Güvencesi" | **text:** "Cam raf bileşeninin ürünle doğru eşleşmesi otomatik olarak doğrulanarak yanlış parça kullanımı önlenmiştir."
  - **title:** "Uçtan Uca İzlenebilirlik" | **text:** "Bileşen-ürün ilişkisi doğrudan ürün seri numarası düzeyinde kalıcı olarak kayıt altına alınmıştır."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Üretim süreçlerinizi de dönüştürmek ister misiniz?
- **ctaSubtitle:** Benzer bir çözümü işletmenize nasıl uygulayabileceğimizi konuşmak için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** BSH Glass Shelf Tracking
- **Sector (sector / tagValue):** Home Appliances
- **Location (locationValue):** Çerkezköy
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** Integration with the traceability system was achieved by correlating product serial numbers with glass shelf trolley lot information. Data was recorded regarding which components, fed to the production line on a lot basis, were assembled into products with specific serial numbers. Through product-component correlation, the use of correct components in the correct products was ensured.

##### Hero Section (EN)
- **heroTitleLine1:** Precise assembly tracking,
- **heroTitleLine2:** correct component matching and quality assurance.
- **heroSub:** In the project implemented at BSH's refrigerator production factory in Çerkezköy, the glass shelves mounted on products were tracked and recorded based on lot information.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Part tracking in refrigerator production
- **contextP1:** In the project implemented at BSH's refrigerator production factory in Çerkezköy, the glass shelves mounted on products were tracked and recorded based on lot information.
- **contextP2:** The project was carried out to ensure the traceability of the glass shelf-product component relationship.

##### Problem / Challenge (EN)
- **problemEyebrow:** Needs / Problems
- **problemTitle:** Incorrect component matching risks
- **problemLede:** In refrigerator production, the glass shelf component had to match the correct product and this match had to be traceable on a product basis.
- **problemList:**
  - **bold:** "Manual Tracking Gaps" | **text:** "The manual tracking of the component-product relationship being insufficient and carrying the risk of a traceability gap."
  - **bold:** "Incorrect Assembly Risk" | **text:** "Inability to instantly prevent incorrect component use and faulty matching during production."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Lot-based tracking and SAP synchronization
- **solutionLede:** Glass shelves mounted on products were tracked and recorded based on lot numbers. By scanning glass shelf carts at the relevant station, glass shelf lot numbers were associated with the product serial number, establishing integration with the traceability system. This structure secured the component-product match, ensuring the use of correct glass shelves in correct products. Confirmation data for compliant parts was written back to SAP.
- **steps:**
  - **no:** "01" | **title:** "Cart Scanning" | **text:** "Glass shelf carts at the station are scanned to automatically retrieve lot information."
  - **no:** "02" | **title:** "Serial No Association" | **text:** "Scanned glass shelf lot numbers are automatically paired with the product serial number."
  - **no:** "03" | **title:** "SCADA Control" | **text:** "The SCADA application checks matching accuracy and prevents incorrect parts."
  - **no:** "04" | **title:** "SAP Confirmation Push" | **text:** "Approved assembly and part relationships are instantly written to the SAP system."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** Field integration and control infrastructure
- **techGrid:**
  - **tag:** "AUTOMATION" | **title:** "PLC Field Structure" | **text:** "PLC infrastructure that checks station states and guides the field flow."
  - **tag:** "INTERFACE" | **title:** "C# SCADA Application" | **text:** "C# application for matching verification, process monitoring, and operator screens."
  - **tag:** "HARDWARE" | **title:** "Industrial Barcode Readers" | **text:** "Precision scanners that read glass shelf lot numbers and product serial numbers."
  - **tag:** "DATA" | **title:** "SAP ERP Integration" | **text:** "Bi-directional sharing of confirmation data and lot matches with the SAP system."
  - **tag:** "SOFTWARE" | **title:** "OnSuite Trace Platform" | **text:** "Central software layer controlling traceability and process management."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** SAP ERP Integration
- **integrationDesc:** The system runs integrated with SAP; after verification, confirmation data of compliant parts is written back to SAP. This structure secures information integrity between field data and the corporate system.
- **integrationList:**
  - **bold:** "SAP Confirmation Data" | **text:** "Confirmation records for compliant parts passing assembly verification are instantly transmitted to SAP."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Advanced quality control and traceability
- **resultsGrid:**
  - **title:** "Correct Match Assurance" | **text:** "The correct matching of the glass shelf component with the product is automatically verified, preventing incorrect parts."
  - **title:** "End-to-End Traceability" | **text:** "The component-product relationship is permanently recorded directly at the product serial number level."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Want to transform your production processes too?
- **ctaSubtitle:** Contact us to discuss how we can implement a similar solution for your business.
- **ctaPrimary:** Get in Touch

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** BSH - Urmarirea rafturilor din sticla
- **Sector (sector / tagValue):** Electrocasnice
- **Locație (locationValue):** Çerkezköy
- **Domeniu de Aplicare (scopeVal):** Software și Integrare
- **An (year):** An
- **Descriere Scurtă (description):** Integrarea cu sistemul de trasabilitate a fost realizată prin corelarea numerelor de serie ale produselor cu informațiile despre loturile cărucioarelor pentru rafturi din sticlă. Au fost înregistrate datele privind componentele, alimentate pe linia de producție pe bază de lot, care au fost asamblate în produse cu numere de serie specifice. Prin corelarea produs–componentă, s-a asigurat utilizarea componentelor corecte în produsele corecte.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Urmărirea precisă a asamblării,
- **heroTitleLine2:** potrivirea corectă a componentelor și asigurarea calității.
- **heroSub:** În cadrul proiectului implementat la fabrica de producție a frigiderelor BSH din Çerkezköy, rafturile din sticlă montate pe produse au fost urmărite și înregistrate pe baza informațiilor despre lot.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Urmărirea pieselor în producția de frigidere
- **contextP1:** În cadrul proiectului implementat la fabrica de producție a frigiderelor BSH din Çerkezköy, rafturile din sticlă montate pe produse au fost urmărite și înregistrate pe baza informațiilor despre lot.
- **contextP2:** Proiectul a fost realizat pentru a asigura trasabilitatea relației componentă raft din sticlă-produs.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoie / Problemă
- **problemTitle:** Riscuri de potrivire incorectă a componentelor
- **problemLede:** În producția de frigidere, componenta raft din sticlă trebuia să se potrivească cu produsul corect, iar această potrivire trebuia să fie trasabilă la nivel de produs.
- **problemList:**
  - **bold:** "Breșe de Urmărire Manuală" | **text:** "Urmărirea manuală a relației componentă-produs fiind insuficientă și prezentând riscul unei breșe de trasabilitate."
  - **bold:** "Risc de Asamblare Incorectă" | **text:** "Imposibilitatea de a preveni instantaneu utilizarea incorectă a componentelor și potrivirile greșite în timpul producției."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Urmărire bazată pe lot și sincronizare SAP
- **solutionLede:** Rafturile din sticlă montate pe produse au fost urmărite și înregistrate pe baza numerelor de lot. Prin scanarea cărucioarelor de rafturi la stația respectivă, numerele de lot ale rafturilor au fost asociate cu numărul de serie al produsului, stabilind integrarea cu sistemul de trasabilitate. Această structură a garantat potrivirea componentă-produs, asigurând utilizarea rafturilor din sticlă corecte în produsele corecte. Datele de confirmare pentru piesele conforme au fost scrise înapoi în SAP.
- **steps:**
  - **no:** "01" | **title:** "Scanare Cărucior" | **text:** "Cărucioarele de rafturi din sticlă de la stație sunt scanate pentru a prelua automat informațiile despre lot."
  - **no:** "02" | **title:** "Asociere Număr Serie" | **text:** "Numerele de lot ale rafturilor scanate sunt asociate automat cu numărul de serie al produsului."
  - **no:** "03" | **title:** "Control SCADA" | **text:** "Aplicația SCADA verifică acuratețea potrivirii și previne utilizarea pieselor incorecte."
  - **no:** "04" | **title:** "Transmitere Confirmare SAP" | **text:** "Relațiile de asamblare și piese aprobate sunt scrise instantaneu în sistemul SAP."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipament Utilizat
- **techTitle:** Integrare în teren și infrastructură de control
- **techGrid:**
  - **tag:** "AUTOMATIZARE" | **title:** "Structură Câmp PLC" | **text:** "Infrastructură PLC care controlează stările stațiilor și ghidează fluxul din teren."
  - **tag:** "INTERFAȚĂ" | **title:** "Aplicație SCADA C#" | **text:** "Aplicație C# pentru verificarea potrivirii, monitorizarea procesului și ecranele operatorului."
  - **tag:** "HARDWARE" | **title:** "Cititoare Cod de Bare" | **text:** "Scannere de precizie care citesc numerele de lot ale rafturilor și numerele de serie ale produselor."
  - **tag:** "DATE" | **title:** "Integrare SAP ERP" | **text:** "Partajarea bidirecțională a datelor de confirmare și a potrivirilor de lot cu sistemul SAP."
  - **tag:** "SOFTWARE" | **title:** "Platforma OnSuite Trace" | **text:** "Stratul software central de control al trasabilității și managementului proceselor."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Integrare SAP ERP
- **integrationDesc:** Sistemul funcționează integrat cu SAP; după verificare, datele de confirmare ale pieselor conforme sunt scrise înapoi în SAP. Această structură garantează integritatea informațiilor între datele de pe teren și sistemul corporativ.
- **integrationList:**
  - **bold:** "Date de Confirmare SAP" | **text:** "Înregistrările de confirmare pentru piesele conforme care trec de verificarea asamblării sunt transmise instantaneu către SAP."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Control avansat al calității și trasabilitate
- **resultsGrid:**
  - **title:** "Garanția Potrivirii Corecte" | **text:** "Potrivirea corectă a raftului de sticlă cu produsul este verificată automat, prevenind piesele incorecte."
  - **title:** "Trasabilitate End-to-End" | **text:** "Relația componentă-produs este înregistrată permanent direct la nivelul numărului de serie al produsului."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să vă transformați și procesele de producție?
- **ctaSubtitle:** Contactați-ne pentru a discuta cum putem implementa o soluție similară pentru afacerea dumneavoastră.
- **ctaPrimary:** Contactați-ne


---

### 17. Ajinomoto (Kemal Kükrer) - Blockchain Entegre Ürün İzlenebilirliği
**Slug:** `ajinomoto-kemal-kukrer-blockchain-integrated-product-traceability` | **ID:** `31` | **Sıra (Order):** `17` | **Yıl:** `2022`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `ajinomoto-kemal-kukrer-blockchain-integrated-product-traceability`
- **Sıralama (order):** `17`
- **Yıl (year / referenceDate):** `2022`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `RFID, Barcode, ERP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/ajinomoto-global-seeklogo.svg`
  - **Ana Görsel (image):** `/images/companies/Ajınomoto/ajinomoto-offices-istanbul-1.jpg`
  - **Hero Görseli (heroImage):** `/images/companies/Ajınomoto/ajinomoto-offices-istanbul-1.jpg`
  - **Galeri Görselleri (gallery):**
  - 

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Ajinomoto (Kemal Kükrer) - Blockchain Entegre Ürün İzlenebilirliği
- **Sektör (sector / tagValue):** Gıda & İçecek
- **Konum (locationValue):** Eskişehir
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Organik sirke üreten Eskişehir'deki müşteri fabrikasında şişeleme aşamasındaki organik sirke parametreleri toplanarak bireysel şişe numaralarıyla ilişkilendirildi. Toplanan verilerin şeffaflığını ve değiştirilemezliğini güvence altına almak için veriler bir blokzincir ağına aktarıldı. Son kullanıcılar şişe üzerindeki QR kodu tarayarak söz konusu sirkenin dolum parametrelerini şeffaf biçimde görüntüleyebilir ve üretim detaylarına erişebilir. SAP sistemiyle entegre çalışan uygulama, bulut sunucularında çalışmasıyla da öne çıkmaktadır.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Tarladan sofraya güven,
- **heroTitleLine2:** blokzincir ile değiştirilemez izlenebilirlik.
- **heroSub:** Organik sirke üretimi yapan, Eskişehir'deki müşteri fabrikasında hayata geçirilen projede, şişeleme aşamasındaki organik sirke parametreleri toplanarak bireysel şişe numaralarıyla ilişkilendirilmiştir.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Gıda zincirinde mutlak şeffaflık
- **contextP1:** Organik sirke üretimi yapan, Eskişehir'deki müşteri fabrikasında hayata geçirilen projede, şişeleme aşamasındaki organik sirke parametreleri toplanarak bireysel şişe numaralarıyla ilişkilendirilmiştir.
- **contextP2:** Proje, ürün bazında izlenebilirliği ve son kullanıcıya kadar uzanan şeffaflığı sağlamak amacıyla gerçekleştirilmiştir.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Veri güvenliği ve şeffaflık gereksinimi
- **problemLede:** Şişeleme sürecindeki üretim parametrelerinin her şişe bazında kayıt altına alınması ve bu verilerin sonradan değiştirilemez, güvenilir biçimde saklanması gerekiyordu.
- **problemList:**
  - **bold:** "Veri Güvenliği ve Değiştirilemezlik" | **text:** "Üretim parametrelerinin manipülasyona karşı güvenli ve değiştirilemez bir altyapıda saklanması ihtiyacı."
  - **bold:** "Son Kullanıcı Güven Açığı" | **text:** "Tüketicilere satın aldıkları ürünün üretim ve dolum geçmişini kanıtlanabilir biçimde sunma zorluğu."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Blokzincir entegrasyonu ve QR kod
- **solutionLede:** Şişeleme aşamasındaki organik sirke parametreleri toplanarak bireysel şişe numaralarıyla ilişkilendirildi. Toplanan verilerin şeffaflığını ve değiştirilemezliğini güvence altına almak için veriler bir blokzincir ağına aktarıldı. Son kullanıcılar, şişe üzerindeki QR kodu tarayarak söz konusu sirkenin dolum parametrelerini şeffaf biçimde görüntüleyebilmekte ve üretim detaylarına erişebilmektedir. SAP sistemiyle entegre çalışan uygulama, bulut sunucularında çalışmasıyla da öne çıkmaktadır.
- **steps:**
  - **no:** "01" | **title:** "Parametre Toplama" | **text:** "Dolum aşamasındaki organik sirke parametreleri anlık toplanır."
  - **no:** "02" | **title:** "Tekil Şişe Eşleme" | **text:** "Toplanan veriler, şişenin üzerindeki benzersiz numara ile ilişkilendirilir."
  - **no:** "03" | **title:** "Blockchain Kaydı" | **text:** "Eşleşen veriler, değiştirilemezlik için blokzincir (blockchain) ağına aktarılır."
  - **no:** "04" | **title:** "QR Kod Sorgulama" | **text:** "Tüketici, şişedeki QR kodu okutarak tüm üretim parametrelerini sorgular."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** Blokzincir ve bulut tabanlı sistem yapısı
- **techGrid:**
  - **tag:** "OTOMASYON" | **title:** "PLC Kontrol Yapısı" | **text:** "Üretim ve dolum hattındaki süreç adımlarını yöneten PLC yapısı."
  - **tag:** "DONANIM" | **title:** "Barkod Okuyucular" | **text:** "Şişe üzerindeki benzersiz numaraları tarayan endüstriyel okuyucular."
  - **tag:** "GÜVENLİK" | **title:** "Blokzincir (Blockchain)" | **text:** "Verilerin değiştirilemez ve manipüle edilemez şekilde saklandığı ağ altyapısı."
  - **tag:** "ERİŞİM" | **title:** "QR Kod Yapısı" | **text:** "Son kullanıcıların üretim parametrelerini sorgulamasını sağlayan web arayüzü."
  - **tag:** "BULUT" | **title:** "Bulut Sunucu Altyapısı" | **text:** "Uygulamanın yüksek erişilebilirlikle bulut üzerinde çalışmasını sağlayan mimari."
  - **tag:** "VERİ" | **title:** "SAP Entegrasyonu" | **text:** "Saha ve blokzincir verilerinin kurumsal SAP sistemiyle entegre yönetimi."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** SAP ve Blokzincir Entegrasyonu
- **integrationDesc:** Sistem SAP ile entegre çalışmaktadır. Toplanan üretim ve izlenebilirlik verileri blokzincir ağına aktarılarak değiştirilemez biçimde saklanmaktadır. Bu sayede veriler her aşamada şeffaf ve güvenlidir.
- **integrationList:**
  - **bold:** "Blokzincir Kaydı" | **text:** "Şişe dolum verileri ve üretim parametreleri blockchain ağına değiştirilemez olarak yazılır."
  - **bold:** "SAP Bağlantısı" | **text:** "Üretim siparişleri ve ürün master verileri SAP ERP üzerinden sisteme beslenir."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Blokzincir ile mutlak güven
- **resultsGrid:**
  - **title:** "Ürün Bazında İzlenebilirlik" | **text:** "Her organik sirke şişesi için dolum parametreleri tekil olarak kayıt altına alınarak tam izlenebilirlik kurulmuştur."
  - **title:** "Değiştirilemez Veri Güvenliği" | **text:** "Üretim verileri blokzincir üzerinde saklanarak manipülasyon riskine karşı %100 koruma altına alınmıştır."
  - **title:** "Tüketici Şeffaflığı" | **text:** "QR kod ile son kullanıcılara dolum detaylarını sorgulama imkanı sunularak marka güvenilirliği artırılmıştır."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Üretim süreçlerinizi de dönüştürmek ister misiniz?
- **ctaSubtitle:** Benzer bir çözümü işletmenize nasıl uygulayabileceğimizi konuşmak için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Ajinomoto Kemal Kukrer Blockchain Integrated Product Traceability
- **Sector (sector / tagValue):** Food & Beverage
- **Location (locationValue):** Eskişehir
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** At our client's factory in Eskisehir, which produces organic vinegar, organic vinegar parameters during the bottling stage are collected and correlated with individual bottle numbers. To ensure transparency and immutability of the collected data, it is transferred to a blockchain network. End users can scan the QR code on the bottle to transparently view the filling parameters of that vinegar and access production details. The application, which operates integrated with the SAP system, is also notable for running on cloud servers.

##### Hero Section (EN)
- **heroTitleLine1:** Trust from farm to table,
- **heroTitleLine2:** immutable traceability with blockchain.
- **heroSub:** In the project implemented at the customer factory in Eskişehir producing organic vinegar, the organic vinegar parameters at the bottling stage were collected and associated with individual bottle numbers.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Absolute transparency in the food chain
- **contextP1:** In the project implemented at the customer factory in Eskişehir producing organic vinegar, the organic vinegar parameters at the bottling stage were collected and associated with individual bottle numbers.
- **contextP2:** The project was carried out to ensure product-based traceability and transparency extending to the end user.

##### Problem / Challenge (EN)
- **problemEyebrow:** Needs / Problems
- **problemTitle:** Data security and transparency requirements
- **problemLede:** The production parameters in the bottling process needed to be recorded on a per-bottle basis, and this data had to be stored in a reliable, unalterable way.
- **problemList:**
  - **bold:** "Data Security and Immutability" | **text:** "The need to store production parameters in a secure and unalterable infrastructure against manipulation."
  - **bold:** "End User Trust Gap" | **text:** "The difficulty of presenting the production and bottling history of the purchased product to consumers in a provable way."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Blockchain integration and QR code
- **solutionLede:** Organic vinegar parameters at the bottling stage were collected and associated with individual bottle numbers. To guarantee transparency and immutability, the collected data was transferred to a blockchain network. End users can scan the QR code on the bottle to transparently view the filling parameters of the respective vinegar and access production details. Operating integrated with SAP, the application is also notable for running on cloud servers.
- **steps:**
  - **no:** "01" | **title:** "Parameter Collection" | **text:** "Organic vinegar parameters at the filling stage are collected in real time."
  - **no:** "02" | **title:** "Unique Bottle Pairing" | **text:** "Collected data is associated with the unique number on the bottle."
  - **no:** "03" | **title:** "Blockchain Recording" | **text:** "Matched data is transferred to the blockchain network for immutability."
  - **no:** "04" | **title:** "QR Code Query" | **text:** "Consumers scan the QR code on the bottle to query all production parameters."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** Blockchain and cloud-based system structure
- **techGrid:**
  - **tag:** "AUTOMATION" | **title:** "PLC Control Structure" | **text:** "PLC structure managing process steps in the production and filling line."
  - **tag:** "HARDWARE" | **title:** "Barcode Readers" | **text:** "Industrial readers scanning the unique numbers on the bottles."
  - **tag:** "SECURITY" | **title:** "Blockchain" | **text:** "Network infrastructure where data is stored in an unalterable and tamper-proof way."
  - **tag:** "ACCESS" | **title:** "QR Code Structure" | **text:** "Web interface enabling end users to query production parameters."
  - **tag:** "CLOUD" | **title:** "Cloud Server Infrastructure" | **text:** "Architecture enabling the application to run on the cloud with high availability."
  - **tag:** "DATA" | **title:** "SAP Integration" | **text:** "Integrated management of field and blockchain data with the corporate SAP system."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** SAP and Blockchain Integration
- **integrationDesc:** The system runs integrated with SAP. Collected production and traceability data is transferred to the blockchain network and stored permanently in an unalterable format, ensuring data transparency and security.
- **integrationList:**
  - **bold:** "Blockchain Registry" | **text:** "Bottle filling data and production parameters are written immutably to the blockchain network."
  - **bold:** "SAP Connection" | **text:** "Production orders and product master data are fed into the system via SAP ERP."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Absolute trust with blockchain
- **resultsGrid:**
  - **title:** "Product-Based Traceability" | **text:** "Filling parameters for each organic vinegar bottle are individually recorded, establishing full traceability."
  - **title:** "Immutable Data Security" | **text:** "Production data is stored on the blockchain, protected 100% against any manipulation risks."
  - **title:** "Consumer Transparency" | **text:** "Brand credibility is enhanced by allowing end users to query filling details using a QR code."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Want to transform your production processes too?
- **ctaSubtitle:** Contact us to discuss how we can implement a similar solution for your business.
- **ctaPrimary:** Get in Touch

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Ajinomoto (Kemal Kukrer) - Trasabilitatea produselor integrata cu Blockchain
- **Sector (sector / tagValue):** Alimente & Băuturi
- **Locație (locationValue):** Eskişehir
- **Domeniu de Aplicare (scopeVal):** Software și Integrare
- **An (year):** An
- **Descriere Scurtă (description):** La fabrica clientului nostru din Eskișehir, care produce oțet organic, parametrii oțetului organic în etapa de îmbuteliere sunt colectați și corelați cu numerele individuale ale sticlelor. Pentru a asigura transparența și imuabilitatea datelor colectate, acestea sunt transferate într-o rețea blockchain. Utilizatorii finali pot scana codul QR de pe sticlă pentru a vizualiza în mod transparent parametrii de umplere ai oțetului respectiv și pentru a accesa detaliile de producție. Aplicația, care funcționează integrată cu sistemul SAP, se remarcă și prin rularea pe servere cloud.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Încredere de la fermă la furculiță,
- **heroTitleLine2:** trasabilitate imutabilă cu blockchain.
- **heroSub:** În cadrul proiectului implementat la fabrica clientului din Eskișehir care produce oțet organic, parametrii oțetului organic în etapa de îmbuteliere au fost colectați și asociați cu numerele individuale ale sticlelor.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Transparență absolută în lanțul alimentar
- **contextP1:** În cadrul proiectului implementat la fabrica clientului din Eskișehir care produce oțet organic, parametrii oțetului organic în etapa de îmbuteliere au fost colectați și asociați cu numerele individuale ale sticlelor.
- **contextP2:** Proiectul a fost realizat pentru a asigura trasabilitatea la nivel de produs și transparența extinsă până la utilizatorul final.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoie / Problemă
- **problemTitle:** Cerințe de securitate a datelor și transparență
- **problemLede:** Parametrii de producție din procesul de îmbuteliere trebuiau înregistrați pentru fiecare sticlă, iar aceste date trebuiau stocate într-un mod fiabil, imutabil.
- **problemList:**
  - **bold:** "Securitatea Datelor și Imutabilitatea" | **text:** "Nevoia de a stoca parametrii de producție într-o infrastructură securizată și imutabilă împotriva manipulării."
  - **bold:** "Breșa de Încredere a Utilizatorului Final" | **text:** "Dificultatea de a prezenta consumatorilor istoricul de producție și îmbuteliere al produsului achiziționat într-un mod demonstrabil."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Integrare Blockchain și cod QR
- **solutionLede:** Parametrii oțetului organic în etapa de îmbuteliere au fost colectați și asociați cu numerele individuale ale sticlelor. Pentru a garanta transparența și imutabilitatea, datele colectate au fost transferate într-o rețea blockchain. Utilizatorii finali pot scana codul QR de pe sticlă pentru a vizualiza în mod transparent parametrii de umplere ai oțetului respectiv și pentru a accesa detaliile de producție. Funcționând integrat cu sistemul SAP, aplicația se remarcă și prin rularea pe servere cloud.
- **steps:**
  - **no:** "01" | **title:** "Colectare Parametri" | **text:** "Parametrii oțetului organic în etapa de umplere sunt colectați în timp real."
  - **no:** "02" | **title:** "Potrivire Sticlă Unică" | **text:** "Datele colectate sunt asociate cu numărul unic de pe sticlă."
  - **no:** "03" | **title:** "Înregistrare Blockchain" | **text:** "Datele potrivite sunt transferate în rețeaua blockchain pentru imutabilitate."
  - **no:** "04" | **title:** "Interogare Cod QR" | **text:** "Consumatorul scanează codul QR de pe sticlă pentru a interoga toți parametrii de producție."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipament Utilizat
- **techTitle:** Blockchain și structura sistemului bazată pe cloud
- **techGrid:**
  - **tag:** "AUTOMATIZARE" | **title:** "Structură Control PLC" | **text:** "Structură PLC care gestionează etapele procesului pe linia de producție și umplere."
  - **tag:** "HARDWARE" | **title:** "Cititoare Cod de Bare" | **text:** "Cititoare industriale care scanează numerele unice de pe sticle."
  - **tag:** "SECURITATE" | **title:** "Blockchain" | **text:** "Infrastructură de rețea în care datele sunt stocate într-un mod imutabil și protejat."
  - **tag:** "ACCES" | **title:** "Structură Cod QR" | **text:** "Interfață web care le permite utilizatorilor finali să interogheze parametrii de producție."
  - **tag:** "CLOUD" | **title:** "Infrastructură Server Cloud" | **text:** "Arhitectură care permite aplicației să ruleze în cloud cu disponibilitate ridicată."
  - **tag:** "DATE" | **title:** "Integrare SAP" | **text:** "Managementul integrat al datelor din teren și blockchain cu sistemul corporativ SAP."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Integrare SAP și Blockchain
- **integrationDesc:** Sistemul funcționează integrat cu SAP. Datele de producție și trasabilitate colectate sunt transferate în rețeaua blockchain și stocate permanent într-un format imutabil, asigurând transparența și securitatea datelor.
- **integrationList:**
  - **bold:** "Registru Blockchain" | **text:** "Datele de umplere a sticlelor și parametrii de producție sunt scrise în mod imutabil în rețeaua blockchain."
  - **bold:** "Conexiune SAP" | **text:** "Comenzile de producție și datele master de produs sunt introduse în sistem prin SAP ERP."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Încredere absolută cu blockchain
- **resultsGrid:**
  - **title:** "Trasabilitate pe Produs" | **text:** "Parametrii de umplere pentru fiecare sticlă de oțet organic sunt înregistrați individual, stabilind trasabilitate completă."
  - **title:** "Securitatea Datelor Imutabilă" | **text:** "Datele de producție sunt stocate pe blockchain, protejate 100% împotriva oricăror riscuri de manipulare."
  - **title:** "Transparență Consumator" | **text:** "Credibilitatea mărcii este sporită prin permiterea utilizatorilor finali să interogheze detaliile de umplere folosind un cod QR."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să vă transformați și procesele de producție?
- **ctaSubtitle:** Contactați-ne pentru a discuta cum putem implementa o soluție similară pentru afacerea dumneavoastră.
- **ctaPrimary:** Contactați-ne


---

### 18. Whirlpool - Sorting Barkod Kontrol
**Slug:** `whirlpool-sorting-barcode-control` | **ID:** `42` | **Sıra (Order):** `18` | **Yıl:** `2021`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `whirlpool-sorting-barcode-control`
- **Sıralama (order):** `18`
- **Yıl (year / referenceDate):** `2021`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `Barcode, Vision Systems, SAP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/Whirlpool_Corporation_Logo_(as_of_2017).svg`
  - **Ana Görsel (image):** `/resmi/Factory.jpg`
  - **Hero Görseli (heroImage):** `/resmi/Factory.jpg`
  - **Galeri Görselleri (gallery):**
  - /resmi/Factory.jpg

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Whirlpool - Sorting Barkod Kontrol
- **Sektör (sector / tagValue):** Beyaz Eşya
- **Konum (locationValue):** Manisa
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Beyaz eşya sektöründe faaliyet gösteren Whirlpool'un Manisa'daki fabrikasında hayata geçirilen projede, sorting (ayrıştırma) noktasına kamera tabanlı bir okuyucu konumlandırılarak ürünlerin kontrollü geçişi sağlanmıştır.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Kamera tabanlı ayrıştırma,
- **heroTitleLine2:** sıfır hatalı ürün geçişi.
- **heroSub:** Beyaz eşya sektöründe faaliyet gösteren Whirlpool'un Manisa'daki fabrikasında hayata geçirilen projede, sorting (ayrıştırma) noktasına kamera tabanlı bir okuyucu konumlandırılarak ürünlerin kontrollü geçişi sağlanmıştır.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Ayrıştırma noktalarında akıllı kontrol
- **contextP1:** Beyaz eşya sektöründe faaliyet gösteren Whirlpool'un Manisa'daki fabrikasında hayata geçirilen projede, sorting (ayrıştırma) noktasına kamera tabanlı bir okuyucu konumlandırılarak ürünlerin kontrollü geçişi sağlanmıştır.
- **contextP2:** Proje, hatalı veya geçişine izin verilmeyen ürünlerin otomatik olarak tespit edilip engellenmesi amacıyla gerçekleştirilmiştir.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Hatalı geçişler ve kalite riskleri
- **problemLede:** Sorting noktasında ürünlerin doğru şekilde tanınması ve geçişine izin verilmeyen (kara listedeki) ürünlerin ayrıştırılması gerekiyordu.
- **problemList:**
  - **bold:** "Manuel Ayrıştırma Riskleri" | **text:** "Ayrıştırma işlemlerinin manuel olarak yürütülmesinin getirdiği insan kaynaklı hata ve kalite riskleri."
  - **bold:** "Kara Liste Kontrolü Eksikliği" | **text:** "Hatalı veya geçişine izin verilmeyen ürünlerin hattan anlık olarak elenmesini sağlayacak otomatik bir kontrol yapısının bulunmaması."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Kamera tabanlı okuma ve kara liste filtresi
- **solutionLede:** Sorting noktasına yerleştirilen kamera tabanlı okuyucu aracılığıyla, geçiş yapan her ürünün hem görseli hem de seri numarası bilgisi sisteme gönderildi. Alınan ürün görüntüsü, ilgili ürünün seri numarasıyla eşleştirilerek kayıt altına aldı. Ürünün kara listede olması durumunda geçişi otomatik olarak engellendi. Uygulama, müşterinin mevcut sistemlerine entegre edilerek çalışır hâle getirildi.
- **steps:**
  - **no:** "01" | **title:** "Kamera ile Okuma" | **text:** "Sorting noktasından geçen ürünlerin seri numaraları kamera ile taranır."
  - **no:** "02" | **title:** "Görüntü Eşleştirme" | **text:** "Çekilen ürün görüntüsü seri numarasıyla anlık olarak eşleştirilip kaydedilir."
  - **no:** "03" | **title:** "Kara Liste Sorgulama" | **text:** "Ürün bilgileri kara liste filtresinden geçirilerek uygunluğu kontrol edilir."
  - **no:** "04" | **title:** "Otomatik Engelleme" | **text:** "Kara listedeki ürünler algılandığı anda PLC üzerinden geçişleri fiziksel olarak durdurulur."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** Görüntü işleme ve saha kontrol sistemi
- **techGrid:**
  - **tag:** "DONANIM" | **title:** "Kamera Tabanlı Okuyucu" | **text:** "Sorting noktasından geçen ürünlerin seri numaralarını yüksek doğrulukla okuyan kamera."
  - **tag:** "OTOMASYON" | **title:** "PLC Saha Akış Kontrolü" | **text:** "Ayrıştırma kapılarını, sensörleri ve geçiş kilitlerini yöneten PLC altyapısı."
  - **tag:** "YAZILIM" | **title:** "OnSuite Trace Platformu" | **text:** "Görüntü-veri eşleşmelerini kaydeden ve kara liste kararlarını yöneten merkezi yazılım."
  - **tag:** "KONTROL" | **title:** "Kara Liste Kontrolü" | **text:** "Hatalı ürünlerin geçişini önleyen ve PLC'ye durdurma emri gönderen kontrol mantığı."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** Müşteri Sistemleri Entegrasyonu
- **integrationDesc:** Uygulama, müşterinin mevcut sistemlerine entegre edilerek çalışmaktadır; seri numarasıyla eşleştirilen ürün görüntüsü ve kontrol verileri bu sistemlerle paylaşılarak geçiş kararları merkezi olarak yönetilmektedir.
- **integrationList:**
  - **bold:** "Merkezi Yönetim Entegrasyonu" | **text:** "Ayrıştırma kararları ve ürün eşleşme verileri müşterinin merkezi veri tabanıyla senkronize edilir."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Tam otomatik ve kontrollü ürün akışı
- **resultsGrid:**
  - **title:** "Kara Liste Engellemesi" | **text:** "Geçişine izin verilmeyen hatalı ürünlerin sorting noktasından ilerlemesi otomatik ve güvenilir biçimde önlenmiştir."
  - **title:** "Görüntü ve Veri Eşleme" | **text:** "Her ürünün görüntüsü seri numarasıyla otomatik eşleştirilerek geriye dönük görsel doğrulama imkanı sağlanmıştır."
  - **title:** "Manuel İş yükünün Azalması" | **text:** "Ayrıştırma kontrollerinin otomatik yapılmasıyla insan kaynaklı hatalar elenmiş ve operasyon hızlandırılmıştır."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Üretim süreçlerinizi de dönüştürmek ister misiniz?
- **ctaSubtitle:** Benzer bir çözümü işletmenize nasıl uygulayabileceğimizi konuşmak için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Whirlpool Sorting Barcode Control
- **Sector (sector / tagValue):** Home Appliances
- **Location (locationValue):** Manisa
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** In the project implemented at Whirlpool's home appliances factory in Manisa, a camera-based reader was positioned at the sorting point to ensure controlled transit of products.

##### Hero Section (EN)
- **heroTitleLine1:** Camera-based sorting,
- **heroTitleLine2:** zero-defect product routing.
- **heroSub:** In the project implemented at Whirlpool's home appliances factory in Manisa, a camera-based reader was positioned at the sorting point to ensure controlled transit of products.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Smart control at sorting points
- **contextP1:** In the project implemented at Whirlpool's home appliances factory in Manisa, a camera-based reader was positioned at the sorting point to ensure controlled transit of products.
- **contextP2:** The project was carried out in order to automatically detect and block faulty or unauthorized products.

##### Problem / Challenge (EN)
- **problemEyebrow:** Needs / Problems
- **problemTitle:** Incorrect routing and quality risks
- **problemLede:** At the sorting point, products had to be recognized correctly and those that were not allowed to pass (blacklisted) had to be sorted.
- **problemList:**
  - **bold:** "Manual Sorting Risks" | **text:** "Human-caused errors and quality risks associated with running sorting operations manually."
  - **bold:** "Lack of Blacklist Control" | **text:** "Lack of an automatic control structure to instantly screen out faulty or unauthorized products from the line."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Camera-based reading and blacklist filter
- **solutionLede:** Through the camera-based reader placed at the sorting point, both the image and the serial number info of each passing product were sent to the system. The captured product image was matched with the product's serial number and recorded. If the product was blacklisted, its passage was automatically blocked. The application was made operational by integrating it into the customer's existing systems.
- **steps:**
  - **no:** "01" | **title:** "Camera-Based Reading" | **text:** "Serial numbers of products passing through the sorting point are scanned via camera."
  - **no:** "02" | **title:** "Image Matching" | **text:** "The captured product image is instantly matched with the serial number and recorded."
  - **no:** "03" | **title:** "Blacklist Query" | **text:** "Product info is passed through the blacklist filter to check its compliance."
  - **no:** "04" | **title:** "Automatic Blocking" | **text:** "When blacklisted products are detected, their passage is physically stopped via PLC."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** Image processing and field control system
- **techGrid:**
  - **tag:** "HARDWARE" | **title:** "Camera-Based Reader" | **text:** "Camera that reads serial numbers of products passing through the sorting point with high accuracy."
  - **tag:** "AUTOMATION" | **title:** "PLC Field Flow Control" | **text:** "PLC infrastructure managing sorting gates, sensors, and transit locks."
  - **tag:** "SOFTWARE" | **title:** "OnSuite Trace Platform" | **text:** "Central software recording image-data matches and managing blacklist decisions."
  - **tag:** "CONTROL" | **title:** "Blacklist Verification" | **text:** "Control logic preventing the passage of faulty products and sending stop commands to the PLC."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** Customer Systems Integration
- **integrationDesc:** The application works integrated with the customer's existing systems; product images and control data matched with serial numbers are shared with these systems, allowing transit decisions to be managed centrally.
- **integrationList:**
  - **bold:** "Central Management Integration" | **text:** "Sorting decisions and product matching data are synchronized with the customer's central database."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Fully automated and controlled product flow
- **resultsGrid:**
  - **title:** "Blacklist Blocking" | **text:** "The advancement of unauthorized or faulty products past the sorting point is automatically and reliably prevented."
  - **title:** "Image & Data Pairing" | **text:** "Each product's image is automatically paired with its serial number, enabling retrospective visual verification."
  - **title:** "Reduced Manual Workload" | **text:** "Automating sorting controls eliminated human errors and accelerated the operation."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Want to transform your production processes too?
- **ctaSubtitle:** Contact us to discuss how we can implement a similar solution for your business.
- **ctaPrimary:** Get in Touch

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Whirlpool - Control coduri de bare pe linia de sortare
- **Sector (sector / tagValue):** Electrocasnice
- **Locație (locationValue):** Manisa
- **Domeniu de Aplicare (scopeVal):** Software și Integrare
- **An (year):** An
- **Descriere Scurtă (description):** În cadrul proiectului implementat la fabrica de electrocasnice Whirlpool din Manisa, s-a poziționat un cititor bazat pe cameră la punctul de sortare pentru a asigura tranzitul controlat al produselor.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Sortare bazată pe cameră,
- **heroTitleLine2:** rutare de produse cu zero defecte.
- **heroSub:** În cadrul proiectului implementat la fabrica de electrocasnice Whirlpool din Manisa, s-a poziționat un cititor bazat pe cameră la punctul de sortare pentru a asigura tranzitul controlat al produselor.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Control inteligent la punctele de sortare
- **contextP1:** În cadrul proiectului implementat la fabrica de electrocasnice Whirlpool din Manisa, s-a poziționat un cititor bazat pe cameră la punctul de sortare pentru a asigura tranzitul controlat al produselor.
- **contextP2:** Proiectul a fost realizat pentru a detecta și bloca automat produsele defecte sau neautorizate.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoie / Problemă
- **problemTitle:** Rutare incorectă și riscuri de calitate
- **problemLede:** La punctul de sortare, produsele trebuiau recunoscute corect, iar cele care nu aveau voie să treacă (pe lista neagră) trebuiau sortate.
- **problemList:**
  - **bold:** "Riscuri de Sortare Manuală" | **text:** "Erori cauzate de om și riscuri de calitate asociate cu desfășurarea manuală a operațiunilor de sortare."
  - **bold:** "Lipsa Controlului Listei Negre" | **text:** "Lipsa unei structuri de control automat pentru a selecta instantaneu produsele defecte sau neautorizate de pe linie."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Citire bazată pe cameră și filtru de listă neagră
- **solutionLede:** Prin cititorul bazat pe cameră plasat la punctul de sortare, atât imaginea, cât și informațiile despre numărul de serie al fiecărui produs care trece au fost trimise la sistem. Imaginea produsului capturată a fost potrivită cu numărul de serie al produsului și înregistrată. Dacă produsul era pe lista neagră, trecerea sa a fost blocată automat. Aplicația a fost pusă în funcțiune prin integrarea ei în sistemele existente ale clientului.
- **steps:**
  - **no:** "01" | **title:** "Citire pe Cameră" | **text:** "Numerele de serie ale produselor care trec prin punctul de sortare sunt scanate prin cameră."
  - **no:** "02" | **title:** "Potrivire Imagine" | **text:** "Imaginea produsului capturată este potrivită instantaneu cu numărul de serie și înregistrată."
  - **no:** "03" | **title:** "Interogare Listă Neagră" | **text:** "Informațiile despre produs sunt trecute prin filtrul listei negre pentru a verifica conformitatea acestuia."
  - **no:** "04" | **title:** "Blocare Automată" | **text:** "Când sunt detectate produse de pe lista neagră, trecerea lor este oprită fizic prin PLC."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipament Utilizat
- **techTitle:** Procesarea imaginii și sistemul de control în teren
- **techGrid:**
  - **tag:** "HARDWARE" | **title:** "Cititor bazat pe Cameră" | **text:** "Cameră care citește cu mare precizie numerele de serie ale produselor care trec prin punctul de sortare."
  - **tag:** "AUTOMATIZARE" | **title:** "Control Flux Câmp PLC" | **text:** "Infrastructură PLC care gestionează porțile de sortare, senzorii și blocajele de tranzit."
  - **tag:** "SOFTWARE" | **title:** "Platforma OnSuite Trace" | **text:** "Software central care înregistrează potrivirile imagine-date și gestionează deciziile privind lista neagră."
  - **tag:** "CONTROL" | **title:** "Verificare Listă Neagră" | **text:** "Logică de control care previne trecerea produselor defecte și trimite comenzi de oprire către PLC."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Integrarea Sistemelor Clientului
- **integrationDesc:** Aplicația funcționează integrată cu sistemele existente ale clientului; imaginile produselor și datele de control potrivite cu numerele de serie sunt partajate cu aceste sisteme, permițând gestionarea centralizată a deciziilor de tranzit.
- **integrationList:**
  - **bold:** "Integrare Management Centralizat" | **text:** "Deciziile de sortare și datele de potrivire a produselor sunt sincronizate cu baza de date centrală a clientului."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Flux de produse complet automatizat și controlat
- **resultsGrid:**
  - **title:** "Blocarea Listei Negre" | **text:** "Avansarea produselor neautorizate sau defecte dincolo de punctul de sortare este prevenită automat și în mod fiabil."
  - **title:** "Asociere Imagine și Date" | **text:** "Imaginea fiecărui produs este asociată automat cu numărul său de serie, permițând verificarea vizuală retrospectivă."
  - **title:** "Volum de Muncă Manual Redus" | **text:** "Automatizarea controalelor de sortare a eliminat erorile umane și a accelerat operațiunea."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să vă transformați și procesele de producție?
- **ctaSubtitle:** Contactați-ne pentru a discuta cum putem implementa o soluție similară pentru afacerea dumneavoastră.
- **ctaPrimary:** Contactați-ne


---

### 19. Vestel - Otomatik Etiketleme ve Doğrulama
**Slug:** `vestel-automatic-labeling-verification` | **ID:** `40` | **Sıra (Order):** `19` | **Yıl:** `2021`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `vestel-automatic-labeling-verification`
- **Sıralama (order):** `19`
- **Yıl (year / referenceDate):** `2021`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `Barcode, Vision Systems, ERP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/Vestel_logo.svg`
  - **Ana Görsel (image):** `/images/companies/Vestel/fdc68a6b-f8e2-4207-b103-edde2555b5c4.jpeg`
  - **Hero Görseli (heroImage):** `/images/companies/Vestel/fdc68a6b-f8e2-4207-b103-edde2555b5c4.jpeg`
  - **Galeri Görselleri (gallery):**
  - /images/companies/Vestel/fdc68a6b-f8e2-4207-b103-edde2555b5c4.jpeg
  - /images/companies/Vestel/msb-insaat-vestel.jpg

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Vestel - Otomatik Etiketleme ve Doğrulama
- **Sektör (sector / tagValue):** Beyaz Eşya
- **Konum (locationValue):** Manisa
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Vestel'in Manisa'daki çamaşır makinesi fabrikasında hayata geçirilen projede, hattan gelen ürünlerin otomatik olarak etiketlenmesi ve doğrulanması sağlanmıştır.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Hassas etiketleme,
- **heroTitleLine2:** sıfır hatalı sevkiyat.
- **heroSub:** Vestel'in Manisa'daki çamaşır makinesi fabrikasında hayata geçirilen projede, hattan gelen ürünlerin otomatik olarak etiketlenmesi ve doğrulanması sağlanmıştır.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Çamaşır makinesi hattında etiket güvenliği
- **contextP1:** Vestel'in Manisa'daki çamaşır makinesi fabrikasında hayata geçirilen projede, hattan gelen ürünlerin otomatik olarak etiketlenmesi ve doğrulanması sağlanmıştır.
- **contextP2:** Proje, doğru ürüne doğru müşteri etiketinin basılmasını güvence altına almak amacıyla gerçekleştirilmiştir.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Yanlış etiketleme ve sevkiyat riskleri
- **problemLede:** Hattan gelen her ürüne, ürün tipine uygun müşteri etiketinin doğru biçimde basılması ve basılan etiketin ürünle eşleştiğinin doğrulanması gerekiyordu.
- **problemList:**
  - **bold:** "Manuel Seçim Hataları" | **text:** "Etiket seçimi ve uygulamasının manuel olarak yürütülmesinden kaynaklanan yanlış etiket basım riskleri."
  - **bold:** "Hatalı Sevkiyat Riski" | **text:** "Yanlış etiketlenen ürünlerin kalite kontrol süreçlerinden kaçarak hatalı sevk edilmesi ihtimali."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Barkod okumalı otomatik aplikasyon
- **solutionLede:** Hattan gelen ürünün barkodu, barkod okuyucu ile okundu. Okunan ürüne göre palet aplikatöründe ilgili iş (job) otomatik olarak seçildi ve ürüne uygun müşteri barkodu basıldı. Basılan etiket ürünle eşleştirilerek doğrulandı. Uygulama, müşterinin mevcut sistemlerine entegre edilerek çalışır hâle getirildi.
- **steps:**
  - **no:** "01" | **title:** "Ürün Okuma" | **text:** "Hattan gelen çamaşır makinesinin barkodu otomatik okuyucu ile taranır."
  - **no:** "02" | **title:** "İş Seçimi" | **text:** "Okunan ürüne göre etiketleme işi (job) aplikatörde otomatik seçilir."
  - **no:** "03" | **title:** "Otomatik Etiketleme" | **text:** "Palet aplikatörü, ürüne özel müşteri barkod etiketini basar."
  - **no:** "04" | **title:** "Eşleştirme Doğrulama" | **text:** "Basılan etiket ürün barkodu ile eşleştirilerek entegre sistemlerde doğrulanır."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** Etiketleme ve otomasyon altyapısı
- **techGrid:**
  - **tag:** "ETİKETLEME" | **title:** "Palet Aplikatörü" | **text:** "Ürün tiplerine özel etiketlerin otomatik basımını ve yapıştırılmasını sağlayan aplikatör."
  - **tag:** "OTOMASYON" | **title:** "PLC Saha Yönetimi" | **text:** "Hattın mekanik ve lojik akışını yöneten, aplikatör tetiklemesini kontrol eden PLC."
  - **tag:** "DONANIM" | **title:** "Barkod Okuyucu" | **text:** "Hattan gelen çamaşır makinelerinin barkodlarını anlık okuyan endüstriyel tarayıcı."
  - **tag:** "YAZILIM" | **title:** "Entegrasyon Katmanı" | **text:** "Mevcut fabrika otomasyon ve veri yönetim sistemleri ile çift yönlü entegrasyon."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** Müşteri Sistem Entegrasyonu
- **integrationDesc:** Uygulama, müşterinin mevcut sistemlerine entegre edilerek çalışmaktadır; ürün bilgisi ve etiketleme/doğrulama verileri bu sistemlerle paylaşılarak süreç merkezi olarak yönetilmektedir.
- **integrationList:**
  - **bold:** "Veri Paylaşımı" | **text:** "Eşleştirme ve doğrulama sonuçları merkezi sistemlere anlık iletilerek raporlanır."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Hatasız etiketleme ve verimli akış
- **resultsGrid:**
  - **title:** "Yanlış Etiket Önleme" | **text:** "Müşteri etiketlerinin otomatik seçimi ve eşleştirilmesiyle hatalı etiket basımı sıfırlanmıştır."
  - **title:** "Operasyonel Doğruluk" | **text:** "Manuel kontrollerin kaldırılmasıyla etiket doğruluk yüzdesi en üst düzeye çıkarılmıştır."
  - **title:** "Süreç Hızlandırma" | **text:** "Otomatik palet aplikatör entegrasyonu sayesinde hat duruş süreleri en aza indirilmiştir."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Üretim süreçlerinizi de dönüştürmek ister misiniz?
- **ctaSubtitle:** Benzer bir çözümü işletmenize nasıl uygulayabileceğimizi konuşmak için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Vestel Automatic Labeling Verification
- **Sector (sector / tagValue):** Home Appliances
- **Location (locationValue):** Manisa
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** In the project implemented at Vestel's washing machine factory in Manisa, automatic labeling and verification of products coming from the line were ensured.

##### Hero Section (EN)
- **heroTitleLine1:** Precision labeling,
- **heroTitleLine2:** zero shipping errors.
- **heroSub:** In the project implemented at Vestel's washing machine factory in Manisa, automatic labeling and verification of products coming from the line were ensured.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Label security in the washing machine line
- **contextP1:** In the project implemented at Vestel's washing machine factory in Manisa, automatic labeling and verification of products coming from the line were ensured.
- **contextP2:** The project was carried out to guarantee that the correct customer label is applied to the correct product.

##### Problem / Challenge (EN)
- **problemEyebrow:** Needs / Problems
- **problemTitle:** Incorrect labeling and shipping risks
- **problemLede:** For each product coming from the line, the customer label matching the product type had to be printed correctly and verified that the printed label matched the product.
- **problemList:**
  - **bold:** "Manual Selection Errors" | **text:** "Risks of incorrect label printing resulting from selecting and applying labels manually."
  - **bold:** "Faulty Shipping Risk" | **text:** "The possibility of incorrectly labeled products bypassing quality control processes and being shipped in error."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Barcode-read automatic application
- **solutionLede:** The barcode of the product coming from the line was read by a barcode reader. According to the read product, the relevant job was automatically selected in the pallet applicator and the customer barcode suitable for the product was printed. The printed label was matched with the product and verified. The application was made operational by integrating it into the customer's existing systems.
- **steps:**
  - **no:** "01" | **title:** "Product Reading" | **text:** "The barcode of the washing machine coming from the line is scanned via automatic reader."
  - **no:** "02" | **title:** "Job Selection" | **text:** "According to the read product, the labeling job is automatically selected in the applicator."
  - **no:** "03" | **title:** "Automatic Labeling" | **text:** "The pallet applicator prints the customer barcode label custom to the product."
  - **no:** "04" | **title:** "Match Verification" | **text:** "The printed label is matched with the product barcode and verified in integrated systems."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** Labeling and automation infrastructure
- **techGrid:**
  - **tag:** "LABELING" | **title:** "Palet Applicator" | **text:** "Applicator enabling automatic printing and application of labels custom to product types."
  - **tag:** "AUTOMATION" | **title:** "PLC Field Management" | **text:** "PLC managing the mechanical and logical flow of the line, controlling applicator triggering."
  - **tag:** "HARDWARE" | **title:** "Barcode Reader" | **text:** "Industrial scanner reading barcodes of washing machines coming from the line instantly."
  - **tag:** "SOFTWARE" | **title:** "Integration Layer" | **text:** "Bi-directional integration with existing factory automation and data management systems."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** Customer System Integration
- **integrationDesc:** The application works integrated with the customer's existing systems; product info and labeling/verification data are shared with these systems, allowing the process to be managed centrally.
- **integrationList:**
  - **bold:** "Data Sharing" | **text:** "Matching and verification results are instantly transmitted to central systems and reported."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Error-free labeling and efficient flow
- **resultsGrid:**
  - **title:** "Incorrect Label Prevention" | **text:** "Incorrect label printing is eliminated by automatically selecting and matching customer labels."
  - **title:** "Operational Accuracy" | **text:** "Label accuracy percentage is maximized by eliminating manual control points."
  - **title:** "Process Acceleration" | **text:** "Line downtime is minimized thanks to the automatic pallet applicator integration."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Want to transform your production processes too?
- **ctaSubtitle:** Contact us to discuss how we can implement a similar solution for your business.
- **ctaPrimary:** Get in Touch

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Vestel - Etichetare automata si verificare
- **Sector (sector / tagValue):** Electrocasnice
- **Locație (locationValue):** Manisa
- **Domeniu de Aplicare (scopeVal):** Software și Integrare
- **An (year):** An
- **Descriere Scurtă (description):** În cadrul proiectului implementat la fabrica de mașini de spălat rufe Vestel din Manisa, s-a asigurat etichetarea și verificarea automată a produselor provenite de pe linie.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Etichetare de precizie,
- **heroTitleLine2:** zero erori de expediere.
- **heroSub:** În cadrul proiectului implementat la fabrica de mașini de spălat rufe Vestel din Manisa, s-a asigurat etichetarea și verificarea automată a produselor provenite de pe linie.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Securitatea etichetelor în linia mașinilor de spălat
- **contextP1:** În cadrul proiectului implementat la fabrica de mașini de spălat rufe Vestel din Manisa, s-a asigurat etichetarea și verificarea automată a produselor provenite de pe linie.
- **contextP2:** Proiectul a fost realizat pentru a garanta că eticheta corectă a clientului este aplicată pe produsul corect.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoie / Problemă
- **problemTitle:** Etichetare incorectă și riscuri de expediere
- **problemLede:** Pentru fiecare produs provenit de pe linie, eticheta clientului corespunzătoare tipului de produs trebuia imprimată corect și verificată potrivirea etichetei cu produsul.
- **problemList:**
  - **bold:** "Erori de Selectare Manuală" | **text:** "Riscuri de imprimare incorectă a etichetelor cauzate de selectarea și aplicarea manuală a etichetelor."
  - **bold:** "Risc de Expediere Defectuoasă" | **text:** "Posibilitatea ca produsele etichetate incorect să ocolească procesele de control al calității și să fie expediate din greșeală."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Aplicare automată pe bază de cod de bare
- **solutionLede:** Codul de bare al produsului venit de pe linie a fost citit de un cititor de coduri de bare. În funcție de produsul citit, lucrarea corespunzătoare a fost selectată automat în aplicatorul de palet și s-a imprimat codul de bare al clientului corespunzător produsului. Eticheta imprimată a fost potrivită cu produsul și verificată. Aplicația a fost pusă în funcțiune prin integrarea ei în sistemele existente ale clientului.
- **steps:**
  - **no:** "01" | **title:** "Citire Produs" | **text:** "Codul de bare al mașinii de spălat care vine de pe linie este scanat prin cititor automat."
  - **no:** "02" | **title:** "Selectare Lucrare" | **text:** "În funcție de produsul citit, lucrarea de etichetare este selectată automat în aplicator."
  - **no:** "03" | **title:** "Etichetare Automată" | **text:** "Aplicatorul de palet imprimă eticheta cu cod de bare personalizată pentru produs."
  - **no:** "04" | **title:** "Verificare Potrivire" | **text:** "Eticheta imprimată este potrivită cu codul de bare al produsului și verificată în sisteme integrate."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipament Utilizat
- **techTitle:** Infrastructură de etichetare și automatizare
- **techGrid:**
  - **tag:** "ETICHETARE" | **title:** "Aplicator Palet" | **text:** "Aplicator care permite imprimarea și aplicarea automată a etichetelor personalizate pe tipuri de produse."
  - **tag:** "AUTOMATIZARE" | **title:** "Management Câmp PLC" | **text:** "PLC care gestionează fluxul mecanic și logic al liniei, controlând declanșarea aplicatorului."
  - **tag:** "HARDWARE" | **title:** "Cititor Cod de Bare" | **text:** "Scanner industrial care citește instantaneu codurile de bare ale mașinilor de spălat de pe linie."
  - **tag:** "SOFTWARE" | **title:** "Strat de Integrare" | **text:** "Integrare bidirecțională cu sistemele de automatizare și management al datelor din fabrică."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Integrarea Sistemelor Clientului
- **integrationDesc:** Aplicația funcționează integrată cu sistemele existente ale clientului; informațiile despre produs și datele de etichetare/verificare sunt partajate cu aceste sisteme, permițând gestionarea centralizată a procesului.
- **integrationList:**
  - **bold:** "Partajare Date" | **text:** "Rezultatele potrivirii și verificării sunt transmise instantaneu către sistemele centrale și raportate."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Etichetare fără erori și flux eficient
- **resultsGrid:**
  - **title:** "Prevenirea Etichetării Incorecte" | **text:** "Imprimarea incorectă a etichetelor este eliminată prin selectarea și potrivirea automată a etichetelor clienților."
  - **title:** "Acuratețe Operațională" | **text:** "Procentul de acuratețe a etichetării este maximizat prin eliminarea punctelor de control manual."
  - **title:** "Accelerarea Procesului" | **text:** "Timpul de oprire a liniei este minimizat datorită integrării aplicatorului automat de palet."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să vă transformați și procesele de producție?
- **ctaSubtitle:** Contactați-ne pentru a discuta cum putem implementa o soluție similară pentru afacerea dumneavoastră.
- **ctaPrimary:** Contactați-ne


---

### 20. Mey Diageo - Track&Trace Projesi
**Slug:** `mey-diageo-tracking-and-localization-project` | **ID:** `29` | **Sıra (Order):** `20` | **Yıl:** `2021`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `mey-diageo-tracking-and-localization-project`
- **Sıralama (order):** `20`
- **Yıl (year / referenceDate):** `2021`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `RFID, Barcode, ERP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/mey-diageo.svg`
  - **Ana Görsel (image):** `/images/companies/MeyDiego/original-1711372140-d0487a0a-bd81-48cb-aa7b-78ff087fad3d.webp`
  - **Hero Görseli (heroImage):** `/images/companies/MeyDiego/original-1711372140-d0487a0a-bd81-48cb-aa7b-78ff087fad3d.webp`
  - **Galeri Görselleri (gallery):**
  - /images/companies/MeyDiego/original-1711372140-d0487a0a-bd81-48cb-aa7b-78ff087fad3d.webp

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Mey Diageo - Track&Trace Projesi
- **Sektör (sector / tagValue):** Gıda & İçecek
- **Konum (locationValue):** Çeşitli Fabrikalar
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Mey Diageo takip ve konumlandırma sistemi yenileme projesi kapsamında sağlam, kullanıcı dostu ve esnek bir izlenebilirlik sistemi başarıyla hayata geçirildi. Proje, kutudan palete izlenebilirliğin etkinleştirilmesini hedefledi. SICK marka barkod okuyucular kullanılarak hattaki üretimden gelen kutuların barkodları taranmakta ve karşılık gelen palet barkodlarıyla eşleştirilmektedir. Sistem SAP ile her iki yönde tam entegre olup ağ kesintileri gibi SAP erişiminin kısıtlı olduğu durumlarda çevrimdışı çalışarak kesintisiz üretime devam etmektedir. Şu anda 6 fabrika ve 12 üretim hattında çalışan uygulama, İstanbul'daki genel merkezden izlenebilmekte; üretime ilişkin raporlar da merkezi olarak oluşturulmaktadır.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Koliden palete kesintisiz takip,
- **heroTitleLine2:** çevrimdışı çalışabilen güvenli altyapı.
- **heroSub:** Mey Diageo'nun tüm fabrikalarında koli–palet izlenebilirliğini sağlamak amacıyla, mevcut izlenebilirlik sisteminin yenilenmesi kapsamında sağlam, kullanıcı dostu ve esnek bir izlenebilirlik sistemi hayata geçirilmiştir.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Çoklu fabrika yapısında veri bütünlüğü
- **contextP1:** Mey Diageo'nun tüm fabrikalarında koli–palet izlenebilirliğini sağlamak amacıyla, mevcut izlenebilirlik sisteminin yenilenmesi kapsamında sağlam, kullanıcı dostu ve esnek bir izlenebilirlik sistemi hayata geçirilmiştir.
- **contextP2:** Proje, üretimde koliden palete kadar uzanan izlenebilirliğin tüm fabrikalar genelinde etkinleştirilmesini hedeflemiştir.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Ağ kesintileri ve sistem sürekliliği
- **problemLede:** Mevcut izlenebilirlik sisteminin yenilenmesi; koliden palete kadar izlenebilirliğin güvenilir biçimde sağlanması gerekiyordu. Ayrıca ağ kesintileri gibi durumlarda ERP erişiminin kısıtlanması, üretimin durmaması için kesintisiz çalışabilen esnek bir yapıya ihtiyaç doğuruyordu.
- **problemList:**
  - **bold:** "ERP Bağlantı Riskleri" | **text:** "Merkezi ERP sistemiyle bağlantının kesildiği durumlarda üretimin durma riskiyle karşı karşıya kalması."
  - **bold:** "Merkezi Raporlama Eksikliği" | **text:** "Çoklu fabrika yapısında üretilen koli ve paletlerin merkezi olarak anlık izlenememesi."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Çevrimdışı (offline) çalışabilen çift yönlü eşleştirme
- **solutionLede:** Koliden palete izlenebilirliği etkinleştirmek amacıyla, hattaki üretimden gelen kolilerin barkodları barkod okuyucular ile taranmakta ve karşılık gelen palet barkodlarıyla eşleştirilmektedir. Sistem SAP ile her iki yönde tam entegre olup, ağ kesintileri gibi SAP erişiminin kısıtlı olduğu durumlarda çevrimdışı çalışarak kesintisiz üretime devam etmektedir. Uygulama, Mey Diageo'nun tüm fabrikalarında ve üretim hatlarında çalışmakta; İstanbul'daki genel merkezden izlenebilmekte ve üretime ilişkin raporlar merkezi olarak oluşturulmaktadır.
- **steps:**
  - **no:** "01" | **title:** "Koli Taraması" | **text:** "Üretim hattından gelen kolilerin barkodları endüstriyel okuyucularla taranır."
  - **no:** "02" | **title:** "Palet Eşleştirme" | **text:** "Taranan koli bilgileri karşılık gelen palet kimliği ile eşleştirilir."
  - **no:** "03" | **title:** "Çevrimdışı Çalışma" | **text:** "Ağ kesintisi oluşursa sistem otomatik olarak lokal hafızada çalışmaya devam eder."
  - **no:** "04" | **title:** "SAP Senkronizasyonu" | **text:** "Bağlantı geldiğinde biriken tüm veriler otomatik olarak SAP sistemine aktarılır."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** Kesintisiz üretim ve etiketleme mimarisi
- **techGrid:**
  - **tag:** "ARAYÜZ" | **title:** "C# SCADA Uygulaması" | **text:** "Koli-palet eşleştirmelerini, etiketleme akışını ve SAP entegrasyonunu yöneten arayüz."
  - **tag:** "ETİKETLEME" | **title:** "Koli ve Palet Aplikatörleri" | **text:** "Koli ve palet etiketlerini otomatik olarak basan ve uygulayan endüstriyel makineler."
  - **tag:** "DONANIM" | **title:** "Endüstriyel Barkod Okuyucular" | **text:** "Koli ve palet barkodlarını yüksek hızda ve doğrulukla tarayan saha okuyucuları."
  - **tag:** "YAZILIM" | **title:** "OnSuite Trace Platformu" | **text:** "Çevrimdışı çalışabilme ve merkezi raporlama yeteneklerine sahip izlenebilirlik yazılımı."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** SAP ERP ve Çevrimdışı Senkronizasyon
- **integrationDesc:** Sistem SAP ile çift yönlü tam entegre çalışmaktadır; üretim ve izlenebilirlik verileri SAP ile her iki yönde paylaşılmaktadır. Ağ kesintileri gibi SAP erişiminin kısıtlandığı durumlarda uygulama çevrimdışı çalışmaya geçerek üretimi kesintiye uğratmadan sürdürmekte, bağlantı geri geldiğinde verileri senkronize etmektedir.
- **integrationList:**
  - **bold:** "Çevrimdışı Veri Tamponu" | **text:** "Lokal veritabanında saklanan kesinti dönemi verileri, bağlantı kurulduğunda SAP'ye aktarılır."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Kesintisiz üretim ve merkezi görünürlük
- **resultsGrid:**
  - **title:** "Uçtan Uca İzlenebilirlik" | **text:** "Koliden palete kadar tüm paketleme hiyerarşisi otomatik olarak kayıt altına alınmıştır."
  - **title:** "Çevrimdışı Güvenilirlik" | **text:** "Ağ veya SAP kesintilerinde bile fabrika üretimi durmamakta, veri bütünlüğü korunmaktadır."
  - **title:** "Merkezi Raporlama" | **text:** "Tüm fabrikalardaki izlenebilirlik verileri İstanbul'daki genel merkezden anlık olarak izlenebilmektedir."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Üretim süreçlerinizi de dönüştürmek ister misiniz?
- **ctaSubtitle:** Benzer bir çözümü işletmenize nasıl uygulayabileceğimizi konuşmak için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Mey Diageo Tracking And Localization Project
- **Sector (sector / tagValue):** Food & Beverage
- **Location (locationValue):** Various Factories
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** As part of the Mey Diageo tracking and localization system renovation project, a robust, user-friendly, and flexible traceability system was successfully implemented. The project aimed to enable traceability from box to pallet. Using SICK brand barcode readers, the barcodes of boxes produced on the line are scanned and matched with the corresponding pallet barcodes. The system is fully integrated with SAP in both directions and is capable of operating offline in cases where SAP access is limited, such as during network outages, ensuring continuous production. Currently operating in 6 factories and 12 production lines, the application can be monitored from the central headquarters in Istanbul, where production-related reports are also generated centrally.

##### Hero Section (EN)
- **heroTitleLine1:** Seamless tracking from case to pallet,
- **heroTitleLine2:** secure infrastructure with offline support.
- **heroSub:** In order to ensure case-pallet traceability in all of Mey Diageo's factories, a robust, user-friendly and flexible traceability system has been implemented as part of renewing the existing system.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Data integrity in multi-factory structures
- **contextP1:** In order to ensure case-pallet traceability in all of Mey Diageo's factories, a robust, user-friendly and flexible traceability system has been implemented as part of renewing the existing system.
- **contextP2:** The project aimed to enable traceability extending from case to pallet across all factories.

##### Problem / Challenge (EN)
- **problemEyebrow:** Needs / Problems
- **problemTitle:** Network interruptions and system continuity
- **problemLede:** Renewal of the existing traceability system was required to reliably ensure traceability from case to pallet. In addition, restricted ERP access during network drops required a flexible, continuously operating structure to prevent production downtime.
- **problemList:**
  - **bold:** "ERP Connection Risks" | **text:** "The risk of production stopping in cases where connection with the central ERP system is lost."
  - **bold:** "Lack of Central Reporting" | **text:** "Inability to centrally monitor cases and pallets produced in a multi-factory structure in real time."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Bi-directional matching with offline support
- **solutionLede:** To enable case-to-pallet traceability, barcodes of cases from production lines are scanned and paired with matching pallet barcodes. Fully integrated with SAP, the system operates offline during network drops, ensuring uninterrupted production. The application runs in all Mey Diageo factories and production lines, monitored from headquarters in Istanbul, with production reports generated centrally.
- **steps:**
  - **no:** "01" | **title:** "Case Scanning" | **text:** "Barcodes of cases coming from the production line are scanned via industrial readers."
  - **no:** "02" | **title:** "Pallet Matching" | **text:** "Scanned case info is matched with the corresponding pallet ID."
  - **no:** "03" | **title:** "Offline Operation" | **text:** "If a network drop occurs, the system automatically continues operating in local memory."
  - **no:** "04" | **title:** "SAP Sync" | **text:** "When connection is restored, all accumulated data is automatically pushed to SAP."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** Continuous production and labeling architecture
- **techGrid:**
  - **tag:** "INTERFACE" | **title:** "C# SCADA Application" | **text:** "Interface managing case-pallet matching, labeling flow, and SAP integration."
  - **tag:** "LABELING" | **title:** "Case and Pallet Applicators" | **text:** "Industrial machines automatically printing and applying case and pallet labels."
  - **tag:** "HARDWARE" | **title:** "Industrial Barcode Readers" | **text:** "Field readers scanning case and pallet barcodes with high speed and accuracy."
  - **tag:** "SOFTWARE" | **title:** "OnSuite Trace Platform" | **text:** "Traceability software featuring offline capability and central reporting."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** SAP ERP and Offline Synchronization
- **integrationDesc:** The system operates fully integrated with SAP bi-directionally. During network drops, the application switches to offline mode to keep production running without interruption, and syncs data once the connection is restored.
- **integrationList:**
  - **bold:** "Offline Data Buffer" | **text:** "Interruption period data stored in the local database is transferred to SAP when connection is established."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Continuous production and central visibility
- **resultsGrid:**
  - **title:** "End-to-End Traceability" | **text:** "The entire packaging hierarchy from case to pallet is automatically recorded."
  - **title:** "Offline Reliability" | **text:** "Factory production does not stop even during network or SAP drops, preserving data integrity."
  - **title:** "Central Reporting" | **text:** "Traceability data from all factories can be monitored in real time from headquarters in Istanbul."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Want to transform your production processes too?
- **ctaSubtitle:** Contact us to discuss how we can implement a similar solution for your business.
- **ctaPrimary:** Get in Touch

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Mey Diageo - Proiect de urmarire si localizare
- **Sector (sector / tagValue):** Alimente & Băuturi
- **Locație (locationValue):** Diverse Fabrici
- **Domeniu de Aplicare (scopeVal):** Software și Integrare
- **An (year):** An
- **Descriere Scurtă (description):** Ca parte a proiectului de renovare a sistemului de urmărire și localizare Mey Diageo, a fost implementat cu succes un sistem de trasabilitate solid, ușor de utilizat și flexibil. Proiectul a avut ca scop activarea trasabilității de la cutie la palet. Folosind cititoare de coduri de bare marca SICK, codurile de bare ale cutiilor produse pe linie sunt scanate și potrivite cu codurile de bare corespunzătoare ale paleților. Sistemul este complet integrat cu SAP în ambele direcții și este capabil să funcționeze offline în cazurile în care accesul la SAP este limitat, cum ar fi în timpul întreruperilor de rețea, asigurând o producție continuă. În prezent, funcționând în 6 fabrici și 12 linii de producție, aplicația poate fi monitorizată de la sediul central din Istanbul, unde sunt generate centralizat și rapoartele legate de producție.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Urmărire fără probleme de la cutie la palet,
- **heroTitleLine2:** infrastructură securizată cu suport offline.
- **heroSub:** Pentru a asigura trasabilitatea cutie-palet în toate fabricile Mey Diageo, a fost implementat un sistem de trasabilitate robust, ușor de utilizat și flexibil ca parte a reînnoirii sistemului existent.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Integritatea datelor în structuri multi-fabrică
- **contextP1:** Pentru a asigura trasabilitatea cutie-palet în toate fabricile Mey Diageo, a fost implementat un sistem de trasabilitate robust, ușor de utilizat și flexibil ca parte a reînnoirii sistemului existent.
- **contextP2:** Proiectul a fost realizat pentru a asigura trasabilitatea extinsă de la cutie la palet în toate fabricile.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoie / Problemă
- **problemTitle:** Întreruperi de rețea și continuitatea sistemului
- **problemLede:** Reînnoirea sistemului de trasabilitate existent a fost necesară pentru a asigura trasabilitatea de la cutie la palet. În plus, accesul restricționat la ERP în timpul căderilor de rețea a necesitat o structură flexibilă, cu funcționare continuă, pentru a preveni timpii morți în producție.
- **problemList:**
  - **bold:** "Riscuri de Conexiune ERP" | **text:** "Risc de oprire a producției în cazurile în care se pierde conexiunea cu sistemul ERP central."
  - **bold:** "Lipsa Raportării Centralizate" | **text:** "Imposibilitatea de a monitoriza centralizat cutiile și paleții produși într-o structură multi-fabrică în timp real."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Potrivire bidirecțională cu suport offline
- **solutionLede:** Pentru a activa trasabilitatea cutie-palet, codurile de bare ale cutiilor din liniile de producție sunt scanate și asociate cu codurile de bare ale paleților corespunzători. Integrat cu SAP, sistemul funcționează offline în timpul căderilor de rețea, asigurând o producție neîntreruptă. Aplicația rulează în toate fabricile Mey Diageo, monitorizată de la sediul central din Istanbul, cu rapoarte generate centralizat.
- **steps:**
  - **no:** "01" | **title:** "Scanare Cutie" | **text:** "Codurile de bare ale cutiilor de pe linia de producție sunt scanate prin cititoare industriale."
  - **no:** "02" | **title:** "Potrivire Palet" | **text:** "Informațiile despre cutia scanată sunt asociate cu ID-ul paletului corespunzător."
  - **no:** "03" | **title:** "Funcționare Offline" | **text:** "Dacă apare o cădere de rețea, sistemul continuă automat să funcționeze în memoria locală."
  - **no:** "04" | **title:** "Sincronizare SAP" | **text:** "Când conexiunea este restabilită, toate datele acumulate sunt trimise automat în SAP."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipament Utilizat
- **techTitle:** Arhitectură de producție și etichetare continuă
- **techGrid:**
  - **tag:** "INTERFAȚĂ" | **title:** "Aplicație SCADA C#" | **text:** "Interfață care gestionează potrivirea cutie-palet, fluxul de etichetare și integrarea SAP."
  - **tag:** "ETICHETARE" | **title:** "Aplicatoare Cutie și Palet" | **text:** "Mașini industriale care imprimă și aplică automat etichete pe cutii și paleți."
  - **tag:** "HARDWARE" | **title:** "Cititoare Cod de Bare" | **text:** "Cititoare din teren care scanează codurile de bare ale cutiilor și paleților cu viteză și precizie mare."
  - **tag:** "SOFTWARE" | **title:** "Platforma OnSuite Trace" | **text:** "Software de trasabilitate cu capacitate offline și raportare centralizată."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** SAP ERP și Sincronizare Offline
- **integrationDesc:** Sistemul funcționează complet integrat bidirecțional cu SAP. În timpul căderilor de rețea, aplicația trece în modul offline pentru a menține producția în funcțiune fără întreruperi și sincronizează datele odată ce conexiunea este restabilită.
- **integrationList:**
  - **bold:** "Tampon Date Offline" | **text:** "Datele din perioada de întrerupere stocate în baza de date locală sunt transferate în SAP când se stabilește conexiunea."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Producție continuă și vizibilitate centralizată
- **resultsGrid:**
  - **title:** "Trasabilitate End-to-End" | **text:** "Întreaga ierarhie de ambalare de la cutie la palet este înregistrată automat."
  - **title:** "Fiabilitate Offline" | **text:** "Producția fabricii nu se oprește chiar și în timpul căderilor de rețea sau SAP, păstrând integritatea datelor."
  - **title:** "Raportare Centralizată" | **text:** "Datele de trasabilitate din toate fabricile pot fi monitorizate în timp real de la sediul central din Istanbul."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să vă transformați și procesele de producție?
- **ctaSubtitle:** Contactați-ne pentru a discuta cum putem implementa o soluție similară pentru afacerea dumneavoastră.
- **ctaPrimary:** Contactați-ne


---

### 21. Maxion İnci Çelik - RFID Kalıp Takip
**Slug:** `maxion-inci-celik-rfid-mold-tracking` | **ID:** `27` | **Sıra (Order):** `21` | **Yıl:** `2021`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `maxion-inci-celik-rfid-mold-tracking`
- **Sıralama (order):** `21`
- **Yıl (year / referenceDate):** `2021`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `RFID, Barcode, ERP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/maxion_inci.svg`
  - **Ana Görsel (image):** `/images/companies/maxion/DJI_0076_renk_1_op-scaled.webp`
  - **Hero Görseli (heroImage):** `/images/companies/maxion/DJI_0076_renk_1_op-scaled.webp`
  - **Galeri Görselleri (gallery):**
  - /images/companies/maxion/DJI_0076_renk_op-scaled.webp

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Maxion İnci Çelik - RFID Kalıp Takip
- **Sektör (sector / tagValue):** Otomotiv
- **Konum (locationValue):** Manisa
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Bu projede SICK RFID ekipmanı kullanılarak Siemens S7-1500 PLC ile entegrasyon sağlandı. Yanlış kalıp kullanımını önlemek için kalıp ve reçete eşleştirmesi etkinleştirildi. Reçete değişikliklerinde kalıp kimlikleri RFID ile okunarak sistem doğru eşleşmeyi doğruladı. Doğru eşleşme tespit edildiğinde makineye çalışma izni verildi. Kalıp ömrü RFID tabanlı sistem aracılığıyla takip edilebilmektedir.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Doğru kalıp eşleşmesi,
- **heroTitleLine2:** sıfır hatalı üretim.
- **heroSub:** Maxion İnci Çelik'in Manisa'daki jant fabrikasında hayata geçirilen projede, üretim kalıpları RFID tabanlı bir sistemle takip edilmiştir. Proje, kalıpların reçete bazında doğru şekilde eşleştirilmesini ve yanlış kalıp kullanımının önlenmesini amaçlamıştır.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Jant üretiminde kalıp kontrolü ve süreç güvenliği
- **contextP1:** Maxion İnci Çelik'in Manisa'daki jant fabrikasında hayata geçirilen projede, üretim kalıpları RFID tabanlı bir sistemle takip edilmiştir. Proje, kalıpların reçete bazında doğru şekilde eşleştirilmesini ve yanlış kalıp kullanımının önlenmesini amaçlamıştır.
- **contextP2:** Üretimde kalıp doğruluğunun sağlanması, ürün kalitesi ve hat verimliliği açısından kritik öneme sahiptir.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Yanlış kalıp kullanımı ve kalite riskleri
- **problemLede:** Jant üretiminde her reçeteye uygun kalıbın kullanıldığının güvence altına alınması gerekiyordu. Kalıp seçiminin manuel yürütülmesi, yanlış kalıp kullanımı ve buna bağlı kalite/hurda riskini beraberinde getiriyordu. Ayrıca kalıpların kullanım ömürlerinin sağlıklı biçimde izlenememesi, bakım ve planlamayı zorlaştırıyordu.
- **problemList:**
  - **bold:** "Kalıp Eşleştirme Hataları" | **text:** "Manuel kontroller nedeniyle yanlış kalıpla üretime başlanması ve hurda üretimi riski."
  - **bold:** "Kalıp Ömrü İzleme Zorluğu" | **text:** "Kalıpların çalışma sayılarının (stroke) ve bakım zamanlarının otomatik takip edilememesi."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** RFID okuma ile PLC entegre çalışma izni
- **solutionLede:** RFID ekipmanları kullanılan projede, mevcut PLC ile entegrasyon sağlanarak kalıpların reçete bazında eşleştirmeleri yapılmış ve yanlış kalıp kullanımının önüne geçilmiştir. Reçete değişimlerinde kalıp ID'leri RFID ile okunarak eşleştirmenin sağlanıp sağlanmadığı kontrol edilmiş, eşleşme sağlandığında makineye çalışma izni verilmiştir. Ayrıca kalıp ömürleri RFID tabanlı sistem üzerinden takip edilebilmektedir.
- **steps:**
  - **no:** "01" | **title:** "Reçete Girişi" | **text:** "Operatör tarafından jant üretim reçetesi PLC sisteminden seçilir."
  - **no:** "02" | **title:** "RFID Kalıp Okuma" | **text:** "Kalıp üzerindeki RFID etiket jant makinesindeki RFID okuyucu ile taranır."
  - **no:** "03" | **title:** "Lojik Doğrulama" | **text:** "PLC sistemi, okunan kalıp ID'si ile reçete gereksinimlerini karşılaştırır."
  - **no:** "04" | **title:** "Çalışma İzni" | **text:** "Eşleşme doğru olduğunda makineye çalışma izni verilir ve üretim başlar."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** Endüstriyel RFID ve PLC altyapısı
- **techGrid:**
  - **tag:** "DONANIM" | **title:** "Bor Yağına Dayanıklı RFID Etiketler" | **text:** "Zorlu üretim ortamındaki bor yağı ve kimyasallara karşı yüksek dayanıklılığa sahip RFID etiketler."
  - **tag:** "OTOMASYON" | **title:** "RFID Cihazları ve Okuyucular" | **text:** "Kalıp ID'lerini hassas şekilde okuyan ve PLC'ye aktaran RFID donanımları."
  - **tag:** "KONTROL" | **title:** "Mevcut PLC Entegrasyonu" | **text:** "Kalıp verilerini reçetelerle lojik düzeyde karşılaştıran ve kilit açan PLC sistemi."
  - **tag:** "YAZILIM" | **title:** "Kalıp Ömrü Takip Modülü" | **text:** "Kalıpların çevrim sayılarına göre ömür takibini ve bakım planlamasını yapan yazılım katmanı."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** Saha PLC ve Lojik Kilit Entegrasyonu
- **integrationDesc:** Sistem, müşterinin mevcut PLC altyapısı ile entegre çalışmaktadır. Kalıp ID'si RFID ile taranıp doğrulandıktan sonra PLC lojik kilidi açılır ve makinenin çalışmasına izin verilir.
- **integrationList:**
  - **bold:** "PLC Saha Lojik Kontrolü" | **text:** "Kalıp eşleşmesi PLC düzeyinde kilitlenerek yanlış kalıpla üretime başlanması fiziksel olarak engellenir."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Hatasız üretim ve veriye dayalı bakım
- **resultsGrid:**
  - **title:** "Sıfır Yanlış Kalıp" | **text:** "Otomatik RFID eşleştirmesi ve PLC kilidi sayesinde yanlış kalıp kullanımı tamamen önlenmiştir."
  - **title:** "Kalite ve Hurda Tasarrufu" | **text:** "Hatalı kalıp kurulumlarından kaynaklanan üretim hurdaları ve kalite sapmaları sıfırlanmıştır."
  - **title:** "Tahminleyici Bakım Altyapısı" | **text:** "Kalıp ömürlerinin ve stroke sayılarının takibiyle kalıp bakım planlaması veriye dayalı hale gelmiştir."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Üretim süreçlerinizi de dönüştürmek ister misiniz?
- **ctaSubtitle:** Benzer bir çözümü işletmenize nasıl uygulayabileceğimizi konuşmak için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Maxion Inci Celik RFID Mold Tracking
- **Sector (sector / tagValue):** Automotive
- **Location (locationValue):** Manisa
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** In this project, SICK RFID equipment was used and integrated with a Siemens S7-1500 PLC. Mold and recipe matching was enabled to prevent incorrect mold usage. During recipe changes, mold IDs were read via RFID, and the system verified correct matching. If a correct match was detected, the machine was granted permission to operate. Mold lifetime can be tracked through the RFID-based system.

##### Hero Section (EN)
- **heroTitleLine1:** Correct mold matching,
- **heroTitleLine2:** zero defect production.
- **heroSub:** In the project implemented at Maxion Inci Steel's wheel factory in Manisa, production molds were tracked with an RFID-based system. The project aimed to ensure correct matching of molds based on recipes and prevent the use of incorrect molds.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Mold control and process security in wheel production
- **contextP1:** In the project implemented at Maxion Inci Steel's wheel factory in Manisa, production molds were tracked with an RFID-based system. The project aimed to ensure correct matching of molds based on recipes and prevent the use of incorrect molds.
- **contextP2:** Ensuring mold accuracy in production is of critical importance for product quality and line efficiency.

##### Problem / Challenge (EN)
- **problemEyebrow:** Needs / Problems
- **problemTitle:** Incorrect mold usage and quality risks
- **problemLede:** In wheel production, it had to be guaranteed that the mold suitable for each recipe was used. Manual mold selection brought the risk of incorrect mold usage and related quality/scrap issues. In addition, the inability to reliably monitor the useful life of molds made maintenance and planning difficult.
- **problemList:**
  - **bold:** "Mold Matching Errors" | **text:** "The risk of starting production with the wrong mold due to manual controls, leading to scrap."
  - **bold:** "Mold Life Tracking Difficulty" | **text:** "Inability to automatically track mold stroke cycles and maintenance schedules."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** PLC integrated operation permit with RFID reading
- **solutionLede:** In the project using RFID equipment, integration with the existing PLC was provided to match molds on a recipe basis, preventing the use of incorrect molds. During recipe changes, mold IDs are read via RFID to verify matching; when matched, the machine is granted permission to operate. Mold lifetimes are also tracked through the RFID-based system.
- **steps:**
  - **no:** "01" | **title:** "Recipe Input" | **text:** "The wheel production recipe is selected from the PLC system by the operator."
  - **no:** "02" | **title:** "RFID Mold Reading" | **text:** "The RFID tag on the mold is scanned by the RFID reader on the wheel machine."
  - **no:** "03" | **title:** "Logical Verification" | **text:** "The PLC system compares the read mold ID with the recipe requirements."
  - **no:** "04" | **title:** "Operation Permit" | **text:** "When the match is correct, the machine is permitted to run and production starts."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** Industrial RFID and PLC infrastructure
- **techGrid:**
  - **tag:** "HARDWARE" | **title:** "Boron-Oil Resistant RFID Tags" | **text:** "RFID tags with high durability against boron oil and chemicals in harsh production environments."
  - **tag:** "AUTOMATION" | **title:** "RFID Devices and Readers" | **text:** "RFID hardware reading mold IDs precisely and transmitting them to the PLC."
  - **tag:** "CONTROL" | **title:** "Existing PLC Integration" | **text:** "PLC system logically comparing mold data with recipes and unlocking the machine."
  - **tag:** "SOFTWARE" | **title:** "Mold Life Tracking Module" | **text:** "Software layer tracking lifetime and planning maintenance according to mold cycle counts."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** Field PLC and Logical Lock Integration
- **integrationDesc:** The system runs integrated with the customer's existing PLC infrastructure. After the mold ID is scanned and verified via RFID, the PLC logical lock is opened, allowing the machine to run.
- **integrationList:**
  - **bold:** "PLC Field Logical Control" | **text:** "The mold match is locked at the PLC level, physically preventing starting production with the wrong mold."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Error-free production and data-driven maintenance
- **resultsGrid:**
  - **title:** "Zero Wrong Molds" | **text:** "Incorrect mold usage is completely prevented thanks to automatic RFID matching and PLC locking."
  - **title:** "Quality and Scrap Savings" | **text:** "Production scrap and quality deviations resulting from incorrect mold installations are eliminated."
  - **title:** "Predictive Maintenance" | **text:** "Mold maintenance planning has become data-driven by tracking mold lifetimes and stroke counts."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Want to transform your production processes too?
- **ctaSubtitle:** Contact us to discuss how we can implement a similar solution for your business.
- **ctaPrimary:** Get in Touch

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Maxion Inci Celik - Urmarire matrite RFID
- **Sector (sector / tagValue):** Industria auto
- **Locație (locationValue):** Manisa
- **Domeniu de Aplicare (scopeVal):** Software și Integrare
- **An (year):** An
- **Descriere Scurtă (description):** În acest proiect, au fost utilizate echipamente SICK RFID și integrate cu un PLC Siemens S7-1500. Potrivirea matrițelor și a rețetelor a fost activată pentru a preveni utilizarea incorectă a matrițelor. În timpul modificărilor rețetelor, ID-urile matrițelor au fost citite prin RFID, iar sistemul a verificat potrivirea corectă. Dacă a fost detectată o potrivire corectă, mașinii i s-a acordat permisiunea de a funcționa. Durata de viață a matrițelor poate fi urmărită prin intermediul sistemului bazat pe RFID.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Potrivirea corectă a matriței,
- **heroTitleLine2:** producție cu zero defecte.
- **heroSub:** În cadrul proiectului implementat la fabrica de jante Maxion Inci Celik din Manisa, matrițele de producție au fost urmărite cu un sistem bazat pe RFID. Proiectul a avut ca scop asigurarea potrivirii corecte a matrițelor pe baza rețetelor și prevenirea utilizării matrițelor incorecte.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Controlul matriței și securitatea procesului în producția de jante
- **contextP1:** În cadrul proiectului implementat la fabrica de jante Maxion Inci Celik din Manisa, matrițele de producție au fost urmărite cu un sistem bazat pe RFID. Proiectul a avut ca scop asigurarea potrivirii corecte a matrițelor pe baza rețetelor și prevenirea utilizării matrițelor incorecte.
- **contextP2:** Asigurarea acurateței matriței în producție este de o importanță critică pentru calitatea produsului și eficiența liniei.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoie / Problemă
- **problemTitle:** Utilizarea incorectă a matriței și riscurile de calitate
- **problemLede:** În producția de jante, trebuia garantat că se folosește matrița potrivită pentru fiecare rețetă. Selectarea manuală a matriței aducea riscul utilizării incorecte a acesteia și problemele aferente de calitate/deșeuri. În plus, imposibilitatea de a monitoriza fiabil durata de viață utilă a matrițelor îngreuna întreținerea și planificarea.
- **problemList:**
  - **bold:** "Erori de Potrivire a Matriței" | **text:** "Risc de pornire a producției cu o matriță greșită din cauza controalelor manuale, ducând la deșeuri."
  - **bold:** "Dificultate în Urmărirea Vieții Matriței" | **text:** "Imposibilitatea de a urmări automat ciclurile de rulare a matriței și programele de întreținere."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Permis de funcționare integrat PLC cu citire RFID
- **solutionLede:** În proiectul care folosește echipamente RFID, s-a asigurat integrarea cu PLC-ul existent pentru a potrivi matrițele pe baza rețetelor, prevenind utilizarea matrițelor incorecte. În timpul schimbărilor de rețetă, ID-urile matrițelor sunt citite prin RFID pentru a verifica potrivirea; când sunt potrivite, mașinii i se acordă permisiunea de a funcționa. Durata de viață a matrițelor este, de asemenea, urmărită prin sistemul bazat pe RFID.
- **steps:**
  - **no:** "01" | **title:** "Introducere Rețetă" | **text:** "Rețeta de producție a jantei este selectată din sistemul PLC de către operator."
  - **no:** "02" | **title:** "Citire Matriță RFID" | **text:** "Eticheta RFID de pe matriță este scanată de cititorul RFID de pe mașina de jante."
  - **no:** "03" | **title:** "Verificare Logică" | **text:** "Sistemul PLC compară ID-ul citit al matriței cu cerințele rețetei."
  - **no:** "04" | **title:** "Permis de Funcționare" | **text:** "Când potrivirea este corectă, mașinii i se permite să ruleze și producția începe."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipament Utilizat
- **techTitle:** Infrastructură RFID industrială și PLC
- **techGrid:**
  - **tag:** "HARDWARE" | **title:** "Etichete RFID Rezistente la Ulei" | **text:** "Etichete RFID cu durabilitate ridicată la ulei de bor și substanțe chimice în medii dure."
  - **tag:** "AUTOMATIZARE" | **title:** "Dispozitive și Cititoare RFID" | **text:** "Hardware RFID care citește precis ID-urile matrițelor și le transmite către PLC."
  - **tag:** "CONTROL" | **title:** "Integrare PLC Existent" | **text:** "Sistem PLC care compară logic datele matriței cu rețetele și deblochează mașina."
  - **tag:** "SOFTWARE" | **title:** "Modul Urmărire Viață Matriță" | **text:** "Strat software care urmărește durata de viață și planifică întreținerea în funcție de cicluri."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Integrare PLC de Câmp și Blocare Logică
- **integrationDesc:** Sistemul rulează integrat cu infrastructura PLC existentă a clientului. După ce ID-ul matriței este scanat și verificat prin RFID, blocarea logică a PLC este deschisă, permițând mașinii să ruleze.
- **integrationList:**
  - **bold:** "Control Logic PLC" | **text:** "Potrivirea matriței este blocată la nivelul PLC, prevenind fizic pornirea producției cu matrița greșită."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Producție fără erori și întreținere bazată pe date
- **resultsGrid:**
  - **title:** "Zero Matrițe Greșite" | **text:** "Utilizarea incorectă a matrițelor este complet prevenită datorită potrivirii automate RFID și blocării PLC."
  - **title:** "Economii de Calitate" | **text:** "Deșeurile de producție și abaterile de calitate rezultate din instalarea incorectă a matriței sunt eliminate."
  - **title:** "Întreținere Predictivă" | **text:** "Planificarea întreținerii matriței a devenit bazată pe date prin urmărirea duratei de viață și a ciclurilor."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să vă transformați și procesele de producție?
- **ctaSubtitle:** Contactați-ne pentru a discuta cum putem implementa o soluție similară pentru afacerea dumneavoastră.
- **ctaPrimary:** Contactați-ne


---

### 22. Bosch - RFID Gate ile Kit Arabası İzlenebilirlik
**Slug:** `bosch-trolley-tracking-rfid-gate` | **ID:** `28` | **Sıra (Order):** `22` | **Yıl:** `2021`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `bosch-trolley-tracking-rfid-gate`
- **Sıralama (order):** `22`
- **Yıl (year / referenceDate):** `2021`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `RFID, Barcode, ERP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/Bosch-logo.svg`
  - **Ana Görsel (image):** `/images/companies/Bosch/TTIC_ACILIS5.jpg`
  - **Hero Görseli (heroImage):** `/images/companies/Bosch/TTIC_ACILIS5.jpg`
  - **Galeri Görselleri (gallery):**
  - 

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Bosch - RFID Gate ile Kit Arabası İzlenebilirlik
- **Sektör (sector / tagValue):** Beyaz Eşya
- **Konum (locationValue):** Manisa
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Bosch ısı teknolojisi fabrikası için geliştirilen uygulamada depo çıkışına konumlanan RFID okuma/yazma kafaları, iş emirlerine göre hazırlanan kit arabalarının üretime çıkarılmasını sağladı. Bu kontrolü fiziksel olarak mümkün kılmak için depo giriş ve çıkışına bariyer sistemi kuruldu. Depo yönetim sistemiyle çift yönlü iletişim sağlayan uygulama, gelen kit arabalarının RFID etiketlerini taradı ve depo sistemini sorguladı; yalnızca onaylı arabaların çıkışına izin verdi. Projede RFID okuma/yazma kafaları için 700 adet Confidex Metal RFID etiketi kullanıldı.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Onaylı malzeme akışı,
- **heroTitleLine2:** fiziksel bariyer kontrollü RFID kapısı.
- **heroSub:** Bosch'un Manisa'daki kombi üretimi yapan ısı teknolojisi fabrikasında hayata geçirilen projede, iş emirlerine göre hazırlanan kit arabalarının üretime kontrollü biçimde çıkarılması sağlanmıştır. Proje, depo çıkışında yalnızca onaylı kit arabalarının üretime geçişini güvence altına almak amacıyla gerçekleştirilmiştir.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Kombi üretiminde depo çıkış kontrolü
- **contextP1:** Bosch'un Manisa'daki kombi üretimi yapan ısı teknolojisi fabrikasında hayata geçirilen projede, iş emirlerine göre hazırlanan kit arabalarının üretime kontrollü biçimde çıkarılması sağlanmıştır.
- **contextP2:** Proje, depo çıkışında yalnızca onaylı kit arabalarının üretime geçişini güvence altına almak amacıyla gerçekleştirilmiştir.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Hatalı malzeme çıkışları ve manuel kontrol zorlukları
- **problemLede:** Üretime yalnızca ilgili iş emrine uygun, onaylı kit arabalarının çıkması gerekiyordu. Bu kontrolün manuel yürütülmesi, yanlış veya onaysız arabaların üretime geçmesi ve buna bağlı malzeme/üretim hataları riski taşıyordu. Depo çıkışında geçişi fiziksel olarak da engelleyebilen güvenilir bir kontrol yapısına ihtiyaç vardı.
- **problemList:**
  - **bold:** "Onaysız Malzeme Geçişi" | **text:** "İş emri doğrulaması yapılmamış veya eksik kit arabalarının üretime çıkarılması riski."
  - **bold:** "Fiziksel Kontrol Eksikliği" | **text:** "Sadece yazılımsal kontrolün yetersiz kaldığı durumlarda geçişin fiziksel olarak engellenememesi."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** RFID kapı doğrulamalı bariyer kontrolü
- **solutionLede:** Depo çıkışına konumlanan RFID okuma/yazma kafaları, iş emirlerine göre hazırlanan kit arabalarının üretime çıkarılmasını sağladı. Bu kontrolü fiziksel olarak mümkün kılmak için depo giriş ve çıkışına bariyer sistemi kuruldu. Depo yönetim sistemiyle çift yönlü iletişim sağlayan uygulama, gelen kit arabalarının RFID etiketlerini taradı ve depo sistemini sorguladı; yalnızca onaylı arabaların çıkışına izin verdi.
- **steps:**
  - **no:** "01" | **title:** "Hazırlık ve Etiketleme" | **text:** "İş emrine göre hazırlanan kit arabası, üzerindeki metal RFID etiketle tanımlanır."
  - **no:** "02" | **title:** "RFID Kapı Taraması" | **text:** "Depo çıkış bariyerine yaklaşan araba, RFID kapısı tarafından taranır."
  - **no:** "03" | **title:** "Çift Yönlü Sorgu" | **text:** "SCADA uygulaması, okunan RFID kodunu depo yönetim sisteminden sorgular."
  - **no:** "04" | **title:** "Bariyer Açma" | **text:** "Çıkış onayı alındığında SCADA bariyeri açarak kit arabasının geçişine izin verir."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** RFID geçiş kontrolü ve SCADA mimarisi
- **techGrid:**
  - **tag:** "DONANIM" | **title:** "Metal Üstü RFID Etiketler" | **text:** "Kit arabalarının metal yüzeylerinde yüksek performans gösteren 700 adet özel RFID etiket."
  - **tag:** "OTOMASYON" | **title:** "RFID Okuma/Yazma Kafaları" | **text:** "Depo giriş ve çıkış kapılarına konumlandırılan endüstriyel RFID okuyucu donanımlar."
  - **tag:** "KONTROL" | **title:** "Bariyer Geçiş Sistemi" | **text:** "Yetkisiz kit arabalarının geçişini fiziksel olarak engelleyen bariyer entegrasyonu."
  - **tag:** "YAZILIM" | **title:** "C# SCADA Uygulaması" | **text:** "RFID taramalarını depo yönetim sistemi ile doğrulayan ve bariyerleri yöneten ana yazılım."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** Depo Yönetim Sistemi ve SAP Entegrasyonu
- **integrationDesc:** Uygulama, depo yönetim sistemiyle çift yönlü iletişim kurmakta ve SAP ile entegre çalışmaktadır. Gelen kit arabalarının RFID etiketleri okunarak sistem sorgulanmakta, çıkış onayı bu entegrasyon üzerinden verilmekte ve ilgili kayıtlar SAP'ye iletilmektedir.
- **integrationList:**
  - **bold:** "SAP ERP Entegrasyonu" | **text:** "Kit arabası çıkış onayları ve malzeme hareketleri SAP sistemiyle anlık senkronize edilerek kaydedilir."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Fiziksel güvence ve sıfır malzeme hatası
- **resultsGrid:**
  - **title:** "Onaylı Malzeme Akışı" | **text:** "Depo çıkışında sadece iş emri doğrulanmış kit arabalarının üretime geçişine izin verilerek doğruluk sağlanmıştır."
  - **title:** "Fiziksel Bariyer Güvenliği" | **text:** "Bariyer sistemi sayesinde onaysız kit arabalarının geçişi fiziksel olarak tamamen engellenmiştir."
  - **title:** "Anlık Karar Verme" | **text:** "Depo yönetim sistemi ile çift yönlü entegrasyon, geçiş kararlarının gecikmesiz verilmesini sağlamıştır."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Üretim süreçlerinizi de dönüştürmek ister misiniz?
- **ctaSubtitle:** Benzer bir çözümü işletmenize nasıl uygulayabileceğimizi konuşmak için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Bosch Trolley Tracking RFID Gate
- **Sector (sector / tagValue):** Home Appliances
- **Location (locationValue):** Manisa
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** In the application developed for the Bosch thermotechnology factory, RFID read/write heads positioned at the warehouse exit ensured that kit trolleys, prepared according to the work order, were released for production. To physically enable this control, a barrier system was installed at the warehouse entrance and exit. The application, which facilitated bidirectional communication with the warehouse management system, scanned the RFID tags on incoming kit trolleys and queried the warehouse system, allowing only approved trolleys to exit. The project utilized 700 Confidex Metal RFID tags for the RFID read/write heads.

##### Hero Section (EN)
- **heroTitleLine1:** Approved material flow,
- **heroTitleLine2:** physical barrier-controlled RFID gate.
- **heroSub:** In the project implemented at Bosch's combi boiler production thermotechnology factory in Manisa, kit trolleys prepared according to work orders were released to production in a controlled manner. The project was carried out to guarantee the transition of only approved kit trolleys to production at the warehouse exit.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Warehouse exit control in combi boiler production
- **contextP1:** In the project implemented at Bosch's combi boiler production thermotechnology factory in Manisa, kit trolleys prepared according to work orders were released to production in a controlled manner.
- **contextP2:** The project was carried out to guarantee the transition of only approved kit trolleys to production at the warehouse exit.

##### Problem / Challenge (EN)
- **problemEyebrow:** Needs / Problems
- **problemTitle:** Incorrect material outputs and manual control difficulties
- **problemLede:** Only approved kit trolleys matching the relevant work order were supposed to leave for production. Conducting this control manually carried the risk of incorrect or unapproved trolleys passing to production, resulting in material and production errors. A reliable control structure that could physically block transition at the warehouse exit was needed.
- **problemList:**
  - **bold:** "Unapproved Material Transition" | **text:** "The risk of unverified or incomplete kit trolleys being sent out to production without work order validation."
  - **bold:** "Lack of Physical Control" | **text:** "Inability to physically block transition in cases where software control alone is insufficient."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Barrier control with RFID gate validation
- **solutionLede:** RFID read/write heads positioned at the warehouse exit enabled the release of kit trolleys prepared according to work orders. To make this control physically possible, a barrier system was installed at the warehouse entry and exit. The application, communicating bi-directionally with the warehouse management system, scanned the RFID tags of incoming kit trolleys, queried the system, and allowed only approved trolleys to exit.
- **steps:**
  - **no:** "01" | **title:** "Preparation & Labeling" | **text:** "The kit trolley prepared according to the work order is identified by the metal RFID tag on it."
  - **no:** "02" | **title:** "RFID Gate Scan" | **text:** "The trolley approaching the warehouse exit barrier is scanned by the RFID gate."
  - **no:** "03" | **title:** "Bi-directional Query" | **text:** "The SCADA application queries the read RFID code from the warehouse management system."
  - **no:** "04" | **title:** "Barrier Opening" | **text:** "When exit approval is received, SCADA opens the barrier, allowing the kit trolley to pass."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** RFID access control and SCADA architecture
- **techGrid:**
  - **tag:** "HARDWARE" | **title:** "RFID-on-Metal Tags" | **text:** "700 specialized RFID tags performing with high efficiency on the metal surfaces of kit trolleys."
  - **tag:** "AUTOMATION" | **title:** "RFID Read/Write Heads" | **text:** "Industrial RFID reader hardware positioned at the warehouse entrance and exit gates."
  - **tag:** "CONTROL" | **title:** "Barrier Access System" | **text:** "Barrier integration physically blocking the transition of unauthorized kit trolleys."
  - **tag:** "SOFTWARE" | **title:** "C# SCADA Application" | **text:** "Main software validating RFID scans with the warehouse management system and managing barriers."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** Warehouse Management and SAP Integration
- **integrationDesc:** The application communicates bi-directionally with the warehouse management system and operates integrated with SAP. RFID tags of incoming kit trolleys are read to query the system, exit approval is granted through this integration, and records are sent to SAP.
- **integrationList:**
  - **bold:** "SAP ERP Integration" | **text:** "Kit trolley exit approvals and material movements are instantly synchronized and recorded in the SAP system."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Physical assurance and zero material errors
- **resultsGrid:**
  - **title:** "Approved Material Flow" | **text:** "Accuracy is ensured by allowing only work-order-validated kit trolleys to pass to production at the warehouse exit."
  - **title:** "Physical Barrier Security" | **text:** "Thanks to the barrier system, the transition of unapproved kit trolleys is completely blocked physically."
  - **title:** "Instant Decision Making" | **text:** "Bi-directional integration with the warehouse management system enabled transition decisions without delays."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Want to transform your production processes too?
- **ctaSubtitle:** Contact us to discuss how we can implement a similar solution for your business.
- **ctaPrimary:** Get in Touch

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Bosch - Urmarirea carucioarelor cu poarta RFID
- **Sector (sector / tagValue):** Electrocasnice
- **Locație (locationValue):** Manisa
- **Domeniu de Aplicare (scopeVal):** Software și Integrare
- **An (year):** An
- **Descriere Scurtă (description):** În aplicația dezvoltată pentru fabrica de termotehnică Bosch, capetele de citire/scriere RFID poziționate la ieșirea din depozit au asigurat că cărucioarele cu kituri, pregătite conform ordinului de lucru, au fost eliberate pentru producție. Pentru a permite fizic acest control, a fost instalat un sistem de barieră la intrarea și ieșirea din depozit. Aplicația, care a facilitat comunicarea bidirecțională cu sistemul de gestionare a depozitului, a scanat etichetele RFID de pe cărucioarele cu kituri care intrau și a interogat sistemul depozitului, permițând doar cărucioarelelor aprobate să iasă. Proiectul a utilizat 700 de etichete RFID Confidex Metal pentru capetele de citire/scriere RFID.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Flux de materiale aprobat,
- **heroTitleLine2:** poartă RFID controlată de barieră fizică.
- **heroSub:** În cadrul proiectului implementat la fabrica de tehnologie termică de producere a centralelor termice Bosch din Manisa, cărucioarele cu kituri pregătite conform ordinelor de lucru au fost eliberate pentru producție într-un mod controlat. Proiectul a fost realizat pentru a garanta tranziția doar a cărucioarelor cu kituri aprobate la ieșirea din depozit.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Controlul ieșirii din depozit în producția de centrale termice
- **contextP1:** În cadrul proiectului implementat la fabrica de tehnologie termică de producere a centralelor termice Bosch din Manisa, cărucioarele cu kituri pregătite conform ordinelor de lucru au fost eliberate pentru producție într-un mod controlat.
- **contextP2:** Proiectul a fost realizat pentru a garanta tranziția doar a cărucioarelor cu kituri aprobate la ieșirea din depozit.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoie / Problemă
- **problemTitle:** Ieșiri incorecte de materiale și dificultăți de control manual
- **problemLede:** Doar cărucioarele cu kituri aprobate, corespunzătoare ordinului de lucru respectiv, trebuiau să plece în producție. Efectuarea manuală a acestui control presupunea riscul ca cărucioare incorecte sau neaprobate să treacă în producție, ducând la erori de materiale și de producție. Era necesară o structură de control fiabilă care să poată bloca fizic trecerea la ieșirea din depozit.
- **problemList:**
  - **bold:** "Tranziție de Materiale Neaprobată" | **text:** "Riscul ca cărucioarele cu kituri neverificate sau incomplete să fie trimise în producție fără validarea ordinului de lucru."
  - **bold:** "Lipsa Controlului Fizic" | **text:** "Imposibilitatea de a bloca fizic trecerea în cazurile în care controlul exclusiv software este insuficient."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Controlul barierei cu validare prin poartă RFID
- **solutionLede:** Capetele de citire/scriere RFID poziționate la ieșirea din depozit au permis eliberarea cărucioarelor cu kituri pregătite conform ordinelor de lucru. Pentru a face acest control posibil din punct de vedere fizic, a fost instalat un sistem de barieră la intrarea și ieșirea din depozit. Aplicația, care comunică bidirecțional cu sistemul de management al depozitului, a scanat etichetele RFID ale cărucioarelor de kit sosite, a interogat sistemul și a permis ieșirea doar a cărucioarelor aprobate.
- **steps:**
  - **no:** "01" | **title:** "Pregătire & Etichetare" | **text:** "Căruciorul cu kituri pregătit conform ordinului de lucru este identificat prin eticheta metalică RFID de pe el."
  - **no:** "02" | **title:** "Scanare Poartă RFID" | **text:** "Căruciorul care se apropie de bariera de ieșire din depozit este scanat de poarta RFID."
  - **no:** "03" | **title:** "Interogare Bidirecțională" | **text:** "Aplicația SCADA interoghează codul RFID citit în sistemul de management al depozitului."
  - **no:** "04" | **title:** "Deschidere Barieră" | **text:** "Când se primește aprobarea de ieșire, SCADA deschide bariera, permițând trecerea căruciorului."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipament Utilizat
- **techTitle:** Control acces RFID și arhitectură SCADA
- **techGrid:**
  - **tag:** "HARDWARE" | **title:** "Etichete RFID pe Metal" | **text:** "700 de etichete RFID specializate care funcționează cu eficiență ridicată pe suprafețele metalice."
  - **tag:** "AUTOMATIZARE" | **title:** "Capete Citire/Scriere RFID" | **text:** "Cititoare industriale RFID poziționate la porțile de intrare și ieșire din depozit."
  - **tag:** "CONTROL" | **title:** "Sistem de Barieră Acces" | **text:** "Integrarea barierei care blochează fizic trecerea cărucioarelor de kit neautorizate."
  - **tag:** "SOFTWARE" | **title:** "Aplicație SCADA C#" | **text:** "Software principal care validează scanările RFID cu sistemul depozitului și gestionează barierele."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Sistemul de Management al Depozitului și Integrarea SAP
- **integrationDesc:** Aplicația comunică bidirecțional cu sistemul de management al depozitului și funcționează integrată cu SAP. Etichetele RFID ale cărucioarelor de kit sosite sunt citite pentru a interoga sistemul, aprobarea de ieșire este acordată prin această integrare, iar înregistrările sunt trimise în SAP.
- **integrationList:**
  - **bold:** "Integrare SAP ERP" | **text:** "Aprobările de ieșire a cărucioarelor și mișcările de materiale sunt sincronizate și înregistrate instantaneu în SAP."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Asigurare fizică și zero erori de materiale
- **resultsGrid:**
  - **title:** "Flux de Materiale Aprobat" | **text:** "Acuratețea este asigurată permițând doar trecerea cărucioarelor validate în producție la ieșirea din depozit."
  - **title:** "Securitate prin Barieră Fizică" | **text:** "Datorită sistemului de barieră, trecerea cărucioarelor neaprobate este complet blocată fizic."
  - **title:** "Decizii Instantanee" | **text:** "Integrarea bidirecțională cu sistemul de management al depozitului a permis luarea deciziilor de trecere fără întârzieri."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să vă transformați și procesele de producție?
- **ctaSubtitle:** Contactați-ne pentru a discuta cum putem implementa o soluție similară pentru afacerea dumneavoastră.
- **ctaPrimary:** Contactați-ne


---

### 23. Borgwarner - Lazer Markalama
**Slug:** `borgwarner-laser-marking` | **ID:** `26` | **Sıra (Order):** `23` | **Yıl:** `2021`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `borgwarner-laser-marking`
- **Sıralama (order):** `23`
- **Yıl (year / referenceDate):** `2021`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `RFID, Barcode, ERP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/borgwarner-seeklogo.svg`
  - **Ana Görsel (image):** `/images/companies/Borgwarner/gaziemir-turkey-mc-header_5b5c3c8c-4c5a-42ec-9a7d-a037dac8b318.tmb-bw1380.webp`
  - **Hero Görseli (heroImage):** `/images/companies/Borgwarner/gaziemir-turkey-mc-header_5b5c3c8c-4c5a-42ec-9a7d-a037dac8b318.tmb-bw1380.webp`
  - **Galeri Görselleri (gallery):**
  - 

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Borgwarner - Lazer Markalama
- **Sektör (sector / tagValue):** Otomotiv
- **Konum (locationValue):** İzmir ESBAŞ
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Anahtar teslim çözüm olarak sistem, mekanik, otomasyon ve ERP bileşenlerinin tam entegrasyonuyla devreye alındı. Oracle ERP ile senkronize çalışan makine, ERP verilerine dayalı otomatik lazer işaretleme gerçekleştirmekte; ardından kamera tabanlı doğrulama yapılmaktadır. Sistem 3 eksenli kontrol özelliğine sahip olup Profinet altyapısı kullanmaktadır. İzleme, kontrol ve entegrasyon süreçleri .NET platformunda geliştirilen müşteriye özgü SCADA sistemiyle yönetilmektedir.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Hassas lazer markalama,
- **heroTitleLine2:** akıllı kamera doğrulamalı akış.
- **heroSub:** Borgwarner'ın İzmir ESBAŞ Serbest Bölge'deki fabrikası, otomotiv yan sanayine yönelik üretim yapmaktadır. Bu fabrikada hayata geçirilen projede, üretilen her ürünün tekil olarak lazerle markalanması ve izlenebilirliğinin sağlanması hedeflenmiştir.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Otomotiv yan sanayinde tekil izlenebilirlik
- **contextP1:** Borgwarner'ın İzmir ESBAŞ Serbest Bölge'deki fabrikası, otomotiv yan sanayine yönelik üretim yapmaktadır. Bu fabrikada hayata geçirilen projede, üretilen her ürünün tekil olarak lazerle markalanması ve izlenebilirliğinin sağlanması hedeflenmiştir.
- **contextP2:** Markalama doğruluğunun ve veritabanı entegrasyonunun otomatik yapılması, kalite süreçlerinin korunması için büyük öneme sahiptir.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Ayrı adımlar ve izlenebilirlik boşluğu riski
- **problemLede:** Üretilen her parçanın tekil seri numarasıyla markalanması, markalama doğruluğunun güvence altına alınması ve elde edilen izlenebilirlik verilerinin merkezi sisteme aktarılması gerekiyordu. Markalama ile doğrulamanın birbirinden ayrı ve kontrole açık adımlar hâlinde ilerlemesi; hem hatalı ya da okunamayan kod hem de izlenebilirlikte boşluk riski doğuruyordu.
- **problemList:**
  - **bold:** "Okunamayan Kod Riski" | **text:** "Lazer gücü veya yüzey pürüzlülüğü nedeniyle okunamayan veya hatalı kod basımının anında tespit edilememesi."
  - **bold:** "Süreç Kopukluğu" | **text:** "Markalama ve kamera doğrulama adımlarının ayrı kontrol edilmesi nedeniyle oluşan iş gücü ve zaman kaybı."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Oracle entegrasyonlu ve 3 eksenli otomatik markalama hücresi
- **solutionLede:** Borgwarner için markalama ve tanımlama süreçlerini destekleyecek bir lazer markalama makinesi geliştirildi. Makine, farklı ürünlere uyum sağlayabilecek esneklikte, 3 eksenli hareket kapasitesiyle tasarlandı. Ürünlere basılacak seri numaraları Oracle'dan alınacak şekilde sistem Oracle ile entegre edildi. Markalamanın ardından kod içeriği, derece ve konum doğrulamaları kamera aracılığıyla otomatik olarak yapıldı; uygun bulunan parçaların onay verileri Oracle'a geri iletildi.
- **steps:**
  - **no:** "01" | **title:** "Seri No Çekme" | **text:** "Sistem basılacak tekil seri numarası Oracle veritabanından anlık çeker."
  - **no:** "02" | **title:** "3 Eksenli Markalama" | **text:** "Servo eksen yapısıyla hareket eden lazer, parçayı belirlenen konuma markalar."
  - **no:** "03" | **title:** "Kamera Doğrulama" | **text:** "Kamera; basılan kodun içeriğini, kalitesini (grade) ve konumunu tarar."
  - **no:** "04" | **title:** "Oracle Onayı" | **text:** "Doğrulamadan geçen parçaların onay bilgisi Oracle veritabanına kaydedilir."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** Mekanik tasarım ve kontrol altyapısı
- **techGrid:**
  - **tag:** "DONANIM" | **title:** "Lazer Markalama Cihazı" | **text:** "Parça metal yüzeylerine kalıcı ve yüksek çözünürlüklü markalama yapan lazer ünitesi."
  - **tag:** "OTOMASYON" | **title:** "3 Eksenli Servo Hareket" | **text:** "Farklı ürün geometrilerine göre lazer kafasını konumlandıran servo eksen mekanizması."
  - **tag:** "OPTİK" | **title:** "Kamera Tabanlı Kontrol" | **text:** "Markalanan 2D kodların içeriğini ve basım kalitesini (grade) anlık ölçen vizyon sistemi."
  - **tag:** "YAZILIM" | **title:** "OnSuite Trace Platformu" | **text:** "Oracle entegrasyonunu, SCADA süreçlerini ve izlenebilirlik adımlarını yöneten ana platform."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** Oracle ERP ile Çift Yönlü Veri Akışı
- **integrationDesc:** Sistem Oracle ile çift yönlü entegre çalışmaktadır: seri numaraları Oracle'dan alınmakta, markalama ve kontrol sonrasında uygun parçaların onay verileri yeniden Oracle'a gönderilmektedir.
- **integrationList:**
  - **bold:** "Oracle Çift Yönlü Bağlantı" | **text:** "Seri numarası sorgulama ve onay bildirim adımları Oracle ERP sistemi ile doğrudan haberleşir."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Yüksek güvenilirlikte parça izlenebilirliği
- **resultsGrid:**
  - **title:** "Tekil Ürün Takibi" | **text:** "Üretilen her ürünün lazer koduyla veritabanında tekil olarak izlenmesi sağlanmıştır."
  - **title:** "Hatalı Kod Önleme" | **text:** "Otomatik kamera doğrulaması sayesinde hatalı, eksik veya okunamayan kodlu parça çıkışı engellenmiştir."
  - **title:** "Tek Akışta Yönetim" | **text:** "Markalama ve kontrol süreçleri tek makinede birleştirilerek döngü süreleri optimize edilmiştir."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Üretim süreçlerinizi de dönüştürmek ister misiniz?
- **ctaSubtitle:** Benzer bir çözümü işletmenize nasıl uygulayabileceğimizi konuşmak için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Borgwarner Laser Marking
- **Sector (sector / tagValue):** Automotive
- **Location (locationValue):** Izmir ESBAS
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** As a turnkey solution, the system went into operation with full integration of mechanical, automation, and ERP components. Operating in sync with the Oracle ERP system, the machine performs automatic laser marking based on ERP data, followed by camera-based verification. The system features 3-axis control and uses a Profinet infrastructure. Monitoring, control, and integration processes are managed through a customer-specific SCADA system developed on the .NET platform.

##### Hero Section (EN)
- **heroTitleLine1:** Precision laser marking,
- **heroTitleLine2:** smart camera-validated flow.
- **heroSub:** In the project implemented at Borgwarner's factory in Izmir ESBAS Free Zone, individual laser marking and traceability of each produced product were aimed.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Individual traceability in the automotive supply industry
- **contextP1:** Borgwarner's factory in Izmir ESBAS Free Zone produces for the automotive supply industry. In the project implemented at this factory, individual laser marking and traceability of each produced product were aimed.
- **contextP2:** Automatic execution of marking accuracy and database integration is of great importance for maintaining quality processes.

##### Problem / Challenge (EN)
- **problemEyebrow:** Needs / Problems
- **problemTitle:** Separate steps and traceability gap risk
- **problemLede:** Each produced part had to be marked with a unique serial number, ensuring marking accuracy and transmitting the traceability data to the central system. Marking and verification progressing as separate, uncoupled steps carried the risk of incorrect or unreadable codes and gaps in traceability.
- **problemList:**
  - **bold:** "Unreadable Code Risk" | **text:** "Inability to instantly detect unreadable or incorrect code printing caused by laser power or surface roughness."
  - **bold:** "Process Disconnection" | **text:** "Loss of labor and time resulting from separate execution of marking and camera verification steps."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Oracle integrated 3-axis automatic marking cell
- **solutionLede:** A laser marking machine supporting marking and identification processes was developed for Borgwarner. The machine was designed with 3-axis motion capability to adapt to different products. The system was integrated with Oracle to retrieve serial numbers to print. Following marking, code content, grade, and position verifications were automatically performed via camera, with approval data for valid parts sent back to Oracle.
- **steps:**
  - **no:** "01" | **title:** "Serial Retrieval" | **text:** "The system pulls the unique serial number to print from the Oracle database in real time."
  - **no:** "02" | **title:** "3-Axis Marking" | **text:** "The laser, moving via the servo axis structure, marks the part at the designated position."
  - **no:** "03" | **title:** "Camera Verification" | **text:** "The camera scans the printed code's content, quality grade, and position."
  - **no:** "04" | **title:** "Oracle Approval" | **text:** "The approval info of verified parts is recorded back to the Oracle database."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** Mechanical design and control infrastructure
- **techGrid:**
  - **tag:** "HARDWARE" | **title:** "Laser Marking Device" | **text:** "Laser unit performing permanent, high-resolution marking on metal surfaces."
  - **tag:** "AUTOMATION" | **title:** "3-Axis Servo Motion" | **text:** "Servo axis mechanism positioning the laser head according to different product geometries."
  - **tag:** "OPTICS" | **title:** "Camera-Based Control" | **text:** "Vision system instantly measuring the content and print quality grade of marked 2D codes."
  - **tag:** "SOFTWARE" | **title:** "OnSuite Trace Platform" | **text:** "Main platform managing Oracle integration, SCADA processes, and traceability steps."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** Bi-directional Data Flow with Oracle ERP
- **integrationDesc:** The system operates bi-directionally integrated with Oracle: serial numbers are retrieved from Oracle, and after marking and inspection, the approval data for suitable parts are sent back to Oracle.
- **integrationList:**
  - **bold:** "Oracle Bi-directional Sync" | **text:** "Serial number queries and approval notification steps communicate directly with the Oracle ERP system."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** High reliability part traceability
- **resultsGrid:**
  - **title:** "Individual Part Tracking" | **text:** "Each produced part is tracked individually in the database with its laser code."
  - **title:** "Faulty Code Prevention" | **text:** "Automatic camera verification prevented the release of parts with incorrect, incomplete, or unreadable codes."
  - **title:** "Single-Flow Management" | **text:** "Marking and inspection processes are unified in a single machine, optimizing cycle times."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Want to transform your production processes too?
- **ctaSubtitle:** Contact us to discuss how we can implement a similar solution for your business.
- **ctaPrimary:** Get in Touch

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** BorgWarner - Marcare cu laser
- **Sector (sector / tagValue):** Industria auto
- **Locație (locationValue):** Izmir ESBAS
- **Domeniu de Aplicare (scopeVal):** Software și Integrare
- **An (year):** An
- **Descriere Scurtă (description):** Ca soluție la cheie, sistemul a intrat în funcțiune cu integrarea completă a componentelor mecanice, automatizării și ERP. Funcționând sincron cu sistemul Oracle ERP, mașina efectuează marcarea automată cu laser pe baza datelor ERP, urmată de verificarea bazată pe cameră. Sistemul dispune de control pe 3 axe și utilizează o infrastructură Profinet. Procesele de monitorizare, control și integrare sunt gestionate printr-un sistem SCADA specific clientului, dezvoltat pe platforma .NET.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Marcare precisă cu laser,
- **heroTitleLine2:** flux validat cu cameră inteligentă.
- **heroSub:** În cadrul proiectului implementat la fabrica Borgwarner din Zona Liberă ESBAS din Izmir, s-a urmărit marcarea individuală cu laser și trasabilitatea fiecărui produs fabricat.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Trasabilitate individuală în industria furnizorilor de componente auto
- **contextP1:** Fabrica Borgwarner din Zona Liberă ESBAS din Izmir produce pentru industria furnizorilor de componente auto. În cadrul proiectului implementat la această fabrică, s-a urmărit marcarea individuală cu laser și trasabilitatea fiecărui produs fabricat.
- **contextP2:** Execuția automată a preciziei marcării și integrarea bazei de date este de o mare importanță pentru menținerea proceselor de calitate.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoie / Problemă
- **problemTitle:** Etape separate și risc de lacune în trasabilitate
- **problemLede:** Fiecare piesă fabricată trebuia marcată cu un număr de serie unic, asigurând precizia marcării și transmițând datele de trasabilitate la sistemul central. Marcarea și verificarea care progresau ca etape separate și necuplate purtau riscul unor coduri incorecte sau ilizibile și al unor lacune în trasabilitate.
- **problemList:**
  - **bold:** "Risc de Cod Ilizibil" | **text:** "Imposibilitatea de a detecta instantaneu imprimarea codurilor ilizibile sau incorecte din cauza puterii laserului sau a rugozității suprafeței."
  - **bold:** "Deconectare Proces" | **text:** "Pierdere de forță de muncă și timp rezultată din executarea separată a etapelor de marcare și verificare prin cameră."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Celulă de marcare automată cu 3 axe integrată cu Oracle
- **solutionLede:** O mașină de marcare cu laser care susține procesele de marcare și identificare a fost dezvoltată pentru Borgwarner. Mașina a fost proiectată cu o capacitate de mișcare pe 3 axe pentru a se adapta la diferite produse. Sistemul a fost integrat cu Oracle pentru a prelua numerele de serie de imprimat. În urma marcării, verificările conținutului codului, calității și poziției au fost efectuate automat prin cameră, cu datele de aprobare pentru piesele valide trimise înapoi la Oracle.
- **steps:**
  - **no:** "01" | **title:** "Preluare Serie" | **text:** "Sistemul preia numărul de serie unic de imprimat din baza de date Oracle în timp real."
  - **no:** "02" | **title:** "Marcare pe 3 Axe" | **text:** "Laserul, care se deplasează prin structura axei servo, marchează piesa în poziția desemnată."
  - **no:** "03" | **title:** "Verificare Cameră" | **text:** "Camera scanează conținutul codului imprimat, calitatea (clasa) și poziția."
  - **no:** "04" | **title:** "Aprobare Oracle" | **text:** "Informațiile de aprobare a pieselor verificate sunt înregistrate în baza de date Oracle."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipament Utilizat
- **techTitle:** Proiectare mecanică și infrastructură de control
- **techGrid:**
  - **tag:** "HARDWARE" | **title:** "Dispozitiv Marcare Laser" | **text:** "Unitate laser care realizează marcarea permanentă, de înaltă rezoluție, pe suprafețe metalice."
  - **tag:** "AUTOMATIZARE" | **title:** "Mișcare Servo pe 3 Axe" | **text:** "Mecanism cu axe servo care poziționează capul laser în funcție de diferite geometrii ale produselor."
  - **tag:** "OPTICĂ" | **title:** "Control pe Bază de Cameră" | **text:** "Sistem de viziune care măsoară instantaneu conținutul și calitatea imprimării codurilor 2D marcate."
  - **tag:** "SOFTWARE" | **title:** "Platforma OnSuite Trace" | **text:** "Platformă principală care gestionează integrarea Oracle, procesele SCADA și etapele de trasabilitate."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Flux de Date Bidirecțional cu Oracle ERP
- **integrationDesc:** Sistemul funcționează integrat bidirecțional cu Oracle: numerele de serie sunt preluate din Oracle, iar după marcare și inspecție, datele de aprobare pentru piesele conforme sunt trimise înapoi la Oracle.
- **integrationList:**
  - **bold:** "Sincronizare Bidirecțională Oracle" | **text:** "Interogările numerelor de serie și etapele de notificare a aprobării comunică direct cu sistemul Oracle ERP."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Trasabilitate de înaltă fiabilitate a pieselor
- **resultsGrid:**
  - **title:** "Urmărire Individuală" | **text:** "Fiecare piesă produsă este urmărită individual în baza de date cu codul său laser."
  - **title:** "Prevenirea Codurilor Greșite" | **text:** "Verificarea automată prin cameră a prevenit eliberarea pieselor cu coduri incorecte, incomplete sau ilizibile."
  - **title:** "Management într-un Singur Flux" | **text:** "Procesele de marcare și inspecție sunt unificate într-o singură mașină, optimizând timpii de ciclu."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să vă transformați și procesele de producție?
- **ctaSubtitle:** Contactați-ne pentru a discuta cum putem implementa o soluție similară pentru afacerea dumneavoastră.
- **ctaPrimary:** Contactați-ne


---

### 24. ORKİDE - Kalite Kontrol Uygulaması
**Slug:** `orkide-quality-control-application` | **ID:** `22` | **Sıra (Order):** `24` | **Yıl:** `2020`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `orkide-quality-control-application`
- **Sıralama (order):** `24`
- **Yıl (year / referenceDate):** `2020`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `RFID, Barcode, ERP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/Orkide_Ya%C4%9F-removebg-preview.png`
  - **Ana Görsel (image):** `/images/companies/Orkide/Image.jpg`
  - **Hero Görseli (heroImage):** `/images/companies/Orkide/Image.jpg`
  - **Galeri Görselleri (gallery):**
  - /images/companies/Orkide/Image1.jpg

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** ORKİDE - Kalite Kontrol Uygulaması
- **Sektör (sector / tagValue):** Gıda & İçecek
- **Konum (locationValue):** İzmir
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Türkiye'nin önde gelen sıvı yağ üreticilerinden Orkide ile iş birliği yaparak kutu içeriği eksikliklerini takip etmeye yönelik bir proje hayata geçirdik. Üretim hattında kutu izlenebilirliği sağlanarak sistem, kutular içindeki eksik ürün miktarlarını otomatik kontrol etmektedir. Ayrıca seçili ürünlerde sap varlığı/yokluğu kontrolleri uygulanarak hatalı ürünler tespit edilmektedir.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Kusursuz ambalaj kontrolü,
- **heroTitleLine2:** kamera tabanlı otomatik denetim.
- **heroSub:** Gıda sektöründe faaliyet gösteren ORKİDE'nin İzmir'deki fabrikasında hayata geçirilen projede, üretilen ürünler üzerinde kamera tabanlı kalite kontrol sistemi kurulmuştur. Proje, ürünlerdeki belirli bileşenlerin (etiket, kapak vb.) eksiksiz olduğunu otomatik olarak denetlemek amacıyla gerçekleştirilmiştir.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Yağ dolum hatlarında paketleme güvencesi
- **contextP1:** Gıda sektöründe faaliyet gösteren ORKİDE'nin İzmir'deki fabrikasında hayata geçirilen projede, üretilen ürünler üzerinde kamera tabanlı kalite kontrol sistemi kurulmuştur. Proje, ürünlerdeki belirli bileşenlerin (etiket, kapak vb.) eksiksiz olduğunu otomatik olarak denetlemek amacıyla gerçekleştirilmiştir.
- **contextP2:** Kalite kontrol süreçlerinin otomatik ve standart hale getirilmesi, marka prestijinin korunması ve hatalı ürün çıkışının engellenmesi açısından hayati önem taşımaktadır.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Eksik bileşenler ve manuel kontrol riskleri
- **problemLede:** Üretilen ürünlerde etiket, kapak gibi bileşenlerin eksiksiz bulunduğunun güvenilir biçimde kontrol edilmesi gerekiyordu. Bu kontrolün manuel yapılması hata riski taşıyor; eksik etiket veya kapak gibi kusurların fark edilmeden sürece devam etmesi kalite ve müşteri memnuniyeti açısından risk oluşturuyordu.
- **problemList:**
  - **bold:** "Eksik Kapak/Etiket Kusuru" | **text:** "Hattın hızlı akışında kapak veya etiketlerin eksik yapıştırılmasının gözden kaçma riski."
  - **bold:** "Hatalı Ürün Sevkiyatı" | **text:** "Kusurlu ambalajlı ürünlerin paketlenip müşteriye kadar ulaşması ihtimali."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Var-yok algılamalı otomatik vizyon sistemi
- **solutionLede:** Üretim hattına kamera sistemi kurularak ürünler üzerinde var–yok kontrolleri otomatik olarak gerçekleştirildi. Kamera, etiket ve kapak gibi bileşenlerin mevcut olup olmadığını denetleyerek eksik veya kusurlu ürünleri tespit etti. Böylece kalite kontrol süreci operatör inisiyatifinden çıkarılarak otomatik ve tutarlı hâle getirildi.
- **steps:**
  - **no:** "01" | **title:** "Ürün Algılama" | **text:** "Ürün, kalite kontrol noktasındaki kamera görüş alanına girdiğinde tetiklenir."
  - **no:** "02" | **title:** "Görüntü İşleme" | **text:** "Kamera sistemi, ürünün görüntüsünü anlık çekerek bileşen denetimini başlatır."
  - **no:** "03" | **title:** "Var-Yok Kontrolü" | **text:** "Yazılım, etiket ve kapağın belirlenen yerlerde mevcut olup olmadığını analiz eder."
  - **no:** "04" | **title:** "Hatalı Ürün Rejeksiyonu" | **text:** "Eksik veya kusurlu bileşen tespit edilirse, sistem PLC üzerinden rejeksiyon aksiyonu alır."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** Kamera tabanlı otomatik denetim mimarisi
- **techGrid:**
  - **tag:** "VİZYON" | **title:** "Kamera Tabanlı Kontrol Ünitesi" | **text:** "Kapak ve etiket varlığını yüksek hızda denetleyen endüstriyel akıllı kamera sistemi."
  - **tag:** "OTOMASYON" | **title:** "PLC Saha Yapısı" | **text:** "Görüntü analiz sonuçlarına göre rejeksiyon pistonunu ve hat akışını yöneten PLC."
  - **tag:** "DONANIM" | **title:** "Sensörler ve Tetikleme" | **text:** "Kameranın doğru zamanlama ile görüntü almasını sağlayan endüstriyel algılayıcılar."
  - **tag:** "YAZILIM" | **title:** "Merkezi İzleme Arayüzü" | **text:** "Kalite kontrol istatistiklerinin ve kusurlu ürün verilerinin anlık izlendiği yazılım."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** Merkezi Kalite Takip Sistemleri Entegrasyonu
- **integrationDesc:** Sistem, müşterinin mevcut sistemleriyle entegre edilmiştir; kontrol sonuçları bu sistemlerle paylaşılarak kalite kontrol süreci merkezi olarak izlenmekte ve yönetilmektedir.
- **integrationList:**
  - **bold:** "Kalite Raporlama" | **text:** "Hatalı kapak, eksik etiket gibi kusurların türü ve sıklığı merkezi veritabanına anlık kaydedilir."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Kusursuz ürün çıkışı ve tutarlı denetim
- **resultsGrid:**
  - **title:** "Sıfır Hatalı Ürün Çıkışı" | **text:** "Etiket veya kapağı eksik olan hiçbir ürünün fabrikadan çıkışına izin verilmemektedir."
  - **title:** "Standart Kalite Kontrol" | **text:** "Kontroller insan inisiyatifinden bağımsız olarak 7/24 aynı hassasiyetle yürütülür."
  - **title:** "Geri İzlenebilirlik Raporu" | **text:** "Hatalı ürün istatistikleri sayesinde üretim makinelerindeki sapmalar erkenden tespit edilebilir."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Üretim süreçlerinizi de dönüştürmek ister misiniz?
- **ctaSubtitle:** Benzer bir çözümü işletmenize nasıl uygulayabileceğimizi konuşmak için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Orkide Quality Control Application
- **Sector (sector / tagValue):** Food & Beverage
- **Location (locationValue):** Izmir
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** In collaboration with Orkide, one of Turkey's top companies in liquid oil production, we implemented a project for tracking content deficiencies in boxes. By enabling box traceability on the production line, the system automatically performs checks for missing product quantities inside boxes. Additionally, for certain selected products, handle presence/absence controls were implemented to detect defective products.

##### Hero Section (EN)
- **heroTitleLine1:** Flawless packaging control,
- **heroTitleLine2:** camera-based automatic inspection.
- **heroSub:** In the project implemented at ORKIDE's factory in Izmir, operating in the food sector, a camera-based quality control system was installed on the produced products. The project was carried out to automatically inspect that certain components (labels, caps, etc.) on the products are complete.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Packaging assurance in oil filling lines
- **contextP1:** In the project implemented at ORKIDE's factory in Izmir, operating in the food sector, a camera-based quality control system was installed on the produced products. The project was carried out to automatically inspect that certain components (labels, caps, etc.) on the products are complete.
- **contextP2:** Automating and standardizing quality control processes is of vital importance in terms of protecting brand prestige and preventing defective product output.

##### Problem / Challenge (EN)
- **problemEyebrow:** Needs / Problems
- **problemTitle:** Missing components and manual control risks
- **problemLede:** It was necessary to reliably check that components such as labels and caps were complete on the produced products. Conducting this control manually carried the risk of errors; defects like missing labels or caps going unnoticed posed a risk for quality and customer satisfaction.
- **problemList:**
  - **bold:** "Missing Cap/Label Defects" | **text:** "The risk of missing caps or labels going unnoticed during the high-speed flow of the line."
  - **bold:** "Defective Product Shipping" | **text:** "The possibility of products with defective packaging being packed and reaching the customer."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Automatic vision system with presence-absence detection
- **solutionLede:** A camera system was installed on the production line, and presence-absence checks were automatically performed on the products. The camera checked if components such as labels and caps were present, detecting missing or defective products. Thus, the quality control process was removed from operator initiative, becoming automatic and consistent.
- **steps:**
  - **no:** "01" | **title:** "Product Detection" | **text:** "The product is triggered when it enters the camera field of view at the quality control point."
  - **no:** "02" | **title:** "Image Processing" | **text:** "The camera system captures the product image instantly and starts component verification."
  - **no:** "03" | **title:** "Presence Check" | **text:** "The software analyzes if the label and cap are present in the designated locations."
  - **no:** "04" | **title:** "Defective Rejection" | **text:** "If a missing or defective component is detected, the system takes rejection action via PLC."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** Camera-based automatic inspection architecture
- **techGrid:**
  - **tag:** "VISION" | **title:** "Camera-Based Control Unit" | **text:** "Industrial smart camera system verifying cap and label presence at high speed."
  - **tag:** "AUTOMATION" | **title:** "PLC Field Architecture" | **text:** "PLC managing the rejection cylinder and line flow according to image analysis results."
  - **tag:** "HARDWARE" | **title:** "Sensors and Triggering" | **text:** "Industrial sensors ensuring the camera captures images with precise timing."
  - **tag:** "SOFTWARE" | **title:** "Central Monitoring Interface" | **text:** "Software where quality control statistics and defective product data are monitored in real time."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** Central Quality Tracking Systems Integration
- **integrationDesc:** The system is integrated with the customer's existing systems; inspection results are shared with these systems, allowing the quality control process to be monitored and managed centrally.
- **integrationList:**
  - **bold:** "Quality Reporting" | **text:** "The type and frequency of defects such as missing caps or labels are instantly recorded in the central database."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Flawless product output and consistent inspection
- **resultsGrid:**
  - **title:** "Zero Defect Outflow" | **text:** "No products with missing labels or caps are allowed to leave the factory."
  - **title:** "Standardized Quality Control" | **text:** "Inspections are carried out 24/7 with the same sensitivity, independent of human initiative."
  - **title:** "Traceability Report" | **text:** "Deviations in production machines can be detected early thanks to defective product statistics."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Want to transform your production processes too?
- **ctaSubtitle:** Contact us to discuss how we can implement a similar solution for your business.
- **ctaPrimary:** Get in Touch

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** ORKIDE - Aplicatie de Control al Calitatii
- **Sector (sector / tagValue):** Alimente & Băuturi
- **Locație (locationValue):** Izmir
- **Domeniu de Aplicare (scopeVal):** Software și Integrare
- **An (year):** An
- **Descriere Scurtă (description):** În colaborare cu Orkide, una dintre companiile de top din Turcia în producția de uleiuri lichide, am implementat un proiect de urmărire a deficiențelor de conținut din cutii. Prin activarea trasabilității cutiilor pe linia de producție, sistemul efectuează automat verificări pentru cantitățile de produse lipsă din interiorul cutiilor. În plus, pentru anumite produse selectate, au fost implementate controale de prezență/absență a mânerelor pentru a detecta produsele defecte.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Control de ambalare impecabil,
- **heroTitleLine2:** inspecție automată bazată pe cameră.
- **heroSub:** În cadrul proiectului implementat la fabrica ORKIDE din Izmir, care activează în sectorul alimentar, s-a instalat un sistem de control al calității bazat pe cameră pe produsele fabricate. Proiectul a fost realizat pentru a inspecta automat dacă anumite componente (etichete, capace etc.) de pe produse sunt complete.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Asigurarea ambalării în liniile de îmbuteliere a uleiului
- **contextP1:** În cadrul proiectului implementat la fabrica ORKIDE din Izmir, care activează în sectorul alimentar, s-a instalat un sistem de control al calității bazat pe cameră pe produsele fabricate. Proiectul a fost realizat pentru a inspecta automat dacă anumite componente (etichete, capace etc.) de pe produse sunt complete.
- **contextP2:** Automatizarea și standardizarea proceselor de control al calității este de o importanță vitală în ceea ce privește protejarea prestigiului mărcii și prevenirea ieșirii produselor defecte.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoie / Problemă
- **problemTitle:** Componente lipsă și riscuri de control manual
- **problemLede:** Era necesar să se verifice în mod fiabil dacă componente precum etichetele și capacele sunt complete pe produsele fabricate. Efectuarea manuală a acestui control presupunea riscul apariției erorilor; defecte precum etichetele sau capacele lipsă care treceau neobservate reprezentau un risc pentru calitate și satisfacția clienților.
- **problemList:**
  - **bold:** "Defecte de Capac/Etichetă Lipsă" | **text:** "Riscul ca capacele sau etichetele lipsă să treacă neobservate în timpul fluxului de mare viteză al liniei."
  - **bold:** "Expedierea Produselor Defecte" | **text:** "Posibilitatea ca produsele cu ambalaj defect să fie ambalate și să ajungă la client."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Sistem de viziune automat cu detecție prezență-absență
- **solutionLede:** Un sistem de camere a fost instalat pe linia de producție, iar verificările de prezență-absență au fost efectuate automat pe produse. Camera a verificat dacă componente precum etichetele și capacele sunt prezente, detectând produsele lipsă sau defecte. Astfel, procesul de control al calității a fost eliminat din inițiativa operatorului, devenind automat și consecvent.
- **steps:**
  - **no:** "01" | **title:** "Detectare Produs" | **text:** "Produsul este declanșat când intră în câmpul vizual al camerei la punctul de control al calității."
  - **no:** "02" | **title:** "Procesare Imagine" | **text:** "Sistemul de camere captează instantaneu imaginea produsului și începe verificarea componentelor."
  - **no:** "03" | **title:** "Verificare Prezență" | **text:** "Software-ul analizează dacă eticheta și capacul sunt prezente în locațiile desemnate."
  - **no:** "04" | **title:** "Respingere Defecte" | **text:** "Dacă este detectată o componentă lipsă sau defectă, sistemul ia măsuri de respingere prin PLC."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipament Utilizat
- **techTitle:** Arhitectură de inspecție automată bazată pe cameră
- **techGrid:**
  - **tag:** "VIZIUNE" | **title:** "Unitate Control bazată pe Cameră" | **text:** "Sistem de camere inteligente industriale care verifică prezența capacului și a etichetei la viteză mare."
  - **tag:** "AUTOMATIZARE" | **title:** "Arhitectură PLC Câmp" | **text:** "PLC care gestionează cilindrul de respingere și fluxul liniei conform rezultatelor analizei imaginilor."
  - **tag:** "HARDWARE" | **title:** "Senzori și Declanșare" | **text:** "Senzori industriali care asigură captarea imaginilor de către cameră cu o sincronizare precisă."
  - **tag:** "SOFTWARE" | **title:** "Interfață Monitorizare Centrală" | **text:** "Software în care statisticile de control al calității și datele despre produse sunt monitorizate."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Integrarea Sistemelor Centrale de Urmărire a Calității
- **integrationDesc:** Sistemul este integrat cu sistemele existente ale clientului; rezultatele inspecției sunt partajate cu aceste sisteme, permițând monitorizarea și gestionarea centralizată a procesului.
- **integrationList:**
  - **bold:** "Raportare Calitate" | **text:** "Tipul și frecvența defectelor precum capacele sau etichetele lipsă sunt înregistrate instantaneu în baza de date centrală."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Ieșire impecabilă a produselor și inspecție consecventă
- **resultsGrid:**
  - **title:** "Zero Defecte la Ieșire" | **text:** "Niciun produs cu etichete sau capace lipsă nu are voie să părăsească fabrica."
  - **title:** "Controlul Calității Standardizat" | **text:** "Inspecțiile sunt efectuate 24/7 cu aceeași sensibilitate, independent de inițiativa oamenilor."
  - **title:** "Raport de Trasabilitate" | **text:** "Abaterile mașinilor de producție pot fi detectate din timp datorită statisticilor produselor defecte."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să vă transformați și procesele de producție?
- **ctaSubtitle:** Contactați-ne pentru a discuta cum putem implementa o soluție similară pentru afacerea dumneavoastră.
- **ctaPrimary:** Contactați-ne


---

### 25. NEMAK - Parça İzlenebilirlik
**Slug:** `nemak-parts-traceability` | **ID:** `20` | **Sıra (Order):** `25` | **Yıl:** `2020`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `nemak-parts-traceability`
- **Sıralama (order):** `25`
- **Yıl (year / referenceDate):** `2020`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `RFID, Barcode, ERP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/nemak-seeklogo-removebg-preview.png`
  - **Ana Görsel (image):** `/images/companies/Nemak/nemak-slovakia_2019_4_only-new-plant-scaled.jpg`
  - **Hero Görseli (heroImage):** `/images/companies/Nemak/nemak-slovakia_2019_4_only-new-plant-scaled.jpg`
  - **Galeri Görselleri (gallery):**
  - /images/companies/Nemak/Resim-2025-04-05T211710.704-1024x680.webp
  - /images/companies/Nemak/Resim-2025-04-05T211739.798-1024x680.webp

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** NEMAK - Parça İzlenebilirlik
- **Sektör (sector / tagValue):** Otomotiv
- **Konum (locationValue):** İzmir Çiğli
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** NEMAK'ın kesikli üretim izlenebilirlik sisteminde yarı mamuller, tüm üretim ve lojistik süreci boyunca takip edilmektedir. Her ürüne bir Datamatrix kodu yerleştirilir; operasyonlar arasında hareket ederken taranarak konteyneriyle ilişkilendirilir. Bu sayede her konteynerin hassas takibi sağlanırken birikmiş konteynerlerin depoya verimli nakliyesi gerçekleştirilir. Tüm akış, panolar aracılığıyla gerçek zamanlı izlenebilir; tam şeffaflık ve operasyonel kontrol sağlanır.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Kesikli üretimde,
- **heroTitleLine2:** Datamatrix tabanlı parça-konteyner ilişkisi.
- **heroSub:** NEMAK'ın Çiğli'deki (İzmir) fabrikasında hayata geçirilen kesikli üretim izlenebilirlik sisteminde, yarı mamuller tüm üretim ve lojistik süreci boyunca takip edilmektedir.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Döküm sanayinde yarı mamul hareketleri
- **contextP1:** NEMAK'ın Çiğli'deki (İzmir) fabrikası, döküm yöntemiyle otomotiv yan sanayine yönelik parça üretimi yapmaktadır. Bu fabrikada hayata geçirilen kesikli üretim izlenebilirlik sisteminde, yarı mamuller tüm üretim ve lojistik süreci boyunca takip edilmektedir.
- **contextP2:** Kesikli üretimde her bir parçanın lojistik hareketlerini ve depolama durumunu anlık olarak kontrol etmek, operasyonel verimliliği artırmak ve kayıpları önlemek için kritik öneme sahiptir.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Konteyner takibi zorlukları ve verimsizlik
- **problemLede:** Kesikli üretim yapısında yarı mamullerin üretim ve lojistik süreci boyunca izlenebilmesi, hangi parçanın hangi konteynerde bulunduğunun her aşamada bilinmesi gerekiyordu. Bu ilişkinin manuel takibi, izlenebilirlik boşluğu ve konteyner hareketlerinde verimsizlik riski taşıyor; sürecin gerçek zamanlı görünürlüğe kavuşturulması gerekiyordu.
- **problemList:**
  - **bold:** "Konteyner Eşleştirme Boşluğu" | **text:** "Hangi parçanın hangi taşıma konteynerinde olduğunun anlık olarak bilinememesi."
  - **bold:** "Lojistik Gecikmeler" | **text:** "Birikmiş veya yanlış sevk edilen konteynerlerin depo akışında aksamalara yol açması."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Datamatrix eşleştirmeli gerçek zamanlı web kontrolü
- **solutionLede:** Her ürüne bir Datamatrix kodu markalanır; parçalar operasyonlar arasında hareket ederken okutularak ilgili konteyneriyle ilişkilendirilir. Bu sayede her konteynerin hassas takibi sağlanırken, birikmiş konteynerlerin depoya verimli biçimde nakliyesi gerçekleştirilir. Tüm akış, sistem aracılığıyla gerçek zamanlı olarak izlenebilmekte; böylece tam şeffaflık ve operasyonel kontrol sağlanmaktadır.
- **steps:**
  - **no:** "01" | **title:** "Datamatrix Markalama" | **text:** "Üretilen parçalar döküm sonrasında kalıcı Datamatrix kod ile markalanır."
  - **no:** "02" | **title:** "Konteyner Eşleştirme" | **text:** "Parçalar konteynerlere konulurken kodları okunarak konteyner ID'si ile eşleştirilir."
  - **no:** "03" | **title:** "Rota Taraması" | **text:** "Operasyonlar arası geçişte okutulan parçalar üzerinden konteyner rotası doğrulanır."
  - **no:** "04" | **title:** "Web SCADA İzleme" | **text:** "Tüm hareketler ve doluluk oranları web tabanlı SCADA ekranlarından anlık takip edilir."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** Vizyon donanımları ve Web SCADA yapısı
- **techGrid:**
  - **tag:** "DONANIM" | **title:** "Endüstriyel Kod Okuyucular" | **text:** "Zorlu dökümhane koşullarında metal yüzeylerdeki Datamatrix kodları okuyabilen saha donanımları."
  - **tag:** "OTOMASYON" | **title:** "PLC Saha Yönetimi" | **text:** "Kod okuma tetiklemelerini ve konfigürasyonlarını yöneten kontrol üniteleri."
  - **tag:** "YAZILIM" | **title:** "Web SCADA Arayüzü" | **text:** "Tarayıcı bağımsız, anlık üretim ve konteyner hareketlerinin görüntülendiği kullanıcı ekranları."
  - **tag:** "TAKİP" | **title:** "OnSuite Trace Altyapısı" | **text:** "Parça-konteyner eşleştirmelerini tutan ve lojistik hareketlerin izlenebilirliğini sağlayan çekirdek yazılım."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** NEMAK Global MES Entegrasyonu
- **integrationDesc:** Uygulama, NEMAK Global MES (Üretim Yürütme Sistemi) ile entegre çalışmaktadır. Sahadan toplanan parça izlenebilirlik verileri ve konteyner hareketleri doğrudan global MES sistemine aktarılarak entegrasyon sağlanmaktadır.
- **integrationList:**
  - **bold:** "Global MES Bağlantısı" | **text:** "Üretim onayları ve lojistik hareketler NEMAK'ın global yönetim sistemine anlık senkronize edilir."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Uçtan uca şeffaflık ve operasyonel verimlilik
- **resultsGrid:**
  - **title:** "Parça-Konteyner İlişkisi" | **text:** "Her yarı mamulün hangi konteynerde olduğu net şekilde bilinerek parça takibi hassaslaştırılmıştır."
  - **title:** "Nakliye Optimizasyonu" | **text:** "Birikmiş konteynerlerin tespiti sayesinde depoya taşıma operasyonları daha planlı yürütülür."
  - **title:** "Gerçek Zamanlı Görünürlük" | **text:** "Web SCADA ekranları ile üretim ve ambar hareketleri her an her yerden anlık izlenebilir."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Üretim süreçlerinizi de dönüştürmek ister misiniz?
- **ctaSubtitle:** Benzer bir çözümü işletmenize nasıl uygulayabileceğimizi konuşmak için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Nemak Parts Traceability
- **Sector (sector / tagValue):** Automotive
- **Location (locationValue):** Izmir Cigli
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** In NEMAK's discrete manufacturing traceability system, semi-finished products are tracked throughout the entire manufacturing and logistics process. Each product is fitted with a Datamatrix code, which is scanned and associated with its container as it moves between operations. This ensures precise tracking of each container, while accumulated containers are efficiently transported to the warehouse. The entire flow can be monitored in real time through dashboards, providing complete transparency and operational control.

##### Hero Section (EN)
- **heroTitleLine1:** In discrete manufacturing,
- **heroTitleLine2:** Datamatrix-based part-container relationship.
- **heroSub:** In the discrete manufacturing traceability system implemented at NEMAK's factory in Cigli (Izmir), semi-finished products are tracked throughout the entire manufacturing and logistics process.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Semi-finished product movements in the foundry industry
- **contextP1:** NEMAK's factory in Cigli (Izmir) produces parts for the automotive supply industry using the casting method. In the discrete manufacturing traceability system implemented at this factory, semi-finished products are tracked throughout the entire manufacturing and logistics process.
- **contextP2:** In discrete manufacturing, instantly controlling the logistics movements and storage status of each part is critical to increasing operational efficiency and preventing losses.

##### Problem / Challenge (EN)
- **problemEyebrow:** Needs / Problems
- **problemTitle:** Container tracking difficulties and inefficiency
- **problemLede:** In the discrete manufacturing structure, it was necessary to track semi-finished products throughout the manufacturing and logistics process, knowing which part was in which container at every stage. Manual tracking of this relationship carried the risk of traceability gaps and inefficiency in container movements; the process needed real-time visibility.
- **problemList:**
  - **bold:** "Container Matching Gap" | **text:** "Inability to know in real time which part is in which transport container."
  - **bold:** "Logistics Delays" | **text:** "Accumulated or wrongly routed containers causing disruptions in the warehouse flow."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Real-time web control with Datamatrix matching
- **solutionLede:** A Datamatrix code is marked on each product; parts are scanned and linked to their respective containers as they move between operations. This ensures precise tracking of each container while allowing efficient transport of accumulated containers to the warehouse. The entire flow can be monitored in real time through the system, providing full transparency and operational control.
- **steps:**
  - **no:** "01" | **title:** "Datamatrix Marking" | **text:** "Produced parts are marked with a permanent Datamatrix code after casting."
  - **no:** "02" | **title:** "Container Linking" | **text:** "As parts are loaded into containers, their codes are read and matched with the container ID."
  - **no:** "03" | **title:** "Route Verification" | **text:** "The container route is verified through the parts scanned during transitions between operations."
  - **no:** "04" | **title:** "Web SCADA Monitoring" | **text:** "All movements and fill rates are tracked instantly from web-based SCADA dashboards."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** Vision equipment and Web SCADA structure
- **techGrid:**
  - **tag:** "HARDWARE" | **title:** "Industrial Code Readers" | **text:** "Field hardware capable of reading Datamatrix codes on metal surfaces in harsh foundry conditions."
  - **tag:** "AUTOMATION" | **title:** "PLC Field Management" | **text:** "Control units managing code reading triggers and configurations."
  - **tag:** "SOFTWARE" | **title:** "Web SCADA Interface" | **text:** "Browser-independent user screens where instant production and container movements are displayed."
  - **tag:** "TRACKING" | **title:** "OnSuite Trace Infrastructure" | **text:** "Core software maintaining part-container matching and enabling logistics traceability."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** NEMAK Global MES Integration
- **integrationDesc:** The application operates integrated with the NEMAK Global MES (Manufacturing Execution System). Part traceability data and container movements collected from the field are directly transmitted to the global MES system.
- **integrationList:**
  - **bold:** "Global MES Connection" | **text:** "Production approvals and logistics movements are instantly synchronized to NEMAK's global management system."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** End-to-end transparency and operational efficiency
- **resultsGrid:**
  - **title:** "Part-Container Mapping" | **text:** "Part tracking is made precise by clearly knowing which container holds each semi-finished product."
  - **title:** "Transportation Optimization" | **text:** "Thanks to the detection of accumulated containers, transport operations to the warehouse are run in a planned manner."
  - **title:** "Real-Time Visibility" | **text:** "With Web SCADA screens, production and warehouse movements can be monitored instantly from anywhere."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Want to transform your production processes too?
- **ctaSubtitle:** Contact us to discuss how we can implement a similar solution for your business.
- **ctaPrimary:** Get in Touch

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** NEMAK - Trasabilitatea pieselor
- **Sector (sector / tagValue):** Industria auto
- **Locație (locationValue):** Izmir Cigli
- **Domeniu de Aplicare (scopeVal):** Software și Integrare
- **An (year):** An
- **Descriere Scurtă (description):** În sistemul de trasabilitate Nemak pentru producția discretă, produsele semifinite sunt urmărite pe parcursul întregului proces de fabricație și logistică. Fiecare produs este echipat cu un cod Datamatrix, care este scanat și conectat la containerul său pe măsură ce se deplasează prin operațiuni. Acest lucru asigură urmărirea precisă a fiecărui container, în timp ce containerele acumulate sunt transportate eficient la depozit. Întregul flux poate fi monitorizat în timp real prin intermediul tablourilor de bord, oferind transparență deplină și control operațional.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** În producția discretă,
- **heroTitleLine2:** relație piesă-container bazată pe Datamatrix.
- **heroSub:** În sistemul de trasabilitate pentru producția discretă implementat la fabrica NEMAK din Cigli (Izmir), produsele semifinite sunt urmărite pe parcursul întregului proces de fabricație și loigistică.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Mișcări de produse semifinite în industria turnătoriei
- **contextP1:** Fabrica NEMAK din Cigli (Izmir) produce piese pentru industria furnizorilor de componente auto folosind metoda turnării. În sistemul de trasabilitate pentru producția discretă implementat la această fabrică, produsele semifinite sunt urmărite pe parcursul întregului proces de fabricație și logistică.
- **contextP2:** În producția discretă, controlul instantaneu al mișcărilor logistice și al stării de stocare a fiecărei piese este esențial pentru creșterea eficienței operaționale și prevenirea pierderilor.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoie / Problemă
- **problemTitle:** Dificultăți de urmărire a containerelor și ineficiență
- **problemLede:** În structura de producție discretă, era necesară urmărirea produselor semifinite pe parcursul procesului de fabricație și logistică, știind în ce container se află fiecare piesă în fiecare etapă. Urmărirea manuală a acestei relații purta riscul apariției unor lacune de trasabilitate și a ineficienței în mișcările containerelor; procesul avea nevoie de vizibilitate în timp real.
- **problemList:**
  - **bold:** "Lacună Potrivire Containere" | **text:** "Imposibilitatea de a ști în timp real ce piesă se află în ce container de transport."
  - **bold:** "Întârzieri Logistice" | **text:** "Containerele acumulate sau rutate greșit care cauzează întreruperi în fluxul depozitului."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Control web în timp real cu potrivire Datamatrix
- **solutionLede:** Un cod Datamatrix este marcat pe fiecare produs; piesele sunt scanate și conectate la containerele lor respective pe măsură ce se deplasează între operațiuni. Acest lucru asigură urmărirea precisă a fiecărui container, permițând în același timp transportul eficient al containerelor acumulate la depozit. Întregul flux poate fi monitorizat în timp real prin sistem, oferind transparență deplină și control operațional.
- **steps:**
  - **no:** "01" | **title:** "Marcare Datamatrix" | **text:** "Piesele produse sunt marcate cu un cod Datamatrix permanent după turnare."
  - **no:** "02" | **title:** "Conectare Container" | **text:** "Pe măsură ce piesele sunt încărcate în containere, codurile lor sunt citite și potrivite cu ID-ul containerului."
  - **no:** "03" | **title:** "Verificare Rută" | **text:** "Ruta containerului este verificată prin piesele scanate în timpul tranzițiilor."
  - **no:** "04" | **title:** "Monitorizare Web SCADA" | **text:** "Toate mișcările și ratele de umplere sunt urmărite instantaneu de pe tablourile de bord Web SCADA."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipament Utilizat
- **techTitle:** Echipament de viziune și structură Web SCADA
- **techGrid:**
  - **tag:** "HARDWARE" | **title:** "Cititoare Coduri Industriale" | **text:** "Echipamente de teren capabile să citească coduri Datamatrix pe suprafețe metalice în condiții dure de turnătorie."
  - **tag:** "AUTOMATIZARE" | **title:** "Management PLC Câmp" | **text:** "Unități de control care gestionează declanșatoarele și configurațiile de citire a codurilor."
  - **tag:** "SOFTWARE" | **title:** "Interfață Web SCADA" | **text:** "Ecrane de utilizator independente de browser în care sunt afișate mișcările de producție."
  - **tag:** "URMĂRIRE" | **title:** "Infrastructura OnSuite Trace" | **text:** "Software de bază care menține potrivirea piesă-container și permite trasabilitatea."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Integrarea NEMAK Global MES
- **integrationDesc:** Aplicația funcționează integrată cu sistemul NEMAK Global MES (Manufacturing Execution System). Datele de trasabilitate a pieselor și mișcările containerelor colectate de pe teren sunt transmise direct sistemului global MES.
- **integrationList:**
  - **bold:** "Conexiune MES Globală" | **text:** "Aprobările de producție și mișcările logistice sunt sincronizate instantaneu în sistemul global."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Transparență completă și eficiență operațională
- **resultsGrid:**
  - **title:** "Harta Piesă-Container" | **text:** "Urmărirea pieselor este precisă știind clar ce container conține fiecare produs semifinit."
  - **title:** "Optimizare Transport" | **text:** "Datorită detectării containerelor acumulate, operațiunile de transport la depozit sunt derulate planificat."
  - **title:** "Vizibilitate în Timp Real" | **text:** "Cu Web SCADA, mișcările de producție și depozitare pot fi monitorizate instantaneu de oriunde."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să vă transformați și procesele de producție?
- **ctaSubtitle:** Contactați-ne pentru a discuta cum putem implementa o soluție similară pentru afacerea dumneavoastră.
- **ctaPrimary:** Contactați-ne


---

### 26. Haier Europe - Sorting Hattı ve İzlenebilirlik
**Slug:** `haier-europe-sorting-line-installation-traceability` | **ID:** `21` | **Sıra (Order):** `26` | **Yıl:** `2020`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `haier-europe-sorting-line-installation-traceability`
- **Sıralama (order):** `26`
- **Yıl (year / referenceDate):** `2020`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `RFID, Barcode, ERP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/haier_europa_2025.svg`
  - **Ana Görsel (image):** `/images/companies/Haier/Haier-Europe-New-Turkey-Factory.jpg`
  - **Hero Görseli (heroImage):** `/images/companies/Haier/Haier-Europe-New-Turkey-Factory.jpg`
  - **Galeri Görselleri (gallery):**
  - /images/companies/Haier/Haier-Turchia.jpg
  - /images/companies/Haier/20211022_162223-scaled-1.jpg
  - /images/companies/Haier/haierin-eskisehirdeki-85-milyon-avroluk-yatirimi-1600-kisiye-istihdam-saglayacak_066df37.jpg

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Haier Europe - Sorting Hattı ve İzlenebilirlik
- **Sektör (sector / tagValue):** Beyaz Eşya
- **Konum (locationValue):** Eskişehir
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** SISKON tarafından kurulan sistemde montaj ve tamir hatlarından gelen ürünler asansör aracılığıyla ambalaj hattına gönderilmekte; ambalajlama sonrası ürünler otomatik olarak sıralama hattına yönlendirilmektedir. Montaj hattı planına göre sıralama hatları otomatik programlanmaktadır. Sıralama hattında barkodla taranan ürünler ilgili hatlara yönlendirilmektedir. Hatlarda biriken ürünler forklift operatörleri tarafından alınarak depoya gönderilmektedir. Tüm süreç sahada bulunan Andon TV'leri aracılığıyla canlı izlenebilmektedir.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Otomatik sorting hattı,
- **heroTitleLine2:** Andon ekranlarıyla canlı izlenebilir akış.
- **heroSub:** Haier Europe'un Eskişehir'deki pişirme cihazları fabrikasında hayata geçirilen projede, montaj ve ambalaj sonrası ürünlerin otomatik olarak sıralanması ve sevkiyata hazırlanması sağlanmıştır. Proje, ambalaj çıkışından depoya kadar olan akışın otomatikleştirilmesi ve canlı izlenebilirliği amacıyla gerçekleştirilmiştir.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Beyaz eşyada sevkiyat öncesi otomatik yönlendirme
- **contextP1:** Beyaz eşya üretiminde küresel bir lider olan Haier Europe'un Eskişehir'deki pişirme cihazları fabrikasında hayata geçirilen projede, montaj ve ambalaj sonrası ürünlerin otomatik olarak sıralanması ve sevkiyata hazırlanması sağlanmıştır.
- **contextP2:** Proje, ambalaj çıkışından depoya kadar olan lojistik akışın otomatikleştirilmesi, yanlış ürün sevkiyatlarının önlenmesi ve canlı izlenebilirliğin sağlanması amacıyla gerçekleştirilmiştir.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Manuel sıralama hataları ve süreç görünürlüğü eksikliği
- **problemLede:** Montaj ve tamir hatlarından gelen ürünlerin ambalajlama sonrası doğru sıralama hatlarına yönlendirilmesi ve bu akışın kontrollü, izlenebilir biçimde yürütülmesi gerekiyordu. Sıralama ve yönlendirmenin manuel yürütülmesi, yanlış hatta yönlendirme, verimsizlik ve süreç görünürlüğünün zayıf kalması riskini taşıyordu.
- **problemList:**
  - **bold:** "Yanlış Hat Yönlendirmeleri" | **text:** "Ürünlerin montaj planına uygun olmayan sıralama hatlarına yönlendirilerek karışıklık yaratması."
  - **bold:** "Görünürlük Eksikliği" | **text:** "Forklift operatörlerinin hangi hatta hangi üründen ne kadar biriktiğini anlık görememesi."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Barkod okumalı otomatik sıralama ve Andon takibi
- **solutionLede:** SISKON tarafından kurulan sistemde, montaj ve tamir hatlarından gelen ürünler asansör aracılığıyla ambalaj hattına gönderilmekte; ambalajlama sonrası ürünler otomatik olarak sıralama hattına yönlendirilmektedir. Montaj hattı planına göre sıralama hatları otomatik olarak programlanmakta, sıralama hattında barkodla taranan ürünler ilgili hatlara yönlendirilmektedir. Hatlarda biriken ürünler forklift operatörleri tarafından alınarak depoya gönderilmektedir. Tüm süreç, sahada bulunan Andon TV'leri aracılığıyla canlı olarak izlenebilmektedir.
- **steps:**
  - **no:** "01" | **title:** "Ambalaja Sevk" | **text:** "Montajdan çıkan ürünler asansör sistemiyle otomatik olarak ambalaj hattına taşınır."
  - **no:** "02" | **title:** "Barkod Taraması" | **text:** "Ambalaj çıkışındaki ürünlerin barkodları taranarak montaj planı bilgileri sorgulanır."
  - **no:** "03" | **title:** "Otomatik Sorting" | **text:** "Ürünler, montaj planına göre programlanmış sıralama hatlarına otomatik yönlendirilir."
  - **no:** "04" | **title:** "Andon İzleme" | **text:** "Forklift operatörleri hat doluluklarını Andon ekranlarından izleyerek depoya taşır."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** Sorting donanımları ve canlı Andon takip altyapısı
- **techGrid:**
  - **tag:** "DONANIM" | **title:** "Otomasyonlu Sıralama Yapısı" | **text:** "Ürünleri belirlenen hatlara fiziksel olarak yönlendiren mekanik konveyör ve sorting yapısı."
  - **tag:** "OKUYUCU" | **title:** "Barkod Okuma İstasyonları" | **text:** "Hattın üstünde konumlanarak ürün seri numaralarını otomatik okuyan endüstriyel okuyucular."
  - **tag:** "OTOMASYON" | **title:** "PLC Kontrol Altyapısı" | **text:** "Montaj planlarını alan ve sorting yönlendirmelerini yöneten saha PLC üniteleri."
  - **tag:** "GÖRSEL" | **title:** "Andon Bilgi TV Ekranları" | **text:** "Forklift operatörleri için hat doluluklarını ve sevk emirlerini gösteren büyük ekranlar."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** Haier Global MES Entegrasyonu
- **integrationDesc:** Sistem, Haier Europe'un Global MES (Üretim Yürütme Sistemi) ile tam entegre çalışmaktadır. Sıralama sonuçları, barkod eşleşmeleri ve depoya sevk verileri bu entegrasyon üzerinden canlı aktarılır.
- **integrationList:**
  - **bold:** "Global MES Entegrasyonu" | **text:** "Sıralama verileri ve ambalaj çıkış onayları global MES sistemine anlık aktarılarak güncellenir."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Hatasız yönlendirme ve canlı lojistik kontrol
- **resultsGrid:**
  - **title:** "Otomatik Akış Yönetimi" | **text:** "Ambalaj sonrasından depoya kadar olan akış insan inisiyatifinden çıkarılarak otomatikleştirilmiştir."
  - **title:** "Doğru Sıralama Hatları" | **text:** "Montaj planına göre otomatik programlanan sorting sayesinde yönlendirme hataları sıfırlanmıştır."
  - **title:** "Andon ile Hızlı Sevk" | **text:** "Forklift operatörlerinin Andon ekranlarından anlık takibiyle hatlarda şişme ve gecikmeler önlenmiştir."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Üretim süreçlerinizi de dönüştürmek ister misiniz?
- **ctaSubtitle:** Benzer bir çözümü işletmenize nasıl uygulayabileceğimizi konuşmak için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Haier Europe Sorting Line Installation Traceability
- **Sector (sector / tagValue):** Home Appliances
- **Location (locationValue):** Eskisehir
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** In the system established by SISKON, products from the assembly and repair lines are sent to the packaging line via an elevator. After packaging, products are automatically directed to the sorting line. Based on the assembly line plan, sorting lines are programmed automatically. Products scanned with barcodes on the sorting line are directed to the relevant lines. Products accumulated on the lines are collected by forklift operators and sent to the warehouse. The entire process can be monitored live through Andon TVs on site.

##### Hero Section (EN)
- **heroTitleLine1:** Automatic sorting line,
- **heroTitleLine2:** live traceable flow with Andon screens.
- **heroSub:** In the project implemented at Haier Europe's cooking appliances factory in Eskisehir, automatic sorting of products and preparation for shipment after assembly and packaging were ensured. The project was carried out to automate the flow from packaging exit to the warehouse and to provide live traceability.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Automatic routing before shipment in home appliances
- **contextP1:** In the project implemented at the cooking appliances factory of Haier Europe, a global leader in home appliance production, in Eskisehir, products were automatically sorted and prepared for shipment after assembly and packaging.
- **contextP2:** The project was carried out to automate the logistics flow from packaging exit to the warehouse, prevent incorrect product shipments, and provide live traceability.

##### Problem / Challenge (EN)
- **problemEyebrow:** Needs / Problems
- **problemTitle:** Manual sorting errors and lack of process visibility
- **problemLede:** It was necessary to route products coming from assembly and repair lines to the correct sorting lines after packaging and to run this flow in a controlled and traceable manner. Executing sorting and routing manually carried the risk of routing to the incorrect line, inefficiency, and weak process visibility.
- **problemList:**
  - **bold:** "Incorrect Line Routing" | **text:** "Products being routed to sorting lines that do not match the assembly plan, creating confusion."
  - **bold:** "Lack of Visibility" | **text:** "Inability of forklift operators to see in real time how much of which product has accumulated on which line."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Automatic sorting with barcode scanning and Andon tracking
- **solutionLede:** In the system installed by SISKON, products coming from assembly and repair lines are sent to the packaging line via an elevator; post-packaging products are automatically routed to the sorting line. Sorting lines are programmed automatically based on the assembly line plan, and products scanned via barcode on the sorting line are routed to the corresponding lines. Accumulated products on the lines are picked up by forklift operators and sent to the warehouse. The entire process can be monitored live via Andon TVs in the field.
- **steps:**
  - **no:** "01" | **title:** "Routing to Packaging" | **text:** "Products coming from assembly are automatically moved to the packaging line via an elevator system."
  - **no:** "02" | **title:** "Barcode Scanning" | **text:** "Products at the packaging exit are scanned by barcode to query assembly plan details."
  - **no:** "03" | **title:** "Automatic Sorting" | **text:** "Products are automatically routed to sorting lines programmed according to the assembly plan."
  - **no:** "04" | **title:** "Andon Monitoring" | **text:** "Forklift operators monitor line fill rates from Andon screens and move them to the warehouse."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** Sorting equipment and live Andon tracking infrastructure
- **techGrid:**
  - **tag:** "HARDWARE" | **title:** "Automated Sorting Structure" | **text:** "Mechanical conveyor and sorting structure physically routing products to designated lines."
  - **tag:** "READER" | **title:** "Barcode Scanning Stations" | **text:** "Industrial readers positioned above the line automatically scanning product serial numbers."
  - **tag:** "AUTOMATION" | **title:** "PLC Control Infrastructure" | **text:** "Field PLC units receiving assembly plans and managing sorting routing."
  - **tag:** "VISUAL" | **title:** "Andon Info TV Screens" | **text:** "Large displays showing line fill rates and dispatch orders for forklift operators."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** Haier Global MES Integration
- **integrationDesc:** The system runs fully integrated with Haier Europe's Global MES (Manufacturing Execution System). Sorting results, barcode matches, and warehouse dispatch data are transmitted live through this integration.
- **integrationList:**
  - **bold:** "Global MES Integration" | **text:** "Sorting data and packaging exit approvals are instantly transmitted and updated in the global MES system."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Error-free routing and live logistics control
- **resultsGrid:**
  - **title:** "Automated Flow Management" | **text:** "The flow from post-packaging to the warehouse is removed from human initiative and automated."
  - **title:** "Accurate Sorting Lines" | **text:** "Routing errors are zeroed out thanks to sorting automatically programmed based on the assembly plan."
  - **title:** "Fast Dispatch with Andon" | **text:** "Line congestion and delays are prevented by forklift operators tracking fill rates in real time on Andon screens."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Want to transform your production processes too?
- **ctaSubtitle:** Contact us to discuss how we can implement a similar solution for your business.
- **ctaPrimary:** Get in Touch

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Haier Europe - Instalarea liniei de sortare si trasabilitate
- **Sector (sector / tagValue):** Electrocasnice
- **Locație (locationValue):** Eskisehir
- **Domeniu de Aplicare (scopeVal):** Software și Integrare
- **An (year):** An
- **Descriere Scurtă (description):** În sistemul stabilit de Siskon, produsele de pe liniile de asamblare și reparații sunt trimise către linia de ambalare printr-un elevator. După ambalare, produsele sunt direcționate automat către linia de sortare. Pe baza planului liniei de asamblare, liniile de sortare sunt programate automat. Produsele scanate cu codul de bare pe linia de sortare sunt direcționate către liniile relevante. Produsele acumulate pe linii sunt preluate de operatorii de stivuitor și trimise în depozit. Întregul proces poate fi monitorizat în direct prin intermediul televizoarelor Andon amplasate la fața locului.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Linie de sortare automată,
- **heroTitleLine2:** flux trasabil live cu ecrane Andon.
- **heroSub:** În cadrul proiectului implementat la fabrica de aparate de gătit Haier Europe din Eskisehir, s-a asigurat sortarea automată a produselor și pregătirea pentru expediere după asamblare și ambalare. Proiectul a fost realizat pentru a automatiza fluxul de la ieșirea din ambalare la depozit și pentru a oferi trasabilitate live.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Rutare automată înainte de expediere în electrocasnice
- **contextP1:** În cadrul proiectului implementat la fabrica de aparate de gătit a Haier Europe, un lider global în producția de electrocasnice, din Eskisehir, produsele au fost sortate automat și pregătite pentru expediere după asamblare și ambalare.
- **contextP2:** Proiectul a fost realizat pentru a automatiza fluxul logistic de la ieșirea din ambalare la depozit, pentru a preveni expedierile de produse incorecte și pentru a oferi trasabilitate live.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoie / Problemă
- **problemTitle:** Erori de sortare manuală și lipsa vizibilității procesului
- **problemLede:** Era necesară direcționarea produselor care veneau de la liniile de asamblare și reparare către liniile de sortare corecte după ambalare și rularea acestui flux într-un mod controlat și trasabil. Rularea manuală a sortării și rutării presupunea riscul direcționării către o linie incorectă, ineficiență și o vizibilitate redusă a procesului.
- **problemList:**
  - **bold:** "Rutare Incorectă pe Linii" | **text:** "Produse direcționate către linii de sortare care nu corespund planului de asamblare, creând confuzie."
  - **bold:** "Lipsa Vizibilității" | **text:** "Imposibilitatea operatorilor de stivuitor de a vedea în timp real cât de mult din ce produs s-a acumulat pe ce linie."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Sortare automată cu scanare coduri de bare și urmărire Andon
- **solutionLede:** În sistemul instalat de SISKON, produsele care vin de la liniile de asamblare și reparare sunt trimise la linia de ambalare printr-un elevator; produsele post-ambalare sunt direcționate automat către linia de sortare. Liniile de sortare sunt programate automat pe baza planului liniei de asamblare, iar produsele scanate prin coduri de bare pe linia de sortare sunt direcționate către liniile corespunzătoare. Produsele acumulate pe linii sunt preluate de operatorii de stivuitor și trimise în depozit. Întregul proces poate fi monitorizat live prin ecranele Andon de pe teren.
- **steps:**
  - **no:** "01" | **title:** "Trimitere la Ambalare" | **text:** "Produsele de la asamblare sunt mutate automat pe linia de ambalare printr-un sistem de elevator."
  - **no:** "02" | **title:** "Scanare Coduri de Bare" | **text:** "Produsele de la ieșirea din ambalare sunt scanate pentru a interoga detaliile planului de asamblare."
  - **no:** "03" | **title:** "Sortare Automată" | **text:** "Produsele sunt direcționate automat către liniile de sortare programate conform planului."
  - **no:** "04" | **title:** "Monitorizare Andon" | **text:** "Operatorii de stivuitor monitorizează ratele de umplere a liniilor de pe ecranele Andon și le mută."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipament Utilizat
- **techTitle:** Echipament de sortare și infrastructură de urmărire Andon
- **techGrid:**
  - **tag:** "HARDWARE" | **title:** "Structură de Sortare Automată" | **text:** "Transportor mecanic și structură de sortare care direcționează fizic produsele pe linii."
  - **tag:** "CITITOR" | **title:** "Stații de Scanare" | **text:** "Cititoare industriale poziționate deasupra liniei care scanează automat numerele de serie."
  - **tag:** "AUTOMATIZARE" | **title:** "Infrastructură de Control PLC" | **text:** "Unități PLC de teren care primesc planurile de asamblare și gestionează rutarea."
  - **tag:** "VIZUAL" | **title:** "Ecrane TV Andon" | **text:** "Afișaje mari care arată ratele de umplere ale liniilor și comenzile de expediere pentru stivuitoriști."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Integrarea Haier Global MES
- **integrationDesc:** Sistemul funcționează complet integrat cu sistemul Global MES (Manufacturing Execution System) al Haier Europe. Rezultatele sortării, potrivirile codurilor de bare și datele de expediere în depozit sunt transmise live.
- **integrationList:**
  - **bold:** "Integrare MES Globală" | **text:** "Datele de sortare și aprobările de ieșire din ambalare sunt transmise și actualizate instantaneu în sistemul MES."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Rutare fără erori și control logistic live
- **resultsGrid:**
  - **title:** "Management Automat de Flux" | **text:** "Fluxul de la post-ambalare la depozit este eliminat din inițiativa umană și automatizat."
  - **title:** "Linii de Sortare Precise" | **text:** "Erorile de rutare sunt reduse la zero datorită sortării programate automat pe baza planului."
  - **title:** "Expediere Rapidă cu Andon" | **text:** "Congestia liniilor și întârzierile sunt prevenite prin operatorii de stivuitor care urmăresc ratele în timp real."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să vă transformați și procesele de producție?
- **ctaSubtitle:** Contactați-ne pentru a discuta cum putem implementa o soluție similară pentru afacerea dumneavoastră.
- **ctaPrimary:** Contactați-ne


---

### 27. Haier Europe - Montaj Hatları Kurulumu ve İzlenebilirlik
**Slug:** `haier-europe-assembly-line-installation-traceability` | **ID:** `19` | **Sıra (Order):** `27` | **Yıl:** `2020`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `haier-europe-assembly-line-installation-traceability`
- **Sıralama (order):** `27`
- **Yıl (year / referenceDate):** `2020`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `RFID, Barcode, ERP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/haier_europa_2025.svg`
  - **Ana Görsel (image):** `/images/companies/Haier/Haier-Turchia.jpg`
  - **Hero Görseli (heroImage):** `/images/companies/Haier/Haier-Turchia.jpg`
  - **Galeri Görselleri (gallery):**
  - /images/companies/Haier/Haier-Europe-New-Turkey-Factory.jpg
  - /images/companies/Haier/Haier-Tech-Romania_1.jpg
  - /images/companies/Haier/20211022_162223-scaled-1.jpg
  - /images/companies/Haier/haierin-eskisehirdeki-85-milyon-avroluk-yatirimi-1600-kisiye-istihdam-saglayacak_066df37.jpg

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Haier Europe - Montaj Hatları Kurulumu ve İzlenebilirlik
- **Sektör (sector / tagValue):** Beyaz Eşya
- **Konum (locationValue):** Eskişehir
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Türkiye'deki Haier fabrikasında yürütülen projemizde montaj hatlarındaki manuel planlama, takip ve kontrol süreçleri tamamen otomatik hale getirildi. SISKON, Haier Europe'un pişirme cihazları fabrikasına yeni montaj hatları kurdu ve konveyör sistemlerini tamamen yeniledi. Tüm montaj süreci dijital olarak izlenebilir hâle getirildi. Montaj hattının başından depoya kadar benzersiz kimlikler temelinde tüm ürünler için uçtan uca izlenebilirlik sağlandı.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Yeni montaj hatları,
- **heroTitleLine2:** uçtan uca dijital süreç takibi.
- **heroSub:** Haier Europe'un Eskişehir'deki pişirme cihazları fabrikasında hayata geçirilen projede, montaj hatlarındaki manuel planlama, takip ve kontrol süreçleri tamamen otomatik hâle getirilmiştir. Proje kapsamında yeni montaj hatları kurulmuş ve süreç uçtan uca izlenebilir kılınmıştır.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Üretimde dijitalleşme ve yenilenen konveyör sistemleri
- **contextP1:** Beyaz eşya üretiminde küresel bir lider olan Haier Europe'un Eskişehir'deki pişirme cihazları fabrikasında hayata geçirilen projede, montaj hatlarındaki manuel planlama, takip ve kontrol süreçleri tamamen otomatik hâle getirilmiştir.
- **contextP2:** Proje kapsamında yeni montaj hatları kurulmuş, konveyör sistemleri tamamen yenilenmiş ve ambalajdan depoya kadar tüm süreç uçtan uca izlenebilir kılınmıştır.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Manuel izleme boşlukları ve test-tamir entegrasyonu ihtiyacı
- **problemLede:** Montaj hatlarında planlama, takip ve kontrol süreçleri manuel yürütülüyordu; bu durum süreç görünürlüğünü zayıflatıyor, hata ve verimsizlik riski taşıyordu. Üretimin başından depoya kadar her ürünün tekil olarak izlenebildiği, test ve tamir süreçlerini de kapsayan otomatik bir yapıya ihtiyaç vardı.
- **problemList:**
  - **bold:** "Zayıf Süreç Görünürlüğü" | **text:** "Planlama ve takibin manuel yapılması nedeniyle üretim darboğazlarının anlık tespit edilememesi."
  - **bold:** "Kayıtsız Tamir Aksiyonları" | **text:** "Testten kalan hatalı ürünlerin gördüğü işlemlerin merkezi olarak kaydedilememesi."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Test-tamir döngülü uçtan uca dijital montaj yönetimi
- **solutionLede:** Haier Europe'un pişirme cihazları fabrikasına yeni montaj hatları kuruldu ve konveyör sistemleri tamamen yenilendi. Montaj hatlarındaki manuel planlama, takip ve kontrol süreçleri otomatik hâle getirilerek tüm montaj süreci dijital olarak izlenebilir kılındı. Montaj hattının başından depoya kadar, benzersiz kimlikler temelinde tüm ürünler için uçtan uca izlenebilirlik sağlandı. Üretim boyunca test verileri toplandı; test sonucuna göre uygun olmayan ürünler tamire ayrıldı ve uygulanan tamir aksiyonları sisteme kaydedildi.
- **steps:**
  - **no:** "01" | **title:** "Benzersiz Kimlik Atama" | **text:** "Montaj hattının başında her ürüne tekil kimlik (barkod/DPM) atanarak takibi başlatılır."
  - **no:** "02" | **title:** "Test Verisi Toplama" | **text:** "Ürünler test istasyonlarından geçerken test sonuçları otomatik olarak veritabanına yazılır."
  - **no:** "03" | **title:** "Tamir Yönlendirmesi" | **text:** "Testten geçemeyen ürünler otomatik olarak tamir hattına ayrılarak bloke edilir."
  - **no:** "04" | **title:** "Kayıt ve Depoya Sevk" | **text:** "Uygulanan tamir işlemleri sisteme kaydedildikten sonra ürünler onaylanarak depoya sevk edilir."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** C# SCADA ve saha entegrasyon donanımları
- **techGrid:**
  - **tag:** "DONANIM" | **title:** "Yeni Montaj ve Konveyör" | **text:** "Mekanik akışı sağlayan ve PLC kontrollü çalışan modern konveyör hat altyapısı."
  - **tag:** "KONTROL" | **title:** "PLC Saha Akış Yönetimi" | **text:** "Ürünlerin hatlar arasındaki asansör ve konveyör hareketlerini yöneten PLC'ler."
  - **tag:** "YAZILIM" | **title:** "C# SCADA Uygulaması" | **text:** "Test istasyonlarıyla haberleşen, tamir kayıtlarını alan ve onayları yöneten SCADA."
  - **tag:** "TAKİP" | **title:** "OnSuite Trace Platformu" | **text:** "Tüm test verilerini ve tamir aksiyonlarını tekil ürün kimliğiyle bağlayan ana yazılım."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** Haier Global MES Sistemi Entegrasyonu
- **integrationDesc:** Sistem Haier Europe'un Global MES Sistemi ile tam entegre çalışmaktadır. Test sonuçları, üretim onayları ve tamir kayıtları global sisteme doğrudan anlık olarak iletilmektedir.
- **integrationList:**
  - **bold:** "Global MES Entegrasyonu" | **text:** "Montaj hattı onayları, kalite test verileri ve tamir geçmişi MES sistemiyle çift yönlü senkronize edilir."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Uçtan uca şeffaf montaj ve maksimum verim
- **resultsGrid:**
  - **title:** "Uçtan Uca İzlenebilirlik" | **text:** "Hattın başından depoya kadar her ürünün test sonuçları ve lojistik hareketleri anlık takip edilebilir."
  - **title:** "Geri İzlenebilir Kalite" | **text:** "Kusurlu ürünlerin tamir adımları ve test sonuçları geriye dönük raporlanabilir."
  - **title:** "Operasyonel Verimlilik" | **text:** "Manuel planlama ve takibin dijitalleşmesiyle montaj hattı döngü süreleri optimize edilmiştir."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Üretim süreçlerinizi de dönüştürmek ister misiniz?
- **ctaSubtitle:** Benzer bir çözümü işletmenize nasıl uygulayabileceğimizi konuşmak için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Haier Europe Assembly Line Installation Traceability
- **Sector (sector / tagValue):** Home Appliances
- **Location (locationValue):** Eskisehir
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** In our project implemented at the Haier factory in Turkey, the previously manual planning, tracking, and control processes on the assembly lines were fully automated. SISKON installed new assembly lines at Haier Europe's cooking appliance factory and completely renewed the conveyor systems. The entire assembly process was made digitally traceable. End-to-end traceability was achieved for all products based on unique IDs from the start of the assembly line to the warehouse.

##### Hero Section (EN)
- **heroTitleLine1:** New assembly lines,
- **heroTitleLine2:** end-to-end digital process tracking.
- **heroSub:** In the project implemented at Haier Europe's cooking appliances factory in Eskisehir, manual planning, tracking, and control processes on the assembly lines were made fully automatic. In the scope of the project, new assembly lines were installed and the process was made traceable end-to-end.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Digitalization in manufacturing and renewed conveyor systems
- **contextP1:** In the project implemented at the cooking appliances factory of Haier Europe, a global leader in home appliances, in Eskisehir, manual planning, tracking, and control processes on the assembly lines were made fully automatic.
- **contextP2:** Within the scope of the project, new assembly lines were installed, conveyor systems were completely renewed, and the entire process from packaging to the warehouse was made traceable end-to-end.

##### Problem / Challenge (EN)
- **problemEyebrow:** Needs / Problems
- **problemTitle:** Manual tracking gaps and test-repair integration needs
- **problemLede:** Planning, tracking, and control processes on the assembly lines were carried out manually; this weakened process visibility and carried the risk of errors and inefficiency. There was a need for an automated structure where each product could be tracked individually from the start of production to the warehouse, including test and repair processes.
- **problemList:**
  - **bold:** "Weak Process Visibility" | **text:** "Inability to instantly detect production bottlenecks due to manual planning and tracking."
  - **bold:** "Unrecorded Repair Actions" | **text:** "Inability to centrally record repair operations performed on defective products that failed tests."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** End-to-end digital assembly management with test-repair loop
- **solutionLede:** New assembly lines were installed and conveyor systems were completely renewed at Haier Europe's cooking appliances factory. Manual planning, tracking, and control processes on the assembly lines were automated, making the entire assembly process digitally traceable. End-to-end traceability was achieved for all products on the basis of unique identities from the start of the assembly line to the warehouse. Test data was collected throughout production; products that failed tests were routed to repair, and the repair actions taken were recorded in the system.
- **steps:**
  - **no:** "01" | **title:** "Unique ID Assignment" | **text:** "A unique identity (barcode/DPM) is assigned to each product at the start of the line."
  - **no:** "02" | **title:** "Test Data Collection" | **text:** "As products pass through test stations, test results are automatically written to the database."
  - **no:** "03" | **title:** "Repair Routing" | **text:** "Products that fail tests are automatically diverted to the repair line and blocked."
  - **no:** "04" | **title:** "Recording & Dispatch" | **text:** "Once repair actions are logged, products are approved and dispatched to the warehouse."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** C# SCADA and field integration hardware
- **techGrid:**
  - **tag:** "HARDWARE" | **title:** "New Assembly & Conveyor" | **text:** "Modern conveyor line infrastructure providing mechanical flow and operating under PLC control."
  - **tag:** "CONTROL" | **title:** "PLC Field Flow Management" | **text:** "PLCs managing elevator and conveyor movements of products between lines."
  - **tag:** "SOFTWARE" | **title:** "C# SCADA Application" | **text:** "SCADA communicating with test stations, receiving repair logs, and managing approvals."
  - **tag:** "TRACKING" | **title:** "OnSuite Trace Platform" | **text:** "Main software linking all test data and repair actions to the unique product identity."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** Haier Global MES System Integration
- **integrationDesc:** The system runs fully integrated with Haier Europe's Global MES System. Test results, production approvals, and repair records are directly transmitted to the global system in real time.
- **integrationList:**
  - **bold:** "Global MES Integration" | **text:** "Assembly line approvals, quality test data, and repair history are bi-directionally synchronized with the MES system."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** End-to-end transparent assembly and maximum efficiency
- **resultsGrid:**
  - **title:** "End-to-End Traceability" | **text:** "Test results and logistics movements of each product can be monitored instantly from start of line to warehouse."
  - **title:** "Traceable Quality" | **text:** "Repair steps and test results of defective products can be retrospectively reported."
  - **title:** "Operational Efficiency" | **text:** "Assembly line cycle times are optimized through the digitalization of manual planning and tracking."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Want to transform your production processes too?
- **ctaSubtitle:** Contact us to discuss how we can implement a similar solution for your business.
- **ctaPrimary:** Get in Touch

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Haier Europe - Instalarea liniei de asamblare si trasabilitate
- **Sector (sector / tagValue):** Electrocasnice
- **Locație (locationValue):** Eskisehir
- **Domeniu de Aplicare (scopeVal):** Software și Integrare
- **An (year):** An
- **Descriere Scurtă (description):** În proiectul nostru implementat la fabrica din Turcia a Haier, un lider global în domeniul electrocasnicelor, am transformat procesele de planificare, urmărire și control anterior manuale din liniile de asamblare în sisteme complet automatizate. Siskon a instalat noi linii de asamblare la fabrica de aparate de gătit a Haier Europe și a reînnoit complet sistemele de transport. Întregul proces de asamblare a fost făcut urmăribil digital. Trasabilitatea end-to-end a tuturor produselor a fost realizată pe baza unor ID-uri unice de la începutul liniei de asamblare până la depozit.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Linii noi de asamblare,
- **heroTitleLine2:** urmărire digitală a procesului cap-la-cap.
- **heroSub:** În cadrul proiectului implementat la fabrica de aparate de gătit Haier Europe din Eskisehir, procesele manuale de planificare, urmărire și control de pe liniile de asamblare au fost complet automatizate. În cadrul proiectului, au fost instalate linii noi de asamblare și procesul a fost făcut trasabil cap-la-cap.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Digitalizarea în fabricație și sisteme de transportoare reînnoite
- **contextP1:** În cadrul proiectului implementat la fabrica de aparate de gătit a Haier Europe, un lider global în electrocasnice, din Eskisehir, procesele manuale de planificare, urmărire și control de pe liniile de asamblare au fost complet automatizate.
- **contextP2:** În cadrul proiectului, au fost instalate linii noi de asamblare, sistemele de transportoare au fost complet reînnoite, iar întregul proces de la ambalare la depozit a fost făcut trasabil cap-la-cap.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoie / Problemă
- **problemTitle:** Lacune de urmărire manuală și nevoi de integrare test-reparație
- **problemLede:** Procesele de planificare, urmărire și control de pe liniile de asamblare se desfășurau manual; acest lucru a slăbit vizibilitatea procesului și a purtat riscul de erori și ineficiență. Era nevoie de o structură automatizată în care fiecare produs să poată fi urmărit individual de la începutul producției până la depozit, inclusiv procesele de testare și reparație.
- **problemList:**
  - **bold:** "Vizibilitate Redusă a Procesului" | **text:** "Imposibilitatea de a detecta instantaneu blocajele de producție din cauza planificării și urmăririi manuale."
  - **bold:** "Reparații Neînregistrate" | **text:** "Imposibilitatea de a înregistra centralizat operațiunile de reparație efectuate pe produsele defecte care au picat testele."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Management digital al asamblării cap-la-cap cu buclă de testare-reparație
- **solutionLede:** La fabrica de aparate de gătit Haier Europe au fost instalate linii noi de asamblare și sistemele de transportoare au fost complet reînnoite. Procesele manuale de planificare, urmărire și control de pe liniile de asamblare au fost automatizate, făcând întregul proces de asamblare trasabil digital. Trasabilitatea cap-la-cap a fost realizată pentru toate produsele pe baza unor identități unice de la începutul liniei până la depozit. Datele de testare au fost colectate pe parcursul producției; produsele care au picat testele au fost direcționate către reparații, iar acțiunile de reparație întreprinse au fost înregistrate.
- **steps:**
  - **no:** "01" | **title:** "Atribuire ID Unic" | **text:** "O identitate unică (cod de bare/DPM) este atribuită fiecărui produs la începutul liniei."
  - **no:** "02" | **title:** "Colectare Date Test" | **text:** "Pe măsură ce produsele trec prin stațiile de testare, rezultatele sunt scrise automat în baza de date."
  - **no:** "03" | **title:** "Rutare către Reparații" | **text:** "Produsele care pică testele sunt deviate automat către linia de reparații și blocate."
  - **no:** "04" | **title:** "Înregistrare & Expediere" | **text:** "Odată ce acțiunile de reparație sunt înregistrate, produsele sunt aprobate și expediate în depozit."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipament Utilizat
- **techTitle:** SCADA C# și hardware de integrare pe teren
- **techGrid:**
  - **tag:** "HARDWARE" | **title:** "Asamblare & Transportor Nou" | **text:** "Infrastructură modernă a liniei de transport care oferă flux mecanic și funcționează sub control PLC."
  - **tag:** "CONTROL" | **title:** "Management Flux PLC" | **text:** "PLC-uri care gestionează mișcările de elevator și transportor ale produselor între linii."
  - **tag:** "SOFTWARE" | **title:** "Aplicație SCADA C#" | **text:** "SCADA care comunică cu stațiile de testare, primește jurnalele de reparații și gestionează aprobările."
  - **tag:** "URMĂRIRE" | **title:** "Platforma OnSuite Trace" | **text:** "Software principal care conectează toate datele de testare și acțiunile de reparație la ID-ul unic."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Integrarea Sistemului Haier Global MES
- **integrationDesc:** Sistemul funcționează complet integrat cu sistemul Global MES al Haier Europe. Rezultatele testelor, aprobările de producție și reparațiile sunt transmise direct sistemului global în timp real.
- **integrationList:**
  - **bold:** "Integrare MES Globală" | **text:** "Aprobările liniei de asamblare, datele de testare și istoricul reparațiilor sunt sincronizate bidirecțional cu sistemul MES."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Asamblare transparentă cap-la-cap și eficiență maximă
- **resultsGrid:**
  - **title:** "Trasabilitate Cap-la-Cap" | **text:** "Rezultatele testelor și mișcările logistice pot fi monitorizate instantaneu de la începutul liniei la depozit."
  - **title:** "Calitate Trasabilă" | **text:** "Etapele de reparație și rezultatele testelor produselor defecte pot fi raportate retrospectiv."
  - **title:** "Eficiență Operațională" | **text:** "Timpii de ciclu ai liniei de asamblare sunt optimizați prin digitalizarea planificării și urmăririi manuale."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să vă transformați și procesele de producție?
- **ctaSubtitle:** Contactați-ne pentru a discuta cum putem implementa o soluție similară pentru afacerea dumneavoastră.
- **ctaPrimary:** Contactați-ne


---

### 28. Bomi Group - Kameralı Çoklu Kod Okuma Sistemi
**Slug:** `bomi-group-camera-based-multi-code-reading-system-tr` | **ID:** `23` | **Sıra (Order):** `28` | **Yıl:** `2020`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `bomi-group-camera-based-multi-code-reading-system-tr`
- **Sıralama (order):** `28`
- **Yıl (year / referenceDate):** `2020`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `RFID, Barcode, ERP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/Bomi.svg`
  - **Ana Görsel (image):** `/images/companies/Bomi/Bomi-sede-scaled-1.webp`
  - **Hero Görseli (heroImage):** `/images/companies/Bomi/Bomi-sede-scaled-1.webp`
  - **Galeri Görselleri (gallery):**
  - /images/companies/Bomi/Brasil-Itapevi.-scaled-1.jpg
  - /images/companies/Bomi/iag-056.jpg
  - /images/companies/Bomi/Video-Bomi.gif

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Bomi Group - Kameralı Çoklu Kod Okuma Sistemi
- **Sektör (sector / tagValue):** Lojistik
- **Konum (locationValue):** İstanbul
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Dünyanın birçok ülkesinde faaliyet gösteren önde gelen farmasötik lojistik şirketlerinden BOMI Group'un Türkiye deposu için, tesiste önceden manuel olarak yürütülen operasyonları otomatikleştiren kamera tabanlı çok kodlu okuma sistemi geliştirildi. Proje kapsamında ERP entegrasyonu aracılığıyla sevkiyat hazırlık aşamasında izlenebilirlik sağlandı. Binlerce ürünün manuel taranmasını içeren manuel iş akışları, sistemin devreye alınmasıyla tamamen otomatikleştirildi. Sonuç olarak sevkiyat için ürün hazırlama süresi yaklaşık %80 oranında iyileşti.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Hızlı mal kabul ve sevkiyat,
- **heroTitleLine2:** kamera tabanlı çoklu kod okuyucu geçidi.
- **heroSub:** Dünyanın birçok ülkesinde faaliyet gösteren önde gelen farmasötik lojistik şirketlerinden BOMI Group'un İstanbul'daki deposunda hayata geçirilen projede, tesiste önceden manuel olarak yürütülen operasyonları otomatikleştiren kamera tabanlı çoklu kod okuma sistemi geliştirilmiştir. Proje, hem inbound hem de outbound süreçlerini kapsamaktadır.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** İlaç lojistiğinde yüksek hacimli operasyonlar
- **contextP1:** Dünyanın birçok ülkesinde faaliyet gösteren önde gelen farmasötik lojistik şirketlerinden BOMI Group'un İstanbul'daki deposunda hayata geçirilen projede, tesiste önceden manuel olarak yürütülen operasyonları otomatikleştiren kamera tabanlı çoklu kod okuma sistemi geliştirilmiştir.
- **contextP2:** Proje, hem inbound (mal kabul) hem de outbound (sevkiyat) süreçlerini kapsayarak depodaki ürün hareketlerinin hızını ve doğruluğunu en üst düzeye çıkarmayı hedeflemiştir.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Yavaş manuel okutmalar ve sevkiyat gecikmesi riskleri
- **problemLede:** Depoda inbound ve outbound operasyonları büyük ölçüde manuel yürütülüyor; binlerce ürünün tek tek taranmasını gerektiren iş akışları hem zaman kaybına hem de hata riskine yol açıyordu. Özellikle sevkiyat hazırlık aşamasında hız ve doğruluğu artıracak, izlenebilirliği güvence altına alacak otomatik bir çözüme ihtiyaç vardı.
- **problemList:**
  - **bold:** "Manuel Tarama Yavaşlığı" | **text:** "Sevkiyat ve mal kabul sırasında binlerce kutunun el barkod okuyucularıyla tek tek taranmasının yarattığı zaman kaybı."
  - **bold:** "Hatalı Sevkiyat Riski" | **text:** "Manuel veri girişleri ve gözden kaçan hatalı barkodlar nedeniyle yanlış kutuların sevkedilmesi riski."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Çoklu kod okuyucu vizyon geçidi ve anlık ERP eşleştirmesi
- **solutionLede:** Tesiste manuel yürütülen operasyonları otomatikleştiren kamera tabanlı çoklu kod okuma sistemi geliştirildi. Sistem, tek seferde birden fazla kodu okuyarak hem inbound hem de outbound süreçlerinde ürünleri hızlıca tanımaktadır. ERP entegrasyonu aracılığıyla sevkiyat hazırlık aşamasında izlenebilirlik sağlandı. Binlerce ürünün manuel taranmasını içeren iş akışları, sistemin devreye alınmasıyla tamamen otomatikleştirildi.
- **steps:**
  - **no:** "01" | **title:** "Konveyör Besleme" | **text:** "Mal kabul veya sevkiyattaki ürün kolileri konveyör sistemi üzerine yerleştirilir."
  - **no:** "02" | **title:** "Çoklu Kamera Taraması" | **text:** "Ürünler vizyon tünelinden geçerken kamera birden fazla barkodu tek seferde okur."
  - **no:** "03" | **title:** "SCADA Analizi" | **text:** "C# SCADA, okunan çoklu barkod verilerini işler ve doğruluk analizlerini yapar."
  - **no:** "04" | **title:** "ERP Güncellemesi" | **text:** "Doğrulanan ürün hareketleri BOMI in-house ERP sistemine anlık kaydedilir."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** Vizyon tüneli ve C# SCADA mimarisi
- **techGrid:**
  - **tag:** "VİZYON" | **title:** "Kameralı Çoklu Okuma" | **text:** "Aynı anda görüş alanındaki tüm barkod ve 2D kodları yüksek doğrulukla çözen vizyon donanımı."
  - **tag:** "DONANIM" | **title:** "Konveyör ve Bariyer" | **text:** "Kutuları okuma tüneline düzenli aralıklarla besleyen otomasyonlu konveyör yapısı."
  - **tag:** "OTOMASYON" | **title:** "PLC Saha Yönetimi" | **text:** "Sensör tetiklemelerini, konveyör hızını ve kamera okuma zamanlamalarını yöneten PLC."
  - **tag:** "YAZILIM" | **title:** "C# SCADA & Entegratör" | **text:** "Kameralarla haberleşen, çoklu okuma verilerini süzüp ERP sistemine aktaran SCADA."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** BOMI In-House ERP Sistemi Entegrasyonu
- **integrationDesc:** Sistem, BOMI Group'un kendi geliştirdiği (in-house) ERP sistemiyle entegre çalışmaktadır. Okunan ürün ve sevkiyat verileri ERP ile paylaşılarak sevkiyat hazırlık aşamasında izlenebilirlik sağlanmakta ve süreç merkezi olarak yönetilmektedir.
- **integrationList:**
  - **bold:** "In-House ERP Entegrasyonu" | **text:** "Toplu okuma verileri doğrudan BOMI'nin ERP sunucularına aktarılarak mal kabul ve sevk onay süreçleri tetiklenir."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Yüksek hızlı lojistik akış ve sıfır hata
- **resultsGrid:**
  - **title:** "Hızlı Sevkiyat Hazırlığı" | **text:** "Toplu kod okuma tüneli sayesinde ürün hazırlama ve ambalaj süreleri önemli ölçüde kısaltılmıştır."
  - **title:** "Hatasız Doğrulama" | **text:** "Gözden kaçabilecek eksik veya hatalı kodlu ürünler sevkiyat öncesinde %100 doğrulukla elenir."
  - **title:** "İzlenebilir Depo Akışı" | **text:** "Inbound ve outbound süreçleri merkezi olarak izlenebilir kılınarak lojistik verimlilik artırılmıştır."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Üretim süreçlerinizi de dönüştürmek ister misiniz?
- **ctaSubtitle:** Benzer bir çözümü işletmenize nasıl uygulayabileceğimizi konuşmak için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Bomi Group Camera Based Multi Code Reading System Tr
- **Sector (sector / tagValue):** Logistics
- **Location (locationValue):** Istanbul
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** For the Turkish warehouse of BOMI Group — one of the world's leading pharmaceutical logistics companies operating in many countries — we developed a camera-based multi-code reading system that automated the previously manual operations at the facility. Within the project, traceability was ensured through ERP integration at the shipment preparation stage. Manual workflows involving manual scanning of thousands of products were fully automated after the system was implemented. As a result, product preparation time for shipment improved by approximately 80%.

##### Hero Section (EN)
- **heroTitleLine1:** Fast inbound and outbound,
- **heroTitleLine2:** camera-based multi-code reader gate.
- **heroSub:** In the project implemented at the Istanbul warehouse of BOMI Group, a leading pharmaceutical logistics company operating in many countries, a camera-based multi-code reading system was developed to automate previously manual operations. The project covers both inbound and outbound processes.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** High-volume operations in pharmaceutical logistics
- **contextP1:** In the project implemented at the Istanbul warehouse of BOMI Group, a leading pharmaceutical logistics company operating in many countries, a camera-based multi-code reading system was developed to automate previously manual operations.
- **contextP2:** The project aimed to maximize the speed and accuracy of product movements in the warehouse, covering both inbound (mal kabul) and outbound (sevkiyat) processes.

##### Problem / Challenge (EN)
- **problemEyebrow:** Needs / Problems
- **problemTitle:** Slow manual scans and dispatch delay risks
- **problemLede:** Inbound and outbound operations in the warehouse were largely carried out manually; workflows requiring thousands of products to be scanned individually led to both loss of time and risk of errors. Especially in the shipping preparation phase, an automated solution was needed to increase speed and accuracy and secure traceability.
- **problemList:**
  - **bold:** "Manual Scan Slowness" | **text:** "Time loss created by scanning thousands of boxes one-by-one with handheld barcode scanners during shipping and receiving."
  - **bold:** "Wrong Shipping Risk" | **text:** "Risk of wrong boxes being shipped due to manual data entry errors and overlooked barcode mismatches."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Multi-code reader vision gate and instant ERP matching
- **solutionLede:** A camera-based multi-code reading system was developed to automate operations previously conducted manually. The system quickly identifies products in both inbound and outbound processes by reading multiple codes at once. Traceability was achieved in the shipping preparation phase through ERP integration. Workflows involving manual scanning of thousands of products were completely automated.
- **steps:**
  - **no:** "01" | **title:** "Conveyor Feeding" | **text:** "Product boxes in inbound or outbound processes are placed onto the conveyor system."
  - **no:** "02" | **title:** "Multi-Camera Scan" | **text:** "As products pass through the vision tunnel, the camera reads multiple barcodes simultaneously."
  - **no:** "03" | **title:** "SCADA Analysis" | **text:** "C# SCADA processes the read multi-barcode data and performs accuracy analyses."
  - **no:** "04" | **title:** "ERP Update" | **text:** "Verified product movements are instantly recorded in BOMI's in-house ERP system."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** Vision tunnel and C# SCADA architecture
- **techGrid:**
  - **tag:** "VISION" | **title:** "Camera-Based Multi-Reading" | **text:** "Vision hardware resolving all barcodes and 2D codes in its field of view with high accuracy."
  - **tag:** "HARDWARE" | **title:** "Conveyor and Barrier" | **text:** "Automated conveyor structure feeding boxes into the reading tunnel at regular intervals."
  - **tag:** "AUTOMATION" | **title:** "PLC Field Management" | **text:** "PLC managing sensor triggers, conveyor speed, and camera reading timings."
  - **tag:** "SOFTWARE" | **title:** "C# SCADA & Integrator" | **text:** "SCADA communicating with cameras, filtering multi-read data, and transmitting to ERP."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** BOMI In-House ERP System Integration
- **integrationDesc:** The system operates integrated with BOMI Group's in-house ERP system. Read product and shipping data are shared with the ERP to ensure traceability in the shipping prep stage, and the process is managed centrally.
- **integrationList:**
  - **bold:** "In-House ERP Integration" | **text:** "Bulk reading data is directly transmitted to BOMI's ERP servers, triggering inbound and outbound approval processes."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** High-speed logistics flow and zero errors
- **resultsGrid:**
  - **title:** "Fast Shipment Prep" | **text:** "Product preparation and packaging times are significantly shortened thanks to the bulk code reading tunnel."
  - **title:** "Error-Free Validation" | **text:** "Products with missing or incorrect codes that could be overlooked are eliminated with 100% accuracy before shipping."
  - **title:** "Traceable Warehouse Flow" | **text:** "Logistics efficiency is increased by making inbound and outbound processes centrally traceable."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Want to transform your production processes too?
- **ctaSubtitle:** Contact us to discuss how we can implement a similar solution for your business.
- **ctaPrimary:** Get in Touch

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Bomi Group - Sistem de citire multi-cod bazat pe camera
- **Sector (sector / tagValue):** Logistică
- **Locație (locationValue):** Istanbul
- **Domeniu de Aplicare (scopeVal):** Software și Integrare
- **An (year):** An
- **Descriere Scurtă (description):** Pentru depozitul turcesc al BOMI Group – una dintre cele mai importante companii de logistică farmaceutică care operează în multe țări din întreaga lume – am dezvoltat un sistem de citire multi-cod bazat pe cameră, care a automatizat operațiunile manuale anterioare din cadrul unității. În cadrul proiectului, trasabilitatea a fost asigurată prin integrarea ERP în etapa de pregătire a transportului. Fluxurile de lucru manuale care implicau scanarea manuală a mii de produse au fost complet automatizate după implementarea sistemului. Ca rezultat, timpul de pregătire a produsului pentru expediere s-a îmbunătățit cu aproximativ 80%.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Recepție și expediere rapidă,
- **heroTitleLine2:** poartă de citire multi-cod pe bază de cameră.
- **heroSub:** În cadrul proiectului implementat la depozitul din Istanbul al BOMI Group, o companie de logistică farmaceutică lider în multe țări, a fost dezvoltat un sistem de citire multi-cod pe bază de cameră pentru a automatiza operațiunile manuale anterioare. Proiectul acoperă atât procesele de recepție (inbound), cât și cele de expediere (outbound).

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Operațiuni de mare volum în logistica farmaceutică
- **contextP1:** În cadrul proiectului implementat la depozitul din Istanbul al BOMI Group, o companie de logistică farmaceutică lider în multe țări, a fost dezvoltat un sistem de citire multi-cod pe bază de cameră pentru a automatiza operațiunile manuale anterioare.
- **contextP2:** Proiectul a urmărit maximizarea vitezei și preciziei mișcărilor de produse în depozit, acoperind atât procesele de recepție (inbound), cât și cele de expediere (outbound).

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoie / Problemă
- **problemTitle:** Scanări manuale lente și riscuri de întârziere a expedierii
- **problemLede:** Operațiunile de recepție și expediere din depozit se desfășurau în mare parte manual; fluxurile de lucru care necesitau scanarea individuală a mii de produse duceau atât la pierderi de timp, cât și la riscul apariției erorilor. În special în faza de pregătire a expedierii, era necesară o soluție automatizată pentru a crește viteza și precizia și pentru a asigura trasabilitatea.
- **problemList:**
  - **bold:** "Lentitate Scanare Manuală" | **text:** "Pierdere de timp creată de scanarea individuală a mii de cutii cu scanere manuale în timpul expedierii și recepției."
  - **bold:** "Risc de Expediere Greșită" | **text:** "Risc de expediere a cutiilor greșite din cauza erorilor de introducere manuală a datelor și a nepotrivirilor de coduri de bare trecute cu vederea."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Poartă de vizualizare cu cititor multi-cod și potrivire ERP instantanee
- **solutionLede:** A fost dezvoltat un sistem de citire multi-cod pe bază de cameră pentru a automatiza operațiunile desfășurate anterior manual. Sistemul identifică rapid produsele atât în procesele de recepție, cât și în cele de expediere, prin citirea mai multor coduri simultan. Trasabilitatea a fost realizată în faza de pregătire a expedierii prin integrarea ERP. Fluxurile de lucru care implicau scanarea manuală a mii de produse au fost complet automatizate.
- **steps:**
  - **no:** "01" | **title:** "Alimentare Transportor" | **text:** "Cutiile de produse din procesele de recepție sau expediere sunt plasate pe sistemul de transportor."
  - **no:** "02" | **title:** "Scanare Multi-Cameră" | **text:** "Pe măsură ce produsele trec prin tunelul de viziune, camera citește mai multe coduri de bare simultan."
  - **no:** "03" | **title:** "Analiză SCADA" | **text:** "C# SCADA procesează datele multi-cod citite și efectuează analize de precizie."
  - **no:** "04" | **title:** "Actualizare ERP" | **text:** "Mișcările de produse verificate sunt înregistrate instantaneu în sistemul ERP intern BOMI."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipament Utilizat
- **techTitle:** Tunel de viziune și arhitectură SCADA C#
- **techGrid:**
  - **tag:** "VIZIUNE" | **title:** "Citire Multi-Cod Cameră" | **text:** "Hardware de viziune care rezolvă toate codurile de bare și 2D din câmpul său vizual cu mare precizie."
  - **tag:** "HARDWARE" | **title:** "Transportor și Barieră" | **text:** "Structură de transportor automatizată care alimentează cutiile în tunel la intervale regulate."
  - **tag:** "AUTOMATIZARE" | **title:** "Management PLC Câmp" | **text:** "PLC care gestionează declanșatoarele, viteza transportorului și timpii de citire ai camerei."
  - **tag:** "SOFTWARE" | **title:** "SCADA C# & Integrator" | **text:** "SCADA care comunică cu camerele, filtrează datele multi-citire și le transmite la ERP."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Integrarea Sistemului ERP Intern BOMI
- **integrationDesc:** Sistemul funcționează integrat cu sistemul ERP intern al BOMI Group. Datele citite despre produse și expediere sunt partajate cu ERP pentru a asigura trasabilitatea în etapa de pregătire, procesul fiind gestionat centralizat.
- **integrationList:**
  - **bold:** "Integrare ERP Intern" | **text:** "Datele de citire în masă sunt transmise direct la serverele ERP ale BOMI, declanșând procesele de aprobare."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Flux logistic de mare viteză și zero erori
- **resultsGrid:**
  - **title:** "Pregătire Rapidă Expedieri" | **text:** "Timpii de pregătire a produselor și ambalare sunt scurtați semnificativ datorită tunelului de citire în masă."
  - **title:** "Validare Fără Erori" | **text:** "Produsele cu coduri lipsă sau incorecte care ar putea fi trecute cu vederea sunt eliminate cu o precizie de 100% înainte de expediere."
  - **title:** "Flux de Depozit Trasabil" | **text:** "Eficiența logistică este crescută prin transparentizarea proceselor de recepție și expediere la nivel central."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să vă transformați și procesele de producție?
- **ctaSubtitle:** Contactați-ne pentru a discuta cum putem implementa o soluție similară pentru afacerea dumneavoastră.
- **ctaPrimary:** Contactați-ne


---

### 29. PMI - Paletleme Otomasyonu ve Otomatik Etiketleme
**Slug:** `pmi-palletizing-automation-automatic-labeling` | **ID:** `17` | **Sıra (Order):** `29` | **Yıl:** `2019`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `pmi-palletizing-automation-automatic-labeling`
- **Sıralama (order):** `29`
- **Yıl (year / referenceDate):** `2019`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `RFID, Barcode, ERP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/philip-morris-international-pmi-seeklogo.png`
  - **Ana Görsel (image):** `/images/companies/PhilipMorris/MORIS.jpg`
  - **Hero Görseli (heroImage):** `/images/companies/PhilipMorris/MORIS.jpg`
  - **Galeri Görselleri (gallery):**
  - /images/companies/PhilipMorris/pmtm.jpg
  - /images/companies/PhilipMorris/1-1-1-uai-1598x799.jpg
  - /images/companies/PhilipMorris/ege-bolgesi-philip-morris-sabancinin-ihracat-ussu-oluyor-81699-8122015134810.jpg

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** PMI - Paletleme Otomasyonu ve Otomatik Etiketleme
- **Sektör (sector / tagValue):** Tütün
- **Konum (locationValue):** Torbalı / İzmir
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** PMI'ın İzmir Torbalı'daki sigara üretim fabrikasında hayata geçirilen projede, paletleme alanındaki otomasyon ve etiketleme süreçleri yenilendi. Koli–palet eşleştirmesini güvence altına almak ve üretim emri yönetimini otomatikleştirmek amacıyla SCADA ve PLC altyapısı güncellendi, SAP WMS ile tam entegrasyon sağlandı.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Otomatik paletleme ve etiketleme,
- **heroTitleLine2:** koli–palet eşleştirmesiyle güvence altına alınmış akış.
- **heroSub:** PMI'ın İzmir Torbalı'daki sigara üretim fabrikasında hayata geçirilen projede, paletleme alanındaki otomasyon ve etiketleme süreçleri yenilendi. Koli–palet eşleştirmesini güvence altına almak ve üretim emri yönetimini otomatikleştirmek amacıyla SCADA ve PLC altyapısı güncellendi, SAP WMS ile tam entegrasyon sağlandı.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Tütün sektöründe paletleme ve sevkiyat otomasyonu
- **contextP1:** PMI'ın sigara üretimi yapan İzmir Torbalı fabrikasında hayata geçirilen projede, paletleme alanındaki otomasyon ve etiketleme süreçleri yenilenmiştir. Üretilen ürünler koli ve palet bazında hazırlanarak sevkiyata yönlendirilmektedir.
- **contextP2:** Proje, bu paletleme ve etiketleme sürecini otomatikleştirmek, koli–palet eşleştirmesini güvence altına almak ve üretim emri ile sorting süreçlerini hata riskinden arındırmak amacıyla gerçekleştirilmiştir.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Hatalı etiketleme ve manuel sorting riskleri
- **problemLede:** Paletleme ve etiketleme süreçlerinin daha güvenilir, otomatik ve izlenebilir hâle getirilmesi gerekiyordu. Palet etiketlerinin doğru basılması, kolilerin doğru paletlerle eşleştirilmesi ve üretim emri ile sorting süreçlerinin manuel yürütülmesinden kaynaklanan hata riskinin ortadan kaldırılması ihtiyacı vardı.
- **problemList:**
  - **bold:** "Yanlış Etiket Basımı" | **text:** "Palet etiketlerinin manuel seçimle basılması, yanlış müşteri veya ürün etiketinin sevkedilme riskini taşıyordu."
  - **bold:** "Hatalı Koli–Palet Eşleştirmesi" | **text:** "Kolilerin manuel olarak paletlere yerleştirilmesi, yanlış koli–palet eşleşmesi ve hatalı sevkiyat riskine yol açıyordu."
  - **bold:** "Blacklist Dışındaki Ürünler" | **text:** "Geçişine izin verilmeyen ürünlerin sistemde otomatik engellenmemesi, operasyonel hatalar doğuruyordu."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Yenilenen SCADA, palet etiketlemesi ve blacklist yönetimi
- **solutionLede:** Projede paletleme alanındaki SCADA sistemi yenilendi ve paletleme sistemini yöneten PLC yapısı güncellendi. Etiket yazıcıları ile palet etiketleri basıldı, koli etiketleri okunarak koli–palet eşleşmesi sağlandı. Üretim emri başlatma işlemleri düzenlendi ve sorting hatları otomatik olarak planlandı. Ayrıca, geçişine izin verilmeyen ürünleri engelleyen bir blacklist (kara liste) uygulaması kuruldu. Sistem, SAP WMS ile entegre çalışacak şekilde yapılandırıldı.
- **steps:**
  - **no:** "01" | **title:** "Üretim Emri Başlatma" | **text:** "SCADA arayüzünden üretim emri başlatılır; sorting hatları montaj planına göre otomatik programlanır."
  - **no:** "02" | **title:** "Palet Etiketi Basımı" | **text:** "Paletleme noktasında etiket yazıcısı ilgili palet etiketini otomatik olarak basar."
  - **no:** "03" | **title:** "Koli–Palet Eşleştirme" | **text:** "Koli barkodları okunur ve ilgili paletle eşleştirilir; blacklist kontrolü ile izin verilmeyen ürünler engellenir."
  - **no:** "04" | **title:** "SAP WMS Aktarımı" | **text:** "Eşleştirme ve etiketleme verileri SAP WMS sistemine anlık olarak aktarılır."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** C# SCADA ve PLC tabanlı paletleme altyapısı
- **techGrid:**
  - **tag:** "YAZILIM" | **title:** "C# SCADA Uygulaması" | **text:** "Palet etiket basımı, koli–palet eşleştirmesi, üretim emri yönetimi ve blacklist kontrolünü yürüten SCADA."
  - **tag:** "OTOMASYON" | **title:** "PLC Paletleme Sistemi" | **text:** "Paletleme ve sorting akışını fiziksel olarak yöneten, SCADA ile entegre çalışan PLC yapısı."
  - **tag:** "DONANIM" | **title:** "Etiket Yazıcıları" | **text:** "Palet etiketlerini otomatik basan endüstriyel termal etiket yazıcıları."
  - **tag:** "OKUYUCU" | **title:** "Barkod Okuyucular" | **text:** "Koli barkodlarını okuyarak palet eşleştirme ve doğrulama sürecini başlatan okuyucular."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** SAP WMS Entegrasyonu
- **integrationDesc:** Sistem SAP WMS ile entegre çalışmaktadır; palet–koli eşleştirme, üretim emri ve sorting verileri SAP WMS ile paylaşılarak paletleme ve sevkiyat süreçleri merkezi olarak yönetilmektedir.
- **integrationList:**
  - **bold:** "SAP WMS Entegrasyonu" | **text:** "Paletleme onayları, etiketleme verileri ve koli–palet eşleştirme kayıtları SAP WMS ile çift yönlü ve anlık senkronize edilir."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Hatasız paletleme ve otomatik sevkiyat hazırlığı
- **resultsGrid:**
  - **title:** "Güvenceli Koli–Palet Eşleştirmesi" | **text:** "Otomatik okuma ve eşleştirme ile yanlış koli–palet eşleşmesi ve hatalı sevkiyat riski sıfırlanmıştır."
  - **title:** "Blacklist Kontrolü" | **text:** "Geçişine izin verilmeyen ürünler sistemde otomatik olarak tespit edilip engellenerek sevkiyat güvenliği artırılmıştır."
  - **title:** "Otomatik Sorting Planlaması" | **text:** "Üretim emrine göre sorting hatları manuel müdahale olmadan otomatik programlanmaktadır."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Üretim süreçlerinizi de dönüştürmek ister misiniz?
- **ctaSubtitle:** Benzer bir çözümü işletmenize nasıl uygulayabileceğimizi konuşmak için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** PMI Palletizing Automation Automatic Labeling
- **Sector (sector / tagValue):** Tobacco
- **Location (locationValue):** Torbali / Izmir
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** In the project implemented at PMI's cigarette manufacturing plant in Torbali, Izmir, the automation and labeling processes in the palletizing area were renewed. SCADA and PLC infrastructure was updated to secure carton-pallet matching and automate production order management, with full SAP WMS integration.

##### Hero Section (EN)
- **heroTitleLine1:** Automatic palletizing and labeling,
- **heroTitleLine2:** secured flow with carton-pallet matching.
- **heroSub:** In the project implemented at PMI's cigarette manufacturing plant in Torbali, Izmir, the automation and labeling processes in the palletizing area were renewed. SCADA and PLC infrastructure was updated to secure carton-pallet matching and automate production order management, with full SAP WMS integration.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Palletizing and shipment automation in the tobacco sector
- **contextP1:** In the project implemented at PMI's cigarette manufacturing plant in Torbali, Izmir, the automation and labeling processes in the palletizing area were renewed. Produced products are prepared on a carton and pallet basis and directed for shipment.
- **contextP2:** The project was carried out to automate this palletizing and labeling process, secure carton-pallet matching, and eliminate the risk of errors from manually running production orders and sorting processes.

##### Problem / Challenge (EN)
- **problemEyebrow:** Needs / Problems
- **problemTitle:** Wrong labeling and manual sorting risks
- **problemLede:** Palletizing and labeling processes needed to be made more reliable, automatic, and traceable. There was a need to ensure correct printing of pallet labels, match cartons to the correct pallets, and eliminate the risk of errors from manually running production orders and sorting processes.
- **problemList:**
  - **bold:** "Wrong Label Printing" | **text:** "Manual selection for pallet label printing carried the risk of shipping incorrect customer or product labels."
  - **bold:** "Incorrect Carton-Pallet Matching" | **text:** "Manual placement of cartons on pallets led to the risk of wrong carton-pallet matching and shipment errors."
  - **bold:** "Blacklisted Products" | **text:** "The lack of automatic blocking for products not permitted to pass created operational errors."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Renewed SCADA, pallet labeling, and blacklist management
- **solutionLede:** The SCADA system in the palletizing area was renewed and the PLC structure managing the palletizing system was updated. Pallet labels were printed with label printers, carton labels were read to achieve carton-pallet matching. Production order start processes were organized and sorting lines were automatically planned. Additionally, a blacklist application was set up to block products not permitted to pass. The system was configured to work integrated with SAP WMS.
- **steps:**
  - **no:** "01" | **title:** "Production Order Start" | **text:** "A production order is started from the SCADA interface; sorting lines are automatically programmed per the assembly plan."
  - **no:** "02" | **title:** "Pallet Label Printing" | **text:** "At the palletizing point, the label printer automatically prints the relevant pallet label."
  - **no:** "03" | **title:** "Carton-Pallet Matching" | **text:** "Carton barcodes are read and matched with the relevant pallet; blacklist checks block any unauthorized products."
  - **no:** "04" | **title:** "SAP WMS Transfer" | **text:** "Matching and labeling data is instantly transmitted to the SAP WMS system."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** C# SCADA and PLC-based palletizing infrastructure
- **techGrid:**
  - **tag:** "SOFTWARE" | **title:** "C# SCADA Application" | **text:** "SCADA managing pallet label printing, carton-pallet matching, production order management, and blacklist control."
  - **tag:** "AUTOMATION" | **title:** "PLC Palletizing System" | **text:** "PLC structure physically managing palletizing and sorting flow, operating integrated with SCADA."
  - **tag:** "HARDWARE" | **title:** "Label Printers" | **text:** "Industrial thermal label printers automatically printing pallet labels."
  - **tag:** "READER" | **title:** "Barcode Readers" | **text:** "Readers scanning carton barcodes to initiate the pallet matching and verification process."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** SAP WMS Integration
- **integrationDesc:** The system operates integrated with SAP WMS; pallet-carton matching, production order, and sorting data are shared with SAP WMS, and palletizing and shipping processes are centrally managed.
- **integrationList:**
  - **bold:** "SAP WMS Integration" | **text:** "Palletizing approvals, labeling data, and carton-pallet matching records are bi-directionally and instantly synchronized with SAP WMS."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Error-free palletizing and automatic shipment preparation
- **resultsGrid:**
  - **title:** "Secured Carton-Pallet Matching" | **text:** "The risk of wrong carton-pallet matching and erroneous shipments is zeroed out with automatic reading and matching."
  - **title:** "Blacklist Control" | **text:** "Products not permitted to pass are automatically detected and blocked, increasing shipment accuracy."
  - **title:** "Automatic Sorting Planning" | **text:** "Sorting lines are automatically programmed without manual intervention based on the production order."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Want to transform your production processes too?
- **ctaSubtitle:** Contact us to discuss how we can implement a similar solution for your business.
- **ctaPrimary:** Get in Touch

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** PMI - Automatizare paletizare si etichetare automata
- **Sector (sector / tagValue):** Tutun
- **Locație (locationValue):** Torbali / Izmir
- **Domeniu de Aplicare (scopeVal):** Software și Integrare
- **An (year):** An
- **Descriere Scurtă (description):** În cadrul proiectului implementat la fabrica de producție de țigări PMI din Torbali, Izmir, procesele de automatizare și etichetare din zona de paletizare au fost reînnoite. Infrastructura SCADA și PLC a fost actualizată pentru a securiza potrivirea cutie-palet și a automatiza gestionarea ordinelor de producție, cu integrare completă SAP WMS.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Paletizare și etichetare automată,
- **heroTitleLine2:** flux securizat cu potrivire cutie-palet.
- **heroSub:** În cadrul proiectului implementat la fabrica de producție de țigări PMI din Torbali, Izmir, procesele de automatizare și etichetare din zona de paletizare au fost reînnoite. Infrastructura SCADA și PLC a fost actualizată pentru a securiza potrivirea cutie-palet și a automatiza gestionarea ordinelor de producție, cu integrare completă SAP WMS.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Automatizarea paletizării și expedierii în sectorul tutunului
- **contextP1:** În cadrul proiectului implementat la fabrica de producție de țigări PMI din Torbali, Izmir, procesele de automatizare și etichetare din zona de paletizare au fost reînnoite. Produsele fabricate sunt pregătite pe baza cutiei și paletului și direcționate pentru expediere.
- **contextP2:** Proiectul a fost realizat pentru a automatiza procesul de paletizare și etichetare, pentru a securiza potrivirea cutie-palet și pentru a elimina riscul de erori din gestionarea manuală a ordinelor de producție și procesele de sortare.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoie / Problemă
- **problemTitle:** Riscuri de etichetare greșită și sortare manuală
- **problemLede:** Procesele de paletizare și etichetare trebuiau să devină mai fiabile, automate și trasabile. Era nevoie de asigurarea tipăririi corecte a etichetelor paletului, potrivirea cutiilor cu paletele corecte și eliminarea riscului de erori din gestionarea manuală a ordinelor de producție și sortare.
- **problemList:**
  - **bold:** "Tipărire Etichetă Greșită" | **text:** "Selectarea manuală pentru tipărirea etichetei paletului purta riscul expedierii de etichete incorecte."
  - **bold:** "Potrivire Cutie-Palet Incorectă" | **text:** "Plasarea manuală a cutiilor pe paleți ducea la riscul de potrivire incorectă și erori de expediere."
  - **bold:** "Produse pe Lista Neagră" | **text:** "Lipsa blocării automate pentru produsele nepermise să treacă crea erori operaționale."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** SCADA reînnoit, etichetare paletului și management listă neagră
- **solutionLede:** Sistemul SCADA din zona de paletizare a fost reînnoit și structura PLC care gestionează sistemul de paletizare a fost actualizată. Etichetele paletului au fost tipărite cu imprimante de etichete, etichetele cutiilor au fost citite pentru a realiza potrivirea cutie-palet. Procesele de pornire a ordinelor de producție au fost organizate și liniile de sortare au fost planificate automat. În plus, a fost configurată o aplicație de listă neagră pentru a bloca produsele care nu au permisiunea de a trece. Sistemul a fost configurat să lucreze integrat cu SAP WMS.
- **steps:**
  - **no:** "01" | **title:** "Pornire Ordin Producție" | **text:** "Un ordin de producție este pornit din interfața SCADA; liniile de sortare sunt programate automat."
  - **no:** "02" | **title:** "Tipărire Etichetă Palet" | **text:** "La punctul de paletizare, imprimanta de etichete tipărește automat eticheta paletului relevant."
  - **no:** "03" | **title:** "Potrivire Cutie-Palet" | **text:** "Codurile de bare ale cutiilor sunt citite și potrivite cu paletul relevant; verificările listei negre blochează produsele neautorizate."
  - **no:** "04" | **title:** "Transfer SAP WMS" | **text:** "Datele de potrivire și etichetare sunt transmise instantaneu sistemului SAP WMS."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipament Utilizat
- **techTitle:** SCADA C# și infrastructură de paletizare bazată pe PLC
- **techGrid:**
  - **tag:** "SOFTWARE" | **title:** "Aplicație SCADA C#" | **text:** "SCADA gestionând tipărirea etichetelor de paleți, potrivirea cutie-palet, gestionarea ordinelor și controlul listei negre."
  - **tag:** "AUTOMATIZARE" | **title:** "Sistem PLC Paletizare" | **text:** "Structura PLC care gestionează fizic fluxul de paletizare și sortare, integrată cu SCADA."
  - **tag:** "HARDWARE" | **title:** "Imprimante de Etichete" | **text:** "Imprimante termice industriale care tipăresc automat etichetele paletului."
  - **tag:** "CITITOR" | **title:** "Cititoare de Coduri de Bare" | **text:** "Cititoare care scanează codurile de bare ale cutiilor pentru a iniția procesul de potrivire și verificare a paletului."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Integrarea SAP WMS
- **integrationDesc:** Sistemul funcționează integrat cu SAP WMS; datele de potrivire palet-cutie, ordinele de producție și sortare sunt partajate cu SAP WMS, iar procesele de paletizare și expediere sunt gestionate centralizat.
- **integrationList:**
  - **bold:** "Integrare SAP WMS" | **text:** "Aprobările de paletizare, datele de etichetare și înregistrările de potrivire cutie-palet sunt sincronizate bidirecțional și instantaneu cu SAP WMS."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Paletizare fără erori și pregătire automată a expedierii
- **resultsGrid:**
  - **title:** "Potrivire Cutie-Palet Securizată" | **text:** "Riscul de potrivire incorectă cutie-palet și expedieri eronate este eliminat cu citire și potrivire automată."
  - **title:** "Control Listă Neagră" | **text:** "Produsele care nu au permisiunea de a trece sunt detectate și blocate automat, crescând acuratețea expedierii."
  - **title:** "Planificare Automată Sortare" | **text:** "Liniile de sortare sunt programate automat fără intervenție manuală pe baza ordinului de producție."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să vă transformați și procesele de producție?
- **ctaSubtitle:** Contactați-ne pentru a discuta cum putem implementa o soluție similară pentru afacerea dumneavoastră.
- **ctaPrimary:** Contactați-ne


---

### 30. PMI - Embosser RFID Projesi
**Slug:** `pmi-embosser-rfid` | **ID:** `46` | **Sıra (Order):** `30` | **Yıl:** `2018`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `pmi-embosser-rfid`
- **Sıralama (order):** `30`
- **Yıl (year / referenceDate):** `2018`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `RFID, SAP Integration, Machine Interlock`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/philip-morris-international-pmi-seeklogo.png`
  - **Ana Görsel (image):** `/images/companies/PhilipMorris/MORIS.jpg`
  - **Hero Görseli (heroImage):** `/images/companies/PhilipMorris/MORIS.jpg`
  - **Galeri Görselleri (gallery):**
  - /images/companies/PhilipMorris/pmtm.jpg
  - /images/companies/PhilipMorris/1-1-1-uai-1598x799.jpg
  - /images/companies/PhilipMorris/ege-bolgesi-philip-morris-sabancinin-ihracat-ussu-oluyor-81699-8122015134810.jpg

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** PMI - Embosser RFID Projesi
- **Sektör (sector / tagValue):** Tütün
- **Konum (locationValue):** Torbalı / İzmir
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** PMI'ın İzmir Torbalı'daki sigara üretim fabrikasında hayata geçirilen projede, sigara üzerine baskı yapan embosser ruloları RFID tabanlı bir sistemle takip edildi. İş emrine uygun rulo kullanımını güvence altına almak için makinelerle PLC entegrasyonu sağlandı.

##### Hero Bölümü (TR)
- **heroTitleLine1:** RFID kontrollü tetikleme,
- **heroTitleLine2:** iş emrine uygun hatasız üretim.
- **heroSub:** PMI'ın İzmir Torbalı'daki sigara üretim fabrikasında hayata geçirilen projede, sigara üzerine baskı yapan embosser ruloları RFID tabanlı bir sistemle takip edildi. İş emrine uygun rulo kullanımını güvence altına almak için makinelerle PLC entegrasyonu sağlandı.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Embosser ruloları için güvenilir RFID takibi
- **contextP1:** PMI'ın sigara üretimi yapan İzmir Torbalı fabrikasında hayata geçirilen projede, sigara üzerine baskı yapan embosser ruloları RFID tabanlı bir sistemle takip edilmiştir.
- **contextP2:** Proje, üretimde iş emrine uygun rulonun kullanıldığını güvence altına almak ve yanlış rulo kullanımını önlemek amacıyla gerçekleştirilmiştir.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Yanlış rulo kullanımı ve hatalı baskı riskleri
- **problemLede:** Embosser rulolarının, üretilen ürünün iş emrindeki SKU'suna uygun olması gerekiyordu. Manuel kontroller hata riski taşıyor, yanlış rulo kullanımı hatalı baskıya ve fireye neden oluyordu.
- **problemList:**
  - **bold:** "Uyumsuz Rulo Kullanımı" | **text:** "Üretilen ürünün iş emrindeki SKU'suna uymayan ruloların kullanılması kaliteyi tehlikeye atıyordu."
  - **bold:** "Hata ve Fire Riski" | **text:** "Yanlış rulo kullanımı doğrudan hatalı baskıya ve ciddi oranda ıskarta (hurda) sorunlarına yol açıyordu."
  - **bold:** "Güvenilir Kontrol Eksikliği" | **text:** "Eşleşme sağlanmadan üretimin başlamasını engelleyecek, insandan bağımsız (otomatize) bir kontrol yapısına ihtiyaç vardı."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** RFID tabanlı doğrulama ve otomatik makine müdahalesi
- **solutionLede:** Sigara üzerine baskı yapan embosser rulolarının üzerine RFID etiketleri yerleştirildi. Makineden alınan tetikleme ile rulonun RFID etiketi okundu ve iş emrinde gelen SKU ile eşleşme kontrolü sağlandı. Eşleşme hatasında makine otomatik olarak durdurularak operatöre alarm verilmesi sağlandı.
- **steps:**
  - **no:** "01" | **title:** "RFID Etiketleme" | **text:** "Tüm embosser ruloları üzerine dayanıklı RFID etiketleri (tag) yerleştirildi."
  - **no:** "02" | **title:** "Tetrikleme ve Okuma" | **text:** "Makineden alınan üretim tetiklemesi ile RFID okuyucular rulodaki etiketi okur."
  - **no:** "03" | **title:** "SKU Eşleşme Kontrolü" | **text:** "Okunan bilgi ile iş emrindeki SKU eşleştirilir; doğrulama başarılı ise üretime geçilir."
  - **no:** "04" | **title:** "Otomatik Durdurma" | **text:** "Eşleşmenin sağlanmadığı tespit edildiğinde, PLC üzerinden sistem makineyi hemen durdurur ve acil alarm verir."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** RFID donanımları ile PLC tabanlı tetikleme altyapısı
- **techGrid:**
  - **tag:** "DONANIM" | **title:** "RFID Etiketleri" | **text:** "Embosser rulolarına monte edilen, makine içi ortamlarda çalışmaya uygun RFID tagler."
  - **tag:** "OKUYUCU" | **title:** "RFID Anten ve Okuyucular" | **text:** "Makineden gelen tetikleme sinyaliyle rulodaki tagi saniyesinde okuyan donanımlar."
  - **tag:** "OTOMASYON" | **title:** "PLC Yapısı" | **text:** "Saha otomasyonunu, RFID okuma tetiklemelerini ve hatalı eşleşmede makine durdurma komutunu yürüten sistem."
  - **tag:** "CİHAZ" | **title:** "El Terminalleri" | **text:** "Saha içi ek işlemlerde ve rulo tanımlamalarında kullanılan mobil RFID terminalleri."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** SAP İş Emri Entegrasyonu
- **integrationDesc:** Sistem SAP ile entegre çalışmaktadır; iş emri ve SKU bilgileri SAP üzerinden alınarak RFID okumalarıyla eşleştirilmekte, eşleştirme ve üretim kontrol sonuçları SAP ile paylaşılmaktadır.
- **integrationList:**
  - **bold:** "SAP Entegrasyonu" | **text:** "SKU ve iş emri verileri SAP'den alınıp üretim kararı doğrulanır ve üretim sonuçları yine SAP'ye iletilir."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** İnsan hatalarından arındırılmış güvenli baskı süreci
- **resultsGrid:**
  - **title:** "Yanlış Rulo Kullanımı Engeli" | **text:** "RFID ile rulo ve iş emri eşleştirmesi otomatik doğrulanarak operatör inisiyatifinden çıkarıldı."
  - **title:** "Fire ve Hurda Azalımı" | **text:** "Hatalı baskıya bağlı olan ve kalite kayıplarına yol açan hurda üretim riski önemli ölçüde azaldı."
  - **title:** "Süreç Güvenliği" | **text:** "Eşleşme sağlanmadan (yanlış rulo ile) makinenin çalışmasına izin verilmediği için üretim güvenliği güvence altına alındı."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Ekipman takibi ve doğrulama ihtiyacınız mı var?
- **ctaSubtitle:** RFID tabanlı takip çözümlerimizin fabrikanıza nasıl uyarlanabileceğini görüşmek için bize ulaşın.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** PMI Embosser RFID
- **Sector (sector / tagValue):** Tobacco
- **Location (locationValue):** Torbali / Izmir
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** In the project implemented at PMI's cigarette manufacturing plant in Torbali, Izmir, embosser rollers printing on cigarettes were tracked via an RFID-based system. PLC integration with machines was established to guarantee the use of the correct roller according to the work order.

##### Hero Section (EN)
- **heroTitleLine1:** RFID-controlled triggering,
- **heroTitleLine2:** error-free production aligned with work orders.
- **heroSub:** In the project implemented at PMI's cigarette manufacturing plant in Torbali, Izmir, embosser rollers printing on cigarettes were tracked via an RFID-based system. PLC integration with machines was established to guarantee the use of the correct roller according to the work order.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Reliable RFID tracking for embosser rollers
- **contextP1:** In the project implemented at PMI's cigarette manufacturing plant in Torbali, Izmir, embosser rollers printing on cigarettes were tracked via an RFID-based system.
- **contextP2:** The project was carried out to guarantee the use of rollers complying with the work order in production and to prevent the use of incorrect rollers.

##### Problem / Challenge (EN)
- **problemEyebrow:** Needs / Problems
- **problemTitle:** Risks of incorrect roller use and faulty printing
- **problemLede:** Embosser rollers had to comply with the SKU of the product being produced as stated in the work order. Manual checks carried the risk of error, and using incorrect rollers led to faulty prints and scrap.
- **problemList:**
  - **bold:** "Incompatible Roller Usage" | **text:** "Using rollers that did not match the product's SKU in the work order jeopardized quality."
  - **bold:** "Error and Scrap Risk" | **text:** "Incorrect roller usage directly led to faulty printing and significant scrap (waste) problems."
  - **bold:** "Lack of Reliable Control" | **text:** "There was a need for a reliable, non-manual (automated) control structure that would prevent production from starting without proper matching."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** RFID-based verification and automatic machine interlocking
- **solutionLede:** RFID tags were placed on the embosser rollers which print on cigarettes. Triggered by the machine, the RFID tag of the roller was read, and matching was checked against the SKU in the work order. In case of a mismatch, the machine was automatically stopped and an alarm was issued to the operator.
- **steps:**
  - **no:** "01" | **title:** "RFID Labeling" | **text:** "Durable RFID tags were placed on all embosser rollers."
  - **no:** "02" | **title:** "Triggering and Reading" | **text:** "With the production trigger from the machine, RFID readers scan the tag on the roller."
  - **no:** "03" | **title:** "SKU Matching Check" | **text:** "The read data is matched with the SKU in the work order; if verification is successful, production proceeds."
  - **no:** "04" | **title:** "Automatic Stopping" | **text:** "When a mismatch is detected, the system immediately stops the machine via the PLC and gives an emergency alarm."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** RFID hardware and PLC-based trigger infrastructure
- **techGrid:**
  - **tag:** "HARDWARE" | **title:** "RFID Tags" | **text:** "RFID tags mounted on embosser rollers, suitable for operation in in-machine environments."
  - **tag:** "READER" | **title:** "RFID Antennas and Readers" | **text:** "Equipment that scans the tag on the roller in seconds upon the trigger signal from the machine."
  - **tag:** "AUTOMATION" | **title:** "PLC Structure" | **text:** "System executing field automation, RFID reading triggers, and the machine stop command on mismatch."
  - **tag:** "DEVICE" | **title:** "Handheld Terminals" | **text:** "Mobile RFID terminals used for additional field operations and roller identifications."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** SAP Work Order Integration
- **integrationDesc:** The system operates integrated with SAP; work order and SKU information is received via SAP and matched with RFID readings, while matching and production control results are shared with SAP.
- **integrationList:**
  - **bold:** "SAP Integration" | **text:** "SKU and work order data is fetched from SAP to verify the production decision, and execution outcomes are sent back to SAP."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Secure printing process free from human errors
- **resultsGrid:**
  - **title:** "Prevention of Incorrect Rollers" | **text:** "Roller and work order matching is automatically verified via RFID, eliminating operator discretion."
  - **title:** "Reduction of Waste and Scrap" | **text:** "The risk of scrap production leading to quality losses due to faulty printing was significantly reduced."
  - **title:** "Process Security" | **text:** "Production security was ensured by not allowing the machine to operate without an established match (with a wrong roller)."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Need equipment tracking and verification?
- **ctaSubtitle:** Get in touch with us to discuss how our RFID-based tracking solutions can be adapted to your factory.
- **ctaPrimary:** Get in Touch

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** PMI - Embosser RFID
- **Sector (sector / tagValue):** Tutun
- **Locație (locationValue):** Torbali / Izmir
- **Domeniu de Aplicare (scopeVal):** Software și Integrare
- **An (year):** An
- **Descriere Scurtă (description):** În proiectul implementat la fabrica producătoare de țigări PMI din Torbali, Izmir, rolele de embosare care imprimă pe țigări au fost urmărite printr-un sistem bazat pe RFID. S-a realizat integrarea PLC cu mașinile pentru a garanta utilizarea rolei corecte conform ordinului de lucru.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Declanșare controlată prin RFID,
- **heroTitleLine2:** producție fără erori conform ordinului de lucru.
- **heroSub:** În proiectul implementat la fabrica producătoare de țigări PMI din Torbali, Izmir, rolele de embosare care imprimă pe țigări au fost urmărite printr-un sistem bazat pe RFID. S-a realizat integrarea PLC cu mașinile pentru a garanta utilizarea rolei corecte conform ordinului de lucru.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Urmărire RFID fiabilă pentru rolele de embosare
- **contextP1:** În proiectul implementat la fabrica producătoare de țigări PMI din Torbali, Izmir, rolele de embosare care imprimă pe țigări au fost urmărite printr-un sistem bazat pe RFID.
- **contextP2:** Proiectul a fost realizat pentru a garanta utilizarea rolelor potrivite cu ordinul de lucru în producție și pentru a preveni utilizarea rolelor incorecte.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoie / Problemă
- **problemTitle:** Riscurile utilizării incorecte a rolelor și a tipăririi defectuoase
- **problemLede:** Rolele de embosare trebuiau să se potrivească cu SKU-ul produsului fabricat conform ordinului de lucru. Verificările manuale purtau riscul de erori, iar utilizarea rolelor greșite ducea la printuri defectuoase și rebuturi.
- **problemList:**
  - **bold:** "Utilizarea Incompatibilă a Rolelor" | **text:** "Folosirea rolelor care nu se potriveau cu SKU-ul din ordinul de lucru periclita calitatea."
  - **bold:** "Risc de Erori și Rebuturi" | **text:** "Utilizarea greșită a rolelor a dus direct la tipărirea cu erori și la probleme semnificative de rebuturi (deșeuri)."
  - **bold:** "Lipsa unui Control Fiabil" | **text:** "Era necesară o structură de control fiabilă, independentă de factorul uman, care să prevină începerea producției fără o corespondență corectă."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Verificare bazată pe RFID și interblocare automată a mașinii
- **solutionLede:** Tagurile RFID au fost montate pe rolele de embosare care imprimă pe țigări. La declanșarea de către mașină, s-a citit tagul RFID al rolei și s-a verificat potrivirea cu SKU-ul din ordinul de lucru. În cazul unei nepotriviri, mașina a fost oprită automat și o alarmă a fost transmisă operatorului.
- **steps:**
  - **no:** "01" | **title:** "Etichetare RFID" | **text:** "Taguri RFID rezistente au fost plasate pe toate rolele de embosare."
  - **no:** "02" | **title:** "Declanșare și Citire" | **text:** "Cu declanșatorul de producție dat de mașină, cititoarele RFID scanează tag-ul de pe rolă."
  - **no:** "03" | **title:** "Verificare Potrivire SKU" | **text:** "Informația citită este potrivită cu SKU-ul din ordinul de lucru; dacă verificarea este reușită, producția avansează."
  - **no:** "04" | **title:** "Oprire Automată" | **text:** "Când se detectează o nepotrivire, sistemul oprește imediat mașina prin intermediul PLC și emite o alarmă de urgență."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipament Utilizat
- **techTitle:** Hardware RFID și infrastructură de declanșare bazată pe PLC
- **techGrid:**
  - **tag:** "HARDWARE" | **title:** "Tag-uri RFID" | **text:** "Taguri RFID montate pe role de embosare, potrivite pentru funcționare în mediul din interiorul mașinii."
  - **tag:** "CITITOR" | **title:** "Antene și Cititoare RFID" | **text:** "Echipamente care scanează tag-ul de pe rolă în câteva secunde la semnalul de declanșare din partea mașinii."
  - **tag:** "AUTOMATIZARE" | **title:** "Structură PLC" | **text:** "Sistemul care execută automatizarea, declanșările de citire RFID și comanda de oprire a mașinilor la nepotrivire."
  - **tag:** "DISPOZITIV" | **title:** "Terminale Mobile" | **text:** "Terminale mobile RFID utilizate pentru identificarea adițională a rolelor și operațiuni conexe."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Integrarea cu Ordinul de Lucru SAP
- **integrationDesc:** Sistemul funcționează integrat cu SAP; informațiile ordinelor de lucru și SKU sunt primite de la SAP și corelate, iar rezultatele sunt trimise înapoi la SAP.
- **integrationList:**
  - **bold:** "Integrare SAP" | **text:** "Datele SKU și ordinele de lucru sunt aduse din SAP pentru a verifica decizia de producție, iar rezultatele de execuție sunt trimise înapoi către SAP."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Proces de tipărire securizat, fără erori umane
- **resultsGrid:**
  - **title:** "Prevenirea Rolelor Greșite" | **text:** "Potrivirea rola și a ordinului de lucru este verificată automat prin RFID, eliminând discreția operatorului."
  - **title:** "Reducerea Rebuturilor" | **text:** "Riscul producției de rebuturi care duce la pierderi de calitate din cauza imprimării defectuoase a fost redus semnificativ."
  - **title:** "Securitatea Procesului" | **text:** "Securitatea producției a fost asigurată prin nepermiterea funcționării mașinii fără o potrivire stabilită cu o rolă."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Aveți nevoie de urmărire și verificare a echipamentelor?
- **ctaSubtitle:** Contactați-ne pentru a discuta cum soluțiile noastre de urmărire RFID pot fi adaptate fabricii dumneavoastră.
- **ctaPrimary:** Contactați-ne


---

### 31. Groupe Atlantic - Bara İzlenebilirlik
**Slug:** `groupe-atlantic-busbar-traceability` | **ID:** `41` | **Sıra (Order):** `31` | **Yıl:** `2018`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `groupe-atlantic-busbar-traceability`
- **Sıralama (order):** `31`
- **Yıl (year / referenceDate):** `2018`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `Barcode, Assembly Tracking, ERP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/groupe-atlantic-logo-vector.svg`
  - **Ana Görsel (image):** `/resmi/Factory.jpg`
  - **Hero Görseli (heroImage):** `/resmi/Factory.jpg`
  - **Galeri Görselleri (gallery):**
  - /resmi/Factory.jpg

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Groupe Atlantic - Bara İzlenebilirlik
- **Sektör (sector / tagValue):** Beyaz Eşya
- **Konum (locationValue):** İzmir Gaziemir ESBAŞ
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Üretim baraları üzerindeki ürünler operasyon bazında anlık takip edilerek paketlemeye kadar tam süreç görünürlüğü ve güvenilir izlenebilirlik sağlanmıştır.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Paketlemeye Kadar
- **heroTitleLine2:** Kesintisiz Bara Takibi
- **heroSub:** Üretim baraları üzerindeki ürünler operasyon bazında anlık takip edilerek paketlemeye kadar tam süreç görünürlüğü ve güvenilir izlenebilirlik sağlanmıştır.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Üretim Baralarında Uçtan Uca Takip
- **contextP1:** Groupe Atlantic'in İzmir Gaziemir ESBAŞ Serbest Bölge'deki fabrikası havlupan üretimi yapmaktadır. Bu fabrikada hayata geçirilen projede, üretim baraları üzerindeki ürünler operasyon bazında takip edilerek paketlemeye kadar olan sürecin izlenebilirliği sağlanmıştır.
- **contextP2:** Ürün-bara ilişkisinin operasyonlar boyunca izlenmesi ile süreç görünürlüğü artırılmış ve paketlemeye kadar kesintisiz takip hedeflenmiştir.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Manuel takipte görünürlük kaybı riski
- **problemLede:** Üretim sürecinde hangi baranın üzerinde hangi ürünlerin bulunduğunun ve baraların hangi operasyonda olduğunun her aşamada bilinmesi gerekiyordu.
- **problemList:**
  - **bold:** "Ürün-Bara İlişkisi" | **text:** "Manuel takipte ürün ile bara ilişkisinin sürekli ve doğru biçimde korunması zorlaşıyordu."
  - **bold:** "Operasyon Durumu" | **text:** "Baraların hangi operasyonda olduğunun her adımda görünür olmaması süreç kontrolünde zorluk oluşturuyordu."
  - **bold:** "İzlenebilirlik Boşluğu" | **text:** "Paketlemeye kadar olan hatta kesintisiz izlenebilirlik için otomatize bir yapıya ihtiyaç vardı."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Operasyon bazlı dijital bara takibi
- **solutionLede:** Üretim baralarının takibi yapılarak her baranın üzerinde hangi ürünlerin bulunduğu ve baraların hangi operasyonda olduğu kayıt altına alındı.
- **steps:**
  - **no:** "01" | **title:** "Kod Okuma" | **text:** "Baralar ve ürünler saha tipi okuyucular ile operasyon geçişlerinde otomatik okunur."
  - **no:** "02" | **title:** "Operasyon Kaydı" | **text:** "Okunan verilerle ürün-bara ilişkisi ve operasyon durumu sistemde anlık güncellenir."
  - **no:** "03" | **title:** "SCADA İşleme" | **text:** "Bara ve ürün takip verileri mevcut SCADA altyapısı üzerinden işlenir."
  - **no:** "04" | **title:** "Paketlemeye Kadar Takip" | **text:** "Baralar, üzerlerindeki ürünlerle birlikte paketleme aşamasına kadar uç noktaya kadar izlenir."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** Kod okuyucular, PLC ve OnSuite Trace
- **techGrid:**
  - **tag:** "DONANIM" | **title:** "Kod Okuyucular" | **text:** "Baraların ve üzerlerindeki ürünlerin taranması için saha tipi okuyucular kullanılmıştır."
  - **tag:** "OTOMASYON" | **title:** "PLC Saha Yönetimi" | **text:** "PLC saha akışlarını yönetir ve okuma verilerini sürece doğru şekilde aktarır."
  - **tag:** "YAZILIM" | **title:** "SCADA Entegrasyonu" | **text:** "Okumalar mevcut SCADA sistemi üzerinden işlenerek operasyon bazlı izlenebilirlik sağlanır."
  - **tag:** "PLATFORM" | **title:** "OnSuite Trace" | **text:** "İzlenebilirlik ve süreç yönetimi OnSuite Trace platformu üzerinde merkezileşir."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** SCADA ve ERP ile entegre yapı
- **integrationDesc:** Sistem, müşterinin mevcut SCADA altyapısı ve ERP ile entegre çalışmaktadır. Bara ve ürün takip verileri mevcut SCADA üzerinden işlenmekte, izlenebilirlik ve üretim verileri ERP ile paylaşılmaktadır.
- **integrationList:**
  - **bold:** "SCADA Entegrasyonu" | **text:** "Bara ve ürün takip verileri mevcut SCADA sistemi üzerinden işlenmektedir."
  - **bold:** "ERP Haberleşmesi" | **text:** "İzlenebilirlik ve üretim verileri ERP ile paylaşılarak süreç merkezi olarak yönetilmektedir."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Süreç kontrolünde güçlü görünürlük
- **resultsGrid:**
  - **title:** "Operasyon Bazlı İzlenebilirlik" | **text:** "Baralar ve üzerlerindeki ürünler operasyon bazında paketlemeye kadar izlenebilir hale geldi."
  - **title:** "Ürün-Bara İlişkisi" | **text:** "Ürün-bara ilişkisi ve operasyon durumu her aşamada görünür kılındı."
  - **title:** "Manuel Takip Azalımı" | **text:** "Manuel takip ihtiyacı azaltılarak süreç kontrolü ve izlenebilirlik güçlendirildi."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Üretim süreçlerinizi de dönüştürmek ister misiniz?
- **ctaSubtitle:** Benzer bir çözümü işletmenize nasıl uygulayabileceğimizi konuşmak için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Groupe Atlantic Busbar Traceability
- **Sector (sector / tagValue):** Home Appliances
- **Location (locationValue):** Izmir Gaziemir ESBAS
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** At Groupe Atlantic's plant in Izmir Gaziemir ESBAS Free Zone, products carried on production busbars were tracked by operation up to packaging.

##### Hero Section (EN)
- **heroTitleLine1:** Groupe Atlantic
- **heroTitleLine2:** Busbar Traceability
- **heroSub:** At Groupe Atlantic's plant in Izmir Gaziemir ESBAS Free Zone, products carried on production busbars were tracked by operation up to packaging.

##### Context (EN)
- **contextEyebrow:** Client and Context
- **contextTitle:** End-to-End Tracking on Production Busbars
- **contextP1:** Groupe Atlantic manufactures towel warmers at its Izmir facility. In this project, products moving on production busbars were tracked operation by operation.
- **contextP2:** The goal was to maintain full product-busbar visibility up to packaging and improve process control.

##### Problem / Challenge (EN)
- **problemEyebrow:** Need / Problem
- **problemTitle:** Visibility and control gaps in manual tracking
- **problemLede:** At every production stage, it had to be known which products were on which busbar and in which operation they were located.
- **problemList:**
  - **bold:** "Product-Busbar Link" | **text:** "Manual methods made it hard to maintain a reliable product-busbar relationship across all stages."
  - **bold:** "Operational Status" | **text:** "Limited stage visibility created process control risks."
  - **bold:** "Traceability Gap" | **text:** "A digital structure was needed to ensure uninterrupted traceability up to packaging."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Operation-based digital busbar tracking
- **solutionLede:** Production busbars were tracked and both product-busbar relationships and operation states were recorded in real time.
- **steps:**
  - **no:** "01" | **title:** "Code Reading" | **text:** "Busbars and products are scanned at operation transitions with field readers."
  - **no:** "02" | **title:** "Operation Recording" | **text:** "The product-busbar relationship and operation status are updated instantly."
  - **no:** "03" | **title:** "SCADA Processing" | **text:** "Tracking data is processed through the existing SCADA infrastructure."
  - **no:** "04" | **title:** "Tracking to Packaging" | **text:** "Busbars and products are monitored continuously until packaging."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment
- **techTitle:** Code readers, PLC, and OnSuite Trace
- **techGrid:**
  - **tag:** "HARDWARE" | **title:** "Code Readers" | **text:** "Field readers scan busbars and products in real time."
  - **tag:** "AUTOMATION" | **title:** "PLC Field Control" | **text:** "PLC controls field flow and forwards data to the process layer."
  - **tag:** "SOFTWARE" | **title:** "SCADA Integration" | **text:** "All reads are processed in SCADA for operation-based traceability."
  - **tag:** "PLATFORM" | **title:** "OnSuite Trace" | **text:** "Traceability and process management are centralized on OnSuite Trace."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** Integrated with SCADA and ERP
- **integrationDesc:** The solution works integrated with the customer's SCADA and ERP systems. Busbar and product tracking data is processed in SCADA and shared with ERP.
- **integrationList:**
  - **bold:** "SCADA Integration" | **text:** "Busbar and product tracking data is processed through the existing SCADA system."
  - **bold:** "ERP Communication" | **text:** "Traceability and production data are shared with ERP for centralized management."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Impact
- **resultsTitle:** Higher process visibility and control
- **resultsGrid:**
  - **title:** "Operation-Based Traceability" | **text:** "Busbars and products became traceable operation by operation up to packaging."
  - **title:** "Product-Busbar Visibility" | **text:** "Product-busbar relationships and operation status became visible at each stage."
  - **title:** "Reduced Manual Work" | **text:** "Reduced manual tracking needs strengthened process control and traceability."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Would you like to transform your production processes as well?
- **ctaSubtitle:** Contact us to discuss how we can adapt a similar solution to your operation.
- **ctaPrimary:** Contact Us

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Groupe Atlantic - Trasabilitatea barelor
- **Sector (sector / tagValue):** Electrocasnice
- **Locație (locationValue):** Izmir Gaziemir ESBAS
- **Domeniu de Aplicare (scopeVal):** Software si Integrare
- **An (year):** An
- **Descriere Scurtă (description):** La fabrica Groupe Atlantic din Izmir Gaziemir ESBAS Free Zone, produsele de pe barele de productie au fost urmarite pe operatiuni pana la ambalare.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Groupe Atlantic
- **heroTitleLine2:** Trasabilitatea Barelor
- **heroSub:** La fabrica Groupe Atlantic din Izmir Gaziemir ESBAS Free Zone, produsele de pe barele de productie au fost urmarite pe operatiuni pana la ambalare.

##### Context (RO)
- **contextEyebrow:** Client si Context
- **contextTitle:** Urmarire end-to-end pe barele de productie
- **contextP1:** Groupe Atlantic produce calorifere de baie in fabrica din Izmir. In acest proiect, produsele de pe barele de productie au fost urmarite operatiune cu operatiune.
- **contextP2:** Obiectivul a fost cresterea vizibilitatii produs-bara pana la ambalare si consolidarea controlului de proces.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoie / Problema
- **problemTitle:** Lipsa de vizibilitate in urmarirea manuala
- **problemLede:** In fiecare etapa era necesar sa se stie ce produse sunt pe fiecare bara si in ce operatiune se afla.
- **problemList:**
  - **bold:** "Relatia Produs-Bara" | **text:** "Urmarirea manuala ingreuna mentinerea corecta a relatiei dintre produs si bara."
  - **bold:** "Starea Operatiunii" | **text:** "Vizibilitatea limitata pe etape crea riscuri pentru controlul procesului."
  - **bold:** "Gol de Trasabilitate" | **text:** "Era necesara o structura digitala pentru trasabilitate continua pana la ambalare."

##### Soluție (RO)
- **solutionEyebrow:** Solutie
- **solutionTitle:** Urmarire digitala a barelor pe operatiuni
- **solutionLede:** Barele de productie au fost urmarite, iar relatia produs-bara si starea operatiunii au fost inregistrate in timp real.
- **steps:**
  - **no:** "01" | **title:** "Citire Cod" | **text:** "Barele si produsele sunt citite la tranzitiile de operatiune cu cititoare de teren."
  - **no:** "02" | **title:** "Inregistrare Operatiune" | **text:** "Relatia produs-bara si starea operatiunii sunt actualizate instant."
  - **no:** "03" | **title:** "Procesare SCADA" | **text:** "Datele de urmarire sunt procesate prin infrastructura SCADA existenta."
  - **no:** "04" | **title:** "Urmarire pana la Ambalare" | **text:** "Barele si produsele sunt urmarite continuu pana la ambalare."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipamente
- **techTitle:** Cititoare de cod, PLC si OnSuite Trace
- **techGrid:**
  - **tag:** "HARDWARE" | **title:** "Cititoare de Cod" | **text:** "Cititoare de teren pentru scanarea barelor si produselor."
  - **tag:** "AUTOMATIZARE" | **title:** "Control PLC" | **text:** "PLC-ul gestioneaza fluxul din teren si transmite datele catre proces."
  - **tag:** "SOFTWARE" | **title:** "Integrare SCADA" | **text:** "Citirile sunt procesate in SCADA pentru trasabilitate pe operatiuni."
  - **tag:** "PLATFORMA" | **title:** "OnSuite Trace" | **text:** "Trasabilitatea si managementul procesului sunt centralizate in OnSuite Trace."

##### Integrări (RO)
- **integrationEyebrow:** Integrari
- **integrationTitle:** Integrare cu SCADA si ERP
- **integrationDesc:** Sistemul functioneaza integrat cu infrastructura SCADA si ERP a clientului. Datele de urmarire sunt procesate in SCADA si partajate cu ERP.
- **integrationList:**
  - **bold:** "Integrare SCADA" | **text:** "Datele de urmarire pentru bare si produse sunt procesate prin sistemul SCADA existent."
  - **bold:** "Comunicare ERP" | **text:** "Datele de trasabilitate si productie sunt partajate cu ERP pentru management centralizat."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Rezultate
- **resultsTitle:** Vizibilitate si control de proces imbunatatite
- **resultsGrid:**
  - **title:** "Trasabilitate pe Operatiuni" | **text:** "Barele si produsele au devenit trasabile pana la ambalare, operatiune cu operatiune."
  - **title:** "Vizibilitate Produs-Bara" | **text:** "Relatia produs-bara si starea operatiunii au devenit vizibile la fiecare etapa."
  - **title:** "Mai Putina Urmarire Manuala" | **text:** "Reducerea urmaririi manuale a consolidat controlul de proces si trasabilitatea."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriti sa va transformati si procesele de productie?
- **ctaSubtitle:** Contactati-ne pentru a discuta cum putem adapta o solutie similara pentru operatiunea dvs.
- **ctaPrimary:** Contactați-ne


---

### 32. Delphi Technologies - Ray Montaj RFID-Datamatrix Entegrasyonu
**Slug:** `delphi-rfid-datamatrix-rail-assembly-integration` | **ID:** `14` | **Sıra (Order):** `32` | **Yıl:** `2018`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `delphi-rfid-datamatrix-rail-assembly-integration`
- **Sıralama (order):** `32`
- **Yıl (year / referenceDate):** `2018`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `RFID, Barcode, ERP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/delphi.svg`
  - **Ana Görsel (image):** `/images/companies/Delphi/Delphi-Fabrika.jpg`
  - **Hero Görseli (heroImage):** `/images/companies/Delphi/Delphi-Fabrika.jpg`
  - **Galeri Görselleri (gallery):**
  - /images/companies/Delphi/Delphi-Fabrika.jpg
  - /images/companies/Delphi/delphi_dizel.jpg

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Delphi Technologies - Ray Montaj RFID-Datamatrix Entegrasyonu
- **Sektör (sector / tagValue):** Otomotiv
- **Konum (locationValue):** İzmir ESBAŞ
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Delphi Technologies / Ray Montajının RFID-Datamatrix Entegrasyonu.

##### Hero Bölümü (TR)
- **heroTitleLine1:** RFID'den Datamatrix'e
- **heroTitleLine2:** Tek Akışta Tam İzlenebilirlik
- **heroSub:** Farklı izleme yöntemleri tek seri numarası altında birleştirilerek ray montaj hattında operasyonlar arası kesintisiz ve güvenilir ürün takibi sağlanmıştır.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** RFID ve Datamatrix'in tek akışta birleştirilmesi
- **contextP1:** Delphi Technologies'in İzmir ESBAŞ Serbest Bölge'deki fabrikası, otomotiv yan sanayine yönelik üretim yapmaktadır. Bu fabrikada hayata geçirilen projede, ray montaj hattında RFID ve Datamatrix tabanlı izlenebilirlik yöntemleri tek bir yapıda birleştirilmiştir.
- **contextP2:** Amaç, farklı operasyonlarda kullanılan iki izleme yöntemini tek seri numarası altında birleştirerek ürünün tüm hat boyunca kesintisiz izlenmesini sağlamaktı.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** İki farklı izleme yönteminde kopukluk riski
- **problemLede:** Üretim sürecinde bir kısım operasyon RFID etiketleri, bir kısmı ise Datamatrix kodları üzerinden yürüyordu.
- **problemList:**
  - **bold:** "Parçalı İzleme" | **text:** "RFID ve Datamatrix akışlarının bağımsız kalması ürünün operasyonlar boyunca tekil izlenmesini zorlaştırıyordu."
  - **bold:** "İzlenebilirlik Boşluğu" | **text:** "Yöntemler arası veri kopukluğu, ürün geçmişinde boşluk riski oluşturuyordu."
  - **bold:** "Tek Akış Gereksinimi" | **text:** "RFID ve Datamatrix operasyonlarının aynı seri numarası temelinde birleştirilmesi gerekiyordu."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** RFID serisinden Datamatrix'e kesintisiz izlenebilirlik
- **solutionLede:** Markalama istasyonunda RFID etiketindeki seri numarası Datamatrix koduna dönüştürüldü; sonraki operasyonlarda izlenebilirlik Datamatrix üzerinden sürdürüldü.
- **steps:**
  - **no:** "01" | **title:** "RFID Okuma" | **text:** "Ürün üzerindeki RFID etiketlerinden seri numarası bilgisi okunur."
  - **no:** "02" | **title:** "Datamatrix Dönüşümü" | **text:** "Markalama istasyonunda RFID seri numarası Datamatrix koduna dönüştürülüp basılır."
  - **no:** "03" | **title:** "Operasyon Takibi" | **text:** "Sonraki operasyonlarda Datamatrix kodları okutularak izlenebilirlik akışı sürdürülür."
  - **no:** "04" | **title:** "Tekil Geçmiş Birleştirme" | **text:** "RFID ve Datamatrix operasyon verileri tek seri numarası temelinde birleştirilir."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** RFID, lazer markalama, kod okuma ve PLC altyapısı
- **techGrid:**
  - **tag:** "RFID" | **title:** "RFID Okuyucular" | **text:** "Ürün üzerindeki RFID etiketlerinden seri numarası bilgisini okuyarak süreci başlatır."
  - **tag:** "MARKALAMA" | **title:** "Lazer Yazıcı" | **text:** "RFID seri bilgisini Datamatrix koduna dönüştürüp ürün üzerine markalar."
  - **tag:** "KOD OKUMA" | **title:** "Datamatrix Okuyucular" | **text:** "Sonraki istasyonlarda Datamatrix kodlarını okuyarak izlenebilirliği devam ettirir."
  - **tag:** "OTOMASYON" | **title:** "PLC Saha Yönetimi" | **text:** "RFID ve Datamatrix okumalarını PLC üzerinden tek izlenebilirlik akışında birleştirir."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** Oracle ile merkezi veri paylaşımı
- **integrationDesc:** Sistem Oracle ile entegre çalışmaktadır; RFID ve Datamatrix operasyonlarından elde edilen izlenebilirlik verileri seri numarası temelinde Oracle ile paylaşılmaktadır.
- **integrationList:**
  - **bold:** "Oracle Entegrasyonu" | **text:** "Operasyon verileri Oracle tarafına aktarılarak süreç merkezi olarak izlenir ve yönetilir."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Uçtan uca süreç bütünlüğü
- **resultsGrid:**
  - **title:** "Kesintisiz İzlenebilirlik" | **text:** "Ürün, markalamadan itibaren tüm operasyonlar boyunca kesintisiz izlenebilir hale getirilmiştir."
  - **title:** "Yöntemler Arası Birleşim" | **text:** "RFID ve Datamatrix tabanlı operasyonlar tek seri numarası altında birleştirilmiştir."
  - **title:** "Süreç Bütünlüğü" | **text:** "İki farklı izleme yöntemi arasındaki kopukluk giderilerek uçtan uca süreç bütünlüğü sağlanmıştır."

##### Çağrı (CTA) (TR)
- **ctaTitle:** İzlenebilirlik yapınızı tek akışta birleştirmek ister misiniz?
- **ctaSubtitle:** RFID, Datamatrix ve kurumsal sistem entegrasyonunu süreçlerinize nasıl uygulayabileceğimizi konuşalım.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Delphi RFID Datamatrix Rail Assembly Integration
- **Sector (sector / tagValue):** Automotive
- **Location (locationValue):** Izmir ESBAS
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** Delphi Technologies / RFID-Datamatrix Integration of Rail Assembly.

##### Hero Section (EN)
- **heroTitleLine1:** Delphi Technologies
- **heroTitleLine2:** Rail Assembly RFID-Datamatrix Integration
- **heroSub:** At Delphi Technologies' plant in Izmir ESBAS Free Zone, RFID- and Datamatrix-based traceability methods were unified into a single flow on the rail assembly line.

##### Context (EN)
- **contextEyebrow:** Client and Context
- **contextTitle:** Bringing RFID and Datamatrix into one stream
- **contextP1:** Delphi Technologies manufactures for the automotive supplier industry at its Izmir ESBAS facility. In this project, RFID and Datamatrix tracking methods were integrated into one structure on the rail assembly line.
- **contextP2:** The objective was to ensure uninterrupted product traceability across all operations under a single serial identity.

##### Problem / Challenge (EN)
- **problemEyebrow:** Need / Problem
- **problemTitle:** Gap risk between two tracking methods
- **problemLede:** Some operations ran on RFID tags while others ran on Datamatrix codes.
- **problemList:**
  - **bold:** "Fragmented Tracking" | **text:** "Keeping RFID and Datamatrix flows separate made full-operation continuity difficult."
  - **bold:** "Traceability Gap" | **text:** "Data discontinuity between methods created a risk of missing product history."
  - **bold:** "Single Flow Requirement" | **text:** "Both methods had to be merged into one traceability flow based on one serial identity."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Continuous flow from RFID serial to Datamatrix
- **solutionLede:** At marking, the serial number on RFID was converted into Datamatrix and tracking continued with Datamatrix in subsequent operations.
- **steps:**
  - **no:** "01" | **title:** "RFID Reading" | **text:** "Serial identity is read from RFID tags on products."
  - **no:** "02" | **title:** "Datamatrix Conversion" | **text:** "At marking, RFID serial is transformed and printed as Datamatrix."
  - **no:** "03" | **title:** "Operation Tracking" | **text:** "Datamatrix reads in following stations sustain the tracking flow."
  - **no:** "04" | **title:** "Unified Product History" | **text:** "RFID- and Datamatrix-based operation data are merged under one serial identity."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment
- **techTitle:** RFID, laser marking, code reading, and PLC
- **techGrid:**
  - **tag:** "RFID" | **title:** "RFID Readers" | **text:** "Reads serial identity from RFID tags and starts the digital traceability flow."
  - **tag:** "MARKING" | **title:** "Laser Printer" | **text:** "Converts RFID serial identity into Datamatrix and prints it onto product flow."
  - **tag:** "CODE READING" | **title:** "Datamatrix Readers" | **text:** "Reads Datamatrix codes in subsequent operations for continuity."
  - **tag:** "AUTOMATION" | **title:** "PLC Field Management" | **text:** "Combines RFID and Datamatrix read events into a single process flow."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** Central data sharing with Oracle
- **integrationDesc:** The system is integrated with Oracle; traceability data from RFID and Datamatrix operations is shared using a serial-based identity model.
- **integrationList:**
  - **bold:** "Oracle Integration" | **text:** "Operation data is sent to Oracle for centralized process monitoring and management."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Impact
- **resultsTitle:** End-to-end process integrity
- **resultsGrid:**
  - **title:** "Continuous Traceability" | **text:** "Products became continuously traceable from marking through all operations."
  - **title:** "Method Convergence" | **text:** "RFID and Datamatrix operation streams were unified under one serial identity."
  - **title:** "Process Integrity" | **text:** "Discontinuity between two methods was removed, ensuring full process integrity."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Would you like to unify your tracking methods in one flow?
- **ctaSubtitle:** Let us discuss how to combine RFID, Datamatrix, and enterprise integrations in your operation.
- **ctaPrimary:** Contact Us

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Delphi Technologies - Integrarea RFID-Datamatrix a Ansamblului de Sina
- **Sector (sector / tagValue):** Industria auto
- **Locație (locationValue):** Izmir ESBAS
- **Domeniu de Aplicare (scopeVal):** Software si Integrare
- **An (year):** An
- **Descriere Scurtă (description):** Delphi Technologies / Integrarea RFID-Datamatrix a ansamblului de șină.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Delphi Technologies
- **heroTitleLine2:** Integrare RFID-Datamatrix pe Linia de Sina
- **heroSub:** La fabrica Delphi Technologies din Zona Libera Izmir ESBAS, metodele de trasabilitate bazate pe RFID si Datamatrix au fost unificate intr-un singur flux pe linia de montaj sina.

##### Context (RO)
- **contextEyebrow:** Client si Context
- **contextTitle:** RFID si Datamatrix intr-un singur flux
- **contextP1:** Delphi Technologies produce pentru industria auto la fabrica din Izmir ESBAS. In acest proiect, urmarirea RFID si Datamatrix a fost integrata intr-o singura structura pe linia de montaj sina.
- **contextP2:** Scopul a fost asigurarea trasabilitatii continue a produsului in toate operatiunile pe baza unei identitati unice de serie.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoie / Problema
- **problemTitle:** Risc de intrerupere intre doua metode
- **problemLede:** O parte din operatiuni functiona pe etichete RFID, iar o alta pe coduri Datamatrix.
- **problemList:**
  - **bold:** "Urmarire Fragmentata" | **text:** "Fluxurile separate RFID si Datamatrix ingreunau continuitatea urmaririi pe intreg procesul."
  - **bold:** "Gol de Trasabilitate" | **text:** "Discontinuitatea datelor intre metode crea riscul de lipsa in istoricul produsului."
  - **bold:** "Necesitatea unui Flux Unic" | **text:** "Cele doua metode trebuiau unificate intr-un flux unic bazat pe acelasi numar de serie."

##### Soluție (RO)
- **solutionEyebrow:** Solutie
- **solutionTitle:** Trasabilitate continua de la RFID la Datamatrix
- **solutionLede:** In statia de marcare, seria din RFID a fost transformata in Datamatrix; urmarirea a continuat cu Datamatrix in operatiunile urmatoare.
- **steps:**
  - **no:** "01" | **title:** "Citire RFID" | **text:** "Identitatea seriala este citita de pe eticheta RFID a produsului."
  - **no:** "02" | **title:** "Conversie Datamatrix" | **text:** "In marcare, seria RFID este transformata si imprimata ca Datamatrix."
  - **no:** "03" | **title:** "Urmarire Operatiuni" | **text:** "Citirile Datamatrix in statiile urmatoare mentin fluxul de trasabilitate."
  - **no:** "04" | **title:** "Istoric Unificat" | **text:** "Datele RFID si Datamatrix sunt unite sub aceeasi identitate seriala."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipamente
- **techTitle:** RFID, marcare laser, citire cod, PLC
- **techGrid:**
  - **tag:** "RFID" | **title:** "Cititoare RFID" | **text:** "Citesc seria din eticheta RFID si pornesc fluxul digital de trasabilitate."
  - **tag:** "MARCARE" | **title:** "Imprimanta Laser" | **text:** "Transforma seria RFID in Datamatrix si o marcheaza pe fluxul de produs."
  - **tag:** "CITIRE COD" | **title:** "Cititoare Datamatrix" | **text:** "Citesc codurile Datamatrix in operatiile urmatoare pentru continuitate."
  - **tag:** "AUTOMATIZARE" | **title:** "Management PLC" | **text:** "Uneste citirile RFID si Datamatrix intr-un singur flux de proces."

##### Integrări (RO)
- **integrationEyebrow:** Integrari
- **integrationTitle:** Partajare centralizata cu Oracle
- **integrationDesc:** Sistemul este integrat cu Oracle; datele de trasabilitate din operatiile RFID si Datamatrix sunt partajate central pe baza seriei.
- **integrationList:**
  - **bold:** "Integrare Oracle" | **text:** "Datele operationale sunt transferate in Oracle pentru monitorizare si management centralizat."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Rezultate
- **resultsTitle:** Integritate de proces cap-la-cap
- **resultsGrid:**
  - **title:** "Trasabilitate Continua" | **text:** "Produsele au devenit urmaribile continuu de la marcare pana la finalul operatiunilor."
  - **title:** "Unificare Metode" | **text:** "Fluxurile operationale RFID si Datamatrix au fost unificate pe aceeasi identitate seriala."
  - **title:** "Coerenta Procesului" | **text:** "Intreruperile dintre cele doua metode au fost eliminate, asigurand integritatea procesului."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriti sa unificati metodele de urmarire intr-un singur flux?
- **ctaSubtitle:** Discutam cum putem integra RFID, Datamatrix si sistemele enterprise in operatiunea dvs.
- **ctaPrimary:** Contactați-ne


---

### 33. Delphi Technologies - İzlenebilirlik Verileri Bulut Entegrasyonu
**Slug:** `delphi-cloud-traceability-data-integration` | **ID:** `11` | **Sıra (Order):** `33` | **Yıl:** `2018`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `delphi-cloud-traceability-data-integration`
- **Sıralama (order):** `33`
- **Yıl (year / referenceDate):** `2018`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `RFID, Barcode, ERP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/delphi.svg`
  - **Ana Görsel (image):** `/images/companies/Delphi/Delphi-Fabrika.jpg`
  - **Hero Görseli (heroImage):** `/images/companies/Delphi/Delphi-Fabrika.jpg`
  - **Galeri Görselleri (gallery):**
  - /images/companies/Delphi/Delphi-Fabrika.jpg
  - /images/companies/Delphi/delphi_dizel.jpg

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Delphi Technologies - İzlenebilirlik Verileri Bulut Entegrasyonu
- **Sektör (sector / tagValue):** Otomotiv
- **Konum (locationValue):** İzmir ESBAŞ
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Delphi Technologies / İzlenebilirlik Verilerinin Bulut Entegrasyonu.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Yerel Veriden
- **heroTitleLine2:** Global Buluta Merkezi Görünürlük
- **heroSub:** Sahadan toplanan izlenebilirlik verileri bulut entegrasyonu ile global erişime açılarak lokasyonlar arası ortak görünürlük ve raporlama gücü oluşturulmuştur.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Yerelden globale izlenebilirlik görünürlüğü
- **contextP1:** Delphi Technologies'in İzmir ESBAŞ Serbest Bölge'deki otomotiv yan sanayi fabrikasında hayata geçirilen projede, üretimden elde edilen izlenebilirlik verilerinin şirketin global bulut sistemiyle entegre edilmesi sağlanmıştır.
- **contextP2:** Proje, saha izlenebilirlik verilerinin yerel ortamdan çıkarılıp global düzeyde görünür kılınmasını amaçlamıştır.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Yerel sistemlerde sınırlı kalan veri erişimi
- **problemLede:** İzlenebilirlik verileri yalnızca fabrikadaki yerel Oracle sistemlerinde tutuluyor; bu durum verilerin global düzeyde erişilebilir ve görünür olmasını engelliyordu.
- **problemList:**
  - **bold:** "Yerel Sınır" | **text:** "Veriler yalnızca fabrika içi Oracle ortamında tutulduğu için merkezi erişim mümkün olmuyordu."
  - **bold:** "Global Görünürlük Eksikliği" | **text:** "Farklı lokasyonların aynı veri seti üzerinde bütüncül görünürlük elde etmesi zorlaşıyordu."
  - **bold:** "Entegrasyon İhtiyacı" | **text:** "Yerel izlenebilirlik verilerinin şirketin global bulut sistemiyle entegre edilmesi gerekiyordu."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Oracle'dan global buluta merkezi veri akışı
- **solutionLede:** Fabrikadaki yerel Oracle sistemlerinde tutulan izlenebilirlik verileri, Delphi'nin global bulut sistemiyle entegre edildi.
- **steps:**
  - **no:** "01" | **title:** "Yerel Veri Toplama" | **text:** "Saha üretim ve izlenebilirlik verileri yerel Oracle sistemlerinde toplanır."
  - **no:** "02" | **title:** "Entegrasyon Katmanı" | **text:** "Tanımlanan entegrasyon katmanı, Oracle verilerini dönüşüm kurallarıyla hazırlar."
  - **no:** "03" | **title:** "Global Buluta Aktarım" | **text:** "Hazırlanan izlenebilirlik verileri Delphi'nin global bulut platformuna aktarılır."
  - **no:** "04" | **title:** "Merkezi Görünürlük" | **text:** "Global sistem üzerinden farklı lokasyonlar için merkezi izleme ve raporlama sağlanır."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** Yerel Oracle ve global bulut entegrasyon katmanı
- **techGrid:**
  - **tag:** "VERİ" | **title:** "Yerel Oracle Sistemleri" | **text:** "Saha izlenebilirlik verilerinin üretildiği ve tutulduğu yerel veri altyapısı."
  - **tag:** "ENTEGRASYON" | **title:** "Veri Entegrasyon Katmanı" | **text:** "Yerel Oracle ile global bulut platformu arasında güvenli veri aktarımını yöneten katman."
  - **tag:** "BULUT" | **title:** "Global Bulut Platformu" | **text:** "İzlenebilirlik verilerinin merkezi görünürlük ve erişim için toplandığı global ortam."
  - **tag:** "YÖNETİM" | **title:** "OnSuite Trace" | **text:** "İzlenebilirlik ve süreç yönetiminin merkezde izlenmesini destekleyen platform."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** Yerel Oracle ile global bulutun birleşimi
- **integrationDesc:** Sistem, yerel Oracle sistemleri ile Delphi'nin global bulut platformunu entegre etmektedir. Yerel ortamda üretilen izlenebilirlik verileri global bulut sistemine aktarılarak merkezi erişim ve görünürlük sağlanmaktadır.
- **integrationList:**
  - **bold:** "Oracle - Bulut Entegrasyonu" | **text:** "Yerel Oracle verileri entegrasyon katmanı üzerinden global bulut sistemine taşınır."
  - **bold:** "Merkezi Erişim" | **text:** "Global sistem sayesinde farklı lokasyonlar aynı izlenebilirlik verilerine merkezi olarak erişir."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Global görünürlük ve raporlama kabiliyeti
- **resultsGrid:**
  - **title:** "Global Erişilebilirlik" | **text:** "İzlenebilirlik verileri yerel ortamla sınırlı olmaktan çıkarılarak global düzeyde erişilebilir hale gelmiştir."
  - **title:** "Merkezi Görünürlük" | **text:** "Farklı lokasyonlar arasında üretim ve izlenebilirlik verileri için merkezi görünürlük sağlanmıştır."
  - **title:** "Raporlama Gücü" | **text:** "Global bulut sistemi üzerinden merkezi izleme ve raporlama imkanı elde edilmiştir."

##### Çağrı (CTA) (TR)
- **ctaTitle:** İzlenebilirlik verilerinizi global düzeyde görünür kılmak ister misiniz?
- **ctaSubtitle:** Yerel sistemleriniz ile global platformlar arasında güvenli ve sürdürülebilir entegrasyon için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Delphi Cloud Traceability Data Integration
- **Sector (sector / tagValue):** Automotive
- **Location (locationValue):** Izmir ESBAS
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** Delphi Technologies / Cloud Integration of Traceability Data.

##### Hero Section (EN)
- **heroTitleLine1:** Delphi Technologies
- **heroTitleLine2:** Traceability Data Cloud Integration
- **heroSub:** At Delphi Technologies' automotive supplier plant in Izmir ESBAS Free Zone, production traceability data was integrated with the company's global cloud system.

##### Context (EN)
- **contextEyebrow:** Client and Context
- **contextTitle:** From local systems to global visibility
- **contextP1:** In this project, traceability data generated in production was integrated from local systems into Delphi's global cloud platform.
- **contextP2:** The goal was to make field traceability data globally visible instead of keeping it only in local environments.

##### Problem / Challenge (EN)
- **problemEyebrow:** Need / Problem
- **problemTitle:** Local data silos blocked global access
- **problemLede:** Traceability data was stored only in local Oracle systems at the plant, preventing global accessibility and visibility.
- **problemList:**
  - **bold:** "Local Limitation" | **text:** "Data remaining in plant-level systems prevented enterprise-wide access."
  - **bold:** "Limited Global Visibility" | **text:** "Cross-location centralized monitoring and reporting was difficult."
  - **bold:** "Integration Requirement" | **text:** "Local traceability records had to be integrated into Delphi's global cloud model."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Central flow from Oracle to global cloud
- **solutionLede:** Traceability data stored in local Oracle systems was integrated into Delphi's global cloud system.
- **steps:**
  - **no:** "01" | **title:** "Local Data Capture" | **text:** "Field production and traceability data is captured in local Oracle systems."
  - **no:** "02" | **title:** "Integration Layer" | **text:** "A data integration layer prepares and routes Oracle records."
  - **no:** "03" | **title:** "Global Cloud Transfer" | **text:** "Prepared records are transferred into Delphi's global cloud platform."
  - **no:** "04" | **title:** "Central Monitoring" | **text:** "Global users gain centralized visibility and reporting across locations."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment
- **techTitle:** Local Oracle and global cloud integration layer
- **techGrid:**
  - **tag:** "DATA" | **title:** "Local Oracle Systems" | **text:** "Primary local data source for field traceability records."
  - **tag:** "INTEGRATION" | **title:** "Data Integration Layer" | **text:** "Managed secure transfer and mapping between Oracle and cloud systems."
  - **tag:** "CLOUD" | **title:** "Global Cloud Platform" | **text:** "Central global environment for visibility, access, and analytics."
  - **tag:** "MANAGEMENT" | **title:** "OnSuite Trace" | **text:** "Supports centralized traceability and process management workflows."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** Local Oracle integrated with global cloud
- **integrationDesc:** The solution integrates local Oracle systems with Delphi's global cloud platform, enabling centralized visibility and access to traceability data.
- **integrationList:**
  - **bold:** "Oracle - Cloud Integration" | **text:** "Local Oracle traceability data is transferred to the global cloud system via integration services."
  - **bold:** "Central Access" | **text:** "Locations access the same traceability records through one global view."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Impact
- **resultsTitle:** Global visibility and reporting capability
- **resultsGrid:**
  - **title:** "Global Accessibility" | **text:** "Traceability data became accessible globally instead of being limited to local systems."
  - **title:** "Central Visibility" | **text:** "Production and traceability information became centrally visible across locations."
  - **title:** "Reporting Capability" | **text:** "Centralized monitoring and reporting became possible through the global cloud platform."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Would you like to make your traceability data globally visible?
- **ctaSubtitle:** Contact us for secure and scalable integration between local systems and global platforms.
- **ctaPrimary:** Contact Us

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Delphi Technologies - Integrare in Cloud a Datelor de Trasabilitate
- **Sector (sector / tagValue):** Industria auto
- **Locație (locationValue):** Izmir ESBAS
- **Domeniu de Aplicare (scopeVal):** Software si Integrare
- **An (year):** An
- **Descriere Scurtă (description):** Delphi Technologies / Integrare în Cloud a Datelor de Trasabilitate.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Delphi Technologies
- **heroTitleLine2:** Integrarea in Cloud a Datelor de Trasabilitate
- **heroSub:** La fabrica Delphi Technologies din Izmir ESBAS Free Zone, datele de trasabilitate din productie au fost integrate cu sistemul global cloud al companiei.

##### Context (RO)
- **contextEyebrow:** Client si Context
- **contextTitle:** Vizibilitate globala din sisteme locale
- **contextP1:** In acest proiect, datele de trasabilitate generate local au fost integrate in platforma cloud globala Delphi.
- **contextP2:** Obiectivul a fost eliminarea limitarii locale a datelor si obtinerea unei vizibilitati globale centralizate.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoie / Problema
- **problemTitle:** Date locale fara acces global
- **problemLede:** Datele de trasabilitate erau stocate doar in sistemele Oracle locale, ceea ce limita accesibilitatea si vizibilitatea globala.
- **problemList:**
  - **bold:** "Limitare Locala" | **text:** "Datele ramaneau in fabrica si nu puteau fi utilizate central la nivel global."
  - **bold:** "Vizibilitate Redusa" | **text:** "Raportarea unificata intre locatii era dificila fara integrare centrala."
  - **bold:** "Necesitate de Integrare" | **text:** "Datele locale de trasabilitate trebuiau transferate in cloudul global Delphi."

##### Soluție (RO)
- **solutionEyebrow:** Solutie
- **solutionTitle:** Flux centralizat Oracle - cloud global
- **solutionLede:** Datele de trasabilitate din Oracle local au fost integrate in sistemul cloud global Delphi.
- **steps:**
  - **no:** "01" | **title:** "Colectare Locala" | **text:** "Datele de productie si trasabilitate sunt colectate in Oracle local."
  - **no:** "02" | **title:** "Strat de Integrare" | **text:** "Un strat de integrare pregateste si mapeaza datele pentru transfer."
  - **no:** "03" | **title:** "Transfer in Cloud" | **text:** "Datele sunt transferate in platforma cloud globala Delphi."
  - **no:** "04" | **title:** "Vizibilitate Centrala" | **text:** "Locatiile obtin acces centralizat pentru monitorizare si raportare."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipamente
- **techTitle:** Oracle local si strat de integrare cloud
- **techGrid:**
  - **tag:** "DATE" | **title:** "Sisteme Oracle Locale" | **text:** "Sursa locala principala pentru datele de trasabilitate din productie."
  - **tag:** "INTEGRARE" | **title:** "Strat de Integrare" | **text:** "Gestioneaza transferul securizat al datelor intre Oracle si cloud."
  - **tag:** "CLOUD" | **title:** "Platforma Cloud Globala" | **text:** "Mediu central pentru acces global, vizibilitate si raportare."
  - **tag:** "MANAGEMENT" | **title:** "OnSuite Trace" | **text:** "Sustine procesele de monitorizare centralizata a trasabilitatii."

##### Integrări (RO)
- **integrationEyebrow:** Integrari
- **integrationTitle:** Integrare intre Oracle local si cloud global
- **integrationDesc:** Sistemul integreaza Oracle local cu platforma cloud globala Delphi, asigurand acces si vizibilitate centralizata pentru datele de trasabilitate.
- **integrationList:**
  - **bold:** "Integrare Oracle - Cloud" | **text:** "Datele locale de trasabilitate sunt transferate in cloud prin serviciile de integrare."
  - **bold:** "Acces Central" | **text:** "Echipele din locatii diferite folosesc aceeasi vedere globala a datelor."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Rezultate
- **resultsTitle:** Vizibilitate globala si raportare centralizata
- **resultsGrid:**
  - **title:** "Accesibilitate Globala" | **text:** "Datele de trasabilitate au devenit accesibile global, nu doar local."
  - **title:** "Vizibilitate Centrala" | **text:** "Datele de productie si trasabilitate au devenit vizibile central intre locatii."
  - **title:** "Capabilitate de Raportare" | **text:** "Cloudul global permite monitorizare si raportare centralizata in timp util."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriti vizibilitate globala pentru datele de trasabilitate?
- **ctaSubtitle:** Contactati-ne pentru integrare sigura intre sisteme locale si platforme globale.
- **ctaPrimary:** Contactați-ne


---

### 34. Candy Hoover - Test İstasyonları İzlenebilirlik
**Slug:** `candy-hoover-test-data-production-efficiency-tracking` | **ID:** `12` | **Sıra (Order):** `34` | **Yıl:** `2018`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `candy-hoover-test-data-production-efficiency-tracking`
- **Sıralama (order):** `34`
- **Yıl (year / referenceDate):** `2018`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `RFID, Barcode, ERP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/Candy.svg`
  - **Ana Görsel (image):** `/images/companies/Candy/1706974.jpg`
  - **Hero Görseli (heroImage):** `/images/companies/Candy/1706974.jpg`
  - **Galeri Görselleri (gallery):**
  - /images/companies/Candy/eskisehirdeki-dev-yatirim-507_2.jpg
  - /images/companies/Candy/sisecam-mersin-1.webp

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Candy Hoover - Test İstasyonları İzlenebilirlik
- **Sektör (sector / tagValue):** Beyaz Eşya
- **Konum (locationValue):** Eskişehir
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Fabrika içi ürün izlenebilirliği ve barkod tabanlı test sonuçları, görsel muayeneler ve yeniden işleme süreçleriyle birlikte kaydedildi. Üretim, duruş ve hurda verileri toplandı; üretim verimliliğinin gerçek zamanlı izlenmesi ve sahadaki Andon TV üniteleri aracılığıyla anlık OEE yüzdelerinin gösterilmesi sağlandı.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Test Verisini Otomatikleştir
- **heroTitleLine2:** Ürün Bazında Güvenilir Takip
- **heroSub:** Üretim hattındaki test verileri otomatik toplanıp seri numarasıyla eşleştirilerek manuel hatalar azaltılmış ve sürdürülebilir izlenebilirlik altyapısı kurulmuştur.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Test verilerinin dijital ve izlenebilir yönetimi
- **contextP1:** Beyaz eşya sektöründe faaliyet gösteren Candy Hoover'ın Eskişehir'deki pişirici cihazlar fabrikasında hayata geçirilen projede, üretim hattındaki test verilerinin otomatik olarak toplanması ve ürünle eşleştirilmesi sağlanmıştır.
- **contextP2:** Proje, test verilerinin dijital ve izlenebilir biçimde yönetilmesini amaçlamıştır.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Manuel kayıt, hata riski ve izleme zorluğu
- **problemLede:** Elektrik ve gaz kaçak test verileri manuel olarak Excel'e işleniyordu. Bu yöntem hem zaman kaybına ve veri giriş hatalarına açıktı hem de test sonuçlarının ürün bazında güvenilir biçimde izlenmesini zorlaştırıyordu.
- **problemList:**
  - **bold:** "Manuel Excel Girişi" | **text:** "Test verilerinin manuel işlenmesi operasyonel yük oluşturuyor ve süreci yavaşlatıyordu."
  - **bold:** "Veri Giriş Hataları" | **text:** "Elle giriş yapılan verilerde hata olasılığı kalite ve güvenilirlik riskini artırıyordu."
  - **bold:** "Ürün Bazında İzleme Eksikliği" | **text:** "Test sonuçlarının ürün bazında güvenilir biçimde izlenmesi zorlaşıyordu."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Test cihazlarından otomatik veri toplama ve seri no eşleştirme
- **solutionLede:** Test cihazlarıyla entegrasyon sağlanarak elektrik ve gaz kaçak test verileri otomatik olarak toplandı. Ürün istasyona geldiğinde seri numarası okunarak sonuçlar doğru ürünle eşleştirildi.
- **steps:**
  - **no:** "01" | **title:** "İstasyona Ürün Gelişi" | **text:** "Ürün test istasyonuna geldiğinde barkod okuyucu ile seri numarası okunur."
  - **no:** "02" | **title:** "Cihaz Verisi Toplama" | **text:** "Elektrik ve gaz kaçak test cihazlarından sonuçlar otomatik olarak alınır."
  - **no:** "03" | **title:** "Seri Numarası Eşleştirme" | **text:** "Toplanan test verileri okunan ürün seri numarasıyla eşleştirilir."
  - **no:** "04" | **title:** "Merkezi Kayıt ve İzleme" | **text:** "Veriler OnSuite Trace üzerinde kayıt altına alınarak izlenebilir ve raporlanabilir hale getirilir."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** Test cihazları, barkod okuyucu, PLC ve OnSuite Trace
- **techGrid:**
  - **tag:** "TEST" | **title:** "Elektrik ve Gaz Kaçak Test Cihazları" | **text:** "Elektriksel ve gaz kaçak test sonuçlarını otomatik üreten saha test altyapısı."
  - **tag:** "TANIMLAMA" | **title:** "Barkod Okuyucular" | **text:** "Ürün istasyona geldiğinde seri numarasını okuyarak veri eşleştirmeyi başlatır."
  - **tag:** "OTOMASYON" | **title:** "PLC Entegrasyonu" | **text:** "Saha akışını yönetir ve test cihazları ile uygulama arasındaki veri akışını koordine eder."
  - **tag:** "YÖNETİM" | **title:** "OnSuite Trace" | **text:** "İzlenebilirlik ve süreç yönetiminin merkezi platformda yürütülmesini sağlar."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** Test istasyonları, Global MES ve izlenebilirlik platformu entegrasyonu
- **integrationDesc:** Sistem Candy Hoover'ın Global MES Sistemi ile entegre çalışmaktadır. Test cihazlarından alınan veriler seri numarasıyla eşleştirilerek OnSuite Trace üzerinde merkezi olarak yönetilir.
- **integrationList:**
  - **bold:** "Test Cihazı - Ürün Eşleşmesi" | **text:** "Cihaz sonuçları okunan seri numarasıyla eşleştirilerek doğru ürün kaydına yazılır."
  - **bold:** "Global MES Entegrasyonu" | **text:** "Toplanan veriler Candy Hoover'ın Global MES Sistemi ile entegre edilerek merkezi görünürlük sağlanır."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Otomatik veri toplama ve güvenilir ürün bazlı test izlenebilirliği
- **resultsGrid:**
  - **title:** "Manuel Sürecin Kaldırılması" | **text:** "Test verilerinin manuel Excel'e işlenmesi ortadan kaldırılarak veri toplama otomatik hale getirilmiştir."
  - **title:** "Hata ve Zaman Kaybının Azalması" | **text:** "Veri giriş hataları ve manuel süreçlerden kaynaklı zaman kaybı önlenmiştir."
  - **title:** "İzlenebilirlik ve Raporlama" | **text:** "Test sonuçları ürün seri numarasıyla otomatik eşleştirilmiş; izlenebilirlik ve raporlama güçlendirilmiştir."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Test istasyonlarınızı tam izlenebilir ve veri odaklı hale getirmek ister misiniz?
- **ctaSubtitle:** Test verilerinin otomatik toplanması, ürünle doğru eşleştirilmesi ve MES entegrasyonu için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Candy Hoover Test Data Production Efficiency Tracking
- **Sector (sector / tagValue):** Home Appliances
- **Location (locationValue):** Eskisehir
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** In-factory product traceability and barcode-based test results, along with visual inspections and rework processes, were recorded. Production, downtime, and scrap data were collected, enabling real-time monitoring of production efficiency and instant display of OEE percentages via on-site Andon TV units.

##### Hero Section (EN)
- **heroTitleLine1:** Candy Hoover
- **heroTitleLine2:** Test Stations Traceability
- **heroSub:** At Candy Hoover's cooker appliance factory in Eskisehir, production-line test data was automatically captured and matched to each product.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Digital and traceable test data management
- **contextP1:** In this project implemented at Candy Hoover's cooker appliance factory in Eskisehir, test data generated on the production line was automatically collected and associated with each product.
- **contextP2:** The goal was to manage test data in a digital and traceable manner.

##### Problem / Challenge (EN)
- **problemEyebrow:** Need / Problem
- **problemTitle:** Manual logging and limited product-level traceability
- **problemLede:** Electrical and gas leakage test data was manually entered into Excel. This approach caused time loss and data entry errors, and made product-level traceability difficult.
- **problemList:**
  - **bold:** "Manual Excel Processing" | **text:** "Manual test data handling increased operational effort and slowed throughput."
  - **bold:** "Entry Error Risk" | **text:** "Manual input increased the chance of quality and reliability issues."
  - **bold:** "Limited Product Matching" | **text:** "Reliable product-to-result traceability was difficult without automatic matching."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Automatic test data capture with serial-number association
- **solutionLede:** By integrating test devices, electrical and gas leakage data was captured automatically. Product serial numbers were read at the station and test results were linked to the correct unit.
- **steps:**
  - **no:** "01" | **title:** "Product Arrival at Station" | **text:** "When a product reaches the station, its serial number is read via barcode scanner."
  - **no:** "02" | **title:** "Automatic Device Data Capture" | **text:** "Results are collected automatically from electrical and gas leakage test devices."
  - **no:** "03" | **title:** "Serial Number Association" | **text:** "Captured test outputs are linked to the scanned product serial number."
  - **no:** "04" | **title:** "Central Recording and Visibility" | **text:** "Data is stored in OnSuite Trace and made available for monitoring and reporting."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** Test devices, barcode scanners, PLC, and OnSuite Trace
- **techGrid:**
  - **tag:** "TEST" | **title:** "Electrical and Gas Leakage Test Devices" | **text:** "Shop-floor test equipment that automatically generates electrical and gas leakage results."
  - **tag:** "IDENTIFICATION" | **title:** "Barcode Scanners" | **text:** "Read product serial numbers at station entry to trigger accurate matching."
  - **tag:** "AUTOMATION" | **title:** "PLC Integration" | **text:** "Coordinates station workflow and data flow between devices and software."
  - **tag:** "MANAGEMENT" | **title:** "OnSuite Trace" | **text:** "Central platform for end-to-end traceability and process management."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** Integrated test-station, Global MES, and traceability flow
- **integrationDesc:** The system operates integrated with Candy Hoover's Global MES. Test data is matched with product serial numbers and centrally managed on OnSuite Trace.
- **integrationList:**
  - **bold:** "Device-to-Product Association" | **text:** "Test device outputs are linked to scanned serial numbers and stored in the correct product record."
  - **bold:** "Global MES Integration" | **text:** "Collected data is synchronized with Candy Hoover's Global MES for centralized visibility."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Automated data capture and reliable product-level test traceability
- **resultsGrid:**
  - **title:** "Manual Work Eliminated" | **text:** "Manual Excel processing was removed and test data collection became automated."
  - **title:** "Reduced Errors and Time Loss" | **text:** "Data entry errors and time loss caused by manual operations were significantly reduced."
  - **title:** "Improved Traceability and Reporting" | **text:** "Automatic serial-number matching improved product-level traceability and reporting reliability."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Want fully traceable, data-driven test stations?
- **ctaSubtitle:** Contact us for automatic test data capture, accurate product matching, and MES integration.
- **ctaPrimary:** Contact Us

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Candy Hoover - Colectarea datelor de testare si urmarirea eficientei productiei
- **Sector (sector / tagValue):** Electrocasnice
- **Locație (locationValue):** Eskisehir
- **Domeniu de Aplicare (scopeVal):** Software și integrare
- **An (year):** An
- **Descriere Scurtă (description):** Trasabilitatea produselor în cadrul fabricii și rezultatele testelor bazate pe coduri de bare, împreună cu inspecțiile vizuale și procesele de retușare, au fost înregistrate. Au fost colectate date privind producția, timpii de nefuncționare și rebuturile, permițând monitorizarea în timp real a eficienței producției și afișarea instantanee a procentelor OEE prin unități TV Andon instalate la fața locului.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Candy Hoover
- **heroTitleLine2:** Trasabilitatea Stațiilor de Test
- **heroSub:** În fabrica de aparate de gătit Candy Hoover din Eskisehir, datele de test de pe linia de producție au fost colectate automat și asociate fiecărui produs.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Gestionare digitală și trasabilă a datelor de test
- **contextP1:** În proiectul implementat în fabrica Candy Hoover din Eskisehir, datele de test generate pe linia de producție au fost colectate automat și asociate produsului.
- **contextP2:** Obiectivul a fost gestionarea datelor de test într-un mod digital și complet trasabil.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Necesitate / Problemă
- **problemTitle:** Înregistrare manuală și trasabilitate limitată
- **problemLede:** Datele testelor electrice și de scurgeri de gaz erau introduse manual în Excel. Aceasta producea pierderi de timp, erori de introducere și îngreuna trasabilitatea fiabilă la nivel de produs.
- **problemList:**
  - **bold:** "Procesare manuală în Excel" | **text:** "Introducerea manuală a datelor de test creștea sarcina operațională și încetinea fluxul."
  - **bold:** "Risc de erori" | **text:** "Introducerea manuală creștea probabilitatea erorilor de calitate și fiabilitate."
  - **bold:** "Corelare slabă pe produs" | **text:** "Fără asociere automată, urmărirea fiabilă produs-rezultat era dificilă."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Colectare automată și asociere cu seria produsului
- **solutionLede:** Prin integrarea echipamentelor de test, datele electrice și de scurgeri de gaz au fost colectate automat. Numărul de serie citit la stație a permis asocierea corectă a rezultatelor cu produsul.
- **steps:**
  - **no:** "01" | **title:** "Sosirea produsului la stație" | **text:** "La intrarea produsului în stația de test, numărul de serie este citit cu scannerul de coduri de bare."
  - **no:** "02" | **title:** "Colectare automată din echipamente" | **text:** "Rezultatele sunt preluate automat din echipamentele de test electric și de scurgeri de gaz."
  - **no:** "03" | **title:** "Asociere cu seria" | **text:** "Datele colectate sunt asociate cu numărul de serie citit al produsului."
  - **no:** "04" | **title:** "Înregistrare și monitorizare centrală" | **text:** "Datele sunt înregistrate în OnSuite Trace și devin disponibile pentru monitorizare și raportare."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipamente utilizate
- **techTitle:** Echipamente de test, scanere cod de bare, PLC și OnSuite Trace
- **techGrid:**
  - **tag:** "TEST" | **title:** "Echipamente test electric și scurgeri de gaz" | **text:** "Infrastructură de test din teren care generează automat rezultatele de test."
  - **tag:** "IDENTIFICARE" | **title:** "Scanere cod de bare" | **text:** "Citesc numărul de serie la intrarea în stație pentru asocierea corectă a datelor."
  - **tag:** "AUTOMATIZARE" | **title:** "Integrare PLC" | **text:** "Coordonează fluxul în teren și schimbul de date dintre echipamente și aplicație."
  - **tag:** "MANAGEMENT" | **title:** "OnSuite Trace" | **text:** "Platformă centrală pentru trasabilitate și managementul proceselor."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Flux integrat între stații, Global MES și platforma de trasabilitate
- **integrationDesc:** Sistemul funcționează integrat cu Global MES Candy Hoover. Datele de test sunt asociate cu seria produsului și gestionate central în OnSuite Trace.
- **integrationList:**
  - **bold:** "Asociere echipament-produs" | **text:** "Rezultatele echipamentelor sunt legate de seriile scanate și scrise în înregistrarea corectă a produsului."
  - **bold:** "Integrare Global MES" | **text:** "Datele colectate sunt sincronizate cu Global MES pentru vizibilitate centralizată."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Colectare automată și trasabilitate fiabilă pe produs
- **resultsGrid:**
  - **title:** "Eliminarea procesului manual" | **text:** "Introducerea manuală în Excel a fost eliminată, iar colectarea datelor de test a devenit automată."
  - **title:** "Reducerea erorilor și timpilor pierduți" | **text:** "Erorile de introducere și pierderile de timp cauzate de operații manuale au fost reduse semnificativ."
  - **title:** "Trasabilitate și raportare îmbunătățite" | **text:** "Asocierea automată cu seria produsului a crescut semnificativ trasabilitatea și calitatea raportării."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți stații de test complet trasabile și orientate pe date?
- **ctaSubtitle:** Contactați-ne pentru colectare automată de date de test, asociere corectă pe produs și integrare MES.
- **ctaPrimary:** Contactați-ne


---

### 35. Türk Tuborg - Otomatik Palet Etiketleme ve İzlenebilirlik
**Slug:** `turk-tuborg-automatic-pallet-labeling-traceability` | **ID:** `13` | **Sıra (Order):** `35` | **Yıl:** `2017`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `turk-tuborg-automatic-pallet-labeling-traceability`
- **Sıralama (order):** `35`
- **Yıl (year / referenceDate):** `2017`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `RFID, Barcode, ERP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/turk_tuborg.png`
  - **Ana Görsel (image):** `/images/companies/Tuborg/c13974-tuborg.jpg`
  - **Hero Görseli (heroImage):** `/images/companies/Tuborg/c13974-tuborg.jpg`
  - **Galeri Görselleri (gallery):**
  - /images/companies/Tuborg/c13974-tuborg.jpg
  - /images/companies/Tuborg/turk-tuborg-hakkinda_img_v3.webp

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Türk Tuborg - Otomatik Palet Etiketleme ve İzlenebilirlik
- **Sektör (sector / tagValue):** Gıda & İçecek
- **Konum (locationValue):** İzmir
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Türk Tuborg / Otomatik palet etiketleme ve izlenebilirlik.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Doğru Etiket
- **heroTitleLine2:** Doğru Sevkiyat Güvencesi
- **heroSub:** SAP iş emriyle tetiklenen otomatik palet etiketleme ve doğrulama akışı sayesinde hatalı etiket riski düşürülmüş, sevkiyat güvenliği güçlendirilmiştir.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Palet düzeyinde otomatik etiketleme ve izlenebilirlik
- **contextP1:** Türk Tuborg'un İzmir'deki fabrikası, alkollü içecek üretimi yapmaktadır. Bu fabrikada hayata geçirilen projede, hattan çıkan paletlerin etiketlenmesi otomatikleştirilerek palet düzeyinde izlenebilirlik sağlanmıştır.
- **contextP2:** Proje, etiketleme sürecini operatör bağımlılığından çıkarıp doğrulanabilir ve iş emriyle uyumlu bir yapıya dönüştürmeyi hedeflemiştir.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Manuel etiketleme kaynaklı hata ve sevkiyat riski
- **problemLede:** Palet etiketleri operatör kontrolünde manuel olarak basılıyordu. Bu yöntem operatöre bağımlıydı ve yanlış etiket basımı ile hatalı sevkiyat riskini artırıyordu.
- **problemList:**
  - **bold:** "Operatör Bağımlılığı" | **text:** "Etiketleme sürecinin manuel yürütülmesi standardizasyonu zorlaştırıyordu."
  - **bold:** "Yanlış Etiket Riski" | **text:** "Hatalı etiket basımı ürün-palete ait bilgilerin karışmasına neden olabiliyordu."
  - **bold:** "Sevkiyat Hatası Potansiyeli" | **text:** "İş emriyle uyumsuz etiketler, sevkiyat doğruluğunu olumsuz etkileyebiliyordu."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** SAP iş emrine bağlı otomatik ve doğrulamalı etiketleme
- **solutionLede:** Paletlerin otomatik etiketlenmesi için palet aplikatörü konumlandırıldı; etiketler paletin 3 yönüne otomatik basılırken, SAP'den gelen iş emrine göre etiket seçimi ve basım sonrası doğrulama devreye alındı.
- **steps:**
  - **no:** "01" | **title:** "İş Emri Seçimi" | **text:** "SAP'den sisteme gelen iş emrine göre basılacak palet etiketi belirlenir."
  - **no:** "02" | **title:** "3 Yönlü Otomatik Basım" | **text:** "Palet aplikatörü etiketi paletin üç yönüne otomatik olarak uygular."
  - **no:** "03" | **title:** "Basım Sonrası Doğrulama" | **text:** "Basım tamamlandıktan sonra etiket okunur ve doğruluğu teyit edilir."
  - **no:** "04" | **title:** "Kesintisiz Yedek Senaryo" | **text:** "Aplikatör arızasında manuel etiketleme opsiyonu devreye alınarak süreç kesintisiz sürdürülür."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** Palet aplikatörü, PLC, C# SCADA ve SAP entegrasyonu
- **techGrid:**
  - **tag:** "ETİKETLEME" | **title:** "Palet Aplikatörü" | **text:** "Paletin 3 yönüne otomatik etiket basımını gerçekleştiren saha ekipmanı."
  - **tag:** "OTOMASYON" | **title:** "PLC Yapısı" | **text:** "Saha akışını yönetir, etiketleme sıralarını ve ekipman durumlarını kontrol eder."
  - **tag:** "UYGULAMA" | **title:** "C# SCADA" | **text:** "İş emri seçimi, etiket basımı, doğrulama ve SAP veri alışverişini yönetir."
  - **tag:** "ENTEGRASYON" | **title:** "SAP" | **text:** "Basılacak etiket bilgisini iş emrine göre sağlar ve süreç sonuçlarını merkezi olarak toplar."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** SAP ile merkezi iş emri odaklı etiket yönetimi
- **integrationDesc:** Sistem SAP ile entegre çalışmaktadır; basılacak palet etiketi SAP'den seçilen iş emrine göre belirlenmekte, basım ve doğrulama sonuçları SAP ile paylaşılarak etiketleme süreci merkezi olarak yönetilmektedir.
- **integrationList:**
  - **bold:** "SAP İş Emri Entegrasyonu" | **text:** "Etiket içeriği ve basım akışı, SAP'den gelen iş emrine göre otomatik şekillenir."
  - **bold:** "Basım ve Doğrulama Geri Bildirimi" | **text:** "Basım sonrası okuma/doğrulama çıktıları SAP ile paylaşılır ve süreç izlenebilirliği güçlenir."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Doğru etiket, doğru sevkiyat, kesintisiz operasyon
- **resultsGrid:**
  - **title:** "Operatör Bağımlılığının Azalması" | **text:** "Palet etiketleme süreci otomatikleştirilerek operatör inisiyatifine bağımlılık ortadan kaldırılmıştır."
  - **title:** "Sevkiyat Doğruluğu" | **text:** "İş emrine göre otomatik basım ve doğrulama sayesinde yanlış etiket ve hatalı sevkiyat riski düşürülmüştür."
  - **title:** "Kesintisiz Süreç" | **text:** "Manuel etiketleme opsiyonu ile aplikatör arızalarında dahi etiketleme operasyonu kesintisiz sürdürülebilmiştir."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Palet etiketleme süreçlerinizi otomatik ve doğrulanabilir hale getirmek ister misiniz?
- **ctaSubtitle:** SAP iş emri entegrasyonu, otomatik etiketleme ve basım sonrası doğrulama için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Turk Tuborg Automatic Pallet Labeling Traceability
- **Sector (sector / tagValue):** Food & Beverage
- **Location (locationValue):** Izmir
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** Turk Tuborg / Automatic pallet labeling and traceability.

##### Hero Section (EN)
- **heroTitleLine1:** Turk Tuborg
- **heroTitleLine2:** Automatic Pallet Labeling and Traceability
- **heroSub:** At Turk Tuborg's Izmir plant, pallet labeling was automated and pallet-level traceability was established.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Automated pallet-level labeling and traceability
- **contextP1:** Turk Tuborg's Izmir factory produces alcoholic beverages. In this project, labeling of outgoing pallets was automated and pallet-level traceability was enabled.
- **contextP2:** The goal was to move labeling away from operator dependency into an automated, verifiable, and work-order-compliant process.

##### Problem / Challenge (EN)
- **problemEyebrow:** Need / Problem
- **problemTitle:** Manual labeling created error and shipment risks
- **problemLede:** Pallet labels were printed manually under operator control. This increased dependency on operators and introduced risks of incorrect labels and shipment errors.
- **problemList:**
  - **bold:** "Operator Dependency" | **text:** "Manual execution made the process less standardized and harder to control."
  - **bold:** "Incorrect Label Risk" | **text:** "Wrong labels could cause product-to-pallet information mismatch."
  - **bold:** "Shipment Accuracy Risk" | **text:** "Labels not aligned with work orders could negatively affect dispatch accuracy."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** SAP work-order-driven automated labeling with verification
- **solutionLede:** A pallet applicator was deployed for automatic labeling on three pallet sides. Label content is selected by SAP work order and verified after printing.
- **steps:**
  - **no:** "01" | **title:** "Work Order Selection" | **text:** "The pallet label to be printed is determined by the work order received from SAP."
  - **no:** "02" | **title:** "3-Side Automatic Print" | **text:** "The pallet applicator applies labels automatically on three sides of each pallet."
  - **no:** "03" | **title:** "Post-Print Verification" | **text:** "After printing, the label is scanned and validated for correctness."
  - **no:** "04" | **title:** "Fallback for Continuity" | **text:** "If applicator failure occurs, manual labeling can be activated to avoid downtime."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** Pallet applicator, PLC, C# SCADA, and SAP integration
- **techGrid:**
  - **tag:** "LABELING" | **title:** "Pallet Applicator" | **text:** "Shop-floor equipment that prints and applies labels automatically on three pallet sides."
  - **tag:** "AUTOMATION" | **title:** "PLC System" | **text:** "Manages field flow, equipment states, and labeling sequence control."
  - **tag:** "APPLICATION" | **title:** "C# SCADA" | **text:** "Controls work-order selection, print execution, verification, and SAP data exchange."
  - **tag:** "INTEGRATION" | **title:** "SAP" | **text:** "Provides work-order-based label data and receives central process outcomes."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** Centralized SAP work-order-based label governance
- **integrationDesc:** The system is integrated with SAP. The pallet label is selected according to SAP work order, and print/verification outcomes are shared back for centralized process control.
- **integrationList:**
  - **bold:** "SAP Work Order Integration" | **text:** "Label content and print flow are automatically driven by SAP work orders."
  - **bold:** "Print and Verification Feedback" | **text:** "Post-print scan and validation results are sent to SAP, strengthening traceability."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Right label, accurate shipment, continuous operation
- **resultsGrid:**
  - **title:** "Reduced Operator Dependency" | **text:** "Automated pallet labeling removed operational dependency on manual operator initiative."
  - **title:** "Higher Shipment Accuracy" | **text:** "Work-order-based automatic printing and verification reduced wrong-label and shipment errors."
  - **title:** "Operational Continuity" | **text:** "Manual labeling fallback keeps the process running even during applicator failures."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Want to automate and verify your pallet labeling process?
- **ctaSubtitle:** Contact us for SAP work-order integration, automated labeling, and post-print verification.
- **ctaPrimary:** Contact Us

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Turk Tuborg - Etichetare si trasabilitate automata a paletilor
- **Sector (sector / tagValue):** Alimente & Băuturi
- **Locație (locationValue):** Izmir
- **Domeniu de Aplicare (scopeVal):** Software și integrare
- **An (year):** An
- **Descriere Scurtă (description):** Turk Tuborg / Etichetare și trasabilitate automată a paleților.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Turk Tuborg
- **heroTitleLine2:** Etichetare automată a paleților și trasabilitate
- **heroSub:** În fabrica Turk Tuborg din Izmir, etichetarea paleților ieșiți de pe linie a fost automatizată, asigurând trasabilitate la nivel de palet.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Etichetare automată și trasabilitate la nivel de palet
- **contextP1:** Fabrica Turk Tuborg din Izmir produce băuturi alcoolice. În acest proiect, etichetarea paleților ieșiți de pe linie a fost automatizată, oferind trasabilitate la nivel de palet.
- **contextP2:** Obiectivul a fost transformarea procesului într-un flux automat, verificabil și aliniat cu ordinul de lucru.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Necesitate / Problemă
- **problemTitle:** Etichetarea manuală genera riscuri de eroare și livrare
- **problemLede:** Etichetele paleților erau tipărite manual de operatori. Această abordare creștea dependența de operator și riscul de etichete greșite sau livrări eronate.
- **problemList:**
  - **bold:** "Dependență de operator" | **text:** "Execuția manuală făcea procesul mai greu de standardizat și controlat."
  - **bold:** "Risc de etichetă greșită" | **text:** "Etichetele incorecte puteau provoca nepotriviri între produs și palet."
  - **bold:** "Risc pentru acuratețea livrării" | **text:** "Etichetele nealiniate cu ordinul de lucru puteau afecta corectitudinea expedierii."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Etichetare automată validată, bazată pe ordin SAP
- **solutionLede:** A fost instalat un aplicator de paleți pentru tipărire automată pe 3 laturi. Eticheta este selectată conform ordinului SAP, iar după tipărire este verificată prin scanare.
- **steps:**
  - **no:** "01" | **title:** "Selectarea ordinului de lucru" | **text:** "Eticheta ce urmează a fi tipărită este determinată pe baza ordinului de lucru primit din SAP."
  - **no:** "02" | **title:** "Tipărire automată pe 3 laturi" | **text:** "Aplicatorul etichetează automat paletul pe trei direcții."
  - **no:** "03" | **title:** "Verificare post-tipărire" | **text:** "După tipărire, eticheta este citită și validată pentru corectitudine."
  - **no:** "04" | **title:** "Scenariu de continuitate" | **text:** "În caz de defect al aplicatorului, etichetarea manuală poate fi activată pentru continuitate operațională."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipamente utilizate
- **techTitle:** Aplicator paleți, PLC, SCADA C# și integrare SAP
- **techGrid:**
  - **tag:** "ETICHETARE" | **title:** "Aplicator de paleți" | **text:** "Echipament din teren care tipărește și aplică automat etichete pe 3 laturi."
  - **tag:** "AUTOMATIZARE" | **title:** "Structură PLC" | **text:** "Gestionează fluxul în teren, stările echipamentelor și secvențele de etichetare."
  - **tag:** "APLICAȚIE" | **title:** "SCADA C#" | **text:** "Coordonează selecția ordinului, tipărirea, verificarea și schimbul de date cu SAP."
  - **tag:** "INTEGRARE" | **title:** "SAP" | **text:** "Furnizează datele de etichetă pe baza ordinului de lucru și primește rezultatele procesului."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Management centralizat al etichetelor prin SAP
- **integrationDesc:** Sistemul este integrat cu SAP; eticheta paletului este determinată conform ordinului de lucru selectat, iar rezultatele de tipărire și validare sunt transmise centralizat.
- **integrationList:**
  - **bold:** "Integrare cu ordinul SAP" | **text:** "Conținutul etichetei și fluxul de tipărire sunt guvernate automat de ordinul SAP."
  - **bold:** "Feedback tipărire-validare" | **text:** "Rezultatele de scanare și validare post-tipărire sunt partajate în SAP pentru trasabilitate completă."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Etichetă corectă, expediere corectă, operațiuni continue
- **resultsGrid:**
  - **title:** "Reducerea dependenței de operator" | **text:** "Automatizarea etichetării paleților a eliminat dependența de inițiativa manuală a operatorului."
  - **title:** "Acuratețe ridicată a expedierii" | **text:** "Tipărirea automată pe bază de ordin și verificarea post-tipărire au redus riscul de etichete și livrări eronate."
  - **title:** "Continuitate operațională" | **text:** "Opțiunea de etichetare manuală permite continuarea procesului chiar și la defectarea aplicatorului."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți etichetare de paleți automată și verificabilă?
- **ctaSubtitle:** Contactați-ne pentru integrare SAP pe ordin de lucru, etichetare automată și verificare post-tipărire.
- **ctaPrimary:** Contactați-ne


---

### 36. PMI - Filtre Takip RFID Projesi
**Slug:** `philsa-filter-tracking` | **ID:** `44` | **Sıra (Order):** `36` | **Yıl:** `2017`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `philsa-filter-tracking`
- **Sıralama (order):** `36`
- **Yıl (year / referenceDate):** `2017`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `RFID, Process Monitoring, SCADA`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/philip-morris-international-pmi-seeklogo.png`
  - **Ana Görsel (image):** `/images/companies/PhilipMorris/pmtm.jpg`
  - **Hero Görseli (heroImage):** `/images/companies/PhilipMorris/pmtm.jpg`
  - **Galeri Görselleri (gallery):**
  - /images/companies/PhilipMorris/MORIS.jpg
  - /images/companies/PhilipMorris/1-1-1-uai-1598x799.jpg
  - /images/companies/PhilipMorris/ege-bolgesi-philip-morris-sabancinin-ihracat-ussu-oluyor-81699-8122015134810.jpg

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** PMI - Filtre Takip RFID Projesi
- **Sektör (sector / tagValue):** Tütün
- **Konum (locationValue):** İzmir Torbalı
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** PMI'ın sigara üretimi yapan İzmir Torbalı fabrikasında hayata geçirilen projede, filtre fabrikasında üretilen filtrelerin sigara üretim makinelerine beslenmesi aşamasında izlenebilirlik ve doğru malzeme kullanımı hedeflenmiştir.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Doğru Filtre
- **heroTitleLine2:** Doğru Üretim Güvencesi
- **heroSub:** PMI'ın sigara üretimi yapan İzmir Torbalı fabrikasında hayata geçirilen projede, filtre fabrikasında üretilen filtrelerin sigara üretim makinelerine beslenmesi aşamasında izlenebilirlik ve doğru malzeme kullanımı hedeflenmiştir.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Filtreden üretime güvenli eşleştirme
- **contextP1:** PMI'ın sigara üretimi yapan İzmir Torbalı fabrikasında hayata geçirilen projede, filtre fabrikasında üretilen filtrelerin sigara üretim makinelerine beslenmesi aşamasında izlenebilirlik ve doğru malzeme kullanımı hedeflenmiştir.
- **contextP2:** Proje, filtre üretiminden sigara üretimine kadar olan akışta filtre-iş emri eşleşmesini güvence altına almak amacıyla gerçekleştirilmiştir.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Manuel kontrolde hata ve kalite riski
- **problemLede:** Sigara üretiminde makineye beslenen filtrenin, ilgili iş emrine ve ürün reçetesine (BOM) uygun olması gerekiyordu. Manuel kontrol yaklaşımı kalite risklerini artırıyordu.
- **problemList:**
  - **bold:** "SKU Uygunluğu" | **text:** "Beslenen filtrenin doğru SKU'ya sahip olup olmadığının manuel kontrolü hata riski taşıyordu."
  - **bold:** "SKT Doğrulaması" | **text:** "Filtrenin son kullanma tarihi (SKT) uygunluğunu manuel doğrulamak güvenilir ve sürdürülebilir değildi."
  - **bold:** "Başlatma Güvencesi" | **text:** "Eşleşme doğrulanmadan üretimin başlamasını engelleyecek sistematik bir yapıya ihtiyaç vardı."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** RFID + SAP + PLC ile otomatik eşleşme kontrolü
- **solutionLede:** Filtreler filtre fabrikasında makineden çıkarken üretim tarihi, SKT, adet ve SKU bilgileriyle etiketlendi. Sigara üretim makinesine besleme sırasında SAP'den iş emri ve BOM verileri alınarak filtre malzeme kodu ile otomatik eşleşme doğrulaması yapıldı.
- **steps:**
  - **no:** "01" | **title:** "Filtre Etiketleme" | **text:** "Filtre üzerine üretim tarihi, son kullanma tarihi (SKT), adet ve SKU bilgileri yazılır."
  - **no:** "02" | **title:** "İş Emri Okuma" | **text:** "Makine besleme anında SAP'den iş emri ve ürün reçetesi (BOM) bilgileri okunur."
  - **no:** "03" | **title:** "SKU ve SKT Eşleşmesi" | **text:** "RFID ile okunan filtre bilgisi, SAP'den gelen malzeme kodu ve SKT koşullarıyla karşılaştırılır."
  - **no:** "04" | **title:** "Makine Çalışma İzni" | **text:** "Doğru SKU ve uygun SKT sağlandığında PLC üzerinden makineye çalışma izni verilir; aksi durumda üretim engellenir."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** Saha doğrulama ve makine kontrol altyapısı
- **techGrid:**
  - **tag:** "OKUMA" | **title:** "RFID Okuyucular" | **text:** "Filtre makineye beslendiğinde etiket üzerindeki kritik bilgileri anlık olarak okur."
  - **tag:** "OTOMASYON" | **title:** "PLC Yapısı" | **text:** "Saha otomasyonunu ve makine çalışma izni kararını yöneten kontrol katmanıdır."
  - **tag:** "SAHA" | **title:** "El Terminali" | **text:** "Saha süreçlerinde doğrulama ve operasyonel veri işlemleri için kullanılır."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** SAP ile uçtan uca iş emri doğrulaması
- **integrationDesc:** Sistem SAP ile entegre çalışmaktadır; iş emri, ürün reçetesi (BOM) ve filtre malzeme kodu SAP üzerinden alınarak filtre etiket bilgisiyle eşleştirilmekte, eşleştirme ve makine çalışma izni sonuçları SAP ile ilişkilendirilmektedir.
- **integrationList:**
  - **bold:** "SAP İş Emri ve BOM" | **text:** "Filtre malzeme kodu, iş emri ve reçete bilgileri SAP'den çekilerek RFID okuma verisiyle otomatik eşleştirilir."
  - **bold:** "Makine Kontrolü" | **text:** "Eşleşme sonucu PLC katmanına iletilir ve çalışma izni kararı gerçek zamanlı uygulanır."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Kaliteyi güvence altına alan otomatik doğrulama
- **resultsGrid:**
  - **title:** "Yanlış SKU Önleme" | **text:** "Filtre-iş emri eşleşmesi otomatik doğrulandığı için yanlış filtre kullanımı engellendi."
  - **title:** "SKT Uygunluğu" | **text:** "Süresi uygun olmayan filtrelerin üretime girmesi sistem tarafından bloklandı."
  - **title:** "Operatörden Bağımsız Kontrol" | **text:** "Eşleşme doğrulanmadan makinenin çalışmasına izin verilmemesi kalite güvencesini artırdı."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Filtre ve malzeme doğrulama süreçlerinizi dijitalleştirmek ister misiniz?
- **ctaSubtitle:** RFID tabanlı izlenebilirlik ve iş emri doğrulama çözümlerimizi fabrikanıza uyarlayalım.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Philsa Filter Tracking
- **Sector (sector / tagValue):** Tobacco
- **Location (locationValue):** Izmir Torbali
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** In the project implemented at PMI's cigarette manufacturing plant in Izmir Torbali, traceability and correct material usage were targeted at the stage where filters produced in the filter plant are fed into cigarette production machines.

##### Hero Section (EN)
- **heroTitleLine1:** Right Filter,
- **heroTitleLine2:** Reliable Production Assurance
- **heroSub:** In the project implemented at PMI's cigarette manufacturing plant in Izmir Torbali, traceability and correct material usage were targeted at the stage where filters produced in the filter plant are fed into cigarette production machines.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Secure matching from filter to production
- **contextP1:** In the project implemented at PMI's cigarette manufacturing plant in Izmir Torbali, traceability and correct material usage were targeted at the stage where filters produced in the filter plant are fed into cigarette production machines.
- **contextP2:** The project was carried out to secure filter-work-order matching throughout the flow from filter production to cigarette production.

##### Problem / Challenge (EN)
- **problemEyebrow:** Needs / Problems
- **problemTitle:** Error and quality risk in manual checks
- **problemLede:** In cigarette production, the filter fed into the machine had to be compliant with the related work order and product recipe (BOM). Manual verification increased quality risks.
- **problemList:**
  - **bold:** "SKU Compliance" | **text:** "Manual checking of whether the fed filter had the correct SKU carried error risk."
  - **bold:** "Expiry Validation" | **text:** "Manual verification of filter expiry date suitability was not reliable or sustainable."
  - **bold:** "Start-up Assurance" | **text:** "A systematic structure was needed to prevent production from starting before matching was confirmed."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Automatic matching control with RFID + SAP + PLC
- **solutionLede:** Filters were labeled at the filter plant output with production date, expiry date, quantity, and SKU data. During feeding to the cigarette production machine, SAP work order and BOM data were read and automatically matched with filter material code.
- **steps:**
  - **no:** "01" | **title:** "Filter Labeling" | **text:** "Production date, expiry date, quantity, and SKU information are written on each filter."
  - **no:** "02" | **title:** "Work Order Reading" | **text:** "At machine feeding, SAP work order and BOM data are read."
  - **no:** "03" | **title:** "SKU and Expiry Matching" | **text:** "RFID-read filter data is compared with SAP material code and expiry criteria."
  - **no:** "04" | **title:** "Machine Run Permission" | **text:** "If SKU and expiry criteria are met, the PLC grants run permission; otherwise production is blocked."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** Field verification and machine control infrastructure
- **techGrid:**
  - **tag:** "READING" | **title:** "RFID Readers" | **text:** "Read critical tag information instantly when the filter is fed to the machine."
  - **tag:** "AUTOMATION" | **title:** "PLC Structure" | **text:** "Control layer managing field automation and machine run-permission decisions."
  - **tag:** "FIELD" | **title:** "Handheld Terminal" | **text:** "Used for field verification and operational data handling tasks."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** End-to-end SAP work-order validation
- **integrationDesc:** The system works integrated with SAP; work order, BOM, and filter material code are received from SAP and matched with filter tag data, while matching and machine-permission outcomes are associated back with SAP.
- **integrationList:**
  - **bold:** "SAP Work Order and BOM" | **text:** "Filter material code, work order, and BOM data are retrieved from SAP and automatically matched with RFID reads."
  - **bold:** "Machine Control" | **text:** "Matching outcomes are sent to the PLC layer and run-permission decisions are applied in real time."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Automated validation that strengthens quality assurance
- **resultsGrid:**
  - **title:** "Wrong SKU Prevention" | **text:** "Automatic filter-work-order matching prevented incorrect filter usage."
  - **title:** "Expiry Compliance" | **text:** "Filters with unsuitable expiry status were blocked by the system."
  - **title:** "Operator-Independent Control" | **text:** "Preventing machine run before matching improved quality assurance."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Would you like to digitize filter and material validation processes?
- **ctaSubtitle:** Let us adapt RFID-based traceability and work-order validation solutions to your factory.
- **ctaPrimary:** Contact Us

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** PMI - Proiect RFID de urmarire a filtrelor
- **Sector (sector / tagValue):** Tutun
- **Locație (locationValue):** Izmir Torbali
- **Domeniu de Aplicare (scopeVal):** Software și Integrare
- **An (year):** An
- **Descriere Scurtă (description):** În proiectul implementat la fabrica PMI de producție țigarete din Izmir Torbali, s-a urmărit trasabilitatea și utilizarea corectă a materialului în etapa de alimentare a mașinilor de producție cu filtrele produse în fabrica de filtre.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Filtrul Corect,
- **heroTitleLine2:** Garanția Producției Corecte
- **heroSub:** În proiectul implementat la fabrica PMI de producție țigarete din Izmir Torbali, s-a urmărit trasabilitatea și utilizarea corectă a materialului în etapa de alimentare a mașinilor de producție cu filtrele produse în fabrica de filtre.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Potrivire sigură de la filtru la producție
- **contextP1:** În proiectul implementat la fabrica PMI de producție țigarete din Izmir Torbali, s-a urmărit trasabilitatea și utilizarea corectă a materialului în etapa de alimentare a mașinilor de producție cu filtrele produse în fabrica de filtre.
- **contextP2:** Proiectul a fost realizat pentru a asigura potrivirea filtru-ordin de lucru pe întregul flux de la fabricația filtrului până la producția de țigarete.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoie / Problemă
- **problemTitle:** Risc de erori și calitate în controlul manual
- **problemLede:** În producția de țigarete, filtrul alimentat în mașină trebuia să fie conform ordinului de lucru și rețetei produsului (BOM). Verificarea manuală creștea riscurile de calitate.
- **problemList:**
  - **bold:** "Conformitate SKU" | **text:** "Controlul manual al SKU-ului corect pentru filtrul alimentat avea risc ridicat de eroare."
  - **bold:** "Validare Expirare" | **text:** "Validarea manuală a conformității datei de expirare nu era fiabilă și sustenabilă."
  - **bold:** "Siguranță la Pornire" | **text:** "Era necesară o structură sistematică ce împiedică pornirea producției înainte de confirmarea potrivirii."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Control automat al potrivirii cu RFID + SAP + PLC
- **solutionLede:** Filtrele au fost etichetate la ieșirea din fabrica de filtre cu data producției, data expirării, cantitate și SKU. La alimentarea mașinii de producție, datele din SAP (ordin de lucru și BOM) au fost citite și comparate automat cu codul materialului filtrului.
- **steps:**
  - **no:** "01" | **title:** "Etichetare Filtru" | **text:** "Pe filtru se scriu data producției, data expirării, cantitatea și SKU-ul."
  - **no:** "02" | **title:** "Citire Ordin de Lucru" | **text:** "La alimentarea mașinii sunt citite din SAP ordinul de lucru și datele BOM."
  - **no:** "03" | **title:** "Potrivire SKU și Expirare" | **text:** "Datele citite RFID sunt comparate cu codul materialului din SAP și criteriile de expirare."
  - **no:** "04" | **title:** "Permisiune de Funcționare" | **text:** "Dacă SKU și expirarea sunt conforme, PLC permite funcționarea; în caz contrar producția este blocată."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipament Utilizat
- **techTitle:** Infrastructură de validare în teren și control mașină
- **techGrid:**
  - **tag:** "CITIRE" | **title:** "Cititoare RFID" | **text:** "Citesc instant datele critice de pe etichetă când filtrul este alimentat în mașină."
  - **tag:** "AUTOMATIZARE" | **title:** "Structură PLC" | **text:** "Stratul de control care gestionează automatizarea de teren și decizia de pornire a mașinii."
  - **tag:** "TEREN" | **title:** "Terminal Mobil" | **text:** "Utilizat pentru verificări în teren și operațiuni de procesare date."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Validare SAP end-to-end a ordinului de lucru
- **integrationDesc:** Sistemul funcționează integrat cu SAP; ordinul de lucru, BOM-ul și codul materialului filtrului sunt preluate din SAP și corelate cu datele de etichetă, iar rezultatele de potrivire și permisiune sunt asociate în SAP.
- **integrationList:**
  - **bold:** "Ordin de Lucru SAP și BOM" | **text:** "Codul materialului filtrului, ordinul de lucru și BOM-ul sunt preluate din SAP și corelate automat cu citirea RFID."
  - **bold:** "Control Mașină" | **text:** "Rezultatul potrivirii este transmis către PLC, iar decizia de funcționare se aplică în timp real."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Validare automată pentru consolidarea calității
- **resultsGrid:**
  - **title:** "Prevenirea SKU Greșit" | **text:** "Potrivirea automată filtru-ordin de lucru a prevenit utilizarea filtrului greșit."
  - **title:** "Conformitate la Expirare" | **text:** "Filtrele neconforme din perspectiva expirării au fost blocate de sistem."
  - **title:** "Control Independent de Operator" | **text:** "Blocarea funcționării înainte de confirmare a crescut siguranța calității."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să digitalizați procesele de validare filtru și material?
- **ctaSubtitle:** Adaptăm soluțiile noastre de trasabilitate RFID și validare a ordinelor de lucru pentru fabrica dumneavoastră.
- **ctaPrimary:** Contactați-ne


---

### 37. Mey Alkollü İçkiler - Bandrol Kamera Kontrol Sistemi
**Slug:** `mey-icki-bandrol-control-system` | **ID:** `45` | **Sıra (Order):** `37` | **Yıl:** `2017`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `mey-icki-bandrol-control-system`
- **Sıralama (order):** `37`
- **Yıl (year / referenceDate):** `2017`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `Vision Systems, Barcode, Line Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/mey-diageo.svg`
  - **Ana Görsel (image):** `/images/companies/MeyDiego/original-1711372140-d0487a0a-bd81-48cb-aa7b-78ff087fad3d.webp`
  - **Hero Görseli (heroImage):** `/images/companies/MeyDiego/original-1711372140-d0487a0a-bd81-48cb-aa7b-78ff087fad3d.webp`
  - **Galeri Görselleri (gallery):**
  - /images/companies/MeyDiego/original-1711372140-d0487a0a-bd81-48cb-aa7b-78ff087fad3d.webp

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Mey Alkollü İçkiler - Bandrol Kamera Kontrol Sistemi
- **Sektör (sector / tagValue):** Gıda & İçecek
- **Konum (locationValue):** Türkiye
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Kamera tabanlı otomatik kontrol ve reject ayrımı ile bandrolü eksik kolilerin sevkiyata karışması engellenmiş, süreç güvenliği merkezi olarak güvence altına alınmıştır.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Yasal Uyum İçin
- **heroTitleLine2:** Akıllı Bandrol Güvencesi
- **heroSub:** Kamera tabanlı otomatik kontrol ve reject ayrımı ile bandrolü eksik kolilerin sevkiyata karışması engellenmiş, süreç güvenliği merkezi olarak güvence altına alınmıştır.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Yasal bandrol kontrolünde merkezi güvence
- **contextP1:** Mey Diageo'nun tüm fabrikalarında sevkiyata hazırlanan kolilerde bandrol kontrolü kamera tabanlı bir sistemle otomatikleştirilmiştir.
- **contextP2:** Proje, yasal olarak zorunlu olan bandrolün her kolide eksiksiz bulunduğunu güvence altına almak amacıyla gerçekleştirilmiştir.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Eksik bandrollü kolilerin sevkiyata karışma riski
- **problemLede:** Kolilerdeki bandrolün var olup olmadığının güvenilir biçimde kontrol edilmesi ve bandrolü eksik kolilerin sevkiyata karışmaması gerekiyordu.
- **problemList:**
  - **bold:** "Manuel Kontrol Riski" | **text:** "Bandrol kontrolünün manuel yapılması hata olasılığını artırıyordu."
  - **bold:** "Yasal Uyum Zorunluluğu" | **text:** "Eksik bandrollü bir kolinin sevk edilmesi yasal risk oluşturuyordu."
  - **bold:** "Operasyonel Güvenlik İhtiyacı" | **text:** "Bandrol kontrolünün hat boyunca güvenilir ve tutarlı şekilde otomatik yürütülmesi gerekiyordu."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Kamera tabanlı otomatik bandrol kontrolü ve reject ayrımı
- **solutionLede:** İş emri izlenebilirlik sistemi üzerinden seçilerek ilgili job kameraya otomatik gönderildi; koli seri numarası okuma, bandrol var-yok kontrolü ve otomatik reject ayrımı tek akışta yönetildi.
- **steps:**
  - **no:** "01" | **title:** "İş Emri ve Kamera Job Eşleşmesi" | **text:** "Seçilen iş emrine göre ilgili kamera job dosyası sisteme otomatik aktarılır."
  - **no:** "02" | **title:** "Koli Seri No Okuma" | **text:** "Hat üzerinde ilerleyen koliler sisteme geldiğinde seri numarası barkod okuyucularla okunur."
  - **no:** "03" | **title:** "Bandrol Var-Yok Kontrolü" | **text:** "Kamera tabanlı ünite koli üzerindeki bandrolün varlığını otomatik denetler."
  - **no:** "04" | **title:** "Reject Hattına Otomatik Ayırma" | **text:** "Bandrolü eksik koliler PLC kararıyla reject hattına yönlendirilir; yalnızca uygun koliler sevkiyata devam eder."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** Barkod okuyucu, kamera kontrol ünitesi, reject mekanizması, PLC
- **techGrid:**
  - **tag:** "TANIMLAMA" | **title:** "Barkod Okuyucular" | **text:** "Koli seri numaralarını okuyarak kontrol ve kayıt akışını başlatır."
  - **tag:** "GÖRÜNTÜ" | **title:** "Kamera Tabanlı Kontrol Ünitesi" | **text:** "Bandrol varlığını otomatik denetler ve karar bilgisini sisteme iletir."
  - **tag:** "AYIRMA" | **title:** "Reject Mekanizması" | **text:** "Eksik bandrollü kolileri otomatik ayırarak sevkiyat akışından çıkarır."
  - **tag:** "OTOMASYON" | **title:** "PLC ve OnSuite Trace" | **text:** "Saha akışını yönetir; kontrol sonuçlarını izlenebilirlik sistemi üzerinde merkezi olarak takip eder."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** SAP ve izlenebilirlik sistemiyle merkezi süreç yönetimi
- **integrationDesc:** Sistem SAP ile entegre çalışır. İş emri izlenebilirlik sistemi üzerinden seçilir, ilgili kamera job otomatik gönderilir ve koli seri numarası ile bandrol kontrol sonuçları SAP ile ilişkilendirilir.
- **integrationList:**
  - **bold:** "İş Emri Bazlı Kamera Job Yönetimi" | **text:** "Seçilen iş emrine göre kamera kontrol parametreleri otomatik yüklenir."
  - **bold:** "SAP ile Sonuç Eşleştirme" | **text:** "Koli seri no ve bandrol kontrol sonuçları SAP tarafında merkezi olarak ilişkilendirilir ve raporlanır."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Yasal uyum, sevkiyat doğruluğu ve süreç güvenliği
- **resultsGrid:**
  - **title:** "Manuel Hata Riskinin Kaldırılması" | **text:** "Bandrol kontrolünün kamera tabanlı otomasyonu ile manuel kontrole bağlı hata riski ortadan kaldırılmıştır."
  - **title:** "Eksik Bandrollü Koli Önleme" | **text:** "Eksik bandrollü kolilerin reject hattına ayrılmasıyla sevkiyata karışmaları engellenmiştir."
  - **title:** "Merkezi ve Güvenli Akış" | **text:** "Seri no okuma ve otomatik ayrım sayesinde sevkiyat doğruluğu ile süreç güvenliği artırılmıştır."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Bandrol kontrolünüzü otomatik ve yasal uyumlu hale getirmek ister misiniz?
- **ctaSubtitle:** Kamera tabanlı kontrol, otomatik reject ayrımı ve SAP entegrasyonu için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Mey Icki Bandrol Control System
- **Sector (sector / tagValue):** Food & Beverage
- **Location (locationValue):** Turkey
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** Bandrol checks on shipment-ready cartons across Mey Diageo plants were automated with a camera-based system.

##### Hero Section (EN)
- **heroTitleLine1:** Mey Alcoholic Beverages
- **heroTitleLine2:** Bandrol Camera Control System
- **heroSub:** Bandrol checks on shipment-ready cartons across Mey Diageo plants were automated with a camera-based system.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Central assurance for legal bandrol compliance
- **contextP1:** Bandrol checks on shipment-ready cartons across Mey Diageo plants were automated with a camera-based system.
- **contextP2:** The project ensured that the legally required bandrol is present on every carton.

##### Problem / Challenge (EN)
- **problemEyebrow:** Need / Problem
- **problemTitle:** Risk of shipping cartons with missing bandrol
- **problemLede:** Bandrol presence had to be checked reliably and cartons with missing bandrol had to be prevented from entering shipment flow.
- **problemList:**
  - **bold:** "Manual Check Risk" | **text:** "Manual bandrol inspection increased the probability of human error."
  - **bold:** "Legal Compliance Pressure" | **text:** "Shipping a carton with missing bandrol created legal risk."
  - **bold:** "Operational Safety Need" | **text:** "Bandrol control had to run automatically and consistently across the line."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Camera-based automatic control with reject separation
- **solutionLede:** Work order selection automatically sends the relevant camera job; carton serial reading, bandrol presence check, and automatic reject routing are managed in one flow.
- **steps:**
  - **no:** "01" | **title:** "Work Order and Camera Job Matching" | **text:** "The camera job is loaded automatically according to the selected work order."
  - **no:** "02" | **title:** "Carton Serial Reading" | **text:** "Carton serial numbers are read by barcode scanners as cartons pass the station."
  - **no:** "03" | **title:** "Bandrol Presence Check" | **text:** "The camera unit performs automatic presence/absence inspection."
  - **no:** "04" | **title:** "Automatic Reject Routing" | **text:** "Cartons with missing bandrol are diverted to reject line; only compliant cartons continue."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** Barcode scanners, camera control unit, reject mechanism, PLC
- **techGrid:**
  - **tag:** "IDENTIFICATION" | **title:** "Barcode Scanners" | **text:** "Read carton serial numbers and trigger the control data flow."
  - **tag:** "VISION" | **title:** "Camera Control Unit" | **text:** "Automatically inspects bandrol presence and returns result signals."
  - **tag:** "SEPARATION" | **title:** "Reject Mechanism" | **text:** "Automatically removes cartons with missing bandrol from shipment stream."
  - **tag:** "AUTOMATION" | **title:** "PLC and OnSuite Trace" | **text:** "Manages field logic and central traceability of inspection outcomes."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** Central process control with SAP and traceability system
- **integrationDesc:** The system is integrated with SAP. Work order is selected in traceability system, camera job is loaded automatically, and serial + inspection results are linked centrally in SAP.
- **integrationList:**
  - **bold:** "Work-Order-Based Camera Job Control" | **text:** "Camera parameters are loaded automatically based on selected work order."
  - **bold:** "SAP Result Correlation" | **text:** "Carton serial numbers and bandrol inspection outcomes are centrally correlated and reported in SAP."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Legal compliance, shipment accuracy, process safety
- **resultsGrid:**
  - **title:** "Eliminated Manual Error Risk" | **text:** "Camera-based automation removed manual-inspection-related error risk."
  - **title:** "Prevented Missing-Bandrol Shipments" | **text:** "Automatic reject routing prevented non-compliant cartons from reaching shipment."
  - **title:** "Central and Secure Flow" | **text:** "Serial reading plus automatic separation improved shipment accuracy and operational safety."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Want to automate bandrol control with legal compliance?
- **ctaSubtitle:** Contact us for camera-based control, automatic reject routing, and SAP integration.
- **ctaPrimary:** Contact Us

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Mey Icki - Sistem de control al banderolei
- **Sector (sector / tagValue):** Alimente & Băuturi
- **Locație (locationValue):** Turcia
- **Domeniu de Aplicare (scopeVal):** Software și integrare
- **An (year):** An
- **Descriere Scurtă (description):** Controlul banderolei pe cutiile pregătite de livrare în toate fabricile Mey Diageo a fost automatizat printr-un sistem bazat pe cameră.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Mey Băuturi Alcoolice
- **heroTitleLine2:** Sistem de control camera pentru banderolă
- **heroSub:** Controlul banderolei pe cutiile pregătite de livrare în toate fabricile Mey Diageo a fost automatizat printr-un sistem bazat pe cameră.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Asigurare centrală pentru conformitate legală
- **contextP1:** Controlul banderolei pe cutiile pregătite de livrare în toate fabricile Mey Diageo a fost automatizat printr-un sistem bazat pe cameră.
- **contextP2:** Proiectul asigură prezența completă a banderolei obligatorii legal pe fiecare cutie.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Necesitate / Problemă
- **problemTitle:** Risc de expediere cu banderolă lipsă
- **problemLede:** Prezența banderolei trebuia controlată fiabil, iar cutiile cu banderolă lipsă nu trebuiau să intre în fluxul de livrare.
- **problemList:**
  - **bold:** "Risc al controlului manual" | **text:** "Controlul manual creștea probabilitatea erorii umane."
  - **bold:** "Presiune de conformitate legală" | **text:** "Expedierea unei cutii fără banderolă crea risc legal."
  - **bold:** "Necesitate de siguranță operațională" | **text:** "Controlul banderolei trebuia rulat automat și consecvent pe linie."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Control automat cu cameră și separare reject
- **solutionLede:** Selectarea ordinului de lucru trimite automat job-ul camerei; citirea seriei, controlul prezenței banderolei și separarea reject sunt gestionate într-un singur flux.
- **steps:**
  - **no:** "01" | **title:** "Potrivire ordin și job cameră" | **text:** "Job-ul camerei este încărcat automat conform ordinului selectat."
  - **no:** "02" | **title:** "Citire serie cutie" | **text:** "Seria cutiei este citită cu scanner cod de bare la trecerea prin stație."
  - **no:** "03" | **title:** "Control prezență banderolă" | **text:** "Unitatea bazată pe cameră verifică automat existența banderolei."
  - **no:** "04" | **title:** "Separare automată reject" | **text:** "Cutiile cu banderolă lipsă sunt deviate pe linia reject; doar cutiile conforme continuă."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipamente utilizate
- **techTitle:** Scanner cod bare, unitate cameră, mecanism reject, PLC
- **techGrid:**
  - **tag:** "IDENTIFICARE" | **title:** "Scanere cod bare" | **text:** "Citesc seria cutiei și pornesc fluxul de control și înregistrare."
  - **tag:** "VIZIUNE" | **title:** "Unitate control cameră" | **text:** "Verifică automat prezența banderolei și transmite rezultatul."
  - **tag:** "SEPARARE" | **title:** "Mecanism reject" | **text:** "Separă automat cutiile fără banderolă din fluxul de livrare."
  - **tag:** "AUTOMATIZARE" | **title:** "PLC și OnSuite Trace" | **text:** "Gestionează logica de teren și trasabilitatea centrală a rezultatelor."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Management centralizat prin SAP și trasabilitate
- **integrationDesc:** Sistemul este integrat cu SAP. Ordinul se selectează în sistemul de trasabilitate, job-ul camerei se încarcă automat, iar rezultatele sunt corelate central în SAP.
- **integrationList:**
  - **bold:** "Control job cameră pe ordin" | **text:** "Parametrii camerei se încarcă automat în funcție de ordinul selectat."
  - **bold:** "Corelare rezultate în SAP" | **text:** "Seria cutiei și rezultatele controlului sunt corelate și raportate central în SAP."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Conformitate legală, acuratețe livrare, siguranță proces
- **resultsGrid:**
  - **title:** "Eliminarea riscului de eroare manuală" | **text:** "Automatizarea pe bază de cameră a eliminat riscul de eroare specific controlului manual."
  - **title:** "Prevenirea expedierii neconforme" | **text:** "Separarea automată reject a împiedicat intrarea în livrare a cutiilor fără banderolă."
  - **title:** "Flux central și sigur" | **text:** "Citirea seriei și separarea automată au crescut acuratețea livrării și siguranța operațională."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți control automat al banderolei cu conformitate legală?
- **ctaSubtitle:** Contactați-ne pentru control pe bază de cameră, reject automat și integrare SAP.
- **ctaPrimary:** Contactați-ne


---

### 38. Candy Hoover - Ocak Hatları Test Veri Toplama ve İzlenebilirlik
**Slug:** `candy-hoover-test-data-cooker-lines-traceability` | **ID:** `15` | **Sıra (Order):** `38` | **Yıl:** `2017`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `candy-hoover-test-data-cooker-lines-traceability`
- **Sıralama (order):** `38`
- **Yıl (year / referenceDate):** `2017`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `RFID, Barcode, ERP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/Candy.svg`
  - **Ana Görsel (image):** `/images/companies/Candy/1706974.jpg`
  - **Hero Görseli (heroImage):** `/images/companies/Candy/1706974.jpg`
  - **Galeri Görselleri (gallery):**
  - /images/companies/Candy/eskisehirdeki-dev-yatirim-507_2.jpg
  - /images/companies/Candy/sisecam-mersin-1.webp

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Candy Hoover - Ocak Hatları Test Veri Toplama ve İzlenebilirlik
- **Sektör (sector / tagValue):** Beyaz Eşya
- **Konum (locationValue):** Eskişehir
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Test verilerinin otomatik toplanması, seri numarasıyla eşleştirilmesi ve ürünlerin tüm üretim akışında takip edilmesiyle ocak hatlarında kesintisiz izlenebilirlik sağlanmıştır.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Hat Başından Sevkiyata
- **heroTitleLine2:** Ocak Hatlarında Uçtan Uca İzlenebilirlik
- **heroSub:** Test verilerinin otomatik toplanması, seri numarasıyla eşleştirilmesi ve ürünlerin tüm üretim akışında takip edilmesiyle ocak hatlarında kesintisiz izlenebilirlik sağlanmıştır.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Ocak hatlarında uçtan uca izlenebilirlik
- **contextP1:** Beyaz eşya sektöründe faaliyet gösteren Candy Hoover'ın Eskişehir'deki pişirici cihazlar fabrikasında hayata geçirilen projede, ocak hatlarındaki test verilerinin otomatik olarak toplanması, ürünle eşleştirilmesi ve ocakların hat başından sevkiyata kadar izlenebilirliğinin sağlanması hedeflenmiştir.
- **contextP2:** Proje, test verilerinin dijital ve izlenebilir biçimde yönetilmesini amaçlamıştır.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Manuel test kaydı ve hat boyunca izleme gereksinimi
- **problemLede:** Elektrik ve gaz kaçak test verileri manuel olarak Excel'e işleniyordu. Bu yöntem hem zaman kaybına ve veri giriş hatalarına açıktı hem de test sonuçlarının ürün bazında güvenilir biçimde izlenmesini zorlaştırıyordu.
- **problemList:**
  - **bold:** "Manuel Excel Girişi" | **text:** "Test verilerinin manuel işlenmesi operasyonel yük oluşturuyor ve süreci yavaşlatıyordu."
  - **bold:** "Veri Giriş Hataları" | **text:** "Elle giriş yapılan verilerde hata olasılığı kalite ve güvenilirlik riskini artırıyordu."
  - **bold:** "Uçtan Uca İzleme İhtiyacı" | **text:** "Ocakların üretim hattı boyunca ürün bazında izlenmesi ve üretimin hat başından sevkiyata kadar takip edilmesi gerekiyordu."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Hat başından sevkiyata otomatik veri ve ürün eşleştirme
- **solutionLede:** Ürünler hat başında seri numarasıyla sisteme alınarak izlenebilirlik başlatıldı. Test cihazlarıyla entegrasyon sayesinde elektrik ve gaz kaçak verileri otomatik toplandı, sonuçlar ürün seri numarasıyla eşleştirildi ve ocaklar hat başından sevkiyata kadar izlendi.
- **steps:**
  - **no:** "01" | **title:** "Hat Başında Ürün Kaydı" | **text:** "Ürünler üretim hattı başlangıcında seri numarasıyla sisteme alınır ve izlenebilirlik akışı başlatılır."
  - **no:** "02" | **title:** "Cihaz Verisi Toplama" | **text:** "Elektrik ve gaz kaçak test cihazlarından sonuçlar otomatik olarak alınır."
  - **no:** "03" | **title:** "Seri Numarası Eşleştirme" | **text:** "Toplanan test verileri okunan ürün seri numarasıyla eşleştirilir."
  - **no:** "04" | **title:** "Uçtan Uca Takip" | **text:** "Ocaklar hat başından sevkiyata kadar izlenir; tüm süreç boyunca ürün bazında takip ve raporlama sağlanır."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** Test cihazları, barkod okuyucular, PLC ve OnSuite Trace
- **techGrid:**
  - **tag:** "TEST" | **title:** "Elektrik ve Gaz Kaçak Test Cihazları" | **text:** "Elektriksel ve gaz kaçak test sonuçlarını otomatik üreten saha test altyapısı."
  - **tag:** "TANIMLAMA" | **title:** "Barkod Okuyucular" | **text:** "Hat başında ve test istasyonlarında ürün seri numarası okunarak eşleştirme doğruluğu sağlanır."
  - **tag:** "OTOMASYON" | **title:** "PLC Entegrasyonu" | **text:** "Saha akışını yönetir ve test cihazları ile uygulama arasındaki veri akışını koordine eder."
  - **tag:** "YÖNETİM" | **title:** "OnSuite Trace" | **text:** "İzlenebilirlik ve süreç yönetiminin merkezi platformda yürütülmesini sağlar."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** Global MES ile ürün-seri no odaklı merkezi yönetim
- **integrationDesc:** Sistem, Candy Hoover'ın Global MES sistemi ile entegre çalışmaktadır; toplanan test verileri ve izlenebilirlik kayıtları ürün seri numarasıyla eşleştirilerek Global MES üzerinden merkezi olarak yönetilmektedir.
- **integrationList:**
  - **bold:** "Test Cihazı - Ürün Eşleşmesi" | **text:** "Cihaz sonuçları okunan seri numarasıyla eşleştirilerek doğru ürün kaydına yazılır."
  - **bold:** "Merkezi MES Yönetimi" | **text:** "Toplanan test verileri ve izlenebilirlik kayıtları Global MES ile paylaşılır, süreç merkezi olarak yönetilir."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Otomatik test verisi ve uçtan uca ocak izlenebilirliği
- **resultsGrid:**
  - **title:** "Otomatik Veri Toplama" | **text:** "Test verilerinin manuel Excel'e işlenmesi kaldırılarak veri toplama tamamen otomatik hale getirilmiştir."
  - **title:** "Hata ve Zaman Kaybının Azalması" | **text:** "Veri giriş hataları ve manuel işlem kaynaklı zaman kaybı önemli ölçüde önlenmiştir."
  - **title:** "Hat Boyunca Uçtan Uca İzlenebilirlik" | **text:** "Ocakların hat başından sevkiyata kadar izlenmesiyle uçtan uca izlenebilirlik sağlanmış, üretim verimliliğinin takibi için veriye dayalı zemin oluşturulmuştur."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Ocak hatlarınızda test verisi ve izlenebilirliği uçtan uca yönetmek ister misiniz?
- **ctaSubtitle:** Hat başından sevkiyata kadar otomatik veri toplama, ürün eşleştirme ve MES entegrasyonu için bizimle iletişime geçin.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Candy Hoover Test Data Cooker Lines Traceability
- **Sector (sector / tagValue):** Home Appliances
- **Location (locationValue):** Eskisehir
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** At Candy Hoover's cooker appliance factory in Eskisehir, test data from the production line was automatically collected and matched to each product.

##### Hero Section (EN)
- **heroTitleLine1:** Candy Hoover
- **heroTitleLine2:** Test Stations Traceability
- **heroSub:** At Candy Hoover's cooker appliance factory in Eskisehir, test data from the production line was automatically collected and matched to each product.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Digital and traceable test data management
- **contextP1:** In this project implemented at Candy Hoover's cooker appliance factory in Eskisehir, test data generated on the production line was automatically collected and associated with each product.
- **contextP2:** The objective was to manage test data in a digital and fully traceable way.

##### Problem / Challenge (EN)
- **problemEyebrow:** Need / Problem
- **problemTitle:** Manual logging, error risk, and limited traceability
- **problemLede:** Electrical and gas leakage test data was manually entered into Excel. This caused time loss, increased data entry errors, and made reliable product-level traceability difficult.
- **problemList:**
  - **bold:** "Manual Excel Entry" | **text:** "Manually processing test data created operational load and slowed down the workflow."
  - **bold:** "Data Entry Errors" | **text:** "Manual inputs increased the risk of quality and reliability issues."
  - **bold:** "Weak Product-Level Tracking" | **text:** "Without robust product-result matching, traceability remained limited."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Automatic test data capture and serial-number matching
- **solutionLede:** By integrating test devices, electrical and gas leakage data was captured automatically and linked to the correct product via serial number reading.
- **steps:**
  - **no:** "01" | **title:** "Product Arrives at Station" | **text:** "When a product reaches the test station, its serial number is read by barcode scanner."
  - **no:** "02" | **title:** "Automatic Device Data Capture" | **text:** "Results are automatically collected from electrical and gas leakage test devices."
  - **no:** "03" | **title:** "Serial Number Matching" | **text:** "Captured test data is matched to the read product serial number."
  - **no:** "04" | **title:** "Central Recording and Monitoring" | **text:** "Data is recorded in OnSuite Trace and becomes available for monitoring and reporting."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** Test devices, barcode scanners, PLC, and OnSuite Trace
- **techGrid:**
  - **tag:** "TEST" | **title:** "Electrical and Gas Leakage Test Devices" | **text:** "Shop-floor equipment producing electrical and gas leakage test results automatically."
  - **tag:** "IDENTIFICATION" | **title:** "Barcode Scanners" | **text:** "Read product serial numbers at station entry to trigger correct data matching."
  - **tag:** "AUTOMATION" | **title:** "PLC Integration" | **text:** "Coordinates station flow and manages data exchange between devices and software."
  - **tag:** "MANAGEMENT" | **title:** "OnSuite Trace" | **text:** "Central platform for traceability operations and process visibility."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** Integrated flow across test stations, MES, and traceability platform
- **integrationDesc:** The system combines test station outputs with product serial numbers and works integrated with Candy Hoover's Global MES System and OnSuite Trace.
- **integrationList:**
  - **bold:** "Device-to-Product Matching" | **text:** "Device results are matched with scanned serial numbers and saved to the correct product record."
  - **bold:** "Global MES Integration" | **text:** "Collected data is synchronized with Candy Hoover's Global MES to support centralized visibility."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Eliminated manual work and improved test traceability
- **resultsGrid:**
  - **title:** "Automated Data Collection" | **text:** "Manual Excel entry was removed and test data collection became fully automated."
  - **title:** "Reduced Errors and Time Loss" | **text:** "Data entry errors and time losses caused by manual operations were significantly reduced."
  - **title:** "Product-Level Traceability" | **text:** "Automatic serial-number matching improved traceability and reporting reliability."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Want to make your test stations fully traceable and data-driven?
- **ctaSubtitle:** Contact us for automatic test data collection, accurate product matching, and MES integration.
- **ctaPrimary:** Contact Us

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Candy Hoover - Colectarea datelor de testare si trasabilitatea pentru liniile de aragazuri
- **Sector (sector / tagValue):** Electrocasnice
- **Locație (locationValue):** Eskisehir
- **Domeniu de Aplicare (scopeVal):** Software și integrare
- **An (year):** An
- **Descriere Scurtă (description):** În fabrica de aparate de gătit Candy Hoover din Eskisehir, datele de test din linia de producție au fost colectate automat și corelate cu fiecare produs.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Candy Hoover
- **heroTitleLine2:** Trasabilitatea Stațiilor de Test
- **heroSub:** În fabrica de aparate de gătit Candy Hoover din Eskisehir, datele de test din linia de producție au fost colectate automat și corelate cu fiecare produs.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Gestionare digitală și trasabilă a datelor de test
- **contextP1:** În proiectul implementat în fabrica de aparate de gătit Candy Hoover din Eskisehir, datele de test generate pe linia de producție au fost colectate automat și asociate produsului.
- **contextP2:** Obiectivul a fost gestionarea datelor de test într-un mod digital și complet trasabil.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Necesitate / Problemă
- **problemTitle:** Înregistrare manuală, risc de erori și urmărire limitată
- **problemLede:** Datele testelor electrice și de scurgeri de gaz erau introduse manual în Excel. Această abordare producea pierderi de timp, erori de introducere și îngreuna trasabilitatea fiabilă la nivel de produs.
- **problemList:**
  - **bold:** "Introducere manuală în Excel" | **text:** "Procesarea manuală a datelor de test creștea volumul operațional și încetinea fluxul."
  - **bold:** "Erori de introducere" | **text:** "Introducerea manuală creștea riscul de probleme de calitate și fiabilitate."
  - **bold:** "Trasabilitate slabă pe produs" | **text:** "Fără corelarea robustă produs-rezultat, trasabilitatea rămânea limitată."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Colectare automată a datelor și corelare cu seria produsului
- **solutionLede:** Prin integrarea echipamentelor de test, datele de test electric și de scurgeri de gaz au fost colectate automat și legate de produsul corect prin citirea numărului de serie.
- **steps:**
  - **no:** "01" | **title:** "Sosirea produsului la stație" | **text:** "Când produsul ajunge la stația de test, numărul de serie este citit cu scannerul de coduri de bare."
  - **no:** "02" | **title:** "Colectare automată din echipamente" | **text:** "Rezultatele sunt preluate automat din echipamentele de test electric și de scurgeri de gaz."
  - **no:** "03" | **title:** "Corelare cu numărul de serie" | **text:** "Datele colectate sunt corelate cu numărul de serie citit al produsului."
  - **no:** "04" | **title:** "Înregistrare și monitorizare centrală" | **text:** "Datele sunt înregistrate în OnSuite Trace și devin disponibile pentru monitorizare și raportare."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipamente utilizate
- **techTitle:** Echipamente de test, scanere cod de bare, PLC și OnSuite Trace
- **techGrid:**
  - **tag:** "TEST" | **title:** "Echipamente pentru test electric și scurgeri de gaz" | **text:** "Infrastructură de test din producție care generează automat rezultatele de test."
  - **tag:** "IDENTIFICARE" | **title:** "Scanere cod de bare" | **text:** "Citesc numărul de serie la intrarea în stație pentru corelarea corectă a datelor."
  - **tag:** "AUTOMATIZARE" | **title:** "Integrare PLC" | **text:** "Coordonează fluxul din teren și schimbul de date dintre echipamente și aplicație."
  - **tag:** "MANAGEMENT" | **title:** "OnSuite Trace" | **text:** "Platformă centrală pentru trasabilitate și vizibilitatea proceselor."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Flux integrat între stații de test, MES și platforma de trasabilitate
- **integrationDesc:** Sistemul combină rezultatele din stațiile de test cu numerele de serie ale produselor și funcționează integrat cu sistemul Global MES Candy Hoover și cu OnSuite Trace.
- **integrationList:**
  - **bold:** "Corelare echipament-produs" | **text:** "Rezultatele echipamentelor sunt corelate cu seriile scanate și salvate în înregistrarea produsului corect."
  - **bold:** "Integrare Global MES" | **text:** "Datele colectate sunt sincronizate cu Global MES pentru vizibilitate centralizată."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Eliminarea proceselor manuale și trasabilitate fiabilă
- **resultsGrid:**
  - **title:** "Colectare automată a datelor" | **text:** "Introducerea manuală în Excel a fost eliminată, iar colectarea datelor de test a devenit complet automată."
  - **title:** "Reducerea erorilor și a timpilor pierduți" | **text:** "Erorile de introducere și pierderile de timp cauzate de operații manuale au fost reduse semnificativ."
  - **title:** "Trasabilitate la nivel de produs" | **text:** "Corelarea automată cu numărul de serie a îmbunătățit semnificativ trasabilitatea și raportarea."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți stații de test complet trasabile și orientate pe date?
- **ctaSubtitle:** Contactați-ne pentru colectare automată de date de test, corelare corectă pe produs și integrare MES.
- **ctaPrimary:** Contactați-ne


---

### 39. Delphi Technologies - Takım Ucu İzlenebilirlik
**Slug:** `delphi-tool-tip-traceability` | **ID:** `16` | **Sıra (Order):** `39` | **Yıl:** `2016`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `delphi-tool-tip-traceability`
- **Sıralama (order):** `39`
- **Yıl (year / referenceDate):** `2016`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `RFID, Barcode, ERP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/delphi.svg`
  - **Ana Görsel (image):** `/images/companies/Delphi/delphi_dizel.jpg`
  - **Hero Görseli (heroImage):** `/images/companies/Delphi/delphi_dizel.jpg`
  - **Galeri Görselleri (gallery):**
  - /images/companies/Delphi/delphi_dizel.jpg
  - /images/companies/Delphi/Delphi-Fabrika.jpg

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Delphi Technologies - Takım Ucu İzlenebilirlik
- **Sektör (sector / tagValue):** Otomotiv
- **Konum (locationValue):** İzmir ESBAŞ
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Delphi Technologies için, her operasyon adımını kaydeden ve kalite kontrollerini ilgili parça geçmişine bağlayan bir takım ucu izlenebilirlik akışı uyguladık. Çözüm, hat üzerindeki süreç görünürlüğünü artırdı ve sapmalar ile yeniden işleme eylemleri için daha hızlı kök neden analizi yapılmasını sağladı.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Takım Ucunda Dijital Kimlik,
- **heroTitleLine2:** Üretimde Doğru Eşleşme Güvencesi
- **heroSub:** Delphi Technologies'in İzmir ESBAŞ Serbest Bölge'deki fabrikasında hayata geçirilen projede, üretimde kullanılan takım uçları Datamatrix kod tabanlı sistemle takip edilerek doğru ürün-takım eşleşmesi, takım ömrü ve bileme süreci izlenebilir hale getirilmiştir.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Takım ucu akışında uçtan uca izlenebilirlik
- **contextP1:** Delphi Technologies'in İzmir ESBAŞ Serbest Bölge'deki fabrikası, otomotiv yan sanayine yönelik üretim yapmaktadır. Bu fabrikada hayata geçirilen projede, üretimde kullanılan takım uçları Datamatrix kod tabanlı bir sistemle takip edilmiştir.
- **contextP2:** Proje ile doğru ürün-takım eşleşmesi, takım ömrü ve tekrar kullanım için yürütülen bileme süreci izlenebilir ve yönetilebilir hale getirilmiştir.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Yanlış takım kullanımında kalite riski ve görünürlük kaybı
- **problemLede:** Üretimde her ürün için doğru takım ucunun kullanıldığının güvence altına alınması gerekiyordu. Manuel kontrol yaklaşımı hem hata riskini artırıyor hem de süreç görünürlüğünü azaltıyordu.
- **problemList:**
  - **bold:** "Ürün-Takım Eşleşmesi" | **text:** "Ürün ile takım ucunun manuel kontrolü yanlış takım kullanımı riskini yükseltiyordu."
  - **bold:** "Takım Ömrü Takibi" | **text:** "Takım uçlarının kullanım ömrü sağlıklı izlenemediği için planlama ve maliyet kontrolü zorlaşıyordu."
  - **bold:** "Bileme Süreci İzleme" | **text:** "Bilemeye gönderilen takım uçlarının geçmişini izlemek için güvenilir ve merkezi bir kayıt altyapısı gerekliydi."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Datamatrix tabanlı tekil takım takibi ve otomatik doğrulama
- **solutionLede:** Takım uçları üzerine Datamatrix kod markalanarak her takım ucu tekil olarak tanımlandı. Üretim sırasında takım ucu okunup ilgili ürünle eşleştirme kontrolü yapıldı; ayrıca takım ömrü ve bileme kayıtları sistem üzerinde takip edilir hale getirildi.
- **steps:**
  - **no:** "01" | **title:** "Tekil Kod Markalama" | **text:** "Her takım ucu Datamatrix kod ile tekil kimliğe kavuşturuldu."
  - **no:** "02" | **title:** "Eşleşme Doğrulama" | **text:** "Üretim anında takım ucu kodu okunarak ilgili ürünle otomatik eşleşme kontrolü yapıldı."
  - **no:** "03" | **title:** "Takım Ömrü Takibi" | **text:** "Her takım ucunun kullanım çevrimi ve ömrü sistem üzerinde izlenerek veri odaklı yönetim sağlandı."
  - **no:** "04" | **title:** "Bileme Geçmişi" | **text:** "Bilemeye gönderilen takım uçlarının süreç kayıtları tutularak bileme geçmişi izlenebilir hale getirildi."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** Datamatrix okuma, saha otomasyonu ve SCADA altyapısı
- **techGrid:**
  - **tag:** "KODLAMA" | **title:** "Datamatrix Kodları" | **text:** "Takım uçları üzerindeki tekil kimliği taşıyan kalıcı kod yapısıdır."
  - **tag:** "OKUMA" | **title:** "Kod Okuyucular" | **text:** "Üretim sırasında takım ucu kodlarını okuyarak anlık doğrulama sağlar."
  - **tag:** "OTOMASYON" | **title:** "PLC Yapısı" | **text:** "Saha akışını yönetir ve doğrulama adımlarını üretim süreciyle senkronize eder."
  - **tag:** "YAZILIM" | **title:** "C# SCADA Uygulaması" | **text:** "Ürün-takım eşleştirmesi, takım ömrü takibi, bileme kayıtları ve Oracle veri alışverişini yönetir."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** Oracle ile merkezi süreç yönetimi
- **integrationDesc:** Sistem Oracle ile entegre çalışmaktadır; ürün-takım eşleştirmesi, takım ömrü ve bileme süreçlerine ilişkin veriler Oracle ile paylaşılarak süreç merkezi olarak izlenmekte ve yönetilmektedir.
- **integrationList:**
  - **bold:** "Oracle Entegrasyonu" | **text:** "Üretim doğrulama ve takım yaşam döngüsü verileri Oracle ile çift yönlü paylaşılır."
  - **bold:** "OnSuite Trace Platformu" | **text:** "İzlenebilirlik ve süreç yönetimi OnSuite Trace üzerinde merkezi olarak yürütülür."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Kalite güvencesi ve veri odaklı takım yönetimi
- **resultsGrid:**
  - **title:** "Yanlış Takım Kullanımının Önlenmesi" | **text:** "Ürün-takım eşleşmesi otomatik doğrulandığı için yanlış takım kullanımına bağlı kalite riski azaltıldı."
  - **title:** "Ömür Bazlı Planlama" | **text:** "Takım uçlarının tekil kimlik üzerinden yaşam döngüsü takibiyle planlama ve maliyet kontrolü güçlendi."
  - **title:** "Bileme Geçmişi Görünürlüğü" | **text:** "Bileme kayıtlarının sistematik tutulmasıyla her takım ucunun geçmişi izlenebilir hale getirildi."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Takım yönetimi ve üretim doğrulama süreçlerinizi güçlendirmek ister misiniz?
- **ctaSubtitle:** Datamatrix tabanlı izlenebilirlik ve OnSuite Trace entegrasyonu ile süreçlerinizi güvence altına alalım.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Delphi Tool Tip Traceability
- **Sector (sector / tagValue):** Automotive
- **Location (locationValue):** Izmir ESBAS
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** For Delphi Technologies, we implemented a tool-tip traceability flow that records each operation step and links quality checks to the relevant part history. The solution increased process visibility on the line and enabled faster root cause analysis for deviations and rework actions.

##### Hero Section (EN)
- **heroTitleLine1:** Digital Identity on Tool Tips,
- **heroTitleLine2:** Reliable Matching in Production
- **heroSub:** At Delphi Technologies' plant in Izmir ESBAS Free Zone, tool tips used in production were tracked with a Data Matrix-based system to make product-tool matching, tool life, and sharpening processes traceable.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** End-to-end traceability in tool-tip flow
- **contextP1:** Delphi Technologies' plant in Izmir ESBAS Free Zone manufactures for the automotive supplier industry. In this project, tool tips used in production were tracked with a Data Matrix-based system.
- **contextP2:** The project made product-tool matching, tool life monitoring, and sharpening flow traceable and manageable.

##### Problem / Challenge (EN)
- **problemEyebrow:** Needs / Problems
- **problemTitle:** Quality risk and visibility loss from wrong tool usage
- **problemLede:** It was necessary to guarantee that the correct tool tip is used for each product in production. Manual checks increased error risk and reduced process visibility.
- **problemList:**
  - **bold:** "Product-Tool Matching" | **text:** "Manual product and tool-tip checks increased the risk of wrong tool usage."
  - **bold:** "Tool Life Monitoring" | **text:** "Lack of healthy tool-life tracking made planning and cost control difficult."
  - **bold:** "Sharpening Process Tracking" | **text:** "A reliable central record structure was needed to track the history of tools sent for sharpening."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Data Matrix-based unique tool tracking and automatic validation
- **solutionLede:** Each tool tip was marked with a Data Matrix code and uniquely identified. During production, the tool tip was read and matched with the relevant product; tool life and sharpening records were also tracked in the system.
- **steps:**
  - **no:** "01" | **title:** "Unique Code Marking" | **text:** "Each tool tip was provided with a unique identity via Data Matrix code."
  - **no:** "02" | **title:** "Matching Validation" | **text:** "During production, tool-tip code is read and automatically matched with the related product."
  - **no:** "03" | **title:** "Tool Life Monitoring" | **text:** "Usage cycles and life of each tool tip are tracked for data-driven management."
  - **no:** "04" | **title:** "Sharpening History" | **text:** "Process records of tools sent for sharpening are stored to make sharpening history traceable."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** Data Matrix reading, field automation, and SCADA infrastructure
- **techGrid:**
  - **tag:** "CODING" | **title:** "Data Matrix Codes" | **text:** "Permanent code structure carrying unique identity on tool tips."
  - **tag:** "READING" | **title:** "Code Readers" | **text:** "Read tool-tip codes during production for instant verification."
  - **tag:** "AUTOMATION" | **title:** "PLC Structure" | **text:** "Manages field flow and synchronizes validation steps with production."
  - **tag:** "SOFTWARE" | **title:** "C# SCADA Application" | **text:** "Manages product-tool matching, tool life tracking, sharpening records, and Oracle data exchange."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** Central process management with Oracle
- **integrationDesc:** The system works integrated with Oracle; product-tool matching, tool life, and sharpening process data are shared with Oracle for centralized monitoring and management.
- **integrationList:**
  - **bold:** "Oracle Integration" | **text:** "Production validation and tool lifecycle data are exchanged with Oracle bi-directionally."
  - **bold:** "OnSuite Trace Platform" | **text:** "Traceability and process management are centrally executed on OnSuite Trace."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Quality assurance and data-driven tool management
- **resultsGrid:**
  - **title:** "Prevention of Wrong Tool Usage" | **text:** "Automatic product-tool matching reduced quality risk caused by wrong tool usage."
  - **title:** "Lifecycle-Based Planning" | **text:** "Lifecycle tracking over unique identities strengthened planning and cost control."
  - **title:** "Sharpening History Visibility" | **text:** "Systematic sharpening records made each tool tip's history traceable."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Would you like to strengthen tool management and production validation?
- **ctaSubtitle:** Secure your processes with Data Matrix-based traceability and OnSuite Trace integration.
- **ctaPrimary:** Contact Us

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Delphi Technologies - Trasabilitatea varfului de unealta
- **Sector (sector / tagValue):** Industria auto
- **Locație (locationValue):** Izmir ESBAS
- **Domeniu de Aplicare (scopeVal):** Software și Integrare
- **An (year):** An
- **Descriere Scurtă (description):** Pentru Delphi Technologies, am implementat un flux de trasabilitate a vârfului de unealtă care înregistrează fiecare etapă de operare și leagă verificările de calitate de istoricul piesei. Soluția a crescut vizibilitatea procesului pe linie și a permis analiza mai rapidă a cauzelor pentru abateri și acțiuni de retușare.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Identitate Digitală pe Vârfuri de Unealtă,
- **heroTitleLine2:** Potrivire Corectă în Producție
- **heroSub:** La fabrica Delphi Technologies din Izmir ESBAS Free Zone, vârfurile de unealtă folosite în producție au fost urmărite printr-un sistem bazat pe coduri Data Matrix, pentru a face trasabile potrivirea produs-unealtă, durata de viață și procesele de ascuțire.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Trasabilitate end-to-end în fluxul vârfului de unealtă
- **contextP1:** Fabrica Delphi Technologies din Izmir ESBAS Free Zone produce pentru industria auto. În acest proiect, vârfurile de unealtă utilizate în producție au fost urmărite printr-un sistem bazat pe Data Matrix.
- **contextP2:** Proiectul a făcut trasabile și gestionabile potrivirea produs-unealtă, monitorizarea duratei de viață și fluxul de ascuțire.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoie / Problemă
- **problemTitle:** Risc de calitate și pierdere de vizibilitate din utilizarea greșită a uneltei
- **problemLede:** Era necesară garantarea utilizării vârfului de unealtă corect pentru fiecare produs. Controalele manuale creșteau riscul de eroare și reduceau vizibilitatea procesului.
- **problemList:**
  - **bold:** "Potrivire Produs-Unealtă" | **text:** "Verificarea manuală produs-vârf de unealtă creștea riscul de utilizare greșită."
  - **bold:** "Monitorizare Durată de Viață" | **text:** "Lipsa unei monitorizări sănătoase a duratei de viață îngreuna planificarea și controlul costurilor."
  - **bold:** "Urmărirea Procesului de Ascuțire" | **text:** "Era necesară o structură centrală fiabilă pentru istoricul uneltelor trimise la ascuțire."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Urmărire unică pe Data Matrix și validare automată
- **solutionLede:** Fiecare vârf de unealtă a fost marcat cu cod Data Matrix și identificat unic. În producție, codul a fost citit și potrivit cu produsul relevant; durata de viață și înregistrările de ascuțire au fost urmărite în sistem.
- **steps:**
  - **no:** "01" | **title:** "Marcare Cod Unic" | **text:** "Fiecare vârf de unealtă a primit identitate unică prin cod Data Matrix."
  - **no:** "02" | **title:** "Validare Potrivire" | **text:** "În producție, codul vârfului de unealtă este citit și corelat automat cu produsul relevant."
  - **no:** "03" | **title:** "Monitorizare Durată de Viață" | **text:** "Ciclul de utilizare și durata fiecărui vârf sunt urmărite pentru management bazat pe date."
  - **no:** "04" | **title:** "Istoric de Ascuțire" | **text:** "Înregistrările uneltelor trimise la ascuțire sunt stocate pentru trasabilitate completă."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipament Utilizat
- **techTitle:** Citire Data Matrix, automatizare de teren și infrastructură SCADA
- **techGrid:**
  - **tag:** "CODARE" | **title:** "Coduri Data Matrix" | **text:** "Structură de cod permanentă care transportă identitatea unică pe vârfuri de unealtă."
  - **tag:** "CITIRE" | **title:** "Cititoare de Cod" | **text:** "Citesc codurile vârfului de unealtă în timpul producției pentru validare instantă."
  - **tag:** "AUTOMATIZARE" | **title:** "Structură PLC" | **text:** "Gestionează fluxul în teren și sincronizează pașii de validare cu producția."
  - **tag:** "SOFTWARE" | **title:** "Aplicație SCADA C#" | **text:** "Gestionează potrivirea produs-unealtă, durata de viață, înregistrările de ascuțire și schimbul de date cu Oracle."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Management centralizat al procesului cu Oracle
- **integrationDesc:** Sistemul funcționează integrat cu Oracle; datele privind potrivirea produs-unealtă, durata de viață și procesul de ascuțire sunt partajate cu Oracle pentru monitorizare și management centralizat.
- **integrationList:**
  - **bold:** "Integrare Oracle" | **text:** "Datele de validare în producție și ciclul de viață al uneltei sunt schimbate bidirecțional cu Oracle."
  - **bold:** "Platforma OnSuite Trace" | **text:** "Trasabilitatea și managementul proceselor sunt executate central pe OnSuite Trace."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Asigurarea calității și managementul uneltelor bazat pe date
- **resultsGrid:**
  - **title:** "Prevenirea Utilizării Greșite a Uneltei" | **text:** "Potrivirea automată produs-unealtă a redus riscul de calitate cauzat de utilizarea greșită."
  - **title:** "Planificare pe Ciclul de Viață" | **text:** "Urmărirea ciclului de viață pe identitate unică a întărit planificarea și controlul costurilor."
  - **title:** "Vizibilitate Istoric Ascuțire" | **text:** "Înregistrările sistematice au făcut trasabil istoricul fiecărui vârf de unealtă."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să consolidați managementul uneltelor și validarea producției?
- **ctaSubtitle:** Securizați procesele cu trasabilitate Data Matrix și integrare OnSuite Trace.
- **ctaPrimary:** Contactați-ne


---

### 40. Delphi Technologies - Prototip Hattı İzlenebilirlik
**Slug:** `delphi-prototype-line-traceability` | **ID:** `9` | **Sıra (Order):** `40` | **Yıl:** `2016`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `delphi-prototype-line-traceability`
- **Sıralama (order):** `40`
- **Yıl (year / referenceDate):** `2016`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `RFID, Barcode, ERP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/delphi.svg`
  - **Ana Görsel (image):** `/images/companies/Delphi/Delphi-Fabrika.jpg`
  - **Hero Görseli (heroImage):** `/images/companies/Delphi/Delphi-Fabrika.jpg`
  - **Galeri Görselleri (gallery):**
  - /images/companies/Delphi/Delphi-Fabrika.jpg
  - /images/companies/Delphi/delphi_dizel.jpg

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Delphi Technologies - Prototip Hattı İzlenebilirlik
- **Sektör (sector / tagValue):** Otomotiv
- **Konum (locationValue):** İzmir ESBAŞ
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Delphi Technologies / Prototip Hattı İzlenebilirliği.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Prototipte Tam Görünürlük,
- **heroTitleLine2:** Operasyon Bazlı Anlık Takip
- **heroSub:** Delphi Technologies'in İzmir ESBAŞ Serbest Bölge'deki fabrikasında hayata geçirilen projede, müşteriler için özel üretilen prototip ürünlerin tezgahlardaki tüm operasyonlar boyunca izlenebilirliği sağlanmıştır.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Prototip hattında baştan sona izlenebilir üretim
- **contextP1:** Delphi Technologies'in İzmir ESBAŞ Serbest Bölge'deki fabrikası, otomotiv yan sanayine yönelik üretim yapmaktadır. Bu fabrikada hayata geçirilen projede, müşteriler için özel olarak üretilen prototip ürünlerin tezgahlardaki tüm operasyonlar boyunca izlenebilirliği sağlanmıştır.
- **contextP2:** Amaç, prototip ürünlerin üretim sürecindeki ilerleyişini operasyon bazında anlık izlenebilir hale getirerek süreç takibini ve planlamayı güçlendirmektir.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Prototip sürecinde durum görünürlüğü eksikliği
- **problemLede:** Müşteriye özel üretilen prototip ürünlerin üretim sürecinde hangi seviyede ve hangi durumda olduğu net biçimde görülemiyordu.
- **problemList:**
  - **bold:** "İlerleyiş Takibi" | **text:** "Prototip üretiminin ilerleyişi ve operasyon durumu izlenemediği için süreç takibi zorlaşıyordu."
  - **bold:** "Planlama Güçlüğü" | **text:** "Güncel durum görünürlüğünün yetersizliği, planlama ve iş önceliklendirme süreçlerinde risk oluşturuyordu."
  - **bold:** "Tekil Kimlik İhtiyacı" | **text:** "Prototip ürünlerin baştan itibaren tekil tanımlanıp tüm operasyonlarda izlenebileceği bir yapıya ihtiyaç vardı."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Markalama ile başlayan uçtan uca prototip takibi
- **solutionLede:** Prototip ürünler hattına girmeden önce markalanıp tekil olarak tanımlandı. Tezgahlardaki tüm operasyonlarda ürünler izlenerek her prototipin hangi operasyonda ve hangi durumda olduğu kayıt altına alındı.
- **steps:**
  - **no:** "01" | **title:** "Ön Markalama" | **text:** "Prototip ürünler hatta giriş öncesi markalanarak tekil kimlikle sisteme alınır."
  - **no:** "02" | **title:** "Operasyon Tanıma" | **text:** "Barkod okuyucular ürünleri operasyon noktalarında otomatik tanır ve doğrular."
  - **no:** "03" | **title:** "Durum Kaydı" | **text:** "Her ürünün bulunduğu operasyon ve güncel işlem durumu anlık olarak kayıt altına alınır."
  - **no:** "04" | **title:** "Süreç Görünürlüğü" | **text:** "Prototip üretiminin seviyesi ve güncel durumu tüm aşamalarda izlenebilir hale getirilir."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** Barkod, PLC ve C# SCADA temelli saha altyapısı
- **techGrid:**
  - **tag:** "OKUMA" | **title:** "Barkod Okuyucular" | **text:** "Prototip ürünleri operasyon bazında tanıyarak izlenebilirlik akışını tetikler."
  - **tag:** "OTOMASYON" | **title:** "PLC Yapısı" | **text:** "Saha akışını ve operasyon geçişlerini yöneterek gerçek zamanlı süreç kontrolü sağlar."
  - **tag:** "YAZILIM" | **title:** "C# SCADA Uygulaması" | **text:** "Operasyon durumlarının izlenmesini, raporlanmasını ve Oracle ile veri alışverişini yönetir."
  - **tag:** "PLATFORM" | **title:** "OnSuite Trace" | **text:** "İzlenebilirlik ve süreç yönetiminin merkezi olarak yürütüldüğü uygulama katmanıdır."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** Oracle ile merkezi veri paylaşımı
- **integrationDesc:** Sistem Oracle ile entegre çalışmaktadır; prototip ürünlerin operasyon bazlı izlenebilirlik ve durum verileri Oracle ile paylaşılarak süreç merkezi olarak izlenmekte ve yönetilmektedir.
- **integrationList:**
  - **bold:** "Oracle Entegrasyonu" | **text:** "Operasyon, durum ve ilerleyiş verileri Oracle ile paylaşılır; merkezde raporlama ve yönetim sağlanır."
  - **bold:** "OnSuite Trace Yönetimi" | **text:** "Süreç görünürlüğü ve operasyon takibi OnSuite Trace üzerinde uçtan uca izlenir."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Prototip üretimde görünürlük ve planlama gücü
- **resultsGrid:**
  - **title:** "Anlık Durum Görünürlüğü" | **text:** "Prototip ürünlerin hangi seviyede ve hangi durumda olduğu tüm operasyonlarda görünür hale geldi."
  - **title:** "Kolaylaşan Takip ve Planlama" | **text:** "Süreç görünürlüğündeki eksiklik giderilerek prototip üretiminin takibi ve planlaması kolaylaştı."
  - **title:** "Operasyon Bazlı İzlenebilirlik" | **text:** "Baştan itibaren tekil tanımlama ile prototip hattında operasyon bazında tam izlenebilirlik sağlandı."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Prototip üretim süreçlerinizi anlık ve güvenilir takip etmek ister misiniz?
- **ctaSubtitle:** OnSuite Trace tabanlı izlenebilirlik çözümleriyle prototip hattınızda uçtan uca görünürlük sağlayalım.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Delphi Prototype Line Traceability
- **Sector (sector / tagValue):** Automotive
- **Location (locationValue):** Izmir ESBAS
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** Delphi Technologies / Prototype Line Traceability.

##### Hero Section (EN)
- **heroTitleLine1:** Full Visibility in Prototype Flow,
- **heroTitleLine2:** Real-Time Operation-Level Tracking
- **heroSub:** At Delphi Technologies' plant in Izmir ESBAS Free Zone, traceability was provided for customer-specific prototype products throughout all machine operations.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** End-to-end traceable production on the prototype line
- **contextP1:** Delphi Technologies' plant in Izmir ESBAS Free Zone manufactures for the automotive supplier industry. In this project, customer-specific prototype products were made traceable across all machine operations.
- **contextP2:** The goal was to make prototype progress visible in real time by operation and strengthen process tracking and planning.

##### Problem / Challenge (EN)
- **problemEyebrow:** Needs / Problems
- **problemTitle:** Lack of status visibility in prototype flow
- **problemLede:** It was not clearly visible at which stage and in which state customer-specific prototype products were during production.
- **problemList:**
  - **bold:** "Progress Tracking" | **text:** "Since prototype progress and operation status were not trackable, process follow-up became difficult."
  - **bold:** "Planning Difficulty" | **text:** "Insufficient current-state visibility created risks in planning and prioritization."
  - **bold:** "Need for Unique Identity" | **text:** "A structure was required where prototype products are uniquely identified from the beginning and tracked in all operations."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** End-to-end prototype tracking starting with marking
- **solutionLede:** Prototype products were marked and uniquely identified before entering the line. Across all machine operations, each prototype's operation and current status were recorded.
- **steps:**
  - **no:** "01" | **title:** "Pre-Marking" | **text:** "Prototype products are marked before line entry and registered with unique identity."
  - **no:** "02" | **title:** "Operation Recognition" | **text:** "Barcode readers automatically recognize and validate products at operation points."
  - **no:** "03" | **title:** "Status Recording" | **text:** "Current operation and process status of each product are recorded in real time."
  - **no:** "04" | **title:** "Process Visibility" | **text:** "Prototype production level and current status become visible at every stage."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** Barcode, PLC, and C# SCADA-based field infrastructure
- **techGrid:**
  - **tag:** "READING" | **title:** "Barcode Readers" | **text:** "Recognize prototype products by operation and trigger traceability flow."
  - **tag:** "AUTOMATION" | **title:** "PLC Structure" | **text:** "Manages field flow and operation transitions for real-time process control."
  - **tag:** "SOFTWARE" | **title:** "C# SCADA Application" | **text:** "Manages status monitoring, reporting, and Oracle data exchange."
  - **tag:** "PLATFORM" | **title:** "OnSuite Trace" | **text:** "Application layer where traceability and process management are centrally executed."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** Central data sharing with Oracle
- **integrationDesc:** The system works integrated with Oracle; operation-level traceability and status data of prototype products are shared with Oracle for centralized monitoring and management.
- **integrationList:**
  - **bold:** "Oracle Integration" | **text:** "Operation, status, and progress data are shared with Oracle for centralized reporting and management."
  - **bold:** "OnSuite Trace Management" | **text:** "Process visibility and operation tracking are managed end-to-end on OnSuite Trace."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Visibility and planning strength in prototype production
- **resultsGrid:**
  - **title:** "Real-Time Status Visibility" | **text:** "The stage and status of prototype products became visible across all operations."
  - **title:** "Easier Tracking and Planning" | **text:** "Removing visibility gaps simplified follow-up and planning of prototype production."
  - **title:** "Operation-Level Traceability" | **text:** "With unique identification from the start, full operation-level traceability was achieved."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Would you like reliable real-time tracking in your prototype production flow?
- **ctaSubtitle:** Achieve end-to-end visibility on your prototype line with OnSuite Trace-based traceability solutions.
- **ctaPrimary:** Contact Us

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Delphi Technologies - Trasabilitatea liniei de prototipuri
- **Sector (sector / tagValue):** Industria auto
- **Locație (locationValue):** Izmir ESBAS
- **Domeniu de Aplicare (scopeVal):** Software și Integrare
- **An (year):** An
- **Descriere Scurtă (description):** Delphi Technologies / Trasabilitatea liniei de prototipuri.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Vizibilitate Completă în Fluxul Prototip,
- **heroTitleLine2:** Urmărire în Timp Real pe Operații
- **heroSub:** La fabrica Delphi Technologies din Izmir ESBAS Free Zone, a fost asigurată trasabilitatea produselor prototip realizate pentru clienți pe toate operațiile de la utilaje.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Producție trasabilă cap-coadă pe linia de prototip
- **contextP1:** Fabrica Delphi Technologies din Izmir ESBAS Free Zone produce pentru industria auto. În acest proiect, produsele prototip realizate special pentru clienți au devenit trasabile pe toate operațiile de la utilaje.
- **contextP2:** Obiectivul a fost să facă vizibil în timp real progresul prototipurilor la nivel de operație și să întărească urmărirea și planificarea procesului.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoie / Problemă
- **problemTitle:** Lipsa vizibilității de status în fluxul prototip
- **problemLede:** Nu era clar în ce etapă și în ce stare se aflau produsele prototip dedicate clienților pe durata producției.
- **problemList:**
  - **bold:** "Urmărirea Progresului" | **text:** "Cum progresul și statusul operațional nu erau urmărite, monitorizarea procesului devenea dificilă."
  - **bold:** "Dificultate de Planificare" | **text:** "Vizibilitatea insuficientă asupra stării curente genera riscuri în planificare și prioritizare."
  - **bold:** "Necesitatea Identității Unice" | **text:** "Era necesară o structură în care produsele prototip să fie identificate unic de la început și urmărite în toate operațiile."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Urmărire end-to-end a prototipului începând cu marcarea
- **solutionLede:** Produsele prototip au fost marcate și identificate unic înainte de intrarea pe linie. În toate operațiile de la utilaje, pentru fiecare prototip s-au înregistrat operația și starea curentă.
- **steps:**
  - **no:** "01" | **title:** "Pre-Marcare" | **text:** "Produsele prototip sunt marcate înainte de intrarea pe linie și înregistrate cu identitate unică."
  - **no:** "02" | **title:** "Recunoaștere Operațională" | **text:** "Cititoarele de coduri de bare recunosc și validează automat produsele în punctele operaționale."
  - **no:** "03" | **title:** "Înregistrare Status" | **text:** "Operația curentă și starea procesului pentru fiecare produs se înregistrează în timp real."
  - **no:** "04" | **title:** "Vizibilitate Proces" | **text:** "Nivelul și starea curentă a producției prototip devin vizibile în fiecare etapă."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipament Utilizat
- **techTitle:** Infrastructură de teren bazată pe coduri de bare, PLC și C# SCADA
- **techGrid:**
  - **tag:** "CITIRE" | **title:** "Cititoare de Coduri de Bare" | **text:** "Recunosc produsele prototip pe operații și declanșează fluxul de trasabilitate."
  - **tag:** "AUTOMATIZARE" | **title:** "Structură PLC" | **text:** "Gestionează fluxul de teren și tranzițiile operaționale pentru control în timp real."
  - **tag:** "SOFTWARE" | **title:** "Aplicație SCADA C#" | **text:** "Gestionează monitorizarea statusului, raportarea și schimbul de date cu Oracle."
  - **tag:** "PLATFORMĂ" | **title:** "OnSuite Trace" | **text:** "Stratul de aplicație în care trasabilitatea și managementul proceselor sunt executate centralizat."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Partajare centralizată a datelor cu Oracle
- **integrationDesc:** Sistemul funcționează integrat cu Oracle; datele de trasabilitate la nivel de operație și status pentru produsele prototip sunt partajate cu Oracle pentru monitorizare și management centralizat.
- **integrationList:**
  - **bold:** "Integrare Oracle" | **text:** "Datele de operație, status și progres sunt partajate cu Oracle pentru raportare și management centralizat."
  - **bold:** "Management OnSuite Trace" | **text:** "Vizibilitatea procesului și urmărirea operațională sunt gestionate end-to-end pe OnSuite Trace."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Vizibilitate și putere de planificare în producția de prototip
- **resultsGrid:**
  - **title:** "Vizibilitate Status în Timp Real" | **text:** "Etapa și starea produselor prototip au devenit vizibile în toate operațiile."
  - **title:** "Urmărire și Planificare Simplificate" | **text:** "Eliminarea lacunelor de vizibilitate a simplificat monitorizarea și planificarea producției prototip."
  - **title:** "Trasabilitate la Nivel de Operație" | **text:** "Prin identificare unică de la început, s-a obținut trasabilitate completă la nivel operațional."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți urmărire fiabilă în timp real pe fluxul dumneavoastră de prototipuri?
- **ctaSubtitle:** Obțineți vizibilitate end-to-end pe linia de prototip cu soluții de trasabilitate bazate pe OnSuite Trace.
- **ctaPrimary:** Contactați-ne


---

### 41. Delphi Technologies - Depo Yönetimi
**Slug:** `delphi-technologies` | **ID:** `4` | **Sıra (Order):** `41` | **Yıl:** `2016`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `delphi-technologies`
- **Sıralama (order):** `41`
- **Yıl (year / referenceDate):** `2016`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `Barcode, Vision Systems, IoT Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `50%`
  - **Hata Azalması (defects):** `80%`
  - **Üretkenlik (productivity):** `55%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/delphi.svg`
  - **Ana Görsel (image):** `/images/companies/Delphi/Delphi-Fabrika.jpg`
  - **Hero Görseli (heroImage):** `/images/companies/Delphi/Delphi-Fabrika.jpg`
  - **Galeri Görselleri (gallery):**
  - /images/companies/Delphi/Delphi-Fabrika.jpg
  - /images/companies/Delphi/delphi_dizel.jpg

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Delphi Technologies - Depo Yönetimi
- **Sektör (sector / tagValue):** Otomotiv
- **Konum (locationValue):** Menderes / İzmir
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Delphi Technologies için, üretim çıktısından sevkiyata kadar uçtan uca görünürlük sağlayan entegre bir depo yönetimi ve izlenebilirlik çözümü geliştirdik. Proje kapsamında gelen ve giden malzeme hareketleri, karton, palet ve depolama konumu düzeyinde barkodla tanımlama yöntemiyle sayısallaştırıldı ve takip edildi. Otomatik süreç doğrulama, toplama, konsolidasyon ve sevkiyat iş akışlarındaki operatöre bağımlı hataları azalttı. Gerçek zamanlı veri toplama, stok, depo operasyonları ve sevkiyat durumunun tek bir kontrol katmanından merkezi olarak izlenmesini sağladı. Çift yönlü ERP entegrasyonu, depo operasyonları ile kurumsal sistemler arasında sipariş, stok ve sevkiyat verilerinin senkronize edilmesini güvence altına aldı. Bu çözümle Delphi; daha hızlı depo yürütme, azaltılmış işleme hataları, geliştirilmiş stok doğruluğu ve tam operasyonel izlenebilirlik elde etti.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Depoda Dijital Düzen,
- **heroTitleLine2:** Hızlı ve Hatasız Operasyon
- **heroSub:** Delphi Technologies'in Menderes'teki (İzmir) yedek parça deposunda hayata geçirilen projede, depo operasyonlarını yöneten bir depo yönetim sistemi (WMS) kurulmuştur.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Yedek parça deposunda uçtan uca WMS yönetimi
- **contextP1:** Delphi Technologies'in Menderes'teki (İzmir) yedek parça deposunda hayata geçirilen projede, depo operasyonlarını yöneten bir depo yönetim sistemi (WMS) kurulmuştur.
- **contextP2:** Proje, parça yerleştirme, müşteri siparişlerinin toplanması ve raf dengesi gibi temel depo süreçlerinin dijital ve izlenebilir biçimde yönetilmesini amaçlamıştır.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Manuel depo yönetiminde hata ve tutarsızlık riski
- **problemLede:** Parça yerleştirme, sipariş toplama ve stok/raf dengesi takibinin güvenilir ve izlenebilir yürütülmesi gerekiyordu. Manuel akış bu süreçlerde hata riski oluşturuyordu.
- **problemList:**
  - **bold:** "Yanlış Yerleştirme" | **text:** "Parçaların elle yönetilmesi yanlış lokasyona yerleştirme riskini artırıyordu."
  - **bold:** "Hatalı Sipariş Toplama" | **text:** "Müşteri siparişlerinin manuel toplanması doğruluk problemlerine yol açabiliyordu."
  - **bold:** "Stok Tutarsızlığı" | **text:** "Stok ve raf dengesinin manuel takibi güncel ve güvenilir veri üretmekte yetersiz kalıyordu."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** WMS ve el terminali ile anlık depo operasyonları
- **solutionLede:** Depo süreçlerini uçtan uca kapsayan bir WMS kuruldu. Parça yerleştirme, sipariş toplama ve raf dengesi operasyonları sistem üzerinden yönetilirken saha işlemleri el terminali uygulamasıyla anlık yürütülüp kayıt altına alındı.
- **steps:**
  - **no:** "01" | **title:** "WMS Kurulumu" | **text:** "Depo süreçlerini merkezden yöneten depo yönetim sistemi devreye alındı."
  - **no:** "02" | **title:** "Parça Yerleştirme Yönetimi" | **text:** "Parça giriş ve yerleştirme adımları sistem kurallarıyla dijital olarak yönetildi."
  - **no:** "03" | **title:** "Sipariş Toplama Operasyonları" | **text:** "Müşteri siparişleri el terminali üzerinden doğrulamalı şekilde toplandı."
  - **no:** "04" | **title:** "Raf Dengesi ve Kayıt" | **text:** "Raf/stok dengesi hareketleri anlık izlenerek tüm depo hareketleri kayda alındı."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** WMS ve mobil saha uygulamaları
- **techGrid:**
  - **tag:** "YAZILIM" | **title:** "WMS Uygulaması" | **text:** "Depo süreçlerini, lokasyon kurallarını ve operasyon akışlarını yöneten merkezi uygulama katmanı."
  - **tag:** "SAHA" | **title:** "El Terminali Uygulaması" | **text:** "Parça yerleştirme, sipariş toplama ve raf dengesi işlemlerinin sahada yürütüldüğü mobil operasyon aracı."
  - **tag:** "İZLEME" | **title:** "Anlık Hareket Kaydı" | **text:** "Depo içindeki her hareketin anlık olarak kayıt altına alınmasını sağlayan operasyonel izleme yapısı."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** SAP ile depo verilerinin kurumsal senkronizasyonu
- **integrationDesc:** Sistem SAP ile entegre çalışmaktadır; parça, sipariş ve stok verileri SAP ile paylaşılarak depo hareketleri ve raf dengesi kurumsal sistemle güncel biçimde senkronize edilmekte ve merkezi olarak yönetilmektedir.
- **integrationList:**
  - **bold:** "SAP Parça ve Sipariş Verisi" | **text:** "Parça ve sipariş verileri SAP ile çift yönlü paylaşılır, depo operasyonlarında doğruluk artırılır."
  - **bold:** "Stok Senkronizasyonu" | **text:** "Stok ve raf dengesi hareketleri kurumsal sistemle güncel tutulur ve merkezden yönetilir."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Depo süreçlerinde hız, doğruluk ve izlenebilirlik
- **resultsGrid:**
  - **title:** "Dijital ve İzlenebilir Süreçler" | **text:** "Parça yerleştirme, sipariş toplama ve raf dengesi süreçleri dijital ve izlenebilir hale getirildi."
  - **title:** "Hata Riskinde Azalma" | **text:** "Yanlış yerleştirme, hatalı sipariş toplama ve stok tutarsızlığı riskleri azaltıldı."
  - **title:** "Operasyonel Verim" | **text:** "Sahada anlık ve doğru yürütülen işlemler sayesinde depo operasyonlarında hız ve doğruluk artırıldı."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Depo operasyonlarınızı uçtan uca dijitalleştirmek ister misiniz?
- **ctaSubtitle:** WMS ve saha uygulamalarımızla depo süreçlerinizde hız, doğruluk ve tam izlenebilirlik sağlayalım.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Delphi Technologies
- **Sector (sector / tagValue):** Automotive
- **Location (locationValue):** Menderes / Izmir
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** For Delphi Technologies, we developed an integrated warehouse management and traceability solution that provides end-to-end visibility from production output to shipment. Within the project, incoming and outgoing material movements were digitized and tracked through barcode-based identification at the carton, pallet, and storage location level. Automated process validation reduced operator-dependent errors in picking, consolidation, and delivery workflows. Real-time data collection enabled centralized monitoring of inventory, warehouse operations, and shipment status from a single control layer. Bidirectional ERP integration ensured synchronization of order, inventory, and shipment data between warehouse operations and enterprise systems. With this solution, Delphi achieved faster warehouse execution, reduced handling errors, improved inventory accuracy, and complete operational traceability.

##### Hero Section (EN)
- **heroTitleLine1:** Digital Order in Warehouse,
- **heroTitleLine2:** Fast and Accurate Operations
- **heroSub:** At Delphi Technologies' spare-parts warehouse in Menderes (Izmir), a warehouse management system (WMS) was implemented to manage warehouse operations.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** End-to-end WMS management in spare-parts warehouse
- **contextP1:** At Delphi Technologies' spare-parts warehouse in Menderes (Izmir), a warehouse management system (WMS) was implemented to manage warehouse operations.
- **contextP2:** The project aimed to manage core warehouse processes such as part put-away, customer order picking, and shelf balance in a digital and traceable manner.

##### Problem / Challenge (EN)
- **problemEyebrow:** Needs / Problems
- **problemTitle:** Error and inconsistency risk in manual warehouse management
- **problemLede:** Part put-away, order picking, and stock/shelf balance tracking had to be reliable and traceable. Manual flows created high operational risk.
- **problemList:**
  - **bold:** "Wrong Put-away" | **text:** "Manual handling increased the risk of placing parts in wrong locations."
  - **bold:** "Incorrect Order Picking" | **text:** "Manual customer order picking could lead to fulfillment accuracy issues."
  - **bold:** "Stock Inconsistency" | **text:** "Manual stock and shelf-balance tracking struggled to provide up-to-date reliable data."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Real-time warehouse operations with WMS and handheld terminals
- **solutionLede:** An end-to-end WMS was deployed for warehouse processes. While part put-away, picking, and shelf-balance operations were managed by the system, field operations were executed in real time via handheld terminal applications and fully recorded.
- **steps:**
  - **no:** "01" | **title:** "WMS Deployment" | **text:** "A central warehouse management system was commissioned to control process flow."
  - **no:** "02" | **title:** "Put-away Management" | **text:** "Inbound and put-away steps were digitally managed with system rules."
  - **no:** "03" | **title:** "Order Picking Operations" | **text:** "Customer orders were picked through handheld devices with operational validation."
  - **no:** "04" | **title:** "Shelf Balance and Logging" | **text:** "Shelf/stock balance movements were tracked in real time and every warehouse move was recorded."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** WMS and mobile field applications
- **techGrid:**
  - **tag:** "SOFTWARE" | **title:** "WMS Application" | **text:** "Central application layer managing warehouse process rules, locations, and operational flows."
  - **tag:** "FIELD" | **title:** "Handheld Terminal Application" | **text:** "Mobile operational tool used for put-away, picking, and shelf-balance tasks in the warehouse."
  - **tag:** "MONITORING" | **title:** "Real-Time Movement Logging" | **text:** "Operational tracking structure that records every movement in the warehouse instantly."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** Enterprise synchronization of warehouse data with SAP
- **integrationDesc:** The system operates integrated with SAP; part, order, and stock data are shared with SAP so warehouse movements and shelf balance stay synchronized with the enterprise system and are centrally managed.
- **integrationList:**
  - **bold:** "SAP Part and Order Data" | **text:** "Part and order data are shared bi-directionally with SAP to improve warehouse execution accuracy."
  - **bold:** "Stock Synchronization" | **text:** "Stock and shelf-balance movements are kept up to date with enterprise systems and centrally controlled."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Speed, accuracy, and traceability in warehouse operations
- **resultsGrid:**
  - **title:** "Digital and Traceable Processes" | **text:** "Put-away, order picking, and shelf-balance workflows became digital and traceable."
  - **title:** "Reduced Error Risk" | **text:** "Risks of wrong placement, incorrect picking, and stock inconsistency were reduced."
  - **title:** "Operational Efficiency" | **text:** "Real-time and accurate field execution increased warehouse speed and correctness."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Would you like to digitize your warehouse operations end to end?
- **ctaSubtitle:** Let us provide speed, accuracy, and full traceability in your warehouse with our WMS and field applications.
- **ctaPrimary:** Contact Us

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Delphi Technologies - Managementul Depozitelor
- **Sector (sector / tagValue):** Industria auto
- **Locație (locationValue):** Menderes / Izmir
- **Domeniu de Aplicare (scopeVal):** Software și Integrare
- **An (year):** An
- **Descriere Scurtă (description):** Pentru Delphi Technologies, am dezvoltat o soluție integrată de management al depozitului și trasabilitate, care oferă vizibilitate completă de la ieșirea din producție până la expediere. În cadrul proiectului, mișcările de materiale la intrare și ieșire au fost digitalizate și urmărite prin identificare cu coduri de bare la nivel de carton, palet și locație de stocare. Validarea automată a proceselor a redus erorile dependente de operator în fluxurile de picking, consolidare și livrare. Colectarea datelor în timp real a permis monitorizarea centralizată a stocurilor, operațiunilor din depozit și statusului expedierilor dintr-un singur strat de control. Integrarea ERP bidirecțională a asigurat sincronizarea datelor de comenzi, stocuri și expediere între operațiunile de depozit și sistemele enterprise. Cu această soluție, Delphi a obținut execuție mai rapidă în depozit, reducerea erorilor de manipulare, acuratețe mai bună a stocurilor și trasabilitate operațională completă.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Ordine Digitală în Depozit,
- **heroTitleLine2:** Operațiuni Rapide și Corecte
- **heroSub:** În depozitul de piese de schimb Delphi Technologies din Menderes (Izmir), a fost implementat un sistem WMS pentru gestionarea operațiunilor de depozit.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Management WMS end-to-end în depozitul de piese
- **contextP1:** În depozitul de piese de schimb Delphi Technologies din Menderes (Izmir), a fost implementat un sistem WMS pentru gestionarea operațiunilor de depozit.
- **contextP2:** Proiectul a vizat managementul digital și trasabil al proceselor de bază: plasare piese, picking comenzi clienți și echilibru raft-stoc.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoie / Problemă
- **problemTitle:** Risc de erori și inconsistență în managementul manual al depozitului
- **problemLede:** Plasarea pieselor, picking-ul comenzilor și monitorizarea echilibrului stoc/raft trebuiau să fie fiabile și trasabile. Fluxurile manuale generau riscuri operaționale ridicate.
- **problemList:**
  - **bold:** "Plasare Greșită" | **text:** "Gestionarea manuală creștea riscul plasării pieselor în locații incorecte."
  - **bold:** "Picking Incorect" | **text:** "Picking-ul manual al comenzilor putea produce erori de livrare."
  - **bold:** "Inconsistență de Stoc" | **text:** "Urmărirea manuală a stocului și echilibrului de raft nu oferea date suficient de actuale și fiabile."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Operațiuni în timp real cu WMS și terminale mobile
- **solutionLede:** A fost implementat un WMS care acoperă end-to-end procesele de depozit. În timp ce operațiunile de plasare, picking și echilibru raft au fost gestionate din sistem, activitățile din teren au fost executate în timp real prin terminale mobile și înregistrate complet.
- **steps:**
  - **no:** "01" | **title:** "Implementare WMS" | **text:** "A fost pus în funcțiune un sistem central WMS pentru controlul fluxurilor de depozit."
  - **no:** "02" | **title:** "Management Plasare Piese" | **text:** "Pașii de intrare și plasare au fost gestionați digital pe baza regulilor de sistem."
  - **no:** "03" | **title:** "Operațiuni de Picking" | **text:** "Comenzile clienților au fost colectate prin terminale mobile cu validări operaționale."
  - **no:** "04" | **title:** "Echilibru Raft și Înregistrare" | **text:** "Mișcările de echilibru raft/stoc au fost urmărite în timp real, iar fiecare mișcare a fost înregistrată."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipament Utilizat
- **techTitle:** WMS și aplicații mobile de teren
- **techGrid:**
  - **tag:** "SOFTWARE" | **title:** "Aplicație WMS" | **text:** "Strat central software ce gestionează regulile de proces, locațiile și fluxurile operaționale de depozit."
  - **tag:** "TEREN" | **title:** "Aplicație Terminal Mobil" | **text:** "Instrument operațional mobil folosit pentru plasare piese, picking comenzi și echilibru de raft."
  - **tag:** "MONITORIZARE" | **title:** "Înregistrare Mișcări în Timp Real" | **text:** "Structură de monitorizare care înregistrează instant fiecare mișcare din depozit."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Sincronizare corporativă a datelor de depozit cu SAP
- **integrationDesc:** Sistemul funcționează integrat cu SAP; datele de piese, comenzi și stoc sunt partajate cu SAP, astfel mișcările de depozit și echilibrul de raft rămân sincronizate cu sistemul corporativ și sunt gestionate central.
- **integrationList:**
  - **bold:** "Date Piese și Comenzi în SAP" | **text:** "Datele de piese și comenzi sunt schimbate bidirecțional cu SAP pentru acuratețe operațională crescută."
  - **bold:** "Sincronizare Stoc" | **text:** "Mișcările de stoc și echilibrul de raft sunt menținute la zi în sistemele corporative și controlate central."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Viteză, acuratețe și trasabilitate în operațiunile de depozit
- **resultsGrid:**
  - **title:** "Procese Digitale și Trasabile" | **text:** "Fluxurile de plasare piese, picking comenzi și echilibru raft au devenit digitale și trasabile."
  - **title:** "Reducerea Riscului de Eroare" | **text:** "Au fost reduse riscurile de plasare greșită, picking incorect și inconsistență de stoc."
  - **title:** "Eficiență Operațională" | **text:** "Execuția corectă și în timp real în teren a crescut viteza și acuratețea operațiunilor de depozit."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să digitalizați end-to-end operațiunile de depozit?
- **ctaSubtitle:** Oferim viteză, acuratețe și trasabilitate completă în depozit prin soluțiile noastre WMS și aplicații de teren.
- **ctaPrimary:** Contactați-ne


---

### 42. Delphi Technologies - Ray Montaj Tekil Ürün İzleme
**Slug:** `delphi-monitorizare-individuala-rampa-injectie` | **ID:** `6` | **Sıra (Order):** `42` | **Yıl:** `2015`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `delphi-monitorizare-individuala-rampa-injectie`
- **Sıralama (order):** `42`
- **Yıl (year / referenceDate):** `2015`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `Barcode, Assembly Tracking, MES Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `44%`
  - **Hata Azalması (defects):** `68%`
  - **Üretkenlik (productivity):** `41%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/delphi.svg`
  - **Ana Görsel (image):** `/images/companies/Delphi/delphi_dizel.jpg`
  - **Hero Görseli (heroImage):** `/images/companies/Delphi/delphi_dizel.jpg`
  - **Galeri Görselleri (gallery):**
  - /images/companies/Delphi/delphi_dizel.jpg
  - /images/companies/Delphi/Delphi-Fabrika.jpg

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Delphi Technologies - Ray Montaj Tekil Ürün İzleme
- **Sektör (sector / tagValue):** Otomotiv
- **Konum (locationValue):** İzmir ESBAŞ
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Delphi Technologies / Yakıt Rayı Montaj Hattında Bireysel Ürün İzleme.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Tekil Üründe Tam Görünürlük,
- **heroTitleLine2:** Ray Montajda Anlık Operasyon Takibi
- **heroSub:** Delphi Technologies'in İzmir ESBAŞ Serbest Bölge'deki fabrikasında hayata geçirilen projede, ray montaj hattındaki ürünlerin tezgahlardaki tüm operasyonlar boyunca tekil olarak izlenebilirliği sağlanmıştır.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Ray montaj hattında tekil ürün izlenebilirliği
- **contextP1:** Delphi Technologies'in İzmir ESBAŞ Serbest Bölge'deki fabrikası, otomotiv yan sanayine yönelik üretim yapmaktadır. Bu fabrikada hayata geçirilen projede, ray montaj hattındaki ürünlerin tezgahlardaki tüm operasyonlar boyunca tekil olarak izlenebilirliği sağlanmıştır.
- **contextP2:** Amaç, ürünlerin operasyon bazındaki durumunu gerçek zamanlı görünür kılarak süreç takibini ve kalite kontrolünü güçlendirmekti.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Operasyon ve durum takibinde görünürlük eksikliği
- **problemLede:** Ray montaj hattındaki ürünlerin hangi operasyonda ve hangi durumda olduğunun tekil ürün bazında izlenebilmesi gerekiyordu.
- **problemList:**
  - **bold:** "Tekil Takip Gereksinimi" | **text:** "Ürünlerin baştan itibaren tekil olarak tanımlanıp tüm operasyonlarda izlenebilmesi gerekiyordu."
  - **bold:** "Süreç Takibi Zorluğu" | **text:** "Üretim ilerleyişi ve operasyon durumunun izlenememesi süreç yönetimini zorlaştırıyordu."
  - **bold:** "Kalite Kontrol Riski" | **text:** "Görünürlük eksikliği kalite kontrol kararlarında gecikme ve risk oluşturuyordu."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Markalama ile başlayan operasyon bazlı tekil ürün takibi
- **solutionLede:** Ürünler ray montaj hattına girmeden önce markalanarak tekil olarak tanımlandı. Tezgahlardaki tüm operasyonlarda ürünler izlenerek her ürünün hangi operasyonda ve hangi durumda olduğu kayıt altına alındı.
- **steps:**
  - **no:** "01" | **title:** "Ön Markalama" | **text:** "Ürünler hatta giriş öncesinde markalanır ve tekil kimlikle sisteme alınır."
  - **no:** "02" | **title:** "Operasyon Tanıma" | **text:** "Barkod okuyucular ürünleri her istasyonda operasyon bazında tanır."
  - **no:** "03" | **title:** "Durum Kayıtları" | **text:** "Her ürünün operasyon durumu ve üretim seviyesi anlık olarak kayıt altına alınır."
  - **no:** "04" | **title:** "Görünürlük ve İzleme" | **text:** "Seri üretimde her ürünün güncel durumu operasyon bazında görünür hale getirilir."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** Barkod, PLC ve C# SCADA tabanlı saha altyapısı
- **techGrid:**
  - **tag:** "OKUMA" | **title:** "Barkod Okuyucular" | **text:** "Ürünleri operasyon bazında tanıyarak tekil izlenebilirlik akışını başlatır."
  - **tag:** "OTOMASYON" | **title:** "PLC Yapısı" | **text:** "Saha akışını yönetir, operasyon geçişlerini kontrol eder ve süreç tutarlılığı sağlar."
  - **tag:** "YAZILIM" | **title:** "C# SCADA Uygulaması" | **text:** "Operasyon durumlarının izlenmesini, raporlanmasını ve Oracle ile veri alışverişini yönetir."
  - **tag:** "PLATFORM" | **title:** "OnSuite Trace" | **text:** "İzlenebilirlik ve süreç yönetiminin merkezi olarak yürütüldüğü platform katmanıdır."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** Oracle ile merkezi süreç yönetimi
- **integrationDesc:** Sistem Oracle ile entegre çalışmaktadır; ürünlerin operasyon bazlı izlenebilirlik ve durum verileri Oracle ile paylaşılarak süreç merkezi olarak izlenmekte ve yönetilmektedir.
- **integrationList:**
  - **bold:** "Oracle Entegrasyonu" | **text:** "Ürünlerin operasyon ve durum verileri Oracle ile paylaşılır, süreç merkezi olarak yönetilir."
  - **bold:** "OnSuite Trace Yönetimi" | **text:** "Tekil ürün izleme ve süreç görünürlüğü OnSuite Trace üzerinde uçtan uca yönetilir."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Tekil ürün seviyesinde uçtan uca izlenebilirlik
- **resultsGrid:**
  - **title:** "Operasyon Bazlı Görünürlük" | **text:** "Her ürünün hangi seviyede ve hangi durumda olduğu operasyon bazında görünür hale geldi."
  - **title:** "Kolaylaşan Takip ve Kalite Kontrol" | **text:** "Süreç görünürlüğündeki eksiklik giderilerek üretim takibi ve kalite kontrolü kolaylaştı."
  - **title:** "Uçtan Uca Tekil İzleme" | **text:** "Ürünler hatta girişten itibaren tekil kimlikle izlenerek uçtan uca izlenebilirlik sağlandı."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Montaj hattınızda tekil ürün görünürlüğünü artırmak ister misiniz?
- **ctaSubtitle:** Barkod, SCADA ve OnSuite Trace tabanlı çözümlerimizle operasyon bazlı izlenebilirliği güçlendirelim.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Delphi Monitorizare Individuala Rampa Injectie
- **Sector (sector / tagValue):** Automotive
- **Location (locationValue):** Izmir ESBAS
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** Delphi Technologies / Individual Product Monitoring on the Fuel Rail Assembly Line.

##### Hero Section (EN)
- **heroTitleLine1:** Full Visibility Per Item,
- **heroTitleLine2:** Real-Time Operation Tracking on Rail Assembly
- **heroSub:** At Delphi Technologies' Izmir ESBAS Free Zone plant, individual traceability was provided for products on the rail assembly line across all machine operations.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Individual product traceability on the rail assembly line
- **contextP1:** Delphi Technologies' Izmir ESBAS Free Zone plant manufactures for the automotive supplier industry. In this project, products on the rail assembly line were tracked individually across all machine operations.
- **contextP2:** The goal was to make operation-level status visible in real time and strengthen process follow-up and quality control.

##### Problem / Challenge (EN)
- **problemEyebrow:** Needs / Problems
- **problemTitle:** Visibility gap in operation and status tracking
- **problemLede:** It was necessary to track, at individual-item level, which operation each rail-assembly product was in and its current status.
- **problemList:**
  - **bold:** "Need for Individual Tracking" | **text:** "Products had to be uniquely identified from the start and tracked across all operations."
  - **bold:** "Process Follow-up Difficulty" | **text:** "Lack of production progress and operation-status tracking made process management difficult."
  - **bold:** "Quality Control Risk" | **text:** "Visibility gaps created delay and risk in quality-control decisions."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Operation-level individual tracking starting with pre-marking
- **solutionLede:** Products were marked and uniquely identified before entering the rail assembly line. Across all machine operations, each product's operation and current status were recorded.
- **steps:**
  - **no:** "01" | **title:** "Pre-Marking" | **text:** "Products are marked before line entry and registered with unique identity."
  - **no:** "02" | **title:** "Operation Recognition" | **text:** "Barcode readers recognize products at each station by operation."
  - **no:** "03" | **title:** "Status Recording" | **text:** "Operation status and production level of each product are recorded in real time."
  - **no:** "04" | **title:** "Visibility and Monitoring" | **text:** "Current status of each product in serial production becomes visible by operation."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** Barcode, PLC, and C# SCADA-based field infrastructure
- **techGrid:**
  - **tag:** "READING" | **title:** "Barcode Readers" | **text:** "Recognize products by operation and trigger individual-traceability flow."
  - **tag:** "AUTOMATION" | **title:** "PLC Structure" | **text:** "Manages field flow, controls operation transitions, and ensures process consistency."
  - **tag:** "SOFTWARE" | **title:** "C# SCADA Application" | **text:** "Manages status monitoring, reporting, and Oracle data exchange."
  - **tag:** "PLATFORM" | **title:** "OnSuite Trace" | **text:** "Platform layer where traceability and process management are executed centrally."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** Central process management with Oracle
- **integrationDesc:** The system is integrated with Oracle; operation-level traceability and status data are shared with Oracle so the process is centrally monitored and managed.
- **integrationList:**
  - **bold:** "Oracle Integration" | **text:** "Operation and status data of products are shared with Oracle for centralized management."
  - **bold:** "OnSuite Trace Management" | **text:** "Individual product tracking and process visibility are managed end to end on OnSuite Trace."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** End-to-end traceability at individual product level
- **resultsGrid:**
  - **title:** "Operation-Level Visibility" | **text:** "Status and production level of each item became visible by operation."
  - **title:** "Easier Follow-up and Quality Control" | **text:** "By closing visibility gaps, production follow-up and quality control became easier."
  - **title:** "Full Individual Tracking" | **text:** "Items were tracked with unique identity from line entry, achieving end-to-end traceability."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Would you like to improve individual product visibility on your assembly line?
- **ctaSubtitle:** Let us strengthen operation-level traceability with our barcode, SCADA, and OnSuite Trace-based solutions.
- **ctaPrimary:** Contact Us

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Delphi Technologies - Monitorizarea individuală a produselor pe linia de asamblare a rampelor de injecție
- **Sector (sector / tagValue):** Industria auto
- **Locație (locationValue):** Izmir ESBAS
- **Domeniu de Aplicare (scopeVal):** Software și Integrare
- **An (year):** An
- **Descriere Scurtă (description):** Delphi Technologies / Monitorizarea individuală a produselor pe linia de asamblare a rampelor de injecție.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Vizibilitate Completă pe Produs,
- **heroTitleLine2:** Urmărire în Timp Real pe Linia de Montaj Rail
- **heroSub:** La fabrica Delphi Technologies din Izmir ESBAS Free Zone, a fost asigurată trasabilitatea individuală a produselor de pe linia de montaj rail pe toate operațiile utilajelor.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Trasabilitate individuală pe linia de montaj rail
- **contextP1:** Fabrica Delphi Technologies din Izmir ESBAS Free Zone produce pentru industria auto. În acest proiect, produsele de pe linia de montaj rail au fost urmărite individual pe toate operațiile utilajelor.
- **contextP2:** Obiectivul a fost să facă vizibil în timp real statusul pe operații și să întărească urmărirea procesului și controlul calității.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoie / Problemă
- **problemTitle:** Lipsă de vizibilitate în urmărirea operației și statusului
- **problemLede:** Era necesar ca produsele de pe linia de montaj rail să fie urmărite la nivel individual după operație și status curent.
- **problemList:**
  - **bold:** "Necesitatea Urmăririi Individuale" | **text:** "Produsele trebuiau identificate unic de la început și urmărite în toate operațiile."
  - **bold:** "Dificultate în Urmărirea Procesului" | **text:** "Lipsa urmăririi progresului și statusului operațional îngreuna managementul procesului."
  - **bold:** "Risc de Control al Calității" | **text:** "Lipsa de vizibilitate genera întârzieri și risc în deciziile de control al calității."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Urmărire individuală pe operații, pornind de la pre-marcarea produsului
- **solutionLede:** Produsele au fost marcate și identificate unic înainte de intrarea pe linia de montaj rail. Pe toate operațiile utilajelor, pentru fiecare produs au fost înregistrate operația și statusul curent.
- **steps:**
  - **no:** "01" | **title:** "Pre-Marcare" | **text:** "Produsele sunt marcate înainte de intrarea pe linie și introduse în sistem cu identitate unică."
  - **no:** "02" | **title:** "Recunoaștere Operațională" | **text:** "Cititoarele de coduri de bare recunosc produsele la fiecare stație pe baza operației."
  - **no:** "03" | **title:** "Înregistrare Status" | **text:** "Statusul operațional și nivelul de producție al fiecărui produs sunt înregistrate în timp real."
  - **no:** "04" | **title:** "Vizibilitate și Monitorizare" | **text:** "Statusul curent al fiecărui produs în producția de serie devine vizibil la nivel de operație."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipament Utilizat
- **techTitle:** Infrastructură de teren bazată pe coduri de bare, PLC și C# SCADA
- **techGrid:**
  - **tag:** "CITIRE" | **title:** "Cititoare de Coduri de Bare" | **text:** "Recunosc produsele pe operații și declanșează fluxul de trasabilitate individuală."
  - **tag:** "AUTOMATIZARE" | **title:** "Structură PLC" | **text:** "Gestionează fluxul de teren, controlează tranzițiile operaționale și menține consistența procesului."
  - **tag:** "SOFTWARE" | **title:** "Aplicație SCADA C#" | **text:** "Gestionează monitorizarea statusului, raportarea și schimbul de date cu Oracle."
  - **tag:** "PLATFORMĂ" | **title:** "OnSuite Trace" | **text:** "Stratul de platformă în care trasabilitatea și managementul proceselor sunt executate centralizat."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Management centralizat al proceselor cu Oracle
- **integrationDesc:** Sistemul funcționează integrat cu Oracle; datele de trasabilitate și status operațional sunt partajate cu Oracle pentru monitorizare și management centralizat.
- **integrationList:**
  - **bold:** "Integrare Oracle" | **text:** "Datele de operație și status ale produselor sunt partajate cu Oracle pentru management centralizat."
  - **bold:** "Management OnSuite Trace" | **text:** "Urmărirea individuală și vizibilitatea procesului sunt gestionate end-to-end pe OnSuite Trace."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Trasabilitate end-to-end la nivel de produs individual
- **resultsGrid:**
  - **title:** "Vizibilitate pe Operații" | **text:** "Nivelul și statusul fiecărui produs au devenit vizibile la nivel de operație."
  - **title:** "Urmărire și Control al Calității Simplificate" | **text:** "Prin eliminarea lipsei de vizibilitate, urmărirea producției și controlul calității au fost simplificate."
  - **title:** "Urmărire Individuală Completă" | **text:** "Produsele au fost urmărite cu identitate unică de la intrarea pe linie, obținând trasabilitate end-to-end."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să creșteți vizibilitatea pe produs individual în linia de montaj?
- **ctaSubtitle:** Consolidăm trasabilitatea pe operații cu soluțiile noastre bazate pe coduri de bare, SCADA și OnSuite Trace.
- **ctaPrimary:** Contactați-ne


---

### 43. Stackpole - İzlenebilirlik
**Slug:** `stackpole-traceability` | **ID:** `18` | **Sıra (Order):** `43` | **Yıl:** `2015`

#### ⚙️ Genel & Teknik Meta Bilgileri (Tüm Diller İçin Ortak)
- **Slug:** `stackpole-traceability`
- **Sıralama (order):** `43`
- **Yıl (year / referenceDate):** `2015`
- **Öne Çıkarılan (featured):** `false`
- **Kullanılan Teknolojiler (technologies):** `RFID, Barcode, ERP Integration`
- **Metrikler (Results):**
  - **Verimlilik (efficiency):** `35%`
  - **Hata Azalması (defects):** `60%`
  - **Üretkenlik (productivity):** `40%`
- **Medya Dosyaları:**
  - **Logo:** `/Logos/Stackpole.png`
  - **Ana Görsel (image):** `/images/companies/Steckpole/1698577809204.jpg`
  - **Hero Görseli (heroImage):** `/images/companies/Steckpole/1698577809204.jpg`
  - **Galeri Görselleri (gallery):**
  - 

---

#### 🇹🇷 TÜRKÇE (TR) İÇERİK (`locale: "tr"`)

- **Başlık (title):** Stackpole - İzlenebilirlik
- **Sektör (sector / tagValue):** Otomotiv
- **Konum (locationValue):** Türkiye
- **Kapsam (scopeVal):** Yazılım ve Entegrasyon
- **Yıl (year):** Yıl
- **Kısa Açıklama (description):** Stackpole için hayata geçirilen projede, üretim süreci boyunca ürünlerin operasyon bazında izlenebilirliği sağlanarak süreç görünürlüğü ve kalite güvence seviyesi artırılmıştır.

##### Hero Bölümü (TR)
- **heroTitleLine1:** Üretimde Uçtan Uca İzleme,
- **heroTitleLine2:** Stackpole için Tekil Ürün Güvencesi
- **heroSub:** Stackpole için hayata geçirilen projede, üretim süreci boyunca ürünlerin operasyon bazında izlenebilirliği sağlanarak süreç görünürlüğü ve kalite güvence seviyesi artırılmıştır.

##### Bağlam (Context) (TR)
- **contextEyebrow:** Müşteri ve Bağlam
- **contextTitle:** Kesintisiz üretim akışı için merkezi izlenebilirlik
- **contextP1:** Stackpole üretim ortamında ürünlerin üretim adımları boyunca tekil olarak takip edilmesi, doğru operasyon akışının korunması ve süreç verilerinin merkezi yönetimi hedeflenmiştir.
- **contextP2:** Proje, üretimden sevkiyata kadar ürün geçmişinin izlenebilir olmasını sağlayarak kalite ve operasyon ekipleri için anlık görünürlük oluşturmuştur.

##### Problem / İhtiyaç (TR)
- **problemEyebrow:** İhtiyaç / Problem
- **problemTitle:** Operasyon adımlarında izleme kopukluğu riski
- **problemLede:** Üretim adımlarındaki ürün hareketlerinin güvenilir ve tekil biçimde takip edilememesi, süreç kontrolü ve kalite doğrulamasında risk oluşturuyordu.
- **problemList:**
  - **bold:** "Süreç Görünürlüğü" | **text:** "Operasyon geçişlerinde ürün durumunun anlık görülememesi takip zorluğu yaratıyordu."
  - **bold:** "Doğrulama İhtiyacı" | **text:** "Ürünlerin doğru operasyon sırası ile ilerlediğinin sistematik şekilde doğrulanması gerekiyordu."
  - **bold:** "Kalite Güvence Riski" | **text:** "Geçmiş kayıtların parçalı kalması, kalite inceleme ve kök neden analizini zorlaştırıyordu."

##### Çözüm (Solution) (TR)
- **solutionEyebrow:** Çözüm
- **solutionTitle:** Operasyon bazlı tekil ürün izlenebilirlik altyapısı
- **solutionLede:** Ürünler üretim akışında operasyon bazlı tanınarak her adımda sistem üzerinde kayıt altına alındı. Böylece ürün geçmişi uçtan uca izlenebilir hale getirildi ve operasyon doğrulama süreci güçlendirildi.
- **steps:**
  - **no:** "01" | **title:** "Ürün Tanımlama" | **text:** "Ürünler izlenebilirlik akışına tekil kimlik ile dahil edildi."
  - **no:** "02" | **title:** "Operasyon Okuma" | **text:** "Her istasyonda ürün durumu ve operasyon geçişi otomatik doğrulandı."
  - **no:** "03" | **title:** "Anlık Kayıt" | **text:** "Süreç verileri gerçek zamanlı toplanarak merkezi sistemde tutuldu."
  - **no:** "04" | **title:** "Geri İzleme" | **text:** "Ürün geçmişi ve operasyon zinciri raporlanabilir, denetlenebilir hale getirildi."

##### Kullanılan Teknoloji / Ekipman (Tech Grid) (TR)
- **techEyebrow:** Kullanılan Teknoloji / Ekipman
- **techTitle:** Saha otomasyonu ve izlenebilirlik yazılım katmanı
- **techGrid:**
  - **tag:** "OKUMA" | **title:** "Kod Tanıma Altyapısı" | **text:** "Ürünlerin operasyon noktalarında otomatik tanınmasını ve doğrulanmasını sağlar."
  - **tag:** "OTOMASYON" | **title:** "PLC Tabanlı Akış Yönetimi" | **text:** "Operasyon geçişlerini yönetir, saha süreçlerinde tutarlılığı korur."
  - **tag:** "YAZILIM" | **title:** "İzlenebilirlik Uygulaması" | **text:** "Operasyon verilerini toplar, ürün geçmişini saklar ve raporlar."

##### Entegrasyonlar (Integrations) (TR)
- **integrationEyebrow:** Entegrasyonlar
- **integrationTitle:** Kurumsal sistemlerle veri senkronizasyonu
- **integrationDesc:** İzlenebilirlik verileri kurumsal sistemlerle paylaşılacak şekilde yapılandırılmış; ürün, operasyon ve durum verileri merkezi olarak izlenebilir hale getirilmiştir.
- **integrationList:**
  - **bold:** "Operasyon Verisi Paylaşımı" | **text:** "Ürün akış verileri merkezi sistemlere aktarılır ve süreç takibi tek noktadan yönetilir."
  - **bold:** "Raporlama ve Analiz" | **text:** "Toplanan izlenebilirlik verileri kalite ve üretim analizlerinde kullanılmak üzere hazır tutulur."

##### Kazanımlar ve Sonuçlar (Results Grid) (TR)
- **resultsEyebrow:** Kazanımlar / Sonuçlar
- **resultsTitle:** Stackpole üretiminde görünürlük ve kontrol artışı
- **resultsGrid:**
  - **title:** "Uçtan Uca Takip" | **text:** "Ürünler üretim sürecinin tamamında operasyon bazında izlenebilir hale geldi."
  - **title:** "Süreç Kontrol Gücü" | **text:** "Operasyon geçiş doğrulamaları ile üretim akışının kontrol seviyesi yükseltildi."
  - **title:** "Kalite Analiz Desteği" | **text:** "Tekil ürün geçmişi sayesinde kalite incelemeleri ve kök neden analizleri hızlandı."

##### Çağrı (CTA) (TR)
- **ctaTitle:** Üretim hattınızda tekil ürün izlenebilirliğini güçlendirmek ister misiniz?
- **ctaSubtitle:** Stackpole projesindeki yaklaşımı fabrikanıza uyarlayarak süreç görünürlüğünü artırabiliriz.
- **ctaPrimary:** İletişime Geç

---

#### 🇬🇧 İNGİLİZCE (EN) İÇERİK (`locale: "en"`)

- **Title (title):** Stackpole Traceability
- **Sector (sector / tagValue):** Automotive
- **Location (locationValue):** Turkey
- **Scope (scopeVal):** Software and Integration
- **Year (year):** Year
- **Short Description (description):** In the project implemented for Stackpole, operation-level traceability was established throughout production, improving process visibility and quality assurance.

##### Hero Section (EN)
- **heroTitleLine1:** End-to-End Production Tracking,
- **heroTitleLine2:** Individual Product Assurance for Stackpole
- **heroSub:** In the project implemented for Stackpole, operation-level traceability was established throughout production, improving process visibility and quality assurance.

##### Context (EN)
- **contextEyebrow:** Customer and Context
- **contextTitle:** Central traceability for uninterrupted production flow
- **contextP1:** In the Stackpole production environment, the goal was to track products individually across production steps, protect operation sequence integrity, and centrally manage process data.
- **contextP2:** The project created real-time visibility for quality and operations teams by making product history traceable from production to shipment.

##### Problem / Challenge (EN)
- **problemEyebrow:** Needs / Problems
- **problemTitle:** Risk of tracking gaps across operations
- **problemLede:** Inability to track product movement reliably at individual level across operations created risks for process control and quality validation.
- **problemList:**
  - **bold:** "Process Visibility" | **text:** "Lack of real-time status visibility during operation transitions made follow-up difficult."
  - **bold:** "Validation Need" | **text:** "A systematic mechanism was needed to validate that products follow the correct operation sequence."
  - **bold:** "Quality Assurance Risk" | **text:** "Fragmented historical records made quality review and root-cause analysis harder."

##### Solution (EN)
- **solutionEyebrow:** Solution
- **solutionTitle:** Operation-based individual product traceability infrastructure
- **solutionLede:** Products were recognized by operation in the production flow and recorded at each step in the system. This enabled end-to-end traceability of product history and strengthened operation validation.
- **steps:**
  - **no:** "01" | **title:** "Product Identification" | **text:** "Products were introduced into the traceability flow with unique identity."
  - **no:** "02" | **title:** "Operation Reading" | **text:** "Product status and operation transitions were validated automatically at each station."
  - **no:** "03" | **title:** "Real-Time Logging" | **text:** "Process data was collected in real time and stored in a central system."
  - **no:** "04" | **title:** "Backward Traceability" | **text:** "Product history and operation chain became reportable and auditable."

##### Technologies Used (Tech Grid) (EN)
- **techEyebrow:** Technology / Equipment Used
- **techTitle:** Field automation and traceability software layer
- **techGrid:**
  - **tag:** "READING" | **title:** "Code Recognition Infrastructure" | **text:** "Enables automatic product recognition and validation at operation points."
  - **tag:** "AUTOMATION" | **title:** "PLC-Based Flow Control" | **text:** "Manages operation transitions and maintains consistency in field processes."
  - **tag:** "SOFTWARE" | **title:** "Traceability Application" | **text:** "Collects operation data, stores product history, and provides reporting."

##### Integrations (EN)
- **integrationEyebrow:** Integrations
- **integrationTitle:** Data synchronization with enterprise systems
- **integrationDesc:** Traceability data was structured for enterprise sharing, making product, operation, and status information centrally manageable.
- **integrationList:**
  - **bold:** "Operation Data Sharing" | **text:** "Product flow data is transferred to central systems, enabling one-point process monitoring."
  - **bold:** "Reporting and Analytics" | **text:** "Collected traceability data is kept ready for quality and production analytics."

##### Results & Impact (Results Grid) (EN)
- **resultsEyebrow:** Benefits / Results
- **resultsTitle:** Improved visibility and control in Stackpole production
- **resultsGrid:**
  - **title:** "End-to-End Tracking" | **text:** "Products became traceable by operation across the complete production process."
  - **title:** "Stronger Process Control" | **text:** "Operation transition validation increased production flow control capability."
  - **title:** "Quality Analysis Support" | **text:** "Individual product history accelerated quality investigations and root-cause analysis."

##### Call to Action (CTA) (EN)
- **ctaTitle:** Would you like to strengthen individual product traceability on your line?
- **ctaSubtitle:** We can adapt the Stackpole project approach to your factory and increase process visibility.
- **ctaPrimary:** Contact Us

---

#### 🇷🇴 ROMENCE (RO) İÇERİK (`locale: "ro"`)

- **Titlu (title):** Stackpole - Trasabilitate
- **Sector (sector / tagValue):** Industria auto
- **Locație (locationValue):** Turcia
- **Domeniu de Aplicare (scopeVal):** Software și Integrare
- **An (year):** An
- **Descriere Scurtă (description):** În proiectul implementat pentru Stackpole, trasabilitatea pe operații a fost asigurată pe întregul proces de producție, crescând vizibilitatea procesului și nivelul de asigurare a calității.

##### Secțiunea Hero (RO)
- **heroTitleLine1:** Urmărire End-to-End în Producție,
- **heroTitleLine2:** Asigurare pe Produs Individual pentru Stackpole
- **heroSub:** În proiectul implementat pentru Stackpole, trasabilitatea pe operații a fost asigurată pe întregul proces de producție, crescând vizibilitatea procesului și nivelul de asigurare a calității.

##### Context (RO)
- **contextEyebrow:** Client și Context
- **contextTitle:** Trasabilitate centralizată pentru flux de producție fără întreruperi
- **contextP1:** În mediul de producție Stackpole, obiectivul a fost urmărirea individuală a produselor pe pașii de producție, păstrarea integrității secvenței operaționale și managementul centralizat al datelor de proces.
- **contextP2:** Proiectul a oferit vizibilitate în timp real echipelor de calitate și operațiuni prin trasabilitatea istoricului produsului de la producție până la expediere.

##### Problemă / Provocare (RO)
- **problemEyebrow:** Nevoie / Problemă
- **problemTitle:** Risc de goluri de urmărire între operații
- **problemLede:** Imposibilitatea urmăririi fiabile a mișcărilor produsului la nivel individual între operații crea riscuri pentru controlul procesului și validarea calității.
- **problemList:**
  - **bold:** "Vizibilitate de Proces" | **text:** "Lipsa vizibilității în timp real la tranzițiile operaționale îngreuna monitorizarea."
  - **bold:** "Necesitate de Validare" | **text:** "Era necesar un mecanism sistematic de validare a secvenței corecte a operațiilor."
  - **bold:** "Risc de Asigurare a Calității" | **text:** "Istoricul fragmentat îngreuna investigațiile de calitate și analiza cauzei rădăcină."

##### Soluție (RO)
- **solutionEyebrow:** Soluție
- **solutionTitle:** Infrastructură de trasabilitate individuală bazată pe operații
- **solutionLede:** Produsele au fost recunoscute pe operații în fluxul de producție și înregistrate la fiecare pas în sistem. Astfel, istoricul produsului a devenit trasabil cap-coadă, iar validarea operațională a fost consolidată.
- **steps:**
  - **no:** "01" | **title:** "Identificare Produs" | **text:** "Produsele au fost incluse în fluxul de trasabilitate cu identitate unică."
  - **no:** "02" | **title:** "Citire Operațională" | **text:** "Statusul produsului și tranzițiile operaționale au fost validate automat la fiecare stație."
  - **no:** "03" | **title:** "Înregistrare în Timp Real" | **text:** "Datele de proces au fost colectate în timp real și stocate centralizat."
  - **no:** "04" | **title:** "Trasabilitate Retroactivă" | **text:** "Istoricul produsului și lanțul operațional au devenit raportabile și auditabile."

##### Tehnologii Utilizate (Tech Grid) (RO)
- **techEyebrow:** Tehnologie / Echipament Utilizat
- **techTitle:** Automatizare de teren și strat software de trasabilitate
- **techGrid:**
  - **tag:** "CITIRE" | **title:** "Infrastructură de Recunoaștere Cod" | **text:** "Permite recunoașterea și validarea automată a produselor în punctele operaționale."
  - **tag:** "AUTOMATIZARE" | **title:** "Control Flux pe bază PLC" | **text:** "Gestionează tranzițiile operaționale și menține consistența proceselor din teren."
  - **tag:** "SOFTWARE" | **title:** "Aplicație de Trasabilitate" | **text:** "Colectează date operaționale, păstrează istoricul produsului și oferă raportare."

##### Integrări (RO)
- **integrationEyebrow:** Integrări
- **integrationTitle:** Sincronizare date cu sisteme enterprise
- **integrationDesc:** Datele de trasabilitate au fost structurate pentru partajare enterprise, astfel încât informațiile de produs, operație și status să fie gestionate central.
- **integrationList:**
  - **bold:** "Partajare Date Operaționale" | **text:** "Datele de flux ale produselor sunt transferate către sistemele centrale pentru monitorizare unificată."
  - **bold:** "Raportare și Analiză" | **text:** "Datele colectate sunt pregătite pentru analize de calitate și performanță de producție."

##### Rezultate și Câștiguri (Results Grid) (RO)
- **resultsEyebrow:** Beneficii / Rezultate
- **resultsTitle:** Vizibilitate și control sporite în producția Stackpole
- **resultsGrid:**
  - **title:** "Urmărire End-to-End" | **text:** "Produsele au devenit trasabile pe operații pe întregul proces de producție."
  - **title:** "Control de Proces Consolidat" | **text:** "Validarea tranzițiilor operaționale a crescut nivelul de control al fluxului de producție."
  - **title:** "Suport pentru Analize de Calitate" | **text:** "Istoricul individual al produsului a accelerat investigațiile și analiza cauzei rădăcină."

##### Îndemn la Acțiune (CTA) (RO)
- **ctaTitle:** Doriți să consolidați trasabilitatea pe produs individual în linia dumneavoastră?
- **ctaSubtitle:** Putem adapta abordarea proiectului Stackpole la fabrica dumneavoastră pentru vizibilitate operațională crescută.
- **ctaPrimary:** Contactați-ne

