import React from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import facebookIcon from "../../assets/icons/facebook.png";
import instagramIcon from "../../assets/icons/instagram.png";
import linkedinIcon from "../../assets/icons/linkedin.png";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <main className="home">
      <div className="menu-container">
        <span className="menu-text">MENU</span>
        <ul className="menu-links">
          <li onClick={() => navigate("/about")}>
            <a href="/about">ABOUT</a>
          </li>
          <li onClick={() => navigate("/projects")}>
            <a href="/projects">PROJECTS</a>
          </li>
          <li onClick={() => navigate("/contact")}>
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
      </div>

      <div className="contact-info">
        <p>andre_margarido@hotmail.com</p>
        <p>+351 961058287</p>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </main>
  );
}
