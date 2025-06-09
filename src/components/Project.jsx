import React, { useEffect, useRef, useState } from "react";
import Project_list from "./Project_list";
import todolist from "./images/todolist.png";
import keepdesk from "./images/keepdesk.png";
import sentiment from "./images/senitment.png";
import {motion} from "framer-motion";

const projectVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.4
    }
  },
};
const childVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};
function Project() {
  const [scrollDir, setScrollDir] = useState("down");
  const [inView, setInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const lastScrollY = useRef(window.scrollY);
  const sectionRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const currY = window.scrollY;
      setScrollDir(currY > lastScrollY.current ? "down" : "up");
      lastScrollY.current = currY;

      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const nowInView = rect.top < window.innerHeight * 0.7 && rect.bottom > 0;
        setInView(nowInView);
        if (!nowInView && hasAnimated) {
          setHasAnimated(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated]);
  useEffect(() => {
    if (inView && scrollDir === "down" && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, scrollDir, hasAnimated]);
  return (
    <div className="projects" id="projects"  ref={sectionRef}>
      <h1>Projects</h1>
      <motion.div animate={hasAnimated ? "visible" : "hidden"} variants={projectVariants} initial="hidden" className="all-projects">
        <motion.div variants={childVariants}>
          <Project_list
            weblink="https://github.com/dhingralakshya/To-Do-List-Web-Application"
            name="To-Do-List Web Application"
            desc="A sleek to-do list web app built with HTML, CSS, JavaScript, and Node.js for efficient task management and a smooth user experience."
            image={todolist}
          />
        </motion.div>
        <motion.div variants={childVariants}>
          <Project_list
            weblink="https://github.com/dhingralakshya/KeepDesk"
            name="KeepDesk"
            desc="KeepDesk is a desktop note-taking app built with React, Node.js/Express, and MongoDB for seamless and organized note management."
            image={keepdesk}
          />
        </motion.div>
        <motion.div variants={childVariants}>
          <Project_list
            weblink="https://github.com/dhingralakshya/Real-Time-Sentiment-Analysis"
            name="Real-Time Twitter Sentiment Analyzer"
            desc="Real-time sentiment analysis of tweets based on your chosen keyword."
            image={sentiment}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Project;
