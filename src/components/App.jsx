import React from "react";
import Header from "./Header";
import About from "./About";
import Skill from "./Skill";
import Project from "./Project";

function App() {
  return (
    <div className="main-content">
      <Header />
      <About />
      <Skill />
      <Project />
    </div>
  );
}

export default App;
