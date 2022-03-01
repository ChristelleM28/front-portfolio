import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
// import DashboardButton from "../DashboardButton/DashboardButton";
import Button from "../Button/Button";
import Formulaire from "../Formulaire/Formulaire";
import "../Admin/Admin.css";
import DisconnectButton from "./DisconnectButton";
import AddProject from "./AddProject";
import ModifyProject from "./ModifyProject";
import DeleteProject from "./DeleteProject";

const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

function DashboardProject() {
  //je récupère mes projects
  const [projects, setProjects] = useState("");
  const [submited, setSubmited] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    project_name: "",
    projet_link: "",
    project_date: "",
    project_description: "",
  });
  // je définis mon state de modification
  const [modifyProject, setModifyProject] = useState(false);

  // je gère ma sélection
  const handleChange = (e) => {
      setSelectedValue((prevstate) => ({
        ...prevstate,
        [e.target.name]: e.target.value,
      }));
  
  };

  useEffect(() => {
    (async () => {
      await axios
        .get(`${API_URL}/api/projects/`)
        .then((response) => response.data)
        .then((data) => {
          setProjects(data);
        })
        .catch((err) => {
          console.log(err);
        });
    })();
  }, [modifyProject, submited]);

  //lien pour aller vers le dashboardImage
  const [followLink, setFollowLink] = useState(false);
  const handleClick = () => {
    setFollowLink(!followLink);
  };

  return (
    <div>
      <div>
        <DisconnectButton />
      </div>

      <div>
        <Formulaire
          projects={projects}
          setprojects={setProjects}
          selectedValue={selectedValue}
          setSelectedValueToto={setSelectedValue}
          handleChange={handleChange}
          setModifyProject={setModifyProject}
        />
      </div>

      <div>
        <Button title="Dashboard Image" more="OK!" onClick={handleClick} />
        {followLink ? <Navigate to="/admin/dashboardImage" /> : ""}
      </div>

      <div className="containerDashboardButton">
        <div>
          <AddProject
            selectedValue={selectedValue}
            setSelectedValueToto={setSelectedValue}
            setProjects={setProjects}
            projects={projects}
            setSubmited={setSubmited}
          />
        </div>
        <div>
          <ModifyProject
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            setModifyProject={setModifyProject}
          />
        </div>

        <div>
          <DeleteProject
            selectedValue={selectedValue}
            setSelectedValueToto={setSelectedValue}
            setProjects={setProjects}
            projects={projects}
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardProject;
