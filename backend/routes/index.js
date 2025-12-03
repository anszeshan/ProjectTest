const express = require('express');
const router = express.Router();

const staffRoutes = require('./staff.routes');
const hotelRoutes = require('./hotel.routes');
const appointmentRoutes = require('./appointment.routes');

// Mount routes
router.use('/staff', staffRoutes);
router.use('/hotels', hotelRoutes);
router.use('/appointments', appointmentRoutes);

// Health check route
router.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'API is running',
        timestamp: new Date().toISOString(),
    });
});

module.exports = router;
