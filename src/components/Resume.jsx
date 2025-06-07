import React from "react";
import RevealOnScroll from "./RevealOnScroll";

function Resume() {
  return (
    <RevealOnScroll>
      <div className="container resume" id="resume">
        <h1 className="heading">RESUME</h1>
        <img src="/resumeImage.png" width={300} className="resume-image" />
        <a href="/Resume.pdf" download className="download-link">
          Download RESUME
        </a>
        {/* styles in utils.css */}
      </div>
    </RevealOnScroll>
  );
}

export default Resume;
