'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import { useLanguage } from '../i18n/LanguageProvider';
import { solutions, products } from '../../data/solutions';
import { localizeProducts, localizeSolutions } from '../../lib/i18n/contentLocalization';
import { toLocalePath } from '../../lib/i18n/dictionaries';

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

function getCardPreviewText(item, maxLength = 210) {
  const source = item?.detail || item?.summary || item?.description || '';
  const normalized = String(source).replace(/\s+/g, ' ').trim();

  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, maxLength).trim()}...`;
}

export const SolutionsTabs = () => {
  const [activeTab, setActiveTab] = useState('solutions');
  const searchParams = useSearchParams();
  const { locale, t } = useLanguage();
  const localizedSolutions = useMemo(() => localizeSolutions(solutions, locale), [locale]);
  const localizedProducts = useMemo(() => localizeProducts(products, locale), [locale]);
  const catalogBasePath = '/catalog';
  const detailChipLabel = t('sections.detailChip', 'Detalii').split('→')[0].trim();
  const detailChipProductsLabel = t('sections.detailChipProducts', detailChipLabel).split('→')[0].trim();

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
    <section id="traceability-solutions" className="section-block bg-gradient-to-br from-white via-[#f9fbfd] to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-40"></div>

      <Container size="xl" className="relative z-10">
        <SectionHeader
          title={t('sections.solutionsProductsTitle', 'Soluții și Produse')}
          subtitle={t('sections.solutionsProductsSubtitle', 'Gama completă de servicii și produse pentru trasabilitate')}
        />

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" role="tablist" aria-label={t('sections.solutionsProductsTitle', 'Soluții și Produse')}>
          <button
            type="button"
            onClick={() => setActiveTab('solutions')}
            role="tab"
            id="solutions-tab"
            aria-selected={activeTab === 'solutions'}
            aria-controls="solutions-panel"
            className={`px-5 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
              activeTab === 'solutions'
                ? 'bg-secondary-blue text-white shadow-lg'
                : 'bg-white border border-gray-light text-inactive-gray hover:text-secondary-blue hover:border-secondary-blue shadow-soft'
            }`}
          >
            {t('sections.solutionsTab', 'Soluții')}
          </button>
          <button
            type="button"
            id="products-tab-button"
            onClick={() => setActiveTab('products')}
            role="tab"
            aria-selected={activeTab === 'products'}
            aria-controls="products-panel"
            aria-labelledby="products-tab-button"
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
          <div id="solutions-panel" role="tabpanel" aria-labelledby="solutions-tab" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {localizedSolutions.map((solution) => (
              <Link
                key={solution.id}
                href={toLocalePath(`${catalogBasePath}/solutions/${solution.slug}`, locale)}
                className="bg-gradient-to-b from-white to-slate-50/55 rounded-2xl p-6 md:p-7 border border-slate-200 shadow-soft shadow-soft-hover hover:border-accent-blue transition-all duration-300 group relative overflow-hidden h-full flex flex-col"
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-secondary-blue to-accent-blue"></div>

                <div className="relative z-10 flex h-full flex-col items-center text-center">
                  <div className="mb-5 text-slate-blue leading-none">
                    <i
                      className={solutionFontAwesomeMap[solution.icon] || 'fa fa-cube fa-4x fa-fw'}
                      aria-hidden="true"
                    ></i>
                    <span className="fallback-solution-icon hidden text-6xl text-slate-blue">{iconMap[solution.icon]}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary-black mb-3 group-hover:text-accent-blue transition-colors min-h-[3.5rem] flex items-center">
                    {solution.title}
                  </h3>
                  <p className="text-gray-text text-sm leading-7 flex-1 max-w-[42ch]">
                    {getCardPreviewText(solution, 220)}
                  </p>
                  <span className="card-cta-mini mt-4">
                    {detailChipLabel}
                    <svg className="card-cta-mini-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div id="products-panel" role="tabpanel" aria-labelledby="products-tab-button" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
            {localizedProducts.map((product) => (
              <Link
                key={product.id}
                href={toLocalePath(`${catalogBasePath}/products/${product.slug}`, locale)}
                className="rounded-2xl border border-slate-200 shadow-soft shadow-soft-hover hover:border-accent-blue transition-all duration-300 bg-white group h-full relative overflow-hidden p-5 md:p-6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 h-full flex flex-col items-center text-center">
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
                  <div className="flex-1 h-full flex flex-col min-w-0 items-center text-center">
                    <h3 className="text-lg font-bold text-primary-black mb-2 group-hover:text-accent-blue transition-colors min-h-[3rem] flex items-center justify-center">
                      {product.title}
                    </h3>
                    <p className="text-gray-text text-sm leading-7 max-w-[42ch] mx-auto h-[7rem] line-clamp-4 overflow-hidden">
                      {getCardPreviewText(product, 180)}
                    </p>
                    <span className="card-cta-mini mt-4 mx-auto">
                      {detailChipProductsLabel}
                      <svg className="card-cta-mini-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default SolutionsTabs;
