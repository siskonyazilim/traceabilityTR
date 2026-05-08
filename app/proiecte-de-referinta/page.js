'use client';

import Container from '../../components/ui/Container';
import SectionHeader from '../../components/ui/SectionHeader';
import ProjectCard from '../../components/ui/ProjectCard';
import { referenceProjects } from '../../data/references';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <Container>
        <SectionHeader
          title="Proiecte de Referință"
          subtitle="Proiecte realizate cu succes pentru clienți din diverse industrii"
        />

        {/* Projects Grid */}
        {referenceProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-7">
            {referenceProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-text text-lg">
              Nu am găsit proiecte.
            </p>
          </div>
        )}

        {/* Results Count */}
        <div className="mt-12 text-center text-gray-text">
          <p>Total: {referenceProjects.length} proiecte</p>
        </div>
      </Container>
    </div>
  );
}
