import "./Home.css";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowDown,
} from "react-icons/fa";

import profile from "../assets/profile.jpg";

function Home() {
  return (
    <section id="home" className="home">

      <div className="blur blur1"></div>
      <div className="blur blur2"></div>

      {/* Left Side */}
      <motion.div
        className="home-left"
        initial={{ x: -120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >

        <motion.span
          className="badge"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          🚀 Available For Work
        </motion.span>

        <h3>Hello, I'm 👋</h3>

        <h1>
          <span>Karthikeyan</span>
        </h1>

        <h2>
          <Typewriter
            words={[
              "Frontend Developer",
              "React Developer",
              "MERN Stack Developer",
              "Web Developer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
          />
        </h2>

        <p>
          I'm a passionate MERN Stack Developer who enjoys creating
          beautiful, responsive and high-performance web applications.
          I love building modern user interfaces with HTML, CSS ,JavaScript ,React and Node.js , Mongodb.
        </p>


        <div className="home-btns">

          <button className="btn">
            Hire Me
          </button>

          <a
            href="/KARTHIKEYAN_RESUME.pdf"
            download
          >
            <button className="btn2">
              Download Resume
            </button>
          </a>

        </div>

        <div className="social">

          <a
            href="https://github.com/karthikeyansnpc-hub/karthikeyan.github.io"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/karthikeyan-m-06bb2a363/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/_jd.x__?igsh=dDM4eHd3Y3drcHVv"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

        </div>

      </motion.div>

      {/* Right Side */}
      <motion.div
        className="home-right"
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >

        <div className="profile-circle">

          <img
            src={profile}
            alt="Profile"
          />

        </div>

      </motion.div>

      {/* Scroll Down */}

      <div className="scroll-down">

        <FaArrowDown />

        <p>Scroll Down</p>

      </div>

    </section>
  );
}

export default Home;