import { Header } from './Header';
import { Footer } from './Footer';
import { MainContent } from './MainContent';
import CookieBanner from '../ui/CookieBanner';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MainContent>
        {children}
      </MainContent>
      <Footer />
      <CookieBanner />
    </>
  );
};

export default Layout;
