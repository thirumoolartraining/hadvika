import React, { useState } from 'react';
import { Ship, Thermometer, FileText, Globe, ChevronDown, ChevronRight, Download } from 'lucide-react';

interface ExportPageProps {
  navigate: (path: string) => void;
}

const ExportPage: React.FC<ExportPageProps> = ({ navigate }) => {
  const [openAccordion, setOpenAccordion] = useState<string | null>('incoterms');

  const accordionItems = [
    {
      id: 'incoterms',
      title: 'Incoterms & Trade Terms',
      icon: <FileText className="h-6 w-6" />,
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#FFF8EC] p-4 rounded-lg">
              <h4 className="font-semibold text-[#215C4C] mb-2">EXW (Ex Works)</h4>
              <p className="text-sm text-gray-700">Buyer arranges pickup from our facility. Most economical option for experienced importers.</p>
            </div>
            <div className="bg-[#FFF8EC] p-4 rounded-lg">
              <h4 className="font-semibold text-[#215C4C] mb-2">FOB (Free on Board)</h4>
              <p className="text-sm text-gray-700">We handle delivery to Indian port. Buyer manages international shipping and insurance.</p>
            </div>
            <div className="bg-[#FFF8EC] p-4 rounded-lg">
              <h4 className="font-semibold text-[#215C4C] mb-2">CIF (Cost, Insurance, Freight)</h4>
              <p className="text-sm text-gray-700">Complete door-to-port service including insurance. Hassle-free for first-time importers.</p>
            </div>
          </div>
          <p className="text-gray-700">
            Custom terms available based on order volume and destination. Our export team will recommend the best option for your specific requirements.
          </p>
        </div>
      )
    },
    {
      id: 'container',
      title: 'Container Handling & Logistics',
      icon: <Ship className="h-6 w-6" />,
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-[#215C4C] mb-3">Container Specifications</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#8FCFAE] rounded-full" />
                  <span>20ft Reefer Container: 1,200 cartons</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#8FCFAE] rounded-full" />
                  <span>40ft Reefer Container: 2,400 cartons</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#8FCFAE] rounded-full" />
                  <span>Each carton contains 12 units of 1000ml tubs</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#215C4C] mb-3">Loading Process</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#8FCFAE] rounded-full" />
                  <span>Pre-cooling containers to -20°C</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#8FCFAE] rounded-full" />
                  <span>Temperature monitoring during loading</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#8FCFAE] rounded-full" />
                  <span>Quality inspection and documentation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'storage',
      title: 'Cold Storage & Temperature Control',
      icon: <Thermometer className="h-6 w-6" />,
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-[#8FCFAE]/10 to-[#F3B7C3]/10 p-6 rounded-lg">
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-4xl">❄️</div>
              <div>
                <h4 className="font-semibold text-[#215C4C] text-lg">Maintaining -18°C Throughout</h4>
                <p className="text-gray-700">Consistent temperature control from storage to delivery</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-[#215C4C] mb-3">Our Facilities</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 10,000 MT cold storage capacity</li>
                <li>• Automated temperature monitoring</li>
                <li>• Backup power systems</li>
                <li>• Real-time alerts and tracking</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#215C4C] mb-3">Quality Assurance</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Temperature logs for every shipment</li>
                <li>• HACCP compliant processes</li>
                <li>• Third-party quality audits</li>
                <li>• Insurance coverage available</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'network',
      title: 'Global Network & Shipping Routes',
      icon: <Globe className="h-6 w-6" />,
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-[#8FCFAE]/10 rounded-lg">
              <div className="text-3xl mb-2">🏗️</div>
              <h4 className="font-semibold text-[#215C4C] mb-1">Gulf Countries</h4>
              <p className="text-sm text-gray-700">UAE, Saudi Arabia, Kuwait, Qatar, Bahrain, Oman</p>
            </div>
            <div className="text-center p-4 bg-[#8FCFAE]/10 rounded-lg">
              <div className="text-3xl mb-2">🌍</div>
              <h4 className="font-semibold text-[#215C4C] mb-1">Middle East</h4>
              <p className="text-sm text-gray-700">Jordan, Lebanon, Iraq, Yemen</p>
            </div>
            <div className="text-center p-4 bg-[#8FCFAE]/10 rounded-lg">
              <div className="text-3xl mb-2">🦁</div>
              <h4 className="font-semibold text-[#215C4C] mb-1">Africa</h4>
              <p className="text-sm text-gray-700">South Africa, Kenya, Nigeria, Ghana, Tanzania</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-[#215C4C] mb-3">Transit Times</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Gulf Ports:</span> 7-10 days
              </div>
              <div>
                <span className="font-medium">East Africa:</span> 12-15 days
              </div>
              <div>
                <span className="font-medium">West Africa:</span> 18-22 days
              </div>
              <div>
                <span className="font-medium">South Africa:</span> 15-18 days
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF8EC]">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-white to-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#2B2B2B] mb-6 leading-tight max-w-[20ch] mx-auto">
              Export Services & Process
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Comprehensive export solutions with world-class cold chain logistics, flexible trade terms, and reliable delivery to global markets.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-[#8FCFAE] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Ship className="h-8 w-8 text-[#215C4C]" />
              </div>
              <h3 className="font-semibold text-[#2B2B2B] text-sm">Global Shipping</h3>
            </div>
            <div className="text-center">
              <div className="bg-[#8FCFAE] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Thermometer className="h-8 w-8 text-[#215C4C]" />
              </div>
              <h3 className="font-semibold text-[#2B2B2B] text-sm">Cold Chain</h3>
            </div>
            <div className="text-center">
              <div className="bg-[#8FCFAE] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="h-8 w-8 text-[#215C4C]" />
              </div>
              <h3 className="font-semibold text-[#2B2B2B] text-sm">Documentation</h3>
            </div>
            <div className="text-center">
              <div className="bg-[#8FCFAE] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="h-8 w-8 text-[#215C4C]" />
              </div>
              <h3 className="font-semibold text-[#2B2B2B] text-sm">25+ Countries</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Export Process Accordion */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B2B] mb-4 leading-tight">
              Export Process Details
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Explore our comprehensive export capabilities and processes designed for international trade.
            </p>
          </div>

          <div className="space-y-4">
            {accordionItems.map((item) => (
              <div key={item.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-[#8FCFAE]">{item.icon}</div>
                    <h3 className="text-lg font-semibold text-[#2B2B2B]">{item.title}</h3>
                  </div>
                  {openAccordion === item.id ? (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {openAccordion === item.id && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      {item.content}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#8FCFAE] to-[#F3B7C3] rounded-2xl p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#215C4C] mb-4">
                Download Export Catalogue
              </h2>
              <p className="text-[#215C4C]/80 mb-6">
                Get detailed product specifications, pricing, and export terms in our comprehensive catalogue.
              </p>
              <button className="bg-[#215C4C] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#1a4a3d] transition-colors inline-flex items-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Download Catalogue (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B2B] mb-6 leading-tight max-w-[20ch] mx-auto">
            Ready to Start Importing?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Our export team is ready to provide customized solutions for your market requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-[#215C4C] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#1a4a3d] transition-colors"
            >
              Request Export Quote
            </button>
            <button
              onClick={() => navigate('/products')}
              className="bg-transparent border-2 border-[#8FCFAE] text-[#215C4C] px-8 py-3 rounded-xl font-semibold hover:bg-[#8FCFAE] transition-colors"
            >
              View Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExportPage;