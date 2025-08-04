import { useState, useCallback } from 'react';
import { CartItem, Product } from '../types';

export function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

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
    
    return validQuantity; // Return the actual quantity set (for feedback)
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
  }, [removeFromCart, cartItems]);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const getTotalPrice = useCallback(() => {
    return cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }, [cartItems]);

  const getTotalItems = useCallback(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  return {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems
  };
}