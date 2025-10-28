import React, { useState, useRef } from "react";
import AllSkills from "./AllSkills";
import { motion, useInView } from "framer-motion";
import { FaJava, FaNodeJs, FaReact, FaDocker, FaAws, FaGithub } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { SiMysql, SiExpress, SiMongodb } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import "./styles/Skill.css";

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

const skills = [
  { name: "Java", icon: <FaJava className="icon" /> },
  { name: "Python", icon: <FaPython className="icon" /> },
  { name: "MySQL", icon: <SiMysql className="icon" /> },
  { name: "PostgreSQL", icon: <BiLogoPostgresql className="icon" /> },
  { name: "MongoDB", icon: <SiMongodb className="icon" /> },
  { name: "NodeJS", icon: <FaNodeJs className="icon" /> },
  { name: "ExpressJS", icon: <SiExpress className="icon" /> },
  { name: "React", icon: <FaReact className="icon" /> },
  { name: "NextJS", icon: <RiNextjsFill className="icon" /> },
  { name: "Docker", icon: <FaDocker className="icon" /> },
  { name: "AWS", icon: <FaAws className="icon" /> },
  { name: "Git & Github", icon: <FaGithub className="icon" /> }
];

function Skill() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true,
    margin: "-100px",
    threshold: 0.4
  });

  const handleHoverChange = (skillName, isHovered) => {
    setHoveredSkill(isHovered ? skillName : null);
  };

  return (
    <div className="skills" id="skills" ref={sectionRef}>
      <h1>Skills</h1>
      <motion.div 
        variants={skillVariants} 
        initial="hidden" 
        animate={isInView ? "visible" : "hidden"} 
        className="all-skills"
      >
        {skills.map((skill) => (
          <AllSkills 
            key={skill.name}
            skill={skill.name}
            icon={skill.icon}
            isHovered={hoveredSkill === skill.name}
            isAnyHovered={hoveredSkill !== null}
            onHoverChange={handleHoverChange}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Skill;
