'use client';

import Link from 'next/link';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { IconArrowLeft } from '../ui/Icons';
import ReferenceProjectsSlider from './ReferenceProjectsSlider';
import { toLocalePath } from '../../lib/i18n/dictionaries';

/* eslint-disable react/prop-types */

const dict = {
  tr: {
    backToProjects: 'Referans Projelere Dön',
    sector: 'Sektör',
    location: 'Konum',
    year: 'Yıl',
    scope: 'Kapsam',
    scopeVal: 'Anahtar Teslim',
    automotive: 'Otomotiv',
    izmirEsbas: 'İzmir · ESBAŞ',
    
    heroTitleLine1: 'Her parçaya tek bir seri numarası,',
    heroTitleLine2: 'tek bir izlenebilir kimlik.',
    heroSub: "Phinia'nın İzmir ESBAŞ Serbest Bölge fabrikası için geliştirilen 3 eksenli lazer markalama tezgahı; markalama ve kamera doğrulamasını tek bir otomatik akışta birleştirir ve Oracle ile çift yönlü konuşur.",
    
    // Context
    contextEyebrow: 'Müşteri ve Bağlam',
    contextTitle: 'Serbest bölgede, sıfır tolerans üretim',
    contextP1: "Phinia'nın İzmir ESBAŞ Serbest Bölge'deki fabrikası otomotiv sektörüne yönelik üretim yapıyor. Bu tür üretimde her parçanın nereden geldiği, hangi hattan çıktığı ve hangi kontrolden geçtiği geriye dönük olarak sorgulanabilir olmalı.",
    contextP2: "Proje, üretilen her ürünün tekil olarak markalanması ve baştan sona izlenebilirliğinin sağlanması amacıyla hayata geçirildi. Markalamanın kendisi kadar, o markalamanın doğru okunabildiğinin garanti altına alınması da işin merkezindeydi.",

    // Problem
    problemEyebrow: 'İhtiyaç / Problem',
    problemTitle: 'İki ayrı adım, iki ayrı risk',
    problemLede: 'Markalama ve doğrulama birbirinden kopuk, elle kontrole açık adımlar hâlinde yürüdüğünde, arada iki türlü boşluk oluşuyordu.',
    problemList: [
      { bold: 'Tekil markalama zorunluluğu.', text: 'Her parçanın kendi seri numarasıyla markalanması ve bu numaranın merkezi sisteme aktarılması gerekiyordu.' },
      { bold: 'Okunamayan kod riski.', text: 'Doğrulama ayrı bir adım olarak elle yapıldığında, hatalı ya da okunamayan kod fark edilmeden hattan geçebiliyordu.' },
      { bold: 'İzlenebilirlik boşluğu.', text: 'Markalama ile veri kaydı arasındaki kopukluk, geriye dönük sorgulamada eksik zincir anlamına geliyordu.' }
    ],

    // Solution
    solutionEyebrow: 'Çözüm',
    solutionTitle: 'Markalama ve doğrulama, tek akış',
    solutionLede: "Phinia için mekanik tasarımı dahil anahtar teslim geliştirilen tezgah; esnek çalışabilmesi için 3 eksenli hareket kapasitesiyle tasarlandı. Seri numaraları Oracle'dan alınır, parçaya işlenir ve aynı akış içinde kamera ile doğrulanır.",
    steps: [
      { no: '01', title: 'Seri no alınır', text: "Basılacak tekil seri numarası Oracle'dan çekilir." },
      { no: '02', title: 'Lazer markalama', text: '3 eksenli servo yapı parçayı konumlar, kod lazerle işlenir.' },
      { no: '03', title: 'Kamera doğrulama', text: 'Kod içeriği, derece ve konum otomatik kontrol edilir.' },
      { no: '04', title: 'Onay geri yazılır', text: "Uygun parçaların onay verisi Oracle'a geri gönderilir." }
    ],
    oracleLoop: {
      serialNo: 'seri numarası',
      confirmData: 'onay verisi',
      machine: 'Lazer Markalama Tezgahı'
    },

    // Tech
    techEyebrow: 'Kullanılan Teknoloji / Ekipman',
    techTitle: 'Anahtar teslim sistem mimarisi',
    techGrid: [
      { tag: 'MARKALAMA', title: 'Lazer markalama cihazı', text: 'Parçaya tekil seri numarasını kalıcı olarak işleyen markalama ünitesi.' },
      { tag: 'HAREKET', title: '3 eksenli servo yapı', text: 'Esnek konumlandırma için X-Y-Z eksenlerinde servo tahrikli hareket.' },
      { tag: 'KONTROL', title: 'PLC saha otomasyonu', text: 'İstasyon içindeki tüm saha sinyallerini ve iş akışını yöneten PLC.' },
      { tag: 'ARAYÜZ', title: 'C# ile SCADA uygulaması', text: 'Operatör arayüzü ve süreç izleme için özel geliştirilmiş SCADA.' },
      { tag: 'DOĞRULAMA', title: 'Kamera tabanlı kontrol', text: 'Kod içeriği, derece ve konum doğrulaması görüntü işleme ile otomatik.' },
      { tag: 'VERİ', title: 'Oracle entegrasyonu', text: 'Seri numarası talebi ve onay verisiyle çift yönlü veri alışverişi.' }
    ],

    // Integration
    integrationEyebrow: 'Entegrasyonlar',
    integrationTitle: 'Oracle ile çift yönlü entegrasyon',
    integrationDesc: 'Sistem Oracle ile çift yönlü entegre çalışmaktadır: seri numaraları Oracle\'dan alınmakta, markalama ve kontrol sonrası uygun parçaların onay verileri Oracle\'a geri gönderilmektedir.',

    // Results
    resultsEyebrow: 'Kazanımlar / Sonuçlar',
    resultsTitle: 'Doğrulanabilir izlenebilirlik',
    resultsGrid: [
      { id: '// 01', title: 'Her ürün için tekil izlenebilirlik', text: 'Parça bazında seri numarası ve kayıt zinciri, geriye dönük sorgulamayı mümkün kılar.' },
      { id: '// 02', title: 'Hatalı koda geçit yok', text: 'Markalama sonrası otomatik kamera kontrolü, okunamayan ya da hatalı kodları hattan geçmeden yakalar.' },
      { id: '// 03', title: 'Tek akışta güvenilirlik', text: 'Markalama ve doğrulamanın tek otomatik akışta birleşmesi, süreç güvenilirliğini artırır.' }
    ],

    // Closer
    closerTitle: 'Markalama ve doğrulama, aynı istasyonda tek bir akışta.',
    
    // Standard CTA
    ctaTitle: 'Üretim süreçlerinizi dönüştürmek ister misiniz?',
    ctaSubtitle: 'Operasyonel akışınıza uygun izlenebilirlik çözümünü birlikte planlayalım.',
    ctaPrimary: 'İletişime Geç',
    
    relatedProjects: 'Benzer Projeler'
  },
  en: {
    backToProjects: 'Back to Reference Projects',
    sector: 'Sector',
    location: 'Location',
    year: 'Year',
    scope: 'Scope',
    scopeVal: 'Turnkey',
    automotive: 'Automotive',
    izmirEsbas: 'Izmir · ESBAŞ',
    
    heroTitleLine1: 'A unique serial number for every part,',
    heroTitleLine2: 'a unique traceable identity.',
    heroSub: "Developed for Phinia's Izmir ESBAŞ Free Zone factory, the 3-axis laser marking machine combines marking and camera verification in a single automated flow and communicates bi-directionally with Oracle.",
    
    // Context
    contextEyebrow: 'Customer and Context',
    contextTitle: 'Zero-tolerance production in the free zone',
    contextP1: "Phinia's factory in the Izmir ESBAŞ Free Zone manufactures for the automotive sector. In this type of production, where every part comes from, which line it came out of, and which control it went through must be queryable retrospectively.",
    contextP2: "The project was implemented to mark each manufactured product uniquely and ensure end-to-end traceability. Guaranteeing that the marking can be read correctly was just as central to the task as the marking itself.",

    // Problem
    problemEyebrow: 'Need / Problem',
    problemTitle: 'Two separate steps, two separate risks',
    problemLede: 'When marking and verification ran as separate steps open to manual control, two types of gaps occurred in between.',
    problemList: [
      { bold: 'Unique marking requirement.', text: 'Each part had to be marked with its own serial number and this number had to be transmitted to the central system.' },
      { bold: 'Unreadable code risk.', text: 'When verification was done manually as a separate step, faulty or unreadable codes could pass through the line unnoticed.' },
      { bold: 'Traceability gap.', text: 'The disconnection between marking and data recording meant a broken chain in retrospective querying.' }
    ],

    // Solution
    solutionEyebrow: 'Solution',
    solutionTitle: 'Marking and verification, single flow',
    solutionLede: "The machine, developed turnkey for Phinia including its mechanical design, was designed with 3-axis motion capability to operate flexibly. Serial numbers are retrieved from Oracle, marked on the part, and verified by camera in the same flow.",
    steps: [
      { no: '01', title: 'Get serial no', text: 'The unique serial number to be printed is retrieved from Oracle.' },
      { no: '02', title: 'Laser marking', text: 'The 3-axis servo structure positions the part, and the code is laser-etched.' },
      { no: '03', title: 'Camera verification', text: 'Code content, angle, and position are automatically checked.' },
      { no: '04', title: 'Write confirmation back', text: 'Confirmation data for compliant parts is sent back to Oracle.' }
    ],
    oracleLoop: {
      serialNo: 'serial number',
      confirmData: 'confirmation data',
      machine: 'Laser Marking Machine'
    },

    // Tech
    techEyebrow: 'Technology / Equipment Used',
    techTitle: 'Turnkey system architecture',
    techGrid: [
      { tag: 'MARKING', title: 'Laser marking device', text: 'The marking unit that permanently etches the unique serial number on the part.' },
      { tag: 'MOTION', title: '3-axis servo structure', text: 'Servo-driven movement on X-Y-Z axes for flexible positioning.' },
      { tag: 'CONTROL', title: 'PLC field automation', text: 'The PLC that manages all field signals and workflow within the station.' },
      { tag: 'INTERFACE', title: 'SCADA application with C#', text: 'Specially developed SCADA for operator interface and process monitoring.' },
      { tag: 'VERIFICATION', title: 'Camera-based control', text: 'Automatic code content, angle, and position verification using image processing.' },
      { tag: 'DATA', title: 'Oracle integration', text: 'Bi-directional data exchange with serial number request and confirmation data.' }
    ],

    // Integration
    integrationEyebrow: 'Integrations',
    integrationTitle: 'Oracle bi-directional integration',
    integrationDesc: 'The system operates bi-directionally integrated with Oracle: serial numbers are retrieved from Oracle, and after marking and inspection, confirmation data for compliant parts is sent back to Oracle.',

    // Results
    resultsEyebrow: 'Benefits / Results',
    resultsTitle: 'Verifiable traceability',
    resultsGrid: [
      { id: '// 01', title: 'Unique traceability for each product', text: 'Serial number and record chain on a per-part basis enable retrospective querying.' },
      { id: '// 02', title: 'No passage for faulty codes', text: 'Automatic camera check after marking catches unreadable or faulty codes before they leave the line.' },
      { id: '// 03', title: 'Reliability in a single flow', text: 'Combining marking and verification in a single automated flow increases process reliability.' }
    ],

    // Closer
    closerTitle: 'Marking and verification, in the same station in a single flow.',
    
    // Standard CTA
    ctaTitle: 'Do you want to transform your production processes?',
    ctaSubtitle: 'We plan a traceability solution together, tailored to your operational flow.',
    ctaPrimary: 'Contact Us',
    
    relatedProjects: 'Related Projects'
  },
  ro: {
    backToProjects: 'Înapoi la Proiecte de Referință',
    sector: 'Sector',
    location: 'Locație',
    year: 'An',
    scope: 'Domeniu',
    scopeVal: 'La cheie',
    automotive: 'Auto',
    izmirEsbas: 'Izmir · ESBAŞ',
    
    heroTitleLine1: 'Un număr de serie unic pentru fiecare piesă,',
    heroTitleLine2: 'o identitate trasabilă unică.',
    heroSub: "Dezvoltată pentru fabrica Phinia din Zona Liberă ESBAŞ Izmir, mașina de marcare cu laser pe 3 axe combină marcarea și verificarea cu cameră într-un singur flux automatizat și comunică bidirecțional cu Oracle.",
    
    // Context
    contextEyebrow: 'Client și Context',
    contextTitle: 'Producție cu toleranță zero în zona liberă',
    contextP1: "Fabrica Phinia din Zona Liberă ESBAŞ Izmir produce pentru sectorul auto. În acest tip de producție, originea fiecărei piese, linia de producție din care a ieșit și controlul prin care a trecut trebuie să poată fi verificate retroactiv.",
    contextP2: "Proiectul a fost implementat pentru a marca în mod unic fiecare produs fabricat și pentru a asigura trasabilitatea de la cap la cap. Garantarea faptului că marcajul poate fi citit corect a fost la fel de centrală pentru proiect ca marcajul în sine.",
    
    // Problem
    problemEyebrow: 'Nevoie / Problemă',
    problemTitle: 'Doi pași separați, două riscuri separate',
    problemLede: 'Când marcarea și verificarea funcționau ca pași separați, supuși controlului manual, apăreau două tipuri de lacune între ele.',
    problemList: [
      { bold: 'Cerința de marcare unică.', text: 'Fiecare piesă trebuia marcată cu propriul număr de serie, iar acest număr trebuia transmis la sistemul central.' },
      { bold: 'Riscul de cod necitibil.', text: 'Atunci când verificarea se făcea manual, ca pas separat, codurile eronate sau necitibile puteau trece prin linie fără a fi observate.' },
      { bold: 'Lacună de trasabilitate.', text: 'Deconectarea dintre marcare și înregistrarea datelor însemna o verigă lipsă în interogarea retrospectivă.' }
    ],

    // Solution
    solutionEyebrow: 'Soluție',
    solutionTitle: 'Marcare și verificare, un singur flux',
    solutionLede: "Echipamentul, dezvoltat la cheie pentru Phinia inclusiv designul său mecanic, a fost proiectat cu o capacitate de mișcare pe 3 axe pentru a funcționa flexibil. Numerele de serie sunt preluate din Oracle, marcate pe piesă și verificate cu camera în același flux.",
    steps: [
      { no: '01', title: 'Preluare nr. serie', text: 'Numărul unic de serie ce va fi imprimat este extras din Oracle.' },
      { no: '02', title: 'Marcare laser', text: 'Structura servo pe 3 axe poziționează piesa, iar codul este gravat cu laser.' },
      { no: '03', title: 'Verificare cameră', text: 'Conținutul codului, gradul și poziția sunt verificate automat.' },
      { no: '04', title: 'Salvare confirmare', text: 'Datele de confirmare pentru piesele conforme sunt trimise înapoi la Oracle.' }
    ],
    oracleLoop: {
      serialNo: 'număr de serie',
      confirmData: 'date confirmare',
      machine: 'Echipament de Marcare Laser'
    },

    // Tech
    techEyebrow: 'Tehnologie / Echipamente Utilizate',
    techTitle: 'Arhitectură de sistem la cheie',
    techGrid: [
      { tag: 'MARCARE', title: 'Dispozitiv de marcare cu laser', text: 'Unitatea de marcare care gravează permanent numărul de serie unic pe piesă.' },
      { tag: 'MIȘCARE', title: 'Structură servo pe 3 axe', text: 'Mișcare acționată de servo pe axele X-Y-Z pentru o poziționare flexibilă.' },
      { tag: 'CONTROL', title: 'Automatizare de câmp cu PLC', text: 'PLC-ul care gestionează toate semnalele din teren și fluxul de lucru în stație.' },
      { tag: 'INTERFAȚĂ', title: 'Aplicație SCADA cu C#', text: 'Aplicație SCADA dezvoltată special pentru interfața operatorului și monitorizarea procesului.' },
      { tag: 'VERIFICARE', title: 'Control bazat pe cameră', text: 'Verificarea automată a conținutului codului, a gradului și a poziției prin procesare de imagini.' },
      { tag: 'DATE', title: 'Integrare Oracle', text: 'Schimb bidirecțional de date cu solicitarea numărului de serie și datele de confirmare.' }
    ],

    // Integration
    integrationEyebrow: 'Integrări',
    integrationTitle: 'Integrare bidirecțională Oracle',
    integrationDesc: 'Sistemul funcționează integrat bidirecțional cu Oracle: numerele de serie sunt preluate din Oracle, iar după marcare și control, datele de confirmare pentru piesele conforme sunt trimise înapoi la Oracle.',

    // Results
    resultsEyebrow: 'Beneficii / Rezultate',
    resultsTitle: 'Trasabilitate verificabilă',
    resultsGrid: [
      { id: '// 01', title: 'Trasabilitate unică pentru fiecare produs', text: 'Numărul de serie și lanțul de înregistrări per piesă permit interogarea retrospectivă.' },
      { id: '// 02', title: 'Fără trecere pentru codurile eronate', text: 'Verificarea automată cu camera după marcare detectează codurile necitibile sau eronate înainte ca acestea să părăsească linia.' },
      { id: '// 03', title: 'Fiabilitate într-un singur flux', text: 'Combinarea marcării și verificării într-un singur flux automatizat cresște fiabilitatea procesului.' }
    ],

    // Closer
    closerTitle: 'Marcare și verificare, în aceeași stație într-un singur flux.',
    
    // Standard CTA
    ctaTitle: 'Vrei să transformi procesele tale de producție?',
    ctaSubtitle: 'Planificăm împreună o soluție de trasabilitate adaptată fluxurilor tale operaționale.',
    ctaPrimary: 'Cere Ofertă',
    
    relatedProjects: 'Proiecte Similare'
  }
};

