import React from "react";
import "../Admin/Admin.css";
import DashboardButton from "../DashboardButton/DashboardButton";


function DashboardProject() {
  return (
    <div>
      <form id="formAdminProject">
        <h2 className="admin"> DASHBOARD PROJECT </h2>
        <div className="containerAdmin">
          <div>
            <label htmlFor="selectFile" className="selectFile">
              <input type="text" id="selectFile" placeholder="Select File" />
            </label>
          </div>
          <div>
            <label htmlFor="projectName" className="projectName">
              <input type="text" id="projectName" placeholder="Project Name" />
            </label>
          </div>
          <div>
            <label htmlFor="projectDate" className="projectDate">
              <input type="date" id="projectDate" placeholder="projectDate" />
            </label>
          </div>
          <div>
            <label htmlFor="dateCreated" className="dateCreated">
              <input type="date" id="dateCreated" placeholder="Date Created" />
            </label>
          </div>
          <div>
            <label htmlFor="projectDescription" className="projectDescription">
              <textarea
                type="text"
                id="projectDescription"
                placeholder="Project Description"
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

export default DashboardProject;
