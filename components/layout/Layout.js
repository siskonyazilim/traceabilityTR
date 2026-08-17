/* eslint-disable react/prop-types */

import { Header } from './Header';
import { Footer } from './Footer';
import { MainContent } from './MainContent';

export const Layout = ({ children, cmsGlobal }) => {
  return (
    <>
      <Header cmsGlobal={cmsGlobal} />
      <MainContent>
        {children}
      </MainContent>
      <Footer cmsGlobal={cmsGlobal} />
    </>
  );
};

export default Layout;
