import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';

interface ContactPageProps {
  // Removed unused navigate prop
}

const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        country: '',
        message: ''
      });
    }, 3000);
  };

  const whatsappNumber = "919944311934";
  const whatsappMessage = "Hi! I'm interested in your ice cream export services and would like to discuss business opportunities.";

  const handleWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  const countries = [
    'United Arab Emirates', 'Saudi Arabia', 'Kuwait', 'Qatar', 'Bahrain', 'Oman',
    'Jordan', 'Lebanon', 'Iraq', 'Yemen',
    'South Africa', 'Kenya', 'Nigeria', 'Ghana', 'Tanzania', 'Other'
  ];

  return (
    <div className="min-h-screen bg-[#FFF8EC]">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-white to-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#2B2B2B] mb-6 leading-tight max-w-[20ch] mx-auto">
              Contact Export Team
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Ready to bring premium Indian ice creams to your market? Get in touch with our export specialists for customized solutions and competitive pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#2B2B2B] mb-6">
                Request Export Quote
              </h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    Thank you for your inquiry!
                  </h3>
                  <p className="text-green-700">
                    Our export team will contact you within 24 hours with a detailed quote and next steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-[#2B2B2B] mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        autoComplete="organization"
                        required
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8FCFAE] focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="contactName" className="block text-sm font-medium text-[#2B2B2B] mb-2">
                        Contact Person *
                      </label>
                      <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        autoComplete="name"
                        required
                        value={formData.contactName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8FCFAE] focus:border-transparent"
                        placeholder="Your full name"
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
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8FCFAE] focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#2B2B2B] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8FCFAE] focus:border-transparent"
                        placeholder="+91 9944311934"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-[#2B2B2B] mb-2">
                      Country/Market *
                    </label>
                    <select
                      id="country"
                      name="country"
                      autoComplete="country"
                      required
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8FCFAE] focus:border-transparent"
                    >
                      <option value="">Select your country</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#2B2B2B] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8FCFAE] focus:border-transparent resize-none"
                      placeholder="Tell us about your requirements, expected volumes, and any specific questions..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-[#215C4C] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#1a4a3d] transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Submit Request</span>
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#2B2B2B] mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#8FCFAE] p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-[#215C4C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2B2B2B] mb-1">Phone</h3>
                    <p className="text-gray-700">+91 99443 11934</p>
                    <p className="text-sm text-gray-600">Mon-Fri, 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#8FCFAE] p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-[#215C4C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2B2B2B] mb-1">Email</h3>
                    <p className="text-gray-700">info@hadvikatraders.biz</p>
                    <p className="text-sm text-gray-600">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#8FCFAE] p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-[#215C4C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2B2B2B] mb-1">Address</h3>
                    <p className="text-gray-700">
                      3/32, BALAJI LAYOUT, SABARI STREET, BINNY<br />
                      COMPOUND, Tiruppur, Tiruppur, Tamil Nadu, 641602
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-r from-[#8FCFAE] to-[#F3B7C3] rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <MessageCircle className="h-8 w-8 text-[#215C4C]" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#215C4C]">WhatsApp Direct</h3>
                    <p className="text-[#215C4C]/80 text-sm">Instant response for urgent inquiries</p>
                  </div>
                </div>
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-[#215C4C] text-white py-3 rounded-lg font-semibold hover:bg-[#1a4a3d] transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>

              {/* Export Markets */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-[#2B2B2B] mb-4">Primary Export Markets</h3>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-white border border-gray-200 rounded-lg p-3">
                    <div className="text-2xl mb-1">🏗️</div>
                    <div className="text-xs font-semibold text-[#215C4C]">Gulf</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-3">
                    <div className="text-2xl mb-1">🌍</div>
                    <div className="text-xs font-semibold text-[#215C4C]">Middle East</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-3">
                    <div className="text-2xl mb-1">🦁</div>
                    <div className="text-xs font-semibold text-[#215C4C]">Africa</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B2B] mb-4 leading-tight">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-[#215C4C] mb-2">What's the minimum order quantity?</h3>
              <p className="text-gray-700 text-sm">
                Minimum order is 5 cartons (60 [1000ml Ice-cream]). Mixed flavors are available.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-[#215C4C] mb-2">How long is the shelf life?</h3>
              <p className="text-gray-700 text-sm">
                12 months from manufacturing date when maintained at -18°C consistently.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-[#215C4C] mb-2">Do you provide samples?</h3>
              <p className="text-gray-700 text-sm">
                Yes, we can arrange samples via air freight. Sample costs are adjustable against confirmed orders.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-[#215C4C] mb-2">What certifications do you have?</h3>
              <p className="text-gray-700 text-sm">
                ISO 22000, FSSAI, HACCP certified. Additional country-specific certifications available.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;