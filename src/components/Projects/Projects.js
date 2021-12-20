import React from "react";

const data = [
  {
    id: 1,
    img: "/project/Project 1.png",
    name: "Great App",
    about:
      "This is a project that has eight sections with slider animation with responsive design",
    tech: ["HTML", "CSS", "JavaScript"],
    liveWebsite: "https://serene-jackson-38601d.netlify.app/",
    gitHub: "https://github.com/FoodNipple/GreatApp",
  },
  {
    id: 2,
    img: "/project/Project 2.png",
    name: "Search Images",
    about:
      "This Project is a practice where I fetch API to render images what I typed in Input bar",
    tech: ["React", "API", "BootStrap"],
    liveWebsite: "https://naughty-yonath-fe2f5c.netlify.app/",
    gitHub: "https://github.com/FoodNipple/pics",
  },
  {
    id: 3,
    img: "/project/Project 3.png",
    name: "Youtube Clone",
    about:
      "This Project is a practice where I wanted to create something like youtube,where you can search videos and render them on Webpage",
    tech: ["React", "API", "BootStrap"],
    liveWebsite: "https://practical-hawking-f22815.netlify.app/",
    gitHub: "https://github.com/FoodNipple/videos",
  },
  {
    id: 4,
    img: "/project/Project 4.png",
    name: "Menu",
    about: "In this Project is where I practice State in React",
    tech: ["React", "State", "CSS"],
    liveWebsite: "https://elastic-easley-cc51c8.netlify.app/",
    gitHub: "https://github.com/FoodNipple/Menu",
  },
  {
    id: 5,
    img: "/project/Project 5.png",
    name: "HubPay",
    about:
      "In this Project fully responsive design with 5 sections with swiper animation, idea is to transfer money from one country to another",
    tech: ["React", "State", "Sass"],
    liveWebsite: "https://determined-brattain-a1f041.netlify.app/",
    gitHub: "https://github.com/FoodNipple/HubPay",
  },
  {
    id: 6,
    img: "/project/Project 6.png",
    name: "Watch Shop",
    about:
      "This is one is not finished, the plan is to make full site, with login and register. Where you can buy a watch",
    tech: ["React", "Redux", "Sass", "FireBase"],
    liveWebsite: "#",
    gitHub: "https://github.com/FoodNipple/WatchShop",
  },
];

const Projects = () => {
  return (
    <div name="Projects" className="Projects">
      <div className="Projects__content">
        <h2>These are my Projects.</h2>
        <p>
          These are some of the Fictional projects that I worked on. I have
          created some projects that help me understand more of the technology
          that I use.
        </p>
        <div className="Project__section">
          {data.map((project) => {
            return (
              <div className="project" key={project.id}>
                <img src={project.img} alt="First Project" />
                <div className="about_project">
                  <h3>{project.name}</h3>
                  <p>{project.about}</p>
                  <div className="Tech">
                    <div>
                      {project.tech.map((technologies) => {
                        return <span key={technologies}>{technologies}</span>;
                      })}
                    </div>
                  </div>
                  <div>
                    <a href={project.liveWebsite} target="_blank">
                      <button className="Website">Live Website</button>
                    </a>
                    <a href={project.gitHub} target="_blank">
                      <button className="Code">Github code</button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="project__ending__paragraf">
          I have many more Projects on my GitHub Profile,{" "}
          <a
            href="https://github.com/FoodNipple?tab=repositories"
            target="_blank"
          >
            Click Here
          </a>{" "}
          if you want to see them &#128515;
        </p>
      </div>
    </div>
  );
};

export default Projects;