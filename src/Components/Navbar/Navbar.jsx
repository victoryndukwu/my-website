import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

export const Navbar = () => {
  // setting state
  const [mobileMenu, toggleMobileMenu] = useState(false);
  // changing state
  const handleMenuToggle = () => {
    toggleMobileMenu(!mobileMenu);
  };
  // close mobile menu
  const closeMobileMenu = () => toggleMobileMenu(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <span className="navbar-logo">
            <NavLink exact to="/" className="logo-link">
              Victoryndukwu
            </NavLink>
          </span>
          <div className="navbar-menu">
            <span className="navbar-hamburger-icon" onClick={handleMenuToggle}>
              {mobileMenu ? <FaTimes /> : <FaBars />}
            </span>

            <ul
              onClick={closeMobileMenu}
              className={mobileMenu ? "navbar-menu active" : "navbar-menu"}>
              <li className="navbar-listItem">
                <NavLink exact to="/portfolio" className="navbar-link">
                  Portfolio
                </NavLink>
              </li>
              <li className="navbar-listItem">
                <NavLink exact to="/" className="navbar-link">
                  About
                </NavLink>
              </li>
              <li className="navbar-listItem">
                <NavLink exact to="/" className="navbar-link">
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
