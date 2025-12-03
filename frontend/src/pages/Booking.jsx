import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { fetchHotels } from '../features/hotel/hotelSlice';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const Booking = () => {
    const dispatch = useDispatch();
    const { items: hotels, status } = useSelector((state) => state.hotels);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        type: 'Deluxe Rooms',
        room: 'Deluxe Rooms',
        checkIn: '',
        checkOut: '',
        message: '',
    });

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchHotels());
        }
    }, [dispatch, status]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`${API_BASE_URL}/api/appointments`, formData)
            .then(() => alert('Appointment Booked Successfully!'))
            .catch(() => alert('Error booking appointment'));
    };

    return (
        <div className="booking-page">
            {/* Hero Section */}
            <section className="booking-hero">
                <div className="container booking-hero__content">
                    <h1>Booking</h1>
                    <p>
                        Home <span>›</span> Booking
                    </p>
                </div>
            </section>

            {/* Appointment Form Section */}
            <section className="booking-appointment">
                <div className="container booking-appointment__inner">
                    <div className="section-header section-header--center">
                        <span className="badge">STAY WITH US</span>
                        <h2>Make An Appointment</h2>
                    </div>
                    <div className="booking-appointment__grid">
                        <form onSubmit={handleSubmit} className="booking-form">
                            <div className="booking-form__row">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="booking-form__row">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Ex. info@domain.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Ex. (+1) 987 654 3210"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="booking-form__row">
                                <select name="type" value={formData.type} onChange={handleChange}>
                                    <option value="Deluxe Rooms">Select Type</option>
                                    <option value="Deluxe Rooms">Deluxe Rooms</option>
                                    <option value="Junior Rooms">Junior Rooms</option>
                                    <option value="Family Rooms">Family Rooms</option>
                                </select>
                                <select name="room" value={formData.room} onChange={handleChange}>
                                    <option value="Deluxe Rooms">Select Room</option>
                                    <option value="Deluxe Rooms">Deluxe Rooms</option>
                                    <option value="Junior Rooms">Junior Rooms</option>
                                    <option value="Family Rooms">Family Rooms</option>
                                </select>
                            </div>
                            <div className="booking-form__row">
                                <input
                                    type="date"
                                    name="checkIn"
                                    placeholder="Check In"
                                    value={formData.checkIn}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="date"
                                    name="checkOut"
                                    placeholder="Check Out"
                                    value={formData.checkOut}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <textarea
                                name="message"
                                placeholder="Ex. type message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                            <button type="submit" className="btn btn-primary booking-form__submit">
                                Book Appointment ↗
                            </button>
                        </form>

                        <aside className="booking-contact-card">
                            <div className="booking-contact-card__media">
                                <img
                                    src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=700&q=80"
                                    alt="Hotel room"
                                />
                                <div className="booking-contact-card__accent" />
                            </div>
                            <div className="booking-contact-card__body">
                                <h3>(+1) 987 654 3210</h3>
                                <p>Mon-Fri: 7:00 am - 9:00 pm</p>
                                <p>24/7 Service Available</p>
                                <button type="button" className="btn booking-contact-card__btn">
                                    Call Us Now ↗
                                </button>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Rooms Section */}
            <section className="booking-rooms">
                <div className="container">
                    <div className="section-header section-header--center">
                        <span className="badge badge--light">OUR BEST ROOMS</span>
                        <h2>Luxury Rooms and Resort</h2>
                    </div>
                    <div className="booking-rooms__grid">
                        {hotels.map((hotel) => (
                            <article key={hotel._id} className="room-card">
                                <div className="room-card__media">
                                    <img src={hotel.image} alt={hotel.name} onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src =
                                            'https://asdlib.org/wp-content/uploads/2021/11/no-image.jpg';
                                    }} />
                                    <span className="room-card__price">${hotel.price} / Night</span>
                                </div>
                                <div className="room-card__body">
                                    <h3>{hotel.name}</h3>
                                    <div className="room-card__meta">
                                        <span>2 Guests</span>
                                        <span>2 Beds</span>
                                        <span>1 Bath</span>
                                    </div>
                                    <p>{hotel.description}</p>
                                    <button type="button" className="btn btn-primary room-card__btn">
                                        Read More ↗
                                    </button>
                                </div>
                            </article>
                        ))}
                        {status === 'loading' && (
                            <p className="booking-rooms__message">Loading rooms...</p>
                        )}
                        {status === 'failed' && (
                            <p className="booking-rooms__message">Unable to load rooms.</p>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Booking;
