const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointment.controller');
const { validateAppointment } = require('../middlewares/validation');

// POST /api/appointments - Create new appointment
router.post('/', validateAppointment, appointmentController.createAppointment);

// GET /api/appointments - Get all appointments
router.get('/', appointmentController.getAllAppointments);

// GET /api/appointments/:id - Get appointment by ID
router.get('/:id', appointmentController.getAppointmentById);

module.exports = router;
