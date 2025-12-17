'use client';

import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- BRAND COLOR CONSTANTS ---
const YALE_BLUE = '#284b63';
const YALE_BLUE_DARK = '#1d3649';
const STORMY_TEAL = '#3c6e71';
const GRAPHITE = '#353535';
const ALABASTER_GREY = '#d9d9d9';


// --- SVG ICONS (omitted for brevity) ---
const ChatIcon = (props) => (
  <svg {...props} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const CloseIcon = (props) => (
  <svg {...props} className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const SendIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.677-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
  </svg>
);

const BotIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

// --- MESSAGE INTERFACE & KNOWLEDGE BASE (omitted for brevity) ---
interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
  isTyping?: boolean;
}

const faqKnowledgeBase = [
  // ... (Your original faqKnowledgeBase array)
  { question: "What is the DS Office Management System?", answer: "The DS Office Management System is a comprehensive, secure, and efficient solution designed to streamline administrative tasks, enhance data management, and improve workflow for government offices. It provides tools for document management, scheduling, internal communication, and compliance tracking.", keywords: ["what", "system", "management", "overview", "introduction", "ds office"] },
  { question: "How does the system ensure data security?", answer: "We employ multi-layered security protocols, including end-to-end encryption, role-based access control, and regular security audits. Our system is compliant with major government data protection standards to ensure your information is always safe.", keywords: ["security", "encryption", "data protection", "safe", "secure", "privacy"] },
  { question: "Can the system be customized for our department's needs?", answer: "Absolutely. The DS Office Management System is highly modular and customizable. We work with you to tailor features, workflows, and integrations to meet the unique requirements of your government office.", keywords: ["customize", "customization", "tailor", "modify", "specific", "department"] },
  { question: "Who do I contact for technical support?", answer: "We offer dedicated technical support through various channels, including email at hello@inzeedo.com, phone at +94 78 570 6441, and a client portal. Our support team is available during business hours to assist with any technical issues.", keywords: ["support", "contact", "help", "technical", "assistance", "phone", "email"] },
  { question: "What are your pricing plans?", answer: "We offer three pricing plans: Basic ($49/month), Professional ($99/month), and Enterprise (custom pricing). All plans include core features with additional services in higher tiers.", keywords: ["price", "pricing", "cost", "plan", "subscription", "fee", "monthly"] },
  { question: "How does the digital token system work?", answer: "Our digital token system allows citizens to queue virtually, receive SMS notifications about their turn, and minimize physical waiting time. This reduces wait times by 60-70% and improves citizen satisfaction.", keywords: ["token", "queue", "waiting", "appointment", "sms", "notification", "digital"] },
  { question: "How long does implementation take?", answer: "Implementation typically takes 2-4 weeks depending on your office size. We follow a 4-step process: Assessment & Planning, System Configuration, Staff Training, and Go-Live Support.", keywords: ["implement", "setup", "installation", "time", "duration", "process", "weeks"] },
  { question: "What features do you offer?", answer: "We offer Digital Tokens, Online Portal, Automated Workflows, Role-Based Access, Citizen Portal, Appointment System, Analytics Dashboard, and more. All designed specifically for DS Office operations.", keywords: ["features", "offer", "include", "tools", "functionality", "services"] },
  { question: "How to request a demo?", answer: "You can request a demo by clicking the 'Request Demo' button on our website, contacting us at demo@dsofficesystem.lk, or calling +94 11 234 5678. We'll schedule a personalized demonstration for your team.", keywords: ["demo", "demonstration", "trial", "request", "schedule", "show"] },
  { question: "What is the implementation process?", answer: "Our implementation follows 4 simple steps: 1) Assessment & Planning, 2) System Configuration, 3) Staff Training, and 4) Go-Live Support. We guide you through every step of digital transformation.", keywords: ["implementation", "process", "steps", "setup", "deploy"] }
];

