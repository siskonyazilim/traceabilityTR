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

export const SolutionsTabs = () => {
  const [activeTab, setActiveTab] = useState('solutions');

  const colorMap = {
    'accent-blue': 'bg-accent-blue',
    'accent-green': 'bg-accent-green',
    'accent-yellow': 'bg-accent-yellow',
    'accent-red': 'bg-accent-red',
  };

  return (
    <section id="traceability-solutions" className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader
          title="Soluții și Produse"
          subtitle="Gama completă de servicii și produse pentru trasabilitate"
        />

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('solutions')}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              activeTab === 'solutions'
                ? 'bg-accent-blue text-white'
                : 'bg-gray-light text-primary-black hover:bg-opacity-80'
            }`}
          >
            Soluții
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              activeTab === 'products'
                ? 'bg-accent-green text-white'
                : 'bg-gray-light text-primary-black hover:bg-opacity-80'
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
                className="bg-gradient-to-br from-gray-light to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{iconMap[solution.icon]}</div>
                <h3 className="text-lg font-bold text-primary-black mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-text text-sm leading-relaxed">
                  {solution.description}
                </p>
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
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Product Image */}
                <div className={`${colorMap[product.color]} h-32 flex items-center justify-center overflow-hidden relative`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.querySelector('.fallback-product-icon')?.classList.remove('hidden');
                    }}
                  />
                  <div className={`fallback-product-icon hidden absolute inset-0 ${colorMap[product.color]} flex items-center justify-center text-4xl`}>
                    🎯
                  </div>
                </div>
                <div className="bg-white p-6">
                  <h3 className="text-lg font-bold text-primary-black mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-text text-sm mb-4">
                    {product.description}
                  </p>
                  <button className={`w-full ${colorMap[product.color]} text-white font-semibold py-2 rounded-full hover:opacity-90 transition-all`}>
                    {product.buttonText || 'Mai multe informații'}
                  </button>
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
