import React from "react";
import { IoMdHome } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import car from "../../assets/aboutpic.jpg";
import "./Contact.css";

function Contact() {
  return (
    <div className="Contact">
      <div className="Hedaer">
        <h1>Contact Us</h1>
      </div>
      <div className="ContactWrapper">
        <div className="Contactleft">
          <div className="leftHead">
            <h1>Get in touch</h1>
            <p>Looking for help? Fill the form and Travel with us</p>
          </div>
          <hr />
          <div className="contactinfoWrapper">
            <div className="contactinfo">
              <h2>HeadQuaters</h2>
              <div className="contactinfosvgDial">
                <div>
                  <IoMdHome />
                </div>
                <p>001 99800 Kingston, Jamaica</p>
              </div>
            </div>
            <hr />
            <div className="contactinfo">
              <h2>Phone</h2>
              <div className="contactinfosvgDial">
                <div>
                  <IoCall />
                </div>
                <p>+625790153849</p>
              </div>
            </div>
            <hr />
            <div className="contactinfo">
              <h2>Support</h2>
              <div className="contactinfosvgDial">
                <div>
                  <FaEnvelope />
                </div>
                <p>gakirijulius@gmail.com</p>
              </div>
            </div>
            <hr />
            <div className="contactinfo">
              <h2>Social</h2>
              <div className="contactinfosvgDial">
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
        </div>

        <div className="contactRight">
          <img src={car} alt="" />
        </div>
      </div>
      <section className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.710316177883!2d36.947560774093155!3d-0.4215822352905191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182861a22a3088a7%3A0xe09795888ee75079!2sTeach2Give%20Offices!5e0!3m2!1sen!2ske!4v1717905997162!5m2!1sen!2ske"
          width="100000"
          height="450"
          style={{ border: 0, display: "block", width: "100%" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}

export default Contact;
