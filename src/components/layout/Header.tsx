'use client';

import Link from 'next/link';
import { useState, useEffect, SVGProps } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// SVG Icons (using Slate/Graphite colors for general icons)
const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 6h16M4 12h16M4 18h16"
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

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        'home',
        'problem-solution',
        'features',
        'implementation',
        'pricing',
        'contact',
      ];

      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'problem-solution', label: 'Problem Solution' },
    { id: 'features', label: 'Features' },
    { id: 'implementation', label: 'Implementation' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' },
  ];

  const primaryCtaColor = '#284b63';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#284b63]/95 backdrop-blur-md shadow-lg border-b border-[#3c6e71]'
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
                isScrolled ? 'text-white' : 'text-[#284b63]'
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
                        ? 'text-[#3c6e71] bg-[#d9d9d9]'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                      : activeSection === item.id
                      ? 'text-[#3c6e71] bg-[#d9d9d9]'
                      : 'text-[#353535] hover:text-[#284b63] hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="ml-4 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 transform shadow-lg text-white"
                style={{ backgroundColor: primaryCtaColor }}
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
                  ? 'text-white hover:bg-white/10'
                  : 'text-[#284b63] hover:bg-[#d9d9d9]'
              }`}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 right-0 border-b shadow-2xl overflow-hidden"
              style={{
                backgroundColor: isScrolled ? '#FFFFFF' : '#d9d9d9',
                borderColor: '#3c6e71',
              }}
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left py-3 px-4 text-base font-medium rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-[#d9d9d9] text-[#3c6e71] font-semibold'
                        : 'text-[#353535] hover:bg-[#d9d9d9]/60'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 shadow-lg text-white"
                  style={{ backgroundColor: primaryCtaColor }}
                >
                  Request Demo
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
