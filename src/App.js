// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./Components/Header";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      {/* Full-height column: Header (auto), Main (fills), Footer (bottom) */}
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header />

        {/* Main grows to push footer down */}
        <main style={{ flex: 1, position: "relative", zIndex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            {/* add more routes here */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
