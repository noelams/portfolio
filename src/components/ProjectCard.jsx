import React from "react";
import "../styles/project.css";

const ProjectCard = ({
  key,
  link,
  title,
  technologies,
  description,
  image,
  alt,
}) => {
  return (
    <a href={link} className="project__card" key={key} target="_blank">
      <div className="project__details__container">
        <div className="image-container">
          <img src={image} alt={alt} width={50} />
        </div>
        <div className="project__details">
          <p className="project__card-title">{title}</p>
          <p className="project__card__desc">{description}</p>
          <div>
            {technologies.map((technology, index) => {
              return (
                <span key={index} className="project__technologies">
                  {technology}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
