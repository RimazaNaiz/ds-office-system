'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion'; 
import Chatbot from '@/components/chatbot/Chatbot';

interface ChatbotLayoutProps {
  children: ReactNode;
}

export default function ChatbotLayout({ children }: ChatbotLayoutProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      // Apply the Main Background Color
      style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}
    >
      {children}
      <Chatbot />
    </motion.div>
  );
}