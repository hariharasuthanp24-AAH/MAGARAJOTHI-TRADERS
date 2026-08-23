const Testimonial = require('../models/Testimonial');

// Initial seed testimonials fallback
const sampleTestimonials = [
  {
    _id: 't1',
    name: 'K. Rajasekaran',
    company: 'Sri Krishna Rice Mill, Thanjavur',
    rating: 5,
    text: 'Magarajothi Traders has supplied us with 50kg Heavy Grain B-Twill Jute Bags for over 15 years. Their hydrocarbon-free quality and direct mill rates are unbeatable.',
    isApproved: true
  },
  {
    _id: 't2',
    name: 'P. Arumugam',
    company: 'Arumugam Oil Mills & Exporters',
    rating: 5,
    text: 'Outstanding service and immediate warehouse dispatch from Dharapuram. The custom logo printing on our jute bags was crisp and professional.',
    isApproved: true
  },
  {
    _id: 't3',
    name: 'M. Senthil Kumar',
    company: 'Senthil Agro Commodities, Tirupur',
    rating: 5,
    text: 'We order Grade-A 2nd Jute Bags and HDPE Fabric Rolls in bulk. 40+ years of trust and reliability is reflected in every consignment.',
    isApproved: true
  }
];

let inMemoryTestimonials = [...sampleTestimonials];

// @desc    Get all approved testimonials
// @route   GET /api/testimonials
// @access  Public
const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ isApproved: true }).sort({ createdAt: -1 });
    if (testimonials.length > 0) {
      return res.status(200).json({ success: true, count: testimonials.length, data: testimonials });
    }
    return res.status(200).json({ success: true, count: inMemoryTestimonials.length, data: inMemoryTestimonials });
  } catch (error) {
    console.error('Mongo Fetch Fallback for Testimonials:', error.message);
    const approved = inMemoryTestimonials.filter(t => t.isApproved);
    return res.status(200).json({ success: true, count: approved.length, data: approved });
  }
};

// @desc    Create new testimonial / exit feedback with auto-approval for 4.5+ star ratings
// @route   POST /api/testimonials
// @access  Public
const createTestimonial = async (req, res) => {
  try {
    const { name, company, rating, text } = req.body;

    if (!text || text.trim() === '') {
      return res.status(400).json({ success: false, message: 'Feedback text is required' });
    }

    const numericRating = Number(rating) || 5;
    const feedbackText = text.trim();

    // Auto-approval logic: rating >= 4.5 AND text length > 10 chars
    const autoApproved = numericRating >= 4.5 && feedbackText.length > 10;

    const newTestimonialData = {
      name: name && name.trim() !== '' ? name.trim() : 'Verified Client',
      company: company && company.trim() !== '' ? company.trim() : 'Agricultural Mill & Exporter',
      rating: numericRating,
      text: feedbackText,
      isApproved: autoApproved,
      createdAt: new Date()
    };

    try {
      const created = await Testimonial.create(newTestimonialData);
      return res.status(201).json({
        success: true,
        message: autoApproved ? 'Feedback published to testimonials successfully!' : 'Feedback submitted for review.',
        data: created
      });
    } catch (dbErr) {
      // In-memory fallback if MongoDB connection is pending
      const inMemItem = { _id: Date.now().toString(), ...newTestimonialData };
      inMemoryTestimonials.unshift(inMemItem);
      return res.status(201).json({
        success: true,
        message: autoApproved ? 'Feedback published to testimonials successfully!' : 'Feedback submitted for review.',
        data: inMemItem
      });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getTestimonials,
  createTestimonial
};
