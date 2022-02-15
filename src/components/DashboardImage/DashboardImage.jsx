import React, {useState} from "react";
import { Navigate } from "react-router-dom";
import DashboardButton from "../DashboardButton/DashboardButton";
import Button from "../Button/Button";
import "../Admin/Admin.css";

function DashboardImage() {

  const [followLink, setFollowLink] = useState(false);
  const handleClick = () => {
    setFollowLink(!followLink);
  };

  const [disconnect, setDisconnect] = useState(false);
  const handleDisconnect = () => {
setDisconnect(!disconnect);
  }
  //dans le handlecClick ajouter le lien axios vers le back pour disconection

  return (
    <div>
      <Button title="Disconnect" onClick={handleDisconnect} />
      {disconnect ? <Navigate to="/admin"/> : ""}

      <form id="formAdmin">
        <h2 className="admin"> DASHBOARD IMAGE </h2>
        <div className="containerAdmin">
          <div>
            <label htmlFor="selectFile" className="selectFile">
              <input type="text" id="selectFile" placeholder="Select File" />
            </label>
          </div>

          <div>
            <label htmlFor="imageName" className="imageName">
              <input type="text" id="imageName" placeholder="Image Name" />
            </label>
          </div>

          <div>
            <label htmlFor="imageUrl" className="imageUrl">
              <input type="url" id="imageUrl" placeholder="Image Url" />
            </label>
          </div>

          <div>
            <label htmlFor="imageDescription" className="imageDescription">
              <textarea
                type="text"
                id="imageDescription"
                placeholder="Image Description"
              />
            </label>
          </div>
          <div> 
            <Button title="Dashboard Project" more="OK!" onClick={handleClick} />
            {followLink ? <Navigate to="/admin/dashboardProject"/> : ""}
          </div>
          <div className="containerDashboardButton">
            <DashboardButton className="add" buttonName="Add" />
            <DashboardButton className="modify" buttonName="Modify" />
            <DashboardButton className="delete" buttonName="Delete" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default DashboardImage;
