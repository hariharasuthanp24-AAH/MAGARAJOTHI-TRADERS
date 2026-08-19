import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ClipboardList } from 'lucide-react';

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
    <header className="sticky top-0 z-50 transition-all duration-300 font-sans shadow-md">
      {/* Main Navigation */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'glass-nav py-3 border-b border-gray-200' : 'bg-white py-4 border-b border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          
          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-3 text-left group">
            <img 
              src="/logo.png" 
              alt="Magarajothi Traders Logo" 
              className="w-11 h-11 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform duration-200 border-2 border-jute" 
            />
            <div className="flex flex-col">
              <span className="font-heading text-xl font-bold text-brand-navy leading-tight group-hover:text-jute-dark transition-colors">
                MAGARAJOTHI
              </span>
              <span className="text-xs text-jute-dark tracking-widest font-semibold uppercase">
                TRADERS
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium text-gray-700 text-sm">
            <Link to="/" className={`transition-colors ${location.pathname === '/' ? 'text-jute-dark font-bold' : 'hover:text-jute-dark'}`}>
              Home
            </Link>
            <button onClick={() => scrollToSection('about-section')} className="hover:text-jute-dark transition-colors">
              About Us
            </button>

            {/* Products Dropdown */}
            <div className="relative" onMouseLeave={() => setProductDropdownOpen(false)}>
              <button 
                onMouseEnter={() => setProductDropdownOpen(true)}
                onClick={() => scrollToSection('products-section')}
                className="flex items-center gap-1 hover:text-jute-dark transition-colors py-2"
              >
                <span>Products</span>
                <ChevronDown size={16} className={`transition-transform ${productDropdownOpen ? 'rotate-180 text-jute-dark' : ''}`} />
              </button>

              {productDropdownOpen && (
                <div className="absolute top-full left-0 w-52 bg-white shadow-xl border border-gray-100 rounded-lg py-2 mt-1 z-50 flex flex-col animate-in fade-in duration-150">
                  <button onClick={() => handleCategoryClick('All')} className="text-left px-4 py-2 text-sm hover:bg-brand-chalk hover:text-jute-dark font-medium">
                    All Products Catalog
                  </button>
                  <button onClick={() => handleCategoryClick('Jute')} className="text-left px-4 py-2 text-sm hover:bg-brand-chalk hover:text-jute-dark font-medium flex justify-between items-center">
                    <span>Jute Bags</span>
                    <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">Eco</span>
                  </button>
                  <button onClick={() => handleCategoryClick('Gunny')} className="text-left px-4 py-2 text-sm hover:bg-brand-chalk hover:text-jute-dark font-medium flex justify-between items-center">
                    <span>Gunny Bags</span>
                    <span className="text-[10px] bg-yellow-100 text-yellow-900 px-1.5 py-0.5 rounded">Heavy</span>
                  </button>
                  <button onClick={() => handleCategoryClick('Plastic')} className="text-left px-4 py-2 text-sm hover:bg-brand-chalk hover:text-jute-dark font-medium flex justify-between items-center">
                    <span>Plastic Gunny Bags</span>
                    <span className="text-[10px] bg-sky-100 text-sky-800 px-1.5 py-0.5 rounded">HDPE</span>
                  </button>
                </div>
              )}
            </div>

            <button onClick={() => scrollToSection('why-us-section')} className="hover:text-jute-dark transition-colors">
              Why Choose Us
            </button>
            <Link to="/enquire" className={`transition-colors ${location.pathname === '/enquire' ? 'text-jute-dark font-bold' : 'hover:text-jute-dark'}`}>
              Contact
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {onOpenAdminModal && (
              <button 
                onClick={onOpenAdminModal}
                className="text-xs text-slate-700 hover:text-brand-navy font-semibold flex items-center gap-1 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-md transition"
                title="View Admin Leads Log"
              >
                <ClipboardList className="w-3.5 h-3.5 text-jute-dark" /> View Leads
              </button>
            )}
            <button
              onClick={() => navigate('/enquire')}
              className="bg-jute-dark hover:bg-jute text-white px-6 py-2.5 rounded-md font-semibold transition-colors shadow-sm text-sm"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-brand-navy p-1" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3 shadow-inner text-sm font-medium">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-left text-gray-700 py-1 border-b border-gray-50">
              Home
            </Link>
            <button onClick={() => scrollToSection('about-section')} className="text-left text-gray-700 py-1 border-b border-gray-50">
              About Us
            </button>
            <button onClick={() => scrollToSection('products-section')} className="text-left text-gray-700 py-1 border-b border-gray-50">
              Products Catalog
            </button>
            <button onClick={() => scrollToSection('why-us-section')} className="text-left text-gray-700 py-1 border-b border-gray-50">
              Why Choose Us
            </button>
            <Link to="/enquire" onClick={() => setMobileMenuOpen(false)} className="text-left text-gray-700 py-1 border-b border-gray-50">
              Contact & Inquiry
            </Link>
            {onOpenAdminModal && (
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenAdminModal(); }}
                className="text-left text-slate-700 font-semibold py-1 flex items-center gap-1.5"
              >
                <ClipboardList className="w-4 h-4 text-jute-dark" /> View Leads Log
              </button>
            )}
            <button
              onClick={() => { setMobileMenuOpen(false); navigate('/enquire'); }}
              className="bg-brand-navy text-white text-center py-2.5 rounded-md font-semibold mt-1"
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
