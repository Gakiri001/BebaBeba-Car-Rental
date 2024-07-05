import React from 'react'
import { Formik,Form,Field,ErrorMessage } from "formik";
import * as Yup from "yup"
import { FaEnvelope } from "react-icons/fa6";
import { GiPadlock } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi2";
import "./Signup.css"

function Signup() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email Address").required("The Email is required"),
    password:Yup.string().min(6, 'Password must be at least 6 characters').required("The password is required"),
    conpassword:Yup.string().min(6, 'Password must be at least 6 characters').required("The password is required"),
    name: Yup.string().required("The name is required"),
    lesseID: Yup.number().required("The lesse ID Number is Required").positive("ID Number must be postive number").integer("Must be an integer"),
    driverLicense: Yup.number().required("Driver's ID number is required").positive("Must be a positive number").integer("Must be an Integer"),
  })
  return (
    <div className='SignupFather'>
      <Formik
      initialValues={{name:"",email:"",lesseID:"",driverLicense:"",password:"",conpassword:""}}
      validationSchema={validationSchema}
      onSubmit={(values,{setSubmitting}) =>{
        console.log("Sign Up data",values)
        setSubmitting(false)
      }}
      >
        {({isSubmitting}) =>(
          <Form className='formSignup'>
            <h1>Sign up</h1>
            <div className='signupGroup'>
              <div className='SignUpInput'>
                <label><FaUser/></label>
                <Field type="text" name="name" placeHolder="Enter Your Name" className="name"/>
                <ErrorMessage name='name' component="div" className='error'/>
              </div>

              <div className='SignUpInput'>
                <label><HiIdentification/></label>
                <Field type="number" name="lesseID" placeHolder="Enter Your National ID No" className="NationalID"/>
                <ErrorMessage name='lesseID' component="div" className='error'/>
              </div>

              <div className='SignUpInput'>
                <label><FaEnvelope/></label>
                <Field type="email" name="email" placeHolder="Enter Your email Address" className="email"/>
                <ErrorMessage name='email' component="div" className='error'/>
              </div>

              <div className='SignUpInput'>
                <label><HiIdentification/></label>
                <Field type="number" name="driverLicense" placeHolder="Enter Your Driver License No" className="driverLicense"/>
                <ErrorMessage name='driverLicense' component="div" className='error'/>
              </div>

              <div className='SignUpInput'>
              <label htmlFor=""><GiPadlock/></label>
              <Field type="password" name="password" placeHolder="Enter Your password" className="password"/>
              <ErrorMessage name='password' component="div" className='error'/>
              </div>

              <div className='SignUpInput'>
              <label htmlFor=""><GiPadlock/></label>
              <Field type="password" name="conpassword" placeHolder="Confirm Your password" className="password"/>
              <ErrorMessage name='conpassword' component="div" className='error'/>
              </div>
              <div className='SignUpDiv'>
              <button type="submit" disabled={isSubmitting} className="Signbtn">
                SignUp
              </button>
              </div>
            </div>
            <p className='loginPara'>If You have an  account click <a href="">Login</a> to continue</p>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Signup