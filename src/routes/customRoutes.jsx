import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'

import RequireAuth from './requireAuth';
import HomePage from '../views/HomePage';
import LoginPage from '../views/LoginPage';

import UserActiveRestric from './userActiveRestric';

const CustomRoutes = () => {

    const location = useLocation()

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.key}>
                <Route element={<UserActiveRestric />}> 
                    <Route path="/login" element={ <LoginPage/> } exact/>
                </Route>
                <Route element={<RequireAuth />}>
                    <Route path="/home" element={ <HomePage/> } exact/>
                </Route>
            </Routes>
        </AnimatePresence>
    )
}


export default CustomRoutes