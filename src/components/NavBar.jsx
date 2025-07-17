import React from "react";
import { NavLink } from "react-router-dom";
import './index.css';

function NavBar () {
    return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-uppercase px-4 fixed-top" id="mainNav">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#page-top">JOHN DOE</a>
          <button
            className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span> {/* C'est ici que le "burger" apparaît */}
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <NavLink to="/" className={({ isActive }) => `nav-link text-light py-3 px-0 px-lg-3 rounded${isActive ? ' active' : ''}`}>Home</NavLink>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <NavLink to="/services" className={({ isActive }) => `nav-link text-light py-3 px-0 px-lg-3 rounded${isActive ? ' active' : ''}`}>Services</NavLink>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <NavLink to="/portfolio" className={({ isActive }) => `nav-link text-light py-3 px-0 px-lg-3 rounded${isActive ? ' active' : ''}`}>Portfolio</NavLink>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <NavLink to="/contact" className={({ isActive }) => `nav-link text-light py-3 px-0 px-lg-3 rounded${isActive ? ' active' : ''}`}>Contact</NavLink>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <NavLink to="/about" className={({ isActive }) => `nav-link text-light py-3 px-0 px-lg-3 rounded${isActive ? ' active' : ''}`}>Mentions légales</NavLink>
              </li>
            </ul>
          </div>
        </div>
  </nav>

  
)
}

export default NavBar;