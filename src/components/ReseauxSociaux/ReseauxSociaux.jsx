import React from 'react';
import linkedin from "../../assets/linkedin.svg";
import github50 from "../../assets/github50.png";

function ReseauxSociaux() {
  return (
    <div className="reseauxSociaux-container">
      <a href="https://github.com/ChristelleM28?tab=repositories">
        <img src={github50} href="" />
      </a>
      <a href="https://www.linkedin.com/in/christelle-marquier-3168771b5/">
        <img src={linkedin} />{" "}
      </a>
    </div>
  );}

export default ReseauxSociaux;