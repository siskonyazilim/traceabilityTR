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
import { getReferenceNarrative } from '../../../lib/i18n/referenceNarratives';
/* eslint-disable react/prop-types */

export async function generateMetadata({ params }) {
  const cookieStore = await cookies();
  const localeRaw = cookieStore.get('locale')?.value;
  const locale = localeRaw === 'tr' ? 'tr' : localeRaw === 'en' ? 'en' : 'ro';
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
      locale: locale === 'tr' ? 'tr_TR' : isEn ? 'en_US' : 'ro_RO',
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
  const locale = localeRaw === 'tr' ? 'tr' : localeRaw === 'en' ? 'en' : 'ro';
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
