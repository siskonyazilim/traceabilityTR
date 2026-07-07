const ORDERED_REFERENCE_SLUGS = [
  'stackpole-traceability',
  'delphi-monitorizare-individuala-rampa-injectie',
  'delphi-technologies',
  'delphi-prototype-line-traceability',
  'delphi-tool-tip-traceability',
  'candy-hoover-test-data-cooker-lines-traceability',
  'mey-icki-bandrol-control-system',
  'philsa-filter-tracking',
  'turk-tuborg-automatic-pallet-labeling-traceability',
  'candy-hoover-test-data-production-efficiency-tracking',
  'delphi-cloud-traceability-data-integration',
  'delphi-rfid-datamatrix-rail-assembly-integration',
  'groupe-atlantic-busbar-traceability',
  'philsa-embosser-rfid',
  'philsa-palletizing-automation-automatic-labeling',
  'bomi-group-camera-based-multi-code-reading-system-tr',
  'haier-europe-assembly-line-installation-traceability',
  'haier-europe-sorting-line-installation-traceability',
  'nemak-parts-traceability',
  'orkide-quality-control-application',
  'borgwarner-laser-marking',
  'bosch-trolley-tracking-rfid-gate',
  'maxion-inci-celik-rfid-mold-tracking',
  'mey-diageo-tracking-and-localization-project',
  'vestel-automatic-labeling-verification',
  'whirlpool-sorting-barcode-control',
  'ajinomoto-kemal-kukrer-blockchain-integrated-product-traceability',
  'bsh-glass-shelf-tracking',
  'bsh-oven-door-traceability',
  'bsh-assembly-line-traceability',
  'haier-europe-single-product-traceability-oven-assembly-line',
  'turk-demir-dokum-rfid-gate-with-digital-kanban',
  'bsh-carriers-traceability',
  'duru-bulgur-product-carton-pallet-traceability',
  'phinia-laser-marking-machine-traceability-integration',
  'pmi-barcode-gate',
];

const ALLOWED_REFERENCE_SLUGS = new Set(ORDERED_REFERENCE_SLUGS);

const REFERENCE_PROJECT_TITLE_OVERRIDES_TR = {
  'duru-bulgur-product-carton-pallet-traceability': 'Duru Bulgur - Urun - Koli - Palet Izlenebilirligi',
  'phinia-laser-marking-machine-traceability-integration': 'Phinia - Lazer Markalama Tezgahi ve Izlenebilirlik Entegrasyonu',
  'bsh-carriers-traceability': 'BSH - Braket Izlenebilirlik',
  'pmi-barcode-gate': 'PMI - Barkod Gate',
  'turk-demir-dokum-rfid-gate-with-digital-kanban': 'Turk Demir Dokum - RFID Gate ile Dijital Kanban',
  'bsh-assembly-line-traceability': 'BSH - Montaj Hatlari Izlenebilirlik',
  'haier-europe-single-product-traceability-oven-assembly-line': 'Haier Europe - Ocak Montaj Hatti Tekil Urun Izlenebilirligi',
  'bsh-oven-door-traceability': 'BSH - Firin Kapi Izlenebilirlik',
  'ajinomoto-kemal-kukrer-blockchain-integrated-product-traceability': 'Ajinomoto (Kemal Kukrer) - Blockchain Entegre Urun Izlenebilirligi',
  'bsh-glass-shelf-tracking': 'BSH - Cam Raf Takibi',
  'vestel-automatic-labeling-verification': 'Vestel - Otomatik Etiketleme ve Dogrulama',
  'groupe-atlantic-busbar-traceability': 'Groupe Atlantic - Bara Izlenebilirlik',
  'bosch-trolley-tracking-rfid-gate': 'Bosch - RFID Gate ile Kit Arabasi Izlenebilirlik',
  'mey-diageo-tracking-and-localization-project': 'Mey Diageo - Track&Trace Projesi',
  'maxion-inci-celik-rfid-mold-tracking': 'Maxion Inci Celik - RFID Kalip Takip',
  'borgwarner-laser-marking': 'Borgwarner - Lazer Markalama',
  'whirlpool-sorting-barcode-control': 'Whirlpool - Sorting Barkod Kontrol',
  'bomi-group-camera-based-multi-code-reading-system-tr': 'Bomi Group - Kamerali Coklu Kod Okuma Sistemi',
  'orkide-quality-control-application': 'ORKIDE - Kalite Kontrol Uygulamasi',
  'haier-europe-sorting-line-installation-traceability': 'Haier Europe - Sorting Hatti ve Izlenebilirlik',
  'nemak-parts-traceability': 'NEMAK - Parca Izlenebilirlik',
  'haier-europe-assembly-line-installation-traceability': 'Haier Europe - Montaj Hatlari Kurulumu ve Izlenebilirlik',
  'stackpole-traceability': 'Stackpole - Izlenebilirlik',
  'pmi-palletizing-automation-automatic-labeling': 'Philsa - Paletleme Otomasyonu ve Otomatik Etiketleme',
  'philsa-palletizing-automation-automatic-labeling': 'Philsa - Paletleme Otomasyonu ve Otomatik Etiketleme',
  'philsa-filter-tracking': 'Philsa - Filtre Takip RFID Projesi',
  'philsa-embosser-rfid': 'Philsa - Embosser RFID Projesi',
  'candy-hoover-test-data-cooker-lines-traceability': 'Candy Hoover - Ocak Hatlari Test Veri Toplama ve Izlenebilirlik',
  'candy-hoover-test-data-production-efficiency-tracking': 'Candy Hoover - Test Veri Toplama ve Uretim Verimlilik Takibi',
  'mey-icki-bandrol-control-system': 'Mey Alkollu Ickiler - Bandrol Kamera Kontrol Sistemi',
  'delphi-tool-tip-traceability': 'Delphi Technologies - Takim Ucu Izlenebilirlik',
  'delphi-rfid-datamatrix-rail-assembly-integration': 'Delphi Technologies - Ray Montaj RFID-Datamatrix Entegrasyonu',
  'turk-tuborg-automatic-pallet-labeling-traceability': 'Turk Tuborg - Otomatik Palet Etiketleme ve Izlenebilirlik',
  'delphi-cloud-traceability-data-integration': 'Delphi Technologies - Izlenebilirlik Verileri Bulut Entegrasyonu',
  'delphi-prototype-line-traceability': 'Delphi Technologies - Prototip Hatti Izlenebilirlik',
  'delphi-monitorizare-individuala-rampa-injectie': 'Delphi Technologies - Ray Montaj Tekil Urun Izleme',
  'delphi-technologies': 'Delphi Technologies - Depo Yonetimi',
};

