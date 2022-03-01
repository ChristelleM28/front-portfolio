import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Admin/Admin.css";

const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

function FormulaireImage({
  images,
  selectedValue,
  setSelectedValueToto,
  handleChange,
  modifyImage,
}) {
  // gère la modification de l'image
  const handleModify = (e) => {
    // setModifyImage(true);
    setSelectedValueToto(
      images.filter((image) => {
        return image.id === parseInt(e.target.value, 10);
      })[0]
    );
  };

  //je récupère les projects
  const [projectsList, setProjectsList] = useState("");
  useEffect(() => {
    (async () => {
      await axios
        .get(`${API_URL}/api/projects/`)
        .then((response) => response.data)
        .then((data) => {
          setProjectsList(data);
        })
        .catch((err) => {
          // console.log(err.response);
          console.log("erreur fomulaire image ligne 36")
        });
    })();
  }, []);

  return (
    <div>
      <form id="formAdmin">
        <h2 className="admin"> DASHBOARD IMAGE </h2>
        <div className="containerAdmin" id="formAdminId">
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


//vérifier le fonctionnement pour lier l'id du projet lié à l'image
          {/* <div>
            <label htmlFor="selectProject" className="selectProject">
              <select
                name="projectName"
                id="projectName"
                value=""
                onChange={handleModify}
              >
                <option selected={!projectsList ? "selected" : ""}>
                  Select a project
                </option>

                {projectsList &&
                  projectsList.map((projects) => {
                    return (
                      <option value={projects.id} key={projects.id}>
                        {projects.project_name}
                      </option>
                    );
                  })}
              </select>
            </label>
          </div> */}

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
