import React, { useState } from "react";
import FooterMenuContent from "./FooterMenuContent";
import "./Footer.css";

function Footer() {
  
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="footerMenu">
      <div className={`footerButton ${openMenu ? "openMenu" : ""}`}>
        <button className="buttonMenu" onClick={handleClick}>
          Menu
        </button>
      </div>
      {openMenu ? <FooterMenuContent handleClick={handleClick} /> : ""}
    </div>
  );
}

export default Footer;
