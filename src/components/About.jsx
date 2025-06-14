import React from "react";
import my_image from "./images/my_image.jpg";
import AnimatedDiv from "./AnimatedDiv";

function About() {
  return (
    <AnimatedDiv className="about" id="about">
      <img className="myimg" src={my_image} alt="Lakshya Dhingra - Full Stack Developer" />
      <div className="details">
        <h1>Hi, I'm Lakshya Dhingra!</h1>
        <p>
          I’m a full-stack developer with a passion for building responsive and scalable web applications using React, Node.js, Express, MongoDB, and PostgreSQL. With a strong foundation in C, Java, and Python, I enjoy turning complex problems into clean, efficient solutions backed by intuitive user interfaces.

Currently, I’m interning at Proquo.tech, where I’m helping develop a procurement automation platform using modern web technologies. My personal projects—like KeepDesk, a powerful note-taking app, and a Real-Time Twitter Sentiment Analyzer—reflect my curiosity, creativity, and commitment to continuous growth through hands-on learning.
        </p>
      </div>
    </AnimatedDiv>
  );
}

export default About;
