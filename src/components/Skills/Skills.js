import React from "react";

const skillData = [
  {
    id: 1,
    img: "/skills/JavaScript.png",
    tech: "JavaScript",
  },
  {
    id: 2,
    img: "/skills/HTML.png",
    tech: "HTML",
  },
  {
    id: 3,
    img: "/skills/CSS.png",
    tech: "CSS",
  },
  {
    id: 4,
    img: "/skills/React.png",
    tech: "React",
  },
  {
    id: 5,
    img: "/skills/Sass.png",
    tech: "Sass",
  },
  {
    id: 6,
    img: "/skills/GitHub.png",
    tech: "GitHub",
  },
  {
    id: 7,
    img: "/skills/Git.png",
    tech: "Git",
  },
  {
    id: 8,
    img: "/skills/Redux.png",
    tech: "Redux",
  },
  {
    id: 9,
    img: "/skills/Figma.webp",
    tech: "Figma",
  },
];

const Skills = () => {
  return (
    <div name="Skill" className="Skills">
      <div className="Skills_content">
        <h2>Take a look at my Skills</h2>
        <p>
          These are my skills and this contains all the technologies and
          programming languages that I have learnt until now. I am constantly
          learning, therefore I may update this section more often.
        </p>
        <div className="skills_that_I_know">
          {skillData.map((skill) => {
            return (
              <div className="skill" key={skill.id}>
                <img src={skill.img} alt="Skill" />
                <p>{skill.tech}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
