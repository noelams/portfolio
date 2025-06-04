import React from "react";
import { Link } from "react-scroll";
import "../styles/header.css";
// import my_picture from "./imgs/my_picture.jpg";

function Header() {
  return (
    <header className="header container">
      <nav className="links-container">
        <ul className="header__menu">
          <li>
            <Link
              to="home"
              className="header__link"
              smooth={true}
              duration={300}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              className="header__link"
              smooth={true}
              duration={300}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="projects"
              className="header__link"
              smooth={true}
              duration={300}
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="resume"
              className=" header__link resume"
              smooth={true}
              duration={300}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className="header__link"
              smooth={true}
              duration={300}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
