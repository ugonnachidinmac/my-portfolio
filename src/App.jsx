import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Portfolio from './Component/Portfolio/Portfolio'
import ContactMe from './Component/ContactMe/ContactMe'
import Connect from './Component/Connect/Connect'
import HireMe from './Component/HireMe/HireMe'

function App() {
  return (
    <Router> {/* Wrap everything inside BrowserRouter */}
      <Navbar />
      <Routes>
      {/* <Route path="/Login" element={<LogIn />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contactMe" element={<ContactMe />} />
        <Route path="/hireMe" element={<HireMe />} />
      </Routes>
      <Connect />
      <Footer />
    </Router>
  );
}

export default App;
