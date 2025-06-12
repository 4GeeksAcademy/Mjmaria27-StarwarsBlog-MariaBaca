// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../store.jsx";

const Navbar = () => {
  const { favorites, removeFavorite } = useAppContext();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Alterna el dropdown
  const toggleDropdown = () => setOpen((prev) => !prev);

  // Cierra si haces click fuera
  useEffect(() => {
    const onClickOutside = (e) => {
      if (
        open &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  return (
    <nav className="navbar navbar-dark bg-dark sticky-top">
      <div className="container position-relative">

        {/* Secciones (izquierda) */}
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

        {/* Logo (centro) */}
        <NavLink to="/" className="navbar-brand mx-auto p-0">
          <img
            src="/img/logo.png"
            alt="Star Wars Blog"
            style={{ height: "50px", objectFit: "contain" }}
          />
        </NavLink>

        {/* Favorites Dropdown (derecha) */}
        <div className="position-absolute end-0 me-3">
          <div className="dropdown position-relative">
            <button
              ref={buttonRef}
              className="btn btn-outline-light"
              onClick={toggleDropdown}
            >
              Favorites {favorites.length} ▾
            </button>

            <ul
              ref={dropdownRef}
              className={`dropdown-menu dropdown-menu-end${open ? " show" : ""}`}
              style={{ minWidth: "200px" }}
            >
              {favorites.length === 0 ? (
                <li>
                  <span className="dropdown-item-text text-muted">
                    No favorites
                  </span>
                </li>
              ) : (
                favorites.map((item) => (
                  <li
                    key={`${item.type}-${item.uid}`}
                    className="d-flex justify-content-between align-items-center px-3"
                  >
                    <span className="dropdown-item-text">{item.name}</span>
                    <button
                      className="btn btn-sm btn-link text-danger p-0"
                      onClick={() => removeFavorite(item)}
                      aria-label={`Remove ${item.name}`}
                    >
                      🗑️
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
