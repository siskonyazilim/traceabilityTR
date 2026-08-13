import Link from 'next/link';
import Button from './Button';

/* eslint-disable react/prop-types */
export default function PagePrimaryCta({
  title,
  subtitle,
  primaryHref,
  primaryLabel,
  className = 'mt-20 text-center',
}) {
  const isExternal = primaryHref?.startsWith('http://') || primaryHref?.startsWith('https://');
  return (
    <div className={className}>
      <h3 className="text-2xl md:text-3xl font-semibold text-primary-black mb-6">
        {title}
      </h3>
      <p className="text-gray-text text-xl mb-10 max-w-3xl mx-auto">
        {subtitle}
      </p>
      {isExternal ? (
        <Button as="a" href={primaryHref} target="_blank" rel="noopener noreferrer" variant="solid" size="lg" className="bg-secondary-blue hover:bg-accent-blue text-white">
          {primaryLabel}
        </Button>
      ) : (
        <Button as={Link} href={primaryHref} variant="solid" size="lg" className="bg-secondary-blue hover:bg-accent-blue text-white">
          {primaryLabel}
        </Button>
      )}
    </div>
  );
}
