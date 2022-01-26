import React from "react";
import "./Home.css";
import Button from "../Button/Button";

function Home() {
  return (
    <div className="container">
            <div className="rectangleHome">
      <div className="light">
        <img src="../assets/light.png" alt="light" />
      </div>
        <div className="welcome">
          <h2> Welcome to my</h2>
          <h1 className="titleH1">PORTFOLIO</h1>
          <h2> Christelle Marquier</h2>
        </div>
        <Button />
        <div className="about">
          <h3> About me</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
