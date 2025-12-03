import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchStaff } from '../features/staff/staffSlice';

const AboutUs = () => {
    const dispatch = useDispatch();
    const { items: staff, status } = useSelector((state) => state.staff);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchStaff());
        }
    }, [dispatch, status]);

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container about-hero__content">
                    <h1>About Us</h1>
                    <p>
                        Home <span>›</span> About Us
                    </p>
                </div>
            </section>

            {/* Activities Section */}
            <section className="about-activities">
                <div className="container about-activities__inner">
                    <div className="about-activities__text">
                        <span className="badge">LUXURY HOTEL</span>
                        <h2>
                            We Provide Outdoor Activities
                            <br />
                            To All Visitors
                        </h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour, or randomised words which do not look
                            even.
                        </p>
                        <div className="about-activities__features">
                            <div>
                                <h4>The Best Swimming Pool</h4>
                            </div>
                            <div>
                                <h4>The Best Stationary Bike</h4>
                            </div>
                        </div>
                        <ul className="about-activities__list">
                            <li>It is a long fact that a reader will be distracted by the readable</li>
                            <li>Lorem Ipsum is simply dummy of the printing and industry</li>
                            <li>There are many variations of Lorem Ipsum majority</li>
                        </ul>
                        <button className="btn btn-primary">Discover More ↗</button>
                    </div>
                    <div className="about-activities__media">
                        <img
                            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80"
                            alt="Hotel activities"
                        />
                    </div>
                </div>
            </section>

            {/* Stats strip */}
            <section className="about-stats">
                <div className="container about-stats__grid">
                    <div>
                        <h3>305+</h3>
                        <p>Luxury Rooms</p>
                    </div>
                    <div>
                        <h3>650+</h3>
                        <p>Regular Guests</p>
                    </div>
                    <div>
                        <h3>80+</h3>
                        <p>Team Member</p>
                    </div>
                    <div>
                        <h3>75+</h3>
                        <p>Beaches</p>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="about-skills">
                <div className="container about-skills__inner">
                    <div className="about-skills__text">
                        <span className="badge">OUR SKILLS</span>
                        <h2>Why Choose for us?</h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour, or randomised words which don&apos;t
                            look even.
                        </p>
                        <div className="skill">
                            <div className="skill__label">
                                <span>Services</span>
                                <span>95%</span>
                            </div>
                            <div className="skill__bar">
                                <div className="skill__fill skill__fill--95" />
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skill__label">
                                <span>Chef Master</span>
                                <span>85%</span>
                            </div>
                            <div className="skill__bar">
                                <div className="skill__fill skill__fill--85" />
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skill__label">
                                <span>Design</span>
                                <span>92%</span>
                            </div>
                            <div className="skill__bar">
                                <div className="skill__fill skill__fill--92" />
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skill__label">
                                <span>IT Solution</span>
                                <span>98%</span>
                            </div>
                            <div className="skill__bar">
                                <div className="skill__fill skill__fill--98" />
                            </div>
                        </div>
                    </div>
                    <div className="about-skills__media">
                        <img
                            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80"
                            alt="Resort view"
                            className="about-skills__img-main"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80"
                            alt="Restaurant"
                            className="about-skills__img-secondary"
                        />
                    </div>
                </div>
            </section>

            {/* Experience / video section */}
            <section className="about-experience">
                <div className="about-experience__overlay" />
                <div className="container about-experience__content">
                    <span className="badge badge--light">AMAZING EXPERIENCE</span>
                    <h2>
                        Relax And Enjoy With Our
                        <br />
                        Hotel &amp; Resort
                    </h2>
                    <button className="about-experience__play" aria-label="Play video">
                        ►
                    </button>
                </div>
            </section>

            {/* Expert Staff Section */}
            <section className="about-staff">
                <div className="container">
                    <div className="section-header section-header--center">
                        <span className="badge">FIXYLAND STAFF</span>
                        <h2>Expert Staff Persons</h2>
                    </div>
                    <div className="about-staff__grid">
                        {staff.map((member) => (
                            <article key={member._id} className="staff-card">
                                <div className="staff-card__image">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src =
                                                'https://asdlib.org/wp-content/uploads/2021/11/no-image.jpg';
                                        }}
                                    />
                                    <button className="staff-card__icon">+</button>
                                </div>
                                <div className="staff-card__body">
                                    <h3>{member.name}</h3>
                                    <p>{member.role}</p>
                                </div>
                            </article>
                        ))}
                        {status === 'loading' && (
                            <p className="about-staff__message">Loading staff...</p>
                        )}
                        {status === 'failed' && (
                            <p className="about-staff__message">Unable to load staff.</p>
                        )}
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section className="about-clients">
                <div className="container about-clients__inner">
                    <div className="section-header section-header--center">
                        <span className="badge">OUR CLIENTS</span>
                        <h2>
                            We Have More Then 150+
                            <br />
                            Global Clents
                        </h2>
                    </div>
                    <div className="about-clients__logos">
                        {Array.from({ length: 6 }).map((_, idx) => (
                            <div key={idx} className="about-clients__logo">
                                {/* simple circular placeholder */}
                                <span ><img src="https://asdlib.org/wp-content/uploads/2021/11/no-image.jpg" alt="Client" style={{borderRadius: '50%'}}/></span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
