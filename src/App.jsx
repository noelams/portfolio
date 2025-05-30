import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import Resume from "./components/Resume";

import "./styles/App.css";
import "./styles/utils.css";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
