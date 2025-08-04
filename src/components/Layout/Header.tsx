import React from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

interface HeaderProps {
  currentPath: string;
  navigate: (path: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPath, navigate }) => {
  const { getTotalItems, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Export', path: '/export' },
    { name: 'Contact', path: '/contact' }
  ];

  const totalItems = getTotalItems();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => navigate('/')}
              className="text-xl font-bold text-[#2B2B2B] hover:text-[#215C4C] transition-colors"
            >
              Hadvika Traders
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`text-sm font-medium transition-colors ${
                  currentPath === item.path
                    ? 'text-[#215C4C] border-b-2 border-[#8FCFAE]'
                    : 'text-[#2B2B2B] hover:text-[#215C4C]'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Cart Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-[#2B2B2B] hover:text-[#215C4C] transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#8FCFAE] text-[#215C4C] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#2B2B2B] hover:text-[#215C4C] transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    navigate(item.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left py-2 px-4 text-sm font-medium transition-colors ${
                    currentPath === item.path
                      ? 'text-[#215C4C] bg-[#FFF8EC]'
                      : 'text-[#2B2B2B] hover:text-[#215C4C] hover:bg-[#FFF8EC]'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;