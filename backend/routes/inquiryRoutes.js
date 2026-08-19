const express = require('express');
const router = express.Router();
const {
  createInquiry,
  getInquiries,
} = require('../controllers/inquiryController');

router.post('/', createInquiry);
router.get('/', getInquiries);

module.exports = router;
