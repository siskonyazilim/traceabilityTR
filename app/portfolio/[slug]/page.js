import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '../../../components/ui/Container';
import Button from '../../../components/ui/Button';
import { referenceProjects } from '../../../data/references';
import { IconArrowLeft } from '../../../components/ui/Icons';
import ProjectGallerySlider from '../../../components/ui/ProjectGallerySlider';
import { cookies } from 'next/headers';
import { localizeReferenceProjects } from '../../../lib/i18n/contentLocalization';
import { f } from '../../../lib/i18n/sectionTranslations';
/* eslint-disable react/prop-types */

export async function generateMetadata({ params }) {
  const cookieStore = await cookies();
  const locale = cookieStore.get('locale')?.value === 'en' ? 'en' : 'ro';
  const isEn = locale === 'en';
  const localizedProjects = localizeReferenceProjects(referenceProjects, locale);
  const { slug: rawSlug } = await params;

  const legacySlugMap = {
    'maxion-inci-celik-trasabilitatea-paletilor': 'maxion-inci-celik',
    'abalioglu-yag-trasabilitate': 'abalioglu-yag',
    'abalıoglu-yag-trasabilitate': 'abalioglu-yag',
    'abalıoglu-yag': 'abalioglu-yag',
    'nuhun-ankara-trasabilitate': 'nuhun-ankara',
    'delphi-technologies-managementul-depozitelor': 'delphi-technologies',
    'pmi-rfid-pentru-stantare': 'pmi-rfid',
  };

  const slug = legacySlugMap[rawSlug] || rawSlug;
  const project = localizedProjects.find((entry) => entry.slug === slug);

  if (!project) {
    return {
      title: f(locale, 'portfolioDetailPage', 'notFoundTitle'),
      description: f(locale, 'portfolioDetailPage', 'notFoundDescription'),
    };
  }

  const title = `${project.title} | ${f(locale, 'portfolioDetailPage', 'projectSuffix')} | Traceability`;
  const description = project.description;
  const pageUrl = `https://traceability.ro/portfolio/${project.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: pageUrl,
      locale: isEn ? 'en_US' : 'ro_RO',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function PortfolioDetailPage({ params, searchParams }) {
  const cookieStore = await cookies();
  const locale = cookieStore.get('locale')?.value === 'en' ? 'en' : 'ro';
  const localizedProjects = localizeReferenceProjects(referenceProjects, locale);
  const { slug: rawSlug } = await params;
  const resolvedSearchParams = await searchParams;
  const legacySlugMap = {
    'maxion-inci-celik-trasabilitatea-paletilor': 'maxion-inci-celik',
    'abalioglu-yag-trasabilitate': 'abalioglu-yag',
    'abalıoglu-yag-trasabilitate': 'abalioglu-yag',
    'abalıoglu-yag': 'abalioglu-yag',
    'nuhun-ankara-trasabilitate': 'nuhun-ankara',
    'delphi-technologies-managementul-depozitelor': 'delphi-technologies',
    'pmi-rfid-pentru-stantare': 'pmi-rfid',
  };

  const slug = legacySlugMap[rawSlug] || rawSlug;
  const project = localizedProjects.find((p) => p.slug === slug);
  const fromPageRaw = resolvedSearchParams?.fromPage;
  const fromPage = Number.parseInt(Array.isArray(fromPageRaw) ? fromPageRaw[0] : fromPageRaw || '1', 10);
  const backHref = Number.isFinite(fromPage) && fromPage > 1
    ? `/proiecte-de-referinta?page=${fromPage}`
    : '/proiecte-de-referinta';

  if (!project) notFound();

  const relatedProjects = localizedProjects
    .filter((p) => p.sector === project.sector && p.id !== project.id)
    .slice(0, 3);

  const defaultNarrative = locale === 'en'
    ? [
        'We developed communication software between the Beckhoff PLC and the pallet applicator on the production line, enabling automatic printing of 2D codes based on recipes.',
        'Codes were automatically read at every station, enabling the automatic loading of corresponding recipes into the related PLCs.',
        'On manual lines, desktop printer integration controlled by PLC enabled automatic extraction of reference data from DPM codes and label printing.',
        'Through the HMI panel, barcode and printer errors were visualized, and manual read capability was added via handheld scanners when needed.',
        'As a result, product mix-ups were eliminated, and full traceability, automated data flow, and operational efficiency were achieved.',
      ]
    : [
        'Am dezvoltat un software de comunicare intre PLC-ul Beckhoff si aplicatorul de paleti de pe linia de productie, permitand imprimarea automata a codurilor 2D pe baza retetelor.',
        'Codurile au fost citite automat la fiecare statie, permitand incarcarea automata a retetelor aferente in PLC-urile corespunzatoare.',
        'Pe liniile manuale, integrarea imprimantei desktop controlata de PLC a permis extragerea automata a datelor de referinta din codurile DPM si imprimarea etichetelor.',
        'Prin intermediul panoului HMI, erorile de coduri de bare si de imprimanta au fost vizualizate, iar capacitatea de citire manuala a fost adaugata prin scanere portabile, atunci cand a fost necesar.',
        'Ca rezultat, amestecurile de produse au fost eliminate si s-au obtinut trasabilitate completa, flux automat de date si eficienta operationala.',
      ];

  const projectNarratives = {
    en: {
      'delphi-rfid-datamatrix-rail-assembly-integration': [
        'Delphi Technologies / RFID-Datamatrix Integration of the Rail Assembly.',
      ],
      'delphi-tool-tip-traceability': [
        'For Delphi Technologies, we implemented a tool-tip traceability flow that records each operation step and links quality checks to the related part history.',
        'The solution improved process visibility on the line and enabled faster root-cause analysis for deviations and rework actions.',
      ],
      'turk-tuborg-automatic-pallet-labeling-traceability': [
        'Turk Tuborg / Automatic pallet labeling and traceability.',
      ],
      'candy-hoover-test-data-production-efficiency-tracking': [
        'Product traceability within the factory and test results based on barcodes, together with visual inspections and rework processes, were recorded.',
        'Production data, downtime, and scrap information were collected, enabling real-time monitoring of production efficiency and instant display of OEE percentages through on-site Andon TV units.',
      ],
      'delphi-cloud-traceability-data-integration': [
        'Delphi Technologies / Cloud Integration of Traceability Data.',
      ],
      'tirsan-product-traceability': [
        'Tirsan / Product Traceability.',
      ],
      'delphi-prototype-line-traceability': [
        'Delphi Technologies / Prototype Line Traceability.',
      ],
      'pmi-urmarirea-filtrelor': [
        'In this project, which uses 50,300 RFID tags, 109 fixed RFID read/write heads, 63 local control panels, and 8 handheld RFID terminals, the objective is to ensure cigarette-filter traceability across the entire production area.',
        'The application, designed to ensure the right filter is used for the right product, also provides users with supporting reports such as expiry-date checks, inventory information, and machine-based production and consumption data.',
        'All tools can be monitored in real time through a SCADA system developed with .NET.',
        'Integrated with ERP, the project aims to prevent potential quality errors and ensure end-to-end filter traceability.',
      ],
      'mey-diageo-control-camera-etichete': [
        'A camera-control system that inspects bottle labels during the packaging process.',
        'Operating principle:',
        'Before the final packaging stage, it checks the labels on bottles packed in boxes of different sizes.',
        'If a bottle is missing or if there is an unlabeled bottle within the predefined bottle count, it alerts the operator with an audible warning and stops the conveyor.',
        'The operator performs the necessary checks.',
        'The camera-control system and the conveyor remain inactive until the warning is reset.',
      ],
      'delphi-monitorizare-individuala-rampa-injectie': [
        'Delphi Technologies / Individual Product Monitoring on the Injection Rail Assembly Line.',
      ],
      'pmi-rfid': [
        'In this SAP-integrated application, the operation of the correct stamping unit is ensured for the correct production order.',
        'In case of a mismatch, machine operation is blocked, and email notifications are automatically sent to designated users.',
      ],
      'delphi-technologies': [
        'For Delphi Technologies, we developed an integrated warehouse management and traceability solution that provides end-to-end visibility from production output to shipment.',
        'Within the project, inbound and outbound material movements were digitized and tracked with barcode-based identification at carton, pallet, and storage-location levels.',
        'Automatic process validation reduced operator-dependent errors in picking, consolidation, and dispatch workflows.',
        'Real-time data collection enabled centralized monitoring of stock, warehouse operations, and shipping status from a single control layer.',
        'Bidirectional ERP integration ensured synchronized order, inventory, and shipment data between warehouse operations and enterprise systems.',
        'With this solution, Delphi achieved faster warehouse execution, reduced handling errors, improved inventory accuracy, and full operational traceability.',
      ],
      'nemak-parts-traceability': [
        'In NEMAK\'s traceability system for discrete production, semi-finished products are tracked throughout the entire manufacturing and logistics process.',
        'Each product is equipped with a Datamatrix code, which is scanned and linked to its container as it moves through operations. This ensures precise tracking of every container, while accumulated containers are transported efficiently to the warehouse.',
        'The entire flow can be monitored in real time through dashboards, providing full transparency and operational control.',
      ],
      'haier-europe-assembly-line-installation-traceability': [
        'In our project implemented at Haier\'s factory in Turkey, a global leader in home appliances, we transformed the previously manual planning, tracking, and control processes on assembly lines into fully automated systems.',
        'Siskon installed new assembly lines at Haier Europe\'s cooking appliance factory and completely renewed the conveyor systems. The entire assembly process was made digitally traceable.',
        'End-to-end traceability for all products was achieved based on unique IDs from the start of the assembly line to the warehouse.',
      ],
      'haier-europe-sorting-line-installation-traceability': [
        'In the system established by Siskon, products from assembly and repair lines are sent to the packaging line via an elevator. After packaging, products are automatically directed to the sorting line.',
        'Based on the assembly line plan, sorting lines are programmed automatically. Products scanned with barcodes on the sorting line are routed to the relevant lines.',
        'Products accumulated on the lines are picked up by forklift operators and sent to the warehouse. The entire process can be monitored live through on-site Andon TVs.',
      ],
      'bomi-group-camera-based-multi-code-reading-system-tr': [
        'Within the scope of the project, the automatic filling of product-specific recipe information prevented incorrect entries. In addition, since the system indicated in advance which products would go to which packaging line, the necessary material supplies for the packaging lines were prepared in advance, thus preventing line stoppages.',
      ],
      'bomi-group-camera-based-multi-code-reading-system': [
        'Within the scope of the project, the automatic filling of product-specific recipe information prevented incorrect entries. In addition, since the system indicated in advance which products would go to which packaging line, the necessary material supplies for the packaging lines were prepared in advance, thus preventing line stoppages.',
      ],
      'abalioglu-yag': [
        'For Abalıoğlu Yağ, one of the leading edible oil producers in Turkey, we developed an integrated solution that ensures pallet traceability and automatic carton labeling throughout production and logistics operations.',
        'Within the project, a pallet-based traceability system was implemented by labeling each pallet with a unique ID, enabling end-to-end tracking from production to shipment.',
        'Automatic transfer of production orders to label printers ensured that the correct label was printed on the correct carton without operator intervention.',
        'Real-time data collection enabled centralized monitoring of the production line and shipping processes.',
        'ERP integration ensured full synchronization between order, production, and shipment data.',
        'With this solution, the following outcomes were achieved: 100% pallet traceability, a fast and error-free labeling process, increased operational efficiency, and real-time visibility of inventory and shipments in ERP.',
      ],
      'nuhun-ankara': [
        'For Nuh\'un Ankara, a food-sector company based in Ankara, we developed an integrated solution that ensures carton, pallet, and shipment traceability.',
        'Within the project, all processes from production to shipment were made digitally traceable.',
        'A carton- and pallet-based barcode/labeling system was implemented, uniquely identifying each product unit.',
        'Bidirectional ERP integration ensured automatic synchronization of order, production, and shipment data.',
        'Real-time shipment tracking made it easy to report which product was shipped, with which vehicle, and to which customer.',
        'With real-time data collection and reporting infrastructure, production, warehousing, and logistics operations became manageable from a single interface. As a result, 100% traceability, fast and error-free shipment management, and easy backward tracking in return or recall scenarios were achieved.',
      ],
      'maxion-inci-celik': [
        'We developed communication software between the Beckhoff PLC and the pallet applicator on the production line, enabling automatic printing of 2D codes based on recipes.',
        'Codes were automatically read at every station, enabling the automatic loading of corresponding recipes into the related PLCs.',
        'On manual lines, desktop printer integration controlled by PLC enabled automatic extraction of reference data from DPM codes and label printing.',
        'Through the HMI panel, barcode and printer errors were visualized, and manual read capability was added via handheld scanners when needed.',
        'As a result, product mix-ups were eliminated, and full traceability, automated data flow, and operational efficiency were achieved.',
      ],
      'haier-europe-single-product-traceability-oven-assembly-line': [
        'We implemented a traceability system on the new oven assembly lines at Haier Europe\'s cooking appliance factory, a global leader in white goods manufacturing, located in Turkey.',
        'In this project, where we also developed the assembly line automation software, the serial number from the product barcode is associated with RFID at the start of the line, and traceability is ensured through the RFID system. During production, electrical tests, gas leakage tests, and flame control tests are performed automatically, independently of the operator, at designated stations along the line, with test results collected from test stations and matched to the product serial number.',
        'The project uses 9-axis servo systems. All data exchange is facilitated through EtherCAT, TCP/IP, and Profinet communication infrastructure.',
        'Following the successful completion of the project, work began on the second line.',
      ],
      'borgwarner-sorting-barcode-control': [
        'All incoming products were scanned using a camera-based code reader, and the barcode data was cross-verified with information received from the SAP and PLC systems to prevent non-conforming products from passing through.',
        'Images of all products were stored in a database, matched with their serial numbers.',
        'Thanks to the reporting application developed, product transitions and associated photographs could be accessed based on date and time.',
      ],
      'borgwarner-laser-marking': [
        'As a turnkey solution, the system went into operation with full integration of mechanical, automation, and ERP components.',
        'Operating in sync with the Oracle ERP system, the machine performs automatic laser marking based on ERP data, followed by camera-based verification.',
        'The system features 3-axis control and uses a Profinet infrastructure.',
        'Monitoring, control, and integration processes are managed through a customer-specific SCADA system developed on the .NET platform.',
      ],
      'maxion-inci-celik-rfid-mold-tracking': [
        'In this project, SICK RFID equipment was used and integrated with a Siemens S7-1500 PLC. Mold and recipe matching was enabled to prevent incorrect mold usage.',
        'During recipe changes, mold IDs were read via RFID, and the system verified correct matching. If a correct match was detected, the machine was granted permission to operate.',
        'Mold lifetime can be tracked through the RFID-based system.',
      ],
      'bosch-trolley-tracking-rfid-gate': [
        'In the application developed for the Bosch thermotechnology factory, RFID read/write heads positioned at the warehouse exit ensured that kit trolleys, prepared according to the work order, were released for production.',
        'To physically enable this control, a barrier system was installed at the warehouse entrance and exit. The application, which facilitated bidirectional communication with the warehouse management system, scanned the RFID tags on incoming kit trolleys and queried the warehouse system, allowing only approved trolleys to exit.',
        'The project utilized 700 Confidex Metal RFID tags for the RFID read/write heads.',
      ],
      'mey-diageo-tracking-and-localization-project': [
        'As part of the Mey Diageo tracking and localization system renovation project, a robust, user-friendly, and flexible traceability system was successfully implemented.',
        'The project aimed to enable traceability from box to pallet. Using SICK brand barcode readers, the barcodes of boxes produced on the line are scanned and matched with the corresponding pallet barcodes. The system is fully integrated with SAP in both directions and is capable of operating offline in cases where SAP access is limited, such as during network outages, ensuring continuous production.',
        'Currently operating in 6 factories and 12 production lines, the application can be monitored from the central headquarters in Istanbul, where production-related reports are also generated centrally.',
      ],
      'bsh-glass-shelf-tracking': [
        'Integration with the traceability system was achieved by correlating product serial numbers with glass shelf trolley lot information.',
        'Data was recorded regarding which components, fed to the production line on a lot basis, were assembled into products with specific serial numbers.',
        'Through product-component correlation, the use of correct components in the correct products was ensured.',
      ],
      'bsh-oven-door-traceability': [
        'Integration with the traceability system was achieved by matching product serial numbers with door trolley lot information.',
        'Data was recorded about which components, supplied in batches to the production floor, were assembled into products with specific serial numbers.',
        'Through product-component matching, the use of correct components in correct products was ensured.',
      ],
      'bsh-assembly-line-traceability': [
        'In the project implemented using Sick RFGS Pro equipment, the material preparation process in the warehouse, including bin preparation, was optimized based on requirements from the production area.',
        'RFID tags were installed on over 300 bins, enabling automatic generation of material orders in the warehouse as bins exited through the RFID gate on the production line. The material flow was restructured according to the pull methodology.',
      ],
      'turk-demir-dokum-rfid-gate-with-digital-kanban': [
        'In the project implemented using Sick RFGS Pro equipment, the material preparation process in the warehouse, including bin preparation, was optimized based on requirements from the production floor.',
        'RFID tags were installed on over 300 bins, enabling automatic generation of material orders in the warehouse as bins exited through the RFID gate from the production floor. The material flow was restructured according to the pull methodology.',
      ],
      'pmi-barcode-gate': [
        'During the shipping process, a barcode gate system installed at the exit ramp automatically reads all pallet labels.',
        'Through integration, shipping work orders are automatically retrieved from the system and compared with pallet labels.',
        'If the scanned pallet labels match the shipping orders, the pallet barcodes along with the shipping number are sent to the WMS system.',
        'In case of incorrect label content, a warning is issued to the operator. This prevents the shipment of products with incorrect or missing barcodes.',
      ],
      'bsh-carriers-traceability': [
        'In the project carried out at the BSH oven factory, carriers mounted on oven glass were tracked and recorded based on basket ID.',
        'At the glass bonding station, baskets were scanned to ensure matching between glass lot numbers and carrier lot numbers.',
        'During product assembly, the lot number of the relevant glass trolley was associated with the product serial number, integrating with the traceability system.',
        'This ensured component-product matching, guaranteeing the use of correct components in correct products.',
        'For conforming parts, confirmation data was sent back to Oracle.',
      ],
      'phinia-laser-marking-machine-traceability-integration': [
        'To ensure traceability of each product, a laser marking machine was developed for Phinia to facilitate marking and identification processes.',
        'The machine was designed with 3-axis movement capability, creating a flexible structure.',
        'The system was integrated with Oracle. Serial numbers to be printed on products were retrieved from Oracle. After the marking process, code content, grade, and position checks were automatically performed using a camera.',
        'For conforming parts, confirmation data was sent back to Oracle.',
      ],
      'duru-bulgur-product-carton-pallet-traceability': [
        'The Product | Carton | Pallet traceability application was successfully implemented on production lines at Duru Bulgur\'s Karaman factory.',
        'During the packaging stage, products were individually marked to ensure traceability. A similar structure was established for cartons and pallets, recording which product went into which carton and which carton was placed on which pallet.',
        'Inter-warehouse transfers from different locations and transfers to customers were recorded using a handheld terminal application.',
        'The Product – Carton – Pallet – Warehouse – Customer steps were made traceable and manageable on a single platform, based on the product serial number.',
      ],
      'ajinomoto-kemal-kukrer-blockchain-integrated-product-traceability': [
        'At our client\'s factory in Eskisehir, which produces organic vinegar, organic vinegar parameters during the bottling stage are collected and correlated with individual bottle numbers.',
        'To ensure transparency and immutability of the collected data, it is transferred to a blockchain network. End users can scan the QR code on the bottle to transparently view the filling parameters of that vinegar and access production details.',
        'The application, which operates integrated with the SAP system, is also notable for running on cloud servers.',
      ],
      'orkide-quality-control-application': [
        'In collaboration with Orkide, one of Turkey\'s top companies in liquid oil production, we implemented a project for tracking content deficiencies in boxes.',
        'By enabling box traceability on the production line, the system automatically performs checks for missing product quantities inside boxes. Additionally, for certain selected products, handle presence/absence controls were implemented to detect defective products.',
      ],
    },
    ro: {
      'delphi-rfid-datamatrix-rail-assembly-integration': [
        'Delphi Technologies / Integrarea RFID-Datamatrix a ansamblului de sina.',
      ],
      'delphi-tool-tip-traceability': [
        'Pentru Delphi Technologies, am implementat un flux de trasabilitate a varfului de unealta care inregistreaza fiecare etapa de operare si leaga verificarile de calitate de istoricul piesei.',
        'Solutia a crescut vizibilitatea procesului pe linie si a permis analiza mai rapida a cauzelor pentru abateri si actiuni de retusare.',
      ],
      'turk-tuborg-automatic-pallet-labeling-traceability': [
        'Turk Tuborg / Etichetare si trasabilitate automata a paletilor.',
      ],
      'candy-hoover-test-data-production-efficiency-tracking': [
        'Trasabilitatea produselor in cadrul fabricii si rezultatele testelor bazate pe coduri de bare, impreuna cu inspectiile vizuale si procesele de retusare, au fost inregistrate.',
        'Au fost colectate date privind productia, timpii de nefunctionare si rebuturile, permitand monitorizarea in timp real a eficientei productiei si afisarea instantanee a procentelor OEE prin unitati TV Andon instalate la fata locului.',
      ],
      'delphi-cloud-traceability-data-integration': [
        'Delphi Technologies / Integrare în Cloud a Datelor de Trasabilitate.',
      ],
      'tirsan-product-traceability': [
        'Tirsan / Trasabilitatea produsului.',
      ],
      'delphi-prototype-line-traceability': [
        'Delphi Technologies / Trasabilitatea liniei de prototipuri.',
      ],
      'pmi-urmarirea-filtrelor': [
        'În acest proiect, care utilizează 50.300 de etichete RFID, 109 capete de citire-scriere RFID fixe, 63 de panouri de control locale și 8 terminale portabile RFID, scopul este de a asigura trasabilitatea filtrelor de țigări în întreaga zonă de producție.',
        'Aplicația, concepută pentru a asigura utilizarea filtrului corect pentru produsul corect, va oferi, de asemenea, utilizatorilor rapoarte auxiliare, cum ar fi verificări ale datei de expirare, informații despre inventar și date de producție și consum bazate pe mașini.',
        'Toate instrumentele pot fi monitorizate în timp real printr-un sistem SCADA dezvoltat cu .Net.',
        'Integrat cu ERP, proiectul își propune să prevină potențialele erori de calitate și să asigure trasabilitatea filtrelor de la un capăt la altul.',
      ],
      'mey-diageo-control-camera-etichete': [
        'Un sistem de control al camerei care inspectează etichetele de pe sticle în timpul procesului de ambalare.',
        'Principiu de funcționare:',
        'Înainte de etapa finală de ambalare, verifică etichetele de pe sticle în cutii de diferite dimensiuni.',
        'Dacă lipsește o sticlă sau există o sticlă fără etichetă în numărul prestabilit de sticle, alertează operatorul cu un avertisment sonor și oprește transportorul.',
        'Operatorul efectuează verificările necesare.',
        'Sistemul de control al camerei și transportorul rămân inactive până când avertismentul este resetat.',
      ],
      'delphi-monitorizare-individuala-rampa-injectie': [
        'Delphi Technologies / Monitorizarea individuală a produselor pe linia de asamblare a rampelor de injecție.',
      ],
      'pmi-rfid': [
        'În această aplicație integrată cu SAP, se asigură funcționarea unității de ștanțare corecte pentru comanda de producție corectă.',
        'În cazul unei nepotriviri, funcționarea mașinii este împiedicată, iar notificările sunt trimise prin e-mail către utilizatorii desemnați.',
      ],
      'delphi-technologies': [
        'Pentru Delphi Technologies, am dezvoltat o soluție integrată de management al depozitului și trasabilitate, care oferă vizibilitate completă de la ieșirea din producție până la expediere.',
        'În cadrul proiectului, mișcările de materiale la intrare și ieșire au fost digitalizate și urmărite prin identificare cu coduri de bare la nivel de carton, palet și locație de stocare.',
        'Validarea automată a proceselor a redus erorile dependente de operator în fluxurile de picking, consolidare și livrare.',
        'Colectarea datelor în timp real a permis monitorizarea centralizată a stocurilor, operațiunilor din depozit și statusului expedierilor dintr-un singur strat de control.',
        'Integrarea ERP bidirecțională a asigurat sincronizarea datelor de comenzi, stocuri și expediere între operațiunile de depozit și sistemele enterprise.',
        'Cu această soluție, Delphi a obținut execuție mai rapidă în depozit, reducerea erorilor de manipulare, acuratețe mai bună a stocurilor și trasabilitate operațională completă.',
      ],
      'nemak-parts-traceability': [
        'În sistemul de trasabilitate Nemak pentru producția discretă, produsele semifinite sunt urmărite pe parcursul întregului proces de fabricație și logistică.',
        'Fiecare produs este echipat cu un cod Datamatrix, care este scanat și conectat la containerul său pe măsură ce se deplasează prin operațiuni. Acest lucru asigură urmărirea precisă a fiecărui container, în timp ce containerele acumulate sunt transportate eficient la depozit.',
        'Întregul flux poate fi monitorizat în timp real prin intermediul tablourilor de bord, oferind transparență deplină și control operațional.',
      ],
      'haier-europe-assembly-line-installation-traceability': [
        'În proiectul nostru implementat la fabrica din Turcia a Haier, un lider global în domeniul electrocasnicelor, am transformat procesele de planificare, urmărire și control anterior manuale din liniile de asamblare în sisteme complet automatizate.',
        'Siskon a instalat noi linii de asamblare la fabrica de aparate de gătit a Haier Europe și a reînnoit complet sistemele de transport. Întregul proces de asamblare a fost făcut urmăribil digital.',
        'Trasabilitatea end-to-end a tuturor produselor a fost realizată pe baza unor ID-uri unice de la începutul liniei de asamblare până la depozit.',
      ],
      'haier-europe-sorting-line-installation-traceability': [
        'În sistemul stabilit de Siskon, produsele de pe liniile de asamblare și reparații sunt trimise către linia de ambalare printr-un elevator. După ambalare, produsele sunt direcționate automat către linia de sortare.',
        'Pe baza planului liniei de asamblare, liniile de sortare sunt programate automat. Produsele scanate cu codul de bare pe linia de sortare sunt direcționate către liniile relevante.',
        'Produsele acumulate pe linii sunt preluate de operatorii de stivuitor și trimise în depozit. Întregul proces poate fi monitorizat în direct prin intermediul televizoarelor Andon amplasate la fața locului.',
      ],
      'haier-europe-single-product-traceability-oven-assembly-line': [
        'Am implementat un sistem de trasabilitate pe noile linii de asamblare a cuptoarelor de la fabrica de aparate de gătit a Haier Europe, un lider global în producția de bunuri albe, situată în Turcia.',
        'În acest proiect, unde am dezvoltat și software-ul de automatizare pentru linia de asamblare, numărul de serie de pe codul de bare al produsului este asociat cu RFID la începutul liniei, iar trasabilitatea este asigurată prin sistemul RFID. În timpul producției, testele electrice, testele de scurgeri de gaz și testele de control al flăcării sunt efectuate automat, independent de operator, la stațiile desemnate de-a lungul liniei, rezultatele testelor fiind colectate de la stațiile de testare și potrivite cu numărul de serie al produsului.',
        'Proiectul utilizează sisteme servo cu 9 axe. Tot schimbul de date este facilitat prin infrastructura de comunicare EtherCAT, TCP/IP și Profinet.',
        'În urma finalizării cu succes a proiectului, au început lucrările la a doua linie.',
      ],
      'bomi-group-camera-based-multi-code-reading-system-tr': [
        'Pentru depozitul turcesc al BOMI Group – una dintre cele mai importante companii de logistică farmaceutică care operează în multe țări din întreaga lume – am dezvoltat un sistem de citire multi-cod bazat pe cameră, care a automatizat operațiunile manuale anterioare din cadrul unității.',
        'În cadrul proiectului, trasabilitatea a fost asigurată prin integrarea ERP în etapa de pregătire a transportului. Fluxurile de lucru manuale care implicau scanarea manuală a mii de produse au fost complet automatizate după implementarea sistemului. Ca rezultat, timpul de pregătire a produsului pentru expediere s-a îmbunătățit cu aproximativ 80%.',
      ],
      'bomi-group-camera-based-multi-code-reading-system': [
        'Pentru depozitul turcesc al BOMI Group – una dintre cele mai importante companii de logistică farmaceutică care operează în multe țări din întreaga lume – am dezvoltat un sistem de citire multi-cod bazat pe cameră, care a automatizat operațiunile manuale anterioare din cadrul unității.',
        'În cadrul proiectului, trasabilitatea a fost asigurată prin integrarea ERP în etapa de pregătire a transportului. Fluxurile de lucru manuale care implicau scanarea manuală a mii de produse au fost complet automatizate după implementarea sistemului. Ca rezultat, timpul de pregătire a produsului pentru expediere s-a îmbunătățit cu aproximativ 80%.',
      ],
      'borgwarner-sorting-barcode-control': [
        'Toate produsele primite au fost scanate folosind un cititor de coduri bazat pe cameră, iar datele codurilor de bare au fost verificate încrucișat cu informațiile primite de la sistemul SAP și PLC pentru a preveni trecerea produselor neconforme.',
        'Imaginile tuturor produselor au fost stocate într-o bază de date, potrivite cu numerele lor de serie.',
        'Datorită aplicației de raportare dezvoltate, tranzițiile produselor și fotografiile asociate au putut fi accesate pe baza datei și orei.',
      ],
      'borgwarner-laser-marking': [
        'Ca soluție la cheie, sistemul a intrat în funcțiune cu integrarea completă a componentelor mecanice, automatizării și ERP.',
        'Funcționând sincron cu sistemul Oracle ERP, mașina efectuează marcarea automată cu laser pe baza datelor ERP, urmată de verificarea bazată pe cameră.',
        'Sistemul dispune de control pe 3 axe și utilizează o infrastructură Profinet.',
        'Procesele de monitorizare, control și integrare sunt gestionate printr-un sistem SCADA specific clientului, dezvoltat pe platforma .NET.',
      ],
      'maxion-inci-celik-rfid-mold-tracking': [
        'În acest proiect, au fost utilizate echipamente SICK RFID și integrate cu un PLC Siemens S7-1500. Potrivirea matrițelor și a rețetelor a fost activată pentru a preveni utilizarea incorectă a matrițelor.',
        'În timpul modificărilor rețetelor, ID-urile matrițelor au fost citite prin RFID, iar sistemul a verificat potrivirea corectă. Dacă a fost detectată o potrivire corectă, mașinii i s-a acordat permisiunea de a funcționa.',
        'Durata de viață a matrițelor poate fi urmărită prin intermediul sistemului bazat pe RFID.',
      ],
      'bosch-trolley-tracking-rfid-gate': [
        'În aplicația dezvoltată pentru fabrica de termotehnică Bosch, capetele de citire/scriere RFID poziționate la ieșirea din depozit au asigurat că cărucioarele cu kituri, pregătite conform ordinului de lucru, au fost eliberate pentru producție.',
        'Pentru a permite fizic acest control, a fost instalat un sistem de barieră la intrarea și ieșirea din depozit. Aplicația, care a facilitat comunicarea bidirecțională cu sistemul de gestionare a depozitului, a scanat etichetele RFID de pe cărucioarele cu kituri care intrau și a interogat sistemul depozitului, permițând doar cărucioarelelor aprobate să iasă.',
        'Proiectul a utilizat 700 de etichete RFID Confidex Metal pentru capetele de citire/scriere RFID.',
      ],
      'mey-diageo-tracking-and-localization-project': [
        'Ca parte a proiectului de renovare a sistemului de urmărire și localizare Mey Diageo, a fost implementat cu succes un sistem de trasabilitate solid, ușor de utilizat și flexibil.',
        'Proiectul a avut ca scop activarea trasabilității de la cutie la palet. Folosind cititoare de coduri de bare marca SICK, codurile de bare ale cutiilor produse pe linie sunt scanate și potrivite cu codurile de bare corespunzătoare ale paleților. Sistemul este complet integrat cu SAP în ambele direcții și este capabil să funcționeze offline în cazurile în care accesul la SAP este limitat, cum ar fi în timpul întreruperilor de rețea, asigurând o producție continuă.',
        'În prezent, funcționând în 6 fabrici și 12 linii de producție, aplicația poate fi monitorizată de la sediul central din Istanbul, unde sunt generate centralizat și rapoartele legate de producție.',
      ],
      'bsh-glass-shelf-tracking': [
        'Integrarea cu sistemul de trasabilitate a fost realizată prin corelarea numerelor de serie ale produselor cu informațiile despre loturile cărucioarelor pentru rafturi din sticlă.',
        'Au fost înregistrate datele privind componentele, alimentate pe linia de producție pe bază de lot, care au fost asamblate în produse cu numere de serie specifice.',
        'Prin corelarea produs–componentă, s-a asigurat utilizarea componentelor corecte în produsele corecte.',
      ],
      'bsh-oven-door-traceability': [
        'Integrarea cu sistemul de trasabilitate a fost realizată prin potrivirea numerelor de serie ale produselor cu informațiile despre loturile de cărucioare pentru uși.',
        'Au fost înregistrate date despre ce componente, furnizate pe loturi la etajul de producție, au fost asamblate în produse cu numere de serie specifice.',
        'Prin potrivirea produs-componentă, s-a asigurat utilizarea componentelor corecte în produsele corecte.',
      ],
      'bsh-assembly-line-traceability': [
        'În cadrul proiectului implementat utilizând echipamente Sick RFGS Pro, procesul de pregătire a materialelor în depozit, inclusiv pregătirea lăzilor, a fost optimizat pe baza cerințelor venite din zona de producție.',
        'Etichete RFID au fost instalate pe peste 300 de lăzi, permițând generarea automată a comenzilor de materiale în depozit pe măsură ce lăzile ieșeau prin poarta RFID de pe linia de producție. Fluxul de materiale a fost restructurat conform metodologiei de tip „pull”.',
      ],
      'turk-demir-dokum-rfid-gate-with-digital-kanban': [
        'În proiectul implementat folosind echipamente Sick RFGS Pro, procesul de pregătire a materialelor în depozit, inclusiv pregătirea lăzilor, a fost optimizat pe baza cerințelor din secția de producție.',
        'Etichete RFID au fost instalate pe peste 300 de lăzi, permițând generarea automată a comenzilor de materiale în depozit, pe măsură ce lăzile ieșeau prin poarta RFID din secția de producție. Fluxul de materiale a fost restructurat conform metodologiei pull.',
      ],
      'pmi-barcode-gate': [
        'În timpul procesului de expediere, un sistem de poartă de coduri de bare instalat la rampa de ieșire citește automat toate etichetele paleților.',
        'Prin integrare, ordinele de lucru pentru expediere sunt preluate automat din sistem și comparate cu etichetele paleților.',
        'Dacă etichetele scanate ale paleților corespund comenzilor de expediere, codurile de bare ale paleților, împreună cu numărul de expediere, sunt trimise către sistemul WMS.',
        'În cazul unui conținut incorect al etichetei, este emisă o avertizare către operator. Acest lucru previne expedierea produselor cu coduri de bare incorecte sau lipsă.',
      ],
      'phinia-laser-marking-machine-traceability-integration': [
        'Pentru a asigura trasabilitatea fiecărui produs, a fost dezvoltată o mașină de marcare cu laser pentru Phinia, pentru a facilita procesele de marcare și identificare.',
        'Mașina a fost proiectată cu capacitate de mișcare pe 3 axe, creând o structură flexibilă.',
        'Sistemul a fost integrat cu Oracle. Numerele de serie care urmau să fie imprimate pe produse au fost preluate din Oracle. După procesul de marcare, conținutul codului, gradul și verificările poziției au fost efectuate automat folosind o cameră.',
        'Pentru piesele conforme, datele de confirmare au fost trimise înapoi către Oracle.',
      ],
      'duru-bulgur-product-carton-pallet-traceability': [
        'Aplicația de trasabilitate Produs | Carton | Palet a fost implementată cu succes pe liniile de producție de la fabrica Duru Bulgur din Karaman.',
        'În timpul etapei de ambalare, produsele au fost marcate individual pentru a asigura trasabilitatea. O structură similară a fost stabilită pentru cartoane și paleți, înregistrând ce produs a intrat în ce carton și ce carton a fost plasat pe ce palet.',
        'Transferurile între depozite din locații diferite și transferurile către clienți au fost înregistrate folosind o aplicație terminal portabilă.',
        'Pașii Produs – Carton – Palet – Depozit – Client au fost făcuți urmăribili și gestionabili pe o singură platformă, pe baza numărului de serie al produsului.',
      ],
      'bsh-carriers-traceability': [
        'În proiectul realizat la fabrica de cuptoare BSH, suporturile montate pe sticla cuptoarelor au fost urmărite și înregistrate pe baza ID-ului coșului.',
        'La stația de lipire a sticlei, coșurile au fost scanate pentru a asigura potrivirea între numerele de lot ale sticlei și ale suporturilor.',
        'În timpul asamblării produsului, numărul de lot al căruciorului de sticlă relevant a fost asociat cu numărul de serie al produsului, integrându-se cu sistemul de trasabilitate.',
        'Acest lucru a asigurat potrivirea componentă-produs, garantând utilizarea componentelor corecte în produsele corecte.',
        'Pentru piesele conforme, datele de confirmare au fost trimise înapoi către Oracle.',
      ],
      'ajinomoto-kemal-kukrer-blockchain-integrated-product-traceability': [
        'La fabrica clientului nostru din Eskișehir, care produce oțet organic, parametrii oțetului organic în etapa de îmbuteliere sunt colectați și corelați cu numerele individuale ale sticlelor.',
        'Pentru a asigura transparența și imuabilitatea datelor colectate, acestea sunt transferate într-o rețea blockchain. Utilizatorii finali pot scana codul QR de pe sticlă pentru a vizualiza în mod transparent parametrii de umplere ai oțetului respectiv și pentru a accesa detaliile de producție.',
        'Aplicația, care funcționează integrată cu sistemul SAP, se remarcă și prin rularea pe servere cloud.',
      ],
      'orkide-quality-control-application': [
        'În colaborare cu Orkide, una dintre companiile de top din Turcia în producția de uleiuri lichide, am implementat un proiect de urmărire a deficiențelor de conținut din cutii.',
        'Prin activarea trasabilității cutiilor pe linia de producție, sistemul efectuează automat verificări pentru cantitățile de produse lipsă din interiorul cutiilor. În plus, pentru anumite produse selectate, au fost implementate controale de prezență/absență a mânerelor pentru a detecta produsele defecte.',
      ],
      'abalioglu-yag': [
        'Pentru Abalıoğlu Yağ, unul dintre cei mai importanți producători de ulei din Turcia, am dezvoltat o soluție integrată care asigură trasabilitatea paleților și etichetarea automată a cutiilor de carton pe parcursul operațiunilor de producție și logistică.',
        'În cadrul proiectului, a fost implementat un sistem de trasabilitate bazat pe paleți, etichetând fiecare palet cu un ID unic pentru a permite urmărirea de la producție până la expediere.',
        'Transferul automat al ordinelor de producție către imprimantele de etichete a asigurat imprimarea etichetei corecte pe cutia de carton corectă, fără intervenția operatorului.',
        'Colectarea datelor în timp real a permis monitorizarea centralizată a liniei de producție și a proceselor de expediere.',
        'Integrarea ERP a asigurat sincronizarea completă între datele comenzilor, producției și expedierilor.',
        'Cu această soluție, au fost atinse: trasabilitate 100% a paleților, proces de etichetare rapid și fără erori, eficiență operațională sporită și vizibilitate în timp real a stocurilor și expedierilor în ERP.',
      ],
      'nuhun-ankara': [
        'Pentru Nuh\'un Ankara, o companie din sectorul alimentar cu sediul în Ankara, am dezvoltat o soluție integrată care asigură trasabilitatea cartonului, a paleților și a transportului.',
        'În cadrul proiectului, toate procesele, de la producție până la expediere, au fost făcute trasabile digital.',
        'A fost implementat un sistem de coduri de bare/etichetare bazat pe carton și paleți, identificând în mod unic fiecare unitate de produs.',
        'Integrarea bidirecțională ERP a asigurat sincronizarea automată a datelor de comandă, producție și expediere.',
        'Urmărirea în timp real a transportului a permis raportarea ușoară a produsului care a fost expediat, cu ce vehicul și către ce client.',
        'Cu infrastructura de colectare și raportare a datelor în timp real, operațiunile de producție, depozitare și logistică au devenit gestionabile dintr-o singură interfață. Cu această soluție s-au atins: trasabilitate 100%, gestionare rapidă și fără erori a transportului și urmărire ușoară înapoi în caz de returnări sau rechemări.',
      ],
      'maxion-inci-celik': [
        'Am dezvoltat un software de comunicare între PLC-ul Beckhoff și aplicatorul de paleți de pe linia de producție, permițând imprimarea automată a codurilor 2D pe baza rețetelor.',
        'Codurile au fost citite automat la fiecare stație, permițând încărcarea automată a rețetelor aferente în PLC-urile corespunzătoare.',
        'Pe liniile manuale, integrarea imprimantei desktop controlată de PLC a permis extragerea automată a datelor de referință din codurile DPM și imprimarea etichetelor.',
        'Prin intermediul panoului HMI, erorile de coduri de bare și de imprimantă au fost vizualizate, iar capacitatea de citire manuală a fost adăugată prin scanere portabile, atunci când a fost necesar.',
        'Ca rezultat, amestecurile de produse au fost eliminate și s-au obținut trasabilitate completă, flux automat de date și eficiență operațională.',
      ],
    },
  };

  const titleMatchedNarrativeSlugs = new Set([
    'candy-hoover-test-data-cooker-lines-traceability',
    'pmi-palletizing-automation-automatic-labeling',
    'stackpole-traceability',
  ]);
  const narrative = titleMatchedNarrativeSlugs.has(project.slug)
    ? [project.title]
    : (projectNarratives[locale]?.[project.slug] || defaultNarrative);

  const featuredImage = project.heroImage
    || (project.image?.includes('/Logos/') ? '/resmi/Factory.jpg' : project.image);
  const sliderImages = [featuredImage, ...(Array.isArray(project.gallery) ? project.gallery : [])];

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <Container size="xl">
        {/* Back Button */}
        <Link href={backHref} className="inline-flex items-center gap-2 text-secondary-blue hover:text-accent-blue transition-colors mb-8 font-semibold">
          <IconArrowLeft /> {f(locale, 'portfolioDetailPage', 'backToProjects')}
        </Link>

        <article className="mx-auto max-w-none">
          {/* Header */}
          <header className="mb-8 border-b border-slate-200 pb-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1fr)_320px] md:items-start md:gap-10">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-xs font-semibold text-white uppercase bg-accent-blue px-3 py-1 rounded-full">
                    {project.sector}
                  </span>
                </div>

                <h1 className="text-2xl md:text-4xl font-semibold text-primary-black mb-4">
                  {project.title}
                </h1>
              </div>

              {project.logo && (
                <div className="flex h-24 items-center justify-start md:h-32 md:justify-end">
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="h-full w-auto max-w-[320px] object-contain"
                  />
                </div>
              )}
            </div>
          </header>

          {/* Content */}
          <div className="mb-12 border-b border-gray-200 pb-8">
            <div className="w-full space-y-5 text-gray-text leading-relaxed text-base md:text-lg [&>p]:max-w-none">
              {narrative.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <ProjectGallerySlider
            images={sliderImages}
            title={project.title}
          />

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="clear-both mt-16 pt-12 border-t border-gray-light">
              <h2 className="text-xl font-semibold text-primary-black mb-8">
                {f(locale, 'portfolioDetailPage', 'relatedProjects')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    href={`/portfolio/${relatedProject.slug}`}
                    className="group rounded-2xl border border-gray-200 bg-white p-5 hover:border-accent-blue hover:shadow-md transition-all flex flex-col"
                  >
                    <div className="h-32 flex items-center justify-center p-2 mb-4">
                      <img
                        src={relatedProject.logo || relatedProject.image}
                        alt={relatedProject.title}
                        width="320"
                        height="128"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-primary-black group-hover:text-accent-blue transition-colors leading-snug min-h-[3.4rem]">
                      {relatedProject.title}
                    </h3>
                    <span className="card-cta-mini mt-auto">
                      {f(locale, 'portfolioDetailPage', 'details', 'Detalii')}
                      <svg className="card-cta-mini-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-primary-black mb-6">
              {f(locale, 'portfolioDetailPage', 'ctaTitle')}
            </h3>
            <p className="text-gray-text text-xl mb-10 max-w-3xl mx-auto">
              {f(locale, 'portfolioDetailPage', 'ctaSubtitle')}
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <Button as={Link} href="/contact" variant="solid" size="lg" className="bg-secondary-blue hover:bg-accent-blue text-white">
                {f(locale, 'portfolioDetailPage', 'ctaPrimary')}
              </Button>
              <Button as={Link} href="/proiecte-de-referinta" variant="outline" size="lg" className="border-2 border-primary-black text-primary-black hover:bg-primary-black hover:text-white">
                {f(locale, 'portfolioDetailPage', 'ctaSecondary')}
              </Button>
            </div>
          </div>
        </article>
      </Container>
    </div>
  );
}
