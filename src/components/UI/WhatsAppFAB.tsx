import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFAB: React.FC = () => {
  const whatsappNumber = "919944311934"; // Hadvika Traders contact number
  const message = "Hi! I'm interested in your ice cream export services.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-[#8FCFAE] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 z-40 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-[#2B2B2B] text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat on WhatsApp
      </div>
    </button>
  );
};

export default WhatsAppFAB;