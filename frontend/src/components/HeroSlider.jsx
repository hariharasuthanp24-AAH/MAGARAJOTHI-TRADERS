import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Leaf, Award, Truck } from 'lucide-react';

const slides = [
  {
    id: 1,
    category: 'Jute',
    badge: '🌱 100% Biodegradable & Eco-Friendly',
    title: 'Natural Jute & Burlap Packaging Solutions',
    subtitle: 'Direct mill supply of Food-Grade A-Twill & Heavy Grain B-Twill Jute Bags engineered for agricultural commodities and global exporters.',
    image: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=1200&q=80',
    primaryCta: 'Explore Jute Catalog',
    secondaryCta: 'Request Bulk Quote'
  },
  {
    id: 2,
    category: 'Nano Bags',
    badge: '👜 Eco Retail & Promotional Bags',
    title: 'Compact Laminated Nano Jute Bags',
    subtitle: 'Luxury mini jute bags, promotional hessian pouches, and customizable retail gift packaging crafted from premium natural jute fiber.',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
    primaryCta: 'Explore Nano Bags',
    secondaryCta: 'Custom Branding Quote'
  },
  {
    id: 3,
    category: 'Plastic Roll',
    badge: '🌀 High-Density Woven Fabric Rolls',
    title: 'HDPE / PP Polymer Fabric Rolls & Bags',
    subtitle: 'Weather-resistant laminated plastic fabric rolls, animal feed packaging, and high-tensile HDPE woven sacks for industrial storage.',
    image: '/images/products/plastic-rolls-multi.jpg',
    primaryCta: 'View Plastic Rolls',
    secondaryCta: 'Get Factory Direct Rates'
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
    <section className="relative bg-gradient-to-r from-forest-950 via-forest-900 to-[#2C1E14] text-white overflow-hidden py-16 md:py-24 font-sans">
      
      {/* Decorative Organic Texture Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-jute-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-forest-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-jute-500/15 border border-jute-400/30 text-jute-300 text-xs font-bold tracking-wide uppercase backdrop-blur-md">
              <Leaf size={14} className="text-jute-400" />
              <span>{activeSlide.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight text-amber-50 tracking-tight">
              {activeSlide.title}
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-sm sm:text-lg max-w-2xl font-normal leading-relaxed">
              {activeSlide.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => {
                  if (onSelectCategory) onSelectCategory(activeSlide.category);
                  const el = document.getElementById('products-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="gold-gradient-btn text-white px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
              >
                <span>{activeSlide.primaryCta}</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => onOpenInquiry && onOpenInquiry(null, activeSlide.category)}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition backdrop-blur-sm"
              >
                {activeSlide.secondaryCta}
              </button>
            </div>

            {/* Key Trust Badges */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-slate-300 text-xs font-medium">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <ShieldCheck className="text-jute-400 w-4 h-4 shrink-0" />
                <span>ISO Certified Merchant</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Award className="text-jute-400 w-4 h-4 shrink-0" />
                <span>Direct Mill Rates</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Truck className="text-jute-400 w-4 h-4 shrink-0" />
                <span>Pan-India & Export</span>
              </div>
            </div>

          </div>

          {/* Visual Card Slider */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-jute-500/20 group h-80 sm:h-96">
              <img
                src={activeSlide.image}
                alt={activeSlide.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                <div className="bg-forest-950/80 backdrop-blur-md px-4 py-2 rounded-xl border border-jute-400/30 text-xs">
                  <span className="text-jute-400 font-bold block">{activeSlide.category} Range</span>
                  <span className="text-slate-200">High Strength Export Quality</span>
                </div>

                {/* Arrow Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="w-9 h-9 rounded-full bg-black/40 hover:bg-jute-600 text-white flex items-center justify-center backdrop-blur-sm transition"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-9 h-9 rounded-full bg-black/40 hover:bg-jute-600 text-white flex items-center justify-center backdrop-blur-sm transition"
                  >
                    <ChevronRight size={20} />
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
