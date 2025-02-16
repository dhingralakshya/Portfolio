import React from "react";
import {motion} from "framer-motion";

const divVariants={
    hidden:{opacity:0,y:200},
    visible:{opacity:1,y:0, transition:{duration:2}}
  };

const AnimatedDiv=({children,initial="hidden", animate="visible", className=""})=>{
    return(
        <motion.div
        variants={divVariants}
        initial={initial}
        animate={animate}
        class={className}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedDiv;