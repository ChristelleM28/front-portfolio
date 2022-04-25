import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Admin/Admin.css";

const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

function FormulaireImage({
  images,
  selectedValue,
  setSelectedValue,
  setSelectedValueToto,
  handleChange,
  modifyImage,
  submited,
  handleNewImage,
  newImage
}) {
  // Je récupère les projets
  const [projects, setProjects] = useState("");

  // gère la modification de l'image
  const handleModify = (e) => {
    // setModifyImage(true);
    setProjects();
    setSelectedValueToto(
      images.filter((image) => {
        return image.id === parseInt(e.target.value, 10);
      })[0]
    );
  };

  const onChange = (e) => {
    setSelectedValue({ ...selectedValue, projects_id: e.target.value });
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
  }, [submited]);

  return (
    <div>
      <form id="formAdmin">
        <h2 className="admin"> DASHBOARD IMAGE </h2>
        <div className="containerAdmin">
          <div>
            <label htmlFor="selectFile" className="selectFile">
              <select name="image" id="image" value="" onChange={handleModify}>
                <option selected={!modifyImage ? "selected" : ""}>
                  Select an image
                </option>
                {images &&
                  images.map((image) => {
                    return (
                      <option value={image.id} key={image.id}>
                        {image.img_name}
                      </option>
                    );
                  })}
              </select>
            </label>
          </div>

          <div>
            <label htmlFor="selectProject" className="selectProject">
              <select name="projectName" id="projectName" onChange={onChange}>
                {/* initialisation du projet suite submit sélection */}
                <option
                  selected={selectedValue.projects_id === "" ? "selected" : ""}
                >
                  Select a project
                </option>

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
            <label htmlFor="imageName" className="imageName">
              <input
                type="text"
                id="imageName"
                name="img_name"
                placeholder="Image Name"
                //exemple si on a plusieurs states pour alléger le code
                value={selectedValue.img_name}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label htmlFor="imgUrl" className="imgUrl">
              <input
                type="text"
                id="imgUrl"
                name="img_url"
                placeholder="Image Url"
                value={selectedValue.img_url}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <input
              type="file"
              id="imgFilename"
              name="img_filename"
              accept="image/*"
              value={newImage.filename}
              onChange={handleNewImage}
            />
          </div>

          <div>
            <label htmlFor="imageDescription" className="imageDescription">
              <textarea
                id="imageDescription"
                placeholder="Image Description"
                name="img_description"
                value={selectedValue.img_description}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormulaireImage;
