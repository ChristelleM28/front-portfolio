import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Button from "../../components/Button/Button";
import FormulaireProject from "../DashboardProject/FormulaireProject";
import DisconnectButton from "../../components/DashboardButton/DisconnectButton";
import AddProject from "./AddProject";
import ModifyProject from "./ModifyProject";
import DeleteProject from "./DeleteProject";
import "../Admin/Admin.css";

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

  // je gère ma sélection I'm creating a new object, which is a copy of the previous state, and I'm updating the value of the key that corresponds to the name of the input that was changed
  const handleChange = (e) => {
    setSelectedValue((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

//j'interroge mon back et récupère l'ensemble de mes projets
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
        <FormulaireProject
          projects={projects}
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
            alert={"The project is deleted!"}
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardProject;