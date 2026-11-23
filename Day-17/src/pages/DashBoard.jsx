import React from "react";
import { Outlet, Link } from "react-router-dom";
const DashBoard = () => {
  return (
    <div>
      <h1>welcome to my dashboard page</h1>

      <nav>
        <Link to="course">Course</Link>
        <Link to="profile">Profile</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
};

export default DashBoard;
