import Navbar from "./Navbar"
import Dictionnaire from "./Dictionnaire"
import Home from "./Home"
import About from "./About"
import { Route, Routes } from "react-router-dom"
import React from "react";
import './assets/main.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dictionnaire" element={<Dictionnaire />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App