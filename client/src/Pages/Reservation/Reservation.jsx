import { Formik,Form,Field,ErrorMessage } from "formik";
import car from "../../assets/car1.jpg";
import lesseepic from "../../assets/hero.jpg";
import * as Yup from "yup"
import "./Reservation.css"

function Reservation() {
  const validationSchema = Yup.object().shape({
    date: Yup.date().required("Starting Date is Required").nullable(),
    date2: Yup.date().required("End Date is Required").nullable(),
    location:Yup.string().trim().oneOf(['Mandeville',"MontegoBay","Kingston","MayPen","SpanishTown"],"Invalid Town selection").required("Pick up Location is required"),
    location2:Yup.string().trim().oneOf(['Mandeville',"MontegoBay","Kingston","MayPen","SpanishTown"],"Invalid Town selection").required("Drop off Location is required"),

    lesseName: Yup.string().required("The Lesse name is required"),
    lesseNumber: Yup.number().required("The lesse Phone Number is Required").positive("Must be a positive number").integer("Must be an Integer"),
    lesseEmail: Yup.string().email("Invalid Email Address").required("The Lesse email is required"),
    lesseID: Yup.number().required("The lesse ID Number is Required").positive("ID Number must be postive number").integer("Must be an integer"),
    driverLicense: Yup.number().required("Driver's ID number is required").positive("Must be a positive number").integer("Must be an Integer"),
  })
  return (
    <div className='Reservation'>
      <h1 className="head">Fill In To Rent The Vehicle</h1>
      <div className="ReservationWrapper">
      <div className='ReservationTop'>
        <Formik
        initialValues={{date:"",location:"",date2:"",location2:""}}
        validationSchema={validationSchema}
        onSubmit={(values,{setSubmitting}) =>{
          console.log('Form data',values)
          setSubmitting(false)
        }}
        >
          {({isSubmitting}) => (
              <Form action="">
              <div>
                <label htmlFor="pickLocation">Pick-Up location</label>
                <Field as="select" name="location" className="Field">
                <option value="" label="Select location" />
                <option value="Mandeville" label="Mandeville" />
                <option value="MontegoBay" label="MontegoBay" />
                <option value="Kingston" label="Kingston" />
                <option value="MayPen" label="MayPen" />
                <option value="SpanishTown" label="SpanishTown" />
                </Field>
                <ErrorMessage name="location" component="div" className="error"/>
              </div>
              <div>
                <label htmlFor="dropLocation">Drop-off location</label>
                <Field as="select" name="location2" className="Field">
                <option value="" label="Select location" />
                <option value="Mandeville" label="Mandeville" />
                <option value="MontegoBay" label="MontegoBay" />
                <option value="Kingston" label="Kingston" />
                <option value="MayPen" label="MayPen" />
                <option value="SpanishTown" label="SpanishTown" />
                </Field>
                <ErrorMessage name="location2" component="div" className="error"/>
              </div>
              <div>
                <label htmlFor="date">Start Date</label>
                <Field type="date" name="date" className="Field"/>
                <ErrorMessage name="date" component="div" className="error"/>
              </div>
              <div>
                <label htmlFor="date">End Date</label>
                <Field type="date" name="date2" className="Field"/>
                <ErrorMessage name="date2" component="div" className="error"/>
              </div>
              <div>
              <button type="submit" disabled={isSubmitting} className="Proceedbtn">
                Proceed
              </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>


      <div className='ReservationDown'>
        <h1>Toyota Corolla</h1>
        <img src={car} alt="" />
      </div>
      </div>

      <div className="LesseDetails">
        <div className="LesseDetailsLeft">
          <Formik
          initialValues={{lesseName:"",lesseNumber:"",lesseEmail:"",lesseID:"",driverLicense:""}}
          validationSchema={validationSchema}
          onSubmit={(values,{setSubmitting}) =>{
            console.log("Lesse Data",values)
            setSubmitting(false)
          }}
          >
            {({isSubmitting}) => (
              <Form>
                <div>
                  <label htmlFor="lesseName">Lessee's Name</label>
                  <Field type="text" name="lesseName" className="Field"/>
                  <ErrorMessage name="lesseName" component="div" className="error"/>
                </div>
                <div>
                  <label htmlFor="lesseNumber">Lessee's Phone Number</label>
                  <Field type="number" name="lesseNumber" className="Field"/>
                  <ErrorMessage name="lesseNumber" component="div" className="error"/>
                </div>
                <div>
                  <label htmlFor="lesseEmail">Lessee's Email Address</label>
                  <Field type="email" name="lesseEmail" className="Field"/>
                  <ErrorMessage name="lesseEmail" component="div" className="error"/>
                </div>
                <div>
                  <label htmlFor="lesseID">Lessee's National Id No</label>
                  <Field type="number" name="lesseID" className="Field"/>
                  <ErrorMessage name="lesseID" component="div" className="error"/>
                </div>
                <div>
                  <label htmlFor="driverLicense">Lessee's Driver Lisence No</label>
                  <Field type="number" name="driverLicense" className="Field"/>
                  <ErrorMessage name="driverLicense" component="div" className="error"/>
                </div>
                <div>
              <button type="submit" disabled={isSubmitting} className="Proceedbtn">
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
        <button className="paymentBtn">M-pesa &rarr; pay  Ksh20,000</button>
      </div>
    </div>
  )
}

export default Reservation