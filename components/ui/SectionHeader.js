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
      className={`${centered ? 'text-center' : ''} mb-10 md:mb-16 ${className}`}
    >
      <h2 className="text-[clamp(1.375rem,1.1rem+0.9vw,2rem)] font-semibold tracking-tight leading-[1.15] text-primary-black mb-5">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[clamp(1rem,0.97rem+0.22vw,1.125rem)] leading-7 text-gray-text max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
