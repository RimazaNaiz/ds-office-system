'use client';

export default function ImplementationSection() {
  const steps = [
    {
      number: "1",
      title: "Assessment & Planning",
      description: "We analyze your current workflows and design a customized implementation plan tailored to your DS office needs."
    },
    {
      number: "2",
      title: "System Configuration", 
      description: "Our team sets up the system according to your specific DS office requirements and service workflows."
    },
    {
      number: "3",
      title: "Staff Training",
      description: "Comprehensive training ensures your team is confident using the new system with hands-on practice sessions."
    },
    {
      number: "4",
      title: "Go Live & Support",
      description: "We launch your system and provide ongoing support to ensure smooth operations and continuous improvement."
    }
  ];

  return (
    <section id="implementation" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#2F2F77' }}> {/* Changed from text-gray-900 to #2F2F77 */}
            Simple Implementation Process
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We guide you through every step of digital transformation
          </p>
        </div>

        {/* Spacious Horizontal Timeline */}
        <div className="relative">
          {/* Complete Horizontal Connecting Line */}
          <div className="absolute left-8 right-8 top-8 h-0.5 bg-[#2F2F77]/30 hidden md:block z-0"></div>

          {/* Steps in Row - More Spacious */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Number Circle - Larger with more spacing */}
                <div className="w-16 h-16 bg-[#2F2F77] text-white rounded-full flex items-center justify-center text-xl font-bold border-4 border-white shadow-lg mb-8"> {/* Removed group-hover:scale-110 */}
                  {step.number}
                </div>

                {/* Content with more spacing */}
                <div className="w-full px-2">
                  <h3 className="text-xl font-semibold mb-4" style={{ color: '#2F2F77' }}> {/* Changed from text-gray-900 to #2F2F77 and removed group-hover effect */}
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}