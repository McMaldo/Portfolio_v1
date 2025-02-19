import React from "react";
import './portfolio_v1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGitlab, faLinkedin, faDev } from '@fortawesome/free-brands-svg-icons';

import Contacts from "../component/contacts/Contacs";
import AboutMe from "../component/aboutMe/AboutMe";
import SkillSet from "../component/skillSet/SkillSet";
import Portfolio from "../component/portfolio/Portfolio";

export default function Portfolio_v1() {
  return (
    <div className='portfolio'>
      <section className='left'>
        <div className="leftContent">
          <div className="avatar"></div>
          <h2>McMaldo</h2>
          <h5>Front-end Developer</h5>
          <div className="spkLangs">
            <div className="spkLangTag">
              <h5>Spanish</h5>
              <img src="/Portfolio_v1/icons/SpanishFlag.webp" alt=""/>
            </div>
            <div className="spkLangTag">
              <img src="/Portfolio_v1/icons/EnglishFlag.webp" alt=""/>
              <h5>English</h5>
            </div>
          </div>
          <div className="accounts">
            <a href="https://github.com/McMaldo"><FontAwesomeIcon icon={faGithub}/></a>
            <a href="https://gitlab.com/maldonado.ignacio.pablo"><FontAwesomeIcon icon={faGitlab}/></a>
            <a href="https://www.linkedin.com/in/pablo-ignacio-maldonado"><FontAwesomeIcon icon={faLinkedin}/></a>
            <a href="https://dev.to/mcmaldo"><FontAwesomeIcon icon={faDev}/></a>
          </div>
          <Contacts/>
        </div>
      </section>
      <section className='right'>
        <header>
          <div className='heading'>
            <h1 className='gradient'>Web Developer</h1>
            <div className='extras gradient'>
              <span>Front-end</span>
              <span>Back-end</span>
              <span>Design</span>
            </div>
          </div>
          <nav>
            <button onClick={() => document.querySelector(`#SkillSet`).scrollIntoView({behavior: 'smooth'})}>Skill Set</button>
            <button onClick={() => document.querySelector(`#Portfolio`).scrollIntoView({behavior: 'smooth'})}>Portfolio</button>
            <button onClick={() => document.querySelector(`#AboutMe`).scrollIntoView({behavior: 'smooth'})}>About Me</button>
          </nav>
        </header>
        <main>
          <h3 id="SkillSet">Skill Set</h3>
          <SkillSet/>
          <h3 id="Portfolio">Portfolio</h3>
          <Portfolio/>
          <h3 id="AboutMe">About Me</h3>
          <AboutMe/>
        </main>
      </section>
    </div>
  )
}