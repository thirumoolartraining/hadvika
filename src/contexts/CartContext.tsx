import React, { createContext, useContext, useCallback, useState, ReactNode } from 'react';
import { CartItem, Product } from '../types';

interface CartContextType {
  cartItems: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  addToCart: (product: Product, quantity?: number) => number;
  removeFromCart: (productSlug: string) => void;
  updateQuantity: (productSlug: string, quantity: number) => number;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Helper function to load cart from localStorage
const loadCartFromStorage = (): CartItem[] => {
  if (typeof window === 'undefined') return [];
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(loadCartFromStorage());
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Save cart to localStorage whenever it changes
  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = useCallback((product: Product, quantity: number = product.moq || 60) => {
    // Ensure quantity meets MOQ and increment requirements
    const moq = product.moq || 60;
    const increment = product.increment || 10;
    
    // Round up to the nearest valid quantity based on MOQ and increment
    let validQuantity = Math.max(moq, Math.ceil((quantity - moq) / increment) * increment + moq);
    
    setCartItems(prev => {
      const existingItem = prev.find(item => item.product.slug === product.slug);
      if (existingItem) {
        // When updating existing item, maintain the increment
        validQuantity = Math.max(
          existingItem.quantity + increment,
          Math.ceil((existingItem.quantity + 1 - moq) / increment) * increment + moq
        );
        
        return prev.map(item =>
          item.product.slug === product.slug
            ? { ...item, quantity: validQuantity }
            : item
        );
      }
      return [...prev, { product, quantity: validQuantity }];
    });
    
    return validQuantity;
  }, []);

  const removeFromCart = useCallback((productSlug: string) => {
    setCartItems(prev => prev.filter(item => item.product.slug !== productSlug));
  }, []); 

  const updateQuantity = useCallback((productSlug: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productSlug);
      return 0;
    }
    
    setCartItems(prev => {
      const item = prev.find(item => item.product.slug === productSlug);
      if (!item) return prev;
      
      // Ensure quantity meets MOQ and increment requirements
      const moq = item.product.moq || 60;
      const increment = item.product.increment || 10;
      
      // Calculate the nearest valid quantity based on MOQ and increment
      let validQuantity = Math.max(moq, newQuantity);
      if ((validQuantity - moq) % increment !== 0) {
        validQuantity = Math.ceil((validQuantity - moq) / increment) * increment + moq;
      }
      
      return prev.map(item =>
        item.product.slug === productSlug
          ? { ...item, quantity: validQuantity }
          : item
      );
    });
    
    // Return the actual quantity that was set (for feedback)
    const item = cartItems.find(item => item.product.slug === productSlug);
    if (!item) return 0;
    
    const moq = item.product.moq || 60;
    const increment = item.product.increment || 10;
    let validQuantity = Math.max(moq, newQuantity);
    if ((validQuantity - moq) % increment !== 0) {
      validQuantity = Math.ceil((validQuantity - moq) / increment) * increment + moq;
    }
    return validQuantity;
  }, [cartItems, removeFromCart]);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []); 

  const getTotalPrice = useCallback(() => {
    return cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }, [cartItems]);

  const getTotalItems = useCallback(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
