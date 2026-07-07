'use client';
/* eslint-disable react/prop-types */

import { usePathname } from 'next/navigation';

export const MainContent = ({ children }) => {
  const pathname = usePathname();
  const normalizedPathname = (pathname || '/').replace(/^\/(tr|en|ro)(?=\/|$)/, '') || '/';
  const isHeroBlendPage = normalizedPathname === '/' || normalizedPathname === '/contact' || normalizedPathname === '/blog';

  return (
    <main className={`site-main ${isHeroBlendPage ? '' : 'pt-20'}`}>
      {children}
    </main>
  );
};

export default MainContent;
