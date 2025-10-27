'use client';

import { useState } from 'react';
import Image from 'next/image';
import ContactModal from './ContactModal';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openContactModal = () => {
    setIsContactModalOpen(true);
    setIsMobileMenuOpen(false); // Close mobile menu if open
  };

  return (
    <header className="absolute w-full z-50 bg-transparent text-white">
      {/* Top bar */}
      <div className="bg-black bg-opacity-50 text-sm">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-red-500 transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-red-500 transition"></a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center group">
            <Image 
              src="/logo/logo.png?v=2" 
              alt="KIGALI DIPLOMAT Hotel Logo" 
              width={56} 
              height={56}
              className="mr-3 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                KIGALI DIPLOMAT
              </h1>
              <p className="text-xs text-gray-300 font-medium">
                HOTEL
              </p>
            </div>
          </a>
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#home" className="text-red-500 hover:text-white transition">HOME</a>
            <a href="#about" className="hover:text-red-500 transition">ABOUT US</a>
            <a href="#rooms" className="hover:text-red-500 transition">ROOMS</a>
            <a href="/gallery" className="hover:text-red-500 transition">GALLERY</a>
            <a href="#dining" className="hover:text-red-500 transition">DINING</a>
            <a href="#conference" className="hover:text-red-500 transition">CONFERENCE</a>
            <a href="#garden" className="hover:text-red-500 transition">GARDEN</a>
            <a href="#contact" className="hover:text-red-500 transition">CONTACT</a>
            <button 
              onClick={openContactModal}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-5 rounded-sm transition duration-300"
            >
              BOOK
            </button>
          </div>
          <button 
            className="md:hidden text-white focus:outline-none" 
            onClick={toggleMobileMenu}
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden mt-4 bg-black bg-opacity-90 rounded ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex items-center px-4 py-3 border-b border-gray-700">
            <Image 
              src="/logo/logo.png?v=2" 
              alt="KIGALI DIPLOMAT Hotel Logo" 
              width={32} 
              height={32}
              className="mr-3"
            />
            <div>
              <h2 className="text-sm font-bold text-white">KIGALI DIPLOMAT</h2>
              <p className="text-xs text-gray-300">HOTEL</p>
            </div>
          </div>
          <a href="#home" className="block py-2 px-4 text-sm hover:bg-red-600">HOME</a>
          <a href="#about" className="block py-2 px-4 text-sm hover:bg-red-600">ABOUT US</a>
          <a href="#rooms" className="block py-2 px-4 text-sm hover:bg-red-600">ROOMS</a>
          <a href="/gallery" className="block py-2 px-4 text-sm hover:bg-red-600">GALLERY</a>
          <a href="#dining" className="block py-2 px-4 text-sm hover:bg-red-600">DINING</a>
          <a href="#conference" className="block py-2 px-4 text-sm hover:bg-red-600">CONFERENCE</a>
          <a href="#garden" className="block py-2 px-4 text-sm hover:bg-red-600">GARDEN</a>
          <a href="#contact" className="block py-2 px-4 text-sm hover:bg-red-600">CONTACT</a>
          <button 
            onClick={openContactModal}
            className="block py-2 px-4 text-sm bg-red-600 hover:bg-red-700 w-full text-center"
          >
            BOOK
          </button>
        </div>
      </nav>
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </header>
  );
}
