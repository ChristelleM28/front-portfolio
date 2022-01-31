import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function FooterMenuContent() {
  return (
    <div className="footerMenuContent">
      <nav>
        <Link to="/about" className="linkAbout">
          About
        </Link>
      </nav>
      <nav>
        <Link to="/projectList" className="linkProjectList">
          Project
        </Link>
      </nav>
      <nav>
        <Link to="/contact" className="linkContact">
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default FooterMenuContent;
