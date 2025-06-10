// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../store.jsx";

const Navbar = () => {
  const { favorites } = useAppContext();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container position-relative">

        {/* Enlaces a secciones, texto pequeño */}
        <div className="position-absolute start-0 ms-3 d-flex gap-3">
          <a href="#characters" className="nav-link text-light small">
            Characters
          </a>
          <a href="#planets" className="nav-link text-light small">
            Planets
          </a>
          <a href="#vehicles" className="nav-link text-light small">
            Vehicles
          </a>
        </div>

        {/* Logo central */}
        <NavLink to="/" className="navbar-brand mx-auto p-0">
          <img
            src="/img/logo.png"
            alt="Star Wars Blog"
            style={{ height: "50px", objectFit: "contain" }}
          />
        </NavLink>

        {/* Enlace de favoritos a la derecha */}
        <div className="position-absolute end-0 me-3">
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              "nav-link text-light" + (isActive ? " active" : "")
            }
          >
            Favorites <span className="badge bg-secondary">{favorites.length}</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
