'use client';

import { useState, useEffect } from 'react';

export default function IntroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleExploreFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Explore Features clicked');
      alert('Navigating to features section...');
    }
  };

  return (
    <section id="intro" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ color: '#2F2F77' }}
          >
            Modernizing DS Office Operations
          </h1>
          
          {/* Description Text */}
          <p 
            className={`text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ color: '#4b5563' }}
          >
            DS Office Management System - Official digital transformation for DS offices. Replace paper files with secure digital workflows that serve citizens faster and make your team more productive.
          </p>
          
          {/* CTA Button */}
          <button 
            onClick={handleExploreFeatures}
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl active:scale-95 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              backgroundColor: '#FF8F00',
              color: '#FFFFFF',
              border: '2px solid #FF8F00'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E67E00';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 143, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FF8F00';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
            }}
          >
            Explore Features
          </button>

          {/* Feature Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Feature 1 - Checkmark with pulse animation */}
            <div 
              className="p-6 rounded-lg hover:shadow-lg transition duration-300 cursor-pointer group"
              onClick={handleExploreFeatures}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div 
                className="w-12 h-12 rounded-full mb-4 flex items-center justify-center mx-auto md:mx-0 group-hover:scale-110 transition-transform duration-300 relative"
                style={{ backgroundColor: 'rgba(255, 143, 0, 0.1)' }}
              >
                {/* Animated checkmark */}
                <svg 
                  className="w-6 h-6 group-hover:scale-125 transition-transform duration-300" 
                  style={{ color: '#FF8F00' }} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    className="group-hover:stroke-[3] transition-all duration-300"
                  />
                </svg>
                {/* Pulsing ring effect */}
                <div className="absolute inset-0 rounded-full border-2 border-orange-300 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center md:text-left group-hover:text-orange-500 transition-colors duration-300" style={{ color: '#2F2F77' }}>
                Digital Transformation
              </h3>
              <p className="text-gray-600 text-center md:text-left">
                Move from manual processes to automated digital workflows
              </p>
            </div>

            {/* Feature 2 - Shield with bounce animation */}
            <div 
              className="p-6 rounded-lg hover:shadow-lg transition duration-300 cursor-pointer group"
              onClick={handleExploreFeatures}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div 
                className="w-12 h-12 rounded-full mb-4 flex items-center justify-center mx-auto md:mx-0 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: 'rgba(255, 143, 0, 0.1)' }}
              >
                {/* Animated shield */}
                <svg 
                  className="w-6 h-6 group-hover:animate-bounce" 
                  style={{ color: '#FF8F00' }} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center md:text-left group-hover:text-orange-500 transition-colors duration-300" style={{ color: '#2F2F77' }}>
                Secure Workflows
              </h3>
              <p className="text-gray-600 text-center md:text-left">
                Protect sensitive data with enterprise-grade security measures
              </p>
            </div>

            {/* Feature 3 - Lightning with flash animation */}
            <div 
              className="p-6 rounded-lg hover:shadow-lg transition duration-300 cursor-pointer group"
              onClick={handleExploreFeatures}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div 
                className="w-12 h-12 rounded-full mb-4 flex items-center justify-center mx-auto md:mx-0 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden"
                style={{ backgroundColor: 'rgba(255, 143, 0, 0.1)' }}
              >
                {/* Animated lightning bolt */}
                <svg 
                  className="w-6 h-6 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:filter group-hover:drop-shadow-[0_0_8px_rgba(255,143,0,0.8)]" 
                  style={{ color: '#FF8F00' }} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                
                {/* Flash effect overlay */}
                <div className="absolute inset-0 bg-yellow-200 opacity-0 group-hover:opacity-40 group-hover:animate-pulse rounded-full transition-opacity duration-300"></div>
                
                {/* Sparkle effects */}
                <div className="absolute top-1 left-1 w-1 h-1 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                <div className="absolute bottom-1 right-1 w-1 h-1 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-150"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center md:text-left group-hover:text-orange-500 transition-colors duration-300" style={{ color: '#2F2F77' }}>
                Increased Productivity
              </h3>
              <p className="text-gray-600 text-center md:text-left">
                Streamline operations and serve citizens more efficiently
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}