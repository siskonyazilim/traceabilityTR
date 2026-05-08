'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export const BlogCard = ({ post }) => {
  const date = new Date(post.date).toLocaleDateString('ro-RO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {/* Blog Image */}
      <div className="aspect-video bg-gradient-to-br from-accent-blue to-accent-green flex items-center justify-center overflow-hidden relative">
        <img
          src="/images/blog/traceability_icon_top_left.png"
          alt="Traceability icon"
          className="absolute top-3 left-3 h-8 w-8 object-contain z-10"
        />
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.querySelector('.fallback-blog-icon')?.classList.remove('hidden');
          }}
        />
        <div className="fallback-blog-icon hidden absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent-blue to-accent-green">
          <div className="text-white text-4xl">📝</div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-accent-blue uppercase">
            {post.category}
          </span>
          <span className="text-xs text-gray-text">{date}</span>
        </div>
        
        <h3 className="text-lg font-bold text-primary-black mb-3 line-clamp-2 hover:text-accent-blue transition-colors">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>
        
        <p className="text-gray-text text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <Link 
          href={`/blog/${post.slug}`}
          className="text-accent-blue font-semibold text-sm hover:underline"
        >
          Citește mai mult →
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
