import React from 'react';
import { Award, Users, Truck, Factory } from 'lucide-react';

interface AboutPageProps {
  navigate: (path: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  const timeline = [
    { 
      year: '2023', 
      event: 'Became Official Arun Ice Cream Distributor', 
      description: 'Partnered with Arun Ice Cream to distribute their premium products, marking the beginning of our journey in the ice cream distribution business' 
    },
    { 
      year: '2023', 
      event: 'Established Strong Local Presence', 
      description: 'Successfully introduced Arun Ice Cream to local markets, building a reputation for reliability and quality service' 
    },
    { 
      year: '2024', 
      event: 'Expanded Distribution Network', 
      description: 'Grew our distribution channels to cover multiple regions, ensuring wider availability of Arun Ice Cream products' 
    },
    { 
      year: '2024', 
      event: 'Strengthened Retailer Partnerships', 
      description: 'Expanded our network of retail partners, ensuring Arun Ice Cream reaches more customers through trusted local stores' 
    },
    { 
      year: '2025', 
      event: 'Future Growth and Expansion', 
      description: 'Continuing to expand our reach and introduce more consumers to the delightful taste of Arun Ice Cream' 
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF8EC]">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-white to-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#2B2B2B] mb-6 leading-tight max-w-[20ch] mx-auto">
              About Hadvika Traders
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Official global distributor of Arun Ice Creams, dedicated to bringing premium Indian ice cream flavors to international markets through excellence in cold chain logistics and customer service.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B2B] mb-6 leading-tight">
                Our Brand Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Hadvika Traders embarked on an exciting journey in 2023 when we became the proud distributor of 
                  Arun Ice Cream. This partnership marked the beginning of our mission to bring the rich, authentic 
                  taste of Arun's premium ice creams to consumers across regions.
                </p>
                <p>
                  Our foundation is built on a simple principle: delivering frozen delights with the same freshness 
                  and quality as when they leave the production facility. We've invested in state-of-the-art cold 
                  chain logistics to ensure every scoop of Arun Ice Cream reaches our customers in perfect condition.
                </p>
                <p>
                  In a short span, we've established a strong distribution network and earned the trust of 
                  retailers and consumers alike. Our commitment to reliable service and maintaining the highest 
                  quality standards has been the cornerstone of our growing success in the ice cream distribution 
                  business.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#8FCFAE] to-[#215C4C]">
                <img 
                  src={`${import.meta.env.BASE_URL}images/about/brand-story.png`}
                  alt="Hadvika Traders Brand Story"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'w-full h-full flex items-center justify-center text-white text-6xl bg-gradient-to-br from-[#8FCFAE] to-[#215C4C]';
                    fallback.textContent = '🏭';
                    target.parentNode?.insertBefore(fallback, target.nextSibling);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B2B] mb-4 leading-tight">
              Our Impact
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and global reach.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8FCFAE] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-[#215C4C]" />
              </div>
              <div className="text-3xl font-bold text-[#215C4C] mb-2">25+</div>
              <div className="text-sm font-semibold text-[#2B2B2B]">Countries Served</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8FCFAE] rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-[#215C4C]" />
              </div>
              <div className="text-3xl font-bold text-[#215C4C] mb-2">500+</div>
              <div className="text-sm font-semibold text-[#2B2B2B]">Containers Monthly</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8FCFAE] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#215C4C]" />
              </div>
              <div className="text-3xl font-bold text-[#215C4C] mb-2">1000+</div>
              <div className="text-sm font-semibold text-[#2B2B2B]">Happy Clients</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8FCFAE] rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="h-8 w-8 text-[#215C4C]" />
              </div>
              <div className="text-3xl font-bold text-[#215C4C] mb-2">10+</div>
              <div className="text-sm font-semibold text-[#2B2B2B]">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cold Chain Infrastructure */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#215C4C] to-[#8FCFAE]">
                <img 
                  src={`${import.meta.env.BASE_URL}images/about/cold-chain.png`}
                  alt="Cold Chain Excellence"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'w-full h-full flex items-center justify-center text-white text-6xl bg-gradient-to-br from-[#215C4C] to-[#8FCFAE]';
                    fallback.textContent = '❄️';
                    target.parentNode?.insertBefore(fallback, target.nextSibling);
                  }}
                />
                
                {/* Temperature Indicator */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-2 rounded-lg text-[#215C4C] font-bold">
                  -18°C
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B2B] mb-6 leading-tight">
                Cold Chain Excellence
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Our state-of-the-art cold chain infrastructure ensures that every product reaches its 
                  destination in perfect condition. From our temperature-controlled warehouses to our 
                  reefer container fleet, we maintain the optimal -18°C temperature throughout the journey.
                </p>
                <p>
                  With real-time temperature monitoring, GPS tracking, and emergency backup systems, 
                  we guarantee product integrity from factory to shelf. Our cold chain expertise has 
                  earned us the trust of international buyers who demand nothing but the best.
                </p>
              </div>
              
              <div className="mt-8">
                <button
                  onClick={() => navigate('/export')}
                  className="bg-[#8FCFAE] text-[#215C4C] px-6 py-3 rounded-xl font-semibold hover:bg-[#7BC29A] transition-colors"
                >
                  Learn About Our Export Process
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B2B] mb-4 leading-tight">
              Our Journey
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              A decade of growth, innovation, and expanding global reach.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-[#8FCFAE]" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[#215C4C] rounded-full border-4 border-white shadow-lg z-10" />
                  
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="bg-[#8FCFAE] text-[#215C4C] px-3 py-1 rounded-full text-sm font-bold">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-[#2B2B2B] mb-2">
                        {item.event}
                      </h3>
                      <p className="text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#215C4C] to-[#8FCFAE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight max-w-[20ch] mx-auto">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our growing network of international distributors and bring premium Indian ice creams to your market.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-white text-[#215C4C] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;