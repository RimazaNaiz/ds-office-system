import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold">DS Office System</h3>
            <p className="mt-4 text-gray-300 text-sm">
              Transforming DS offices across Sri Lanka with digital efficiency and citizen-centric services.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features" className="text-gray-300 hover:text-white">Features</Link></li>
              <li><Link href="/success" className="text-gray-300 hover:text-white">Success Stories</Link></li>
              <li><Link href="/pricing" className="text-gray-300 hover:text-white">Pricing</Link></li>
              <li><Link href="/demo" className="text-gray-300 hover:text-white">Demo</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-white">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
              <li><Link href="/security" className="text-gray-300 hover:text-white">Security</Link></li>
              <li><Link href="/compliance" className="text-gray-300 hover:text-white">Compliance</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-gray-300">
          <p>© 2025 DS Office Management System. A product of Inzeedo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}