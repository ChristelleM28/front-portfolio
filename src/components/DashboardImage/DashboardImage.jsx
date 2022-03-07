import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Button from "../Button/Button";
import FormulaireImage from "../Formulaire/FormulaireImage";
import "../Admin/Admin.css";
import DisconnectButton from "../DashboardButton/DisconnectButton";
import AddImage from "./AddImage";
import ModifyImage from "./ModifyImage";
import DeleteImage from "./DeleteImage";
import { toast } from "react-toastify";


const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

function DashboardImage() {
  
  //je récupère mes images
  const [images, setImages] = useState("");
  const [submited, setSubmited] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    img_name: "",
    img_url: "",
    img_description: "",
  });

  // je définis mon state de modification
  const [modifyImage, setModifyImage] = useState(false);

    // je gère ma sélection
  const handleChange = (e) => {
    setSelectedValue((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    (async () => {
      await axios
        .get(`${API_URL}/api/images/`)
        .then((response) => response.data)
        .then((data) => {
          setImages(data);
        })
        .catch((err) => {
          console.log(err);
          toast.error("error")
        });
    })();
  }, [modifyImage, submited]);

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
        <FormulaireImage
          images={images}
          setImages={setImages}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          setSelectedValueToto={setSelectedValue}
          handleChange={handleChange}
          submited={submited}
          />
      </div>

      <div>
        <Button title="Dashboard Image" more="OK!" onClick={handleClick} />
        {followLink ? <Navigate to="/admin/dashboardProject" /> : ""}
      </div>

      <div className="containerDashboardButton">
        <div>
          <AddImage
            selectedValue={selectedValue}
            setSelectedValueToto={setSelectedValue}
            setImages={setImages}
            images={images}
            setSubmited={setSubmited}
          />
        </div>
        <div>
          <ModifyImage
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            setModifyImage={setModifyImage}
          />
        </div>

        <div>
          <DeleteImage
            selectedValue={selectedValue}
            setSelectedValueToto={setSelectedValue}
            setImages={setImages}
            images={images}
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardImage;
