import React from 'react';
import "./Button.css";

function Button({title,more}) {
  return <div className="divButton">
    <button className="roundButton">
          <a>
            <span className="title">{title}</span>
            <span className="more">{more}</span>
          </a>
        </button>
  </div>;
}

export default Button;
