'use client';

import { useState } from 'react';
import Link from 'next/link';
import Container from '../../components/ui/Container';
import BlogCard from '../../components/ui/BlogCard';
import Button from '../../components/ui/Button';
import { blogPosts } from '../../data/blogPosts';
import { motion } from 'framer-motion';

const ITEMS_PER_PAGE = 6;

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination
  const totalPages = Math.ceil(blogPosts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedPosts = blogPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-dark-bg">
      <div className="pt-24 md:pt-28 bg-white rounded-t-3xl">

      {/* Main Content */}
      <Container>
        <div className="py-10 md:py-14">
          <div className="mb-10 md:mb-12 rounded-3xl border border-slate-200 bg-[linear-gradient(140deg,_rgba(10,10,43,0.98)_0%,_rgba(0,25,210,0.94)_55%,_rgba(0,181,247,0.84)_100%)] px-6 py-8 md:px-10 md:py-11 text-white shadow-[0_18px_44px_rgba(10,10,43,0.2)]">
            <p className="text-xs md:text-sm uppercase tracking-[0.16em] text-white/80 font-semibold mb-3">Resurse</p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.08] mb-4">Noutati, ghiduri si tendinte in trasabilitate</h1>
            <p className="text-base md:text-lg text-white/90 max-w-3xl">Continut orientat pe decizii: implementare, optimizare operationala si bune practici pentru productia moderna.</p>
          </div>

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
                  >
                    <BlogCard post={post} />
                  </motion.div>
                ))}
              </motion.div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mb-8">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`min-w-10 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
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
                Nu au fost găsite articole.
              </p>
            </div>
          )}

          <div className="mt-12 text-center rounded-3xl border border-slate-200 bg-[#f8fafc] p-7 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-4">
              Vrei să discutăm despre trasabilitate?
            </h2>
            <p className="text-gray-text text-lg mb-8 max-w-2xl mx-auto">
              Echipa noastră te poate ajuta să transformi informația din articole în pași clari pentru fabrica ta.
            </p>
            <div className="flex gap-5 justify-center flex-wrap">
              <Button as={Link} href="/contact" variant="solid" size="lg">
                Cere Ofertă
              </Button>
              <Button as={Link} href="/proiecte-de-referinta" variant="outline" size="lg">
                Vezi Proiectele
              </Button>
            </div>
          </div>
        </div>
      </Container>
      </div>
    </div>
  );
}
