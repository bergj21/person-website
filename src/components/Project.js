import React from "react"

let img = require("../assets/github-mark.png");

function Project(props) {
    return (
      <div className="project-container">
        <div className="proj-header">
          <h1>{props.title}</h1>
          <a href={props.link} target="_blank" rel="noreferrer"><img className="img" src={img} alt=""/></a>
        </div>
        <div className="proj-body">
          <p>{props.description}</p>
          <div className="proj-footer">
            <p1>Languages, Frameworks, Tools:</p1>
            {props.langs.map((lang, index) => (
              <span className="proj-lang" key={index}>{lang}</span>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Project;