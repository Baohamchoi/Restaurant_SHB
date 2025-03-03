import React from 'react';
import { ChefHat, Instagram, Facebook, Twitter, Pointer as Pinterest } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Logo and Social Media */}
        <div className="flex flex-col items-center mb-16">
          <div className="text-amber-500 mb-2">
            <ChefHat size={60} strokeWidth={1.5} />
          </div>
          <div className="text-3xl font-bold mb-2">
            <span className="text-amber-500">Resto</span>
            <span className="text-amber-700">Nest</span>
          </div>
          <div className="flex space-x-6 mt-4">
            <a href="#" className="text-white hover:text-amber-500">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-white hover:text-amber-500">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-amber-500">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-amber-500">
              <Pinterest size={24} />
            </a>
          </div>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold border-b border-gray-700 pb-2 mb-6 uppercase">Contact</h3>
            <p className="mb-3">5 Rue Dalou, 75015 Paris</p>
            <p className="mb-3">Call - <span className="text-amber-500">+33 156 78 89 56</span></p>
            <p className="text-amber-500">restonest@mail.com</p>
          </div>
          
          {/* Newsletter Section */}
          <div className="flex flex-col items-center">
            <p className="text-xl mb-2">Join our mailing list for updates,</p>
            <p className="text-xl mb-6">Get news & offers events.</p>
            
            <div className="flex w-full max-w-md">
              <input 
                type="email" 
                placeholder="Email" 
                className="flex-grow bg-black border-2 border-amber-500 text-white px-4 py-3 rounded-l-md focus:outline-none"
              />
              <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-3 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
          
          {/* Working Hours Section */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold border-b border-gray-700 pb-2 mb-6 uppercase">Working Hours</h3>
            <p className="mb-3">Mon - Fri: <span className="text-amber-500">7:00am - 10:00pm</span></p>
            <p className="mb-3">Sat: <span className="text-amber-500">7:00am - 6:00pm</span></p>
            <p>Sun: <span className="text-amber-500">8:00am - 6:00pm</span></p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p>© Copyright - <span className="text-amber-500">RestoNest</span> 2024 | Designed by <span className="text-amber-500">Sushmitha Shettigar</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;