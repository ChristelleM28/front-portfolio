import React from "react";
import cv from "../../assets/cv.pdf";

function ModalCv({ onClick }) {
  return (
    <div className="modalCv">
      <button onClick={onClick}>X</button>
      <div classeName="iframeCv">
        <iframe src={cv} title="cv"></iframe>
      </div>
    </div>
  );
}

export default ModalCv;
