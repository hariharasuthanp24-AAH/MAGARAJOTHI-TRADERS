const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const sampleProducts = [
  // JUTE BAGS
  {
    name: "50kg Jute Bag",
    slug: "50kg-jute-bag",
    category: "Jute",
    capacity: "50kg",
    dimensions: "94cm x 57cm",
    gsm: "330 GSM Food Grade",
    description: "Premium 50kg capacity natural jute bag, ideal for agricultural commodities and export.",
    image: "/logo.png",
    isFeatured: true,
    inStock: true,
    minOrderQuantity: "500 Bags",
    features: ["100% Biodegradable & Eco-Friendly", "Hydrocarbon-Free Processed", "High Bursting Strength"]
  },
  {
    name: "75kg Jute Bag",
    slug: "75kg-jute-bag",
    category: "Jute",
    capacity: "75kg",
    dimensions: "112cm x 67.5cm",
    gsm: "380 GSM Heavy Duty",
    description: "Heavy-duty 75kg capacity natural jute bag designed for high burst resistance.",
    image: "/logo.png",
    isFeatured: true,
    inStock: true,
    minOrderQuantity: "1000 Bags",
    features: ["Heavy Load Capacity", "Non-Slip Stacking Texture", "Breathable Mesh Structure"]
  },
  {
    name: "25kg Jute Bag",
    slug: "25kg-jute-bag",
    category: "Jute",
    capacity: "25kg",
    dimensions: "75cm x 48cm",
    gsm: "290 GSM Plain Weave",
    description: "Compact 25kg capacity natural jute bag for retail and wholesale packaging.",
    image: "/logo.png",
    isFeatured: true,
    inStock: true,
    minOrderQuantity: "500 Bags",
    features: ["Fine Uniform Mesh", "Smooth Hand Feel", "Eco-Friendly Organic Packaging"]
  },

  // NANO BAGS
  {
    name: "26kg Nano Bag",
    slug: "26kg-nano-bag",
    category: "Nano Bags",
    capacity: "26kg",
    dimensions: "55cm x 38cm x 15cm",
    gsm: "310 GSM Laminated",
    description: "Compact and durable 26kg nano jute bag for specialized packaging needs.",
    image: "/logo.png",
    isFeatured: true,
    inStock: true,
    minOrderQuantity: "500 Bags",
    features: ["Moisture-Resistant Lamination", "Padded Luxury Rope Handles", "High Seam Strength"]
  },
  {
    name: "15kg Nano Bag",
    slug: "15kg-nano-bag",
    category: "Nano Bags",
    capacity: "15kg",
    dimensions: "40cm x 30cm x 12cm",
    gsm: "290 GSM Compact",
    description: "15kg nano bag offering eco-friendly packaging for smaller commodity volumes.",
    image: "/logo.png",
    isFeatured: false,
    inStock: true,
    minOrderQuantity: "500 Bags",
    features: ["Laminated Interior Barrier", "Comfortable Carrying Handles", "Brand Promotion Ready"]
  },
  {
    name: "10kg Nano Bag",
    slug: "10kg-nano-bag",
    category: "Nano Bags",
    capacity: "10kg",
    dimensions: "30cm x 22cm x 10cm",
    gsm: "280 GSM Mini",
    description: "10kg nano bag perfect for retail display and consumer-sized agricultural products.",
    image: "/logo.png",
    isFeatured: false,
    inStock: true,
    minOrderQuantity: "500 Bags",
    features: ["Moisture-Proof Barrier", "Lightweight Retail Design", "Custom Printing Ready"]
  },

  // JUTE THREAD
  {
    name: "3 Tier Jute Thread",
    slug: "3-tier-jute-thread",
    category: "Jute Thread",
    capacity: "Spool",
    dimensions: "3-Ply Standard Gauge",
    gsm: "High Tensile Twine",
    description: "High-strength 3-tier jute thread for bag stitching and industrial tying applications.",
    image: "/logo.png",
    isFeatured: true,
    inStock: true,
    minOrderQuantity: "50 Spools",
    features: ["High Breaking Strength", "Knot-Free Uniform Gauge", "100% Natural Raw Jute"]
  },
  {
    name: "5 Tier Jute Thread",
    slug: "5-tier-jute-thread",
    category: "Jute Thread",
    capacity: "Spool",
    dimensions: "5-Ply Heavy Gauge",
    gsm: "Industrial Heavy Twine",
    description: "Extra-strong 5-tier industrial jute thread for heavy-duty sealing.",
    image: "/logo.png",
    isFeatured: false,
    inStock: true,
    minOrderQuantity: "100 kg",
    features: ["Maximum Seam Hold", "Moisture Absorbing", "Soil-Safe Biodegradable"]
  },
  {
    name: "Normal Jute Thread",
    slug: "normal-jute-thread",
    category: "Jute Thread",
    capacity: "Spool",
    dimensions: "2-Ply Twine",
    gsm: "Standard Twine",
    description: "Standard jute twine for general purpose tying and packaging.",
    image: "/logo.png",
    isFeatured: false,
    inStock: true,
    minOrderQuantity: "50 Balls",
    features: ["Easy to Tie", "Eco-Friendly Natural Twine", "Economical Packaging"]
  },

  // 2ND HAND JUTE BAGS
  {
    name: "50kg 2nd Hand Jute Bag",
    slug: "50kg-2nd-hand-jute-bag",
    category: "2nd Jute Bags",
    capacity: "50kg",
    dimensions: "94cm x 57cm",
    gsm: "320 GSM Sorted",
    description: "Grade-A, once-used 50kg jute bag. Rigorously inspected and cleaned for cost-effective storage.",
    image: "/logo.png",
    isFeatured: true,
    inStock: true,
    minOrderQuantity: "1000 Bags",
    features: ["100% Hand-Sorted & Tear Inspected", "Cleaned & Odor-Free", "Up to 40% Cost Savings"]
  },
  {
    name: "25kg 2nd Hand Jute Bag",
    slug: "25kg-2nd-hand-jute-bag",
    category: "2nd Jute Bags",
    capacity: "25kg",
    dimensions: "75cm x 48cm",
    gsm: "290 GSM Sorted",
    description: "Grade-A, once-used 25kg jute bag providing significant cost savings for bulk handlers.",
    image: "/logo.png",
    isFeatured: false,
    inStock: true,
    minOrderQuantity: "1000 Bags",
    features: ["Hand-Sorted Quality", "Clean Interior", "Immediate Stock Availability"]
  },

  // PLASTIC
  {
    name: "Laminated Plastic Bag",
    slug: "laminated-plastic-bag",
    category: "Plastic",
    capacity: "Custom",
    dimensions: "90cm x 55cm",
    gsm: "85 GSM Laminated",
    description: "Weather-resistant laminated plastic woven bag ensuring maximum moisture protection.",
    image: "/logo.png",
    isFeatured: true,
    inStock: true,
    minOrderQuantity: "1000 Bags",
    features: ["100% Moisture Proof", "UV Treated Outer Layer", "High Seam Strength"]
  },
  {
    name: "Unlaminated Plastic Bag",
    slug: "unlaminated-plastic-bag",
    category: "Plastic",
    capacity: "Custom",
    dimensions: "85cm x 50cm",
    gsm: "75 GSM Breathable",
    description: "Breathable unlaminated plastic woven bag for commodities requiring air circulation.",
    image: "/logo.png",
    isFeatured: false,
    inStock: true,
    minOrderQuantity: "1000 Bags",
    features: ["Breathable Mesh Pattern", "Puncture Resistant Polymer", "Lightweight & High Strength"]
  },
  {
    name: "Printed Plastic Bag",
    slug: "printed-plastic-bag",
    category: "Plastic",
    capacity: "Custom",
    dimensions: "90cm x 55cm",
    gsm: "90 GSM Flexo Printed",
    description: "Custom multi-color printed plastic gunny bag for strong brand visibility.",
    image: "/logo.png",
    isFeatured: true,
    inStock: true,
    minOrderQuantity: "2000 Bags",
    features: ["High Resolution Flexo Printing", "Custom Colors & Artwork", "High Load Capacity"]
  },

  // PLASTIC ROLL
  {
    name: "Laminated Plastic Roll",
    slug: "laminated-plastic-roll",
    category: "Plastic Roll",
    capacity: "Bulk Roll",
    dimensions: "Width: 48 - 72 Inches",
    gsm: "90 - 140 GSM",
    description: "Continuous laminated plastic fabric roll for custom industrial wrapping.",
    image: "/logo.png",
    isFeatured: true,
    inStock: true,
    minOrderQuantity: "1 Roll / 500 Meters",
    features: ["100% Waterproof Barrier", "High Tear Resistance", "Multi-Color Options"]
  },
  {
    name: "Unlaminated Plastic Roll",
    slug: "unlaminated-plastic-roll",
    category: "Plastic Roll",
    capacity: "Bulk Roll",
    dimensions: "Width: 24 - 48 Inches",
    gsm: "80 - 120 GSM",
    description: "High-tensile unlaminated plastic woven fabric roll.",
    image: "/logo.png",
    isFeatured: false,
    inStock: true,
    minOrderQuantity: "1 Roll / 500 Meters",
    features: ["Yellow & Red Stripe Pattern", "High Tensile PP Woven Mesh", "UV Stabilized Polymer"]
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
