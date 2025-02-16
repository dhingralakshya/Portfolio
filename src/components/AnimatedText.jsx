import React from "react";
import {motion} from "framer-motion";


    const AnimatedText = (props) => {
        const textVariants = {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 2 } },
          };
        

    return(
        <motion.div
            variants={textVariants}
            >
            {props.text}
        </motion.div>
    )
}

export default AnimatedText;