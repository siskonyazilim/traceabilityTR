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
      title: 'İletişim SSS',
      items: [
        {
          question: 'İlk görüşmede hangi bilgileri paylaşmalıyım?',
          answer:
            'İlk görüşmede ürün tipi, hat sayısı, vardiya yapısı, mevcut ERP veya MES sistemi ve yaşadığınız ana operasyon sorunu paylaşılmalıdır. Bu bilgiler, ekibimizin teknik kapsamı hızlı netleştirmesine ve size uygun izlenebilirlik yol haritası oluşturmasına yardımcı olur.',
        },
        {
          question: 'Proje keşfi ne kadar sürede planlanır?',
          answer:
            'Talebiniz alındıktan sonra keşif görüşmesi genellikle kısa sürede planlanır. Keşifte süreç akışı, veri noktalarınız, kalite hedefleriniz ve entegrasyon gereksinimleriniz değerlendirilir. Bu adım sonrasında kapsam, öncelik ve uygulama yaklaşımı daha net bir şekilde tanımlanır.',
        },
        {
          question: 'Destek sadece Türkiye ile mi sınırlı?',
          answer:
            'Hizmet kapsamımız sadece tek bir ülkeyle sınırlı değildir. Proje yapısına göre uzaktan teknik çalışma, saha devreye alma ve çok ülkeli ekip koordinasyonu birlikte planlanabilir. Böylesi bir model, farklı tesislerde standardizasyon ve süreç tutarlılığı sağlamaya yardımcı olur.',
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
          question: 'Bu sayfadaki politika neden önemlidir?',
          answer:
            'Bu politika, web sitesinde hangi verilerin hangi amaçla kullanıldığını açıklar ve kullanıcıya açık bir bilgilendirme sunar. Veri yönetimindeki şeffaflık, yasal uyum kadar güven ilişkisi için de kritiktir. Politika metni, ziyaretçilerin haklarını ve kontrol seçeneklerini somutlaştırır.',
        },
        {
          question: 'Politika metni ne zaman güncellenir?',
          answer:
            'Politika metni; yasal gereklilikler, teknik altyapı değişiklikleri veya veri işleme süreçlerinde gerçek bir güncelleme olduğunda revize edilir. Güncellemeler, metin içeriğinde görünür şekilde yayınlanır. Böylece ziyaretçiler, hangi değişikliğin neyi etkilediğini daha net takip edebilir.',
        },
        {
          question: 'Haklarım veya tercihlerim için nasıl iletişime geçebilirim?',
          answer:
            'Veri hakları, izin tercihleri veya politika kapsamındaki sorularınız için iletişim sayfasındaki resmi kanalları kullanabilirsiniz. Talebiniz alındığında ilgili ekip tarafından kayda alınır ve uygun süreçte yanıtlanır. Bu süreç, hesap verilebilirlik ve izlenebilirlik prensipleriyle yönetilir.',
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
      title: 'Çözüm Ortağı SSS',
      items: [
        {
          question: 'Bu çözüm ortağı hangi konularda değer sağlar?',
          answer:
            'Bu sayfada yer alan çözüm ortağı; izlenebilirlik, otomasyon ve veri doğrulama süreçlerinde teknik kapasiteyi güçlendiren teknolojiler sunar. Sensör, yazılım veya donanım odaklı yetkinlikleri sayesinde üretim hatlarında kalite kontrolü, görünürlük ve operasyonel tutarlılık hedeflerine ulaşmayı kolaylaştırır.',
        },
        {
          question: 'Partner teknolojileri mevcut sistemlere nasıl uyarlanır?',
          answer:
            'Uyarlama sürecinde önce mevcut hat yapısı ve veri akış modeli analiz edilir. Ardından çözüm ortağı teknolojileri; MES, ERP ve saha ekipmanlarıyla entegre olacak şekilde pilot uygulamada doğrulanır. Bu aşamalı yaklaşım, devreye alma riskini azaltır ve ölçülebilir sonuç üretir.',
        },
        {
          question: 'Bu partnerle proje planlarken ilk adım nedir?',
          answer:
            'İlk adım, hedeflenen iş sonucunu netleştirmektir: kalite iyileşmesi, izleme hassasiyeti, verimlilik veya geri çağırma riskinin azaltılması gibi. Sonrasında teknik kapsam, saha gereksinimleri ve entegrasyon sınırları tanımlanır. Böylece proje, doğru önceliklerle ve uygulanabilir bir yol haritasıyla başlar.',
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
          question: 'Referans projeler seçiminde nelere bakmalıyım?',
          answer:
            'Referans proje seçiminde sektör benzerliği, proses karmaşıklığı, entegrasyon seviyesi ve elde edilen ölçülebilir çıktılar birlikte değerlendirilmelidir. Benzer üretim koşullarında başarılı olan projeler, kendi tesisinizde uygulanabilirlik konusunda daha güçlü bir karar zemini oluşturur ve yatırım riskini azaltır.',
        },
        {
          question: 'Bu projelerden kendi fabrikam için ne öğrenebilirim?',
          answer:
            'Bu projeler, farklı tesislerde uygulanan izlenebilirlik yaklaşımlarının hangi sorunları çözdüğünü gösterir. İzlenen veri noktalarını, entegrasyon kurgusu ve kalite ile verim etkilerini inceleyerek kendi tesisiniz için daha uygulanabilir ve ölçülebilir bir modernizasyon yol haritası çıkarabilirsiniz.',
        },
        {
          question: 'Benzer bir projeyi ne kadar hızlı başlatabilirim?',
          answer:
            'Başlangıç hızı, mevcut altyapı olgunluğu ve hedef kapsam netliğine bağlıdır. Tipik olarak önce kısa bir keşif ve teknik analiz yapılır, sonra pilot saha belirlenir. Pilotta doğrulanan model aşamalı olarak yaygınlaştırılır. Bu yaklaşım, süreyi kısaltırken operasyonel riski kontrollü tutar.',
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
      title: 'Ürün Detay SSS',
      items: [
        {
          question: 'Bu ürün hangi operasyon sorununu çözer?',
          answer:
            'Bu ürün, izlenebilirlik akışını güçlendirerek üretilen verinin doğrulanması ve süreç görünürlüğünün artırılması gibi temel operasyon ihtiyaçlarını hedefler. Hat üzerindeki kritik kontrol noktalarında doğru veri toplama sağlayarak kalite hatalarının erken tespit edilmesine ve geri dönüş maliyetlerinin azaltılmasına yardımcı olur.',
        },
        {
          question: 'Mevcut MES veya ERP sistemime entegre edilebilir mi?',
          answer:
            'Ürün çözümleri tipik olarak mevcut MES ve ERP altyapılarıyla entegre çalışacak şekilde planlanır. Entegrasyon kapsamında veri alanları, tetikleyiciler ve süreç akışları analiz edilir. Pilot aşamada teknik uyum doğrulanır ve sonrasında canlı ortama kontrollü geçiş yapılarak operasyonel süreklilik korunur.',
        },
        {
          question: 'Ürün seçiminde en kritik karar kriterleri nelerdir?',
          answer:
            'Ürün seçiminde proses karmaşıklığı, çevrim süresi, okunabilirlik koşulları, saha ortamı ve raporlama ihtiyacı birlikte değerlendirilmelidir. Bu kriterler, yalnızca teknik uygunluğu değil uzun vadeli ölçeklendirilebilirliği de belirler. Doğru seçim, hem hızlı devreye alma hem de ölçülebilir performans kazanımı sağlar.',
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
      title: 'Çözüm Detay SSS',
      items: [
        {
          question: 'Bu çözüm hangi iş hedeflerine hizmet eder?',
          answer:
            'Bu çözüm; kalite tutarlılığı, izlenebilirlik kapsamı, operasyon hızı ve süreç denetlenebilirliği gibi temel iş hedeflerini destekler. Üretim akışı boyunca veri görünürlüğünü artırarak karar sürecini hızlandırır. Böylece hat performansı daha ölçülebilir hale gelir ve sürekli iyileştirme adımları somut verilere dayanır.',
        },
        {
          question: 'Çözümün devreye alınması hangi aşamalardan geçer?',
          answer:
            'Devreye alma genellikle keşif, teknik tasarım, entegrasyon, pilot doğrulama ve kademeli yaygınlaştırma aşamalarından oluşur. Her adımda kapsam ve riskler tekrar gözden geçirilir. Bu yöntem, proje hızını korurken canlı operasyonu kesintiye uğratmadan geçiş yapılmasına imkân verir.',
        },
        {
          question: 'Bu çözüm farklı tesislere ölçeklendirilebilir mi?',
          answer:
            'Çözüm mimarisi standart veri modeli ve tekrar kullanılabilir entegrasyon prensipleriyle kurgulandığında farklı tesislere ölçeklendirilebilir. Pilot hatta doğrulanan yaklaşım, benzer proseslere sahip diğer hatlara uyarlanır. Bu sayede kurum genelinde standardizasyon ve operasyonel tutarlılık sağlanabilir.',
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

function getPartnerDetailFaqTitle(locale) {
  if (locale === 'en') return 'Solution Partner FAQ';
  if (locale === 'ro') return 'Intrebari Frecvente Partener';
  return 'Çözüm Ortağı SSS';
}

function buildPartnerDetailFaqItems(locale, partner) {
  const partnerName = String(partner?.name || '').trim() || 'Bu partner';
  const partnerDescription = String(partner?.description || '').trim();
  const partnerWebsite = String(partner?.website || '').trim();

  if (locale === 'en') {
    return [
      {
        question: `What capabilities does ${partnerName} contribute to this ecosystem?`,
        answer:
          `${partnerName} supports industrial traceability programs with technologies that improve shop-floor visibility, process control, and quality consistency. ${partnerDescription || 'Its role is to strengthen measurable operational outcomes across production workflows.'}`,
      },
      {
        question: `How can ${partnerName} be integrated into our current architecture?`,
        answer:
          'Integration starts with mapping your line topology, data points, and MES/ERP touchpoints. A controlled pilot is then used to validate interoperability, data quality, and performance KPIs before phased rollout to additional lines.',
      },
      {
        question: `Where can we review ${partnerName} technical details?`,
        answer:
          `${partnerWebsite || 'Technical scope is reviewed during discovery sessions with solution architects.'} This review clarifies fit, constraints, and implementation priorities for your production environment.`,
      },
    ];
  }

  if (locale === 'ro') {
    return [
      {
        question: `Ce capabilitati aduce ${partnerName} in acest ecosistem?`,
        answer:
          `${partnerName} sustine programele de trasabilitate industriala prin tehnologii care imbunatatesc vizibilitatea in productie, controlul proceselor si consistenta calitatii. ${partnerDescription || 'Rolul sau este de a consolida rezultate operationale masurabile.'}`,
      },
      {
        question: `Cum poate fi integrat ${partnerName} in arhitectura noastra curenta?`,
        answer:
          'Integrarea incepe cu maparea topologiei liniilor, a punctelor de date si a legaturilor MES/ERP. Compatibilitatea este validata intr-un pilot controlat, iar extinderea se face etapizat dupa confirmarea KPI-urilor.',
      },
      {
        question: `Unde putem analiza detalii tehnice despre ${partnerName}?`,
        answer:
          `${partnerWebsite || 'Detaliile tehnice sunt clarificate in sesiunile de analiza cu arhitectii de solutie.'} Aceasta etapa defineste potrivirea tehnica, limitarile si prioritatile de implementare.`,
      },
    ];
  }

  return [
    {
      question: `${partnerName} hangi teknik katkıları sağlıyor?`,
      answer:
        `${partnerName}, shop-floor görünürlüğü, süreç kontrolü ve kalite tutarlılığını güçlendiren teknolojiler sunar. ${partnerDescription || 'Bu katkı, sahada ölçülebilir operasyonel sonuçlar alınmasına yardımcı olur.'}`,
    },
    {
      question: `${partnerName} mevcut sistemlerimize nasıl entegre edilir?`,
      answer:
        'Entegrasyon, hat topolojisi, kritik veri noktaları ve MES/ERP temaşlarının haritalanması ile başlar. Sonrasında kontrollü pilotta uyumluluk ve KPI etkisi doğrulanır, ardından kademeli yaygınlaştırma yapılır.',
    },
    {
      question: `${partnerName} hakkında teknik detayları nereden inceleyebiliriz?`,
      answer:
        `${partnerWebsite || 'Teknik kapsam, çözüm mimarlarıyla yapılan keşif görüşmelerinde netleştirilir.'} Bu adım, tesisinize uygun uygulama sınırlarını ve öncelikleri belirler.`,
    },
  ];
}

export function getPartnerDetailAeoFaqBundle(locale = 'tr', partner = null) {
  if (!partner) return null;
  return {
    title: getPartnerDetailFaqTitle(locale),
    items: buildPartnerDetailFaqItems(locale, partner),
  };
}

export function getPartnerDetailAeoFaqSchema(locale, pageUrl, partner = null) {
  const safeLocale = locale || 'tr';
  const bundle = getPartnerDetailAeoFaqBundle(safeLocale, partner);
  if (!bundle) return null;
  return getFaqPageSchema(safeLocale, pageUrl, bundle.items);
}

function getCatalogProductDetailFaqTitle(locale) {
  if (locale === 'en') return 'Product Detail FAQ';
  if (locale === 'ro') return 'Intrebari Frecvente Produs';
  return 'Ürün Detay SSS';
}

function buildCatalogProductDetailFaqItems(locale, product) {
  const title = String(product?.title || '').trim() || 'Bu ürün';
  const summary = String(product?.summary || product?.description || '').trim();
  const category = String(product?.category || '').trim();
  const keywords = Array.isArray(product?.keywords) ? product.keywords.filter(Boolean).slice(0, 3) : [];
  const keywordText = keywords.length > 0 ? keywords.join(', ') : '';

  if (locale === 'en') {
    return [
      {
        question: `What does ${title} optimize in production operations?`,
        answer:
          `${title} improves traceability reliability, data validation, and process visibility on critical control points. ${summary || 'This helps detect quality deviations earlier and supports measurable operational improvements.'}`,
      },
      {
        question: `How should ${title} be implemented in an existing plant?`,
        answer:
          'Start with process mapping and integration scope for MES/ERP and line equipment. Validate functional fit in a pilot, measure KPI impact, and then roll out in phases to similar lines to reduce operational risk.',
      },
      {
        question: `Which use cases are most suitable for ${title}?`,
        answer:
          `${category || 'Industrial traceability'} workflows with requirements such as ${keywordText || 'verification, quality control, and production data continuity'} are usually strong candidates for this product.`,
      },
    ];
  }

  if (locale === 'ro') {
    return [
      {
        question: `Ce optimizeaza ${title} in operatiunile de productie?`,
        answer:
          `${title} imbunatateste fiabilitatea trasabilitatii, validarea datelor si vizibilitatea proceselor in punctele critice de control. ${summary || 'Aceasta abordare ajuta la identificarea timpurie a abaterilor de calitate si la rezultate masurabile.'}`,
      },
      {
        question: `Cum se implementeaza ${title} intr-o fabrica existenta?`,
        answer:
          'Procesul incepe cu maparea fluxurilor si definirea integrarii cu MES/ERP si echipamentele din linie. Potrivirea tehnica se valideaza in pilot, se masoara impactul KPI, apoi extinderea se face etapizat pe linii similare.',
      },
      {
        question: `Pentru ce scenarii este potrivit ${title}?`,
        answer:
          `${category || 'Trasabilitate industriala'} in scenarii unde sunt necesare ${keywordText || 'verificare, controlul calitatii si continuitatea datelor de productie'} reprezinta cazurile uzuale pentru acest produs.`,
      },
    ];
  }

  return [
    {
      question: `${title} üretimde hangi ihtiyacı optimize eder?`,
      answer:
        `${title}, kritik kontrol noktalarında izlenebilirlik güvenilirliği, veri doğrulama ve süreç görünürlüğünü güçlendirir. ${summary || 'Bu sayede kalite sapmaları erken yakalanır ve ölçülebilir operasyonel iyileşme sağlanır.'}`,
    },
    {
      question: `${title} mevcut tesiste nasıl devreye alınmalıdır?`,
      answer:
        'Önce proses akışı ve MES/ERP entegrasyon kapsamı netleştirilir. Ardından pilot hatta teknik uyum ve KPI etkisi ölçülür, doğrulama sonrası benzer hatlara kademeli yaygınlaştırma uygulanır.',
    },
    {
      question: `${title} hangi kullanım senaryolarında daha uygundur?`,
      answer:
        `${category || 'Endüstriyel izlenebilirlik'} odaklı, ${keywordText || 'doğrulama, kalite kontrol ve üretim verisi sürekliliği'} gerektiren senaryolar bu ürün için yüksek uygunluk sağlar.`,
    },
  ];
}

export function getCatalogProductDetailAeoFaqBundle(locale = 'tr', product = null) {
  if (!product) return null;
  return {
    title: getCatalogProductDetailFaqTitle(locale),
    items: buildCatalogProductDetailFaqItems(locale, product),
  };
}

export function getCatalogProductDetailAeoFaqSchema(locale, pageUrl, product = null) {
  const safeLocale = locale || 'tr';
  const bundle = getCatalogProductDetailAeoFaqBundle(safeLocale, product);
  if (!bundle) return null;
  return getFaqPageSchema(safeLocale, pageUrl, bundle.items);
}

function getCatalogSolutionDetailFaqTitle(locale) {
  if (locale === 'en') return 'Solution Detail FAQ';
  if (locale === 'ro') return 'Intrebari Frecvente Solutie';
  return 'Çözüm Detay SSS';
}

function buildCatalogSolutionDetailFaqItems(locale, solution) {
  const title = String(solution?.title || '').trim() || 'Bu çözüm';
  const summary = String(solution?.summary || solution?.description || '').trim();
  const category = String(solution?.category || '').trim();
  const keywords = Array.isArray(solution?.keywords) ? solution.keywords.filter(Boolean).slice(0, 3) : [];
  const keywordText = keywords.length > 0 ? keywords.join(', ') : '';

  if (locale === 'en') {
    return [
      {
        question: `Which business goal does ${title} primarily support?`,
        answer:
          `${title} supports measurable goals such as process visibility, quality consistency, and operational responsiveness. ${summary || 'It is designed to turn production data into faster and more reliable decisions.'}`,
      },
      {
        question: `What is a safe rollout path for ${title}?`,
        answer:
          'A safe path includes discovery, technical design, pilot validation, and phased rollout. This sequence keeps live operations protected while confirming integration and KPI outcomes before wider deployment.',
      },
      {
        question: `Where does ${title} create the highest value?`,
        answer:
          `${category || 'Industrial operations'} scenarios that depend on ${keywordText || 'traceability depth, controlled execution, and data-driven optimization'} usually gain the highest value from this solution.`,
      },
    ];
  }

  if (locale === 'ro') {
    return [
      {
        question: `Ce obiectiv de business sustine in principal ${title}?`,
        answer:
          `${title} sustine obiective masurabile precum vizibilitatea proceselor, consistenta calitatii si reactia operationala rapida. ${summary || 'Solutia transforma datele din productie in decizii mai rapide si mai sigure.'}`,
      },
      {
        question: `Care este o cale sigura de implementare pentru ${title}?`,
        answer:
          'Implementarea sigura include analiza initiala, proiectare tehnica, validare pilot si extindere etapizata. Aceasta secventa protejeaza operatiunile active si confirma integrarea impreuna cu rezultatele KPI.',
      },
      {
        question: `Unde genereaza ${title} cea mai mare valoare?`,
        answer:
          `${category || 'Operatiuni industriale'} in scenarii ce necesita ${keywordText || 'trasabilitate extinsa, executie controlata si optimizare bazata pe date'} obtin de regula cel mai mare beneficiu din aceasta solutie.`,
      },
    ];
  }

  return [
    {
      question: `${title} en çok hangi iş hedefine hizmet eder?`,
      answer:
        `${title}, süreç görünürlüğü, kalite tutarlılığı ve operasyonel hız gibi ölçülebilir hedeflere odaklanır. ${summary || 'Çözüm, üretim verisini daha hızlı ve güvenilir kararlar için kullanılabilir hale getirir.'}`,
    },
    {
      question: `${title} için güvenli devreye alma yaklaşımı nedir?`,
      answer:
        'Güvenli yaklaşım; keşif, teknik tasarım, pilot doğrulama ve kademeli yaygınlaştırma adımlarını izler. Bu sıra, canlı operasyonu korurken entegrasyon ve KPI sonuçlarını netleştirir.',
    },
    {
      question: `${title} hangi senaryolarda en yüksek değeri üretir?`,
      answer:
        `${category || 'Endüstriyel operasyonlar'} içinde ${keywordText || 'derin izlenebilirlik, kontrollü uygulama ve veriyle optimizasyon'} gerektiren senaryolarda bu çözüm daha yüksek değer oluşturur.`,
    },
  ];
}

export function getCatalogSolutionDetailAeoFaqBundle(locale = 'tr', solution = null) {
  if (!solution) return null;
  return {
    title: getCatalogSolutionDetailFaqTitle(locale),
    items: buildCatalogSolutionDetailFaqItems(locale, solution),
  };
}

export function getCatalogSolutionDetailAeoFaqSchema(locale, pageUrl, solution = null) {
  const safeLocale = locale || 'tr';
  const bundle = getCatalogSolutionDetailAeoFaqBundle(safeLocale, solution);
  if (!bundle) return null;
  return getFaqPageSchema(safeLocale, pageUrl, bundle.items);
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
      question: `${title} projesi hangi operasyon ihtiyacını hedefliyor?`,
      answer:
        `${title}, ${sector || 'endüstriyel'} operasyonlarda izlenebilirlik ve kaliteyi ölçülebilir şekilde güçlendirmeyi hedefler. Görünürlük eksikleri, doğrulama zafiyetleri ve süreç değişkenliğini azaltarak daha hızlı ve veriye dayalı karar alınmasını destekler.`,
    },
    {
      question: 'Benzer bir çözüm bizim hattımıza nasıl uyarlanır?',
      answer:
        'Uyarlama süreci, proses akışı ve veri noktalarının haritalanması ile başlar. MES/ERP ve saha ekipmanlarıyla entegrasyon sınırları önce pilotta doğrulanır, KPI sonuçları alındıktan sonra çözüm kademeli olarak yaygınlaştırılır.',
    },
    {
      question: 'Bu projede öne çıkan teknolojiler nelerdir?',
      answer:
        `${techList || 'Barkod, RFID, MES entegrasyonu'} bu vakada öne çıkan teknolojilerdir${yearText}. Nihai teknoloji kombinasyonu, tesisinizin çevrim süresi, kalite hedefi ve saha koşullarına göre pilotla doğrulanmalıdır.`,
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
  return 'Yazı SSS';
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
  const readTimeSuffixTr = readTimeText ? ` (yaklaşık ${readTimeText} dakika)` : '';

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
      question: `"${title}" yazısının ana çıkarımı nedir?`,
      answer:
        `Bu yazı, ${category || 'endüstriyel'} operasyonlarda izlenebilirlik kararlarını iyileştirmek için uygulanabilir adımlar sunar. Amaç, teorik bilgiyi sahada KPI ile doğrulanabilir uygulama adımlarına dönüştürmektir.`,
    },
    {
      question: 'Yazıdaki öneriler tesise nasıl uyarlanır?',
      answer:
        'Küçük bir pilot hat seçip proses adımlarını ve kritik veri noktalarını netleştirin. Mevcut sistemlerle entegrasyon adımlarını doğruladıktan sonra önce/sonra KPI kıyaslaması yapın ve uygun olan modeli kademeli şekilde diğer hatlara yayın.',
    },
    {
      question: 'Bu yazıyı önce kimler okumalı?',
      answer:
        `${category || 'Operasyon ve kalite'} ekipleri, üretim liderleri ve dijital dönüşüm sorumluları bu yazıyı öncelikli okumalı${readTimeSuffixTr}. Bu sayede teknik öncelikler uygulama öncesinde aynı çizgiye gelir.`,
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
