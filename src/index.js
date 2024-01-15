// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adminlogin from "./Components/Adminlogin";
import AddMagazine from "./Components/AddMagazine";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Adminlogin />} /> 
        <Route path="/add" element={<AddMagazine />} />
      </Routes>
    </BrowserRouter>
  );
  
  reportWebVitals();
