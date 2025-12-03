const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const config = {
    port: process.env.PORT || 5000,
    nodeEnv: process.env.NODE_ENV || 'development',
    mongoUri: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mern-assessment',
    corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173',
};

module.exports = config;
