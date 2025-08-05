import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import AboutPage from '../pages/AboutPage';
import ExportPage from '../pages/ExportPage';
import ContactPage from '../pages/ContactPage';
import CheckoutPage from '../pages/CheckoutPage';
import LegalPage from '../pages/LegalPage';
import { CartProvider } from '../contexts/CartContext';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import CartDrawer from './Cart/CartDrawer';
import WhatsAppFAB from './UI/WhatsAppFAB';

// This component handles the scroll-to-top behavior
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppRoutes() {
  // No need for navigate here as components will use useNavigate directly
  
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route 
            path="/product/:slug" 
            element={<ProductDetailPage />} 
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/export" element={<ExportPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/:page" element={<LegalPage />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer />
      <WhatsAppFAB />
    </>
  );
}

export function Router() {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </CartProvider>
  );
}
