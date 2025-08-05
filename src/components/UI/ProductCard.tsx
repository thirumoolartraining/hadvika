import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../contexts/CartContext';

interface ProductCardProps {
  product: Product;
  navigate: (path: string) => void;
  showAddToCart?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, navigate, showAddToCart = true }) => {
  const { addToCart, setIsCartOpen } = useCart();

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.stopPropagation();
    
    try {
      // Add to cart with the product's MOQ as the default quantity
      const moq = product.moq || 60;
      await addToCart(product, moq);
      
      // Open the cart
      setIsCartOpen(true);
      
      // Show success feedback
      const button = e.currentTarget as HTMLElement;
      const originalText = button.textContent;
      const originalClasses = button.className;
      
      button.textContent = 'Added!';
      button.className = originalClasses.replace('bg-[#8FCFAE]', 'bg-green-500');
      
      setTimeout(() => {
        button.textContent = originalText;
        button.className = originalClasses;
      }, 1000);
    } catch (error) {
      console.error('Failed to add to cart:', error);
    }
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group"
      onClick={() => navigate(`/product/${product.slug}`)}
    >
      {/* Product Image */}
      <div className="aspect-square bg-gradient-to-br from-[#8FCFAE] via-[#F3B7C3] to-[#8FCFAE] relative overflow-hidden">
        {product.images && product.images.length > 0 ? (
          <>
            <img 
              src={product.images[0].startsWith('http') ? product.images[0] : `${import.meta.env.BASE_URL}${product.images[0].startsWith('/') ? '' : '/'}${product.images[0]}`} 
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to text if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = document.createElement('div');
                fallback.className = 'absolute inset-0 flex items-center justify-center';
                fallback.innerHTML = `
                  <div class="text-white text-center">
                    <div class="text-4xl font-bold mb-2">🍦</div>
                    <div class="text-sm font-semibold opacity-90">
                      ${product.name.split(' ')[0]}
                    </div>
                  </div>
                `;
                target.parentNode?.insertBefore(fallback, target.nextSibling);
              }}
              loading="lazy"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-4xl font-bold mb-2">🍦</div>
              <div className="text-sm font-semibold opacity-90">
                {product.name.split(' ')[0]}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-[#2B2B2B] text-sm leading-tight mb-1 group-hover:text-[#215C4C] transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-gray-600 mb-1">1000ml</p>
        <p className="text-xs text-amber-600 font-medium mb-2">MOQ: {product.moq} units</p>
        
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-[#215C4C]">
            ₹{product.price}
          </div>
          
          {showAddToCart && (
            <button
              onClick={handleAddToCart}
              className="bg-[#8FCFAE] text-[#215C4C] px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-[#7BC29A] transition-all duration-200 flex items-center space-x-1 group/button"
            >
              <ShoppingCart className="h-3 w-3 group-hover/button:scale-110 transition-transform" />
              <span>Add to Cart</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;