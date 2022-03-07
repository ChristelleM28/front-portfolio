import React from "react";
import axios from "axios";
import DashboardButton from "../DashboardButton/DashboardButton";
import { toast } from "react-toastify";

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
          // alert("Image deleted");
          toast.success("Image deleted!");

          // je mets à jour la liste des images
          setImages(images.filter((image) => image.id !== selectedValue.id));
          setSelectedValueToto({
            image_name: "",
            image_url: "",
            image_description: "",
          });
        } else {
          toast.warning("error")
          // alert("Error");
        }
      })

      .catch((err) => {
        toast.warning("error select an image")
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
