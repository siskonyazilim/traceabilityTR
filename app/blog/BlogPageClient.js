'use client';

import { useMemo, useState } from 'react';
import Container from '../../components/ui/Container';
import BlogCard from '../../components/ui/BlogCard';
import PagePrimaryCta from '../../components/ui/PagePrimaryCta';
import SectionHeader from '../../components/ui/SectionHeader';
import { blogPosts } from '../../data/blogPosts';
import { motion } from 'framer-motion';
import { useLanguage } from '../../components/i18n/LanguageProvider';
import { localizeBlogPosts } from '../../lib/i18n/contentLocalization';

const ITEMS_PER_PAGE = 6;

export default function BlogPageClient() {
  const [currentPage, setCurrentPage] = useState(1);
  const { locale, t } = useLanguage();
  const localizedPosts = localizeBlogPosts(blogPosts, locale);
  const sortedPosts = useMemo(
    () =>
      [...localizedPosts].sort((a, b) => {
        const dateDiff = new Date(b.date).getTime() - new Date(a.date).getTime();

        if (dateDiff !== 0) {
          return dateDiff;
        }

        return (b.id ?? 0) - (a.id ?? 0);
      }),
    [localizedPosts]
  );

  const totalPages = Math.ceil(sortedPosts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedPosts = sortedPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    globalThis.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pb-16">
      <div className="pt-24 md:pt-28">

      <Container size="xl">
        <SectionHeader
          title={t('blogPage.heroTitle', 'Noutăți, ghiduri și tendințe în trasabilitate')}
          subtitle={t('blogPage.heroSubtitle', 'Conținut orientat pe decizii: implementare, optimizare operațională și bune practici pentru producția modernă.')}
          titleTag="h1"
        />
        <div className="py-2 md:py-4">
          {paginatedPosts.length > 0 ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
              >
                {paginatedPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <BlogCard
                      post={post}
                      prioritizeImage={currentPage === 1 && index === 0}
                      imageSizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    />
                  </motion.div>
                ))}
              </motion.div>

              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mb-8">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`min-w-12 min-h-[48px] px-4 py-3 rounded-md font-semibold transition-all duration-200 ${
                        currentPage === page
                          ? 'bg-secondary-blue text-white shadow-[0_10px_22px_rgba(0,25,210,0.24)]'
                          : 'bg-gray-light text-primary-black hover:bg-slate-200'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-text text-lg">
                {t('blogPage.empty', 'Nu au fost găsite articole.')}
              </p>
            </div>
          )}

          <PagePrimaryCta
            title={t('blogPage.ctaTitle', 'Vrei să discutăm despre trasabilitate?')}
            subtitle={t('blogPage.ctaSubtitle', 'Echipa noastră te poate ajuta să transformi informația din articole în pași clari pentru fabrica ta.')}
            primaryHref="/contact"
            primaryLabel={t('blogPage.ctaPrimary', 'Cere Ofertă')}
          />

        </div>
      </Container>
      </div>
    </div>
  );
}
