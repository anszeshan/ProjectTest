const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotel.controller');

// GET /api/hotels - Get all hotels/rooms
router.get('/', hotelController.getAllHotels);

// GET /api/hotels/:id - Get hotel by ID
router.get('/:id', hotelController.getHotelById);

module.exports = router;
