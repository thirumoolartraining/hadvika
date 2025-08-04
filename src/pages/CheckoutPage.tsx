import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, MessageCircle } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface CheckoutPageProps {
  navigate: (path: string) => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ navigate }) => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    address: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would integrate with a payment gateway here
    // For now, we'll simulate a successful order
    console.log('Order submitted:', { 
      ...formData, 
      cartItems, 
      total: getTotalPrice(),
      paymentMethod: (e.currentTarget as HTMLFormElement).elements.namedItem('paymentMethod') as RadioNodeList
    });
    
    // Show success message and clear cart
    setIsSubmitted(true);
    clearCart();
  };

  const handleWhatsApp = () => {
    const orderDetails = cartItems.map(item => 
      `${item.product.name} (${item.quantity} units)`
    ).join(', ');
    
    const message = `Hi! I'd like to proceed with my ice cream export order:\n\nProducts: ${orderDetails}\nTotal: ₹${getTotalPrice().toLocaleString()}\nCompany: ${formData.companyName}\nContact: ${formData.contactName}`;
    
    const whatsappUrl = `https://wa.me/919944311934?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (cartItems.length === 0 && !isSubmitted) {
    return (
      <div className="min-h-screen bg-[#FFF8EC] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h1 className="text-2xl font-bold text-[#2B2B2B] mb-4">Your cart is empty</h1>
          <p className="text-gray-700 mb-6">Add some products to your cart before checkout.</p>
          <button
            onClick={() => navigate('/products')}
            className="bg-[#8FCFAE] text-[#215C4C] px-6 py-3 rounded-lg font-semibold hover:bg-[#7BC29A] transition-colors"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#FFF8EC] flex items-center justify-center">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-[#2B2B2B] mb-4">
              Order Request Submitted!
            </h1>
            <p className="text-gray-700 mb-6">
              Thank you for your interest! Our export team will contact you within 24 hours with a detailed quote and next steps.
            </p>
            
            <div className="space-y-3">
              <button
                onClick={handleWhatsApp}
                className="w-full bg-[#8FCFAE] text-[#215C4C] py-3 rounded-lg font-semibold hover:bg-[#7BC29A] transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Continue on WhatsApp</span>
              </button>
              
              <button
                onClick={() => navigate('/')}
                className="w-full bg-transparent border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF8EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Back Button */}
        <button
          onClick={() => navigate('/cart')}
          className="flex items-center space-x-2 text-[#215C4C] hover:text-[#2B2B2B] transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Back to Cart</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Order Form */}
          <div>
            <h1 className="text-3xl font-bold text-[#2B2B2B] mb-6">
              Secure Checkout
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-[#2B2B2B] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    required
                    value={formData.contactName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8FCFAE] focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#2B2B2B] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8FCFAE] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#2B2B2B] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8FCFAE] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#2B2B2B] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8FCFAE] focus:border-transparent"
                    placeholder="+91 9944311934"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#2B2B2B] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8FCFAE] focus:border-transparent"
                  placeholder="+91 9944311934"
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-[#2B2B2B] mb-2">
                  Delivery Address *
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows={3}
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8FCFAE] focus:border-transparent resize-none"
                  placeholder="Full delivery address"
                />
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-[#2B2B2B] mb-3">Payment Method</h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="paymentMethod" value="cod" className="h-4 w-4 text-[#215C4C] focus:ring-[#8FCFAE]" defaultChecked />
                    <span>Cash on Delivery (COD)</span>
                  </label>
                  <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="paymentMethod" value="online" className="h-4 w-4 text-[#215C4C] focus:ring-[#8FCFAE]" />
                    <span>Online Payment (Credit/Debit Card, UPI, Net Banking)</span>
                  </label>
                </div>
              </div>
              
              <div className="space-y-4">
                <button
                  type="submit"
                  className="w-full bg-[#215C4C] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#1a4a3d] transition-colors"
                >
                  Proceed to Payment
                </button>
                <p className="text-xs text-gray-600 text-center">
                  By placing this order, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-4">
              <h2 className="text-xl font-semibold text-[#2B2B2B] mb-6">
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.product.slug} className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8FCFAE] to-[#F3B7C3] rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">
                        {item.product.name.split(' ')[0]}
                      </span>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-medium text-[#2B2B2B] text-sm">
                        {item.product.name}
                      </h3>
                      <p className="text-xs text-gray-600">
                        {item.quantity} × ₹{item.product.price.toLocaleString()}
                        <span className="block text-amber-600 text-xs mt-1">
                          MOQ: {item.product.moq || 60} units
                        </span>
                      </p>
                    </div>
                    
                    <div className="text-sm font-semibold text-[#215C4C]">
                      ₹{(item.product.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span className="text-[#2B2B2B]">Total:</span>
                  <span className="text-[#215C4C]">₹{getTotalPrice().toLocaleString()}</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  *Actual pricing may vary based on quantity, shipping terms, and destination
                </p>
              </div>
              
              <div className="bg-[#FFF8EC] rounded-lg p-4">
                <h3 className="font-semibold text-[#215C4C] mb-2">Order Summary</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in order</li>
                  <li>• Free delivery on all orders</li>
                  <li>• 100% quality guarantee</li>
                  <li>• Easy returns within 7 days</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;