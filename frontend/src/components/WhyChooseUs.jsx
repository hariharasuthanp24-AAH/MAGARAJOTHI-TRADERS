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
    description: 'Wholesale B2B pricing with transparent bulk discounts for agricultural mills, exporters, and commercial traders.'
  },
  {
    icon: Award,
    title: 'Food-Grade Standards',
    description: 'Hydrocarbon-free VO standard jute bags tested for international cocoa, coffee, and grain packaging compliance.'
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
    <section id="why-us-section" className="py-20 md:py-28 bg-white font-sans border-y border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Scaled Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-jute-light/20 text-jute-dark text-sm font-bold uppercase tracking-wider">
            <Leaf size={16} className="text-jute-dark" />
            <span>The Magarajothi Advantage</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Why Leading Exporters Choose <span className="text-jute-dark">Magarajothi Traders</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mt-4 leading-relaxed font-normal">
            Delivering uncompromised jute quality, food-grade eco compliance, and reliable commercial merchant trading.
          </p>
        </div>

        {/* Enhanced Depth Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#FAF6F0] p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-white text-jute-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-gray-200 shadow-sm">
                  <Icon size={28} className="text-jute-dark" />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3 group-hover:text-jute-dark transition-colors">
                  {item.title}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed font-normal">
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
