import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Leaf, Award, Truck } from 'lucide-react';

const slides = [
  {
    id: 1,
    category: 'Jute',
    badge: '🌱 100% BIODEGRADABLE & ECO-FRIENDLY',
    title: 'Natural Jute & Burlap Packaging Solutions',
    subtitle: 'Direct mill supply of Food-Grade A-Twill & Heavy Grain B-Twill Jute Bags engineered for agricultural commodities and global exporters.',
    image: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=1200&q=80',
    primaryCta: 'EXPLORE JUTE CATALOG',
    secondaryCta: 'REQUEST BULK QUOTE'
  },
  {
    id: 2,
    category: 'Nano Bags',
    badge: '👜 ECO RETAIL & PROMOTIONAL BAGS',
    title: 'Compact Laminated Nano Jute Bags',
    subtitle: 'Luxury mini jute bags, promotional hessian pouches, and customizable retail gift packaging crafted from premium natural jute fiber.',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
    primaryCta: 'EXPLORE NANO BAGS',
    secondaryCta: 'CUSTOM BRANDING QUOTE'
  },
  {
    id: 3,
    category: 'Plastic Roll',
    badge: '🌀 HIGH-DENSITY WOVEN FABRIC ROLLS',
    title: 'HDPE / PP Polymer Fabric Rolls & Bags',
    subtitle: 'Weather-resistant laminated plastic fabric rolls, animal feed packaging, and high-tensile HDPE woven sacks for industrial storage.',
    image: '/images/products/plastic-rolls-multi.jpg',
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

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const activeSlide = slides[currentSlide];

  return (
    <section className="relative bg-[#FAF6F0] overflow-hidden py-20 md:py-28 font-sans border-b border-gray-200">
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Scaled Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-jute-light/20 text-jute-dark font-bold px-4 py-1.5 rounded-full text-xs md:text-sm tracking-wide uppercase">
              <Leaf size={16} className="text-jute-dark" />
              <span>{activeSlide.badge}</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 tracking-tight">
              {activeSlide.title}
            </h1>

            {/* Subheading */}
            <p className="text-gray-700 text-base sm:text-xl max-w-2xl font-normal leading-relaxed">
              {activeSlide.subtitle}
            </p>

            {/* Scaled CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={() => {
                  if (onSelectCategory) onSelectCategory(activeSlide.category);
                  const el = document.getElementById('products-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-jute-dark text-white hover:bg-jute font-bold rounded-xl px-8 py-3.5 transition-colors shadow-md text-sm tracking-wider uppercase flex items-center gap-2"
              >
                <span>{activeSlide.primaryCta}</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => onOpenInquiry && onOpenInquiry(null, activeSlide.category)}
                className="border-2 border-jute-dark text-jute-dark hover:bg-jute-dark hover:text-white font-bold rounded-xl px-8 py-3 text-sm tracking-wider uppercase transition-colors"
              >
                {activeSlide.secondaryCta}
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-gray-200 grid grid-cols-3 gap-4 text-gray-700 font-semibold text-xs sm:text-sm">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <ShieldCheck className="text-jute-dark w-5 h-5 shrink-0" />
                <span>ISO Certified Merchant</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Award className="text-jute-dark w-5 h-5 shrink-0" />
                <span>Direct Mill Rates</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Truck className="text-jute-dark w-5 h-5 shrink-0" />
                <span>Pan-India & Export</span>
              </div>
            </div>

          </div>

          {/* Visual Card Slider */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 group h-88 sm:h-104">
              <img
                src={activeSlide.image}
                alt={activeSlide.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm shadow-md">
                  <span className="text-jute-dark font-bold block">{activeSlide.category} Range</span>
                  <span className="text-gray-700 font-medium">High Strength Export Quality</span>
                </div>

                {/* Arrow Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full bg-gray-900/60 hover:bg-jute-dark text-white flex items-center justify-center backdrop-blur-sm transition"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full bg-gray-900/60 hover:bg-jute-dark text-white flex items-center justify-center backdrop-blur-sm transition"
                  >
                    <ChevronRight size={22} />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
