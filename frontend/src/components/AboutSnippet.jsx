import React from 'react';
import { ShieldCheck, Award, Layers, CheckCircle2, ArrowUpRight, Leaf } from 'lucide-react';

const AboutSnippet = ({ onOpenInquiry }) => {
  return (
    <section id="about-section" className="py-20 bg-[#FAF6F0] relative overflow-hidden font-sans border-b border-jute-200/50">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Card with Nature Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-jute-300/60 bg-white p-3">
              <img
                src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80"
                alt="Magarajothi Traders Natural Jute Sourcing"
                className="w-full h-80 sm:h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent rounded-2xl" />
              
              {/* Overlay Stat Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-jute-300 shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest-900 text-jute-400 flex items-center justify-center font-bold shrink-0">
                  <Leaf size={24} />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-forest-900">Direct Mill Sourcing</div>
                  <div className="text-xs text-slate-600">100% Bio-Degradable Jute & Hessian Fiber</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copywriting & Stats */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-jute-100 border border-jute-300 text-jute-800 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-jute-600" />
              <span>Premier Merchant & Exporter</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-forest-900 tracking-tight leading-tight">
              Pioneering Sustainable <span className="text-jute-600">Jute & Eco Packaging</span> Solutions Across India
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Established in Dharapuram, Tamil Nadu, <strong>Magarajothi Traders</strong> is a trusted merchant business supplying premium 100% natural Jute Bags, Nano Bags, Jute Thread spools, 2nd Jute Bags, and HDPE Plastic Rolls to agricultural mills, exporters, and commercial industries.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-slate-800">
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-jute-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-forest-600 shrink-0" />
                <span>Food-Grade Hydrocarbon Free Jute</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-jute-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-forest-600 shrink-0" />
                <span>Custom Size & Brand Printing</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-jute-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-forest-600 shrink-0" />
                <span>Grade-A Clean Used Jute Sacks</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-jute-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-forest-600 shrink-0" />
                <span>Bulk Factory-Direct Wholesale Rates</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenInquiry && onOpenInquiry()}
                className="gold-gradient-btn text-white px-6 py-3 rounded-xl text-xs font-bold tracking-wider uppercase shadow-md flex items-center gap-2"
              >
                <span>Request Commercial Catalog</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSnippet;
