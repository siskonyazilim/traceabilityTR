'use client';

import { useState, useMemo } from 'react';
import Container from '../../components/ui/Container';
import SectionHeader from '../../components/ui/SectionHeader';
import ProjectCard from '../../components/ui/ProjectCard';
import { referenceProjects } from '../../data/references';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  const [selectedSector, setSelectedSector] = useState('all');

  const sectors = ['all', ...new Set(referenceProjects.map((p) => p.sector))];

  const filteredProjects = useMemo(() => {
    return referenceProjects.filter(
      (project) =>
        selectedSector === 'all' || project.sector === selectedSector
    );
  }, [selectedSector]);

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <Container>
        <SectionHeader
          title="Proiecte de Referință"
          subtitle="Proiecte realizate cu succes pentru clienți din diverse industrii"
        />

        {/* Sector Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {sectors.map((sector) => (
            <button
              key={sector}
              onClick={() => setSelectedSector(sector)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedSector === sector
                  ? 'bg-accent-blue text-white'
                  : 'bg-gray-light text-primary-black hover:bg-opacity-80'
              }`}
            >
              {sector === 'all' ? 'Toate Industriile' : sector}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-text text-lg">
              Nu am găsit proiecte pentru acest sector.
            </p>
          </motion.div>
        )}

        {/* Results Count */}
        <div className="mt-12 text-center text-gray-text">
          <p>Total: {filteredProjects.length} proiecte</p>
        </div>
      </Container>
    </div>
  );
}
