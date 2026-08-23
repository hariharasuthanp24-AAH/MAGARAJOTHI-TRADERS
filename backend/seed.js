const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const sampleProducts = [
  // --- 1. CATEGORY: JUTE (JUTE BAGS) ---
  {
    name: '50kg Jute Bag (A-Twill)',
    slug: '50kg-jute-bag-a-twill',
    category: 'Jute',
    subcategory: 'Food Grade Export Sacks',
    capacity: '50 kg',
    dimensions: '94cm x 57cm',
    gsm: '330 GSM',
    description: 'Premium hydrocarbon-free A-Twill Jute Bag specially processed for food-grade agricultural packaging. Ideal for exporting coffee beans, cocoa, cashew nuts, and high-value grains.',
    features: [
      '100% Biodegradable & Eco-Friendly',
      'Hydrocarbon-Free Processed (VO Standard)',
      'High Bursting Strength & Seam Safety',
      'Custom Mill Brand Printing Available'
    ],
    image: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    inStock: true,
    minOrderQuantity: '500 Bags',
    priceEstimate: 'Direct Mill Wholesale Rate',
    specifications: {
      material: '100% Natural Raw Jute',
      weaveType: 'A-Twill Food Grade',
      color: 'Golden Natural Jute',
      stitching: 'Safety Heracle Stitching',
      grade: 'Export Class A'
    }
  },
  {
    name: '75kg Heavy-Duty Jute Bag (B-Twill)',
    slug: '75kg-heavy-duty-jute-bag-b-twill',
    category: 'Jute',
    subcategory: 'Agricultural Bulk Sacks',
    capacity: '75 kg / 100 kg',
    dimensions: '112cm x 67.5cm',
    gsm: '380 GSM',
    description: 'Heavy-duty B-Twill Jute Sack widely utilized across India for high-density agricultural storage. Manufactured for rice mills, wheat processing, and bulk sugar transport.',
    features: [
      'Heavy Load Capacity for Dense Grain',
      'Non-Slip Stacking Texture',
      'Breathable Mesh Structure',
      'Re-usable Lifecycle'
    ],
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    inStock: true,
    minOrderQuantity: '1000 Bags',
    priceEstimate: 'Factory Direct Price',
    specifications: {
      material: 'Heavy-Grain Jute Fiber',
      weaveType: 'B-Twill Commercial',
      color: 'Natural Brown',
      stitching: 'Double Hemmed Mouth',
      grade: 'Industrial Mandi Grade'
    }
  },
  {
    name: '25kg Jute Bag (Hessian Cloth)',
    slug: '25kg-jute-bag-hessian-cloth',
    category: 'Jute',
    subcategory: 'Lightweight Retail Sacks',
    capacity: '25 kg',
    dimensions: '75cm x 48cm',
    gsm: '290 GSM',
    description: 'Lightweight plain-weave Hessian Jute Bag crafted for 25kg commercial retail packing of pulses, seeds, pulses, and organic grains.',
    features: [
      'Fine Uniform Mesh Pattern',
      'Smooth Hand Feel & Clean Appearance',
      'Eco-Friendly Organic Packaging',
      'Custom Screen Logo Printing'
    ],
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    isFeatured: false,
    inStock: true,
    minOrderQuantity: '500 Bags',
    priceEstimate: 'Retail Wholesale Rate',
    specifications: {
      material: 'Hessian Jute Cloth',
      weaveType: 'Plain Weave',
      color: 'Light Golden Brown',
      stitching: 'Overlock Safety Stitch',
      grade: 'Retail Grade'
    }
  },

  // --- 2. CATEGORY: NANO BAGS (COMPACT JUTE) ---
  {
    name: '26kg Nano Jute Bag',
    slug: '26kg-nano-jute-bag',
    category: 'Nano Bags',
    subcategory: 'Medium Eco Bags',
    capacity: '26 kg',
    dimensions: '55cm x 38cm x 15cm',
    gsm: '310 GSM',
    description: 'Medium-sized laminated nano jute bag engineered for 26kg grain packaging, mandi seed distribution, and sturdy commercial retail handles.',
    features: [
      'Moisture-Resistant Inner Lamination',
      'Padded Luxury Rope Handles',
      'High Tensile Bursting Resistance',
      'Reusable Commercial Bag'
    ],
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    inStock: true,
    minOrderQuantity: '500 Bags',
    priceEstimate: 'Direct Manufacturer Rate',
    specifications: {
      material: 'Laminated Natural Jute',
      weaveType: 'Fine Weave',
      color: 'Natural Jute / Black Trim',
      stitching: 'Heavy Duty Edge Stitching',
      grade: 'Commercial Retail'
    }
  },
  {
    name: '15kg Nano Jute Bag',
    slug: '15kg-nano-jute-bag',
    category: 'Nano Bags',
    subcategory: 'Compact Grain Pouches',
    capacity: '15 kg',
    dimensions: '40cm x 30cm x 12cm',
    gsm: '290 GSM',
    description: 'Compact 15kg nano jute bag ideal for specialized organic rice, pulses, dry fruits, and promotional seed dispatches.',
    features: [
      'Laminated Interior Barrier',
      'Comfortable Carrying Handles',
      'Eco-Friendly Brand Promotion',
      'Durable Load Capacity'
    ],
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    inStock: true,
    minOrderQuantity: '500 Bags',
    priceEstimate: 'Wholesale Unit Rate',
    specifications: {
      material: 'Laminated Hessian Jute',
      weaveType: 'Plain Weave',
      color: 'Natural Golden Jute',
      stitching: 'Reinforced Handles',
      grade: 'Premium Eco Grade'
    }
  },
  {
    name: '10kg Nano Jute Bag',
    slug: '10kg-nano-jute-bag',
    category: 'Nano Bags',
    subcategory: 'Mini Eco Pouches',
    capacity: '10 kg',
    dimensions: '30cm x 22cm x 10cm',
    gsm: '280 GSM',
    description: 'Stylish 10kg mini nano jute bag designed for premium retail rice packaging, gift hampers, and agricultural sample dispatches.',
    features: [
      'Moisture-Proof Lamination Layer',
      'Compact & Lightweight Design',
      'High Visual Aesthetics for Shelves',
      'Custom Brand Flexo Printing'
    ],
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    isFeatured: false,
    inStock: true,
    minOrderQuantity: '500 Bags',
    priceEstimate: 'Factory Direct Price',
    specifications: {
      material: 'Laminated Natural Jute',
      weaveType: 'Fine Plain Weave',
      color: 'Natural Jute',
      stitching: 'Padded Rope Handle',
      grade: 'Mini Retail Grade'
    }
  },

  // --- 3. CATEGORY: JUTE THREAD (TWINE/YARN) ---
  {
    name: '3 Tier Jute Thread (Spool)',
    slug: '3-tier-jute-thread-spool',
    category: 'Jute Thread',
    subcategory: 'Stitching & Tying Twine',
    capacity: '1 kg / 5 kg Spool',
    dimensions: '3-Ply Standard Gauge',
    gsm: 'High Tensile Twine',
    description: 'Strong 3-tier (3-ply) natural jute thread spool engineered for manual and portable machine mouth-stitching of agricultural jute sacks and bag sealing.',
    features: [
      'High Tensile Breaking Strength',
      'Uniform Thickness Without Knots',
      '100% Natural Raw Jute Fiber',
      'Smooth Feed in Stitching Machines'
    ],
    image: 'https://images.unsplash.com/photo-1606760227091-3dd850d97f1d?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    inStock: true,
    minOrderQuantity: '50 Spools',
    priceEstimate: 'Direct Mill Rate',
    specifications: {
      material: '100% Pure Raw Jute',
      weaveType: '3-Ply Twisted Twine',
      color: 'Natural Golden Brown',
      stitching: 'Thread Spool',
      grade: 'Industrial Stitching Grade'
    }
  },
  {
    name: '5 Tier Industrial Jute Thread',
    slug: '5-tier-industrial-jute-thread',
    category: 'Jute Thread',
    subcategory: 'Heavy Duty Yarn Roll',
    capacity: '5 kg / 25 kg Roll',
    dimensions: '5-Ply Heavy Gauge',
    gsm: 'Industrial Heavy Twine',
    description: 'Heavy-gauge 5-tier (5-ply) industrial jute yarn roll manufactured for heavy bale binding, agricultural crop trellising, and high-tension sack stitching.',
    features: [
      'Maximum Seam Hold Capacity',
      'Moisture Absorbing & Friction Resistant',
      'Continuous Length Spool Roll',
      'Soil-Safe Biodegradable'
    ],
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    inStock: true,
    minOrderQuantity: '100 kg',
    priceEstimate: 'Wholesale Yarn Rate',
    specifications: {
      material: 'Raw Jute Yarn',
      weaveType: '5-Ply Twisted Yarn',
      color: 'Dark Natural Brown',
      stitching: 'Bale Binding Spool',
      grade: 'Heavy Industrial Class'
    }
  },
  {
    name: 'Normal Jute Thread / Twine',
    slug: 'normal-jute-thread-twine',
    category: 'Jute Thread',
    subcategory: 'General Packaging Twine',
    capacity: '500g / 1kg Ball',
    dimensions: '2-Ply Standard Twine',
    gsm: 'Standard Packaging Twine',
    description: 'Versatile 2-ply normal jute twine ball for general commercial packaging, parcel tying, craft applications, and retail bundling.',
    features: [
      'Soft & Easy to Tie',
      'Eco-Friendly Natural Twine',
      'Economical Bulk Packaging Solution',
      'Smooth Surface Finish'
    ],
    image: 'https://images.unsplash.com/photo-1606760227091-3dd850d97f1d?auto=format&fit=crop&w=800&q=80',
    isFeatured: false,
    inStock: true,
    minOrderQuantity: '50 Balls',
    priceEstimate: 'Bulk Twine Rate',
    specifications: {
      material: 'Natural Raw Jute',
      weaveType: '2-Ply Twine Ball',
      color: 'Natural Brown',
      stitching: 'General Binding',
      grade: 'Commercial Class'
    }
  },

  // --- 4. CATEGORY: 2ND JUTE BAGS (USED/GRADE-A) ---
  {
    name: '50kg 2nd Hand Jute Bag (Once-Used, Cleaned)',
    slug: '50kg-2nd-hand-jute-bag',
    category: '2nd Jute Bags',
    subcategory: 'Recycled Commercial Sacks',
    capacity: '50 kg',
    dimensions: '94cm x 57cm',
    gsm: '320 GSM',
    description: 'Thoroughly inspected, cleaned, and sorted once-used Grade-A burlap jute bag. Offers budget-friendly packaging for grains, potatoes, onions, and sand storage.',
    features: [
      '100% Hand-Sorted & Tear Inspected',
      'Cleaned & Odor-Free Material',
      'Up to 40% Cost Savings vs New Sacks',
      'High Reusability Lifecycle'
    ],
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    inStock: true,
    minOrderQuantity: '1000 Bags',
    priceEstimate: 'Low-Cost Mandi Rate',
    specifications: {
      material: 'Pre-Owned Burlap Jute',
      weaveType: 'B-Twill / Plain Weave',
      color: 'Natural Brown',
      stitching: 'Inspected Bottom Stitch',
      grade: 'Grade-A Sorted Second Hand'
    }
  },
  {
    name: '25kg 2nd Hand Jute Bag (Once-Used, Cleaned)',
    slug: '25kg-2nd-hand-jute-bag',
    category: '2nd Jute Bags',
    subcategory: 'Recycled Light Sacks',
    capacity: '25 kg',
    dimensions: '75cm x 48cm',
    gsm: '290 GSM',
    description: 'Cleaned once-used 25kg second-hand jute bag sorted for APMC mandi merchants, seed dealers, and commercial commodity storage.',
    features: [
      'Rigorously Hand-Sorted Quality',
      'Clean Interior Free from Debris',
      'Budget-Friendly Wholesale Supply',
      'Immediate Stock Availability'
    ],
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    inStock: true,
    minOrderQuantity: '1000 Bags',
    priceEstimate: 'Economical Mandi Price',
    specifications: {
      material: 'Clean Used Jute Fiber',
      weaveType: 'Plain Weave',
      color: 'Natural Light Brown',
      stitching: 'Inspected Seams',
      grade: 'Grade-A Used'
    }
  },

  // --- 5. CATEGORY: PLASTIC (WOVEN GUNNY BAGS) ---
  {
    name: 'Laminated Plastic Gunny Bag (Moisture Resistant)',
    slug: 'laminated-plastic-gunny-bag',
    category: 'Plastic',
    subcategory: 'Laminated Polymer Sacks',
    capacity: '50 kg',
    dimensions: '90cm x 55cm',
    gsm: '85 GSM',
    description: 'Heavy-duty HDPE/PP woven plastic gunny bag with inner moisture-proof lamination. Perfect for animal feed, fertilizer, sugar, and flour packaging.',
    features: [
      '100% Waterproof & Moisture Resistant',
      'UV-Treated Outer Fabric for Outdoor Stacking',
      'High Tensile Seam Burst Strength',
      'Custom Multicolor Flexo Printing'
    ],
    image: '/images/Gemini_Generated_Image_guy2urguy2urguy2.png',
    isFeatured: true,
    inStock: true,
    minOrderQuantity: '1000 Bags',
    priceEstimate: 'Direct Factory Rate',
    specifications: {
      material: 'HDPE/PP Woven Polymer',
      weaveType: 'Circular Laminated Mesh',
      color: 'White / Yellow / Custom',
      stitching: 'Bottom Fold Stitch',
      grade: 'Industrial Feed Grade'
    }
  },
  {
    name: 'Unlaminated Plastic Gunny Bag (Breathable)',
    slug: 'unlaminated-plastic-gunny-bag',
    category: 'Plastic',
    subcategory: 'Breathable Woven Sacks',
    capacity: '25 kg / 50 kg',
    dimensions: '85cm x 50cm',
    gsm: '75 GSM',
    description: 'Standard unlaminated HDPE/PP woven plastic gunny bag offering breathable ventilation for grains, pulses, potatoes, and general commodities.',
    features: [
      'Breathable Mesh Pattern Prevents Sweat',
      'Puncture Resistant Polymer Weave',
      'Lightweight & High Strength',
      'Cost-Effective Packaging'
    ],
    image: '/images/sri-krishna-bag.png',
    isFeatured: true,
    inStock: true,
    minOrderQuantity: '1000 Bags',
    priceEstimate: 'Wholesale Unit Rate',
    specifications: {
      material: 'Virgin HDPE Polymer',
      weaveType: 'Unlaminated Circular Mesh',
      color: 'Milky White',
      stitching: 'Single / Double Stitch',
      grade: 'Standard Grain Sack'
    }
  },
  {
    name: 'Custom Printed Plastic Gunny Bag (Multicolor Flexo)',
    slug: 'custom-printed-plastic-gunny-bag',
    category: 'Plastic',
    subcategory: 'Branded Commercial Sacks',
    capacity: '25 kg / 50 kg',
    dimensions: '90cm x 55cm',
    gsm: '90 GSM',
    description: 'High-definition flexo printed HDPE woven plastic gunny bag customized with client mill logo, product details, and branding graphics.',
    features: [
      'High-Resolution Flexo Brand Printing',
      'Custom Colors & Brand Artwork',
      'High Load Bearing Capacity',
      'Durable Gloss / Matte Finish'
    ],
    image: '/images/Gemini_Generated_Image_guy2urguy2urguy2.png',
    isFeatured: false,
    inStock: true,
    minOrderQuantity: '2000 Bags',
    priceEstimate: 'Custom Print Quote',
    specifications: {
      material: 'PP/HDPE Laminated Woven',
      weaveType: 'Flexo Printed Mesh',
      color: 'Custom Multicolor',
      stitching: 'Reinforced Bottom Seam',
      grade: 'Custom Brand Grade'
    }
  },

  // --- 6. CATEGORY: PLASTIC ROLL (PP/HDPE FABRIC) ---
  {
    name: 'Laminated Plastic Roll (Weatherproof)',
    slug: 'laminated-plastic-roll',
    category: 'Plastic Roll',
    subcategory: 'Weatherproof Fabric Rolls',
    capacity: 'Custom Length / Bulk',
    dimensions: 'Width: 48 to 72 Inches',
    gsm: '90 - 140 GSM',
    description: 'Poly-laminated weather-resistant PP woven fabric roll. Provides 100% moisture protection for custom bag manufacturing, tarpaulins, and export coverings.',
    features: [
      'Inner LDPE Lamination Barrier',
      '100% Waterproof & Weatherproof',
      'High Tear Resistance under Heavy Tension',
      'Multi-Color Options (White, Yellow, Green)'
    ],
    image: '/images/pp plastic roll white,yellow,green,.jpg',
    isFeatured: true,
    inStock: true,
    minOrderQuantity: '1 Roll / 500 Meters',
    priceEstimate: 'Factory Direct Roll Rate',
    specifications: {
      material: 'HDPE/PP Polymer',
      print: 'Solid White, Yellow, Green',
      usage: 'Export Packaging, Heavy-Duty Sacks'
    }
  },
  {
    name: 'Unlaminated Plastic Roll (Standard Woven)',
    slug: 'unlaminated-plastic-roll',
    category: 'Plastic Roll',
    subcategory: 'Standard Woven Rolls',
    capacity: 'Custom Length / Bulk',
    dimensions: 'Width: 24 to 48 Inches',
    gsm: '80 - 120 GSM',
    description: 'High-density unlaminated PP woven fabric roll featuring a distinct yellow and red stripe pattern. Ideal for automated bag stitching machines and industrial wrapping.',
    features: [
      'Distinct Yellow & Red Stripe Pattern',
      'High Tensile Polypropylene Woven Mesh',
      'Ideal for Automatic Bag Stitching Machines',
      'UV Stabilized Polymer Weave'
    ],
    image: '/images/polypropylene-woven-sack-fabric-roll yellow wit red.jpg',
    isFeatured: true,
    inStock: true,
    minOrderQuantity: '1 Roll / 500 Meters',
    priceEstimate: 'Bulk Roll Rate',
    specifications: {
      material: 'PP Woven Fabric',
      print: 'Yellow with Red Stripe',
      usage: 'Industrial Wrapping, Custom Bags'
    }
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
