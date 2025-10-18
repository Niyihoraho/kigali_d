'use client';

import { useState, useEffect, useRef } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{id: number, text: string, isUser: boolean, timestamp: Date}>>([]);
  const [inputText, setInputText] = useState('');
  const [messageCount, setMessageCount] = useState(0);
  const [hasWelcomed, setHasWelcomed] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  // Auto-scroll when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-scroll when chat opens
  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [isOpen]);

  const detectService = (message: string): string | null => {
    const services = {
      'room': ['room', 'rooms', 'accommodation', 'stay', 'sleep', 'bed', 'suite', 'deluxe', 'executive', 'presidential'],
      'dining': ['dining', 'restaurant', 'food', 'meal', 'breakfast', 'lunch', 'dinner', 'eat', 'menu', 'cuisine'],
      'conference': ['conference', 'meeting', 'event', 'business', 'seminar', 'workshop', 'presentation', 'boardroom'],
      'garden': ['garden', 'outdoor', 'patio', 'terrace', 'nature', 'green', 'landscape', 'relaxation'],
      'spa': ['spa', 'massage', 'wellness', 'relax', 'therapy', 'treatment', 'beauty'],
      'pool': ['pool', 'swimming', 'swim', 'water', 'aqua'],
      'gym': ['gym', 'fitness', 'exercise', 'workout', 'training', 'health'],
      'wifi': ['wifi', 'internet', 'connection', 'online', 'network'],
      'parking': ['parking', 'car', 'vehicle', 'garage', 'valet']
    };

    const lowerMessage = message.toLowerCase();
    
    for (const [service, keywords] of Object.entries(services)) {
      if (keywords.some(keyword => lowerMessage.includes(keyword))) {
        return service;
      }
    }
    return null;
  };

  const getServiceResponse = (service: string): string => {
    const serviceResponses = {
      'room': `🏨 **ROOMS & ACCOMMODATION**\n\nWe offer luxurious accommodations with modern amenities:\n\n• Deluxe Rooms - Comfortable and elegant\n• Executive Suites - Spacious with premium features\n• Presidential Suites - Ultimate luxury experience\n\nAll rooms include:\n✓ Air conditioning\n✓ Free WiFi\n✓ Flat-screen TV\n✓ Room service\n✓ Daily housekeeping\n\nFor room availability and booking, please contact us:\n📞 +250782083001 / 252581330\n📧 Hotel.dipolmat@gmail.com`,
      
      'dining': `🍽️ **DINING & RESTAURANT**\n\nExperience exquisite dining at KIGALI DIPLOMAT Hotel:\n\n• Restaurant - Fine dining with local and international cuisine\n• Bar - Premium drinks and cocktails\n• Room Service - 24/7 food delivery to your room\n• Breakfast - Complimentary morning meals\n\nOur culinary team prepares:\n✓ Fresh local ingredients\n✓ International specialties\n✓ Vegetarian options\n✓ Custom dietary requirements\n\nFor dining reservations and special requests:\n📞 +250782083001 / 252581330\n📧 Hotel.dipolmat@gmail.com`,
      
      'conference': `🏢 **CONFERENCE & MEETING FACILITIES**\n\nPerfect for business events and meetings:\n\n• Conference Rooms - Professional meeting spaces\n• Boardroom - Executive meetings\n• Event Hall - Large gatherings and seminars\n• Audio/Visual Equipment - Modern presentation tools\n\nWe provide:\n✓ High-speed WiFi\n✓ Projector and screens\n✓ Sound system\n✓ Catering services\n✓ Professional staff support\n\nFor event planning and bookings:\n📞 +250782083001 / 252581330\n📧 Hotel.dipolmat@gmail.com`,
      
      'garden': `🌿 **GARDEN & OUTDOOR SPACES**\n\nRelax in our beautiful outdoor areas:\n\n• Garden Terrace - Peaceful outdoor seating\n• Landscaped Gardens - Beautiful natural surroundings\n• Outdoor Dining - Al fresco meals\n• Relaxation Areas - Quiet spots to unwind\n\nPerfect for:\n✓ Morning coffee\n✓ Evening relaxation\n✓ Private conversations\n✓ Photo opportunities\n✓ Fresh air and nature\n\nFor garden reservations and special events:\n📞 +250782083001 / 252581330\n📧 Hotel.dipolmat@gmail.com`,
      
      'spa': `🧘 **SPA & WELLNESS**\n\nRejuvenate with our wellness services:\n\n• Massage Therapy - Professional relaxation treatments\n• Beauty Services - Pampering and grooming\n• Wellness Programs - Health and fitness\n• Relaxation Areas - Peaceful treatment rooms\n\nServices include:\n✓ Deep tissue massage\n✓ Facial treatments\n✓ Body wraps\n✓ Stress relief therapy\n✓ Professional therapists\n\nFor spa appointments and treatments:\n📞 +250782083001 / 252581330\n📧 Hotel.dipolmat@gmail.com`,
      
      'pool': `🏊 **SWIMMING POOL**\n\nEnjoy our refreshing pool facilities:\n\n• Outdoor Pool - Crystal clear water\n• Poolside Service - Drinks and snacks\n• Sun Loungers - Comfortable relaxation\n• Pool Towels - Complimentary service\n\nPool features:\n✓ Clean, maintained water\n✓ Safety equipment\n✓ Poolside bar\n✓ Changing facilities\n✓ Professional lifeguards\n\nFor pool access and services:\n📞 +250782083001 / 252581330\n📧 Hotel.dipolmat@gmail.com`,
      
      'gym': `💪 **FITNESS & GYM**\n\nStay active with our fitness facilities:\n\n• Modern Gym Equipment - Latest fitness machines\n• Cardio Equipment - Treadmills, bikes, ellipticals\n• Weight Training - Free weights and machines\n• Personal Training - Professional fitness guidance\n\nGym features:\n✓ 24/7 access\n✓ Air conditioning\n✓ Clean facilities\n✓ Towel service\n✓ Fitness programs\n\nFor gym access and personal training:\n📞 +250782083001 / 252581330\n📧 Hotel.dipolmat@gmail.com`,
      
      'wifi': `📶 **FREE WiFi INTERNET**\n\nStay connected with our complimentary WiFi:\n\n• High-Speed Internet - Fast and reliable connection\n• Hotel-Wide Coverage - Available in all areas\n• Multiple Devices - Connect all your devices\n• 24/7 Access - Always available\n\nWiFi features:\n✓ Free for all guests\n✓ Secure connection\n✓ No data limits\n✓ Easy login process\n✓ Technical support available\n\nFor WiFi assistance and technical support:\n📞 +250782083001 / 252581330\n📧 Hotel.dipolmat@gmail.com`,
      
      'parking': `🚗 **PARKING FACILITIES**\n\nConvenient parking for our guests:\n\n• Secure Parking - Safe vehicle storage\n• Valet Service - Professional parking assistance\n• 24/7 Security - Monitored parking area\n• Easy Access - Convenient hotel entrance\n\nParking features:\n✓ Complimentary for guests\n✓ Covered parking available\n✓ Security cameras\n✓ Professional valet staff\n✓ Easy check-in/out\n\nFor parking reservations and valet service:\n📞 +250782083001 / 252581330\n📧 Hotel.dipolmat@gmail.com`
    };

    return serviceResponses[service as keyof typeof serviceResponses] || '';
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputText.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessageCount(prev => prev + 1);
    setInputText('');

    // Generate bot response based on message count and service detection
    setTimeout(() => {
      let botResponse = '';
      
      // First check if user mentioned any specific service
      const detectedService = detectService(inputText.trim());
      
      if (detectedService) {
        // User mentioned a specific service - provide detailed information
        botResponse = getServiceResponse(detectedService);
      } else if (messageCount === 0) {
        // First message - welcome
        botResponse = "Hello! Welcome to KIGALI DIPLOMAT Hotel! 👋\n\nI'm here to help you with any questions about our hotel. How can I assist you today?\n\nWe offer:\n🏨 Rooms & Accommodation\n🍽️ Dining & Restaurant\n🏢 Conference & Meeting Facilities\n🌿 Garden & Outdoor Spaces\n🧘 Spa & Wellness\n🏊 Swimming Pool\n💪 Fitness & Gym\n📶 Free WiFi\n🚗 Parking Facilities\n\nJust mention any service you're interested in!";
        setHasWelcomed(true);
      } else if (messageCount >= 1 && messageCount < 3) {
        // Continue conversation
        botResponse = "Thank you for your message! I'm here to help with any questions about our hotel services, rooms, or amenities. What would you like to know?\n\nYou can ask about:\n• Room types and availability\n• Dining options\n• Conference facilities\n• Garden areas\n• Spa services\n• Pool access\n• Gym facilities\n• WiFi and amenities\n• Parking services";
      } else {
        // Direct to contact after multiple messages
        botResponse = "I appreciate your interest in KIGALI DIPLOMAT Hotel! 😊\n\nFor personalized assistance and booking inquiries, please contact us directly:\n\n📞 Phone: +250782083001 / 252581330\n📧 Email: Hotel.dipolmat@gmail.com\n💬 WhatsApp: +250782083001\n📍 Address: KG566St/2, Kigali, Rwanda\n\nOur team is ready to help you with your booking!";
      }

      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      
      // Ensure scroll happens after bot response
      setTimeout(() => {
        scrollToBottom();
      }, 200);
    }, 1000);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // When opening chat, scroll to bottom after a short delay
      setTimeout(() => {
        scrollToBottom();
      }, 300);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 left-6 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-40"
      >
        {isOpen ? (
          <i className="fas fa-times text-xl"></i>
        ) : (
          <i className="fas fa-comments text-xl"></i>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 w-80 h-96 bg-white rounded-lg shadow-xl border z-50 flex flex-col">
          {/* Chat Header */}
          <div className="bg-red-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div>
              <h3 className="font-semibold">KIGALI DIPLOMAT Hotel</h3>
              <p className="text-xs opacity-90">Online Assistant</p>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span className="text-xs">Online</span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 mt-8">
                <i className="fas fa-comments text-3xl mb-2"></i>
                <p>Start a conversation!</p>
                <p className="text-sm">Ask me anything about our hotel.</p>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg ${
                      message.isUser
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.isUser ? 'text-red-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="bg-red-600 hover:bg-red-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
