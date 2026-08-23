import React from 'react';
import { X, CheckCircle2, PackageCheck, Send, ShieldCheck, Layers, FileText } from 'lucide-react';

const ProductDetailModal = ({ product, onClose, onOpenInquiry }) => {
  if (!product) return null;

  const imageSrc = product.image || '/logo.png';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto font-sans">
      
      <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-gray-200 relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Left Visual Column (Universal Logo object-contain p-6 bg-[#FAF6F0]) */}
          <div className="md:col-span-5 bg-[#FAF6F0] relative min-h-[260px] md:min-h-[420px] p-6 flex items-center justify-center border-r border-gray-200">
            <img
              src={imageSrc}
              alt={product.name}
              className="max-w-full max-h-full object-contain p-2 drop-shadow-md"
            />
            <div className="absolute top-4 left-4 bg-jute-dark text-white font-extrabold text-xs px-3 py-1 rounded-full uppercase shadow">
              {product.category} Packaging Spec
            </div>
          </div>

          {/* Right Details Column */}
          <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="text-xs font-bold text-jute-dark uppercase tracking-widest">
                {product.subcategory || 'Commercial Export Grade'}
              </div>

              <h2 className="text-2xl font-extrabold text-gray-900 leading-snug">
                {product.name}
              </h2>

              <p className="text-gray-700 text-sm leading-relaxed font-normal">
                {product.description}
              </p>

              {/* Quick Specs Grid */}
              <div className="bg-[#FAF6F0] rounded-2xl p-4 border border-gray-200 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-gray-500 block font-medium">Capacity</span>
                  <span className="font-extrabold text-gray-900 text-sm">{product.capacity}</span>
                </div>
                <div>
                  <span className="text-gray-500 block font-medium">Dimensions</span>
                  <span className="font-extrabold text-gray-900 text-sm">{product.dimensions}</span>
                </div>
                <div>
                  <span className="text-gray-500 block font-medium">GSM / Weight</span>
                  <span className="font-extrabold text-gray-900 text-sm">{product.gsm}</span>
                </div>
                <div>
                  <span className="text-gray-500 block font-medium">Min Order Quantity</span>
                  <span className="font-extrabold text-gray-900 text-sm">{product.minOrderQuantity}</span>
                </div>
              </div>

              {/* Features List */}
              {product.features && product.features.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-extrabold text-gray-900 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-jute-dark" />
                    <span>Commercial Features & Compliance</span>
                  </div>
                  <ul className="grid grid-cols-1 gap-1.5 text-xs font-medium text-gray-700">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-jute-dark shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="pt-2">
              <button
                onClick={() => {
                  onClose();
                  if (onOpenInquiry) onOpenInquiry(product, product.category);
                }}
                className="w-full bg-jute-dark hover:bg-jute text-white font-extrabold py-3.5 px-6 rounded-xl text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Request Quotation for {product.name}</span>
              </button>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default ProductDetailModal;
