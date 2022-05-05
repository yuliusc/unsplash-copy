import { Routes, Route } from "react-router-dom";
import { useLocation, useNavigate, Navigate } from "react-router-dom";

import Home from "./components/Home";
import Results from "./components/Results";

import "./App.css";

function App() {
  let location = useLocation();
  let navigate = useNavigate();

  if (location === "/photos") {
    navigate("/");
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="photos/:searchResult" element={<Results />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
