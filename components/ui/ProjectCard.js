'use client';
/* eslint-disable react/prop-types */

import Link from 'next/link';
import { motion } from 'framer-motion';

export const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl border border-gray-light shadow-md hover:shadow-xl hover:border-accent-blue transition-all overflow-hidden h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {/* Project Image */}
      <div className="h-44 bg-[#f7f8fa] border-b border-gray-200 flex items-center justify-center overflow-hidden relative">
        <img
          src={project.logo || project.image}
          alt={project.title}
          className="w-full h-full object-contain p-5"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.querySelector('.fallback-project-icon')?.classList.remove('hidden');
          }}
        />
        <div className="fallback-project-icon hidden absolute inset-0 flex items-center justify-center bg-[#f7f8fa]">
          <div className="text-primary-black text-4xl">🏭</div>
        </div>
      </div>
      
      <div className="p-6 md:p-7 flex-1 flex flex-col">
        <div className="mb-3">
          <span className="text-xs font-semibold text-white px-3 py-1 rounded-full bg-slate-blue">
            {project.sector}
          </span>
        </div>
        
        <h3 className="text-lg md:text-xl font-bold text-primary-black mb-3 hover:text-accent-blue transition-colors">
          <Link href={`/portfolio/${project.slug}`}>
            {project.title}
          </Link>
        </h3>
        
        <p className="text-gray-text text-sm md:text-base leading-relaxed mb-5 flex-1">
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
          className="text-secondary-blue font-semibold text-sm hover:text-accent-blue"
        >
          Detalii proiect →
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
