import React from "react";
import axios from "axios";
import DashboardButton from "../../components/DashboardButton/DashboardButton";
import { toast } from "react-toastify";

const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

function AddImage({
  images,
  setImages,
  setSelectedValueToto,
  selectedValue,
  setSubmited,
  newImage,
}) {
  const handleAddImage = async (e) => {
    e.preventDefault();
    if (
      !selectedValue.img_name ||
      // !selectedValue.img_url ||
      !selectedValue.img_description ||
      !selectedValue.projects_id
    ) {
      toast.error("You must provide all mandatories fields");
    } else {
      try {
        //Je créé ma fonction pour valider l'envoie du formulaire
        const image = new FormData();
        image.append("file", newImage);
        image.append("data", JSON.stringify(selectedValue));

        await axios
          // renvois le state des infos de création
          .post(`${API_URL}/api/images`, image)
          .then(function (response) {
            if (response.status === 201) {
              toast.success("New Image Created!");
              // je mets à jour la liste des images
              setImages(
                images.filter((image) => image.id !== selectedValue.id)
              );
              setSelectedValueToto({
                img_name: "",
                img_url: "",
                img_filename: "",
                img_description: "",
                projects_id: "",
              });
              setSubmited(true);
            } else {
              alert("Error");
            }
          });
      } catch (err) {
        // console.log(err.response);
        toast.warning("c'est pas bon! ligne 55 AddImage");
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
