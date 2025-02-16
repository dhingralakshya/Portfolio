import React from "react";

function NavBar(props) {
  return (
    <a class="topmenu" href={props.id}>
      {props.section}
    </a>
  );
}

export default NavBar;
