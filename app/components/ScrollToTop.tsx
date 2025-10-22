'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-white text-white w-12 h-12 rounded-full flex justify-center items-center shadow-lg hover:bg-gray-100 transition-all duration-300 z-50 ${
        isVisible ? 'block' : 'hidden'
      }`}
    >
      <Image 
        src="/logo/logo.png" 
        alt="Diplomate Hotel Logo" 
        width={32} 
        height={32}
        className="rounded-full"
      />
    </button>
  );
}
