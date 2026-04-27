import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-beige-light text-primary border-t border-border-beige mt-20 pt-16 pb-8 text-[11px] uppercase tracking-wider font-bold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col">
              <h2 className="text-2xl font-bold tracking-tight text-primary normal-case font-serif">PRAGATI<span className="font-light opacity-50 ml-1">ENTERPRISE</span></h2>
            </Link>
            <p className="text-gray-500 text-[13px] leading-relaxed max-w-xs italic normal-case font-medium">
              Defining modern Indian lifestyle with quality craftsmanship and timeless style. Everyday luxury curated for you.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'Shop All', 'New Arrivals', 'Men', 'Women'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-gray-400 text-sm hover:text-accent transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Contact Us', path: '/contact' },
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Return Policy', path: '/returns' },
                { name: 'Terms & Conditions', path: '/terms' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-400 text-sm hover:text-accent transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-sm text-gray-400">
                <MapPin size={18} className="text-accent shrink-0" />
                <span>123 Fashion Street, Textile Market, Surat, Gujarat - 395003</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone size={18} className="text-accent shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail size={18} className="text-accent shrink-0" />
                <span>hello@pragati.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest">
            © {currentYear} Pragati Enterprise. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 grayscale opacity-50">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
          </div>
        </div>
      </div>
    </footer>
  );
}
