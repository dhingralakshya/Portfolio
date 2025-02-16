import React from "react";
import NavBar from "./NavBar";
import MenuIcon from "@mui/icons-material/Menu";
import AnimatedText from "./AnimatedText";
import {motion} from "framer-motion";

const navVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const navContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, 
      delayChildren: 0.6,   
    },
  },
};

const navItem = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function Header() {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div class="header" id="about-me">
        <div class="profile_name"><AnimatedText text="ᒪᗩKᔕᕼYᗩ ᗪᕼIᑎGᖇᗩ"></AnimatedText></div>
        <div class="hamburger-menu" onClick={() => setOpen(!isOpen)}>
          <MenuIcon />
        </div>
        <motion.ul class={`topdiv ${isOpen ? "active" : ""}`}
          variants={navContainer}
          initial="hidden"
          animate="visible"
        >
          {[
            { id: "#about-me", section: "About" },
            { id: "#skills", section: "Skills" },
            { id: "#projects", section: "Projects" },
            { id: "#contact", section: "Contact" },
          ].map((item, index) => (
            <motion.li key={index} variants={navItem}>
          <NavBar id={item.id} section={item.section} />
          </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.nav>
  );
}

export default Header;
