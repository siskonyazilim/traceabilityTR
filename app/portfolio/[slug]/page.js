import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '../../../components/ui/Container';
import { referenceProjects } from '../../../data/references';
import { IconArrowLeft } from '../../../components/ui/Icons';
import ProjectGallerySlider from '../../../components/ui/ProjectGallerySlider';
import ReferenceProjectsSlider from '../../../components/sections/ReferenceProjectsSlider';
import { getRequestLocale, getRequestPathname } from '../../../lib/i18n/requestLocale';
import { localizeReferenceProjects } from '../../../lib/i18n/contentLocalization';
import { f } from '../../../lib/i18n/sectionTranslations';
import { getReferenceNarrative } from '../../../lib/i18n/referenceNarratives';
import { sortReferenceProjects, withReferenceProjectTimeline } from '../../../lib/referenceProjectOrdering';
import { DEFAULT_LOCALE, isSupportedLocale, toLocalePath } from '../../../lib/i18n/dictionaries';
import { resolveSlug, getLocalizedSlug } from '../../../lib/i18n/slugMapping';
import PagePrimaryCta from '../../../components/ui/PagePrimaryCta';
import JsonLd from '../../../components/seo/JsonLd';
import { getReferenceDetailAeoFaqSchema } from '../../../lib/seo/aeoFaqs';
import PhiniaDetailPage from '../../../components/sections/PhiniaDetailPage';
import DuruDetailPage from '../../../components/sections/DuruDetailPage';
import BshCarriersDetailPage from '../../../components/sections/BshCarriersDetailPage';
import DemirDokumDetailPage from '../../../components/sections/DemirDokumDetailPage';
import HaierDetailPage from '../../../components/sections/HaierDetailPage';
import PmiBarcodeGateDetailPage from '../../../components/sections/PmiBarcodeGateDetailPage';
import BshAssemblyLineTraceabilityDetailPage from '../../../components/sections/BshAssemblyLineTraceabilityDetailPage';
import BshOvenDoorTraceabilityDetailPage from '../../../components/sections/BshOvenDoorTraceabilityDetailPage';
import BshGlassShelfTrackingDetailPage from '../../../components/sections/BshGlassShelfTrackingDetailPage';
import AjinomotoBlockchainDetailPage from '../../../components/sections/AjinomotoBlockchainDetailPage';
import WhirlpoolSortingDetailPage from '../../../components/sections/WhirlpoolSortingDetailPage';
import VestelLabelingDetailPage from '../../../components/sections/VestelLabelingDetailPage';
import MeyDiageoDetailPage from '../../../components/sections/MeyDiageoDetailPage';
import MaxionMoldTrackingDetailPage from '../../../components/sections/MaxionMoldTrackingDetailPage';
import BoschTrolleyTrackingDetailPage from '../../../components/sections/BoschTrolleyTrackingDetailPage';
import BorgwarnerLaserDetailPage from '../../../components/sections/BorgwarnerLaserDetailPage';
import OrkideQualityDetailPage from '../../../components/sections/OrkideQualityDetailPage';
import NemakPartsDetailPage from '../../../components/sections/NemakPartsDetailPage';
import HaierSortingDetailPage from '../../../components/sections/HaierSortingDetailPage';
import HaierAssemblyDetailPage from '../../../components/sections/HaierAssemblyDetailPage';
import BomiGroupDetailPage from '../../../components/sections/BomiGroupDetailPage';
import GroupeAtlanticDetailPage from '../../../components/sections/GroupeAtlanticDetailPage';
import DelphiRailAssemblyIntegrationDetailPage from '../../../components/sections/DelphiRailAssemblyIntegrationDetailPage';
import DelphiCloudIntegrationDetailPage from '../../../components/sections/DelphiCloudIntegrationDetailPage';
import CandyHooverTestStationsDetailPage from '../../../components/sections/CandyHooverTestStationsDetailPage';
import CandyHooverProductionTestStationsDetailPage from '../../../components/sections/CandyHooverProductionTestStationsDetailPage';
import TurkTuborgPalletLabelingDetailPage from '../../../components/sections/TurkTuborgPalletLabelingDetailPage';
import MeyBandrolControlDetailPage from '../../../components/sections/MeyBandrolControlDetailPage';
import PmiPalletizingDetailPage from '../../../components/sections/PmiPalletizingDetailPage';
import PmiEmbosserDetailPage from '../../../components/sections/PmiEmbosserDetailPage';

