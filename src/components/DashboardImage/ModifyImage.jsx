import React from "react";
import axios from "axios";
import DashboardButton from "../DashboardButton/DashboardButton";
import { toast } from "react-toastify";

const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

function ModifyImage({ selectedValue, setSelectedValue, setModifyImage }) {
  // je modifie une image en fonction de son id
  const handleModifyImage = async (e) => {
    e.preventDefault();

    await axios
      .put(`${API_URL}/api/images/${selectedValue.id}`, {
        ...selectedValue,
        // project_date: moment(selectedValue.project_date).format("yyyy-MM-DD"),
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Image modified succesfully")
          // alert("Image modified succesfully");
          setSelectedValue({
            img_name:"",
            img_url: "",
            img_description: "",
          });
          setModifyImage(true);
        } else {
          toast.warning("error")
          // alert("Error");
        }
      });
  };


  return (
    <div>
      <DashboardButton
        className="modify"
        buttonName="Modify"
        onClick={handleModifyImage}
      />
    </div>
  );
}

export default ModifyImage;
