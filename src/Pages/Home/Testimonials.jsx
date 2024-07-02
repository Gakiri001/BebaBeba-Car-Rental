import testimonials from "../../Data/testimonials";
import { FaThumbsUp } from "react-icons/fa";
import React from "react";

const Testmoy = ({ image, name, heading, description }) => {
  return (
    <section className="testmoy">
      <div className="testmoyTop">
        <div className="testmoyTopimage">
          <img src={image} alt="" />
        </div>
        <div className="testmoyTopdetails">
          <h2>Name: {name}</h2>
          <p className="rate">
            Rating: <FaThumbsUp />
          </p>
        </div>
      </div>
      <div className="testmoyBottom">
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
};

function Testimonials() {
  return (
    <React.Fragment>
      <section className="Testimonials">
        <h1>Testimonials</h1>
        <section className="TestimonialsWrapper">
          {testimonials.map((currentTestmony, i) => (
            <Testmoy
              key={i}
              image={currentTestmony.image}
              name={currentTestmony.name}
              country={currentTestmony.country}
              heading={currentTestmony.heading}
              description={currentTestmony.description}
            />
          ))}
        </section>
      </section>
    </React.Fragment>
  );
}

export default Testimonials;
