'use client';

import { motion } from 'framer-motion';

export default function ImplementationSection() {
  const steps = [
    {
      number: "1",
      title: "Assessment & Planning",
      description:
        "We evaluate your current workflows and create a clear digital transformation roadmap tailored for your DS office.",
    },
    {
      number: "2",
      title: "System Configuration",
      description:
        "All modules, permissions, and workflows are configured according to your operational structure and service processes.",
    },
    {
      number: "3",
      title: "Staff Training",
      description:
        "Your staff receives guided training with real-world scenarios to ensure smooth adoption.",
    },
    {
      number: "4",
      title: "Go Live & Support",
      description:
        "We activate your system and continue to support performance, troubleshooting, and improvements.",
    },
  ];

  const YALE = "#284b63";
  const TEAL = "#3c6e71";
  const GRAPHITE = "#353535";
  const GREY = "#d9d9d9";

  return (
    <section id="implementation" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-4"
            style={{ color: YALE }}
          >
            Implementation Process
          </h2>
          <p className="text-lg" style={{ color: GRAPHITE }}>
            A structured rollout designed for simplicity and clarity
          </p>
        </div>

        {/* TIMELINE WRAPPER */}
        <div className="relative">

          {/* VERTICAL TIMELINE LINE */}
          <div
            className="absolute left-8 top-0 bottom-0 w-1 rounded-full"
            style={{ backgroundColor: TEAL + "40" }}
          />

          {/* STEPS */}
          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative pl-20"
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >

                {/* NUMBER BADGE */}
                <div
                  className="
                    absolute left-0 top-0 
                    w-14 h-14 rounded-full flex items-center justify-center 
                    text-xl font-bold shadow-lg border-4 border-white
                  "
                  style={{
                    backgroundColor: YALE,
                    color: "white",
                  }}
                >
                  {step.number}
                </div>

                {/* CONTENT CARD */}
                <div
                  className="
                    p-6 rounded-xl bg-white
                    shadow-[0_6px_20px_rgba(0,0,0,0.06)]
                    border
                    transition-all duration-300
                  "
                  style={{ borderColor: GREY }}
                >
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: YALE }}
                  >
                    {step.title}
                  </h3>

                  <p className="leading-relaxed" style={{ color: GRAPHITE }}>
                    {step.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
