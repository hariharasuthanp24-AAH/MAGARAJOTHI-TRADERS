const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const sampleProducts = [
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
    description: 'Weatherproof HDPE woven bag engineered for bulk fertilizer, chemical granules, and minerals transport. Sealed against moisture ingress.',
    features: [
      '100% Weather & Humidity Barrier',
      'UV Stabilized Polymer Blend',
      'Lightweight with Extreme Load Capacity',
      'Recyclable Polymer'
    ],
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
    isFeatured: false,
    inStock: true,
    minOrderQuantity: '2000 Bags',
    priceEstimate: 'Competitive Market Rate',
    specifications: {
      material: 'HDPE Woven Fabric',
      weaveType: 'Circular Woven',
      color: 'White / Green Accent',
      stitching: 'Heavy Duty Bottom Fold',
      grade: 'Industrial Polymer Grade'
    }
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
    features: [
      '8-Color Rotogravure Printing',
      'High Scratch & Water Resistance',
      'Side Gusseted Option for Easy Stacking',
      'Gleaming Gloss Finish'
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    inStock: true,
    minOrderQuantity: '3000 Bags',
    priceEstimate: 'Custom Print Quote',
    specifications: {
      material: 'BOPP Film + PP Woven Fabric',
      weaveType: 'Fine Mesh Laminated',
      color: 'Full Color Custom Graphic',
      stitching: 'Ultrasound Seams / Thread Hem',
      grade: 'Premium Retail Export'
    }
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
    description: 'Premium hydro-carbon free A-Twill Jute Bag specially processed for food-grade packaging. Ideal for exporting coffee beans, cocoa, cashew nuts, and high-value grains without chemical odor.',
    features: [
      '100% Biodegradable & Eco-Friendly',
      'Hydrocarbon-Free Processed (VOO / IJO Standards)',
      'High Tensile Safety Overhead Stitching',
      'Breathable Fiber Preserves Grain Freshness'
    ],
    image: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    inStock: true,
    minOrderQuantity: '500 Bags',
    priceEstimate: 'Direct Mill Wholesale',
    specifications: {
      material: '100% Pure Natural Jute Fiber',
      weaveType: 'A-Twill Weave',
      color: 'Natural Golden Brown',
      stitching: 'Herringbone Safety Stitching',
      grade: 'Export Quality Class A'
    }
  },
  {
    name: 'B-Twill Standard Heavy Grain Jute Sack',
    slug: 'b-twill-standard-grain-jute-sack',
    category: 'Jute',
    subcategory: 'Agricultural Sacks',
    capacity: '50 kg / 100 kg',
    dimensions: '112cm x 67.5cm',
    gsm: '380 GSM',
    description: 'The industry-standard B-Twill Jute Sack widely utilized across India and overseas for bulk packaging of rice, wheat, maize, pulses, and oilseeds.',
    features: [
      'Heavy-Duty Load Bearing Capacity',
      'Non-Slip Surface for Safe Warehousing',
      'Custom Mill Branding Available',
      'Reusable & 100% Compostable'
    ],
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    inStock: true,
    minOrderQuantity: '1000 Bags',
    priceEstimate: 'Mill Direct Rates',
    specifications: {
      material: '100% Natural Jute',
      weaveType: 'B-Twill 2/1 Weave',
      color: 'Natural Jute Tan',
      stitching: 'Double-Stitched Sides',
      grade: 'Standard Commercial Grade'
    }
  },
  {
    name: 'Organic Raw Coffee Bean Hessian Jute Bag',
    slug: 'organic-raw-coffee-bean-hessian-bag',
    category: 'Jute',
    subcategory: 'Specialty Export Bags',
    capacity: '60 kg',
    dimensions: '95cm x 65cm',
    gsm: '320 GSM',
    description: 'Breathable, eco-treated hessian jute bag crafted for single-origin coffee bean growers and exporters. Maintains bean moisture balance during long ocean transit.',
    features: [
      'High Air Permeability',
      'Zero Synthetic Odor',
      'Reinforced Overhead Stitching',
      'Fair-Trade Certified Sourcing'
    ],
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    isFeatured: false,
    inStock: true,
    minOrderQuantity: '500 Bags',
    priceEstimate: 'Export Rate Quotation',
    specifications: {
      material: 'Plain Weave Hessian Jute',
      weaveType: 'Hessian 9oz',
      color: 'Natural Eco Brown',
      stitching: 'Safety Hemmed Thread',
      grade: 'Specialty Coffee Grade'
    }
  },
  {
    name: 'Heavy-Duty Hessian Burlap Sandbag with Ties',
    slug: 'heavy-duty-hessian-sandbag',
    category: 'Jute',
    subcategory: 'Industrial Sandbags',
    capacity: '30 kg',
    dimensions: '76cm x 36cm',
    gsm: '300 GSM',
    description: 'Tough, untreated natural burlap sandbag reinforced with attached tie strings. Built for flood control, soil erosion control, and military barrier fortification.',
    features: [
      'Pre-Attached Tie Strings for Quick Sealing',
      'Heavy 10oz Burlap Fabric',
      'Absorbs Moisture & Holds Sand Securely',
      'Eco-Friendly Degradation'
    ],
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    isFeatured: false,
    inStock: true,
    minOrderQuantity: '500 Bags',
    priceEstimate: 'Bulk Discount Available',
    specifications: {
      material: 'Coarse Burlap Fiber',
      weaveType: 'Plain Weave 10oz',
      color: 'Earthy Tan',
      stitching: 'Poly-Cotton Thread',
      grade: 'Industrial & Military Grade'
    }
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
    description: 'Time-tested ultra-durable gunny bag designed for maximum weight capacity. Used extensively across APMC mandis, farmers, and rice mills for rugged transport.',
    features: [
      'Puncture Resistant Coarse Weave',
      'Supports Hook & Manual Handling',
      'Optimal Thermal Insulation for Produce',
      'Cost-Effective Bulk Storage'
    ],
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    inStock: true,
    minOrderQuantity: '500 Sacks',
    priceEstimate: 'APMC Mandi Wholesale Rate',
    specifications: {
      material: 'Coarse Natural Jute & Hemp Blend',
      weaveType: 'Heavy Plain Weave',
      color: 'Classic Gunny Dark Brown',
      stitching: 'Reinforced L-Stitch Bottom',
      grade: 'Heavy Duty Commercial'
    }
  },
  {
    name: 'Sugar Export Grade V-Twill Gunny Bag',
    slug: 'sugar-export-v-twill-gunny-bag',
    category: 'Gunny',
    subcategory: 'Sugar Mill Packaging',
    capacity: '50 kg',
    dimensions: '100cm x 60cm',
    gsm: '390 GSM',
    description: 'Calendered and smooth-finished V-Twill gunny sack tailored for sugar refineries and export houses. Minimizes sugar crystal seepage while maintaining seam integrity.',
    features: [
      'Calendered Surface Prevents Crystal Seepage',
      'Optional PE Inner Liner',
      'High Seam Bursting Strength',
      'Export Quality Finish'
    ],
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80',
    isFeatured: false,
    inStock: true,
    minOrderQuantity: '1000 Bags',
    priceEstimate: 'Factory Direct Rate',
    specifications: {
      material: 'High-Grade Jute Fiber',
      weaveType: 'V-Twill Weave',
      color: 'Natural Golden Gunny',
      stitching: 'Safety Folded Hem',
      grade: 'Sugar Mill Class A'
    }
  },
  {
    name: 'Binola Quality Spices & Peanut Gunny Sack',
    slug: 'binola-quality-spices-gunny-sack',
    category: 'Gunny',
    subcategory: 'Specialty Produce Bags',
    capacity: '50 kg',
    dimensions: '96.5cm x 67.5cm',
    gsm: '370 GSM',
    description: 'Specialized Binola weave gunny sack engineered for groundnuts, spices, potatoes, and onions. Ensures maximum airflow while preventing spillages.',
    features: [
      'High Air Permeability Prevents Crop Spoilage',
      'Friction & Tear Resistant',
      'Uniform Weight Distribution',
      'Reusable & Recyclable'
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    inStock: true,
    minOrderQuantity: '500 Bags',
    priceEstimate: 'Wholesale Market Rate',
    specifications: {
      material: '100% Pure Jute Yarn',
      weaveType: 'Binola Weave',
      color: 'Natural Golden Tan',
      stitching: 'Double Thread Side Stitching',
      grade: 'Premium Produce Grade'
    }
  },
  {
    name: 'Heavy Grain Commodity Burlap Gunny Sack',
    slug: 'heavy-grain-commodity-burlap-gunny-sack',
    category: 'Gunny',
    subcategory: 'Grain Transport Bags',
    capacity: '75 kg',
    dimensions: '110cm x 65cm',
    gsm: '400 GSM',
    description: 'Rugged coarse burlap gunny sack manufactured for heavy grain commodities, maize, pulses, and oilseeds. Superior friction resistance for high stacking.',
    features: [
      'Extremely Durable Heavy GSM Weave',
      'High Friction Coarse Texture Stacks High',
      'Breathable Fiber Protects Harvest',
      'Long Service Life'
    ],
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    isFeatured: false,
    inStock: true,
    minOrderQuantity: '500 Sacks',
    priceEstimate: 'Direct Wholesale Quotation',
    specifications: {
      material: 'Heavy Coarse Jute',
      weaveType: 'Plain Heavy Duty',
      color: 'Dark Gunny Brown',
      stitching: 'Double Safety Bottom Stitch',
      grade: 'Commercial Grain Grade'
    }
  }
];

const seedData = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/magarajothi_traders';
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB for seeding...');

    await Product.deleteMany({});
    console.log('Existing products cleared.');

    const created = await Product.insertMany(sampleProducts);
    console.log(`✅ Successfully seeded ${created.length} products into MongoDB database!`);
    process.exit(0);
  } catch (error) {
    console.warn(`⚠️ Seeding note: ${error.message}`);
    process.exit(0);
  }
};

if (require.main === module) {
  seedData();
}

module.exports = { sampleProducts };
