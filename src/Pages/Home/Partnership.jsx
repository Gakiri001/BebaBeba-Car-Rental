import partner1 from "../../assets/partner1.jpg";
import partner2 from "../../assets/partner2.jpg";
import partner3 from "../../assets/partner3.jpg";
import partner4 from "../../assets/partner4.jpg";
import partner5 from "../../assets/partner5.jpg";
import "./Home.css";

function Partnership() {
  return (
    <div className="partnership">
      <h1>Partnership</h1>
      <div className="partnershipimages">
        <img src={partner1} alt="" />
        <img src={partner2} alt="" />
        <img src={partner3} alt="" />
        <img src={partner4} alt="" />
        <img src={partner5} alt="" />
        <img src={partner4} alt="" />
      </div>
    </div>
  );
}

export default Partnership;
