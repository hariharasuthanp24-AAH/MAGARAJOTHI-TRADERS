import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { submitInquiryApi } from '../api/client';
import { Phone, Mail, MapPin, ShieldCheck, Send, CheckCircle2, AlertCircle, Loader2, ArrowLeft, Clock, Building, Package } from 'lucide-react';

const EnquirePage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const productFromUrl = searchParams.get('product') || '';
  const categoryFromUrl = searchParams.get('category') || 'Jute';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productCategory: categoryFromUrl,
    productName: productFromUrl || 'General Inquiry',
    quantity: '1000 Bags',
    message: '',
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (productFromUrl) {
      setFormData((prev) => ({
        ...prev,
        productName: productFromUrl,
        productCategory: categoryFromUrl || prev.productCategory,
      }));
    }
  }, [productFromUrl, categoryFromUrl]);

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
          message: result.message || 'Thank you! Your requirement inquiry has been submitted successfully. Our trade representative will contact you shortly.',
        });
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
          message: result.message || 'Could not submit inquiry. Please try again or call us.',
        });
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.response?.data?.message || 'Server error while submitting requirement. Please contact us directly.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-chalk selection:bg-jute selection:text-white">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Header Banner */}
      <section className="bg-gradient-to-r from-brand-navy via-brand-navy to-brand-emerald text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-xs text-slate-300 mb-4">
            <Link to="/" className="hover:text-jute-light transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </Link>
            <span>/</span>
            <span className="text-jute font-semibold">Requirement Inquiry & Quotation</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center space-x-2 bg-jute/20 text-jute-light border border-jute/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-jute" />
                <span>DIRECT MERCHANT WHOLESALE DESK</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight">
                Submit Your Requirements
              </h1>
              <p className="text-slate-200 text-sm leading-relaxed">
                Fill out the form below to receive instant mill-direct pricing, custom bag sizing options, and bulk freight quotes from Magarajothi Traders.
              </p>
            </div>

            <div className="hidden lg:flex items-center space-x-3 bg-white/10 p-4 rounded-2xl border border-white/15 backdrop-blur-md">
              <img
                src="/logo.png"
                alt="Magarajothi Traders Golden Logo"
                className="w-14 h-14 rounded-full object-cover border-2 border-jute bg-white flex-shrink-0"
              />
              <div className="text-left text-xs">
                <span className="font-heading font-bold text-white block text-sm">MAGARAJOTHI TRADERS</span>
                <span className="text-jute-light font-semibold block">Dharapuram, Tamil Nadu</span>
                <span className="text-slate-300 text-[11px]">Govt Reg Merchant & Exporter</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Form & Contact Section */}
      <main className="flex-1 py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Fixed Executive Merchant Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Merchant Info Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md space-y-6">
              
              <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
                <img
                  src="/logo.png"
                  alt="Magarajothi Traders Golden Logo"
                  className="w-12 h-12 rounded-full object-cover border-2 border-jute shadow"
                />
                <div>
                  <h3 className="font-heading text-lg font-bold text-brand-navy">Magarajothi Traders</h3>
                  <span className="text-xs text-jute-dark font-semibold">Industrial Gunny & Jute Merchant</span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Phone */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-jute-100 text-jute-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold text-[11px] uppercase block">Direct Phone & WhatsApp</span>
                    <a href="tel:+919025236106" className="font-extrabold text-brand-navy text-base hover:text-jute-dark transition-colors block">
                      +91 9025236106
                    </a>
                    <span className="text-slate-500 text-xs">Mon - Sat: 9:00 AM - 8:00 PM IST</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-jute-100 text-jute-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold text-[11px] uppercase block">Official Email</span>
                    <a href="mailto:mjttraders.24@gmail.com" className="font-extrabold text-brand-navy hover:text-jute-dark transition-colors block">
                      mjttraders.24@gmail.com
                    </a>
                    <span className="text-slate-500 text-xs">Quotations & Formal RFQs</span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-jute-100 text-jute-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold text-[11px] uppercase block">Commercial Address</span>
                    <p className="font-bold text-brand-navy">
                      122, Cholakadai St, Dharapuram
                    </p>
                    <p className="text-slate-500 text-xs">
                      Tirupur District, Tamil Nadu - 638656, India
                    </p>
                  </div>
                </div>

              </div>

              {/* Working Hours Badge */}
              <div className="bg-brand-chalk p-4 rounded-2xl border border-slate-200 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2 text-slate-700">
                  <Clock className="w-4 h-4 text-jute-dark" />
                  <span className="font-semibold">Trade Hours:</span>
                </div>
                <span className="font-bold text-brand-navy">09:00 AM - 08:00 PM</span>
              </div>

            </div>

            {/* Embedded Google Maps Location Frame */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden p-2">
              <iframe
                title="Magarajothi Traders Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.633842188448!2d77.5218!3d10.5847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDM1JzA0LjkiTiA3N8KwMzEnMTguNSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: '1rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

          {/* Right Column: Fixed & Professionally Aligned Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl relative space-y-6">
              
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-2xl font-heading font-extrabold text-brand-navy">
                  Request a Wholesale Quote
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Complete the specifications below. Our sales manager will contact you within 2 business hours.
                </p>
              </div>

              {/* Prefilled Product Indicator */}
              {productFromUrl && (
                <div className="bg-jute-50 p-4 rounded-2xl border border-jute-200 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-400 block font-semibold">Pre-selected Item:</span>
                    <span className="font-extrabold text-brand-navy text-sm">{productFromUrl}</span>
                  </div>
                  <span className="bg-jute-dark text-white px-3 py-1 rounded-lg font-bold">
                    {categoryFromUrl} Category
                  </span>
                </div>
              )}

              {/* Submission Feedback Alert */}
              {status.type && (
                <div
                  className={`p-4 rounded-2xl flex items-start space-x-3 text-xs sm:text-sm ${
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

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Row 1: Full Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. K. Rajasekaran"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-brand-chalk border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-jute focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                      Phone / WhatsApp <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 9025236106"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-brand-chalk border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-jute focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Business Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="mjttraders.24@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-brand-chalk border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-jute focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                      Company / Rice Mill Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="e.g. Sri Krishna Rice Mill"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-brand-chalk border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-jute focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Row 3: Product Category & Quantity */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                      Product Category
                    </label>
                    <select
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={handleChange}
                      className="w-full bg-brand-chalk border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-jute focus:bg-white transition font-medium"
                    >
                      <option value="Jute">🌾 Jute Bags (A-Twill, B-Twill, Hessian)</option>
                      <option value="Gunny">📦 Gunny Bags (100kg, Sugar, Grain)</option>
                      <option value="Plastic">🏗️ Plastic Gunny Bags (HDPE, PP Woven)</option>
                      <option value="General Inquiry">📋 General Custom Order</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                      Estimated Order Quantity
                    </label>
                    <select
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full bg-brand-chalk border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-jute focus:bg-white transition font-medium"
                    >
                      <option value="500 Bags">500 Bags (Trial Quantity)</option>
                      <option value="1000 Bags">1,000 Bags</option>
                      <option value="5000 Bags">5,000 Bags</option>
                      <option value="10000+ Bags">10,000+ Bags (Bulk Wholesale)</option>
                      <option value="1 Container (20ft)">1 Full 20ft Container</option>
                      <option value="1 Container (40ft)">1 Full 40ft Container</option>
                    </select>
                  </div>
                </div>

                {/* Specific Product Interested In */}
                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                    Specific Product Name / Specification
                  </label>
                  <input
                    type="text"
                    name="productName"
                    value={formData.productName}
                    onChange={handleChange}
                    placeholder="e.g. Al-Ameen Feeds TMR Meal Plastic Bag 50kg"
                    className="w-full bg-brand-chalk border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-jute focus:bg-white transition"
                  />
                </div>

                {/* Requirement Message */}
                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                    Custom Specs & Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    placeholder="Provide details on required GSM, bag dimensions, flexo/rotogravure printing, inner liner requirements, delivery destination..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-brand-chalk border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-jute focus:bg-white transition"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-jute-dark hover:bg-jute text-white font-extrabold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 text-base disabled:opacity-50"
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

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default EnquirePage;
