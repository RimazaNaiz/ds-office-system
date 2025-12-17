'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  const YALE_BLUE = '#284b63';
  const YALE_BLUE_DARK = '#1d3649';
  const GRAPHITE = '#353535';

  const handleScroll = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="bg-white pt-20 pb-12 text-center">
      <div className="max-w-5xl mx-auto px-6">

        {/* MAIN TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-extrabold leading-tight mb-4 text-4xl md:text-5xl lg:text-6xl"
          style={{ color: YALE_BLUE }}
        >
          Transforming DS Office Operations
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl leading-relaxed mb-8"
          style={{ color: GRAPHITE }}
        >
          A modern platform built to digitize citizen workflows, reduce wait times,
          and increase staff efficiency.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button
            onClick={handleScroll}
            className="px-8 py-4 rounded-xl font-semibold text-white shadow-sm transition-all"
            style={{ backgroundColor: YALE_BLUE }}
          >
            Request a Demo
          </button>

          <button
            className="
              px-8 py-4 rounded-xl font-semibold 
              border border-[#d9d9d9] 
              text-[#3c6e71]
              hover:bg-[#3c6e71] hover:text-white 
              transition-all
            "
          >
            Contact Us
          </button>
        </motion.div>

      </div>
    </section>
  );
}
