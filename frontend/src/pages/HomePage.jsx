import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import AboutSnippet from '../components/AboutSnippet';
import ProductGrid from '../components/ProductGrid';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import AdminInquiriesModal from '../components/AdminInquiriesModal';
import Footer from '../components/Footer';

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenInquiry = (product = null, category = 'Jute') => {
    const prodParam = product ? `product=${encodeURIComponent(product.name)}&` : '';
    const catParam = `category=${encodeURIComponent(category || (product ? product.category : 'Jute'))}`;
    navigate(`/contact?${prodParam}${catParam}`);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-chalk selection:bg-jute selection:text-white">
      
      {/* Navigation */}
      <Navbar
        onOpenInquiry={handleOpenInquiry}
        activeCategory={activeCategory}
        onSelectCategory={(cat) => setActiveCategory(cat)}
        onOpenAdminModal={() => setAdminModalOpen(true)}
      />

      {/* Hero Section */}
      <HeroSlider
        onOpenInquiry={handleOpenInquiry}
        onSelectCategory={(cat) => setActiveCategory(cat)}
      />

      {/* About Us Snippet */}
      <AboutSnippet
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Products Catalog Range */}
      <ProductGrid
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials Carousel */}
      <Testimonials />

      {/* Clean Global Footer */}
      <Footer
        onSelectCategory={(cat) => setActiveCategory(cat)}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Floating CTA / Quick WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href="https://wa.me/919025236106?text=Hi%20Magarajothi%20Traders%2C%20I%20would%20like%20to%20enquire%20about%20gunny%20jute%20bags."
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all p-3"
          title="Chat on WhatsApp"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.163 4.249 4.306-1.129z"/>
          </svg>
        </a>
      </div>

      {/* Admin Leads Modal */}
      <AdminInquiriesModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
      />

    </div>
  );
};

export default HomePage;
