import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import Resume from "./components/Resume.jsx";

const Landing = () => {
  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
};

export default Landing;
