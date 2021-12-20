import React, { useState } from "react";
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

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="Header">
      <div className="Header__content">
        <h2>Alexandar</h2>

        <ul className="Choices">
          <li onClick={scrollToHome}>Home</li>
          <li onClick={scrollToSkill}>Skills</li>
          <li onClick={scrollToProjects}>Projects</li>
          <li onClick={scrollToAbout}>About Me</li>
        </ul>
        <div className="RightSide__Header">
          <a href="pdf/Aleksandar Conic Frontend CV.lnk">
            <button>Download CV</button>
          </a>
          <img
            onClick={(e) => setIsActive(!isActive)}
            src="align-justify-solid.svg"
            alt="MobileNav"
          />
        </div>
        {isActive && (
          <div className="MobileNav">
            <ul className="MobileChoices">
              <li onClick={scrollToHome}>Home</li>
              <li onClick={scrollToSkill}>Skills</li>
              <li onClick={scrollToProjects}>Projects</li>
              <li onClick={scrollToAbout}>About Me</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
