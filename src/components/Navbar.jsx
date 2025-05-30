import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';
import logo from '../assets/logo.jpeg'; // Adjust path as per your folder structure

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar px-4">
      {/* Logo + Brand */}
      <NavLink className="navbar-brand d-flex align-items-center" to="/">
        <img src={logo} alt="OTP Logo" className="navbar-logo me-2" />
        <span className="text-dark fw-bold fs-3">OTP</span>
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link text-dark mx-2 ${isActive ? 'active fw-bold' : ''}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `nav-link text-dark mx-2 ${isActive ? 'active fw-bold' : ''}`
              }
            >
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `nav-link text-dark mx-2 ${isActive ? 'active fw-bold' : ''}`
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-link text-dark mx-2 ${isActive ? 'active fw-bold' : ''}`
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
