import React from "react";
import axios from "axios";
import DashboardButton from "../DashboardButton/DashboardButton";

const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

function AddImage({
  images,
  setImages,
  setSelectedValueToto,
  selectedValue,
  setSubmited,
}) {

  const handleAddImage = async (e) => {
    e.preventDefault();
    if (
      !selectedValue.img_name ||
      !selectedValue.img_url ||
      !selectedValue.img_description
    ) {
      alert("You must provide all datas");
    } else {
      try {
        await axios
          // renvois le state des infos de création
          .post(`${API_URL}/api/images`, selectedValue)
          .then(function (response) {
            if (response.status === 201) {
              alert("New Image Created!");

              // je mets à jour la liste des images
              setImages(
                images.filter((image) => image.id !== selectedValue.id)
              );
              setSelectedValueToto({
                img_name: "",
                img_url: "",
                img_description: "",
              });
              setSubmited(true)
            } else {
              alert("Error");
            }
          });
      } catch (err) {
        // console.log(err.response);
        alert("c'est pas bon! ligne 48 add image");
        // alert(err.response.data);
      }
    }
  };

  return (
    <div className="containerDashboardButton">
      <DashboardButton
        className="add"
        buttonName="Add"
        onClick={handleAddImage}
      />
    </div>
  );
}

export default AddImage;
