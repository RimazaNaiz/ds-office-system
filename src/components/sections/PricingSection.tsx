'use client';

export default function PricingSection() {
  const YALE = "#284b63";
  const TEAL = "#3c6e71";
  const GRAPHITE = "#353535";
  const GREY = "#d9d9d9";

  const plans = [
    {
      name: "Basic",
      price: "$49",
      period: "/ month",
      highlight: false,
      features: [
        "Document Management",
        "Basic Scheduling",
        "Standard Support",
        "Core Citizen Management",
        "Advanced Analytics",
        "Custom Workflows (Limited)",
      ],
    },
    {
      name: "Professional",
      price: "$99",
      period: "/ month",
      highlight: true,
      features: [
        "All Basic features",
        "SMS Notifications",
        "Priority Support",
        "Full Citizen Management",
        "Advanced Analytics",
        "Custom Workflows (Full)",
        "Staff Training",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      highlight: false,
      features: [
        "All Professional features",
        "Multi-office Management",
        "Advanced Security & SSO",
        "Dedicated Account Manager",
        "Custom Dashboards",
        "Custom Development",
        "AI ChatBot Integration",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24" style={{ backgroundColor: GREY }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-4"
            style={{ color: YALE }}
          >
            Transparent Pricing Options
          </h2>
          <p className="text-lg" style={{ color: GRAPHITE }}>
            Choose the plan that fits your DS office needs
          </p>
        </div>

        {/* PRICING GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white border p-8 shadow-sm"
              style={{
                borderColor: plan.highlight ? TEAL : GREY,
                boxShadow: plan.highlight
                  ? "0 0 0 4px rgba(60,110,113,0.15)"
                  : "0 4px 15px rgba(0,0,0,0.05)",
              }}
            >
              {/* BADGE */}
              {plan.highlight && (
                <div
                  className="inline-block text-xs px-3 py-1 rounded-md mb-4"
                  style={{ backgroundColor: TEAL, color: "white" }}
                >
                  Recommended
                </div>
              )}

              {/* TITLE */}
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: YALE }}
              >
                {plan.name}
              </h3>

              {/* PRICE */}
              <div className="flex items-baseline mb-6">
                <span
                  className="text-4xl font-bold"
                  style={{ color: YALE }}
                >
                  {plan.price}
                </span>
                <span className="ml-2" style={{ color: GRAPHITE }}>
                  {plan.period}
                </span>
              </div>

              {/* CTA BUTTON */}
              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="w-full py-3 text-white font-semibold rounded-lg"
                style={{
                  backgroundColor: plan.highlight ? TEAL : YALE,
                }}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </button>

              {/* FEATURES */}
              <ul className="mt-8 space-y-3">
                {plan.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-start"
                    style={{ color: GRAPHITE }}
                  >
                    <svg
                      className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                      fill="none"
                      stroke={TEAL}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FOOTER TEXT */}
        <div className="text-center mt-12">
          <p style={{ color: GRAPHITE }}>
            All plans include setup assistance and a 30-day performance review.
          </p>
          <p className="text-sm mt-2" style={{ color: "#555" }}>
            Need a custom workflow?{" "}
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="font-semibold"
              style={{ color: YALE }}
            >
              Contact our team →
            </button>
          </p>
        </div>

      </div>
    </section>
  );
}
