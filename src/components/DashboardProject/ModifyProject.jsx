import React from "react";
import moment from "moment";
import axios from "axios";
import DashboardButton from "../DashboardButton/DashboardButton";
import { toast } from "react-toastify";

const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

function ModifyProject({ selectedValue, setSelectedValue, setModifyProject }) {
  // je modifie un projet en fonction de son id
  const handleModifyProject = async (e) => {
    e.preventDefault();

    await axios
      .put(`${API_URL}/api/projects/${selectedValue.id}`, {
        ...selectedValue,
        project_date: moment(selectedValue.project_date).format("yyyy-MM-DD"),
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Project modified succesfully");
          setSelectedValue({
            project_name:"",
            projet_link: "",
            project_date: "",
            project_description: "",
          });
          setModifyProject(false);
        } else {
          alert("Error");
        }
      });
  };


  return (
    <div>
      <DashboardButton
        className="modify"
        buttonName="Modify"
        onClick={handleModifyProject}
      />
    </div>
  );
}

export default ModifyProject;
