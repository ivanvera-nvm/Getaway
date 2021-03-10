import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

const Navbar = () => {
  return (
    <div>
      <h1>Navbar Component</h1>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
            <li>
              <NavLink exact to="/user" activeClassName="active">
                User
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/login" activeClassName="active">
                Login
              </NavLink>
            </li>

            <li>
              <NavLink exact to="/register" activeClassName="active">
                Register
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/admin" activeclassName="active">
                Admin
              </NavLink>
            </li>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
