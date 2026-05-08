'use client';

import { usePathname } from 'next/navigation';

export const MainContent = ({ children }) => {
  const pathname = usePathname();
  const isHeroBlendPage = pathname === '/' || pathname === '/contact' || pathname === '/blog';

  return (
    <main className={isHeroBlendPage ? '' : 'pt-20'}>
      {children}
    </main>
  );
};

export default MainContent;
