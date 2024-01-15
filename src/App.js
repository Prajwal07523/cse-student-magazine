import React, { useState, useEffect } from "react";
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import MagazineSection from './Components/MagazineSection';
import Footer from './Components/Footer';
import MagazineCard from './Components/MagazineCard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";

import ReactDOM from 'react-dom/client';





import './App.css';

function App() {



  return (
    <div>
      <Header />
      <NavBar />
     
      <MagazineSection />
      <Footer />
    </div>
  );
}

export default App;
