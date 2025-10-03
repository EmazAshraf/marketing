"use client";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import {Menu, X } from "lucide-react";
import { GiCheckMark } from "react-icons/gi";
// next/image and next/font are Next.js-specific; use standard assets for Vite
import { FaLinkedinIn ,FaFacebookF } from "react-icons/fa";
import { useState } from "react";

// Montserrat is loaded via CSS; use this object to keep existing usage sites
const montserrat = { className: 'font-montserrat' };

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      <header className="container mx-auto px-6 py-4">
      <nav className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center w-[80%]">
            <img src="/image.png" alt="Logo" width={200} height={100} className="h-10 w-auto" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-[#004D5C]">Home</a>
          <a href="#" className="text-gray-700 hover:text-[#004D5C]">About</a>
          <a href="#" className="text-gray-700 hover:text-[#004D5C]">Services</a>
          <a href="#" className="text-gray-700 hover:text-[#004D5C]">Packages</a>
          <a href="#" className="text-gray-700 hover:text-[#004D5C]">Contact</a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Quote Button (hidden on small screens) */}
        <div className="hidden md:block">
          <Button className="bg-[#004D5C] hover:bg-teal-800 text-white px-6 rounded-lg">
            Get a Quote
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <a href="#" className="block text-gray-700 hover:text-[#004D5C]">Home</a>
          <a href="#" className="block text-gray-700 hover:text-[#004D5C]">About</a>
          <a href="#" className="block text-gray-700 hover:text-[#004D5C]">Services</a>
          <a href="#" className="block text-gray-700 hover:text-[#004D5C]">Packages</a>
          <a href="#" className="block text-gray-700 hover:text-[#004D5C]">Contact</a>
          <Button className="bg-[#004D5C] hover:bg-teal-800 text-white w-full rounded-lg">
            Get a Quote
          </Button>
        </div>
      )}
    </header>

      <section className="relative overflow-hidden bg-[#F0F5FD]">
  <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      {/* Left Column */}
      <div className="flex flex-col space-y-6 sm:space-y-8 text-center md:text-left items-center md:items-start">
  <img src="/20Years.png" alt="20 Years" width={250} height={50} className="mx-auto md:mx-0" />

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
          Marketing<br />That Speaks<br />Logistics
        </h1>

        <p className="text-gray-600 text-base sm:text-lg">
          At MarketingInfoGraphics, we are a specialist logistics marketing agency across asset and non-asset operations. We build brands that buyers will always go hungry for.
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4 sm:gap-6 w-full sm:w-auto">
          <Button className="bg-[#004D5C] hover:bg-teal-800 text-white px-6 py-4 sm:px-8 sm:py-6 rounded-xl text-base">
            Get a Quote
          </Button>
          <Button className="bg-[#51C7D3] hover:bg-cyan-500 text-white px-6 py-4 sm:px-8 sm:py-6 rounded-xl text-base">
            See Packages
          </Button>
        </div>
      </div>

      {/* Right Column */}
      <div className="relative flex justify-center items-center">
        <div className="relative z-10">
          <img src="/HeroImage.png" alt="Hero Image" width={500} height={400} className="w-full max-w-[500px]" />
        </div>
      </div>

      {/* Blob Image */}
      <img
        src="/Blob.png"
        alt="Blob"
        width={600}
        height={400}
        className="hidden lg:block md:absolute right-0 top-0 scale-110 z-0"
      />
    </div>
  </div>
