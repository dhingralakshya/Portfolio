import React from "react";
import {motion} from "framer-motion";
import mail from "./images/mail.jpg";
import phone from "./images/phone.png";
import { useInView } from "react-intersection-observer";


const resumeVariants={
  hidden:{opacity:0, x:-50},
  visible:{opacity: 1 , x: 0, transition: {duration:1}}
};
const contactVariants={
  hidden:{opacity:0,y:50},
  visible:{opacity:1,y:0, transition:{duration:1.5}}
};
const quickVariants={
  hidden:{opacity:0,x:30},
  visible:{opacity:1,x:0,transition:{duration:2}}
};

function Footer() {
  const {ref,inView}=useInView({
    triggerOnce:false,
    threshold:0.7
  })
  return (
    <div>
      <div class="footer" id="contact">
        <motion.div variants={resumeVariants} ref={ref} initial="hidden" animate={inView?"visible":"hidden"} class="resume">
          <div>
            <h2>Lakshya Dhingra</h2>
          </div>
          <div>
            <a href="https://drive.google.com/file/d/1niF4bgWiOVH_lXCWp5gpcGC6beS6OScm/view?usp=drive_link">
              <button class="resume">Download Resume</button>
            </a>
          </div>
        </motion.div>
        <motion.div variants={contactVariants} ref={ref} initial="hidden" animate={inView?"visible":"hidden"} class="me">
          <h1>Contact me</h1>
          <p>
            <img class="mail" src={mail} width="20px" />{" "}
            lakshyadhingra26@gmail.com
          </p>
          <p>
            <img class="phone" src={phone} width="20px" /> +918355076355
          </p>
        </motion.div>
        <motion.div variants={quickVariants} ref={ref} initial="hidden" animate={inView?"visible":"hidden"} class="quick-links">
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
      </div>
      <div class="copyright">
        Copyright © 2024 Lakshya Dhingra. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
