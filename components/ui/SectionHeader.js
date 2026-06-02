'use client';
/* eslint-disable react/prop-types */

export const SectionHeader = ({ 
  title, 
  subtitle, 
  centered = true,
  className = ''
}) => {
  return (
    <div 
      className={`${centered ? 'text-center' : ''} mb-12 ${className}`}
    >
      <h2 className="text-section font-bold text-primary-black mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-body text-gray-text max-w-4xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
