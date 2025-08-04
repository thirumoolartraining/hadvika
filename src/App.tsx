// React import not needed with React 17+
import { useRouter } from './hooks/useRouter';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import CartDrawer from './components/Cart/CartDrawer';
import WhatsAppFAB from './components/UI/WhatsAppFAB';

// Page imports
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ExportPage from './pages/ExportPage';
import ContactPage from './pages/ContactPage';
import CheckoutPage from './pages/CheckoutPage';
import LegalPage from './pages/LegalPage';

function App() {
  const { currentPath, navigate } = useRouter();

  const renderPage = () => {
    if (currentPath === '/') {
      return <HomePage navigate={navigate} />;
    }
    
    if (currentPath === '/products') {
      return <ProductsPage navigate={navigate} />;
    }
    
    if (currentPath.startsWith('/product/')) {
      const slug = currentPath.split('/product/')[1];
      return <ProductDetailPage navigate={navigate} productSlug={slug} />;
    }
    
    if (currentPath === '/about') {
      return <AboutPage navigate={navigate} />;
    }
    
    if (currentPath === '/export') {
      return <ExportPage navigate={navigate} />;
    }
    
    if (currentPath === '/contact') {
      return <ContactPage />;
    }
    
    if (currentPath === '/checkout') {
      return <CheckoutPage navigate={navigate} />;
    }
    
    if (currentPath === '/privacy-policy') {
      return <LegalPage navigate={navigate} pageType="privacy-policy" />;
    }
    
    if (currentPath === '/terms-and-conditions') {
      return <LegalPage navigate={navigate} pageType="terms-and-conditions" />;
    }
    
    if (currentPath === '/shipping-policy') {
      return <LegalPage navigate={navigate} pageType="shipping-policy" />;
    }
    
    if (currentPath === '/cancellation-and-refund') {
      return <LegalPage navigate={navigate} pageType="cancellation-and-refund" />;
    }
    
    // Cart page redirects to home with cart open
    if (currentPath === '/cart') {
      return <HomePage navigate={navigate} />;
    }
    
    // 404 Page
    return (
      <div className="min-h-screen bg-[#FFF8EC] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🍦</div>
          <h1 className="text-2xl font-bold text-[#2B2B2B] mb-4">Page Not Found</h1>
          <p className="text-gray-700 mb-6">The page you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-[#8FCFAE] text-[#215C4C] px-6 py-2 rounded-lg font-semibold hover:bg-[#7BC29A] transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#FFF8EC]">
      <Header currentPath={currentPath} navigate={navigate} />
      
      <main>
        {renderPage()}
      </main>
      
      <Footer navigate={navigate} />
      
      <CartDrawer navigate={navigate} />
      <WhatsAppFAB />
    </div>
  );
}

// Cart Provider Wrapper
function AppWithCartProvider() {
  return (
    <CartProvider>
      <App />
    </CartProvider>
  );
}

export default AppWithCartProvider;