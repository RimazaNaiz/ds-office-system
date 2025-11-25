import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ChatbotLayout from '../components/layout/ChatbotLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DS Office System - Digital Transformation for Government Offices',
  description: 'Modern DS Office Management System serving citizens with 95% satisfaction and 60-70% reduced wait times.',
  icons: {
    icon: '/images/titile icon.png',
    apple: '/images/titile icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChatbotLayout>
          <Header />
          <main className="relative">
            {children}
          </main>
          <Footer />
        </ChatbotLayout>
      </body>
    </html>
  );
}