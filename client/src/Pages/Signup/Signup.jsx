import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEnvelope } from "react-icons/fa6";
import { GiPadlock } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (formValues) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/users/register/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        },
      );
      if (!response.ok) {
        throw new Error("Failed to register");
      }
      console.log("Registration successfully", response);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email Address")
      .required("The Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("The password is required"),
    conpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("The password is required"),
    name: Yup.string().required("The name is required"),
    lesseID: Yup.number()
      .required("The lesse ID Number is Required")
      .positive("ID Number must be a positive number")
      .integer("Must be an integer"),
    driverLicense: Yup.number()
      .required("Driver's ID number is required")
      .positive("Must be a positive number")
      .integer("Must be an Integer"),
  });

  return (
    <div className="SignupFather">
      <Formik
        initialValues={{
          name: "",
          email: "",
          lesseID: "",
          driverLicense: "",
          password: "",
          conpassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Sign Up data", values);
          handleSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, values, handleChange }) => (
          <Form className="formSignup">
            <h1>Sign up</h1>
            <div className="signupGroup">
              <div className="SignUpInput">
                <label>
                  <FaUser />
                </label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="name"
                  value={values.name}
                  onChange={handleChange}
                />
                <ErrorMessage name="name" component="div" className="error" />
              </div>

              <div className="SignUpInput">
                <label>
                  <HiIdentification />
                </label>
                <Field
                  type="number"
                  name="lesseID"
                  placeholder="Enter Your National ID No"
                  className="NationalID"
                  value={values.lesseID}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="lesseID"
                  component="div"
                  className="error"
                />
              </div>

              <div className="SignUpInput">
                <label>
                  <FaEnvelope />
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter Your email Address"
                  className="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className="SignUpInput">
                <label>
                  <HiIdentification />
                </label>
                <Field
                  type="number"
                  name="driverLicense"
                  placeholder="Enter Your Driver License No"
                  className="driverLicense"
                  value={values.driverLicense}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="driverLicense"
                  component="div"
                  className="error"
                />
              </div>

              <div className="SignUpInput">
                <label htmlFor="">
                  <GiPadlock />
                </label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter Your password"
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

              <div className="SignUpInput">
                <label htmlFor="">
                  <GiPadlock />
                </label>
                <Field
                  type="password"
                  name="conpassword"
                  placeholder="Confirm Your password"
                  className="password"
                  value={values.conpassword}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="conpassword"
                  component="div"
                  className="error"
                />
              </div>
              <div className="SignUpDiv">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="Signbtn"
                >
                  SignUp
                </button>
              </div>
            </div>
            <p className="loginPara">
              If You have an account click <a href="">Login</a> to continue
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Signup;
