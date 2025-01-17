import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tv_series"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            TV Series
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/manga"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Manga
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/top_airing"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Top Airing
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
