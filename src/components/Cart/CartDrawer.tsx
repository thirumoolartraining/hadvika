import React from 'react';
import { X, Trash2 } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

interface CartDrawerProps {
  navigate: (path: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ navigate }) => {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    updateQuantity, 
    removeFromCart, 
    getTotalPrice 
  } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Cart Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold text-[#2B2B2B]">
              Shopping Cart ({cartItems.length})
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <X className="h-6 w-6 text-[#2B2B2B]" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/products');
                  }}
                  className="bg-[#8FCFAE] text-[#215C4C] px-6 py-2 rounded-lg font-semibold hover:bg-[#7BC29A] transition-colors"
                >
                  Browse Products
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.product.slug} className="flex items-center space-x-3 bg-[#F5F5F5] p-3 rounded-lg">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#8FCFAE] to-[#F3B7C3] rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs text-center">
                        {item.product.name.split(' ')[0]}
                      </span>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-medium text-[#2B2B2B] text-sm leading-tight">
                        {item.product.name}
                      </h3>
                      <p className="text-xs text-gray-600">1000ml</p>
                      <p className="text-sm font-semibold text-[#215C4C]">
                        ₹{item.product.price}
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                      {/* Quantity Selector */}
                      <div className="flex flex-col items-center">
                        <select
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.product.slug, Number(e.target.value))}
                          className="bg-white border border-gray-300 text-gray-700 py-1 px-2 pr-8 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8FCFAE] focus:border-transparent text-sm w-full"
                        >
                          {(() => {
                            const moq = item.product.moq || 60;
                            const increment = item.product.increment || 10;
                            const maxQuantity = Math.max(moq * 5, item.quantity + increment * 5);
                            const options = [];
                            
                            for (let qty = moq; qty <= maxQuantity; qty += increment) {
                              options.push(
                                <option key={qty} value={qty}>
                                  {qty} units
                                </option>
                              );
                            }
                            return options;
                          })()}
                        </select>
                      </div>
                      
                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.product.slug)}
                        className="p-1 text-red-500 hover:bg-red-50 rounded"
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-[#2B2B2B]">Total:</span>
                <span className="text-xl font-bold text-[#215C4C]">
                  ₹{getTotalPrice().toLocaleString()}
                </span>
              </div>
              
              <button
                onClick={handleCheckout}
                className="w-full bg-[#215C4C] text-white py-3 rounded-lg font-semibold hover:bg-[#1a4a3d] transition-colors"
              >
                Proceed to Checkout
              </button>
              
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  navigate('/products');
                }}
                className="w-full bg-transparent border border-[#8FCFAE] text-[#215C4C] py-2 rounded-lg font-semibold hover:bg-[#8FCFAE] hover:text-[#215C4C] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;