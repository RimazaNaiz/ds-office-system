'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const COLORS = {
  YALE: '#284b63',
  TEAL: '#3c6e71',
  GRAPHITE: '#353535',
  LIGHT: '#f7f7f7',
};

const items = [
  {
    id: 0,
    problem: 'Citizen Wait Times',
    problemDesc: 'Citizens wait 2–3 hours in crowded areas.',
    solutionTitle: 'Virtual Token System',
    solutionDesc:
      'Citizens book tokens via SMS/App and arrive only when called.',
    stats: 'Wait time reduced to 15 minutes',
    image:
      'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 1,
    problem: 'Document Loss',
    problemDesc: 'Paper files get misplaced or damaged.',
    solutionTitle: 'Cloud Digital Archive',
    solutionDesc:
      'Secure and searchable digital records stored indefinitely.',
    stats: '100% Data Integrity',
    image:
      'https://images.unsplash.com/photo-1581091012184-5a38b60f98f0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    problem: 'Staff Burnout',
    problemDesc:
      'Manual data entry consumes 60% of staff time.',
    solutionTitle: 'One-Click Automation',
    solutionDesc:
      'Auto-filled forms + automated reporting to save hours daily.',
    stats: '2× Productivity Increase',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function ComparisonSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: COLORS.YALE }}
          >
            Identify the Bottleneck.  
            <br />
            See the Solution.
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-16 items-start">
          
          {/* LEFT PROBLEM LIST */}
          <div className="space-y-6">
            {items.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActive(idx)}
                className={`p-6 rounded-xl border cursor-pointer transition-all ${
                  active === idx
                    ? 'bg-[#f7f7f7] border-[#284b63]'
                    : 'bg-white border-gray-200'
                }`}
              >
                <h3
                  className="font-bold text-lg mb-1"
                  style={{
                    color: active === idx ? COLORS.YALE : COLORS.GRAPHITE,
                  }}
                >
                  {item.problem}
                </h3>
                <p className="text-gray-600">{item.problemDesc}</p>
              </div>
            ))}
          </div>

          {/* RIGHT SOLUTION CARD */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* Background Image */}
                <Image
                  src={items[active].image}
                  fill
                  alt="Solution"
                  className="object-cover opacity-70"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 p-10 text-white">
                  <h3 className="text-3xl font-bold mb-3">
                    {items[active].solutionTitle}
                  </h3>
                  <p className="text-lg mb-4">
                    {items[active].solutionDesc}
                  </p>

                  <div className="inline-flex items-center gap-3 bg-white/10 px-4 py-3 rounded-lg border border-white/20 backdrop-blur-md">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="font-semibold">
                      {items[active].stats}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* MOBILE ACCORDION */}
        <div className="lg:hidden space-y-4 mt-6">
          {items.map((item, idx) => (
            <div key={idx}>
              
              {/* Header */}
              <div
                className={`p-5 rounded-xl border cursor-pointer ${
                  active === idx ? 'bg-[#f7f7f7] border-[#284b63]' : 'bg-white border-gray-200'
                }`}
                onClick={() => setActive(active === idx ? -1 : idx)}
              >
                <h3
                  className="font-bold text-lg mb-1"
                  style={{
                    color: active === idx ? COLORS.YALE : COLORS.GRAPHITE,
                  }}
                >
                  {item.problem}
                </h3>
                <p className="text-gray-600 text-sm">{item.problemDesc}</p>
              </div>

              {/* Collapsible Solution */}
              <AnimatePresence>
                {active === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden border border-gray-200 rounded-xl"
                  >
                    <div className="relative h-[300px]">
                      <Image
                        src={item.image}
                        fill
                        alt="Solution"
                        className="object-cover opacity-70 rounded-xl"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />

                      <div className="absolute bottom-0 p-5 text-white">
                        <h3 className="text-xl font-bold mb-2">
                          {item.solutionTitle}
                        </h3>
                        <p className="text-sm mb-2">{item.solutionDesc}</p>
                        <div className="flex items-center gap-3 bg-white/10 px-3 py-2 rounded-lg">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-white text-sm font-medium">
                            {item.stats}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
