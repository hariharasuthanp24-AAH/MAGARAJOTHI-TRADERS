const Product = require('../models/Product');
const { sampleProducts } = require('../seed');
const { getIsConnected } = require('../config/db');

// @desc    Get all products (with category filter & featured option)
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
  try {
    const { category, featured, search } = req.query;

    if (getIsConnected()) {
      let query = {};
      if (category && category !== 'All') {
        query.category = category;
      }
      if (featured === 'true') {
        query.isFeatured = true;
      }
      if (search) {
        query.name = { $regex: search, $options: 'i' };
      }

      const products = await Product.find(query).sort({ createdAt: -1 });
      return res.status(200).json({
        success: true,
        count: products.length,
        data: products,
      });
    } else {
      // In-memory fallback
      let filtered = [...sampleProducts];

      if (category && category !== 'All') {
        filtered = filtered.filter(
          (p) => p.category.toLowerCase() === category.toLowerCase()
        );
      }
      if (featured === 'true') {
        filtered = filtered.filter((p) => p.isFeatured);
      }
      if (search) {
        const q = search.toLowerCase();
        filtered = filtered.filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q)
        );
      }

      return res.status(200).json({
        success: true,
        count: filtered.length,
        isFallback: true,
        data: filtered,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch products',
      error: error.message,
    });
  }
};

// @desc    Get single product by slug or ID
// @route   GET /api/products/:identifier
// @access  Public
const getProductByIdentifier = async (req, res) => {
  try {
    const { identifier } = req.params;

    if (getIsConnected()) {
      let product = await Product.findOne({ slug: identifier });
      if (!product && identifier.match(/^[0-9a-fA-F]{24}$/)) {
        product = await Product.findById(identifier);
      }

      if (!product) {
        return res.status(404).json({
          success: false,
          message: 'Product not found',
        });
      }

      return res.status(200).json({
        success: true,
        data: product,
      });
    } else {
      const product = sampleProducts.find(
        (p) => p.slug === identifier || p._id === identifier
      );

      if (!product) {
        return res.status(404).json({
          success: false,
          message: 'Product not found',
        });
      }

      return res.status(200).json({
        success: true,
        isFallback: true,
        data: product,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving product',
      error: error.message,
    });
  }
};

// @desc    Seed sample products into database
// @route   POST /api/products/seed
// @access  Public (for initial setup)
const seedProducts = async (req, res) => {
  try {
    if (!getIsConnected()) {
      return res.status(400).json({
        success: false,
        message: 'MongoDB is not connected. Seed operation requires DB connection.',
      });
    }

    await Product.deleteMany({});
    const created = await Product.insertMany(sampleProducts);

    res.status(201).json({
      success: true,
      message: `Seeded ${created.length} products successfully!`,
      data: created,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Seeding failed',
      error: error.message,
    });
  }
};

module.exports = {
  getProducts,
  getProductByIdentifier,
  seedProducts,
};
