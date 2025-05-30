import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
// import my_picture from "./imgs/my_picture.jpg";

function Header() {
  return (
    <header className="header container">
      <nav className="links-container">
        <ul className="header__menu">
          <li>
            <Link to="/" className="header__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" className="header__link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/projects" className="header__link">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/about" className="header__link">
              About
            </Link>
          </li>
          <li>
            <Link to="/resume" className=" header__link resume">
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
