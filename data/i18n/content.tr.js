export const contentTr = {
  heroSlides: [
    {
      id: 1,
      title: 'Akıllı Fabrikalar İçin Uçtan Uca İzlenebilirlik Çözümleri',
      subtitle: 'Hammadde girişinden sevkiyata kadar tüm üretim süreçlerini dijital olarak izleyin. Ürün, proses ve kalite verilerine tek platform üzerinden anında ve geçmişe dönük olarak ulaşın.',
    },
    {
      id: 2,
      title: 'Gerçek Zamanlı Kontrol, Sıfır Hata',
      subtitle: 'Barkod, RFID ve kamera tabanlı doğrulamalar ile hataları oluştuğu anda tespit edin. Yanlış ürün, yanlış montaj ve yanlış sevkiyat risklerini üretim sırasında önleyin.',
    },
    {
      id: 3,
      title: 'POKA YOKE',
      subtitle: 'Akıllı doğrulama mekanizmaları ile operatör kaynaklı hataları oluşmadan önleyin. Doğru parçanın doğru istasyonda ve doğru sırayla kullanılmasını güvence altına alın.',
    },
  ],
  faq: {
    eyebrow: '',
    title: 'İzlenebilirlik Sistemleri Hakkında Sıkça Sorulan Sorular',
    items: [
      {
        id: 1,
        question: 'Endüstriyel Takip ve İzleme (Track & Trace) nedir?',
        answer: 'Track & Trace, üretim süreçlerinde her ürüne, lota, koliye veya palete benzersiz bir kimlik atayarak hammadde girişinden sevkiyata kadar tüm aşamaların dijital olarak kayıt altına alınmasını sağlayan endüstriyel izlenebilirlik sistemidir. Sistem sayesinde kaynak malzeme, üretim hattı, kalite parametreleri, operatör bilgisi ve zaman damgası gibi verilere anında ulaşılabilir. Barkod, Data Matrix veya RFID gibi tanımlama teknolojileri ile toplanan bu veriler, üretim izlenebilirliğini güçlendirir, kalite sapmalarının hızlı tespitini sağlar ve sektörel denetim gerekliliklerine uyumu destekler.',
      },
      {
        id: 2,
        question: 'Agregasyon nedir ve neden kritiktir?',
        answer: 'Agregasyon, bireysel ürünlerin benzersiz kimliklerinin içinde bulundukları koli, kasa ve palet gibi üst ambalajlara bağlanarak dijital bir ebeveyn–çocuk hiyerarşisi oluşturulmasıdır. GS1 standartlarına uygun bir yapıda her palet SSCC koduyla tanımlanır ve içerdiği tüm birimlerin izlenebilirlik verisine bu kod üzerinden ulaşılabilir. Agregasyon sayesinde sevkiyat doğrulama, palet izlenebilirliği ve geri çağırma süreçleri daha hızlı ve güvenilir şekilde yönetilir. Hiyerarşideki herhangi bir ilişkilendirme hatası, ürünün hattan ayrılmasını veya sevkiyatın durdurulmasını tetikleyebilir.',
      },
      {
        id: 3,
        question: 'Serileştirme ile toplu izleme arasındaki fark nedir?',
        answer: 'Serileştirme, her bireysel ürüne benzersiz bir seri numarası atayarak birim düzeyinde izlenebilirlik sağlar. GS1 SGTIN standardı bu yaklaşımın en yaygın uygulamasıdır ve hedefli geri çağırma ile sahteciliğe karşı koruma senaryolarında kritik rol oynar. Lot bazlı izleme ise aynı üretim koşullarında üretilen ürünleri ortak bir parti numarası altında gruplar; kullanılan hammaddelerin, proses parametrelerinin ve kalite sonuçlarının toplu yönetimini kolaylaştırır. Proje kapsamına göre her iki yöntem birlikte uygulanarak hem birim hem lot düzeyinde kapsamlı malzeme izlenebilirliği elde edilebilir.',
      },
      {
        id: 4,
        question: 'Kamera tabanlı doğrulama sistemleri nasıl çalışır?',
        answer: 'Üretim hattında lazer veya inkjet ile uygulanan barkod, Data Matrix veya QR kodlar, endüstriyel kameralar tarafından gerçek zamanlı olarak taranır. Kamera, her kodun okunabilirliğini, kontrastını, boyutlarını ve veri doğruluğunu otomatik olarak kontrol eder. Okunamayan veya hatalı tespit edilen kodlara sahip ürünler, red mekanizması aracılığıyla hattan çıkarılır. Bu kamera tabanlı kod doğrulama süreci, yalnızca kaliteli ve doğrulanmış kodlara sahip ürünlerin bir sonraki aşamaya geçmesini güvence altına alır; tedarik zincirinde yaşanabilecek okuma hataları ve sevkiyat sorunları üretim noktasında önlenir.',
      },
      {
        id: 5,
        question: 'İzlenebilirlikte hangi kodlama teknolojileri kullanılır?',
        answer: 'Track & Trace sistemlerinde farklı kodlama ve tanımlama teknolojileri, uygulamanın gereksinimlerine göre seçilir. Lazer kodlama, sarf malzemesi gerektirmeden kalıcı işaretleme sağlar ve yüksek hızlı hatlar için uygundur; ancak bazı yüzey ve renklerde kontrast sınırlılığı yaşanabilir. İnkjet kodlama, yüksek kontrastlı ve büyük boyutlu baskılar için özellikle koli ve palet etiketlemesinde tercih edilir. 2D Data Matrix, küçük alanda yüksek veri kapasitesi ve kısmi hasara karşı dayanıklılığı nedeniyle serileştirme uygulamalarında sektör standardıdır. RFID ise görüş hattı gerektirmeden toplu okuma avantajı sunar ve palet takibi, depo yönetimi gibi lojistik senaryolarda güçlü bir alternatiftir. Teknoloji seçimi hat hızına, ambalaj malzemesine ve kullanım ortamına bağlıdır.',
      },
      {
        id: 6,
        question: 'ERP/MES entegrasyonu nasıl uygulanır?',
        answer: 'Endüstriyel izlenebilirlik sistemi, etkin çalışabilmek için mevcut kurumsal altyapıyla entegre edilir. Üretim hattında oluşturulan seri numarası, lot ve agregasyon verileri OPC UA gibi endüstriyel protokoller aracılığıyla MES sistemine aktarılır. MES, üretim emri takibi, kalite durumu ve proses verisi yönetimini üstlenirken WMS, depo lokasyonu, palet içeriği ve sevkiyat doğrulama süreçlerini yönetir. Bu veriler REST API, SOAP veya özel konektörler aracılığıyla ERP platformlarıyla (SAP, Oracle, Microsoft Dynamics gibi) çift yönlü senkronize edilir. ERP, MES ve WMS entegrasyonu, manuel veri girişini ortadan kaldırır ve üretimden sevkiyata kadar kurum genelinde veri bütünlüğü sağlar.',
      },
      {
        id: 7,
        question: 'Yönetmeliklere ve GS1 standartlarına uyum nasıl sağlanır?',
        answer: 'İzlenebilirlik gereksinimleri sektöre, ülkeye ve müşteri taleplerine göre farklılık gösterir. Tütün ve ilaç gibi düzenlemeye tabi sektörlerde yasal olarak zorunlu takip sistemleri bulunurken; otomotiv, gıda ve genel imalat sektörlerinde izlenebilirlik genellikle kalite standartları, müşteri gereksinimleri veya iç denetim politikaları tarafından yönlendirilir. GS1 standartları bu yapının teknik temelini oluşturur: ürün kimliği için GTIN, serileştirilmiş birimler için SGTIN ve palet gibi lojistik birimler için SSCC kullanılır. Sistemlerimiz GS1 uyumlu tanımlayıcıları otomatik olarak üretir ve denetim raporlarını yapılandırarak kalite izlenebilirliği ve uyum süreçlerini hızlandırır.',
      },
      {
        id: 8,
        question: 'Tam uygulama ne kadar sürer?',
        answer: 'Devreye alma süresi, üretim hattı sayısına, proses karmaşıklığına ve entegrasyon kapsamına göre değişir. Proje; süreç analizi, mimari tasarım, donanım kurulumu (yazıcılar, kameralar, red mekanizmaları), yazılım yapılandırması, MES/ERP/WMS entegrasyonu, saha testleri ve ekip eğitimini kapsar. Üretim üzerindeki etkiyi en aza indirmek için aşamalı devreye alma yaklaşımı uygulanır: öncelikli hatlar belirlenir, pilot uygulama doğrulandıktan sonra diğer hatlara kademeli geçiş yapılır. Proje kapsamına bağlı olarak süre ve aşamalar başlangıçta yapılan teknik analiz sırasında netleştirilir.',
      },
    ],
  },
  technologyCapabilities: [
    {
      title: 'POKA YOKE',
      description: 'Poka-Yoke çözümleri, akıllı kontrol ve doğrulama teknolojileriyle üretim ve montaj süreçlerindeki insan, makine ve proses kaynaklı hataları oluşmadan önler veya anında tespit eder.',
    },
    {
      title: 'RFID ve Barkodlar',
      description: 'RFID ve barkod teknolojileri, ürün ve malzemelerin otomatik olarak tanımlanmasını, süreç boyunca izlenmesini ve verilerin güvenilir şekilde kayıt altına alınmasını sağlar.',
    },
    {
      title: 'Görüntü İşleme',
      description: 'Görüntü işleme tabanlı kontrol sistemleri, üretim hatalarını yüksek hız ve tutarlılıkla otomatik olarak tespit ederek kalite kontrol süreçlerini güçlendirir.',
    },
  ],
  performanceMetrics: {
    labels: ['Proje', 'Ülke', 'Fabrika', 'Ekip üyesi'],
  },
  solutions: {
    1: {
      title: 'Tekil Ürün Takibi',
      description: 'Tekil ürün takibi; üretimdeki her ürünün seri numarası, barkod, QR kod, Data Matrix veya RFID ile benzersiz olarak kimliklendirilmesini sağlar.',
      detail: 'Tekil ürün takibi; üretimdeki her ürünün seri numarası, barkod, QR kod, Data Matrix veya RFID ile benzersiz olarak kimliklendirilmesini sağlar. Ürünün ham madde girişinden üretim, montaj, kalite kontrol, paketleme ve sevkiyata kadar tüm yaşam döngüsü dijital olarak kayıt altına alınır.\n\nMakine bilgileri, proses parametreleri, operatör kayıtları, kullanılan komponentler ve kalite sonuçları ürünün dijital geçmişiyle ilişkilendirilir. ERP, MES, PLC, SCADA, kamera ve markalama sistemleriyle entegre çalışan yapı; uçtan uca izlenebilirlik, ürün soyağacı ve hızlı kök neden analizi sunar.',
      detailBulletsHeading: 'Avantajları:',
      detailBullets: [
        'Seri numarası ve kodlama altyapısı ile her ürün benzersiz tanımlanır, ürün karışıklıkları önlenir.',
        'Kamera ve barkod doğrulama ile hatalı veya okunamayan kodlar üretim hattında otomatik tespit edilir.',
        'Ürün, komponent ve proses verileri eşleştirilerek geriye ve ileriye doğru izlenebilirlik sağlanır.',
        'Kalite, hurda ve yeniden işleme kayıtları tutulduğu için hata nedenlerine hızlıca ulaşılır.',
        'ERP ve MES entegrasyonu sayesinde manuel veri girişi azalır ve veri bütünlüğü korunur.',
      ],
    },
    2: {
      title: 'Lot / Parti Takibi',
      description: 'Lot ve parti takibi; aynı ham madde, reçete veya proses koşullarıyla üretilen ürün groups ortak bir lot ya da batch numarası altında izlenmesini sağlar.',
      detail: 'Lot ve parti takibi; aynı ham madde, reçete veya proses koşullarıyla üretilen ürün gruplarının ortak bir lot ya da batch numarası altında izlenmesini sağlar. Ham madde kabulünden üretim, kalite kontrol, paketleme, depolama ve sevkiyata kadar tüm hareketler kayıt altına alınır.\n\nHam madde lotları, reçete bilgileri, üretim parametreleri, laboratuvar sonuçları ve sevkiyat kayıtları ilgili partiyle ilişkilendirilir. Böylece kalite problemi veya ürün geri çağırma durumunda yalnızca etkilenen partiler hızlıca belirlenebilir.',
      detailBulletsHeading: 'Avantajları:',
      detailBullets: [
        'Ham madde lotu ile mamul parti eşleştirilir, malzemenin hangi ürünlerde kullanıldığı kolayca bulunur.',
        'Reçete ve batch verileri kaydedilir, proses uygunluğu ve üretim standardı doğrulanır.',
        'Son kullanma tarihi ve raf ömrü takibi yapılır, stok kayıpları azaltılır.',
        'Karantina, bloke ve kalite onay süreçleri dijitalleştirilir, uygunsuz ürün sevkiyatı önlenir.',
        'İleriye ve geriye doğru izlenebilirlik sayesinde ürün geri çağırma süreçleri hızlanır.',
      ],
    },
    3: {
      title: 'Pick to Light',
      description: 'Pick to Light; montaj, kit hazırlama, sipariş toplama ve hat besleme operasyonlarında operatörü ışıklı göstergelerle doğru malzemeye yönlendiren dijital operatör destek sistemidir.',
      detail: 'Pick to Light; montaj, kit hazırlama, sipariş toplama ve hat besleme operasyonlarında operatörü ışıklı göstergelerle doğru malzemeye yönlendiren dijital operatör destek sistemidir. Sistem, üretim emri veya ürün reçetesine göre kullanılması gereken parçayı ve işlem sırasını otomatik olarak belirler.\n\nBarkod, RFID, sensör, kamera, tork cihazı, PLC ve HMI sistemleriyle entegre çalışan çözüm; yanlış parça kullanımını, eksik montajı ve operasyon sırası hatalarını önleyen bir poka-yoke altyapısı oluşturur.',
      detailPreBullets: [
        'Hatalı ürün oranını düşürerek sürdürülebilir kalite standardı sağlanmasına katkı verir.',
        'Yeniden işleme (rework) sürelerini azaltarak verimliliği artırır ve müşteri memnuniyetini destekler.',
      ],
      detailBulletsHeading: 'Avantajları:',
      detailBullets: [
        'Işıklı raf yönlendirmesi ile operatör doğru parçaya yönlendirilir, seçim hataları azalır.',
        'Barkod veya RFID doğrulaması ile yanlış komponent kullanımı otomatik olarak engellenir.',
        'Operasyon sırası dijital olarak yönetilir, eksik veya atlanan montaj adımları önlenir.',
        'İşlem ve çevrim süreleri kaydedilir, darboğaz ve performans analizleri yapılabilir.',
        'ERP ve MES entegrasyonu sayesinde ürün modeline göre dinamik iş akışı oluşturulur.',
      ],
    },
    4: {
      title: 'RTLS – Gerçek Zamanlı Konum Sistemleri',
      description: 'RTLS çözümleri; tesis içerisindeki ürün, palet, kasa, taşıma arabası, forklift ve ekipmanların gerçek zamanlı olarak konumlandırılmasını sağlar.',
      detail: 'RTLS çözümleri; tesis içerisindeki ürün, palet, kasa, taşıma arabası, forklift ve ekipmanların gerçek zamanlı olarak konumlandırılmasını sağlar. RTLS sistemlerinde çoğunlukla radyo frekansı tabanlı teknolojiler kullanılır. İhtiyaca göre ek olarak kızılötesi veya ultrason gibi optik ve akustik yöntemlerden de yararlanılabilir. Bu teknolojiler kullanılarak varlıkların mevcut konumu ve geçmiş hareketleri dijital ortamda izlenir.\n\nSistem; malzeme akışlarını, bekleme sürelerini, taşıma rotalarını ve bölge giriş-çıkışlarını analiz ederek iç lojistik süreçlerinin görünür hale gelmesini sağlar. ERP, MES, WMS ve bakım sistemleriyle entegrasyon sayesinde konum verileri operasyonel süreçlerin otomatik yönetiminde kullanılabilir.',
      detailBulletsHeading: 'Avantajları:',
      detailBullets: [
        'Gerçek zamanlı varlık takibi ile malzeme ve ekipman arama süreleri azaltılır.',
        'Bölge giriş-çıkış takibi ile yanlış lokasyon ve yetkisiz hareketler tespit edilir.',
        'Bekleme süresi ve rota analizi sayesinde iç lojistik darboğazları görünür hale gelir.',
        'Forklift ve taşıma ekipmanlarının hareketleri izlenir, kullanım verimliliği artırılır.',
        'MES ve WMS entegrasyonu ile varlığın konumuna göre otomatik iş akışları başlatılabilir.',
      ],
    },
    5: {
      title: 'Depo Yönetim Sistemleri',
      description: 'Depo Yönetim Sistemi; ham madde, yarı mamul, mamul ve yardımcı malzemelerin mal kabulden sevkiyata kadar tüm depo operasyonlarını dijital olarak yönetir.',
      detail: 'Depo Yönetim Sistemi; ham madde, yarı mamul, mamul ve yardımcı malzemelerin mal kabulden sevkiyata kadar tüm depo operasyonlarını dijital olarak yönetir. Barkod, QR kod, Data Matrix, RFID ve el terminali teknolojileriyle stok hareketleri gerçek zamanlı olarak kayıt altına alınır.\n\nSistem; lokasyon yönetimi, lot ve seri numarası takibi, kalite kontrol, toplama, paketleme ve sevkiyat doğrulama süreçlerini tek platformda birleştirir. ERP, MES ve WMS entegrasyonu sayesinde stok doğruluğu artırılır ve manuel işlem kaynaklı hatalar azaltılır.',
      detailBulletsHeading: 'Avantajları:',
      detailBullets: [
        'Barkod ve RFID ile mal kabul doğrulanır, yanlış ürün ve miktar girişleri önlenir.',
        'Raf ve lokasyon yönetimi ile ürünlerin depo içerisindeki yeri anlık olarak görüntülenir.',
        'Raf ömrü ve stok kayıpları azaltılır.',
        'Lot, seri numarası ve son kullanma tarihi takibi ile tam depo izlenebilirliği sağlanır.',
        'Sevkiyat doğrulama sayesinde yanlış ürün, eksik koli ve hatalı müşteri sevkiyatı engellenir.',
        'ERP entegrasyonu ile stok, sipariş ve sevkiyat bilgileri sistemler arasında otomatik aktarılır.',
      ],
    },
    6: {
      title: 'Entegrasyon',
      description: 'Entegrasyon çözümleri, birbirinden bağımsız çalışan yazılım ve sistemler arasında veri aktarımı sağlayarak tüm yapıların uyumlu şekilde çalışmasına olanak tanır.',
      detail: 'Entegrasyon çözümleri, birbirinden bağımsız çalışan yazılım ve sistemler arasında veri aktarımı sağlayarak tüm yapıların uyumlu şekilde çalışmasına olanak tanır. Farklı sistemlerde bulunan verilerin bir araya getirilmesi; tekrarlayan veri girişlerini azaltır, raporlama ve karşılaştırma süreçlerini kolaylaştırır, operasyonel bilgilere daha hızlı ulaşılmasını sağlar.\n\nSiskon, işletmenizde kullanılan mevcut yazılımları ihtiyaçlarınıza ve iş süreçlerinize uygun şekilde entegre ederek sistemler arasında düzenli ve güvenilir bir veri akışı oluşturur. Analiz ve tasarımdan geliştirme, test ve devreye almaya kadar tüm süreci yöneterek sistemlerin birbiriyle senkronize, verimli ve sürdürülebilir şekilde çalışmasını destekler.',
      detailBulletsHeading: 'Avantajları:',
      detailBullets: [
        'Mevcut yazılım ve sistemler arasında veri aktarımı sağlanır; manuel ve tekrarlayan veri girişleri azaltılır.',
        'İş süreçlerine uygun entegrasyon yapısı tasarlanır; sistemlerin uyumlu ve senkronize çalışması desteklenir.',
        'Farklı kaynaklardaki veriler bir araya getirilir; raporlama, karşılaştırma ve karar alma süreçleri kolaylaştırılır.',
        'Analiz, tasarım, geliştirme, test ve devreye alma aşamaları uçtan uca yönetilir; ihtiyaca uygun ve sürdürülebilir bir çözüm oluşturulur.',
        'MRP, ERP, CRM, enerji yönetimi, kalibrasyon, bakım ve kalite yönetim sistemleri entegre edilir; işletme genelinde veri bütünlüğü ve operasyonel görünürlük artırılır.',
      ],
    },
  },
  products: {
    1: {
      title: 'Hybrid Track and Trace',
      description: 'Otomotiv standartlarına ilişkin gelişmiş gereksinimler dahil, dahili sistemler ve tedarik zinciri ortakları genelinde uçtan uca izlenebilirlik sunar.',
      detail: 'Hybrid Track and Trace, otomotiv ana ve yan sanayi için ürünün geçtiği tüm süreçleri ve süreç verilerini kayıt altına alarak uçtan uca izlenebilirliği sağlar. ISO/TS 16949 standartları için gerekli olan mevzuattaki güncel değişikliklere uygun gelişmiş ürün izlenebilirlik gerekliliklerini sağlar.',
      detailPreBulletsHeading: 'Hybrid T&T, otomotiv endüstrisinin en dikkat çekici iki konusunu doğrudan etkilemektedir:',
      detailPreBullets: [
        'Hatalı ürün sayısını azaltarak global ölçekte sürdürülebilir kalite elde edilmesi.',
        'Mevzuata dayanarak ürünlerin geri çağrılması durumunda bir yandan garanti giderleri azaltılırken, diğer yandan da müşterilerin gereksinimlerinin karşılanmasıdır.',
      ],
      detailBulletsHeading: 'Hybrid T&T sayesinde;',
      detailBullets: [
        'İşlemlerde İş Birliği - Üretici ve ticaret ortakları arasında düzeltici faaliyetlerin daha iyi koordine edilmesi, hata ihtimali yüksek manuel süreçlerin azaltılması.',
        'Merkezi İzlenebilirlik Raporlama - Ürün geliştirme süreçleri ve paketleme hiyerarşisinin her aşamasının kayıt altına alınması.',
        'Tedarik Zinciri Senkronizasyonu - Analiz ve düzeltici faaliyetlerde yer alan iş ortakları ile daha iyi iletişim kurulması.',
        'Yüksek Hacimli İzlenebilirlik Verilerini Yönetme - Operasyonel performansı etkilemeden verilerin entegre yönetilmesi.',
        'Ürün Kimlik Belirleme Şemaları Oluşturma - RFID ve barkod tarama teknolojilerinin iyileştirilmesi.',
      ],
    },
    2: {
      title: 'A+++ Track and Trace',
      description: 'Beyaz eşya üretimi için tasarlanmış; montaj hatlarında ürün takibi, kritik bileşen takibi ve rota takibi modüllerine sahiptir.',
      detail: 'A+++ Track and Trace, beyaz eşya montaj hatlarında ürün, kritik bileşen ve rota takibiyle uçtan uca izlenebilirlik sağlar. Sistem hem iç hem de dış tedarik zinciri verilerini ve süreç verilerini kayıt altına alarak verimlilik sunar.\n\nSiskon tarafından beyaz eşya endüstrisine özel olarak geliştirilen „A+++ Track and Trace” çözümü, montaj hatlarında ürün takibi, kritik komponent takibi, rota takibi ve diğer modülleri ile uçtan uca ürün izlenebilirliğini sağlamaktadır.\n\nA+++ T&T, kalite veya üretim ile ilgili potansiyel sorunların kritik hale gelmeden önce tespit edilmesini sağlayarak karlılığı ve „ilk seferde doğru yap” prensibi ile verimliliği arttırmayı hedefler.\n\nA+++ T&T, beyaz eşya endüstrisinde faaliyet gösteren firmaların, etkin maliyet ve proaktif olarak ürün kalitesi sağlamalarına yardımcı olurken, bir yandan da bir kalite yönetim standardı olan ISO 9001 gibi gelişimi düzenleyici yapıların gereksinimlerini karşılamaktadır.',
    },
    3: {
      title: 'Organic Track and Trace',
      description: 'Uyum gereksinimlerini desteklerken üretim ve dağıtım boyunca kaynak girdileri ve süreç durumlarını tanımlayan gıda izlenebilirlik çözümü.',
      detail: 'Organic Track and Trace, hammadde kabulünden sevkiyata kadar parti, proses ve kalite verilerini tek akışta birleştirerek uçtan uca görünürlük sağlar. Ürün izlenebilirliğini güvence altına almanın yanında denetim süreçlerini hızlandırır, geri çağırma kapsamını daraltır ve günlük operasyonel kontrolü güçlendirir.',
      detailSections: [
        {
          heading: 'OPERASYONEL VERİMLİLİK',
          items: [
            'Gelişmiş Tedarik Zinciri Yönetimi: Firmaların müşteri talebini daha verimli bir şekilde karşılamalarını sağlayacak stok doğruluğuna sahip olmasını sağlamaktadır.',
            'Artan Tedarik Zinciri Güveni: Ürün izlenebilirliği performansının artırılması tedarik zinciri katılımcılarının performanslarının artmasını yol açmaktadır.',
            'Süreç İyileştirmeleri: Ürün takibindeki iyileştirmeler sıklıkla hata oranlarını düşürür, ürün seçim doğruluğunu artırır ve iş akışını daha etkin bir şekilde yönetmek ve en üst düzeye çıkarmak için belge yönetimini kolaylaştırmaktadır.',
            'Bozulma / Atık ve Fire Miktarında Azalma: Gelişmiş ürün izlenebilirliği, fire maliyetlerini ve atıkları azaltarak daha doğru envanter yönetimi sağlamaktadır.',
          ],
        },
        {
          heading: 'PAZARA ERİŞİM',
          items: [
            'Gelişmiş Marka İtibarı: Ürün izleme sistemleri, marka itibarını etkileyen kararları destekler. Ürün izlemenin iyileştirilmesi karar verme yeteneğini geliştirmektedir.',
            'Artan Tüketici Güveni: İzlenebilirlik, ürünün talep edildiği şekilde belirli özelliklere sahip olduğunun kanıtıdır. Ürün takibi iş yapmanın normal bir maliyeti olarak kabul edilebilirken, izlenebilirliğin olmaması birçok firmanın tüketici güvenini ve müşteri sadakatini olumsuz yönde etkilemektedir.',
            'Genişletilmiş Pazarlar / Yeni Müşteriler: Ürün izlenebilirliği ile sağlanacak geri çağırma ve geri izleme maliyetlerindeki azalma, yeni pazarlara girme ve yeni müşteriler kazanmak adına işletme risklerini azaltmaktadır.',
          ],
        },
        {
          heading: 'RİSK AZALTMA',
          items: [
            'Sigorta / Yükümlülük Maliyetinin Azaltılması: Bazı sigorta sağlayıcıları, gıda endüstrisi içindeki firmalar için belirli sigorta poliçelerine tabi tutulmadan önce ürün izleme kabiliyetine ihtiyaç duymaktadır.',
            'Azaltılmış Geri Çağırma Maliyetleri: Bir geri çağırma durumunda kritik verilere erişim süresini azaltır ve geri çağırma kapsamını düşürmektedir.',
            'Olağan İşlere Geri Dönmek: İşletmenin geri çağırma işlemine dahil olmadığının daha hızlı doğrulanması, mevcut iş akışına hızlı dönüş yapabilmesine olanak sağlamaktadır.',
          ],
        },
      ],
    },
    4: {
      title: 'Capsule Track and Trace',
      description: 'RFID, 1D barkod ve Veri Matris teknolojilerini kullanarak hammadde kabulünden depo teslimatına kadar farmasötik izlenebilirliği sağlar.',
      detail: 'Capsule Track and Trace, ilaç endüstrisinde hammadde girişinden depo teslimatına kadar tüm süreçleri tekil numara bazında izler. Siskon tarafından özel olarak geliştirilen bu sistem, daha geniş ve karmaşık çeşitlerde üretim yapılmasına, ilaçların dağıtımına ve hastalarla olan bağlantının güçlendirilmesine yardımcı olmaktadır.',
      detailSections: [
        {
          heading: 'Capsule T&T temel faydaları:',
          items: [
            'Hammadde girişinden başlayarak bitmiş ürüne kadar olan tüm süreçlerin tekil numara bazında izlenmesi ile entegre raporlama imkanı',
            'Süresi dolmuş, yasaklanmış veya geri çağrılan ürünlerin dağıtımının engellenmesi',
            'Tıbbi ürün kullanım verilerinin toplanmasını ve bu verilere göre özel stratejiler geliştirilmesine olanak sağlaması',
            'Etkin bir malzeme yönetimi sağlaması',
            'Tedarik zinciri operasyonlarının daha iyi yönetilmesi',
          ],
        },
        {
          paragraph: 'İlaç sektöründe izlenebilirlik için RFID, 1D çizgi barkod veya Data Matrix (Karekod) gibi farklı teknolojiler kullanılmaktadır. Ülkemizde 2D karekod teknolojisi ile ilaç izlenebilirliği sağlanmaktadır.',
        },
        {
          heading: 'Türkiye’de karekod içinde şu bilgiler bulunur:',
          items: [
            'GTIN (Global Trade Item Number- Küresel Ticari Ürün Numarası): 14 rakamlı barkod numarasıdır.',
            'SN (Serial Number- Seri Numarası): Her birim ilaç için benzersiz şekilde üreticiler tarafından tespit edilir. Sıralı şekilde artan bir numaradır.',
            'XD (Expiration Date- Son Kullanma Tarihi): Yıl, ay, gün formatında 6 rakamla anlatılan son kullanma tarihidir.',
            'BN (Batch Number- Parti Numarası): İlacın üretimindeki parti numarasını ifade eden bir rakamdır.',
          ],
        },
        {
          paragraph: 'Görüntü İşleme Üretilen ürünlerdeki hataların görsel kontrol sistemleri ile tespit edilmesi süre gelen insan ve diğer hata ayıklayıcılarına üstünlük sağlamaktadır.',
        },
      ],
    },
  },
  solutionsDetail: {
    'rfid-trasabilitate': {
      title: 'Endüstriyel İzlenebilirlik için RFID',
      h1: 'İzlenebilirlik ve Gerçek Zamanlı Kontrol için RFID Çözümleri',
      description: 'Ürün izlenebilirliği, envanter yönetimi ve otomatik üretim iş akışları için kapsamlı RFID platformu.',
      metaDescription: 'Üretim ve depolama operasyonlarında gerçek zamanlı takip ve yüzde 95\'e varan hata azaltımıyla endüstriyel RFID izlenebilirlik uygulaması.',
      keywords: 'endüstriyel RFID izlenebilirlik, RFID üretim, RFID depo, otomatik tanımlama, RFID takip',
      benefits: [
        'Temassız otomatik tanımlama',
        'Gerçek zamanlı ürün ve bileşen takibi',
        'Yüzde 95\'e varan tanımlama hatası azaltımı',
        'MES ve ERP entegrasyon hazırlığı',
        'Yüksek verimli paralel okuma (saniyede 200\'den fazla etiket)',
        'Zorlu endüstriyel ortamlarda dayanıklılık',
      ],
      useCases: [
        {
          title: 'Otomotiv - Bileşen İzlenebilirliği',
          description: 'Bileşenleri mal kabulünden son montaja kadar otomatik sıra doğrulamasıyla takip edin.',
        },
        {
          title: 'Depo - Envanter Yönetimi',
          description: 'Büyük sayım süresi azaltımıyla otomatik sayım, palet takibi ve malzeme akışı optimizasyonu.',
        },
        {
          title: 'Üretim - Kalite Kontrolü',
          description: 'Montaj hatalarını önlemek ve eksiksiz ürün geçmişini korumak için otomatik süreç doğrulaması.',
        },
      ],
      technologies: ['UHF RFID', 'NFC', 'Sabit ve mobil okuyucular', 'Endüstriyel antenler', 'Özel etiketler'],
    },
    'rtls-localizare': {
      title: 'RTLS - Gerçek Zamanlı Konum',
      h1: 'Hassas Tesis İçi Konum Yönetimi için RTLS Sistemi',
      description: 'Endüstriyel tesislerde varlıkların, kişilerin ve malzemelerin takibi için Gerçek Zamanlı Konum Sistemi teknolojisi.',
      metaDescription: 'Alt metre hassasiyetiyle canlı varlık konumu, üretim akışı optimizasyonu ve arama süresi azaltımı için RTLS kurulumu.',
      keywords: 'RTLS, gerçek zamanlı konum, varlık takibi, UWB, iç mekan konumlandırma, depo takibi',
      benefits: [
        'Yüksek hassasiyetli konum takibi',
        'Dijital tesis haritalarında canlı görünürlük',
        'Malzeme akışı optimizasyon desteği',
        'Varlık arama süresinde önemli azalma',
        'Otomatik kısıtlı bölge uyarıları',
        'Geçmiş hareket analitikleri',
      ],
      useCases: [
        {
          title: 'Üretim - Mobil Varlık Takibi',
          description: 'Aletleri, ekipmanları ve taşıma arabalarını gerçek zamanlı konumlandırın ve boşa harcanan arama çabasını ortadan kaldırın.',
        },
        {
          title: 'Depo - Akış Optimizasyonu',
          description: 'Palet ve konteynerleri takip edin, optimal rotaları analiz edin ve tıkanıklığı azaltın.',
        },
        {
          title: 'Lojistik - Konteyner Takibi',
          description: 'Giriş/çıkış olaylarını, bekleme sürelerini ve gecikmiş hareket uyarılarını izleyin.',
        },
      ],
      technologies: ['UWB', 'BLE', 'WiFi RTT', 'Ankerler ve etiketler', 'RTLS yazılımı'],
    },
    'wms-depozit': {
      title: 'WMS - Depo Yönetim Sistemi',
      h1: 'Akıllı Depo Operasyonları için WMS',
      description: 'Envanter kontrolü, depo yönetimi ve uçtan uca izlenebilirlik için tam özellikli WMS yazılımı.',
      metaDescription: 'Stok kontrolü, toplama optimizasyonu, lot izlenebilirliği ve ERP entegrasyonu için Depo Yönetim Sistemi.',
      keywords: 'WMS, depo yönetim sistemi, envanter yönetimi, toplama optimizasyonu, lot izlenebilirliği',
      benefits: [
        'Eksiksiz gelen ve giden kontrolü',
        'Optimize edilmiş depo alanı kullanımı',
        'Rota optimizasyonlu akıllı toplama',
        'Tam lot/seri izlenebilirliği',
        'RFID ve barkod tarayıcı entegrasyonu',
        'Gerçek zamanlı operasyonel raporlama',
      ],
      useCases: [
        {
          title: 'Merkezi Depo - Envanter Kontrolü',
          description: 'Otomatik FIFO/FEFO ve düşük seviye uyarılarıyla eksiksiz stok yönetimi.',
        },
        {
          title: 'Cross-Docking - Akış Optimizasyonu',
          description: 'Depolama bağımlılığını azaltın ve doğrudan tedarikçiden müşteriye hareketi hızlandırın.',
        },
        {
          title: 'E-ticaret - Hızlı Toplama',
          description: 'Sevkiyat odaklı yürütme desteğiyle toplu ve dalgalı toplama.',
        },
      ],
      technologies: ['Bulut/Yerinde', 'Mobil WMS', 'Sesli toplama', 'Entegrasyon API\'ları', 'BI panoları'],
    },
    'poka-yoke': {
      title: 'POKA YOKE - Hata Önleme Sistemi',
      h1: 'POKA YOKE - Üretim Hatalarını Önleme',
      description: 'Sensörler ve gerçek zamanlı doğrulama mantığına dayalı otomatik insan/süreç hata önleme sistemi.',
      metaDescription: 'Üretim hattlarında üretim hatası önleme, sıra doğrulama ve kusur önleme için POKA YOKE sistemi.',
      keywords: 'poka yoke, hata önleme, sıfır hata, kalite kontrolü, üretim kalitesi',
      benefits: [
        'Hataları yayılmadan önler',
        'Otomatik operasyon sırası doğrulaması',
        'Anlık sapma uyarıları',
        'Önemli yeniden işleme azaltma potansiyeli',
        'Otomatik uyumluluk belgelenmesi',
        'Operatörler için görsel rehberlik',
      ],
      useCases: [
        {
          title: 'Montaj - Bileşen Doğrulama',
          description: 'Her montaj aşamasında doğru bileşeni, doğru adımı ve doğru parametreyi doğrulayın.',
        },
        {
          title: 'Kalite - Yüzde 100 Doğrulama',
          description: 'Boyutlar, görsel kusurlar ve teknik şartname uygunluğu için otomatik kontroller.',
        },
        {
          title: 'Ambalajlama - Hata Önleme',
          description: 'Sevkiyat öncesinde ürün kimliğini, miktarı, etiketleri ve gerekli belgeleri doğrulayın.',
        },
      ],
      technologies: ['Endüstriyel sensörler', 'Görü sistemleri', 'PLC entegrasyonu', 'IoT cihazları', 'HMI ekranları'],
    },
    'image-processing': {
      title: 'Görüntü İşleme - Görü Kalite Kontrolü',
      h1: 'Otomatik Kalite Kontrolü için Görüntü İşleme Sistemleri',
      description: 'Kusur tespiti, hassas ölçüm ve tam üretim kalitesi kapsamı için makine görü teknolojisi.',
      metaDescription: 'Yüksek verimlilik ve yüksek doğrulukta otomatik kusur tespiti ve kalite kontrolü için endüstriyel görüntü işleme.',
      keywords: 'görüntü işleme, görü muayenesi, kusur tespiti, otomatik kalite kontrolü, makine görüsü',
      benefits: [
        'Yüzde 100 üretim muayene kapsamı',
        'İnsan görsel sınırlarının ötesinde tespit',
        'Yüksek hassasiyetli ölçümler',
        'Yüksek verimli muayene kapasitesi',
        'Birim başına görüntü belgesi',
        'Ortaya çıkan kusur türleri için yapay zeka tabanlı adaptasyon',
      ],
      useCases: [
        {
          title: 'Otomotiv - Kaynak Muayenesi',
          description: 'Gözeneklilik, çatlaklar ve geometrik uygunluk için otomatik kaynak kalite kontrolleri.',
        },
        {
          title: 'Gıda - Ambalaj Muayenesi',
          description: 'Conta bütünlüğünü, dolum seviyesini, etiket varlığını ve lot kodu doğruluğunu doğrulayın.',
        },
        {
          title: 'Elektronik - PCB Muayenesi',
          description: 'Bileşen yerleşimini, polariteyi ve lehim kalitesini otomatik olarak kontrol edin.',
        },
      ],
      technologies: ['Endüstriyel kameralar', 'Yapay Zeka/Derin Öğrenme', 'Özel aydınlatma', 'Görü yazılımı', 'Uç bilişim'],
    },
    'integrare-sisteme': {
      title: 'MES ve ERP Sistem Entegrasyonu',
      h1: 'İzlenebilirliğin MES ve ERP ile Eksiksiz Entegrasyonu',
      description: 'İzlenebilirlik platformlarını MES, ERP, WMS ve kurumsal uygulamalarla bağlayan entegrasyon hizmetleri.',
      metaDescription: 'Güvenilir gerçek zamanlı senkronizasyon ve API tabanlı mimari ile MES, ERP, WMS ve SCADA için izlenebilirlik entegrasyonu.',
      keywords: 'MES entegrasyonu, ERP entegrasyonu, API entegrasyonu, SAP entegrasyonu, sistem ara yazılımı',
      benefits: [
        'Sistemler arasında otomatik veri akışı',
        'Manuel yeniden girişi ortadan kaldırır',
        'Gerçek zamanlı senkronizasyon',
        'Uçtan uca izlenebilirlik sürekliliği',
        'Birleşik raporlama temeli',
        'Eski sistem birlikte çalışabilirlik desteği',
      ],
      useCases: [
        {
          title: 'MES-ERP Entegrasyonu',
          description: 'Üretim emirlerini, malzeme tüketimini, tamamlanmaları ve kalite verilerini senkronize edin.',
        },
        {
          title: 'Çok Sistemli Pano',
          description: 'Üretim, kalite, bakım ve lojistik kaynaklarında birleşik bir pano oluşturun.',
        },
        {
          title: 'Tedarik Zinciri Görünürlüğü',
          description: 'Tedarikçi olaylarından müşteri teslimat onayına kadar uçtan uca akış görünürlüğü sağlayın.',
        },
      ],
      technologies: ['REST API\'ları', 'MQTT', 'OPC UA', 'SAP konektörleri', 'Veritabanı senkronizasyonu', 'Mesaj kuyrukları'],
    },
  },
  partners: {
    'sick': {
      description: 'Endüstriyel sensörler, görüntü işleme ve otomatik tanımlama sistemleriyle üretim ve lojistikte güvenli, verimli ve izlenebilir operasyonlar sağlar.',
      fullDescription: 'SICK, üretim ve lojistik süreçlerinde kullanılan endüstriyel sensörler, güvenlik sistemleri, görüntü işleme ürünleri ve otomatik tanımlama teknolojileri geliştirir ve üretir. Ürün portföyünde mesafe ve konum sensörleri, güvenlik tarayıcıları, endüstriyel kameralar, barkod okuyucular ve RFID sistemleri yer alır.\n\nSICK teknolojileri, ürün ve malzemelerin algılanması, ölçülmesi, kontrol edilmesi ve otomatik olarak tanımlanması için kullanılır. Bu ürünler sayesinde üretim hatlarında kalite kontrol, kod okuma, ürün doğrulama, makine güvenliği ve uçtan uca izlenebilirlik uygulamaları gerçekleştirilebilir.',
    },
    'universal-robots': {
      description: 'Kolaboratif robot teknolojileriyle üretim süreçlerinde esnek otomasyon çözümleri sunar; verimliliği artırırken çalışanlarla güvenli iş birliği imkânı sağlar.',
      fullDescription: 'Universal Robots, üretim ortamlarında çalışanlarla birlikte görev yapabilen kolaboratif robotlar, yani cobotlar geliştirir ve üretir. Farklı taşıma kapasitelerine ve erişim mesafelerine sahip robot kolları, çeşitli ekipman ve yazılımlarla birleştirilerek farklı üretim operasyonlarına uyarlanabilir.\n\nUniversal Robots cobotları; makine besleme, montaj, kaynak, malzeme taşıma, paketleme, paletleme ve kalite kontrol gibi tekrarlayan veya ergonomik açıdan zorlayıcı işlemlerde kullanılır. Esnek yapıları sayesinde farklı ürünlere ve üretim senaryolarına göre yeniden programlanabilir ve mevcut üretim alanlarına entegre edilebilir. ',
    },
    'markem-imaje': {
      description: 'Endüstriyel kodlama ve markalama çözümleriyle ürünlerin doğru şekilde tanımlanmasını, doğrulanmasını ve izlenebilirlik süreçlerinin yönetilmesini destekler.',
      fullDescription: 'Markem-Imaje, ürünlerin ve ambalajların üretim hattı üzerinde tanımlanmasına yönelik endüstriyel kodlama, markalama ve baskı sistemleri geliştirir. Ürün portföyünde inkjet yazıcılar, lazer markalama sistemleri, termal transfer yazıcılar, etiketleme çözümleri ve kodlama süreçlerini yöneten yazılımlar bulunur.\n\nBu sistemler; üretim tarihi, son kullanma tarihi, lot numarası, seri numarası, barkod ve 2D kodların farklı ürün ve ambalaj yüzeylerine uygulanmasını sağlar. Kodlama yazılımlarıyla birlikte üretim hatlarında doğru kodun basılması, doğrulanması ve ürün izlenebilirliği verileriyle ilişkilendirilmesi desteklenir. ',
    },
    'interroll': {
      description: 'İç lojistik ve malzeme taşıma sistemleriyle tesis içi ürün hareketlerini optimize eder, malzeme akışı için verimli ve sürdürülebilir çözümler sunar.',
      fullDescription: 'Interroll, üretim, depo ve dağıtım alanlarındaki malzeme hareketleri için konveyör ruloları, motor ve sürücü sistemleri, konveyör modülleri, ayrıştırma sistemleri ile palet ve koli taşıma çözümleri geliştirir ve üretir.\n\nInterroll ürünleri; koli, palet, paket ve diğer malzemelerin tesis içerisinde taşınması, biriktirilmesi, yönlendirilmesi, ayrıştırılması ve depolanması amacıyla kullanılır. Modüler ürün yapısı, üretim hatlarından depolara ve dağıtım merkezlerine kadar farklı iç lojistik uygulamalarına uyarlanabilir.',
    },
    'beckhoff': {
      description: 'PC tabanlı kontrol teknolojileri ve açık otomasyon çözümleriyle makine, robotik ve üretim sistemlerinin esnek ve verimli şekilde yönetilmesini sağlar.',
      fullDescription: 'Beckhoff, PC tabanlı kontrol teknolojisine dayanan endüstriyel otomasyon ürünleri geliştirir ve üretir. Ürün portföyünde endüstriyel bilgisayarlar ve kontrol panelleri, I/O ve haberleşme bileşenleri, sürücü-motor sistemleri ile TwinCAT otomasyon yazılımı bulunur.\n\nBu ürünler, tek başına bir otomasyon bileşeni olarak kullanılabildiği gibi makine ve üretim hatlarının kontrol edildiği bütünleşik sistemler içerisinde de çalışabilir. Beckhoff teknolojileri; makine kontrolü, hareket kontrolü, robotik uygulamalar ve üretim otomasyonu gibi farklı alanlarda kullanılmaktadır. ',
    },
    'sewio': {
      description: 'UWB tabanlı gerçek zamanlı konum takip teknolojileriyle varlıkların hareketlerini izler, iç lojistik süreçlerinde görünürlük ve operasyonel verimlilik sunar.',
      fullDescription: 'Sewio, üretim ve lojistik alanlarında kullanılan UWB tabanlı gerçek zamanlı konum takip sistemleri geliştirir. Çözüm; takip etiketleri, konum belirleme altyapısı ve RTLS yazılımından oluşarak ürünlerin, yarı mamullerin, ekipmanların, araçların ve ihtiyaç halinde personelin tesis içindeki konumunu izler.\n\nSistem, varlıkların yalnızca anlık konumunu değil, geçmiş hareketlerini, izledikleri rotaları ve belirli alanlardaki bekleme sürelerini de kayıt altına alır. Bu veriler; malzeme akışlarının iyileştirilmesi, kayıp ve arama sürelerinin azaltılması, iş güvenliğinin desteklenmesi ve iç lojistik süreçlerinin görünür hale getirilmesi amacıyla kullanılır. ',
    },
  },
};
