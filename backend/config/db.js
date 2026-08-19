const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/magarajothi_traders';
    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
    });

    isConnected = true;
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.warn(`⚠️ MongoDB Connection Warning: ${error.message}`);
    console.log("ℹ️ Server running with in-memory catalog fallback mode for immediate preview.");
    isConnected = false;
    return null;
  }
};

const getIsConnected = () => isConnected;

module.exports = { connectDB, getIsConnected };
