const staffService = require('../services/staff.service');
const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const { HTTP_STATUS, MESSAGES } = require('../constants');

/**
 * @desc    Get all staff members
 * @route   GET /api/staff
 * @access  Public
 */
const getAllStaff = asyncHandler(async (req, res) => {
    const staff = await staffService.getAllStaff();
    res.status(HTTP_STATUS.OK).json(new ApiResponse(HTTP_STATUS.OK, staff, MESSAGES.SUCCESS));
});

/**
 * @desc    Get staff member by ID
 * @route   GET /api/staff/:id
 * @access  Public
 */
const getStaffById = asyncHandler(async (req, res) => {
    const staff = await staffService.getStaffById(req.params.id);
    res.status(HTTP_STATUS.OK).json(new ApiResponse(HTTP_STATUS.OK, staff, MESSAGES.SUCCESS));
});

module.exports = {
    getAllStaff,
    getStaffById,
};
