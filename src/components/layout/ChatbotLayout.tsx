'use client';

import { ReactNode } from 'react';
import Chatbot from '@/components/chatbot/Chatbot';

interface ChatbotLayoutProps {
  children: ReactNode;
}

export default function ChatbotLayout({ children }: ChatbotLayoutProps) {
  return (
    <>
      {children}
      <Chatbot />
    </>
  );
}