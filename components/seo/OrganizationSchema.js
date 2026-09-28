/**
 * OrganizationSchema.js
 *
 * Merkezi, yeniden kullanılabilir Organization schema verisi.
 * Schema.org Organization + LocalBusiness kombinasyonu;
 * Google Rich Results için gerekli tüm alanları içerir.
 *
 * Kullanım:
 *   import { getOrganizationSchema } from '../../components/seo/OrganizationSchema';
 *   const org = getOrganizationSchema();
 *
 * @see https://schema.org/Organization
 */

export const ORGANIZATION_ID = 'https://www.traceability.com.tr/#organization';
export const SITE_URL = 'https://www.traceability.com.tr';
export const LOGO_URL = 'https://www.traceability.com.tr/siskon-logo-header.svg';

/**
 * Tam Organization schema nesnesi döndürür.
 * @returns {object} Schema.org Organization
 */
export function getOrganizationSchema() {
  return {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    'name': 'Traceability | Siskon',
    'alternateName': [
      'Siskon Otomasyon ve Yazılım A.Ş.',
      'Siskon Romania SRL',
      'traceability.com.tr',
    ],
    'url': SITE_URL,
    'logo': {
      '@type': 'ImageObject',
      '@id': `${SITE_URL}/#logo`,
      'url': LOGO_URL,
      'width': 200,
      'height': 60,
      'caption': 'Traceability | Siskon Logo',
    },
    'image': LOGO_URL,
    'description':
      'Siskon, endüstriyel izlenebilirlik, MES ve akıllı fabrika çözümleri alanında 25+ yıllık deneyime sahip lider teknoloji şirketidir. RFID, RTLS, WMS, Poka Yoke ve uçtan uca MES/ERP entegrasyonu çözümleri sunar.',
    'foundingDate': '1996',
    'numberOfEmployees': {
      '@type': 'QuantitativeValue',
      'minValue': 50,
      'maxValue': 200,
    },
    'contactPoint': [
      {
        '@type': 'ContactPoint',
        'telephone': '+90-232-245-00-76',
        'contactType': 'customer service',
        'contactOption': 'TollFree',
        'areaServed': 'TR',
        'availableLanguage': ['Turkish', 'English'],
        'hoursAvailable': {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          'opens': '09:00',
          'closes': '18:00',
        },
      },
      {
        '@type': 'ContactPoint',
        'telephone': '+40-368-402-002',
        'contactType': 'customer service',
        'areaServed': 'RO',
        'availableLanguage': ['Romanian', 'English'],
        'hoursAvailable': {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          'opens': '09:00',
          'closes': '18:00',
        },
      },
    ],
    'address': [
      {
        '@type': 'PostalAddress',
        'streetAddress':
          'Dokuz Eylül Üniversitesi Merkez Kampüsü DEPARK Beta Binası, Adatepe Mah. Doğuş Cad. No:207/AG Kat:2 No:202',
        'addressLocality': 'Buca / İzmir',
        'postalCode': '35390',
        'addressCountry': 'TR',
      },
      {
        '@type': 'PostalAddress',
        'streetAddress':
          'Strada Turnului Nr. 25, Corp M.U.M., Scara 3, Birou 5, Etaj 2',
        'addressLocality': 'Brașov',
        'postalCode': '500152',
        'addressCountry': 'RO',
      },
    ],
    'sameAs': [
      'https://www.linkedin.com/company/siskonyazilimveotomasyon',
      'https://www.linkedin.com/company/siskonromania/',
      'https://x.com/siskonyazilim',
      'https://x.com/siskonromania',
      'https://www.instagram.com/siskonyazilimveotomasyon/',
      'https://www.instagram.com/siskon_romania',
      'https://www.youtube.com/channel/UCpEyoqwoPBYzUcyI5lCG0Wg',
      'https://siskon.com.tr',
    ],
    'knowsAbout': [
      'Industrial Traceability',
      'İzlenebilirlik',
      'Endüstriyel İzlenebilirlik',
      'MES - Manufacturing Execution System',
      'Üretim Yürütme Sistemi',
      'RFID Systems',
      'RTLS - Real Time Location Systems',
      'Gerçek Zamanlı Konum Takibi',
      'WMS - Warehouse Management Systems',
      'Depo Yönetim Sistemi',
      'Poka Yoke Quality Control',
      'Hata Önleme Sistemi',
      'Industry 4.0',
      'Endüstri 4.0',
      'Akıllı Fabrika',
      'Smart Manufacturing',
      'ERP/MES Integration',
    ],
    'areaServed': ['TR', 'RO', 'DE', 'IT', 'PL'],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Industrial Traceability Solutions',
      'url': `${SITE_URL}/catalog/solutions`,
    },
  };
}