</section>


      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* Image */}
    <div className="relative w-full max-w-[500px] mx-auto md:mx-0">
      <img
        width={500}
        height={300}
        src="/Quick.png"
        alt="Website wireframes"
        className="w-full h-auto"
      />
    </div>

    {/* Text Content */}
    <div>
      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 ${montserrat.className}`}>
        A Quick Into<br />To Us
      </h2>
      <p className="text-gray-600 mb-4 leading-relaxed text-base sm:text-lg">
        MarketingInfoGraphics.com is a specialist agency built by people who have driven trucks, planned logistics, been owner operators, and brokers to shippers. We know what buyers want drivers want, for—and how to position your company to stand out.
      </p>
      <p className="text-gray-600 mb-8 leading-relaxed text-base sm:text-lg">
        We align brand, website, social media, and paid ads so you look credible, current traffic, not just cold shines, you fuel. And the right drivers—the ones that will grow your business—find you, not the posted work, downline requisite, and signaled drivers.
      </p>

      {/* Proof Points */}
      <div className="space-y-4">
        <h3 className={`text-xl sm:text-2xl font-semibold mb-4 ${montserrat.className}`}>Proof points</h3>

        {[
          "Deep experience across asset and non-asset logistics",
          "We've built brands that drive shippers to call and drivers to apply",
          "Driver recruiting funnels that support ROI metrics",
          "Fast landing pages for campaigns and trailer-wrap follow-ups"
        ].map((point, i) => (
          <div key={i} className="flex items-start space-x-3">
            <GiCheckMark className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-1" />
            <p className="text-gray-700 text-sm sm:text-base">{point}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* Clients Section */}
<section className="py-12 sm:py-16 md:py-20 bg-white">
  <div className="container mx-auto px-4 sm:px-6">
    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-12 sm:mb-16 ${montserrat.className}`}>
      Our Previous Clients
    </h2>

    <div className="flex flex-wrap justify-center sm:justify-between items-center gap-6 sm:gap-8">
      {["g1.png", "g2.png", "g3.png", "g4.png", "g5.png"].map((logo, index) => (
        <img
          key={index}
          src={`/${logo}`}
          alt={`Client ${index + 1}`}
          width={160}
          height={40}
          className="object-contain"
        />
      ))}
    </div>
  </div>
