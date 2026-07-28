export const contentEn = {
  heroSlides: [
    {
      id: 1,
      title: 'End-to-End Traceability Solutions for Smart Factories',
      subtitle: 'Digitally monitor all production processes from raw material intake to shipment. Access product, process, and quality data instantly and historically through a single platform.',
    },
    {
      id: 2,
      title: 'Real-Time Control, Zero Defects',
      subtitle: 'Detect errors the moment they occur with barcode, RFID, and camera-based verification. Prevent wrong product, wrong assembly, and wrong shipment risks during production.',
    },
    {
      id: 3,
      title: 'POKA YOKE',
      subtitle: 'Prevent operator-driven errors before they occur with intelligent validation mechanisms. Ensure the right part is used at the right station in the right sequence.',
    },
  ],
  faq: {
    
    title: 'Our Perspective on Traceability',
    items: [
      {
        id: 1,
        question: 'What is industrial Track & Trace?',
        answer: 'Track & Trace is a critical system that enables end-to-end monitoring of individual products throughout their lifecycle, from item level to pallet level. Each product receives a unique identifier (UID) that is digitally recorded at every stage of production, packaging, storage, and distribution. This allows factories to instantly retrieve complete information about source materials, quality parameters, test results, production line, responsible operator, and timestamp for every individual unit. Modern traceability systems collect and analyze data in real time, delivering full visibility and compliance with strict industrial regulations.',
      },
      {
        id: 2,
        question: 'What is aggregation and why is it critical?',
        answer: 'Aggregation is one of the most critical elements of modern traceability. It creates a digital hierarchy where unique identifiers (UIDs) of individual products are linked to the identifier of the larger package containing them, forming a parent-child relationship. Standard hierarchy: Pack (from the manufacturing machine) -> Carton (from the packing machine) -> Case (case packer) -> Pallet (palletizer). With this digital tree, scanning only the pallet logistics barcode provides instant visibility of all contained individual packs. Any association error (aggregation mismatch) should trigger immediate line stop and product rejection. Without accurate aggregation, a traceability system cannot operate reliably.',
      },
      {
        id: 3,
        question: 'What is the difference between serialization and batch tracking?',
        answer: 'Serialization means assigning a fully unique identifier to each individual product, enabling independent unit-level traceability. A UID (Unique Identifier) typically includes manufacturer ID, GTIN/SKU, unique serial number, aggregation reference, and checksum or cryptographic signature for security. GS1 SGTIN (for serialized products) and GS1 SSCC (for logistics units) are widely used standards. Batch tracking groups products made in the same period under a shared lot identifier based on production date and lot number. Both approaches can run together: serialization provides maximum granularity for targeted recalls and anti-counterfeit control, while lot tracking supports efficient management of consumed materials, equipment, and quality parameters at batch level.',
      },
      {
        id: 4,
        question: 'How do camera-based verification systems work?',
        answer: 'Camera-based verification systems are essential for validating the quality of applied product codes. After a code is printed via laser or inkjet, high-resolution industrial cameras on the production line scan each code in real time, checking readability, contrast, dimensions, and data correctness. If the camera cannot read the code (No Read), the product is immediately flagged for rejection and automatically removed from the line. This guarantees that only products with fully readable codes continue to distribution, preventing downstream supply-chain failures. Modern camera systems can process over 2,000 products per minute and detect defects invisible to the human eye, including subtle contrast variations and partial Data Matrix damage.',
      },
      {
        id: 5,
        question: 'Which coding technologies are used in traceability?',
        answer: 'There are three main coding technologies in Track & Trace systems. Laser coding is preferred for high-speed lines (over 2,000 products/minute), offering permanent marking with no consumable costs, though contrast can be challenging on some surfaces. Inkjet coding is mainly used at logistics levels (cases and pallets) for larger codes with excellent contrast, but it requires maintenance to avoid nozzle clogging and is sensitive to environmental conditions. Direct 2D Data Matrix marking is the industry standard for serialization because it stores large data volumes in small space and remains readable even when partially damaged. Codes are validated immediately after application by verification cameras to ensure lifetime readability. Final technology choice depends on line speed, packaging material, and durability requirements.',
      },
      {
        id: 6,
        question: 'How is ERP/MES integration implemented?',
        answer: 'Traceability architecture requires tight integration with corporate IT infrastructure. The standard flow starts with a UID Generator creating unique identifiers and sending them to printers for physical marking. Industrial cameras then verify coding quality. A central Aggregation Server manages all hierarchical links between products and packaging. Data is transmitted through middleware layers using industrial protocols such as OPC-UA (for equipment communication) and TMC to MES/MII systems (Manufacturing Execution Systems) for real-time production monitoring. Finally, data is synchronized with ERP platforms (SAP, Oracle, Microsoft Dynamics) through REST APIs, SOAP web services, or custom connectors, enabling bidirectional exchange of production order, inventory, quality, and shipping data. This end-to-end integration eliminates manual data entry and provides organization-wide visibility.',
      },
      {
        id: 7,
        question: 'How is compliance with regulations and GS1 standards ensured?',
        answer: 'Compliance with international regulations is fundamental in Track & Trace systems. In tobacco, highly strict regulations such as TTT (Track and Trace for Tobacco) and EU TPD (Tobacco Products Directive) require full traceability from factory to point of sale. GS1 standards provide the technical backbone: SGTIN (Serialized Global Trade Item Number) for individual products and SSCC (Serial Shipping Container Code) for logistics units. Our systems automatically generate GS1-compliant identifiers, including checksums and cryptographic signatures to prevent counterfeiting. For ISO 9001, we fully document processes for audits. For IATF 16949 (automotive), we ensure complete traceability of critical components. For ISO 22000/HACCP (food safety), we monitor critical parameters in real time. All data is archived according to legal retention requirements, and audit reports are generated automatically, reducing preparation time by more than 70%.',
      },
      {
        id: 8,
        question: 'How long does full implementation take?',
        answer: 'Full Track & Trace implementation duration depends on production-line complexity and required integration depth. A typical project takes 4-8 months and includes detailed process analysis and flow mapping, serialization/aggregation architecture design, hardware installation (laser/inkjet printers, verification cameras, reject systems), UID Generator and Aggregation server setup, OPC-UA integrations with equipment, MES/ERP connectivity configuration, extensive real-environment testing of all aggregation scenarios, complete training for production and IT teams, and post-go-live optimization support. Large projects with multiple lines or complex compliance requirements may require 10-14 months. We use a modular rollout approach that enables progressive go-live so selected lines can become operational earlier while minimizing impact on ongoing production.',
      },
    ],
  },
  technologyCapabilities: [
    {
      title: 'POKA YOKE',
      description: 'Poka-Yoke solutions prevent or instantly detect human, machine, and process-related errors in production and assembly processes through intelligent control and verification technologies.',
    },
    {
      title: 'RFID and Barcodes',
      description: 'RFID and barcode technologies enable the automatic identification of products and materials, continuous tracking throughout the process, and reliable recording of data.',
    },
    {
      title: 'Image Processing',
      description: 'Vision-based inspection systems automatically detect production defects with high speed and consistency, enhancing quality control processes.',
    },
  ],
  performanceMetrics: {
    labels: ['Projects', 'Countries', 'Factories', 'Team members'],
  },
  solutions: {
    1: {
      title: "Single Product Tracking",
      description: "Single product tracking enables unique identification of each product in production using serial numbers, barcodes, QR codes, Data Matrix, or RFID.",
      detail: "Single product tracking enables unique identification of each product in production using serial numbers, barcodes, QR codes, Data Matrix, or RFID. The entire lifecycle of the product is digitally recorded from raw material entry through production, assembly, quality control, packaging, and shipping.\n\nMachine data, process parameters, operator records, components used, and quality results are linked with the product's digital history. The system operates in integration with ERP, MES, PLC, SCADA, camera, and marking systems, providing end-to-end traceability, product genealogy, and fast root-cause analysis.",
      detailBulletsHeading: "Advantages:",
      detailBullets: [
        "Each product is uniquely identified with a serial number and coding infrastructure, preventing product mix-ups.",
        "Incorrect or unreadable codes are automatically detected on the production line using camera and barcode validation.",
        "Forward and backward traceability is ensured by matching product, component, and process data.",
        "Rapid access to failure causes is achieved since quality, scrap, and rework records are maintained.",
        "Manual data entry is reduced and data integrity is preserved thanks to ERP and MES integration."
      ]
    },
    2: {
      title: "Lot / Batch Tracking",
      description: "Lot and batch tracking enables the monitoring of groups of products produced under the same raw material, recipe, or process conditions under a common lot or batch number.",
      detail: "Lot and batch tracking enables the monitoring of groups of products produced under the same raw material, recipe, or process conditions under a common lot or batch number. All movements from raw material acceptance to production, quality control, packaging, warehousing, and shipping are recorded.\n\nRaw material lots, recipe information, production parameters, laboratory results, and shipment records are associated with the relevant batch. This way, in case of quality issues or product recalls, only the affected batches can be quickly identified.",
      detailBulletsHeading: "Advantages:",
      detailBullets: [
        "The raw material lot is matched with the finished product batch, making it easy to identify which products a material was used in.",
        "Recipe and batch data are recorded, validating process compliance and production standards.",
        "Expiration dates and shelf lives are tracked, reducing stock losses.",
        "Quarantine, blocking, and quality approval processes are digitized, preventing the shipment of non-compliant products.",
        "Product recall processes are accelerated through forward and backward traceability."
      ]
    },
    3: {
      title: "Pick to Light",
      description: "Pick to Light is a digital operator support system that guides operators to the correct material using light indicators in assembly, kitting, order picking, and line feeding operations.",
      detail: "Pick to Light is a digital operator support system that guides operators to the correct material using light indicators in assembly, kitting, order picking, and line feeding operations. The system automatically determines the part to be used and the operation sequence according to the production order or product recipe.\n\nOperating in integration with barcode, RFID, sensor, camera, torque devices, PLC, and HMI systems, this solution establishes a poka-yoke infrastructure that prevents wrong part usage, missing assembly, and sequence errors.",
      detailBulletsHeading: "Advantages:",
      detailBullets: [
        "With shelf light routing, the operator is guided to the correct part, reducing selection errors.",
        "The use of incorrect components is automatically prevented via barcode or RFID validation.",
        "The operation sequence is managed digitally, preventing missing or skipped assembly steps.",
        "Process and cycle times are recorded, enabling bottleneck and performance analyses.",
        "A dynamic workflow based on the product model is established via ERP and MES integration."
      ]
    },
    4: {
      title: "RTLS – Real-Time Location Systems",
      description: "RTLS solutions enable real-time tracking of products, pallets, cases, transport carts, forklifts, and equipment within the facility.",
      detail: "RTLS solutions enable real-time tracking of products, pallets, cases, transport carts, forklifts, and equipment within the facility. Radio frequency-based technologies are mostly used in RTLS systems. Depending on requirements, optical and acoustic methods like infrared or ultrasound can also be utilized. The current position and historical movements of assets are monitored digitally.\n\nBy analyzing material flows, waiting times, transport routes, and area zone entries/exits, the system makes internal logistics processes highly visible. Thanks to integration with ERP, MES, WMS, and maintenance systems, location data can be used for automated operational process management.",
      detailBulletsHeading: "Advantages:",
      detailBullets: [
        "Material and equipment search times are minimized through real-time asset tracking.",
        "Incorrect locations and unauthorized movements are detected by tracking area zone entries and exits.",
        "Internal logistics bottlenecks become visible through wait time and route analysis.",
        "Movements of forklifts and transport equipment are tracked, increasing utilization efficiency.",
        "Automated workflows can be initiated based on asset location via MES and WMS integration."
      ]
    },
    5: {
      title: "Warehouse Management Systems",
      description: "Warehouse Management Systems digitally manage all warehouse operations from goods receipt to shipment for raw materials, semi-finished goods, finished goods, and auxiliary materials.",
      detail: "Warehouse Management Systems digitally manage all warehouse operations from goods receipt to shipment for raw materials, semi-finished goods, finished goods, and auxiliary materials. Stock movements are recorded in real time using barcode, QR code, Data Matrix, RFID, and handheld terminals.\n\nThe system unifies location management, lot and serial number tracking, quality control, picking, packaging, and shipping validation on a single platform. Stock accuracy is increased and errors from manual operations are reduced through ERP, MES, and WMS integration.",
      detailBulletsHeading: "Advantages:",
      detailBullets: [
        "Goods receipt is verified with barcode and RFID, preventing incorrect product and quantity entries.",
        "The position of products in the warehouse is monitored instantly through shelf and location management.",
        "Shelf life is managed and stock losses are reduced.",
        "Complete warehouse traceability is achieved through lot, serial number, and expiration date tracking.",
        "Shipping validation prevents incorrect products, missing boxes, and erroneous customer shipments.",
        "Stock, order, and shipping details are automatically transferred between systems via ERP integration."
      ]
    },
    6: {
      title: "Integration",
      description: "Integration solutions enable data transfer between independently running software and systems, allowing all structures to work harmoniously.",
      detail: "Integration solutions enable data transfer between independently running software and systems, allowing all structures to work harmoniously. Unification of data across different systems reduces repetitive data entries, simplifies reporting and comparison, and speeds up access to operational insights.\n\nSiskon integrates existing software used in your enterprise in accordance with your needs and business processes, establishing a regular and reliable data flow. By managing the process end-to-end from analysis and design to development, testing, and deployment, Siskon supports systems to work synchronized, efficient, and sustainable.",
      detailBulletsHeading: "Advantages:",
      detailBullets: [
        "Data transfer is enabled between existing software and systems; manual and repetitive data entries are reduced.",
        "An integration structure matching business processes is designed; harmonious and synchronized system operation is supported.",
        "Data from various sources are unified; reporting, comparison, and decision-making processes are simplified.",
        "Analysis, design, development, testing, and commissioning phases are managed end-to-end, creating tailored and sustainable solutions.",
        "MRP, ERP, CRM, energy management, calibration, maintenance, and quality management systems are integrated; overall data integrity and operational visibility are enhanced."
      ]
    }
  },
  products: {
    1: {
      title: 'Hybrid Track and Trace',
      description: 'Delivers end-to-end traceability across internal systems and supply-chain partners, including advanced requirements for automotive standards.',
      detail: 'Hybrid Track & Trace Automotive Manufacturers - Ensure consistent quality in global operations, maintain your compliance, and improve your agility. Developed by Siskon for the Automotive Main and Component Industry, Hybrid Track & Trace provides end-to-end traceability by recording data coming from both internal systems and supply chain partners, all processes the product goes through, and process data. It provides advanced product traceability requirements in accordance with current regulatory changes required for ISO/TS 16949 standards.',
      detailPreBulletsHeading: 'Hybrid T&T directly affects the two most striking issues of the automotive industry:',
      detailPreBullets: [
        'Achieving global sustainable quality by reducing the number of defective products.',
        'Reducing warranty expenses in case of product recalls based on regulations, while meeting customer requirements.',
      ],
      detailBulletsHeading: 'Thanks to Hybrid T&T, the following are provided:',
      detailBullets: [
        'Collaboration in Operations - Better coordination of corrective actions between the manufacturer and trading partners, with reduced time-consuming and error-prone manual tasks.',
        'Centralized Traceability Reporting - Recording every stage of product development process and packaging hierarchy.',
        'Supply Chain Synchronization - Better communication with business partners involved in analysis and corrective actions.',
        'Managing High-Volume Traceability Data - Integration of data collected from production floors, quality laboratories, suppliers, and logistics providers without affecting operational performance.',
        'Creating Product Identification Schemes - Improving RFID and barcode scanning technologies.',
      ],
    },
    2: {
      title: 'A+++ Track and Trace',
      description: 'Designed for white goods manufacturing with modules for product tracking, critical component tracking and route tracking on assembly lines.',
      detail: 'A+++ Track and Trace ensures end-to-end product traceability with assembly line tracking, critical component tracking, and route tracking. It records data from internal systems and supply chain partners, all the processes the product goes through, and the process data.\n\nThe "A+++ Track and Trace" solution, specially developed for the white goods (home appliances) industry by Siskon, provides end-to-end product traceability with its product tracking on assembly lines, critical component tracking, route tracking, and other modules.\n\nA+++ T&T aims to increase profitability and efficiency with the "do it right the first time" principle by ensuring that potential quality or production-related problems are detected before they become critical.\n\nA+++ T&T helps companies operating in the white goods industry to provide product quality cost-effectively and proactively, while also meeting the requirements of development-regulating structures such as ISO 9001, a quality management standard.',
    },
    3: {
      title: 'Organic Track and Trace',
      description: 'Food traceability solution that identifies source inputs and process states across production and distribution while supporting compliance requirements.',
      detail: 'Organic Track and Trace provides end-to-end visibility from raw material intake to finished-goods dispatch, linking lot, process, and quality data in one flow. In addition to ensuring product traceability, it helps teams accelerate audits, reduce recall scope, and improve day-to-day operational control.',
      detailSections: [
        {
          heading: 'OPERATIONAL EFFICIENCY',
          items: [
            'Advanced Supply Chain Management: It ensures that companies have the inventory accuracy to meet customer demand more efficiently.',
            'Increased Supply Chain Trust: Increasing the performance of product traceability leads to an increase in the performance of supply chain participants.',
            'Process Improvements: Improvements in product tracking frequently reduce error rates, increase product picking accuracy, and streamline document management to more effectively manage and maximize workflow.',
            'Reduction in Spoilage / Waste and Shrinkage: Advanced product traceability provides more accurate inventory management by reducing shrinkage costs and waste.',
          ],
        },
        {
          heading: 'MARKET ACCESS',
          items: [
            'Enhanced Brand Reputation: Product tracking systems support decisions affecting brand reputation. Improving product tracking enhances decision-making capabilities.',
            'Increased Consumer Confidence: Traceability is proof that the product has specific characteristics as requested. While product tracking may be considered a normal cost of doing business, the lack of traceability negatively affects consumer confidence and customer loyalty for many companies.',
            'Expanded Markets / New Customers: The reduction in recall and tracing costs provided by product traceability reduces business risks in order to enter new markets and acquire new customers.',
          ],
        },
        {
          heading: 'RISK REDUCTION',
          items: [
            'Reduction of Insurance / Liability Cost: Some insurance providers require product tracking capabilities before subjecting companies in the food industry to certain insurance policies.',
            'Reduced Recall Costs: In the event of a recall, it reduces the time to access critical data and reduces the scope of the recall.',
            'Returning to Business as Usual: Faster verification that the business is not involved in the recall process allows a rapid return to the current workflow.',
          ],
        },
      ],
    },
    4: {
      title: 'Capsule Track and Trace',
      description: 'Enables pharmaceutical traceability from raw material intake to warehouse delivery using RFID, 1D barcodes and Data Matrix technologies.',
      detail: 'Capsule Track and Trace enables pharmaceutical traceability on a unique number basis from raw material intake to warehouse delivery. Developed by Siskon, it aims to accelerate distribution and strengthen the connection with patients.',
      detailSections: [
        {
          heading: 'Main benefits of Capsule T&T:',
          items: [
            'Integrated reporting capability by tracking all processes, starting from raw material entry to the finished product, on a unique number basis.',
            'Preventing the distribution of expired, banned, or recalled products.',
            'Allowing the collection of medical product usage data and the development of special strategies based on this data.',
            'Providing effective material management.',
            'Better management of supply chain operations.',
          ],
        },
        {
          paragraph: 'Different technologies such as RFID, 1D linear barcode, or Data Matrix (QR Code) are used for traceability in the pharmaceutical industry. In our country (Turkey), drug traceability is provided by 2D QR code technology.',
        },
        {
          heading: 'In Turkey, the following information is included in the QR code:',
          items: [
            'GTIN (Global Trade Item Number): It is a 14-digit barcode number.',
            'SN (Serial Number): It is uniquely determined by manufacturers for each unit of medicine. It is a sequentially increasing number.',
            'XD (Expiration Date): It is the expiration date expressed in 6 digits in year, month, day format.',
            'BN (Batch Number): It is a number indicating the batch number in the production of the medicine.',
          ],
        },
      ],
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
partners: {
    sick: {
      description: 'Provides safe, efficient, and traceable operations in manufacturing and logistics processes through industrial sensors, machine vision, and automatic identification technologies.',
      fullDescription: 'SICK develops and manufactures industrial sensors, safety systems, machine vision products, and automatic identification technologies used in manufacturing and logistics processes. Its portfolio includes distance and position sensors, safety scanners, industrial cameras, barcode readers, and RFID systems.\n\nSICK technologies are used for detecting, measuring, monitoring, and automatically identifying products and materials. These solutions enable quality inspection, code reading, product verification, machine safety, and end-to-end traceability applications across production lines.',
    },
    'universal-robots': {
      description: 'Delivers flexible automation solutions through collaborative robot technologies, increasing productivity while enabling safe human-robot collaboration.',
      fullDescription: 'Universal Robots develops and manufactures collaborative robots, known as cobots, that are designed to work alongside employees in production environments. Robotic arms with different payload capacities and reach ranges can be combined with various tools and software solutions to adapt to a wide range of manufacturing operations.\n\nUniversal Robots cobots are used in repetitive or ergonomically demanding tasks such as machine tending, assembly, welding, material handling, packaging, palletizing, and quality inspection. Thanks to their flexible design, they can be reprogrammed for different products and production scenarios and easily integrated into existing production environments.',
    },
    'markem-imaje': {
      description: 'Supports accurate product identification, verification, and traceability management through industrial coding and marking solutions.',
      fullDescription: 'Markem-Imaje develops industrial coding, marking, and printing systems for product and packaging identification on production lines. Its product portfolio includes inkjet printers, laser marking systems, thermal transfer printers, labeling solutions, and software for managing coding processes.\n\nThese systems enable the application of production dates, expiration dates, batch numbers, serial numbers, barcodes, and 2D codes on various product and packaging surfaces. Combined with coding software, they support accurate code printing, verification, and integration with product traceability data.',
    },
    interroll: {
      description: 'Optimizes the movement of products within facilities through intralogistics and material handling systems, providing efficient and sustainable flow solutions.',
      fullDescription: 'Interroll develops and manufactures conveyor rollers, motor and drive systems, conveyor modules, sorting systems, and pallet and package handling solutions for material movement in manufacturing, warehousing, and distribution environments.\n\nInterroll products are used for transporting, accumulating, routing, sorting, and storing boxes, pallets, packages, and other materials within facilities. Their modular design allows them to be adapted to a wide range of intralogistics applications, from production lines to warehouses and distribution centers.',
    },
    beckhoff: {
      description: 'Enables flexible and efficient management of machine, robotics, and production systems through PC-based control technologies and open automation solutions.',
      fullDescription: 'Beckhoff develops open automation systems based on PC Control technology. The product range consists of Industrial PCs, I/O and Fieldbus Components, Drive Technology, and automation software. For all industries, there are products that can be used as individual components or to build a complete and seamless control system from scratch.\n\n Beckhoff\'s "New Automation Technology" philosophy stands for universal, open control and automation solutions used in a wide variety of applications worldwide, ranging from CNC-controlled machine tools to smart building automation.',
    },
    sewio: {
      description: 'Tracks asset movements through UWB-based real-time location technologies, providing visibility and operational efficiency in intralogistics processes.',
      fullDescription: 'Sewio develops UWB-based real-time location tracking systems used in manufacturing and logistics environments. The solution consists of tracking tags, positioning infrastructure, and RTLS software, enabling the tracking of products, semi-finished goods, equipment, vehicles, and, when required, personnel within a facility.\n\nThe system records not only the real-time location of assets but also their movement history, traveled routes, and dwell times in specific areas. This data is used to optimize material flows, reduce search and loss-related delays, support workplace safety, and increase visibility into internal logistics processes.',
    },
  },
  blogPosts: {
    'the-importance-of-food-traceability-for-end-consumers': {
      title: 'The Importance of Food Traceability for End Consumers',
      excerpt: 'Food traceability plays a critical role in safety, quality and trust by giving consumers clear information about product origin and processing.',
      content: `
        <p>Food traceability plays a critical role in ensuring food safety, quality, and consumer satisfaction. Today, end consumers increasingly demand information about the origin and production processes of food products.</p>

        <h2>What is Food Traceability?</h2>
        <p>Food traceability refers to the ability to track products throughout the supply chain. The FAO defines food traceability as â€œthe recording and tracking of food productsâ€™ production, processing, and distribution processesâ€ (FAO, 2015). This process enables consumers to know where their food comes from and how it was processed.</p>

        <h2>Importance of Food Traceability for End Consumers</h2>
        <ul>
          <li><strong>Food Safety:</strong> Consumers want to avoid health risks associated with food safety issues. Traceability systems help quickly identify and address health concerns, facilitating efficient recall processes. For example, during the 2006 E. coli outbreak, a lack of traceability damaged the reputation of many brands (FDA, 2007). Food traceability systems are critical for mitigating the impact of such crises.</li>
          <li><strong>Transparency and Trust:</strong> Consumers demand more information about food production processes. Studies show that brands offering transparency increase consumer trust. According to Nielsenâ€™s 2015 report, 66% of consumers seek information about sustainable and ethical production (Nielsen, 2015). Traceability is a key tool in building this trust.</li>
          <li><strong>Quality Perception:</strong> Food traceability ensures continuous monitoring of product quality. Consumers trust brands with high traceability more. Mintelâ€™s 2020 report indicates that 60% of consumers are willing to pay more for high-quality products (Mintel, 2020), highlighting how traceability influences brand perception.</li>
          <li><strong>Social Responsibility:</strong> Consumers prefer brands with environmental and social responsibility. Traceability allows companies to transparently present their production processes and supply chains, enhancing their social responsibility perception. Studies show that 73% of consumers are inclined to purchase sustainable products (McKinsey, 2020).</li>
          <li><strong>Differentiation and Preference:</strong> In the highly competitive food industry, traceability provides a differentiation advantage. Consumers prefer products with high traceability, helping brands stand out in the market (Baker et al., 2018).</li>
        </ul>

        <h2>Predictions for the Next Five Years</h2>
        <p>Developments in food traceability will drive significant changes over the next five years, with the following trends expected to stand out:</p>
        <ul>
          <li><strong>Digitalization and Technology Adoption:</strong> The adoption of innovative technologies like blockchain will further advance food traceability systems. These technologies enable secure recording of every step in the supply chain, allowing consumers to easily verify product histories (Kamble et al., 2021).</li>
          <li><strong>Increasing Consumer Demands:</strong> Consumer interest in health, safety, and environmental issues will continue to grow, making it essential for companies to implement effective traceability systems. Studies indicate that 80% of consumers will demand more information on food safety and traceability (FMI, 2021).</li>
          <li><strong>Regulation and Standardization:</strong> Governments and international organizations are introducing stricter regulations on food traceability, driving companies to standardize systems and enhance consumer trust (Wang et al., 2022). Regulations will become more stringent, especially following food safety crises.</li>
          <li><strong>Sustainability Emphasis:</strong> Demand for sustainable agriculture and food production will increase. Consumers will prefer brands supporting environmental sustainability, encouraging the development of traceability systems in this direction (Sustainable Food Trust, 2023).</li>
        </ul>

        <h2>SISKON Traceability Solutions</h2>
        <p>Food traceability is not only a safety tool for end consumers but also an indicator of quality and transparency. As consumers demand more information about food products, the importance of traceability continues to grow. Over the next five years, digitalization, increasing demands, regulatory changes, sustainability focus, and educational efforts will shape the evolution of food traceability systems. By effectively implementing traceability systems, companies can gain consumer trust and enhance brand value. In the future, food traceability will become even more critical, enabling consumers to make informed choices.</p>
        <p><strong>SISKON Traceability Solutions</strong> enable you to manage all your production processes from a single platform.</p>
        <p><strong>SISKON Traceability Solutions</strong> allow real-time monitoring of production processes, historical reporting, and analytical measurements by collecting data from test results, quality measurements, materials used, set and actual process data, visual inspections, repairs, and sampling stations. They support operational processes such as material flow, work orders, tool management, and energy usage, ensuring the digital collection of critical information beyond automated processes. Through horizontal and vertical integrations, all production processes can be digitally visualized and managed.</p>

        <h2>References</h2>
        <ul>
          <li>Baker, M., et al. (2018). â€œThe Role of Traceability in the Food Supply Chain: A Study of Market Benefits.â€ <em>International Journal of Supply Chain Management.</em></li>
          <li>FAO. (2015). <em>Guidelines for the Development of Traceability Systems for Food Products.</em> Food and Agriculture Organization.</li>
          <li>FMI. (2021). â€œThe Future of Food: Consumer Trends in 2021.â€ Food Marketing Institute.</li>
          <li>Kamble, S. S., Gunasekaran, A., & Sharma, R. (2021). â€œBlockchain Technology for Sustainable Supply Chain Management: A Comprehensive Review.â€ <em>Sustainable Production and Consumption.</em></li>
          <li>McKinsey. (2020). â€œThe Consumer Demand for Sustainable Products.â€ McKinsey & Company.</li>
          <li>Mintel. (2020). <em>Consumer Trends in Food Safety: The Demand for Transparency.</em></li>
          <li>Sustainable Food Trust. (2023). â€œThe Future of Food: Sustainability and Transparency.â€ <em>Sustainable Food Trust Report.</em></li>
          <li>Wang, Y., et al. (2022). â€œRegulatory Challenges in Food Traceability: A Global Perspective.â€ <em>Food Policy Journal.</em></li>
        </ul>
      `,
      category: 'News',
    },
    'product-traceability-why-is-it-essential-for-quality-trust-and-sustainability': {
      title: 'Product Traceability: Why It Is Essential for Quality, Trust and Sustainability',
      excerpt: 'To combat counterfeiting and strengthen trust, product traceability enables end-to-end visibility, safety control and transparent supply-chain management.',
      content: `
        <p>Food traceability plays a critical role in ensuring food safety, quality, and consumer satisfaction. Today, end consumers increasingly demand information about the origin and production processes of food products.</p>

        <h2>What is Food Traceability?</h2>
        <p>Food traceability refers to the ability to track products throughout the supply chain. The FAO defines food traceability as â€œthe recording and tracking of food products' production, processing, and distribution processesâ€ (FAO, 2015). This process enables consumers to know where their food comes from and how it was processed.</p>

        <h2>Importance of Food Traceability for End Consumers</h2>
        <ul>
          <li><strong>Food Safety:</strong> Consumers want to avoid health risks associated with food safety issues. Traceability systems help quickly identify and address health concerns, facilitating efficient recall processes. For example, during the 2006 E. coli outbreak, a lack of traceability damaged the reputation of many brands (FDA, 2007). Food traceability systems are critical for mitigating the impact of such crises.</li>
          <li><strong>Transparency and Trust:</strong> Consumers demand more information about food production processes. Studies show that brands offering transparency increase consumer trust. According to Nielsen's 2015 report, 66% of consumers seek information about sustainable and ethical production (Nielsen, 2015). Traceability is a key tool in building this trust.</li>
          <li><strong>Quality Perception:</strong> Food traceability ensures continuous monitoring of product quality. Consumers trust brands with high traceability more. Mintel's 2020 report indicates that 60% of consumers are willing to pay more for high-quality products (Mintel, 2020), highlighting how traceability influences brand perception.</li>
          <li><strong>Social Responsibility:</strong> Consumers prefer brands with environmental and social responsibility. Traceability allows companies to transparently present their production processes and supply chains, enhancing their social responsibility perception. Studies show that 73% of consumers are inclined to purchase sustainable products (McKinsey, 2020).</li>
          <li><strong>Differentiation and Preference:</strong> In the highly competitive food industry, traceability provides a differentiation advantage. Consumers prefer products with high traceability, helping brands stand out in the market (Baker et al., 2018).</li>
        </ul>

        <h2>Predictions for the Next Five Years</h2>
        <p>Developments in food traceability will drive significant changes over the next five years, with the following trends expected to stand out:</p>
        <ul>
          <li><strong>Digitalization and Technology Adoption:</strong> The adoption of innovative technologies like blockchain will further advance food traceability systems. These technologies enable secure recording of every step in the supply chain, allowing consumers to easily verify product histories (Kamble et al., 2021).</li>
          <li><strong>Increasing Consumer Demands:</strong> Consumer interest in health, safety, and environmental issues will continue to grow, making it essential for companies to implement effective traceability systems. Studies indicate that 80% of consumers will demand more information on food safety and traceability (FMI, 2021).</li>
          <li><strong>Regulation and Standardization:</strong> Governments and international organizations are introducing stricter regulations on food traceability, driving companies to standardize systems and enhance consumer trust (Wang et al., 2022). Regulations will become more stringent, especially following food safety crises.</li>
          <li><strong>Sustainability Emphasis:</strong> Demand for sustainable agriculture and food production will increase. Consumers will prefer brands supporting environmental sustainability, encouraging the development of traceability systems in this direction (Sustainable Food Trust, 2023).</li>
        </ul>

        <h2>SISKON Traceability Solutions</h2>
        <p>Food traceability is not only a safety tool for end consumers but also an indicator of quality and transparency. As consumers demand more information about food products, the importance of traceability continues to grow. Over the next five years, digitalization, increasing demands, regulatory changes, sustainability focus, and educational efforts will shape the evolution of food traceability systems. By effectively implementing traceability systems, companies can gain consumer trust and enhance brand value. In the future, food traceability will become even more critical, enabling consumers to make informed choices.</p>
        <p><strong>SISKON Traceability Solutions</strong> enable you to manage all your production processes from a single platform.</p>
        <p><strong>SISKON Traceability Solutions</strong> allow real-time monitoring of production processes, historical reporting, and analytical measurements by collecting data from test results, quality measurements, materials used, set and actual process data, visual inspections, repairs, and sampling stations. They support operational processes such as material flow, work orders, tool management, and energy usage, ensuring the digital collection of critical information beyond automated processes. Through horizontal and vertical integrations, all production processes can be digitally visualized and managed.</p>

        <h2>References</h2>
        <ul>
          <li>Baker, M., et al. (2018). â€œThe Role of Traceability in the Food Supply Chain: A Study of Market Benefits.â€ <em>International Journal of Supply Chain Management</em>.</li>
          <li>FAO. (2015). <em>Guidelines for the Development of Traceability Systems for Food Products</em>. Food and Agriculture Organization.</li>
          <li>FMI. (2021). â€œThe Future of Food: Consumer Trends in 2021.â€ Food Marketing Institute.</li>
          <li>Kamble, S. S., Gunasekaran, A., & Sharma, R. (2021). â€œBlockchain Technology for Sustainable Supply Chain Management: A Comprehensive Review.â€ <em>Sustainable Production and Consumption</em>.</li>
          <li>McKinsey. (2020). â€œThe Consumer Demand for Sustainable Products.â€ McKinsey & Company.</li>
          <li>Mintel. (2020). <em>Consumer Trends in Food Safety: The Demand for Transparency</em>.</li>
          <li>Sustainable Food Trust. (2023). â€œThe Future of Food: Sustainability and Transparency.â€ <em>Sustainable Food Trust Report</em>.</li>
          <li>Wang, Y., et al. (2022). â€œRegulatory Challenges in Food Traceability: A Global Perspective.â€ <em>Food Policy Journal</em>.</li>
        </ul>
      `,
      category: 'News',
    },
    'food-traceability-and-standards-the-importance-of-product-carton-and-pallet-traceability': {
      title: 'Food Traceability and Standards: Product, Carton and Pallet Traceability',
      excerpt: 'Product, carton and pallet traceability strengthens food safety, compliance and supply-chain transparency from production to consumption.',
      content: `
        <p>In the food industry, traceability refers to the tracking and documentation of all processes from production to consumption. This process plays a critical role in ensuring food safety and quality control. Traceability offers numerous benefits for both producers and consumers, ensuring product safety in many food production facilities.</p>

        <h2>Core Elements of Food Traceability</h2>
        <p><strong>Food Safety:</strong> Traceability systems track every stage of a food product's journey from production to the end consumer. This enables rapid and effective recalls in case of quality issues. Ensuring food safety protects consumer health and safeguards producers' reputations.</p>
        <p><strong>Legal Compliance:</strong> Many countries have implemented strict regulations regarding food traceability. Compliance with these regulations has become a legal requirement for food producers and suppliers. Traceability systems facilitate adherence to these legal obligations.</p>
        <p><strong>Quality Control:</strong> Traceability enables continuous monitoring of products' compliance with quality standards. When errors or deviations are detected during production, defective products can be prevented from reaching the market.</p>

        <h2>Importance of Product, Carton, and Pallet Traceability</h2>
        <p>Traceability is not limited to the final product level; it must also be applied to the cartons and pallets used for transportation. For end-to-end traceability, all transport units must be recorded based on serial numbers.</p>

        <p><strong>Detailed Tracking:</strong> Tracking which products are placed in which cartons and which cartons are loaded onto which pallets allows for faster and more targeted interventions when issues are detected. This is a critical advantage, especially for companies producing and distributing large quantities of products.</p>
        <p><strong>Efficiency:</strong> Carton and pallet-level traceability makes logistics processes more efficient. It reduces errors during storage, transportation, and distribution, lowering costs and enhancing operational efficiency.</p>
        <p><strong>Transparency:</strong> Providing transparency throughout the supply chain builds trust for both producers and consumers. Consumers can easily access information about the origin and history of the products they purchase, while producers can instantly identify any disruptions in the supply chain.</p>
        <p><strong>Risk Management:</strong> Carton and pallet-level traceability minimizes food safety risks. In the event of contamination or quality issues, the source can be quickly identified, and affected products can be recalled, helping prevent widespread health crises.</p>

        <h2>Food Traceability Standards</h2>
        <p>Several international standards govern food traceability, establishing rules and procedures to ensure food safety and quality. Some of these standards include:</p>
        <p><strong>ISO 22000:</strong> ISO 22000 is a food safety management system standard. It defines requirements for ensuring traceability at every stage of the food chain. Based on HACCP principles, ISO 22000 identifies critical control points to guarantee food safety.</p>
        <p><strong>HACCP (Hazard Analysis and Critical Control Points):</strong> HACCP is a system that identifies and controls food safety risks. It ensures preventive measures are taken by identifying potential hazards at every stage of the production process. HACCP plays a significant role in food traceability and is widely recognized by international standards.</p>
        <p><strong>BRC Global Standards:</strong> BRC (British Retail Consortium) Global Standards outline criteria for food safety, quality, and operations. BRC certification helps food producers prove that their products are safe and compliant with regulations.</p>
        <p><strong>IFS (International Featured Standards):</strong> IFS defines quality and safety standards for food production processes. It supports producers in developing and maintaining traceability and quality control systems.</p>
        <p><strong>GlobalG.A.P.:</strong> GlobalG.A.P. is a standard for good agricultural practices at the farm level. It aims to ensure the traceability and sustainability of food production. GlobalG.A.P. certification proves that agricultural products are safe and sustainable.</p>

        <h2>SISKON Traceability Solutions</h2>
        <p>Food traceability has become an indispensable element of modern food production and distribution processes. Product, carton, and pallet-level traceability not only ensures legal compliance and quality control but also enhances operational efficiency and minimizes food safety risks. Therefore, it is crucial for all businesses operating in the food industry to establish and continuously update effective traceability systems.</p>
        <p><strong>SISKON Traceability Solutions</strong> enable you to manage all your production processes from a single platform.</p>
        <p><strong>SISKON Traceability Products</strong> allow real-time monitoring of production processes, historical reporting, and analytical measurements by collecting data from test results, quality measurements, materials used, set and actual process data, visual inspections, repairs, and sampling stations. They support operational processes such as material flow, work orders, tool management, and energy usage, ensuring the digital collection of critical information beyond automated processes. Through horizontal and vertical integrations, all production processes can be digitally visualized and managed.</p>
        <p>With the motto <strong>"Continuous Control, Zero Errors"</strong>, we ensure end-to-end digital traceability for your business.</p>
      `,
      category: 'News',
    },
    'barcode-systems-used-in-traceability': {
      title: 'Barcode Systems Used in Traceability',
      excerpt: 'Barcode systems are indispensable for traceability, process efficiency and product visibility across global supply chains.',
      content: `
        <p>In today's rapidly digitalizing world, barcode systems have become indispensable for enhancing efficiency in production and logistics processes, ensuring product traceability, and streamlining operations. Barcodes enable the tracking and management of products at every stage from production to consumption.</p>

        <p>The history of barcode technology began in 1948 with the development of the first optical scanning system by Norman Joseph Woodland and Bernard Silver. The first barcode scanner was used in a U.S. supermarket in 1974, marking the beginning of the widespread commercial adoption of barcode technology. In Turkey, barcode technology was first implemented in 1988, a significant milestone in the modernization of the retail sector.</p>

        <p>The barcode technologies we extensively use in our traceability solutions are critical for ensuring products are traceable at every step from production to consumption.</p>

        <h2>Commonly Used Barcode Systems Worldwide</h2>

        <h3>EAN-8</h3>
        <ul>
          <li><strong>Use Case</strong>: Small products</li>
          <li><strong>Structure</strong>: 7 data digits and 1 check digit</li>
          <li><strong>Features</strong>: Similar to EAN-13 but designed for smaller products due to its compact size.</li>
        </ul>

        <h3>EAN-13 (European Article Number)</h3>
        <ul>
          <li><strong>Use Case</strong>: Retail products</li>
          <li><strong>Structure</strong>: 12 data digits and 1 check digit</li>
          <li><strong>Features</strong>: Globally used for product identification, providing a unique identifier for each product.</li>
        </ul>

        <h3>UPC-A (Universal Product Code)</h3>
        <ul>
          <li><strong>Use Case</strong>: Retail products</li>
          <li><strong>Structure</strong>: 11 data digits and 1 check digit</li>
          <li><strong>Features</strong>: Similar to EAN-13, widely used in the United States for product identification.</li>
        </ul>

        <h3>UPC-E</h3>
        <ul>
          <li><strong>Use Case</strong>: Small products</li>
          <li><strong>Structure</strong>: 6 data digits and 1 check digit</li>
          <li><strong>Features</strong>: A compact version of UPC-A, offering the same functionality with less space.</li>
        </ul>

        <h3>Code 39</h3>
        <ul>
          <li><strong>Use Case</strong>: Industrial applications, logistics</li>
          <li><strong>Structure</strong>: Variable-length character string</li>
          <li><strong>Features</strong>: Supports alphanumeric characters, widely used in manufacturing and warehouse management.</li>
        </ul>

        <h3>Code 128</h3>
        <ul>
          <li><strong>Use Case</strong>: Logistics, transportation</li>
          <li><strong>Structure</strong>: Variable-length character string</li>
          <li><strong>Features</strong>: High data capacity, supports various character sets.</li>
        </ul>

        <h3>QR Code (Quick Response Code)</h3>
        <ul>
          <li><strong>Use Case</strong>: Mobile payments, product information, websites</li>
          <li><strong>Structure</strong>: Alphanumeric characters in a square module array</li>
          <li><strong>Features</strong>: Offers fast reading and high data capacity, widely used in mobile apps and marketing campaigns.</li>
        </ul>

        <h3>Data Matrix</h3>
        <ul>
          <li><strong>Use Case</strong>: Electronic components, pharmaceuticals</li>
          <li><strong>Structure</strong>: Alphanumeric characters in square or rectangular modules</li>
          <li><strong>Features</strong>: Stores large amounts of data in small spaces with high error correction capability.</li>
        </ul>

        <h3>PDF417</h3>
        <ul>
          <li><strong>Use Case</strong>: Identification cards, travel documents</li>
          <li><strong>Structure</strong>: Code consisting of multiple rows and columns</li>
          <li><strong>Features</strong>: Capable of encoding large datasets, used in a wide range of applications.</li>
        </ul>

        <h3>ITF (Interleaved 2 of 5)</h3>
        <ul>
          <li><strong>Use Case</strong>: Carton boxes, logistics</li>
          <li><strong>Structure</strong>: Encodes pairs of digits</li>
          <li><strong>Features</strong>: Provides high reading speed and accuracy, widely used in logistics.</li>
        </ul>

        <h3>Codabar</h3>
        <ul>
          <li><strong>Use Case</strong>: Libraries, blood banks, healthcare</li>
          <li><strong>Structure</strong>: Consists of 16 symbols, including four start and four stop characters</li>
          <li><strong>Features</strong>: Simple and flexible, suitable for small datasets.</li>
        </ul>

        <h3>MSI (Modified Plessey)</h3>
        <ul>
          <li><strong>Use Case</strong>: Warehousing, retail</li>
          <li><strong>Structure</strong>: Numeric data only</li>
          <li><strong>Features</strong>: Variable-length data with a check digit, commonly used in retail and storage.</li>
        </ul>

        <h3>Aztec Code</h3>
        <ul>
          <li><strong>Use Case</strong>: Travel documents, mobile ticketing</li>
          <li><strong>Structure</strong>: Square modules</li>
          <li><strong>Features</strong>: High data capacity, fast reading, and robust error correction.</li>
        </ul>

        <h3>MaxiCode</h3>
        <ul>
          <li><strong>Use Case</strong>: Package tracking, logistics</li>
          <li><strong>Structure</strong>: Hexagonal cells around a central target point</li>
          <li><strong>Features</strong>: Fast reading and high data capacity, primarily used by UPS.</li>
        </ul>

        <h3>GS1 DataBar</h3>
        <ul>
          <li><strong>Use Case</strong>: Retail, small products</li>
          <li><strong>Structure</strong>: Contains 14-digit GTIN (Global Trade Item Number)</li>
          <li><strong>Features</strong>: Compact, capable of encoding extensive data for small products.</li>
        </ul>

        <h3>Code 93</h3>
        <ul>
          <li><strong>Use Case</strong>: Industrial applications, logistics</li>
          <li><strong>Structure</strong>: Variable-length character string</li>
          <li><strong>Features</strong>: More compact and secure than Code 39, offering higher data density.</li>
        </ul>

        <h3>Micro QR Code</h3>
        <ul>
          <li><strong>Use Case</strong>: Electronic components, small products</li>
          <li><strong>Structure</strong>: Small square modules</li>
          <li><strong>Features</strong>: High reading capacity in small spaces.</li>
        </ul>

        <h3>MicroPDF417</h3>
        <ul>
          <li><strong>Use Case</strong>: Identification cards, small labels</li>
          <li><strong>Structure</strong>: Compact row and column arrangement</li>
          <li><strong>Features</strong>: Encodes large amounts of data in small spaces.</li>
        </ul>

        <h3>GS1-128 (formerly UCC/EAN-128)</h3>
        <ul>
          <li><strong>Use Case</strong>: Logistics, transportation, warehousing</li>
          <li><strong>Structure</strong>: Variable-length alphanumeric characters</li>
          <li><strong>Features</strong>: High data capacity, supports various application identifiers.</li>
        </ul>

        <h3>Plessey Code</h3>
        <ul>
          <li><strong>Use Case</strong>: Libraries, retail</li>
          <li><strong>Structure</strong>: Numeric data</li>
          <li><strong>Features</strong>: Commonly used in small businesses and libraries.</li>
        </ul>

        <h3>Code 11</h3>
        <ul>
          <li><strong>Use Case</strong>: Telecommunications</li>
          <li><strong>Structure</strong>: Numeric data and dash character</li>
          <li><strong>Features</strong>: Includes one or two check digits for error correction.</li>
        </ul>

        <h3>GS1 DataBar Expanded</h3>
        <ul>
          <li><strong>Use Case</strong>: Fresh produce, variable-weight products</li>
          <li><strong>Structure</strong>: 14-digit GTIN and additional data</li>
          <li><strong>Features</strong>: Can encode additional elements like serial numbers, lot numbers, and expiration dates.</li>
        </ul>

        <h3>Pharmacode</h3>
        <ul>
          <li><strong>Use Case</strong>: Pharmaceutical industry</li>
          <li><strong>Structure</strong>: Numeric data only</li>
          <li><strong>Features</strong>: Used for error detection and accuracy in drug packaging.</li>
        </ul>

        <h3>Han Xin Code</h3>
        <ul>
          <li><strong>Use Case</strong>: Chinese market, general use</li>
          <li><strong>Structure</strong>: Square or rectangular matrix</li>
          <li><strong>Features</strong>: High data density, supports both numeric and alphanumeric data.</li>
        </ul>
      `,
      category: 'News',
    },
    'how-to-implement-individual-product-traceability': {
      title: 'How to Implement Individual Product Traceability',
      excerpt: 'A practical framework for implementing individual product traceability with unique coding, marking strategy and process-wide verification.',
      content: `
        <p>"I want to track products individually."</p>

        <p>A simple and concise sentence, right? However, when you add the question, "How can I do this?" the process becomes far more complex than anticipated. Tracking individual products requires careful consideration, planning, and integration of multiple components. In this blog series, we will discuss how to track individual products, where to start, and the critical stages of the process.</p>

        <p>The first essential rule of individual product traceability is assigning a unique code to each product. The initial analysis should focus on how the product will be marked and which technology will be used. The following questions will help guide the process effectively:</p>

        <h3><strong>Question 1: Is the product's structure suitable for marking? Where should the marking be applied?</strong></h3>
        <p>Examine the product and collaborate with departments such as marketing, sales, quality, R&amp;D, and production to make a consolidated decision. Each department will provide valuable perspectives, ensuring the optimal marking location is determined.</p>

        <h3><strong>Question 2: Which operations require marking beforehand?</strong></h3>
        <p>Think of traceability processes as a chain. You can start with a small traceability system and later add new links as needed. Focus on the critical operations you want to track first, which will clarify your approach to this question.</p>

        <h3><strong>Question 3: Can the code on the product be carried through all operations in the production process?</strong></h3>
        <p>This is a crucial question. While the product and conditions may allow marking at the first station, subsequent operations like ovens, painting, or sanding may affect the code's readability. You must ensure the code remains readable throughout the production process.</p>

        <h3><strong>Question 4: Which marking technology should be used?</strong></h3>
        <p>The analysis leads to this question. Various technologies can be used for product marking, such as inkjet, thermal transfer, laser/carbon fiber printers, or, if feasible, RFID tags. Based on the analysis from Question 3, you may need heat-resistant labels or high-powered laser printers to create deeper codes. Cycle times, process flow, machine locations, and space constraints can all influence your answers to these questions. A holistic evaluation of these factors is essential to develop the most optimal solution.</p>

        <p>Now that we are ready to mark the product, the second critical step is ensuring the codes are scanned before each operation. We will discuss this in more detail in our next blog post.</p>

        <h2>SISKON Traceability Solutions</h2>
        <p>With <strong>SISKON Traceability Solutions</strong>, you can manage all your production processes from a single platform.</p>
        <p><strong>SISKON Traceability Products</strong> enable real-time monitoring of production processes, historical reporting, and analytical measurements by collecting data from test results, quality measurements, materials used, set and actual process data, visual inspections, repairs, and sampling stations. They support operational processes such as material flow, work orders, tool management, and energy usage, ensuring the digital collection of critical information beyond automated processes. Through horizontal and vertical integrations, all production processes can be digitally visualized and managed.</p>
        <p>With the motto <strong>"Continuous Control, Zero Errors"</strong>, we ensure end-to-end digital traceability for your business.</p>
      `,
      category: 'News',
    },
    'what-are-the-benefits-of-traceability-systems': {
      title: 'What Are the Benefits of Traceability Systems?',
      excerpt: 'As quality expectations rise, traceability systems help reduce rework, improve cost control and support continuous improvement.',
      content: `
        <p>With the advancement of technology, the rules of the game in the manufacturing sector are changing. Whether large-scale or SME-level, many companies in the same industry now use similar machine technologies. So, what sets companies apart in today's highly competitive landscape? The answer to this question is what truly changes the game.</p>

        <p><strong>Quality.</strong></p>

        <p>Producing more in the same amount of time is no longer enough; high-quality production with low rework rates is increasingly critical. As a result, the need for traceability systems is growing day by day. So, what are the benefits of traceability systems?</p>

        <h2><strong>Benefits of Traceability Systems</strong></h2>

        <h3><strong>Improved Production Quality</strong></h3>
        <p>Traceability systems incorporate quality control points into the production process, helping to prevent critical errors and enhance overall production quality.</p>

        <h3><strong>Reduced Rework Rates and Production Costs</strong></h3>
        <p>By detecting production errors early through process controls, issues are resolved quickly. This reduces rework labor and indirectly lowers production costs.</p>

        <h3><strong>Supports Root Cause Analysis</strong></h3>
        <p>Traceability systems provide access to data from every stage of the production process, enabling the identification and resolution of the root causes of issues.</p>

        <h3><strong>Clarifies Inter-Operation Cost Analysis</strong></h3>
        <p>By tracking the flow of the production process, traceability systems allow for clear observation of cost and value streams within the process.</p>

        <h3><strong>Facilitates Continuous Improvement</strong></h3>
        <p>Monitoring how parts and products move between lines makes continuous improvement easier. Knowing where and when bottlenecks or delays occur enables real-time optimization.</p>

        <p>In addition to these benefits, regulations in some industries mandate traceability systems. Sectors like healthcare and pharmaceuticals, which directly impact human health, lead the way in this regard. However, new regulations indicate that many other industries will follow suit.</p>

        <h2><strong>SISKON Traceability Solutions</strong></h2>
        <p><strong>SISKON Traceability Solutions</strong> enable you to manage all your production processes from a single platform.</p>
        <p><strong>SISKON Traceability Products</strong> allow real-time monitoring of production processes, historical reporting, and analytical measurements by collecting data from test results, quality measurements, materials used, set and actual process data, visual inspections, repairs, and sampling stations. They support operational processes such as material flow, work orders, tool management, and energy usage, ensuring the digital collection of critical information beyond automated processes. Through horizontal and vertical integrations, all production processes can be digitally visualized and managed.</p>
        <p>With the motto <strong>"Continuous Control, Zero Errors"</strong>, we ensure end-to-end digital traceability for your business.</p>
      `,
      category: 'News',
    },
    'what-are-traceability-data-definition-of-traceability': {
      title: 'What Are Traceability Data? Definition of Traceability',
      excerpt: 'Traceability data captures production, quality and process events at serial level to support reliable quality management and compliance.',
      content: `
        <p>Traceability data is, at its core, quite simple. Traceability involves recording all events that affect a product. This data is collected throughout the entire production process, including materials added (BOM and critical components), tools used, process steps performed, and test results, all recorded based on serial numbers.</p>

        <p>It is common to see traceability data collected and compiled manually. Any data collection process involving human intervention raises concerns about reliability. Manually collected data on paper is highly prone to errors. Additionally, assigning operators, who should focus solely on value-added production tasks, with extra responsibilities for data recording and processing creates hidden costs for businesses.</p>

        <h2><strong>Values of Traceability: Active Quality Management</strong></h2>
        <p>Rather than focusing solely on traceability data for product recall scenarios, something businesses never want to face, it is far more valuable to view traceability data as a real-time quality management tool. Consider a scenario where a single defect is recorded in a batch of a thousand products. Typically, pinpointing the exact cause of such one-off defects is nearly impossible, as they appear random. With reliable and detailed traceability data, a root cause analysis can be conducted to identify the conditions and events leading to the defect. As part of a Quality Management System, corrective actions can be defined and implemented to ensure the error never recurs. To amplify the benefits, similar actions can be applied to other products in comparable processes. Digital traceability enables businesses to achieve real and continuous improvement toward zero-defect production operations.</p>

        <h2><strong>Values of Traceability: Compliance</strong></h2>
        <p>As electronics have become a critical component in industries such as automotive, white goods, and aerospace, the reliability of electronic products is paramount. In cases of potential failures in final products, determining responsibility for the failure must be assessed quickly. Suppliers are often seen as the source of such errors. Compliance with agreed-upon rules and procedures protects suppliers by proving that no errors or deviations occurred in the production of a defective product. Traceability data meets these requirements instantly, safeguarding suppliers from costly legal disputes.</p>

        <h2><strong>How Do I Track a Product? SISKON Traceability Solutions</strong></h2>
        <p><strong>SISKON Traceability Solutions</strong> enable you to manage all your production processes from a single platform.</p>
        <p><strong>SISKON Traceability Products</strong> electronically link test results, measurements, materials used, set and actual process data, visual inspections, repairs, and data from sampling stations to individual products based on serial numbers. This enables real-time monitoring of production processes, historical reporting, and analytical measurements. They support operational processes such as material flow, work orders, tool management, and energy usage, ensuring the digital collection of critical information beyond automated processes. Through horizontal and vertical integrations, all production processes can be digitally visualized and managed.</p>
        <p>With the motto <strong>"Continuous Control, Zero Errors"</strong>, we ensure end-to-end digital traceability for your business.</p>
        <p><strong>Keywords</strong>: Endüstri 4.0, Traceability, What is Traceability?, İzlenebilirlik Tanımı</p>
      `,
      category: 'News',
    },
    'bomi-group-camera-based-multi-code-reading-system': {
      title: 'BOMI Group Camera-Based Multi-Code Reading System',
      excerpt: 'A camera-based multi-code reading implementation for BOMI that improved verification speed and reduced manual errors in warehouse operations.',
      content: `
        <p>With this goal in mind, we designed a new product for visualization in the logistics and warehousing sector.</p>

        <p>For the Turkey warehouse of BOMI Group, a global leader in pharmaceutical logistics, we developed a <strong>Camera-Based Multi-Code Reading System</strong>, automating processes previously performed manually.</p>

        <p>The line, tailored to BOMI's needs, consists of a 3-meter conveyor, 6 SICK cameras, an operator screen, and a handheld terminal.</p>

        <p>This system enables automatic verification of products on the order list, speeding up the process and eliminating human errors. In the system we designed, an operator places a box containing 50 products on the conveyor. The box enters an enclosed area, where cameras begin capturing images. Within seconds, Data Matrix codes are read and displayed on the system and operator screen. The codes are compared with the order list to ensure compliance with BOMI standards. Non-compliant codes are highlighted in red, prompting error correction and re-scanning. Once approved by the operator, the order is finalized.</p>

        <p>If needed, products can be added manually using the handheld terminal.</p>

        <p>With our Camera-Based Multi-Code Reading System, SISKON has supported our solution partner BOMI in achieving significant advancements in warehouse management.</p>

        <p>This system, adaptable to various industries and applications, can add value to your business processes. Introduce your brand to us and confidently advance toward Industry 4.0.</p>

        <p>SISKON continues to code the future.</p>
        <p><strong>Keywords</strong>: Barkod, BOMI Group, Endüstri 4.0, Tarama, SISKON</p>
      `,
      category: 'News',
    },
    'tusiad-sd2-pioneering-digital-transformation-in-industry': {
      title: 'TÃœSÄ°AD SD2: Pioneering Digital Transformation in Industry',
      excerpt: 'Highlights from TUSIAD SD2, where technology users and suppliers collaborated to accelerate industrial digital transformation.',
      content: `
        <p>As the first comprehensive program focused on digital transformation in industry, <strong>TÃœSÄ°AD SD2</strong> brought together 18 leading technology user companies with SME-scale technology suppliers.</p>

        <p>Matched companies will collaborate to develop joint solution dossiers. Success stories from the program will be shared with the public at the <strong>Digital Transformation Success Stories Ceremony</strong> held at the end of the year.</p>

        <p>The second year of TÃœSÄ°AD's SD2 program, aimed at supporting digital transformation in industry, is underway. Sponsored by Vodafone Business (gold sponsor), Inventram (silver sponsor), and supported legally by GÃ¼n+Partners, the program connects technology user companies seeking digital transformation with the right solution partners while providing technology suppliers with a platform to showcase their solutions and validate them with customers.</p>

        <p>On Tuesday, September 10, following application and pre-selection phases, 18 technology user companies and shortlisted micro, small, and medium-sized technology suppliers came together at the <strong>Industry-Technology Integration Program (STEP)</strong>. During the STEP event, matches were made between technology users and pre-selected technology suppliers. Over the coming period, matched companies will work together to prepare solution dossiers. The resulting success stories will be shared at the <strong>Digital Transformation Success Stories Ceremony</strong> at year-end. The event also featured panels with experts discussing topics ranging from public support to digital transformation tools.</p>

        <p>The opening speech was delivered by TÃœSÄ°AD Vice President and Industrial Policies Roundtable President <strong>BahadÄ±r BalkÄ±r</strong>. Highlighting the increasing uncertainties decision-makers face with the Fourth Industrial Revolution, BalkÄ±r stated: "Last year, we launched the TÃœSÄ°AD SD2 Program to address this. In its pilot year, we brought together 13 leading Turkish industrial companies with 14 technology suppliers, creating collaboration opportunities to advance Turkey's innovation ecosystem. This year, we are connecting 18 leading technology user companies with valuable technology suppliers."</p>

        <p>Following BalkÄ±r, TÃœSÄ°AD Board President <strong>Simone Kaslowski</strong> took the stage, emphasizing the intense competitive environment driven by digital transformation. "New technologies are creating a winner-takes-all dynamic in many industries, making winning more critical than ever. Collaboration between companies, governments, universities, and other stakeholders plays a vital role in the competitiveness of countries and companies," Kaslowski said. Highlighting the need for new leadership and management skills in digital transformation, he added: "Production quality and value are measured by factors like average internet speed, the number of collaborative robots per thousand workers, STEM skills, employee training, data security regulations, logistics performance, infrastructure quality, carbon emissions, and recycling rates. With advancements like 3D technology, advanced materials, and gene-editing technologies, the boundaries between digital and physical worlds are increasingly blurring. The TÃœSÄ°AD SD2 Program offers a vital opportunity to approach transformation holistically. It is gratifying to see the program, which began as a pilot last year, continue with increased participation this year."</p>

        <p><strong>Perihan Ä°nci</strong>, President of the TÃœSÄ°AD SD2 Task Force, provided details about the program's processes. She noted that the TÃœSÄ°AD SD2 Program was created to address the need for a platform connecting technology users with suppliers. The program strengthens the technology user and supplier ecosystem, addresses user needs, supports SME technology production, and showcases best practices in digital transformation.</p>

        <p>In the closing speech, TÃœSÄ°AD Board President <strong>Simone Kaslowski</strong> said: "Starting today, some of our companies will begin working one-on-one with technology users. This will be a long and challenging but equally valuable and exciting process. I want to reiterate that there are no winners or losers in this program. Unmatched technology suppliers are now an integral part of this network. I believe this program has sparked the momentum Turkish industry needs. I am confident we will hear many inspiring success stories in the coming period."</p>

        <h2><strong>TUSIAD SD2 Program STEP Event by the Numbers</strong></h2>
        <ul>
          <li><strong>Number of Technology User Companies</strong>: 18</li>
          <li><strong>Number of Technology Suppliers Submitting Solutions for Calls</strong>: 274</li>
          <li><strong>Number of Shortlisted Suppliers Invited to STEP</strong>: 100</li>
          <li><strong>Number of High-Potential Suppliers Following the Shortlist</strong>: 100</li>
          <li><strong>Number of Panelists</strong>: 21</li>
          <li><strong>Number of Technology User Companies Participating in Both Periods</strong>: 3</li>
          <li><strong>Number of Suppliers Applying in Both Periods</strong>: 52</li>
          <li><strong>Number of STEP Event Participants</strong>: 329</li>
        </ul>

        <h2><strong>Matches:</strong></h2>
        <ul>
          <li>Assan Hanil Otomotiv Sanayi with Armolis Bilisim and Kesit Bilisim</li>
          <li>Bayer Turk Kimya Sanayi with Pedudi Bilisim Teknolojileri</li>
          <li>Brisa Bridgestone with Golive Bilisim</li>
          <li>Cimsa with Mobirob ARGE</li>
          <li>Ditas with Konzek Teknoloji</li>
          <li>Ekoten with Eliar Elektronik</li>
          <li>Enerjisa Enerji with T4E Enerji</li>
          <li>Kastamonu Entegre with Buyutech</li>
          <li>Kordsa with SISKON</li>
          <li>Migros with AI Labs</li>
          <li>Nobel Ilac with Simsoft</li>
          <li>Norm Civata with Alp Otomasyon</li>
          <li>Organik Kimya with Hareket Kontrol Servis Merkezi</li>
          <li>Securitas Guvenlik with Arikovani Yazilim</li>
          <li>TFI TAB Gida Yatirimlari with TUBU ARGE</li>
          <li>Tofas with B2Metrik Yazilim ve Bilisim</li>
          <li>Umur Basim Sanayi with Obase Bilgisayar ve Danismanlik</li>
        </ul>

        <p><strong>Source</strong>: <a href="https://www.adagazetesi.com.tr/teknoloji-kullanicisi-sirketlerle-teknoloji-tedarikcileri-guclerini-birlestirdi.html">https://www.adagazetesi.com.tr/teknoloji-kullanicisi-sirketlerle-teknoloji-tedarikcileri-guclerini-birlestirdi.html</a></p>
        <p><strong>Keywords</strong>: Endüstri 4.0, Endüstriyel Dönüşüm, SISKON, TUSIAD SD2</p>
      `,
      category: 'News',
    },
    'siskon-at-the-future-industrial-technology-fair': {
      title: 'SISKON at the Future Industrial Technology Fair',
      excerpt: 'SISKON presented IoT, traceability and smart automation capabilities for end-to-end industrial digitalization at FIT.',
      content: `
        <p>With our IoT solutions, we provide vertical integration between the production floor, ERP, and cloud systems. Using barcode, QR code, RFID, and Bluetooth technologies, our traceability solutions enable you to monitor and optimize all processes from raw material intake to shipment.</p>

        <p>Our machine and process automation, motion applications, and safety automation solutions ensure seamless integration between automation and software, while delivering turnkey projects. Our custom software solutions, developed in compliance with <strong>ISO 15504</strong> standards, provide the applications you need. Big data analytics and machine learning algorithms optimize production processes and offer intelligent recommendations for predictive maintenance.</p>
      `,
      category: 'News',
    },
    'traceability-presentation-at-industry-4-0-event': {
      title: 'Traceability Presentation at an Industry 4.0 Event',
      excerpt: 'A focused Industry 4.0 session on traceability strategy, delivered jointly by SISKON and SICK experts.',
      content: '<p>Join us for the presentation titled <strong>One Step Toward 4.0: Traceability</strong> by SISKON Sales Manager <strong>Cemal Tezcan</strong> and SICK Automatic Identification Systems Product Manager <strong>Berk Boyaci</strong>.</p>',
      category: 'News',
    },
    'iot-dashboard-and-traceability-solutions-at-logistics-seminar': {
      title: 'IoT Dashboard and Traceability Solutions at Logistics Seminar',
      excerpt: 'SISKON showcased IoT dashboard and traceability capabilities at the 7th logistics automation technologies seminar.',
      content: '<p>We showcased our <strong>IoT Dashboard</strong>, digital transformation, and traceability solutions at the <strong>7th Automation Technologies in Logistics Seminar</strong>, organized by the Logistics Association <strong>LODER</strong> and <strong>SICK</strong>.</p>',
      category: 'News',
    },
  },
};

