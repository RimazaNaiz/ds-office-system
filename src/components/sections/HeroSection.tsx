'use client';

import { useState } from 'react';

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleRequestDemo = () => {
    // Scroll to contact section or open demo modal
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: alert or redirect to demo page
      console.log('Request Demo clicked');
      alert('Redirecting to demo request...');
      // Or use: window.location.href = '/demo';
    }
  };

  const handleContactUs = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Contact Us clicked');
      alert('Please use the contact form below.');
    }
  };

  return (
    <section 
      id="home"
      className="text-white relative min-h-screen pt-16"
      style={{
        backgroundImage: "url('/images/bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Hero Content - Perfectly Aligned 2 Columns */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full py-16">
          {/* Left Column - Text Content - Perfectly Aligned */}
          <div className="text-center lg:text-left lg:pl-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              TRANSFORMATION STARTS HERE
            </h1>
            
            <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: '#D4D1D1' }}>
              Proven system serving 15,000+ citizens across 4 DS offices with 60–70% reduced wait times and 95% citizen satisfaction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={handleRequestDemo}
                className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-sm hover:scale-105 transform backdrop-blur-sm border border-white/20 hover:shadow-lg active:scale-95"
                style={{
                  backgroundColor: 'rgba(255, 143, 0, 0.9)',
                  color: '#FFFFFF'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 143, 0, 1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 143, 0, 0.9)';
                }}
              >
                Request Demo
              </button>
              <button 
                onClick={handleContactUs}
                className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-sm border-2 hover:scale-105 transform hover:shadow-xl backdrop-blur-lg active:scale-95"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  color: '#FFFFFF',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
              >
                Contact Us
              </button>
            </div>

           
          </div>

          {/* Right Column - Hero Image - Perfectly Aligned */}
          <div className="flex justify-center lg:justify-start items-center lg:pr-8">
            <div 
              className="w-full max-w-4xl h-[500px] rounded-lg hover:scale-105 transition-transform duration-500"
              style={{
                backgroundImage: "url('/images/hero.png')",
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'transparent'
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => {
            document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-white/70 hover:text-white transition-colors duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
}