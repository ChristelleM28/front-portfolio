import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./ProjectList.css";
import Footer from "../Footer/Footer";

function ProjectList() {
  const datas = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Image 1",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem voluptas fuga distinctio, animi corrupti possimus voluptatum? Quod aut quidem praesentium minima optio, voluptatem laborum adipisci tenetur, nostrum architecto ea cumque?",
    },

    {
      id: 2,
      image:
        "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Image 2",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem voluptas fuga distinctio, animi corrupti possimus voluptatum? Quod aut quidem praesentium minima optio, voluptatem laborum adipisci tenetur, nostrum architecto ea cumque?",
    },

    {
      id: 3,
      image:
        "https://images.pexels.com/photos/592077/pexels-photo-592077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Image 3",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem voluptas fuga distinctio, animi corrupti possimus voluptatum? Quod aut quidem praesentium minima optio, voluptatem laborum adipisci tenetur, nostrum architecto ea cumque?",
    },

    {
      id: 4,
      image:
        "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Image 4",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem voluptas fuga distinctio, animi corrupti possimus voluptatum? Quod aut quidem praesentium minima optio, voluptatem laborum adipisci tenetur, nostrum architecto ea cumque?",
    },

    {
      id: 5,
      image:
        "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Image 5",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem voluptas fuga distinctio, animi corrupti possimus voluptatum? Quod aut quidem praesentium minima optio, voluptatem laborum adipisci tenetur, nostrum architecto ea cumque?",
    },
    {
      id: 6,
      image:
        "https://images.pexels.com/photos/592077/pexels-photo-592077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Image 6",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem voluptas fuga distinctio, animi corrupti possimus voluptatum? Quod aut quidem praesentium minima optio, voluptatem laborum adipisci tenetur, nostrum architecto ea cumque?",
    },

    {
      id: 7,
      image:
        "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Image 7",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem voluptas fuga distinctio, animi corrupti possimus voluptatum? Quod aut quidem praesentium minima optio, voluptatem laborum adipisci tenetur, nostrum architecto ea cumque?",
    },

    {
      id: 8,
      image:
        "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Image 8",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem voluptas fuga distinctio, animi corrupti possimus voluptatum? Quod aut quidem praesentium minima optio, voluptatem laborum adipisci tenetur, nostrum architecto ea cumque?",
    },
  ];

  return (
    <div className="projectListContainer">
      <div >
        <h3 classeName="projectListTitle">Voici un aperçu des projets que j'ai réalisé</h3>
      </div>
      <div className="contentCarousel">
        <Carousel
          infiniteLoop
          thumbWidth={100}
          showIndicators={false}
          // showArrows={false}
          showStatus={false}
        >
          {datas.map((ProjectListSlide) => (
            <div key={ProjectListSlide.id}>
              <img src={ProjectListSlide.image} alt="" className="img-size" />
              <div className="overlay">
                <h3 className="overlay-title">{ProjectListSlide.title}</h3>
                <p className="overlay-text">{ProjectListSlide.text}</p>
                <p className="overlay-description">
                  {ProjectListSlide.description}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <Footer/>
    </div>
  );
}

export default ProjectList;
