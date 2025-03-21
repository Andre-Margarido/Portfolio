import React from "react";
import "./AboutPage.css";
import htmlIcon from "../../assets/icons/html.png";
import cssIcon from "../../assets/icons/css-3.png";
import jsIcon from "../../assets/icons/js.png";
import reactIcon from "../../assets/icons/react.png";

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="about-header">
        <h1>ANDRÉ MARGARIDO</h1>
        <h2>WEB DEVELOPER</h2>
      </header>

      <section className="about-content">
        <div className="about-text">
          <h3>About Me</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor.
          </p>
        </div>

        <div className="about-skills">
          <h3>My Skills</h3>
          <ul className="skills-list">
            <li>
              <img src={htmlIcon} alt="HTML/CSS" /> HTML
            </li>
            <li>
              <img src={cssIcon} alt="CSS-3" /> CSS
            </li>
            <li>
              <img src={jsIcon} alt="JavaScript" /> JavaScript
            </li>
            <li>
              <img src={reactIcon} alt="React" /> React
            </li>
          </ul>
        </div>

        <div className="about-cta">
          <h3>Give a sneak peek on my projects</h3>
          <a href="/projects" className="cta-button">
            Go to Projects
          </a>
        </div>
      </section>
    </main>
  );
}
