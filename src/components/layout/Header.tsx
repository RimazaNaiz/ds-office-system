'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

// SVG Icons
const MenuIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'problem-solution', 'features', 'implementation', 'pricing', 'faq', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'problem-solution', label: 'Problem Solution' },
    { id: 'features', label: 'Features' },
    { id: 'implementation', label: 'Implementation' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('home')}
              className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              } hover:scale-105 transform`}
            >
              DS Office System
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    isScrolled 
                      ? activeSection === item.id
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      : activeSection === item.id
                        ? 'text-white bg-white/20'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="ml-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 transform shadow-lg"
                style={{
                  backgroundColor: '#FF8F00',
                  color: '#FFFFFF'
                }}
              >
                Request Demo
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors duration-300 rounded-lg ${
                isScrolled 
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' 
                  : 'text-white hover:text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            className="md:hidden absolute top-full left-0 right-0 backdrop-blur-xl border-b shadow-2xl"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.98)',
              borderColor: 'rgba(255, 143, 0, 0.3)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left py-3 px-4 text-base font-medium rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:scale-105 transform shadow-lg"
                  style={{
                    backgroundColor: '#FF8F00',
                    color: '#FFFFFF'
                  }}
                >
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}