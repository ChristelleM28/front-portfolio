import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Button from "../Button/Button";
import "./Admin.css";
import { toast } from "react-toastify";

const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

function Admin({ connected, setConnected }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [followLink, setFollowLink] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
    toast.error("You must provide all fields");
    } else {
      try {
        const response = await axios.post(
          `${API_URL}/api/auth/admin`,
          {
            email,
            password,
          },
          { withCredentials: true }
        );

        if (response.status === 200) {
          Navigate("/admin");
          alert("You're Login");
          setEmail("");
          setPassword("");
          setFollowLink(!followLink);
        } else {
          toast.warning("Error");
        }
      } catch (err) {
        toast.error("error ligne 41 containerAdmin");
      }
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>

          <div>
            <label htmlFor="password" className="password">
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          <Button title="Send" more="Let's go!" onClick={handleSubmit} />
          {followLink ? <Navigate to="/admin/dashboardProject" /> : ""}
        </div>
      </form>
    </div>
  );
}

export default Admin;
