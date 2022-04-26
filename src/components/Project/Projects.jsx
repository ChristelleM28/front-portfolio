import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Footer from "../Footer/Footer";
import ReseauxSociaux from "../ReseauxSociaux/ReseauxSociaux";
import Button from "../Button/Button";
// import UploadImage from "./components/UploadImage/UploadImage";
import "./Projects.css";

// je récupère ma variable d'environnement pour accéder à mon serveur via axios
const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

function Projects() {
  // Je créé ma variable pour stocker mes projets
  const [projects, setProjects] = useState([]);

  const [files, setFiles] = useState([]);

  //Je créé ma variable pour stocker mes images
  const [images, setImages] = useState([]);

  //lien
  const [show, setShow] = useState(false);

  // je fais mon appel à l'api
  useEffect(() => {
    axios
      .get(`${API_URL}/api/projects/`)
      .then(({ data }) => {
        // console.log(data);
        setProjects(data);
      })
      .catch((err) => console.error(err.message));
  }, []);

  // const handleClick = (e) => {
  //   setShow(true)
  // };

  return (
    <div className="container">
      <ReseauxSociaux />
      <div className="projectListContainer">
        <div>
          <h2 className="projectListTitle">MES PROJETS</h2>
        </div>
        <div className="contentCarousel">
          <Carousel
            infiniteLoop
            showIndicators={false}
            showStatus={false}
            swipeable
            centerSlidePercentage={50}
            showThumbs={false}
            autoplay={true}
            interval={2000}
            transitionTime={50}
          >
            {projects &&
              projects.map((project) => (
                <div key={project.id}>

                        <img
                          src={`${API_URL}/images/${project.images[0]?.img_filename}`}
                          alt=""
                          className="img-size"
                        />
                    
                  <div className="overlay">
                    <h3 className="overlay-title">{project.project_name}</h3>
                    <p className="overlay-description">
                      {project.project_description}
                    </p>

                    {/* <Button
                      className="button-carousel"
                      title="En savoir plus"
                      onClick={() => handleClick(e)}
                    /> */}
                  </div>
                </div>
              ))}

          </Carousel>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Projects;
