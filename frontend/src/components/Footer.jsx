import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp, Leaf } from 'lucide-react';

const Footer = ({ onSelectCategory }) => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (category) => {
    if (onSelectCategory) onSelectCategory(category);
    navigate(`/?category=${category}`);
    setTimeout(() => {
      const element = document.getElementById('products-section');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <footer className="bg-[#FAF6F0] text-gray-700 font-sans relative border-t border-gray-200">
      
      {/* Pre-Footer Contact Bar */}
      <div className="bg-[#F4ECE1] text-gray-700 text-xs md:text-sm py-3.5 px-4 md:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          
          <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
            <a href="mailto:mjttraders.24@gmail.com" className="flex items-center gap-2 text-gray-700 hover:text-jute-dark transition-colors font-medium">
              <Mail size={16} className="text-jute-dark" />
              <span>mjttraders.24@gmail.com</span>
            </a>
            <span className="hidden md:inline text-gray-400">|</span>
            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <MapPin size={16} className="text-jute-dark" />
              <span className="truncate max-w-[240px] md:max-w-none">122, Cholakadai St, Dharapuram</span>
            </div>
          </div>

          <div className="flex items-center gap-4 font-semibold">
            <a href="tel:+919025236106" className="flex items-center gap-2 text-gray-700 hover:text-jute-dark transition-colors font-bold">
              <Phone size={16} className="text-jute-dark" />
              <span>+91 9025236106</span>
            </a>
            <button
              onClick={() => navigate('/enquire')}
              className="text-xs text-white bg-jute-dark hover:bg-jute px-3.5 py-1.5 rounded-md transition-colors shadow-sm font-semibold uppercase tracking-wider"
            >
              Get Instant Quote
            </button>
          </div>

        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Footer Brand Area */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center space-x-3.5 group">
              <img 
                src="/logo.png" 
                alt="Magarajothi Traders Logo" 
                className="w-12 h-12 rounded-full object-cover shadow-md border-2 border-jute-dark" 
              />
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold text-gray-900 leading-none tracking-tight group-hover:text-jute-dark transition-colors">
                  MAGARAJOTHI
                </span>
                <span className="text-xs text-jute-dark tracking-[0.2em] font-bold uppercase mt-0.5">
                  TRADERS
                </span>
              </div>
            </Link>

            <p className="text-xs text-gray-600 leading-relaxed">
              Premier merchant specializing in direct mill supply and export of 100% natural Jute Bags, compact Nano Bags, industrial Jute Thread spools, Grade-A 2nd Jute Bags, and HDPE Plastic Rolls across Tamil Nadu and global export markets.
            </p>

            <div className="pt-1">
              <span className="bg-jute-light/20 border border-jute-light/40 px-3 py-1.5 rounded-lg text-xs font-bold text-jute-dark inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-jute-dark" /> Govt. Authorized Merchant & Exporter
              </span>
            </div>
          </div>

          {/* Column 2: Navigation & Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link to="/" onClick={scrollToTop} className="text-gray-700 hover:text-jute-dark transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <button onClick={() => { navigate('/'); setTimeout(() => { const el = document.getElementById('about-section'); if(el) el.scrollIntoView({behavior:'smooth'}); }, 150); }} className="text-gray-700 hover:text-jute-dark transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => { navigate('/'); setTimeout(() => { const el = document.getElementById('why-us-section'); if(el) el.scrollIntoView({behavior:'smooth'}); }, 150); }} className="text-gray-700 hover:text-jute-dark transition-colors">
                  Why Choose Us
                </button>
              </li>
              <li>
                <Link to="/enquire" className="text-gray-700 hover:text-jute-dark transition-colors">
                  Submit Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Eco Product Range */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-2">
              Eco Product Range
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button onClick={() => handleCategoryClick('Jute')} className="text-gray-700 hover:text-jute-dark transition-colors">
                  🌾 Jute Bags (A-Twill & B-Twill)
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('Nano Bags')} className="text-gray-700 hover:text-jute-dark transition-colors">
                  👜 Nano Bags (Mini Eco Bags)
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('Jute Thread')} className="text-gray-700 hover:text-jute-dark transition-colors">
                  🧵 Jute Thread (Twine Spools)
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('2nd Jute Bags')} className="text-gray-700 hover:text-jute-dark transition-colors">
                  ♻️ 2nd Jute Bags (Clean Used Sacks)
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('Plastic')} className="text-gray-700 hover:text-jute-dark transition-colors">
                  🏗️ HDPE Plastic Bags
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('Plastic Roll')} className="text-gray-700 hover:text-jute-dark transition-colors">
                  🌀 Plastic Roll (Woven Fabric)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Commercial Desk */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-2">
              Commercial Desk
            </h4>
            <div className="space-y-1.5 text-xs text-gray-700">
              <p className="font-bold text-gray-900">Magarajothi Traders</p>
              <p className="text-gray-600">122, Cholakadai St, Dharapuram</p>
              <p className="text-gray-600">Tirupur Dist, Tamil Nadu - 638656</p>
            </div>

            <button
              onClick={() => navigate('/enquire')}
              className="w-full mt-2 bg-jute-dark hover:bg-jute text-white font-semibold py-2.5 rounded-md text-xs shadow-sm transition-colors uppercase tracking-wider"
            >
              Contact Commercial Desk
            </button>
          </div>

        </div>

        {/* Bottom Clean Bar */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <div>
            © {new Date().getFullYear()} <strong className="text-gray-900">Magarajothi Traders</strong>. All Rights Reserved.
          </div>

          <button onClick={scrollToTop} className="hover:text-jute-dark flex items-center gap-1.5 transition-colors font-medium">
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-jute-dark" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
