import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Axios from "axios"
import { Formik, Form, ErrorMessage, Field } from 'formik'
import * as Yup from "yup"
import swal from 'sweetalert';

import TextError from '../helpers/textError'

import { userLoginAction } from '../redux/actions/userAuthAction'
import { setLoadingStatusAction } from '../redux/actions/setLoadingStatusAction'

const LoginForm = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
 
    const initialValues = { 
        email: "",
        password: "",
        age: ""

    }

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email format")
            .required("Required"),
        password: Yup.string()
            .required("Required"),
        age: Yup.number()
            .typeError('you must specify a number')
    }) 

    // handle POST AXIOS + GET USER TOKEN
    const onSubmitLogin = async (values) => {
        dispatch(setLoadingStatusAction())
        await Axios.post(`${process.env.REACT_APP_POST_USER_URL}`,{
            email:  values.email ,
            password: values.password,
            age: values.age
        }).then(function (response) {
            dispatch(setLoadingStatusAction())
            dispatch(userLoginAction(response.data.token))
            navigate(`/home`)
        }).catch(function () {
            dispatch(setLoadingStatusAction())
            swal("User does not exist!", "Try challenge@alkemy.org", "warning");
        });
    }

    return (
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
                            <div className='forms-inputs mb-4'>
                                <label className="h5 form-label" htmlFor='age'> Age </label>
                                <Field className="form-control" id="age" name="age" />
                                <ErrorMessage component={TextError} name="age" />
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
        
    )
}

export default LoginForm