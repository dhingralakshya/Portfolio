import React from "react";

function AllSkills(props) {
  const skills = document.querySelectorAll('.skill');

  skills.forEach(skill => {
    skill.addEventListener('mouseenter', () => {
      skills.forEach(s => {
        if (s !== skill) s.classList.add('dimmed');
      });
    });

    skill.addEventListener('mouseleave', () => {
      skills.forEach(s => s.classList.remove('dimmed'));
    });
});
  return (
    <div class="skill">
      {props.icon}
      <h6>{props.skill}</h6>
    </div>
  );
}

export default AllSkills;
