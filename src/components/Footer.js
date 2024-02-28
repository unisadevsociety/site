import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import USDFAV from "../images/icon.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* <div className="col-md-6 "> */}
          <div className="footerdivider">
            <div className="connectwithus">
              <h3 className="footer-heading">Connect with us</h3>
              <ul className="social-icons">
                <li>
                  <a
                    href="https://chat.whatsapp.com/KHqV67GD14W6tTQAbMJ08u"
                    className="black-text"
                    target="_blank"
                  >
                    <FaWhatsapp />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/invites/contact/?i=1jv0y69hgenlh&utm_content=twz8c62"
                    className="black-text"
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/unisadevsociety/"
                    className="black-text"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/unisadevsociety"
                    className="black-text"
                    target="_blank"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    className="black-text"
                    target="_blank"
                  >
                    <FaTwitter />
                  </a>
                </li>
              </ul>
            </div>

            {/* </div> */}
            <div className="quicklinks">
              {/* <div className="col-md-6"> */}
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="quick-links">
                <li>
                  <Link to="/maintenancePage" className="black-text">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/maintenancePage" className="black-text">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/maintenancePage" className="black-text">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/maintenancePage" className="black-text">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/maintenancePage" className="black-text">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
              {/* </div> */}
            </div>
          </div>
        </div>

        <div className="rights">
          <div className="black-text">
            {" "}
            <img src={USDFAV} className="usdicon" /> UNISA Developer Society
          </div>
          <div className="black-text">
            © All rights reserved to UNISA Developer Society
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
