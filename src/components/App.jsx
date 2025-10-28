import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import Experience from "./Experience";

function App() {
  return (
    <div className="main-content">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skill />
      <Project />
    </div>
  );
}

export default App;
