require('dotenv').config();
const mongoose = require('mongoose');

const Staff = require('./models/Staff');
const Hotel = require('./models/Hotel');
const config = require('./config');

// Connect to database
mongoose
    .connect(config.mongoUri)
    .then(() => console.log('MongoDB Connected for Seeding'))
    .catch((err) => {
        console.error('Database connection error:', err);
        process.exit(1);
    });

const seedData = async () => {
    try {
        // Clear existing data
        await Staff.deleteMany({});
        await Hotel.deleteMany({});
        console.log('Existing data cleared');

        // Staff data
        const staffData = [
            {
                name: 'Michael Dean',
                role: 'Chef Master',
                image: 'https://via.placeholder.com/300x400',
            },
            {
                name: 'Arnold Taylor',
                role: 'Room Cleaner',
                image: 'https://via.placeholder.com/300x400',
            },
            {
                name: 'Michael Dean',
                role: 'Assistant Chef',
                image: 'https://via.placeholder.com/300x400',
            },
            {
                name: 'Michael Dean',
                role: 'Supervisor',
                image: 'https://via.placeholder.com/300x400',
            },
        ];

        // Hotel data
        const hotelData = [
            {
                name: 'Deluxe Rooms',
                price: 800,
                image: 'https://via.placeholder.com/400x300',
                guests: 2,
                beds: 2,
                baths: 1,
                description:
                    'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
            },
            {
                name: 'Junior Rooms',
                price: 400,
                image: 'https://via.placeholder.com/400x300',
                guests: 2,
                beds: 2,
                baths: 1,
                description:
                    'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
            },
            {
                name: 'Family Rooms',
                price: 600,
                image: 'https://via.placeholder.com/400x300',
                guests: 2,
                beds: 2,
                baths: 1,
                description:
                    'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
            },
        ];

        // Insert data
        const insertedStaff = await Staff.insertMany(staffData);
        const insertedHotels = await Hotel.insertMany(hotelData);

        console.log(`✓ Inserted ${insertedStaff.length} staff members`);
        console.log(`✓ Inserted ${insertedHotels.length} hotel rooms`);
        console.log('\n✅ Database seeded successfully!');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
};

seedData();

