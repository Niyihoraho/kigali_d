'use client';

import { useState, useEffect } from 'react';

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
      className={`fixed bottom-8 right-8 bg-red-600 text-white w-12 h-12 rounded-full flex justify-center items-center shadow-lg hover:bg-red-700 transition-all duration-300 z-50 ${
        isVisible ? 'block' : 'hidden'
      }`}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
}
