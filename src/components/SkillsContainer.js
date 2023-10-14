import React from "react"
import languages from "../skills-data";
import Skill from "./Skill"



function SkillsContainer() {
  const lan = languages.map(item => {
    return <Skill 
              string={item.skill}
              {...item}
          />
    })

    return (
      <div className="skills-container">
        <h1>Skills</h1>
        <h2>Languages, Frameworks, & Tools</h2>
        <div className="languages-container">
          {lan}
        </div>
      </div>
    );
}

export default SkillsContainer;