import React from "react";
import { motion } from "framer-motion";
import my_image from "./images/my_image.jpg";
import "./styles/Hero.css";

const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

function Hero() {
  return (
    <motion.section 
      className="hero"
      initial="hidden"
      animate="visible"
      variants={heroVariants}
    >
      <div className="hero-content">
        <motion.img 
          src={my_image} 
          alt="Lakshya Dhingra" 
          className="hero-img"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Hi, I'm <span className="highlight">Lakshya Dhingra</span>
        </motion.h1>
        <motion.h2 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Full Stack Developer
        </motion.h2>
        <motion.p 
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Building innovative web applications with React, Node.js, and modern technologies
        </motion.p>
        <motion.div 
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <a href="#projects" className="cta-primary">View My Work</a>
          <a href="#contact" className="cta-secondary">Get In Touch</a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
