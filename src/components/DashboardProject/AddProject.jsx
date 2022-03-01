import React, { useState } from "react";
import axios from "axios";
import DashboardButton from "../DashboardButton/DashboardButton";

const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

function AddProject({
  projects,
  setProjects,
  setSelectedValueToto,
  selectedValue,
  setSubmited,
}) {

  const handleAddProject = async (e) => {
    e.preventDefault();
    if (
      !selectedValue.project_name ||
      !selectedValue.projet_link ||
      !selectedValue.project_date ||
      !selectedValue.project_description
    ) {
      alert("You must provide all datas");
    } else {
      try {
        await axios
          // renvois le state des infos de création
          .post(`${API_URL}/api/projects`, selectedValue)
          .then(function (response) {
            if (response.status === 201) {
              alert("New Project Created!");

              // je mets à jour la liste des projets
              setProjects(
                projects.filter((project) => project.id !== selectedValue.id)
              );
              setSelectedValueToto({
                project_name: "",
                projet_link: "",
                project_date: "",
                project_description: "",
              });
              setSubmited(true)
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

  return (
    <div className="containerDashboardButton">
      <DashboardButton
        className="add"
        buttonName="Add"
        onClick={handleAddProject}
      />
    </div>
  );
}

export default AddProject;
