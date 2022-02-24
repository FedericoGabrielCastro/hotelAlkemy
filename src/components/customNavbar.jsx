import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { userLogoutAction } from '../redux/actions/userAuthAction'

const CustomNavbar = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = () => {
        const logoutToken = window.localStorage.getItem("USER_TOKEN")
        dispatch(userLogoutAction(logoutToken))
        navigate("/login")
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <h1 className="navbar-brand"> Hotel Alkemy &#174; </h1>
            </div>
            <button className="btn btn-sm btn-outline-secondary" type="button"> profile </button> {"--"}
            <button className="btn btn-sm btn-outline-secondary" type="button" onClick={handleLogout}> Logout </button>
        </nav>
    )
}

export default CustomNavbar