import React, { useState, useEffect } from 'react';
import { fetchInquiriesApi } from '../api/client';
import { X, ClipboardList, Loader2, RefreshCw, Mail, Phone, Building, Calendar, Package } from 'lucide-react';

const AdminInquiriesModal = ({ isOpen, onClose }) => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await fetchInquiriesApi();
      if (res && res.data) {
        setInquiries(res.data);
      }
    } catch (err) {
      console.error('Failed to load inquiries:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/75 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      
      <div className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 relative shadow-2xl border border-slate-100 my-8 max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-navy-900 text-jute-400 flex items-center justify-center shadow">
              <ClipboardList className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-navy-900">Submitted Requirement Leads</h3>
              <p className="text-xs text-slate-500">Live inquiries saved in MongoDB database</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={loadData}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
              title="Refresh leads"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-jute-600' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto custom-scrollbar space-y-4 pr-1">
          {loading ? (
            <div className="py-16 text-center flex flex-col items-center justify-center space-y-3">
              <Loader2 className="w-8 h-8 text-jute-500 animate-spin" />
              <span className="text-xs font-semibold text-slate-600">Fetching inquiries...</span>
            </div>
          ) : inquiries.length === 0 ? (
            <div className="py-16 text-center space-y-3 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <Package className="w-10 h-10 text-slate-400 mx-auto" />
              <h4 className="text-base font-bold text-navy-900">No leads logged yet</h4>
              <p className="text-xs text-slate-500">Submit a requirement via the front page form to see it logged here live.</p>
            </div>
          ) : (
            inquiries.map((inq) => (
              <div
                key={inq._id}
                className="bg-jute-50/40 p-5 rounded-2xl border border-slate-200 space-y-3 hover:border-jute-300 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/60 pb-3">
                  <div>
                    <span className="text-base font-bold text-navy-900">{inq.name}</span>
                    {inq.company && (
                      <span className="text-xs font-semibold text-jute-700 ml-2 bg-jute-100 px-2 py-0.5 rounded">
                        🏢 {inq.company}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full text-[11px]">
                      {inq.status || 'New'}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(inq.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-700 font-medium">
                  <div className="flex items-center space-x-1.5">
                    <Phone className="w-3.5 h-3.5 text-jute-600" />
                    <a href={`tel:${inq.phone}`} className="hover:underline font-bold text-navy-900">{inq.phone}</a>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Mail className="w-3.5 h-3.5 text-jute-600" />
                    <a href={`mailto:${inq.email}`} className="hover:underline text-slate-800">{inq.email}</a>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Package className="w-3.5 h-3.5 text-jute-600" />
                    <span>Req: <strong className="text-navy-900">{inq.quantity}</strong> ({inq.productCategory})</span>
                  </div>
                </div>

                {inq.productName && inq.productName !== 'General Inquiry' && (
                  <div className="text-xs bg-white p-2 rounded-lg border border-slate-200">
                    <span className="font-semibold text-slate-500">Interested Product:</span>{' '}
                    <strong className="text-jute-800">{inq.productName}</strong>
                  </div>
                )}

                <div className="text-xs text-slate-600 bg-white p-3 rounded-xl border border-slate-100 italic">
                  "{inq.message}"
                </div>
              </div>
            ))
          )}
        </div>

      </div>

    </div>
  );
};

export default AdminInquiriesModal;
