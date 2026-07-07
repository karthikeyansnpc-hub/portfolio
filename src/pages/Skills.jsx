import "./Skills.css";
import { motion } from "framer-motion";

import html from "../assets/html.jpg";
import css from "../assets/css.jpg";
import javascript from "../assets/javascript.jpg";
import react from "../assets/react.jpg";
import node from "../assets/node.jpg";
import mongodb from "../assets/mongodb.jpg";

const skills = [
  { name: "HTML", image: html, percent: "95%" },
  { name: "CSS", image: css, percent: "90%" },
  { name: "JavaScript", image: javascript, percent: "85%" },
  { name: "React JS", image: react, percent: "90%" },
  { name: "Node JS", image: node, percent: "80%" },
  { name: "MongoDB", image: mongodb, percent: "75%" },
];

function Skills() {
  return (
    <section className="skills">

      <h1>My Skills</h1>

      <div className="skills-container">

        {skills.map((skill, index) => (

          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              rotate: 2
            }}
          >

            <img src={skill.image} alt={skill.name} />

            <h2>{skill.name}</h2>

            <div className="progress">

              <div
                className="progress-bar"
                style={{ width: skill.percent }}
              ></div>

            </div>

            <span>{skill.percent}</span>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Skills;