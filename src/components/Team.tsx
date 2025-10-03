import React from 'react';
import { Linkedin, Twitter, Mail, Phone } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Principal Broker',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With 15 years of experience and over 300 successful transactions, Sarah leads our team with expertise in luxury homes and first-time buyer programs.',
      specialties: ['Luxury Properties', 'First-Time Buyers', 'Negotiation'],
      email: 'sarah@brighteealestate.com',
      phone: '+27 987 653 549 ',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Michael Chen',
      role: 'Senior Agent',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Michael specializes in investment properties and commercial real estate, helping clients build wealth through strategic property acquisitions.',
      specialties: ['Investment Properties', 'Commercial Real Estate', 'Market Analysis'],
      email: 'michael@brighteealestate.com',
      phone: '+27 987 653 549 ',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Residential Specialist',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Emily focuses on residential sales and has a particular passion for helping families find their perfect home in great school districts.',
      specialties: ['Residential Sales', 'Family Homes', 'School Districts'],
      email: 'emily@brighteealestate.com',
      phone: '+27 987 653 549 ',
      linkedin: '#',
      twitter: '#'
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Meet Your Real Estate Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced professionals are committed to providing exceptional service and achieving outstanding results for every client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <span
                        key={specialtyIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone size={16} />
                        {member.phone}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail size={16} />
                        {member.email}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={member.linkedin}
                        className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors duration-200"
                      >
                        <Linkedin size={18} className="text-blue-600" />
                      </a>
                      <a
                        href={member.twitter}
                        className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors duration-200"
                      >
                        <Twitter size={18} className="text-blue-600" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;