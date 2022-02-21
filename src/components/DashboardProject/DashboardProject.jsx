import React, {useState, useEffect} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import axios from "axios";
import AsyncSelect from "react-select/async";
import DashboardButton from "../DashboardButton/DashboardButton";
import Button from "../Button/Button";
import "../Admin/Admin.css";
import moment from "moment";

const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

// déclaration de moment.js
// const now = moment("2021-12-31 12:00").formatWithJDF('dd.MM.yyyy');
// console.log(now);

function DashboardProject() {
  const navigate = useNavigate()
  //je récupère mes projects
  const [projects, setProjects] = useState("");
  const [submited, setSubmited] = useState(false)

  // je définis mon state de modification
  const [modifyProject, setModifyProject] = useState(false);

  //définition des options pour utilisation de react-select
  const [inputValue, setValue] = useState("Select file");

  const [selectedValue, setSelectedValue] = useState({});

  // je gère mon changement
  const handleInputChange = (value) => {
    setValue(value);
  };
  // je gère ma sélection
  const handleChange = (e) => {
    setModifyProject(true);
    setSelectedValue(projects.filter(project => {
      return project.id === parseInt(e.target.value, 10)
    })[0])
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
  }, [submited]);

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
              // setSelectedValue("");
              // setProjects({
              //   project_name: "",
              //   projet_link: "",
              //   project_date: "",
              //   project_description: "",
              // });
              // document.getElementById("projectDate").value = "";
              // document.getElementById("projectName").value = "";
              // document.getElementById("projetLink").value = "";
              // document.getElementById("projectDescription").value = "";

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
          setSelectedValue({})
          setModifyProject(false)
          setSubmited(!submited)

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
          setProjects(projects.filter((projects) => projects.id !== selectedValue.id));
          setValue("");
          setModifyProject(false);
          setSelectedValue({})

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
        {disconnect ? <Navigate to="/admin"/> : ""}
      </div>

      <form id="formAdmin">
        <h2 className="admin"> DASHBOARD PROJECT </h2>
        <div className="containerAdmin" id="formAdminId">
          <div>
            <label htmlFor="selectFile" className="selectFile">
              <pre></pre>

              {/*<AsyncSelect*/}
              {/*  cacheOptions*/}
              {/*  defaultOptions*/}
              {/*  value={selectedValue}*/}
              {/*  getOptionLabel={(e) => e.project_name}*/}
              {/*  getOptionValue={(e) => e.id}*/}
              {/*  loadOptions={loadOptions}*/}
              {/*  onInputChange={handleInputChange}*/}
              {/*  onChange={handleChange}*/}
              {/*/>*/}
              <select name="project" id="project" onChange={handleChange}>
                <option defaultChecked={true}>Choisir</option>
                {projects && projects.map(project => {
                  return (
                    <option value={project.id}>{project.project_name}</option>
                  )
                })}
              </select>

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
                value={modifyProject ? selectedValue.project_name : newProject.project_name}
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
                value={modifyProject ? selectedValue.projet_link : newProject.projet_link}
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

                //utilisation de la bibliothèque moment pour conversion date
                //value={moment(selectedValue.project_date).format("yyyy-MM-DD")}

                value={modifyProject ? moment(selectedValue.project_date).format("yyyy-MM-DD") : newProject.project_date}

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

                value={moment(selectedValue.datecreated).format("yyyy-MM-DD")}
                hidden={true}

              />
            </label>
          </div>

          <div>
            <label htmlFor="projectDescription" className="projectDescription">
              <textarea
                id="projectDescription"
                placeholder="Project Description"
                name="project_description"
                value={modifyProject ? selectedValue.project_description : newProject.project_description}
                onChange={modify}
              />
            </label>
          </div>

          <div>
            <Button title="Dashboard Image" more="OK!" onClick={handleClick}/>
            {followLink ? <Navigate to="/admin/dashboardImage"/> : ""}
          </div>
        </div>
      </form>

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
  );
}

export default DashboardProject;
