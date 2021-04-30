import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
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
          <span className="navbar-hamburger-icon" onClick={handleMenuToggle}>
            {/* {mobileMenu ? <FaTimes /> : <FaBars />} */}
            MENU
          </span>

          <ul
            onClick={closeMobileMenu}
            className={mobileMenu ? "navbar-menu active" : "navbar-menu"}>
            <li className="navbar-listItem">
              <NavLink exact to="" className="navbar-link">
                Work
              </NavLink>
            </li>
            <li className="navbar-listItem">
              <NavLink exact to="" className="navbar-link">
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
