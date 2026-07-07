import "./About.css";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

function About() {
  return (
    <section className="about">

      <motion.div
        className="about-image"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src={profile} alt="Karthikeyan" />
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        <h1>About Me</h1>

        <p>
          Hello! I'm <span>Karthikeyan</span>, a passionate
          Frontend and MERN Stack Developer who enjoys building
          modern, responsive and user-friendly web applications.
        </p>

        <p>
          I have experience with HTML, CSS, JavaScript, React,
          Node.js, Express.js and MongoDB. My goal is to create
          fast, beautiful and interactive websites.
        </p>

        <div className="about-info">

          <div>
            <h3>Name</h3>
            <p>Karthikeyan</p>
          </div>

          <div>
            <h3>Email</h3>
            <p>karthikeyan.snpc@email.com</p>
          </div>

          <div>
            <h3>Location</h3>
            <p>Tamil Nadu, India</p>
          </div>

          <div>
            <h3>Experience</h3>
            <p>Fresher</p>
          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default About;
