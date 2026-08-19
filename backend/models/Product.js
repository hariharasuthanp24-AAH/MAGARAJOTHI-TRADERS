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
      enum: ['Jute', 'Gunny', 'Plastic'],
    },
    subcategory: {
      type: String,
      default: 'Standard',
    },
    capacity: {
      type: String,
      default: '50 kg',
    },
    dimensions: {
      type: String,
      default: '94cm x 57cm',
    },
    gsm: {
      type: String,
      default: '300 GSM',
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
      material: String,
      weaveType: String,
      color: String,
      stitching: String,
      grade: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', productSchema);
