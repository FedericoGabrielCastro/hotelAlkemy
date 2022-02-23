import React from 'react'
import Axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import * as Yup from "yup"
import swal from 'sweetalert';

import { userLoginAction } from '../redux/actions/userAuthAction'
import { setLoadingStatusAction } from '../redux/actions/setLoadingStatusAction'

import logo from '../assets/logo.png'
import TextError from '../helpers/textError'
import Loading from '../components/loading'
import AnimatedPageRender from '../components/animatedPageRender'

const LoginPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const user = useSelector(store => store.userAuthReducer)
    const loading = useSelector(store => store.setLoadingStatusReducer)

    const initialValues = { 
        email: "",
        password: ""
    }

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email format")
            .required("Required"),
        password: Yup.string()
            .required("Required")
    }) 

    const onSubmitLogin = (values) => {
        dispatch(setLoadingStatusAction())
        Axios.post(`${process.env.REACT_APP_POST_USER_URL}`,{
            email:  values.email ,
            password: values.password,
        }).then(function (response) {
            dispatch(setLoadingStatusAction())
            // console.log("RESPONSE: ",response.data.token);
            dispatch(userLoginAction())
            navigate(`/home`)
        }).catch(function () {
            dispatch(setLoadingStatusAction())
            swal("User does not exist!", "Try challenge@alkemy.org", "warning");
        });
    }

    return (
        <AnimatedPageRender>

            <main className='vh-100 pt-5'>
                <section className="container w-50">
                    <div className='text-center'>
                        <img className="mt-4 mb-4" src={logo} alt="logo" height="150px"/>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmitLogin}
                        >
                            {
                                formik => {
                                    return (
                                        <Form >
                                            <div className='forms-inputs mb-4'>
                                                <label className="h5 form-label" htmlFor='email'> Email </label>
                                                <Field className="form-control" id="email" name="email" />
                                                <ErrorMessage component={TextError} name="email" />
                                            </div>
                                            <div className='forms-inputs mb-4'>
                                                <label className="h5 form-label" htmlFor='password'> Password </label>
                                                <Field className="form-control" id="password" name="password" />
                                                <ErrorMessage component={TextError} name="password" />
                                            </div>
                                            <button
                                                className='btn btn-dark w-100 '  
                                                type='submit' 
                                                disabled={!formik.isValid}>
                                                Login
                                            </button>
                                        </Form>
                                    )
                                }
                            }
                        </Formik>
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