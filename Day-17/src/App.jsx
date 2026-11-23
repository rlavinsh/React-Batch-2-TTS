import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import PageDetails from "./pages/PageDetails";
import DashBoard from "./pages/DashBoard";
import Course from "./pages/Course";
import Profile from "./pages/Profile";
const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<h1>HomePage</h1>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<PageDetails />} />
          <Route path="/dashboard" element={<DashBoard />}>
            <Route path="course" element={<Course />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

//npm i react-router-dom

export default App;
