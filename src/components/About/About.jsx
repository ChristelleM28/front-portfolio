import React from "react";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import cv from "../../assets/cv.pdf";
import "./About.css";

function About() {
const handleClick = (e) => { <img src={cv} alt="CV" ></img>};

  return (
    <div className="container">
      <div className="socialMedia">
        media sociaux ici
      </div>
      <div className="rectangleAbout">
        <div className="aboutMe">
          <h2>ABOUT ME</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facilis
            blanditiis voluptatibus impedit dignissimos accusantium illo fuga
            perspiciatis, voluptas vel unde? Quae soluta eaque totam neque
            doloribus sit nam voluptas.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facilis
            blanditiis voluptatibus impedit dignissimos accusantium illo fuga
            perspiciatis, voluptas vel unde? Quae soluta eaque totam neque
            doloribus sit nam voluptas.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facilis
            blanditiis voluptatibus impedit dignissimos accusantium illo fuga
            perspiciatis, voluptas vel unde? Quae soluta eaque totam neque
            doloribus sit nam voluptas.
                      
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facilis
            blanditiis voluptatibus impedit dignissimos accusantium illo fuga
            perspiciatis, voluptas vel unde? Quae soluta eaque totam neque
            doloribus sit nam voluptas.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facilis
            blanditiis voluptatibus impedit dignissimos accusantium illo fuga
            perspiciatis, voluptas vel unde? Quae soluta eaque totam neque
            doloribus sit nam voluptas.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facilis
            blanditiis voluptatibus impedit dignissimos accusantium illo fuga
            perspiciatis, voluptas vel unde? Quae soluta eaque totam neque
            doloribus sit nam voluptas.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facilis
            blanditiis voluptatibus impedit dignissimos accusantium illo fuga
            perspiciatis, voluptas vel unde? Quae soluta eaque totam neque
            doloribus sit nam voluptas.
</p>
        </div>
        <Button title="My CV" more="Let's go!" onClick={handleClick}/>
        </div>
      <Footer/>
    </div>
    
  );
}

export default About;
