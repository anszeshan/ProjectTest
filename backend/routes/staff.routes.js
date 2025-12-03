const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staff.controller');

// GET /api/staff - Get all staff members
router.get('/', staffController.getAllStaff);

// GET /api/staff/:id - Get staff member by ID
router.get('/:id', staffController.getStaffById);

module.exports = router;
