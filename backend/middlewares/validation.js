const { HTTP_STATUS, MESSAGES } = require('../constants');
const ApiError = require('../utils/ApiError');

/**
 * Validation middleware for appointment creation
 */
const validateAppointment = (req, res, next) => {
    const { firstName, lastName, email, phone, type, room, checkIn, checkOut } = req.body;

    const errors = [];

    if (!firstName || firstName.trim() === '') {
        errors.push('First name is required');
    }

    if (!lastName || lastName.trim() === '') {
        errors.push('Last name is required');
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push('Valid email is required');
    }

    if (!phone || phone.trim() === '') {
        errors.push('Phone number is required');
    }

    if (!type || type.trim() === '') {
        errors.push('Room type is required');
    }

    if (!room || room.trim() === '') {
        errors.push('Room selection is required');
    }

    if (!checkIn) {
        errors.push('Check-in date is required');
    }

    if (!checkOut) {
        errors.push('Check-out date is required');
    }

    if (checkIn && checkOut && new Date(checkIn) >= new Date(checkOut)) {
        errors.push('Check-out date must be after check-in date');
    }

    if (errors.length > 0) {
        throw new ApiError(HTTP_STATUS.BAD_REQUEST, MESSAGES.VALIDATION_ERROR, errors);
    }

    next();
};

module.exports = {
    validateAppointment,
};
