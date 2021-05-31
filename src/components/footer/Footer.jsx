import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Phone } from "../../assets/Icons/phone.svg";
import { ReactComponent as Instagram } from "../../assets/Icons/instagram.svg";
import "../footer/Footer.css";

function Footer() {
  return (
    <div className="footer container">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h3>Link-uri rapide:</h3>
            <Link to="about" className="link">
              About
            </Link>
          </div>
          <div className="col-6">
            <h3>Contact:</h3>
            <span>
              <Phone />
              +4027346294910
            </span>
          </div>
          <div className="col-6">
            <Link to="TermsAndConditions" className="link">
              Termene și condiții
            </Link>
          </div>
          <div className="col">
            <Instagram /> radu.stanciu
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
