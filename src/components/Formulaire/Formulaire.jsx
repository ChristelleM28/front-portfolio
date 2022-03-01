import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "../Admin/Admin.css";

const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

function Formulaire({
  projects,
  setProjects,
  selectedValue,
  setSelectedValueToto,
  handleChange,
  newProject,
  modifyProject,
  setModifyProject,
}) {
  // gère la modification du project
  const handleModify = (e) => {
    setModifyProject(true);
    setSelectedValueToto(
      projects.filter((project) => {
        return project.id === parseInt(e.target.value, 10);
      })[0]
    );
  };

  return (
    <div>
      <form id="formAdmin">
        <h2 className="admin"> DASHBOARD PROJECT </h2>
        <div className="containerAdmin" id="formAdminId">
          <div>
            <label htmlFor="selectFile" className="selectFile">
              <select name="project" id="project" value ="" onChange={handleModify}>
                <option selected={!modifyProject ? "selected": "" }>Select a projects</option>
                {projects &&
                  projects.map((project) => {
                    return (
                      <option value={project.id} key={project.id}>
                        {project.project_name}
                      </option>
                    );
                  })}
              </select>
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
                value={selectedValue.project_name}
                onChange={handleChange}
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
                onChange={handleChange}
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
                value={moment(selectedValue.project_date).format("yyyy-MM-DD")}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label htmlFor="dateCreated" className="dateCreated">
              <input
                readOnly={true}
                id="dateCreated"
                placeholder="Date Created"
                name="datecreated"
                value={moment().format("DD / MM / yyyy")}
                hidden={false}
              />
            </label>
          </div>

          <div>
            <label htmlFor="projectDescription" className="projectDescription">
              <textarea
                id="projectDescription"
                placeholder="Project Description"
                name="project_description"
                value={selectedValue.project_description}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Formulaire;
