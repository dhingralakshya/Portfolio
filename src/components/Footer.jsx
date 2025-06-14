import React from "react";
import { motion } from "framer-motion";
import mail from "./images/mail.jpg";
import phone from "./images/phone.png";

const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.2
    }
  }
};

const resumeVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const contactVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const quickVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <motion.div 
        className="footer" 
        id="contact" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={parentVariants}
      >
        <motion.div
          variants={resumeVariants}
          className="resume"
        >
          <div>
            <h2>Lakshya Dhingra</h2>
            <p>Full Stack Developer</p>
          </div>
          <div>
            <a 
              href="https://drive.google.com/file/d/1G-uoQkFsNTVAwe7Z3hq90qfY0AHTAnJz/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Lakshya's Resume"
            >
              <button className="resume-btn">
                📄 Download Resume
              </button>
            </a>
          </div>
        </motion.div>

        <motion.div variants={contactVariants} className="me">
          <h1>Contact Me</h1>
          <div className="contact-info">
            <div className="contact-item">
              <img 
                className="contact-icon" 
                src={mail} 
                width="20" 
                height="20"
                alt="Email icon" 
              />
              <a href="mailto:lakshyadhingra26@gmail.com">
                lakshyadhingra26@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <img 
                className="contact-icon" 
                src={phone} 
                width="20" 
                height="20"
                alt="Phone icon" 
              />
              <a href="tel:+918355076355">
                +91 8355076355
              </a>
            </div>
          </div>
          
          <div className="social-links">
            <a 
              href="https://www.linkedin.com/in/lakshyadhingra2624/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/dhingralakshya" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div variants={quickVariants} className="quick-links">
          <h1>Quick Links</h1>
          <nav className="footer-nav">
            <a className="footer-link" href="#about">
              About Me
            </a>
            <a className="footer-link" href="#skills">
              Skills
            </a>
            <a className="footer-link" href="#projects">
              Projects
            </a>
            <a className="footer-link" href="#contact">
              Contact
            </a>
          </nav>
        </motion.div>
      </motion.div>

      <div className="copyright">
        <p>
          Copyright © {currentYear} Lakshya Dhingra. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
