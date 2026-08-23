import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to Top"
      className={`fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center bg-jute-dark text-white shadow-xl hover:bg-gray-900 hover:-translate-y-1 transition-all duration-300 border border-white/20 ${
        isVisible ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
      }`}
    >
      <ArrowUp size={24} className="text-white" />
    </button>
  );
};

export default ScrollToTop;
