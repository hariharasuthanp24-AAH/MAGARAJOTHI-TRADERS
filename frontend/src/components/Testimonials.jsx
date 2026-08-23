import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'K. Rajasekaran',
    role: 'Managing Director',
    company: 'Sri Annapoorna Rice Mills Pvt Ltd',
    location: 'Thanjavur, Tamil Nadu',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'Magarajothi Traders has been our trusted gunny bag supplier for over 8 years. Their B-Twill 50kg jute sacks are consistently uniform in weight, never burst during transport, and their pricing is unbeatable.',
  },
  {
    id: 2,
    name: 'V. Sundaramurthy',
    role: 'Export Operations Lead',
    company: 'Deccan Global Agro Exports',
    location: 'Chennai Port Hub',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'We source Hydrocarbon-Free A-Twill Jute Bags from Magarajothi for coffee bean exports to Europe. Zero compliance issues on VO standards. Prompt dispatch even during peak harvest seasons!',
  },
  {
    id: 3,
    name: 'M. Chennakesavulu',
    role: 'Proprietor',
    company: 'Lakshmi APMC Mandi Wholesale Traders',
    location: 'Kurnool, Andhra Pradesh',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'Their HDPE plastic gunny bags with custom flexo branding transformed our pulse packaging. Durable weave, weatherproof, and excellent stackability in our warehouses.',
  },
  {
    id: 4,
    name: 'R. Periasamy',
    role: 'Supply Chain Head',
    company: 'Kongu Sugar & Grain Refineries',
    location: 'Erode, Tamil Nadu',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'The V-Twill sugar export sacks we received were perfectly calendered with zero crystal leakage. Magarajothi Traders handles high-volume wholesale requirements effortlessly.',
  },
];

const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => setActiveIdx((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[activeIdx];

  return (
    <section id="testimonials-section" className="py-20 md:py-28 bg-[#FAF6F0] font-sans border-b border-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Scaled Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-jute-light/20 text-jute-dark border border-jute-light/40 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
            <MessageSquareQuote className="w-4 h-4 text-jute-dark" />
            <span>CLIENT TRUST & SATISFACTION</span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            What Our Clients Say!
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed font-normal">
            Hear from rice mill owners, sugar export directors, and APMC agricultural merchants who count on Magarajothi Traders for bulk packaging supplies.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="max-w-4xl mx-auto relative">
          
          <div className="bg-white rounded-3xl p-8 sm:p-14 border border-gray-200 shadow-md relative">
            
            <Quote className="w-20 h-20 text-jute-light/20 absolute top-6 right-8 pointer-events-none" />

            <div className="space-y-6">
              
              {/* Rating Stars */}
              <div className="flex space-x-1.5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-jute-dark text-jute-dark" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-xl sm:text-2xl text-gray-800 font-medium leading-relaxed italic font-serif">
                "{t.quote}"
              </p>

              {/* Reviewer Details with Avatar */}
              <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-jute-dark shadow-sm"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 leading-tight">{t.name}</h4>
                    <p className="text-sm text-jute-dark font-bold">{t.role} • {t.company}</p>
                  </div>
                </div>

                <span className="text-xs font-semibold text-gray-700 bg-[#FAF6F0] px-4 py-2 rounded-full border border-gray-200 w-fit">
                  📍 {t.location}
                </span>
              </div>

            </div>

          </div>

          {/* Carousel Arrows */}
          <div className="flex justify-center items-center space-x-5 mt-10">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white hover:bg-jute-dark hover:text-white text-gray-800 flex items-center justify-center transition-all border border-gray-300 shadow-sm"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Pagination Dots */}
            <div className="flex space-x-2.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-2.5 rounded-full transition-all ${idx === activeIdx ? 'w-8 bg-jute-dark' : 'w-2.5 bg-gray-300'}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white hover:bg-jute-dark hover:text-white text-gray-800 flex items-center justify-center transition-all border border-gray-300 shadow-sm"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
