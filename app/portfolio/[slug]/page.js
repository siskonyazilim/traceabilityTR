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
  const pageUrl = `https://traceability.ro/portfolio/${project.slug}`;

  let ogLocale = 'ro_RO';
  if (locale === 'tr') {
    ogLocale = 'tr_TR';
  } else if (isEn) {
    ogLocale = 'en_US';
  }

  let ogImage = 'https://traceability.ro/siskon-logo-header.svg';
  if (project.image) {
    ogImage = project.image.startsWith('http') ? project.image : `https://traceability.ro${project.image}`;
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
            {project.referenceDateLabel && (
              <div className="mt-6 flex justify-end">
                <span className="rounded-full bg-primary-black/75 px-3 py-1 text-xs font-semibold text-white whitespace-nowrap">
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
  );
}
