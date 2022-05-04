import React from "react";
import axios from "axios";
import DashboardButton from "../../components/DashboardButton/DashboardButton";
import { toast } from "react-toastify";

const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

/* It's a function that takes in parameters and returns a component. */
function AddProject({
  projects,
  setProjects,
  setSelectedValueToto,
  selectedValue,
  setSubmited,
}) {

  const handleAddProject = async (e) => {
   /* It prevents the default action of the event. */
    e.preventDefault();
    if (
      !selectedValue.project_name ||
      !selectedValue.project_date ||
      !selectedValue.project_description
    ) {
      toast.error("You must provide all mandatories fields");
    } else {
      try {
       //Je fais une promesse
        await axios
          // renvois le state des infos de création
          .post(`${API_URL}/api/projects`, selectedValue)
          .then(function (response) {
            if (response.status === 201) {
              toast.success("New project created!");

              // je mets à jour la liste des projets avec folter qui créé et retourne un tableau contenant tous les éléments initiaux proplus nouveaux
              setProjects(
                projects.filter((project) => project.id !== selectedValue.id)
              );
              setSelectedValueToto({
                project_name: "",
                project_date: "",
                project_description: "",
              });
              setSubmited(true)
            } else {
              toast.error("error");
            }
          });
      } catch (err) {
        console.log(err.response);
        toast.error("error adding project");
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
