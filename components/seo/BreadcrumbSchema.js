'use client';

import { usePathname } from 'next/navigation';

export default function BreadcrumbSchema() {
  const pathname = usePathname();

  if (!pathname || pathname === '/') return null;

  const paths = pathname.split('/').filter(Boolean);
  
  // Dillerden biri URL başında varsa (tr, en, ro) onu atlarız
  let startIndex = 0;
  if (['tr', 'en', 'ro'].includes(paths[0])) {
    startIndex = 1;
  }

  const cleanPaths = paths.slice(startIndex);
  if (cleanPaths.length === 0) return null;

  const itemListElement = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Traceability",
      "item": "https://izlenebilirlik.com.tr"
    }
  ];

  let currentPath = paths.slice(0, startIndex).join('/');
  if (currentPath) currentPath = '/' + currentPath;

  cleanPaths.forEach((path, index) => {
    currentPath += `/${path}`;
    
    // URL yolundaki tire işaretlerini boşluğa çevir ve kelimelerin ilk harflerini büyüt
    const name = path
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    itemListElement.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": name,
      "item": `https://izlenebilirlik.com.tr${currentPath}`
    });
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
