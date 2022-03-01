import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import DashboardButton from "../DashboardButton/DashboardButton";
import Button from "../Button/Button";
import Formulaire from "../Formulaire/Formulaire";
import "../Admin/Admin.css";
import moment from "moment";
import DeleteProject from "./DeleteProject";

const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

function DashboardProject() {
  const navigate = useNavigate();
  
  //je récupère mes projects
  const [projects, setProjects] = useState({
    project_name: "",
    projet_link: "",
    project_date: "",
    project_description: "",
  });
  const [submited, setSubmited] = useState(false);

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
    setSelectedValue(
      projects.filter((project) => {
        return project.id === parseInt(e.target.value, 10);
      })[0]
    );
  };

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

  // // je poste un nouveau projet
  // const [newProject, setNewProject] = useState({
  //   project_name: "",
  //   projet_link: "",
  //   project_date: "",
  //   project_description: "",
  // });

  // const handleAddProject = async (e) => {
  //   e.preventDefault();
  //   if (
  //     !newProject.project_name ||
  //     !newProject.project_description ||
  //     !newProject.projet_link ||
  //     !newProject.project_date
  //   ) {
  //     alert("You must provide all datas");
  //   } else {
  //     try {
  //       await axios
  //         // renvois le state des infos de création
  //         .post(`${API_URL}/api/projects`, newProject)
  //         .then(function (response) {
  //           if (response.status === 201) {
  //             alert("New Project Created!");
  //             setNewProject({
  //               project_name: "",
  //               projet_link: "",
  //               project_date: "",
  //               project_description: "",
  //             });
  //           } else {
  //             alert("Error");
  //           }
  //         });
  //     } catch (err) {
  //       console.log(err.response);
  //       alert(err.response.data);
  //     }
  //   }
  // };

  // je modifie un projet en fonction de son id
  const handleModifyProject = async (e, id) => {
    e.preventDefault();

    await axios
      .put(`${API_URL}/api/projects/${selectedValue.id}`, {
        ...selectedValue,
        project_date: moment(selectedValue.project_date).format("yyyy-MM-DD"),
      })
      .then((response) => {
        if (response.status === 200) {
          alert("Project modified succesfully");
          setSelectedValue({});
          setModifyProject(false);
          setSubmited(!submited);
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
          setProjects(
            projects.filter((projects) => projects.id !== selectedValue.id)
          );
          setModifyProject(false);
          setSelectedValue({});
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

      <div>
        <Formulaire />
      </div>

      <div>
        <Button title="Dashboard Image" more="OK!" onClick={handleClick} />
        {followLink ? <Navigate to="/admin/dashboardImage" /> : ""}
      </div>

      <div>
        <DeleteProject/>
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
  );
}

export default DashboardProject;
