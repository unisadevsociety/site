import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Affiliation from "./components/Affiliation";
import Congratulations from "./components/Congratulations";
import MaintenancePage from "./components/MaintenancePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/affiliation" element={<Affiliation />} />
        <Route exact path="/maintenancePage" element={<MaintenancePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
