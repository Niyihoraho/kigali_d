'use client';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Book Your Stay</h2>
              <p className="text-sm text-gray-600 mt-1">KIGALI DIPLOMAT Hotel</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          
          {/* Contact Information */}
          <div className="p-6">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us to Book</h3>
                <p className="text-gray-600 mb-6">
                  Get in touch with us directly for the best rates and personalized service.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <i className="fas fa-map-marker-alt text-red-500 text-xl mr-4"></i>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">KG566St/2, Kigali, Rwanda</p>
                    <p className="text-gray-600">P.O Box 6746 Kigali - Rwanda</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <i className="fas fa-phone text-red-500 text-xl mr-4"></i>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+250782083001 / 252581330</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <i className="fas fa-envelope text-red-500 text-xl mr-4"></i>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">Hotel.dipolmat@gmail.com</p>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="grid grid-cols-1 gap-3 pt-4">
                <a 
                  href="https://wa.me/250782083001?text=Hello%2C%20I%20would%20like%20to%20book%20a%20room%20at%20KIGALI%20DIPLOMAT%20Hotel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg transition"
                >
                  <i className="fab fa-whatsapp mr-2 text-lg"></i>
                  Book via WhatsApp
                </a>
                
                <a 
                  href="tel:+250782083001"
                  className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition"
                >
                  <i className="fas fa-phone mr-2"></i>
                  Call Now
                </a>
                
                <a 
                  href="mailto:Hotel.dipolmat@gmail.com?subject=Room Booking Inquiry"
                  className="flex items-center justify-center bg-gray-500 hover:bg-gray-600 text-white p-3 rounded-lg transition"
                >
                  <i className="fas fa-envelope mr-2"></i>
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

