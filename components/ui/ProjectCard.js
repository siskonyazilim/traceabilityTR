'use client';
/* eslint-disable react/prop-types */

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageProvider';

export const ProjectCard = ({ project, currentPage = 1 }) => {
  const { t } = useLanguage();
  const projectDetailsLabel = t('cards.projectDetails', 'Detalii proiect →').replace(/\s*→\s*$/, '');
  const projectVisual = (() => {
    const explicitLogo = project.logo && !project.logo.includes('siskon-logo-header') ? project.logo : null;
    if (explicitLogo) {
      return explicitLogo;
    }

    if (project.slug?.startsWith('delphi-')) {
      return '/Logos/delphi.svg';
    }
    if (project.slug?.startsWith('candy-hoover-')) {
      return '/Logos/Candy.svg';
    }
    if (project.slug?.startsWith('pmi-')) {
      return '/Logos/pmi.svg';
    }
    if (project.slug?.startsWith('haier-')) {
      return '/Logos/haier_europa_2025.svg';
    }
    if (project.slug?.startsWith('mey-diageo-')) {
      return '/Logos/mey-diageo.svg';
    }
    if (project.slug?.startsWith('bsh-')) {
      return '/Logos/BSH_Bosch_und_Siemens_Hausger%C3%A4te_logo.svg';
    }
    if (project.slug?.startsWith('ajinomoto-')) {
      return '/Logos/ajinomoto-global-seeklogo.svg';
    }
    if (project.slug?.startsWith('stackpole-')) {
      return '/Logos/Stackpole.svg';
    }
    if (project.slug?.startsWith('orkide-')) {
      return '/Logos/Orkide_Ya%C4%9F-removebg-preview.png';
    }
    if (project.slug?.startsWith('phinia-')) {
      return '/Logos/phinia.svg';
    }
    if (project.slug?.startsWith('borgwarner-')) {
      return '/Logos/borgwarner-seeklogo.svg';
    }
    if (project.slug?.startsWith('turk-demir-dokum-')) {
      return '/Logos/demirdokum-seeklogo.svg';
    }
    if (project.slug?.startsWith('bosch-')) {
      return '/Logos/Bosch-logo.svg';
    }
    if (project.slug?.startsWith('nemak-')) {
      return '/Logos/nemak.svg';
    }
    if (project.slug === 'maxion-inci-celik-rfid-mold-tracking') {
      return '/Logos/maxion_inci.svg';
    }
    if (project.slug === 'turk-tuborg-automatic-pallet-labeling-traceability') {
      return '/Logos/turk_tuborg.png';
    }
    if (project.slug === 'bosch-trolley-tracking-rfid-gate') {
      return '/images/companies/boschFabrika.jpg';
    }
    if (project.slug?.startsWith('bomi-group-')) {
      return '/Logos/Bomi.svg';
    }

    return project.image || '/images/companies/fabrika.jpg';
  })();

  const isRasterImage = /\.(png|jpe?g|webp|gif|avif)$/i.test(projectVisual);
  const detailHref = currentPage > 1
    ? {
        pathname: `/portfolio/${project.slug}`,
        query: { fromPage: String(currentPage) },
      }
    : `/portfolio/${project.slug}`;

  return (
    <motion.article
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <Link
        href={detailHref}
        className="group bg-white rounded-2xl border border-gray-light shadow-md hover:shadow-xl hover:border-accent-blue transition-all overflow-hidden h-full flex flex-col"
      >
        {/* Project Image */}
        <div className="h-44 flex items-center justify-center overflow-hidden relative">
          <img
            src={projectVisual}
            alt={project.title}
            className={`w-full h-full ${isRasterImage ? 'object-cover' : 'object-contain p-5'}`}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.querySelector('.fallback-project-icon')?.classList.remove('hidden');
            }}
          />
          <div className="fallback-project-icon hidden absolute inset-0 flex items-center justify-center bg-white">
            <div className="text-primary-black text-4xl">🏭</div>
          </div>
        </div>

        <div className="p-6 md:p-7 flex-1 flex flex-col">
          <div className="mb-3">
            <span className="text-xs font-semibold text-white px-3 py-1 rounded-full bg-slate-blue">
              {project.sector}
            </span>
          </div>

          <h3 className="text-lg md:text-xl font-bold text-primary-black mb-3 group-hover:text-accent-blue transition-colors min-h-[3.2rem]">
            {project.title}
          </h3>

          <p className="text-gray-text text-sm md:text-base leading-relaxed mb-5 flex-1 max-w-none">
            {project.description}
          </p>

          <span className="card-cta-mini mt-auto">
            {projectDetailsLabel}
            <svg className="card-cta-mini-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
        </Link>
    </motion.article>
  );
};

export default ProjectCard;
