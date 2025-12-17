'use client';

import {
  useState,
  useRef,
  useEffect,
  KeyboardEvent,
  SVGProps
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- BRAND COLOR CONSTANTS ---
const YALE_BLUE = '#284b63';
const YALE_BLUE_DARK = '#1d3649';
const STORMY_TEAL = '#3c6e71';
const GRAPHITE = '#353535';
const ALABASTER_GREY = '#d9d9d9';

// --- SVG ICONS (ONLY TYPING FIXED) ---
const ChatIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const SendIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967..." />
  </svg>
);

const BotIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944..." />
  </svg>
);

// --- MESSAGE INTERFACE ---
interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
  isTyping?: boolean;
}

// --- FAQ DATA (UNCHANGED) ---
const faqKnowledgeBase = [
  { question: "What is the DS Office Management System?", answer: "...", keywords: ["what","system","ds office"] },
  { question: "How does the system ensure data security?", answer: "...", keywords: ["security","data"] },
  { question: "Can the system be customized?", answer: "...", keywords: ["custom"] },
  { question: "Who do I contact for support?", answer: "...", keywords: ["support"] },
  { question: "What are your pricing plans?", answer: "...", keywords: ["price"] },
  { question: "How does the digital token system work?", answer: "...", keywords: ["token"] },
  { question: "How long does implementation take?", answer: "...", keywords: ["implement"] },
  { question: "What features do you offer?", answer: "...", keywords: ["features"] },
  { question: "How to request a demo?", answer: "...", keywords: ["demo"] },
  { question: "What is the implementation process?", answer: "...", keywords: ["process"] }
];

// --- CHATBOT COMPONENT ---
export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your DS Office AI Assistant. Ask me about our system, pricing, security, or any questions you have.",
      isBot: true,
      timestamp: new Date()
    }
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const findBestAnswer = (q: string) => {
    const lower = q.toLowerCase();
    const match = faqKnowledgeBase.find(f =>
      f.keywords.some(k => lower.includes(k))
    );
    return match?.answer || "Please contact our support team for more details.";
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          text: findBestAnswer(userMsg.text),
          isBot: true,
          timestamp: new Date()
        }
      ]);
    }, 800);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/94785706441', '_blank');
  };

  return (
    <>
      {/* FLOATING BUTTONS */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
        <motion.button
          onClick={handleWhatsApp}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
          style={{ backgroundColor: '#25D366', color: '#fff' }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <WhatsAppIcon />
        </motion.button>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
          style={{ backgroundColor: YALE_BLUE, color: '#fff' }}
        >
          {isOpen ? <CloseIcon /> : <ChatIcon />}
        </motion.button>
      </div>

      {/* CHAT WINDOW */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-96 h-[600px] rounded-2xl shadow-2xl flex flex-col"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            {/* everything else UNCHANGED */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
