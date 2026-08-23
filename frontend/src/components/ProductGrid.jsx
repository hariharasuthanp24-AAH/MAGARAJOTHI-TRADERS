import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';
import { fetchProductsApi } from '../api/client';
import { Search, Filter, Loader2, Sparkles } from 'lucide-react';

const ProductGrid = ({ activeCategory, onSelectCategory, onOpenInquiry }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProductForModal, setSelectedProductForModal] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const res = await fetchProductsApi(activeCategory, false, searchQuery);
        if (res && res.data) {
          setProducts(res.data);
        }
      } catch (err) {
        console.error('Failed to load catalog:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [activeCategory, searchQuery]);

  return (
    <section id="products-section" className="py-20 bg-jute-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-jute-100 text-jute-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-jute-600" />
            <span>WHOLESALE MERCHANDISE CATALOG</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Our Product Range
          </h2>

          <p className="text-slate-600 text-base">
            Explore our industrial-grade gunny bags, eco-friendly jute packaging, and weather-proof plastic sacks engineered for high burst resistance and global export compliance.
          </p>
        </div>

        {/* Filters & Search Bar */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {['All', 'Jute', 'Gunny', 'Plastic', 'Plastic Rolls'].map((cat) => (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat === 'All' ? 'All Catalog' : `${cat} Bags`}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search products, GSM, capacity..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-jute-500 focus:bg-white"
            />
          </div>

        </div>

        {/* Loading Spinner */}
        {loading ? (
          <div className="py-20 text-center flex flex-col items-center justify-center space-y-3">
            <Loader2 className="w-10 h-10 text-jute-500 animate-spin" />
            <span className="text-sm font-semibold text-slate-600">Loading catalog items...</span>
          </div>
        ) : products.length === 0 ? (
          <div className="py-16 text-center bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
            <div className="w-16 h-16 bg-jute-100 text-jute-600 rounded-full flex items-center justify-center mx-auto">
              <Filter className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-navy-900">No products found matching your search</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Try adjusting your category filter or search terms. Alternatively, contact our trade desk directly for custom specifications.
            </p>
            <button
              onClick={() => { onSelectCategory('All'); setSearchQuery(''); }}
              className="bg-navy-900 text-white font-bold px-4 py-2 rounded-xl text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product._id || product.slug}
                product={product}
                onViewDetails={(p) => setSelectedProductForModal(p)}
                onOpenInquiry={onOpenInquiry}
              />
            ))}
          </div>
        )}

      </div>

      {/* Product Specification Modal */}
      {selectedProductForModal && (
        <ProductDetailModal
          product={selectedProductForModal}
          onClose={() => setSelectedProductForModal(null)}
          onOpenInquiry={onOpenInquiry}
        />
      )}
    </section>
  );
};

export default ProductGrid;
