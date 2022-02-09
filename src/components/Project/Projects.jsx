import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Footer from "../Footer/Footer";
import "./Projects.css";

// je récupère ma variable d'environnement pour accéder à mon serveur via axios
const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

function Projects() {
  // // Je créé ma variable pour stocker mes projets
  const [projects, setProjects] = useState([]);
  

  //   // je fais mon appel à l'api
  useEffect(() => {
    axios
      .get(`${API_URL}/api/projects/`)
      .then(({ data }) => {
        // console.log(data);
        setProjects(data);
      })
      .catch((err) => console.error(err.message));
  }, []);


  return (
    <div className="projectListContainer">
      <div>
        <h3 className="projectListTitle">
          Voici un aperçu des projets que j'ai réalisé
        </h3>
      </div>
      <div className="contentCarousel">
        <Carousel
          infiniteLoop
          // thumbWidth={80}
          showIndicators={false}
          // showArrows={false}
          showStatus={false}
        >
          {projects &&
            projects.map((project) => (
              <div key={project.id}>
                <img src={project.projet_link} alt="" className="img-size" />
                <div className="overlay">
                  <h3 className="overlay-title">{project.project_name}</h3>
                  <p className="overlay-description">
                    {project.project_description}
                  </p>
                </div>
              </div>
            ))}
        </Carousel>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
