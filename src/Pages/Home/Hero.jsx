import "./Home.css";

function Hero() {
  return (
    <div className="Hero">
      <div className="HeroTop">
        <h1>
          BebaBeba C<span>ar Rental</span>{" "}
        </h1>
        <h3>
          Accompany Your Jour<span>ney with comfort</span>{" "}
        </h3>
      </div>
      <div className="HeroBottom">
        <button className="rentbtn">Rent Luxury</button>
        <button className="bebtn">Be EveryWhere</button>
      </div>
    </div>
  );
}

export default Hero;
