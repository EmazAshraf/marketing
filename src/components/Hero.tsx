import React from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Find Your
              <span className="text-blue-600 block">Perfect Home</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              We're your trusted local real estate partners, dedicated to making your property dreams a reality. Whether you're buying, selling, or investing, we're here to guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                Explore Services
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <Phone className="text-blue-600" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Call us</p>
                  <p className="font-semibold text-gray-900">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Email us</p>
                  <p className="font-semibold text-gray-900">hello@brighteealestate.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:text-right">
            <img
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Beautiful modern home"
              className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto lg:mx-0 transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;