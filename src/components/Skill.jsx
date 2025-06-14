import React from "react";
import AllSkills from "./AllSkills";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaDocker } from "react-icons/fa6";
import { FaAws } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const skillVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut"
    },
  },
};

function Skill() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true,
    margin: "-100px",
    threshold: 0.4
  });

  return (
    <div className="skills" id="skills" ref={sectionRef}>
      <h1>Skills</h1>
      <motion.div 
        variants={skillVariants} 
        initial="hidden" 
        animate={isInView ? "visible" : "hidden"} 
        className="all-skills"
      >
        <AllSkills skill="Java" icon=<FaJava className="icon" /> />
        <AllSkills skill="Python" icon=<FaPython className="icon" /> />
        <AllSkills skill="MySQL" icon=<SiMysql className="icon" /> />
        <AllSkills skill="PostgreSQL" icon=<BiLogoPostgresql className="icon" /> />
        <AllSkills skill="MongoDB" icon=<SiMongodb className="icon" /> />
        <AllSkills skill="NodeJS" icon= <FaNodeJs className="icon" /> />
        <AllSkills skill="ExpressJS" icon= <SiExpress className="icon" /> />
        <AllSkills skill="React" icon=<FaReact className="icon" /> />
        <AllSkills skill="NextJS" icon=<RiNextjsFill className="icon" /> />
        <AllSkills skill="Docker" icon=<FaDocker className="icon" /> />
        <AllSkills skill="AWS" icon=<FaAws className="icon" /> />
        <AllSkills skill="Git & Github" icon=<FaGithub className="icon" /> />
      </motion.div>
    </div>
  );
}

export default Skill;
