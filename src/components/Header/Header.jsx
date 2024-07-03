import { Link } from "react-router-dom";
import logo from "../../assets/carlogo.jpeg";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="HeaderLeft">
        <img src={logo} alt="" />
      </div>
      <div className="HeaderRight">
        <ul>
          <li>
            <Link className="HeaderLink" to="/">
              DashBoard
            </Link>
          </li>
          <li>
            <Link className="HeaderLink" to="/Listing">
              Listing
            </Link>
          </li>
          <li>
            <Link className="HeaderLink" to="/">
              Reservation
            </Link>
          </li>
          <li>
            <Link className="HeaderLink" to="/">
              Contacts
            </Link>
          </li>
        </ul>
      </div>
      <div className="HeaderButtons">
        <button>Log In</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export default Header;
