import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import LoginPage from '../views/LoginPage';

const RequireAuth = () => {

    const user = useSelector(store => store.userAuthReducer)

    return (
        user ? <Outlet/> : <LoginPage />
    )
}

export default RequireAuth