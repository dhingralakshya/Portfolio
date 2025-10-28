import React from "react";
import { motion } from "framer-motion";
import "./styles/Experience.css";

const experienceVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.3,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

function Experience() {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Proquo.tech",
      period: "March 2025 - June 2025",
      description: [
        "Developed a procurement automation platform by building the complete frontend (React.js) and major backend services (Node.js, Express, PostgreSQL).",
        "Designed responsive UIs, integrated REST APIs, and improved backend workflows through optimized SQL queries.",
        "Implemented Docker-based containerization and automated deployments, ensuring cross-platform compatibility.",
        "Collaborated in an Agile team, ensuring scalable and maintainable solutions."
      ]
    }
  ];

  return (
    <section className="experience" id="experience">
      <h1>Experience</h1>
      <motion.div 
        className="experience-list"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={experienceVariants}
      >
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="experience-card"
            variants={itemVariants}
          >
            <div className="experience-header">
              <h2>{exp.title}</h2>
              <span className="company">{exp.company}</span>
            </div>
            <p className="period">{exp.period}</p>
            <ul className="responsibilities">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Experience;
