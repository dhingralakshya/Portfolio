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
          A BTech CSE student at KIIT University, skilled in C, Python, Java,
          HTML, CSS, JavaScript, and Bootstrap. Developed projects like a unit
          conversion webpage, Twitter clone, and AI bot integrating ChatGPT with
          Discord. Keen interest in coding, web development, sports news, and
          gaming trends. Passionate about technology and eager to continuously
          learn and expand knowledge.
        </p>
      </div>
    
    </AnimatedDiv>
  );
}

export default About;
