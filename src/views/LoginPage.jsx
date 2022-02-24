import React, { useEffect } from 'react'
import Axios from "axios"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import * as Yup from "yup"
// import swal from 'sweetalert';

import { userLoginAction } from '../redux/actions/userAuthAction'
import { setLoadingStatusAction } from '../redux/actions/setLoadingStatusAction'

import logo from '../assets/logo.png'
// import TextError from '../helpers/textError'
import Loading from '../components/loading'
import AnimatedPageRender from '../components/animatedPageRender'
import LoginForm from '../components/loginForm'

const LoginPage = () => {
    
    const navigate = useNavigate()

    const loading = useSelector(store => store.setLoadingStatusReducer)

    // Protect route, if you have a token, you cant render this page.
    useEffect(() => {
        const userNotLoging = window.localStorage.getItem("USER_TOKEN")
        
        if ( userNotLoging ) {
            navigate(`/home`)
        }
    },[])

    return (
        <AnimatedPageRender>
            <main className='vh-100 pt-5'>
                <section className="container w-50">
                <div className='text-center'>
                    <img className="mt-4 mb-4" src={logo} alt="logo" height="150px"/>
                    <LoginForm />
                </div>
                </section>
                {
                    loading ? <Loading /> : null 
                }
            </main>
        </AnimatedPageRender>
    )
}

export default LoginPage