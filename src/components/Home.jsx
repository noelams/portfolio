import React from "react";
import { Link } from "react-router-dom";
import placeholder from "./imgs/my_picture";

function Home() {
  return (
    <div className="home-page">
      <img
        src={my_picture}
        alt="placeholder"
        className="potrait"
        width={200}
        height={200}
      />
      <div className="home-text">
        <p className="my-name">HI, I'M NOEL.</p>
        <p>Your go-to frontend app developer!</p>
        <p>Feel free to check out my projects on the </p>
        <p>
          <Link to="/projects">Project page </Link>
          or drop me a message through the
          <Link to="/contact"> Contact Page. </Link>
          Let's create something amazing together!
        </p>
      </div>
    </div>
  );
}

export default Home;
