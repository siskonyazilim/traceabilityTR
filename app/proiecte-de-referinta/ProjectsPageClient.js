'use client';

import { useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Container from '../../components/ui/Container';
import SectionHeader from '../../components/ui/SectionHeader';
import ProjectCard from '../../components/ui/ProjectCard';
import Button from '../../components/ui/Button';
import { useLanguage } from '../../components/i18n/LanguageProvider';
import { referenceProjects } from '../../data/references';
import { localizeReferenceProjects } from '../../lib/i18n/contentLocalization';
import { sortReferenceProjects, withReferenceProjectTimeline } from '../../lib/referenceProjectOrdering';

export default function ProjectsPageClient() {
  const { locale, t } = useLanguage();
  const localizedProjects = useMemo(() => {
    const projects = withReferenceProjectTimeline(
      sortReferenceProjects(localizeReferenceProjects(referenceProjects, locale)),
      locale
    );
    return [...projects].sort((a, b) => {
      const aCode = a.referenceDate || '';
      const bCode = b.referenceDate || '';
      return bCode.localeCompare(aCode);
    });
  }, [locale]);
  const pageSize = 9;
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const searchParamsString = searchParams.toString();

  const pageFromQuery = Number.parseInt(searchParams.get('page') || '1', 10);
  const normalizedPageFromQuery = Number.isFinite(pageFromQuery) && pageFromQuery > 0 ? pageFromQuery : 1;

  const totalPages = Math.max(1, Math.ceil(localizedProjects.length / pageSize));
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

  const currentProjects = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return localizedProjects.slice(start, start + pageSize);
  }, [currentPage, localizedProjects]);

  const pageNumbers = useMemo(() => {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }, [totalPages]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-24 pb-16">
      <Container size="xl">
        <SectionHeader
          title={t('projectsPage.sectionTitle', 'Selecție Proiecte')}
          subtitle={t('projectsPage.sectionSubtitle', 'Proiecte realizate cu succes pentru clienți din diverse industrii')}
          titleTag="h1"
        />

        {localizedProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-7">
            {currentProjects.map((project) => (
              <ProjectCard key={project.id} project={project} currentPage={currentPage} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-text text-lg">
              {t('projectsPage.empty', 'Nu am găsit proiecte.')}
            </p>
          </div>
        )}

        {localizedProjects.length > pageSize && (
          <div className="mt-10 flex items-center justify-center gap-2 flex-wrap">
            <button
              type="button"
              onClick={() => updatePage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-3 min-h-[48px] rounded-md border border-gray-light text-sm text-primary-black disabled:opacity-50 disabled:cursor-not-allowed hover:border-accent-blue"
            >
              {t('projectsPage.paginationPrev', 'Înapoi')}
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
              {t('projectsPage.paginationNext', 'Înainte')}
            </button>
          </div>
        )}

        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-black mb-6">
            {t('projectsPage.ctaTitle', 'Vrei un proiect similar pentru compania ta?')}
          </h2>
          <p className="text-gray-text text-xl mb-10 max-w-3xl mx-auto">
            {t('projectsPage.ctaSubtitle', 'Putem adapta soluțiile din aceste referințe la procesele și obiectivele tale operaționale.')}
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Button as={Link} href="/contact" variant="solid" size="lg" className="bg-secondary-blue hover:bg-accent-blue text-white">
              {t('projectsPage.ctaPrimary', 'Cere Ofertă')}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
