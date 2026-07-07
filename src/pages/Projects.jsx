import "./Projects.css";
import { motion } from "framer-motion";

import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

const projects = [
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "Modern personal portfolio built using React, CSS and Framer Motion.",
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.vercel.app",
  },

  {
    title: "Fake-Logo Detection",
    image: project1,
    description:
      "Fake logo detection for logo detection",
    github: "https://github.com/yourusername/movie-app",
    live: "https://movie-app.vercel.app",
  },

  {
    title: "E-Commerce Website",
    image: project2,
    description:
      "Responsive shopping website using React and Node.js.",
    github: "https://github.com/yourusername/ecommerce",
    live: "https://ecommerce.vercel.app",
  },
];

function Projects() {
  return (
    <section className="projects">

      <h1>My Projects</h1>

      <div className="projects-container">

        {projects.map((project, index) => (

          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
            }}
          >

            <img
              src={project.image}
              alt={project.title}
            />

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <div className="project-buttons">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub</button>
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                <button>Live Demo</button>
              </a>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Projects;