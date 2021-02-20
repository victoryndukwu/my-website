import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { TweenMax, Power3 } from "gsap";
import { FaHome } from "react-icons/fa";
import "./Navbar.css";

export const Navbar = () => {
  let emb = useRef(null);

  useEffect(() => {
    TweenMax.from(emb, 3, { opacity: 0, y: 200, ease: Power3.easeOut });
  }, []);

  return (
    <>
      <nav
        className="navbar"
        ref={(el) => {
          emb = el;
        }}>
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo ">
            <FaHome />
          </NavLink>

          {/* nav menu */}
          <ul className="navbar-menu">
            <li className="navbar-listItem">
              <NavLink
                exact
                to=""
                className="navbar-link"
                activeClassName="active-link">
                Work
              </NavLink>
            </li>
            <li className="navbar-listItem">
              <NavLink
                exact
                to=""
                className="navbar-link"
                activeClassName="active-link">
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
