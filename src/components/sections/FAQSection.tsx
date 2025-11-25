'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const faqs = [
    {
      id: 1,
      question: "What is the DS Office Management System?",
      answer: "The DS Office Management System is a comprehensive, secure, and efficient solution designed to streamline administrative tasks, enhance data management, and improve workflow for government offices. It provides tools for document management, scheduling, internal communication, and compliance tracking.",
    },
    {
      id: 2,
      question: "How does the system ensure data security?",
      answer: "We employ multi-layered security protocols, including end-to-end encryption, role-based access control, and regular security audits. Our system is compliant with major government data protection standards to ensure your information is always safe.",
    },
    {
      id: 3,
      question: "Can the system be customized for our department's needs?",
      answer: "Absolutely. The DS Office Management System is highly modular and customizable. We work with you to tailor features, workflows, and integrations to meet the unique requirements of your government office.",
    },
    {
      id: 4,
      question: "Who do I contact for technical support?",
      answer: "We offer dedicated technical support through various channels, including email, phone, and a client portal. Our support team is available during business hours to assist with any technical issues or questions you may have.",
    }
  ];

  const toggleQuestion = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  const handleContactUs = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: '#2F2F77' }}
          >
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about the DS Office Management System.
          </p>
        </div>

        {/* FAQ Items - Clean & Box-free */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={faq.id}>
              {/* Question with subtle bottom border */}
              <button
                onClick={() => toggleQuestion(faq.id)}
                className="w-full py-6 text-left flex justify-between items-center border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200 group"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-[#2F2F77] transition-colors duration-200">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 group-hover:text-[#FF8F00] ${
                    openQuestion === faq.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Answer - appears below the question */}
              {openQuestion === faq.id && (
                <div className="pb-6">
                  <p className="text-gray-600 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Simple Contact CTA */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for?
          </p>
          <button 
            onClick={handleContactUs}
            className="px-8 py-3 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 transform hover:shadow-lg active:scale-95"
            style={{
              backgroundColor: '#FF8F00',
              border: '2px solid #FF8F00'
            }}
          >
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
}