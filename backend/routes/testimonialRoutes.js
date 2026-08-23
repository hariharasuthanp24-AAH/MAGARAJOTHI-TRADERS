const express = require('express');
const router = express.Router();
const { getTestimonials, createTestimonial } = require('../controllers/testimonialController');

router.route('/')
  .get(getTestimonials)
  .post(createTestimonial);

module.exports = router;
