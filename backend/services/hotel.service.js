const Hotel = require('../models/Hotel');
const ApiError = require('../utils/ApiError');
const { HTTP_STATUS, MESSAGES } = require('../constants');

/**
 * Service layer for Hotel operations
 */
class HotelService {
    /**
     * Get all hotels/rooms
     * @returns {Promise<Array>} Array of hotels
     */
    async getAllHotels() {
        try {
            const hotels = await Hotel.find().select('-__v').sort({ price: 1 });
            return hotels;
        } catch (error) {
            throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, MESSAGES.SERVER_ERROR);
        }
    }

    /**
     * Get hotel by ID
     * @param {string} id - Hotel ID
     * @returns {Promise<Object>} Hotel details
     */
    async getHotelById(id) {
        try {
            const hotel = await Hotel.findById(id).select('-__v');
            if (!hotel) {
                throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Hotel not found');
            }
            return hotel;
        } catch (error) {
            if (error instanceof ApiError) throw error;
            throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, MESSAGES.SERVER_ERROR);
        }
    }
}

module.exports = new HotelService();
