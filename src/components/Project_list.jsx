import React from "react";

function Project_list(props) {
  return (
    <div class="project">
      <div class="project-image">
        <a href={props.weblink}>
          <img class="twitter" src={props.image} width="330" height="200" />
        </a>
      </div>
      <h2>{props.name}</h2>
      <p>{props.desc}</p>
      <a href={props.weblink} target="_blank">
        <button class="git">GitHub</button>
      </a>
    </div>
  );
}

export default Project_list;
