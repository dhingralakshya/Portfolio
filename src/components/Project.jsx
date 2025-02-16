import React from "react";
import Project_list from "./Project_list";
import todolist from "./images/todolist.png";
import keepdesk from "./images/keepdesk.png";
import { useInView } from "react-intersection-observer";
import {motion} from "framer-motion";

const projectVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function Project() {
  const { ref, inView } = useInView({
      triggerOnce: false,
      threshold: 0.3, 
    });
  return (
    <div class="projects" id="projects">
      <h1>Projects</h1>
      <motion.div ref={ref} variants={projectVariants} initial="hidden" animate={inView?"visible":"hidden"} class="all-projects">
        <Project_list
          weblink="https://github.com/dhingralakshya/To-Do-List-Web-Application"
          name="To-Do-List Web Application"
          desc="A sleek to-do list web app built with HTML, CSS, JavaScript, and Node.js for efficient task management and a smooth user experience."
          image={todolist}
        />
        <Project_list
          weblink="https://github.com/dhingralakshya/KeepDesk"
          name="KeepDesk"
          desc="KeepDesk is a desktop note-taking app built with React, Node.js/Express, and MongoDB for seamless and organized note management."
          image={keepdesk}
        />
      </motion.div>
    </div>
  );
}

export default Project;
