export const blogPosts = [
  {
    id: 1,
    title: 'GS1 Sunrise 2027: Perakendede 2D Barkoda Geçiş Süreci',
    titleTr: 'GS1 Sunrise 2027: Perakendede 2D Barkoda Geçiş Süreci',
    titleEn: 'GS1 Sunrise 2027: Transition to 2D Barcodes in Retail',
    slug: 'gs1-sunrise-2027-2d-barcode-transition',
    slugTr: 'gs1-sunrise-2027-2d-barkod-gecisi',
    slugEn: 'gs1-sunrise-2027-2d-barcode-transition',
    slugRo: 'gs1-sunrise-2027-tranzitia-la-coduri-de-bare-2d',
    category: 'Standartlar ve Mevzuat',
    categoryEn: 'Standards & Regulations',
    date: '2026-07-25',
    author: 'Admin',
    readTime: 5,
    image: '/images/blog/Datamatrix.png',
    imageTr: '/images/blog/Datamatrix.png',
    imageEn: '/images/blog/DataMatrixEN.jpg',
    imageRo: '/images/blog/DataMatrixRO.jpg',
    excerpt: 'GS1 Sunrise 2027 ile perakende satış noktaları 2027 sonuna kadar 2D barkod okuyacak. Çift işaretleme, GS1 Digital Link ve üretim hattı hazırlık adımları.',
    excerptEn: 'With GS1 Sunrise 2027, retail point-of-sale systems will read 2D barcodes by end of 2027. Dual-marking, GS1 Digital Link and production line readiness steps.',
    tags: ['GS1', '2D barkod', 'GTIN', 'Dijital Ürün Pasaportu', 'izlenebilirlik'],
    metaKeywords: 'GS1 Sunrise 2027, 2D barkod geçişi, GS1 Digital Link, GS1 DataMatrix, Ambition 2027, çift işaretleme, QR kod izlenebilirlik',
    content: `
      <p>Perakende sektöründe elli yılı aşkın süredir kullanılan doğrusal barkod, ürün tanımlamayı otomatikleştirmiş ancak tek bir veriyi taşımakla sınırlı kalmıştır. GS1 Sunrise 2027, bu yapının yerini daha fazla veri taşıyabilen iki boyutlu (2D) barkodların almasını hedefleyen küresel bir sektör girişimidir. <strong>Ambition 2027</strong> olarak da adlandırılan hedefe göre, 2027 yılının sonuna kadar tüm perakende satış noktası sistemlerinin doğrusal barkodların yanı sıra GS1 standartlarına uygun 2D barkodları da okuyup işleyebilmesi beklenmektedir.</p>

     

      <h2>GS1 Sunrise 2027 Girişiminin Kapsamı</h2>

      <h3>GS1 Sunrise 2027 Nedir?</h3>
      <p>GS1 Sunrise 2027, doğrusal barkodların geçersiz olacağı bir son tarih değil, perakende altyapısının 2D barkodlara hazır hale gelmesi için belirlenmiş ortak bir kilometre taşıdır. Asgari hedef, kasadaki okuyucunun hem EAN-13 hem de GS1 uyumlu bir 2D barkoddan ürün numarasını (GTIN) alıp POS yazılımına eksiksiz biçimde iletebilmesidir. Örneğin bir marketin okuyucusu QR kodu fiziksel olarak görüntüleyebiliyor olsa da içindeki GS1 verisini yorumlayamıyorsa hedef karşılanmamış sayılır.</p>

      <h3>Doğrusal Barkodun Veri Sınırı</h3>
      <p>EAN-13 ve UPC-A ailesi barkodlar yalnızca GTIN taşır; parti numarası, son kullanma tarihi ve seri numarasına yer yoktur. Bu boşluğu kısmen kapatan GS1 DataBar Expanded ailesinin kapasitesi ise sınırlıdır ve simge, küçük ambalajlara sığmayacak kadar büyüyebilmektedir. Örneğin taze et ürünlerinde ağırlık, parti ve tarih bilgisinin aynı doğrusal simgede taşınması etiket alanının önemli bölümünü tüketir.</p>

      <h3>Kabul Edilen 2D Barkodlar ve Veri Sözdizimi</h3>
      <p>Satış noktasında kullanılabilecek 2D barkodlar üç seçenekle sınırlıdır:</p>
      <ul>
        <li><strong>GS1 DataMatrix</strong> — GS1 element string sözdizimi ile kodlanan</li>
        <li><strong>QR Kod</strong> — GS1 Digital Link URI sözdizimi ile kodlanan</li>
        <li><strong>Data Matrix</strong> — GS1 Digital Link URI sözdizimi ile kodlanan</li>
      </ul>
      <p>Element string, veriyi GS1 Uygulama Tanımlayıcıları (AI) ile ifade eder; parti numarası (10), son kullanma tarihi (17) ve seri numarası (21) bu yapıyla kodlanır. Digital Link ise aynı verileri web adresi biçiminde taşıyıp barkodu dijital içeriğe bağlar. Örneğin bir konserve etiketindeki QR kod, hem kasada GTIN'i iletir hem de tüketiciyi o partiye özel sayfaya yönlendirir.</p>

      <h2>Geçiş Döneminde Ambalaj ve Üretim Hattı</h2>

      <h3>Çift İşaretleme Dönemi ve Yerleşim Kuralı</h3>
      <p>Geçiş süresince ürünler hem doğrusal hem 2D barkod taşır; buna <strong>çift işaretleme (dual-marking)</strong> denmektedir. GS1'in yaklaşımına göre, satış noktası okuyucularının yüzde doksanı GS1 uyumlu 2D barkodlardan en azından GTIN'i alabilir hale gelene kadar bu birlikte kullanım gereklidir.</p>
      <p>Yerleşim de serbest değildir: kapsamlı testler, kasada hedeflenen dakikada 40-70 ürün hızının korunabilmesi için <strong>2D barkodun doğrusal barkodun merkezine en fazla 50 mm mesafede</strong> bulunması gerektiğini göstermiştir. Örneğin uzağa yerleştirilen bir QR kod, kasiyerin ürünü iki kez çevirmesine yol açar.</p>

      <h3>Dinamik Veri Basımı ve Baskı Kalitesi</h3>
      <p>GTIN sabit olduğu için doğrusal barkod genellikle ambalaj tedarikçisinde önceden basılır. 2D barkod ise her partide değişen verileri taşıdığında hat üzerinde anlık basılmak zorundadır; bu da sürekli mürekkep püskürtmeli (CIJ), termal transfer veya lazer ekipmanının doğru veriyi üretim yönetim sisteminden almasını gerektirir.</p>
      <p>Okunabilirlik ise kontrasta ve modül boyutuna bağlıdır: 2D barkodların X boyutu, aynı uygulamadaki doğrusal barkodun 1,5 katıdır ve kırmızı ışıkla çalışan okuyucular nedeniyle kırmızı, turuncu, sarı tonlar risklidir. Örneğin logo yerleştirilmiş bir QR kod, hata düzeltme alanını tükettiği için kasada okunamayabilir; bu nedenle ISO/IEC 15415'e göre doğrulama hat koşullarında tekrarlanmalıdır.</p>

      <h2>İzlenebilirlik, Uyum ve Hazırlık</h2>

      <h3>İzlenebilirlik ve Hedefli Geri Çağırma</h3>
      <p>2D barkodun asıl operasyonel getirisi, ürün kimliğinin parti veya seri düzeyine inmesidir. GTIN ile birlikte parti numarası ve son kullanma tarihi okunabildiğinde, geri çağırma kararı tüm ürün grubu yerine yalnızca ilgili partiyle sınırlandırılabilir. Aynı veri, süresi geçmiş ürünün kasada satışının otomatik olarak engellenmesini de mümkün kılar. Örneğin bir gıda üreticisi, şikâyet konusu ürünün seri numarasından hangi vardiyada ve hangi hammadde partisiyle üretildiğini belirleyebilir.</p>

      <h3>Mevzuat Uyumu ve Dijital Ürün Pasaportu</h3>
      <p>2D barkoda geçiş, Avrupa Birliği'nin ürün verisine yönelik düzenlemeleriyle aynı yöne bakmaktadır. Sürdürülebilir Ürünler için Ekotasarım Tüzüğü 18 Temmuz 2024'te yürürlüğe girmiş ve <strong>Dijital Ürün Pasaportu</strong>'nu bu çerçevenin merkezine yerleştirmiştir; ürün gruplarına özgü yükümlülükler ikincil düzenlemelerle kademeli olarak belirlenmektedir. Pasaporta erişimin bir veri taşıyıcısı üzerinden sağlanacak olması, ambalajdaki 2D barkodu uyum aracına dönüştürmektedir. Örneğin ilaç sektöründe GS1 DataMatrix, yıllardır seri numarası taşıyıcısı olarak kullanılmakta ve modelin sahada işlediğini göstermektedir.</p>

      <h2>Hazırlık Adımları ve Geleceğe Bakış</h2>
      <p>Etkili bir geçiş ürün verisinin envanterinden başlar: satılan her ürünün geçerli bir GTIN'e sahip olduğu doğrulanmalı, ardından barkoda girecek veriler seçilmeli ve ERP ile MES tarafında bu alanların işlenebildiği test edilmelidir. Türkiye'de firma öneki ve GTIN tahsisi <strong>GS1 Türkiye</strong> üzerinden yürütülmektedir.</p>
      <p>Örneğin sınırlı sayıda ürün kodu ile yürütülen bir pilot, hat hızındaki baskı kalitesi sorunlarını tüm portföye yayılmadan önce ortaya çıkarır. Yaygın kullanım sağlandıktan sonra tartışma barkoddan, çözümleyici servisleri ve görünürlük verisi gibi arkadaki veri katmanına kayacaktır.</p>

      <h2>Sonuç</h2>
      <p>GS1 Sunrise 2027, doğrusal barkodun elli yıllık hâkimiyetini sona erdiren bir kesme tarihi değil, perakende altyapısının daha fazla veri taşıyan barkodlara hazırlanması için belirlenmiş ortak bir hedeftir. Geçiş döneminde ürünler her iki barkodu birlikte taşıyacak; yerleşim ve baskı kalitesi kurallarına uyum kasadaki işlem hızını koruyacaktır.</p>
      <p>Üreticiler açısından işin ağırlığı ambalaj tasarımında değil, GTIN doğruluğu ile hat üzerinde dinamik veri basımı ve bu verinin doğru işlenmesi başlıklarında toplanmaktadır. Parti ve seri numarasını üretim anında güvenilir biçimde üretebilen bir tesis için 2D barkoda geçiş, mevcut verinin ambalaja taşınmasından ibarettir. Bu nedenle hazırlığa barkod seçiminden değil, üretim verisinin toplandığı noktadan başlamak daha isabetli bir stratejidir.</p>

      <h2>Sıkça Sorulan Sorular</h2>

      <h3>GS1 Sunrise 2027 üreticiler için zorunlu mu?</h3>
      <p>Girişim, marka sahipleri açısından gönüllü bir geçiş olarak tanımlanmaktadır; zorunluluk satış noktası tarafındaki hazırlık hedefinden ve ürün grubuna özgü mevzuattan doğar. Uygulamada takvimi belirleyecek asıl etken, perakende zincirlerinin tedarikçilerinden 2D barkod talep etmeye başlamasıdır.</p>

      <h3>Mevcut EAN-13 barkodlarımız 2027'de geçersiz mi olacak?</h3>
      <p>Hayır. Doğrusal barkodlar, ihtiyaç duyulduğu sürece 2D barkodlarla birlikte kullanılmaya devam edecektir. Geçiş döneminde 2D barkod taşıyan ürünlerin doğrusal barkodu da bulunmalıdır. Yaygın kullanım sağlandıktan sonra ambalajda yalnızca 2D barkod bırakmak marka sahibinin tercihine kalmaktadır.</p>

      <h3>GS1 DataMatrix ile QR Kod arasında nasıl seçim yapılmalı?</h3>
      <p>Seçim kullanım senaryosuna bağlıdır. GS1 DataMatrix daha küçük alan kaplar ve sağlık ürünlerinde kabul görmüş taşıyıcıdır. GS1 Digital Link sözdizimi ile kodlanan QR Kod ise telefonun standart kamera uygulamasıyla okunabildiği için tüketici etkileşimi gerektiren ürünlerde avantaj sağlar.</p>
    `,
  },
  {
    id: 2,
    title: 'Importanța Trasabilității Alimentare pentru Consumatorii Finali',
    titleTr: 'Gıda İzlenebilirliğinin Son Tüketiciler İçin Önemi',
    slug: 'the-importance-of-food-traceability-for-end-consumers',
    slugTr: 'gida-izlenebilirliginin-son-tuketiciler-icin-onemi',
    slugEn: 'the-importance-of-food-traceability-for-end-consumers',
    slugRo: 'importanta-trasabilitatii-alimentare-pentru-consumatorii-finali',
    category: 'Știri',
    categoryEn: 'News',
    date: '2024-11-25',
    author: 'Admin',
    image: '/images/blog/Gida-Izlenebilirlik.webp',
    excerpt: 'Trasabilitatea alimentară joacă un rol esențial în siguranță, calitate și încrederea consumatorilor, oferind vizibilitate completă asupra originii și procesării produselor.',
    content: `
      <p>Trasabilitatea alimentară joacă un rol esențial în asigurarea siguranței alimentelor, a calității și a satisfacției consumatorilor. În prezent, consumatorii finali solicită tot mai des informații despre originea produselor alimentare și despre procesele prin care acestea au fost obținute.</p>

      <h2>Referințe</h2>
      <ul>
        <li>Baker, M., et al. (2018). “The Role of Traceability in the Food Supply Chain: A Study of Market Benefits.” <em>International Journal of Supply Chain Management.</em></li>
        <li>FAO. (2015). <em>Guidelines for the Development of Traceability Systems for Food Products.</em> Food and Agriculture Organization.</li>
        <li>FMI. (2021). “The Future of Food: Consumer Trends in 2021.” Food Marketing Institute.</li>
        <li>Kamble, S. S., Gunasekaran, A., & Sharma, R. (2021). “Blockchain Technology for Sustainable Supply Chain Management: A Comprehensive Review.” <em>Sustainable Production and Consumption.</em></li>
        <li>McKinsey. (2020). “The Consumer Demand for Sustainable Products.” McKinsey & Company.</li>
        <li>Mintel. (2020). <em>Consumer Trends in Food Safety: The Demand for Transparency.</em></li>
        <li>Sustainable Food Trust. (2023). “The Future of Food: Sustainability and Transparency.” <em>Sustainable Food Trust Report.</em></li>
        <li>Wang, Y., et al. (2022). “Regulatory Challenges in Food Traceability: A Global Perspective.” <em>Food Policy Journal.</em></li>
      </ul>
    `,
  },
  {
    id: 3,
    title: 'Rolul Trasabilității în Calitate și Durabilitate',
    titleTr: 'Ürün İzlenebilirliği: Kalite ve Sürdürülebilirlik',
    slug: 'product-traceability-importance',
    slugTr: 'urun-izlenebilirliginin-onemi',
    slugEn: 'product-traceability-importance',
    slugRo: 'importanta-trasabilitatii-produselor',
    category: 'Știri',
    categoryEn: 'News',
    date: '2024-10-08',
    author: 'Admin',
    image: '/images/blog/Yumurta_izlenebilirlik.webp',
    excerpt: 'Trasabilitatea produselor este esentiala pentru siguranta, transparenta si incredere, oferind vizibilitate completa asupra lantului de aprovizionare.',
    content: `
      <p>Trasabilitatea alimentara joaca un rol esential in asigurarea sigurantei alimentelor, a calitatii si a satisfactiei consumatorilor. Astazi, consumatorii finali solicita din ce in ce mai multe informatii despre originea produselor alimentare si despre procesele lor de productie.</p>

      <h2>Referinte</h2>
      <ul>
        <li>Baker, M., et al. (2018). “The Role of Traceability in the Food Supply Chain: A Study of Market Benefits.” <em>International Journal of Supply Chain Management</em>.</li>
        <li>FAO. (2015). <em>Guidelines for the Development of Traceability Systems for Food Products</em>. Food and Agriculture Organization.</li>
        <li>FMI. (2021). “The Future of Food: Consumer Trends in 2021.” Food Marketing Institute.</li>
        <li>Kamble, S. S., Gunasekaran, A., & Sharma, R. (2021). “Blockchain Technology for Sustainable Supply Chain Management: A Comprehensive Review.” <em>Sustainable Production and Consumption</em>.</li>
        <li>McKinsey. (2020). “The Consumer Demand for Sustainable Products.” McKinsey & Company.</li>
        <li>Mintel. (2020). <em>Consumer Trends in Food Safety: The Demand for Transparency</em>.</li>
        <li>Sustainable Food Trust. (2023). “The Future of Food: Sustainability and Transparency.” <em>Sustainable Food Trust Report</em>.</li>
        <li>Wang, Y., et al. (2022). “Regulatory Challenges in Food Traceability: A Global Perspective.” <em>Food Policy Journal</em>.</li>
      </ul>
    `,
  },
  {
    id: 4,
    title: 'Trasabilitatea Alimentară: Produs, Cutie și Palet',
    titleTr: 'Gıda İzlenebilirliği: Ürün, Koli ve Palet',
    slug: 'food-traceability-and-standards',
    slugTr: 'gida-izlenebilirligi-ve-standartlar',
    slugEn: 'food-traceability-and-standards',
    slugRo: 'trasabilitatea-alimentara-si-standarde',
    category: 'Știri',
    categoryEn: 'News',
    date: '2024-07-30',
    author: 'Admin',
    image: '/images/blog/Product-Box-Pallet-Traceability-scaled-1288x724-1-uai-516x344.webp',
    excerpt: 'Trasabilitatea la nivel de produs, cutie si palet este esentiala pentru siguranta alimentara, conformitate legala si eficienta operationala pe intregul lant de aprovizionare.',
    content: `
      <p>In industria alimentara, trasabilitatea se refera la urmarirea si documentarea tuturor proceselor, de la productie pana la consum. Acest proces are un rol critic in asigurarea sigurantei alimentare si a controlului calitatii. Trasabilitatea ofera numeroase beneficii atat pentru producatori, cat si pentru consumatori, asigurand siguranta produselor in multe unitati de productie alimentara.</p>

      <h2>Elementele de baza ale trasabilitatii alimentare</h2>
      <p><strong>Siguranta alimentara:</strong> Sistemele de trasabilitate urmaresc fiecare etapa a traseului unui produs alimentar, de la productie pana la consumatorul final. Acest lucru permite retrageri rapide si eficiente in cazul aparitiei problemelor de calitate. Asigurarea sigurantei alimentare protejeaza sanatatea consumatorilor si reputatia producatorilor.</p>
      <p><strong>Conformitate legala:</strong> Multe tari au implementat reglementari stricte privind trasabilitatea alimentara. Respectarea acestor reglementari a devenit o cerinta legala pentru producatorii si furnizorii din industria alimentara. Sistemele de trasabilitate faciliteaza indeplinirea acestor obligatii legale.</p>
      <p><strong>Controlul calitatii:</strong> Trasabilitatea permite monitorizarea continua a conformitatii produselor cu standardele de calitate. Atunci cand apar erori sau abateri in procesul de productie, produsele neconforme pot fi oprite inainte de a ajunge pe piata.</p>

      <h2>Importanta trasabilitatii la nivel de produs, cutie si palet</h2>
      <p>Trasabilitatea nu se limiteaza la nivelul produsului final; ea trebuie aplicata si cutiilor si paletilor folositi pentru transport. Pentru trasabilitate completa, toate unitatile de transport trebuie inregistrate pe baza numerelor de serie.</p>

      <p><strong>Urmarire detaliata:</strong> Urmarirea produselor introduse in fiecare cutie si a cutiilor incarcate pe fiecare palet permite interventii mai rapide si mai precise atunci cand apar probleme. Acest avantaj este critic, mai ales pentru companiile care produc si distribuie volume mari de produse.</p>
      <p><strong>Eficienta:</strong> Trasabilitatea la nivel de cutie si palet face procesele logistice mai eficiente. Ea reduce erorile in depozitare, transport si distributie, scade costurile si creste eficienta operationala.</p>
      <p><strong>Transparenta:</strong> Transparenta in intregul lant de aprovizionare creste increderea atat pentru producatori, cat si pentru consumatori. Consumatorii pot accesa usor informatii despre originea si istoricul produselor cumparate, iar producatorii pot identifica rapid orice intrerupere in lantul de aprovizionare.</p>
      <p><strong>Managementul riscului:</strong> Trasabilitatea la nivel de cutie si palet minimizeaza riscurile de siguranta alimentara. In cazul contaminarii sau al problemelor de calitate, sursa poate fi identificata rapid, iar produsele afectate pot fi retrase, prevenind crize extinse de sanatate publica.</p>

      `,
  },
  {
    id: 5,
    title: 'Sisteme de Coduri de Bare Utilizate în Trasabilitate',
    titleTr: 'İzlenebilirlikte Kullanılan Barkod Sistemleri',
    slug: 'barcode-systems-used-in-traceability',
    slugTr: 'izlenebilirlikte-kullanilan-barkod-sistemleri',
    slugEn: 'barcode-systems-used-in-traceability',
    slugRo: 'sisteme-de-coduri-de-bare-utilizate-in-trasabilitate',
    category: 'Știri',
    categoryEn: 'News',
    date: '2024-07-23',
    author: 'Admin',
    image: '/images/blog/Traceability-Barcode-Systems-Used-1288x724-1-uai-516x344.webp',
    excerpt: 'Sistemele de coduri de bare sunt esentiale pentru trasabilitate, eficienta operationala si controlul produselor la nivel global.',
    content: `
      <p>In lumea de astazi, aflata intr-un proces rapid de digitalizare, sistemele de coduri de bare au devenit indispensabile pentru cresterea eficientei in procesele de productie si logistica, pentru asigurarea trasabilitatii produselor si pentru simplificarea operatiunilor. Codurile de bare permit urmarirea si gestionarea produselor in fiecare etapa, de la productie pana la consum.</p>
      <p>Istoria tehnologiei codurilor de bare a inceput in 1948, prin dezvoltarea primului sistem optic de scanare de catre Norman Joseph Woodland si Bernard Silver. Primul scanner de coduri de bare a fost utilizat intr-un supermarket din SUA in 1974, marcand inceputul adoptarii comerciale pe scara larga a acestei tehnologii. In Turcia, tehnologia codurilor de bare a fost implementata pentru prima data in 1988, reprezentand un moment important in modernizarea sectorului de retail.</p>
      <p>Tehnologiile de coduri de bare pe care le folosim extensiv in solutiile noastre de trasabilitate sunt critice pentru a asigura ca produsele sunt trasabile la fiecare pas, de la productie pana la consum.</p>

      <h2>Sisteme de coduri de bare utilizate frecvent la nivel mondial</h2>

      <h3>EAN-8</h3>
      <ul>
        <li><strong>Caz de utilizare</strong>: Produse mici</li>
        <li><strong>Structura</strong>: 7 cifre de date si 1 cifra de control</li>
        <li><strong>Caracteristici</strong>: Similar cu EAN-13, dar conceput pentru produse mai mici datorita dimensiunii compacte.</li>
      </ul>

      <h3>EAN-13 (European Article Number)</h3>
      <ul>
        <li><strong>Caz de utilizare</strong>: Produse retail</li>
        <li><strong>Structura</strong>: 12 cifre de date si 1 cifra de control</li>
        <li><strong>Caracteristici</strong>: Utilizat global pentru identificarea produselor, oferind un identificator unic pentru fiecare produs.</li>
      </ul>

      <h3>UPC-A (Universal Product Code)</h3>
      <ul>
        <li><strong>Caz de utilizare</strong>: Produse retail</li>
        <li><strong>Structura</strong>: 11 cifre de date si 1 cifra de control</li>
        <li><strong>Caracteristici</strong>: Similar cu EAN-13, utilizat pe scara larga in Statele Unite pentru identificarea produselor.</li>
      </ul>

      <h3>UPC-E</h3>
      <ul>
        <li><strong>Caz de utilizare</strong>: Produse mici</li>
        <li><strong>Structura</strong>: 6 cifre de date si 1 cifra de control</li>
        <li><strong>Caracteristici</strong>: O versiune compacta a UPC-A, oferind aceeasi functionalitate intr-un spatiu mai mic.</li>
      </ul>

      <h3>Code 39</h3>
      <ul>
        <li><strong>Caz de utilizare</strong>: Aplicatii industriale, logistica</li>
        <li><strong>Structura</strong>: Sir de caractere cu lungime variabila</li>
        <li><strong>Caracteristici</strong>: Suporta caractere alfanumerice, fiind utilizat pe scara larga in productie si managementul depozitelor.</li>
      </ul>

      <h3>Code 128</h3>
      <ul>
        <li><strong>Caz de utilizare</strong>: Logistica, transport</li>
        <li><strong>Structura</strong>: Sir de caractere cu lungime variabila</li>
        <li><strong>Caracteristici</strong>: Capacitate mare de date, suporta diverse seturi de caractere.</li>
      </ul>

      <h3>QR Code (Quick Response Code)</h3>
      <ul>
        <li><strong>Caz de utilizare</strong>: Plati mobile, informatii despre produse, website-uri</li>
        <li><strong>Structura</strong>: Caractere alfanumerice intr-o matrice patrata</li>
        <li><strong>Caracteristici</strong>: Ofera citire rapida si capacitate mare de date, fiind utilizat pe scara larga in aplicatii mobile si campanii de marketing.</li>
      </ul>

      <h3>Data Matrix</h3>
      <ul>
        <li><strong>Caz de utilizare</strong>: Componente electronice, industria farmaceutica</li>
        <li><strong>Structura</strong>: Caractere alfanumerice in module patrate sau dreptunghiulare</li>
        <li><strong>Caracteristici</strong>: Stocheaza cantitati mari de date in spatii mici, cu capacitate ridicata de corectare a erorilor.</li>
      </ul>

      <h3>PDF417</h3>
      <ul>
        <li><strong>Caz de utilizare</strong>: Carti de identitate, documente de calatorie</li>
        <li><strong>Structura</strong>: Cod format din mai multe randuri si coloane</li>
        <li><strong>Caracteristici</strong>: Poate codifica seturi mari de date, fiind utilizat intr-o gama larga de aplicatii.</li>
      </ul>

      <h3>ITF (Interleaved 2 of 5)</h3>
      <ul>
        <li><strong>Caz de utilizare</strong>: Cutii de carton, logistica</li>
        <li><strong>Structura</strong>: Codifica perechi de cifre</li>
        <li><strong>Caracteristici</strong>: Ofera viteza mare de citire si acuratete, utilizat pe scara larga in logistica.</li>
      </ul>

      <h3>Codabar</h3>
      <ul>
        <li><strong>Caz de utilizare</strong>: Biblioteci, banci de sange, sanatate</li>
        <li><strong>Structura</strong>: Format din 16 simboluri, inclusiv patru caractere de start si patru de stop</li>
        <li><strong>Caracteristici</strong>: Simplu si flexibil, potrivit pentru seturi mici de date.</li>
      </ul>

      <h3>MSI (Modified Plessey)</h3>
      <ul>
        <li><strong>Caz de utilizare</strong>: Depozitare, retail</li>
        <li><strong>Structura</strong>: Doar date numerice</li>
        <li><strong>Caracteristici</strong>: Date cu lungime variabila si cifra de control, utilizat frecvent in retail si stocare.</li>
      </ul>

      <h3>Aztec Code</h3>
      <ul>
        <li><strong>Caz de utilizare</strong>: Documente de calatorie, bilete mobile</li>
        <li><strong>Structura</strong>: Module patrate</li>
        <li><strong>Caracteristici</strong>: Capacitate mare de date, citire rapida si corectare robusta a erorilor.</li>
      </ul>

      <h3>MaxiCode</h3>
      <ul>
        <li><strong>Caz de utilizare</strong>: Urmarire colete, logistica</li>
        <li><strong>Structura</strong>: Celule hexagonale in jurul unui punct central</li>
        <li><strong>Caracteristici</strong>: Citire rapida si capacitate mare de date, utilizat in principal de UPS.</li>
      </ul>

      <h3>GS1 DataBar</h3>
      <ul>
        <li><strong>Caz de utilizare</strong>: Retail, produse mici</li>
        <li><strong>Structura</strong>: Contine GTIN din 14 cifre (Global Trade Item Number)</li>
        <li><strong>Caracteristici</strong>: Compact, capabil sa codifice date extinse pentru produse mici.</li>
      </ul>

      <h3>Code 93</h3>
      <ul>
        <li><strong>Caz de utilizare</strong>: Aplicatii industriale, logistica</li>
        <li><strong>Structura</strong>: Sir de caractere cu lungime variabila</li>
        <li><strong>Caracteristici</strong>: Mai compact si mai sigur decat Code 39, oferind densitate mai mare de date.</li>
      </ul>

      <h3>Micro QR Code</h3>
      <ul>
        <li><strong>Caz de utilizare</strong>: Componente electronice, produse mici</li>
        <li><strong>Structura</strong>: Module patrate mici</li>
        <li><strong>Caracteristici</strong>: Capacitate mare de citire in spatii reduse.</li>
      </ul>

      <h3>MicroPDF417</h3>
      <ul>
        <li><strong>Caz de utilizare</strong>: Carti de identitate, etichete mici</li>
        <li><strong>Structura</strong>: Aranjament compact de randuri si coloane</li>
        <li><strong>Caracteristici</strong>: Codifica volume mari de date in spatii mici.</li>
      </ul>

      <h3>GS1-128 (fost UCC/EAN-128)</h3>
      <ul>
        <li><strong>Caz de utilizare</strong>: Logistica, transport, depozitare</li>
        <li><strong>Structura</strong>: Caractere alfanumerice cu lungime variabila</li>
        <li><strong>Caracteristici</strong>: Capacitate mare de date, suporta diversi identificatori de aplicatie.</li>
      </ul>

      <h3>Plessey Code</h3>
      <ul>
        <li><strong>Caz de utilizare</strong>: Biblioteci, retail</li>
        <li><strong>Structura</strong>: Date numerice</li>
        <li><strong>Caracteristici</strong>: Utilizat frecvent in afaceri mici si biblioteci.</li>
      </ul>

      <h3>Code 11</h3>
      <ul>
        <li><strong>Caz de utilizare</strong>: Telecomunicatii</li>
        <li><strong>Structura</strong>: Date numerice si caracterul liniuta</li>
        <li><strong>Caracteristici</strong>: Include una sau doua cifre de control pentru corectarea erorilor.</li>
      </ul>

      <h3>GS1 DataBar Expanded</h3>
      <ul>
        <li><strong>Caz de utilizare</strong>: Produse proaspete, produse cu greutate variabila</li>
        <li><strong>Structura</strong>: GTIN din 14 cifre si date suplimentare</li>
        <li><strong>Caracteristici</strong>: Poate codifica elemente suplimentare precum serii, loturi si date de expirare.</li>
      </ul>

      <h3>Pharmacode</h3>
      <ul>
        <li><strong>Caz de utilizare</strong>: Industria farmaceutica</li>
        <li><strong>Structura</strong>: Doar date numerice</li>
        <li><strong>Caracteristici</strong>: Utilizat pentru detectarea erorilor si acuratete in ambalarea medicamentelor.</li>
      </ul>

      <h3>Han Xin Code</h3>
      <ul>
        <li><strong>Caz de utilizare</strong>: Piata chineza, utilizare generala</li>
        <li><strong>Structura</strong>: Matrice patrata sau dreptunghiulara</li>
        <li><strong>Caracteristici</strong>: Densitate mare de date, suporta atat date numerice, cat si alfanumerice.</li>
      </ul>
    `,
  },
  {
    id: 6,
    title: 'Cum se implementeaza trasabilitatea individuala a produselor?',
    titleTr: 'Bireysel Ürün İzlenebilirliği Nasıl Uygulanır?',
    slug: 'how-to-implement-individual-product-traceability',
    slugTr: 'bireysel-urun-izlenebilirligi-nasil-uygulanir',
    slugEn: 'how-to-implement-individual-product-traceability',
    slugRo: 'cum-se-implementeaza-trasabilitatea-individuala-a-produselor',
    category: 'Știri',
    categoryEn: 'News',
    date: '2021-10-05',
    author: 'Admin',
    image: '/images/blog/Single_Product_Tracking_Siskon-1288x724-1-uai-516x344.webp',
    excerpt: 'Ghid practic pentru implementarea trasabilitatii individuale: coduri unice, tehnologii de marcare si puncte critice de control.',
    content: `
      <p>„Vreau sa urmaresc produsele individual.”</p>

      <p>O propozitie simpla si concisa, nu-i asa? Totusi, cand adaugam intrebarea „Cum pot face acest lucru?”, procesul devine mult mai complex decat pare la prima vedere. Urmarirea individuala a produselor necesita analiza atenta, planificare si integrarea mai multor componente. In aceasta serie de articole, discutam cum sa urmariti produsele individual, de unde sa incepeti si care sunt etapele critice ale procesului.</p>

      <p>Prima regula esentiala a trasabilitatii individuale este atribuirea unui cod unic fiecarui produs. Analiza initiala trebuie sa se concentreze pe modul in care produsul va fi marcat si pe tehnologia folosita. Urmatoarele intrebari va vor ghida eficient procesul:</p>

      <h3><strong>Intrebarea 1: Structura produsului este potrivita pentru marcare? Unde trebuie aplicat marcajul?</strong></h3>
      <p>Analizati produsul si colaborati cu departamente precum marketing, vanzari, calitate, R&amp;D si productie pentru a lua o decizie consolidata. Fiecare departament aduce perspective valoroase pentru stabilirea pozitiei optime de marcare.</p>

      <h3><strong>Intrebarea 2: Ce operatiuni necesita marcare in avans?</strong></h3>
      <p>Priviti procesele de trasabilitate ca pe un lant. Puteti incepe cu un sistem mic de trasabilitate si apoi adauga noi verigi pe masura ce este necesar. Concentrati-va mai intai pe operatiunile critice pe care doriti sa le urmariti, iar abordarea acestei intrebari va deveni mai clara.</p>

      <h3><strong>Intrebarea 3: Codul aplicat pe produs poate ramane lizibil pe parcursul tuturor operatiunilor din productie?</strong></h3>
      <p>Aceasta este o intrebare cruciala. Chiar daca produsul si conditiile permit marcarea la prima statie, operatiunile ulterioare, precum cuptoare, vopsire sau sablare, pot afecta lizibilitatea codului. Trebuie sa va asigurati ca acesta ramane lizibil pe tot fluxul de productie.</p>

      <h3><strong>Intrebarea 4: Ce tehnologie de marcare trebuie folosita?</strong></h3>
      <p>Analiza conduce natural catre aceasta intrebare. Pentru marcare pot fi folosite tehnologii precum inkjet, transfer termic, imprimare laser/fibra de carbon sau, acolo unde este fezabil, etichete RFID. In functie de analiza de la Intrebarea 3, este posibil sa aveti nevoie de etichete rezistente la temperaturi ridicate sau de imprimante laser cu putere mare, pentru coduri mai profunde.</p>

      <p>Timpul de ciclu, fluxul procesului, pozitionarea masinilor si constrangerile de spatiu pot influenta toate raspunsurile la intrebarile de mai sus. O evaluare holistica a acestor factori este esentiala pentru a construi solutia optima.</p>

      <p>Acum, dupa ce suntem pregatiti sa marcam produsul, al doilea pas critic este sa ne asiguram ca fiecare cod este scanat inaintea fiecarei operatiuni. Vom detalia acest subiect in urmatorul articol.</p>

      `,
  },
  {
    id: 7,
    title: 'Care sunt beneficiile sistemelor de trasabilitate ?',
    titleTr: 'İzlenebilirlik Sistemlerinin Faydaları Nelerdir?',
    slug: 'what-are-the-benefits-of-traceability-systems',
    slugTr: 'izlenebilirlik-sistemlerinin-faydalari-nelerdir',
    slugEn: 'what-are-the-benefits-of-traceability-systems',
    slugRo: 'care-sunt-beneficiile-sistemelor-de-trasabilitate',
    category: 'Știri',
    categoryEn: 'News',
    date: '2021-10-04',
    author: 'Admin',
    image: '/images/blog/siskon_izlenebilirlik_nedir.jpg',
    excerpt: 'Odata cu cresterea cerintelor de calitate, sistemele de trasabilitate reduc erorile, optimizeaza costurile si sustin imbunatatirea continua.',
    content: `
      <p>Odata cu avansul tehnologiei, regulile jocului in sectorul manufacturier se schimba. Fie ca vorbim despre companii mari sau IMM-uri, multe organizatii din aceeasi industrie folosesc astazi tehnologii similare de productie. Asadar, ce diferentiaza cu adevarat companiile intr-un mediu atat de competitiv? Raspunsul este elementul care schimba jocul.</p>

      <p><strong>Calitatea.</strong></p>

      <p>Sa produci mai mult in acelasi timp nu mai este suficient; productia de inalta calitate, cu rate reduse de rebut si rework, devine tot mai critica. Din acest motiv, nevoia de sisteme de trasabilitate creste de la o zi la alta. Deci, care sunt beneficiile sistemelor de trasabilitate?</p>

      `,
  },
  {
    id: 8,
    title: 'Ce Sunt Datele de Trasabilitate? Definiția Trasabilității',
    titleTr: 'İzlenebilirlik Verisi Nedir? İzlenebilirlik Tanımı',
    slug: 'what-are-traceability-data-definition-of-traceability',
    slugTr: 'izlenebilirlik-verisi-nedir-izlenebilirlik-tanimi',
    slugEn: 'what-are-traceability-data-definition-of-traceability',
    slugRo: 'ce-sunt-datele-de-trasabilitate-definitia-trasabilitatii',
    category: 'Știri',
    categoryEn: 'News',
    date: '2021-10-02',
    author: 'Admin',
    image: '/images/blog/what_is_traceability.jpg',
    excerpt: 'Datele de trasabilitate includ evenimente de producție, logistică și calitate care fac fiecare parcurs al produsului auditabil și măsurabil.',
    content: `
      <p>Datele de trasabilitate sunt, în esența lor, destul de simple. Trasabilitatea implică înregistrarea tuturor evenimentelor care afectează un produs. Aceste date sunt colectate pe parcursul întregului proces de producție, inclusiv materiale adăugate (BOM și componente critice), unelte utilizate, etapele procesului efectuate și rezultatele testelor, toate înregistrate pe bază de numere de serie.</p>
      <p>Este obișnuit să vedem date de trasabilitate colectate și compilate manual. Orice proces de colectare a datelor care implică intervenție umană ridică îngrijorări cu privire la fiabilitate. Datele colectate manual pe hârtie sunt extrem de susceptibile la erori. În plus, atribuirea operatorilor, care ar trebui să se concentreze doar pe sarcinile de producție cu valoare adăugată, cu responsabilități suplimentare pentru înregistrarea și prelucrarea datelor creează costuri ascunse pentru afaceri.</p>
      <h2><strong>Valorile Trasabilității: Managementul Activ al Calității</strong></h2>
      <p>În loc să ne concentrăm doar pe datele de trasabilitate pentru scenarii de retragere a produselor, ceva ce afacerile nu doresc niciodată să înfrunte, este mult mai valoros să vedem datele de trasabilitate ca pe un instrument de management al calității în timp real. Luați în considerare un scenariu în care un singur defect este înregistrat într-un lot de o mie de produse. De obicei, identificarea exactă a cauzei unor astfel de defecte unice este aproape imposibilă, deoarece acestea par aleatorii. Cu date de trasabilitate fiabile și detaliate, poate fi efectuată o analiză a cauzei primare pentru a identifica condițiile și evenimentele care au dus la defect. Ca parte a unui Sistem de Management al Calității, pot fi definite și implementate acțiuni corective pentru a asigura că eroarea nu se repetă niciodată. Pentru a amplifica beneficiile, acțiuni similare pot fi aplicate altor produse în procese comparabile. Trasabilitatea digitală permite afacerilor să realizeze îmbunătățiri reale și continue către operațiuni de producție fără defecte.</p>
      <h2><strong>Valorile Trasabilității: Conformitate</strong></h2>
      <p>Pe măsură ce electronicele au devenit o componentă critică în industrii precum automotivă, electrocasnice și aerospațială, fiabilitatea produselor electronice este primordială. În cazul potențialelor defecțiuni în produsele finale, determinarea responsabilității pentru defecțiune trebuie evaluată rapid. Furnizorii sunt adesea văzuți ca sursa unor astfel de erori. Conformitatea cu regulile și procedurile convenite protejează furnizorii, dovedind că nu au apărut erori sau abateri în producția unui produs defect. Datele de trasabilitate îndeplinesc aceste cerințe instantaneu, protejând furnizorii de dispute legale costisitoare.</p>
      <p><strong>Cuvinte cheie</strong>: Industrie 4.0, Trasabilitate, Ce este Trasabilitatea?, Definiția Trasabilității</p>
    `,
  },
  {
    id: 9,
    title: 'Sistem de Citire Multi-Cod Bazat pe Camere BOMI Group',
    titleTr: 'BOMI Group Kamera Tabanlı Çoklu Kod Okuma Sistemi',
    slug: 'bomi-group-camera-based-multi-code-reading-system',
    slugTr: 'bomi-group-kamera-tabanli-coklu-kod-okuma-sistemi',
    slugEn: 'bomi-group-camera-based-multi-code-reading-system',
    slugRo: 'sistem-de-citire-multi-cod-bazat-pe-camere-bomi-group',
    category: 'Știri',
    categoryEn: 'News',
    date: '2020-06-08',
    author: 'Admin',
    image: '/images/blog/bomi.jpg',
    excerpt: 'O implementare de citire multi-cod bazată pe camere de către BOMI Group pentru a îmbunătăți viteza și fiabilitatea în fluxurile de identificare industrială.',
    content: `
      <p>Cu acest obiectiv în minte, am proiectat un nou produs pentru vizualizare în sectorul logistic și de depozitare.</p>
      <p>Pentru unul dintre depozitele BOMI Group, un lider global în logistica farmaceutică, am dezvoltat un <strong>Sistem de Citire Multi-Cod Bazat pe Camere</strong>, automatizând procesele efectuate anterior manual.</p>
      <p>Linia, adaptată nevoilor BOMI, constă dintr-o bandă transportoare de 3 metri, 6 camere SICK, un ecran pentru operator și un terminal portabil.</p>
      <p>Acest sistem permite verificarea automată a produselor din lista de comenzi, accelerând procesul și eliminând erorile umane. În sistemul pe care l-am proiectat, un operator plasează o cutie care conține 50 de produse pe banda transportoare. Cutia intră într-o zonă închisă, unde camerele încep să captureze imagini. În câteva secunde, codurile Data Matrix sunt citite și afișate pe sistem și pe ecranul operatorului. Codurile sunt comparate cu lista de comenzi pentru a asigura conformitatea cu standardele BOMI. Codurile neconforme sunt evidențiate în roșu, solicitând corectarea erorii și re-scanarea. Odată aprobată de operator, comanda este finalizată.</p>
      <p>Dacă este necesar, produsele pot fi adăugate manual folosind terminalul portabil.</p>
      <p>Cu Sistemul nostru de Citire Multi-Cod Bazat pe Camere, Siskon a sprijinit partenerul nostru de soluții BOMI în realizarea unor progrese semnificative în gestionarea depozitelor.</p>
      <p>Acest sistem, adaptabil la diverse industrii și aplicații, poate adăuga valoare proceselor dumneavoastră de afaceri. Prezentați-ne marca dumneavoastră și avansați cu încredere către Industria 4.0.</p>
      <p>Siskon continuă să codifice viitorul.</p>
      <p><strong>Cuvinte cheie</strong>: Cod de bare, BOMI Group, Industrie 4.0, Scanare, Siskon</p>
    `,
  },
  {
    id: 10,
    title: 'TUSIAD SD2: Pionier în Transformarea Digitală Industrială',
    titleTr: 'TÜSİAD SD2: Endüstride Dijital Dönüşüme Öncülük Etmek',
    slug: 'tusiad-sd2-pioneering-digital-transformation-in-industry',
    slugTr: 'tusiad-sd2-endustride-dijital-donusume-onculuk-etmek',
    slugEn: 'tusiad-sd2-pioneering-digital-transformation-in-industry',
    slugRo: 'tusiad-sd2-pionier-in-transformarea-digitala-industriala',
    category: 'Știri',
    categoryEn: 'News',
    date: '2019-09-12',
    author: 'Admin',
    image: '/images/blog/TUSIADSD-2019.jpg',
    excerpt: 'Aspecte importante din TUSIAD SD2 și rolul platformelor de date bazate pe trasabilitate în accelerarea transformării digitale industriale.',
    content: `
      <p>Ca prim program cuprinzător axat pe transformarea digitală în industrie, <strong>TUSIAD SD2</strong> a reunit 18 companii lider utilizatoare de tehnologie cu furnizori de tehnologie la scară IMM.</p>
      <p>Companiile potrivite au colaborat pentru a dezvolta dosare de soluții comune. Poveștile de succes din program au fost împărtășite cu publicul la <strong>Ceremonia Poveștilor de Succes în Transformarea Digitală</strong> organizată la sfârșitul anului.</p>
      <p>Al doilea an al programului SD2 al TUSIAD, menit să sprijine transformarea digitală în industrie, a conectat companiile utilizatoare de tehnologie care caută transformarea digitală cu partenerii de soluții potriviți, oferind în același timp furnizorilor de tehnologie o platformă pentru a-și prezenta soluțiile și pentru a le valida cu clienții.</p>
      <p>După fazele de aplicare și pre-selecție, companiile utilizatoare de tehnologie și furnizorii micro, mici și mijlocii de tehnologie pre-selectați s-au întâlnit la <strong>Programul de Integrare Industrie-Tehnologie (STEP)</strong>. În timpul evenimentului STEP, au fost făcute potriviri între utilizatorii de tehnologie și furnizorii de tehnologie pre-selectați. Pe parcursul perioadei următoare, companiile potrivite au lucrat împreună pentru a pregăti dosare de soluții. Poveștile de succes rezultate au fost împărtășite la Ceremonia Poveștilor de Succes în Transformarea Digitală la sfârșitul anului. Evenimentul a prezentat, de asemenea, paneluri cu experți care au discutat subiecte care variază de la sprijinul public la instrumentele de transformare digitală.</p>
      <p>Discursul de deschidere a evidențiat incertitudinile crescânde cu care se confruntă factorii de decizie odată cu a Patra Revoluție Industrială și a subliniat că SD2 a fost lansat pentru a aborda această provocare prin crearea de oportunități de colaborare pentru a avansa ecosistemul regional de inovare industrială.</p>
      <p>Un alt discurs principal a subliniat mediul competitiv intens determinat de transformarea digitală și a subliniat că colaborarea între companii, guverne, universități și alte părți interesate joacă un rol vital în competitivitate. De asemenea, a evidențiat noile abilități de leadership și management necesare în transformarea digitală.</p>
      <p>Detaliile programului au subliniat că TUSIAD SD2 a fost creat pentru a răspunde nevoii unei platforme care conectează utilizatorii de tehnologie cu furnizorii. Programul consolidează ecosistemul utilizatorilor și furnizorilor de tehnologie, răspunde nevoilor utilizatorilor, sprijină producția de tehnologie IMM și prezintă cele mai bune practici în transformarea digitală.</p>
      <p>În observațiile finale, mesajul a fost clar: nu există câștigători sau perdanți în acest program, iar chiar și furnizorii nepotriviți rămân parte dintr-o rețea în creștere care sprijină impulsul industrial și viitoarele povești de succes.</p>
      <h2><strong>Evenimentul STEP al Programului TUSIAD SD2 în Cifre</strong></h2>
      <ul>
        <li><strong>Număr de Companii Utilizatoare de Tehnologie</strong>: 18</li>
        <li><strong>Număr de Furnizori de Tehnologie care au Trimis Soluții pentru Apeluri</strong>: 274</li>
        <li><strong>Număr de Furnizori Pre-selectați Invitați la STEP</strong>: 100</li>
        <li><strong>Număr de Furnizori cu Potențial Ridicat Urmărind Lista Scurtă</strong>: 100</li>
        <li><strong>Număr de Paneliști</strong>: 21</li>
        <li><strong>Număr de Companii Utilizatoare de Tehnologie Participante în Ambele Perioade</strong>: 3</li>
        <li><strong>Număr de Furnizori care au Aplicat în Ambele Perioade</strong>: 52</li>
        <li><strong>Număr de Participanți la Evenimentul STEP</strong>: 329</li>
      </ul>
      <h2><strong>Potriviri:</strong></h2>
      <ul>
        <li>Assan Hanil Otomotiv Sanayi cu Armolis Bilisim și Kesit Bilisim</li>
        <li>Bayer Turk Kimya Sanayi cu Pedudi Bilisim Teknolojileri</li>
        <li>Brisa Bridgestone cu Golive Bilisim</li>
        <li>Cimsa cu Mobirob ARGE</li>
        <li>Ditas cu Konzek Teknoloji</li>
        <li>Ekoten cu Eliar Elektronik</li>
        <li>Enerjisa Enerji cu T4E Enerji</li>
        <li>Kastamonu Entegre cu Buyutech</li>
        <li>Kordsa cu Siskon</li>
        <li>Migros cu AI Labs</li>
        <li>Nobel Ilac cu Simsoft</li>
        <li>Norm Civata cu Alp Otomasyon</li>
        <li>Organik Kimya cu Hareket Kontrol Servis Merkezi</li>
        <li>Securitas Guvenlik cu Arikovani Yazilim</li>
        <li>TFI TAB Gida Yatirimlari cu TUBU ARGE</li>
        <li>Tofas cu B2Metrik Yazilim ve Bilisim</li>
        <li>Umur Basim Sanayi cu Obase Bilgisayar ve Danismanlik</li>
      </ul>
      <p><strong>Sursă</strong>: Ada Gazetesi (adagazetesi.com.tr)</p>
      <p><strong>Cuvinte cheie</strong>: Industrie 4.0, Transformare Industrială, Siskon, TUSIAD SD2</p>
    `,
  },
  {
    id: 11,
    title: 'Siskon la Târgul Viitorului Tehnologiilor Industriale',
    titleTr: "Siskon, Geleceğin Endüstri Teknolojileri Fuarı'nda",
    slug: 'siskon-at-the-future-industrial-technology-fair',
    slugTr: 'siskon-gelecegin-endustri-teknolojileri-fuarinda',
    slugEn: 'siskon-at-the-future-industrial-technology-fair',
    slugRo: 'siskon-la-targul-viitorului-tehnologiilor-industriale',
    category: 'Știri',
    categoryEn: 'News',
    date: '2018-12-18',
    author: 'Admin',
    image: '/images/blog/FIT2-uai-516x344.webp',
    excerpt: 'La FIT, Siskon a prezentat solutii IoT, trasabilitate si automatizare inteligenta pentru digitalizarea completa a productiei.',
    content: `
      <p>Cu solutiile noastre IoT, oferim integrare verticala intre linia de productie, sistemele ERP si platformele cloud. Folosind tehnologii precum cod de bare, cod QR, RFID si Bluetooth, solutiile noastre de trasabilitate va permit sa monitorizati si sa optimizati toate procesele, de la receptia materiilor prime pana la livrare.</p>

      <p>Solutiile noastre de automatizare pentru masini si procese, aplicatii de motion control si automatizare de siguranta asigura integrarea fara intreruperi intre automatizare si software, livrand proiecte la cheie. Solutiile software personalizate, dezvoltate conform standardelor <strong>ISO 15504</strong>, ofera aplicatiile de care aveti nevoie. Analiza Big Data si algoritmii de machine learning optimizeaza procesele de productie si furnizeaza recomandari inteligente pentru mentenanta predictiva.</p>
    `,
  },
  {
    id: 12,
    title: 'Prezentare despre trasabilitate la Evenimentul Industrie 4.0',
    titleTr: 'Endüstri 4.0 Etkinliğinde İzlenebilirlik Sunumu',
    slug: 'traceability-presentation-at-industry-4-0-event',
    slugTr: 'endustri-4-0-etkinliginde-izlenebilirlik-sunumu',
    slugEn: 'traceability-presentation-at-industry-4-0-event',
    slugRo: 'prezentare-despre-trasabilitate-la-evenimentul-industrie-4-0',
    category: 'Știri',
    categoryEn: 'News',
    date: '2018-11-22',
    author: 'Admin',
    image: '/images/blog/Siskon_Endustri40_traceability_SICK-7-uai-516x344.webp',
    excerpt: 'O sesiune dedicata strategiei de trasabilitate in Industrie 4.0, sustinuta de experti Siskon si SICK.',
    content: `
      <p>Va invitam la prezentarea intitulata <strong>Un pas catre 4.0: Trasabilitate</strong>, sustinuta de Managerul de Vanzari Siskon <strong>Cemal Tezcan</strong> si de Managerul de Produs SICK pentru Sisteme de Identificare Automata <strong>Berk Boyaci</strong>.</p>
    `,
  },
  {
    id: 13,
    title: 'Soluții de Trasabilitate la Seminarul de Logistică',
    titleTr: 'Lojistik Seminerinde IoT ve İzlenebilirlik Çözümleri',
    slug: 'iot-dashboard-and-traceability-solutions-at-logistics-seminar',
    slugTr: 'lojistik-seminerinde-iot-panosu-ve-izlenebilirlik-cozumleri',
    slugEn: 'iot-dashboard-and-traceability-solutions-at-logistics-seminar',
    slugRo: 'tablou-de-bord-iot-si-solutii-de-trasabilitate-la-seminarul-de-logistica',
    category: 'Știri',
    categoryEn: 'News',
    date: '2018-11-09',
    author: 'Admin',
    image: '/images/blog/IoT_Dashboard_and_Traceability_Solutions_at_Logistics_Seminar-uai-516x344.webp',
    excerpt: 'Siskon a prezentat dashboard-ul IoT si solutiile de trasabilitate la cel de-al 7-lea seminar de automatizare in logistica.',
    content: `
      <p>Am prezentat <strong>Dashboard-ul IoT</strong>, solutiile noastre de transformare digitala si trasabilitate la <strong>al 7-lea Seminar de Tehnologii de Automatizare in Logistica</strong>, organizat de Asociatia de Logistica <strong>LODER</strong> si <strong>SICK</strong>.</p>
    `,
  },
  {
    id: 14,
    title: 'Procedura Chestny ZNAK: Trasabilitatea în Rusia',
    titleTr: 'Chestny ZNAK Prosedürü: Rusya İzlenebilirlik Sistemi',
    slug: 'chestny-znak-procedure-russias-digital-traceability-system',
    slugTr: 'chestny-znak-proseduru-rusyanin-dijital-izlenebilirlik-sistemi',
    slugEn: 'chestny-znak-procedure-russias-digital-traceability-system',
    slugRo: 'procedura-chestny-znak-sistemul-digital-de-trasabilitate-al-rusiei',
    category: 'Știri',
    categoryEn: 'News',
    date: '2024-12-05',
    author: 'Admin',
    image: '/images/blog/CHESTNY-ZNAK-Track-and-Trace-System-of-Russia.webp',
    excerpt: 'Lansat in 2019, Chestny ZNAK este o platforma digitala obligatorie de trasabilitate care permite urmarirea produselor prin identificatori unici pe intregul lant de aprovizionare.',
    content: `
      <p>Pentru a combate contrafacerea și pentru a crește încrederea consumatorilor, Chestny ZNAK oferă un sistem digital de trasabilitate obligatoriu la nivelul Federației Ruse.</p>
      <p>Articolul complet este disponibil în variantele localizate EN/TR/RO și explică sectoarele acoperite, pașii de implementare și impactul asupra conformității.</p>
    `,
  },
];
