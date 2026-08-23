import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, Send, Leaf } from 'lucide-react';

const ProductCard = ({ product, onViewDetails, onOpenInquiry }) => {
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  const isJute = product.category === 'Jute' || product.category === 'Nano Bags' || product.category === '2nd Jute Bags';

  const badgeColor = isJute
    ? 'bg-amber-100 text-amber-900 border-amber-300'
    : product.category === 'Jute Thread'
    ? 'bg-orange-100 text-orange-950 border-orange-300'
    : 'bg-emerald-100 text-emerald-950 border-emerald-300';

  const handleEnquireClick = () => {
    if (onOpenInquiry) {
      onOpenInquiry(product, product.category);
    } else {
      navigate(`/enquire?product=${encodeURIComponent(product.name)}&category=${encodeURIComponent(product.category)}`);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
      
      {/* Prominent Image Header (h-64 object-cover) */}
      <div className="relative h-64 overflow-hidden bg-[#FAF6F0] flex items-center justify-center border-b border-gray-100">
        {!hasError && product.image ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setHasError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          /* Graceful Branded Fallback Placeholder */
          <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col items-center justify-center p-4 text-center space-y-2">
            <img
              src="/logo.png"
              alt="Magarajothi Traders MT Logo"
              className="w-16 h-16 rounded-full object-cover shadow-md border-2 border-jute-dark"
            />
            <span className="font-heading font-extrabold text-base text-gray-900">
              MAGARAJOTHI TRADERS
            </span>
            <span className="text-xs font-bold text-jute-dark uppercase tracking-wider">
              {product.category} Packaging
            </span>
          </div>
        )}

        <div className="absolute top-3.5 left-3.5 flex items-center space-x-2">
          <span className={`text-xs font-bold px-3 py-1 rounded-full border shadow-sm backdrop-blur-md ${badgeColor} flex items-center gap-1`}>
            <Leaf size={12} className="text-jute-dark" />
            {product.category}
          </span>
          {product.isFeatured && (
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-jute-dark text-white shadow-sm">
              ⭐ Featured
            </span>
          )}
        </div>
        
        <div className="absolute bottom-3.5 right-3.5 bg-gray-900/90 backdrop-blur-sm text-white px-3 py-1 rounded-xl text-xs font-bold border border-white/20">
          {product.capacity}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="text-xs text-jute-dark font-bold mb-1.5 uppercase tracking-wider">
            {product.subcategory || 'Standard Eco Spec'} • {product.gsm || 'High Strength'}
          </div>
          <h3 className="font-serif text-xl font-bold text-gray-900 group-hover:text-jute-dark transition-colors line-clamp-2 leading-snug">
            {product.name}
          </h3>
          <p className="text-gray-600 text-base mt-2 line-clamp-2 leading-relaxed font-normal">
            {product.description}
          </p>
        </div>

        {/* Specs Badges */}
        <div className="bg-[#FAF6F0] p-3 rounded-xl border border-gray-200 grid grid-cols-2 gap-2 text-xs font-medium">
          <div>
            <span className="text-gray-500 block">Dimensions:</span>
            <span className="font-bold text-gray-900">{product.dimensions}</span>
          </div>
          <div>
            <span className="text-gray-500 block">Min Order:</span>
            <span className="font-bold text-gray-900">{product.minOrderQuantity}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          <button
            onClick={() => onViewDetails && onViewDetails(product)}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3 px-3 rounded-xl text-xs transition-colors flex items-center justify-center space-x-1.5 border border-gray-300"
          >
            <Eye className="w-4 h-4 text-gray-700" />
            <span>View Specs</span>
          </button>
          
          <button
            onClick={handleEnquireClick}
            className="w-full bg-jute-dark hover:bg-jute text-white font-bold py-3 px-3 rounded-xl text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all flex items-center justify-center space-x-1.5"
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
