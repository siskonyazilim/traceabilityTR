import { getFaqPageSchema } from '../../components/seo/OrganizationSchema';

const BUNDLES = {
  blogList: {
    tr: {
      title: 'Blog SSS',
      items: [
        {
          question: 'Blog içerikleri üretim ekiplerine nasıl fayda sağlar?',
          answer:
            'Blog içerikleri, üretimde sık karşılaşılan izlenebilirlik ve kalite sorunlarına doğrudan uygulanabilir çözüm yolları sunar. Her yazı; süreç tasarımı, veri toplama, doğrulama ve operasyon takibi için pratik karar çerçevesi verir. Böylece ekipler yalnızca teori değil, sahada uygulanabilir adımlar üzerinden ilerleyebilir.',
        },
        {
          question: 'Hangi konulardaki yazılar benim için öncelikli olmalı?',
          answer:
            'Öncelik, fabrikanızın mevcut darboğazına göre belirlenmelidir. Kod okuma hataları, yanlış montaj, geri çağırma riski veya depo görünürlüğü gibi başlıklarda sorun yaşıyorsanız RFID, Poka Yoke, MES-ERP entegrasyonu ve izlenebilirlik doğrulama içerikleri en yüksek etkiyi sağlar.',
        },
        {
          question: 'Yazılardaki önerileri sahaya nasıl uyarlayabilirim?',
          answer:
            'Önerileri doğrudan kopyalamak yerine önce mevcut süreç akışınızı, veri noktalarınızı ve kalite hedeflerinizi eşleyin. Ardından yazıdaki yaklaşımı küçük bir pilot hatta test edin, ölçülebilir KPI tanımlayın ve sonuçları doğrulayın. Bu yöntem, yatırımı kontrollü ilerletir ve ölçeklemeyi güvenli hale getirir.',
        },
      ],
    },
    en: {
      title: 'Blog FAQ',
      items: [
        {
          question: 'How do blog articles help manufacturing teams?',
          answer:
            'Blog articles provide practical guidance for common traceability and quality problems in production. Each article translates concepts into actionable decisions for process design, data capture, verification, and operational follow-up. This helps teams move from theory to measurable improvements on real production lines.',
        },
        {
          question: 'Which topics should I prioritize first?',
          answer:
            'Start with the bottleneck that creates the highest operational risk. If you face read failures, assembly errors, recall exposure, or warehouse visibility gaps, focus on RFID, Poka Yoke, MES-ERP integration, and verification workflows. These topics usually produce fast and measurable impact in industrial environments.',
        },
        {
          question: 'How can I adapt article recommendations to my plant?',
          answer:
            'Do not copy recommendations blindly. First map your process steps, data points, and quality targets. Then validate the approach on a limited pilot line with clear KPIs, compare before/after performance, and scale only after proof. This lowers risk and keeps modernization aligned with business goals.',
        },
      ],
    },
    ro: {
      title: 'Intrebari Frecvente Blog',
      items: [
        {
          question: 'Cum ajuta articolele blog echipele din productie?',
          answer:
            'Articolele blog ofera recomandari practice pentru problemele frecvente de trasabilitate si calitate din productie. Fiecare material transforma conceptele in decizii aplicabile pentru proiectarea proceselor, colectarea datelor, verificare si urmarirea operatiunilor. Astfel, echipele pot obtine rezultate masurabile in linia de productie.',
        },
        {
          question: 'Ce teme ar trebui sa prioritizez prima data?',
          answer:
            'Prioritatea trebuie stabilita in functie de blocajul cu cel mai mare risc operational. Daca aveti erori de citire, greseli de montaj, risc de rechemare sau vizibilitate redusa in depozit, incepeti cu RFID, Poka Yoke, integrare MES-ERP si procese de verificare a trasabilitatii.',
        },
        {
          question: 'Cum aplic recomandarile din articole in fabrica mea?',
          answer:
            'Nu aplicati recomandarile identic fara validare. Cartografiati fluxul actual, punctele de date si obiectivele de calitate, apoi testati abordarea pe o linie pilot cu KPI clari. Dupa compararea performantelor inainte si dupa, extindeti implementarea in mod controlat si sustenabil.',
        },
      ],
    },
  },
  contact: {
    tr: {
      title: 'Iletisim SSS',
      items: [
        {
          question: 'Ilk gorusmede hangi bilgileri paylasmaliyim?',
          answer:
            'Ilk gorusmede urun tipi, hat sayisi, vardiya yapisi, mevcut ERP veya MES sistemi ve yasadiginiz ana operasyon sorunu paylasilmalidir. Bu bilgiler, ekibimizin teknik kapsamı hizli netlestirmesine ve size uygun izlenebilirlik yol haritasi olusturmasina yardimci olur.',
        },
        {
          question: 'Proje kesfi ne kadar surede planlanir?',
          answer:
            'Talebiniz alindiktan sonra kesif gorusmesi genellikle kisa surede planlanir. Kesifte surec akisi, veri noktalariniz, kalite hedefleriniz ve entegrasyon gereksinimleriniz degerlendirilir. Bu adim sonrasinda kapsam, oncelik ve uygulama yaklasimi daha net bir sekilde tanimlanir.',
        },
        {
          question: 'Destek sadece Turkiye ile mi sinirli?',
          answer:
            'Hizmet kapsamimiz sadece tek bir ulkeyle sinirli degildir. Proje yapisina gore uzaktan teknik calisma, saha devreye alma ve cok ulkeli ekip koordinasyonu birlikte planlanabilir. Boylesi bir model, farkli tesislerde standardizasyon ve surec tutarliligi saglamaya yardimci olur.',
        },
      ],
    },
    en: {
      title: 'Contact FAQ',
      items: [
        {
          question: 'What information should I share in the first call?',
          answer:
            'In the first call, share your product type, line count, shift model, current ERP or MES environment, and the main operational pain point. This context allows our team to define the right technical scope quickly and prepare a relevant traceability implementation roadmap for your facility.',
        },
        {
          question: 'How quickly can a discovery session be arranged?',
          answer:
            'After your request is received, a discovery session is typically scheduled shortly. During this step we review process flow, data points, quality goals, and integration constraints. The output is a clearer definition of project scope, priorities, and an implementation approach aligned with business objectives.',
        },
        {
          question: 'Is support limited to a single country?',
          answer:
            'Support is not limited to one country. Depending on your project structure, remote technical work, on-site commissioning, and multi-country coordination can be planned together. This model helps organizations standardize traceability practices and maintain operational consistency across multiple plants.',
        },
      ],
    },
    ro: {
      title: 'Intrebari Frecvente Contact',
      items: [
        {
          question: 'Ce informatii trebuie sa ofer la prima discutie?',
          answer:
            'La prima discutie este util sa mentionati tipul produselor, numarul liniilor, modelul de lucru in schimburi, sistemele ERP sau MES existente si principalul blocaj operational. Acest context ne permite sa definim rapid directia tehnica potrivita pentru proiectul dumneavoastra de trasabilitate.',
        },
        {
          question: 'In cat timp poate fi programata sesiunea de analiza?',
          answer:
            'Dupa trimiterea solicitarii, sesiunea de analiza este de regula programata rapid. In cadrul ei evaluam fluxul de proces, punctele de date, obiectivele de calitate si nevoile de integrare. Rezultatul este o definire mai clara a scopului, prioritatilor si pasilor de implementare.',
        },
        {
          question: 'Suportul este limitat la o singura tara?',
          answer:
            'Suportul nu este limitat la o singura tara. In functie de structura proiectului, putem combina activitati tehnice remote, punere in functiune la fata locului si coordonare intre echipe din mai multe regiuni. Acest model sustine standardizarea proceselor in fabrici multiple.',
        },
      ],
    },
  },
  policy: {
    tr: {
      title: 'Politika SSS',
      items: [
        {
          question: 'Bu sayfadaki politika neden onemlidir?',
          answer:
            'Bu politika, web sitesinde hangi verilerin hangi amacla kullanildigini aciklar ve kullaniciya acik bir bilgilendirme sunar. Veri yonetimindeki seffaflik, yasal uyum kadar guven iliskisi icin de kritiktir. Politika metni, ziyaretcilerin haklarini ve kontrol seceneklerini somutlastirir.',
        },
        {
          question: 'Politika metni ne zaman guncellenir?',
          answer:
            'Politika metni; yasal gereklilikler, teknik altyapi degisiklikleri veya veri isleme sureclerinde gercek bir guncelleme oldugunda revize edilir. Guncellemeler, metin iceriginde gorunur sekilde yayinlanir. Boylece ziyaretciler, hangi degisikligin neyi etkiledigini daha net takip edebilir.',
        },
        {
          question: 'Haklarim veya tercihlerim icin nasil iletisime gecebilirim?',
          answer:
            'Veri haklari, izin tercihleri veya politika kapsamindaki sorulariniz icin iletisim sayfasindaki resmi kanallari kullanabilirsiniz. Talebiniz alindiginda ilgili ekip tarafindan kayda alinir ve uygun surecte yanitlanir. Bu surec, hesap verilebilirlik ve izlenebilirlik prensipleriyle yonetilir.',
        },
      ],
    },
    en: {
      title: 'Policy FAQ',
      items: [
        {
          question: 'Why is this policy page important?',
          answer:
            'This policy explains what data is processed and for which purposes on the website. Clear disclosure is essential not only for legal compliance but also for user trust. The content provides practical clarity about user rights, processing boundaries, and available control options in a transparent format.',
        },
        {
          question: 'When is the policy content updated?',
          answer:
            'Policy content is updated when legal requirements change, technical infrastructure evolves, or data processing practices are genuinely revised. Updates are reflected in visible page content so visitors can review what changed and why. This keeps compliance communication consistent and auditable over time.',
        },
        {
          question: 'How can I contact you about my rights or preferences?',
          answer:
            'For questions about your data rights, consent preferences, or policy scope, use the official contact channels listed on the contact page. Requests are recorded and handled by the relevant team through a defined process. This approach supports accountability and operational traceability in communication.',
        },
      ],
    },
    ro: {
      title: 'Intrebari Frecvente Politica',
      items: [
        {
          question: 'De ce este importanta aceasta pagina de politica?',
          answer:
            'Aceasta politica explica ce date sunt prelucrate si in ce scop pe acest website. Claritatea informatiilor este esentiala atat pentru conformitate legala, cat si pentru increderea utilizatorilor. Continutul paginii ofera o prezentare transparenta a drepturilor, limitelor de prelucrare si optiunilor de control.',
        },
        {
          question: 'Cand este actualizat continutul politicii?',
          answer:
            'Continutul politicii este actualizat atunci cand apar schimbari legislative, modificari tehnice reale sau ajustari ale practicilor de prelucrare a datelor. Actualizarile sunt publicate vizibil in pagina, astfel incat vizitatorii sa poata intelege ce s-a schimbat si de ce.',
        },
        {
          question: 'Cum va pot contacta pentru drepturile sau preferintele mele?',
          answer:
            'Pentru intrebari legate de drepturile privind datele, preferintele de consimtamant sau domeniul politicii, folositi canalele oficiale din pagina de contact. Solicitarea este inregistrata si tratata de echipa relevanta printr-un proces clar. Acest model sustine responsabilitatea si trasabilitatea comunicarii.',
        },
      ],
    },
  },
  partnerDetail: {
    tr: {
      title: 'Cozum Ortagi SSS',
      items: [
        {
          question: 'Bu cozum ortagi hangi konularda deger saglar?',
          answer:
            'Bu sayfada yer alan cozum ortagi; izlenebilirlik, otomasyon ve veri dogrulama sureclerinde teknik kapasiteyi guclendiren teknolojiler sunar. Sensor, yazilim veya donanim odakli yetkinlikleri sayesinde uretim hatlarinda kalite kontrolu, gorunurluk ve operasyonel tutarlilik hedeflerine ulasmayi kolaylastirir.',
        },
        {
          question: 'Partner teknolojileri mevcut sistemlere nasil uyarlanir?',
          answer:
            'Uyarlama surecinde once mevcut hat yapisi ve veri akis modeli analiz edilir. Ardindan cozum ortagi teknolojileri; MES, ERP ve saha ekipmanlariyla entegre olacak sekilde pilot uygulamada dogrulanir. Bu asamali yaklasim, devreye alma riskini azaltir ve olculebilir sonuc uretir.',
        },
        {
          question: 'Bu partnerle proje planlarken ilk adim nedir?',
          answer:
            'Ilk adim, hedeflenen is sonucunu netlestirmektir: kalite iyilesmesi, izleme hassasiyeti, verimlilik veya geri cagirma riskinin azaltilmasi gibi. Sonrasinda teknik kapsam, saha gereksinimleri ve entegrasyon sinirlari tanimlanir. Boylece proje, dogru onceliklerle ve uygulanabilir bir yol haritasiyla baslar.',
        },
      ],
    },
    en: {
      title: 'Solution Partner FAQ',
      items: [
        {
          question: 'What value does this solution partner provide?',
          answer:
            'This solution partner contributes technologies that strengthen traceability, automation, and data verification capabilities. Depending on the partner profile, value can come from sensors, software, or industrial hardware. The result is better quality control, clearer operational visibility, and more consistent execution across production workflows.',
        },
        {
          question: 'How are partner technologies integrated with existing systems?',
          answer:
            'Integration starts with assessing the current line architecture and data flow model. Partner technologies are then validated in a controlled pilot with MES, ERP, and shop-floor equipment connections. This phased method lowers commissioning risk while creating measurable and scalable operational outcomes.',
        },
        {
          question: 'What is the first step when planning a project with this partner?',
          answer:
            'The first step is to define the target business outcome, such as quality improvement, tracking precision, throughput, or recall risk reduction. After that, scope, field requirements, and integration boundaries are clarified. This ensures implementation starts with clear priorities and a realistic execution roadmap.',
        },
      ],
    },
    ro: {
      title: 'Intrebari Frecvente Partener',
      items: [
        {
          question: 'Ce valoare aduce acest partener de solutii?',
          answer:
            'Acest partener aduce tehnologii care consolideaza capacitatile de trasabilitate, automatizare si verificare a datelor. In functie de profil, contributia poate fi prin senzori, software sau echipamente industriale. Rezultatul este un control mai bun al calitatii, vizibilitate operationala crescuta si executie mai consistenta.',
        },
        {
          question: 'Cum se integreaza tehnologiile partenerului cu sistemele existente?',
          answer:
            'Integrarea incepe cu evaluarea arhitecturii liniilor si a fluxului actual de date. Tehnologiile partenerului sunt apoi validate intr-un pilot controlat, conectat la MES, ERP si echipamentele din productie. Aceasta abordare in etape reduce riscul de punere in functiune si sustine rezultate scalabile.',
        },
        {
          question: 'Care este primul pas pentru planificarea unui proiect cu acest partener?',
          answer:
            'Primul pas este definirea rezultatului de business urmarit, cum ar fi imbunatatirea calitatii, precizia urmaririi, cresterea productivitatii sau reducerea riscului de rechemare. Dupa aceea se clarifica scopul tehnic, cerintele din teren si limitele de integrare pentru un plan executabil.',
        },
      ],
    },
  },
  referenceProjects: {
    tr: {
      title: 'Referans Projeler SSS',
      items: [
        {
          question: 'Referans projeler seciminde nelere bakmaliyim?',
          answer:
            'Referans proje seciminde sektor benzerligi, proses karmasikligi, entegrasyon seviyesi ve elde edilen olculebilir ciktilar birlikte degerlendirilmelidir. Benzer uretim kosullarinda basarili olan projeler, kendi tesisinizde uygulanabilirlik konusunda daha guclu bir karar zemini olusturur ve yatirim riskini azaltir.',
        },
        {
          question: 'Bu projelerden kendi fabrikam icin ne ogrene bilirim?',
          answer:
            'Bu projeler, farkli tesislerde uygulanan izlenebilirlik yaklasimlarinin hangi sorunlari cozdigunu gosterir. Izlenen veri noktalarini, entegrasyon kurgusunu ve kalite ile verim etkilerini inceleyerek kendi tesisiniz icin daha uygulanabilir ve olculebilir bir modernizasyon yol haritasi cikarabilirsiniz.',
        },
        {
          question: 'Benzer bir projeyi ne kadar hizli baslatabilirim?',
          answer:
            'Baslangic hizi, mevcut altyapi olgunlugu ve hedef kapsam netligine baglidir. Tipik olarak once kisa bir kesif ve teknik analiz yapilir, sonra pilot saha belirlenir. Pilotta dogrulanan model asamali olarak yayginlastirilir. Bu yaklasim, sureyi kisaltirken operasyonel riski kontrollu tutar.',
        },
      ],
    },
    en: {
      title: 'Reference Projects FAQ',
      items: [
        {
          question: 'What should I evaluate when reviewing reference projects?',
          answer:
            'When reviewing reference projects, evaluate industry similarity, process complexity, integration depth, and measurable outcomes together. Cases proven under comparable production conditions offer stronger decision support for your own facility and reduce implementation uncertainty before investment commitments are made.',
        },
        {
          question: 'What can I learn from these projects for my own plant?',
          answer:
            'These projects show how traceability approaches solve specific operational problems in real environments. By examining tracked data points, integration architecture, and impact on quality or throughput KPIs, you can design a more realistic roadmap for your own modernization program with lower execution risk.',
        },
        {
          question: 'How quickly can a similar project be started?',
          answer:
            'Start speed depends on infrastructure readiness and scope clarity. The typical path is a short discovery and technical assessment, followed by a pilot line selection. After pilot validation, rollout is expanded in stages. This sequence accelerates progress while keeping operational and integration risks under control.',
        },
      ],
    },
    ro: {
      title: 'Intrebari Frecvente Proiecte',
      items: [
        {
          question: 'Ce trebuie sa evaluez cand analizez proiectele de referinta?',
          answer:
            'La analiza proiectelor de referinta este important sa evaluati impreuna similaritatea de industrie, complexitatea proceselor, nivelul de integrare si rezultatele masurabile. Cazurile validate in conditii apropiate de fabrica dumneavoastra ofera o baza decizionala mai solida si reduc riscul implementarii.',
        },
        {
          question: 'Ce pot invata din aceste proiecte pentru propria fabrica?',
          answer:
            'Aceste proiecte arata cum abordarile de trasabilitate rezolva probleme operationale concrete in medii reale. Analizand punctele de date urmarite, arhitectura integrarilor si impactul asupra KPI-urilor de calitate sau productivitate, puteti construi un plan de modernizare mai realist.',
        },
        {
          question: 'Cat de repede pot porni un proiect similar?',
          answer:
            'Viteza de pornire depinde de maturitatea infrastructurii si claritatea obiectivelor. In mod obisnuit, procesul incepe cu o analiza tehnica scurta si selectarea unei linii pilot. Dupa validarea pilotului, extinderea se face etapizat. Aceasta abordare accelereaza progresul si mentine riscul sub control.',
        },
      ],
    },
  },
  catalogProducts: {
    tr: {
      title: 'Urun Detay SSS',
      items: [
        {
          question: 'Bu urun hangi operasyon sorununu cozer?',
          answer:
            'Bu urun, izlenebilirlik akisini guclendirerek uretilen verinin dogrulanmasi ve surec gorunurlugunun artirilmasi gibi temel operasyon ihtiyaclarini hedefler. Hat uzerindeki kritik kontrol noktalarinda dogru veri toplama saglayarak kalite hatalarinin erken tespit edilmesine ve geri donus maliyetlerinin azaltilmasina yardimci olur.',
        },
        {
          question: 'Mevcut MES veya ERP sistemime entegre edilebilir mi?',
          answer:
            'Urun cozumleri tipik olarak mevcut MES ve ERP altyapilariyla entegre calisacak sekilde planlanir. Entegrasyon kapsaminda veri alanlari, tetikleyiciler ve surec akislari analiz edilir. Pilot asamada teknik uyum dogrulanir ve sonrasinda canli ortama kontrollu gecis yapilarak operasyonel sureklilik korunur.',
        },
        {
          question: 'Urun seciminde en kritik karar kriterleri nelerdir?',
          answer:
            'Urun seciminde proses karmasikligi, cevrim suresi, okunabilirlik kosullari, saha ortami ve raporlama ihtiyaci birlikte degerlendirilmelidir. Bu kriterler, yalnizca teknik uygunlugu degil uzun vadeli olceklendirilebilirligi de belirler. Dogru secim, hem hizli devreye alma hem de olculebilir performans kazanimi saglar.',
        },
      ],
    },
    en: {
      title: 'Product Detail FAQ',
      items: [
        {
          question: 'Which operational problem does this product solve?',
          answer:
            'This product is designed to strengthen traceability flow and improve process visibility through reliable data capture and validation. By supporting critical control points on the production line, it helps teams detect quality deviations earlier, reduce rework loops, and lower operational risk in high-volume environments.',
        },
        {
          question: 'Can it integrate with our existing MES or ERP systems?',
          answer:
            'Yes, integration is typically planned around existing MES and ERP architecture. Data fields, process triggers, and synchronization rules are reviewed in scope definition, then validated in a pilot. After technical fit is proven, rollout moves to production in controlled phases to protect continuity and data consistency.',
        },
        {
          question: 'What are the key decision criteria when selecting this product?',
          answer:
            'Selection should consider process complexity, cycle time, read conditions, shop-floor environment, and reporting needs together. These criteria define not only technical fit but also long-term scalability. A well-matched choice accelerates commissioning while creating measurable gains in traceability and operational performance.',
        },
      ],
    },
    ro: {
      title: 'Intrebari Frecvente Produs',
      items: [
        {
          question: 'Ce problema operationala rezolva acest produs?',
          answer:
            'Acest produs este conceput pentru a consolida fluxul de trasabilitate si vizibilitatea proceselor prin colectare si validare corecta a datelor. In punctele critice ale liniei de productie, ajuta la identificarea timpurie a abaterilor de calitate, reducerea refacerilor si scaderea riscului operational.',
        },
        {
          question: 'Se poate integra cu sistemele noastre MES sau ERP existente?',
          answer:
            'Da, integrarea este de regula planificata pe baza arhitecturii MES si ERP existente. In faza de analiza se definesc campurile de date, regulile de sincronizare si punctele de declansare, apoi compatibilitatea se valideaza intr-un pilot. Dupa confirmare, implementarea se extinde etapizat in productie.',
        },
        {
          question: 'Care sunt criteriile cheie pentru alegerea produsului?',
          answer:
            'Alegerea trebuie facuta pe baza complexitatii procesului, timpului de ciclu, conditiilor de citire, mediului din productie si cerintelor de raportare. Aceste criterii influenteaza atat potrivirea tehnica, cat si scalabilitatea pe termen lung. O selectie corecta accelereaza implementarea si creste performanta operationala.',
        },
      ],
    },
  },
  catalogSolutions: {
    tr: {
      title: 'Cozum Detay SSS',
      items: [
        {
          question: 'Bu cozum hangi is hedeflerine hizmet eder?',
          answer:
            'Bu cozum; kalite tutarliligi, izlenebilirlik kapsami, operasyon hizi ve surec denetlenebilirligi gibi temel is hedeflerini destekler. Uretim akisi boyunca veri gorunurlugunu artirarak karar surecini hizlandirir. Boylece hat performansi daha olculebilir hale gelir ve surekli iyilestirme adimlari somut verilere dayanir.',
        },
        {
          question: 'Cozumun devreye alinmasi hangi asamalardan gecer?',
          answer:
            'Devreye alma genellikle kesif, teknik tasarim, entegrasyon, pilot dogrulama ve kademeli yayginlastirma asamalarindan olusur. Her adimda kapsam ve riskler tekrar gozden gecirilir. Bu yontem, proje hizini korurken canli operasyonu kesintiye ugratmadan gecis yapilmasina imkan verir.',
        },
        {
          question: 'Bu cozum farkli tesislere olceklendirilebilir mi?',
          answer:
            'Cozum mimarisi standart veri modeli ve tekrar kullanilabilir entegrasyon prensipleriyle kurgulandiginda farkli tesislere olceklendirilebilir. Pilot hatta dogrulanan yaklasim, benzer proseslere sahip diger hatlara uyarlanir. Bu sayede kurum genelinde standardizasyon ve operasyonel tutarlilik saglanabilir.',
        },
      ],
    },
    en: {
      title: 'Solution Detail FAQ',
      items: [
        {
          question: 'Which business goals does this solution support?',
          answer:
            'This solution supports core goals such as quality consistency, traceability coverage, operational speed, and process auditability. By increasing data visibility across production flow, it improves decision quality and response time. Teams can then run continuous improvement programs with measurable KPIs instead of assumptions.',
        },
        {
          question: 'What are the typical implementation stages for this solution?',
          answer:
            'Implementation usually follows discovery, technical design, integration, pilot validation, and phased rollout. Scope and risks are reviewed at each stage to keep execution controlled. This approach protects live operations while still maintaining momentum and predictable delivery across production and IT teams.',
        },
        {
          question: 'Can this solution be scaled to multiple plants?',
          answer:
            'Yes, when the architecture is based on a standardized data model and reusable integration patterns, scaling to multiple plants becomes practical. A validated pilot setup can be adapted to similar lines and facilities. This enables enterprise-wide standardization and stronger operational consistency across locations.',
        },
      ],
    },
    ro: {
      title: 'Intrebari Frecvente Solutie',
      items: [
        {
          question: 'Ce obiective de business sustine aceasta solutie?',
          answer:
            'Aceasta solutie sustine obiective esentiale precum consistenta calitatii, acoperirea trasabilitatii, viteza operationala si auditabilitatea proceselor. Prin cresterea vizibilitatii datelor pe fluxul de productie, imbunatateste calitatea deciziilor si timpul de reactie. Astfel, optimizarile ulterioare devin masurabile.',
        },
        {
          question: 'Care sunt etapele tipice de implementare pentru aceasta solutie?',
          answer:
            'Implementarea urmeaza de obicei etapele de analiza, proiectare tehnica, integrare, validare pilot si extindere etapizata. La fiecare pas sunt revizuite scopul si riscurile pentru a mentine controlul executiei. Acest model protejeaza operatiunile active si asigura o livrare predictibila.',
        },
        {
          question: 'Poate fi extinsa aceasta solutie in mai multe fabrici?',
          answer:
            'Da, daca arhitectura foloseste un model de date standardizat si modele de integrare reutilizabile, extinderea in mai multe fabrici devine sustenabila. Configuratia validata in pilot poate fi adaptata liniilor similare. Rezultatul este standardizare la nivel de companie si consistenta operationala crescuta.',
        },
      ],
    },
  },
};

