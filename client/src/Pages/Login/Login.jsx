import React, {useState} from "react";
import { Formik, Form, Field, ErrorMessage,useFormik } from "formik";
import * as Yup from "yup";
import "./Login.css";
import { FaEnvelope } from "react-icons/fa6";
import { GiPadlock } from "react-icons/gi";
import { apiurl } from "../../utils/congig";
import {useNavigate} from "react-router-dom"

function Login() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (formValues) => {
    try{
      setLoading(true);
      setError(false);
      const reponse = await fetch (`${apiurl}/api/users/login/`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify(formValues),
        credentials:"include"
      });

      const data = await reponse.json()
      console.log(data)

      if(reponse.ok){
        navigate("/")
      }
      else{
        setError(data.message || "Login Failed")
      }
    }
    catch(err){
      setError(e.message)
    }
    finally{
      setLoading(false)
    }
  }
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email Address")
      .required("The Email is required"),
    password: Yup.string()
      .required("The password is required"),
  });
  return (
    <div className="LogIn">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Login Data", values);
          handleSubmit(values)
          setSubmitting(false);
        }}
      >
        {({ isSubmitting,values, handleChange }) => (
          <Form className="form">
            <h1>Login</h1>
            <div className="inputGroup">
              <div className="inputFiled">
                <label htmlFor="">
                  <FaEnvelope />
                </label>
                <Field
                  type="email"
                  name="email"
                  placeHolder="Your Your Email Address"
                  className="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className="inputFiled">
                <label htmlFor="">
                  <GiPadlock />
                </label>
                <Field
                  type="password"
                  name="password"
                  placeHolder="Enter Your password"
                  className="password"
                  value={values.password}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>

              <div className="LoginDiv">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="Loginbtn"
                >
                  Login
                </button>
              </div>
            </div>
            <p className="loginPara">
              Lost password <a href="/Signup">Click Here</a>
            </p>
            <p className="loginPara">
              If no account click <a href="/Signup">Sign Up</a> to register
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
