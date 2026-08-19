import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Award, CheckCircle2 } from 'lucide-react';

const slides = [
  {
    id: 1,
    tagline: 'ECO-FRIENDLY & SUSTAINABLE PACKAGING',
    title: 'Eco-Friendly Jute Solutions for Global Merchants',
    description: '100% natural, hydrocarbon-free A-Twill & B-Twill Jute Sacks engineered for premium grain export, coffee beans, and agricultural commodities.',
    badge: 'Hydrocarbon Free • VO Standard',
    category: 'Jute',
    ctaPrimary: 'Browse Jute Bags',
    image: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=1200&q=80',
    features: ['100% Biodegradable', 'High Tensile Strength', 'Food-Grade Certified']
  },
  {
    id: 2,
    tagline: 'INDUSTRIAL STRENGTH POLYMER PACKAGING',
    title: 'Durable Plastic Gunny Bags for Global Export',
    description: 'Heavy-duty HDPE & PP Woven Bags built with moisture barriers, UV protection, and leak-proof lamination for fertilizers, flour, and chemical bulk transport.',
    badge: 'Moisture Proof • UV Stabilized',
    category: 'Plastic',
    ctaPrimary: 'Explore Plastic Bags',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1200&q=80',
    features: ['Zero Moisture Ingress', 'BOPP Color Printing', 'High Burst Capacity']
  },
  {
    id: 3,
    tagline: 'RUGGED BULK AGRICULTURAL STORAGE & EXPORT',
    title: 'Heavy Agricultural Gunny Bags & Global Shipping',
    description: 'Time-tested 50kg and 100kg heavy-duty gunny sacks designed for rice mills, sugar refineries, APMC mandis, and international port export shipments.',
    badge: 'APMC & Export Mandate Standard',
    category: 'Gunny',
    ctaPrimary: 'View Gunny Range',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    features: ['100kg Heavy Capacity', 'Non-Slip Stacking', 'Puncture Resistant']
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

  const handleCtaClick = (category) => {
    if (onSelectCategory) onSelectCategory(category);
    const element = document.getElementById('products-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative bg-brand-navy text-white overflow-hidden min-h-[580px] md:min-h-[640px] flex items-center">
      {/* Background Ambient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-emerald/80 z-10 pointer-events-none"></div>
      
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover object-center transform scale-105 transition-all duration-1000"
        />
      </div>

      {/* Main Slide Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 bg-jute/20 border border-jute/40 text-jute-light px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase backdrop-blur-md">
              <Award className="w-4 h-4 text-jute" />
              <span>{slide.tagline}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
              {slide.title}
            </h1>

            {/* Description */}
            <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {slide.description}
            </p>

            {/* Feature Bullets */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-1">
              {slide.features.map((feat, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs font-semibold text-slate-100 bg-white/10 px-3 py-1.5 rounded-lg border border-white/20 backdrop-blur-md">
                  <CheckCircle2 className="w-4 h-4 text-jute" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onOpenInquiry && onOpenInquiry(null, slide.category)}
                className="w-full sm:w-auto bg-jute-dark hover:bg-jute text-white font-extrabold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-3 text-base"
              >
                <span>Request Wholesale Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleCtaClick(slide.category)}
                className="w-full sm:w-auto bg-white/15 hover:bg-white/25 text-white font-bold px-7 py-4 rounded-xl border border-white/30 backdrop-blur-md transition-all flex items-center justify-center space-x-2 text-base"
              >
                <span>{slide.ctaPrimary}</span>
              </button>
            </div>
          </div>

          {/* Right Column Product Visual Card */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 group">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-80 sm:h-96 object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-slate-200">
                <span className="bg-jute text-brand-navy font-extrabold px-3 py-1 rounded-md uppercase tracking-wider shadow">
                  {slide.badge}
                </span>
                <span className="font-semibold text-slate-200">Magarajothi Genuine Sourcing</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-jute text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all z-30 hidden md:flex"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-jute text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all z-30 hidden md:flex"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-jute' : 'w-2.5 bg-white/30 hover:bg-white/60'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
