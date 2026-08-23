import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
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

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  
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
    quantity: '1,000 Bags',
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
        quantity: '1,000 Bags',
        message: '',
      });
    } catch (err) {
      console.error('Contact Route Submission Error:', err);
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

      {/* Dedicated Contact Page Hero Banner */}
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
                <span className="text-gray-900 font-bold">Contact & Commercial Desk</span>
              </div>

              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Contact Magarajothi Traders
              </h1>
              <p className="text-gray-700 text-sm md:text-base mt-2 max-w-2xl font-normal">
                Direct mill-rate quotations, custom bag specifications, and Pan-India dispatch desk. Response guaranteed within 2 business hours.
              </p>
            </div>

            {/* Quick Contact Badge */}
            <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4 shrink-0">
              <img
                src="/logo.png"
                alt="Magarajothi Traders Emblem"
                className="w-12 h-12 rounded-full object-cover border-2 border-jute-dark shrink-0"
              />
              <div>
                <span className="font-heading font-extrabold text-gray-900 text-lg leading-tight block">
                  MAGARAJOTHI
                </span>
                <span className="text-xs text-jute-dark font-bold uppercase tracking-widest block">
                  TRADERS • EST. 1985
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Main Isolated Contact Details & Inquiry Form */}
      <main className="flex-1 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Official Contact Card & Working Hours */}
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
                      <span className="text-gray-500 block font-semibold">Email Quotation Desk:</span>
                      <a href="mailto:mjttraders.24@gmail.com" className="text-gray-900 font-extrabold text-sm hover:text-jute-dark transition-colors">
                        mjttraders.24@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Official Working Hours */}
                  <div className="flex items-start space-x-3 pt-2 border-t border-gray-100">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center shrink-0 border border-emerald-300">
                      <Clock size={18} className="text-emerald-800" />
                    </div>
                    <div>
                      <span className="text-gray-500 block font-semibold">Official Working Hours:</span>
                      <span className="text-gray-900 font-bold block text-sm">
                        Monday – Saturday
                      </span>
                      <span className="text-jute-dark font-extrabold text-xs block">
                        9:00 AM – 6:30 PM IST
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 space-y-2 text-xs text-gray-600 font-semibold">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-jute-dark" />
                    <span>Direct Factory & Mill Rates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-jute-dark" />
                    <span>Pan-India Fleet & Export Port Logistics</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Commercial Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-200 space-y-6">
                
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-serif text-2xl font-bold text-gray-900">
                    Submit Requirement Inquiry
                  </h3>
                  <p className="text-gray-600 text-xs mt-1">
                    Fill out your commodity requirements below. Our commercial desk will issue a formal proforma invoice.
                  </p>
                </div>

                {status.success ? (
                  <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-8 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="text-2xl font-bold text-emerald-950">Inquiry Received Successfully!</h4>
                    <p className="text-gray-700 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for contacting <strong>Magarajothi Traders</strong>. Our commercial team in Dharapuram has logged your requirement and will contact you via WhatsApp/Phone shortly.
                    </p>
                    <button
                      onClick={() => setStatus({ loading: false, success: false, error: null })}
                      className="bg-jute-dark hover:bg-jute text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition"
                    >
                      Submit Another Requirement
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {status.error && (
                      <div className="bg-rose-50 border border-rose-200 text-rose-800 p-4 rounded-xl text-xs font-semibold flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                        <span>{status.error}</span>
                      </div>
                    )}

                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-900 uppercase mb-1">
                          Full Name / Contact Person <span className="text-rose-500">*</span>
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
                          WhatsApp / Mobile Number <span className="text-rose-500">*</span>
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

                    {/* Email & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                    {/* Product Category & Quantity */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-900 uppercase mb-1">
                          Product Range Category
                        </label>
                        <select
                          name="productCategory"
                          value={formData.productCategory}
                          onChange={handleChange}
                          className="w-full bg-[#FAF6F0] border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-jute-dark focus:bg-white transition font-semibold"
                        >
                          <option value="Jute">Jute Bags (A-Twill, B-Twill)</option>
                          <option value="Nano Bags">Nano Bags (Compact Pouches)</option>
                          <option value="Jute Thread">Jute Thread (Twine Spools)</option>
                          <option value="2nd Jute Bags">2nd Jute Bags (Grade-A Used)</option>
                          <option value="Plastic">Plastic Bags (Woven Gunny Sacks)</option>
                          <option value="Plastic Roll">Plastic Roll (HDPE Fabric Rolls)</option>
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

                    {/* Message */}
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

export default ContactPage;
