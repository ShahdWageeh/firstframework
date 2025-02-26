import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top py-4"
      >
        <div className="container">
          <NavLink className="navbar-brand fs-2 fw-bold text-white" to="/">
            START FRAMEWORK
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars fs-3 text-white"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold text-white me-3 d-inline-block px-3"
                  aria-current="page"
                  to="/about"
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold me-3 text-white d-inline-block px-3"
                  aria-current="page"
                  to="/portfolio"
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold text-white d-inline-block px-3"
                  aria-current="page"
                  to="/contact"
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
