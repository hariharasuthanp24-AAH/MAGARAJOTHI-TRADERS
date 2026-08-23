import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';
import { fetchProductsApi } from '../api/client';
import { Search, Loader2, Sparkles, Leaf } from 'lucide-react';

const ProductGrid = ({ activeCategory = 'All', onSelectCategory, onOpenInquiry }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProductsApi(activeCategory);
        const productList = Array.isArray(data) ? data : (data?.data || []);
        console.log("Fetched Products:", productList);
        setProducts(productList);
      } catch (err) {
        console.error('Error fetching products in ProductGrid:', err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [activeCategory]);

  const categoryTabs = ['All', 'Jute', 'Nano Bags', 'Jute Thread', '2nd Jute Bags', 'Plastic', 'Plastic Roll'];

  const filteredProducts = Array.isArray(products)
    ? products.filter((item) => {
        const q = searchTerm.toLowerCase().trim();
        const matchesSearch =
          !q ||
          item.name?.toLowerCase().includes(q) ||
          item.category?.toLowerCase().includes(q) ||
          item.subcategory?.toLowerCase().includes(q) ||
          item.description?.toLowerCase().includes(q);

        const currentCat = activeCategory || 'All';
        const matchesCategory =
          currentCat === 'All' ||
          currentCat === 'All Range' ||
          item.category?.toLowerCase().trim() === currentCat.toLowerCase().trim();

        return matchesSearch && matchesCategory;
      })
    : [];

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

        {/* Filters & Search Bar Container */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-14 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Robust Filter Buttons */}
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            {categoryTabs.map((cat) => (
              <button
                key={cat}
                onClick={() => onSelectCategory && onSelectCategory(cat)}
                className={`px-6 py-3 rounded-xl text-sm sm:text-base font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-jute-dark text-white shadow-md'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                {cat === 'All' ? '🌱 All Range' : cat}
              </button>
            ))}
          </div>

          {/* Search Bar Component */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            <input
              type="text"
              placeholder="Search products or specs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-xl pl-12 pr-4 py-3 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-jute-dark focus:ring-1 focus:ring-jute-dark shadow-sm transition-colors"
            />
          </div>

        </div>

        {/* Loading Spinner */}
        {loading ? (
          <div className="py-28 text-center flex flex-col items-center justify-center space-y-4">
            <Loader2 className="w-14 h-14 text-jute-dark animate-spin" />
            <p className="text-lg font-semibold text-gray-700">Loading catalog items...</p>
          </div>
        ) : filteredProducts.length > 0 ? (
          /* Products Grid */
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
          /* Empty Search Fallback */
          <div className="bg-white p-16 rounded-3xl text-center border border-gray-200 max-w-xl mx-auto space-y-6 shadow-sm">
            <Sparkles className="w-16 h-16 text-jute-dark mx-auto" />
            <h3 className="text-2xl font-bold text-gray-900">No products match your filter</h3>
            <p className="text-base text-gray-500 leading-relaxed max-w-md mx-auto">
              Try searching with a different term or select another product category button above.
            </p>
            <button
              onClick={() => {
                if (onSelectCategory) onSelectCategory('All');
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
