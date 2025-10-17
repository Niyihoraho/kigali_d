'use client';

import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">ADDRESS</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                <span>123 Luxury Street, City Center, Metropolis, 10001</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3"></i>
                <span>info@diplomatehotel.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">INFORMATION</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Delivery Information</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Site Map</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">MY ACCOUNT</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">My Account</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Order History</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Wish List</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Newsletter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Returns</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">NEWSLETTER</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest news, tips, and advice.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 rounded-l-sm focus:outline-none text-gray-800 w-full"
                required
              />
              <button 
                type="submit" 
                className="bg-red-600 hover:bg-red-700 text-white px-4 rounded-r-sm"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 ArtCode</p>
        </div>
      </div>
    </footer>
  );
}
