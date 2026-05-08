'use client';

import { useState } from 'react';
import Container from '../../components/ui/Container';
import BlogCard from '../../components/ui/BlogCard';
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
                      className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                        currentPage === page
                          ? 'bg-accent-blue text-white'
                          : 'bg-gray-light text-primary-black hover:bg-opacity-80'
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
        </div>
      </Container>
      </div>
    </div>
  );
}
