const hotelService = require('../services/hotel.service');
const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const { HTTP_STATUS, MESSAGES } = require('../constants');

/**
 * @desc    Get all hotels/rooms
 * @route   GET /api/hotels
 * @access  Public
 */
const getAllHotels = asyncHandler(async (req, res) => {
    const hotels = await hotelService.getAllHotels();
    res.status(HTTP_STATUS.OK).json(new ApiResponse(HTTP_STATUS.OK, hotels, MESSAGES.SUCCESS));
});

/**
 * @desc    Get hotel by ID
 * @route   GET /api/hotels/:id
 * @access  Public
 */
const getHotelById = asyncHandler(async (req, res) => {
    const hotel = await hotelService.getHotelById(req.params.id);
    res.status(HTTP_STATUS.OK).json(new ApiResponse(HTTP_STATUS.OK, hotel, MESSAGES.SUCCESS));
});

module.exports = {
    getAllHotels,
    getHotelById,
};
