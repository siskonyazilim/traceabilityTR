export const contentEn = {
  heroSlides: [
    {
      id: 1,
      title: 'End-to-End Traceability Solutions for Smart Factories',
      subtitle: 'Our implementation approach balances risk management with opportunity discovery, building resilient operations that perform across changing market cycles.',
    },
    {
      id: 2,
      title: 'Real-Time Control, Zero Defects',
      subtitle: 'Our adaptive methodology turns production challenges into measurable gains through data-driven quality and operational visibility.',
    },
    {
      id: 3,
      title: 'POKA YOKE',
      subtitle: 'We work closely with teams to understand operational objectives and design tailored solutions while maintaining a strict execution quality bar.',
    },
  ],
  faq: {
    eyebrow: 'FAQ',
    title: 'Our Perspective on Traceability',
    items: [
      {
        id: 1,
        question: 'What is industrial Track & Trace?',
        answer: 'Track & Trace is a critical system that follows each unit across its full lifecycle, from item level to pallet level. Each product receives a unique identifier recorded at production, packaging, storage and distribution. This provides instant access to source materials, quality parameters, test results, line information, operator data and timestamps for each unit.',
      },
      {
        id: 2,
        question: 'What is aggregation and why is it critical?',
        answer: 'Aggregation creates a digital parent-child hierarchy between product IDs and larger packaging IDs. Typical hierarchy: Item -> Carton -> Case -> Pallet. By scanning only the pallet code, you can retrieve all contained units. Incorrect aggregation creates mismatch risks and must be prevented in real time.',
      },
      {
        id: 3,
        question: 'What is the difference between serialization and batch tracking?',
        answer: 'Serialization assigns a fully unique ID to each individual product. Batch tracking groups products by a shared lot reference. In modern operations, both can be used together: serialization for precision recall and anti-counterfeit controls, batch tracking for process and quality analytics at lot level.',
      },
      {
        id: 4,
        question: 'How do camera-based verification systems work?',
        answer: 'After marking (laser or inkjet), industrial cameras verify readability, contrast, dimensions and encoded data in real time. If a code is unreadable, the product is flagged and rejected automatically. This ensures only valid codes move forward in the supply chain.',
      },
      {
        id: 5,
        question: 'Which coding technologies are used in traceability?',
        answer: 'Typical technologies include laser coding, inkjet coding and 2D Data Matrix marking. Selection depends on line speed, material type, durability requirements and downstream readability targets.',
      },
      {
        id: 6,
        question: 'How is ERP/MES integration implemented?',
        answer: 'A standard architecture links UID generation, printers, vision verification and aggregation services with MES/ERP through industrial protocols and APIs. This enables two-way synchronization of production orders, inventory, quality and shipment data.',
      },
      {
        id: 7,
        question: 'How is compliance with regulations and GS1 standards ensured?',
        answer: 'Compliance is achieved through standards-aligned identifiers (for example SGTIN/SSCC), secure code generation, audit-ready data retention and automated reporting workflows for regulated industries.',
      },
      {
        id: 8,
        question: 'How long does full implementation take?',
        answer: 'Typical projects take 4-8 months depending on production complexity, number of lines and integration depth. Large multi-line or high-compliance programs may extend to 10-14 months.',
      },
    ],
  },
  technologyCapabilities: [
    {
      title: 'POKA YOKE',
      description: 'Traceability acts as a permanent safeguard against human, machine and design errors in production through practical and cost-efficient controls.',
    },
    {
      title: 'RFID and Barcodes',
      description: 'RFID and barcode technologies enable automatic identification and reliable traceability in industrial and process automation environments.',
    },
    {
      title: 'Image Processing',
      description: 'Vision-based inspection detects manufacturing defects with speed and consistency beyond manual inspection capability.',
    },
  ],
  performanceMetrics: {
    labels: ['Satisfied clients', 'Countries', 'Global projects', 'Team members'],
  },
  solutions: {
    1: {
      title: 'Single Product Tracking',
      description: 'Assigns a unique ID to each product and follows it through every process step. Marking technology is selected by material and operating conditions, with options such as inkjet, thermal transfer and laser.',
    },
    2: {
      title: 'Lot / Batch Tracking',
      description: 'Ideal when item-level tracking is difficult. Lots are built from production date and batch number and tracked through packaging, storage and distribution.',
    },
    3: {
      title: 'Pick to Light',
      description: 'Provides visual guidance for manual assembly and production steps. Correct or incorrect actions are signaled through lights and optional audio warnings.',
    },
    4: {
      title: 'RTLS (Real Time Location Systems)',
      description: 'RTLS identifies and tracks the real-time location of people and assets. Tags communicate with fixed anchors to determine accurate positions.',
    },
    5: {
      title: 'Warehouse Management Systems',
      description: 'WMS solutions control inbound and outbound warehouse flows with real-time operational visibility and inventory status.',
    },
    6: {
      title: 'Integration',
      description: 'We provide the integration layer required for reliable data exchange between independent software systems and production platforms.',
    },
  },
  products: {
    1: {
      title: 'Hybrid Track and Trace',
      description: 'Delivers end-to-end traceability across internal systems and supply-chain partners, including advanced requirements for automotive standards.',
    },
    2: {
      title: 'A+++ Track and Trace',
      description: 'Designed for white goods manufacturing with modules for product tracking, critical component tracking and route tracking on assembly lines.',
    },
    3: {
      title: 'Organic Track and Trace',
      description: 'Food traceability solution that identifies source inputs and process states across production and distribution while supporting compliance requirements.',
    },
    4: {
      title: 'Capsule Track and Trace',
      description: 'Enables pharmaceutical traceability from raw material intake to warehouse delivery using RFID, 1D barcodes and Data Matrix technologies.',
    },
  },
  solutionsDetail: {
    'rfid-trasabilitate': {
      title: 'RFID for Industrial Traceability',
      h1: 'RFID Solutions for Traceability and Real-Time Control',
      description: 'Comprehensive RFID platform for product traceability, inventory governance, and automated production workflows.',
      metaDescription: 'Industrial RFID traceability implementation with real-time tracking and up to 95% error reduction for manufacturing and warehousing operations.',
      keywords: 'industrial RFID traceability, RFID manufacturing, RFID warehouse, automatic identification, RFID tracking',
      benefits: [
        'Contactless automatic identification',
        'Real-time product and component tracking',
        'Up to 95% identification error reduction',
        'MES and ERP integration readiness',
        'High-throughput parallel reads (200+ tags/second)',
        'Durability in harsh industrial environments',
      ],
      useCases: [
        {
          title: 'Automotive - Component Traceability',
          description: 'Track components from goods receipt to final assembly with automatic sequence validation.',
        },
        {
          title: 'Warehouse - Inventory Management',
          description: 'Automated counting, pallet tracking, and material-flow optimization with major cycle-count time reduction.',
        },
        {
          title: 'Production - Quality Control',
          description: 'Automated process validation to prevent assembly mistakes and preserve complete product history.',
        },
      ],
      technologies: ['UHF RFID', 'NFC', 'Fixed and mobile readers', 'Industrial antennas', 'Specialized tags'],
    },
    'rtls-localizare': {
      title: 'RTLS - Real-Time Location',
      h1: 'RTLS System for Precise In-Plant Location Intelligence',
      description: 'Real-Time Location System technology for tracking assets, people, and materials across industrial facilities.',
      metaDescription: 'RTLS deployment for live asset location, production flow optimization, and search-time reduction with sub-meter precision.',
      keywords: 'RTLS, real-time location, asset tracking, UWB, indoor positioning, warehouse tracking',
      benefits: [
        'High-precision location tracking',
        'Live visibility on digital plant maps',
        'Material-flow optimization support',
        'Significant reduction in asset search time',
        'Automated restricted-zone alerts',
        'Historical movement analytics',
      ],
      useCases: [
        {
          title: 'Production - Mobile Asset Tracking',
          description: 'Locate tools, equipment, and transport carts in real time and eliminate wasted search effort.',
        },
        {
          title: 'Warehouse - Flow Optimization',
          description: 'Track pallets and containers, analyze optimal routes, and reduce congestion.',
        },
        {
          title: 'Logistics - Container Tracking',
          description: 'Monitor entry/exit events, dwell time, and delayed-movement alerts.',
        },
      ],
      technologies: ['UWB', 'BLE', 'WiFi RTT', 'Anchors and tags', 'RTLS software'],
    },
    'wms-depozit': {
      title: 'WMS - Warehouse Management System',
      h1: 'WMS for Intelligent Warehouse Operations',
      description: 'Full-featured WMS software for inventory control, warehouse execution, and end-to-end traceability.',
      metaDescription: 'Warehouse Management System for stock control, picking optimization, lot traceability, and ERP integration.',
      keywords: 'WMS, warehouse management system, inventory management, picking optimization, lot traceability',
      benefits: [
        'Complete inbound and outbound control',
        'Optimized warehouse space utilization',
        'Intelligent picking with route optimization',
        'Full lot/serial traceability',
        'RFID and barcode scanner integration',
        'Real-time operational reporting',
      ],
      useCases: [
        {
          title: 'Central Warehouse - Inventory Control',
          description: 'Full stock governance with automated FIFO/FEFO and low-level alerts.',
        },
        {
          title: 'Cross-Docking - Flow Optimization',
          description: 'Reduce storage dependency and speed direct supplier-to-customer movement.',
        },
        {
          title: 'E-commerce - Fast Picking',
          description: 'Batch and wave picking with shipping-oriented execution support.',
        },
      ],
      technologies: ['Cloud/On-premise', 'Mobile WMS', 'Voice picking', 'Integration APIs', 'BI dashboards'],
    },
    'poka-yoke': {
      title: 'POKA YOKE - Error Prevention System',
      h1: 'POKA YOKE - Preventing Production Errors',
      description: 'Automated human/process error prevention system based on sensors and real-time validation logic.',
      metaDescription: 'POKA YOKE system for production error prevention, sequence validation, and defect avoidance in manufacturing lines.',
      keywords: 'poka yoke, error prevention, zero defects, quality control, manufacturing quality',
      benefits: [
        'Prevents errors before they propagate',
        'Automatic operation-sequence validation',
        'Instant deviation alerts',
        'Major rework reduction potential',
        'Automated compliance documentation',
        'Visual guidance for operators',
      ],
      useCases: [
        {
          title: 'Assembly - Component Validation',
          description: 'Verify right component, right step, and right parameter at each assembly stage.',
        },
        {
          title: 'Quality - 100% Verification',
          description: 'Automated checks for dimensions, visual defects, and specification conformity.',
        },
        {
          title: 'Packaging - Error Prevention',
          description: 'Validate product identity, quantity, labels, and required documents before dispatch.',
        },
      ],
      technologies: ['Industrial sensors', 'Vision systems', 'PLC integration', 'IoT devices', 'HMI displays'],
    },
    'image-processing': {
      title: 'Image Processing - Vision Quality Control',
      h1: 'Image Processing Systems for Automated Quality Control',
      description: 'Machine-vision technology for defect detection, precision measurement, and full production quality coverage.',
      metaDescription: 'Industrial image processing for automated defect detection and quality control at high throughput and high accuracy.',
      keywords: 'image processing, vision inspection, defect detection, automated quality control, machine vision',
      benefits: [
        '100% production inspection coverage',
        'Detection beyond human visual limits',
        'High-precision measurements',
        'High-throughput inspection capability',
        'Per-unit image documentation',
        'AI-based adaptation for emerging defect types',
      ],
      useCases: [
        {
          title: 'Automotive - Weld Inspection',
          description: 'Automatic weld quality checks for porosity, cracks, and geometric conformity.',
        },
        {
          title: 'Food - Packaging Inspection',
          description: 'Verify seal integrity, fill level, label presence, and lot-code correctness.',
        },
        {
          title: 'Electronics - PCB Inspection',
          description: 'Check component placement, polarity, and solder quality automatically.',
        },
      ],
      technologies: ['Industrial cameras', 'AI/Deep Learning', 'Specialized lighting', 'Vision software', 'Edge computing'],
    },
    'integrare-sisteme': {
      title: 'MES and ERP Systems Integration',
      h1: 'Complete Integration of Traceability with MES and ERP',
      description: 'Integration services connecting traceability platforms with MES, ERP, WMS, and enterprise applications.',
      metaDescription: 'Traceability integration for MES, ERP, WMS, and SCADA with reliable real-time synchronization and API-based architecture.',
      keywords: 'MES integration, ERP integration, API integration, SAP integration, system middleware',
      benefits: [
        'Automated data flow across systems',
        'Eliminates manual re-entry',
        'Real-time synchronization',
        'End-to-end traceability continuity',
        'Unified reporting foundation',
        'Legacy-system interoperability support',
      ],
      useCases: [
        {
          title: 'MES-ERP Integration',
          description: 'Synchronize production orders, material consumption, completions, and quality data.',
        },
        {
          title: 'Multi-System Dashboard',
          description: 'Create a unified dashboard across production, quality, maintenance, and logistics sources.',
        },
        {
          title: 'Supply Chain Visibility',
          description: 'Enable end-to-end flow visibility from supplier events to customer delivery confirmation.',
        },
      ],
      technologies: ['REST APIs', 'MQTT', 'OPC UA', 'SAP connectors', 'Database synchronization', 'Message queues'],
    },
  },
  references: {
    'maxion-inci-celik': {
      title: 'Maxion Inci Steel - Pallet Traceability',
      sector: 'Automotive',
      description: 'Automatic recipe-data completion prevented incorrect entries. Advance visibility into line destinations enabled pre-positioning of packing materials and reduced line stoppages.',
      content: '<h2>Pallet Traceability</h2><p>The project automated recipe data handling and provided upstream visibility of product flow to packing lines, helping teams prepare materials earlier and reduce unplanned downtime.</p><h3>Results</h3><ul><li>Efficiency +35%</li><li>Defects -60%</li><li>Productivity +40%</li></ul>',
    },
    'abalioglu-yag': {
      title: 'Abalioglu Oils - Traceability',
      sector: 'Food',
      description: 'Integrated pallet traceability and automatic carton labeling across production and logistics operations with ERP synchronization.',
      content: '<h2>Integrated traceability for Abalioglu Oils</h2><p>We implemented pallet-level tracking with unique IDs, automatic transfer of production orders to label printers and real-time process visibility.</p><h3>Results</h3><ul><li>100% pallet traceability</li><li>Fast and error-free labeling</li><li>Higher operational efficiency</li><li>Real-time stock and shipment visibility in ERP</li></ul>',
    },
    'nuhun-ankara': {
      title: "Nuh'un Ankara - Traceability",
      sector: 'Food',
      description: 'Automated recipe information and early line visibility reduced data entry errors and prevented packaging-line stoppages.',
      content: '<h2>End-to-end traceability</h2><p>The implementation reduced manual entry errors and improved packaging-line continuity through early operational insight.</p><h3>Results</h3><ul><li>Efficiency +40%</li><li>Defects -70%</li><li>Productivity +35%</li></ul>',
    },
    'delphi-technologies': {
      title: 'Delphi Technologies - Warehouse Management',
      sector: 'Automotive',
      description: 'Automated recipe information flow and predictive line awareness improved material readiness and reduced line interruptions.',
      content: '<h2>Smart warehouse operations</h2><p>The project combined automated data flow with predictive insight to stabilize packaging-line performance and improve process continuity.</p><h3>Results</h3><ul><li>Efficiency +50%</li><li>Defects -80%</li><li>Productivity +55%</li></ul>',
    },
    'pmi-rfid': {
      title: 'PMI - RFID for Stamping',
      sector: 'Tobacco',
      description: 'RFID-enabled process visibility improved material preparation and reduced packaging-line disruptions.',
      content: '<h2>RFID for stamping and authentication</h2><p>The project connected recipe data with line-level flow visibility to reduce operational errors and improve continuity.</p><h3>Results</h3><ul><li>Efficiency +38%</li><li>Errors -65%</li><li>Productivity +42%</li></ul>',
    },
    'delphi-monitorizare-individuala-rampa-injectie': {
      title: 'Delphi Technologies - Individual Product Tracking on Fuel-Rail Assembly',
      sector: 'Automotive',
      description: 'Automated product-specific recipe data and predictive line input visibility improved line stability and reduced stoppages.',
      content: '<h2>Individual tracking on assembly lines</h2><p>The solution ensured reliable product-level visibility and reduced process variability across assembly and packaging handoffs.</p><h3>Results</h3><ul><li>Efficiency +44%</li><li>Defects -68%</li><li>Productivity +41%</li></ul>',
    },
    'mey-diageo-control-camera-etichete': {
      title: 'Mey Diageo - Camera-Based Label Control',
      sector: 'Food',
      description: 'Vision-based label control reduced labeling errors and improved continuity on packaging lines.',
      content: '<h2>Camera-based label control</h2><p>The project improved label quality control with automated checks and proactive line support.</p><h3>Results</h3><ul><li>Efficiency +39%</li><li>Defects -63%</li><li>Productivity +37%</li></ul>',
    },
    'pmi-urmarirea-filtrelor': {
      title: 'PMI - Filter Tracking',
      sector: 'Tobacco',
      description: 'Filter-level tracking with process monitoring improved quality consistency and reduced production errors.',
      content: '<h2>Filter tracking</h2><p>The implementation added filter-level visibility and improved material/process coordination across the line.</p><h3>Results</h3><ul><li>Efficiency +36%</li><li>Defects -59%</li><li>Productivity +34%</li></ul>',
    },
  },
  partners: {
    sick: {
      description: 'Global leader in industrial sensing and automation technologies.',
      fullDescription: 'SICK is one of the world\'s leading solution providers for sensor-based industrial applications with a broad global presence.\n\nIts operating model is built on independence, innovation and long-term leadership.\n\nSICK combines sustainable execution with strong customer trust across manufacturing and logistics ecosystems.',
    },
    'universal-robots': {
      description: 'Global leader in collaborative robots (cobots) for production.',
      fullDescription: 'Since 2005, Universal Robots has focused on making automation practical and accessible.\n\nIts collaborative robots are easy to deploy, safe to operate and highly flexible across production scenarios.\n\nThe portfolio enables companies of all sizes to automate processes and improve productivity.',
    },
    'markem-imaje': {
      description: 'Advanced coding, marking and industrial serialization solutions.',
      fullDescription: 'With decades of market experience, Markem-Imaje partner operations in the region provide reliable coding and marking solutions.\n\nTheir expertise supports full traceability and compliance for regulated and high-volume industrial environments.',
    },
    interroll: {
      description: 'Global expert in conveyor systems and logistics equipment.',
      fullDescription: 'Interroll is a leading global provider of material-handling solutions.\n\nIts product platforms cover rollers, drives, conveyors, sorters and pallet/carton flow systems.\n\nA worldwide production and service network enables reliable deployment across industries.',
    },
    beckhoff: {
      description: 'PC-based automation systems for industrial control.',
      fullDescription: 'Beckhoff delivers open automation systems built on PC-based control technology.\n\nIts portfolio includes industrial PCs, I/O and fieldbus components, drives and automation software.\n\nThis architecture supports scalable and modern industrial automation projects.',
    },
    sewio: {
      description: 'RTLS and IoT specialist for real-time location and tracking.',
      fullDescription: 'Sewio provides industrial RTLS technology for high-precision real-time location tracking.\n\nIts systems are used in smart factories, warehouses and logistics hubs to optimize flows and operational efficiency.',
    },
  },
  blogPosts: {
    'chestny-znak-russia-traceability-system': {
      title: 'Chestny ZNAK Procedure: Russia\'s Digital Traceability System',
      excerpt: 'How Russia\'s mandatory digital platform improves control, authenticity and trust across regulated supply chains.',
      content: '<h2>Introduction</h2><p>Chestny ZNAK is the national traceability platform in Russia where each product is marked with a unique code validated by a central system.</p><h2>Why it matters</h2><p>It reduces counterfeiting, improves end-to-end visibility and enables faster verification for authorities, companies and consumers.</p>',
      category: 'News',
    },
    'the-importance-of-food-traceability-for-end-consumers': {
      title: 'The Importance of Food Traceability for End Consumers',
      excerpt: 'Food traceability enables safer and better-informed choices through transparency, quality control and rapid recall capabilities.',
      content: '<h2>Overview</h2><p>Food traceability provides visibility from sourcing and production to distribution, enabling trusted origin and safety information.</p><h2>Consumer impact</h2><p>With stronger traceability, brands respond faster during incidents and build long-term trust through verifiable data.</p>',
      category: 'News',
    },
    'product-traceability-why-is-it-essential-for-quality-trust-and-sustainability': {
      title: 'Product Traceability: Why It Is Essential for Quality, Trust and Sustainability',
      excerpt: 'Product traceability strengthens operations and customer confidence through control, compliance and verifiable data.',
      content: '<h2>General context</h2><p>Traceability is a key enabler for organizations seeking consistent quality and sustainable operations.</p><h2>Key benefits</h2><ul><li>Extended quality control</li><li>Reduced compliance risks</li><li>Higher brand trust</li></ul>',
      category: 'News',
    },
    'food-traceability-and-standards-the-importance-of-product-carton-and-pallet-traceability': {
      title: 'Food Traceability and Standards: Product, Carton and Pallet Traceability',
      excerpt: 'A practical view on food traceability standards across product, carton and pallet levels for full logistics visibility.',
      content: '<h2>Standards in practice</h2><p>Multi-level traceability improves performance in storage, transport and product recall operations.</p><h2>Tracking levels</h2><ul><li>Product level</li><li>Carton level</li><li>Pallet level</li></ul>',
      category: 'News',
    },
    'barcode-systems-used-in-traceability': {
      title: 'Barcode Systems Used in Traceability',
      excerpt: 'Barcode standards such as 1D, 2D and Data Matrix remain core technologies for scalable and reliable traceability.',
      content: '<h2>Overview</h2><p>Barcode systems are widely used to increase manufacturing and logistics efficiency while enabling product-level traceability.</p><h2>Common standards</h2><p>Frequently used standards include EAN-13, UPC, Code 128, QR Code and Data Matrix depending on data density and industry requirements.</p>',
      category: 'News',
    },
    'how-to-implement-individual-product-traceability': {
      title: 'How to Implement Individual Product Traceability',
      excerpt: 'Essential implementation steps from unique identification to real-time production monitoring.',
      content: '<h2>Where to start</h2><p>Individual traceability starts with assigning a unique code to each product and defining where and how marking should be applied.</p><h2>Execution checkpoints</h2><p>Validate code durability across process steps, select the right marking technology and ensure scan points before each critical operation.</p>',
      category: 'News',
    },
    'what-are-the-benefits-of-traceability-systems': {
      title: 'What Are the Benefits of Traceability Systems?',
      excerpt: 'Traceability systems improve efficiency, quality, compliance and transparency across operations.',
      content: '<h2>Benefits</h2><p>Traceability reduces errors, supports audits and accelerates data-driven decision making.</p>',
      category: 'News',
    },
    'what-are-traceability-data-definition-of-traceability': {
      title: 'What Are Traceability Data? Definition of Traceability',
      excerpt: 'Traceability data captures production, logistics and quality events that make product journeys auditable and measurable.',
      content: '<h2>Definition</h2><p>Traceability data records all events affecting a product from materials and process steps to test outcomes and shipment handoffs.</p><h2>Operational value</h2><p>Reliable digital data enables root-cause analysis, compliance protection and continuous quality improvement.</p>',
      category: 'News',
    },
    'bomi-group-camera-based-multi-code-reading-system': {
      title: 'BOMI Group Camera-Based Multi-Code Reading System',
      excerpt: 'A camera-based multi-code reading implementation that improved speed and reliability in logistics identification flows.',
      content: '<h2>Project summary</h2><p>We delivered a camera-based multi-code reading line to automate a previously manual process and reduce human error in warehouse operations.</p>',
      category: 'News',
    },
    'tusiad-sd2-pioneering-digital-transformation-in-industry': {
      title: 'TUSIAD SD2: Pioneering Digital Transformation in Industry',
      excerpt: 'Highlights from TUSIAD SD2 and the role of traceability-driven data platforms in accelerating industrial transformation.',
      content: '<h2>Program impact</h2><p>TUSIAD SD2 connected technology users with solution providers to accelerate industrial digital transformation through practical collaboration.</p>',
      category: 'News',
    },
    'siskon-at-the-future-industrial-technology-fair': {
      title: 'Siskon at the Future Industrial Technology Fair',
      excerpt: 'Siskon presented traceability and smart-factory capabilities focused on operational visibility and quality assurance.',
      content: '<h2>Fair participation</h2><p>At FIT, Siskon presented end-to-end traceability scenarios for high-volume industrial lines.</p>',
      category: 'News',
    },
    'traceability-presentation-at-industry-4-0-event': {
      title: 'Traceability Presentation at an Industry 4.0 Event',
      excerpt: 'A session focused on traceability architecture and the role of industrial data in production optimization.',
      content: '<p>We presented practical steps toward Industry 4.0 with a dedicated focus on traceability architecture and implementation strategy.</p>',
      category: 'News',
    },
    'iot-dashboard-and-traceability-solutions-at-logistics-seminar': {
      title: 'IoT Dashboard and Traceability Solutions at Logistics Seminar',
      excerpt: 'The seminar demonstrated how IoT dashboards and unified traceability improve logistics decisions.',
      content: '<p>We showcased our IoT dashboard and digital traceability solutions at the 7th Logistics Automation Technologies Seminar organized by LODER and SICK.</p>',
      category: 'News',
    },
  },
};
