import React from 'react';
import { ShieldCheck, DollarSign, Award, Clock, Truck, RefreshCw, Leaf } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: '100% Genuine Sourcing',
    description: 'Direct procurement from certified West Bengal jute mills and top polymer processors with zero quality compromises.'
  },
  {
    icon: DollarSign,
    title: 'Direct Mill Rates',
    description: 'Wholesale B2B pricing with transparent bulk discounts for agricultural mills, exporters, and traders.'
  },
  {
    icon: Award,
    title: 'Food-Grade Standards',
    description: 'Hydrocarbon-free VO standard jute bags tested for international cocoa, coffee, and grain packaging.'
  },
  {
    icon: Truck,
    title: 'Pan-India Logistics',
    description: 'Reliable fleet dispatch and export port shipping across Tamil Nadu, Andhra Pradesh, Karnataka & global ports.'
  },
  {
    icon: RefreshCw,
    title: 'Grade-A 2nd Hand Jute',
    description: 'Rigorously inspected once-used jute bags offering cost savings up to 40% for mandi commodity storage.'
  },
  {
    icon: Clock,
    title: 'Rapid Bulk Fulfillment',
    description: 'Dedicated warehouse stock in Dharapuram ready for fast dispatch during peak harvesting seasons.'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us-section" className="py-20 bg-forest-950 text-white relative font-sans overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-jute-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-jute-500/15 border border-jute-400/30 text-jute-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Leaf size={14} className="text-jute-400" />
            <span>The Magarajothi Advantage</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-amber-50 tracking-tight">
            Why Leading Exporters Choose <span className="text-jute-400">Magarajothi Traders</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Delivering uncompromised jute quality, food-grade eco compliance, and reliable commercial merchant trading.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-forest-900/60 backdrop-blur-md p-6 rounded-2xl border border-jute-500/20 hover:border-jute-400/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-jute-500/20 text-jute-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-jute-400/30">
                  <Icon size={24} />
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-jute-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
