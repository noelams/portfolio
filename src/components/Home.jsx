import React from "react";
import { Link } from "react-router-dom";
import "../styles/hero.css";

function Home() {
  return (
    <div className="hero container">
      <img src="/my_picture.jpg" alt="Profile picture" className="hero__img" />
      <h2 className="hero__subtitle">Hi I'm Noel Ali</h2>
      <h1 className="hero__title">
        Your go-to frontend
        <br /> app developer!
      </h1>
      <p className="hero__description">
        Your go-to frontend app developer!{" "}
        <Link to="/projects" className="hero__link">
          Project page
        </Link>{" "}
        or drop me a message through the{" "}
        <Link to="/contact" className="hero__link">
          Contact Page.{" "}
        </Link>
        Let's create something amazing together!
      </p>
      {/* <div className="home-text">
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
      </div> */}
    </div>
  );
}

export default Home;
