'use client';

import Link from 'next/link';
import Container from '../../components/ui/Container';
import SectionHeader from '../../components/ui/SectionHeader';
import ProjectCard from '../../components/ui/ProjectCard';
import Button from '../../components/ui/Button';
import { referenceProjects } from '../../data/references';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <Container>
        <div className="mb-10 md:mb-12 rounded-3xl border border-slate-200 bg-[radial-gradient(circle_at_80%_20%,_rgba(0,181,247,0.18)_0%,_rgba(0,181,247,0)_35%),linear-gradient(140deg,_#0a0a2b_0%,_#0019d2_60%,_#00b5f7_100%)] px-6 py-8 md:px-10 md:py-11 text-white shadow-[0_18px_42px_rgba(10,10,43,0.18)]">
          <p className="text-xs md:text-sm uppercase tracking-[0.16em] text-white/80 font-semibold mb-3">Studii de caz</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.08] mb-4">Proiecte de referinta cu impact masurabil</h1>
          <p className="text-base md:text-lg text-white/90 max-w-3xl">Implementari reale in automotive, alimentar si productie industriala, cu indicatori clari de eficienta si calitate.</p>
        </div>

        <SectionHeader
          title="Selecție Proiecte"
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

        <div className="mt-12 text-center rounded-3xl border border-slate-200 bg-[#f8fafc] p-7 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-4">
            Vrei un proiect similar pentru compania ta?
          </h2>
          <p className="text-gray-text text-lg mb-8 max-w-2xl mx-auto">
            Putem adapta soluțiile din aceste referințe la procesele și obiectivele tale operaționale.
          </p>
          <div className="flex gap-5 justify-center flex-wrap">
            <Button as={Link} href="/contact" variant="solid" size="lg">
              Cere Ofertă
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
