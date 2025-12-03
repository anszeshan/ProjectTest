# Fixyland Hotel – MERN Assessment

A full‑stack MERN application built for an assessment task.  
It implements a hotel website with:

- **About Us** page (dynamic staff section)
- **Booking** page (appointment form + dynamic rooms)
- **Custom 404** page
- A **professional backend API** (Express + MongoDB + MVC + services)

The project is split into two apps:

- `backend/` – REST API + database
- `frontend/` – React + Vite single page application

---

## 1. Tech Stack

- **Frontend**
  - React 18, Vite 5
  - React Router 6
  - Redux Toolkit + React‑Redux
  - Axios

- **Backend**
  - Node.js, Express
  - MongoDB, Mongoose
  - dotenv, CORS

---

## 2. Project Structure

```text
backend/
  config/          # App + database configuration
  constants/       # HTTP codes, messages, CORS options
  controllers/     # Route controllers (hotel, staff, appointments)
  middlewares/     # Validation + global error handler
  models/          # Mongoose models (Hotel, Staff, Appointment)
  routes/          # Express routes grouped by resource
  services/        # Service layer, business logic
  utils/           # ApiError, ApiResponse, asyncHandler
  seed.js          # Seed script for staff + hotel data
  server.js        # Main entrypoint

frontend/
  src/
    app/           # Redux store
    components/    # Layout components (Header, Footer, TopBar)
    features/      # Redux slices (staff, hotels)
    layouts/       # Main layout wrapper
    pages/         # AboutUs, Booking, NotFound
    styles/        # Global styles
    main.jsx       # React root entry
  index.html       # Vite HTML entry
```

---

## 3. Getting Started

### 3.1 Prerequisites

- Node.js LTS (18+ recommended)
- MongoDB instance running locally or in the cloud

### 3.2 Clone the repository

```bash
git clone <your-repo-url> fixyland-mern-assessment
cd fixyland-mern-assessment
```

---

## 4. Backend Setup (`backend/`)

### 4.1 Install dependencies

```bash
cd backend
npm install
```

### 4.2 Environment variables

Create a `.env` file in `backend/` root:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/mern-assessment
CORS_ORIGIN=http://localhost:5173
```

### 4.3 Seed the database

This will insert placeholder **staff** and **hotel** records.

```bash
npm run seed
```

### 4.4 Run the backend

```bash
npm run dev   # nodemon (development)
# or
npm start     # plain node (production)
```

The API will be available at `http://localhost:5000`.

---

## 5. Frontend Setup (`frontend/`)

### 5.1 Install dependencies

```bash
cd ../frontend
npm install
```

### 5.2 Environment variables

Create `.env` in `frontend/`:

```env
VITE_API_BASE_URL=http://localhost:5000
```

### 5.3 Run the frontend

```bash
npm run dev
```

The app will run at `http://localhost:5173`.

---

## 6. Backend API Overview

All endpoints are prefixed with `/api`.

### 6.1 Health

- `GET /api/health` – simple JSON health check.

### 6.2 Staff (About Us page)

- `GET /api/staff` – list all staff members.
- `GET /api/staff/:id` – get a single staff member by ID.

### 6.3 Hotels (Booking page rooms section)

- `GET /api/hotels` – list all available rooms/hotels.
- `GET /api/hotels/:id` – get hotel by ID.

### 6.4 Appointments (Booking form)

- `POST /api/appointments` – create a booking/appointment.
  - Body fields:
    - `firstName`, `lastName`, `email`, `phone`
    - `type` (room type label)
    - `room` (room name)
    - `checkIn`, `checkOut` (dates)
    - `message` (optional)
- `GET /api/appointments` – list all appointments.
- `GET /api/appointments/:id` – get appointment by ID.

Validation and error handling:

- `middlewares/validation.js` validates appointment input.
- `ApiError` and `errorHandler` provide consistent error responses.

---

## 7. Frontend Pages & Data Flow

### 7.1 About Us

- Route: `/` and `/about`
- Sections:
  - Hero banner
  - Activities / skills / experience sections
  - **Expert Staff Persons** – populated by `GET /api/staff`
- Uses Redux slice `staffSlice` and thunk `fetchStaff`.

### 7.2 Booking

- Route: `/booking`
- Sections:
  - Hero banner
  - **Make An Appointment** form (POST `/api/appointments`)
  - Contact card (static)
  - **Luxury Rooms and Resort** cards (GET `/api/hotels`)
- Uses Redux slice `hotelSlice` and thunk `fetchHotels`.

### 7.3 404

- Route: any unmatched path (`*`)
- Custom 404 design matching the assessment (hero + illustration + CTA button).

---

## 8. Scripts Reference

### Backend (`backend/package.json`)

- `npm run dev` – start dev server with nodemon.
- `npm start` – start production server.
- `npm run seed` – seed MongoDB with initial staff + hotels.

### Frontend (`frontend/package.json`)

- `npm run dev` – start Vite dev server.
- `npm run build` – production build.
- `npm run preview` – preview built app.

---
