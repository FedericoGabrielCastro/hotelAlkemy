import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'

import HomePage from '../views/HomePage';
import LoginPage from '../views/LoginPage';

// import UserActiveRestric from './userActiveRestric';

const CustomRoutes = () => {

    const location = useLocation()

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.key}>
                <Route path="/login" element={ <LoginPage /> } exact/>
                <Route path="/home" element={ <HomePage /> } exact/>
                <Route path="*" element={ <LoginPage /> } />
            </Routes>
        </AnimatePresence>
    )
}


export default CustomRoutes