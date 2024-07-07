import { useState } from "react";
import {Formik, useFormik} from "formik"
import {Link, useNavigate} from "react-router-dom"
import "./Reservation.css"
import { apiurl } from "../../utils/congig";
import car from "../../assets/car1.jpg";
import lesseepic from "../../assets/hero.jpg";

function Reservation(){
  console.log(apiurl)
  const [loading, Setloading] = useState(false)
  const [error, SetError] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (formValues) => {
    try{
      Setloading(true)
      SetError(false)
      const response = await fetch(`${apiurl}/api/rent/register`,{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      })
      const data = await response.json()
      console.log(data)
      if(data.success === true){
        navigate("/login")
      }
      else{
        SetError(data.message)
      }
    }
    catch(err){
      SetError(err.message)
    }
    finally{
      Setloading(false)
    }
  }
  const formik = useFormik({
    initialValues: {
      startingdate: "",
      picklocation: "",
      droplocation: "",
      enddate: "",
      lesseName: "",
      lesseNumber: "",
      lesseExperience: "",
      lesseID: "",
      driverLicense: "",
    },
    onSubmit: handleSubmit,
  })

  return(
    <div className="Reservation">
      <h1 className="head">Reservation</h1>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="formTop">
        <div className="Reserve">
        <div>
          <label htmlFor="">Starting Date</label>
          <input 
          type="date"
          name="startingdate"
          value={formik.values.startingdate}
          onChange={formik.handleChange}
           />
        </div>
        <div>
          <label htmlFor="">End Date</label>
          <input 
          type="date"
          name="enddate"
          value={formik.values.enddate}
          onChange={formik.handleChange}
           />
        </div>
        <div>
          <label htmlFor="">Pick Location</label>
          <input 
          type="text"
          name="picklocation"
          value={formik.values.picklocation}
          onChange={formik.handleChange}
           />
        </div>
        <div>
          <label htmlFor="">Drop Location</label>
          <input 
          type="text"
          name="droplocation"
          value={formik.values.droplocation}
          onChange={formik.handleChange}
           />
        </div>
        </div>
          <div className="formTopRight">
            <h1>Toyota Corolla</h1>
            <img src={car} alt="" />
          </div>
        </div>


        <div className="formBottom">
        <div className="lesseeDetails">
        <div>
          <label htmlFor="">Lessee's Name</label>
          <input 
          type="text"
          name="lesseName"
          value={formik.values.lesseName}
          onChange={formik.handleChange}
           />
        </div>
        <div>
          <label htmlFor="">Lessee's phone Number</label>
          <input 
          type="number"
          name="lesseNumber"
          value={formik.values.lesseNumber}
          onChange={formik.handleChange}
           />
        </div>
        <div>
          <label htmlFor="">Lessee's Years of Experience</label>
          <input 
          type="number"
          name="lesseExperience"
          value={formik.values.lesseExperience}
          onChange={formik.handleChange}
           />
        </div>
        <div>
          <label htmlFor="">Lessee's National ID No</label>
          <input 
          type="number"
          name="lesseID"
          value={formik.values.lesseID}
          onChange={formik.handleChange}
           />
        </div>
        <div>
          <label htmlFor="">Lessee's Driver License No</label>
          <input 
          type="number" 
          name="driverLicense"
          value={formik.values.driverLicense}
          onChange={formik.handleChange}
          />
        </div>
        </div>
          <div className="formBottomRight">
            <h1>Lessee Details</h1>
            <img src={lesseepic} alt="" />
          </div>
        </div>

        <div className="SubmitDiv">
          <button type="submit" className="submitinput" disabled={loading}>
            {loading ? "Please wait...":"Proceed to pay"}
          </button>
          <p className="error">{error && error}</p>
        </div>
      </form>
    </div>
  )
}

export default Reservation