import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowUpRight, Leaf, Truck } from 'lucide-react';

const AboutSnippet = ({ onOpenInquiry }) => {
  return (
    <section id="about-section" className="py-20 md:py-28 bg-white relative overflow-hidden font-sans border-y border-gray-200/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Card with Layered Depth */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-[#FAF6F0] p-3">
              <img
                src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80"
                alt="Magarajothi Traders Natural Jute Sourcing"
                className="w-full h-80 sm:h-96 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent rounded-xl" />
              
              {/* Overlay Stat Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-gray-200 shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-jute-light/20 text-jute-dark flex items-center justify-center font-bold shrink-0 border border-jute-light/40">
                  <Leaf size={24} className="text-jute-dark" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-gray-900">Direct Mill Sourcing</div>
                  <div className="text-xs text-gray-600 font-medium">100% Bio-Degradable Jute & Hessian Fiber</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copywriting & Stats */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-jute-light/20 border border-jute-light/40 text-jute-dark text-sm font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-jute-dark" />
              <span>Premier Merchant & Exporter</span>
            </div>

            {/* High-Contrast Bold Accent for Headings */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Pioneering Sustainable <span className="text-jute-dark font-black">Jute & Eco Packaging</span> Solutions Across India
            </h2>

            {/* Paragraph with High-Contrast Dark Text Highlights */}
            <p className="text-gray-800 text-base md:text-lg leading-relaxed font-normal">
              Established in Dharapuram, Tamil Nadu, <strong className="text-gray-900 font-extrabold">Magarajothi Traders</strong> is a trusted merchant supplying <span className="bg-[#F5E6D3] text-gray-900 font-extrabold px-2 py-0.5 rounded-md border border-[#E6D0B8] shadow-sm">100% Natural Jute Bags</span>, Nano Bags, Jute Thread spools, Grade-A 2nd Jute Bags, and HDPE Plastic Rolls with <span className="bg-[#F5E6D3] text-gray-900 font-extrabold px-2 py-0.5 rounded-md border border-[#E6D0B8] shadow-sm">Direct Mill Pricing</span> for exporters and agricultural mills.
            </p>

            {/* Core Pillars with High-Contrast Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base font-semibold text-gray-900">
              <div className="flex items-center gap-3 bg-[#FAF6F0] p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <CheckCircle2 className="w-5 h-5 text-jute-dark shrink-0" />
                <span><span className="bg-[#F5E6D3] text-gray-900 font-extrabold px-2 py-0.5 rounded-md border border-[#E6D0B8]">Food-Grade</span> Hydrocarbon Free</span>
              </div>
              <div className="flex items-center gap-3 bg-[#FAF6F0] p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <CheckCircle2 className="w-5 h-5 text-jute-dark shrink-0" />
                <span>Custom Size & Brand Printing</span>
              </div>
              <div className="flex items-center gap-3 bg-[#FAF6F0] p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <CheckCircle2 className="w-5 h-5 text-jute-dark shrink-0" />
                <span>Grade-A Clean Used Jute Sacks</span>
              </div>
              <div className="flex items-center gap-3 bg-[#FAF6F0] p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <CheckCircle2 className="w-5 h-5 text-jute-dark shrink-0" />
                <span><span className="bg-[#F5E6D3] text-gray-900 font-extrabold px-2 py-0.5 rounded-md border border-[#E6D0B8]">Direct Mill</span> Wholesale Rates</span>
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
