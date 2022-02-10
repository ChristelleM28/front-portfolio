import React from "react";
import cv from "../../assets/cv.pdf";

function ModalCv({ onClick }) {
  return (
    <div className="modalCvContainer">
      <button onClick={onClick}>X</button>
      <div classeName="iframeCv">
        <iframe src={cv} title="cv" frameborder="0" height="100%" width="100%"></iframe>
      </div>
    </div>
  );
}

export default ModalCv;
