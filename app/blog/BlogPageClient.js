'use client';

import { useState } from 'react';
import Link from 'next/link';
import Container from '../../components/ui/Container';
import BlogCard from '../../components/ui/BlogCard';
import Button from '../../components/ui/Button';
import { blogPosts } from '../../data/blogPosts';
import { motion } from 'framer-motion';
import { useLanguage } from '../../components/i18n/LanguageProvider';
import { localizeBlogPosts } from '../../lib/i18n/contentLocalization';

const ITEMS_PER_PAGE = 6;

export default function BlogPageClient() {
  const [currentPage, setCurrentPage] = useState(1);
  const { locale, t } = useLanguage();
  const localizedPosts = localizeBlogPosts(blogPosts, locale);

  const totalPages = Math.ceil(localizedPosts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedPosts = localizedPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    globalThis.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="pt-24 md:pt-28">

      <Container size="xl">
        <div className="py-10 md:py-14">
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
                    <BlogCard post={post} />
                  </motion.div>
                ))}
              </motion.div>

              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mb-8">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`min-w-11 px-4 py-2.5 rounded-lg font-semibold transition-all duration-200 ${
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

          <div className="mt-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              {t('blogPage.ctaTitle', 'Vrei să discutăm despre trasabilitate?')}
            </h2>
            <p className="text-gray-text text-xl mb-10 max-w-3xl mx-auto">
              {t('blogPage.ctaSubtitle', 'Echipa noastră te poate ajuta să transformi informația din articole în pași clari pentru fabrica ta.')}
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <Button as={Link} href="/contact" variant="solid" size="lg" className="bg-secondary-blue hover:bg-accent-blue text-white">
                {t('blogPage.ctaPrimary', 'Cere Ofertă')}
              </Button>
              <Button as={Link} href="/proiecte-de-referinta" variant="outline" size="lg" className="border-2 border-primary-black text-primary-black hover:bg-primary-black hover:text-white">
                {t('blogPage.ctaSecondary', 'Vezi Proiectele')}
              </Button>
            </div>
          </div>

        </div>
      </Container>
      </div>
    </div>
  );
}
