import { Link } from "react-router-dom";
import logo from "../../assets/carlogo.jpeg";
import "./Header.css";
import { useAuth } from "../../context/AuthContext";

function Header() {
  const {user, logout} = useAuth()
  return (
    <div className="Header">
      <div className="HeaderLeft">
        <img src={logo} alt="" />
      </div>
      <div className="HeaderRight">
        <ul>
          <li>
            <Link className="HeaderLink" to="/Home">
              DashBoard
            </Link>
          </li>
          <li>
            <Link className="HeaderLink" to="/Listing">
              Listing
            </Link>
          </li>
          <li>
            <Link className="HeaderLink" to="/Reservation">
              Reservation
            </Link>
          </li>
          <li>
            <Link className="HeaderLink" to="/Contact">
              Contacts
            </Link>
          </li>
        </ul>
      </div>
      <div className="HeaderButtons">
        {/* {user ? (
          <>
          <li><Link to="/">Profile</Link></li>
          <li><Link to="/">Logout</Link></li>
          </>
        ) : (
          <>
             <button>
          <Link className="Login" to="/Login">
            Log In
          </Link>
        </button>
        <button>
          <Link className="Signup" to="/Signup">
            Sign Up
          </Link>
        </button>
          </>
       
        )

        } */}

        

        <h2>Welcome To BebaBeba</h2>
      </div>
    </div>
  );
}

export default Header;
