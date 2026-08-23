import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, ShieldCheck, Leaf, Award, Truck } from 'lucide-react';

const slides = [
  {
    id: 1,
    category: 'Jute',
    badge: '🌱 100% BIODEGRADABLE & ECO-FRIENDLY',
    title: 'Natural Jute & Burlap Packaging Solutions',
    subtitle: 'Direct mill supply of Food-Grade A-Twill & Heavy Grain B-Twill Jute Bags engineered for agricultural commodities and global exporters.',
    image: '/logo.png',
    primaryCta: 'EXPLORE JUTE CATALOG',
    secondaryCta: 'REQUEST BULK QUOTE'
  },
  {
    id: 2,
    category: 'Nano Bags',
    badge: '👜 ECO RETAIL & PROMOTIONAL BAGS',
    title: 'Compact Laminated Nano Jute Bags',
    subtitle: 'Luxury mini jute bags, promotional hessian pouches, and customizable retail gift packaging crafted from premium natural jute fiber.',
    image: '/logo.png',
    primaryCta: 'EXPLORE NANO BAGS',
    secondaryCta: 'CUSTOM BRANDING QUOTE'
  },
  {
    id: 3,
    category: 'Plastic Roll',
    badge: '🌀 HIGH-DENSITY WOVEN FABRIC ROLLS',
    title: 'HDPE / PP Polymer Fabric Rolls & Bags',
    subtitle: 'Weather-resistant laminated plastic fabric rolls, animal feed packaging, and high-tensile HDPE woven sacks for industrial storage.',
    image: '/logo.png',
    primaryCta: 'VIEW PLASTIC ROLLS',
    secondaryCta: 'GET FACTORY DIRECT RATES'
  }
];

const HeroSlider = ({ onOpenInquiry, onSelectCategory }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollDown = () => {
    const nextSection = document.getElementById('about-section') || document.getElementById('products-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight - 100, behavior: 'smooth' });
    }
  };

  const activeSlide = slides[currentSlide];

  return (
    <section className="relative w-full bg-[#FAF6F0] overflow-hidden pt-12 md:pt-20 pb-28 md:pb-36 font-sans border-b border-gray-200/80 m-0 p-0">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Text Content Area */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-jute-light/20 text-jute-dark font-bold px-3.5 py-1 rounded-full text-xs tracking-wide uppercase">
              <Leaf size={14} className="text-jute-dark" />
              <span>{activeSlide.badge}</span>
            </div>

            {/* H1 Main Heading */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 tracking-tight">
              {activeSlide.title}
            </h1>

            {/* Subheading */}
            <p className="text-gray-700 text-sm sm:text-base font-normal leading-relaxed max-w-2xl">
              {activeSlide.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => {
                  if (onSelectCategory) onSelectCategory(activeSlide.category);
                  const el = document.getElementById('products-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-jute-dark text-white hover:bg-jute font-bold rounded-lg px-6 py-3 transition-colors shadow-md text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2"
              >
                <span>{activeSlide.primaryCta}</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => onOpenInquiry && onOpenInquiry(null, activeSlide.category)}
                className="border-2 border-jute-dark text-jute-dark hover:bg-jute-dark hover:text-white font-bold rounded-lg px-6 py-2.5 text-xs sm:text-sm tracking-wider uppercase transition-colors"
              >
                {activeSlide.secondaryCta}
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-gray-200/80 grid grid-cols-3 gap-3 text-gray-800 font-semibold text-xs sm:text-sm">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <ShieldCheck className="text-jute-dark w-4.5 h-4.5 shrink-0" />
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Award className="text-jute-dark w-4.5 h-4.5 shrink-0" />
                <span>Direct Mill Rates</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Truck className="text-jute-dark w-4.5 h-4.5 shrink-0" />
                <span>Pan-India Export</span>
              </div>
            </div>

          </div>

          {/* Static Clean Universal Logo Placeholder Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white p-8 h-80 sm:h-96 flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Magarajothi Traders Company Logo"
                className="max-w-full max-h-full object-contain p-6 drop-shadow-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-lg border border-gray-200 text-xs shadow-sm">
                  <span className="text-jute-dark font-bold block">{activeSlide.category} Range</span>
                  <span className="text-gray-700 font-medium">Export Quality</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Sleek Hover-Reveal Scroll Indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center group cursor-pointer z-30 focus:outline-none hidden sm:flex"
        aria-label="Scroll to Know More"
      >
        {/* Hover-Reveal Tooltip */}
        <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-gray-900 text-xs font-bold tracking-[0.1em] px-4 py-2 rounded-full shadow-lg border border-gray-200 pointer-events-none whitespace-nowrap">
          SCROLL TO KNOW MORE
        </div>

        {/* Bouncing Chevron in Circular Badge */}
        <div className="p-2.5 bg-white rounded-full shadow-md group-hover:shadow-xl border border-gray-200 transition-all">
          <ChevronDown className="w-5 h-5 text-jute-dark animate-bounce" />
        </div>
      </button>

    </section>
  );
};

export default HeroSlider;
