import React from 'react';
import { ShieldCheck, DollarSign, Award, Clock, Truck, RefreshCw, CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: '100% Genuine Sourcing',
    description: 'Direct procurement from certified jute mills and polymer manufacturers across South India with stringent material verification.',
    color: 'from-amber-500 to-jute-600',
  },
  {
    icon: DollarSign,
    title: 'Competitive Wholesale Pricing',
    description: 'Factory-direct merchant pricing structure optimized for high-volume rice millers, sugar exporters, and commodity mandis.',
    color: 'from-emerald-500 to-teal-700',
  },
  {
    icon: Award,
    title: 'Quality Assured & Burst Tested',
    description: 'Every batch undergoes GSM testing, tensile seam inspection, and hydro-carbon purity checks prior to dispatch.',
    color: 'from-blue-500 to-indigo-700',
  },
  {
    icon: Clock,
    title: 'Timely Processing & Logistics',
    description: 'Robust supply chain infrastructure ensuring rapid turnaround times for domestic transport and port export containers.',
    color: 'from-orange-500 to-amber-700',
  },
  {
    icon: RefreshCw,
    title: 'Custom Branding & Specifications',
    description: 'Flexographic and rotogravure logo printing, custom bag dimensions, safety stitchings, and inner liners to fit your brand.',
    color: 'from-purple-500 to-indigo-800',
  },
  {
    icon: Truck,
    title: 'Global Export Ready',
    description: 'Compliance with VO/IJO standards for international agricultural commodity shipments across North America, Europe & Middle East.',
    color: 'from-sky-500 to-blue-700',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us-section" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-jute-100 text-jute-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-jute-600" />
            <span>VALUE PROPOSITION & ADVANTAGES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Why Choose Magarajothi Traders?
          </h2>

          <p className="text-slate-600 text-base">
            We deliver unmatched reliability, competitive merchant rates, and uncompromising material quality to power your agricultural and industrial packaging workflow.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-jute-50/40 p-8 rounded-2xl border border-jute-100 hover:border-jute-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-jute-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
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
