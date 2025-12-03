const config = require('../config');

// HTTP Status Codes
const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
};

// API Messages
const MESSAGES = {
    SUCCESS: 'Operation successful',
    CREATED: 'Resource created successfully',
    UPDATED: 'Resource updated successfully',
    DELETED: 'Resource deleted successfully',
    NOT_FOUND: 'Resource not found',
    VALIDATION_ERROR: 'Validation error',
    SERVER_ERROR: 'Internal server error',
    APPOINTMENT_CREATED: 'Appointment booked successfully',
};

// Database URL
const DATABASE_URL = config.mongoUri;

// CORS Configuration
const CORS_OPTIONS = {
    origin: config.corsOrigin,
    credentials: true,
};

module.exports = {
    HTTP_STATUS,
    MESSAGES,
    DATABASE_URL,
    CORS_OPTIONS,
};