// --- CHATBOT COMPONENT ---
export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your DS Office AI Assistant. Ask me about our system, pricing, security, or any questions you have. Try clicking the questions below or type your own!",
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

  const findBestAnswer = (userQuestion: string) => {
    const question = userQuestion.toLowerCase();
    
    const exactMatch = faqKnowledgeBase.find(faq => 
      faq.question.toLowerCase().includes(question) || 
      question.includes(faq.question.toLowerCase())
    );
    if (exactMatch) return exactMatch.answer;
    
    const scoredMatches = faqKnowledgeBase.map(faq => {
      const score = faq.keywords.reduce((total, keyword) => {
        if (question.includes(keyword)) return total + 1;
        return total;
      }, 0);
      return { faq, score };
    }).filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score);
    
    if (scoredMatches.length > 0) {
      return scoredMatches[0].faq.answer;
    }
    
    return "I'm here to help with DS Office System questions! You can ask about: system features, pricing, security, implementation, or support. Try rephrasing or click one of the questions below.";
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const userMessage: Message = { id: messages.length + 1, text: inputMessage, isBot: false, timestamp: new Date() };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    const typingMessage: Message = { id: messages.length + 2, text: "Thinking...", isBot: true, isTyping: true, timestamp: new Date() };

    setMessages(prev => [...prev, typingMessage]);

    setTimeout(() => {
      const botAnswer = findBestAnswer(userMessage.text);
      
      setMessages(prev => prev.filter(msg => !msg.isTyping));
      
      const botMessage: Message = { id: messages.length + 3, text: botAnswer, isBot: true, timestamp: new Date() };
      
      setMessages(prev => [...prev, botMessage]);
    }, 800);
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickQuestion = (question: string) => {
    setTimeout(() => {
        const userMessage: Message = { id: messages.length + 1, text: question, isBot: false, timestamp: new Date() };

        setMessages(prev => [...prev, userMessage]);

        const typingMessage: Message = { id: messages.length + 2, text: "Thinking...", isBot: true, isTyping: true, timestamp: new Date() };

        setMessages(prev => [...prev, typingMessage]);

        setTimeout(() => {
            const botAnswer = findBestAnswer(question);
            
            setMessages(prev => prev.filter(msg => !msg.isTyping));
            
            const botMessage: Message = { id: messages.length + 3, text: botAnswer, isBot: true, timestamp: new Date() };
            
            setMessages(prev => [...prev, botMessage]);
        }, 800);
    }, 50);
  };

  const quickQuestions = faqKnowledgeBase.map(faq => faq.question).slice(0, 6);

  const handleWhatsApp = () => {
    const whatsappNumber = "94785706441"; 
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Floating Buttons Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
        
        {/* WhatsApp Button (FIXED TRANSITION) */}
        <motion.button
          onClick={handleWhatsApp}
          className="w-14 h-14 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center group relative"
          style={{
            backgroundColor: '#25D366', 
            color: '#FFFFFF',
            boxShadow: '0 6px 20px rgba(37, 211, 102, 0.5)',
          }}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }} // Use simple pulse (1.1 for visibility)
          // FIX: Use ease for multi-value array instead of spring
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon />
          <span className="absolute inset-0 rounded-full animate-ping opacity-30"
            style={{ backgroundColor: '#25D366' }}
          ></span>
        </motion.button>

        {/* Chatbot Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center group relative"
          style={{
            backgroundColor: isOpen ? STORMY_TEAL : YALE_BLUE,
            color: '#FFFFFF',
            boxShadow: '0 6px 20px rgba(40, 75, 99, 0.5)'
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Open AI Assistant"
        >
          {isOpen ? <CloseIcon /> : <ChatIcon />}
        </motion.button>

      </div>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed bottom-24 right-6 z-50 w-96 h-[600px] rounded-2xl shadow-2xl flex flex-col border"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: ALABASTER_GREY,
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
            }}
          >
            {/* Header */}
            <div 
              className="p-4 rounded-t-2xl flex items-center justify-between"
              style={{
                background: YALE_BLUE
              }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <BotIcon />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">DS Office AI Assistant</h3>
                  <p className="text-white/80 text-xs">Instant Answers • 24/7 Support</p>
                </div>
              </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 p-4 overflow-y-auto" style={{ backgroundColor: '#F8FAFC' }}>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 ${message.isBot ? 'text-left' : 'text-right'}`}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}
                    className={`inline-block max-w-[85%] px-4 py-3 rounded-2xl shadow-md ${
                      message.isBot
                        ? 'text-left text-[#353535] bg-white rounded-bl-none border border-gray-100'
                        : 'text-right text-white rounded-br-none'
                      } ${message.isTyping ? 'italic text-gray-500' : ''}`}
                    style={{
                      backgroundColor: message.isBot ? (message.isTyping ? ALABASTER_GREY : '#FFFFFF') : STORMY_TEAL,
                    }}
                  >
                    {message.isTyping ? (
                      <div className="flex items-center space-x-2">
                        <span className="animate-pulse">●</span>
                        <span className="animate-pulse delay-150">●</span>
                        <span className="animate-pulse delay-300">●</span>
                      </div>
                    ) : (
                      <>
                        <p className="text-sm">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1" style={{ color: message.isBot ? '#6B7280' : ALABASTER_GREY }}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </>
                    )}
                  </motion.div>
                </div>
              ))}
              <div ref={messagesEndRef} />

              {/* Quick Questions - ALWAYS VISIBLE */}
              <div className="mt-6">
                <p className="text-sm font-medium mb-3" style={{ color: YALE_BLUE }}>
                  Quick questions to ask:
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {quickQuestions.map((question, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="p-3 text-sm rounded-lg transition-all duration-200 text-left truncate border hover:bg-white active:scale-[0.98]"
                      style={{
                        backgroundColor: ALABASTER_GREY,
                        borderColor: ALABASTER_GREY,
                        color: YALE_BLUE
                      }}
                      whileHover={{ backgroundColor: '#FFFFFF', borderColor: YALE_BLUE }}
                    >
                      {question}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t" style={{ borderColor: ALABASTER_GREY, backgroundColor: '#FFFFFF' }}>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type your question here..."
                  className="flex-1 px-4 py-3 rounded-full border focus:outline-none focus:ring-2 text-sm transition-all duration-200"
                  style={{
                    borderColor: ALABASTER_GREY,
                    backgroundColor: ALABASTER_GREY,
                    color: GRAPHITE,
                    '--tw-ring-color': STORMY_TEAL
                  }}
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  className="w-12 h-12 rounded-full flex items-center justify-center transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                  style={{ backgroundColor: YALE_BLUE, color: '#FFFFFF' }}
                  whileHover={{ scale: 1.05, backgroundColor: YALE_BLUE_DARK }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Send message"
                >
                  <SendIcon />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}