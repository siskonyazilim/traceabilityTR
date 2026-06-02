'use client';

import Link from 'next/link';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { useLanguage } from '../components/i18n/LanguageProvider';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-white via-[#f8fbff] to-white relative overflow-hidden flex items-center">
      <div className="absolute inset-0 pattern-dots opacity-30"></div>
      <div className="absolute -top-24 -left-16 w-72 h-72 bg-accent-blue/15 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-16 w-80 h-80 bg-secondary-blue/10 rounded-full blur-3xl"></div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-3xl shadow-soft p-8 md:p-12 text-center">
            <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-accent-blue font-semibold mb-4">
              {t('notFound.codeLabel', 'Error')}
            </p>

            <div className="text-[88px] sm:text-[112px] md:text-[140px] font-extrabold leading-none text-secondary-blue/95 mb-4">
              404
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-black mb-4 leading-tight">
              {t('notFound.title', 'Pagina nu a fost găsită')}
            </h1>

            <p className="text-base sm:text-lg text-gray-text max-w-2xl mx-auto mb-8 leading-relaxed">
              {t('notFound.description', 'Conținutul pentru această adresă nu este disponibil momentan.')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
              <Button as={Link} href="/" variant="solid" size="lg" className="w-full sm:w-auto">
                {t('notFound.home', 'Înapoi la Acasă')}
              </Button>
              <Button as={Link} href="/contact" variant="outline" size="lg" className="w-full sm:w-auto">
                {t('notFound.contact', 'Contact')}
              </Button>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-3">{t('notFound.quickLinks', 'Poți încerca și aceste pagini:')}</p>
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                <Link href="/blog" className="px-4 py-2 text-sm rounded-full border border-slate-200 text-slate-600 hover:text-accent-blue hover:border-accent-blue transition-colors">
                  {t('header.news', 'Știri')}
                </Link>
                <Link href="/proiecte-de-referinta" className="px-4 py-2 text-sm rounded-full border border-slate-200 text-slate-600 hover:text-accent-blue hover:border-accent-blue transition-colors">
                  {t('sections.referenceProjectsTitle', 'Proiecte de referință')}
                </Link>
                <Link href="/#traceability-solutions" className="px-4 py-2 text-sm rounded-full border border-slate-200 text-slate-600 hover:text-accent-blue hover:border-accent-blue transition-colors">
                  {t('sections.solutionsTab', 'Soluții')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
