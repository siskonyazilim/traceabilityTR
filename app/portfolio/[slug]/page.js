import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '../../../components/ui/Container';
import { referenceProjects } from '../../../data/references';
import { IconArrowLeft, IconChevronLeft, IconChevronRight } from '../../../components/ui/Icons';
import ProjectGallerySlider from '../../../components/ui/ProjectGallerySlider';
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

  const currentIndex = localizedProjects.findIndex((p) => p.slug === slug);
  const totalProjects = localizedProjects.length;
  const prevProject = localizedProjects[(currentIndex - 1 + totalProjects) % totalProjects];
  const nextProject = localizedProjects[(currentIndex + 1) % totalProjects];

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

          {/* Previous / Next Navigation */}
          <nav className="clear-both mt-16 pt-12 border-t border-gray-light">
            <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-6 sm:gap-0">
              <Link
                href={toLocalePath(`/portfolio/${prevProject.slug}`, locale)}
                className="group flex items-center gap-3 text-secondary-blue hover:text-accent-blue transition-colors"
              >
                <IconChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <span className="block text-sm text-gray-text font-medium">
                    {f(locale, 'portfolioDetailPage', 'previousProject')}
                  </span>
                  <span className="mt-2 inline-flex h-14 w-36 items-center justify-center rounded-xl border border-slate-200 bg-white px-3 shadow-sm">
                    <img
                      src={prevProject.logo || prevProject.image}
                      alt={prevProject.title}
                      className="max-h-8 w-full object-contain"
                    />
                  </span>
                  <h3 className="mt-2 max-w-xs text-xs font-bold text-primary-black leading-tight group-hover:text-accent-blue transition-colors">
                    {prevProject.title}
                  </h3>
                </div>
              </Link>

              <Link
                href={toLocalePath(`/portfolio/${nextProject.slug}`, locale)}
                className="group flex items-center gap-3 text-secondary-blue hover:text-accent-blue transition-colors self-end sm:self-auto"
              >
                <div className="text-right">
                  <span className="block text-sm text-gray-text font-medium">
                    {f(locale, 'portfolioDetailPage', 'nextProject')}
                  </span>
                  <span className="mt-2 ml-auto inline-flex h-14 w-36 items-center justify-center rounded-xl border border-slate-200 bg-white px-3 shadow-sm">
                    <img
                      src={nextProject.logo || nextProject.image}
                      alt={nextProject.title}
                      className="max-h-8 w-full object-contain"
                    />
                  </span>
                  <h3 className="mt-2 ml-auto max-w-xs text-xs font-bold text-primary-black leading-tight text-right group-hover:text-accent-blue transition-colors">
                    {nextProject.title}
                  </h3>
                </div>
                <IconChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </nav>

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
