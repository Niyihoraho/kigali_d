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
      className={`fixed bottom-8 right-8 bg-red-600 hover:bg-red-700 text-white w-14 h-14 rounded-full flex justify-center items-center shadow-lg hover:shadow-xl transition-all duration-300 z-50 group ${
        isVisible ? 'block' : 'hidden'
      }`}
    >
      <Image 
        src="/logo/logo.png" 
        alt="KIGALI DIPLOMAT Hotel Logo" 
        width={28} 
        height={28}
        className="rounded-full transition-transform duration-300 group-hover:scale-110"
      />
    </button>
  );
}
