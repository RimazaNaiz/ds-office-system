'use client';

import { useState } from 'react';

export default function ComparisonSection() {
  const [view, setView] = useState<'problem' | 'solution'>('problem');

  const data = {
    problem: {
      title: "Current Challenges",
      color: "red",
      items: [
        {
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: "Time Wasted",
          description: "2-3 hours average wait time per citizen",
          metric: "15,000+ hours wasted monthly"
        },
        {
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          ),
          title: "Manual Processes", 
          description: "Paper-based, error-prone workflows",
          metric: "60% staff time on administrative tasks"
        },
        {
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
          title: "Poor Visibility",
          description: "No real-time tracking or analytics",
          metric: "Limited decision-making capabilities"
        },
        {
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: "Citizen Dissatisfaction",
          description: "Frustration due to long waits and inefficiencies",
          metric: "Low service satisfaction scores"
        }
      ]
    },
    solution: {
      title: "Digital Solutions", 
      color: "green",
      items: [
        {
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
          title: "Instant Service",
          description: "Digital queue with real-time updates",
          metric: "15-30 minute average wait time"
        },
        {
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          ),
          title: "Automated Workflows",
          description: "Streamlined digital processes",
          metric: "70% reduction in manual work"
        },
        {
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
          title: "Data Insights", 
          description: "Real-time analytics and reporting",
          metric: "Informed decision-making"
        },
        {
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
          ),
          title: "Happy Citizens", 
          description: "Improved service experience",
          metric: "95% citizen satisfaction rate"
        }
      ]
    }
  };

  const currentData = data[view];

  const handleToggleClick = () => {
    setView(view === 'problem' ? 'solution' : 'problem');
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="problem-solution" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#2F2F77' }}>
            DS Office Transformation
          </h2>
          
          {/* Toggle Switch */}
          <div className="inline-flex bg-gray-100 rounded-full p-1 mb-12">
            <button
              onClick={() => setView('problem')}
              className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                view === 'problem' 
                  ? 'bg-red-500 text-white shadow-lg transform scale-105' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
              }`}
            >
              Challenges
            </button>
            <button
              onClick={() => setView('solution')}
              className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                view === 'solution'
                  ? 'bg-green-500 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
              }`}
            >
              Solutions
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentData.items.map((item, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              style={{
                border: '1px solid transparent',
                background: `linear-gradient(white, white) padding-box, 
                            linear-gradient(135deg, 
                              ${currentData.color === 'red' ? '#ef4444' : '#10b981'}, 
                              ${currentData.color === 'red' ? '#dc2626' : '#059669'}
                            ) border-box`
              }}
            >
              <div className="flex items-start space-x-6">
                {/* Icon Container */}
                <div 
                  className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                    currentData.color === 'red' 
                      ? 'bg-red-50 text-red-600' 
                      : 'bg-green-50 text-green-600'
                  }`}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className={`text-xl font-bold mb-3 ${
                    currentData.color === 'red' ? 'text-red-800' : 'text-green-800'
                  }`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className={`text-sm font-semibold ${
                    currentData.color === 'red' ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {item.metric}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            {view === 'problem' 
              ? "Ready to solve these challenges with our digital solutions?" 
              : "Ready to implement these solutions in your DS office?"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleToggleClick}
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 transform border-2 hover:shadow-lg active:scale-95"
              style={{
                borderColor: '#2F2F77',
                color: '#2F2F77',
                backgroundColor: 'transparent'
              }}
            >
              {view === 'problem' ? 'View Solutions' : 'View Challenges'}
            </button>
            <button 
              onClick={handleContactClick}
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl active:scale-95"
              style={{
                backgroundColor: '#FF8F00',
                color: '#FFFFFF',
                border: '2px solid #FF8F00'
              }}
            >
              {view === 'problem' ? 'Get Solution Demo' : 'Start Implementation'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}