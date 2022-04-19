import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import home from "../../assets/home.png";

function FooterMenuContent() {

  return (
    <div className="footerMenuContent">
      <nav>
        <Link to="/" className="home"  >
          <img src={home} alt="Home" height="30px" width="auto"/> </Link> 
        <Link to="/about" className="linkAbout">
          About
        </Link>
        <Link to="/projects" className="linkProjectList">
          Project
        </Link>
        <Link to="/contact" className="linkContact">
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default FooterMenuContent;
