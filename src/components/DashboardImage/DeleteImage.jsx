import React from "react";
import axios from "axios";
import DashboardButton from "../DashboardButton/DashboardButton";

const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

function DeleteImage({
  selectedValue,
  setSelectedValueToto,
  setImages,
  images,
}) {
  // je supprime une image en fonction de son id
  const handleDeleteImage = async (e) => {
    e.preventDefault();

    await axios
      .delete(
        `${API_URL}/api/images/${selectedValue.id}`
        // , {with credential: true}
      )
      .then((response) => {
        if (response.status === 204) {
          alert("Image deleted");

          // je mets à jour la liste des images
          setImages(images.filter((image) => image.id !== selectedValue.id));
          setSelectedValueToto({
            image_name: "",
            image_url: "",
            image_description: "",
          });
        } else {
          alert("Error");
        }
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <DashboardButton
        className="delete"
        buttonName="Delete"
        onClick={handleDeleteImage}
      />
    </>
  );
}

export default DeleteImage;
