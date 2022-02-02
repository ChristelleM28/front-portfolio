import React from 'react';
import "./Button.css";

function Button({title, more, onClick}) {
  return <div className="divButton">
    <button className="roundButton" onClick={onClick}>
          <a>
            <span className="title">{title}</span>
            <span className="more">{more}</span>
          </a>
        </button>
  </div>;
}

export default Button;
