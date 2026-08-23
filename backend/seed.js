const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const sampleProducts = [
  // --- NANO BAGS (NEW) ---
  {
    name: 'Compact Eco Laminated Nano Jute Bag',
    slug: 'compact-eco-laminated-nano-jute-bag',
    category: 'Nano Bags',
    subcategory: 'Mini Eco Bags',
    capacity: '5 kg / 10 kg',
    dimensions: '25cm x 20cm x 10cm',
    gsm: '280 GSM',
    description: 'Stylish mini laminated jute nano bag designed for retail packaging, return gifts, promotional events, and compact agricultural samples.',
    features: [
      'Inner Moisture-Proof Lamination Layer',
      'Padded Luxury Cotton Rope Handles',
      'Custom Brand Screen Printing Available',
      '100% Eco-Friendly & Reusable'
    ],
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    inStock: true,
    minOrderQuantity: '500 Bags',
    priceEstimate: 'Wholesale Unit Rate',
    specifications: {
      material: 'Laminated Natural Jute Fabric',
      weaveType: 'Fine Plain Weave',
      color: 'Natural Jute / Gold Accent',
      stitching: 'Reinforced Edge Stitching',
      grade: 'Premium Retail Grade'
    }
  },
  {
    name: 'Mini Promotional Hessian Nano Bag',
    slug: 'mini-promotional-hessian-nano-bag',
    category: 'Nano Bags',
    subcategory: 'Promotional Packaging',
    capacity: '2 kg / 5 kg',
    dimensions: '20cm x 15cm',
    gsm: '260 GSM',
    description: 'Compact hessian nano bag crafted for spice samples, dry fruit packaging, corporate gifting, and artisanal retail branding.',
    features: [
      'Drawstring / Handle Sealing Option',
      'High Visual Aesthetics for Retail Shelves',
      'Biodegradable Jute Fiber',
      'Custom Mill Logo Printing'
    ],
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80',
    isFeatured: false,
    inStock: true,
    minOrderQuantity: '1000 Bags',
    priceEstimate: 'Factory Direct Price'
  },

  // --- JUTE THREAD (NEW) ---
  {
    name: '3-Ply Heavy Duty Natural Jute Thread Spool',
    slug: '3-ply-heavy-duty-natural-jute-thread-spool',
    category: 'Jute Thread',
    subcategory: 'Stitching & Tying Twine',
    capacity: '1 kg / 5 kg Spool',
    dimensions: '3-Ply Standard Gauge',
    gsm: 'High Tensile Twine',
    description: 'Tough 3-ply natural jute thread spool engineered for manual and machine mouth-stitching of agricultural jute sacks, bundling, and craft applications.',
    features: [
      'High Breaking Tensile Strength',
      'Smooth Uniform Thickness without Knots',
      'Natural Fiber - 100% Eco-Friendly',
      'Compatible with Hand & Portable Stitchers'
    ],
    image: 'https://images.unsplash.com/photo-1606760227091-3dd850d97f1d?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    inStock: true,
    minOrderQuantity: '50 Spools',
    priceEstimate: 'Direct Mill Rate',
    specifications: {
      material: '100% Pure Raw Jute Fiber',
      weaveType: '3-Ply Twisted Twine',
      color: 'Natural Golden Brown',
      stitching: 'Thread Spool',
      grade: 'Industrial Stitching Grade'
    }
  },
  {
    name: 'Industrial High-Tensile Jute Twine & Yarn Roll',
    slug: 'industrial-high-tensile-jute-twine-yarn-roll',
    category: 'Jute Thread',
    subcategory: 'Packaging Yarn',
    capacity: '10 kg / 25 kg Roll',
    dimensions: '2-Ply / 4-Ply Available',
    gsm: 'Industrial Yarn',
    description: 'Heavy-gauge raw jute twine and yarn roll produced for industrial bale binding, crop trellising, carpet backing, and heavy sack stitching.',
    features: [
      'Moisture Absorbing & Friction Resistant',
      'High Seam Hold Strength',
      'Continuous Length Spool Roll',
      'Biodegradable Soil Safe'
    ],
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    isFeatured: false,
    inStock: true,
    minOrderQuantity: '100 kg',
    priceEstimate: 'Wholesale Yarn Rate'
  },

  // --- 2ND JUTE BAGS (NEW) ---
  {
    name: 'Grade-A Clean Once-Used Burlap Jute Bag (50kg)',
    slug: 'grade-a-clean-once-used-burlap-jute-bag',
    category: '2nd Jute Bags',
    subcategory: 'Recycled Commercial Sacks',
    capacity: '50 kg',
    dimensions: '94cm x 57cm',
    gsm: '320 GSM',
    description: 'Thoroughly inspected, cleaned, and sorted once-used Grade-A burlap jute bag. Provides budget-friendly packaging for grains, potatoes, onions, and sand.',
    features: [
      '100% Sorted & Free from Holes or Tears',
      'Cleaned & Odor-Inspected Material',
      'Ultra Economical Packaging Solution',
      'High Reusability Lifecycle'
    ],
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    inStock: true,
    minOrderQuantity: '1000 Bags',
    priceEstimate: 'Low-Cost Wholesale Rate',
    specifications: {
      material: 'Pre-Owned Grade-A Burlap Jute',
      weaveType: 'B-Twill / Plain Weave',
      color: 'Natural Brown',
      stitching: 'Inspected Bottom Stitch',
      grade: 'Sorted Second Hand Class A'
    }
  },
  {
    name: 'Sorted Heavy Duty 2nd Hand Agricultural Jute Sack',
    slug: 'sorted-heavy-duty-2nd-hand-agricultural-jute-sack',
    category: '2nd Jute Bags',
    subcategory: 'Pre-Owned Mandi Sacks',
    capacity: '50 kg / 100 kg',
    dimensions: '110cm x 68cm',
    gsm: '350 GSM',
    description: 'Sorted heavy-duty 2nd hand agricultural jute sack curated for APMC mandi farmers, sugar mills, and bulk commodity warehousing.',
    features: [
      'High Load Capacity for Heavy Produce',
      'Quality Graded by Hand Specialists',
      'Cost Reduction of up to 40% vs New Sacks',
      'Immediate Bulk Stock Availability'
    ],
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80',
    isFeatured: false,
    inStock: true,
    minOrderQuantity: '1000 Bags',
    priceEstimate: 'Mandi Budget Rate'
  },

  // --- PLASTIC ROLL (RENAMED FROM PLASTIC ROLLS) ---
  {
    name: 'HDPE / PP Woven Fabric Roll',
    slug: 'hdpe-pp-woven-fabric-roll',
    category: 'Plastic Roll',
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
    category: 'Plastic Roll',
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
    priceEstimate: 'Bulk Wholesale Pricing'
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
    priceEstimate: 'Direct Manufacturer Rate'
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
    features: ['Milky White High-Finish Fabric', 'Fine Weave Mesh Prevents Powder Leakage'],
    image: '/images/sri-krishna-bag.png',
    isFeatured: true,
    inStock: true,
    minOrderQuantity: '1000 Bags'
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
    minOrderQuantity: '500 Bags'
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
  }
];

const seedData = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/magarajothi_traders';
    await mongoose.connect(mongoUri);
    await Product.deleteMany({});
    const created = await Product.insertMany(sampleProducts);
    console.log(`✅ Successfully seeded ${created.length} products into MongoDB!`);
    process.exit(0);
  } catch (error) {
    console.warn(`⚠️ Seeding note: ${error.message}`);
    process.exit(0);
  }
};

if (require.main === module) seedData();
module.exports = { sampleProducts };
