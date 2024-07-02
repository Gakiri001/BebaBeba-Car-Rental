import { FaCarSide } from "react-icons/fa6";
import { LuFerrisWheel } from "react-icons/lu";

function Whyus() {
  return (
    <div className="whyus">
      <div className="whyusCard">
        <div className="whyusCardTop">
          <div>
            <FaCarSide />
          </div>
          <div>
            <LuFerrisWheel />
          </div>
        </div>
        <div className="whyusCardHeader">
          <h2>Affordable Rates</h2>
        </div>
        <div className="whyusCardpara">
          <p>
            We offer competitive pricing with no hidden fees, ensuring you get
            the best value for your money every time you rent from us.
          </p>
        </div>
      </div>
      <div className="whyusCard">
        <div className="whyusCardTop">
          <div>
            <FaCarSide />
          </div>
          <div>
            <LuFerrisWheel />
          </div>
        </div>
        <div className="whyusCardHeader">
          <h2>Convenient Locations</h2>
        </div>
        <div className="whyusCardpara">
          <p>
            Our extensive network of rental locations makes it easy to pick up
            and drop off your vehicle wherever you are.
          </p>
        </div>
      </div>
      <div className="whyusCard">
        <div className="whyusCardTop">
          <div>
            <FaCarSide />
          </div>
          <div>
            <LuFerrisWheel />
          </div>
        </div>
        <div className="whyusCardHeader">
          <h2>Superior Customer Service</h2>
        </div>
        <div className="whyusCardpara">
          <p>
            Our dedicated support team is available 24/7 to assist with any
            needs, ensuring a smooth and hassle-free rental experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Whyus;
