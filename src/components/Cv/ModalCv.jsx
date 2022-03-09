import React from "react";
import "./ModalCv.css";
import cv from "../../assets/cv.pdf";
import myCV from "../../assets/myCV.jpg";

function ModalCv({ onClick }) {
  
  return (
    <div className="modalCvContainer">
      <button onClick={onClick}>Close</button>
      <div className="modal">
        <iframe classeName="iframeCv"
          src={cv}
          title="cv"
          type="application/pdf"
          frameborder="0"
          height="100%"
          width="100%"
        ></iframe>
        <img className="CVImg" src={myCV} alt="CV"></img>
      </div>
    </div>
  );
}

export default ModalCv;
