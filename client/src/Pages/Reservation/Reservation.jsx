import { useState } from "react";
import { Formik, useFormik } from "formik";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Reservation.css";
import { apiurl } from "../../utils/congig";
import car from "../../assets/car1.jpg";
import lesseepic from "../../assets/hero.jpg";

function Reservation() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const vehicle = location.state?.vehicle;

  const handleSubmit = async (formValues) => {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(`${apiurl}/api/rent/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      const data = await response.json();
      console.log(data);
      if (data.success === true) {
        navigate("/pay");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      startingdate: "",
      picklocation: "",
      droplocation: "",
      enddate: "",
      lesseExperience: "",
      lesseID: "",
      driverLicense: "",
      reason: "",

    },
    onSubmit: handleSubmit,
  });

  if (!vehicle) {
    return (
      <div className="Reservation">
        <h1 className="head">Reservation</h1>
        <p>
          Please select a car to book on the{" "}
          <Link to="/Listing">listing page</Link>.
        </p>
      </div>
    );
  }

  return (
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
            <h1>{vehicle.VehicleName}</h1>
            <img src={vehicle.image} alt="" />
          </div>
        </div>
        <div className="formBottom">
          <div className="lesseeDetails">
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
            <div>
              <label htmlFor="">Lessee's Reason For Hire</label>
              <textarea
                type="number"
                name="reason"
                value={formik.values.reason}
                onChange={formik.handleChange}
              ></textarea>
            </div>
          </div>
          <div className="formBottomRight">
            <h1>Lessee Details</h1>
            <img src={vehicle.image2} alt="" />
          </div>
        </div>
        <div className="SubmitDiv">
          <button type="submit" className="submitinput" disabled={loading}>
            {loading ? "Please wait..." : "Proceed to pay"}
          </button>
          <p className="error">{error && error}</p>
        </div>
      </form>
    </div>
  );
}

export default Reservation;