export default function PhiniaDetailPage({ locale = 'tr', backHref, localizedProjects }) {
  const currentDict = dict[locale] || dict.tr;

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <Container size="xl">
        {/* Back Button */}
        <Link href={backHref} className="inline-flex items-center gap-2 text-secondary-blue hover:text-accent-blue transition-colors mb-8 font-semibold text-sm">
          <IconArrowLeft /> {currentDict.backToProjects}
        </Link>

        <article className="mx-auto max-w-none">
          {/* ============ HEADER ============ */}
          <header className="mb-10 border-b border-slate-200 pb-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
              
              <div>
                <div className="mb-4">
                  <span className="text-xs font-semibold text-white uppercase bg-accent-blue px-3 py-1 rounded-md">
                    {currentDict.automotive}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-primary-black leading-tight tracking-tight mb-6">
                  <span className="md:whitespace-nowrap">{currentDict.heroTitleLine1}</span>
                  <br className="hidden md:inline" />{" "}
                  <span className="md:whitespace-nowrap">{currentDict.heroTitleLine2}</span>
                </h1>

                <p className="text-gray-text text-base md:text-lg max-w-[48ch] leading-relaxed mb-6 text-justify">
                  {currentDict.heroSub}
                </p>

                {/* Meta Rail */}
                <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-slate-200 pt-6 gap-4">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      {currentDict.sector}
                    </div>
                    <div className="font-semibold text-primary-black text-sm sm:text-base mt-1">
                      {currentDict.automotive}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      {currentDict.location}
                    </div>
                    <div className="font-semibold text-primary-black text-sm sm:text-base mt-1">
                      {currentDict.izmirEsbas}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      {currentDict.year}
                    </div>
                    <div className="font-semibold text-primary-black text-sm sm:text-base mt-1">
                      2023
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      {currentDict.scope}
                    </div>
                    <div className="font-semibold text-primary-black text-sm sm:text-base mt-1">
                      {currentDict.scopeVal}
                    </div>
                  </div>
                </div>
              </div>

              {/* Phinia Logo */}
              <div className="flex items-center justify-center lg:justify-end w-full py-4">
                <img
                  src="/Logos/phinia.svg"
                  alt="Phinia Logo"
                  className="w-full max-w-[360px] sm:max-w-[480px] md:max-w-[540px] h-auto object-contain"
                />
              </div>

            </div>
          </header>

          {/* ============ CONTEXT SECTION ============ */}
          <div className="border-b border-slate-200 pb-12 mb-12 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
            <div className="sticky top-24">
              <div className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.16em] text-[#2a15cd] mb-4 font-bold">
                <span className="w-6 h-[1px] bg-[#2a15cd] inline-block" />
                {currentDict.contextEyebrow}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-black tracking-tight leading-tight">
                {currentDict.contextTitle}
              </h2>
            </div>
            <div className="space-y-4 text-gray-text text-sm md:text-base leading-relaxed text-justify">
              <p>{currentDict.contextP1}</p>
              <p>{currentDict.contextP2}</p>
            </div>
          </div>

          {/* ============ PROBLEM SECTION ============ */}
          <div className="border-b border-slate-200 pb-12 mb-12 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
            <div className="sticky top-24">
              <div className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.16em] text-[#2a15cd] mb-4 font-bold">
                <span className="w-6 h-[1px] bg-[#2a15cd] inline-block" />
                {currentDict.problemEyebrow}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-black tracking-tight leading-tight mb-4">
                {currentDict.problemTitle}
              </h2>
              <p className="text-gray-text text-sm md:text-base leading-relaxed font-medium text-justify">
                {currentDict.problemLede}
              </p>
            </div>
            <div>
              <ul className="divide-y divide-slate-100 border-t border-slate-100">
                {currentDict.problemList.map((item, idx) => (
                  <li key={idx} className="flex gap-4 py-4 first:pt-3 last:pb-0 align-top">
                    <span className="font-mono text-sm text-secondary-blue font-bold">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-gray-text text-sm md:text-base leading-relaxed text-justify">
                      <b className="text-primary-black font-semibold block mb-0.5">{item.bold}</b>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ============ SOLUTION / FLOW SECTION ============ */}
          <div className="border-b border-slate-200 pb-12 mb-12">
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.16em] text-[#2a15cd] mb-4 font-bold">
                <span className="w-6 h-[1px] bg-[#2a15cd] inline-block" />
                {currentDict.solutionEyebrow}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-black tracking-tight leading-tight mb-3">
                {currentDict.solutionTitle}
              </h2>
              <p className="text-gray-text text-sm md:text-base max-w-3xl leading-relaxed text-justify">
                {currentDict.solutionLede}
              </p>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {currentDict.steps.map((step, idx) => (
                <div key={idx} className="relative rounded-md border-2 border-slate-200 bg-white p-6 shadow-soft hover:shadow-soft-lg hover:border-accent-blue transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs text-accent-blue font-bold">
                      {step.no}
                    </span>
                    <h4 className="font-bold text-primary-black text-base sm:text-lg mt-3 mb-2 tracking-tight">
                      {step.title}
                    </h4>
                    <p className="text-gray-text text-sm leading-relaxed text-justify">
                      {step.text}
                    </p>
                  </div>
                  {/* Visual arrow indicator for wider screens */}
                  {idx < 3 && (
                    <div className="hidden lg:block absolute right-[-8px] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-t border-r border-slate-200 rotate-45 z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ============ TECH GRID ============ */}
          <div className="border-b border-slate-200 pb-12 mb-12">
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.16em] text-[#2a15cd] mb-4 font-bold">
                <span className="w-6 h-[1px] bg-[#2a15cd] inline-block" />
                {currentDict.techEyebrow}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-black tracking-tight leading-tight">
                {currentDict.techTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentDict.techGrid.map((tech, idx) => (
                <div key={idx} className="rounded-md border-2 border-slate-200 bg-white p-6 shadow-soft hover:shadow-soft-lg hover:border-accent-blue transition-all duration-300">
                  <span className="text-[9.5px] font-mono tracking-widest text-accent-blue uppercase font-bold">
                    {tech.tag}
                  </span>
                  <h4 className="font-bold text-primary-black text-base sm:text-lg mt-2.5 mb-1.5 tracking-tight">
                    {tech.title}
                  </h4>
                  <p className="text-gray-text text-sm leading-relaxed text-justify">
                    {tech.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ============ ENTEGRASYONLAR SECTION ============ */}
          <div className="border-b border-slate-200 pb-12 mb-12">
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.16em] text-[#2a15cd] mb-4 font-bold">
                <span className="w-6 h-[1px] bg-[#2a15cd] inline-block" />
                {currentDict.integrationEyebrow}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-black tracking-tight leading-tight">
                {currentDict.integrationTitle}
              </h2>
            </div>

            {/* Oracle Loop Diagram (Two Column inside the box) */}
            <div className="bg-[#0e1f4b] text-white rounded-md shadow-md w-full max-w-none p-8 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
                
                {/* Left Side: Description Text */}
                <div className="text-slate-200 text-sm md:text-base leading-relaxed text-justify font-medium">
                  {currentDict.integrationDesc}
                </div>
                
                {/* Right Side: Horizontal/Vertical Diagram Flow */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center w-full">
                  <div className="px-5 py-2.5 bg-slate-900/60 border border-slate-800 rounded font-semibold text-sm min-w-[100px] shrink-0">
                    Oracle
                  </div>
                  <div className="flex flex-row sm:flex-col items-center gap-1.5 text-xs font-mono text-slate-400 shrink-0">
                    <span className="text-accent-red text-lg sm:rotate-0 rotate-90 font-bold">&rarr;</span>
                    {currentDict.oracleLoop.serialNo}
                  </div>
                  <div className="px-5 py-2.5 bg-slate-900/60 border border-slate-800 rounded font-semibold text-sm shrink-0">
                    {currentDict.oracleLoop.machine}
                  </div>
                  <div className="flex flex-row sm:flex-col items-center gap-1.5 text-xs font-mono text-slate-400 shrink-0">
                    <span className="text-accent-green text-lg sm:rotate-0 rotate-90 font-bold">&larr;</span>
                    {currentDict.oracleLoop.confirmData}
                  </div>
                  <div className="px-5 py-2.5 bg-slate-900/60 border border-slate-800 rounded font-semibold text-sm min-w-[100px] shrink-0">
                    Oracle
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ============ RESULTS SECTION ============ */}
          <div className="mb-12">
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.16em] text-[#2a15cd] mb-4 font-bold">
                <span className="w-6 h-[1px] bg-[#2a15cd] inline-block" />
                {currentDict.resultsEyebrow}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-black tracking-tight leading-tight">
                {currentDict.resultsTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentDict.resultsGrid.map((res, idx) => (
                <div key={idx} className="relative bg-white border-2 border-slate-200 rounded-md p-6 shadow-soft hover:shadow-soft-lg hover:border-accent-blue transition-all duration-300 overflow-hidden">
                  {/* Left Accent indicator stripe in brand blue */}
                  <div className="absolute left-0 top-0 h-full w-[4px] bg-secondary-blue" />
                  <span className="font-mono text-xs text-secondary-blue font-semibold">
                    {res.id}
                  </span>
                  <h4 className="font-bold text-primary-black text-base sm:text-lg mt-2.5 mb-1.5 tracking-tight">
                    {res.title}
                  </h4>
                  <p className="text-gray-text text-sm leading-relaxed text-justify">
                    {res.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ============ RELATED PROJECTS SLIDER ============ */}
          <div className="mt-16">
            <ReferenceProjectsSlider
              projects={localizedProjects}
              locale={locale}
              currentSlug="phinia-laser-marking-machine-traceability-integration"
              detailBasePath="/portfolio"
              labels={{
                title: currentDict.relatedProjects,
                prevAria: locale === 'tr' ? 'Önceki Proje' : (locale === 'en' ? 'Previous Project' : 'Proiectul Anterior'),
                nextAria: locale === 'tr' ? 'Sonraki Proje' : (locale === 'en' ? 'Next Project' : 'Proiectul Următor'),
                details: locale === 'tr' ? 'Detaylar' : (locale === 'en' ? 'Details' : 'Detalii'),
              }}
            />
          </div>

          {/* ============ CTA SECTION ============ */}
          <section className="mt-16 text-center py-10">
            <h2 className="text-3xl md:text-5xl font-semibold text-primary-black tracking-tight">{currentDict.closerTitle}</h2>
            <p className="mt-4 text-slate-500 text-base md:text-lg max-w-2xl mx-auto">{currentDict.ctaSubtitle}</p>
            <div className="mt-8 flex justify-center">
              <Button as={Link} href={toLocalePath('/contact', locale)} variant="solid" className="px-10 py-3 rounded-md">
                {currentDict.ctaPrimary}
              </Button>
            </div>
          </section>

        </article>
      </Container>
    </div>
  );
}
