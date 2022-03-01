import React from "react";
import axios from "axios";
import DashboardButton from "../DashboardButton/DashboardButton";

const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

function DeleteProject({selectedValue, setSelectedValueToto, setProjects, projects}) {
  // je supprime un  projet en fonction de son id
  const handleDeleteProject = async (e) => {
    e.preventDefault();

    await axios
      .delete(
        `${API_URL}/api/projects/${selectedValue.id}`
        // , {with credential: true}
      )
      .then((response) => {
        if (response.status === 204) {
          alert("Project deleted");

          // je mets à jour la liste des projets
          setProjects(
            projects.filter((project) => project.id !== selectedValue.id)
          );
          setSelectedValueToto({
            project_name:"",
            projet_link: "",
            project_date:"",
            project_description:"",
            });
        } else {
          alert("Error");
        }
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <DashboardButton
        className="delete"
        buttonName="Delete"
        onClick={handleDeleteProject}
      />
    </>
  );
}

export default DeleteProject;
