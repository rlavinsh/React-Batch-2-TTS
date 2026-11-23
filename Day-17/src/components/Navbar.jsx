import React from "react";

import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/services">Services</Link> */}

      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </nav>
  );
};

export default Navbar;
