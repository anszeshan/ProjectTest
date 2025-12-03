const Staff = require('../models/Staff');
const ApiError = require('../utils/ApiError');
const { HTTP_STATUS, MESSAGES } = require('../constants');

/**
 * Service layer for Staff operations
 */
class StaffService {
    /**
     * Get all staff members
     * @returns {Promise<Array>} Array of staff members
     */
    async getAllStaff() {
        try {
            const staff = await Staff.find().select('-__v');
            return staff;
        } catch (error) {
            throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, MESSAGES.SERVER_ERROR);
        }
    }

    /**
     * Get staff member by ID
     * @param {string} id - Staff ID
     * @returns {Promise<Object>} Staff member
     */
    async getStaffById(id) {
        try {
            const staff = await Staff.findById(id).select('-__v');
            if (!staff) {
                throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Staff member not found');
            }
            return staff;
        } catch (error) {
            if (error instanceof ApiError) throw error;
            throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, MESSAGES.SERVER_ERROR);
        }
    }
}

module.exports = new StaffService();
