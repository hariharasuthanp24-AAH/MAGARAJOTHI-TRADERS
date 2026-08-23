import React, { useState, useEffect } from 'react';
import { submitInquiryApi } from '../api/client';
import { Send, CheckCircle2, AlertCircle, Loader2, Phone, Mail, MapPin, Building, ShieldCheck } from 'lucide-react';

const InquiryForm = ({ initialProduct = null, initialCategory = 'Jute' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productCategory: initialCategory || 'Jute',
    productName: initialProduct ? initialProduct.name : 'General Inquiry',
    quantity: '1000 Bags',
    message: '',
  });

  useEffect(() => {
    if (initialCategory) {
      setFormData((prev) => ({ ...prev, productCategory: initialCategory }));
    }
    if (initialProduct) {
      setFormData((prev) => ({
        ...prev,
        productName: initialProduct.name,
        productCategory: initialProduct.category || prev.productCategory,
      }));
    }
  }, [initialProduct, initialCategory]);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const result = await submitInquiryApi(formData);
      if (result.success) {
        setStatus({
          type: 'success',
          message: result.message || 'Requirement submitted successfully! Our sales team will get back to you shortly.',
        });
        // Reset non-essential fields
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          productCategory: 'Jute',
          productName: 'General Inquiry',
          quantity: '1000 Bags',
          message: '',
        });
      } else {
        setStatus({
          type: 'error',
          message: result.message || 'Could not submit inquiry. Please try again.',
        });
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.response?.data?.message || 'Server error while submitting requirement. Please try calling us directly.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-section" className="py-20 bg-jute-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Location info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-jute-100 text-jute-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-jute-600" />
                <span>DIRECT MERCHANT DESK</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                Submit Your Requirements
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                Whether you need a full export container of hydrocarbon-free jute sacks or a bulk order of HDPE plastic gunny bags, send us your specifications for instant wholesale quotes.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-4">
                <div className="w-11 h-11 rounded-xl bg-jute-100 text-jute-700 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-jute-dark" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase">Sales & Inquiry Phone</h4>
                  <a href="tel:+919025236106" className="text-base font-extrabold text-navy-900 hover:text-jute-dark block mt-0.5">
                    +91 9025236106
                  </a>
                  <span className="text-xs text-slate-500">Mon - Sat: 9:00 AM - 8:00 PM IST</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-4">
                <div className="w-11 h-11 rounded-xl bg-jute-100 text-jute-700 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-jute-dark" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase">Email Trade Desk</h4>
                  <a href="mailto:mjttraders.24@gmail.com" className="text-base font-extrabold text-navy-900 hover:text-jute-dark block mt-0.5">
                    mjttraders.24@gmail.com
                  </a>
                  <span className="text-xs text-slate-500">Official RFQ & Quotations</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-4">
                <div className="w-11 h-11 rounded-xl bg-jute-100 text-jute-700 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-jute-dark" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase">Commercial Address</h4>
                  <p className="text-sm font-bold text-navy-900 mt-0.5">
                    Magarajothi Traders
                  </p>
                  <p className="text-xs text-slate-600">
                    122, Cholakadai St, Dharapuram
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl relative">
              
              <h3 className="text-2xl font-extrabold text-navy-900 mb-6">
                Request a Custom Bulk Quote
              </h3>

              {status.type && (
                <div
                  className={`p-4 rounded-xl mb-6 flex items-start space-x-3 text-sm ${
                    status.type === 'success'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-rose-50 text-rose-800 border border-rose-200'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  )}
                  <div className="font-medium">{status.message}</div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. M. Sundaram"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-jute-500 focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Phone / Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-jute-500 focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Email & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-jute-500 focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Business / Mill Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="e.g. Sri Lakshmi Rice Mill"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-jute-500 focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Product Interest & Quantity */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Product Category Interest
                    </label>
                    <select
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-jute-500 focus:bg-white transition font-medium"
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
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Estimated Quantity Needed
                    </label>
                    <select
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-jute-500 focus:bg-white transition font-medium"
                    >
                      <option value="500 Bags">500 Bags (Trial Order)</option>
                      <option value="1000 Bags">1,000 Bags</option>
                      <option value="5000 Bags">5,000 Bags</option>
                      <option value="10000+ Bags">10,000+ Bags (Bulk Wholesale)</option>
                      <option value="1 Container (20ft)">1 Full 20ft Export Container</option>
                      <option value="1 Container (40ft)">1 Full 40ft Export Container</option>
                    </select>
                  </div>
                </div>

                {/* Specific Product Item */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Specific Product Interested In
                  </label>
                  <input
                    type="text"
                    name="productName"
                    value={formData.productName}
                    onChange={handleChange}
                    placeholder="e.g. A-Twill Food-Grade Jute Bag 50kg"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-jute-500 focus:bg-white transition"
                  />
                </div>

                {/* Message / Specifications */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Requirement Message & Custom Specs <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    placeholder="Please specify dimensions, GSM requirements, logo printing details, delivery destination, or any special specifications..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-jute-500 focus:bg-white transition"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-jute-500 to-hessian-500 hover:from-jute-600 hover:to-hessian-700 text-white font-extrabold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 text-base disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting Requirement...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Requirement Inquiry</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default InquiryForm;
