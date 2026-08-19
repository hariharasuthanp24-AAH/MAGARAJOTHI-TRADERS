const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProductByIdentifier,
  seedProducts,
} = require('../controllers/productController');

router.get('/', getProducts);
router.get('/:identifier', getProductByIdentifier);
router.post('/seed', seedProducts);

module.exports = router;
