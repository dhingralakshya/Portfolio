import React from "react";

function AllSkills(props) {
  return (
    <div class="skill">
      {props.icon}
      <h6>{props.skill}</h6>
    </div>
  );
}

export default AllSkills;
