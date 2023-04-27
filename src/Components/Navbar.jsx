import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div>
        <img src="" alt="Website Logo" />
      </div>
      <div className="nav-links">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/login" className="link">
          Login
        </NavLink>
        <NavLink to="/register" className="link">
          Register
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
