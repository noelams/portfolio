import React from "react";
import "../styles/project.css";

const projects = [
  {
    id: 1,
    link: "https://github.com/noelams/chessTimer",
    title: "Chess Timer",
  },
  { id: 2, link: "https://github.com/noelams/portfolio", title: "Portfolio" },
  {
    id: 3,
    link: "https://github.com/noelams/rnCourse1",
    title: "React Native Course",
  },
  { id: 4, link: "https://github.com/noelams/blog-app", title: "Blog App" },
];

function Projects() {
  return (
    <div className="container project">
      <h1 className="project__title">Projects</h1>
      <div className="project__card-container">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project__card"
          >
            <span className="project__card-title">{project.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
