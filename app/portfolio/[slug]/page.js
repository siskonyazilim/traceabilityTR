import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '../../../components/ui/Container';
import Button from '../../../components/ui/Button';
import { referenceProjects } from '../../../data/references';
import { sanitizeRichText } from '../../../lib/sanitizeRichText';
import { FiArrowLeft } from 'react-icons/fi';
/* eslint-disable react/prop-types */

export default function PortfolioDetailPage({ params }) {
  const { slug: rawSlug } = params;
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
  const project = referenceProjects.find((p) => p.slug === slug);

  if (!project) notFound();

  const relatedProjects = referenceProjects
    .filter((p) => p.sector === project.sector && p.id !== project.id)
    .slice(0, 3);
  const safeContent = sanitizeRichText(project.content);

  const featuredImage = project.heroImage
    || (project.image?.includes('/Logos/') ? '/resmi/Factory.jpg' : project.image);

  const sectorColors = {
    'Automotive': 'from-accent-blue',
    'Gıda': 'from-accent-green',
    'Beyaz Eşya': 'from-accent-yellow',
    'İlaç': 'from-accent-red',
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-24 pb-16">
      <Container>
        {/* Back Button */}
        <Link href="/proiecte-de-referinta" className="inline-flex items-center gap-2 text-secondary-blue hover:text-accent-blue transition-colors mb-8 font-semibold">
          <FiArrowLeft /> Înapoi la Proiecte
        </Link>

        <article className="max-w-5xl mx-auto">
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
            <h2 className="text-2xl font-bold text-primary-black mb-4">
              Tehnologii Utilizate
            </h2>
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
              <h2 className="text-2xl font-bold text-primary-black mb-4">Galerie Proiect</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery.map((image) => (
                  <div key={`${project.id}-${image}`} className="h-56 md:h-64 rounded-xl overflow-hidden border border-gray-200 bg-slate-100">
                    <img src={image} alt={`${project.title} galerie`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          <div className="bg-gradient-to-r from-accent-blue to-accent-green rounded-2xl p-8 text-white mb-12 shadow-[0_14px_34px_rgba(0,130,210,0.24)]">
            <h2 className="text-2xl font-bold mb-6">Rezultate</h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">+{project.results.efficiency}</div>
                <p className="text-white text-opacity-90">Eficiență</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">-{project.results.defects}</div>
                <p className="text-white text-opacity-90">Defecte</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">+{project.results.productivity}</div>
                <p className="text-white text-opacity-90">Productivitate</p>
              </div>
            </div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="mt-16 pt-12 border-t border-gray-light">
              <h2 className="text-3xl font-bold text-primary-black mb-8">
                Proiecte Înrudite
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
            <h3 className="text-4xl font-bold text-primary-black mb-5">
              Vrei să transformi și tu procesele de producție?
            </h3>
            <p className="text-gray-text text-lg mb-8 max-w-2xl mx-auto">
              Contactează-ne pentru a discuta cum putem implementa o soluție similară în afacerea ta.
            </p>
            <div className="flex gap-5 justify-center flex-wrap">
              <Button as={Link} href="/contact" variant="solid" size="lg">
                Cere Ofertă
              </Button>
              <Button as={Link} href="/proiecte-de-referinta" variant="outline" size="lg">
                Vezi Toate Referințele
              </Button>
            </div>
          </div>
        </article>
      </Container>
    </div>
  );
}
