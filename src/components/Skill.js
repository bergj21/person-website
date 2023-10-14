import React from "react"

function Skill(props) {
  return (
    <div className="skill">
        <img src={props.src} alt=""/>
        <span >{props.skill}</span>
    </div>
  );
}

export default Skill;
