import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    // Footer Background: Yale Blue (#284b63)
    <footer className="text-white" style={{ backgroundColor: '#284b63' }}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Brand Info */}
          <div className="col-span-1">
            {/* Logo/Title: Pure White */}
            <h3 className="text-xl font-bold text-white">DS Office System</h3>
            {/* Description: Alabaster Grey (#d9d9d9) */}
            <p className="mt-4 text-[#d9d9d9] text-sm">
              Transforming DS offices across Sri Lanka with digital efficiency and citizen-centric services.
            </p>
          </div>
          
          {/* Column 2: Product Links */}
          <div>
            {/* Heading: Pure White */}
            <h4 className="text-lg font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-sm">
              {['Features', 'Success Stories', 'Pricing', 'Demo'].map((label) => (
                <li key={label}>
                  <Link 
                    href={`/${label.toLowerCase().replace(' ', '-')}`} 
                    className="text-[#d9d9d9] hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Company Links */}
          <div>
            {/* Heading: Pure White */}
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              {['About Us', 'Blog', 'Careers', 'Contact'].map((label) => (
                <li key={label}>
                  <Link 
                    href={`/${label.toLowerCase().replace(' ', '-')}`} 
                    className="text-[#d9d9d9] hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Legal Links */}
          <div>
            {/* Heading: Pure White */}
            <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Security', 'Compliance'].map((label) => (
                <li key={label}>
                  <Link 
                    href={`/${label.toLowerCase().replace(' ', '-')}`} 
                    className="text-[#d9d9d9] hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Copyright Section */}
        {/* Divider Line: Stormy Teal (#3c6e71) */}
        <div className="mt-8 pt-8 border-t border-[#3c6e71] text-sm text-[#d9d9d9]">
          <p>© 2025 DS Office Management System. A product of Inzeedo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}