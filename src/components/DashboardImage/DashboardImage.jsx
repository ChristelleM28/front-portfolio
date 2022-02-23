import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import DashboardButton from "../DashboardButton/DashboardButton";
import Button from "../Button/Button";
import "../Admin/Admin.css";

const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

function DashboardImage() {
  // je récupère mes images
  const [images, setImages] = useState("");

  const [submited, setSubmited] = useState(false);

  // je définis mon state de modification
  const [modifyImage, setModifyImage] = useState(false);

  // je sélectione mes données
  const [selectedValue, setSelectedValue] = useState({});

  // je gère ma sélection
  const handleChange = (e) => {
    setModifyImage(true);
    setSelectedValue(
      images.filter((image) => {
        return image.id === parseInt(e.target.value, 10);
      })[0]
    );
  };

  // je récupère mes images
  useEffect(() => {
    (async () => {
      axios
        .get(`${API_URL}/api/images/`)
        .then((response) => response.data)
        .then((data) => {
          setImages(data);
        });
    })();
  }, [submited]);

  //J'ajoute une nouvelle image
  const [newImage, setNewImage] = useState({
    img_name: "",
    img_url: "",
    img_description: "",
  });

  const handleAddImage = async (e) => {
    e.preventDefault();
    if (!newImage.img_name || !newImage.img_url || !newImage.img_description) {
      alert("You must provide all datas");
    } else {
      try {
        await axios
          .post(`${API_URL}/api/images`, newImage)
          .then(function (response) {
            if (response.status === 201) {
              alert("New image added");
            } else {
              alert("Error");
            }
          });
      } catch (err) {
        alert(err.response.data);
      }
    }
  };

  // je modifie une image
  const handleModifyImage = async (e, id) => {
    e.preventDefault();

    await axios
      .put(`${API_URL}/api/images/${selectedValue.id}`, selectedValue)
      .then((response) => {
        if (response.status === 200) {
          alert("Image modified succesfully");
          setSelectedValue({});
          setModifyImage(false);
          setSubmited(!submited);
        } else {
          alert("Error");
        }
      });
  };

  // je conditionne mon changement
  const modify = (e) => {
    if (modifyImage === false) {
      setNewImage((prevState) => ({
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

  //Je supprime une image
  const handleDeleteImage = async (e) => {
    e.preventDefault();

    await axios
      .delete(`${API_URL}/api/images/${selectedValue.id}`)
      .then((response) => {
        if (response.status === 204) {
          alert("Image deleted successfully");
          //je mets à jour la liste des images
          setImages(images.filter((images = images.id !== selectedValue.id)));
          setModifyImage(false);
          setSelectedValue({});
        } else {
          alert("Error");
        }
      });
  };

  //Pour aller vers le dashboardProjet
  const [followLink, setFollowLink] = useState(false);
  const handleClick = () => {
    setFollowLink(!followLink);
  };


  //Pour gérer la déconnexion
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

      <form id="formAdmin">

        <h2 className="admin"> DASHBOARD IMAGE </h2>
        <div className="containerAdmin">
          <div>
            <label htmlFor="selectFile" className="selectFile">
              <select name="image" id="image" onChange={handleChange}>
                <option defaultChecked={true}>Select an image</option>
                {images &&
                  images.map((image) => {
                    return <option value={image.id}>{image.img_name}</option>;
                  })}
              </select>
            </label>
          </div>

          <div>
            <label htmlFor="imageName" className="imageName">
              <input
                type="text"
                id="imageName"
                placeholder="Image Name"
                value={modifyImage ? selectedValue.img_name : newImage.img_name}
                onChange={modify}
              />
            </label>
          </div>

          <div>
            <label htmlFor="imageUrl" className="imageUrl">
              <input
                type="url"
                id="imageUrl"
                placeholder="Image Url"
                value={modifyImage ? selectedValue.img_name : newImage.img_url}
                onChange={modify}
              />
            </label>
          </div>

          <div>
            <label htmlFor="imageDescription" className="imageDescription">
              <textarea
                type="text"
                id="imageDescription"
                placeholder="Image Description"
                value={
                  modifyImage
                    ? selectedValue.img_name
                    : newImage.img_description
                }
                onChange={modify}
              />
            </label>
          </div>

          <div>
            <Button
              title="Dashboard Project"
              more="OK!"
              onClick={handleClick}
            />
            {followLink ? <Navigate to="/admin/dashboardProject" /> : ""}
          </div>
        </div>
      </form>

      <div className="containerDashboardButton">
        <DashboardButton
          className="add"
          buttonName="Add"
          onClick={handleAddImage}
        />
        <DashboardButton
          className="modify"
          buttonName="Modify"
          onClick={handleModifyImage}
        />
        <DashboardButton
          className="delete"
          buttonName="Delete"
          onClick={handleDeleteImage}
        />
      </div>
    </div>
  );
}

export default DashboardImage;
