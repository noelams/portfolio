import React from "react";
import "../styles/about.css";

function About() {
  return (
    <div className="container about">
      <div className="about__content">
        <h2 className="about__title">About</h2>
        <p className="about__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
          sapiente cum ipsam animi esse alias. Accusantium obcaecati, eum ipsam
          officia corrupti, repellat ex, provident eaque itaque veniam delectus
          exercitationem explicabo.
        </p>
        <p className="about__description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          neque nemo alias quas eius excepturi nihil labore expedita molestiae
          ipsam. Temporibus libero possimus cupiditate quidem labore
          voluptatibus numquam distinctio aliquid?
        </p>
        <p className="about__description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
          repellat qui totam excepturi nostrum tempora. Modi quis obcaecati
          nostrum, iusto dolorem ab maxime quod pariatur id accusantium, eos
          magnam fuga?
        </p>
        <hr />
        <h3 className="about__subtitle">Technologies</h3>
        <ul className="about__ul">
          <li className="about__list">
            <strong>Programming Languages:</strong> <span>JavaScript </span>
            <span>Python</span> <span>C++</span>
          </li>
          <li className="about__list">
            <strong>Web Development:</strong> <span>HTML &amp; CSS</span>
            <span>React.js</span> <span>React Native</span> <span>Node.js</span>
            <span>Express</span> <span>Redux</span>
            <span>TailwindCSS</span>
          </li>
          <li className="about__list">
            <strong>Databases:</strong> <span>Firebase</span>{" "}
            <span>MongoDB</span> <span>mySQL</span>
          </li>
          <li className="about__list">
            <strong>Version Control:</strong> <span>Git</span>{" "}
            <span>GitHub</span> <span>GitLab</span>
          </li>
          <li className="about__list">
            <strong>Machine Learning / AI:</strong> <span>Rasa</span>
            <span>TensorFlow</span> <span>PyTorch</span>
            <span>Nltk</span>
          </li>
          <li className="about__list">
            <strong>Cloud Services:</strong> <span>AWS</span>
          </li>
        </ul>
      </div>
      <div className="about__img-wrapper">
        <img src="/placeholder.png" alt="About image" className="about__img" />
      </div>
    </div>
  );
}

export default About;
