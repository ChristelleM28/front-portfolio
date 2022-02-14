import React, {useState} from 'react';
import { Navigate } from "react-router-dom";
import "./Admin.css";
import Button from "../Button/Button";

const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [followLink, setFollowLink] = useState(false);
  const handleClick = () => {
    setFollowLink(!followLink);
  };

  const login = async () => {
    if (email && password) {
      try{
        const response = await axios.post (`${process.env.API_URL}/api/auth/admin`, { email, password });
  };
  return response.data;
  console.log(response.data);
} catch (err) {
console.log(err.response.data);
}
  } else {
    alert{"Renseigner une valeur"};
  }
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

          <Button title="Send" more="Let's go!" onClick={handleClick} />
        {followLink ? <Navigate to="/Home" /> : ""}
        </div>
      </form>
      </div>

  );
}

export default Admin;
