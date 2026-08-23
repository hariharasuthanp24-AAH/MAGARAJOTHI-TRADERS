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
      <nav className={`transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-3.5 border-b border-gray-200 shadow-md' : 'bg-[#FAF6F0] py-5 border-b border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          
          {/* Scaled Up Logo Area */}
          <Link to="/" className="flex items-center gap-4 text-left group">
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="Magarajothi Traders Logo" 
                className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform duration-300 border-2 border-jute-dark" 
              />
              <div className="absolute -bottom-1 -right-1 bg-jute-dark text-white p-1 rounded-full border border-white">
                <Leaf size={12} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight group-hover:text-jute-dark transition-colors tracking-tight">
                MAGARAJOTHI
              </span>
              <span className="text-xs md:text-sm text-jute-dark tracking-[0.2em] font-bold uppercase">
                TRADERS <span className="text-xs text-gray-500 font-medium">| Eco Packaging</span>
              </span>
            </div>
          </Link>

          {/* Scaled Up Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 md:gap-10 font-semibold text-gray-800 text-base">
            <Link to="/" className={`transition-colors py-1 ${location.pathname === '/' ? 'text-jute-dark font-bold border-b-2 border-jute-dark' : 'hover:text-jute-dark'}`}>
              Home
            </Link>
            <button onClick={() => scrollToSection('about-section')} className="hover:text-jute-dark transition-colors py-1">
              About Us
            </button>

            {/* Products Dropdown */}
            <div className="relative" onMouseLeave={() => setProductDropdownOpen(false)}>
              <button 
                onMouseEnter={() => setProductDropdownOpen(true)}
                onClick={() => scrollToSection('products-section')}
                className="flex items-center gap-1.5 hover:text-jute-dark transition-colors py-2"
              >
                <span>Products Catalog</span>
                <ChevronDown size={18} className={`transition-transform duration-200 ${productDropdownOpen ? 'rotate-180 text-jute-dark' : ''}`} />
              </button>

              {productDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white/98 backdrop-blur-md shadow-2xl border border-gray-200 rounded-2xl py-3 mt-1 z-50 flex flex-col animate-in fade-in duration-150">
                  <button onClick={() => handleCategoryClick('All')} className="text-left px-5 py-3 text-sm hover:bg-jute-light/10 hover:text-jute-dark font-bold text-gray-900 border-b border-gray-100">
                    🌱 All Eco Products Catalog
                  </button>
                  <button onClick={() => handleCategoryClick('Jute')} className="text-left px-5 py-2.5 text-sm hover:bg-jute-light/10 hover:text-jute-dark font-semibold flex justify-between items-center text-gray-800">
                    <span>🌾 Jute Bags</span>
                    <span className="text-xs bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full font-bold">Eco</span>
                  </button>
                  <button onClick={() => handleCategoryClick('Nano Bags')} className="text-left px-5 py-2.5 text-sm hover:bg-jute-light/10 hover:text-jute-dark font-semibold flex justify-between items-center text-gray-800">
                    <span>👜 Nano Bags</span>
                    <span className="text-xs bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded-full font-bold">Mini</span>
                  </button>
                  <button onClick={() => handleCategoryClick('Jute Thread')} className="text-left px-5 py-2.5 text-sm hover:bg-jute-light/10 hover:text-jute-dark font-semibold flex justify-between items-center text-gray-800">
                    <span>🧵 Jute Thread</span>
                    <span className="text-xs bg-orange-100 text-orange-900 px-2 py-0.5 rounded-full font-bold">Twine</span>
                  </button>
                  <button onClick={() => handleCategoryClick('2nd Jute Bags')} className="text-left px-5 py-2.5 text-sm hover:bg-jute-light/10 hover:text-jute-dark font-semibold flex justify-between items-center text-gray-800">
                    <span>♻️ 2nd Jute Bags</span>
                    <span className="text-xs bg-stone-100 text-stone-900 px-2 py-0.5 rounded-full font-bold">Used</span>
                  </button>
                  <button onClick={() => handleCategoryClick('Plastic')} className="text-left px-5 py-2.5 text-sm hover:bg-jute-light/10 hover:text-jute-dark font-semibold flex justify-between items-center text-gray-800">
                    <span>🏗️ Plastic Bags</span>
                    <span className="text-xs bg-sky-100 text-sky-900 px-2 py-0.5 rounded-full font-bold">HDPE</span>
                  </button>
                  <button onClick={() => handleCategoryClick('Plastic Roll')} className="text-left px-5 py-2.5 text-sm hover:bg-jute-light/10 hover:text-jute-dark font-semibold flex justify-between items-center text-gray-800">
                    <span>🌀 Plastic Roll</span>
                    <span className="text-xs bg-indigo-100 text-indigo-900 px-2 py-0.5 rounded-full font-bold">Roll</span>
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

          {/* Scaled Up Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {onOpenAdminModal && (
              <button 
                onClick={onOpenAdminModal}
                className="text-sm text-gray-800 font-bold flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 px-4 py-2.5 rounded-xl transition border border-gray-300"
                title="View Admin Leads Log"
              >
                <ClipboardList className="w-4 h-4 text-jute-dark" /> View Leads
              </button>
            )}
            <button
              onClick={() => navigate('/enquire')}
              className="bg-jute-dark text-white hover:bg-jute px-7 py-3 rounded-xl font-bold transition-all shadow-md text-sm tracking-wide uppercase"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-gray-900 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-gray-200 px-6 py-6 flex flex-col gap-4 shadow-xl text-base font-semibold">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-left text-gray-900 py-2 border-b border-gray-100">
              Home
            </Link>
            <button onClick={() => scrollToSection('about-section')} className="text-left text-gray-900 py-2 border-b border-gray-100">
              About Us
            </button>
            <button onClick={() => scrollToSection('products-section')} className="text-left text-gray-900 py-2 border-b border-gray-100">
              Products Catalog
            </button>
            <button onClick={() => scrollToSection('why-us-section')} className="text-left text-gray-900 py-2 border-b border-gray-100">
              Why Choose Us
            </button>
            <Link to="/enquire" onClick={() => setMobileMenuOpen(false)} className="text-left text-gray-900 py-2 border-b border-gray-100">
              Contact & Inquiry
            </Link>
            {onOpenAdminModal && (
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenAdminModal(); }}
                className="text-left text-gray-900 font-bold py-2 flex items-center gap-2"
              >
                <ClipboardList className="w-5 h-5 text-jute-dark" /> View Leads Log
              </button>
            )}
            <button
              onClick={() => { setMobileMenuOpen(false); navigate('/enquire'); }}
              className="bg-jute-dark text-white text-center py-3.5 rounded-xl font-bold mt-2 text-sm tracking-wider uppercase shadow-md"
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
