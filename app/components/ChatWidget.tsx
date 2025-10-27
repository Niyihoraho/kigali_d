'use client';

import { useState, useEffect, useRef } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{id: number, text: string, isUser: boolean, timestamp: Date}>>([]);
  const [inputText, setInputText] = useState('');
  const [messageCount, setMessageCount] = useState(0);
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
      'rooms': `🏨 **ROOMS & ACCOMMODATION**\n\nWe offer comfortable accommodations:\n\n• **Standard Rooms** - $70/night\n  Perfect for business travelers and short stays\n\n• **Deluxe Rooms** - $90/night\n  Spacious and elegantly designed for leisure travelers\n\nFor room availability and booking:\n📞 +250782083001 / 252581330\n📧 Hotel.dipolmat@yahoo.com`,
      
      'dining': `🍽️ **DINING & BAR**\n\nA Culinary Journey at KIGALI DIPLOMATE Hotel:\n\n• **Restaurant** - Expert chefs create unforgettable culinary experiences\n• **Bar** - Handcrafted cocktails and premium drinks\n• **Breakfast** - Available for guests\n• **Reservations** - Book your dining experience\n\nWe offer:\n✓ Gourmet dishes crafted to perfection\n✓ Diverse menu for all tastes\n✓ Sophisticated and welcoming atmosphere\n✓ Memorable dining experiences\n\nFor dining reservations:\n📞 +250782083001 / 252581330\n📧 Hotel.dipolmat@yahoo.com`,
      
      'conference': `🏢 **CONFERENCE & EVENTS**\n\nHost Your Perfect Event:\n\n• **Conference Rooms** - State-of-the-art meeting spaces\n• **Event Spaces** - Perfect for business meetings, weddings, and social gatherings\n• **Professional Event Planning Team** - We ensure every detail is taken care of\n• **Flexible Spaces** - Can be customized to meet your needs\n• **Catering Services** - Wide range of options to suit any occasion\n\nFor event planning:\n📞 +250782083001 / 252581330\n📧 Hotel.dipolmat@yahoo.com`,
      
      'garden': `🌿 **GARDEN OASIS**\n\nA Tranquil Retreat:\n\n• **Beautiful Landscaped Gardens** - Peaceful and relaxing environment\n• **Escape from City Hustle** - Unwind and reconnect with nature\n• **Perfect for** - Morning strolls, afternoon reading, or evening cocktails\n• **Hidden Gem** - True tranquility in the city\n\nFor garden information:\n📞 +250782083001 / 252581330\n📧 Hotel.dipolmat@yahoo.com`
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
        botResponse = "Hello! Welcome to KIGALI DIPLOMATE Hotel! 👋\n\nI'm here to help you with any questions about our hotel. How can I assist you today?\n\nWe offer:\n🏨 Rooms & Accommodation (Standard $70, Deluxe $90)\n🍽️ Dining & Restaurant\n🏢 Conference & Events\n🌿 Garden Oasis\n\nJust mention any service you're interested in!";
      } else if (messageCount >= 1 && messageCount < 3) {
        // Continue conversation
        botResponse = "Thank you for your message! I'm here to help with any questions about our hotel services. What would you like to know?\n\nYou can ask about:\n• Room types and pricing (Standard $70, Deluxe $90)\n• Dining and restaurant options\n• Conference and event facilities\n• Garden and outdoor spaces\n• Booking and reservations";
      } else {
        // Direct to contact after multiple messages
        botResponse = "I appreciate your interest in KIGALI DIPLOMATE Hotel! 😊\n\nFor personalized assistance and booking inquiries, please contact us directly:\n\n📞 Phone: +250782083001 / 252581330\n📧 Email: Hotel.dipolmat@yahoo.com\n💬 WhatsApp: +250782083001\n📍 Address: KG566St/2, Kigali, Rwanda\n\nOur team is ready to help you with your booking!";
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
              <h3 className="font-semibold">KIGALI DIPLOMATE Hotel</h3>
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
