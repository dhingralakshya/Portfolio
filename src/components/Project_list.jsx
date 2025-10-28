import React from "react";
import "./styles/Project.css";

function Project_List(props) {
  return (
    <div className="project">
      <div className="project-image">
        <a href={props.weblink} target="_blank" rel="noopener noreferrer">
          <img 
            className="project-img" 
            src={props.image} 
            alt={props.name}
            loading="lazy"
          />
        </a>
      </div>
      <h2>{props.name}</h2>
      <p>{props.desc}</p>
      <div className="project-actions">
        <a href={props.weblink} target="_blank" rel="noopener noreferrer">
          <button className="git">View on GitHub</button>
        </a>
        {props.liveLink && (
          <a href={props.liveLink} target="_blank" rel="noopener noreferrer">
            <button className="live-demo">Live Demo</button>
          </a>
        )}
      </div>
    </div>
  );
}

export default Project_List;
