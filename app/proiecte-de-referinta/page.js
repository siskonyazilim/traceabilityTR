'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '../../components/ui/Container';
import SectionHeader from '../../components/ui/SectionHeader';
import ProjectCard from '../../components/ui/ProjectCard';
import Button from '../../components/ui/Button';
import { referenceProjects } from '../../data/references';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-24 pb-16">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16 rounded-3xl border-2 border-slate-200 bg-gradient-to-br from-primary-black via-secondary-blue to-accent-blue px-8 py-12 md:px-12 md:py-16 text-white shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-blue/20 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/80 font-bold mb-4">Studii de caz</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">Proiecte de referință cu impact măsurabil</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl">Implementări reale în automotive, alimentar și producție industrială, cu indicatori clari de eficiență și calitate.</p>
          </div>
        </motion.div>

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

        <div className="mt-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-6">
            Vrei un proiect similar pentru compania ta?
          </h2>
          <p className="text-gray-text text-xl mb-10 max-w-3xl mx-auto">
            Putem adapta soluțiile din aceste referințe la procesele și obiectivele tale operaționale.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Button as={Link} href="/contact" variant="solid" size="lg" className="bg-secondary-blue hover:bg-accent-blue text-white">
              Cere Ofertă
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
