const express = require('express');
const cors = require('cors');

const config = require('./config');
const connectDB = require('./config/database');
const apiRoutes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const { CORS_OPTIONS } = require('./constants');

// Create Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors(CORS_OPTIONS));
app.use(express.json());

// Routes
app.use('/api', apiRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Global error handler
app.use(errorHandler);

// Start server
app.listen(config.port, () => {
    console.log(`Server running on port ${config.port} in ${config.nodeEnv} mode`);
});