const REFERENCE_PROJECT_DATES = {
  'stackpole-traceability': { code: '2015', tr: '2015' },
  'delphi-monitorizare-individuala-rampa-injectie': { code: '2015', tr: '2015' },
  'delphi-technologies': { code: '2016', tr: '2016' },
  'delphi-prototype-line-traceability': { code: '2016', tr: '2016' },
  'delphi-tool-tip-traceability': { code: '2016', tr: '2016' },
  'candy-hoover-test-data-cooker-lines-traceability': { code: '2017', tr: '2017' },
  'mey-icki-bandrol-control-system': { code: '2017', tr: '2017' },
  'philsa-filter-tracking': { code: '2017', tr: '2017' },
  'turk-tuborg-automatic-pallet-labeling-traceability': { code: '2017', tr: '2017' },
  'candy-hoover-test-data-production-efficiency-tracking': { code: '2018', tr: '2018' },
  'delphi-cloud-traceability-data-integration': { code: '2018', tr: '2018' },
  'delphi-rfid-datamatrix-rail-assembly-integration': { code: '2018', tr: '2018' },
  'groupe-atlantic-busbar-traceability': { code: '2018', tr: '2018' },
  'philsa-embosser-rfid': { code: '2018', tr: '2018' },
  'philsa-palletizing-automation-automatic-labeling': { code: '2019', tr: '2019' },
  'bomi-group-camera-based-multi-code-reading-system-tr': { code: '2020', tr: '2020' },
  'haier-europe-assembly-line-installation-traceability': { code: '2020', tr: '2020' },
  'haier-europe-sorting-line-installation-traceability': { code: '2020', tr: '2020' },
  'nemak-parts-traceability': { code: '2020', tr: '2020' },
  'orkide-quality-control-application': { code: '2020', tr: '2020' },
  'borgwarner-laser-marking': { code: '2021', tr: '2021' },
  'bosch-trolley-tracking-rfid-gate': { code: '2021', tr: '2021' },
  'maxion-inci-celik-rfid-mold-tracking': { code: '2021', tr: '2021' },
  'mey-diageo-tracking-and-localization-project': { code: '2021', tr: '2021' },
  'vestel-automatic-labeling-verification': { code: '2021', tr: '2021' },
  'whirlpool-sorting-barcode-control': { code: '2021', tr: '2021' },
  'ajinomoto-kemal-kukrer-blockchain-integrated-product-traceability': { code: '2022', tr: '2022' },
  'bsh-glass-shelf-tracking': { code: '2022', tr: '2022' },
  'bsh-oven-door-traceability': { code: '2022', tr: '2022' },
  'bsh-assembly-line-traceability': { code: '2022', tr: '2022' },
  'haier-europe-single-product-traceability-oven-assembly-line': { code: '2022', tr: '2022' },
  'turk-demir-dokum-rfid-gate-with-digital-kanban': { code: '2022', tr: '2022' },
  'bsh-carriers-traceability': { code: '2023', tr: '2023' },
  'duru-bulgur-product-carton-pallet-traceability': { code: '2023', tr: '2023' },
  'phinia-laser-marking-machine-traceability-integration': { code: '2023', tr: '2023' },
  'pmi-barcode-gate': { code: '2023', tr: '2023' },
};

function getDateLabel(dateInfo, locale) {
  if (!dateInfo) return '';
  return locale === 'tr' && dateInfo.tr ? dateInfo.tr : dateInfo.code;
}

export function sortReferenceProjects(projects) {
  const orderIndexBySlug = new Map(ORDERED_REFERENCE_SLUGS.map((slug, index) => [slug, index]));
  const filteredProjects = projects.filter((project) => ALLOWED_REFERENCE_SLUGS.has(project.slug));

  return filteredProjects.sort((a, b) => {
    const aOrder = orderIndexBySlug.get(a.slug);
    const bOrder = orderIndexBySlug.get(b.slug);

    if (Number.isInteger(aOrder) && Number.isInteger(bOrder) && aOrder !== bOrder) {
      return aOrder - bOrder;
    }

    if (Number.isInteger(aOrder) && !Number.isInteger(bOrder)) {
      return -1;
    }

    if (!Number.isInteger(aOrder) && Number.isInteger(bOrder)) {
      return 1;
    }

    return String(a.slug || '').localeCompare(String(b.slug || ''));
  });
}

export function withReferenceProjectTimeline(projects, locale = 'tr') {
  return projects.map((project) => {
    const dateInfo = REFERENCE_PROJECT_DATES[project.slug];
    const localizedTitle = locale === 'tr' ? REFERENCE_PROJECT_TITLE_OVERRIDES_TR[project.slug] : undefined;

    return {
      ...project,
      title: localizedTitle || project.title,
      referenceDate: dateInfo?.code || '',
      referenceDateLabel: getDateLabel(dateInfo, locale),
    };
  });
}
