import React, {useState} from 'react';
import { Navigate } from "react-router-dom";
import "./Admin.css";
import Button from "../Button/Button";


function Admin() {
  const [followLink, setFollowLink] = useState(false);
  const handleClick = () => {
    setFollowLink(!followLink);
  };

  return (
      <div>
      <form id="formAdmin">
        <h2 className="admin"> ADMIN </h2>
        <div className="containerAdmin">

          <div>
            <label htmlFor="email" className="email">
              <input
                type="email"
                id="email"
                placeholder="@"
                />
            </label>
          </div>

          <div>
            <label htmlFor="password" className="password">
              <input
                type="password"
                id="password"
                placeholder="Password"
              />
            </label>
          </div>

          <Button title="Send" more="Let's go!" onCLick={handleClick} />
        {followLink ? <Navigate to="/Home" /> : ""}
        </div>
      </form>
      </div>

  );
}

export default Admin;
