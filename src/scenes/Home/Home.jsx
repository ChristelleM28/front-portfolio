import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import light from "../../assets/light.png";
import "./Home.css";

function Home() {
  const [followLink, setFollowLink] = useState(false);
  const handleClick = () => {
    setFollowLink(!followLink);
  };

  return (
    <div className="container">
      <div className="rectangleHome">
        <div className="light">
          <img src={light} alt="light" />
        </div>
        <div className="welcome">
          <h2> Bienvenu sur mon </h2>
          <h1 className="titleH1">PORTFOLIO</h1>
          <h2> Je m'appelle <span style={{color:'rgb(var(--blueg))'}}> Christelle </span> et je suis développeuse Web.</h2>
        </div>

        <Button title="Voir plus" more="Allons-y!" onClick={handleClick} />
        {followLink ? <Navigate to="/Projects" /> : ""}

        <div>
          <Link to="/about" className="about">
            A propos de moi...
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
