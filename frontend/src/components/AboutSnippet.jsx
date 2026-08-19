import React from 'react';
import { ShieldCheck, CheckCircle, ArrowUpRight } from 'lucide-react';

const AboutSnippet = ({ onOpenInquiry }) => {
  return (
    <section id="about-section" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Stack & Trust Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-brand-navy">
              
              {/* Background Warehouse Image */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80"
                  alt="Agricultural Warehouse & Grain Storage"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent"></div>
              </div>

              {/* Card Text Content */}
              <div className="p-8 text-white space-y-5 bg-gradient-to-br from-brand-navy to-brand-emerald -mt-10 relative z-10">
                <div className="flex items-center space-x-4">
                  <img 
                    src="/logo.png" 
                    alt="Magarajothi Traders Logo" 
                    className="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-jute flex-shrink-0" 
                  />
                  <div>
                    <span className="text-jute-light font-bold text-xs uppercase tracking-widest block">
                      ESTABLISHED TRADING HOUSE
                    </span>
                    <h3 className="text-2xl font-heading font-extrabold text-white">
                      Magarajothi Traders
                    </h3>
                  </div>
                </div>

                <p className="text-slate-200 text-sm leading-relaxed">
                  Located in Dharapuram, Tamil Nadu, Magarajothi Traders stands as a benchmark in wholesale merchant trading of premium Jute, traditional Heavy Gunny Sacks, and HDPE/PP Plastic Gunny Packaging.
                </p>
                <div className="border-t border-slate-700/80 pt-4 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/10 p-3 rounded-lg border border-white/15">
                    <span className="block text-2xl font-black text-jute-light">25+</span>
                    <span className="text-[11px] text-slate-300 font-semibold uppercase">Years Legacy</span>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg border border-white/15">
                    <span className="block text-2xl font-black text-jute-light">50K+</span>
                    <span className="text-[11px] text-slate-300 font-semibold uppercase">Daily Capacity</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Offset Backdrop */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-jute-100 rounded-2xl -z-0 transform rotate-2"></div>
          </div>

          {/* Right Column: Detailed Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-jute-100 text-jute-dark px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-jute-dark" />
              <span>DIRECT MILL SOURCING & QUALITY ASSURANCE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-navy tracking-tight leading-tight">
              Pioneering Reliability in B2B Gunny & Jute Bag Trading
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              At <strong className="text-brand-navy">Magarajothi Traders</strong>, we bridge the gap between agricultural producers, rice mills, sugar export conglomerates, and high-volume industrial packaging requirements. Every consignment of Jute and Plastic gunny sacks undergoes strict burst-strength testing, weave integrity analysis, and moisture auditing.
            </p>

            {/* Key Differentiators List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
              <div className="flex items-start space-x-3 bg-brand-chalk p-3.5 rounded-xl border border-slate-200">
                <CheckCircle className="w-5 h-5 text-jute-dark mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-brand-navy">Hydrocarbon Free Jute</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Meets international cocoa & coffee bean export standards.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-brand-chalk p-3.5 rounded-xl border border-slate-200">
                <CheckCircle className="w-5 h-5 text-jute-dark mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-brand-navy">Heavy Weight Gunny Sacks</h4>
                  <p className="text-xs text-slate-500 mt-0.5">High GSM weave tailored for 50kg & 100kg mandis load.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-brand-chalk p-3.5 rounded-xl border border-slate-200">
                <CheckCircle className="w-5 h-5 text-jute-dark mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-brand-navy">Weatherproof Plastic Sacks</h4>
                  <p className="text-xs text-slate-500 mt-0.5">UV-stabilized HDPE/PP woven bags with optional lamination.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-brand-chalk p-3.5 rounded-xl border border-slate-200">
                <CheckCircle className="w-5 h-5 text-jute-dark mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-brand-navy">Custom Branding & Sizing</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Flexographic & rotogravure printing for mill logos.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2 flex items-center space-x-4">
              <button
                onClick={() => onOpenInquiry && onOpenInquiry()}
                className="bg-brand-navy hover:bg-brand-emerald text-white font-bold px-6 py-3 rounded-xl shadow transition-all flex items-center space-x-2 text-sm"
              >
                <span>Partner With Magarajothi</span>
                <ArrowUpRight className="w-4 h-4 text-jute" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSnippet;
