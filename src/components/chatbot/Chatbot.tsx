'use client';

import { useState, useRef, useEffect } from 'react';

// SVG Icons
const ChatIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const SendIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const HelpIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your DS Office Assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thank you for your message. I'm here to help with DS Office services, digital transformation, and any questions about our system. For specific technical support, please contact our team at support@dsofficesystem.lk",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What services do you offer?",
    "How to request a demo?",
    "Pricing information",
    "Technical support"
  ];

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        style={{
          backgroundColor: '#FF8F00',
          color: '#FFFFFF'
        }}
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </button>

      {/* Help/Support Button */}
      <button
        className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        style={{
          backgroundColor: '#1e40af',
          color: '#FFFFFF'
        }}
        onClick={() => {
          setIsOpen(true);
          setInputMessage('I need help with...');
        }}
      >
        <HelpIcon />
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div 
          className="fixed bottom-24 right-6 z-50 w-96 h-[600px] rounded-2xl shadow-2xl flex flex-col backdrop-blur-lg border"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderColor: 'rgba(255, 143, 0, 0.2)'
          }}
        >
          {/* Header */}
          <div 
            className="p-4 rounded-t-2xl flex items-center justify-between"
            style={{
              backgroundColor: '#FF8F00'
            }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <ChatIcon />
              </div>
              <div>
                <h3 className="text-white font-semibold">DS Office Assistant</h3>
                <p className="text-white text-xs opacity-90">Online • Ready to help</p>
              </div>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 ${message.isBot ? 'text-left' : 'text-right'}`}
              >
                <div
                  className={`inline-block max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800 rounded-bl-none'
                      : 'text-white rounded-br-none'
                  }`}
                  style={{
                    backgroundColor: message.isBot ? '#f3f4f6' : '#FF8F00'
                  }}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />

            {/* Quick Questions */}
            {messages.length <= 2 && (
              <div className="mt-4">
                <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
                <div className="space-y-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => setInputMessage(question)}
                      className="w-full text-left p-3 text-sm rounded-lg border hover:shadow-md transition duration-200"
                      style={{
                        borderColor: 'rgba(255, 143, 0, 0.3)',
                        backgroundColor: 'rgba(255, 143, 0, 0.05)'
                      }}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t" style={{ borderColor: 'rgba(255, 143, 0, 0.2)' }}>
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 rounded-full border focus:outline-none focus:ring-2 text-sm"
                style={{
                  borderColor: 'rgba(255, 143, 0, 0.3)',
                 
                }}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="w-12 h-12 rounded-full flex items-center justify-center transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: '#FF8F00',
                  color: '#FFFFFF'
                }}
              >
                <SendIcon />
              </button>
            </div>
            <p className="text-xs text-gray-500 text-center mt-2">
              Our AI assistant is here to help with DS Office services
            </p>
          </div>
        </div>
      )}
    </>
  );
}