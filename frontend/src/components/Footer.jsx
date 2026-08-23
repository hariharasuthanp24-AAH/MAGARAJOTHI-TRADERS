import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';

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
    <footer className="bg-brand-navy text-slate-300 font-sans relative border-t border-navy-900">
      
      {/* Top Ribbon Banner Replicated in Footer */}
      <div className="bg-navy-950 text-white text-xs md:text-sm py-3.5 px-4 md:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          
          <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
            <a href="mailto:mjttraders.24@gmail.com" className="flex items-center gap-2 hover:text-jute transition-colors">
              <Mail size={16} className="text-jute" />
              <span>mjttraders.24@gmail.com</span>
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <div className="flex items-center gap-2 text-slate-200">
              <MapPin size={16} className="text-jute" />
              <span className="truncate max-w-[240px] md:max-w-none">122, Cholakadai St, Dharapuram</span>
            </div>
          </div>

          <div className="flex items-center gap-4 font-semibold">
            <a href="tel:+919025236106" className="flex items-center gap-2 hover:text-jute transition-colors text-white">
              <Phone size={16} className="text-jute" />
              <span>+91 9025236106</span>
            </a>
            <button
              onClick={() => navigate('/enquire')}
              className="text-xs text-white bg-jute-dark hover:bg-jute px-3 py-1 rounded-md transition shadow-sm"
            >
              Get Instant Quote
            </button>
          </div>

        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand & Logo */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="/logo.png" 
                alt="Magarajothi Traders Logo" 
                className="w-12 h-12 rounded-full object-cover shadow-md border-2 border-jute" 
              />
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold text-white leading-none">
                  MAGARAJOTHI
                </span>
                <span className="text-xs text-jute-light tracking-widest font-semibold uppercase mt-0.5">
                  TRADERS
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed">
              Premier B2B merchant specializing in direct supply and export of 100% natural Jute Bags, heavy Agricultural Gunny Sacks, and HDPE/PP Plastic Packaging across Tamil Nadu and global export markets.
            </p>

            <div className="pt-1">
              <span className="bg-white/10 border border-white/15 px-3 py-1 rounded-md text-xs font-semibold text-slate-200 inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-jute" /> Govt. Authorized Merchant & Exporter
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-700/60 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link to="/" onClick={scrollToTop} className="hover:text-jute-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <button onClick={() => { navigate('/'); setTimeout(() => { const el = document.getElementById('about-section'); if(el) el.scrollIntoView({behavior:'smooth'}); }, 150); }} className="hover:text-jute-light transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => { navigate('/'); setTimeout(() => { const el = document.getElementById('why-us-section'); if(el) el.scrollIntoView({behavior:'smooth'}); }, 150); }} className="hover:text-jute-light transition-colors">
                  Why Choose Us
                </button>
              </li>
              <li>
                <Link to="/enquire" className="hover:text-jute-light transition-colors">
                  Submit Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-700/60 pb-2">
              Product Range
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button onClick={() => handleCategoryClick('Jute')} className="hover:text-jute-light transition-colors">
                  🌾 Jute Bags (A-Twill & B-Twill)
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('Nano Bags')} className="hover:text-jute-light transition-colors">
                  👜 Nano Bags (Mini Eco Bags)
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('Jute Thread')} className="hover:text-jute-light transition-colors">
                  🧵 Jute Thread (Twine & Yarn Spools)
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('2nd Jute Bags')} className="hover:text-jute-light transition-colors">
                  ♻️ 2nd Jute Bags (Clean Used Sacks)
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('Plastic')} className="hover:text-jute-light transition-colors">
                  🏗️ HDPE / PP Woven Plastic Bags
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('Plastic Roll')} className="hover:text-jute-light transition-colors">
                  🌀 Plastic Roll (HDPE & PP Woven)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Executive Office Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-700/60 pb-2">
              Commercial Desk
            </h4>
            <div className="space-y-2 text-xs text-slate-200">
              <p className="font-bold text-white">Magarajothi Traders</p>
              <p className="text-slate-300">122, Cholakadai St, Dharapuram</p>
              <p className="text-slate-300">Tirupur Dist, Tamil Nadu - 638656</p>
            </div>

            <button
              onClick={() => navigate('/enquire')}
              className="w-full mt-2 bg-jute-dark hover:bg-jute text-white font-bold py-2 rounded-md text-xs shadow transition-colors"
            >
              Contact Commercial Desk
            </button>
          </div>

        </div>

        {/* Bottom Clean Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">Magarajothi Traders</strong>. All Rights Reserved.
          </div>

          <button onClick={scrollToTop} className="hover:text-jute-light flex items-center gap-1.5 transition-colors">
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-jute" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
