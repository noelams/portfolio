import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <img
              src="https://img.icons8.com/?size=100&id=rc2cAKKRITEE&format=png&color=000000"
              alt="Icon"
              width={30}
              height={30}
            />
          </li>

          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