export function getAeoFaqBundle(pageType, locale = 'tr') {
  const bundle = BUNDLES[pageType] || BUNDLES.blogList;
  return bundle[locale] || bundle.tr;
}

export function getAeoFaqSchema(pageType, locale, pageUrl) {
  const bundle = getAeoFaqBundle(pageType, locale);
  return getFaqPageSchema(locale, pageUrl, bundle.items);
}

function getReferenceDetailTitle(locale) {
  if (locale === 'en') return 'Reference Project FAQ';
  if (locale === 'ro') return 'Intrebari Frecvente Proiect';
  return 'Referans Proje SSS';
}

function getProjectTechList(project) {
  const techs = Array.isArray(project?.technologies) ? project.technologies.filter(Boolean) : [];
  return techs.slice(0, 3).join(', ');
}

function buildReferenceDetailFaqItems(locale, project) {
  const title = project?.title || '';
  const sector = project?.sector || '';
  const year = project?.referenceDateLabel || project?.referenceDate || '';
  const techList = getProjectTechList(project);
  const yearText = year ? ` (${year})` : '';

  if (locale === 'en') {
    return [
      {
        question: `What operational need does the ${title} project address?`,
        answer:
          `${title} focuses on measurable traceability and quality outcomes in ${sector || 'industrial'} operations. It targets visibility gaps, verification weaknesses, and process consistency risks so teams can make faster and evidence-based production decisions.`,
      },
      {
        question: `How can a similar implementation be adapted to our line?`,
        answer:
          'A similar implementation starts with process mapping, data-point selection, and pilot scope definition. Integration boundaries with MES/ERP and shop-floor devices are validated first, then rollout is expanded in phases after KPI confirmation.',
      },
      {
        question: `Which technologies stand out in this project?`,
        answer:
          `${techList || 'Barcode, RFID, MES integration'} are key technologies used in this case${yearText}. The final stack should still be validated against your process constraints, throughput, and quality targets before production rollout.`,
      },
    ];
  }

  if (locale === 'ro') {
    return [
      {
        question: `Ce nevoie operationala acopera proiectul ${title}?`,
        answer:
          `${title} urmareste rezultate masurabile de trasabilitate si calitate in operatiuni ${sector || 'industriale'}. Proiectul reduce lipsa de vizibilitate, riscurile de verificare si variatiile de proces, pentru decizii de productie mai rapide si mai corecte.`,
      },
      {
        question: 'Cum poate fi adaptata o implementare similara la linia noastra?',
        answer:
          'Implementarea incepe cu maparea proceselor, definirea punctelor de date si un pilot controlat. Limitele de integrare cu MES/ERP si echipamentele din productie se valideaza mai intai, apoi extinderea se face etapizat dupa confirmarea KPI-urilor.',
      },
      {
        question: 'Ce tehnologii sunt esentiale in acest proiect?',
        answer:
          `${techList || 'Coduri de bare, RFID, integrare MES'} sunt tehnologii centrale in acest caz${yearText}. Configuratia finala trebuie validata in functie de constrangerile procesului, ritmul de productie si obiectivele de calitate.`,
      },
    ];
  }

  return [
    {
      question: `${title} projesi hangi operasyon ihtiyacini hedefliyor?`,
      answer:
        `${title}, ${sector || 'endustriyel'} operasyonlarda izlenebilirlik ve kaliteyi olculebilir sekilde guclendirmeyi hedefler. Gorunurluk eksikleri, dogrulama zafiyetleri ve surec degiskenligini azaltarak daha hizli ve veriye dayali karar alinmasini destekler.`,
    },
    {
      question: 'Benzer bir cozum bizim hattimiza nasil uyarlanir?',
      answer:
        'Uyarlama sureci, proses akisi ve veri noktalarinin haritalanmasi ile baslar. MES/ERP ve saha ekipmanlariyla entegrasyon sinirlari once pilotta dogrulanir, KPI sonuclari alindiktan sonra cozum kademeli olarak yayginlastirilir.',
    },
    {
      question: 'Bu projede one cikan teknolojiler nelerdir?',
      answer:
        `${techList || 'Barkod, RFID, MES entegrasyonu'} bu vakada one cikan teknolojilerdir${yearText}. Nihai teknoloji kombinasyonu, tesisinizin cevrim suresi, kalite hedefi ve saha kosullarina gore pilotla dogrulanmalidir.`,
    },
  ];
}

