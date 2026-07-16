import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '../../../components/ui/Container';
import { referenceProjects } from '../../../data/references';
import { IconArrowLeft } from '../../../components/ui/Icons';
import ProjectGallerySlider from '../../../components/ui/ProjectGallerySlider';
import ReferenceProjectsSlider from '../../../components/sections/ReferenceProjectsSlider';
import { cookies } from 'next/headers';
import { localizeReferenceProjects } from '../../../lib/i18n/contentLocalization';
import { f } from '../../../lib/i18n/sectionTranslations';
import { getReferenceNarrative } from '../../../lib/i18n/referenceNarratives';
import { sortReferenceProjects, withReferenceProjectTimeline } from '../../../lib/referenceProjectOrdering';
import { DEFAULT_LOCALE, isSupportedLocale, toLocalePath } from '../../../lib/i18n/dictionaries';
import PagePrimaryCta from '../../../components/ui/PagePrimaryCta';
import JsonLd from '../../../components/seo/JsonLd';
import PhiniaDetailPage from '../../../components/sections/PhiniaDetailPage';
import DuruDetailPage from '../../../components/sections/DuruDetailPage';
import BshCarriersDetailPage from '../../../components/sections/BshCarriersDetailPage';
import DemirDokumDetailPage from '../../../components/sections/DemirDokumDetailPage';
import HaierDetailPage from '../../../components/sections/HaierDetailPage';
import PmiBarcodeGateDetailPage from '../../../components/sections/PmiBarcodeGateDetailPage';

import trDetails from '../../../data/i18n/references/details.tr.json';
import enDetails from '../../../data/i18n/references/details.en.json';
import roDetails from '../../../data/i18n/references/details.ro.json';

const detailsByLocale = {
  tr: trDetails,
  en: enDetails,
  ro: roDetails,
};
/* eslint-disable react/prop-types */

export async function generateMetadata({ params }) {
  const cookieStore = await cookies();
  const localeRaw = cookieStore.get('locale')?.value;
  const locale = isSupportedLocale(localeRaw) ? localeRaw : DEFAULT_LOCALE;
  const isEn = locale === 'en';
  const localizedProjects = withReferenceProjectTimeline(
    sortReferenceProjects(localizeReferenceProjects(referenceProjects, locale)),
    locale
  );
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
  const pageUrl = `https://traceability.com.tr/portfolio/${project.slug}`;

  let ogLocale = 'ro_RO';
  if (locale === 'tr') {
    ogLocale = 'tr_TR';
  } else if (isEn) {
    ogLocale = 'en_US';
  }

  let ogImage = 'https://traceability.com.tr/siskon-logo-header.svg';
  if (project.image) {
    ogImage = project.image.startsWith('http') ? project.image : `https://traceability.com.tr${project.image}`;
  }

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
  const cookieStore = await cookies();
  const localeRaw = cookieStore.get('locale')?.value;
  const locale = isSupportedLocale(localeRaw) ? localeRaw : DEFAULT_LOCALE;
  const localizedProjects = withReferenceProjectTimeline(
    sortReferenceProjects(localizeReferenceProjects(referenceProjects, locale)),
    locale
  );
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
  const listPath = locale === 'en' ? '/reference-projects' : '/proiecte-de-referinta';
  const localizedListPath = toLocalePath(listPath, locale);
  const backHref = Number.isFinite(fromPage) && fromPage > 1
    ? `${localizedListPath}?page=${fromPage}`
    : localizedListPath;

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

  const pageUrl = `https://traceability.com.tr${toLocalePath(`/portfolio/${project.slug}`, locale)}`;
  const homeUrl = `https://traceability.com.tr${toLocalePath('/', locale)}`;
  const projectsUrl = `https://traceability.com.tr${localizedListPath}`;

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

  const absoluteMainImage = featuredImage.startsWith('http') ? featuredImage : `https://traceability.com.tr${featuredImage}`;
  const absoluteGalleryImages = [
    absoluteMainImage,
    ...(Array.isArray(project.gallery) ? project.gallery : []).map(img => 
      img.startsWith('http') ? img : `https://traceability.com.tr${img}`
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
            "url": "https://traceability.com.tr/siskon-logo-header.svg"
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
            "name": homeLabelByLocale[locale] || homeLabelByLocale.ro,
            "item": homeUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": projectsLabelByLocale[locale] || projectsLabelByLocale.ro,
            "item": projectsUrl
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": project.title,
            "item": pageUrl
          }
        ]
      }
    ]
  };

  const projectDetails = detailsByLocale[locale]?.[slug] || detailsByLocale.tr[slug] || {};

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
