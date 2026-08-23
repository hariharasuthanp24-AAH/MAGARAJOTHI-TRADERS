const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: ['Jute', 'Nano Bags', 'Jute Thread', '2nd Jute Bags', 'Plastic', 'Plastic Roll'],
    },
    subcategory: {
      type: String,
      default: 'Standard Eco Spec',
    },
    capacity: {
      type: String,
      default: '50kg',
    },
    dimensions: {
      type: String,
      default: '94cm x 57cm',
    },
    gsm: {
      type: String,
      default: 'High Burst Strength',
    },
    description: {
      type: String,
      required: true,
    },
    features: [
      {
        type: String,
      },
    ],
    image: {
      type: String,
      required: true,
      default: '/logo.png',
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    minOrderQuantity: {
      type: String,
      default: '500 Units',
    },
    priceEstimate: {
      type: String,
      default: 'Bulk Wholesale Pricing Available',
    },
    specifications: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', productSchema);
