import React from "react";
import { Link } from "react-scroll";
import "../styles/hero.css";
import RevealOnScroll from "./RevealOnScroll";

function Home() {
  return (
    <RevealOnScroll>
      <main className="hero container" role="main" id="home">
        <img
          src="/my_picture.jpg"
          alt="Profile picture"
          className="hero__img"
          loading="lazy"
        />
        <h1 className="hero__subtitle">Hi I'm Noel Ali</h1>
        <h2 className="hero__title">
          Your go-to
          <br />
          Software Engineer!
        </h2>
        <p className="hero__description">
          Checkout some of my work through the{" "}
          <Link
            to="projects"
            className="hero__link"
            smooth={true}
            duration={300}
          >
            Project page
          </Link>{" "}
          or drop me a message through the{" "}
          <Link
            to="contact"
            className="hero__link"
            smooth={true}
            duration={300}
          >
            Contact Page.{" "}
          </Link>
          Let's create something amazing together!
        </p>
      </main>
    </RevealOnScroll>
  );
}

export default Home;
