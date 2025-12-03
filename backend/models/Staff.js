const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
        },
        role: {
            type: String,
            required: [true, 'Role is required'],
            trim: true,
        },
        image: {
            type: String,
            required: [true, 'Image is required'],
        },
        socials: {
            facebook: { type: String, default: '#' },
            twitter: { type: String, default: '#' },
            instagram: { type: String, default: '#' },
            behance: { type: String, default: '#' },
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Staff', staffSchema);
