const appointmentService = require('../services/appointment.service');
const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const { HTTP_STATUS, MESSAGES } = require('../constants');

/**
 * @desc    Create new appointment
 * @route   POST /api/appointments
 * @access  Public
 */
const createAppointment = asyncHandler(async (req, res) => {
    const appointment = await appointmentService.createAppointment(req.body);
    res
        .status(HTTP_STATUS.CREATED)
        .json(new ApiResponse(HTTP_STATUS.CREATED, appointment, MESSAGES.APPOINTMENT_CREATED));
});

/**
 * @desc    Get all appointments
 * @route   GET /api/appointments
 * @access  Public
 */
const getAllAppointments = asyncHandler(async (req, res) => {
    const appointments = await appointmentService.getAllAppointments();
    res.status(HTTP_STATUS.OK).json(new ApiResponse(HTTP_STATUS.OK, appointments, MESSAGES.SUCCESS));
});

/**
 * @desc    Get appointment by ID
 * @route   GET /api/appointments/:id
 * @access  Public
 */
const getAppointmentById = asyncHandler(async (req, res) => {
    const appointment = await appointmentService.getAppointmentById(req.params.id);
    res.status(HTTP_STATUS.OK).json(new ApiResponse(HTTP_STATUS.OK, appointment, MESSAGES.SUCCESS));
});

module.exports = {
    createAppointment,
    getAllAppointments,
    getAppointmentById,
};
