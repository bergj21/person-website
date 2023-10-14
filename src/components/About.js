import React from "react"
import Typewriter from 'typewriter-effect'

let image1 = require("../assets/about/nyc.jpg");
let image2 = require("../assets/about/jack.png");

function About() {
    return (
      <div className="about-section">
        <div className="description">
          <h1>Hi, my name is</h1>
          <h2>John Berg.</h2>
          <div className="bio">
              <p>I am a Computer Science and Mathematics undergraduate at Tufts University with a passion for </p>
              <span className="typewriter">
                <Typewriter
                  options={{ loop: true, }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("problem solving.")
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString("machine learning.")
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString("full stack development.")
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString("engineering.")
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString("cybersecurity.")
                      .pauseFor(1500)
                      .deleteAll()
                      .start();
                  }}
                />
              </span>
          </div>
          
        </div>
        <div className="img-container">
          <div className="img-wrapper">
            <img className="img" src={image1} alt=""/>
            <img className="img prof" src={image2} alt=""/>
          </div>
        </div>
      </div>
    );
}

export default About;