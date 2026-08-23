import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';
import { fetchProductsApi } from '../api/client';
import { Loader2, Sparkles, Leaf } from 'lucide-react';

const categories = [
  'All Range',
  'Jute',
  'Nano Bags',
  'Jute Thread',
  '2nd Jute Bags',
  'Plastic',
  'Plastic Roll',
];

const ProductGrid = ({ activeCategory = 'All Range', onSelectCategory, onOpenInquiry }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentTab, setCurrentTab] = useState(activeCategory);

  useEffect(() => {
    setCurrentTab(activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const categoryFilter = currentTab === 'All Range' ? 'All' : currentTab;
        const data = await fetchProductsApi(categoryFilter);
        const productList = Array.isArray(data) ? data : (data?.data || []);
        setProducts(productList);
      } catch (err) {
        console.error('Error fetching products in ProductGrid:', err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [currentTab]);

  const handleTabChange = (cat) => {
    setCurrentTab(cat);
    if (onSelectCategory) onSelectCategory(cat);
  };

  return (
    <section id="products-section" className="py-20 md:py-28 bg-[#FAF6F0] relative font-sans border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Scaled Section Title & Subheading */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-12">
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

        {/* Clean Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleTabChange(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                currentTab === cat
                  ? 'bg-jute-dark text-white border-jute-dark shadow-md'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-jute-dark hover:text-jute-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Loading Spinner */}
        {loading ? (
          <div className="py-28 text-center flex flex-col items-center justify-center space-y-4">
            <Loader2 className="w-14 h-14 text-jute-dark animate-spin" />
            <p className="text-lg font-semibold text-gray-700">Loading catalog items...</p>
          </div>
        ) : products.length > 0 ? (
          /* Products Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
            {products.map((product) => (
              <ProductCard
                key={product._id || product.slug}
                product={product}
                onViewDetails={(prod) => setSelectedProduct(prod)}
                onOpenInquiry={onOpenInquiry}
              />
            ))}
          </div>
        ) : (
          /* Fallback when database is empty */
          <div className="bg-white p-16 rounded-3xl text-center border border-gray-200 max-w-xl mx-auto space-y-6 shadow-sm">
            <Sparkles className="w-16 h-16 text-jute-dark mx-auto" />
            <h3 className="text-2xl font-bold text-gray-900">No products available in this category</h3>
            <p className="text-base text-gray-500 leading-relaxed max-w-md mx-auto">
              Please select another category tab above or request a direct custom quotation from our commercial sales desk.
            </p>
            <button
              onClick={() => handleTabChange('All Range')}
              className="bg-jute-dark text-white hover:bg-jute px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition"
            >
              View All Range Catalog
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
