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
      'rooms': ['room', 'rooms', 'accommodation', 'stay', 'sleep', 'bed', 'standard', 'deluxe', 'booking', 'reservation'],
      'dining': ['dining', 'restaurant', 'food', 'meal', 'breakfast', 'lunch', 'dinner', 'eat', 'menu', 'cuisine', 'bar', 'drink'],
      'conference': ['conference', 'meeting', 'event', 'business', 'seminar', 'workshop', 'presentation', 'boardroom', 'wedding'],
      'garden': ['garden', 'outdoor', 'patio', 'terrace', 'nature', 'green', 'landscape', 'relaxation', 'oasis']
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
      'rooms': `🏨 **ROOMS & ACCOMMODATION**\n\nWe offer comfortable accommodations with modern amenities:\n\n• **Standard Rooms** - $70/night\n  Perfect for business travelers and short stays\n\n• **Deluxe Rooms** - $90/night\n  Spacious and elegantly designed for leisure travelers\n\nAll rooms include:\n✓ Air conditioning\n✓ Free WiFi\n✓ Flat-screen TV\n✓ Room service\n✓ Daily housekeeping\n✓ Modern amenities\n\nFor room availability and booking:\n📞 +250782083001 / 252581330\n📧 Hotel.dipolmat@gmail.com`,
      
      'dining': `🍽️ **DINING & RESTAURANT**\n\nExperience exquisite dining at KIGALI DIPLOMAT Hotel:\n\n• **Restaurant** - Fine dining with local and international cuisine\n• **Bar** - Premium drinks and handcrafted cocktails\n• **Room Service** - 24/7 food delivery to your room\n• **Breakfast** - Complimentary morning meals\n\nOur culinary features:\n✓ Fresh local ingredients\n✓ International specialties\n✓ Vegetarian options\n✓ Custom dietary requirements\n✓ Expert chefs and mixologists\n✓ Sophisticated atmosphere\n\nFor dining reservations:\n📞 +250782083001 / 252581330\n📧 Hotel.dipolmat@gmail.com`,
      
      'conference': `🏢 **CONFERENCE & EVENTS**\n\nPerfect for business and social events:\n\n• **Conference Rooms** - Professional meeting spaces\n• **Boardroom** - Executive meetings\n• **Event Hall** - Large gatherings and seminars\n• **Audio/Visual Equipment** - Modern presentation tools\n\nEvent services:\n✓ High-speed WiFi\n✓ Projector and screens\n✓ Sound system\n✓ Catering services\n✓ Professional staff support\n✓ Event planning team\n✓ Flexible customizable spaces\n\nPerfect for business meetings, weddings, and social gatherings.\n\nFor event planning:\n📞 +250782083001 / 252581330\n📧 Hotel.dipolmat@gmail.com`,
      
      'garden': `🌿 **GARDEN OASIS**\n\nEscape to our tranquil outdoor retreat:\n\n• **Garden Terrace** - Peaceful outdoor seating\n• **Landscaped Gardens** - Beautiful natural surroundings\n• **Outdoor Dining** - Al fresco meals\n• **Relaxation Areas** - Quiet spots to unwind\n\nPerfect for:\n✓ Morning coffee\n✓ Evening relaxation\n✓ Private conversations\n✓ Photo opportunities\n✓ Fresh air and nature\n✓ Morning strolls\n✓ Afternoon reading\n✓ Evening cocktails\n\nA true hidden gem in the city!\n\nFor garden reservations:\n📞 +250782083001 / 252581330\n📧 Hotel.dipolmat@gmail.com`
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
        botResponse = "Hello! Welcome to KIGALI DIPLOMAT Hotel! 👋\n\nI'm here to help you with any questions about our hotel. How can I assist you today?\n\nWe offer:\n🏨 Rooms & Accommodation (Standard $70, Deluxe $90)\n🍽️ Dining & Restaurant\n🏢 Conference & Events\n🌿 Garden Oasis\n\nJust mention any service you're interested in!";
        setHasWelcomed(true);
      } else if (messageCount >= 1 && messageCount < 3) {
        // Continue conversation
        botResponse = "Thank you for your message! I'm here to help with any questions about our hotel services. What would you like to know?\n\nYou can ask about:\n• Room types and pricing (Standard $70, Deluxe $90)\n• Dining and restaurant options\n• Conference and event facilities\n• Garden and outdoor spaces\n• Booking and reservations";
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