</section>


      <section className="bg-[#F0F5FD] py-12 sm:py-16 md:py-20">
  <div className="container mx-auto px-4 sm:px-6">
    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-16 sm:mb-20 ${montserrat.className}`}>
      Our Services
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 md:gap-10">
      {[
        {
          icon: "/Frame1.png",
          title: "Web Design",
          desc: "Landing pages for drivers and for company websites. Built with a clear conversion focus.",
          bullets: [
            "Driver funnels and apply flows",
            "Complete company sites",
            "Hosting & analytics setup",
          ],
        },
        {
          icon: "/Frame2.png",
          title: "Branding",
          desc: "Clean, consistent identity across every touchpoint so drivers and shippers remember you.",
          bullets: [
            "Logos, colors, fonts, PDFs, letter decks",
            "Social profiles & templates",
            "Swag (hats, tees, decals) direction",
          ],
        },
        {
          icon: "/Frame3.png",
          title: "Social Media",
          desc: "Professional presence that signals trust, with content calendars and engagement reporting.",
          bullets: [
            "Cover photos & profile swap",
            "Content calendars & daily posting",
            "Engagement reporting",
          ],
        },
        {
          icon: "/Frame4.png",
          title: "PPC / Advertising",
          desc: "Meta & Google campaigns for driver acquisition, with creative optimization.",
          bullets: [
            "Campaign management & creative optimization",
            "Ongoing management & optimization",
            "Conversion tracking and dashboards",
          ],
        },
      ].map((service, index) => (
        <div
          key={index}
          className="bg-white flex flex-col items-center rounded-2xl shadow-lg p-6 sm:p-8 pt-0 border border-black"
        >
          <img
            src={service.icon}
            alt={service.title}
            width={90}
            height={80}
            className="scale:130 lg:scale-150 -translate-y-1/2"
          />
          <h3
            className={`text-xl sm:text-2xl text-[#004D5C] font-semibold text-center mb-4 ${montserrat.className}`}
          >
            {service.title}
          </h3>
          <p className="text-gray-600 text-center mb-6 text-sm sm:text-base">{service.desc}</p>
          <ul className="space-y-3">
            {service.bullets.map((point, idx) => (
              <li key={idx} className="flex items-start">
                <GiCheckMark className="w-5 h-5 text-cyan-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>


      <section className="bg-white py-20">
  <div className=" px-6">
    <h2 className={`text-5xl font-semibold text-center mb-16 ${montserrat.className}`}>
      Our Pricing
    </h2>
    <div className="grid md:grid-cols-2 gap-8 container mx-auto">

      {/* Complete Overhaul Card */}
      <div className="bg-white  rounded-2xl  border border-gray-200 overflow-hidden">
        <div className="relative  overflow-hidden rounded-t-2xl">
          {/* Tilted Background */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundColor: '#004D5C', // teal-700
              transform: 'skewY(4deg)',
              transformOrigin: 'top right',
            }}
          />
          {/* Content */}
          <div className="relative z-10 flex justify-between items-start p-6 h-full text-white">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Complete Overhaul!</h3>
            </div>
            <div className="text-right">
              <div className="text-4xl font-semibold">$2,999</div>
              <span className="text-xs">(Featured)</span>

            </div>
          </div>
        </div>
        <div className="p-8 pt-6">
          <p className={`font-md mb-6 ${montserrat.className} text-2xl`}>Everything included:</p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <GiCheckMark className="w-5 h-5 text-cyan-500 mr-3 mt-0.5" />
              <span className="text-gray-700">New website (or refresh)</span>
            </li>
            <li className="flex items-start">
              <GiCheckMark className="w-5 h-5 text-cyan-500 mr-3 mt-0.5" />
              <span className="text-gray-700">Social pages + cover photos</span>
            </li>
            <li className="flex items-start">
              <GiCheckMark className="w-5 h-5 text-cyan-500 mr-3 mt-0.5" />
              <span className="text-gray-700">Branded PDFs & email signatures</span>
            </li>
            <li className="flex items-start">
              <GiCheckMark className="w-5 h-5 text-cyan-500 mr-3 mt-0.5" />
              <span className="text-gray-700">1 month of social media posts & management</span>
            </li>
            <li className="flex items-start">
              <GiCheckMark className="w-5 h-5 text-cyan-500 mr-3 mt-0.5" />
              <span className="text-gray-700">Meta or Google Ads campaign setup with ad designs</span>
            </li>
            <li className="flex items-start">
              <GiCheckMark className="w-5 h-5 text-cyan-500 mr-3 mt-0.5" />
              <span className="text-gray-700">1 month of ads management & optimization</span>
            </li>
          </ul>
        </div>
        <div className="p-8 pt-0">
          <Button className="w-full mt-8 bg-[#004D5C] hover:bg-teal-800 text-white py-6 text-lg rounded-md">
           Lets Make Magic!
          </Button>
        </div>
      </div>

      {/* Bring Back to Life Card */}
      <div className="bg-white flex flex-col justify-between rounded-2xl  border  overflow-hidden">
        <div className="relative overflow-hidden rounded-t-2xl">
          {/* Tilted Background */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundColor: '#51C7D3', // cyan-400
              transform: 'skewY(4deg)',
              transformOrigin: 'top right',
            }}
          />
          {/* Content */}
          <div className="relative z-10 flex justify-between items-start p-6 h-full text-white">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Bring Back to Life!</h3>
            </div>
            <div className="text-right">
              <div className="text-4xl font-semibold">$1,799</div>
              <span className="text-xs text-transparent">(Featured)</span>

            </div>
          </div>
        </div>
        <div className="p-8 pt-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <GiCheckMark className="w-5 h-5 text-cyan-500 mr-3 mt-0.5" />
              <span className="text-gray-700">Website redesign</span>
            </li>
            <li className="flex items-start">
              <GiCheckMark className="w-5 h-5 text-cyan-500 mr-3 mt-0.5" />
              <span className="text-gray-700">Updated social cover photos</span>
            </li>
            <li className="flex items-start">
              <GiCheckMark className="w-5 h-5 text-cyan-500 mr-3 mt-0.5" />
              <span className="text-gray-700">Email signatures + branded PDF documents</span>
            </li>
            <li className="flex items-start">
              <GiCheckMark className="w-5 h-5 text-cyan-500 mr-3 mt-0.5" />
              <span className="text-gray-700">20 social media posts (scheduled)</span>
            </li>
          </ul>
          
        </div>
        <div className="p-8 pt-0">
          <Button className="w-full mt-8 bg-[#004D5C] hover:bg-teal-800 text-white py-6 text-lg rounded-md">
            Bring Us Back To Life!
          </Button>
        </div>
      </div>

    </div>
  </div>
</section>


      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className={`text-5xl font-semibold text-center mb-16 ${montserrat.className}`}>Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="relative">
              <img
                src="/Mask group.png"
                alt="Contact Us"
                width={500}
                height={400}
                className="relative rounded-3xl "
              />
            </div>

            <div className="bg-[#F0F5FD] rounded-2xl  p-8">
              <h3 className={`text-4xl font-md mb-6 ${montserrat.className} text-[#004D5C]`}>Get In Touch With Us</h3>
              <p className="text-gray-600 mb-8">We'll reply within one business day.</p>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="rounded-md" />
                  <Input placeholder="Last name" className="rounded-md" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Company" className="rounded-md" />
                  <Input placeholder="Email" type="email" className="rounded-md" />
                </div>
                <Input placeholder="Phone Number" type="tel" className="rounded-md" />
                <select className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600">
                  <option>Service Needed</option>
                  <option>Web Design</option>
                  <option>Branding</option>
                  <option>Social Media</option>
                  <option>PPC / Advertising</option>
                </select>
                <Input placeholder="Trailer Number" className="rounded-md" />
                <Button className="w-full bg-[#004D5C] hover:bg-teal-800 text-white py-6 text-lg rounded-md">
                  Get My Quote
                </Button>
                <p className="text-center text-sm text-gray-500">
                  We'll only use your info to respond to your inquiry
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#004D5C] text-white pt-12">
  <div className="container mx-auto px-6">
    
    {/* Top Row: Logo and Contact */}
    <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 md:gap-0">
      
      {/* Logo */}
      <div className="flex items-center space-x-0">
  <img src="/Group.png" alt="Logo Left" width={200} height={50} className="h-8 lg:h-10" />
  <img src="/Group (2).png" alt="Logo Right" width={200} height={50} className="h-8 lg:h-10 -translate-x-3" />
      </div>

      {/* Email and Social Icons */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Email */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-teal-900" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <span className="text-sm text-white">info@marketingforlogistics.com</span>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-3">
          <a
            href="#"
            className="w-8 h-8 border border-yellow-400 text-white rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-[#004D5C] transition"
          >
                       <FaFacebookF/>

          </a>
          <a
            href="#"
            className="w-8 h-8 border border-yellow-400 text-white rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-[#004D5C] transition"
          >
                       <FaLinkedinIn/>

          </a>
        </div>
      </div>
    </div>

    {/* Nav Links */}
    <div className="border-t border-white/30 pt-6 pb-4">
      <div className="flex flex-col justify-between items-center text-sm text-white gap-4">
        
        <div className="flex space-x-8">
          <a href="#" className="hover:text-cyan-400">Home</a>
          <a href="#" className="hover:text-cyan-400">About</a>
          <a href="#" className="hover:text-cyan-400">Services</a>
          <a href="#" className="hover:text-cyan-400">Packages</a>
          <a href="#" className="hover:text-cyan-400">Contact</a>
        </div>

        <div className="border-t border-white/30 w-full pt-6 text-center text-gray-300">
          <div>Copyright © MarketingForLogistics — All rights reserved.</div>
          <div className="text-xs">Proudly built by logistics people</div>
        </div>

      </div>
    </div>

  </div>
</footer>

    </div>
  );
}
