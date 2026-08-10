'use client';

import dynamic from 'next/dynamic';
import HeroSlider from '../components/home/HeroSlider';
import HomeCta from '../components/home/HomeCta';

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

export default function HomePageClient() {
  return (
    <>
      <HeroSlider />
      <SolutionsTabs />
      <TechnologyCapabilities />
      <ReferenceProjects />
      <StrategicPartners />
      <PerformanceMetrics />
      <BlogPreview />
      <HomeCta />
    </>
  );
}
