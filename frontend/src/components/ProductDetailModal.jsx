import React from 'react';
import { X, CheckCircle2, PackageCheck, Send, ShieldCheck, Layers, FileText } from 'lucide-react';
import { generateProductVisual } from '../assets/productImages';

const ProductDetailModal = ({ product, onClose, onOpenInquiry }) => {
  if (!product) return null;

  const imageSrc = product.image && !product.image.startsWith('/images/products')
    ? product.image
    : generateProductVisual(product.slug, product.name, product.category);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      
      <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-100 relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Left Visual Column */}
          <div className="md:col-span-5 bg-slate-900 relative min-h-[260px] md:min-h-[420px] flex items-center justify-center">
            <img
              src={imageSrc}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-jute-500 text-white font-extrabold text-xs px-3 py-1 rounded-full uppercase shadow">
              {product.category} Bag Specification
            </div>
          </div>

          {/* Right Details Column */}
          <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="text-xs font-bold text-jute-600 uppercase tracking-widest">
                {product.subcategory || 'Commercial Export Grade'}
              </div>

              <h2 className="text-2xl font-extrabold text-navy-900 leading-snug">
                {product.name}
              </h2>

              <p className="text-slate-600 text-xs leading-relaxed">
                {product.description}
              </p>

              {/* Quick Specs Grid */}
              <div className="bg-jute-50/70 rounded-2xl p-4 border border-jute-200/70 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block font-semibold">Capacity</span>
                  <span className="font-extrabold text-navy-900 text-sm">{product.capacity}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Dimensions</span>
                  <span className="font-extrabold text-navy-900 text-sm">{product.dimensions}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">GSM Density</span>
                  <span className="font-extrabold text-navy-900 text-sm">{product.gsm}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Min Order</span>
                  <span className="font-extrabold text-navy-900 text-sm">{product.minOrderQuantity}</span>
                </div>
              </div>

              {/* Key Features */}
              {product.features && product.features.length > 0 && (
                <div className="space-y-2 pt-1">
                  <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-jute-600" /> Key Features
                  </h4>
                  <ul className="grid grid-cols-1 gap-1.5 text-xs text-slate-700">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-jute-500"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technical Specifications */}
              {product.specifications && (
                <div className="pt-2 border-t border-slate-100 text-xs space-y-1">
                  <h4 className="font-bold text-navy-900 uppercase mb-2">Technical Specs</h4>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-slate-600">
                    {product.specifications.material && (
                      <div><span className="font-semibold text-slate-800">Material:</span> {product.specifications.material}</div>
                    )}
                    {product.specifications.weaveType && (
                      <div><span className="font-semibold text-slate-800">Weave:</span> {product.specifications.weaveType}</div>
                    )}
                    {product.specifications.stitching && (
                      <div><span className="font-semibold text-slate-800">Stitching:</span> {product.specifications.stitching}</div>
                    )}
                    {product.specifications.grade && (
                      <div><span className="font-semibold text-slate-800">Grade:</span> {product.specifications.grade}</div>
                    )}
                  </div>
                </div>
              )}

            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-slate-400 block font-semibold">Pricing Structure</span>
                <span className="text-xs font-bold text-jute-700">{product.priceEstimate}</span>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onOpenInquiry(product, product.category);
                }}
                className="bg-gradient-to-r from-jute-500 to-hessian-500 hover:from-jute-600 hover:to-hessian-700 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all flex items-center space-x-2 text-xs"
              >
                <Send className="w-4 h-4" />
                <span>Enquire For This Item</span>
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductDetailModal;
