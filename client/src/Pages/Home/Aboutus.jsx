import "./Home.css";
import aboutPic from "../../assets/car3.jpg";
function Aboutus() {
  return (
    <div className="aboutus">
      <div className="aboutusLeft">
        <div className="image">
          <img src={aboutPic} alt="" />
        </div>
        <div className="Aboutstats">
          <div>
            <h1>10000+</h1>
            <p>Satisfied Customers</p>
          </div>
          <div>
            <h1>95%</h1>
            <p> Satisfaction Rate</p>
          </div>
          <div>
            <h1>200+</h1>
            <p>Locations</p>
          </div>
          <div>
            <h1>500+</h1>
            <p>Vehicles</p>
          </div>
        </div>
      </div>
      <div className="aboutusRight">
        <h1>About BebeBeba</h1>
        <p>
          Welcome to BebaBeba Car Rental, your go-to solution for seamless and
          reliable transportation services. Founded with a mission to make
          travel more convenient and affordable, we pride ourselves on offering
          a wide range of vehicles to meet every need.
          <br /> <br />
          Whether you're planning a weekend getaway, a business trip, or need a
          car for daily commuting, our fleet includes everything from compact
          cars to luxury SUVs, ensuring you find the perfect ride. At BebaBeba,
          we prioritize customer satisfaction above all, providing transparent
          pricing, flexible rental options, and exceptional service to make your
          experience stress-free and enjoyable.
        </p>
      </div>
    </div>
  );
}

export default Aboutus;
