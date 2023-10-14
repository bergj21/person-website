import React, { useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import pdf from "../assets/resume.pdf";

library.add(faGithub);

function Header() {
  const [isActiveHamburger, setIsActiveHamburger] = useState(false);

  const toggleActiveHamburger = () => {
    setIsActiveHamburger(!isActiveHamburger);
  };
  return (
    <header className="nav-bar">
      <h1 className="nav-title">John Berg</h1>
      <div className={`link-btns ${isActiveHamburger ? "active" : ""}`}>
        <ul className="nav-menu">
          <li className="nav-item">
            <a
              href="https://github.com/bergj21"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="icon"
              ></FontAwesomeIcon>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.linkedin.com/in/john-berg-0a3470259?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bup9vzNZlR2KCThY4KqKOtQ%3D%3D"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="icon"
              ></FontAwesomeIcon>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="mailto: johnberg2021@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <p>Email</p>
            </a>
          </li>
          <li className="nav-item">
            <a href={pdf} target="_blank" rel="noreferrer">
              <p>Resume</p>
            </a>
          </li>
        </ul>
      </div>

      <div
        className={`hamburger ${isActiveHamburger ? "active" : ""}`}
        onClick={toggleActiveHamburger}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
}

export default Header;
