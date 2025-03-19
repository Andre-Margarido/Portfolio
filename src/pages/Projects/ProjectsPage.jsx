import React from "react";
import "./ProjectsPage.css";
import { Link } from "react-router-dom";
import project1 from "../../assets/icons/Product-Landing-Page.png";
import project2 from "../../assets/icons/web-design.jpg";
import project3 from "../../assets/icons/website-project-plan.jpg";

export default function ProjectsPage() {
  return (
    <main className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <img src={project1} alt="Product Landing Page" />
          <p>Product Landing Page</p>
        </div>
        <div className="project-card">
          <img src={project2} alt="Web Design" />
          <p>Web Design</p>
        </div>
        <div className="project-card">
          <img src={project3} alt="Website Project Plan" />
          <p>Website Project Plan</p>
        </div>
      </div>

      {/* Botao para Contact Me */}
      <div className="projects-contact">
        <h3>Want to work together?</h3>
        <p>Feel free to reach out and discuss new projects.</p>
        <Link to="/contact" className="contact-btn">
          Go to Contact
        </Link>
      </div>
    </main>
  );
}
