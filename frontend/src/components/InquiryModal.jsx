import React from 'react';
import InquiryForm from './InquiryForm';
import { X } from 'lucide-react';

const InquiryModal = ({ isOpen, onClose, selectedProduct, selectedCategory }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/75 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl border border-slate-100 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Wrapper around InquiryForm logic */}
        <div className="pt-2">
          {selectedProduct && (
            <div className="mb-4 bg-jute-50 p-3.5 rounded-2xl border border-jute-200 flex items-center justify-between text-xs">
              <div>
                <span className="text-slate-400 block font-semibold">Enquiring For Product:</span>
                <span className="font-extrabold text-navy-900 text-sm">{selectedProduct.name}</span>
              </div>
              <span className="bg-jute-500 text-white px-2.5 py-1 rounded-lg font-bold">
                {selectedProduct.category}
              </span>
            </div>
          )}

          <InquiryForm
            initialProduct={selectedProduct}
            initialCategory={selectedCategory || (selectedProduct ? selectedProduct.category : 'Jute')}
          />
        </div>

      </div>

    </div>
  );
};

export default InquiryModal;
