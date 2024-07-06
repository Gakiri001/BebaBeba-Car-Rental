import React from "react";
import list from "../../Data/listing";
import { FaCar } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa6";
import { PiFanFill } from "react-icons/pi";
import "./Listing.css";

const Listcard = ({
  image,
  image2,
  VehicleName,
  Category,
  Transmission,
  FuelType,
  Seats,
  AirConditioning,
  DailyRate,
}) => {
  return (
    <div className="Listcard">
      <div className="Listcard1">
        <img src={image} alt="" />
        <div className="color"></div>
      </div>
      <div className="Listcard2">
        <h2>{VehicleName}</h2>
        <ul>
          <li>
            <div>
              <FaCar />{" "}
            </div>
            Category: {Category}
          </li>
          <li>
            <div>
              <FaGears />{" "}
            </div>
            Transmission: {Transmission}{" "}
          </li>
          <li>
            <div>
              <BsFillFuelPumpFill />{" "}
            </div>{" "}
            Fuel Type: {FuelType}
          </li>
          <li>
            <div>
              <FaUsers />{" "}
            </div>{" "}
            Seats: {Seats}
          </li>
          <li>
            <div>
              <PiFanFill />{" "}
            </div>
            Air Conditioning: {AirConditioning}
          </li>
        </ul>
      </div>
      <div className="Listcard3">
        <img src={image2} alt="" />
      </div>
      <div className="Listcard4">
        <div className="color1"></div>
        <h2>{DailyRate} @ day</h2>
        <button>Book</button>
      </div>
    </div>
  );
};

function Listing() {
  return (
    <div className="ListingFather">
      <div>
        <h1 className="head">Cars to be Booked</h1>
      </div>
      <div>
        {list.map((current, i) => (
          <Listcard
            key={i}
            image={current.image}
            image2={current.image2}
            VehicleName={current.VehicleName}
            Category={current.Category}
            Transmission={current.Transmission}
            FuelType={current.FuelType}
            Seats={current.Seats}
            AirConditioning={current.AirConditioning}
            DailyRate={current.DailyRate}
          />
        ))}
      </div>
    </div>
  );
}

export default Listing;
