import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import MainLayout from './layouts/MainLayout';
import AboutUs from './pages/AboutUs';
import Booking from './pages/Booking';
import NotFound from './pages/NotFound';

function App() {
    return (
       
            <MainLayout>
                <Routes>
                    <Route path="/" element={<AboutUs />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </MainLayout>
        
    );
}

export default App;
