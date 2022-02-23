import React from 'react'
import logo from '../assets/logo.png'

const CustomNavbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <img src={logo} alt="logo" height="50px"/> */}
            <h1 className="navbar-brand"> Hotel Alkemy &#174; </h1>
            </div>
            <a className="navbar-brand" > Profile </a>
            <a className='navbar-brand'> Logout </a>
        </nav>
    )
}

export default CustomNavbar