import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainCards from '../components/MainCards';

function AppRouter() {
    return (
        <Router>
            <div className='flex relative h-[100vh] w-[100vw]'>
                <Routes>
                    <Route path="/" element={<MainCards />} />
                    <Route path="/about" element={<>About</>} />
                    <Route path="/contact" element={<>Contact</>} />
                </Routes>
                <div className='grid absolute bottom-0 h-[10vh] w-full place-items-center grid-cols-3 border-t-2 border-[#333]'>
                    <div>asdasdasd</div>
                    <div>asd</div>
                    <div>asd</div>
                </div>
            </div>
        </Router>
    );
}

export default AppRouter;
