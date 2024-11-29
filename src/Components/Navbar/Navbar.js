import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand" href="#page-top">
          <img src="/assets/icon-alodokter-white@2x.png" alt="Alodokter Logo" />
        </a>
        <button
          className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/">
                Beranda
              </Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link
                className="nav-link py-3 px-0 px-lg-3 rounded"
                to="/consultation"
              >
                Konsultasi Dokter
              </Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link
                className="nav-link py-3 px-0 px-lg-3 rounded"
                to="/about-us"
              >
                Tentang Kami
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src="/assets/Profile.png" alt="Profile" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
            <li>
              <button
                className="dropdown-item"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                LOGIN
              </button>
            </li>
            <li>
              {/* Change to Link for Daftar */}
              <Link className="dropdown-item" to="/register-account">
                Daftar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
