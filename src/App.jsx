import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ProjectList from "./components/ProjectList/ProjectList";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Admin from "./components/Admin/Admin";
import DashboardProject from "./components/DashboardProject/DashboardProject";
import DashboardImage from "./components/DashboardImage/DashboardImage";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">Template Front-End</header> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/ProjectList" element={<ProjectList />}></Route>
        <Route path="/Project" element={<Project />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Admin" element={<Admin/>}>
          <Route path="DashboardProject" element={<DashboardProject />}></Route>
          <Route path="DashboardImage" element={<DashboardImage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
