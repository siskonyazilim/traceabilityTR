import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '../../../components/ui/Container';
import Button from '../../../components/ui/Button';
import { referenceProjects } from '../../../data/references';
import { sanitizeRichText } from '../../../lib/sanitizeRichText';
import { IconArrowLeft } from '../../../components/ui/Icons';
import { cookies } from 'next/headers';
import { localizeReferenceProjects } from '../../../lib/i18n/contentLocalization';
/* eslint-disable react/prop-types */

export async function generateMetadata({ params }) {
  const cookieStore = await cookies();
  const locale = cookieStore.get('locale')?.value === 'en' ? 'en' : 'ro';
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
      title: isEn ? 'Project Not Found | Traceability' : 'Proiect Negăsit | Traceability',
      description: isEn
        ? 'The requested reference project could not be found. Browse other industrial traceability implementations by Traceability.'
        : 'Proiectul de referință solicitat nu a fost găsit. Descoperă alte implementări industriale de trasabilitate realizate de Traceability.',
    };
  }

  const title = `${project.title} | ${isEn ? 'Reference Project' : 'Proiect de Referință'} | Traceability`;
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
      locale: isEn ? 'en_US' : 'ro_RO',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function PortfolioDetailPage({ params }) {
  const cookieStore = await cookies();
  const locale = cookieStore.get('locale')?.value === 'en' ? 'en' : 'ro';
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
  const project = localizedProjects.find((p) => p.slug === slug);

  if (!project) notFound();

  const relatedProjects = localizedProjects
    .filter((p) => p.sector === project.sector && p.id !== project.id)
    .slice(0, 3);
  const safeContent = sanitizeRichText(project.content);

  const featuredImage = project.heroImage
    || (project.image?.includes('/Logos/') ? '/resmi/Factory.jpg' : project.image);

  const sectorColors = {
    'Industria auto': 'from-accent-blue',
    'Automotive': 'from-accent-blue',
    'Alimente': 'from-accent-green',
    'Food': 'from-accent-green',
    'Electronice': 'from-accent-yellow',
    'Farmaceutic': 'from-accent-red',
    'Tobacco': 'from-accent-red',
    'Tutun': 'from-accent-red',
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-24 pb-16">
      <Container size="xl">
        {/* Back Button */}
        <Link href="/proiecte-de-referinta" className="inline-flex items-center gap-2 text-secondary-blue hover:text-accent-blue transition-colors mb-8 font-semibold">
          <IconArrowLeft /> {locale === 'en' ? 'Back to Projects' : 'Inapoi la Proiecte'}
        </Link>

        <article className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-9 shadow-[0_14px_36px_rgba(10,10,43,0.08)]">
            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_320px] gap-8 items-start mb-4">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-white uppercase bg-accent-blue px-3 py-1 rounded-full">
                    {project.sector}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-primary-black mb-4">
                  {project.title}
                </h1>

                <p className="text-lg text-gray-text mb-2">
                  {project.description}
                </p>
              </div>

              {project.logo && (
                <div className="w-full h-44 md:h-56 rounded-3xl border border-gray-200 bg-white flex items-center justify-center p-8 shadow-md">
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Featured Image */}
          <div className={`w-full h-72 md:h-96 bg-gradient-to-br ${sectorColors[project.sector] || 'from-accent-blue'} to-dark-bg rounded-2xl flex items-center justify-center mb-8 text-white text-6xl overflow-hidden relative border border-slate-200`}>
            <img
              src={featuredImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Technologies */}
          <div className="mb-8 pb-8 border-b border-gray-light rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
              <h2 className="text-2xl font-bold text-primary-black mb-4">{locale === 'en' ? 'Technologies Used' : 'Tehnologii Utilizate'}</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={`${project.id}-${tech}`}
                  className="px-4 py-2 bg-accent-blue bg-opacity-20 text-accent-blue rounded-full text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12 rounded-3xl border border-slate-200 bg-white p-6 md:p-9 shadow-[0_10px_28px_rgba(10,10,43,0.06)]">
            <div
              dangerouslySetInnerHTML={{ __html: safeContent }}
              className="text-gray-text leading-relaxed space-y-4"
            />
          </div>

          {Array.isArray(project.gallery) && project.gallery.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary-black mb-4">{locale === 'en' ? 'Project Gallery' : 'Galerie Proiect'}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery.map((image) => (
                  <div key={`${project.id}-${image}`} className="h-56 md:h-64 rounded-xl overflow-hidden border border-gray-200 bg-slate-100">
                    <img src={image} alt={`${project.title} galerie`} width="1200" height="700" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          <div className="bg-primary-black rounded-2xl p-8 text-white mb-12 shadow-[0_14px_34px_rgba(10,10,43,0.3)]">
            <h2 className="text-2xl font-bold mb-6">{locale === 'en' ? 'Results' : 'Rezultate'}</h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">+{project.results.efficiency}</div>
                <p className="text-white text-opacity-90">{locale === 'en' ? 'Efficiency' : 'Eficienta'}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">-{project.results.defects}</div>
                <p className="text-white text-opacity-90">{locale === 'en' ? 'Defects' : 'Defecte'}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">+{project.results.productivity}</div>
                <p className="text-white text-opacity-90">{locale === 'en' ? 'Productivity' : 'Productivitate'}</p>
              </div>
            </div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="mt-16 pt-12 border-t border-gray-light">
              <h2 className="text-3xl font-bold text-primary-black mb-8">
                {locale === 'en' ? 'Related Projects' : 'Proiecte Inrudite'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    href={`/portfolio/${relatedProject.slug}`}
                    className="group rounded-2xl border border-gray-200 bg-white p-5 hover:border-accent-blue hover:shadow-md transition-all"
                  >
                    <div className="h-32 rounded-xl border border-gray-200 bg-[#f7f8fa] flex items-center justify-center p-4 mb-4">
                      <img
                        src={relatedProject.logo || relatedProject.image}
                        alt={relatedProject.title}
                        width="320"
                        height="128"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-primary-black group-hover:text-accent-blue transition-colors leading-snug">
                      {relatedProject.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-20 text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-primary-black mb-6">
              {locale === 'en' ? 'Want to transform your production processes too?' : 'Vrei sa transformi si tu procesele de productie?'}
            </h3>
            <p className="text-gray-text text-xl mb-10 max-w-3xl mx-auto">
              {locale === 'en' ? 'Contact us to discuss how we can implement a similar solution in your business.' : 'Contacteaza-ne pentru a discuta cum putem implementa o solutie similara in afacerea ta.'}
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <Button as={Link} href="/contact" variant="solid" size="lg" className="bg-secondary-blue hover:bg-accent-blue text-white">
                {locale === 'en' ? 'Request Proposal' : 'Cere Oferta'}
              </Button>
              <Button as={Link} href="/proiecte-de-referinta" variant="outline" size="lg" className="border-2 border-primary-black text-primary-black hover:bg-primary-black hover:text-white">
                {locale === 'en' ? 'View All References' : 'Vezi Toate Referintele'}
              </Button>
            </div>
          </div>
        </article>
      </Container>
    </div>
  );
}
