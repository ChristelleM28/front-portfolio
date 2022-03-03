import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Project/Projects";
import Contact from "./components/Contact/Contact";
import Admin from "./components/Admin/Admin";
import DashboardProject from "./components/DashboardProject/DashboardProject";
import DashboardImage from "./components/DashboardImage/DashboardImage";
import "./App.css";

function App() {
  // const [connect, setConnect] = useState("");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Projects" element={<Projects />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        {/* {connect ? ( */}
        <Route path="/Admin" element={<Admin />}></Route>
        {/* ) : null} */}
        <Route
          path="Admin/DashboardProject"
          element={<DashboardProject />}
        ></Route>
        <Route path="Admin/DashboardImage" element={<DashboardImage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
