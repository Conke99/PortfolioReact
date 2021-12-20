import React from "react";
import { animateScroll as scrollSpy, scroller } from "react-scroll";

const scrollToHome = () => {
  scroller.scrollTo("Home", {
    duration: 2000,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

const scrollToSkill = () => {
  scroller.scrollTo("Skill", {
    duration: 2000,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

const scrollToProjects = () => {
  scroller.scrollTo("Projects", {
    duration: 2000,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

const scrollToAbout = () => {
  scroller.scrollTo("About", {
    duration: 2000,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer_content">
        <div>
          <h2>Alexandar Conic</h2>
          <p className="footer_para">Front end Developer</p>
          <button>Contact Me</button>
        </div>
        <div>
          <h3>SOCIAL MEDIA</h3>
          <ul>
            <a
              href="https://www.linkedin.com/in/aleksandar-conic-58873b196/"
              target="_blank"
            >
              <li>LinkedIn</li>
            </a>
            <a href="https://github.com/FoodNipple" target="_blank">
              <li>GitHub</li>
            </a>
            <a href="https://www.facebook.com/acke.conic.1/" target="_blank">
              <li>FaceBook</li>
            </a>
            <a href="https://www.instagram.com/c0n1c/" target="_blank">
              <li>Instagram</li>
            </a>
          </ul>
        </div>
        <div>
          <h3>Explore</h3>
          <ul>
            <li onClick={() => scrollToHome()}>Home</li>
            <li onClick={() => scrollToSkill()}>Skills</li>
            <li onClick={() => scrollToProjects()}>Projects</li>
            <li onClick={() => scrollToAbout()}>About Me</li>
          </ul>
        </div>
        <div>
          <h3>Useful Links</h3>
          <p>Resume</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
