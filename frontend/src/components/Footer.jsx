import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, ShieldCheck, Leaf, ArrowRight } from 'lucide-react';

const Footer = ({ onSelectCategory, onOpenInquiry }) => {

  const handleCategoryNav = (cat) => {
    if (onSelectCategory) onSelectCategory(cat);
    const element = document.getElementById('products-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="font-sans">
      
      {/* Distinct Pre-Footer Contact Ribbon (bg-[#F4ECE1]) */}
      <div className="bg-[#F4ECE1] border-t border-b border-gray-200 py-8 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-1">
              <span className="text-xs text-jute-dark font-extrabold tracking-widest uppercase block">
                COMMERCIAL DESK ASSISTANCE
              </span>
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
                Need Fast Factory Quotations or Custom Bag Samples?
              </h4>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4">
              <a
                href="tel:+919025236106"
                className="bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-xl font-bold text-sm shadow-sm border border-gray-300 transition flex items-center gap-2"
              >
                <Phone size={18} className="text-jute-dark" />
                <span>+91 90252 36106</span>
              </a>

              <Link
                to="/enquire"
                className="bg-jute-dark hover:bg-jute text-white px-7 py-3 rounded-xl font-bold text-sm shadow-md transition flex items-center gap-2 uppercase tracking-wider"
              >
                <span>Request B2B Quote</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grounded Footer Section (bg-gray-900 / bg-[#111827]) */}
      <div className="bg-[#111827] text-gray-300 py-16 md:py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
            
            {/* Column 1: Brand Info (lg:col-span-4) */}
            <div className="lg:col-span-4 space-y-5">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Magarajothi Traders Golden Logo Emblem"
                  className="w-12 h-12 rounded-full object-cover shadow-md border-2 border-jute"
                />
                <div className="flex flex-col">
                  <span className="font-heading font-extrabold text-white text-xl leading-tight">
                    MAGARAJOTHI
                  </span>
                  <span className="text-xs text-jute font-bold uppercase tracking-widest">
                    TRADERS • DHARAPURAM
                  </span>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed font-normal max-w-sm">
                Authorized Merchant Supplier & Exporter of 100% Food-Grade Jute Bags, Hessian Cloth, Jute Thread, Grade-A 2nd Jute Sacks & Industrial HDPE Plastic Rolls across India.
              </p>

              <div className="pt-2 text-xs text-gray-400 font-semibold space-y-1.5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-jute" />
                  <span>GSTIN Registered Commercial Merchant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-jute" />
                  <span>100% Bio-Degradable Packaging Materials</span>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links (lg:col-span-2) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="font-bold text-white text-base uppercase tracking-wider border-b border-gray-800 pb-2">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-sm font-medium">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-jute transition-colors">
                    Home Page
                  </Link>
                </li>
                <li>
                  <a href="#about-section" className="text-gray-300 hover:text-jute transition-colors">
                    About Company
                  </a>
                </li>
                <li>
                  <a href="#products-section" className="text-gray-300 hover:text-jute transition-colors">
                    Products Range
                  </a>
                </li>
                <li>
                  <a href="#why-us-section" className="text-gray-300 hover:text-jute transition-colors">
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <Link to="/enquire" className="text-gray-300 hover:text-jute transition-colors">
                    Inquiry Desk
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Eco Product Range (lg:col-span-3) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-bold text-white text-base uppercase tracking-wider border-b border-gray-800 pb-2">
                Product Range
              </h4>
              <ul className="space-y-2.5 text-sm font-medium">
                <li>
                  <button onClick={() => handleCategoryNav('Jute')} className="text-gray-300 hover:text-jute transition-colors text-left">
                    🌾 Jute Bags (A-Twill, B-Twill)
                  </button>
                </li>
                <li>
                  <button onClick={() => handleCategoryNav('Nano Bags')} className="text-gray-300 hover:text-jute transition-colors text-left">
                    👜 Nano Bags (Mini Eco Pouches)
                  </button>
                </li>
                <li>
                  <button onClick={() => handleCategoryNav('Jute Thread')} className="text-gray-300 hover:text-jute transition-colors text-left">
                    🧵 Jute Thread (Twine & Yarn Spools)
                  </button>
                </li>
                <li>
                  <button onClick={() => handleCategoryNav('2nd Jute Bags')} className="text-gray-300 hover:text-jute transition-colors text-left">
                    ♻️ 2nd Jute Bags (Grade-A Used)
                  </button>
                </li>
                <li>
                  <button onClick={() => handleCategoryNav('Plastic Roll')} className="text-gray-300 hover:text-jute transition-colors text-left">
                    🌀 Plastic Roll (HDPE Fabric Rolls)
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact Info (lg:col-span-3) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-bold text-white text-base uppercase tracking-wider border-b border-gray-800 pb-2">
                Commercial Desk
              </h4>
              <div className="space-y-3 text-sm text-gray-300 font-medium">
                <div className="flex items-start gap-2.5">
                  <MapPin size={18} className="text-jute shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    122, Cholakadai St, Dharapuram, Tirupur Dist, Tamil Nadu - 638656
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone size={18} className="text-jute shrink-0" />
                  <a href="tel:+919025236106" className="hover:text-jute transition-colors font-bold text-white">
                    +91 90252 36106
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail size={18} className="text-jute shrink-0" />
                  <a href="mailto:mjttraders.24@gmail.com" className="hover:text-jute transition-colors">
                    mjttraders.24@gmail.com
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright Bar */}
          <div className="pt-12 mt-12 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <div>
              © {new Date().getFullYear()} <strong className="text-gray-200">Magarajothi Traders</strong>. All Rights Reserved.
            </div>
            <div className="flex items-center space-x-4 font-medium">
              <span>GST Registered</span>
              <span>•</span>
              <span>100% Eco Biodegradable</span>
              <span>•</span>
              <span>Tamil Nadu, India</span>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
