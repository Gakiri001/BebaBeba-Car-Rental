import juliTechLogo from "../../assets/mut_logo.png";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import "./Footer.css";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="FooterTop">
        <div className="FooterTopDev">
          <img src={juliTechLogo} alt="" />
          <p>Julius Gakiri Technologies</p>
        </div>
        <div className="list">
          <ul className="unorderedlist">
            <li>P.O. Box 155 Jamaica</li>
            <li>+254790163855</li>
            <li>gakirijulius@gmail.com</li>
            <li>Kingston, Jamaica</li>
          </ul>
        </div>
        <div className="list">
          <ul className="unorderedlist">
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="list">
          <ul className="unorderedlist">
            <li>Home</li>
            <li>Services</li>
            <li>FAQs</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>

      <div className="FooterDown">
        <div className="FooterDownicons">
          <div>
            <FaTwitter />
          </div>
          <div>
            <FaFacebookF />
          </div>
          <div>
            <FaLinkedin />
          </div>
          <div>
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
