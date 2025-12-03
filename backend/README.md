# MERN Assessment Backend

Professional backend implementation with MVC architecture for the MERN Stack Assessment.

## 🏗️ Project Structure

```
backend/
├── src/
│   ├── config/          # Configuration files
│   │   ├── database.js  # Database connection
│   │   └── index.js     # App configuration
│   ├── constants/       # Application constants
│   │   └── index.js     # HTTP status codes, messages
│   ├── controllers/     # Request handlers
│   │   ├── staff.controller.js
│   │   ├── hotel.controller.js
│   │   └── appointment.controller.js
│   ├── middlewares/     # Custom middlewares
│   │   ├── errorHandler.js
│   │   └── validation.js
│   ├── models/          # Mongoose models
│   │   ├── Staff.js
│   │   ├── Hotel.js
│   │   └── Appointment.js
│   ├── routes/          # API routes
│   │   ├── index.js
│   │   ├── staff.routes.js
│   │   ├── hotel.routes.js
│   │   └── appointment.routes.js
│   ├── services/        # Business logic layer
│   │   ├── staff.service.js
│   │   ├── hotel.service.js
│   │   └── appointment.service.js
│   ├── utils/           # Utility functions
│   │   ├── ApiError.js
│   │   ├── ApiResponse.js
│   │   └── asyncHandler.js
│   └── app.js           # Express app setup
├── seed.js              # Database seeding script
├── server.js            # Entry point
├── .env                 # Environment variables
├── .gitignore
└── package.json
```

## 🚀 Features

- **MVC Architecture**: Clean separation of concerns
- **Service Layer**: Business logic separated from controllers
- **Error Handling**: Centralized error handling middleware
- **Validation**: Request validation middleware
- **Standardized Responses**: Consistent API response format
- **Environment Configuration**: Centralized config management
- **Database Seeding**: Easy data population for development

## 📦 Installation

```bash
npm install
```

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/mern-assessment
CORS_ORIGIN=http://localhost:5173
```

## 🏃 Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

### Seed Database
```bash
npm run seed
```

## 📡 API Endpoints

### Staff
- `GET /api/staff` - Get all staff members
- `GET /api/staff/:id` - Get staff member by ID

### Hotels
- `GET /api/hotels` - Get all hotels/rooms
- `GET /api/hotels/:id` - Get hotel by ID

### Appointments
- `POST /api/appointments` - Create new appointment
- `GET /api/appointments` - Get all appointments
- `GET /api/appointments/:id` - Get appointment by ID

### Health Check
- `GET /api/health` - API health check

## 🛠️ Technologies

- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📝 API Response Format

### Success Response
```json
{
  "success": true,
  "statusCode": 200,
  "data": {},
  "message": "Success"
}
```

### Error Response
```json
{
  "success": false,
  "statusCode": 400,
  "message": "Error message",
  "errors": []
}
```
