export const contentRo = {
  heroSlides: [
    {
      id: 1,
      title: 'Soluții de Trasabilitate End-to-End pentru Fabrici Inteligente',
      subtitle:
        'Monitorizați digital toate procesele de producție, de la intrarea materiei prime până la expediere. Accesați instant și istoric datele de produs, proces și calitate dintr-o singură platformă.',
    },
    {
      id: 2,
      title: 'Control în Timp Real, Zero Defecțiuni',
      subtitle:
        'Detectați erorile în momentul apariției cu verificări bazate pe coduri de bare, RFID și camere. Preveniți în producție riscurile de produs greșit, montaj greșit și livrare greșită.',
    },
    {
      id: 3,
      title: 'POKA YOKE',
      subtitle:
        'Preveniți erorile operatorului înainte să apară prin mecanisme inteligente de validare. Asigurați utilizarea piesei corecte la stația corectă, în secvența corectă.',
    },
  ],
  faq: {
    eyebrow: '',
    title: 'Întrebări Frecvente despre Sistemele de Trasabilitate',
    items: [
      {
        id: 1,
        question: 'Ce este trasabilitatea industrială Track & Trace?',
        answer:
          'Trasabilitatea Track & Trace este un sistem critic care permite urmărirea individuală a produselor pe parcursul întregului ciclu de viață, de la nivel de pachet până la nivel de palet. Sistemul asigură că fiecare produs primește un identificator unic (UID) care este înregistrat digital în toate etapele producției, ambalării, depozitării și distribuției. Acest lucru permite fabricilor să acceseze instantaneu informații complete despre materiile prime, parametrii de calitate, rezultatele testelor, linia de producție, operatorul responsabil și marca temporală pentru fiecare produs individual. Sistemele moderne de trasabilitate colectează și analizează date în timp real, oferind vizibilitate completă și conformitate cu reglementările industriale stricte.',
      },
      {
        id: 2,
        question: 'Ce este Aggregation (Agregarea) și de ce este critică pentru trasabilitate?',
        answer:
          'Aggregation este elementul cel mai vital al trasabilității moderne. Reprezintă procesul de creare a unei ierarhii digitale în care identificatorii unici (UID) ai produselor individuale sunt asociați cu identificatorul ambalajului mai mare care le conține, formând o relație parent-copil. Ierarhia standard este: Pachet (produs de mașina de fabricație) -> Carton (de la mașina de împachetare) -> Cutie (case packer) -> Palet (paletizator). Datorită acestui arbore digital, citind doar codul de bare logistic al unui palet, se pot obține instantaneu informațiile despre miile de pachete individuale pe care le conține. Orice eroare de asociere (Aggregation Mismatch) determină oprirea imediată a mașinii și respingerea produselor. Fără agregare corectă, sistemul de trasabilitate nu poate funcționa.',
      },
      {
        id: 3,
        question: 'Care este diferența dintre Serializare (UID) și Urmărirea Lotului?',
        answer:
          'Serializarea înseamnă atribuirea unui identificator complet unic fiecărui produs individual, permițând urmărirea sa separată. Un UID (Unique Identifier) conține de obicei ID-ul producătorului, GTIN/SKU, număr de serie unic, referință de agregare și un checksum sau semnătură criptografică pentru securitate. Standardele GS1 SGTIN (pentru produse serializate) și GS1 SSCC (pentru unități logistice) sunt utilizate pe scară largă. Urmărirea lotului grupează produsele fabricate în aceeași perioadă sub un identificator comun de lot, bazat pe data producției și numărul lotului. Ambele metodologii pot funcționa simultan: serializarea oferă granularitate maximă pentru recall-uri țintite și anti-contrafacere, în timp ce loturile oferă eficiență pentru gestionarea materialelor consumate, echipamentelor și parametrilor de calitate la nivel de batch.',
      },
      {
        id: 4,
        question: 'Cum funcționează sistemele de verificare cu camere industriale?',
        answer:
          'Sistemele de verificare cu camere sunt esențiale pentru validarea calității codurilor aplicate pe produse. După ce un cod este imprimat prin laser sau inkjet, camere industriale de înaltă rezoluție plasate pe linia de producție scanează automat fiecare cod în timp real, verificând lizibilitatea, contrastul, dimensiunile și corectitudinea datelor. Dacă camera nu poate citi codul (semnalizează No Read), produsul este imediat marcat pentru respingere și îndepărtat fizic de pe linie printr-un mecanism de reject automat. Acest proces garantează că doar produsele cu coduri perfect lizibile ajung la distribuție, prevenind problemele în lanțul de aprovizionare. Camerele moderne pot procesa peste 2000 de produse pe minut, detectând defecte invizibile ochiului uman, cum ar fi variații subtile de contrast sau deteriorări parțiale ale codului Data Matrix.',
      },
      {
        id: 5,
        question: 'Ce tehnologii de codare sunt utilizate în trasabilitate?',
        answer:
          'Există trei tehnologii principale de codare în sistemele Track & Trace. Codarea cu laser este preferată pentru liniile de mare viteza (peste 2000 produse/minut), oferind marcare permanentă fără costuri de consumabile, dar poate avea probleme de contrast pe anumite suprafețe. Codarea inkjet este utilizată în principal la nivel logistic (cutii și paleți) pentru coduri mai mari, oferind contrast excelent, dar necesită întreținere pentru prevenirea înfundării duzelor și este sensibilă la condițiile de mediu. Marcarea directă Data Matrix 2D este standardul industrial pentru serializare, deoarece stochează cantități mari de date într-un spațiu mic și poate fi citită chiar dacă este parțial deteriorată. Codurile sunt validate imediat după aplicare prin camere de verificare pentru a garanta lizibilitatea pe întreaga durată de viață a produsului. Alegerea tehnologiei depinde de viteza liniei, materialul ambalajului și cerințele de durabilitate.',
      },
      {
        id: 6,
        question: 'Cum se realizează integrarea cu sistemele corporative ERP și MES?',
        answer:
          'Arhitectura sistemelor de trasabilitate necesită integrare strânsă cu infrastructura IT corporativă. Fluxul de date standard începe cu un Generator UID care creează identificatori unici, transmite aceste coduri către imprimante pentru aplicare fizică, apoi camerele industriale verifică calitatea codării. Un Aggregation Server central gestionează toate relațiile ierarhice dintre produse și ambalaje. Datele sunt transmise prin straturi intermediare folosind protocoale industriale standard precum OPC-UA (pentru comunicare cu echipamentele) și TMC către sistemele MES/MII (Manufacturing Execution Systems) pentru monitorizarea producției în timp real. În final, aceste date sunt sincronizate cu sistemele ERP (SAP, Oracle, Microsoft Dynamics) prin API-uri RESTful, web services SOAP sau conectori personalizați, permițând schimbul bidirecțional de informații despre comenzi de producție, inventar, calitate și expedieri. Această integrare end-to-end elimină complet introducerea manuală de date și oferă vizibilitate completă în întreaga organizație.',
      },
      {
        id: 7,
        question: 'Cum se asigură conformitatea cu reglementările și standardele GS1?',
        answer:
          'Conformitatea cu reglementările internaționale este fundamentală în sistemele Track & Trace. Pentru sectorul tutunului, reglementări extrem de stricte precum TTT (Track and Trace for Tobacco) și EU TPD (Tobacco Products Directive) impun trasabilitate completă de la fabrică până la punctul de vânzare. Standardele GS1 oferă cadrul tehnic: SGTIN (Serialized Global Trade Item Number) pentru produse individuale și SSCC (Serial Shipping Container Code) pentru unități logistice. Sistemele noastre generează automat identificatori conformi GS1, incluzând checksumuri și semnături criptografice pentru prevenirea contrafacerii. Pentru ISO 9001, documentăm complet procesele pentru audituri. Pentru IATF 16949 (automotive), asigurăm trasabilitate completă a componentelor critice. Pentru ISO 22000/HACCP (siguranța alimentelor), monitorizăm parametri critici în timp real. Toate datele sunt arhivate conform cerințelor legale, iar rapoartele pentru audituri sunt generate automat, reducând timpul de pregătire cu peste 70%.',
      },
      {
        id: 8,
        question: 'Cât durează implementarea unui sistem complet de trasabilitate?',
        answer:
          'Durata implementării unui sistem Track & Trace complet variază în funcție de complexitatea liniilor de producție și nivelul de integrare necesar. Un proiect tipic durează între 4-8 luni și include: analiza detaliată a proceselor de producție și maparea fluxurilor, proiectarea arhitecturii de serializare și agregare, instalarea echipamentelor hardware (imprimante laser/inkjet, camere de verificare, sisteme de reject), configurarea serverelor UID Generator și Aggregation, dezvoltarea integrărilor OPC-UA cu echipamentele, configurarea conectivității cu sistemele MES/ERP, testarea extensivă în mediu real cu validarea tuturor scenariilor de agregare, instruirea completă a personalului de producție și IT, precum și suportul post-implementare pentru optimizare. Proiectele mari cu multiple linii de producție sau cerințe complexe de conformitate pot necesita 10-14 luni. Utilizăm o abordare modulară care permite punerea în funcțiune progresivă, astfel încât anumite linii pot deveni operaționale mai rapid, minimizând impactul asupra producției curente.',
      },
    ],
  },
  technologyCapabilities: [
    {
      title: 'POKA YOKE',
      description:
        'Soluțiile Poka-Yoke previn sau detectează instantaneu erorile cauzate de oameni, mașini și procese în activitățile de producție și asamblare, utilizând tehnologii inteligente de control și verificare.',
    },
    {
      title: 'RFID și coduri de bare',
      description:
        'Tehnologiile RFID și codurile de bare permit identificarea automată a produselor și materialelor, urmărirea acestora pe întregul parcurs al procesului și înregistrarea fiabilă a datelor.',
    },
    {
      title: 'Procesare de imagini',
      description:
        'Sistemele de inspecție bazate pe procesarea imaginilor detectează automat defectele de producție cu viteză și consecvență ridicate, consolidând procesele de control al calității.',
    },
  ],
  performanceMetrics: {
    labels: ['Proiecte', 'Țări', 'Fabrici', 'Colegi'],
  },
  solutions: {
    1: {
      title: "Urmărirea unui singur produs",
      description: "Urmărirea produselor individuale asigură faptul că fiecare produs are un număr de serie unic în producție folosind coduri de bare, QR, Data Matrix sau RFID.",
      detail: "Urmărirea produselor individuale asigură faptul că fiecare produs are un număr de serie unic în producție folosind coduri de bare, QR, Data Matrix sau RFID. Întregul ciclu de viață al produsului, de la recepția materiei prime la producție, asamblare, controlul calității, ambalare și expediere este stocat digital.\n\nDatele de pe utilaje, parametrii procesului, înregistrările operatorilor, componentele utilizate și rezultatele controlului de calitate sunt legate de istoricul digital al produsului. Structura integrată cu ERP, MES, PLC, SCADA, camere și marcatoare asigură trasabilitate end-to-end, genealogie și analiză rapidă a cauzelor fundamentale.",
      detailBulletsHeading: "Avantaje:",
      detailBullets: [
        "Fiecare produs este identificat în mod unic cu un număr de serie și o infrastructură de codare, prevenind confuzia produselor.",
        "Codurile eronate sau ilizibile pe linia de producție sunt detectate automat prin validarea camerei și a scanerului de coduri.",
        "Potrivirea datelor despre produse, componente și procese oferă o trasabilitate completă înainte și înapoi.",
        "Accesul rapid la cauzele defectelor este obținut prin menținerea înregistrărilor de calitate, rebuturi și remanieri.",
        "Reducerea introducerii manuale a datelor și protejarea integrității prin conectorii ERP și MES."
      ]
    },
    2: {
      title: "Urmărirea lotului/partidei",
      description: "Lotul și urmărirea partidei permit monitorizarea grupurilor de produse fabricate în aceleași condiții de materie primă, rețetă sau proces sub un număr comun de lot sau șarjă.",
      detail: "Lotul și urmărirea partidei permit monitorizarea grupurilor de produse fabricate în aceleași condiții de materie primă, rețetă sau proces sub un număr comun de lot sau șarjă. Toate mișcările de la acceptarea materiilor prime la producție, control, ambalare, depozitare și expediere sunt stocate.\n\nLoturile de materii prime, informațiile despre rețetă, parametrii de producție, rezultatele de laborator și rapoartele de expediere sunt legate de partidul respectiv. În acest fel, în caz de probleme de calitate sau recall de produse, doar loturile afectate pot fi identificate rapid.",
      detailBulletsHeading: "Avantaje:",
      detailBullets: [
        "Lotul de materie primă este mapat cu șarja fabricată de produs, facilitând identificarea materialului consumat.",
        "Datele despre rețetă și șarjă sunt înregistrate, validând conformitatea procesului și standardele de producție.",
        "Urmărirea datelor de expirare și a termenului de valabilitate se efectuează pentru reducerea pierderilor.",
        "Procesele de carantină, blocare și aprobare a calității sunt digitalizate, evitând expedierea neconformă.",
        "Recallul de produse este accelerat semnificativ prin trasabilitatea de tip forward și backward."
      ]
    },
    3: {
      title: "Pick to Light",
      description: "Pick to Light este un sistem digital de asistență pentru operator, conceput să ghideze operatorii prin indicatori luminoși la materialele corecte în timpul asamblării, kitting-ului sau pregătirii comenzilor.",
      detail: "Pick to Light este un sistem digital de asistență pentru operator, conceput să ghideze operatorii prin indicatori luminoși la materialele corecte în timpul asamblării, kitting-ului sau pregătirii comenzilor. Sistemul determină automat piesa corectă și secvența operațională pe baza comenzii de producție sau a rețetei.\n\nAceastă soluție, integrată cu scanere, RFID, senzori, camere, dispozitive de strângere, PLC și HMI, creează o infrastructură poka-yoke ce previne asamblarea incompletă sau utilizarea pieselor incorecte.",
      detailBulletsHeading: "Avantaje:",
      detailBullets: [
        "Ghidajul luminos de pe raft ghidează operatorul spre piesa corectă, scăzând erorile de selecție.",
        "Se previne utilizarea componentelor greșite prin intermediul confirmărilor automate cu cod de bare sau RFID.",
        "Succesiunea operațiunilor este gestionată digital, prevenind etapele de asamblare omise.",
        "Timpii de proces și ciclurile de execuție sunt înregistrați pentru analize de performanță și blocaje.",
        "Generarea unui flux de lucru dinamic în funcție de modelul produsului prin intermediul integrării ERP și MES."
      ]
    },
    4: {
      title: "RTLS – Sisteme de localizare în timp real",
      description: "RTLS reprezintă sisteme de localizare a pozițiilor în timp real pentru produse, paleți, cutii, stivuitoare sau alte active în unitatea industrială.",
      detail: "RTLS reprezintă sisteme de localizare a pozițiilor în timp real pentru produse, paleți, cutii, stivuitoare sau alte active în unitatea industrială. Tehnologiile bazate pe frecvențe radio (RF) sunt de obicei componentele cheie. În funcție de nevoi, metodele optice sau acustice precum infraroșu sau ultrasunete pot fi suplimentate. Poziția curentă și istoricul activelor sunt monitorizate digital.\n\nVizualizarea și optimizarea proceselor de logistică internă sunt posibile prin analizarea rutelor, a timpilor de așteptare, a mișcărilor și a intrărilor/ieșirilor din zone speciale. Datele din locație pot alimenta automatizarea decizională din ERP, MES și WMS.",
      detailBulletsHeading: "Avantaje:",
      detailBullets: [
        "Timpii consumați pentru căutarea materialelor și a echipamentelor sunt eliminați prin tracking live.",
        "Intrările și ieșirile din zone specifice sunt controlate, detectând mișcările neautorizate.",
        "Analiza rutelor și a timpului de menținere evidențiază blocajele din logistica internă.",
        "Creșterea eficienței utilizării prin analiza mișcărilor stivuitoarelor și cărucioarelor.",
        "Lansarea unor fluxuri automate de lucru bazate pe poziție via integrările MES și WMS."
      ]
    },
    5: {
      title: "Sisteme de gestionare a depozitelor (WMS)",
      description: "Sistemele WMS gestionează digital toate activitățile de depozitare, de la recepția materiilor prime la livrarea finală, pentru produse finite, semifabricate și alte consumabile.",
      detail: "Sistemele WMS gestionează digital toate activitățile de depozitare, de la recepția materiilor prime la livrarea finală, pentru produse finite, semifabricate și alte consumabile. Toate fluctuațiile de stoc sunt înregistrate prin coduri de bare, QR, Data Matrix, RFID și terminale mobile.\n\nSistemul unifică controlul locației, urmărirea loturilor, scanarea seriei, controlul calității, pregătirea comenzilor și verificarea expedierilor. Integrarea cu ERP și MES garantează acuratețea stocurilor globale.",
      detailBulletsHeading: "Avantaje:",
      detailBullets: [
        "Recepția este validată prin coduri sau RFID, prevenind cantitățile și intrările greșite.",
        "Depozitarea pe rafturi este vizualizată în timp real, optimizând utilizarea spațiului în depozit.",
        "Reducerea pierderilor de stoc și a expirării produselor.",
        "Urmărirea la nivel de lot, serie și dată de expirare asigură o trasabilitate completă a depozitului.",
        "Verificarea livrărilor elimină produsele greșite, coletele lipsă sau erorile de expediere.",
        "Corelarea automată a datelor de inventar, comenzi și livrare prin intermediul interfeței ERP."
      ]
    },
    6: {
      title: "Integrare software și sisteme",
      description: "Serviciile de integrare oferă transferul de date necesar între aplicații și structuri independente pentru o comunicare și o cooperare armonioasă.",
      detail: "Serviciile de integrare oferă transferul de date necesar între aplicații și structuri independente pentru o comunicare și o cooperare armonioasă. Coeziunea proceselor din sisteme incompatibile reduce activitățile manuale, accelerează generarea de rapoarte și facilitează analizele predictive.\n\nSiskon configurează conexiunile dintre software-ul existent și logica afacerilor dvs. asigurând un flux fiabil. Gestionăm toate fazele, de la analiză și proiectare la dezvoltare .Net, testare și punere în funcțiune pe scară largă pentru durabilitate.",
      detailBulletsHeading: "Avantaje:",
      detailBullets: [
        "Datele sunt propagate automat între sistemele curente, limitând munca repetitivă de tastare.",
        "Proiectarea unei structuri adaptate logicii interne; operarea este sigură și sincronizată.",
        "Fuzionarea detaliilor din diverse surse sporește agilitatea decizională și raportarea analitică.",
        "Management complet al fazelor (analiză, design, implementare), pentru soluții durabile de lungă durată.",
        "Sunt consolidate sistemele de tip MRP, ERP, CRM, monitorizare energie, mentenanță și calibrare, plus managementul calității."
      ]
    }
  },
};
