'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import { useLanguage } from '../i18n/LanguageProvider';
import { solutions, products } from '../../data/solutions';
import { localizeProducts, localizeSolutions } from '../../lib/i18n/contentLocalization';

const iconMap = {
  'qr-code': '📱',
  'boxes': '📦',
  'lightbulb': '💡',
  'map-pin': '📍',
  'warehouse': '🏢',
  'link': '🔗',
};

const solutionFontAwesomeMap = {
  'qr-code': 'fa fa-qrcode fa-5x fa-fw',
  'boxes': 'fa fa-barcode fa-5x fa-fw',
  'lightbulb': 'fa fa-crosshairs fa-5x fa-fw',
  'map-pin': 'fa fa-clock-o fa-5x fa-fw',
  'warehouse': 'fa fa-cubes fa-5x fa-fw',
  'link': 'fa fa-cogs fa-5x fa-fw',
};

export const SolutionsTabs = () => {
  const [activeTab, setActiveTab] = useState('solutions');
  const searchParams = useSearchParams();
  const { locale, t } = useLanguage();
  const localizedSolutions = useMemo(() => localizeSolutions(solutions, locale), [locale]);
  const localizedProducts = useMemo(() => localizeProducts(products, locale), [locale]);

  useEffect(() => {
    const tabFromQuery = searchParams.get('tab');
    if (tabFromQuery === 'solutions' || tabFromQuery === 'products') {
      setActiveTab(tabFromQuery);
    }
  }, [searchParams]);

  useEffect(() => {
    const handleOpenSolutionsTab = (event) => {
      const tab = event?.detail?.tab;
      if (tab === 'solutions' || tab === 'products') {
        setActiveTab(tab);
      }
    };

    globalThis.addEventListener('open-solutions-tab', handleOpenSolutionsTab);
    return () => globalThis.removeEventListener('open-solutions-tab', handleOpenSolutionsTab);
  }, []);

  return (
    <section id="traceability-solutions" className="py-16 md:py-24 bg-gradient-to-br from-white via-[#f9fbfd] to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-40"></div>

      <Container size="xl" className="relative z-10">
        <SectionHeader
          title={t('sections.solutionsProductsTitle', 'Soluții și Produse')}
          subtitle={t('sections.solutionsProductsSubtitle', 'Gama completă de servicii și produse pentru trasabilitate')}
        />

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 md:mb-12">
          <button
            onClick={() => setActiveTab('solutions')}
            className={`px-5 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
              activeTab === 'solutions'
                ? 'bg-secondary-blue text-white shadow-lg'
                : 'bg-white border border-gray-light text-inactive-gray hover:text-secondary-blue hover:border-secondary-blue shadow-soft'
            }`}
          >
            {t('sections.solutionsTab', 'Soluții')}
          </button>
          <button
            id="products-tab-button"
            onClick={() => setActiveTab('products')}
            className={`px-5 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
              activeTab === 'products'
                ? 'bg-accent-blue text-white shadow-lg'
                : 'bg-white border border-gray-light text-inactive-gray hover:text-accent-blue hover:border-accent-blue shadow-soft'
            }`}
          >
            {t('sections.productsTab', 'Produse')}
          </button>
        </div>

        {/* Solutions Tab */}
        {activeTab === 'solutions' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {localizedSolutions.map((solution) => (
              <div
                key={solution.id}
                className="bg-white rounded-2xl p-6 border border-gray-light shadow-soft shadow-soft-hover hover:border-accent-blue transition-all duration-300 group relative overflow-hidden h-full flex flex-col"
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 flex h-full flex-col items-center text-center">
                  <div className="mb-6 text-slate-blue leading-none">
                    <i
                      className={solutionFontAwesomeMap[solution.icon] || 'fa fa-cube fa-5x fa-fw'}
                      aria-hidden="true"
                    ></i>
                    <span className="fallback-solution-icon hidden text-6xl text-slate-blue">{iconMap[solution.icon]}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-black mb-3 group-hover:text-accent-blue transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-text text-sm leading-relaxed flex-1">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localizedProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl border border-gray-light shadow-soft shadow-soft-hover hover:border-accent-blue transition-all duration-300 bg-white group h-full relative overflow-hidden p-5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="h-28 w-full flex items-center justify-center overflow-hidden mb-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-24 w-auto object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.querySelector('.fallback-product-icon')?.classList.remove('hidden');
                      }}
                    />
                    <div className="fallback-product-icon hidden absolute inset-0 flex items-center justify-center text-5xl">
                      🎯
                    </div>
                  </div>
                  <div className="flex-1 h-full flex flex-col min-w-0">
                    <h3 className="text-lg font-bold text-primary-black mb-2 group-hover:text-accent-blue transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-text text-sm flex-1">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default SolutionsTabs;