/**
 * FAQPage schema verisi döndürür — 3 dil desteklidir.
 * @param {string} locale - 'tr' | 'en' | 'ro'
 * @param {string} pageUrl - Sayfanın tam URL'i (canonical)
 * @param {Array<{question: string, answer: string}>} [customFaqs] - Özel FAQ listesi (opsiyonel)
 * @returns {object} Schema.org FAQPage
 */
export function getFaqPageSchema(locale = 'tr', pageUrl = SITE_URL, customFaqs = null) {
  const faqsByLocale = {
    tr: [
      {
        question: 'Endüstriyel izlenebilirlik sistemi nedir ve neden gereklidir?',
        answer:
          'Endüstriyel izlenebilirlik sistemi; hammaddeden nihai ürüne kadar her üretim adımının kayıt altına alındığı, anlık takip ve geriye dönük izlemenin yapılabildiği entegre yazılım ve donanım altyapısıdır. Kalite standartlarına (IATF 16949, ISO 9001, FDA vb.) uyum, geri çağırma maliyetlerini minimuma indirme ve üretim süreçlerini optimize etme açısından kritik öneme sahiptir.',
      },
      {
        question: 'RFID ile barkod tabanlı izlenebilirlik sistemi arasındaki fark nedir?',
        answer:
          'Barkod sistemleri optik okuma gerektirir, tek seferde bir etiket okur ve etiketin görüş alanında olması zorunludur. RFID sistemleri ise radyo frekansıyla çalışır; görüş alanı olmaksızın aynı anda onlarca etiketi okuyabilir, metal ve sıvı ortamlarda da çalışabilir, üzerine veri yazılabilir ve daha uzun mesafeden okuma yapılabilir. Yüksek hacimli ve hızlı üretim hatlarında RFID belirgin şekilde üstündür.',
      },
      {
        question: 'MES sistemi ERP ile nasıl entegre edilir?',
        answer:
          'MES-ERP entegrasyonu; REST API, OPC-UA, SOAP veya EDI protokolleri aracılığıyla gerçek zamanlı veri alışverişiyle sağlanır. Siskon, SAP, Oracle ERP, Microsoft Dynamics, Logos ve diğer lider ERP sistemleriyle önceden tanımlı konektörler sunmaktadır. Entegrasyon; üretim emirleri, kalite verileri, stok hareketleri ve OEE metrikleri için çift yönlü veri akışını kapsar.',
      },
      {
        question: 'Poka Yoke sistemi üretim hatalarını nasıl önler?',
        answer:
          'Poka Yoke (hata önleme) sistemleri; kameralar, sensörler, barcode/RFID okuyucular ve dijital tork anahtarları aracılığıyla her montaj adımında doğrulama yapar. Yanlış parça takılması, montaj sırası hatası veya tork sapması gibi durumlarda hat anında durdurulur ve operatör uyarılır. Bu sayede sıfır hatalı üretim hedefi gerçekleştirilebilir ve garantili kalite belgesi oluşturulabilir.',
      },
      {
        question: 'Traceability sistemlerini hangi sektörlere uyguluyorsunuz?',
        answer:
          'Otomotiv (tier 1 ve tier 2), beyaz eşya, gıda & içecek, ilaç, kimya, elektronik ve savunma sanayii başta olmak üzere 20+ sektörde 200+ referans projemiz mevcuttur. BSH, Bosch, Vestel, Philsa-PMI, Mey-Diageo, Haier, Delphi, Borgwarner, Nemak ve Maxion gibi global ve yerel lider markalara hizmet vermekteyiz.',
      },
      {
        question: 'Proje uygulama süreci ne kadar sürer?',
        answer:
          'Proje kapsamına bağlı olarak değişmekle birlikte, tipik bir izlenebilirlik projesi 4-16 hafta arasında tamamlanmaktadır. Fizibilite analizi, sistem tasarımı, yazılım geliştirme, saha kurulumu, entegrasyon testleri ve operatör eğitimi aşamalarını kapsayan yapılandırılmış proje metodolojimizle zaman ve bütçe aşımlarını minimize ediyoruz.',
      },
    ],
    en: [
      {
        question: 'What is an industrial traceability system and why is it necessary?',
        answer:
          'An industrial traceability system is an integrated software and hardware infrastructure that records every production step from raw material to finished product, enabling real-time tracking and retrospective tracing. It is critical for compliance with quality standards (IATF 16949, ISO 9001, FDA, etc.), minimizing recall costs and optimizing production processes.',
      },
      {
        question: 'What is the difference between RFID and barcode-based traceability?',
        answer:
          'Barcode systems require optical reading, read one tag at a time, and require line-of-sight. RFID systems operate via radio frequency; they can read dozens of tags simultaneously without line-of-sight, work in metal and liquid environments, allow data to be written to tags, and read from greater distances. RFID is significantly superior in high-volume and high-speed production lines.',
      },
      {
        question: 'How is MES integrated with ERP?',
        answer:
          'MES-ERP integration is achieved through real-time data exchange via REST API, OPC-UA, SOAP or EDI protocols. Siskon offers pre-built connectors for SAP, Oracle ERP, Microsoft Dynamics, Logos and other leading ERP systems. The integration covers bidirectional data flow for production orders, quality data, inventory movements and OEE metrics.',
      },
      {
        question: 'How does Poka Yoke prevent production errors?',
        answer:
          'Poka Yoke (error-proofing) systems verify each assembly step through cameras, sensors, barcode/RFID readers and digital torque wrenches. In case of wrong part installation, assembly sequence error or torque deviation, the line is immediately stopped and the operator is alerted. This enables zero-defect manufacturing and creation of certified quality records.',
      },
      {
        question: 'Which industries do you serve with Traceability systems?',
        answer:
          'We have 200+ reference projects across 20+ sectors including automotive (tier 1 and tier 2), white goods, food & beverage, pharmaceutical, chemical, electronics and defense. We serve global and local leading brands such as BSH, Bosch, Vestel, Philsa-PMI, Mey-Diageo, Haier, Delphi, Borgwarner, Nemak and Maxion.',
      },
      {
        question: 'How long does the project implementation process take?',
        answer:
          'Although it varies depending on project scope, a typical traceability project is completed in 4-16 weeks. Our structured project methodology covering feasibility analysis, system design, software development, field installation, integration testing and operator training minimizes time and budget overruns.',
      },
    ],
    ro: [
      {
        question: 'Ce este un sistem de trasabilitate industrială și de ce este necesar?',
        answer:
          'Un sistem de trasabilitate industrială este o infrastructură integrată de software și hardware care înregistrează fiecare pas de producție, de la materia primă la produsul finit, permițând urmărirea în timp real și trasabilitatea retrospectivă. Este esențial pentru conformitatea cu standardele de calitate (IATF 16949, ISO 9001, FDA etc.), minimizarea costurilor de retragere și optimizarea proceselor de producție.',
      },
      {
        question: 'Care este diferența dintre trasabilitatea RFID și cea bazată pe coduri de bare?',
        answer:
          'Sistemele cu coduri de bare necesită citire optică, citesc un singur tag pe rând și necesită vizibilitate directă. Sistemele RFID funcționează prin radiofrecvență; pot citi zeci de taguri simultan fără vizibilitate directă, funcționează în medii cu metal și lichide, permit scrierea datelor pe taguri și citesc de la distanțe mai mari. RFID este semnificativ superior în liniile de producție cu volum și viteză ridicate.',
      },
      {
        question: 'Cum se integrează MES cu ERP?',
        answer:
          'Integrarea MES-ERP se realizează prin schimb de date în timp real prin protocoale REST API, OPC-UA, SOAP sau EDI. Siskon oferă conectori pre-construiți pentru SAP, Oracle ERP, Microsoft Dynamics, Logos și alte sisteme ERP de top. Integrarea acoperă fluxul bidirecțional de date pentru comenzile de producție, datele de calitate, mișcările de stoc și metricile OEE.',
      },
      {
        question: 'Cum previne Poka Yoke erorile de producție?',
        answer:
          'Sistemele Poka Yoke (prevenirea erorilor) verifică fiecare pas de asamblare prin camere, senzori, cititoare de coduri de bare/RFID și chei dinamometrice digitale. În caz de instalare greșită a piesei, eroare de secvență de asamblare sau deviere de cuplu, linia este oprită imediat și operatorul este alertat. Aceasta permite fabricarea fără defecte și crearea de înregistrări de calitate certificate.',
      },
      {
        question: 'În ce industrii aplicați sistemele Traceability?',
        answer:
          'Avem 200+ proiecte de referință în 20+ sectoare, inclusiv auto (tier 1 și tier 2), electrocasnice, alimente și băuturi, produse farmaceutice, chimie, electronică și apărare. Servim mărci globale și locale de top precum BSH, Bosch, Vestel, Philsa-PMI, Mey-Diageo, Haier, Delphi, Borgwarner, Nemak și Maxion.',
      },
      {
        question: 'Cât durează procesul de implementare a proiectului?',
        answer:
          'Deși variază în funcție de domeniul de aplicare al proiectului, un proiect tipic de trasabilitate este finalizat în 4-16 săptămâni. Metodologia noastră structurată de proiect, care acoperă analiza de fezabilitate, proiectarea sistemului, dezvoltarea software, instalarea pe teren, testele de integrare și instruirea operatorilor, minimizează depășirile de timp și buget.',
      },
    ],
  };

  const faqs = customFaqs || faqsByLocale[locale] || faqsByLocale.tr;

  return {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    'mainEntity': faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
      },
    })),
  };
}
