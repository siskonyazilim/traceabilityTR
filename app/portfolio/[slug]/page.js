import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '../../../components/ui/Container';
import ProjectCard from '../../../components/ui/ProjectCard';
import Button from '../../../components/ui/Button';
import { referenceProjects } from '../../../data/references';
import { FiArrowLeft } from 'react-icons/fi';

export default function PortfolioDetailPage({ params }) {
  const { slug: rawSlug } = params;
  const legacySlugMap = {
    'maxion-inci-celik-trasabilitatea-paletilor': 'maxion-inci-celik',
    'abalioglu-yag-trasabilitate': 'abalıoglu-yag',
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

  const sectorColors = {
    'Automotive': 'from-accent-blue',
    'Gıda': 'from-accent-green',
    'Beyaz Eşya': 'from-accent-yellow',
    'İlaç': 'from-accent-red',
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <Container>
        {/* Back Button */}
        <Link href="/proiecte-de-referinta" className="inline-flex items-center gap-2 text-accent-blue hover:underline mb-8">
          <FiArrowLeft /> Înapoi la Proiecte
        </Link>

        <article className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-white uppercase bg-accent-blue px-3 py-1 rounded-full">
                {project.sector}
              </span>
            </div>

            <h1 className="text-5xl font-bold text-primary-black mb-4">
              {project.title}
            </h1>

            <p className="text-lg text-gray-text mb-6">
              {project.description}
            </p>
          </div>

          {/* Featured Image */}
          <div className={`w-full h-96 bg-gradient-to-br ${sectorColors[project.sector] || 'from-accent-blue'} to-dark-bg rounded-2xl flex items-center justify-center mb-8 text-white text-6xl overflow-hidden relative`}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Technologies */}
          <div className="mb-8 pb-8 border-b border-gray-light">
            <h2 className="text-2xl font-bold text-primary-black mb-4">
              Tehnologii Utilizate
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-accent-blue bg-opacity-20 text-accent-blue rounded-full text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div
              dangerouslySetInnerHTML={{ __html: project.content }}
              className="text-gray-text leading-relaxed space-y-4"
            />
          </div>

          {/* Results */}
          <div className="bg-gradient-to-r from-accent-blue to-accent-green rounded-2xl p-8 text-white mb-12">
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
                  <ProjectCard key={relatedProject.id} project={relatedProject} />
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-accent-blue to-accent-green rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Vrei să transformi și tu procesele de producție?
            </h3>
            <p className="mb-6 text-white text-opacity-90">
              Contactează-ne pentru a discuta cum putem implementa o soluție similară în afacerea ta.
            </p>
            <Link href="/contact">
              <Button variant="solid" size="lg" className="bg-white text-accent-blue hover:bg-opacity-90">
                Cere Ofertă
              </Button>
            </Link>
          </div>
        </article>
      </Container>
    </div>
  );
}
