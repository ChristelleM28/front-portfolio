import React from "react";
import Button from "../Button/Button";
import "../Admin/Admin.css";


function DashboardProject() {
  return (
    <div>
      <form id="formAdmin">
        <h2 className="admin"> DASHBOARD PROJECT </h2>
        <div className="containerAdmin">

          <div>
            <label htmlFor="selectFile" className="selectFile">
              <input
                type="text"
                id="selectFile"
                placeholder="Select File"
                // value={email}
                // onChange={handleEmailChange}
                // required
              />
            </label>
          </div>

          <div>
            <label htmlFor="projectName" className="projectName">
              <input
                type="text"
                id="projectName"
                placeholder="Project Name"
                // value={password}
                // onChange={password}
              />
            </label>
          </div>

          <div>
            <label htmlFor="projectDate" className="projectDate">
              <input
                type="date"
                id="projectDate"
                placeholder="projectDate"
                // value={password}
                // onChange={password}
              />
            </label>
          </div>

          <div>
            <label htmlFor="dateCreated" className="dateCreated">
              <input
                type="date"
                id="dateCreated"
                placeholder="Date Created"
                // value={password}
                // onChange={password}
              />
            </label>
          </div>

          <div>
            <label htmlFor="projectDescription" className="projectDescription">
              <textarea
                type="text"
                id="projectDescription"
                placeholder="Project Description"
                // value={message}
                // onChange={handleMessageChange}
              />
            </label>
          </div>

        <Button id="o" titre="Add"/> <Button titre="Modify" /> <Button titre="Delete"/>
        </div>
      </form>
    </div>
  );
}

export default DashboardProject;
