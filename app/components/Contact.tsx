'use client';

export default function Contact() {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-red-500">Hotel Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <i className="fas fa-map-marker-alt text-red-500 mt-1 mr-3"></i>
                    <div>
                      <p className="font-medium">Address:</p>
                      <p className="text-gray-300">KIGALI, Rwanda</p>
                      <p className="text-gray-300">KG566St/2</p>
                      <p className="text-gray-300">P.O Box 6746 Kigali - Rwanda</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <i className="fas fa-phone text-red-500 mr-3"></i>
                    <div>
                      <p className="font-medium">Telephone:</p>
                      <p className="text-gray-300">+250782083001 / 252581330</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <i className="fas fa-envelope text-red-500 mr-3"></i>
                    <div>
                      <p className="font-medium">Email:</p>
                      <p className="text-gray-300">Hotel.dipolmat@yahoo.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6 text-red-500">Social Media</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-hashtag text-red-500 mr-3"></i>
                    <div>
                      <p className="font-medium">Follow us on all social media:</p>
                      <p className="text-gray-300">KIGALI DIPLOMATE Hotel</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 mt-6">
                    <a href="#" className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map placeholder */}
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold mb-4 text-red-500">Find Us on Map</h3>
            <div className="bg-gray-700 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-map-marked-alt text-4xl text-red-500 mb-4"></i>
                <p className="text-gray-300">Interactive map will be added here</p>
                <p className="text-sm text-gray-400 mt-2">KG566St/2, Kigali, Rwanda</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 KIGALI DIPLOMATE Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

