import React from 'react';
import { Home, DollarSign, Key, TrendingUp, Search, FileText } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Home Buying',
      description: 'Find your perfect home with our expert guidance through every step of the buying process.',
      features: ['Market Analysis', 'Property Search', 'Negotiation Support', 'Closing Assistance']
    },
    {
      icon: DollarSign,
      title: 'Home Selling',
      description: 'Maximize your home\'s value with our proven marketing strategies and pricing expertise.',
      features: ['Professional Photography', 'Market Pricing', 'Online Marketing', 'Showing Management']
    },
    {
      icon: TrendingUp,
      title: 'Investment Properties',
      description: 'Build wealth through real estate with our investment property acquisition services.',
      features: ['ROI Analysis', 'Market Research', 'Property Management', 'Portfolio Growth']
    },
    {
      icon: Key,
      title: 'First-Time Buyers',
      description: 'Special programs and guidance for first-time homebuyers navigating their initial purchase.',
      features: ['Education Programs', 'Financing Options', 'Down Payment Assistance', 'Step-by-Step Guidance']
    },
    {
      icon: Home,
      title: 'Property Management',
      description: 'Comprehensive property management services for landlords and real estate investors.',
      features: ['Tenant Screening', 'Maintenance Coordination', 'Rent Collection', 'Property Inspections']
    },
    {
      icon: FileText,
      title: 'Market Analysis',
      description: 'Detailed market reports and property valuations to inform your real estate decisions.',
      features: ['Comparative Analysis', 'Trend Reports', 'Valuation Services', 'Investment Insights']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Real Estate Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From first-time buyers to seasoned investors, we offer the complete range of services to meet all your real estate needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="text-blue-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Discuss Your Needs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;