'use client';

import { useState } from 'react';

export default function ContactSection() {
  // BRAND COLORS
  const YALE = '#284b63';
  const TEAL = '#3c6e71';
  const GRAPHITE = '#353535';
  const ALABASTER = '#d9d9d9';

  const [form, setForm] = useState({
    name: '',
    email: '',
    position: 'DS Office',
    message: '',
  });

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submitForm = (e: any) => {
    e.preventDefault();
    alert('Thank you! We will contact you shortly.');
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT — CONTACT INFO */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: YALE }}>
            Let’s Connect
          </h2>

          <p className="text-lg mb-12 max-w-lg" style={{ color: GRAPHITE }}>
            Request a demo, ask questions, or discuss how digital workflows can
            improve DS office operations.
          </p>

          <div className="space-y-8">

            {/* PHONE */}
            <a
              href="tel:+94785706441"
              className="flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#3c6e71]/10 text-[#3c6e71]">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M3 5a2 2 0 012-2h3.3l1.5 4.5-2.3 1.2a11 11 0 005.5 5.5l1.2-2.3 4.5 1.5V19a2 2 0 01-2 2h-1C9.7 21 3 14.3 3 6V5z" />
                </svg>
              </div>
              <span
                className="text-lg font-medium group-hover:underline"
                style={{ color: YALE }}
              >
                +94 78 570 6441
              </span>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:hello@inzeedo.com"
              className="flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#3c6e71]/10 text-[#3c6e71]">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M3 8l7.9 5.3a2 2 0 002.2 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5" />
                </svg>
              </div>
              <span
                className="text-lg font-medium group-hover:underline"
                style={{ color: YALE }}
              >
                hello@inzeedo.com
              </span>
            </a>

            {/* LOCATION */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#3c6e71]/10 text-[#3c6e71]">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M17.7 16.7l-4.3 4.2a2 2 0 01-2.8 0l-4.2-4.2a8 8 0 1111.3 0z" />
                  <path d="M15 11a3 3 0 11-6 0" />
                </svg>
              </div>
              <span className="text-lg font-medium" style={{ color: YALE }}>
                Sainthamaruthu, Sri Lanka
              </span>
            </div>

          </div>
        </div>

        {/* RIGHT — FORM (ALABASTER GREY) */}
        <div
          className="rounded-2xl p-10 border shadow-sm"
          style={{ backgroundColor: ALABASTER, borderColor: '#cfcfcf' }}
        >
          <form className="space-y-6" onSubmit={submitForm}>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: GRAPHITE }}>
                Name
              </label>
              <input
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white border border-[#cfcfcf]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: GRAPHITE }}>
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white border border-[#cfcfcf]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: GRAPHITE }}>
                Position
              </label>
              <select
                name="position"
                value={form.position}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white border border-[#cfcfcf]"
              >
                <option>DS Office</option>
                <option>Government Officer</option>
                <option>Administrator</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: GRAPHITE }}>
                Challenges or Questions
              </label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white border border-[#cfcfcf] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-lg text-white font-semibold"
              style={{ backgroundColor: YALE }}
            >
              Request a Demo
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
