import React from "react";
import AnimatedDiv from "./AnimatedDiv";
import "./styles/About.css";

function About() {
  return (
    <AnimatedDiv className="about" id="about">
      <div className="about-content">
        <h1>About Me</h1>
        
        <div className="about-story">
          <h2>My Journey</h2>
          <p>
            My journey into software development started with curiosity about how applications work behind the scenes. What began as tinkering with HTML and CSS evolved into a passion for building full-stack solutions that solve real-world problems. I love the challenge of transforming complex requirements into elegant, user-friendly applications.
          </p>
        </div>

        <div className="about-approach">
          <h2>What Drives Me</h2>
          <p>
            I believe great software is built at the intersection of clean code and intuitive design. Whether I'm architecting a backend API or crafting a responsive frontend, I focus on writing maintainable code that scales. I'm constantly learning—from exploring new frameworks to understanding better design patterns—because technology never stops evolving, and neither should we.
          </p>
        </div>

        <div className="about-interests">
          <h2>Beyond Code</h2>
          <p>
            When I'm not coding, you'll find me exploring open-source projects, participating in hackathons, or diving into technical blogs. I'm particularly fascinated by document intelligence systems and AI integration—areas I've been exploring through my recent projects. I also enjoy collaborating with other developers and sharing knowledge through code reviews and pair programming sessions.
          </p>
        </div>

        <div className="about-values">
          <h2>My Approach</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Problem Solver</h3>
              <p>I approach challenges methodically, breaking complex problems into manageable solutions</p>
            </div>
            <div className="value-card">
              <h3>Continuous Learner</h3>
              <p>Always exploring new technologies and best practices to improve my craft</p>
            </div>
            <div className="value-card">
              <h3>Team Player</h3>
              <p>I thrive in collaborative environments where ideas are shared and refined together</p>
            </div>
            <div className="value-card">
              <h3>Quality Focused</h3>
              <p>I believe in writing clean, maintainable code with proper testing and documentation</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedDiv>
  );
}

export default About;
