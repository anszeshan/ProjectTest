const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, 'First name is required'],
            trim: true,
        },
        lastName: {
            type: String,
            required: [true, 'Last name is required'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            trim: true,
            lowercase: true,
            match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email'],
        },
        phone: {
            type: String,
            required: [true, 'Phone number is required'],
            trim: true,
        },
        type: {
            type: String,
            required: [true, 'Room type is required'],
            trim: true,
        },
        room: {
            type: String,
            required: [true, 'Room is required'],
            trim: true,
        },
        checkIn: {
            type: Date,
            required: [true, 'Check-in date is required'],
        },
        checkOut: {
            type: Date,
            required: [true, 'Check-out date is required'],
        },
        message: {
            type: String,
            trim: true,
            default: '',
        },
        status: {
            type: String,
            enum: ['pending', 'confirmed', 'cancelled'],
            default: 'pending',
        },
    },
    {
        timestamps: true,
    }
);

// Validation: Check-out must be after check-in
appointmentSchema.pre('save', function (next) {
    if (this.checkOut <= this.checkIn) {
        next(new Error('Check-out date must be after check-in date'));
    }
    next();
});

module.exports = mongoose.model('Appointment', appointmentSchema);
