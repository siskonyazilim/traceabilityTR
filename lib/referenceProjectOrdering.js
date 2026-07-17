const ORDERED_REFERENCE_SLUGS = [
  'pmi-barcode-gate',
  'phinia-laser-marking-machine-traceability-integration',
  'duru-bulgur-product-carton-pallet-traceability',
  'bsh-carriers-traceability',
  'turk-demir-dokum-rfid-gate-with-digital-kanban',
  'haier-europe-single-product-traceability-oven-assembly-line',
  'bsh-assembly-line-traceability',
  'bsh-oven-door-traceability',
  'bsh-glass-shelf-tracking',
  'ajinomoto-kemal-kukrer-blockchain-integrated-product-traceability',
  'whirlpool-sorting-barcode-control',
  'vestel-automatic-labeling-verification',
  'mey-diageo-tracking-and-localization-project',
  'maxion-inci-celik-rfid-mold-tracking',
  'bosch-trolley-tracking-rfid-gate',
  'borgwarner-laser-marking',
  'orkide-quality-control-application',
  'nemak-parts-traceability',
  'haier-europe-sorting-line-installation-traceability',
  'haier-europe-assembly-line-installation-traceability',
  'bomi-group-camera-based-multi-code-reading-system-tr',
  'pmi-palletizing-automation-automatic-labeling',
  'pmi-embosser-rfid',
  'groupe-atlantic-busbar-traceability',
  'delphi-rfid-datamatrix-rail-assembly-integration',
  'delphi-cloud-traceability-data-integration',
  'candy-hoover-test-data-production-efficiency-tracking',
  'turk-tuborg-automatic-pallet-labeling-traceability',
  'philsa-filter-tracking',
  'mey-icki-bandrol-control-system',
  'candy-hoover-test-data-cooker-lines-traceability',
  'delphi-tool-tip-traceability',
  'delphi-prototype-line-traceability',
  'delphi-technologies',
  'delphi-monitorizare-individuala-rampa-injectie',
  'stackpole-traceability',
];

const ALLOWED_REFERENCE_SLUGS = new Set(ORDERED_REFERENCE_SLUGS);

const REFERENCE_PROJECT_TITLE_OVERRIDES_TR = {
  'duru-bulgur-product-carton-pallet-traceability': 'Duru Bulgur - Ürün - Koli - Palet İzlenebilirliği',
  'phinia-laser-marking-machine-traceability-integration': 'Phinia - Lazer Markalama Tezgahı ve İzlenebilirlik Entegrasyonu',
  'bsh-carriers-traceability': 'BSH - Braket İzlenebilirlik',
  'pmi-barcode-gate': 'PMI - Barkod Gate',
  'turk-demir-dokum-rfid-gate-with-digital-kanban': 'Türk Demir Döküm - RFID Gate ile Dijital Kanban',
  'bsh-assembly-line-traceability': 'BSH - Montaj Hatları İzlenebilirlik',
  'haier-europe-single-product-traceability-oven-assembly-line': 'Haier Europe - Ocak Montaj Hattı Tekil Ürün İzlenebilirliği',
  'bsh-oven-door-traceability': 'BSH - Fırın Kapı İzlenebilirlik',
  'ajinomoto-kemal-kukrer-blockchain-integrated-product-traceability': 'Ajinomoto (Kemal Kükrer) - Blockchain Entegre Ürün İzlenebilirliği',
  'bsh-glass-shelf-tracking': 'BSH - Cam Raf Takibi',
  'vestel-automatic-labeling-verification': 'Vestel - Otomatik Etiketleme ve Doğrulama',
  'groupe-atlantic-busbar-traceability': 'Groupe Atlantic - Bara İzlenebilirlik',
  'bosch-trolley-tracking-rfid-gate': 'Bosch - RFID Gate ile Kit Arabası İzlenebilirlik',
  'mey-diageo-tracking-and-localization-project': 'Mey Diageo - Track&Trace Projesi',
  'maxion-inci-celik-rfid-mold-tracking': 'Maxion İnci Çelik - RFID Kalıp Takip',
  'borgwarner-laser-marking': 'Borgwarner - Lazer Markalama',
  'whirlpool-sorting-barcode-control': 'Whirlpool - Sorting Barkod Kontrol',
  'bomi-group-camera-based-multi-code-reading-system-tr': 'Bomi Group - Kameralı Çoklu Kod Okuma Sistemi',
  'orkide-quality-control-application': 'ORKİDE - Kalite Kontrol Uygulaması',
  'haier-europe-sorting-line-installation-traceability': 'Haier Europe - Sorting Hattı ve İzlenebilirlik',
  'nemak-parts-traceability': 'NEMAK - Parça İzlenebilirlik',
  'haier-europe-assembly-line-installation-traceability': 'Haier Europe - Montaj Hatları Kurulumu ve İzlenebilirlik',
  'stackpole-traceability': 'Stackpole - İzlenebilirlik',
  'pmi-palletizing-automation-automatic-labeling': 'PMI - Paletleme Otomasyonu ve Otomatik Etiketleme',
  'philsa-palletizing-automation-automatic-labeling': 'Philsa - Paletleme Otomasyonu ve Otomatik Etiketleme',
  'pmi-embosser-rfid': 'PMI - Embosser RFID Projesi',
  'philsa-filter-tracking': 'PMI - Filtre Takip RFID Projesi',
  'philsa-embosser-rfid': 'Philsa - Embosser RFID Projesi',
  'candy-hoover-test-data-cooker-lines-traceability': 'Candy Hoover - Ocak Hatları Test Veri Toplama ve İzlenebilirlik',
  'candy-hoover-test-data-production-efficiency-tracking': 'Candy Hoover - Test İstasyonları İzlenebilirlik',
  'mey-icki-bandrol-control-system': 'Mey Alkollü İçkiler - Bandrol Kamera Kontrol Sistemi',
  'delphi-tool-tip-traceability': 'Delphi Technologies - Takım Ucu İzlenebilirlik',
  'delphi-rfid-datamatrix-rail-assembly-integration': 'Delphi Technologies - Ray Montaj RFID-Datamatrix Entegrasyonu',
  'turk-tuborg-automatic-pallet-labeling-traceability': 'Türk Tuborg - Otomatik Palet Etiketleme ve İzlenebilirlik',
  'delphi-cloud-traceability-data-integration': 'Delphi Technologies - İzlenebilirlik Verileri Bulut Entegrasyonu',
  'delphi-prototype-line-traceability': 'Delphi Technologies - Prototip Hattı İzlenebilirlik',
  'delphi-monitorizare-individuala-rampa-injectie': 'Delphi Technologies - Ray Montaj Tekil Ürün İzleme',
  'delphi-technologies': 'Delphi Technologies - Depo Yönetimi',
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
  'pmi-embosser-rfid': { code: '2018', tr: '2018' },
  'philsa-embosser-rfid': { code: '2018', tr: '2018' },
  'pmi-palletizing-automation-automatic-labeling': { code: '2019', tr: '2019' },
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
