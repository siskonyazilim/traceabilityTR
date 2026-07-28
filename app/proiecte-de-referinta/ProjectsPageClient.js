'use client';

import { useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

// Locale-independent slugs for sector filter — survives language switches
const SECTOR_SLUG_MAP = {
  // TR
  'Lojistik': 'logistics', 'Otomotiv': 'automotive', 'Beyaz Eşya': 'home-appliances',
  'Gıda & İçecek': 'food-beverage', 'Tütün': 'tobacco',
  // EN
  'Logistics': 'logistics', 'Automotive': 'automotive', 'Home Appliances': 'home-appliances',
  'Food & Beverage': 'food-beverage', 'Tobacco': 'tobacco',
  // RO
  'Logistică': 'logistics', 'Industria auto': 'automotive', 'Electrocasnice': 'home-appliances',
  'Alimente & Băuturi': 'food-beverage', 'Tutun': 'tobacco',
};

// Canonical order matches Turkish alphabetical: Beyaz Eşya, Gıda & İçecek, Lojistik, Otomotiv, Tütün
const CANONICAL_SECTOR_ORDER = ['home-appliances', 'food-beverage', 'logistics', 'automotive', 'tobacco'];
import Link from 'next/link';
import Container from '../../components/ui/Container';
import ProjectCard from '../../components/ui/ProjectCard';
import Button from '../../components/ui/Button';
import { useLanguage } from '../../components/i18n/LanguageProvider';
import { referenceProjects } from '../../data/references';
import { localizeReferenceProjects } from '../../lib/i18n/contentLocalization';
import { sortReferenceProjects, withReferenceProjectTimeline } from '../../lib/referenceProjectOrdering';

export default function ProjectsPageClient() {
  const { locale, t } = useLanguage();

  const localizedProjects = useMemo(() => {
    return withReferenceProjectTimeline(
      sortReferenceProjects(localizeReferenceProjects(referenceProjects, locale)),
      locale
    );
  }, [locale]);

  const sectors = useMemo(() => {
    const seen = new Set();
    for (const p of localizedProjects) {
      const s = (p.sector || '').trim();
      if (s) seen.add(s);
    }
    return [...seen].sort((a, b) => {
      const aIdx = CANONICAL_SECTOR_ORDER.indexOf(SECTOR_SLUG_MAP[a] || '');
      const bIdx = CANONICAL_SECTOR_ORDER.indexOf(SECTOR_SLUG_MAP[b] || '');
      const aPos = aIdx === -1 ? 999 : aIdx;
      const bPos = bIdx === -1 ? 999 : bIdx;
      return aPos !== bPos ? aPos - bPos : a.localeCompare(b, locale);
    });
  }, [localizedProjects, locale]);

  const pageSize = 9;
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const searchParamsString = searchParams.toString();

  // Sector filter — stored as a locale-independent slug in ?sector=... query param
  const sectorSlug = searchParams.get('sector') || '';
  const selectedSector = useMemo(
    () => sectorSlug
      ? (sectors.find((s) => SECTOR_SLUG_MAP[s] === sectorSlug) || '')
      : '',
    [sectorSlug, sectors]
  );

  const filteredProjects = useMemo(
    () => selectedSector
      ? localizedProjects.filter((p) => (p.sector || '').trim() === selectedSector)
      : localizedProjects,
    [localizedProjects, selectedSector]
  );

  const pageFromQuery = Number.parseInt(searchParams.get('page') || '1', 10);
  const normalizedPageFromQuery = Number.isFinite(pageFromQuery) && pageFromQuery > 0 ? pageFromQuery : 1;

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / pageSize));
  const currentPage = Math.min(Math.max(normalizedPageFromQuery, 1), totalPages);

  const updatePage = (nextPage) => {
    const safePage = Math.min(Math.max(nextPage, 1), totalPages);
    const params = new URLSearchParams(searchParamsString);
    if (safePage <= 1) {
      params.delete('page');
    } else {
      params.set('page', String(safePage));
    }
    const nextQuery = params.toString();
    const nextUrl = nextQuery ? `${pathname}?${nextQuery}` : pathname;
    const currentUrl = searchParamsString ? `${pathname}?${searchParamsString}` : pathname;
    if (nextUrl !== currentUrl) {
      router.replace(nextUrl, { scroll: false });
    }
  };

  const handleSectorChange = (sectorName) => {
    const params = new URLSearchParams(searchParamsString);
    if (!sectorName) {
      params.delete('sector');
    } else {
      const slug = SECTOR_SLUG_MAP[sectorName] || sectorName.toLowerCase().replace(/\s+/g, '-');
      params.set('sector', slug);
    }
    params.delete('page'); // reset to page 1
    const nextQuery = params.toString();
    router.replace(nextQuery ? `${pathname}?${nextQuery}` : pathname, { scroll: false });
  };

  const currentProjects = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredProjects.slice(start, start + pageSize);
  }, [currentPage, filteredProjects]);

  const pageNumbers = useMemo(() => {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }, [totalPages]);

  const allLabel = t('projectsPage.filterAll', 'Tüm Sektörler');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-24 pb-16">
      <Container size="xl">
        {/* ── Centered title ── */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-[clamp(1.375rem,1.1rem+0.9vw,2rem)] font-semibold tracking-tight leading-[1.15] text-primary-black mb-5">
            {t('projectsPage.sectionTitle', 'Selectie Proiecte')}
          </h1>
          <p className="text-[clamp(1rem,0.97rem+0.22vw,1.125rem)] leading-7 text-gray-text max-w-3xl mx-auto">
            {t('projectsPage.sectionSubtitle', 'Proiecte realizate cu succes pentru clienti din diverse industrii')}
          </p>
        </div>

        {/* ── Filter pill buttons ── */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            type="button"
            onClick={() => handleSectorChange('')}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-150 ${
              selectedSector === ''
                ? 'bg-secondary-blue text-white border-secondary-blue shadow-sm'
                : 'bg-white text-slate-blue border-gray-light hover:border-secondary-blue hover:text-secondary-blue'
            }`}
          >
            {allLabel}
          </button>
          {sectors.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => handleSectorChange(s)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-150 ${
                selectedSector === s
                  ? 'bg-secondary-blue text-white border-secondary-blue shadow-sm'
                  : 'bg-white text-slate-blue border-gray-light hover:border-secondary-blue hover:text-secondary-blue'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {currentProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-7">
            {currentProjects.map((project) => (
              <ProjectCard key={project.slug || project.id} project={project} currentPage={currentPage} currentSectorSlug={sectorSlug} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-text text-lg">
              {t('projectsPage.empty', 'Nu am gasit proiecte.')}
            </p>
          </div>
        )}

        {filteredProjects.length > pageSize && (
          <div className="mt-10 flex items-center justify-center gap-2 flex-wrap">
            <button
              type="button"
              onClick={() => updatePage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-3 min-h-[48px] rounded-md border border-gray-light text-sm text-primary-black disabled:opacity-50 disabled:cursor-not-allowed hover:border-accent-blue"
            >
              {t('projectsPage.paginationPrev', 'Inapoi')}
            </button>

            {pageNumbers.map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => updatePage(page)}
                className={`px-3.5 py-3 rounded-md border text-sm min-w-[48px] min-h-[48px] ${
                  currentPage === page
                    ? 'bg-accent-blue text-white border-accent-blue'
                    : 'border-gray-light text-primary-black hover:border-accent-blue'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              onClick={() => updatePage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-3 min-h-[48px] rounded-md border border-gray-light text-sm text-primary-black disabled:opacity-50 disabled:cursor-not-allowed hover:border-accent-blue"
            >
              {t('projectsPage.paginationNext', 'Inainte')}
            </button>
          </div>
        )}

        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-black mb-6">
            {t('projectsPage.ctaTitle', 'Vrei un proiect similar pentru compania ta?')}
          </h2>
          <p className="text-gray-text text-xl mb-10 max-w-3xl mx-auto">
            {t('projectsPage.ctaSubtitle', 'Putem adapta solutiile din aceste referinte la procesele si obiectivele tale operationale.')}
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Button as={Link} href="/contact" variant="solid" size="lg" className="bg-secondary-blue hover:bg-accent-blue text-white">
              {t('projectsPage.ctaPrimary', 'Cere Oferta')}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}