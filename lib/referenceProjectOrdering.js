const ORDERED_REFERENCE_SLUGS = [
  'duru-bulgur-product-carton-pallet-traceability',
  'phinia-laser-marking-machine-traceability-integration',
  'bsh-carriers-traceability',
  'pmi-barcode-gate',
  'mey-diageo-control-camera-etichete',
  'turk-demir-dokum-rfid-gate-with-digital-kanban',
  'bsh-assembly-line-traceability',
  'haier-europe-single-product-traceability-oven-assembly-line',
  'bsh-oven-door-traceability',
  'ajinomoto-kemal-kukrer-blockchain-integrated-product-traceability',
  'bsh-glass-shelf-tracking',
  'vestel-automatic-labeling-verification',
  'groupe-atlantic-busbar-traceability',
  'bosch-trolley-tracking-rfid-gate',
  'mey-diageo-tracking-and-localization-project',
  'maxion-inci-celik-rfid-mold-tracking',
  'borgwarner-laser-marking',
  'whirlpool-sorting-barcode-control',
  'bomi-group-camera-based-multi-code-reading-system-tr',
  'orkide-quality-control-application',
  'haier-europe-sorting-line-installation-traceability',
  'nemak-parts-traceability',
  'haier-europe-assembly-line-installation-traceability',
  'stackpole-traceability',
  'pmi-palletizing-automation-automatic-labeling',
  'delphi-tool-tip-traceability',
  'delphi-rfid-datamatrix-rail-assembly-integration',
  'turk-tuborg-automatic-pallet-labeling-traceability',
  'delphi-cloud-traceability-data-integration',
  'tirsan-product-traceability',
  'delphi-prototype-line-traceability',
  'pmi-urmarirea-filtrelor',
  'maxion-inci-celik',
  'delphi-monitorizare-individuala-rampa-injectie',
  'pmi-rfid',
  'delphi-technologies',
];

const REFERENCE_PROJECT_TITLE_OVERRIDES_TR = {
  'duru-bulgur-product-carton-pallet-traceability': 'Duru Bulgur - Urun - Koli - Palet Izlenebilirligi',
  'phinia-laser-marking-machine-traceability-integration': 'Phinia - Lazer Markalama Tezgahi ve Izlenebilirlik Entegrasyonu',
  'bsh-carriers-traceability': 'BSH - Braket Izlenebilirlik',
  'pmi-barcode-gate': 'PMI - Barkod Gate',
  'mey-diageo-control-camera-etichete': 'Mey Diageo - Kamerali Kalite Kontrol Uygulamasi',
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
  'delphi-tool-tip-traceability': 'Delphi Technologies - Takim Ucu Izlenebilirlik',
  'delphi-rfid-datamatrix-rail-assembly-integration': 'Delphi Technologies - Ray Montaj RFID-Datamatrix Entegrasyonu',
  'turk-tuborg-automatic-pallet-labeling-traceability': 'Turk Tuborg - Otomatik Palet Etiketleme ve Izlenebilirlik',
  'delphi-cloud-traceability-data-integration': 'Delphi Technologies - Izlenebilirlik Verileri Bulut Entegrasyonu',
  'tirsan-product-traceability': 'Tirsan - Urun Izlenebilirlik',
  'delphi-prototype-line-traceability': 'Delphi Technologies - Prototip Hatti Izlenebilirlik',
  'pmi-urmarirea-filtrelor': 'Philsa - Filtre Takip',
  'maxion-inci-celik': 'Mey Icki - Bandrol Kontrol Sistemi',
  'delphi-monitorizare-individuala-rampa-injectie': 'Delphi Technologies - Ray Montaj Tekil Urun Izleme',
  'pmi-rfid': 'Philsa - Embosser RFID',
  'delphi-technologies': 'Delphi Technologies - Depo Yonetimi',
};

