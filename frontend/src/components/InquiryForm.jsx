import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck, Leaf } from 'lucide-react';
import { submitInquiryApi } from '../api/client';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productCategory: 'Jute',
    productName: 'General Inquiry',
    quantity: '1,000 Bags',
    message: '',
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: null });

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
        quantity: '1,000 Bags',
        message: '',
      });
    } catch (err) {
      console.error('Inquiry Submission Error:', err);
      setStatus({
        loading: false,
        success: false,
        error: err.response?.data?.message || 'Failed to submit inquiry online. Please call +91 9025236106 directly.',
      });
    }
  };

  return (
    <section id="inquiry-section" className="py-20 md:py-28 bg-[#FAF5EC] font-sans border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-jute-light/20 text-jute-dark text-sm font-bold uppercase tracking-wider">
            <Leaf size={16} className="text-jute-dark" />
            <span>Commercial Desk</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Commercial <span className="text-jute-dark">Inquiry Desk</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed font-normal">
            Request mill-direct pricing, custom size specifications, or bulk sample dispatches across India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Panel: Contact Info */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-2xl border border-gray-100 shadow-md flex flex-col justify-between space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Magarajothi Traders</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Authorized Merchant Supplier for Food-Grade Jute Bags, Hessian Cloth, Jute Twine & HDPE Polymer Packaging.
              </p>

              <div className="space-y-5 mt-8 text-base text-gray-800 font-medium">
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-jute-light/20 text-jute-dark flex items-center justify-center shrink-0 border border-jute-light/40">
                    <MapPin size={20} className="text-jute-dark" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block font-semibold uppercase tracking-wider">Registered Address:</span>
                    <span className="text-gray-900 font-bold leading-relaxed">
                      122, Cholakadai St, Dharapuram, Tirupur Dist, Tamil Nadu - 638656
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-jute-light/20 text-jute-dark flex items-center justify-center shrink-0 border border-jute-light/40">
                    <Phone size={20} className="text-jute-dark" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block font-semibold uppercase tracking-wider">Direct Sales Hotline:</span>
                    <a href="tel:+919025236106" className="text-gray-900 font-extrabold text-lg hover:text-jute-dark transition-colors">
                      +91 90252 36106
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-jute-light/20 text-jute-dark flex items-center justify-center shrink-0 border border-jute-light/40">
                    <Mail size={20} className="text-jute-dark" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block font-semibold uppercase tracking-wider">Email Quotations:</span>
                    <a href="mailto:mjttraders.24@gmail.com" className="text-gray-900 font-bold hover:text-jute-dark transition-colors">
                      mjttraders.24@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-jute-light/20 text-jute-dark flex items-center justify-center shrink-0 border border-jute-light/40">
                    <Clock size={20} className="text-jute-dark" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block font-semibold uppercase tracking-wider">Desk Hours:</span>
                    <span className="text-gray-800 font-semibold">Monday – Saturday: 9:00 AM – 6:30 PM IST</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <div className="bg-[#FAF6F0] p-4 rounded-xl border border-gray-200 text-sm text-gray-700 font-semibold flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-jute-dark shrink-0" />
                <span>Instant WhatsApp Quotation & Sample Dispatch</span>
              </div>
            </div>
          </div>

          {/* Right Panel: Form Card */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-gray-100 shadow-md">
            
            {status.success ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-300">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900">Quotation Request Sent!</h3>
                <p className="text-base text-gray-600 max-w-md mx-auto">
                  Thank you. Our commercial sales executive will contact you with wholesale rates shortly.
                </p>
                <button
                  onClick={() => setStatus({ loading: false, success: false, error: null })}
                  className="bg-jute-dark text-white hover:bg-jute font-semibold rounded-lg px-6 py-2.5 text-xs uppercase tracking-wider transition-colors shadow"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {status.error && (
                  <div className="p-4 rounded-xl bg-rose-50 text-rose-900 border border-rose-300 text-sm flex items-start gap-2 font-medium">
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <span>{status.error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-900 uppercase mb-1">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g., K. Rajasekaran"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#FAF6F0] border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jute-dark focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-900 uppercase mb-1">
                      Phone / WhatsApp Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g., +91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#FAF6F0] border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jute-dark focus:bg-white transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-900 uppercase mb-1">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g., purchase@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#FAF6F0] border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jute-dark focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-900 uppercase mb-1">
                      Company / Mill Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="e.g., Sri Krishna Rice Mill"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-[#FAF6F0] border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jute-dark focus:bg-white transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-900 uppercase mb-1">
                      Product Category
                    </label>
                    <select
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={handleChange}
                      className="w-full bg-[#FAF6F0] border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-jute-dark focus:bg-white transition font-medium"
                    >
                      <option value="Jute">🌾 Jute Bags (A-Twill, B-Twill, Hessian)</option>
                      <option value="Nano Bags">👜 Nano Bags (Mini Eco Bags)</option>
                      <option value="Jute Thread">🧵 Jute Thread (Twine Spools)</option>
                      <option value="2nd Jute Bags">♻️ 2nd Jute Bags (Clean Once-Used)</option>
                      <option value="Plastic">🏗️ Plastic Bags (HDPE Woven Sacks)</option>
                      <option value="Plastic Roll">🌀 Plastic Roll (HDPE Fabric Rolls)</option>
                      <option value="General Inquiry">📋 General Custom Requirement</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-900 uppercase mb-1">
                      Estimated Order Quantity
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      placeholder="e.g., 1,000 Bags"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full bg-[#FAF6F0] border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jute-dark focus:bg-white transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-900 uppercase mb-1">
                    Requirement Details <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    placeholder="e.g., Please provide bag dimensions, GSM specifications, custom logo printing details, and expected delivery timeline..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#FAF6F0] border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jute-dark focus:bg-white transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full bg-jute-dark hover:bg-jute text-white font-bold py-4 px-6 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center space-x-2"
                >
                  {status.loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Commercial Inquiry</span>
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
