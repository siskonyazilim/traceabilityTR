'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export const ProjectCard = ({ project }) => {
  const sectorColors = {
    'Automotive': 'bg-accent-blue',
    'Gıda': 'bg-accent-green',
    'Beyaz Eşya': 'bg-accent-yellow',
    'İlaç': 'bg-accent-red',
  };

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {/* Project Image */}
      <div className={`h-40 ${sectorColors[project.sector] || 'bg-accent-blue'} flex items-center justify-center overflow-hidden relative`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.querySelector('.fallback-project-icon')?.classList.remove('hidden');
          }}
        />
        <div className={`fallback-project-icon hidden absolute inset-0 flex items-center justify-center ${sectorColors[project.sector] || 'bg-accent-blue'}`}>
          <div className="text-white text-4xl">🏭</div>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-3">
          <span className={`text-xs font-semibold text-white px-3 py-1 rounded-full ${sectorColors[project.sector] || 'bg-accent-blue'}`}>
            {project.sector}
          </span>
        </div>
        
        <h3 className="text-lg font-bold text-primary-black mb-3 line-clamp-2 hover:text-accent-blue transition-colors">
          <Link href={`/portfolio/${project.slug}`}>
            {project.title}
          </Link>
        </h3>
        
        <p className="text-gray-text text-sm mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>
        
        <div className="grid grid-cols-3 gap-3 mb-4 pt-4 border-t">
          <div className="text-center">
            <div className="text-accent-blue font-bold text-lg">+{project.results.efficiency}</div>
            <div className="text-xs text-gray-text">Eficiență</div>
          </div>
          <div className="text-center">
            <div className="text-accent-green font-bold text-lg">-{project.results.defects}</div>
            <div className="text-xs text-gray-text">Defecte</div>
          </div>
          <div className="text-center">
            <div className="text-accent-yellow font-bold text-lg">+{project.results.productivity}</div>
            <div className="text-xs text-gray-text">Productivitate</div>
          </div>
        </div>
        
        <Link 
          href={`/portfolio/${project.slug}`}
          className="text-accent-blue font-semibold text-sm hover:underline"
        >
          Detalii proiect →
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
