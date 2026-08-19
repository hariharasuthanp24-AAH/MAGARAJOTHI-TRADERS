import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, Send } from 'lucide-react';

const ProductCard = ({ product, onViewDetails, onOpenInquiry }) => {
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  const isJute = product.category === 'Jute';
  const isGunny = product.category === 'Gunny';

  const badgeColor = isJute
    ? 'bg-amber-100 text-amber-900 border-amber-300'
    : isGunny
    ? 'bg-yellow-100 text-yellow-900 border-yellow-300'
    : 'bg-sky-100 text-sky-900 border-sky-300';

  const handleEnquireClick = () => {
    if (onOpenInquiry) {
      onOpenInquiry(product, product.category);
    } else {
      navigate(`/enquire?product=${encodeURIComponent(product.name)}&category=${encodeURIComponent(product.category)}`);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
      
      {/* Visual Header with Image Fallback */}
      <div className="relative h-56 overflow-hidden bg-brand-chalk flex items-center justify-center">
        {!hasError && product.image ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setHasError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          /* Graceful Branded Fallback Placeholder */
          <div className="w-full h-full bg-gradient-to-br from-slate-100 to-jute-100 flex flex-col items-center justify-center p-4 text-center space-y-2">
            <img
              src="/logo.png"
              alt="Magarajothi Traders MT Logo"
              className="w-14 h-14 rounded-full object-cover shadow-md border-2 border-jute"
            />
            <span className="font-heading font-bold text-sm text-brand-navy">
              MAGARAJOTHI TRADERS
            </span>
            <span className="text-[11px] font-semibold text-jute-dark uppercase tracking-wider">
              {product.category} Bag Specification
            </span>
          </div>
        )}

        <div className="absolute top-3 left-3 flex items-center space-x-2">
          <span className={`text-xs font-bold px-3 py-1 rounded-full border shadow-sm ${badgeColor}`}>
            {product.category} Bag
          </span>
          {product.isFeatured && (
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-jute-dark text-white shadow-sm">
              ⭐ Featured
            </span>
          )}
        </div>
        
        <div className="absolute bottom-3 right-3 bg-brand-navy/90 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-bold border border-white/10">
          {product.capacity}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="text-xs text-slate-400 font-semibold mb-1">
            {product.subcategory || 'Commercial Standard'} • {product.gsm || 'High GSM'}
          </div>
          <h3 className="text-lg font-bold text-brand-navy group-hover:text-jute-dark transition-colors line-clamp-2 leading-snug">
            {product.name}
          </h3>
          <p className="text-slate-600 text-xs mt-2 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Specs Badges */}
        <div className="bg-brand-chalk p-2.5 rounded-xl border border-slate-200 grid grid-cols-2 gap-2 text-[11px]">
          <div>
            <span className="text-slate-400 block">Dimensions:</span>
            <span className="font-semibold text-slate-700">{product.dimensions}</span>
          </div>
          <div>
            <span className="text-slate-400 block">Min Order:</span>
            <span className="font-semibold text-slate-700">{product.minOrderQuantity}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            onClick={() => onViewDetails && onViewDetails(product)}
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2.5 px-3 rounded-xl text-xs transition-colors flex items-center justify-center space-x-1.5"
          >
            <Eye className="w-3.5 h-3.5 text-slate-600" />
            <span>View Specs</span>
          </button>
          
          <button
            onClick={handleEnquireClick}
            className="w-full bg-jute-dark hover:bg-jute text-white font-bold py-2.5 px-3 rounded-xl text-xs shadow-sm hover:shadow transition-all flex items-center justify-center space-x-1.5"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Enquire</span>
          </button>
        </div>

      </div>

    </div>
  );
};

export default ProductCard;
