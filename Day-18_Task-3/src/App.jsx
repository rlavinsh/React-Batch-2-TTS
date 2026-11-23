import React from "react";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import DashBoard from "./pages/DashBoard";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
