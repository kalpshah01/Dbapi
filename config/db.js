const mongoose = require('mongoose');

async function db() {
    const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/dbapi';

    try {
        await mongoose.connect(uri);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        
    }
}

module.exports = db;