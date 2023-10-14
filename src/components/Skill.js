import React from "react"

function Skill(props) {
  return (
    <span className="skill">
        <img src={props.src} alt=""/>
        <span >{props.skill}</span>
    </span>
  );
}

export default Skill;
