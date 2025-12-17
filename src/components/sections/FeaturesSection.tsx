'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// BRAND COLORS
const COLORS = {
  YALE: '#284b63',
  TEAL: '#3c6e71',
  GRAPHITE: '#353535',
  GREY: '#d9d9d9'
};

// FEATURES DATA (Notification System REMOVED)
const FEATURES = [
  {
    id: 'citizen',
    title: 'Citizen Portal',
    description: 'Secure digital profiles with complete service history and quick lookup.',
    image: '/images/image6.png',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    )
  },
  {
    id: 'token',
    title: 'Token System',
    description: 'Real-time queue management with SMS alerts and analytics.',
    image: '/images/image7.png',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5h18v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM8 9h8M8 13h6"
      />
    )
  },
  {
    id: 'appointment',
    title: 'Appointment System',
    description: 'Online booking, rescheduling and automated reminders.',
    image: '/images/feature-appointment.jpg',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3M5 7h14v12H5z"
      />
    )
  },
  {
    id: 'analytics',
    title: 'Analytics Dashboard',
    description: 'Insights and trends to measure performance and improve services.',
    image: '/images/image8.png',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 21h18M9 19V9a2 2 0 012-2h2a2 2 0 012 2v10M9 19h6"
      />
    )
  }
];

export default function FeaturesSection() {
  const [stack, setStack] = useState(FEATURES);
  const topRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  const ROTATE_MS = 2400;
  const EXIT_MS = 350;

  // Auto rotation
  useEffect(() => {
    start();
    return stop;
  }, []);

  function start() {
    stop();
    intervalRef.current = setInterval(nextCard, ROTATE_MS);
  }

  function stop() {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }

  function nextCard() {
    setStack(prev => [...prev.slice(1), prev[0]]);
  }

  // Tilt effect
  function handleTilt(e: React.PointerEvent) {
    if (isMobile) return;
    const el = topRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    setTilt({
      rotateX: -((y - midY) / midY) * 5,
      rotateY: ((x - midX) / midX) * 5,
    });
  }

  const resetTilt = () => setTilt({ rotateX: 0, rotateY: 0 });

  const underStyle = (i: number) => ({
    transform: `translateY(${(i + 1) * 18}px) scale(${1 - (i + 1) * 0.035})`,
    zIndex: 20 - i,
    opacity: 1,
  });

  return (
    <section id="features" className="py-24 bg-[#d9d9d9]">
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: COLORS.YALE }}>
          What We Offer
        </h2>
        <p className="text-lg mt-2" style={{ color: COLORS.GRAPHITE }}>
          Explore features of the DS Office Management System<br />
          Designed specifically for the unique needs of Divisional Secretariat operations.
        </p>
      </div>

      {/* STACK */}
      <div className="relative mx-auto" style={{ width: 880, maxWidth: '95%' }}>
        {stack.map((item, i) => {
          const isTop = i === 0;
          const depthLimit = isMobile ? 3 : 5;
          if (i > depthLimit) return null;

          return (
            <motion.div
              key={item.id}
              className="absolute left-1/2 -translate-x-1/2 w-full"
              initial={isTop ? { opacity: 0, y: 10, scale: 0.98 } : underStyle(i - 1)}
              animate={isTop ? { opacity: 1, y: 0, scale: 1 } : underStyle(i - 1)}
              transition={{ duration: EXIT_MS / 1000 }}
            >
              <div
                ref={isTop ? topRef : null}
                onPointerEnter={stop}
                onPointerLeave={() => {
                  resetTilt();
                  start();
                }}
                onPointerMove={isTop ? handleTilt : undefined}
                className="rounded-3xl bg-white p-6 md:p-8 shadow-xl border border-[#e8e8e8]"
                style={
                  isTop
                    ? {
                        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                      }
                    : {}
                }
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  {/* TEXT */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-10 h-10 flex items-center justify-center rounded-md"
                        style={{ background: COLORS.TEAL + '15', color: COLORS.TEAL }}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {item.icon}
                        </svg>
                      </div>

                      <h3 className="text-xl md:text-2xl font-semibold" style={{ color: COLORS.YALE }}>
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-base leading-relaxed" style={{ color: COLORS.GRAPHITE }}>
                      {item.description}
                    </p>
                  </div>

                  {/* IMAGE */}
                  <div className="w-full h-44 md:h-64 rounded-lg overflow-hidden border border-[#ececec] shadow-sm">
                    <img src={item.image} className="w-full h-full object-cover" alt={item.title} />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Spacer */}
        <div style={{ height: isMobile ? 300 : 360 }} />
      </div>
    </section>
  );
}
