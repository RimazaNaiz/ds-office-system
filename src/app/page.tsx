'use client';

import HeroSection from '@/components/sections/HeroSection';
import IntroSection from '@/components/sections/IntroSection';
import ImageGallerySection from '../components/sections/ImageGallerySection';
import ComparisonSection from '../components/sections/ComparisonSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import ImplementationSection from '../components/sections/ImplementationSection';
import PricingSection from '../components/sections/PricingSection';
import ContactSection from '@/components/sections/ContactSection';

// Correct path based on your file structure (src/components/chatbot/ChatbotLayout.tsx)
import ChatbotLayout from '@/components/layout/ChatbotLayout'; 

export default function Home() {
  return (
    // Wrap all content sections with the ChatbotLayout
    <ChatbotLayout>
      <HeroSection />
      <IntroSection/>
      <ImageGallerySection />
      <ComparisonSection />
      <FeaturesSection />
      <ImplementationSection />
      <PricingSection />
      <ContactSection/>
    </ChatbotLayout>
  );
}