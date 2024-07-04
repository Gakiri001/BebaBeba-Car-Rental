import React from 'react'
import { Formik,Form,Field,ErrorMessage } from "formik";
import * as Yup from "yup"
import "./Login.css"
import { FaEnvelope } from "react-icons/fa6";
import { GiPadlock } from "react-icons/gi";

function Login() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email Address").required("The Email is required"),
    password:Yup.string().min(6, 'Password must be at least 6 characters').required("The password is required")
  })
  return (
    <div className='LogIn'>
      <Formik
      initialValues={{email:"",password:""}}
      validationSchema={validationSchema}
      onSubmit={(values,{setSubmitting}) =>{
        console.log('Login Data',values)
        setSubmitting(false)
      }}
      >
        {({isSubmitting}) =>(
          <Form className='form'>
            <h1>Login</h1>
            <div className='inputGroup'>
              <div className='inputFiled'>
              <label htmlFor=""><FaEnvelope/></label>
              <Field type="email" name="email" placeHolder="Your Your Email Address" className="email"/>
              <ErrorMessage name="email" component="div" className='error'/>
              </div>

              <div className='inputFiled'>
              <label htmlFor=""><GiPadlock/></label>
              <Field type="password" name="password" placeHolder="Enter Your password" className="password"/>
              <ErrorMessage name='password' component="div" className='error'/>
              </div>

              <div className='LoginDiv'>
              <button type="submit" disabled={isSubmitting} className="Loginbtn">
                Login
              </button>
              </div>
            </div>
            <p className='loginPara'>Lost password <a href=''>Click Here</a></p>
            <p className='loginPara'>If no account click <a href="">Sign Up</a> to register</p>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login