import ScrollToTop from "react-scroll-to-top";
import { TypeAnimation } from "react-type-animation";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython
} from "react-icons/fa";

import { SiMysql } from "react-icons/si"; import "./App.css";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import profile from "./assets/profile.png";
function App() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="hero"
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="hero-content"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>
            Hi, I'm <span>Kuruva Vasantha Lakshmi</span> 👋
          </h1>

          <TypeAnimation
            sequence={[
              "Aspiring Full Stack Web Developer",
              2000,
              "React Developer",
              2000,
              "Python Developer",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
          />

          <p>
            I am an ECE student passionate about web development and building
            responsive, modern web applications.
          </p>

          <div className="hero-buttons">

            <motion.a
              href="#projects"
              className="project-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>


            <motion.a
              href="https://github.com/vasantha-lab"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              className="social-btn"
            >
              GitHub
            </motion.a>


            <motion.a
              href="https://www.linkedin.com/in/kuruva-vasantha-lakshmi-251904393"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              className="social-btn"
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.1 }}
              className="social-btn"
            >
              Download Resume
            </motion.a>

          </div>
        </motion.div>


        <motion.div
          className="profile-circle"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src={profile}
            alt="Profile"
            className="profile-image"
          />
        </motion.div>

      </motion.section>
      {/* About Section */}
      <motion.section
        className="section"
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>

        <p>
          I am Kuruva Vasantha Lakshmi, an ECE student passionate about Full
          Stack Web Development. I enjoy learning new technologies and building
          real-world projects that solve practical problems.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="section"
        id="skills"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Skills</h2>

        <div className="skills-container">

          <div className="skill-card">
            <FaHtml5 size={40} />
            <p>HTML</p>
          </div>

          <div className="skill-card">
            <FaCss3Alt size={40} />
            <p>CSS</p>
          </div>

          <div className="skill-card">
            <FaJs size={40} />
            <p>JavaScript</p>
          </div>

          <div className="skill-card">
            <FaReact size={40} />
            <p>React</p>
          </div>

          <div className="skill-card">
            <FaPython size={40} />
            <p>Python</p>
          </div>

          <div className="skill-card">
            <SiMysql size={40} />
            <p>SQL</p>
          </div>

        </div>

      </motion.section>
      {/* Projects Section */}
      <motion.section
        className="section"
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Projects</h2>

        <div className="projects-container">

          {/* Tic Tac Toe JavaScript */}
          <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>🎮 Tic Tac Toe (JavaScript)</h3>

            <p>
              A browser-based Tic Tac Toe game with an interactive user interface.
            </p>

            <span>HTML | CSS | JavaScript</span>

            <div className="project-buttons">
              <a
                href="https://github.com/vasantha-lab/tic-tac-toe-js"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>



            </div>
          </motion.div>

          {/* Tic Tac Toe Python */}
          <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>🐍 Tic Tac Toe (Python)</h3>

            <p>
              A console-based Tic Tac Toe game developed using Python.
            </p>

            <span>Python</span>

            <div className="project-buttons">
              <a
                href="https://github.com/vasantha-lab/tic-tac-toe"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
            <h3>🧮 GST Calculator</h3>

            <p>
              A web application to calculate GST amounts quickly.
            </p>

            <span>HTML | CSS | JavaScript</span>

            <div className="project-buttons">
              <a
                href="https://github.com/vasantha-lab/GST-Calculator"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a href="https://gst-calculator-swart.vercel.app/" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </motion.div>

          <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
            <h3>✅ Todo App</h3>

            <p>
              A task management application built with React.
            </p>

            <span>React | JavaScript</span>

            <div className="project-buttons">
              <a
                href="https://github.com/vasantha-lab/Todo-App"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>


            </div>
          </motion.div>
          <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
            <h3>🚀 HireTrack</h3>

            <p>
              A Full Stack Job Tracking Application (currently in development).
            </p>

            <span>React | Node.js | SQL</span>

            <div className="project-buttons">
              <a
                href="https://github.com/vasantha-lab/HireTrack"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a href="https://hiretrack-app.vercel.app/" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>
      {/* Contact Section */}
      <motion.section
        className="section"
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Contact Me</h2>

        <div className="contact-container">
          <p>📧 Email: 2006vasantha.a@gmail.com</p>

          <p>
            💼 LinkedIn:
            <a
              href="https://www.linkedin.com/in/kuruva-vasantha-lakshmi-251904393"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Profile
            </a>
          </p>

          <p>
            💻 GitHub:
            <a
              href="https://github.com/vasantha-lab"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit GitHub
            </a>
          </p>
        </div>
      </motion.section>




      <footer className="footer">
        <p>© 2026 Kuruva Vasantha Lakshmi. All Rights Reserved.</p>

        <p>Built with React & Framer Motion ❤️</p>
      </footer>
      <ScrollToTop
        smooth
        color="#38bdf8"
        style={{
          backgroundColor: "#1e293b",
          borderRadius: "50%",
        }}
      />
    </>
  );
}

export default App;