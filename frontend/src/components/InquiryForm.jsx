import React, { useState, useEffect } from 'react';
import { submitInquiryApi } from '../api/client';
import { Send, CheckCircle2, AlertCircle, Loader2, Phone, Mail, MapPin, Building, ShieldCheck, Leaf } from 'lucide-react';

const InquiryForm = ({ initialProduct = null, initialCategory = 'Jute' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productCategory: initialCategory || 'Jute',
    productName: initialProduct ? initialProduct.name : 'General Inquiry',
    quantity: '500 Bags',
    message: '',
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({
        ...prev,
        productCategory: initialProduct.category || 'Jute',
        productName: initialProduct.name,
      }));
    }
  }, [initialProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      await submitInquiryApi(formData);
      setStatus({ loading: false, success: true, error: null });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        productCategory: 'Jute',
        productName: 'General Inquiry',
        quantity: '500 Bags',
        message: '',
      });
    } catch (err) {
      console.error('Inquiry Submission Error:', err);
      setStatus({
        loading: false,
        success: false,
        error: err.response?.data?.message || 'Failed to submit inquiry. Please try calling directly.',
      });
    }
  };

  return (
    <section id="inquiry-form-section" className="py-20 bg-nature-canvas relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl shadow-xl border border-jute-300/60 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Dark Forest Sidebar */}
          <div className="lg:col-span-5 bg-gradient-to-b from-forest-950 via-forest-900 to-[#2C1E14] text-white p-8 sm:p-12 flex flex-col justify-between space-y-8 relative overflow-hidden">
            
            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-jute-500/20 border border-jute-400/30 text-jute-300 text-xs font-bold uppercase tracking-wider">
                <Leaf size={14} className="text-jute-400" />
                <span>Commercial Inquiry Desk</span>
              </div>

              <h3 className="font-serif text-3xl font-extrabold text-amber-50 tracking-tight leading-snug">
                Request Factory Quote & Custom <span className="text-jute-400">Jute Samples</span>
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Connect directly with our commercial team in Dharapuram, Tamil Nadu for bulk pricing on Jute Bags, Nano Bags, Jute Thread, 2nd Jute Bags & Plastic Rolls.
              </p>
            </div>

            {/* Direct Contact Info */}
            <div className="space-y-4 text-xs relative z-10 pt-4 border-t border-white/10">
              <div className="flex items-start space-x-3 text-slate-200">
                <Phone className="w-4 h-4 text-jute-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block">Phone & WhatsApp:</span>
                  <a href="tel:+919025236106" className="font-bold text-white hover:text-jute-300 transition-colors">
                    +91 90252 36106
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-slate-200">
                <Mail className="w-4 h-4 text-jute-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block">Email Inquiry:</span>
                  <a href="mailto:mjttraders.24@gmail.com" className="font-bold text-white hover:text-jute-300 transition-colors">
                    mjttraders.24@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-slate-200">
                <MapPin className="w-4 h-4 text-jute-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block">Main Trading Depot:</span>
                  <span className="font-semibold text-slate-200">122, Cholakadai St, Dharapuram, Tirupur Dist, TN</span>
                </div>
              </div>
            </div>

            <div className="pt-2 relative z-10">
              <span className="text-[11px] text-jute-400 font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-jute-400" /> Direct Mill Sourcing • ISO Merchant Certified
              </span>
            </div>

          </div>

          {/* Right Form Area */}
          <div className="lg:col-span-7 p-8 sm:p-12 bg-white">
            
            {status.success ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-300">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="font-serif text-2xl font-bold text-forest-900">Inquiry Submitted Successfully!</h4>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Thank you for contacting Magarajothi Traders. Our commercial desk manager will get back to you within 2 business hours.
                </p>
                <button
                  onClick={() => setStatus({ loading: false, success: false, error: null })}
                  className="gold-gradient-btn text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow"
                >
                  Submit Another Requirement
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {status.error && (
                  <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-xl flex items-center space-x-2">
                    <AlertCircle size={16} className="shrink-0" />
                    <span>{status.error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-forest-900 uppercase mb-1">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. M. Sundaram"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#FAF6F0] border border-jute-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-jute-500 focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-forest-900 uppercase mb-1">
                      Phone / WhatsApp <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#FAF6F0] border border-jute-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-jute-500 focus:bg-white transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-forest-900 uppercase mb-1">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="mjttraders.24@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#FAF6F0] border border-jute-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-jute-500 focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-forest-900 uppercase mb-1">
                      Company / Rice Mill Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="e.g. Sri Krishna Rice Mill"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-[#FAF6F0] border border-jute-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-jute-500 focus:bg-white transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-forest-900 uppercase mb-1">
                      Product Category Interest
                    </label>
                    <select
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={handleChange}
                      className="w-full bg-[#FAF6F0] border border-jute-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-jute-500 focus:bg-white transition font-semibold"
                    >
                      <option value="Jute">🌾 Jute Bags (A-Twill, B-Twill, Hessian)</option>
                      <option value="Nano Bags">👜 Nano Bags (Mini Eco & Promotional Bags)</option>
                      <option value="Jute Thread">🧵 Jute Thread (Twine & Yarn Spools)</option>
                      <option value="2nd Jute Bags">♻️ 2nd Jute Bags (Clean Once-Used Sacks)</option>
                      <option value="Plastic">🏗️ Plastic Bags (HDPE, PP Woven)</option>
                      <option value="Plastic Roll">🌀 Plastic Roll (HDPE & PP Woven Rolls)</option>
                      <option value="General Inquiry">📋 General Custom Order</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-forest-900 uppercase mb-1">
                      Estimated Quantity Needed
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      placeholder="e.g. 1000 Bags / 5 Rolls"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full bg-[#FAF6F0] border border-jute-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-jute-500 focus:bg-white transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-forest-900 uppercase mb-1">
                    Specific Requirements or Specifications <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    required
                    placeholder="Provide details on bag dimensions, print design, GSM, or delivery location..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#FAF6F0] border border-jute-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-jute-500 focus:bg-white transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full gold-gradient-btn text-white font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider shadow-lg flex items-center justify-center space-x-2"
                >
                  {status.loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Requirement Inquiry</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default InquiryForm;
