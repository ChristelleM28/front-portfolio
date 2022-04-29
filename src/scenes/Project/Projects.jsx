import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import ReseauxSociaux from "../../components/ReseauxSociaux/ReseauxSociaux";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import ModalImages from "./ModalImages";
import "./Projects.css";

// je récupère ma variable d'environnement pour accéder à mon serveur via axios
const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

function Projects() {
  // Je créé ma variable pour stocker mes projets
  const [projects, setProjects] = useState([]);
  
  //lien
  const [showImages, setShowImages] = useState(false);

    const handleClick = () => {
      setShowImages(true);
    };


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


  return (
    <div className="container">
      <ReseauxSociaux />
      <div className="project-list-container">
        <div>
          <h2 className="project-list-title">MES PROJETS</h2>
        </div>
        <div className="content-carousel">
          <Swiper
            className="mySwiper-container"
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay
            loop
            centeredSlides={false}
            speed={700}
            breakpoints={{
              720: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {projects &&
              projects.map((project) => (
                <SwiperSlide>
                  <div key={project.id} className="swiper-overlay-image">
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

                      <Button
                        className="button-carousel"
                        title="En savoir plus"
                        more="Plus"
                        onClick={handleClick}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div className="modal-image">
          {showImages && (
            <ModalImages onClick={() => setShowImages(!showImages)} />
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Projects;
