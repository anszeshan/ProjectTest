import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
const MainLayout = ({ children }) => {
    return (
        <div className="app-shell">
            <Header />
            <div className="page-content">{children}</div>
            <Footer />
        </div>
    );
};

export default MainLayout;


