import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';


const signInSchema = Yup.object({
    email: Yup.string().email().required("please enter your email"),
    password: Yup.string().min(8, "password must be aleast 8 characters").required("please enter your password")

})

const initialValues = {
    email: "",
    password: "",
}

const SignIn = () =>{
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: signInSchema,
        onSubmit : (value)=>(
            alert(JSON.stringify(value))
            
        )
    });
    
    return (
        <div className = "signIn-container">
        <form className = "signIn-form" onSubmit = {handleSubmit}>
            <h1>Sign in</h1>
            <input type="email"  className = "signIn-input-email" name = "email" autoComplete = "off" id = "email" placeholder = "Enter your email..." value = {values.email} onChange = {handleChange} onBlur = {handleBlur}/>
            {(errors.email && touched.email)? <p className = "errors">{errors.email}</p> : null}
            <input type="password"  className = "signIn-input-password" name = "password" autoComplete = "off" id = "password" placeholder = "Enter your password..." value = {values.password}  onChange = {handleChange} onBlur = {handleBlur}/>
            {(errors.password && touched.password)? <p className = "errors">{errors.password}</p> : null}

            <button type = "submit">Sign in</button>
        </form>
        </div>
    )
}

export default SignIn;