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
      {/* Navigation Container */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'bg-white/98 backdrop-blur-md py-3 border-b border-gray-200 shadow-md' : 'bg-[#FAF6F0] py-3.5 border-b border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-14 md:h-16">
          
          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-3.5 text-left group h-14 md:h-16">
            <div className="relative shrink-0">
              <img 
                src="/logo.png" 
                alt="Magarajothi Traders Logo" 
                className="w-11 h-11 md:w-13 md:h-13 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform duration-300 border-2 border-jute-dark" 
              />
              <div className="absolute -bottom-1 -right-1 bg-jute-dark text-white p-0.5 rounded-full border border-white shadow">
                <Leaf size={10} />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-heading text-xl md:text-2xl font-black text-gray-900 leading-tight group-hover:text-jute-dark transition-colors tracking-tight">
                MAGARAJOTHI
              </span>
              <span className="text-[11px] font-bold tracking-widest uppercase text-jute-dark">
                TRADERS <span className="text-[10px] text-gray-500 font-medium">| NATURE JUTE</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 md:gap-8 font-semibold text-sm md:text-base text-gray-800">
            <Link to="/" className={`transition-colors py-1 ${location.pathname === '/' ? 'text-jute-dark font-bold border-b-2 border-jute-dark' : 'hover:text-jute-dark'}`}>
              Home
            </Link>
            <button onClick={() => scrollToSection('about-section')} className="hover:text-jute-dark transition-colors py-1">
              About Us
            </button>

            {/* Products Dropdown (High Z-Index & Proper Spacing) */}
            <div className="relative" onMouseLeave={() => setProductDropdownOpen(false)}>
              <button 
                onMouseEnter={() => setProductDropdownOpen(true)}
                onClick={() => scrollToSection('products-section')}
                className="flex items-center gap-1.5 hover:text-jute-dark transition-colors py-2 font-semibold"
              >
                <span>Products Catalog</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${productDropdownOpen ? 'rotate-180 text-jute-dark' : ''}`} />
              </button>

              {/* Absolute Dropdown Container (z-50, w-72, proper flex spacing) */}
              {productDropdownOpen && (
                <div className="absolute top-full left-0 z-50 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 p-2 mt-2 flex flex-col gap-1 animate-in fade-in duration-150">
                  
                  {/* All Products Header Option */}
                  <button 
                    onClick={() => handleCategoryClick('All')} 
                    className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors text-left border-b border-gray-100"
                  >
                    <div className="flex items-center gap-3 text-gray-900 text-sm font-bold whitespace-nowrap">
                      <span>🌱</span>
                      <span>All Products Catalog</span>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full font-bold bg-jute-light/20 text-jute-dark whitespace-nowrap">
                      Full
                    </span>
                  </button>

                  {/* Category Options with Flex Spacing */}
                  <button 
                    onClick={() => handleCategoryClick('Jute')} 
                    className="flex items-center justify-between w-full px-4 py-2.5 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer text-left"
                  >
                    <div className="flex items-center gap-3 text-gray-800 text-sm font-semibold whitespace-nowrap group-hover:text-jute-dark">
                      <span>🌾</span>
                      <span>Jute Bags</span>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full font-bold bg-amber-100 text-amber-900 whitespace-nowrap">
                      Eco
                    </span>
                  </button>

                  <button 
                    onClick={() => handleCategoryClick('Nano Bags')} 
                    className="flex items-center justify-between w-full px-4 py-2.5 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer text-left"
                  >
                    <div className="flex items-center gap-3 text-gray-800 text-sm font-semibold whitespace-nowrap group-hover:text-jute-dark">
                      <span>👜</span>
                      <span>Nano Bags</span>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full font-bold bg-emerald-100 text-emerald-900 whitespace-nowrap">
                      Mini
                    </span>
                  </button>

                  <button 
                    onClick={() => handleCategoryClick('Jute Thread')} 
                    className="flex items-center justify-between w-full px-4 py-2.5 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer text-left"
                  >
                    <div className="flex items-center gap-3 text-gray-800 text-sm font-semibold whitespace-nowrap group-hover:text-jute-dark">
                      <span>🧵</span>
                      <span>Jute Thread</span>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full font-bold bg-orange-100 text-orange-900 whitespace-nowrap">
                      Twine
                    </span>
                  </button>

                  <button 
                    onClick={() => handleCategoryClick('2nd Jute Bags')} 
                    className="flex items-center justify-between w-full px-4 py-2.5 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer text-left"
                  >
                    <div className="flex items-center gap-3 text-gray-800 text-sm font-semibold whitespace-nowrap group-hover:text-jute-dark">
                      <span>♻️</span>
                      <span>2nd Jute Bags</span>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full font-bold bg-stone-100 text-stone-900 whitespace-nowrap">
                      Used
                    </span>
                  </button>

                  <button 
                    onClick={() => handleCategoryClick('Plastic')} 
                    className="flex items-center justify-between w-full px-4 py-2.5 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer text-left"
                  >
                    <div className="flex items-center gap-3 text-gray-800 text-sm font-semibold whitespace-nowrap group-hover:text-jute-dark">
                      <span>🏗️</span>
                      <span>Plastic Bags</span>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full font-bold bg-sky-100 text-sky-900 whitespace-nowrap">
                      HDPE
                    </span>
                  </button>

                  <button 
                    onClick={() => handleCategoryClick('Plastic Roll')} 
                    className="flex items-center justify-between w-full px-4 py-2.5 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer text-left"
                  >
                    <div className="flex items-center gap-3 text-gray-800 text-sm font-semibold whitespace-nowrap group-hover:text-jute-dark">
                      <span>🌀</span>
                      <span>Plastic Roll</span>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full font-bold bg-indigo-100 text-indigo-900 whitespace-nowrap">
                      Roll
                    </span>
                  </button>

                </div>
              )}
            </div>

            <button onClick={() => scrollToSection('why-us-section')} className="hover:text-jute-dark transition-colors py-1">
              Why Choose Us
            </button>
            <Link to="/enquire" className={`transition-colors py-1 ${location.pathname === '/enquire' ? 'text-jute-dark font-bold border-b-2 border-jute-dark' : 'hover:text-jute-dark'}`}>
              Contact
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {onOpenAdminModal && (
              <button 
                onClick={onOpenAdminModal}
                className="text-xs text-gray-800 font-bold flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 px-3.5 py-2 rounded-lg transition border border-gray-300"
                title="View Admin Leads Log"
              >
                <ClipboardList className="w-4 h-4 text-jute-dark" /> View Leads
              </button>
            )}
            <button
              onClick={() => navigate('/enquire')}
              className="bg-jute-dark text-white hover:bg-jute px-6 py-2.5 rounded-lg font-bold transition-all shadow-sm text-xs sm:text-sm tracking-wide uppercase"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-gray-900 p-1.5" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-gray-200 px-5 py-5 flex flex-col gap-3 shadow-xl text-base font-semibold">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-left text-gray-900 py-1.5 border-b border-gray-100">
              Home
            </Link>
            <button onClick={() => scrollToSection('about-section')} className="text-left text-gray-900 py-1.5 border-b border-gray-100">
              About Us
            </button>
            <button onClick={() => scrollToSection('products-section')} className="text-left text-gray-900 py-1.5 border-b border-gray-100">
              Products Catalog
            </button>
            <button onClick={() => scrollToSection('why-us-section')} className="text-left text-gray-900 py-1.5 border-b border-gray-100">
              Why Choose Us
            </button>
            <Link to="/enquire" onClick={() => setMobileMenuOpen(false)} className="text-left text-gray-900 py-1.5 border-b border-gray-100">
              Contact & Inquiry
            </Link>
            {onOpenAdminModal && (
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenAdminModal(); }}
                className="text-left text-gray-900 font-bold py-1.5 flex items-center gap-2"
              >
                <ClipboardList className="w-4 h-4 text-jute-dark" /> View Leads Log
              </button>
            )}
            <button
              onClick={() => { setMobileMenuOpen(false); navigate('/enquire'); }}
              className="bg-jute-dark text-white text-center py-3 rounded-lg font-bold mt-1 text-xs uppercase tracking-wider shadow-sm"
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
