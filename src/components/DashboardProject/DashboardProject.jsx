import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import DashboardButton from "../DashboardButton/DashboardButton";
import Button from "../Button/Button";
import "../Admin/Admin.css";
import axios from "axios";

function DashboardProject() {

  const [projects, setProjects] = useState([]);

  //je récupère mes projects
  useEffect(() => {
    (async () => {
    axios.get("http://localhost:8000/api/projects/")
    .then((response) => response.data)
    .then((data) => {
      setProjects(data);
    });
  })();
}, []);

  const handleDelete = async (e, id) => {
    e.preventDefault();

  await axios
  .delete(`http://localhost:8000/api/projects/${id}`)
  .then((response) => {
  if (response.status === 204) {
    // je mets à jour la liste de mes projets
    setProjects.filter((projects) => projects.id !==id)
  };
});
  };

  const [followLink, setFollowLink] = useState(false);
  const handleClick = () => {
    setFollowLink(!followLink);
  };

  const [disconnect, setDisconnect] = useState(false);
  const handleDisconnect = () => {
    setDisconnect(!disconnect);
  };

  //dans le handlecClick ajouter le lien axios vers le back pour disconection


  return (
    <div>
      <div className="disconnectContainer">
        <DashboardButton
          className="disconnectButton"
          buttonName="Disconnect"
          onClick={handleDisconnect}
        />
        {disconnect ? <Navigate to="/admin" /> : ""}
      </div>
      <form id="formAdmin">
        <h2 className="admin"> DASHBOARD PROJECT </h2>
        <div className="containerAdmin">
          <div>
            <label htmlFor="selectFile" className="selectFile">
              <input type="text" id="selectFile" placeholder="Select File" />
            </label>
          </div>
          <div>
            <label htmlFor="projectName" className="projectName">
              <input type="text" id="projectName" placeholder="Project Name" value="" />
            </label>
            {/*mapper sur le tableau projet et retourner une balise "option" dans laquelle tu affiches le nom du projet */}
          </div>
          <div>
            <label htmlFor="projectDate" className="projectDate">
              {/* <input type="date" id="projectDate" placeholder="projectDate" /> */}
<select option={}></select>
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
          <div>
            <Button title="Dashboard Image" more="OK!" onClick={handleClick} />
            {followLink ? <Navigate to="/admin/dashboardImage" /> : ""}
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
