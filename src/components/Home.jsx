import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="home-text">
        <p className="intro-text">Hi, my name is</p>
        <p className="sub-text">Noel Ali.</p>
        <p className="sub-text two">Your go-to frontend app developer!</p>
        <p className="description">Feel free to check out my projects on the</p>
        <p className="description">
          <Link to="/projects" className="home-link">
            Project page
          </Link>
          or drop me a message through the
          <Link to="/contact" className="home-link">
            Contact Page.
          </Link>
          Let's create something amazing together!
        </p>
      </div>
    </div>
  );
}

export default Home;
