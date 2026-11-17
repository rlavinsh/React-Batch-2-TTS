import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
const App = () => {
  return (
    <div>
      {/* <h1>App</h1> */}

      <Routes>
        <Route path="/" element={<h1>HomePage</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
};

//npm i react-router-dom

export default App;
