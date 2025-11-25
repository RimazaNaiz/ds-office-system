'use client';

export default function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: "$49",
      period: "/ month",
      buttonText: "Get Started",
      features: [
        "Document Management",
        "Basic Scheduling", 
        "Standard Support",
        "Core citizen Management",
        "Advance Analytics",
        "Custom Workflows"
      ]
    },
    {
      name: "Professional", 
      price: "$99",
      period: "/ month", 
      buttonText: "Get Started",
      features: [
        "All Basic features",
        "SMS notifications",
        "Standard Support",
        "Core citizen Management",
        "Advance Analytics",
        "Custom Workflows", 
        "Staff training"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      buttonText: "Get Started",
      features: [
        "All Professional features",
        "Multi-office management", 
        "Advanced security",
        "Core citizen Management",
        "Advance Analytics",
        "Custom development",
        "AI ChatBot"
      ]
    }
  ];

  const handleGetStarted = (planName: string) => {
    console.log(`Selected ${planName} plan`);
    // Scroll to contact section or open signup form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert(`Thank you for your interest in the ${planName} plan! Please contact us.`);
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: '#2F2F77' }} // Your dark blue
          >
            Transparent Pricing Options
          </h1>
          <p className="text-lg text-gray-600">
            Choose the plan that works best for your DS office
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
            

              {/* Content */}
              <div className="relative bg-white rounded-2xl">
                {/* Plan Header */}
                <div className="p-8 border-b border-gray-200">
                  <h3 
                    className="text-2xl font-bold mb-4"
                    style={{ color: '#2F2F77' }} // Your dark blue
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline mb-6">
                    <span 
                      className="text-4xl font-bold"
                      style={{ color: '#2F2F77' }} // Your dark blue
                    >
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <button 
                    onClick={() => handleGetStarted(plan.name)}
                    className="w-full py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 transform hover:shadow-lg active:scale-95"
                    style={{
                      backgroundColor: '#FF8F00', // Your orange
                      border: '2px solid #FF8F00'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#E67E00';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#FF8F00';
                    }}
                  >
                    {plan.buttonText}
                  </button>
                </div>

                {/* Features List */}
                <div className="p-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="text-gray-700 flex items-start" // Changed from gray-600 to gray-700 for better contrast
                      >
                        <svg 
                          className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include a 30-day money-back guarantee
          </p>
          <p className="text-gray-500 text-sm">
            Need a custom solution?{" "}
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-[#FF8F00] hover:text-[#E67E00] font-semibold transition-colors duration-200"
            >
              Contact us for enterprise pricing
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}