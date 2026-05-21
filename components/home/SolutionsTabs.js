'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import { solutions, products } from '../../data/solutions';

const iconMap = {
  'qr-code': '📱',
  'boxes': '📦',
  'lightbulb': '💡',
  'map-pin': '📍',
  'warehouse': '🏢',
  'link': '🔗',
};

const solutionIconMap = {
  'qr-code': '/solution/single_product_tracking.svg',
  'boxes': '/solution/batch_tracking.svg',
  'lightbulb': '/solution/data_flow_traceability.svg',
  'map-pin': '/solution/rtls_tracking.svg',
  'warehouse': '/solution/warehouse_management.svg',
  'link': '/solution/integration.svg',
};

export const SolutionsTabs = () => {
  const [activeTab, setActiveTab] = useState('solutions');

  return (
    <section id="traceability-solutions" className="py-16 md:py-24 bg-gradient-to-br from-white via-[#f9fbfd] to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-40"></div>

      <Container size="xl" className="relative z-10">
        <SectionHeader
          title="Soluții și Produse"
          subtitle="Gama completă de servicii și produse pentru trasabilitate"
        />

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('solutions')}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform ${
              activeTab === 'solutions'
                ? 'bg-secondary-blue text-white shadow-lg scale-105'
                : 'bg-white border border-gray-light text-inactive-gray hover:text-secondary-blue hover:border-secondary-blue hover:scale-105 shadow-soft'
            }`}
          >
            Soluții
          </button>
          <button
            id="products-tab-button"
            onClick={() => setActiveTab('products')}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform ${
              activeTab === 'products'
                ? 'bg-accent-blue text-white shadow-lg scale-105'
                : 'bg-white border border-gray-light text-inactive-gray hover:text-accent-blue hover:border-accent-blue hover:scale-105 shadow-soft'
            }`}
          >
            Produse
          </button>
        </div>

        {/* Solutions Tab */}
        {activeTab === 'solutions' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                className="bg-white rounded-2xl p-6 border border-gray-light shadow-soft shadow-soft-hover hover:border-accent-blue transition-all duration-300 group relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="mb-4 h-14 w-14 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 flex items-center justify-center overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                    {solutionIconMap[solution.icon] ? (
                      <img
                        src={solutionIconMap[solution.icon]}
                        alt={solution.title}
                        className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.querySelector('.fallback-solution-icon')?.classList.remove('hidden');
                        }}
                      />
                    ) : null}
                    <span className="fallback-solution-icon hidden text-2xl text-slate-blue">{iconMap[solution.icon]}</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary-black mb-2 group-hover:text-accent-blue transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-text text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="rounded-2xl overflow-hidden border border-gray-light shadow-soft shadow-soft-hover hover:border-accent-blue transition-all duration-300 bg-white group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Product Image */}
                <div className="h-32 flex items-center justify-center overflow-hidden relative bg-gradient-to-br from-[#eceff1] to-[#f5f7f9] border-b border-slate-200">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.querySelector('.fallback-product-icon')?.classList.remove('hidden');
                    }}
                  />
                  <div className="fallback-product-icon hidden absolute inset-0 bg-gradient-to-br from-[#eceff1] to-[#f5f7f9] flex items-center justify-center text-4xl">
                    🎯
                  </div>
                </div>
                <div className="bg-white p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-primary-black mb-2 group-hover:text-accent-blue transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-text text-sm mb-4">
                      {product.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </Container>
    </section>
  );
};

export default SolutionsTabs;
