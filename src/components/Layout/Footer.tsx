import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-and-conditions' },
    { name: 'Shipping Policy', path: '/shipping-policy' },
    { name: 'Cancellation & Refund', path: '/cancellation-and-refund' }
  ];

  return (
    <footer className="bg-[#2B2B2B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src={`${import.meta.env.BASE_URL}images/logo/logo-white.png`} 
                alt="Hadvika Traders" 
                className="h-16 w-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = document.createElement('h3');
                  fallback.className = 'text-xl font-bold';
                  fallback.textContent = 'Hadvika Traders';
                  target.parentNode?.insertBefore(fallback, target.nextSibling);
                }}
              />
            </div>
            <p className="text-gray-300 mb-4">
              Official global distributor of Arun Ice Creams, serving premium frozen desserts to international markets.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#8FCFAE]" />
                <span className="text-sm">+91 99443 11934</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#8FCFAE]" />
                <span className="text-sm">info@hadvikatraders.biz</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#8FCFAE]" />
                <span className="text-sm">3/32, BALAJI LAYOUT, SABARI STREET, BINNY COMPOUND, Tiruppur, Tamil Nadu, 641602</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigate('/products')} className="text-gray-300 hover:text-[#8FCFAE] transition-colors text-sm">Products</button></li>
              <li><button onClick={() => navigate('/about')} className="text-gray-300 hover:text-[#8FCFAE] transition-colors text-sm">About Us</button></li>
              <li><button onClick={() => navigate('/export')} className="text-gray-300 hover:text-[#8FCFAE] transition-colors text-sm">Export Services</button></li>
              <li><button onClick={() => navigate('/contact')} className="text-gray-300 hover:text-[#8FCFAE] transition-colors text-sm">Contact</button></li>
            </ul>
          </div>

          {/* Export Markets */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Export Markets</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Gulf Countries</li>
              <li>Middle East</li>
              <li>African Markets</li>
              <li>Southeast Asia</li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Certifications</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#8FCFAE] text-[#215C4C] px-2 py-1 rounded text-xs font-semibold">ISO 22000</span>
              <span className="bg-[#8FCFAE] text-[#215C4C] px-2 py-1 rounded text-xs font-semibold">FSSAI</span>
              <span className="bg-[#8FCFAE] text-[#215C4C] px-2 py-1 rounded text-xs font-semibold">HACCP</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Hadvika Traders. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
              {legalPages.map((page) => (
                <button
                  key={page.path}
                  onClick={() => navigate(page.path)}
                  className="text-gray-400 hover:text-[#8FCFAE] transition-colors text-sm"
                >
                  {page.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;