'use client';

import {
  useState,
  useRef,
  useEffect,
  KeyboardEvent,
  SVGProps,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* =====================
   BRAND COLORS
===================== */
const YALE_BLUE = '#284b63';
const STORMY_TEAL = '#3c6e71';

/* =====================
   SVG ICONS
===================== */
const ChatIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
);

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const WhatsAppIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51" />
  </svg>
);

const BotIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622"
    />
  </svg>
);

/* =====================
   TYPES
===================== */
interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

/* =====================
   FAQ DATA
===================== */
const faq = [
  {
    q: 'What is the DS Office Management System?',
    a: 'It is a digital platform to modernize and streamline Divisional Secretariat operations.',
  },
  {
    q: 'What features do you offer?',
    a: 'Token system, citizen portal, appointments, workflows, and analytics.',
  },
  {
    q: 'How can I contact support?',
    a: 'You can contact us instantly via WhatsApp or through our contact page.',
  },
];

/* =====================
   COMPONENT
===================== */
export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm your DS Office AI Assistant.", isBot: true },
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const reply = (text: string) => {
    const found = faq.find(f => text.toLowerCase().includes(f.q.toLowerCase().split(' ')[0]));
    return found?.a || 'Please contact our team for more details.';
  };

  const send = (text: string) => {
    setMessages(m => [...m, { id: Date.now(), text, isBot: false }]);
    setTimeout(() => {
      setMessages(m => [...m, { id: Date.now() + 1, text: reply(text), isBot: true }]);
    }, 500);
  };

  const whatsapp = () => {
    const msg = encodeURIComponent(
      'Hello, I am interested in the DS Office Management System. Please share details.'
    );
    window.open(`https://wa.me/94785706441?text=${msg}`, '_blank');
  };

  return (
    <>
      {/* FLOATING BUTTONS */}
      <div className="fixed bottom-8 right-6 z-[9999] flex flex-col gap-4">
        {/* WhatsApp */}
        <motion.button
          onClick={whatsapp}
          className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <WhatsAppIcon className="w-7 h-7 text-white" />
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping" />
        </motion.button>

        {/* Chatbot */}
        <motion.button
          onClick={() => setOpen(o => !o)}
          className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl"
          style={{ backgroundColor: YALE_BLUE }}
          whileHover={{ scale: 1.1 }}
        >
          {open ? <CloseIcon className="w-6 h-6" /> : <ChatIcon className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* CHAT WINDOW */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-28 right-6 w-96 h-[540px] bg-white rounded-2xl shadow-2xl flex flex-col z-[9999]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="p-4 flex items-center gap-2 text-white" style={{ background: YALE_BLUE }}>
              <BotIcon />
              <span className="font-semibold">DS Office AI Assistant</span>
            </div>

            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              {messages.map(m => (
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

              {/* QUICK QUESTIONS */}
              <div className="mt-4 space-y-2">
                {faq.map(f => (
                  <button
                    key={f.q}
                    onClick={() => send(f.q)}
                    className="w-full text-left px-3 py-2 text-sm rounded-lg bg-gray-200 hover:bg-gray-300"
                  >
                    {f.q}
                  </button>
                ))}
              </div>

              <div ref={endRef} />
            </div>

            <div className="p-3 border-t flex gap-2">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && send(input)}
                className="flex-1 px-3 py-2 border rounded-full text-sm"
                placeholder="Type your message..."
              />
              <button
                onClick={() => send(input)}
                className="w-10 h-10 rounded-full text-white"
                style={{ backgroundColor: YALE_BLUE }}
              >
                ➤
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
