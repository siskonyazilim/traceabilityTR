'use client';
/* eslint-disable react/prop-types */

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageProvider';

export const ProjectCard = ({ project, currentPage = 1 }) => {
  const { locale, t } = useLanguage();
  const projectDetailsLabel = t('cards.projectDetails', 'Detalii proiect →').replace(/\s*→\s*$/, '');
  const detailBasePath = locale === 'en' ? '/reference-projects' : '/proiecte-de-referinta';

  const slugPrefixLogoMap = {
    'delphi-': '/Logos/delphi.svg',
    'candy-hoover-': '/Logos/candy-hoover-group-srl-vector-logo.svg',
    'pmi-': '/Logos/pmi.svg',
    'haier-': '/Logos/haier_europa_2025.svg',
    'mey-diageo-': '/Logos/mey-diageo.svg',
    'bsh-': '/Logos/BSH_Bosch_und_Siemens_Hausger%C3%A4te_logo.svg',
    'ajinomoto-': '/Logos/ajinomoto-global-seeklogo.svg',
    'stackpole-': '/Logos/Stackpole.webp',
    'orkide-': '/Logos/Orkide_Ya%C4%9F-removebg-preview.png',
    'phinia-': '/Logos/phinia.svg',
    'borgwarner-': '/Logos/borgwarner-seeklogo.svg',
    'turk-demir-dokum-': '/Logos/demirdokum-seeklogo.svg',
    'bosch-': '/Logos/Bosch-logo.svg',
    'nemak-': '/Logos/nemak.svg',
    'bomi-group-': '/Logos/Bomi.svg',
  };

  const exactSlugLogoMap = {
    'maxion-inci-celik-rfid-mold-tracking': '/Logos/maxion_inci.svg',
    'turk-tuborg-automatic-pallet-labeling-traceability': '/Logos/turk_tuborg.png',
    'bosch-trolley-tracking-rfid-gate': '/images/companies/boschFabrika.jpg',
  };

  const projectVisual = (() => {
    const explicitLogo = project.logo && !project.logo.includes('siskon-logo-header') ? project.logo : null;
    if (explicitLogo) {
      return explicitLogo;
    }

    const slug = project.slug || '';

    if (exactSlugLogoMap[slug]) {
      return exactSlugLogoMap[slug];
    }

    const matchedPrefix = Object.keys(slugPrefixLogoMap).find((prefix) => slug.startsWith(prefix));
    if (matchedPrefix) {
      return slugPrefixLogoMap[matchedPrefix];
    }

    return project.image || '/images/companies/fabrika.jpg';
  })();

  const isRasterImage = /\.(png|jpe?g|webp|gif|avif)$/i.test(projectVisual);
  const isNuhunAnkaraLogo = projectVisual.includes('/Logos/nuhun-ankara-makarnasi.webp');
  const isCandyHooverLogo = projectVisual.includes('/Logos/candy-hoover-group-srl-vector-logo.svg');
  const isTurkTuborgLogo = projectVisual.includes('/Logos/turk_tuborg.png');
  const isDemirdokumLogo = projectVisual.toLowerCase().includes('demirdokum');
  const isGroupeAtlanticLogo = projectVisual.toLowerCase().includes('atlantic');
  const isStackpoleLogo = projectVisual.toLowerCase().includes('stackpole');
  let projectVisualClass = 'object-contain p-5';

  if (isTurkTuborgLogo) {
    projectVisualClass = 'object-contain p-4 md:p-5';
  } else if (isCandyHooverLogo) {
    projectVisualClass = 'object-contain p-2 scale-110';
  } else if (isNuhunAnkaraLogo) {
    projectVisualClass = 'object-contain p-6 md:p-7';
  } else if (isDemirdokumLogo) {
    projectVisualClass = 'object-contain p-5 md:p-6';
  } else if (isGroupeAtlanticLogo) {
    projectVisualClass = 'object-contain p-5 md:p-6';
  } else if (isStackpoleLogo) {
    projectVisualClass = 'object-contain p-6 md:p-7';
  } else if (isRasterImage) {
    projectVisualClass = 'object-cover';
  }
  const detailHref = currentPage > 1
    ? {
        pathname: `${detailBasePath}/${project.slug}`,
        query: { fromPage: String(currentPage) },
      }
    : `${detailBasePath}/${project.slug}`;

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
            className={`w-full h-full ${projectVisualClass}`}
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

          <div className="mt-auto flex items-end justify-between gap-3">
            <span className="card-cta-mini">
              {projectDetailsLabel}
              <svg className="card-cta-mini-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            {project.referenceDateLabel && (
              <span className="rounded-full bg-primary-black/75 px-3 py-1 text-xs font-semibold text-white whitespace-nowrap">
                {project.referenceDateLabel}
              </span>
            )}
          </div>
        </div>
        </Link>
    </motion.article>
  );
};

export default ProjectCard;
