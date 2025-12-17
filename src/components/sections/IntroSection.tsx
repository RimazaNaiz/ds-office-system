'use client';

import { motion } from 'framer-motion';

export default function IntroSection() {
  const YALE_BLUE = '#284b63';
  const STORMY_TEAL = '#3c6e71';
  const GRAPHITE = '#353535';

  const handleExplore = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="intro" className="pt-10 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADING */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <motion.h2
            className="text-2xl md:text-4xl font-semibold mb-3"
            style={{ color: YALE_BLUE }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Modernizing DS Office Operations
          </motion.h2>

          <motion.p
            className="text-base md:text-lg leading-relaxed text-[#353535]/85"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Replace paper files with secure digital workflows.
          </motion.p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 cursor-pointer">
          {[
            {
              title: "Digital Transformation",
              desc: "Move from manual processes to automated digital workflows.",
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              )
            },
            {
              title: "Secure Workflows",
              desc: "Protect sensitive data with enterprise-grade security.",
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              )
            },
            {
              title: "Increased Productivity",
              desc: "Serve citizens faster with optimized workflows.",
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z" />
              )
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="
                p-6 rounded-xl bg-white 
                border border-[#d9d9d9]
                shadow-sm hover:shadow-md 
                transition-all
              "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              onClick={handleExplore}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5 bg-[#3c6e71]/10 text-[#3c6e71]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
              </div>

              <h3 className="text-xl font-bold mb-2" style={{ color: YALE_BLUE }}>
                {item.title}
              </h3>

              <p className="text-[#353535] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
