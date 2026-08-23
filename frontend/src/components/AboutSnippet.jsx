import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowUpRight, Leaf, Truck, Award } from 'lucide-react';

const AboutSnippet = ({ onOpenInquiry }) => {
  return (
    <section id="about-section" className="py-20 md:py-28 bg-[#FAF6F0] relative overflow-hidden font-sans border-b border-gray-200/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Card with Elevated White Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white p-6 h-80 sm:h-96 flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Magarajothi Traders Natural Jute Sourcing Since 1985"
                className="max-w-full max-h-full object-contain p-4 drop-shadow-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent rounded-xl" />
              
              {/* Overlay Stat Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-gray-200 shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-jute-light/20 text-jute-dark flex items-center justify-center font-bold shrink-0 border border-jute-light/40">
                  <Award size={24} className="text-jute-dark" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-gray-900">40+ Years Legacy (Est. 1985)</div>
                  <div className="text-xs text-gray-600 font-medium">100% Bio-Degradable Jute & Hessian Fiber</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Copywriting & Clean Bold Text */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-jute-light/20 border border-jute-light/40 text-jute-dark text-sm font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-jute-dark" />
              <span>Premier Merchant & Exporter • Est. 1985</span>
            </div>

            {/* Heading Accent */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Pioneering Sustainable <span className="text-jute-dark font-black">Jute & Eco Packaging</span> Solutions Across India
            </h2>

            {/* Clean Paragraph featuring founding year 1985 */}
            <p className="text-gray-800 text-base md:text-lg leading-relaxed font-normal">
              <span className="font-bold text-gray-900">Established in 1985</span> in Dharapuram, Tamil Nadu, <strong className="text-gray-900 font-extrabold">Magarajothi Traders</strong> brings over four decades of trusted merchant legacy, supplying <span className="font-bold text-gray-900">100% Natural Jute Bags</span>, Nano Bags, Jute Thread spools, Grade-A 2nd Jute Bags, and HDPE Plastic Rolls with <span className="font-bold text-gray-900">Direct Mill Pricing</span> for exporters and agricultural mills.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base font-semibold text-gray-900">
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <CheckCircle2 className="w-5 h-5 text-jute-dark shrink-0" />
                <span><strong className="font-bold text-gray-900">Food-Grade</strong> Hydrocarbon Free</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <CheckCircle2 className="w-5 h-5 text-jute-dark shrink-0" />
                <span>Custom Size & Brand Printing</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <CheckCircle2 className="w-5 h-5 text-jute-dark shrink-0" />
                <span>Grade-A Clean Used Jute Sacks</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <CheckCircle2 className="w-5 h-5 text-jute-dark shrink-0" />
                <span><strong className="font-bold text-gray-900">Direct Mill</strong> Rates Since 1985</span>
              </div>
            </div>

            {/* Logistical Callout Box */}
            <div className="flex items-center gap-3 bg-emerald-50 border-l-4 border-emerald-600 text-emerald-950 p-4 rounded-r-xl text-xs sm:text-sm font-bold shadow-sm border-y border-r border-emerald-200/60">
              <Truck className="w-5 h-5 text-emerald-700 shrink-0" />
              <span>Pan-India Logistics & Immediate Dispatch Guarantee from Dharapuram Warehouse</span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenInquiry && onOpenInquiry()}
                className="bg-jute-dark text-white hover:bg-jute px-7 py-3.5 rounded-xl text-sm font-bold tracking-wider uppercase transition-colors shadow-md flex items-center gap-2"
              >
                <span>Request Commercial Catalog</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSnippet;
