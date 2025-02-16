import React from "react";
import AllSkills from "./AllSkills";
import {motion} from "framer-motion";
import { useInView } from "react-intersection-observer";
import java from "./images/Java.png";
import cLogo from "./images/C_logo.png";
import python from "./images/Python_logo.png";
import mysql from "./images/mysql-logo.svg";
import node from "./images/Node_logo.webp";
import React_logo from "./images/React_logo.png";
import mongo_logo from "./images/mongo.svg";

const skillVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function Skill() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3, 
  });
  
  return (
    <div>
      <div class="skills" id="skills">
        <h1>Skills</h1>
        <motion.div ref={ref} variants={skillVariants} initial="hidden" animate={inView? "visible":"hidden"} class="all-skills">
          <AllSkills skill="Java" imgLink={java} />
          <AllSkills skill="C Programming" imgLink={cLogo} />
          <AllSkills skill="Python" imgLink={python} />
          <AllSkills skill="MySQL" imgLink={mysql} />
          <AllSkills skill="NodeJS" imgLink={node} />
          <AllSkills skill="React" imgLink={React_logo} />
          <AllSkills skill="MongoDB" imgLink={mongo_logo} />
        </motion.div>
      </div>
    </div>
  );
}

export default Skill;
