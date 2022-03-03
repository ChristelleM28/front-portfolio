import React from "react";
import "./DashboardButton.css";

function DashboardButton({buttonName, className, onClick }) {
  return (
    <div>
      
      <button className={`dashboardButton ${className}`} onClick={onClick} >
        <a>
          <span className="buttonName"> {buttonName} </span>
        </a>
      </button>
    </div>
  );
}

export default DashboardButton;
