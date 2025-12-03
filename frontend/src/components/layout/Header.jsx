import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import TopBar from '../common/TopBar';

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Pages', path: '/about' },
    { label: 'Rooms & Suites', path: '/rooms' },
    { label: 'Services', path: '/services' },
    { label: 'Blog', path: '/about' },
    { label: 'Contact', path: '/contact' },
];

const Header = () => {
    return (
        <header>
            <TopBar />
            <div className="main-nav">
                <div className="container nav__content">
                    <Link to="/" className="brand">
                        <span className="brand__name">Fixyland</span>
                    </Link>
                    <nav>
                        <ul>
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    <NavLink to={item.path}>{item.label}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="nav__actions">
                        <button className="icon-button" aria-label="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <circle cx="11" cy="11" r="6" />
                                <line x1="16.5" y1="16.5" x2="22" y2="22" />
                            </svg>

                        </button>
                        <button className="icon-button" aria-label="Toggle menu">
                            ☰
                        </button>
                        <Link to="/booking" className="btn btn-primary">
                            Book Your Stay ↗
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;


