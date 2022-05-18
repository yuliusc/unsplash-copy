import { Routes, Route } from "react-router-dom";
import { useLocation, useNavigate, Navigate } from "react-router-dom";

import Home from "./components/Home/Home";
import Results from "./components/Results/Results";

import AppContainer from "./App.styles";

function App() {
  let location = useLocation();
  let navigate = useNavigate();

  if (location === "/photos") {
    navigate("/");
  }

  return (
    <div className="App">
      <AppContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="photos/:searchResult" element={<Results />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
