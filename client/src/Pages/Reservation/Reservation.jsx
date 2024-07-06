import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import car from "../../assets/car1.jpg";
import lesseepic from "../../assets/hero.jpg";
import * as Yup from "yup";
import "./Reservation.css";
import { useNavigate } from "react-router-dom";

function Reservation() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // const handleSubmiting =() =>{
  //   console.log("Mmhh")
  // }

  const handleSubmit = async (formvalues) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/reserve/register/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formvalues),
        },
      );
      if (!response.ok) {
        throw new Error("Failed to reserve the car");
      }
      console.log("Reserved Successfully", response);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  const validationSchema = Yup.object().shape({
    startingdate: Yup.date().required("Starting Date is Required").nullable(),
    enddate: Yup.date().required("End Date is Required").nullable(),
    picklocation: Yup.string()
      .trim()
      .oneOf(
        ["Mandeville", "MontegoBay", "Kingston", "MayPen", "SpanishTown"],
        "Invalid Town selection",
      )
      .required("Pick up Location is required"),
    droplocation: Yup.string()
      .trim()
      .oneOf(
        ["Mandeville", "MontegoBay", "Kingston", "MayPen", "SpanishTown"],
        "Invalid Town selection",
      )
      .required("Drop off Location is required"),

    lesseName: Yup.string().required("The Lesse name is required"),
    lesseNumber: Yup.number()
      .required("The lesse Phone Number is Required")
      .positive("Must be a positive number")
      .integer("Must be an Integer"),
      lesseExperience: Yup.number()
      .positive("Must be a positive number")
      .integer("Must be an Integer")
      .required("The Lesse years of experience is required"),
    lesseID: Yup.number()
      .required("The lesse ID Number is Required")
      .positive("ID Number must be postive number")
      .integer("Must be an integer"),
    driverLicense: Yup.number()
      .required("Driver's ID number is required")
      .positive("Must be a positive number")
      .integer("Must be an Integer"),
  });
  return (
    <div className="Reservation">
      <h1 className="head">Fill In To Rent The Vehicle</h1>
      <div className="ReservationWrapper">
        <div className="ReservationTop">
          <Formik
            initialValues={{
              startingdate: "",
              picklocation: "",
              droplocation: "",
              enddate: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log("Form data", values);
              handleSubmit(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, values, handleChange }) => (
              <Form action="">
                <div>
                  <label htmlFor="picklocation">Pick-Up location</label>
                  <Field
                    as="select"
                    name="picklocation"
                    className="Field"
                    value={values.picklocation}
                    onChange={handleChange}
                  >
                    <option value="" label="Select location" />
                    <option value="Mandeville" label="Mandeville" />
                    <option value="MontegoBay" label="MontegoBay" />
                    <option value="Kingston" label="Kingston" />
                    <option value="MayPen" label="MayPen" />
                    <option value="SpanishTown" label="SpanishTown" />
                  </Field>
                  <ErrorMessage
                    name="picklocation"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <label htmlFor="droplocation">Drop-off location</label>
                  <Field
                    as="select"
                    name="droplocation"
                    className="Field"
                    value={values.droplocation}
                    onChange={handleChange}
                  >
                    <option value="" label="Select location" />
                    <option value="Mandeville" label="Mandeville" />
                    <option value="MontegoBay" label="MontegoBay" />
                    <option value="Kingston" label="Kingston" />
                    <option value="MayPen" label="MayPen" />
                    <option value="SpanishTown" label="SpanishTown" />
                  </Field>
                  <ErrorMessage
                    name="droplocation"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <label htmlFor="startingdate">Start Date</label>
                  <Field
                    type="date"
                    name="startingdate"
                    className="Field"
                    value={values.startingdate}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="startingdate"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <label htmlFor="enddate">End Date</label>
                  <Field
                    type="date"
                    name="enddate"
                    className="Field"
                    value={values.enddate}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="enddate"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="Proceedbtn"
                    // onClick={handleSubmiting}
                  >
                    Proceed
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <div className="ReservationDown">
          <h1>Toyota Corolla</h1>
          <img src={car} alt="" />
        </div>
      </div>

      <div className="LesseDetails">
        <div className="LesseDetailsLeft">
          <Formik
            initialValues={{
              lesseName: "",
              lesseNumber: "",
              lesseExperience: "",
              lesseID: "",
              driverLicense: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log("Lesse Data", values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div>
                  <label htmlFor="lesseName">Lessee's Name</label>
                  <Field type="text" name="lesseName" className="Field" />
                  <ErrorMessage
                    name="lesseName"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <label htmlFor="lesseNumber">Lessee's Phone Number</label>
                  <Field type="number" name="lesseNumber" className="Field" />
                  <ErrorMessage
                    name="lesseNumber"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <label htmlFor="lesseExperience">Lessee's Driving Experience</label>
                  <Field type="number" name="lesseExperience" className="Field" />
                  <ErrorMessage
                    name="lesseExperience"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <label htmlFor="lesseID">Lessee's National Id No</label>
                  <Field type="number" name="lesseID" className="Field" />
                  <ErrorMessage
                    name="lesseID"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <label htmlFor="driverLicense">
                    Lessee's Driver Lisence No
                  </label>
                  <Field type="number" name="driverLicense" className="Field" />
                  <ErrorMessage
                    name="driverLicense"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="Proceedbtn"
                  >
                    Proceed To Pay
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="lesseDetailsRight">
          <h1>Lessee Details</h1>
          <img src={lesseepic} alt="" />
        </div>
      </div>

      <div className="payment">
        <button className="paymentBtn">M-pesa &rarr; pay Ksh20,000</button>
      </div>
    </div>
  );
}

export default Reservation;
