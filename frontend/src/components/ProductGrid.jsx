import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';
import { fetchProductsApi } from '../api/client';
import { Search, Filter, Loader2, Sparkles, Leaf } from 'lucide-react';

const ProductGrid = ({ activeCategory, onSelectCategory, onOpenInquiry }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProductsApi(activeCategory);
        setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [activeCategory]);

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.subcategory && item.subcategory.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section id="products-section" className="py-20 bg-nature-canvas relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-jute-100 border border-jute-300 text-jute-800 text-xs font-bold uppercase tracking-wider">
            <Leaf size={14} className="text-jute-600" />
            <span>Sustainable Eco Packaging Range</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-forest-900 tracking-tight">
            Magarajothi <span className="text-jute-600">Product Range</span>
          </h2>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Explore 100% natural Jute Bags, compact Nano Bags, industrial Jute Thread spools, Grade-A 2nd Jute Bags, and HDPE Plastic Rolls engineered for high burst resistance.
          </p>
        </div>

        {/* Filters & Search Bar */}
        <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-md border border-jute-200 mb-10 flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            {['All', 'Jute', 'Nano Bags', 'Jute Thread', '2nd Jute Bags', 'Plastic', 'Plastic Roll'].map((cat) => (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-forest-900 text-jute-300 shadow-md border border-jute-400/40'
                    : 'bg-jute-50 hover:bg-jute-100 text-slate-700 border border-jute-200/60'
                }`}
              >
                {cat === 'All' ? '🌱 All Range' : cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-jute-600 w-4 h-4" />
            <input
              type="text"
              placeholder="Search products or specs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#FAF6F0] border border-jute-300 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-jute-500 focus:bg-white transition"
            />
          </div>

        </div>

        {/* Loading State */}
        {loading ? (
          <div className="py-24 text-center flex flex-col items-center justify-center space-y-3">
            <Loader2 className="w-10 h-10 text-jute-600 animate-spin" />
            <p className="text-sm font-semibold text-slate-600">Loading catalog items...</p>
          </div>
        ) : filteredProducts.length > 0 ? (
          /* Products Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product._id || product.slug}
                product={product}
                onViewDetails={(prod) => setSelectedProduct(prod)}
                onOpenInquiry={onOpenInquiry}
              />
            ))}
          </div>
        ) : (
          /* Empty Search Fallback */
          <div className="bg-white p-12 rounded-3xl text-center border border-jute-200 max-w-lg mx-auto space-y-4">
            <Sparkles className="w-10 h-10 text-jute-500 mx-auto" />
            <h3 className="text-lg font-bold text-forest-900">No products match your filter</h3>
            <p className="text-slate-600 text-xs">
              Try searching with a different term or select another product category tab.
            </p>
            <button
              onClick={() => {
                onSelectCategory('All');
                setSearchTerm('');
              }}
              className="gold-gradient-btn text-white px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onOpenInquiry={onOpenInquiry}
        />
      )}
    </section>
  );
};

export default ProductGrid;
