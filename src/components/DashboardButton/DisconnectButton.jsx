import React, {useState} from 'react';
import DashboardButton from "./DashboardButton";
import {Navigate} from "react-router-dom";

function DisconnectButton() {
  // gestion de la déconnexion
  const [disconnect, setDisconnect] = useState(false);
  const handleDisconnect = () => {
    setDisconnect(!disconnect);
  };

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
    </div>
  )
}

export default DisconnectButton