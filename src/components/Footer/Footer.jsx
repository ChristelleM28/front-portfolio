import React, { useState } from "react";
import { Link } from "react-router-dom";
import FooterMenuContent from "./FooterMenuContent";
import "./Footer.css";



function Footer() {
  const [openMenu, setOpenMenu] = useState(false);
const handleClick = () => {
  setOpenMenu(!openMenu);
  };

  return (
    <div className="footerMenu">
      <div className={`footerButton${openMenu ? "openMenu" : ""}`}>
        <button className="buttonMenu" onClick={handleClick}>
          Menu
        {openMenu ? <FooterMenuContent handleClick={handleClick} /> : ""}
        </button>
      </div>
    </div>
  );
}

export default Footer;
