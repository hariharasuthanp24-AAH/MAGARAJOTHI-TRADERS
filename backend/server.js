const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const { connectDB } = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing for frontend access
app.use(express.json()); // Parse incoming JSON requests
app.use(morgan('dev')); // Log HTTP requests

// Route Imports
const productRoutes = require('./routes/productRoutes');
const inquiryRoutes = require('./routes/inquiryRoutes');

// API Endpoints
app.use('/api/products', productRoutes);
app.use('/api/inquiries', inquiryRoutes);

// Health Check Route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Magarajothi Traders B2B E-Commerce API is running perfectly',
    status: 'Healthy',
    timestamp: new Date().toISOString(),
  });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    success: false,
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Magarajothi Traders Backend Server running on port ${PORT}`);
});
