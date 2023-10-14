import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { library } from '@fortawesome/fontawesome-svg-core';

import pdf from '../assets/resume.pdf';


library.add(faGithub);


function Header() {
    return (
      <header className="nav-bar">
        <h1 className="nav-title">John Berg</h1>
        <ul className="nav-menu">
          <li>
            <a href="https://github.com/bergj21" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="icon"></FontAwesomeIcon></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/john-berg-0a3470259?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bup9vzNZlR2KCThY4KqKOtQ%3D%3D" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className="icon"></FontAwesomeIcon></a>
          </li>
          <li>
            <a href="mailto: johnberg2021@gmail.com" target="_blank" rel="noreferrer"><p>Email</p></a>
          </li>
          <li>
            <a href={pdf} target="_blank" rel="noreferrer"><p>Resume</p></a>
          </li>
        </ul>
      </header>
    );
}

export default Header;