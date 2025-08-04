import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, Shield, Truck, Award, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import ProductCard from '../components/UI/ProductCard';

interface ProductDetailPageProps {
  navigate: (path: string) => void;
  productSlug: string;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ navigate, productSlug }) => {
  const [activeTab, setActiveTab] = useState<'description' | 'ingredients' | 'export'>('description');
  const cart = useCart();
  
  const product = products.find(p => p.slug === productSlug);
  
  if (!product) {
    return (
      <div className="min-h-screen bg-[#FFF8EC] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#2B2B2B] mb-4">Product Not Found</h1>
          <button
            onClick={() => navigate('/products')}
            className="bg-[#8FCFAE] text-[#215C4C] px-6 py-2 rounded-lg font-semibold hover:bg-[#7BC29A] transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }
  
  // Calculate valid quantities based on MOQ and increment
  const moq = product.moq || 60;
  const increment = product.increment || 10;
  const maxQuantity = moq * 10; // Show up to 10x MOQ in the dropdown
  
  // Generate quantity options
  const quantityOptions = [];
  for (let qty = moq; qty <= maxQuantity; qty += increment) {
    quantityOptions.push(qty);
  }
  
  // Initialize quantity with MOQ value
  const [quantity, setQuantity] = useState(moq);
  
  // Initialize image gallery state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  
  // Get the images array or use an empty array if not available
  const productImages = product.images || [];
  
  // Handle next/previous image navigation
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };
  
  // Navigate to a specific image
  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };
  
  // Toggle zoom state
  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };
  
  // Get related products for the "You may also like" section
  const relatedProducts = products.filter(p => p.slug !== productSlug).slice(0, 3);

  const handleAddToCart = () => {
    const addedQuantity = cart.addToCart(product, quantity);
    cart.setIsCartOpen(true);
    // Show success feedback (simplified)
    alert(`Added ${addedQuantity} ${product.name} to cart!`);
  };

  return (
    <div className="min-h-screen bg-[#FFF8EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Back Button */}
        <button
          onClick={() => navigate('/products')}
          className="flex items-center space-x-2 text-[#215C4C] hover:text-[#2B2B2B] transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Back to Products</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image Gallery */}
          <div>
            <div className="relative">
              {/* Main Image */}
              <div 
                className={`aspect-square bg-white rounded-2xl overflow-hidden shadow-xl mb-4 cursor-${isZoomed ? 'zoom-out' : 'zoom-in'} transition-all duration-300 ${isZoomed ? 'fixed inset-0 z-50 bg-white p-8 flex items-center justify-center' : 'relative'}`}
                onClick={toggleZoom}
              >
                {productImages.length > 0 ? (
                  <img 
                    src={productImages[currentImageIndex]} 
                    alt={product.name}
                    className={`w-full h-full object-contain ${isZoomed ? 'max-w-[90vw] max-h-[90vh]' : ''}`}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#8FCFAE] via-[#F3B7C3] to-[#8FCFAE] flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-8xl mb-4">🍦</div>
                      <div className="text-xl font-bold opacity-90">
                        {product.name.split(' ')[0]}
                      </div>
                    </div>
                  </div>
                )}
                
                {!isZoomed && productImages.length > 0 && (
                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md">
                    <ZoomIn className="h-5 w-5 text-[#2B2B2B]" />
                  </div>
                )}
                
                {/* Navigation Arrows */}
                {productImages.length > 1 && (
                  <>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        goToPrevImage();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#2B2B2B] p-2 rounded-full shadow-md transition-all"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        goToNextImage();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#2B2B2B] p-2 rounded-full shadow-md transition-all"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}
                
                {/* Close button for zoomed view */}
                {isZoomed && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsZoomed(false);
                    }}
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white text-[#2B2B2B] p-2 rounded-full shadow-md transition-all z-10"
                    aria-label="Close zoom"
                  >
                    <span className="text-xl">×</span>
                  </button>
                )}
              </div>
              
              {/* Thumbnail Navigation */}
              {productImages.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto py-2 scrollbar-hide">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${currentImageIndex === index ? 'border-[#215C4C]' : 'border-transparent'}`}
                      aria-label={`View image ${index + 1}`}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} - ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Certifications */}
            <div className="flex justify-center space-x-4 mt-4">
              {product.certifications?.map((cert, index) => (
                <div key={index} className="group relative">
                  <div className="bg-[#8FCFAE] text-[#215C4C] px-3 py-1 rounded-full text-xs font-semibold cursor-pointer">
                    {cert}
                  </div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-[#2B2B2B] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Certified Quality Standard
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-[#2B2B2B] mb-4 leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-3xl font-bold text-[#215C4C]">₹{product.price}</span>
              <span className="bg-[#F3B7C3] text-[#2B2B2B] px-3 py-1 rounded-full text-sm font-semibold">
                1000ml
              </span>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Quantity Selector */}
            <div className="space-y-2 mb-8">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-[#2B2B2B]">Quantity:</span>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8FCFAE] focus:border-transparent"
                >
                  {quantityOptions.map((qty) => (
                    <option key={qty} value={qty}>
                      {qty} units
                    </option>
                  ))}
                </select>
              </div>
              <div className="text-sm text-gray-600">
                <p>Minimum Order Quantity: {moq} units</p>
                <p>Order in multiples of: {increment} units</p>
                <p className="font-semibold mt-1">
                  Total: ₹{(product.price * quantity).toLocaleString()}
                </p>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-[#215C4C] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#1a4a3d] transition-colors flex items-center justify-center space-x-2 mb-8"
            >
              <ShoppingCart className="h-6 w-6" />
              <span>Add to Cart</span>
            </button>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg">
                <Shield className="h-8 w-8 text-[#8FCFAE] mx-auto mb-2" />
                <div className="text-xs font-semibold text-[#2B2B2B]">Quality Assured</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <Truck className="h-8 w-8 text-[#8FCFAE] mx-auto mb-2" />
                <div className="text-xs font-semibold text-[#2B2B2B]">Cold Chain</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <Award className="h-8 w-8 text-[#8FCFAE] mx-auto mb-2" />
                <div className="text-xs font-semibold text-[#2B2B2B]">Export Ready</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-16">
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex space-x-8">
              {[
                { id: 'description', label: 'Description' },
                { id: 'ingredients', label: 'Ingredients' },
                { id: 'export', label: 'Export Info' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-[#8FCFAE] text-[#215C4C]'
                      : 'border-transparent text-gray-500 hover:text-[#2B2B2B] hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="bg-white rounded-xl p-8">
            {activeTab === 'description' && (
              <div>
                <h3 className="text-xl font-semibold text-[#2B2B2B] mb-4">Product Description</h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.description} This premium ice cream is manufactured using state-of-the-art facilities
                  and follows international quality standards. Perfect for retail distribution in international
                  markets with excellent shelf life and consistent quality.
                </p>
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div>
                <h3 className="text-xl font-semibold text-[#2B2B2B] mb-4">Ingredients</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {product.ingredients?.map((ingredient, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#8FCFAE] rounded-full" />
                      <span className="text-gray-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'export' && (
              <div>
                <h3 className="text-xl font-semibold text-[#2B2B2B] mb-4">Export Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-[#215C4C] mb-2">Storage Requirements</h4>
                    <p className="text-gray-700 mb-4">Maintain at -18°C throughout transportation and storage.</p>
                    
                    <h4 className="font-semibold text-[#215C4C] mb-2">Shelf Life</h4>
                    <p className="text-gray-700">12 months from manufacturing date when stored properly.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#215C4C] mb-2">Packaging</h4>
                    <p className="text-gray-700 mb-4">1000ml tubs, 12 units per carton, temperature-resistant packaging.</p>
                    
                    <h4 className="font-semibold text-[#215C4C] mb-2">Available Terms</h4>
                    <p className="text-gray-700">EXW, FOB, CIF - Custom terms available based on volume.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#2B2B2B] mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.slug} product={relatedProduct} navigate={navigate} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;