const REFERENCE_PROJECT_DATES = {
  'duru-bulgur-product-carton-pallet-traceability': { code: '2024/03', tr: 'Mart 2024' },
  'phinia-laser-marking-machine-traceability-integration': { code: '2024/03', tr: 'Mart 2024' },
  'bsh-carriers-traceability': { code: '2023/02', tr: 'Subat 2023' },
  'pmi-barcode-gate': { code: '2024/03', tr: 'Mart 2024' },
  'mey-diageo-control-camera-etichete': { code: '2017/06', tr: 'Haziran 2017' },
  'turk-demir-dokum-rfid-gate-with-digital-kanban': { code: '2023/02', tr: 'Subat 2023' },
  'bsh-assembly-line-traceability': { code: '2023/02', tr: 'Subat 2023' },
  'haier-europe-single-product-traceability-oven-assembly-line': { code: '2020/07', tr: 'Temmuz 2020' },
  'bsh-oven-door-traceability': { code: '2023/02', tr: 'Subat 2023' },
  'ajinomoto-kemal-kukrer-blockchain-integrated-product-traceability': { code: '2022/07', tr: 'Temmuz 2022' },
  'bsh-glass-shelf-tracking': { code: '2023/02', tr: 'Subat 2023' },
  'vestel-automatic-labeling-verification': { code: '2021/12', tr: 'Aralik 2021' },
  'groupe-atlantic-busbar-traceability': { code: '2021/12', tr: 'Aralik 2021' },
  'bosch-trolley-tracking-rfid-gate': { code: '2021/12', tr: 'Aralik 2021' },
  'mey-diageo-tracking-and-localization-project': { code: '2017/06', tr: 'Haziran 2017' },
  'maxion-inci-celik-rfid-mold-tracking': { code: '2021/09', tr: 'Eylul 2021' },
  'borgwarner-laser-marking': { code: '2021/06', tr: 'Haziran 2021' },
  'whirlpool-sorting-barcode-control': { code: '2021/05', tr: 'Mayis 2021' },
  'bomi-group-camera-based-multi-code-reading-system-tr': { code: '2020/08', tr: 'Agustos 2020' },
  'bomi-group-camera-based-multi-code-reading-system': { code: '2020/08', tr: 'Agustos 2020' },
  'orkide-quality-control-application': { code: '2020/07', tr: 'Temmuz 2020' },
  'haier-europe-sorting-line-installation-traceability': { code: '2020/07', tr: 'Temmuz 2020' },
  'nemak-parts-traceability': { code: '2020/07', tr: 'Temmuz 2020' },
  'haier-europe-assembly-line-installation-traceability': { code: '2020/07', tr: 'Temmuz 2020' },
  'stackpole-traceability': { code: '2019/09', tr: 'Eylul 2019' },
  'pmi-palletizing-automation-automatic-labeling': { code: '2017/06', tr: 'Haziran 2017' },
  'delphi-tool-tip-traceability': { code: '2017/06', tr: 'Haziran 2017' },
  'delphi-rfid-datamatrix-rail-assembly-integration': { code: '2017/06', tr: 'Haziran 2017' },
  'turk-tuborg-automatic-pallet-labeling-traceability': { code: '2018/12', tr: 'Aralik 2018' },
  'delphi-cloud-traceability-data-integration': { code: '2017/06', tr: 'Haziran 2017' },
  'tirsan-product-traceability': { code: '2019/09', tr: 'Eylul 2019' },
  'delphi-prototype-line-traceability': { code: '2017/06', tr: 'Haziran 2017' },
  'pmi-urmarirea-filtrelor': { code: '2017/06', tr: 'Haziran 2017' },
  'maxion-inci-celik': { code: '2017/06', tr: 'Haziran 2017' },
  'delphi-monitorizare-individuala-rampa-injectie': { code: '2017/06', tr: 'Haziran 2017' },
  'pmi-rfid': { code: '2017/06', tr: 'Haziran 2017' },
  'delphi-technologies': { code: '2017/06', tr: 'Haziran 2017' },
};

function getDateLabel(dateInfo, locale) {
  if (!dateInfo) return '';
  return locale === 'tr' && dateInfo.tr ? dateInfo.tr : dateInfo.code;
}

export function sortReferenceProjects(projects) {
  const projectsBySlug = new Map(projects.map((project) => [project.slug, project]));
  return ORDERED_REFERENCE_SLUGS.map((slug) => projectsBySlug.get(slug)).filter(Boolean);
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
