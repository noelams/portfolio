import React from "react";

function RESUME() {
  return (
    <div className="container resume">
      <h1 className="heading">RESUME SECTION</h1>
      <img src="/resumeImage.png" width={200} className="resume-image" />
      <a href="/Resume.pdf" download className="download-link">
        Download RESUME
      </a>
      {/* styles in utils.css */}
    </div>
  );
}

export default RESUME;
