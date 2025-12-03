const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Hotel name is required'],
            trim: true,
        },
        price: {
            type: Number,
            required: [true, 'Price is required'],
            min: [0, 'Price cannot be negative'],
        },
        image: {
            type: String,
            required: [true, 'Image is required'],
        },
        guests: {
            type: Number,
            required: [true, 'Number of guests is required'],
            min: [1, 'At least 1 guest required'],
        },
        beds: {
            type: Number,
            required: [true, 'Number of beds is required'],
            min: [1, 'At least 1 bed required'],
        },
        baths: {
            type: Number,
            required: [true, 'Number of baths is required'],
            min: [1, 'At least 1 bath required'],
        },
        description: {
            type: String,
            required: [true, 'Description is required'],
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Hotel', hotelSchema);
