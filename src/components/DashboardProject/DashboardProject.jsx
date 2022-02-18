import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import AsyncSelect from "react-select/async";
import DashboardButton from "../DashboardButton/DashboardButton";
import Button from "../Button/Button";
import "../Admin/Admin.css";

const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

function DashboardProject() {
  //je récupère mes projects
  const [projects, setProjects] = useState("");

  // je définis mon state de modification
  const [modifyProject, setModifyProject] = useState(false);

  //définition des options pour utilisation de react-select
  const [inputValue, setValue] = useState("Select file");
  const [selectedValue, setSelectedValue] = useState("");
  // je gère mon changement
  const handleInputChange = (value) => {
    setValue(value);
  };
  // je gère ma sélection
  const handleChange = (value) => {
    setSelectedValue(value);
    setModifyProject(true);
  };
  // je charge mon option avec l'appel à l'API
  const loadOptions = (inputValue) => {
    return fetch(`${API_URL}/api/projects/${inputValue}`).then((res) =>
      res.json()
    );
  };
  //`http://jsonplaceholder.typicode.com/posts?userId=${inputValue}`).then(res => res.json());
  // console.log(inputValue);

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
  const [newProject, setNewProject] = useState({
    project_name: "",
    projet_link: "",
    project_date: "",
    project_description: "",
  });

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

    await axios
      .put(`${API_URL}/api/projects/${selectedValue.id}`, selectedValue)
      .then((response) => {
        if (response.status === 200) {
          alert("Project modified succesfully");
          
          // je mets à jour la liste des projects
          setProjects.filter((projects) => projects.id !== selectedValue.id);
            } else {
          alert("Error");
        }
      });
  };

  //je conditionne mon changement
  const modify = (e) => {
    if (modifyProject === false) {
      setNewProject((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    } else {
      setSelectedValue((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  // je supprime un  projet en fonction de son id
  const handleDeleteProject = async (e, id) => {
    e.preventDefault();

    await axios
      .delete(`${API_URL}/api/projects/${selectedValue.id}`)
      .then((response) => {
        if (response.status === 204) {
          alert("Project deleted");
          // je mets à jour la liste des projets
          setProjects.filter((projects) => projects.id !== selectedValue.id);
        } else {
          alert("Error");
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
              <pre></pre>
              <AsyncSelect
                cacheOptions
                defaultOptions
                value={selectedValue}
                getOptionLabel={(e) => e.project_name}
                getOptionValue={(e) => e.id}
                loadOptions={loadOptions}
                onInputChange={handleInputChange}
                onChange={handleChange}
              />

              <pre></pre>
            </label>
          </div>

          <div>
            <label htmlFor="projectName" className="projectName">
              <input
                type="text"
                id="projectName"
                name="project_name"
                placeholder="Project Name"
                //exemple si on a plusieurs states pour alléger le code
                // value={newProject.project_name}
                value={selectedValue.project_name}
                onChange={modify}
              />
            </label>
            {/*mapper sur le tableau projet et retourner une balise "option" dans laquelle tu affiches le nom du projet */}
          </div>

          <div>
            <label htmlFor="projetLink" className="projetLink">
              <input
                type="text"
                id="projetLink"
                name="projet_link"
                placeholder="Project Link"
                value={selectedValue.projet_link}
                onChange={modify}
              />
            </label>
          </div>

          <div>
            <label htmlFor="projectDate" className="projectDate">
              <input
                type="date"
                id="projectDate"
                placeholder="projectDate"
                name="project_date"
                value={selectedValue.project_date}
                onChange={modify}
              />
            </label>
          </div>

          <div>
            <label htmlFor="dateCreated" className="dateCreated">
              <input
                type="date"
                id="dateCreated"
                placeholder="Date Created"
                name="datecreated"
                value={selectedValue.datecreated}
              />
            </label>
          </div>

          <div>
            <label htmlFor="projectDescription" className="projectDescription">
              <textarea
                type="text"
                id="projectDescription"
                placeholder="Project Description"
                name="project_description"
                value={selectedValue.project_description}
                onChange={modify}
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