import trDetails from '../../../data/i18n/references/tr/index.js';
import enDetails from '../../../data/i18n/references/en/index.js';
import roDetails from '../../../data/i18n/references/ro/index.js';
import { getReferenceProjects, getReferenceProjectBySlugFromCMS } from '../../../lib/cms/referenceService';

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

const detailsByLocale = {
  tr: trDetails.default || trDetails,
  en: enDetails.default || enDetails,
  ro: roDetails.default || roDetails,
};
/* eslint-disable react/prop-types */

export async function generateStaticParams() {
  const paths = [];
  for (const project of referenceProjects) {
    paths.push({ slug: getLocalizedSlug('portfolio', project.slug, 'tr') });
    paths.push({ slug: getLocalizedSlug('portfolio', project.slug, 'en') });
    paths.push({ slug: getLocalizedSlug('portfolio', project.slug, 'ro') });
  }
  return paths;
}

export async function generateMetadata({ params }) {
  const locale = await getRequestLocale();
  const isEn = locale === 'en';
  const localizedProjects = await getReferenceProjects(locale);
  const { slug: rawSlug } = await params;

  const legacySlugMap = {
    'maxion-inci-celik-trasabilitatea-paletilor': 'maxion-inci-celik',
    'abalioglu-yag-trasabilitate': 'abalioglu-yag',
    'abalıoglu-yag-trasabilitate': 'abalioglu-yag',
    'abalıoglu-yag': 'abalioglu-yag',
    'nuhun-ankara-trasabilitate': 'nuhun-ankara',
    'delphi-technologies-managementul-depozitelor': 'delphi-technologies',
    'pmi-rfid-pentru-stantare': 'pmi-rfid',
    'philsa-palletizing-automation-automatic-labeling': 'pmi-palletizing-automation-automatic-labeling',
    'philsa-embosser-rfid': 'pmi-embosser-rfid',
  };

  const mappedSlug = legacySlugMap[rawSlug] || rawSlug;
  const baseSlug = resolveSlug('portfolio', mappedSlug);
  const project = localizedProjects.find((entry) => entry.slug === baseSlug);

  if (!project) {
    return {
      title: f(locale, 'portfolioDetailPage', 'notFoundTitle'),
      description: f(locale, 'portfolioDetailPage', 'notFoundDescription'),
    };
  }

  const brandSuffix = locale === 'tr' ? 'İzlenebilirlik' : 'Traceability';
  const title = `${project.title} | ${f(locale, 'portfolioDetailPage', 'projectSuffix')} | ${brandSuffix}`;
  const description = project.description;

  const alternates = {
    canonical: `https://www.traceability.com.tr${
      locale === 'en'
        ? `/en/reference-projects/${getLocalizedSlug('portfolio', baseSlug, 'en')}`
        : (locale === 'ro'
            ? `/ro/proiecte-de-referinta/${getLocalizedSlug('portfolio', baseSlug, 'ro')}`
            : `/portfolio/${getLocalizedSlug('portfolio', baseSlug, 'tr')}`)
    }`,
    languages: {
      'tr': `https://www.traceability.com.tr/portfolio/${getLocalizedSlug('portfolio', baseSlug, 'tr')}`,
      'en': `https://www.traceability.com.tr/en/reference-projects/${getLocalizedSlug('portfolio', baseSlug, 'en')}`,
      'ro': `https://www.traceability.com.tr/ro/proiecte-de-referinta/${getLocalizedSlug('portfolio', baseSlug, 'ro')}`,
      'x-default': `https://www.traceability.com.tr/portfolio/${getLocalizedSlug('portfolio', baseSlug, 'tr')}`,
    }
  };

  let ogLocale = 'ro_RO';
  if (locale === 'tr') {
    ogLocale = 'tr_TR';
  } else if (isEn) {
    ogLocale = 'en_US';
  }

  let ogImage = 'https://www.traceability.com.tr/og-image.png';
  if (project.image) {
    ogImage = project.image.startsWith('http') ? project.image : `https://www.traceability.com.tr${project.image}`;
  }

  return {
    title,
    description,
    alternates,
    openGraph: {
      title,
      description,
      type: 'article',
      url: alternates.canonical,
      locale: ogLocale,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function PortfolioDetailPage({ params, searchParams }) {
  const locale = await getRequestLocale();
  const localizedProjects = await getReferenceProjects(locale);
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
    'philsa-palletizing-automation-automatic-labeling': 'pmi-palletizing-automation-automatic-labeling',
    'philsa-embosser-rfid': 'pmi-embosser-rfid',
  };

  const mappedSlug = legacySlugMap[rawSlug] || rawSlug;
  const baseSlug = resolveSlug('portfolio', mappedSlug);
  const slug = baseSlug;
  const cmsProject = await getReferenceProjectBySlugFromCMS(baseSlug, locale);
  const project = cmsProject || localizedProjects.find((p) => p.slug === baseSlug);
  const fromPageRaw = resolvedSearchParams?.fromPage;
  const fromPage = Number.parseInt(Array.isArray(fromPageRaw) ? fromPageRaw[0] : fromPageRaw || '1', 10);
  const fromSectorRaw = resolvedSearchParams?.fromSector;
  const fromSector = Array.isArray(fromSectorRaw) ? fromSectorRaw[0] : (fromSectorRaw || '');
  const listPath = locale === 'en'
    ? '/reference-projects'
    : (locale === 'ro' ? '/proiecte-de-referinta' : '/portfolio');
  const localizedListPath = toLocalePath(listPath, locale);
  const backParams = new URLSearchParams();
  if (Number.isFinite(fromPage) && fromPage > 1) backParams.set('page', String(fromPage));
  if (fromSector) backParams.set('sector', fromSector);
  const backQuery = backParams.toString();
  const backHref = backQuery ? `${localizedListPath}?${backQuery}` : localizedListPath;

  if (!project) notFound();

  const titleMatchedNarrativeSlugs = new Set([
    'candy-hoover-test-data-cooker-lines-traceability',
    'pmi-palletizing-automation-automatic-labeling',
    'stackpole-traceability',
  ]);
  const narrative = titleMatchedNarrativeSlugs.has(project.slug)
    ? [project.title]
    : getReferenceNarrative(locale, project.slug);

  const featuredImage = project.heroImage
    || (project.image?.includes('/Logos/') ? '/resmi/Factory.jpg' : project.image);
  const sliderImages = [featuredImage, ...(Array.isArray(project.gallery) ? project.gallery : [])];

  const pageUrl = `https://www.traceability.com.tr${toLocalePath(`/portfolio/${project.slug}`, locale)}`;
  const homeUrl = `https://www.traceability.com.tr${toLocalePath('/', locale)}`;
  const projectsUrl = `https://www.traceability.com.tr${localizedListPath}`;
  const faqSchema = getReferenceDetailAeoFaqSchema(locale, pageUrl, project);

  const homeLabelByLocale = {
    tr: "Anasayfa",
    en: "Home",
    ro: "Acasă",
  };

  const projectsLabelByLocale = {
    tr: "Referans Projelerimiz",
    en: "Reference Projects",
    ro: "Proiecte de Referință",
  };

  const absoluteMainImage = featuredImage.startsWith('http') ? featuredImage : `https://www.traceability.com.tr${featuredImage}`;
  const absoluteGalleryImages = [
    absoluteMainImage,
    ...(Array.isArray(project.gallery) ? project.gallery : []).map(img => 
      img.startsWith('http') ? img : `https://www.traceability.com.tr${img}`
    )
  ];

  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        "headline": project.title,
        "alternativeHeadline": project.description,
        "image": absoluteGalleryImages,
        "datePublished": "2026-01-15T09:00:00+03:00",
        "dateModified": "2026-07-14T10:00:00+03:00",
        "author": {
          "@type": "Organization",
          "name": "Siskon Mühendislik Ekibi",
          "url": "https://siskon.com.tr"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Siskon Otomasyon ve Yazılım A.Ş.",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.traceability.com.tr/siskon-logo-header.svg"
          }
        },
        "description": project.description,
        "about": (project.technologies || []).map(tech => ({
          "@type": "Thing",
          "name": tech
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": homeLabelByLocale[locale] || homeLabelByLocale.tr,
            "item": homeUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": projectsLabelByLocale[locale] || projectsLabelByLocale.tr,
            "item": projectsUrl
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": project.title,
            "item": pageUrl
          }
        ]
      },
      ...(faqSchema ? [faqSchema] : [])
    ]
  };

  const staticDetails = detailsByLocale[locale]?.[slug] || detailsByLocale.tr[slug] || {};
  const projectDetails = cmsProject ? { ...staticDetails, ...cmsProject } : staticDetails;
  if (slug === 'phinia-laser-marking-machine-traceability-integration') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <PhiniaDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
        />
      </>
    );
  }

  if (slug === 'duru-bulgur-product-carton-pallet-traceability') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <DuruDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
        />
      </>
    );
  }

  if (slug === 'bsh-carriers-traceability') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <BshCarriersDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
        />
      </>
    );
  }

  if (slug === 'turk-demir-dokum-rfid-gate-with-digital-kanban') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <DemirDokumDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
        />
      </>
    );
  }

  if (slug === 'haier-europe-single-product-traceability-oven-assembly-line') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <HaierDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
        />
      </>
    );
  }

  if (slug === 'pmi-barcode-gate') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <PmiBarcodeGateDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
        />
      </>
    );
  }

  if (
    slug === 'nuhun-ankara-carton-pallet-shipment-traceability'
    || slug === 'abalioglu-yag-milk-powder-carton-pallet-traceability'
    || slug === 'turk-tuborg-keg-ocr-traceability'
    || slug === 'phinia-datamatrix-quality-grading-station'
    || slug === 'phinia-electronic-board-assembly-traceability'
    || slug === 'phinia-coating-line-traceability'
    || slug === 'phinia-oven-process-traceability'
  ) {
    return (
      <>
        <JsonLd data={graphSchema} />
        <PmiBarcodeGateDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
          fixedYear={project.referenceDateLabel || project.referenceDate || '2023'}
          currentSlug={slug}
          logoSrc={project.logo}
          logoAlt={`${project.title} Logo`}
        />
      </>
    );
  }

  if (slug === 'pmi-palletizing-automation-automatic-labeling') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <PmiPalletizingDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
        />
      </>
    );
  }

  if (slug === 'pmi-embosser-rfid') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <PmiEmbosserDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
        />
      </>
    );
  }

  if (slug === 'philsa-filter-tracking') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <PmiBarcodeGateDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
          fixedYear="2017"
          currentSlug="philsa-filter-tracking"
          logoSrc="/Logos/philip-morris-international-pmi-seeklogo.png"
          logoAlt="PMI Logo"
        />
      </>
    );
  }

  if (slug === 'delphi-tool-tip-traceability') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <PmiBarcodeGateDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
          fixedYear="2016"
          currentSlug="delphi-tool-tip-traceability"
          logoSrc={project.logo}
          logoAlt="Delphi Technologies Logo"
        />
      </>
    );
  }

  if (slug === 'delphi-prototype-line-traceability') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <PmiBarcodeGateDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
          fixedYear="2016"
          currentSlug="delphi-prototype-line-traceability"
          logoSrc={project.logo}
          logoAlt="Delphi Technologies Logo"
        />
      </>
    );
  }

  if (slug === 'delphi-technologies') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <PmiBarcodeGateDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
          fixedYear="2016"
          currentSlug="delphi-technologies"
          logoSrc={project.logo}
          logoAlt="Delphi Technologies Logo"
        />
      </>
    );
  }

  if (slug === 'delphi-monitorizare-individuala-rampa-injectie') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <PmiBarcodeGateDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
          fixedYear="2015"
          currentSlug="delphi-monitorizare-individuala-rampa-injectie"
          logoSrc={project.logo}
          logoAlt="Delphi Technologies Logo"
        />
      </>
    );
  }

  if (slug === 'stackpole-traceability') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <PmiBarcodeGateDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
          fixedYear="2015"
          currentSlug="stackpole-traceability"
          logoSrc={project.logo}
          logoAlt="Stackpole Logo"
        />
      </>
    );
  }

  if (slug === 'bsh-assembly-line-traceability') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <BshAssemblyLineTraceabilityDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
        />
      </>
    );
  }

  if (slug === 'bsh-oven-door-traceability') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <BshOvenDoorTraceabilityDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
        />
      </>
    );
  }

  if (slug === 'bsh-glass-shelf-tracking') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <BshGlassShelfTrackingDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
        />
      </>
    );
  }

  if (slug === 'ajinomoto-kemal-kukrer-blockchain-integrated-product-traceability') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <AjinomotoBlockchainDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
        />
      </>
    );
  }

  if (slug === 'whirlpool-sorting-barcode-control') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <WhirlpoolSortingDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
        />
      </>
    );
  }

  if (slug === 'vestel-automatic-labeling-verification') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <VestelLabelingDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
        />
      </>
    );
  }

  if (slug === 'mey-diageo-tracking-and-localization-project') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <MeyDiageoDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
        />
      </>
    );
  }

  if (slug === 'maxion-inci-celik-rfid-mold-tracking') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <MaxionMoldTrackingDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
        />
      </>
    );
  }

  if (slug === 'bosch-trolley-tracking-rfid-gate') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <BoschTrolleyTrackingDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
        />
      </>
    );
  }

  if (slug === 'borgwarner-laser-marking') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <BorgwarnerLaserDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
        />
      </>
    );
  }

  if (slug === 'orkide-quality-control-application') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <OrkideQualityDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
        />
      </>
    );
  }

  if (slug === 'nemak-parts-traceability') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <NemakPartsDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
        />
      </>
    );
  }

  if (slug === 'haier-europe-sorting-line-installation-traceability') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <HaierSortingDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
        />
      </>
    );
  }

  if (slug === 'haier-europe-assembly-line-installation-traceability') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <HaierAssemblyDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
        />
      </>
    );
  }

  if (slug === 'bomi-group-camera-based-multi-code-reading-system-tr') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <BomiGroupDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
        />
      </>
    );
  }

  if (slug === 'groupe-atlantic-busbar-traceability') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <GroupeAtlanticDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
        />
      </>
    );
  }

  if (slug === 'delphi-rfid-datamatrix-rail-assembly-integration') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <DelphiRailAssemblyIntegrationDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
        />
      </>
    );
  }

  if (slug === 'delphi-cloud-traceability-data-integration') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <DelphiCloudIntegrationDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
        />
      </>
    );
  }

  if (slug === 'candy-hoover-test-data-cooker-lines-traceability') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <CandyHooverTestStationsDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
        />
      </>
    );
  }

  if (slug === 'candy-hoover-test-data-production-efficiency-tracking') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <CandyHooverProductionTestStationsDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
        />
      </>
    );
  }

  if (slug === 'turk-tuborg-automatic-pallet-labeling-traceability') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <TurkTuborgPalletLabelingDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
        />
      </>
    );
  }

  if (slug === 'mey-icki-bandrol-control-system') {
    return (
      <>
        <JsonLd data={graphSchema} />
        <MeyBandrolControlDetailPage
          locale={locale}
          backHref={backHref}
          localizedProjects={localizedProjects}
          dict={projectDetails}
        />
      </>
    );
  }

  return (
    <>
      <JsonLd data={graphSchema} />
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
                  <span className="text-xs font-semibold text-white uppercase bg-accent-blue px-3 py-1 rounded-md">
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
            {project.referenceDateLabel && (
              <div className="mt-6 flex justify-end">
                <span className="rounded-md bg-primary-black/75 px-3 py-1 text-xs font-semibold text-white whitespace-nowrap">
                  {project.referenceDateLabel}
                </span>
              </div>
            )}
          </div>

          <ProjectGallerySlider
            images={sliderImages}
            title={project.title}
          />

          <ReferenceProjectsSlider
            projects={localizedProjects}
            locale={locale}
            currentSlug={project.slug}
            detailBasePath="/portfolio"
            labels={{
              title: f(locale, 'portfolioDetailPage', 'relatedProjects'),
              prevAria: f(locale, 'portfolioDetailPage', 'previousProject'),
              nextAria: f(locale, 'portfolioDetailPage', 'nextProject'),
              details: f(locale, 'portfolioDetailPage', 'details'),
            }}
          />

          {/* OnSuite Trace Redirection CTA — RO only */}
          {locale === 'ro' && (
            <div className="mx-auto mt-12 w-full max-w-none rounded-xl bg-gradient-to-br from-primary-black to-dark-bg p-6 text-white shadow-xl border border-slate-blue/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,181,247,0.15),transparent_48%)] pointer-events-none" />
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-accent-blue/10 rounded-md blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="space-y-3 max-w-3xl">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent-blue px-2.5 py-1 bg-accent-blue/10 rounded-md border border-accent-blue/20">
                      OnSuite Trace
                    </span>
                  </div>
                  <h2 className="text-[20px] font-medium tracking-tight">
                    Descoperiți Soluția Noastră de Trasabilitate End-to-End
                  </h2>
                  <p className="text-gray-light/85 text-sm md:text-base leading-relaxed">
                    OnSuite Trace vă permite să gestionați toate procesele de producție dintr-o singură platformă. Oferim trasabilitate digitală completă pentru afacerea dumneavoastră sub deviza &quot;Control Continuu, Zero Erori&quot;.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href="https://onsuite.ro/modules/trace"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-secondary-blue text-white hover:bg-accent-blue font-medium text-sm rounded-md px-6 py-3 whitespace-nowrap shadow-md hover:shadow-lg transition-all duration-300 w-full min-h-[44px] md:w-auto justify-center"
                  >
                    <span>Descoperă OnSuite Trace</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* CTA */}
          <PagePrimaryCta
            title={f(locale, 'portfolioDetailPage', 'ctaTitle')}
            subtitle={f(locale, 'portfolioDetailPage', 'ctaSubtitle')}
            primaryHref="/contact"
            primaryLabel={f(locale, 'portfolioDetailPage', 'ctaPrimary')}
          />
        </article>
      </Container>
    </div>
    </>
  );
}
