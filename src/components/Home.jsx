import React from "react";
import { Link } from "react-router-dom";
import "../styles/hero.css";

function Home() {
  return (
    <div className="hero container">
      <img src="/my_picture.jpg" alt="Profile picture" className="hero__img" />
      <h2 className="hero__subtitle">Hi I'm Noel Ali</h2>
      <h1 className="hero__title">
        Your go-to
        <br />
        Software Engineer!
      </h1>
      <p className="hero__description">
        Checkout some of my work through the{" "}
        <Link to="/projects" className="hero__link">
          Project page
        </Link>{" "}
        or drop me a message through the{" "}
        <Link to="/contact" className="hero__link">
          Contact Page.{" "}
        </Link>
        Let's create something amazing together!
      </p>
    </div>
  );
}

export default Home;
