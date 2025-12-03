const Appointment = require('../models/Appointment');
const ApiError = require('../utils/ApiError');
const { HTTP_STATUS, MESSAGES } = require('../constants');

/**
 * Service layer for Appointment operations
 */
class AppointmentService {
    /**
     * Create a new appointment
     * @param {Object} appointmentData - Appointment data
     * @returns {Promise<Object>} Created appointment
     */
    async createAppointment(appointmentData) {
        try {
            const appointment = new Appointment(appointmentData);
            const savedAppointment = await appointment.save();
            return savedAppointment;
        } catch (error) {
            if (error.name === 'ValidationError') {
                const errors = Object.values(error.errors).map((err) => err.message);
                throw new ApiError(HTTP_STATUS.BAD_REQUEST, MESSAGES.VALIDATION_ERROR, errors);
            }
            throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, MESSAGES.SERVER_ERROR);
        }
    }

    /**
     * Get all appointments
     * @returns {Promise<Array>} Array of appointments
     */
    async getAllAppointments() {
        try {
            const appointments = await Appointment.find().select('-__v').sort({ createdAt: -1 });
            return appointments;
        } catch (error) {
            throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, MESSAGES.SERVER_ERROR);
        }
    }

    /**
     * Get appointment by ID
     * @param {string} id - Appointment ID
     * @returns {Promise<Object>} Appointment details
     */
    async getAppointmentById(id) {
        try {
            const appointment = await Appointment.findById(id).select('-__v');
            if (!appointment) {
                throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Appointment not found');
            }
            return appointment;
        } catch (error) {
            if (error instanceof ApiError) throw error;
            throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, MESSAGES.SERVER_ERROR);
        }
    }
}

module.exports = new AppointmentService();
