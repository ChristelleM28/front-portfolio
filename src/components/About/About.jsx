import React, { useState } from "react";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import ModalCv from "../Cv/ModalCv";
import ReseauxSociaux from "../ReseauxSociaux/ReseauxSociaux";
import "./About.css";

function About() {
  //j'initialise le state de mes évènements
  const [displayPdf, setDisplayPdf] = useState(false);

  // je définie l'évènement sur lequel fonctionne le clic
  const handleClick = () => {
    setDisplayPdf(true);
  };

  return (
    <div className="container">
      <div className="socialMedia">
        <ReseauxSociaux />
      </div>
      <div className="rectangleAbout">
        <div className="aboutMe">
          <h2>ABOUT ME</h2>
          <p>
            Après 14 ans de service aux clients et 4 ans de gestion de projets
            en étant l'interface entre les clients et les DSI, je décide de me
            reconvertir vers un métier directement orienté tech. <br></br>
            <br></br>
            Je choisis de devenir <strong>développeuse web</strong> et d'intégrer
            la Wild Code School pour passer mon titre.
            <br></br>
            <br></br>Je poursuis ensuite mon parcours par une alternance afin
            d'approfondir mes connaîssances.
            <br></br>
            <br></br>En parallèle, je m'intéresse à tout ce qui peut venir
            compléter mon cursus.
            <br></br>
            <br></br>
            Avec un parcours qui peut sembler atypique, je combine aujourd'hui
            une solide expérience et une formation de qualité qui vont me
            permettre d'évoluer au sein des métiers de la tech'.
          </p>
        </div>
        <Button title="My CV" more="Let's go!" onClick={handleClick} />
      </div>
      <div>
        {displayPdf && <ModalCv onClick={() => setDisplayPdf(!displayPdf)} />}
      </div>
      <Footer />
    </div>
  );
}

export default About;
