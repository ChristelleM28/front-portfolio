import React from "react";
import "./ModalCv.css";
import cv from "../../assets/cv.pdf";

function ModalCv({ onClick }) {
  return (
    <div className="modalCvContainer">
      <button onClick={onClick} >Close</button>
      <div classeName="iframeCv">
        <iframe src={cv} title="cv" type="application/pdf" frameborder="0" height="100%" width="100%"></iframe>
      </div>
    </div>
  );
}

export default ModalCv;
