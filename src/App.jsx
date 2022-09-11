import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./scenes/Home/Home";
import About from "./scenes/About/About";
import Projects from "./scenes/Project/Projects";
import Contact from "./scenes/Contact/Contact";
import Admin from "./scenes/Admin/Admin";
import DashboardProject from "./scenes/DashboardProject/DashboardProject";
import DashboardImage from "./scenes/DashboardImage/DashboardImage";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Connect from "./scenes/Admin/Connect";

const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

function App() {
  // Vérification de connexion
  const [connected, setConnected] = useState(true);

  // useEffect(() => {
  //   (async () => {
  //     await axios
  //       .post(`${API_URL}/api/auth/refreshToken`, {
  //         withCredentials: true,
  //       })
  //       .then((response) => {
  //         setConnected(response.data.id);
  //         console.log(response);
  //       })
  //       .catch((err) => console.log(err.message));
  //   })();
  // }, [connected]);

  return (
    <div className="App">
      {/* appel au composant d'alerte */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Projects" element={<Projects />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Admin" element={<Connect />}></Route>
        <Route
          path="/Admin"
          element={<Admin setConnected={setConnected} />}
        ></Route>

        {/* {connected (true) ? */}
        <Route
          path="Admin/DashboardProject"
          element={<DashboardProject />}
        ></Route>
         {/* : "/"}  */}

        {/* {userco !== 0 ? <Route path="/admin" element={<Admin />} /> : null} */}

        <Route path="Admin/DashboardImage" element={<DashboardImage />}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
