const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/magarajothi_traders';
    
    // Connect with Mongoose for MongoDB Atlas or Local MongoDB
    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 10000, // 10s timeout for cloud connection
    });

    isConnected = true;
    console.log(`✅ MongoDB Connected: ${conn.connection.host} (${conn.connection.name})`);
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
