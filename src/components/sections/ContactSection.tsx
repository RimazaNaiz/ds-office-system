'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: 'DS Office',
    challenges: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      position: 'DS Office',
      challenges: ''
    });
  };

  return (
    <section 
      id="contact"
      className="py-20 text-white relative min-h-screen flex items-center"
      style={{
        backgroundImage: "url('/images/bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Information */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Let's Connect & bring your ideas to life
            </h1>
            
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              We'd like to hear from you! Fill out the form below, and let's discuss &<br />
              <span className="font-semibold">Request a Personalized Demo</span>
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <div className="w-10 h-10 bg-[#FF8F00] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-lg">+94 67 234 5678</span>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <div className="w-10 h-10 bg-[#FF8F00] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-lg">info@dsofficesystem.lk</span>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <div className="w-10 h-10 bg-[#FF8F00] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-lg">STR, Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            {/* Gradient Border */}
            <div 
              className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-[#FF8F00] via-[#2F2F77] to-[#FF8F00] opacity-20"
            ></div>
            
            <div className="relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF8F00] focus:border-transparent transition duration-300"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF8F00] focus:border-transparent transition duration-300"
                    required
                  />
                </div>

                {/* Position Field */}
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Position
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF8F00] focus:border-transparent transition duration-300"
                  >
                    <option value="DS Office">DS Office</option>
                    <option value="Government Officer">Government Officer</option>
                    <option value="Administrator">Administrator</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Challenges Field */}
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Specific Challenges or Questions
                  </label>
                  <textarea
                    name="challenges"
                    value={formData.challenges}
                    onChange={handleChange}
                    placeholder="Describe your specific challenges or questions..."
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF8F00] focus:border-transparent transition duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 transform hover:shadow-xl active:scale-95"
                  style={{
                    backgroundColor: '#FF8F00',
                    border: '2px solid #FF8F00'
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}