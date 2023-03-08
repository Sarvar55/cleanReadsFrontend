import { Footer } from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';

export const Layout = ({ children }) => {
  return (
    <>
      <main className="container">
        <Navbar /> {children} <Footer />
      </main>{' '}
    </>
  );
};
