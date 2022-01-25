import React from 'react';
import "./Button.css";

function Button() {
  return <div>
    <button className="roundButton">
          <a>
            <span className="titre">See more</span>
            <span className="plus">Let's go!</span>
          </a>
        </button>
  </div>;
}

export default Button;
