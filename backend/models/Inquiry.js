const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    company: {
      type: String,
      trim: true,
      default: '',
    },
    productCategory: {
      type: String,
      enum: ['Jute', 'Gunny', 'Plastic', 'Plastic Rolls', 'General Inquiry'],
      default: 'General Inquiry',
    },
    productName: {
      type: String,
      default: 'General Inquiry',
    },
    quantity: {
      type: String,
      default: 'Bulk',
    },
    message: {
      type: String,
      required: [true, 'Inquiry message is required'],
    },
    status: {
      type: String,
      enum: ['New', 'Contacted', 'In Progress', 'Completed'],
      default: 'New',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Inquiry', inquirySchema);
