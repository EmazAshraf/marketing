import React from 'react';
import { Award, Users, Home, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Home, number: '500+', label: 'Homes Sold' },
    { icon: Users, number: '1000+', label: 'Happy Clients' },
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: TrendingUp, number: '98%', label: 'Success Rate' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Your Local Real Estate Experts
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                For over 15 years, we've been helping families and investors navigate the local real estate market with confidence. Our deep community knowledge, personalized approach, and unwavering commitment to your success set us apart.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Home className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Market Expertise</h3>
                  <p className="text-gray-600">We know every neighborhood, from pricing trends to community features that matter most to you.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Users className="text-amber-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Service</h3>
                  <p className="text-gray-600">Every client is unique. We tailor our approach to match your specific needs, timeline, and goals.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Real estate team consultation"
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="text-green-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Award Winning</p>
                  <p className="text-sm text-gray-600">Top Local Realtor 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-blue-600" size={28} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;