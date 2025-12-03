import { Link } from 'react-router-dom';
import React from 'react';

const NotFound = () => {
    return (
        <div className="not-found-page">
            <section className="error-hero">
                <div className="container error-hero__content">
                    <p className="error-hero__breadcrumb">
                        <span>Home</span> / <span>Error</span>
                    </p>
                    <h1>404 Error</h1>
                </div>
            </section>

            <section className="error-section">
                <div className="container">
                    <div className="error-card">
                        <img
                            src="https://res.cloudinary.com/dnqkcmw6r/image/upload/v1705156956/illustrations/404-green.png"
                            alt="404 illustration"
                        />
                        <h1>404</h1>
                        <h2>Ohh! Page Not Found</h2>
                        <p>
                            We're sorry but we can't seem to find the page you requested. This might be because you have
                            typed the web address incorrectly.
                        </p>
                        <Link to="/" className="btn btn-primary">
                            Back To Home ↗
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;