export function getReferenceDetailAeoFaqBundle(locale = 'tr', project = null) {
  if (!project) return null;
  return {
    title: getReferenceDetailTitle(locale),
    items: buildReferenceDetailFaqItems(locale, project),
  };
}

export function getReferenceDetailAeoFaqSchema(locale, pageUrl, project = null) {
  const safeLocale = locale || 'tr';
  const bundle = getReferenceDetailAeoFaqBundle(safeLocale, project);
  if (!bundle) return null;
  return getFaqPageSchema(safeLocale, pageUrl, bundle.items);
}

function getBlogDetailFaqTitle(locale) {
  if (locale === 'en') return 'Article FAQ';
  if (locale === 'ro') return 'Intrebari Frecvente Articol';
  return 'Yazi SSS';
}

function getBlogCategory(post, locale) {
  if (!post) return '';
  if (locale === 'en') return post.categoryEn || post.category || '';
  return post.category || '';
}

function buildBlogDetailFaqItems(locale, post) {
  const title = String(post?.title || '').trim();
  const category = String(getBlogCategory(post, locale)).trim();
  const readTime = Number.isFinite(Number(post?.readTime)) ? Number(post.readTime) : null;
  const readTimeText = readTime ? String(readTime) : '';
  const readTimeSuffixEn = readTimeText ? ` (about ${readTimeText} minutes to read)` : '';
  const readTimeSuffixRo = readTimeText ? ` (timp estimat: ${readTimeText} minute)` : '';
  const readTimeSuffixTr = readTimeText ? ` (yaklasik ${readTimeText} dakika)` : '';

  if (locale === 'en') {
    return [
      {
        question: `What is the key takeaway from "${title}"?`,
        answer:
          `The article summarizes practical actions to improve traceability decisions in ${category || 'industrial'} operations. It focuses on turning concepts into clear implementation steps that can be validated with measurable KPIs in real production workflows.`,
      },
      {
        question: 'How can we apply these recommendations in our plant?',
        answer:
          'Start with a small pilot line: map process steps, define critical data points, and validate integration points with existing systems. After baseline and target KPIs are compared, scale the same pattern to similar lines in controlled phases.',
      },
      {
        question: 'Who should read this article first?',
        answer:
          `${category || 'Operations and quality'} teams, production leaders, and digital transformation stakeholders should review this article first${readTimeSuffixEn}. This helps align technical priorities before implementation planning starts.`,
      },
    ];
  }

  if (locale === 'ro') {
    return [
      {
        question: `Care este ideea principala din "${title}"?`,
        answer:
          `Articolul prezinta pasi practici pentru decizii mai bune de trasabilitate in operatiuni ${category || 'industriale'}. Accentul este pe transformarea conceptelor in actiuni clare, validate prin KPI-uri masurabile in fluxuri reale de productie.`,
      },
      {
        question: 'Cum aplicam recomandarile in fabrica noastra?',
        answer:
          'Incepeti cu o linie pilot: mapati etapele de proces, definiti punctele critice de date si validati punctele de integrare cu sistemele existente. Dupa compararea KPI-urilor initiale cu rezultatele obtinute, extindeti implementarea etapizat.',
      },
      {
        question: 'Cine ar trebui sa citeasca acest articol mai intai?',
        answer:
          `Echipele ${category || 'de operatiuni si calitate'}, liderii de productie si responsabilii de transformare digitala ar trebui sa inceapa cu acest articol${readTimeSuffixRo}. Astfel se aliniaza prioritatile tehnice inainte de planificarea implementarii.`,
      },
    ];
  }

  return [
    {
      question: `"${title}" yazisinin ana cikarimi nedir?`,
      answer:
        `Bu yazi, ${category || 'endustriyel'} operasyonlarda izlenebilirlik kararlarini iyilestirmek icin uygulanabilir adimlar sunar. Amaç, teorik bilgiyi sahada KPI ile dogrulanabilir uygulama adimlarina donusturmektir.`,
    },
    {
      question: 'Yazidaki oneriler tesise nasil uyarlanir?',
      answer:
        'Kucuk bir pilot hat secip proses adimlarini ve kritik veri noktalarini netlestirin. Mevcut sistemlerle entegrasyon adimlarini dogruladiktan sonra once/sonra KPI kiyaslamasi yapin ve uygun olan modeli kademeli sekilde diger hatlara yayin.',
    },
    {
      question: 'Bu yaziyi once kimler okumali?',
      answer:
        `${category || 'Operasyon ve kalite'} ekipleri, uretim liderleri ve dijital donusum sorumlulari bu yaziyi oncelikli okumali${readTimeSuffixTr}. Bu sayede teknik oncelikler uygulama oncesinde ayni cizgiye gelir.`,
    },
  ];
}

export function getBlogDetailAeoFaqBundle(locale = 'tr', post = null) {
  if (!post) return null;
  return {
    title: getBlogDetailFaqTitle(locale),
    items: buildBlogDetailFaqItems(locale, post),
  };
}

export function getBlogDetailAeoFaqSchema(locale, pageUrl, post = null) {
  const safeLocale = locale || 'tr';
  const bundle = getBlogDetailAeoFaqBundle(safeLocale, post);
  if (!bundle) return null;
  return getFaqPageSchema(safeLocale, pageUrl, bundle.items);
}
