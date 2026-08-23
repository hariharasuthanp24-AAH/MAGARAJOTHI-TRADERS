import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdminInquiriesModal from '../components/AdminInquiriesModal';
import { submitInquiryApi } from '../api/client';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ShieldCheck, 
  ArrowLeft,
  Leaf
} from 'lucide-react';

const EnquirePage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const productFromUrl = searchParams.get('product') || '';
  const categoryFromUrl = searchParams.get('category') || 'Jute';

  const [adminModalOpen, setAdminModalOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productCategory: categoryFromUrl || 'Jute',
    productName: productFromUrl || 'General Inquiry',
    quantity: '500 Units',
    message: productFromUrl ? `Hello, I would like to request a formal quotation and sample availability for ${productFromUrl}.` : '',
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        quantity: '500 Units',
        message: '',
      });
    } catch (err) {
      console.error('Enquire Route Submission Error:', err);
      setStatus({
        loading: false,
        success: false,
        error: err.response?.data?.message || 'Unable to process inquiry online right now. Please call +91 9025236106 directly.',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FAF6F0] selection:bg-jute-500 selection:text-white">
      
      {/* Navigation */}
      <Navbar onOpenAdminModal={() => setAdminModalOpen(true)} />

      {/* Hero Page Banner - Clean Bright Theme with Dark Contrast */}
      <section className="bg-[#FAF6F0] py-14 md:py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            
            <div>
              {/* Breadcrumb */}
              <div className="flex items-center space-x-2 text-sm font-semibold mb-3">
                <Link to="/" className="text-jute-dark hover:text-gray-900 transition-colors flex items-center gap-1.5">
                  <ArrowLeft size={16} /> Back to Catalog
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-gray-900 font-bold">Requirement Inquiry Desk</span>
              </div>

              {/* Main Page Title */}
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight">
                Get Commercial <span className="text-jute-dark">Jute Quote</span>
              </h1>

              {/* Subheading */}
              <p className="text-gray-700 text-base md:text-lg mt-3 max-w-2xl font-normal leading-relaxed">
                Direct mill rates, custom bag printing, and bulk sample dispatch for Jute Bags, Nano Bags, Jute Thread, 2nd Jute Bags & Plastic Rolls.
              </p>
            </div>

            {/* Official Logo Branding Card */}
            <div className="flex items-center space-x-4 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
              <img
                src="/logo.png"
                alt="Magarajothi Traders Golden Logo Emblem"
                className="w-14 h-14 rounded-full object-cover shadow-md border-2 border-jute-dark"
              />
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-gray-900 text-lg leading-tight">
                  MAGARAJOTHI
                </span>
                <span className="text-xs text-jute-dark font-bold uppercase tracking-widest">
                  TRADERS • DHARAPURAM
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Main Form & Office Info Layout */}
      <main className="flex-1 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Official Contact Card */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-jute-light/20 text-jute-dark text-xs font-bold uppercase tracking-wider">
                  <Leaf size={14} className="text-jute-dark" />
                  <span>Commercial Desk</span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900">Magarajothi Traders</h3>
                  <p className="text-gray-600 text-xs mt-1">Authorized Eco Jute & Industrial Packaging Merchant</p>
                </div>

                <div className="space-y-4 text-xs font-medium text-gray-800 pt-2 border-t border-gray-100">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-xl bg-jute-light/20 text-jute-dark flex items-center justify-center shrink-0 border border-jute-light/40">
                      <MapPin size={18} className="text-jute-dark" />
                    </div>
                    <div>
                      <span className="text-gray-500 block font-semibold">Office & Warehouse Address:</span>
                      <span className="text-gray-900 font-bold leading-relaxed">
                        122, Cholakadai St, Dharapuram, Tirupur District, Tamil Nadu - 638656, India.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-xl bg-jute-light/20 text-jute-dark flex items-center justify-center shrink-0 border border-jute-light/40">
                      <Phone size={18} className="text-jute-dark" />
                    </div>
                    <div>
                      <span className="text-gray-500 block font-semibold">Commercial Sales Contact:</span>
                      <a href="tel:+919025236106" className="text-gray-900 font-extrabold text-sm hover:text-jute-dark transition-colors">
                        +91 90252 36106
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-xl bg-jute-light/20 text-jute-dark flex items-center justify-center shrink-0 border border-jute-light/40">
                      <Mail size={18} className="text-jute-dark" />
                    </div>
                    <div>
                      <span className="text-gray-500 block font-semibold">Official Email:</span>
                      <a href="mailto:mjttraders.24@gmail.com" className="text-gray-900 font-bold hover:text-jute-dark transition-colors">
                        mjttraders.24@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-xl bg-jute-light/20 text-jute-dark flex items-center justify-center shrink-0 border border-jute-light/40">
                      <Clock size={18} className="text-jute-dark" />
                    </div>
                    <div>
                      <span className="text-gray-500 block font-semibold">Working Hours:</span>
                      <span className="text-gray-800 font-semibold">Monday – Saturday: 9:00 AM – 8:30 PM IST</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="bg-[#FAF6F0] p-3 rounded-xl border border-gray-200 text-xs text-gray-700 font-semibold flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-jute-dark shrink-0" />
                    <span>Instant WhatsApp Quotation Available on Mobile Desk</span>
                  </div>
                </div>

              </div>

              {/* Embedded Google Map Frame */}
              <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <iframe
                  title="Magarajothi Traders Dharapuram Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.635817812975!2d77.5255!3d10.5878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9c5a1a1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2sCholakadai%20St%2C%20Dharapuram%2C%20Tamil%20Nadu%20638656!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: '1rem' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>

            {/* Right Column: Form Container */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-200 space-y-6">
                
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
                    Submit Formal Requirement
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">
                    Fill in your product specifications below. Our sales manager will contact you within 2 business hours.
                  </p>
                </div>

                {/* Prefilled Item Notification */}
                {productFromUrl && (
                  <div className="bg-[#FAF6F0] p-4 rounded-xl border border-gray-200 flex items-center justify-between text-xs sm:text-sm">
                    <div>
                      <span className="text-gray-500 block font-semibold">Selected Item:</span>
                      <span className="font-extrabold text-gray-900 text-sm sm:text-base">{productFromUrl}</span>
                    </div>
                    <span className="bg-jute-dark text-white px-3.5 py-1 rounded-lg font-bold">
                      {categoryFromUrl} Category
                    </span>
                  </div>
                )}

                {/* Status Message */}
                {status.type && (
                  <div
                    className={`p-4 rounded-xl flex items-start space-x-3 text-xs sm:text-sm ${
                      status.type === 'success'
                        ? 'bg-emerald-50 text-emerald-900 border border-emerald-300'
                        : 'bg-rose-50 text-rose-900 border border-rose-300'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="font-bold">{status.message}</p>
                    </div>
                  </div>
                )}

                {status.success ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-300">
                      <CheckCircle2 size={36} />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-gray-900">Inquiry Received!</h3>
                    <p className="text-gray-600 text-sm max-w-md mx-auto">
                      Thank you for choosing Magarajothi Traders. Your requirement details have been sent to our sales desk.
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
                    
                    {/* Row 1: Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-900 uppercase mb-1">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="e.g. K. Rajasekaran"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-[#FAF6F0] border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-jute-dark focus:bg-white transition"
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
                          placeholder="+91 90252 36106"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-[#FAF6F0] border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-jute-dark focus:bg-white transition"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email & Company */}
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
                          className="w-full bg-[#FAF6F0] border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-jute-dark focus:bg-white transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-900 uppercase mb-1">
                          Company / Mill Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          placeholder="e.g. Sri Krishna Rice Mill"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full bg-[#FAF6F0] border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-jute-dark focus:bg-white transition"
                        />
                      </div>
                    </div>

                    {/* Row 3: Category & Quantity */}
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
                          <option value="Jute Thread">🧵 Jute Thread (Twine & Yarn Spools)</option>
                          <option value="2nd Jute Bags">♻️ 2nd Jute Bags (Clean Once-Used Sacks)</option>
                          <option value="Plastic">🏗️ Plastic Bags (HDPE, PP Woven)</option>
                          <option value="Plastic Roll">🌀 Plastic Roll (HDPE & PP Woven Rolls)</option>
                          <option value="General Inquiry">📋 General Custom Order</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-900 uppercase mb-1">
                          Estimated Order Quantity
                        </label>
                        <input
                          type="text"
                          name="quantity"
                          placeholder="e.g. 500 Bags / 2 Rolls"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full bg-[#FAF6F0] border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-jute-dark focus:bg-white transition"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-900 uppercase mb-1">
                        Requirement Details <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        required
                        placeholder="Mention bag size, custom logo printing details, GSM specifications, or delivery timeline..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-[#FAF6F0] border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-jute-dark focus:bg-white transition"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status.loading}
                      className="w-full bg-jute-dark hover:bg-jute text-white font-semibold py-4 px-6 rounded-lg text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center space-x-2"
                    >
                      {status.loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Submitting Requirement...</span>
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

        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Admin Leads Modal */}
      <AdminInquiriesModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
      />

    </div>
  );
};

export default EnquirePage;
