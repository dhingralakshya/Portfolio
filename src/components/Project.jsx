import React from "react";
import Project_List from "./Project_List";
import DocAI from "./images/DocAI.png";
import StayFinder from "./images/StayFinder.png";
import sentiment from "./images/senitment.png";
import { motion } from "framer-motion";
import "./styles/Project.css";

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.3,
      ease: "easeOut"
    }
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    }
  }
};

const projects = [
  {
    id: 1,
    name: "DocumentAI",
    desc: "An AI-powered system that extracts, analyzes, and organizes key information from documents for automated processing.",
    image: DocAI,
    weblink: "https://github.com/dhyanchandmarndi/Document-AI",
    liveLink: null // Add live demo link if available
  },
  {
    id: 2,
    name: "StayFinder",
    desc: "A web application that helps users search and book accommodations with real-time availability and pricing.",
    image: StayFinder,
    weblink: "https://github.com/dhingralakshya/StayFinder",
    liveLink: null
  },
  {
    id: 3,
    name: "Real-Time Twitter Sentiment Analyzer",
    desc: "Real-time sentiment analysis of tweets based on your chosen keyword using advanced NLP techniques.",
    image: sentiment,
    weblink: "https://github.com/dhingralakshya/Real-Time-Sentiment-Analysis",
    liveLink: null
  }
];

function Project() {
  return (
    <section className="projects" id="projects">
      <h1>My Projects</h1>
      <motion.div 
        variants={projectVariants} 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="all-projects"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={childVariants}>
            <Project_List
              name={project.name}
              desc={project.desc}
              image={project.image}
              weblink={project.weblink}
              liveLink={project.liveLink}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Project;
