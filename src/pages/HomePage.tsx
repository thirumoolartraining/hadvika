import React from 'react';
import { ArrowRight, Truck, Thermometer, Globe2, MapPin, Users, Package } from 'lucide-react';
import heroImage from '../assets/images/hero/hero-image.png';
import { products } from '../data/products';
import ProductCard from '../components/UI/ProductCard';

interface HomePageProps {
  navigate: (path: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#FFF8EC] via-white to-[#F5F5F5] py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3')] bg-cover bg-center opacity-5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl lg:text-6xl font-bold text-[#2B2B2B] leading-tight mb-6">
                Chill & Delight — Export India's Favorite Ice Creams
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Premium quality ice creams with world-class cold chain logistics. Serving Gulf, Africa, and Middle East markets with excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/products')}
                  className="bg-[#8FCFAE] text-[#215C4C] px-8 py-4 rounded-xl font-semibold hover:bg-[#7BC29A] transition-all duration-200 flex items-center justify-center space-x-2 group"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-transparent border-2 border-[#F3B7C3] text-[#2B2B2B] px-8 py-4 rounded-xl font-semibold hover:bg-[#F3B7C3] hover:text-white transition-all duration-200"
                >
                  Contact Export Team
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src={heroImage}
                  alt="Premium ice cream selection"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-[#F3B7C3] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Premium Quality
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#215C4C] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                -18°C Cold Chain
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B2B] mb-4 leading-tight max-w-[22ch] mx-auto">
              Premium Ice Cream Collection
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Discover our range of premium ice creams, crafted with the finest ingredients and perfect for international markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} navigate={navigate} />
            ))}
          </div>
          
          <div className="text-center">
            <button
              onClick={() => navigate('/products')}
              className="bg-[#215C4C] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#1a4a3d] transition-colors inline-flex items-center space-x-2"
            >
              <span>View All Products</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Cold Chain Logistics */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B2B] mb-4 leading-tight max-w-[22ch] mx-auto">
              Cold Chain Logistics Excellence
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              State-of-the-art cold chain infrastructure ensuring product quality from factory to your destination.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F3B7C3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2B2B2B] mb-2">Reefer Shipping</h3>
              <p className="text-gray-700">
                Temperature-controlled containers maintaining optimal conditions throughout the journey.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F3B7C3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2B2B2B] mb-2">-18°C Freezing</h3>
              <p className="text-gray-700">
                Consistent temperature maintenance ensuring product integrity and quality.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F3B7C3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2B2B2B] mb-2">Global Delivery</h3>
              <p className="text-gray-700">
                Worldwide shipping network with reliable delivery to major international ports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B2B] mb-4 leading-tight max-w-[22ch] mx-auto">
              Global Reach & Impact
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Serving premium ice creams across Gulf, Middle East, and African markets with growing international presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#8FCFAE] to-[#215C4C]">
                <img 
                  src={`${import.meta.env.BASE_URL}images/global-reach/global-reach.png`}
                  alt="Global Reach & Impact"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'w-full h-full flex items-center justify-center text-white text-4xl';
                    fallback.textContent = '🌍';
                    target.parentNode?.insertBefore(fallback, target.nextSibling);
                  }}
                />
              </div>
              
              {/* Animated Pins */}
              <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-[#F3B7C3] rounded-full animate-pulse shadow-lg" />
              <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-[#F3B7C3] rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-[#F3B7C3] rounded-full animate-pulse shadow-lg" style={{ animationDelay: '1s' }} />
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#8FCFAE] rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-[#215C4C]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2B2B2B]">25+ Countries</h3>
                  <p className="text-gray-700">Active export operations across multiple continents</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#8FCFAE] rounded-full flex items-center justify-center">
                    <Package className="h-6 w-6 text-[#215C4C]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2B2B2B]">500+ Containers</h3>
                  <p className="text-gray-700">Monthly export volume across all markets</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#8FCFAE] rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-[#215C4C]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2B2B2B]">1000+ Clients</h3>
                  <p className="text-gray-700">Trusted by distributors and retailers worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-[#215C4C] to-[#8FCFAE] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-[22ch] mx-auto">
              Request a Free Export Quote Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get competitive pricing and detailed export terms for your ice cream import requirements.
            </p>
            
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-[#215C4C] px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center space-x-2 shadow-xl"
            >
              <span>Get Export Quote</span>
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;