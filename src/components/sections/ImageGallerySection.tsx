'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// BRAND COLORS
const COLORS = {
  YALE: '#284b63',
  GRAPHITE: '#353535',
};

// CONTENT DATA
const ITEMS = [
  {
    src: '/images/image1.png',
    title: 'Real-time Metrics Dashboard',
    description:
      'Monitor citizen requests, token status, and service performance with live metrics.',
  },
  {
    src: '/images/image2.png',
    title: 'New Client Intake Workflow',
    description:
      'Create or search client profiles instantly with a fully digital intake process.',
  },
  {
    src: '/images/image3.png',
    title: 'Granular Permissions Control',
    description:
      'Define precise access levels for staff to ensure data security and accountability.',
  },
  {
    src: '/images/image.png',
    title: 'Service Status Management',
    description:
      'Track each service request from submission to completion with clarity.',
  },
  {
    src: '/images/image5.png',
    title: 'Inward & Outward Mail Tracking',
    description:
      'Digitize and manage all office correspondence from a single dashboard.',
  },
];

export default function ImageScrollAlternatingSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 md:space-y-16">
        {ITEMS.map((item, index) => {
          const isReversed = index % 2 !== 0;
          
          return (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[70vh]"
            >
              {/* IMAGE - Blur to clear effect */}
              <ImageBlock 
                src={item.src} 
                alt={item.title} 
                isReversed={isReversed} 
              />
              
              {/* TEXT - Fade in effect */}
              <TextBlock 
                title={item.title}
                description={item.description}
                isReversed={isReversed}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ImageBlock({ src, alt, isReversed }: { 
  src: string; 
  alt: string; 
  isReversed: boolean 
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    amount: 0.3,
    once: false 
  });

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        filter: 'blur(10px)',
        x: isReversed ? 60 : -60,
        scale: 0.9 
      }}
      animate={isInView ? { 
        opacity: 1, 
        filter: 'blur(0px)',
        x: 0,
        scale: 1 
      } : { 
        opacity: 0, 
        filter: 'blur(10px)',
        x: isReversed ? 60 : -60,
        scale: 0.9 
      }}
      transition={{ 
        duration: 0.8,
        ease: "easeOut" 
      }}
      className={`${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
    >
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto"
        />
      </div>
    </motion.div>
  );
}

function TextBlock({ title, description, isReversed }: { 
  title: string; 
  description: string; 
  isReversed: boolean 
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    amount: 0.3,
    once: false 
  });

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        filter: 'blur(8px)',
        y: 40 
      }}
      animate={isInView ? { 
        opacity: 1,
        filter: 'blur(0px)',
        y: 0 
      } : { 
        opacity: 0,
        filter: 'blur(8px)',
        y: 40 
      }}
      transition={{ 
        duration: 0.8,
        delay: 0.1,
        ease: "easeOut" 
      }}
      className={`p-4 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}
    >
      <h3
        className="text-2xl md:text-3xl font-bold mb-4 leading-tight"
        style={{ color: COLORS.YALE }}
      >
        {title}
      </h3>

      <p
        className="text-lg leading-relaxed"
        style={{ color: COLORS.GRAPHITE }}
      >
        {description}
      </p>
    </motion.div>
  );
}