import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
// import Select from "react-select";
import DashboardButton from "../DashboardButton/DashboardButton";
import Button from "../Button/Button";
import "../Admin/Admin.css";

const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

function DashboardProject() {
  const [projects, setProjects] = useState([]);

  //je récupère mes projects
  useEffect(() => {
    (async () => {
      axios
        .get(`${API_URL}/api/projects/`)
        .then((response) => response.data)
        .then((data) => {
          setProjects(data);
        });
    })();
  }, []);

  // je poste un nouveau projet
  const [newProject, setNewProject] = useState({});

  const handleAddProject = async (e) => {
    e.preventDefault();
    if (
      !newProject.project_name ||
      !newProject.project_description ||
      !newProject.projet_link ||
      !newProject.project_date
    ) {
      alert("You must provide all datas");
    } else {
      try {
        await axios
          // renvois le state des infos de création
          .post(`${API_URL}/api/projects`, newProject)
          .then(function (response) {
            if (response.status === 201) {
              alert("New Project Created!");
              setNewProject("");
            } else {
              alert("Error");
            }
          });
      } catch (err) {
        console.log(err.response);
        alert(err.response.data);
      }
    }
  };

  // je modifie un projet en fonction de son id
  const handleModifyProject = async (e, id) => {
    e.preventDefault();

    await axios.put(`${API_URL}/api/projects/${id}`).then((response) => {
      if (response.status === 200) {
        // je mets à jour la liste des projects
        setProjects.filter((projects) => projects.id !== id);
      }
    });
  };

  // je supprime un  projet en fonction de son id
  const handleDeleteProject = async (e, id) => {
    e.preventDefault();

    await axios.delete(`${API_URL}/api/projects/${id}`).then((response) => {
      if (response.status === 204) {
        // je mets à jour la liste de mes projets
        setProjects.filter((projects) => projects.id !== id);
      }
    });
  };

  //lien pour aller vers le dashboardImage
  const [followLink, setFollowLink] = useState(false);
  const handleClick = () => {
    setFollowLink(!followLink);
  };

  // lien pour gérer la déconnexion
  const [disconnect, setDisconnect] = useState(false);
  const handleDisconnect = () => {
    setDisconnect(!disconnect);
  };

  //dans le handlecClick ajouter le lien axios vers le back pour disconection

  //définition des options pour utilisation de react-select
  // const options = [];

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
              <input
                type="text"
                id="projectName"
                placeholder="Project Name"
                //exemple si on a plusieurs states pour alléger le code
                value={newProject.project_name}
                onChange={(e) =>
                  setNewProject((prevState) => ({
                    ...prevState,
                    project_name: e.target.value,
                  }))
                }
              />
            </label>
            {/*mapper sur le tableau projet et retourner une balise "option" dans laquelle tu affiches le nom du projet */}
          </div>

          <div>
            <label htmlFor="projetLink" className="projetLink">
              <input
                type="text"
                id="projetLink"
                placeholder="Project Link"
                //exemple si on a plusieurs states pour alléger le code
                value={newProject.projet_link}
                onChange={(e) =>
                  setNewProject((prevState) => ({
                    ...prevState,
                    projet_link: e.target.value,
                  }))
                }
              />
            </label>
          </div>

          <div>
            <label htmlFor="projectDate" className="projectDate">
              <input
                type="date"
                id="projectDate"
                placeholder="projectDate"
                value={newProject.project_date}
                onChange={(e) =>
                  setNewProject((prevState) => ({
                    ...prevState,
                    project_date: e.target.value,
                  }))
                }
              />
              {/* <select option={}></select> */}
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
                value={newProject.project_description}
                onChange={(e) =>
                  setNewProject((prevState) => ({
                    ...prevState,
                    project_description: e.target.value,
                  }))
                }
              />
            </label>
          </div>

          <div>
            <Button title="Dashboard Image" more="OK!" onClick={handleClick} />
            {followLink ? <Navigate to="/admin/dashboardImage" /> : ""}
          </div>
          <div className="containerDashboardButton">
            <DashboardButton
              className="add"
              buttonName="Add"
              onClick={handleAddProject}
            />
            <DashboardButton
              className="modify"
              buttonName="Modify"
              onClick={handleModifyProject}
            />
            <DashboardButton
              className="delete"
              buttonName="Delete"
              onClick={handleDeleteProject}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default DashboardProject;
