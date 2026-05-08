import dynamic from 'next/dynamic';
import HeroSlider from '../components/home/HeroSlider';
import HomeCta from '../components/home/HomeCta';

const DeferredSection = () => (
  <section className="py-12" aria-hidden="true" />
);

const FaqAccordion = dynamic(() => import('../components/home/FaqAccordion'), {
  ssr: false,
  loading: () => <DeferredSection />,
});

const SolutionsTabs = dynamic(() => import('../components/home/SolutionsTabs'), {
  ssr: false,
  loading: () => <DeferredSection />,
});

const TechnologyCapabilities = dynamic(() => import('../components/home/TechnologyCapabilities'), {
  ssr: false,
  loading: () => <DeferredSection />,
});

const ReferenceProjects = dynamic(() => import('../components/home/ReferenceProjects'), {
  ssr: false,
  loading: () => <DeferredSection />,
});

const StrategicPartners = dynamic(() => import('../components/home/StrategicPartners'), {
  ssr: false,
  loading: () => <DeferredSection />,
});

const PerformanceMetrics = dynamic(() => import('../components/home/PerformanceMetrics'), {
  ssr: false,
  loading: () => <DeferredSection />,
});

const BlogPreview = dynamic(() => import('../components/home/BlogPreview'), {
  ssr: false,
  loading: () => <DeferredSection />,
});

export default function Home() {
  return (
    <>
      <HeroSlider />
      <FaqAccordion />
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
