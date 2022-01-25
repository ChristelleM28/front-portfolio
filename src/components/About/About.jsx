import React from "react";
import "./About.css";
import Button from "../Button/Button"

function About() {
  return (
    <div className="container">
      <div className="rectangle">
        <div className="aboutMe">
          <h1>ABOUT ME</h1>
          <p>
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
        <Button/> 
      </div>
    </div>
  );
}

export default About;
