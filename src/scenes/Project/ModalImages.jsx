import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import "./ModalImages.css";

const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

function ModalImages({ onClick, project_description, project_name }) {
  // Je créé m variables pour stocker mes images
  const [images, setImages] = useState([]);

  // je fais mon appel à l'api
  useEffect(() => {
    axios
      .get(`${API_URL}/api/images/`)
      .then(({ data }) => {
        // console.log(data);
        setImages(data);
      })
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <div className="modal-images-container">
      <button className="buttonmodal" onClick={onClick}>
        X
      </button>
      <div className="modalImage">
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
          {images &&
            images.map((image) => (
              <SwiperSlide>
                <div key={image.id} className="swiper-modal-image">
                  <img src={`${API_URL}/images/${image.img_filename}`} alt="" />
                </div>
              </SwiperSlide>
            ))}
          <h2>Hello</h2>
          <h3 className="overlay-title">{project_name}</h3>
        </Swiper>
        <div className="modal-description">
          <p className="overlay-description">{project_description}</p>
        </div>
      </div>
    </div>
  );
}

export default ModalImages