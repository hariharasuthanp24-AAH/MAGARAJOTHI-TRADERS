const Inquiry = require('../models/Inquiry');
const { getIsConnected } = require('../config/db');

// In-memory array store for inquiries if DB is disconnected during demo
const localInquiriesStore = [];

// @desc    Submit a new customer inquiry
// @route   POST /api/inquiries
// @access  Public
const createInquiry = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      productCategory,
      productName,
      quantity,
      message,
    } = req.body;

    // Basic Validation
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: Name, Email, Phone, and Message.',
      });
    }

    const inquiryPayload = {
      name,
      email,
      phone,
      company: company || '',
      productCategory: productCategory || 'General Inquiry',
      productName: productName || 'General Inquiry',
      quantity: quantity || 'Bulk',
      message,
      status: 'New',
      createdAt: new Date(),
    };

    if (getIsConnected()) {
      const newInquiry = await Inquiry.create(inquiryPayload);
      return res.status(201).json({
        success: true,
        message: 'Thank you! Your requirement inquiry has been submitted successfully. Our trade representative will contact you shortly.',
        data: newInquiry,
      });
    } else {
      // Save to local memory store
      const mockSaved = {
        _id: 'INQ_' + Date.now(),
        ...inquiryPayload,
      };
      localInquiriesStore.unshift(mockSaved);

      return res.status(201).json({
        success: true,
        message: 'Thank you! Your requirement inquiry has been submitted successfully. Our trade representative will contact you shortly.',
        isFallback: true,
        data: mockSaved,
      });
    }
  } catch (error) {
    console.error('Error in createInquiry:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process your inquiry. Please try again or contact us directly.',
      error: error.message,
    });
  }
};

// @desc    Get all inquiries (Admin view)
// @route   GET /api/inquiries
// @access  Public (for demo purpose)
const getInquiries = async (req, res) => {
  try {
    if (getIsConnected()) {
      const inquiries = await Inquiry.find().sort({ createdAt: -1 });
      return res.status(200).json({
        success: true,
        count: inquiries.length,
        data: inquiries,
      });
    } else {
      return res.status(200).json({
        success: true,
        count: localInquiriesStore.length,
        isFallback: true,
        data: localInquiriesStore,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching inquiries',
      error: error.message,
    });
  }
};

module.exports = {
  createInquiry,
  getInquiries,
};
