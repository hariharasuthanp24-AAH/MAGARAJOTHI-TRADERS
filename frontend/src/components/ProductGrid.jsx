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
    <section id="products-section" className="py-20 md:py-28 bg-[#FAF6F0] relative font-sans border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Scaled Section Title & Subheading */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-jute-light/20 text-jute-dark text-sm font-bold uppercase tracking-wider">
            <Leaf size={16} className="text-jute-dark" />
            <span>Sustainable Eco Packaging Catalog</span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Magarajothi <span className="text-jute-dark">Product Range</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed font-normal">
            Explore 100% natural Jute Bags, compact Nano Bags, industrial Jute Thread spools, Grade-A 2nd Jute Bags, and HDPE Plastic Rolls engineered for high burst resistance and global export compliance.
          </p>
        </div>

        {/* Scaled Filters & Search Bar Container */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-14 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Robust Filter Buttons (px-8 py-3 text-base) */}
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            {['All', 'Jute', 'Nano Bags', 'Jute Thread', '2nd Jute Bags', 'Plastic', 'Plastic Roll'].map((cat) => (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-8 py-3 rounded-xl text-base font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-jute-dark text-white shadow-md'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                {cat === 'All' ? '🌱 All Range' : cat}
              </button>
            ))}
          </div>

          {/* Scaled Search Bar */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Search products or specs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#FAF6F0] border border-gray-300 rounded-xl pl-13 pr-5 py-3.5 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-jute-dark focus:bg-white transition"
            />
          </div>

        </div>

        {/* Loading State */}
        {loading ? (
          <div className="py-28 text-center flex flex-col items-center justify-center space-y-4">
            <Loader2 className="w-14 h-14 text-jute-dark animate-spin" />
            <p className="text-lg font-semibold text-gray-700">Loading catalog items...</p>
          </div>
        ) : filteredProducts.length > 0 ? (
          /* Products Grid with Generous Gap Spacing (gap-8 md:gap-10) */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
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
          /* Scaled Empty Search Fallback */
          <div className="bg-white p-16 rounded-3xl text-center border border-gray-200 max-w-xl mx-auto space-y-6 shadow-sm">
            <Sparkles className="w-16 h-16 text-jute-dark mx-auto" />
            <h3 className="text-2xl font-bold text-gray-900">No products match your filter</h3>
            <p className="text-base text-gray-500 leading-relaxed max-w-md mx-auto">
              Try searching with a different term or select another product category button above.
            </p>
            <button
              onClick={() => {
                onSelectCategory('All');
                setSearchTerm('');
              }}
              className="bg-jute-dark text-white hover:bg-jute px-8 py-3.5 rounded-xl text-base font-bold uppercase tracking-wider transition-colors shadow"
            >
              Reset All Filters
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
