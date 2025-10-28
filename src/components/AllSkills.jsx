import React from "react";
import "./styles/Skill.css";

function AllSkills(props) {
  return (
    <div 
      className={`skill ${props.isAnyHovered && !props.isHovered ? 'dimmed' : ''}`}
      onMouseEnter={() => props.onHoverChange(props.skill, true)}
      onMouseLeave={() => props.onHoverChange(props.skill, false)}
    >
      {props.icon}
      <h6>{props.skill}</h6>
    </div>
  );
}

export default AllSkills;
