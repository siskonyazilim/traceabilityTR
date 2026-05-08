'use client';
/* eslint-disable react/prop-types */

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const BlogCard = ({ post }) => {
  const [imageError, setImageError] = useState(false);

  const date = new Date(post.date).toLocaleDateString('ro-RO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <motion.div
      className="bg-white rounded-2xl border border-gray-light shadow-md hover:shadow-xl hover:border-accent-blue transition-all overflow-hidden h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {/* Blog Image */}
      <div className="aspect-video bg-gradient-to-br from-slate-blue to-primary-black flex items-center justify-center overflow-hidden relative">
        <Image
          src="/resmi/TRACEABILITY-logo.svg"
          alt="Traceability icon"
          width={32}
          height={32}
          className="absolute top-3 left-3 h-8 w-8 object-contain z-10"
          loading="lazy"
        />
        {imageError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent-blue to-accent-green">
            <div className="text-white text-lg font-semibold tracking-wide">BLOG</div>
          </div>
        ) : (
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-cover"
            loading="lazy"
            quality={78}
            onError={() => setImageError(true)}
          />
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-secondary-blue uppercase">
            {post.category}
          </span>
          <span className="text-xs text-inactive-gray">{date}</span>
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
          className="text-secondary-blue font-semibold text-sm hover:text-accent-blue"
        >
          Citește mai mult →
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
