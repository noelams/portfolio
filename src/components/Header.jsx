import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
// import my_picture from "./imgs/my_picture.jpg";

function Header() {
  return (
    <header className="header container">
      {/* <img
        src={my_picture}
        alt="placeholder"
        className="potrait"
        width={35}
        height={35}
      /> */}

      <nav className="links-container">
        <ul className="header__menu">
          <Link to="/home" className="header__link">
            Home
          </Link>
          <Link to="/contact" className="header__link">
            Contact
          </Link>
          <Link to="/Projects" className="header__link">
            Projects
          </Link>
          <Link to="/about" className="header__link">
            About
          </Link>
          <Link to="/resume" className=" header__link resume">
            Resume
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
