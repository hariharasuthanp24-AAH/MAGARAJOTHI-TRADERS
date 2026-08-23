import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ClipboardList, Leaf } from 'lucide-react';

const Navbar = ({ onSelectCategory, onOpenAdminModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryClick = (category) => {
    setProductDropdownOpen(false);
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate(`/?category=${category}`);
    } else {
      if (onSelectCategory) onSelectCategory(category);
      const element = document.getElementById('products-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 font-sans shadow-sm">
      {/* Main Navigation */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'glass-nav py-3 border-b border-jute-200/60 shadow-md' : 'bg-[#FAF6F0] py-4 border-b border-jute-200/40'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          
          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-3.5 text-left group">
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="Magarajothi Traders Logo" 
                className="w-11 h-11 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform duration-300 border-2 border-jute-400" 
              />
              <div className="absolute -bottom-1 -right-1 bg-forest-900 text-jute-400 p-0.5 rounded-full border border-jute-300">
                <Leaf size={10} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl font-extrabold text-forest-900 leading-tight group-hover:text-jute-600 transition-colors tracking-tight">
                MAGARAJOTHI
              </span>
              <span className="text-[11px] text-jute-600 tracking-[0.2em] font-bold uppercase flex items-center gap-1">
                TRADERS <span className="text-[9px] text-forest-600 font-normal">| Nature Jute</span>
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-semibold text-slate-700 text-sm">
            <Link to="/" className={`transition-colors py-1 ${location.pathname === '/' ? 'text-jute-600 font-bold border-b-2 border-jute-500' : 'hover:text-jute-600'}`}>
              Home
            </Link>
            <button onClick={() => scrollToSection('about-section')} className="hover:text-jute-600 transition-colors py-1">
              About Us
            </button>

            {/* Products Dropdown */}
            <div className="relative" onMouseLeave={() => setProductDropdownOpen(false)}>
              <button 
                onMouseEnter={() => setProductDropdownOpen(true)}
                onClick={() => scrollToSection('products-section')}
                className="flex items-center gap-1 hover:text-jute-600 transition-colors py-2"
              >
                <span>Products Catalog</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${productDropdownOpen ? 'rotate-180 text-jute-600' : ''}`} />
              </button>

              {productDropdownOpen && (
                <div className="absolute top-full left-0 w-60 bg-white/95 backdrop-blur-md shadow-2xl border border-jute-200 rounded-2xl py-2 mt-1 z-50 flex flex-col animate-in fade-in duration-150">
                  <button onClick={() => handleCategoryClick('All')} className="text-left px-4 py-2.5 text-xs hover:bg-jute-50 hover:text-jute-700 font-bold text-forest-900 border-b border-jute-100">
                    🌿 All Eco Products Catalog
                  </button>
                  <button onClick={() => handleCategoryClick('Jute')} className="text-left px-4 py-2 text-xs hover:bg-jute-50 hover:text-jute-700 font-semibold flex justify-between items-center">
                    <span>🌾 Jute Bags</span>
                    <span className="text-[10px] bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full font-bold">100% Eco</span>
                  </button>
                  <button onClick={() => handleCategoryClick('Nano Bags')} className="text-left px-4 py-2 text-xs hover:bg-jute-50 hover:text-jute-700 font-semibold flex justify-between items-center">
                    <span>👜 Nano Bags</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded-full font-bold">Mini</span>
                  </button>
                  <button onClick={() => handleCategoryClick('Jute Thread')} className="text-left px-4 py-2 text-xs hover:bg-jute-50 hover:text-jute-700 font-semibold flex justify-between items-center">
                    <span>🧵 Jute Thread</span>
                    <span className="text-[10px] bg-orange-100 text-orange-900 px-2 py-0.5 rounded-full font-bold">Twine</span>
                  </button>
                  <button onClick={() => handleCategoryClick('2nd Jute Bags')} className="text-left px-4 py-2 text-xs hover:bg-jute-50 hover:text-jute-700 font-semibold flex justify-between items-center">
                    <span>♻️ 2nd Jute Bags</span>
                    <span className="text-[10px] bg-stone-100 text-stone-900 px-2 py-0.5 rounded-full font-bold">Used</span>
                  </button>
                  <button onClick={() => handleCategoryClick('Plastic')} className="text-left px-4 py-2 text-xs hover:bg-jute-50 hover:text-jute-700 font-semibold flex justify-between items-center">
                    <span>🏗️ Plastic Bags</span>
                    <span className="text-[10px] bg-sky-100 text-sky-900 px-2 py-0.5 rounded-full font-bold">HDPE</span>
                  </button>
                  <button onClick={() => handleCategoryClick('Plastic Roll')} className="text-left px-4 py-2 text-xs hover:bg-jute-50 hover:text-jute-700 font-semibold flex justify-between items-center">
                    <span>🌀 Plastic Roll</span>
                    <span className="text-[10px] bg-indigo-100 text-indigo-900 px-2 py-0.5 rounded-full font-bold">Roll</span>
                  </button>
                </div>
              )}
            </div>

            <button onClick={() => scrollToSection('why-us-section')} className="hover:text-jute-600 transition-colors py-1">
              Why Choose Us
            </button>
            <Link to="/enquire" className={`transition-colors py-1 ${location.pathname === '/enquire' ? 'text-jute-600 font-bold border-b-2 border-jute-500' : 'hover:text-jute-600'}`}>
              Contact
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {onOpenAdminModal && (
              <button 
                onClick={onOpenAdminModal}
                className="text-xs text-forest-900 font-bold flex items-center gap-1.5 bg-jute-100 hover:bg-jute-200 px-3.5 py-2 rounded-xl transition border border-jute-300/60 shadow-sm"
                title="View Admin Leads Log"
              >
                <ClipboardList className="w-3.5 h-3.5 text-jute-600" /> View Leads
              </button>
            )}
            <button
              onClick={() => navigate('/enquire')}
              className="gold-gradient-btn text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-md text-xs tracking-wide uppercase flex items-center gap-1.5"
            >
              <span>Enquire Now</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-forest-900 p-1" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-jute-200 px-5 py-5 flex flex-col gap-3 shadow-xl text-sm font-semibold">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-left text-forest-900 py-1.5 border-b border-jute-100">
              Home
            </Link>
            <button onClick={() => scrollToSection('about-section')} className="text-left text-forest-900 py-1.5 border-b border-jute-100">
              About Us
            </button>
            <button onClick={() => scrollToSection('products-section')} className="text-left text-forest-900 py-1.5 border-b border-jute-100">
              Products Catalog
            </button>
            <button onClick={() => scrollToSection('why-us-section')} className="text-left text-forest-900 py-1.5 border-b border-jute-100">
              Why Choose Us
            </button>
            <Link to="/enquire" onClick={() => setMobileMenuOpen(false)} className="text-left text-forest-900 py-1.5 border-b border-jute-100">
              Contact & Inquiry
            </Link>
            {onOpenAdminModal && (
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenAdminModal(); }}
                className="text-left text-forest-900 font-bold py-1.5 flex items-center gap-2"
              >
                <ClipboardList className="w-4 h-4 text-jute-600" /> View Leads Log
              </button>
            )}
            <button
              onClick={() => { setMobileMenuOpen(false); navigate('/enquire'); }}
              className="gold-gradient-btn text-white text-center py-3 rounded-xl font-bold mt-2 text-xs tracking-wider uppercase shadow-md"
            >
              Enquire Now
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
