import React, { useState, useEffect } from 'react';
import { submitInquiryApi } from '../api/client';
import { Send, CheckCircle2, AlertCircle, Loader2, Phone, Mail, MapPin, ShieldCheck, Leaf } from 'lucide-react';

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
    <section id="inquiry-form-section" className="py-20 bg-[#FAF6F0] font-sans border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Side: Commercial Inquiry Information */}
          <div className="lg:col-span-5 bg-[#FAF6F0] p-8 sm:p-12 flex flex-col justify-between space-y-8 border-b lg:border-b-0 lg:border-r border-gray-200">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-jute-light/20 text-jute-dark text-xs font-bold uppercase tracking-wider">
                <Leaf size={14} className="text-jute-dark" />
                <span>Commercial Inquiry Desk</span>
              </div>

              <h3 className="font-serif text-3xl font-bold text-gray-900 tracking-tight leading-snug">
                Request Factory Quote & Custom <span className="text-jute-dark">Jute Samples</span>
              </h3>

              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                Connect directly with our commercial team in Dharapuram, Tamil Nadu for bulk pricing on Jute Bags, Nano Bags, Jute Thread, 2nd Jute Bags & Plastic Rolls.
              </p>
            </div>

            {/* Direct Contact Info */}
            <div className="space-y-4 text-xs pt-4 border-t border-gray-200">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-jute-dark shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-500 block font-semibold">Phone & WhatsApp:</span>
                  <a href="tel:+919025236106" className="font-bold text-gray-800 hover:text-jute-dark transition-colors">
                    +91 90252 36106
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-jute-dark shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-500 block font-semibold">Email Inquiry:</span>
                  <a href="mailto:mjttraders.24@gmail.com" className="font-bold text-gray-800 hover:text-jute-dark transition-colors">
                    mjttraders.24@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-jute-dark shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-500 block font-semibold">Main Trading Depot:</span>
                  <span className="font-semibold text-gray-800">122, Cholakadai St, Dharapuram, Tirupur Dist, TN</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs text-jute-dark font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-jute-dark" /> Direct Mill Sourcing • ISO Certified
              </span>
            </div>

          </div>

          {/* Right Side: Form Fields */}
          <div className="lg:col-span-7 p-8 sm:p-12 bg-white">
            
            {status.success ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-300">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="font-serif text-2xl font-bold text-gray-900">Inquiry Submitted Successfully!</h4>
                <p className="text-gray-700 text-sm max-w-md mx-auto">
                  Thank you for contacting Magarajothi Traders. Our commercial desk manager will get back to you within 2 business hours.
                </p>
                <button
                  onClick={() => setStatus({ loading: false, success: false, error: null })}
                  className="bg-jute-dark text-white hover:bg-jute font-semibold rounded-md px-6 py-2.5 text-xs uppercase tracking-wider transition-colors shadow"
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
                    <label className="block text-xs font-semibold text-gray-900 uppercase mb-1">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. M. Sundaram"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#FAF6F0] border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-jute-dark focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-900 uppercase mb-1">
                      Phone / WhatsApp <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#FAF6F0] border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-jute-dark focus:bg-white transition"
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
                      placeholder="mjttraders.24@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#FAF6F0] border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-jute-dark focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-900 uppercase mb-1">
                      Company / Rice Mill Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="e.g. Sri Krishna Rice Mill"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-[#FAF6F0] border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-jute-dark focus:bg-white transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-900 uppercase mb-1">
                      Product Category Interest
                    </label>
                    <select
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={handleChange}
                      className="w-full bg-[#FAF6F0] border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-jute-dark focus:bg-white transition font-medium"
                    >
                      <option value="Jute">🌾 Jute Bags (A-Twill, B-Twill, Hessian)</option>
                      <option value="Nano Bags">👜 Nano Bags (Mini Eco Bags)</option>
                      <option value="Jute Thread">🧵 Jute Thread (Twine & Yarn Spools)</option>
                      <option value="2nd Jute Bags">♻️ 2nd Jute Bags (Clean Once-Used Sacks)</option>
                      <option value="Plastic">🏗️ Plastic Bags (HDPE, PP Woven)</option>
                      <option value="Plastic Roll">🌀 Plastic Roll (HDPE & PP Woven Rolls)</option>
                      <option value="General Inquiry">📋 General Custom Order</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-900 uppercase mb-1">
                      Estimated Quantity Needed
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      placeholder="e.g. 1000 Bags / 5 Rolls"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full bg-[#FAF6F0] border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-jute-dark focus:bg-white transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-900 uppercase mb-1">
                    Specific Requirements or Specifications <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    required
                    placeholder="Provide details on bag dimensions, print design, GSM, or delivery location..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#FAF6F0] border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-jute-dark focus:bg-white transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full bg-jute-dark hover:bg-jute text-white font-semibold py-3.5 px-6 rounded-lg text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center space-x-2"
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
