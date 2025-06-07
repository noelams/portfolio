import React from "react";
import RevealOnScroll from "./RevealOnScroll";
import "../styles/about.css";

function About() {
  return (
    <RevealOnScroll>
      <div id="about" style={{ display: "flex", flexDirection: "column" }}>
        {" "}
        {/*i wrapped the component in this div so i could add the h2 for fullscreen on top of everything, make the div flex and center the h2 horizontally in it. works now but there may be better ways of doing this */}
        <h2 className="about__title fullscreen">About Me</h2>
        <div className="container about">
          <div className="about__content">
            <h2 className="about__title halfscreen">About Me</h2>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <p className="sub__heading about__subheading">Who I Am </p>
              <p className="about__description">
                I'm a passionate developer with a love for creating new and
                exciting software. I'm always up for a challenge and thrive in
                collaborative environments where I can both contribute and grow.
                Whether it’s building something from scratch or diving into
                unfamiliar territory, I enjoy exploring the possibilities of
                tech and constantly expanding what I know.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p className="sub__heading about__subheading">Experience</p>
              <p className="about__description">
                Over the past three years, I’ve focused on frontend development,
                primarily using React and JavaScript to build responsive and
                dynamic user interfaces. I’ve also worked on cross-platform
                mobile development using React Native. In one of my recent
                experiences, I collaborated with a team to design and maintain
                both the app and website for FarmyApp, an agricultural tech
                platform. Through this and other projects, I’ve developed a
                strong foundation in clean code practices, component-driven
                design, and effective teamwork.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p className="sub__heading about__subheading">Interest</p>
              <p className="about__description">
                I’m deeply fascinated by Artificial Intelligence and its
                potential to transform lives, especially here in Africa. I’m
                driven by a vision to help Nigeria and the wider African
                continent unlock their full potential in the tech space. That
                curiosity that makes you ask “how does this work?” is what keeps
                me learning, building, and pushing forward. My ultimate goal is
                to play a role in shaping innovative solutions that make a real
                difference in people’s lives.
              </p>
            </div>

            <hr />
            <h3 className="about__subtitle">Technologies</h3>
            <ul className="about__ul">
              <li className="about__list">
                <strong>Programming Languages:</strong> <span>JavaScript </span>
                <span>TypeScript</span>
                <span>Python</span> <span>C++</span>
              </li>
              <li className="about__list">
                <strong>Web Development:</strong> <span>HTML &amp; CSS</span>
                <span>React.js</span> <span>React Native</span>{" "}
                <span>Node.js</span>
                <span>Express</span> <span>Redux</span>
                <span>TailwindCSS</span>
              </li>
              <li className="about__list">
                <strong>Mobile App Development:</strong>{" "}
                <span>React-Native</span>
                <span>Flutter</span>
              </li>
              <li className="about__list">
                <strong>Databases:</strong> <span>Firebase</span>
                <span>MongoDB</span> <span>mySQL</span>
              </li>
              <li className="about__list">
                <strong>Version Control:</strong> <span>Git</span>
                <span>GitHub</span> <span>GitLab</span>
              </li>
              <li className="about__list">
                <strong>Machine Learning / AI:</strong> <span>Rasa</span>
                <span>TensorFlow</span> <span>PyTorch</span>
                <span>Nltk</span>
              </li>
              <li className="about__list">
                <strong>Platforms:</strong> <span>Expo</span>
                <span>Vite</span> <span>Postman</span>
                <span>Figma</span> <span>GitHub</span>
              </li>
              <li className="about__list">
                <strong>Cloud Services:</strong> <span>AWS</span>
              </li>
            </ul>
          </div>
          <div className="about__img-wrapper">
            <img
              src="/About-image.jpg"
              alt="About image"
              className="about__img"
            />
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default About;
