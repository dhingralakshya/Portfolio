import React from "react";
import {motion} from "framer-motion";
import mail from "./images/mail.jpg";
import phone from "./images/phone.png";
import { useInView } from "react-intersection-observer";

const parentVariants = {
  visible: {
    transition: {
      staggerChildren: 0.7
    }
  }
};
const resumeVariants={
  hidden:{opacity:0, x:-50},
  visible:{opacity: 1 , x: 0, transition: {duration:1}}
};
const contactVariants={
  hidden:{opacity:0,y:50},
  visible:{opacity:1,y:0, transition:{duration:1}}
};
const quickVariants={
  hidden:{opacity:0,x:30},
  visible:{opacity:1,x:0,transition:{duration:1}}
};

function Footer() {
  const {ref,inView}=useInView({
    triggerOnce:false,
    threshold:0.7
  })
  return (
    <div>
      <motion.div class="footer" id="contact" initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={parentVariants}
      >
        <motion.div
          variants={resumeVariants}
          className="resume"
        >
          <div>
            <h2>Lakshya Dhingra</h2>
          </div>
          <div>
            <a href="https://drive.google.com/file/d/1niF4bgWiOVH_lXCWp5gpcGC6beS6OScm/view?usp=drive_link">
              <button class="resume">Download Resume</button>
            </a>
          </div>
        </motion.div>
        <motion.div variants={contactVariants} class="me">
          <h1>Contact me</h1>
          <p>
            <img class="mail" src={mail} width="20px" />{" "}
            lakshyadhingra26@gmail.com
          </p>
          <p>
            <img class="phone" src={phone} width="20px" /> +918355076355
          </p>
        </motion.div>
        <motion.div variants={quickVariants} class="quick-links">
          <h1>Quick links</h1>
          <a class="top" href="#about-me">
            About Me
          </a>
          <a class="top" href="#skills">
            Skills
          </a>
          <a class="top" href="#projects">
            Projects
          </a>
        </motion.div>
      </motion.div>
      <div class="copyright">
        Copyright © 2024 Lakshya Dhingra. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
