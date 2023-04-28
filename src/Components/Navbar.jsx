import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ client }) => {
  return (
    <nav className="nav-container">
      <div>
        <img src="" alt="Website Logo" />
      </div>
      <div className="nav-links">
        {client === "true" ? (
          <>
            <NavLink to="/welcome" className="link">
              Welcome
            </NavLink>
            <NavLink to="/post" className="link">
              Post
            </NavLink>
            <NavLink to="/signout" className="link">
              Sign Out
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/" className="link">
              Home
            </NavLink>
            <NavLink to="/login" className="link">
              Login
            </NavLink>
            <NavLink to="/register" className="link">
              Register
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
