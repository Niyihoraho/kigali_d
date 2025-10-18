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
            <a href="#" className="hover:text-red-500 transition">Login / Signup</a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center">
            <Image 
              src="/logo/logo.png" 
              alt="Diplomate Hotel Logo" 
              width={48} 
              height={48}
              className="mr-3"
            />
          </a>
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#home" className="text-red-500 hover:text-white transition">HOME</a>
            <a href="#about" className="hover:text-red-500 transition">ABOUT US</a>
            <a href="#rooms" className="hover:text-red-500 transition">ROOMS</a>
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
          <a href="#home" className="block py-2 px-4 text-sm hover:bg-red-600">HOME</a>
          <a href="#about" className="block py-2 px-4 text-sm hover:bg-red-600">ABOUT US</a>
          <a href="#rooms" className="block py-2 px-4 text-sm hover:bg-red-600">ROOMS</a>
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
