import React from 'react';
import { useNavigate, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import HomePage from '../views/HomePage';

const UserActiveRestric = () => {
    const navigate = useNavigate()
    
    const user = useSelector(store => store.userAuthReducer)

    return user ? <HomePage /> : <Outlet />
}

export default UserActiveRestric