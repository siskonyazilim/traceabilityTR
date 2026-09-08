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
          'Track & Trace este un sistem de trasabilitate industrială care atribuie o identitate unică fiecărui produs, lot, cutie sau palet și înregistrează digital fiecare etapă, de la recepția materiei prime până la expediere. Sistemul oferă acces instant la date precum materialele sursă, linia de producție, parametrii de calitate, informațiile operatorului și marcajele temporale. Colectate prin tehnologii de identificare precum coduri de bare, Data Matrix sau RFID, aceste date consolidează trasabilitatea producției, permit detectarea rapidă a abaterilor de calitate și sprijină conformitatea cu cerințele de audit specifice sectorului.',
      },
      {
        id: 2,
        question: 'Ce este Aggregation (Agregarea) și de ce este critică pentru trasabilitate?',
        answer:
          'Agregarea este procesul de asociere a identităților individuale ale produselor cu ambalajul de nivel superior care le conține — cutii, cartoane și paleți — formând o ierarhie digitală părinte–copil. Într-o structură conformă GS1, fiecare palet este identificat cu un cod SSCC, iar datele de trasabilitate ale tuturor unităților conținute pot fi accesate prin acest singur cod. Agregarea permite verificarea mai rapidă și mai fiabilă a expedierii, trasabilitatea paleților și gestionarea recall-urilor. Orice eroare de asociere în ierarhie poate determina retragerea produsului de pe linie sau blocarea expediției.',
      },
      {
        id: 3,
        question: 'Care este diferența dintre Serializare (UID) și Urmărirea Lotului?',
        answer:
          'Serializarea atribuie un număr de serie unic fiecărui produs individual, oferind trasabilitate la nivel de unitate. Standardul GS1 SGTIN este cea mai răspândită implementare și joacă un rol critic în scenariile de recall țintit și protecție împotriva contrafacerii. Urmărirea pe bază de lot grupează produsele fabricate în aceleași condiții sub un număr de lot comun, simplificând gestionarea colectivă a materiilor prime, parametrilor de proces și rezultatelor de calitate. În funcție de scopul proiectului, ambele metode pot fi aplicate împreună pentru a obține trasabilitate completă a materialelor atât la nivel de unitate, cât și la nivel de lot.',
      },
      {
        id: 4,
        question: 'Cum funcționează sistemele de verificare cu camere industriale?',
        answer:
          'Codurile de bare, Data Matrix sau codurile QR aplicate prin laser sau inkjet pe linia de producție sunt scanate în timp real de camerele industriale. Camera verifică automat lizibilitatea, contrastul, dimensiunile și acuratețea datelor fiecărui cod. Produsele cu coduri ilizibile sau detectate incorect sunt eliminate de pe linie printr-un mecanism de reject. Acest proces de verificare a codurilor bazat pe camere asigură că doar produsele cu coduri validate și de înaltă calitate trec la etapa următoare; erorile de citire și problemele de expediere care ar putea apărea în lanțul de aprovizionare sunt prevenite la punctul de producție.',
      },
      {
        id: 5,
        question: 'Ce tehnologii de codare sunt utilizate în trasabilitate?',
        answer:
          'Sistemele Track & Trace utilizează diferite tehnologii de codare și identificare, selectate în funcție de cerințele aplicației. Codarea laser oferă marcare permanentă fără consumabile și este potrivită pentru linii de mare viteză, deși pot apărea limitări de contrast pe anumite suprafețe și culori. Codarea inkjet este preferată pentru imprimări de format mare și contrast ridicat, în special pentru etichetarea cutiilor și paleților. Data Matrix 2D este standardul industrial pentru serializare datorită capacității ridicate de date într-un spațiu mic și rezistenței la deteriorare parțială. RFID oferă avantajul citirii în masă fără linie vizuală directă și este o opțiune puternică pentru scenarii logistice precum urmărirea paleților și gestionarea depozitelor. Selecția tehnologiei depinde de viteza liniei, materialul ambalajului și mediul de operare.',
      },
      {
        id: 6,
        question: 'Cum se realizează integrarea cu sistemele corporative ERP și MES?',
        answer:
          'Sistemul de trasabilitate industrială este integrat cu infrastructura corporativă existentă pentru funcționare eficientă. Datele de număr de serie, lot și agregare generate pe linia de producție sunt transmise către sistemul MES prin protocoale industriale precum OPC UA. MES gestionează urmărirea comenzilor de producție, starea calității și datele de proces, în timp ce WMS administrează locațiile din depozit, conținutul paleților și procesele de verificare a expedierilor. Aceste date sunt sincronizate bidirecțional cu platformele ERP (precum SAP, Oracle, Microsoft Dynamics) prin API-uri REST, SOAP sau conectori personalizați. Integrarea ERP, MES și WMS elimină introducerea manuală a datelor și asigură integritatea datelor în întreaga organizație, de la producție la expediere.',
      },
      {
        id: 7,
        question: 'Cum se asigură conformitatea cu reglementările și standardele GS1?',
        answer:
          'Cerințele de trasabilitate variază în funcție de sector, țară și cerințele clienților. Industriile reglementate precum tutunul și produsele farmaceutice dispun de sisteme obligatorii de urmărire, în timp ce în sectoarele auto, alimentar și de producție generală, trasabilitatea este de obicei determinată de standarde de calitate, cerințe ale clienților sau politici interne de audit. Standardele GS1 formează baza tehnică a acestei structuri: GTIN pentru identificarea produselor, SGTIN pentru unitățile serializate și SSCC pentru unitățile logistice precum paleții. Sistemele noastre generează automat identificatori conformi GS1 și structurează rapoarte de audit pentru a accelera procesele de trasabilitate a calității și de conformitate.',
      },
      {
        id: 8,
        question: 'Cât durează implementarea unui sistem complet de trasabilitate?',
        answer:
          'Durata implementării variază în funcție de numărul liniilor de producție, complexitatea proceselor și scopul integrării. Proiectul acoperă analiza proceselor, proiectarea arhitecturii, instalarea echipamentelor (imprimante, camere, mecanisme de reject), configurarea software, integrarea MES/ERP/WMS, testarea în teren și instruirea echipei. Se aplică o abordare de punere în funcțiune etapizată pentru a minimiza impactul asupra producției: se identifică liniile prioritare, iar după validarea pilotului, se realizează tranziția treptată către celelalte linii. În funcție de scopul proiectului, termenele și etapele sunt clarificate în cadrul analizei tehnice inițiale.',
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
