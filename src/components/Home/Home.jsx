import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Home.css";
import Button from "../Button/Button";


function Home() {
  const [followLink, setFollowLink] = useState(false);
  const handleClick = () => {
    setFollowLink(!followLink);
  };

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

        <Button title="See more" more="Let's go!" onClick={handleClick} />
        {followLink ? <Navigate to="/ProjectList" /> : ""}
         
        <div>
          <Link to="/about" className="about">
            About me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
