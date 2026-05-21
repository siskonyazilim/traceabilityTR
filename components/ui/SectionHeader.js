'use client';
/* eslint-disable react/prop-types */

import { motion } from 'framer-motion';

export const SectionHeader = ({ 
  title, 
  subtitle, 
  centered = true,
  className = ''
}) => {
  return (
    <motion.div 
      className={`${centered ? 'text-center' : ''} mb-12 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <h2 className="text-section font-bold text-primary-black mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-body text-gray-text max-w-4xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
