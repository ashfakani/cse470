import React from "react";
import "./Footer.css";
import logo from "../../../images/Asset 3-8.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDribbble,
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <img style={{ height: "100px" }} src={logo} alt="" />
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Dhaka Office</h6>
            <ul class="footer-links">
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
                <span>
                  House#23,Road#1,Sector#9,Uttara. Dhaka, Bangladesh 1230
                </span>
              </li>
              <li className="mt-2">
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                <span>CelluloidStudios19@gmail.com</span>
              </li>
              <li className="mt-2">
                <FontAwesomeIcon icon={faPhoneAlt} />{" "}
                <span>+880172222272222</span>
              </li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Chittagong Office</h6>
            <ul class="footer-links">
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
                <span>
                  House #12, Road #02 , Nandan Kanan , DC Hill , Chattogram
                </span>
              </li>
              <li className="mt-2">
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                <span>CelluloidStudios19@gmail.com</span>
              </li>
              <li className="mt-2">
                <FontAwesomeIcon icon={faPhoneAlt} /> <span>+880198888888</span>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">
              Copyright &copy; {new Date().getFullYear()} All Rights Reserved by
              <a href="#"> Celluloid Studios</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li>
                <a class="facebook" href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a class="twitter" href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a class="dribbble" href="#">
                  <FontAwesomeIcon icon={faDribbble} />
                </a>
              </li>
              <li>
                <a class="linkedin" href="#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
