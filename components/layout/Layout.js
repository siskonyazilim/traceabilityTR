import { Header } from './Header';
import { Footer } from './Footer';
import { MainContent } from './MainContent';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MainContent>
        {children}
      </MainContent>
      <Footer />
    </>
  );
};

export default Layout;
