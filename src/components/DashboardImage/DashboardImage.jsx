import React from "react";
import DashboardButton from "../DashboardButton/DashboardButton";
import "../Admin/Admin.css";

function DashboardImage() {
  return (
    <div>
      <form id="formAdminImage">
        <h2 className="admin"> DASHBOARD IMAGE </h2>
        <div className="containerAdmin">
          <div>
            <label htmlFor="selectFile" className="selectFile">
              <input type="text" id="selectFile" placeholder="Select File" />
            </label>
          </div>

          <div>
            <label htmlFor="imageName" className="imageName">
              <input type="text" id="imageName" placeholder="Image Name" />
            </label>
          </div>

          <div>
            <label htmlFor="imageUrl" className="imageUrl">
              <input type="url" id="imageUrl" placeholder="Image Url" />
            </label>
          </div>

          <div>
            <label htmlFor="imageDescription" className="imageDescription">
              <textarea
                type="text"
                id="imageDescription"
                placeholder="Image Description"
              />
            </label>
          </div>
          <div className="containerDashboardButton">
            <DashboardButton className="add" buttonName="Add" />
            <DashboardButton className="modify" buttonName="Modify" />
            <DashboardButton className="delete" buttonName="Delete" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default DashboardImage;
