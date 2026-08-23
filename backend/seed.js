const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const sampleProducts = [
  // --- PLASTIC ROLLS (NEW CATEGORY) ---
  {
    name: 'HDPE / PP Woven Fabric Roll',
    slug: 'hdpe-pp-woven-fabric-roll',
    category: 'Plastic Rolls',
    subcategory: 'Woven Fabric Rolls',
    capacity: '500m / 1000m Roll',
    dimensions: 'Width: 48 to 72 Inches',
    gsm: '80 - 120 GSM',
    description: 'High-density circular woven polymer fabric rolls available in green, yellow, and white shades. Engineered for automated bag manufacturing, agricultural shading, and industrial coverings.',
    features: [
      'High Tensile Burst & Tear Strength',
      'Available in Green, Yellow & White Shades',
      'UV Stabilized Polymer Weave',
      'Ideal for Automatic Bag Stitching Machines'
    ],
    image: '/images/products/plastic-rolls-multi.jpg',
    isFeatured: true,
    inStock: true,
    minOrderQuantity: '2 Rolls (1000m)',
    priceEstimate: 'Factory Direct Roll Rates',
    specifications: {
      material: 'Virgin HDPE / PP Polymer',
      weaveType: 'Circular Woven Roll',
      color: 'Green / Yellow / White',
      stitching: 'Unstitched Continuous Roll',
      grade: 'Industrial Roll Grade'
    }
  },
  {
    name: 'Heavy-Duty Laminated Polymer Fabric Roll',
    slug: 'heavy-duty-laminated-polymer-fabric-roll',
    category: 'Plastic Rolls',
    subcategory: 'Laminated Rolls',
    capacity: '500m Roll',
    dimensions: 'Width: 60 to 96 Inches',
    gsm: '90 - 150 GSM',
    description: 'Poly-laminated weather-resistant woven fabric roll. Provides 100% moisture protection for custom packaging fabrication, tarpaulins, and bulk grain covering.',
    features: [
      'Inner LDPE Lamination Barrier',
      '100% Moisture & Water Proof',
      'High Tear Resistance under Heavy Tension',
      'Custom Sizing & Color Options'
    ],
    image: '/images/products/plastic-rolls-fabric.jpg',
    isFeatured: true,
    inStock: true,
    minOrderQuantity: '2 Rolls (1000m)',
    priceEstimate: 'Bulk Wholesale Pricing',
    specifications: {
      material: 'PP Woven + Poly Lamination',
      weaveType: 'Laminated High-Density Roll',
      color: 'Beige / Tan / Custom',
      stitching: 'Continuous Fabric Web',
      grade: 'Heavy Commercial Export'
    }
  },

  // --- PLASTIC GUNNY BAGS ---
  {
    name: 'Al-Ameen Feeds TMR Meal Plastic Bag',
    slug: 'al-ameen-feeds-tmr-meal-plastic-bag',
    category: 'Plastic',
    subcategory: 'Animal Feed Packaging',
    capacity: '50 kg',
    dimensions: '90cm x 55cm',
    gsm: '85 GSM',
    description: 'Heavy-duty HDPE/PP woven plastic bag customized for Al-Ameen Feeds TMR Meal. High tensile strength, moisture-proof inner lining, and durable print finish for animal feed storage.',
    features: [
      'Moisture & Water Proof Lamination',
      'UV Treated Outer Layer for Outdoor Stacking',
      'High Seam Bursting Strength',
      'Custom Brand Flexographic Printing'
    ],
    image: '/images/Gemini_Generated_Image_guy2urguy2urguy2.png',
    isFeatured: true,
    inStock: true,
    minOrderQuantity: '1000 Bags',
    priceEstimate: 'Direct Manufacturer Rate',
    specifications: {
      material: 'Virgin HDPE / PP Granules',
      weaveType: 'Circular Woven Polymer',
      color: 'Multicolor Printed',
      stitching: 'Double Thread Hem Stitch',
      grade: 'Commercial Feed Grade'
    }
  },
  {
    name: 'Sri Krishna Brand White Plastic Bag',
    slug: 'sri-krishna-brand-white-plastic-bag',
    category: 'Plastic',
    subcategory: 'Food & Flour Packaging',
    capacity: '25 kg / 50 kg',
    dimensions: '75cm x 48cm',
    gsm: '80 GSM',
    description: 'Premium milky-white PP woven plastic bag designed for Sri Krishna Brand grains, flour, and agricultural produce. Offers clean aesthetics and puncture resistance.',
    features: [
      'Milky White High-Finish Fabric',
      'Fine Weave Mesh Prevents Powder Leakage',
      'Food Grade Polypropylene Granules',
      'Reinforced Bottom Hemming'
    ],
    image: '/images/sri-krishna-bag.png',
    isFeatured: true,
    inStock: true,
    minOrderQuantity: '1000 Bags',
    priceEstimate: 'Bulk Wholesale Pricing',
    specifications: {
      material: '100% Virgin Polypropylene',
      weaveType: 'High-Density Fine Weave',
      color: 'Milky White',
      stitching: 'Folded & Chain Stitched',
      grade: 'Food Grade Compliant'
    }
  },
  {
    name: 'HDPE Woven Fertilizer Plastic Gunny Bag',
    slug: 'hdpe-woven-fertilizer-plastic-gunny-bag',
    category: 'Plastic',
    subcategory: 'Chemical & Fertilizer Packaging',
    capacity: '50 kg',
    dimensions: '90cm x 55cm',
    gsm: '75 GSM',
    description: 'Weatherproof HDPE woven bag engineered for bulk fertilizer, chemical granules, and minerals transport.',
    features: ['100% Weather & Humidity Barrier', 'UV Stabilized Polymer Blend'],
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
    isFeatured: false,
    inStock: true,
    minOrderQuantity: '2000 Bags',
    priceEstimate: 'Competitive Market Rate'
  },
  {
    name: 'BOPP Printed Color Laminated Plastic Bag',
    slug: 'bopp-printed-color-laminated-plastic-bag',
    category: 'Plastic',
    subcategory: 'Retail Export Packaging',
    capacity: '25 kg',
    dimensions: '70cm x 45cm',
    gsm: '95 GSM',
    description: 'Photographic rotogravure printed BOPP laminated plastic bag offering glossy, high-impact branding for premium rice and pulses exporters.',
    features: ['8-Color Rotogravure Printing', 'High Scratch & Water Resistance'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    inStock: true,
    minOrderQuantity: '3000 Bags'
  },

  // --- JUTE BAGS ---
  {
    name: 'A-Twill Food-Grade Hydrocarbon Free Jute Bag',
    slug: 'a-twill-food-grade-jute-bag',
    category: 'Jute',
    subcategory: 'Food Grade Export Sacks',
    capacity: '50 kg',
    dimensions: '94cm x 57cm',
    gsm: '330 GSM',
    description: 'Premium hydro-carbon free A-Twill Jute Bag specially processed for food-grade packaging. Ideal for exporting coffee beans, cocoa, cashew nuts, and high-value grains.',
    features: ['100% Biodegradable', 'Hydrocarbon-Free Processed (VO Standards)'],
    image: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    inStock: true,
    minOrderQuantity: '500 Bags',
    priceEstimate: 'Direct Mill Wholesale'
  },
  {
    name: 'B-Twill Standard Heavy Grain Jute Sack',
    slug: 'b-twill-standard-grain-jute-sack',
    category: 'Jute',
    subcategory: 'Agricultural Sacks',
    capacity: '50 kg / 100 kg',
    dimensions: '112cm x 67.5cm',
    gsm: '380 GSM',
    description: 'The industry-standard B-Twill Jute Sack widely utilized across India for bulk packaging of rice, wheat, maize, and pulses.',
    features: ['Heavy-Duty Load Capacity', 'Non-Slip Stacking'],
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    inStock: true,
    minOrderQuantity: '1000 Bags'
  },

  // --- TRADITIONAL GUNNY BAGS ---
  {
    name: 'Traditional 100kg Heavy Capacity Agricultural Gunny Bag',
    slug: 'traditional-100kg-agricultural-gunny-bag',
    category: 'Gunny',
    subcategory: 'Heavy Capacity Mandi Sacks',
    capacity: '100 kg',
    dimensions: '120cm x 70cm',
    gsm: '420 GSM',
    description: 'Time-tested ultra-durable gunny bag designed for maximum weight capacity in APMC mandis and rice mills.',
    features: ['Puncture Resistant Coarse Weave', 'Supports Hook Handling'],
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    inStock: true,
    minOrderQuantity: '500 Sacks'
  },
  {
    name: 'Sugar Export Grade V-Twill Gunny Bag',
    slug: 'sugar-export-v-twill-gunny-bag',
    category: 'Gunny',
    subcategory: 'Sugar Mill Packaging',
    capacity: '50 kg',
    dimensions: '100cm x 60cm',
    gsm: '390 GSM',
    description: 'Calendered V-Twill gunny sack tailored for sugar refineries. Minimizes crystal seepage.',
    features: ['Calendered Surface', 'High Bursting Strength'],
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80',
    isFeatured: false,
    inStock: true,
    minOrderQuantity: '1000 Bags'
  }
];

const seedData = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/magarajothi_traders';
    await mongoose.connect(mongoUri);
    await Product.deleteMany({});
    const created = await Product.insertMany(sampleProducts);
    console.log(`✅ Successfully seeded ${created.length} products!`);
    process.exit(0);
  } catch (error) {
    console.warn(`⚠️ Seeding note: ${error.message}`);
    process.exit(0);
  }
};

if (require.main === module) seedData();
module.exports = { sampleProducts };
