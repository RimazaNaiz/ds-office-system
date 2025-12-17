'use client';

import {
  useState,
  useRef,
  useEffect,
  KeyboardEvent,
  SVGProps,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- BRAND COLOR CONSTANTS ---
const YALE_BLUE = '#284b63';
const YALE_BLUE_DARK = '#1d3649';
const STORMY_TEAL = '#3c6e71';
const GRAPHITE = '#353535';
const ALABASTER_GREY = '#d9d9d9';

// --- SVG ICONS ---
const ChatIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
);

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const SendIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
    />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
  </svg>
);

const BotIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
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

// --- KNOWLEDGE BASE ---
const faqKnowledgeBase = [
  {
    question: 'What is the DS Office Management System?',
    answer:
      'The DS Office Management System is a secure digital solution designed to streamline Divisional Secretariat operations.',
    keywords: ['what', 'system', 'ds office'],
  },
  {
    question: 'What features do you offer?',
    answer:
      'We offer Citizen Portal, Token System, Appointment System, Analytics Dashboard, and Workflow Automation.',
    keywords: ['features', 'offer', 'services'],
  },
  {
    question: 'How can I contact support?',
    answer:
      'You can contact support via WhatsApp, email, or phone. Our team is available during business hours.',
    keywords: ['support', 'contact', 'help'],
  },
];

// --- CHATBOT COMPONENT ---
export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your DS Office AI Assistant. How can I help you?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const findBestAnswer = (question: string) => {
    const q = question.toLowerCase();
    const match = faqKnowledgeBase.find((faq) =>
      faq.keywords.some((k) => q.includes(k))
    );
    return (
      match?.answer ||
      'Please contact our support team for more detailed assistance.'
    );
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');

    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        text: findBestAnswer(userMsg.text),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 700);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <motion.button
          onClick={() => setIsOpen((v) => !v)}
          className="w-14 h-14 rounded-full text-white shadow-xl flex items-center justify-center"
          style={{ backgroundColor: YALE_BLUE }}
        >
          {isOpen ? <CloseIcon /> : <ChatIcon />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-96 h-[520px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="p-4 text-white flex items-center gap-2" style={{ background: YALE_BLUE }}>
              <BotIcon />
              <h3 className="font-semibold">DS Office AI Assistant</h3>
            </div>

            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              {messages.map((m) => (
                <div key={m.id} className={`mb-3 ${m.isBot ? 'text-left' : 'text-right'}`}>
                  <span
                    className={`inline-block px-4 py-2 rounded-xl text-sm ${
                      m.isBot ? 'bg-white text-gray-800' : 'bg-teal-600 text-white'
                    }`}
                  >
                    {m.text}
                  </span>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 flex gap-2 border-t">
              <input
                className="flex-1 px-3 py-2 border rounded-full text-sm"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message..."
              />
              <button
                onClick={handleSendMessage}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                style={{ backgroundColor: YALE_BLUE }}
              >
                <SendIcon />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
