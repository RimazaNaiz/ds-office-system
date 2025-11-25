'use client';

import { useState, useEffect, useRef } from 'react';

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Citizen Portal",
      description: "Digital profiles with complete service history, document storage, and communication tracking"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      ),
      title: "Token System",
      description: "Digital token system with real-time queue management and automated SMS notifications for citizens."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Appointment System",
      description: "Online appointment scheduling with automated reminders and optimized staff allocation for efficient service."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      title: "Notification System",
      description: "Keep citizens informed about their service status via automated SMS and email alerts at every stage."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Analytics Dashboard",
      description: "Gain insights into office performance, service trends, citizen satisfaction metrics and many."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Security",
      description: "Role-based access control and encryption ensure sensitive citizen data remains protected."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleRequestDemo = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Request Demo clicked');
      alert('Please use the contact form below.');
    }
  };

  const handleViewFeatures = () => {
    window.scrollTo({ 
      top: sectionRef.current?.offsetTop || 0, 
      behavior: 'smooth' 
    });
  };

  return (
    <section ref={sectionRef} id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: '#2F2F77' }}
          >
            What We Offer
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 mb-4 leading-relaxed">
              Explore features of the DS Office Management System
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Designed specifically for the unique needs of Divisional Secretariat operations
            </p>
          </div>
          
          {/* Decorative Divider */}
          <div className="mt-8 flex justify-center">
            <div 
              className="h-1 w-20 rounded-full"
              style={{ 
                background: 'linear-gradient(90deg, #FF8F00, #2F2F77)'
              }}
            ></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative"
              style={{
                border: '1px solid transparent',
                background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #FF8F00, #2F2F77) border-box'
              }}
            >
              {/* Icon Container */}
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"
                style={{
                  backgroundColor: 'rgba(255, 143, 0, 0.1)',
                  color: '#FF8F00'
                }}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 
                className="text-xl md:text-2xl font-bold mb-4 text-center"
                style={{ color: '#2F2F77' }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div 
            className="rounded-2xl p-8 md:p-12 relative"
            style={{
              background: 'linear-gradient(to right, #f9fafb, #fffbeb) padding-box, linear-gradient(135deg, #FF8F00, #2F2F77) border-box',
              border: '1px solid transparent'
            }}
          >
            <h3 
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: '#2F2F77' }}
            >
              Ready to Transform Your DS Office?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the digital revolution and provide exceptional service to your citizens with our comprehensive management system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleRequestDemo}
                className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl active:scale-95"
                style={{
                  backgroundColor: '#FF8F00',
                  color: '#FFFFFF',
                  border: '2px solid #FF8F00'
                }}
              >
                Request Demo
              </button>
              <button 
                onClick={handleViewFeatures}
                className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 transform border-2 hover:shadow-lg active:scale-95"
                style={{
                  borderColor: '#2F2F77',
                  color: '#2F2F77',
                  backgroundColor: 'transparent'
                }}
              >
                View All Features
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}