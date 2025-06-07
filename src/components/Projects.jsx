import React from "react";
import "../styles/project.css";
import ProjectCard from "./ProjectCard";
import RevealOnScroll from "./RevealOnScroll";

const projects = [
  {
    id: 1,
    link: "https://github.com/noelams/AniBox",
    title: "AniBox",
    description:
      "A LetterBoxd inspired anime App where users can come and log on their watched anime",
    technologies: ["Javascript", "React-Native", "Node.js"],
    image: "/AniBox.png",
  },

  {
    id: 2,
    link: "https://github.com/noelams/portfolio",
    title: "Portfolio",
    description: "The exact Portfolio website youre on right now",
    technologies: ["Javascript", "React.js", "CSS", "HTML"],
    image: "/Portfolio.png",
  },
  {
    id: 3,
    link: "https://github.com/noelams/chessTimer",
    title: "Chess Timer",
    description: "A Chess Timer mobile App built with react-native",
    technologies: ["Javascript", "React-Native"],
    image: "/ChessTimer.jpg",
  },
  {
    id: 4,
    link: "https://github.com/noelams/Wordle-Clone",
    title: "Wordle Clone",
    description: "A clone of the popular nytimes game Wordle",
    technologies: ["Javascript", "React.js", "CSS", "HTML"],
    image: "/WordleClone.png",
  },
];

function Projects() {
  return (
    <RevealOnScroll>
      <div className="container project" id="projects">
        <h1 className="project__title heading">Projects</h1>
        <div className="project__card-container">
          {projects.map((project) => {
            return (
              <ProjectCard
                link={project.link}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                alt={"ScreenShot of Application"}
                image={project.image}
              />
            );
          })}
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default Projects;
