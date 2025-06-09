import React from "react";
import my_image from "./images/my_image.jpg";
import AnimatedDiv from "./AnimatedDiv";


function About() {
    
  return (
    <AnimatedDiv className="about">
    
      <img class="myimg" src={my_image} alt="Profile" />
      <div class="details">
        <h1>Hi, I'm Lakshya Dhingra!</h1>
        <p>
        I am a passionate full-stack developer with expertise in building responsive and user-friendly applications using React, Node.js, and MongoDB. Skilled in C, Java, and Python, I enjoy solving complex problems and delivering innovative solutions. With experience in projects like KeepDesk and a to-do list app, I continually explore new technologies to enhance my craft.
        </p>
      </div>
    
    </AnimatedDiv>
  );
}

export default About;
