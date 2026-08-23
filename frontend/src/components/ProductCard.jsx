import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, Send, Leaf } from 'lucide-react';

const ProductCard = ({ product, onViewDetails, onOpenInquiry }) => {
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  const isJute = product.category === 'Jute' || product.category === 'Nano Bags' || product.category === '2nd Jute Bags';

  const badgeColor = isJute
    ? 'bg-amber-100/90 text-amber-900 border-amber-300'
    : product.category === 'Jute Thread'
    ? 'bg-orange-100/90 text-orange-950 border-orange-300'
    : 'bg-emerald-100/90 text-emerald-950 border-emerald-300';

  const handleEnquireClick = () => {
    if (onOpenInquiry) {
      onOpenInquiry(product, product.category);
    } else {
      navigate(`/enquire?product=${encodeURIComponent(product.name)}&category=${encodeURIComponent(product.category)}`);
    }
  };

  return (
    <div className="nature-glass-card rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
      
      {/* Visual Header with Image Fallback */}
      <div className="relative h-56 overflow-hidden bg-jute-100 flex items-center justify-center">
        {!hasError && product.image ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setHasError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          /* Graceful Branded Fallback Placeholder */
          <div className="w-full h-full bg-gradient-to-br from-jute-50 to-jute-200 flex flex-col items-center justify-center p-4 text-center space-y-2">
            <img
              src="/logo.png"
              alt="Magarajothi Traders MT Logo"
              className="w-14 h-14 rounded-full object-cover shadow-md border-2 border-jute-400"
            />
            <span className="font-heading font-extrabold text-sm text-forest-900">
              MAGARAJOTHI TRADERS
            </span>
            <span className="text-[11px] font-bold text-jute-700 uppercase tracking-wider">
              {product.category} Packaging
            </span>
          </div>
        )}

        <div className="absolute top-3 left-3 flex items-center space-x-2">
          <span className={`text-xs font-bold px-3 py-1 rounded-full border shadow-sm backdrop-blur-md ${badgeColor} flex items-center gap-1`}>
            <Leaf size={12} className="text-jute-600" />
            {product.category}
          </span>
          {product.isFeatured && (
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-jute-600 text-white shadow-sm">
              ⭐ Featured
            </span>
          )}
        </div>
        
        <div className="absolute bottom-3 right-3 bg-forest-950/90 backdrop-blur-sm text-jute-300 px-2.5 py-1 rounded-xl text-xs font-bold border border-jute-400/20">
          {product.capacity}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="text-xs text-jute-700 font-bold mb-1">
            {product.subcategory || 'Standard Eco Spec'} • {product.gsm || 'High Strength'}
          </div>
          <h3 className="font-serif text-base font-bold text-forest-900 group-hover:text-jute-600 transition-colors line-clamp-2 leading-snug">
            {product.name}
          </h3>
          <p className="text-slate-600 text-xs mt-2 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Specs Badges */}
        <div className="bg-[#FAF6F0] p-2.5 rounded-xl border border-jute-200 grid grid-cols-2 gap-2 text-[11px]">
          <div>
            <span className="text-slate-500 block">Dimensions:</span>
            <span className="font-bold text-forest-900">{product.dimensions}</span>
          </div>
          <div>
            <span className="text-slate-500 block">Min Order:</span>
            <span className="font-bold text-forest-900">{product.minOrderQuantity}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            onClick={() => onViewDetails && onViewDetails(product)}
            className="w-full bg-jute-100 hover:bg-jute-200 text-forest-900 font-bold py-2.5 px-3 rounded-xl text-xs transition-colors flex items-center justify-center space-x-1.5 border border-jute-300/60"
          >
            <Eye className="w-3.5 h-3.5 text-jute-700" />
            <span>View Specs</span>
          </button>
          
          <button
            onClick={handleEnquireClick}
            className="w-full gold-gradient-btn text-white font-bold py-2.5 px-3 rounded-xl text-xs shadow-sm hover:shadow transition-all flex items-center justify-center space-x-1.5"
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
