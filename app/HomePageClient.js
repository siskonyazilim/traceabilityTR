'use client';

import dynamic from 'next/dynamic';
import HeroSlider from '../components/home/HeroSlider';
import HomeCta from '../components/home/HomeCta';
import FaqAccordion from '../components/home/FaqAccordion';

const DeferredSection = () => (
  <section className="py-12" aria-hidden="true" />
);

const SolutionsTabs = dynamic(() => import('../components/home/SolutionsTabs'), {
  loading: () => <DeferredSection />,
});

const TechnologyCapabilities = dynamic(() => import('../components/home/TechnologyCapabilities'), {
  ssr: false,
  loading: () => <DeferredSection />,
});

const ReferenceProjects = dynamic(() => import('../components/home/ReferenceProjects'), {
  loading: () => <DeferredSection />,
});

const StrategicPartners = dynamic(() => import('../components/home/StrategicPartners'), {
  loading: () => <DeferredSection />,
});

const PerformanceMetrics = dynamic(() => import('../components/home/PerformanceMetrics'), {
  loading: () => <DeferredSection />,
});

const BlogPreview = dynamic(() => import('../components/home/BlogPreview'), {
  loading: () => <DeferredSection />,
});

import { useEffect } from 'react';

/* eslint-disable react/prop-types */
export default function HomePageClient({
  cmsData,
  cmsSolutions,
  cmsSectors,
  cmsCapabilities,
  cmsReferenceProjects,
  cmsPartners,
  cmsBlogPosts,
}) {
  useEffect(() => {
    const handleInitialHash = () => {
      const hash = globalThis.location?.hash;
      if (!hash) return;

      const cleanId = hash.replace(/^#/, '');
      const aliasMap = {
        'products-tab': 'traceability-solutions',
        'sektorler': 'traceability-solutions',
        'products': 'traceability-solutions',
        'solutions-tab': 'traceability-solutions',
        'solutions': 'traceability-solutions',
        'cozumler': 'traceability-solutions',
        'referans-projeler': 'reference-projects',
        'proiecte-de-referinta': 'reference-projects',
        'portfolio': 'reference-projects',
        'cozum-ortaklari': 'our-strategic-solution-partners',
        'solution-partners': 'our-strategic-solution-partners',
        'parteneri-de-solutii': 'our-strategic-solution-partners',
        'partners': 'our-strategic-solution-partners',
      };

      if (cleanId === 'products-tab' || cleanId === 'sektorler' || cleanId === 'products') {
        globalThis.dispatchEvent(new CustomEvent('open-solutions-tab', { detail: { tab: 'products' } }));
      } else if (cleanId === 'solutions-tab' || cleanId === 'solutions' || cleanId === 'cozumler') {
        globalThis.dispatchEvent(new CustomEvent('open-solutions-tab', { detail: { tab: 'solutions' } }));
      }

      const targetId = aliasMap[cleanId] || cleanId;

      const tryScroll = (attempts = 0) => {
        const element = document.getElementById(targetId) || document.getElementById(cleanId);
        if (element) {
          const y = element.getBoundingClientRect().top + globalThis.scrollY - 92;
          globalThis.scrollTo({ top: y, behavior: 'smooth' });
        } else if (attempts < 15) {
          setTimeout(() => tryScroll(attempts + 1), 100);
        }
      };

      tryScroll();
    };

    handleInitialHash();
    globalThis.addEventListener('hashchange', handleInitialHash);
    return () => globalThis.removeEventListener('hashchange', handleInitialHash);
  }, []);

  return (
    <>
      {/* cmsData?.heroSlides varsa CMS'den, yoksa component kendi statik verisini kullanır */}
      <HeroSlider cmsSlides={cmsData?.heroSlides} />
      <FaqAccordion cmsFaqs={cmsData?.faqItems} />
      <SolutionsTabs cmsSolutions={cmsSolutions} cmsSectors={cmsSectors} />
      <TechnologyCapabilities cmsCapabilities={cmsCapabilities} />
      <ReferenceProjects cmsProjects={cmsReferenceProjects} />
      <StrategicPartners cmsPartners={cmsPartners} />
      <PerformanceMetrics cmsMetrics={cmsData?.performanceSection} />
      <BlogPreview cmsPosts={cmsBlogPosts} />
      <HomeCta cmsCta={cmsData?.homeCta} />
    </>
  );
}
