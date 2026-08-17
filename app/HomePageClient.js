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

/* eslint-disable react/prop-types */
export default function HomePageClient({ cmsData, cmsSolutions, cmsSectors, cmsCapabilities, cmsReferenceProjects }) {
  return (
    <>
      {/* cmsData?.heroSlides varsa CMS'den, yoksa component kendi statik verisini kullanır */}
      <HeroSlider cmsSlides={cmsData?.heroSlides} />
      <FaqAccordion cmsFaqs={cmsData?.faqItems} />
      <SolutionsTabs cmsSolutions={cmsSolutions} cmsSectors={cmsSectors} />
      <TechnologyCapabilities cmsCapabilities={cmsCapabilities} />
      <ReferenceProjects cmsProjects={cmsReferenceProjects} />
      <StrategicPartners />
      <PerformanceMetrics cmsMetrics={cmsData?.performanceSection} />
      <BlogPreview />
      <HomeCta cmsCta={cmsData?.homeCta} />
    </>
  );
}
