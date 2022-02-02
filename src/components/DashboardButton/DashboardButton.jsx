import React from "react";
import "./DashboardButton.css";

function DashboardButton({buttonName, className}) {
  return (
    <div>
      
      <button className={`dashboardButton ${className}`} >
        <a>
          <span className="buttonName"> {buttonName} </span>
        </a>
      </button>
    </div>
  );
}

export default DashboardButton;
