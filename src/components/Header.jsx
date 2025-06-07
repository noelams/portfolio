import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "../styles/header.css";
// import my_picture from "./imgs/my_picture.jpg";

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  let lastScrollTop = 0;
  const isActive = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
        if (currentScroll) {
          // if statement to check if we are at the top of the page or not.
          setAtTop(true);
        } else {
          setAtTop(false);
        }
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // this line determines if the scroll is going up or down
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header ${isVisible ? "show" : "hide"} ${
        atTop ? null : "top"
      }`}
    >
      <nav className="links-container">
        <ul className="header__menu">
          <li>
            <Link
              to="home"
              className={`header__link ${isActive ? "active" : ""}`}
              smooth={true}
              duration={300}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              className={`header__link ${isActive ? "active" : ""}`}
              smooth={true}
              duration={300}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="projects"
              className={`header__link ${isActive ? "active" : ""}`}
              smooth={true}
              duration={300}
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="resume"
              className={`header__link ${isActive ? "active" : ""}`}
              smooth={true}
              duration={300}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className={`header__link ${isActive ? "active" : ""}`}
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
